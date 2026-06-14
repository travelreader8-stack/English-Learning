# Extension Reading Redesign — Design Spec

- Date: 2026-06-14
- Status: Approved (pilot)
- Scope: pilot on Lessons 61 and 62
- Branch context: `qc-extension`

## Background / Motivation

The current 延展阅读 (extension reading) passages are written by mirroring the
original NCE2 lesson's own sentences and plot. They read like sentence-imitation
samples ("仿写示例") and sit at roughly the lesson's level (A2–B1). The goal of
this redesign is to make the extension **reading** a genuine stretch: a harder,
real-world informational text on a topic related to the lesson's theme, adapted
from an authoritative source — not a re-skin of the lesson.

## Goals

- Reading becomes a B2+ informational passage on a real topic tied to the
  lesson's theme, adapted and leveled from a single authoritative source, with a
  citation.
- Writing (仿写) stays anchored to the lesson's grammar point but its examples and
  tasks are raised to B2+.
- Validate on two lessons (L61, L62) before any rollout.

## Non-goals

- No changes to the rest of the full lesson (script, audio, timeline, storyboard,
  read-aloud, you_too / living-scene).
- No rollout to all 63 lessons yet — pilot first, review, then decide.
- Do not force the lesson's grammar into the reading passage.

## Decisions (from brainstorming)

1. **Sourcing method:** adapt & level from the source into original prose, with a
   citation. Not a verbatim excerpt; not source-free invention.
2. **Difficulty:** B2+, ~200–280 words.
3. **Topic anchor:** the lesson's theme/subject. Do not deliberately steer the
   reading to exercise the lesson's grammar.
4. **Sourcing strategy:** a single authoritative source per lesson.
5. **word_bank:** removed from the reading block.
6. **Audience register:** a more adult register is acceptable; keep topics safe
   and neutral.
7. **Writing:** stays anchored to the lesson's grammar point; only the
   examples/tasks/min_words are raised to B2+.
8. **Pilot scope:** Lessons 61 and 62 (two different domains: space + ecology).

## Content model

### Reading block (new)

- **Passage:** 200–280 words, 2–3 paragraphs, expository/informational register,
  B2+ (richer lexis, longer/complex sentences, some abstract concepts), coherent
  and topically safe/neutral.
- **Topic:** a real-world subject thematically tied to the lesson.
  - **L61** (telescope trouble & repair) → space telescopes: how they produce
    images, why early images can be flawed, and how instruments are corrected or
    serviced (e.g., Hubble's flawed primary mirror and the servicing mission, or
    how observatories calibrate optics). Candidate sources: NASA, ESA, STScI.
  - **L62** (recovery after a fire) → wildfire land recovery / post-fire erosion
    control / ecological restoration (bare soil, runoff risk, seeding, roots,
    regrowth). Candidate sources: USGS, US Forest Service, NOAA, National
    Geographic.
- **Authoring:** original prose grounded in ONE authoritative source's facts. No
  copied sentences; a short attributed quotation only if essential.
- **No word_bank.**

### Writing block (kept anchored, raised difficulty)

- Same JSON schema and the same grammar-point anchoring as today.
- Raise difficulty: harder `sample` model sentences that still use the target
  structure; more demanding `task_zh` contexts; higher `min_words`.
- `source` stays the lesson's anchor sentence; `must_include` stays the
  structural token (the grammar point).

## Sourcing & citation rules

- One authoritative source per lesson.
- **Allowed:** government / educational / established science organizations and
  reputable outlets — NASA, ESA, USGS, US Forest Service, NOAA, National
  Geographic, Smithsonian, Encyclopædia Britannica, `.edu` university pages,
  established news/media.
- **Avoid:** blogs, SEO/content-farm pages, forums, and unverified wikis.
  Wikipedia may be used as a lead, but prefer the primary authoritative source it
  cites.
- **Copyright:** facts are not copyrightable; the passage must be original prose.
  No verbatim sentence copying; a short, clearly attributed quotation only if
  essential.
- **Citation field:** `reading.source = { title, publisher, url }`. The `url`
  must be reachable at authoring time. An optional `retrieved` (date string) may
  be added.

## Comprehension questions

- 5 MCQs, 4 options each, with `answer_index` and `explanation_zh`.
- Question-type mix tuned for informational text: (1) main idea / gist,
  (2) specific detail, (3) cause-effect or process, (4) inference,
  (5) vocabulary-in-context (a harder word from the passage).
- QC: every answer verifiable from the passage; answer distribution covers all 4
  option positions with no option used more than twice; explanations are
  content-based.

## Schema changes (`web/data/extension/lesson_N.json`)

Reading block:

- Before: `{ title, intro_zh, word_bank[], passage[], questions[] }`
- After:  `{ title, intro_zh, source{ title, publisher, url }, passage[], questions[] }`
  - `word_bank` removed.
  - `source` added.

Writing block: schema unchanged.

`index.json`: unchanged (L61 and L62 are already registered).

## Front-end changes

Files: `web/assets/app.js` (and a small CSS rule).

- `renderExtensionWordBank` already hides the word-bank element when the list is
  empty/absent, so removing `reading.word_bank` needs **no** code change there.
- In `renderExtensionReading`, after rendering the title and passage paragraphs,
  append a source-citation line **inside** the `#extension-reading-article`
  innerHTML (no new `lesson.html` element required), e.g.:
  `来源：<a href="{url}" target="_blank" rel="noopener">{publisher} — {title}</a>`.
  - Render the citation only when `reading.source` is present, so existing
    lessons without a `source` field render unchanged (backward compatible).
  - Escape all source fields with `escapeHtml`; only render the link if `url`
    starts with `http://` or `https://` (otherwise render plain text).
- Add a small CSS rule (e.g., `.extension-source`) for the citation line.

## QC checklist (extension reading — new/extended)

- Source is authoritative and the URL is reachable.
- Passage is **not** a paraphrase of the source (no copied sentences) **and not**
  a retelling of the original lesson.
- Length 200–280 words; B2+ register.
- 5 MCQs answerable from the passage; distribution healthy (all 4 positions, max
  repeat 2); explanations content-based.
- Writing: every `sample` contains its `must_include` and meets the new
  (higher) `min_words`; grammar anchor preserved.
- JSON valid; round-trip formatting stays surgical; `index.json` unchanged.

## Deliverables (pilot)

- Updated `reading` + `writing` blocks in `web/data/extension/lesson_61.json` and
  `web/data/extension/lesson_62.json`.
- Front-end source-citation rendering + CSS.
- A QC run plus the two sample passages presented for review before any rollout
  decision.

## Dependencies / risks

- Requires web access (WebSearch / WebFetch) to find and read authoritative
  sources.
- Both reading and writing move to B2+, raising overall difficulty — accepted.
- The front-end change touches shared `app.js` and CSS; keep it minimal and
  backward-compatible so lessons without a `source` field are unaffected.

## Rollout (post-pilot — out of scope for this spec)

- If the pilot is approved, backfill the reading blocks for the remaining lessons
  in batches, applying the same sourcing rules and QC, and raise each writing
  block to B2+ as above.
