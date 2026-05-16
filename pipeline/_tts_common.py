#!/usr/bin/env python3
"""
TTS 共享工具（脚本解析 + SSML 片段构造）
=========================================

被 hybrid_tts_render.py 复用。本文件不再提供 main() 入口；
完整渲染走 hybrid（中文腾讯云 + 英文 / IPA Azure），见 pipeline/hybrid_tts_render.py。

公共导出：
  - parse_script(text) — 解析 ## SCENE 标记 + A:/B: 行
  - split_lang_segments(text) — 把行切成 [(lang, text)]，lang ∈ {zh, en, ipa}
  - clean_slashes_for_tts(text, lang) — 去 / 占位符 / 语法对比
  - add_inline_breaks(text, lang) — 行内标点 → SSML break tag
  - apply_stress_emphasis(text) — out-SIDE 大写音节 → prosody pitch+volume
  - scene_voice_overrides(scene, speaker) — 场景级 style/rate 覆盖
  - SCENE_STYLES / VOICES 字典
  - build_ssml(speaker, segments, scene) — 旧 Azure 全行 SSML（hybrid 不用、test 仍依赖）
"""
from __future__ import annotations

import os
import re
import sys
from pathlib import Path
from xml.sax.saxutils import escape as xml_escape

try:
    from tqdm import tqdm
except ImportError:
    def tqdm(x, **k):
        return x


VOICES = {
    "A": {
        # 老师角色 — 沉稳男声（专业播音员调，最适合英语老师）
        "zh": "zh-CN-YunyangNeural",
        "en": "en-US-AndrewNeural",
        # 默认 style；具体 scene 在 SCENE_STYLES 里 override
        "zh_style": "narration-professional",
        "en_style": None,
        "rate_zh": "+0%",
        "rate_en": "-5%",
    },
    "B": {
        # 学生角色 — 少年男声、好奇 / 互动语气
        "zh": "zh-CN-YunxiNeural",
        "en": "en-US-GuyNeural",
        "zh_style": "chat",
        "en_style": None,
        "rate_zh": "+0%",
        "rate_en": "+0%",
    },
}

# ─── 场景级情感 / 语速编排 ─────────────────────────
# Yunyang (A 老师) 可用 style: narration-professional / customerservice / calm / cheerful
# Yunxi (B 学生) 可用 style: chat / cheerful / sad / serious / embarrassed / fearful
# 给每个 scene 在每个 speaker 上配一组 (style, rate)
SCENE_STYLES: dict[str, dict[str, dict]] = {
    "hook":            {"A": {"style": "cheerful",                "rate": "-5%"}},
    "retell":          {"A": {"style": "narration-professional",  "rate": "+0%"}},
    "discuss":         {"A": {"style": "customerservice",         "rate": "+0%"},
                        "B": {"style": "chat",                    "rate": "+2%"}},
    "passage_normal":  {"B": {"style": "serious",                 "rate": "-8%"}},
    "passage_slow":    {"B": {"style": "serious",                 "rate": "-15%"}},
    "vocab":           {"A": {"style": "customerservice",         "rate": "-3%"},
                        "B": {"style": "chat",                    "rate": "+0%"}},
    "grammar":         {"A": {"style": "narration-professional",  "rate": "-2%"}},
    "you_too":         {"A": {"style": "cheerful",                "rate": "+0%"}},
    "outro":           {"A": {"style": "cheerful",                "rate": "+0%"}},
}

def scene_voice_overrides(scene: str, speaker: str) -> dict:
    """返回该 scene + speaker 在 zh 上的 (style, rate) 覆盖；找不到就用默认"""
    return (SCENE_STYLES.get(scene) or {}).get(speaker) or {}


# ─── 行内标点 → break tag ─────────────────────────
# 让句子的语流更有呼吸感、减少机器味
def add_inline_breaks(text: str, lang: str) -> str:
    """
    给中文 / 英文文本插入 break 标签。注意：输入的 text 应该已经被 xml_escape。
    - 「——」/「—」→ 350ms（强停顿）
    - 「：」（解释前）→ 200ms
    - 「？」「！」→ 250ms（句末感情停顿）
    - 「，」「、」→ 100-130ms（短停）
    - 英文：";" → 250ms; ":" → 200ms; "—"→ 350ms
    """
    if not text:
        return text
    # 先把 「——」 / 「—」 用占位符替换、避免后续单字符替换重复触发
    BREAK_LONG = "\x01"  # 占位符 → 最后换成 break
    text = text.replace("——", BREAK_LONG)
    text = text.replace("—",  BREAK_LONG)
    if lang == "zh":
        text = re.sub(r"([！？])", r'\1<break time="250ms"/>', text)
        text = re.sub(r"([：])", r'\1<break time="200ms"/>', text)
        text = re.sub(r"([、])", r'\1<break time="120ms"/>', text)
        text = re.sub(r"([，])", r'\1<break time="130ms"/>', text)
    else:
        text = re.sub(r"([!?])(\s|$)", r'\1<break time="250ms"/>\2', text)
        text = re.sub(r"([;])", r'\1<break time="250ms"/>', text)
        text = re.sub(r"([:])", r'\1<break time="200ms"/>', text)
    # 还原占位符为 「— + 350ms break」
    text = text.replace(BREAK_LONG, '——<break time="350ms"/>')
    # 还原 clean_slashes_for_tts 设的 / 占位符为 280ms break（语法对比 was/were 类）
    text = text.replace(BREAK_SLASH, '<break time="280ms"/>')
    return text

LINE_RE = re.compile(r"^\s*([AB])[:：]\s*(.+)$")
SCENE_RE = re.compile(r"^\s*##\s*SCENE\s*:\s*(\S+)(?:\s+(.+))?$")
EN_TAG_RE = re.compile(r"\[EN\](.+?)\[/EN\]", re.DOTALL)

# IPA 音标：用 /…/ 包起来、内容 1-20 字符、无空格
# 例子：/aɪ/、/i/、/aʊtˈsaɪd/、/ˈaʊtsaɪd/、/θɪŋk/
# 必须至少含一个 IPA 特殊字符或限定在短小写字母（避免错把 "/dev/null" 这种当 IPA）
IPA_CHARS = "aɪeɪaʊɔɪoʊiːuːɑːɔːɜːʌəɪʊɛæɒʃʒθðŋˈˌːˑʔɡɱɹɾɱɲʎ̩̃"
IPA_RE = re.compile(
    r"/([a-zæɑəɛɪɔʊʌʃʒθðŋɡɹɾˈˌːˑʔɱɲʎ̩̃æəɑʊɔˈˌː]{1,20})/"
)

# 中文行里凡是「Lesson 1 / Page 5 / Unit 3 / Chapter 2 / Day 4 / Part 1 / Vol 7」
# 这种「英文标签 + 数字」组合，自动用 [EN] 包起来——让 Azure 用英文音色
# 念「lesson one」，而不是用中文音色误读成「lesson 一」（实测中文 Xiaoxiao 会这么读）。
NUMBER_LABEL_RE = re.compile(
    r"\b(Lesson|Lessons|Page|Pages|Unit|Units|Chapter|Chapters|"
    r"Day|Days|Part|Parts|Track|Tracks|Volume|Vol|No)\s+\d+(?:\.\d+)?\b",
    re.IGNORECASE,
)


def normalize_numbers_for_tts(line: str) -> str:
    """
    把未被 [EN]…[/EN] 保护的「Lesson N / Page N / Unit N / …」
    包成 [EN]Lesson N[/EN]，避免中文音色误读数字。
    已经在 [EN]…[/EN] 内的部分不动。
    """
    # 1) 把已有 [EN] 区段抽出来用占位符代替（避免被二次包）
    placeholders: list[str] = []

    def mask(m: "re.Match[str]") -> str:
        placeholders.append(m.group(0))
        return f"\x00{len(placeholders) - 1}\x00"

    masked = EN_TAG_RE.sub(mask, line)

    # 2) 在剩余文本里找未保护的 "Lesson N" 等，包上 [EN]
    wrapped = NUMBER_LABEL_RE.sub(lambda m: f"[EN]{m.group(0)}[/EN]", masked)

    # 3) 恢复占位符
    return re.sub(r"\x00(\d+)\x00", lambda m: placeholders[int(m.group(1))], wrapped)


def parse_script(text: str) -> list[dict]:
    """返回 [{speaker, content, scene, scene_meta}]，按出现顺序"""
    out = []
    cur_scene = "intro"
    cur_meta: dict = {}
    for ln in text.splitlines():
        s = ln.strip()
        if not s or s.startswith("<!--"):
            continue
        sm = SCENE_RE.match(s)
        if sm:
            cur_scene = sm.group(1).strip()
            cur_meta = {}
            tail = sm.group(2)
            if tail:
                for kv in tail.split():
                    if "=" in kv:
                        k, v = kv.split("=", 1)
                        cur_meta[k.strip()] = v.strip()
            continue
        lm = LINE_RE.match(s)
        if not lm:
            continue
        out.append({
            "speaker": lm.group(1),
            "content": normalize_numbers_for_tts(lm.group(2).strip()),
            "scene": cur_scene,
            "scene_meta": dict(cur_meta),  # 拷贝，避免引用穿透
        })
    return out


def _split_zh_with_ipa(text: str) -> list[tuple[str, str]]:
    """
    在 zh 文本里再切出 IPA 段（/aɪ/、/aʊtˈsaɪd/）、用英文音色 + <phoneme> 朗读。
    """
    out = []
    cursor = 0
    for m in IPA_RE.finditer(text):
        if m.start() > cursor:
            pre = text[cursor:m.start()]
            if pre.strip():
                out.append(("zh", pre))
        out.append(("ipa", m.group(1)))
        cursor = m.end()
    if cursor < len(text):
        rest = text[cursor:]
        if rest.strip():
            out.append(("zh", rest))
    return out or [("zh", text)]


def split_lang_segments(text: str) -> list[tuple[str, str]]:
    """
    把一行文本切成 [(lang, segment)]，lang ∈ {"zh", "en", "ipa"}。
    [EN]…[/EN] 内是英文，/IPA/ 内是音标，其余是中文。
    """
    segments = []
    cursor = 0
    for m in EN_TAG_RE.finditer(text):
        if m.start() > cursor:
            zh_raw = text[cursor:m.start()]
            # 在 zh 区间里再扫一遍、提取 IPA 音标段
            for sub in _split_zh_with_ipa(zh_raw):
                lang, t = sub
                t = t.strip()
                if t:
                    segments.append((lang, t))
        en = m.group(1).strip()
        if en:
            segments.append(("en", en))
        cursor = m.end()
    if cursor < len(text):
        rest = text[cursor:]
        if rest.strip():
            for sub in _split_zh_with_ipa(rest):
                lang, t = sub
                t = t.strip()
                if t:
                    segments.append((lang, t))
    return segments


# 朗读前清洗：「/」会被 Azure TTS 念成 "slash"。
# 但 [EN][/EN] 等 markdown 标签不会进到这里（split_lang_segments 已经剥掉）、
# 也不动 timeline 里存的原文（display 端要保留 "/aɪ/" 这种 IPA 写法）。
# 占位符：clean_slashes_for_tts 设、add_inline_breaks 还原成 break
BREAK_SLASH = "\x02"

# ─── 大写音节 → 强重音 ─────────────────────────────
# 约定：[EN]out-SIDE[/EN] 念 outSIDE（重音在 side）
#       [EN]OUT-side[/EN] 念 OUTside（重音在 out）
#       [EN]pho-TOG-ra-phy[/EN] 念 photography（重音在 TOG）
# Azure 的 <phoneme> 对常见词的 IPA 重音标记不敏感、所以改用 emphasis+prosody 强制
STRESS_TOKEN_RE = re.compile(r"\b([A-Za-z]+(?:-[A-Za-z]+)+)\b")


def apply_stress_emphasis(text: str) -> str:
    """
    检测 [EN] 段里带连字符的混合大小写 token、把大写音节包成 emphasis。
    例如 'out-SIDE' → 'out<emphasis level="strong"><prosody pitch="+15%" volume="+5dB">side</prosody></emphasis>'
         'OUT-side' → '<emphasis level="strong"><prosody pitch="+15%" volume="+5dB">out</prosody></emphasis>side'
         'pho-TOG-ra-phy' → 'pho<emphasis ...>tog</emphasis>raphy'
    没有「全大写音节」的连字符 token（例如 'self-aware'）不动。
    """
    def transform(m: "re.Match[str]") -> str:
        token = m.group(1)
        syls = token.split("-")
        # 至少一个全大写音节（≥ 2 字符）才视为「重音标注」
        has_stress = any(s.isupper() and len(s) >= 2 for s in syls)
        if not has_stress:
            return token
        out = []
        for s in syls:
            if s.isupper() and len(s) >= 2:
                # 大写 = 重音音节；用 prosody pitch + volume 强制重读
                # volume 用百分比（"+30%"）、不用 dB——Azure 对 dB 有时挑剔
                # 不嵌套 emphasis、避免三层嵌套触发 Azure SSML 解析错
                out.append(
                    f'<prosody pitch="+20%" volume="+30%">{s.lower()}</prosody>'
                )
            else:
                out.append(s)
        # 把音节拼回去（去掉连字符、合成一个词）
        return "".join(out)
    return STRESS_TOKEN_RE.sub(transform, text)


def clean_slashes_for_tts(text: str, lang: str) -> str:
    """
    把 TTS 会念成 "slash" 的 "/" 处理掉、只影响合成、不影响 timeline 显示。

    注意：IPA 段已在 split_lang_segments 阶段切出去了、这里看不到。
    1) 备选并列 "A / B / C"（斜杠两边有空格）→ 替换成中文「、」/ 英文 ", "
    2) 语法对比 "was/were" / "am/is/are"（字母直连、没空格）→ 插入 280ms break 占位符
       让 TTS 听感是「was — were」而不是「was were」糊在一起
    """
    if not text or "/" not in text:
        return text
    # 1) 备选并列：" / " 两边都有空白 → 「、」（zh）或 ", "（en）
    sep = "、" if lang == "zh" else ", "
    text = re.sub(r"\s+/\s+", sep, text)
    # 2) 字母直连的 / → 留一个 break 占位符（add_inline_breaks 阶段还原成 SSML break）
    #    例如 "was/were" → "was⎵were"、"am/is/are" → "am⎵is⎵are"
    text = re.sub(r"/", BREAK_SLASH, text)
    return text


def build_ssml(speaker: str, segments: list[tuple[str, str]], scene: str = "intro") -> str:
    """构造一行的 SSML（一个 <speak>），内含按语言切音色的多个 <voice>"""
    voices = VOICES[speaker]
    override = scene_voice_overrides(scene, speaker)
    parts = []
    for lang, seg in segments:
        # ─── IPA 音标：用英文音色 + <phoneme> 标签朗读、前面加小停顿引导注意 ───
        if lang == "ipa":
            en_voice = voices["en"]
            ipa_safe = xml_escape(seg)
            parts.append(
                f'<voice name="{en_voice}">'
                f'<break time="200ms"/>'
                f'<prosody rate="-10%">'                          # 音标念慢一点、清楚
                f'<phoneme alphabet="ipa" ph="{ipa_safe}">{ipa_safe}</phoneme>'
                f'</prosody>'
                f'</voice>'
            )
            continue
        voice_name = voices[lang]
        # Scene 优先：scene 配的 rate/style 覆盖 voice 默认
        if lang == "zh":
            rate = override.get("rate") or voices["rate_zh"]
            style = override.get("style") or voices.get("zh_style")
        else:
            rate = override.get("rate") if override.get("rate") else voices["rate_en"]
            style = voices.get("en_style")  # 英文不强制 scene style（音色已经够丰富）
        cleaned = clean_slashes_for_tts(seg, lang)
        safe = xml_escape(cleaned)
        # 英文段：检测「混合大小写连字符 token」(如 out-SIDE) → 转 emphasis 强制重音
        if lang == "en":
            safe = apply_stress_emphasis(safe)
        # 行内标点 → break；要在 xml_escape 之后，因为 break 标签自带 < > 不能再被 escape
        safe = add_inline_breaks(safe, lang)
        if style:
            parts.append(
                f'<voice name="{voice_name}">'
                f'<mstts:express-as style="{style}">'
                f'<prosody rate="{rate}">{safe}</prosody>'
                f'</mstts:express-as></voice>'
            )
        else:
            parts.append(
                f'<voice name="{voice_name}">'
                f'<prosody rate="{rate}">{safe}</prosody>'
                f'</voice>'
            )
    return (
        '<speak version="1.0" '
        'xmlns="http://www.w3.org/2001/10/synthesis" '
        'xmlns:mstts="http://www.w3.org/2001/mstts" '
        'xml:lang="zh-CN">'
        + "".join(parts)
        + '</speak>'
    )


