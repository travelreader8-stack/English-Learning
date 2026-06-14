# Extension Reading Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the L61 and L62 extension *reading* with a B2+ (~200–280 word) informational passage on a real, lesson-themed topic adapted from a single authoritative source (cited), drop the reading `word_bank`, add a `source` field, render the citation in the courseware, and raise each lesson's *writing* block to B2+ while keeping its grammar anchor.

**Architecture:** Per-lesson JSON in `web/data/extension/lesson_N.json` holds a `reading` block and a `writing` block. A new Python QC script encodes the redesign's mechanical rules and acts as the test gate. The front-end (`web/assets/app.js`) renders the reading; a small addition renders the new `source` citation. Content (passage + questions) is researched and authored at execution time against the QC gate; the front-end and QC code are deterministic and fully specified here.

**Tech Stack:** Static JS courseware (`web/assets/app.js`, `web/assets/style.css`), JSON data, Python 3 for QC, `web/dev-server.ts` (`npx tsx`) for browser checks, WebSearch/WebFetch for sourcing.

**Spec:** `docs/superpowers/specs/2026-06-14-extension-reading-redesign-design.md`

**Conventions:**
- Edit JSON by loading and re-writing with `json.dumps(d, ensure_ascii=False, indent=2) + "\n"` — verified byte-identical on a no-op round-trip, so diffs stay surgical.
- Commit per logical unit. Do not push unless the user asks.
- This branch (`qc-extension`) tracks `origin/main`; before any push, `git fetch origin main && git rebase origin/main`.

---

## Task 1: Create the extension-reading QC script

**Files:**
- Create: `tests/qc_extension_reading.py`

- [ ] **Step 1: Write the QC script**

```python
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
```

- [ ] **Step 2: Run it against current data to confirm it flags the OLD format**

Run: `python3 tests/qc_extension_reading.py 61 62`
Expected: both FAIL (current files still have `reading.word_bank`, no `reading.source`, and ~125/119-word passages). This proves the gate is active. (Do NOT "fix" by editing data yet.)

- [ ] **Step 3: Commit**

```bash
git add tests/qc_extension_reading.py
git commit -m "Add QC gate for redesigned extension reading"
```

---

## Task 2: Render the `source` citation in the courseware

**Files:**
- Modify: `web/assets/app.js` (function `renderExtensionReading`, ~line 1201; add helper near it)
- Modify: `web/assets/style.css` (add `.extension-source` rule near the other extension styles, ~line 864)

- [ ] **Step 1: Add the `renderExtensionSource` helper**

In `web/assets/app.js`, immediately above `function renderExtensionReading(` (line ~1201), add:

```javascript
function renderExtensionSource(source) {
  if (!source || typeof source !== "object") return "";
  const label = [source.publisher, source.title]
    .filter(Boolean).map(v => escapeHtml(String(v))).join(" — ");
  if (!label) return "";
  const url = typeof source.url === "string" ? source.url : "";
  const inner = /^https?:\/\//i.test(url)
    ? `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`
    : label;
  return `<p class="extension-source">来源：${inner}</p>`;
}
```

- [ ] **Step 2: Call it inside the article render**

In `renderExtensionReading`, change the article block (currently):

```javascript
  const article = $("#extension-reading-article");
  if (article) {
    article.innerHTML = `
      ${reading.title ? `<h3>${escapeHtml(reading.title)}</h3>` : ""}
      ${passage.map(p => `<p>${escapeHtml(p)}</p>`).join("")}
    `;
  }
```

to:

```javascript
  const article = $("#extension-reading-article");
  if (article) {
    article.innerHTML = `
      ${reading.title ? `<h3>${escapeHtml(reading.title)}</h3>` : ""}
      ${passage.map(p => `<p>${escapeHtml(p)}</p>`).join("")}
      ${renderExtensionSource(reading.source)}
    `;
  }
```

(Backward compatible: lessons with no `reading.source` get `""`, rendering unchanged.)

- [ ] **Step 3: Add CSS**

In `web/assets/style.css`, after the `.extension-questions,` block (~line 864), add:

```css
.extension-source {
  margin-top: 12px;
  font-size: 13px;
  color: var(--muted, #888);
}
.extension-source a { color: inherit; text-decoration: underline; }
```

- [ ] **Step 4: Smoke-check the JS parses**

Run: `node --check web/assets/app.js`
Expected: no output (exit 0). If it errors, fix the edit.

- [ ] **Step 5: Commit**

```bash
git add web/assets/app.js web/assets/style.css
git commit -m "Render extension reading source citation"
```

---

## Task 3: Produce the L61 reading (space telescopes) and raise its writing to B2+

**Files:**
- Modify: `web/data/extension/lesson_61.json` (replace `reading` block; raise `writing` block)

Authoring constraints (from spec):
- Passage: 200–280 words, 2–3 paragraphs, B2+ informational register, original prose grounded in ONE authoritative source. No copied sentences. Topic tied to L61's theme (a high-tech optical instrument that was flawed at first and then diagnosed/corrected) — e.g., the Hubble Space Telescope's flawed primary mirror and the corrective servicing mission. NOT a retelling of the lesson's school-telescope story.
- Source: NASA / ESA / STScI (Space Telescope Science Institute) page about Hubble's mirror flaw / servicing.
- No `word_bank`.

- [ ] **Step 1: Load web tools**

Run ToolSearch with query `select:WebSearch,WebFetch` to load the schemas.

- [ ] **Step 2: Find and read one authoritative source**

WebSearch e.g. `Hubble Space Telescope flawed mirror spherical aberration servicing mission site:nasa.gov`, then WebFetch the best NASA/ESA/STScI result. Record `title`, `publisher`, `url`. Extract 4–6 key facts (what went wrong, why images were blurry, how it was corrected, the outcome).

- [ ] **Step 3: Draft the passage**

Write 200–280 words, 2–3 paragraphs, B2+, original prose grounded in those facts. Keep it factual, neutral, and self-contained.

- [ ] **Step 4: Write 5 MCQs**

Types: (1) main idea/gist, (2) specific detail, (3) cause-effect/process, (4) inference, (5) vocabulary-in-context (a harder word from the passage). Each: 4 options, `answer_index`, `explanation_zh`. Arrange correct answers to span all 4 positions with no option used > twice (e.g., `[0,2,1,3,2]`).

- [ ] **Step 5: Apply the JSON edit**

Run this Python, pasting your authored content into the marked variables:

```python
import json
p = "web/data/extension/lesson_61.json"
d = json.loads(open(p, encoding="utf-8").read())

intro_zh = "..."   # zh framing: real topic + adapted from an authoritative source
source = {"title": "...", "publisher": "...", "url": "https://..."}
passage = ["<para 1>", "<para 2>"]            # 200-280 words total
questions = [                                  # 5 items, distribution spans 0..3, max repeat 2
  {"id": "gist", "question": "...", "options": ["...","...","...","..."], "answer_index": 0, "explanation_zh": "..."},
  # ... 4 more
]

d["reading"] = {"title": "...", "intro_zh": intro_zh, "source": source,
                "passage": passage, "questions": questions}
# (reading no longer has word_bank)

open(p, "w", encoding="utf-8").write(json.dumps(d, ensure_ascii=False, indent=2) + "\n")
print("L61 reading written")
```

- [ ] **Step 6: Raise the L61 writing block to B2+**

Keep each pattern's grammar anchor: keep `id`, `title`, `source` (the lesson's anchor sentence), and `must_include`. Rewrite `sample` to a more sophisticated B2+ sentence using the same structure, rewrite `task_zh` to a more demanding/abstract context, and raise `min_words` accordingly (target 14–18).

Concrete example (pattern `right_from_the_start`):
- Before: sample `"Right from the start, there was trouble with the new telescope."`, min_words 10
- After: sample `"Right from the start, the project ran into technical problems that the engineers had not expected."`, min_words 15, task_zh asks for an abstract/real-world setback context.

Apply with:

```python
import json
p = "web/data/extension/lesson_61.json"
d = json.loads(open(p, encoding="utf-8").read())
upgrades = {  # id -> (new_sample, new_task_zh, new_min_words)
  "right_from_the_start": ("...", "...", 15),
  "was_launched_by": ("...", "...", 16),
  "because_was_faulty": ("...", "...", 14),
  "going_to_put_right": ("...", "...", 15),
  "by_the_time_will_have": ("...", "...", 16),
}
for pat in d["writing"]["patterns"]:
    if pat["id"] in upgrades:
        s, t, mw = upgrades[pat["id"]]
        pat["sample"], pat["task_zh"], pat["min_words"] = s, t, mw
open(p, "w", encoding="utf-8").write(json.dumps(d, ensure_ascii=False, indent=2) + "\n")
print("L61 writing raised")
```

(Each new `sample` MUST still contain that pattern's `must_include` tokens and meet the new `min_words` — Task 1's QC verifies this.)

- [ ] **Step 7: Run the QC gate**

Run: `python3 tests/qc_extension_reading.py 61`
Expected: `L61: PASS`. If FAIL, fix the reported items and re-run.

- [ ] **Step 8: Manual semantic review (record findings)**

Confirm by reading: every answer is provable from the passage; the passage is NOT copied from the source and NOT a retelling of the lesson; register is genuinely B2+; the source URL opens to the cited page.

- [ ] **Step 9: Commit**

```bash
git add web/data/extension/lesson_61.json
git commit -m "Redesign Lesson 61 extension reading (sourced B2+) and raise writing to B2+"
```

---

## Task 4: Produce the L62 reading (post-fire land recovery) and raise its writing to B2+

**Files:**
- Modify: `web/data/extension/lesson_62.json` (replace `reading` block; raise `writing` block)

Authoring constraints: same as Task 3, but topic tied to L62's theme (recovery of burned/bare land — runoff/erosion risk, seeding, roots, regrowth). Source: USGS / US Forest Service / NOAA / National Geographic page on post-fire erosion control or landscape recovery. NOT a retelling of the lesson's school-slope story.

- [ ] **Step 1: (web tools already loaded in Task 3) Find and read one authoritative source**

WebSearch e.g. `post-fire erosion control reseeding burned slope recovery site:usgs.gov` (or fs.usda.gov / noaa.gov / nationalgeographic.com); WebFetch the best result. Record `title`, `publisher`, `url`; extract 4–6 key facts.

- [ ] **Step 2: Draft the passage** — 200–280 words, 2–3 paragraphs, B2+, original prose grounded in the source.

- [ ] **Step 3: Write 5 MCQs** — same type mix and distribution rule as Task 3 Step 4 (e.g., target `[1,3,0,2,0]`; any spread that uses all 4 positions, max repeat 2).

- [ ] **Step 4: Apply the JSON edit** — same script shape as Task 3 Step 5, on `web/data/extension/lesson_62.json`, pasting the L62 content (`reading` = `{title, intro_zh, source, passage, questions}`, no `word_bank`).

- [ ] **Step 5: Raise the L62 writing block to B2+** — same approach as Task 3 Step 6, on `lesson_62.json`. Keep each pattern's `id`/`title`/`source`/`must_include`; rewrite `sample` + `task_zh`; raise `min_words` to 14–18. L62's pattern ids are: `had_been_before`, `threatened_with`, `not_only_as_well`, `had_at_last_been_put_out`, `had_already_taken_root`.

Concrete example (pattern `not_only_as_well`):
- Before: sample `"Heavy rain would not only wash away the soil but would block the path as well."`, min_words 12
- After: sample `"After the fire, heavy rain could not only strip away the bare soil but pollute the streams below as well."`, min_words 16.

- [ ] **Step 6: Run the QC gate**

Run: `python3 tests/qc_extension_reading.py 62`
Expected: `L62: PASS`.

- [ ] **Step 7: Manual semantic review** — same checks as Task 3 Step 8.

- [ ] **Step 8: Commit**

```bash
git add web/data/extension/lesson_62.json
git commit -m "Redesign Lesson 62 extension reading (sourced B2+) and raise writing to B2+"
```

---

## Task 5: Combined QC + browser verification

**Files:** none (verification only)

- [ ] **Step 1: Run the full QC gate on both lessons**

Run: `python3 tests/qc_extension_reading.py 61 62`
Expected: `L61: PASS` and `L62: PASS`.

- [ ] **Step 2: Run existing regression tests**

Run: `python3 tests/test_pipeline.py` then `node tests/test_slide_player.mjs`
Expected: both pass (no regressions from the app.js/style.css change).

- [ ] **Step 3: Browser check**

Start the dev server: `cd web && npx tsx dev-server.ts`
Open `http://127.0.0.1:5500/lesson.html?id=61&k=dev` and `...?id=62&k=dev`, go to 拓展阅读:
- The passage renders with no word-bank chips.
- The 来源 citation line appears under the article and the link opens the cited page in a new tab.
- The 5 questions render and can be answered.
- Mobile-sized layout has no obvious overflow.

- [ ] **Step 4: Present the two samples to the user**

Paste both passages + their source citations + the 5 questions each, and report QC results, for the user to review before deciding on rollout to other lessons.

- [ ] **Step 5 (only if user asks): push**

```bash
git fetch origin main && git rebase origin/main
git push origin HEAD:main
```

---

## Self-Review (completed during authoring)

- **Spec coverage:** reading B2+/200–280/themed/single-source/cited (Tasks 3–4), word_bank removed + source added + schema (Tasks 3–4, QC Task 1), 5 MCQ types + distribution (Tasks 3–4, QC Task 1), writing raised B2+ anchored to grammar (Tasks 3–4 Step 6), front-end source render + CSS (Task 2), QC checklist (Task 1 mechanical + manual semantic steps), pilot L61+L62 only (Tasks 3–4), browser check (Task 5). No gaps.
- **Placeholder scan:** Deterministic code (QC script, front-end, edit scripts) is fully specified. The `...` markers in Tasks 3–4 are *researched content* that can only be authored at execution against a live source — this is inherent to content production, and each is gated by the QC script (Task 1) and manual review steps, not left to chance.
- **Consistency:** `renderExtensionSource` defined (Task 2 Step 1) and called (Step 2); `reading.source = {title, publisher, url}` shape matches across QC (Task 1), front-end (Task 2), and edits (Tasks 3–4); QC script path consistent in all run steps; pattern ids match the lessons' actual data.
