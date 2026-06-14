#!/usr/bin/env python3
"""QC gate for the redesigned extension reading (spec 2026-06-14).

Usage: python3 tests/qc_extension_reading.py 61 62
Exits non-zero if any lesson fails. Mechanical checks only; semantic checks
(answers truly correct, not a paraphrase of the source, B2+ register) are a
manual review step in the plan.
"""
import json, re, sys
from collections import Counter

def check(n):
    path = f"web/data/extension/lesson_{n}.json"
    raw = open(path, encoding="utf-8").read()
    d = json.loads(raw)
    errs = []

    # round-trip cleanliness (surgical diffs)
    if raw != json.dumps(d, ensure_ascii=False, indent=2) + "\n":
        errs.append("file not in canonical json.dumps(indent=2, ensure_ascii=False)+newline form")

    r = d.get("reading", {})
    # schema: source present, word_bank absent
    if "word_bank" in r:
        errs.append("reading.word_bank must be removed")
    src = r.get("source")
    if not isinstance(src, dict):
        errs.append("reading.source object missing")
    else:
        for k in ("title", "publisher", "url"):
            if not src.get(k):
                errs.append(f"reading.source.{k} missing/empty")
        if isinstance(src.get("url"), str) and not re.match(r"^https?://", src["url"]):
            errs.append("reading.source.url must start with http(s)://")

    # passage length 200-280 words
    passage = r.get("passage", [])
    text = " ".join(passage) if isinstance(passage, list) else str(passage)
    wc = len(text.split())
    if not (200 <= wc <= 280):
        errs.append(f"passage word count {wc} outside 200-280")

    # questions: exactly 5, 4 options, valid answer_index, explanation, healthy distribution
    qs = r.get("questions", [])
    if len(qs) != 5:
        errs.append(f"expected 5 questions, found {len(qs)}")
    ai = []
    for i, q in enumerate(qs):
        opts = q.get("options", [])
        if len(opts) != 4:
            errs.append(f"Q{i+1} must have 4 options")
        idx = q.get("answer_index")
        if not isinstance(idx, int) or not (0 <= idx < len(opts)):
            errs.append(f"Q{i+1} answer_index invalid")
        else:
            ai.append(idx)
        if not q.get("explanation_zh"):
            errs.append(f"Q{i+1} explanation_zh missing")
    if ai:
        c = Counter(ai)
        if len(set(ai)) < 4:
            errs.append(f"answer distribution {ai} uses < 4 option positions")
        if max(c.values()) > 2:
            errs.append(f"answer distribution {ai} repeats an option > 2 times")

    # writing: samples meet must_include + min_words
    for pat in d.get("writing", {}).get("patterns", []):
        s = pat.get("sample", "")
        miss = [t for t in pat.get("must_include", []) if t.lower() not in s.lower()]
        if miss:
            errs.append(f"writing {pat.get('id')} sample missing must_include {miss}")
        if len(s.split()) < pat.get("min_words", 0):
            errs.append(f"writing {pat.get('id')} sample below min_words")

    return errs

def main():
    lessons = [int(x) for x in sys.argv[1:]] or [61, 62]
    failed = False
    for n in lessons:
        errs = check(n)
        if errs:
            failed = True
            print(f"L{n}: FAIL")
            for e in errs:
                print(f"   - {e}")
        else:
            print(f"L{n}: PASS")
    sys.exit(1 if failed else 0)

if __name__ == "__main__":
    main()
