#!/usr/bin/env python3
"""
Pipeline 数据完整性测试：验证 96 课的 lessons.json 都符合预期 schema。

跑：python3 tests/test_pipeline.py
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent.parent
LESSONS_JSON = ROOT / "web" / "data" / "lessons.json"

PASS = 0
FAIL = 0
WARN = 0


def section(title: str) -> None:
    print(f"\n\033[1;36m▶ {title}\033[0m")


def ok(msg: str) -> None:
    global PASS
    print(f"\033[32m  ✓ {msg}\033[0m")
    PASS += 1


def bad(msg: str) -> None:
    global FAIL
    print(f"\033[31m  ✗ {msg}\033[0m")
    FAIL += 1


def warn(msg: str) -> None:
    global WARN
    print(f"\033[33m  ⚠ {msg}\033[0m")
    WARN += 1


def main() -> None:
    if not LESSONS_JSON.exists():
        print(f"❌ {LESSONS_JSON} 不存在 — 先跑 parse_pdf.py")
        sys.exit(1)

    lessons = json.loads(LESSONS_JSON.read_text(encoding="utf-8"))

    section("整体数量")
    if len(lessons) == 96:
        ok(f"共 {len(lessons)} 课（NCE2 标准）")
    elif len(lessons) >= 90:
        warn(f"共 {len(lessons)} 课（期望 96，少了 {96 - len(lessons)}）")
    else:
        bad(f"共 {len(lessons)} 课（远少于 96）")

    section("每课必填字段")
    required = ["id", "title", "english", "chinese", "keywords", "first_sentence_prefix", "cloze"]
    for L in lessons:
        for f in required:
            if f not in L:
                bad(f"Lesson {L.get('id', '?')} 缺字段 {f!r}")
        # 不报 ok（96 × 7 = 672 行太多）
    if FAIL == 0:
        ok(f"96 课 × {len(required)} 字段全部存在")

    section("english / chinese 长度合理")
    short_en = [L["id"] for L in lessons if len(L.get("english", "")) < 100]
    short_zh = [L["id"] for L in lessons if len(L.get("chinese", "")) < 30]
    if short_en:
        warn(f"{len(short_en)} 课英文 < 100 字符: {short_en[:10]}{'…' if len(short_en) > 10 else ''}")
    else:
        ok("所有课英文 >= 100 字符")
    if short_zh:
        warn(f"{len(short_zh)} 课中文 < 30 字符: {short_zh[:10]}{'…' if len(short_zh) > 10 else ''}")
    else:
        ok("所有课中文 >= 30 字符")

    section("keywords 数量")
    no_kw = [L["id"] for L in lessons if not L.get("keywords")]
    few_kw = [L["id"] for L in lessons if 0 < len(L.get("keywords", [])) < 4]
    if no_kw:
        bad(f"{len(no_kw)} 课无 keywords: {no_kw[:10]}")
    else:
        ok("96 课均有 keywords")
    if few_kw:
        warn(f"{len(few_kw)} 课 keywords < 4: {few_kw[:10]}")

    section("cloze 完整性")
    no_blanks = [L["id"] for L in lessons if not L.get("cloze", {}).get("blanks")]
    if no_blanks:
        bad(f"{len(no_blanks)} 课 cloze.blanks 缺失: {no_blanks[:10]}")
    else:
        ok("96 课均有 cloze.blanks")
    no_template = [L["id"] for L in lessons if not L.get("cloze", {}).get("rendered_html")]
    if no_template:
        bad(f"{len(no_template)} 课 cloze.rendered_html 缺失: {no_template[:10]}")
    else:
        ok("96 课均有 cloze.rendered_html 模板")

    section("cloze 模板与 blanks 对齐")
    misaligned = []
    for L in lessons:
        c = L.get("cloze", {})
        rendered = c.get("rendered_html", "")
        blanks = c.get("blanks", [])
        # 模板里 {{N}} 的数量 = blanks 长度
        ph_count = len(re.findall(r"\{\{\d+\}\}", rendered))
        if ph_count != len(blanks):
            misaligned.append((L["id"], ph_count, len(blanks)))
    if misaligned:
        bad(f"{len(misaligned)} 课模板/blanks 不齐: {misaligned[:5]}")
    else:
        ok("96 课模板 {{N}} 数 = blanks 数")

    section("answer 都能在 english 里找到")
    blank_misses = []
    for L in lessons:
        c = L.get("cloze", {})
        text = L.get("english", "").lower()
        blanks = c.get("blanks", [])
        for b in blanks:
            ans = (b.get("answer") or "").lower().strip()
            # 简单查：答案的 stem 在 english 里
            if ans and len(ans) > 2 and ans not in text:
                blank_misses.append((L["id"], b.get("answer")))
    if blank_misses:
        warn(f"{len(blank_misses)} 个 blank.answer 不在原文中（可能词形扩展找的、可接受）")
    else:
        ok("所有 blank.answer 都直接出现在 english")

    section("first_sentence_prefix 是首句开头")
    bad_prefix = []
    for L in lessons:
        prefix = L.get("first_sentence_prefix", "").strip()
        english = L.get("english", "").strip()
        if not prefix or not english.startswith(prefix):
            bad_prefix.append(L["id"])
    if bad_prefix:
        bad(f"{len(bad_prefix)} 课 first_sentence_prefix 不是首句开头: {bad_prefix[:10]}")
    else:
        ok("96 课 first_sentence_prefix 都是首句开头")

    section("audio_path 路径规范")
    bad_audio = []
    for L in lessons:
        ap = L.get("audio_path", "")
        expected = f"/audio/lesson_{L['id']}.mp3"
        if ap and ap != expected:
            bad_audio.append((L["id"], ap))
    if bad_audio:
        bad(f"{len(bad_audio)} 课 audio_path 不规范: {bad_audio[:5]}")
    else:
        ok("audio_path 全部 /audio/lesson_N.mp3")

    section("Lesson 1 chunks（如有）")
    L1 = next((L for L in lessons if L["id"] == 1), None)
    if L1 and L1.get("chunks"):
        zh_chunks = L1["chunks"].get("zh", [])
        en_chunks = L1["chunks"].get("en", [])
        if 2 <= len(zh_chunks) <= 5 and 3 <= len(en_chunks) <= 6:
            ok(f"Lesson 1 chunks: zh={len(zh_chunks)}, en={len(en_chunks)}")
        else:
            warn(f"Lesson 1 chunks 数量异常: zh={len(zh_chunks)}, en={len(en_chunks)}")
        # 串起来应该约等于 english/chinese
        en_join = " ".join(en_chunks).strip()
        if abs(len(en_join) - len(L1["english"])) < 50:
            ok("en chunks 拼起来约等于 english 全文")
        else:
            warn(f"en chunks 拼合 {len(en_join)} 字 vs english {len(L1['english'])} 字差距大")
    else:
        warn("Lesson 1 还没有 chunks（其余课更不会有）— 后续要加")

    section("TTS 朗读时去掉 '/'（不能被 Azure 念成 'slash'）")
    # 防止「在英文发音时说 slash」的回归
    sys.path.insert(0, str(ROOT / "pipeline"))
    try:
        from _tts_common import (  # type: ignore
            clean_slashes_for_tts,
            split_lang_segments,
            add_inline_breaks,
            apply_stress_emphasis,
        )
        # 1) clean_slashes_for_tts：去 / 占位符（IPA 已在 split 阶段抽出）
        slash_cases = [
            ("rudely / loudly / angrily", "en", "rudely, loudly, angrily"),  # 空格分隔 → 逗号
            ("Pay attention to",          "en", "Pay attention to"),         # 无 /、原样
            ("",                          "zh", ""),
        ]
        # 字母直连 / 变 BREAK_SLASH placeholder（"\x02"）
        all_ok = True
        for inp, lang, expected in slash_cases:
            actual = clean_slashes_for_tts(inp, lang)
            if actual != expected:
                bad(f"clean_slashes_for_tts [{lang}] {inp!r} → {actual!r} 期望 {expected!r}")
                all_ok = False
        # 占位符 round-trip：clean → add_inline_breaks → SSML break tag
        cleaned = clean_slashes_for_tts("was/were", "zh")
        broken = add_inline_breaks(cleaned, "zh")
        if "<break time=\"280ms\"/>" in broken and "was" in broken and "were" in broken:
            ok("was/were → SSML break tag（语法对比 280ms 停顿）")
        else:
            bad(f"was/were 转换失败：{broken}")
        # 2) IPA 切分：split_lang_segments
        ipa_segs = split_lang_segments("注意 i 发 /aɪ/、不是 /i/")
        ipa_langs = [s[0] for s in ipa_segs]
        if "ipa" in ipa_langs:
            ok(f"split_lang_segments 抽出 IPA 段：{[s for s in ipa_segs if s[0]=='ipa']}")
        else:
            bad(f"split 未抽出 IPA：{ipa_segs}")
        # 3) 重音 emphasis：out-SIDE → prosody pitch/volume
        stress = apply_stress_emphasis("out-SIDE")
        if "<prosody pitch=" in stress and "side" in stress:
            ok("apply_stress_emphasis: out-SIDE → <prosody pitch+volume>")
        else:
            bad(f"out-SIDE 重音转换失败：{stress}")
        if all_ok:
            ok(f"clean_slashes_for_tts: {len(slash_cases)} 个基础 case 全过")
    except ImportError as e:
        bad(f"无法 import _tts_common: {e}")

    section("课程脚本英文朗读段不含填空占位")
    scripts_dir = ROOT / "pipeline" / "scripts"
    en_segment_re = re.compile(r"\[EN\](.*?)\[/EN\]")
    slash_choice_re = re.compile(r"\b[\w'-]+(?:\s*/\s*[\w'-]+)+\b")
    spoken_issues = []
    if scripts_dir.exists():
        for script_path in sorted(scripts_dir.glob("lesson_*.script.md")):
            current_scene = ""
            for line_no, line in enumerate(script_path.read_text(encoding="utf-8").splitlines(), 1):
                stripped = line.strip()
                if stripped.startswith("## SCENE:"):
                    current_scene = stripped.split(":", 1)[1].strip().split()[0]
                for match in en_segment_re.finditer(line):
                    segment = match.group(1)
                    reasons = []
                    if "___" in segment:
                        reasons.append("含 ___ 填空占位")
                    if current_scene == "you_too" and slash_choice_re.search(segment):
                        reasons.append("you_too 英文朗读含 slash choice")
                    if reasons:
                        rel = script_path.relative_to(ROOT)
                        spoken_issues.append((str(rel), line_no, "、".join(reasons), segment))

    timeline_issues = []
    audio_dir = ROOT / "web" / "audio"
    if audio_dir.exists():
        for timeline_path in sorted(audio_dir.glob("lesson_*.timeline.json")):
            try:
                timeline = json.loads(timeline_path.read_text(encoding="utf-8"))
            except json.JSONDecodeError as e:
                timeline_issues.append((str(timeline_path.relative_to(ROOT)), 0, f"timeline JSON 解析失败: {e}", ""))
                continue
            for line in timeline.get("lines", []):
                scene = line.get("scene", "")
                for segment in line.get("segments", []):
                    text = segment.get("text", "")
                    reasons = []
                    if "___" in text or "underscore" in text.lower():
                        reasons.append("timeline 含填空占位或 underscore")
                    if scene == "you_too" and slash_choice_re.search(text):
                        reasons.append("you_too timeline 含 slash choice")
                    if reasons:
                        rel = timeline_path.relative_to(ROOT)
                        timeline_issues.append((str(rel), line.get("i", "?"), "、".join(reasons), text))

    all_spoken_issues = spoken_issues + timeline_issues
    if all_spoken_issues:
        for rel, line_no, reason, segment in all_spoken_issues[:12]:
            bad(f"{rel}:{line_no} {reason}: {segment[:120]}")
        if len(all_spoken_issues) > 12:
            bad(f"还有 {len(all_spoken_issues) - 12} 个英文朗读占位问题未显示")
    else:
        ok("脚本和已有 timeline 的英文朗读段没有 ___ / underscore / you_too slash choice")

    # 总结
    section("总结")
    total = PASS + FAIL + WARN
    print(f"\033[1m通过: {PASS}\033[0m  失败: {FAIL}  警告: {WARN}  共 {total}")
    if FAIL > 0:
        print("\033[31m\nPipeline 测试失败、请修复\033[0m")
        sys.exit(1)
    else:
        print("\033[32m\nPipeline schema 全部 OK\033[0m")
        sys.exit(0)


if __name__ == "__main__":
    main()
