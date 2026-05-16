#!/usr/bin/env python3
"""
读 lessons.json，给每课加 cloze 字段
=====================================

策略：
  - 用每课已有的 `keywords` 列表作为挖空目标
  - 在 `english` 里查找每个 keyword 的第一次出现，替换为 {{N}} 占位符
  - 同时在 `cloze.blanks` 数组里记录 {index, answer, case_sensitive: false}

支持「合并多形态」：keyword 是 "spoil"，原文里实际写的是 "spoils" / "spoiled"，
我们仍认为这是同一个空，answer 取原文里的实际形态（这样默写时学生答案要严格匹配原文）。

用法：
    python generate_cloze.py web/data/lessons.json   # 原地修改
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path


def find_keyword_in_text(text: str, kw: str) -> tuple[int, int, str] | None:
    """
    在 text 中找第一次出现的 keyword（不区分大小写、容许变形：
    spoil → spoil/spoils/spoiled/spoiling 等）。
    返回 (start, end, actual_word) 或 None。
    """
    # 简单词形扩展：原形 + 加 s/es/ed/ing
    stem = kw.lower()
    candidates = [
        stem,
        stem + "s",
        stem + "es",
        stem + "ed",
        stem + "ing",
        stem[:-1] + "ied" if stem.endswith("y") else None,
        stem[:-1] + "ies" if stem.endswith("y") else None,
    ]
    candidates = [c for c in candidates if c]
    pattern = r"\b(" + "|".join(re.escape(c) for c in candidates) + r")\b"
    m = re.search(pattern, text, re.IGNORECASE)
    if m:
        return m.start(), m.end(), m.group(0)
    return None


def build_cloze(english: str, keywords: list[str]) -> tuple[str, list[dict]]:
    """
    生成 (rendered_html_template, blanks)。
    rendered_html_template 形如 "Last week I went to the {{0}}. ..."
    """
    # 收集每个 keyword 的位置
    placements = []  # [(start, end, actual_word, kw_lower)]
    used_spans: list[tuple[int, int]] = []
    for kw in keywords:
        found = find_keyword_in_text(english, kw)
        if not found:
            continue
        s, e, actual = found
        # 避免重叠
        if any(s < ue and e > us for us, ue in used_spans):
            continue
        # 避免在已挖过的位置再挖（同一词不重复挖）
        if any(actual.lower() == p[2].lower() for p in placements):
            continue
        placements.append((s, e, actual, kw.lower()))
        used_spans.append((s, e))

    # 按位置排序、生成模板
    placements.sort(key=lambda p: p[0])
    blanks = []
    out = []
    cursor = 0
    for i, (s, e, actual, _kw) in enumerate(placements):
        out.append(english[cursor:s])
        out.append(f"{{{{{i}}}}}")
        cursor = e
        blanks.append({"index": i, "answer": actual, "case_sensitive": False})
    out.append(english[cursor:])
    return "".join(out), blanks


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("path", type=Path, help="lessons.json 路径")
    ap.add_argument("--min-blanks", type=int, default=4, help="一课最少挖空数（少于此值会警告）")
    args = ap.parse_args()

    if not args.path.exists():
        sys.exit(f"文件不存在：{args.path}")

    lessons = json.loads(args.path.read_text(encoding="utf-8"))
    warnings = []
    for L in lessons:
        if not L.get("english") or not L.get("keywords"):
            warnings.append(f"Lesson {L['id']}: english 或 keywords 缺失")
            continue
        rendered, blanks = build_cloze(L["english"], L["keywords"])
        L["cloze"] = {
            "rendered_html": rendered,
            "blanks": blanks,
        }
        if "audio_path" not in L:
            L["audio_path"] = f"/audio/lesson_{L['id']}.mp3"
        if len(blanks) < args.min_blanks:
            warnings.append(f"Lesson {L['id']}: 仅生成 {len(blanks)} 个空（< {args.min_blanks}）")

    args.path.write_text(json.dumps(lessons, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"✅ 已为 {len(lessons)} 课生成 cloze → {args.path}")
    if warnings:
        print("\n⚠️  警告：")
        for w in warnings:
            print(f"  - {w}")


if __name__ == "__main__":
    main()
