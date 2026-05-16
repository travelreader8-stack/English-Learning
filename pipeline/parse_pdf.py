#!/usr/bin/env python3
"""
NCE2 PDF → lessons.json
=======================

把用户提供的《新概念英语 2》PDF（Word→PDF 转换、可文本提取）解析成结构化 JSON。

PDF 结构假设（根据用户描述）：
  - 不是扫描版，纯文本
  - 含 "Lesson 1"、"Lesson 2" 等清晰的课次锚点
  - 每课有 英文原文 / 中文译文 / 重点单词 三块内容
  - 没有严格的「每课一页」边界，只是文字流

策略：
  1. 用 PyMuPDF 提取全文
  2. 用正则切出 96 个 Lesson 块
  3. 每块内部用启发式拆分 英文 / 中文 / 重点词

注意：这是面向「Word→PDF」格式做的启发式解析。如果你的 PDF 排版与众不同，
脚本会在第一次跑时打印每课的解析结果让你抽查；不对的话我们再调正则。

用法：
    python parse_pdf.py data/raw/nce2.pdf web/data/lessons.json
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from typing import Any

try:
    import fitz  # PyMuPDF
except ImportError:
    sys.exit("缺少 PyMuPDF：pip install PyMuPDF")


LESSON_HEAD_RE = re.compile(r"\bLesson\s+(\d{1,3})\b", re.IGNORECASE)
CN_RE = re.compile(r"[一-鿿]")
KEYWORDS_HEADER_RE = re.compile(r"(New words and expressions|生词和短语)")
TRANSLATION_HEADER_RE = re.compile(r"参考译文")
LISTEN_BOILERPLATE_RE = re.compile(r"(First listen|听录音)")


def extract_text(pdf_path: Path) -> str:
    doc = fitz.open(pdf_path)
    parts = []
    for page in doc:
        parts.append(page.get_text("text"))
    return "\n".join(parts)


def split_into_lessons(text: str) -> list[tuple[int, str]]:
    """返回 [(lesson_id, lesson_block_text), ...]"""
    matches = list(LESSON_HEAD_RE.finditer(text))
    if not matches:
        sys.exit("没找到任何 'Lesson N' 锚点 — PDF 格式可能不符合预期")
    lessons = []
    for i, m in enumerate(matches):
        lesson_id = int(m.group(1))
        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        block = text[start:end].strip()
        lessons.append((lesson_id, block))
    return lessons


def has_chinese(s: str) -> bool:
    return bool(CN_RE.search(s))


def parse_keywords_section(text: str) -> list[str]:
    """
    解析 'New words and expressions' 与 '参考译文' 之间的词条。
    每条形如：private  adj. 私人的
    取每行第一个英文单词。
    """
    keywords = []
    for line in text.splitlines():
        line = line.strip()
        if not line:
            continue
        # 匹配行首的英文单词（允许连字符）
        m = re.match(r"^([A-Za-z][A-Za-z'\-]{1,})\b", line)
        if not m:
            continue
        kw = m.group(1).lower()
        # 跳过太短的、跳过 pos. 缩写本身
        if len(kw) <= 2:
            continue
        if kw in {"adj", "adv", "aux", "conj", "int", "modal", "prep", "pron", "vt", "vi"}:
            continue
        if kw not in keywords:
            keywords.append(kw)
    return keywords


def parse_lesson_block(block: str, lesson_id: int) -> dict[str, Any]:
    """
    分段解析每个 Lesson 块。结构：
      Lesson N
      <英文标题>
      <中文标题>
      First listen ...
      听录音 ...
      <问题，以 ? 结尾>

      <英文主文，多行段落>

      New words and expressions 生词和短语

      <重点词列表>

      参考译文

      <中文主文>
    """
    # 1) 用 marker 切三大块：preamble | keywords_section | translation_section
    kw_match = KEYWORDS_HEADER_RE.search(block)
    tr_match = TRANSLATION_HEADER_RE.search(block)

    if kw_match:
        preamble_plus_english = block[:kw_match.start()].strip()
        if tr_match and tr_match.start() > kw_match.end():
            keywords_text = block[kw_match.end():tr_match.start()].strip()
            chinese_text_raw = block[tr_match.end():].strip()
        else:
            keywords_text = block[kw_match.end():].strip()
            chinese_text_raw = ""
    elif tr_match:
        # 极少数 lesson 没有 keywords 段
        preamble_plus_english = block[:tr_match.start()].strip()
        keywords_text = ""
        chinese_text_raw = block[tr_match.end():].strip()
    else:
        preamble_plus_english = block
        keywords_text = ""
        chinese_text_raw = ""

    # 2) 在 preamble_plus_english 里跳过 boilerplate，找英文主文起点
    pre_lines = preamble_plus_english.splitlines()
    title_en = ""
    title_zh = ""
    english_main_lines: list[str] = []
    state = "find_title_en"

    for raw in pre_lines:
        line = raw.strip()
        if not line:
            # 空行：仅在已收集到主文时作为分段
            if state == "english_main" and english_main_lines:
                english_main_lines.append("")
            continue

        if state == "find_title_en":
            # 英文标题行（无中文）
            if has_chinese(line):
                # 这种情况很少；当作中文标题
                title_zh = line
                state = "find_boilerplate"
            else:
                title_en = line
                state = "find_title_zh"
        elif state == "find_title_zh":
            if has_chinese(line):
                title_zh = line
                state = "find_boilerplate"
            else:
                # 异常：标题之后又是英文（可能英文标题被切成两行）
                title_en = (title_en + " " + line).strip()
        elif state == "find_boilerplate":
            if LISTEN_BOILERPLATE_RE.search(line):
                state = "boilerplate"
            elif has_chinese(line):
                # 跳过额外的中文行（罕见）
                continue
            else:
                # 没有 boilerplate？直接当作主文起点
                english_main_lines.append(line)
                state = "english_main"
        elif state == "boilerplate":
            # boilerplate 共 3 行：英、中、问题。问题以 ? 或 ？ 结尾
            if line.rstrip().endswith(("?", "？")):
                state = "after_question"
            elif LISTEN_BOILERPLATE_RE.search(line) or has_chinese(line):
                continue
            else:
                # 已经是英文段、不是问题——直接当主文
                english_main_lines.append(line)
                state = "english_main"
        elif state == "after_question":
            english_main_lines.append(line)
            state = "english_main"
        elif state == "english_main":
            english_main_lines.append(line)

    english = re.sub(r"\s+", " ", " ".join(english_main_lines)).strip()

    # 3) 中文主文
    chinese = re.sub(r"\s+", "", chinese_text_raw)

    # 4) 关键词
    keywords = parse_keywords_section(keywords_text)

    # 5) First sentence prefix
    first_sentence = re.split(r"[.!?]", english, maxsplit=1)[0].strip()
    first_words = first_sentence.split()[:3]
    first_sentence_prefix = " ".join(first_words)

    title = title_en or f"Lesson {lesson_id}"
    title = re.sub(r"\s+", " ", title).strip()

    return {
        "id": lesson_id,
        "title": title,
        "title_zh": title_zh,
        "english": english,
        "chinese": chinese,
        "keywords": keywords[:15],
        "first_sentence_prefix": first_sentence_prefix,
    }


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("pdf", type=Path, help="NCE2 PDF 路径")
    ap.add_argument("out", type=Path, help="输出 JSON 路径（如 web/data/lessons.json）")
    ap.add_argument("--show", type=int, default=3, help="人工抽查前 N 课打印（默认 3）")
    args = ap.parse_args()

    if not args.pdf.exists():
        sys.exit(f"PDF 不存在：{args.pdf}")

    print(f"📖 解析 {args.pdf} …")
    full_text = extract_text(args.pdf)
    print(f"  总字符数：{len(full_text):,}")

    blocks = split_into_lessons(full_text)
    print(f"  找到 Lesson 块：{len(blocks)} 个")

    lessons = []
    for lid, block in blocks:
        lessons.append(parse_lesson_block(block, lid))

    args.out.parent.mkdir(parents=True, exist_ok=True)
    with open(args.out, "w", encoding="utf-8") as f:
        json.dump(lessons, f, ensure_ascii=False, indent=2)

    print(f"\n✅ 已写出 {len(lessons)} 课 → {args.out}")
    # 警告：缺关键字段的课
    bad = [L for L in lessons if not L["english"] or not L["chinese"] or not L["keywords"]]
    if bad:
        print(f"\n⚠️  {len(bad)} 课字段缺失，id 列表：{[L['id'] for L in bad[:20]]}")

    print(f"\n──── 抽查前 {args.show} 课 ────")
    for L in lessons[: args.show]:
        print(f"\nLesson {L['id']} — {L['title']} / {L.get('title_zh', '')}")
        print(f"  english ({len(L['english'])} 字)：{L['english'][:120]} …")
        print(f"  chinese ({len(L['chinese'])} 字)：{L['chinese'][:60]} …")
        print(f"  keywords ({len(L['keywords'])} 个)：{L['keywords']}")
        print(f"  first_sentence_prefix：{L['first_sentence_prefix']}")

    print("\n👀 如果上面解析不对，告诉我，我们调正则。")


if __name__ == "__main__":
    main()
