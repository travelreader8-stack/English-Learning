#!/usr/bin/env python3
"""
Hybrid TTS renderer
====================

中文 → 腾讯云 TTS（自然、不机械）
英文 + IPA → Azure TTS（母语发音、phoneme tag 支持）

每行脚本被切成 zh / en / ipa 子段、独立合成、然后 ffmpeg 拼接。
时间轴记录每行（不是每子段）的 start/end，供 web 端字幕同步。

需要：
  - AZURE_SPEECH_KEY / AZURE_SPEECH_REGION
  - TENCENT_SECRET_ID / TENCENT_SECRET_KEY / TENCENT_REGION (默认 ap-beijing)
  - 复用 azure_tts_render 里：split_lang_segments / clean_slashes_for_tts / add_inline_breaks /
    apply_stress_emphasis / parse_script / SCENE_STYLES

用法：
    python3 pipeline/hybrid_tts_render.py pipeline/scripts/ web/audio/ --only 1
"""
from __future__ import annotations

import argparse
import base64
import io
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

from pydub import AudioSegment

try:
    from dotenv import load_dotenv
except ImportError:
    load_dotenv = None


def load_project_env() -> None:
    """Load local project env files without overriding already-exported values."""
    if load_dotenv is None:
        return
    root = Path(__file__).resolve().parents[1]
    for env_path in [
        root / ".env.local",
        root / ".env",
        root / "web" / ".env.local",
        root / "pipeline" / ".env",
    ]:
        if env_path.exists():
            load_dotenv(env_path, override=False)


load_project_env()

# 复用共享 TTS 工具（解析 / SSML 片段）
sys.path.insert(0, str(Path(__file__).parent))
from _tts_common import (  # type: ignore
    parse_script,
    split_lang_segments,
    clean_slashes_for_tts,
    add_inline_breaks,
    apply_stress_emphasis,
    scene_voice_overrides,
    xml_escape,
)

# 腾讯云 SDK
try:
    from tencentcloud.common import credential
    from tencentcloud.common.profile import client_profile, http_profile
    from tencentcloud.tts.v20190823 import tts_client, models as tts_models
except ImportError:
    sys.exit("缺少腾讯云 SDK：pip install tencentcloud-sdk-python")

try:
    from tqdm import tqdm
except ImportError:
    def tqdm(x, **k):
        return x


# ─── 角色 / 声音映射（A 老师 / B 学生 都用女声、用风格区分） ──
VOICES = {
    "A": {
        # A 老师：腾讯专业梓欣（中文专业感）+ Azure Aria（英文母语女声）
        "tencent_id": 602005,
        "tencent_speed": 0,        # -2~2、0 = 正常
        "tencent_volume": 5,       # 0~10
        "azure_en": "en-US-AriaNeural",
        "azure_rate_en": "-5%",
    },
    "B": {
        # B 学生：腾讯智雯（男声、配音感）+ Azure Guy（英文男声、跟中文男声匹配）
        "tencent_id": 501007,
        "tencent_speed": 0,
        "tencent_volume": 5,
        "azure_en": "en-US-GuyNeural",
        "azure_rate_en": "+0%",
    },
}


# ─── 腾讯云客户端（lazy init） ───────────────────────
_tx_client = None
def _get_tencent_client():
    global _tx_client
    if _tx_client is not None:
        return _tx_client
    sid = os.environ.get("TENCENT_SECRET_ID")
    skey = os.environ.get("TENCENT_SECRET_KEY")
    region = os.environ.get("TENCENT_REGION", "ap-beijing")
    if not sid or not skey:
        sys.exit("环境变量 TENCENT_SECRET_ID / TENCENT_SECRET_KEY 未设置")
    cred = credential.Credential(sid, skey)
    hp = http_profile.HttpProfile(); hp.endpoint = "tts.tencentcloudapi.com"
    cp = client_profile.ClientProfile(); cp.httpProfile = hp
    _tx_client = tts_client.TtsClient(cred, region, cp)
    return _tx_client


def tencent_synth(text: str, voice_id: int, speed: int = 0, volume: int = 5, sample_rate: int = 16000) -> bytes:
    """腾讯云 TTS：plain text 进、WAV bytes 出。"""
    client = _get_tencent_client()
    req = tts_models.TextToVoiceRequest()
    req.Text = text
    req.SessionId = ""
    req.ModelType = 1
    req.VoiceType = voice_id
    req.Speed = speed
    req.Volume = volume
    req.ProjectId = 0
    req.SampleRate = sample_rate
    # 6 系列 voice 支持 24kHz、其他用 16kHz
    for attempt in range(3):
        try:
            resp = client.TextToVoice(req)
            if resp.Audio:
                return base64.b64decode(resp.Audio)
            raise RuntimeError("腾讯云返回空 audio")
        except Exception as e:
            msg = str(e)
            # 退避到 16k 再试
            if "SampleRate" in msg and req.SampleRate == 24000:
                req.SampleRate = 16000
                continue
            if attempt < 2:
                time.sleep(1.5 * (attempt + 1))
                continue
            raise


# ─── Azure REST TTS ─────────────────────────────────
_azure_last_request_at = 0.0


def _retry_after_seconds(headers) -> float | None:
    raw = headers.get("Retry-After") if headers else None
    if not raw:
        return None
    try:
        return max(0.0, float(raw))
    except ValueError:
        return None


def _azure_synth(ssml: str, key: str, region: str) -> bytes:
    """Azure TTS via REST, with throttling/backoff for many short EN segments."""
    global _azure_last_request_at

    url = f"https://{region}.tts.speech.microsoft.com/cognitiveservices/v1"
    data = ssml.encode("utf-8")
    headers = {
        "Ocp-Apim-Subscription-Key": key,
        "Content-Type": "application/ssml+xml; charset=utf-8",
        "X-Microsoft-OutputFormat": "audio-24khz-96kbitrate-mono-mp3",
        "User-Agent": "English-Learning-HybridTTS",
    }
    max_attempts = int(os.environ.get("AZURE_TTS_MAX_ATTEMPTS", "6"))
    min_interval = float(os.environ.get("AZURE_TTS_MIN_INTERVAL_SEC", "0.4"))
    retryable = {408, 409, 429, 500, 502, 503, 504}

    for attempt in range(max_attempts):
        elapsed = time.monotonic() - _azure_last_request_at
        if elapsed < min_interval:
            time.sleep(min_interval - elapsed)

        req = urllib.request.Request(url, data=data, headers=headers, method="POST")
        try:
            with urllib.request.urlopen(req, timeout=60) as resp:
                _azure_last_request_at = time.monotonic()
                audio = resp.read()
                if audio:
                    return audio
                raise RuntimeError("Azure TTS 返回空 audio")
        except urllib.error.HTTPError as e:
            _azure_last_request_at = time.monotonic()
            body = e.read().decode("utf-8", errors="replace")
            if e.code in retryable and attempt < max_attempts - 1:
                wait = _retry_after_seconds(e.headers)
                if wait is None:
                    wait = min(45.0, 2.0 * (attempt + 1) ** 2)
                print(f"  ↻ Azure TTS HTTP {e.code}，{wait:.1f}s 后重试")
                time.sleep(wait)
                continue
            raise RuntimeError(f"Azure TTS 失败：HTTP {e.code} — {body[:240]}") from e
        except urllib.error.URLError as e:
            _azure_last_request_at = time.monotonic()
            if attempt < max_attempts - 1:
                wait = min(30.0, 1.5 * (attempt + 1) ** 2)
                print(f"  ↻ Azure TTS 网络错误，{wait:.1f}s 后重试：{e}")
                time.sleep(wait)
                continue
            raise RuntimeError(f"Azure TTS 网络错误：{e}") from e

    raise RuntimeError("Azure TTS 超过最大重试次数")


def build_azure_ssml_for_en(text: str, voice_name: str, rate: str) -> str:
    """构造英文段 SSML（含 stress emphasis + inline breaks）"""
    cleaned = clean_slashes_for_tts(text, "en")
    safe = xml_escape(cleaned)
    safe = apply_stress_emphasis(safe)
    safe = add_inline_breaks(safe, "en")
    return (
        '<speak version="1.0" '
        'xmlns="http://www.w3.org/2001/10/synthesis" '
        'xmlns:mstts="http://www.w3.org/2001/mstts" '
        'xml:lang="en-US">'
        f'<voice name="{voice_name}">'
        f'<prosody rate="{rate}">{safe}</prosody>'
        f'</voice></speak>'
    )


def build_azure_ssml_for_ipa(ipa: str, voice_name: str) -> str:
    """IPA 段 SSML：phoneme tag + 200ms 前停顿 + 稍慢"""
    ipa_safe = xml_escape(ipa)
    return (
        '<speak version="1.0" '
        'xmlns="http://www.w3.org/2001/10/synthesis" '
        'xmlns:mstts="http://www.w3.org/2001/mstts" '
        'xml:lang="en-US">'
        f'<voice name="{voice_name}">'
        f'<break time="200ms"/>'
        f'<prosody rate="-10%">'
        f'<phoneme alphabet="ipa" ph="{ipa_safe}">{ipa_safe}</phoneme>'
        f'</prosody></voice></speak>'
    )


def _bytes_to_audio_segment(data: bytes, fmt: str) -> AudioSegment:
    return AudioSegment.from_file(io.BytesIO(data), format=fmt)


def synth_segment(lang: str, seg_text: str, speaker_cfg: dict, scene: str,
                  azure_key: str, azure_region: str) -> AudioSegment:
    """合成单个子段、返回 AudioSegment（已统一采样）"""
    if lang == "zh":
        # 中文段：腾讯云、plain text
        # 用 add_inline_breaks 没用（腾讯不读 SSML）—— 但腾讯会用标点本身做停顿
        # 用 clean_slashes_for_tts 把斜杠先处理掉（避免被念）
        cleaned = clean_slashes_for_tts(seg_text, "zh")
        # 腾讯不读 SSML、所以去掉 BREAK_SLASH 占位符（不能留）
        cleaned = cleaned.replace("\x02", "、")  # 字母直连斜杠 → 顿号、让腾讯自然停顿
        cleaned = cleaned.replace("\x01", "——")  # 长破折号占位 → 还原（add_inline_breaks 用）
        try:
            wav_bytes = tencent_synth(
                cleaned,
                voice_id=speaker_cfg["tencent_id"],
                speed=speaker_cfg["tencent_speed"],
                volume=speaker_cfg["tencent_volume"],
                sample_rate=24000,  # 失败会自动降到 16k
            )
            return _bytes_to_audio_segment(wav_bytes, "wav")
        except Exception as e:
            raise RuntimeError(f"腾讯云 zh 合成失败：{e}\n文本：{cleaned[:80]}")
    if lang == "en":
        ssml = build_azure_ssml_for_en(seg_text, speaker_cfg["azure_en"], speaker_cfg["azure_rate_en"])
        mp3 = _azure_synth(ssml, azure_key, azure_region)
        return _bytes_to_audio_segment(mp3, "mp3")
    if lang == "ipa":
        ssml = build_azure_ssml_for_ipa(seg_text, speaker_cfg["azure_en"])
        mp3 = _azure_synth(ssml, azure_key, azure_region)
        return _bytes_to_audio_segment(mp3, "mp3")
    raise ValueError(f"未知 lang：{lang}")


def render_lesson(script_path: Path, out_mp3: Path, timeline_out: Path,
                  azure_key: str, azure_region: str, inter_line_pause_ms: int = 350) -> dict:
    text = script_path.read_text(encoding="utf-8")
    parsed_lines = parse_script(text)
    if not parsed_lines:
        raise RuntimeError(f"脚本为空：{script_path}")

    inter_pause = AudioSegment.silent(duration=inter_line_pause_ms)
    inter_subseg_pause = AudioSegment.silent(duration=80)  # 同行内子段间小停（避免拼接砰一下）
    final: AudioSegment | None = None
    timeline_lines: list[dict] = []

    for i, item in enumerate(tqdm(parsed_lines, desc=script_path.name, leave=False)):
        speaker = item["speaker"]
        content = item["content"]
        scene = item["scene"]
        scene_meta = item["scene_meta"]
        cfg = VOICES.get(speaker)
        if not cfg:
            print(f"⚠️ 未知 speaker={speaker}、跳过")
            continue
        lang_segments = split_lang_segments(content)
        if not lang_segments:
            continue

        # 合成各子段：任何失败都让本课失败，避免静默产出缺英文的音轨。
        line_audio: AudioSegment | None = None
        for j, (lang, seg_text) in enumerate(lang_segments):
            # 跳过纯标点 zh 子段（腾讯云会 InvalidText 拒掉）
            if lang == "zh" and not re.search(r"[一-鿿\w]", seg_text):
                continue
            try:
                sub = synth_segment(lang, seg_text, cfg, scene, azure_key, azure_region)
            except Exception as e:
                raise RuntimeError(f"子段失败 [{lang}] \"{seg_text[:80]}\" — {e}") from e
            if line_audio is None:
                line_audio = sub
            else:
                # 同行多子段：80ms 桥接停顿（避免拼接 click 噪）
                line_audio = line_audio + inter_subseg_pause + sub

        if line_audio is None:
            continue

        # 拼到总轨
        if final is None:
            line_start_ms = 0
            final = line_audio
        else:
            final = final + inter_pause
            line_start_ms = len(final)
            final = final + line_audio
        line_end_ms = len(final)

        timeline_lines.append({
            "i": i,
            "start": round(line_start_ms / 1000, 3),
            "end": round(line_end_ms / 1000, 3),
            "speaker": speaker,
            "scene": scene,
            "scene_meta": scene_meta,
            "segments": [{"lang": l, "text": t} for l, t in lang_segments],
        })

    if final is None:
        raise RuntimeError(f"无任何成功段落：{script_path}")

    out_mp3.parent.mkdir(parents=True, exist_ok=True)
    final.export(out_mp3, format="mp3", bitrate="96k")

    timeline = {
        "total_duration": round(len(final) / 1000, 3),
        "lines": timeline_lines,
    }
    return timeline


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("script_dir", type=Path)
    ap.add_argument("audio_dir", type=Path)
    ap.add_argument("--only", type=int, help="只跑指定 lesson id")
    ap.add_argument("--skip-existing", action="store_true")
    args = ap.parse_args()

    azure_key = os.environ.get("AZURE_SPEECH_KEY")
    azure_region = os.environ.get("AZURE_SPEECH_REGION", "eastus")
    if not azure_key:
        sys.exit("AZURE_SPEECH_KEY 未设置")
    # 触发腾讯 client 初始化（早期 fail-fast）
    _get_tencent_client()

    scripts = sorted(args.script_dir.glob("lesson_*.md"))
    if args.only is not None:
        scripts = [p for p in scripts if p.stem in (f"lesson_{args.only}", f"lesson_{args.only}.script")]
        if not scripts:
            sys.exit(f"找不到 lesson_{args.only}.md")

    fails = []
    for sp in tqdm(scripts, desc="Hybrid TTS"):
        m = re.match(r"lesson_(\d+)", sp.stem)
        if not m:
            continue
        lid = int(m.group(1))
        out_mp3 = args.audio_dir / f"lesson_{lid}.mp3"
        timeline_out = args.audio_dir / f"lesson_{lid}.timeline.json"
        if args.skip_existing and out_mp3.exists() and timeline_out.exists():
            continue
        try:
            timeline = render_lesson(sp, out_mp3, timeline_out, azure_key, azure_region)
            timeline["lesson_id"] = lid
            timeline_out.write_text(
                json.dumps(timeline, ensure_ascii=False, indent=2), encoding="utf-8"
            )
            print(f"✓ Lesson {lid}: {timeline['total_duration']}s")
        except Exception as e:
            fails.append((lid, str(e)))
            print(f"❌ Lesson {lid}: {e}")

    if fails:
        print(f"\n❌ 失败 {len(fails)} 课：{[f[0] for f in fails]}")
        sys.exit(1)
    print(f"\n✅ 全部完成 → {args.audio_dir}")


if __name__ == "__main__":
    main()
