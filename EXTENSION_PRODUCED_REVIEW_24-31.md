# Produced Extension Review & Change Orders — Lessons 24–31

Companion to `EXTENSION_PLAN_REVIEW_28-63.md`. That file reviews the planning
**directions** (cards 28–63). This file reviews the **already-produced data**
`web/data/extension/lesson_24.json` … `lesson_31.json` (the `reading` and
`writing` content), as it exists on `origin/main`.

Severity: **P1** = wrong direction · **P2** = affects production quality ·
**P3** = minor wording/polish.

## How to use this file

- These are content edits to `web/data/extension/lesson_N.json` only. Per
  `LESSON_PRODUCTION_PLAN.md`, the extension-only write set is
  `web/data/extension/lesson_N.json` (+ `index.json` if registration changes).
  Do **not** regenerate scripts, audio, timelines, or storyboards.
- Keep each file valid JSON with the same shape:
  `{lesson_id, reading:{title, intro_zh, word_bank[], passage[], questions[]},
  writing:{intro_zh, patterns[]}}`.
- After editing, re-run the QC checks at the bottom.

## Mechanical QC (passed — do not change)

- All 8 files: valid JSON, full writing field set, 5 MCQs each with correct
  answer keys, passages 94–130 words (target 90–140).
- 38/38 writing samples satisfy their own `must_include` + `min_words`.
- Strong bilingual `focus_zh` / `tip_zh`. Keep this quality.

## Verdict

PASS: 26, 27, 28, 29, 31. NEEDS REVISION: 24 (P2), 25 (P3), 30 (P3).
The problem is concentrated in the two earliest (pilot) lessons, which paraphrase
the original passage. Quality is strong from L27 onward.

---

## Mandatory edits

### Lesson 24 — `web/data/extension/lesson_24.json` (P2)

**Problem:** the reading is a paraphrase of the original NCE passage. The original
L24 is *already* a hotel / lost-money story (man loses $50, manager "sympathetic
but could do nothing", interrupted by someone bringing an envelope, "there is
still some honesty in this world"). The produced passage reproduces that exact
sequence with wallet/waiter/Room 12 and ends on the **original's verbatim
punchline**. The `intro_zh` claims "不复述原文" but it does paraphrase. This
violates the "do not merely paraphrase the original" rule.

**Fix:** rewrite `reading.passage` as a NEW incident that keeps the *"It could be
worse" + honesty* theme and reuses the target vocabulary, but does NOT repeat the
hotel→sympathetic-staff→envelope-at-the-door→returned-cash plot. Then rewrite
`intro_zh`, the 5 `questions`, and `word_bank` to match. Leave `writing`
unchanged (its source sentences are the real L24 sentences, which is correct).

**Reference rewrite (use or improve):**

- `title`: `The Pen in the Lost-and-Found`
- `intro_zh`: `这篇短文不复述原文，而是换到一个校园失物的故事：丢的东西看起来糟糕，结果没那么坏，而且有人很诚实——回收 upset / sympathetic / complain / envelope / contained / honesty / It could be worse。`
- `word_bank`: `["lost-and-found", "upset", "sympathetic", "complain", "envelope", "contained", "honesty", "It could be worse"]`
- `passage` (one string in the array, ~110 words):
  > On Friday, Leo could not find his pencil case after the school trip. It was
  > only a cheap case, but it contained his grandmother's old fountain pen. He
  > felt very upset and began to complain that someone must have taken it. The
  > teacher was sympathetic, but she could do nothing until Monday. All weekend
  > Leo imagined the worst. On Monday, a younger student came to the
  > lost-and-found desk with a small envelope. Inside was the pen, safe and
  > clean. "I saw it under a seat on the bus," she said. Leo smiled. "It could be
  > worse," he told his teacher. "There is still some honesty in this world."
- `questions` (write 5 MCQs in the existing format — 4 options, one `answer_index`,
  a short `explanation_zh`; vary the answer position; keep all answerable from the
  passage):
  1. What did Leo lose after the school trip? → his pencil case
  2. Why did losing it matter so much? → it contained his grandmother's old fountain pen
  3. What could the teacher do at first? → she was sympathetic but could do nothing until Monday
  4. Who returned the pen, and where? → a younger student, at the lost-and-found desk
  5. (theme) What does the ending show? → the situation was not as bad as feared, and someone was honest

### Lesson 25 — `web/data/extension/lesson_25.json` (P3 ×2)

**(a) Reading stays too close to the original frame.** The original L25 is a
foreigner at a railway station asking the way to a hotel, using
*not only…but…as well* and *neither…nor*, with a classroom-vs-real-English
reflection. The produced passage keeps that whole skeleton (Manchester railway
station, foreigner, way to hotel, same two structures, same reflection). Move the
scene to a different real-listening situation that still drills the two target
structures — e.g. ordering food at a counter, or asking a bus/tram driver — so it
is recognizably new. Update `title`, `intro_zh`, `passage`, and `questions` to
match. Keep `word_bank` focused on the two structures.

**(b) Writing pattern 4 source mismatch.** Pattern 4 is titled
`Could you say that again, please?` but its `source` is
`"I repeated my question several times and at last he understood."`, which does
not contain or exemplify the pattern. Replace the source with a sentence that
actually shows the pattern, for example:

```
"source": "I am a foreigner. Could you say that again, please?"
```
(Keep `focus_zh`, `task_zh`, `sample`, `tip_zh`, `must_include` as they are — the
sample already matches.)

### Lesson 30 — `web/data/extension/lesson_30.json` (P3 ×2)

**(a) Reading question 4 references the original lesson** ("What did Leo do
differently from the children in the original lesson?"), so it is not answerable
from the standalone passage. Reword the question and its `explanation_zh` to be
passage-internal:

```
"question": "What did Leo do after the ball struck the boat?"
```
Correct option stays: *He stopped, called out, said sorry, and checked if she was
all right.* Update `explanation_zh` to drop the "原文里的孩子们…" comparison.

**(b) Loose must_include on pattern 1.** Change:
```
"must_include": ["so"]
```
to:
```
"must_include": ["It was", "so"]
```

---

## Systemic edit (P3)

**Tighten loose `must_include: ["so"]`** so the grader enforces the intended
cause-result structure (a bare "so" passes "I am so happy"). Occurrences:

- `lesson_27.json` — writing pattern 3 (`... so ...`). Suggest `["so"]` →
  require a clause on each side, e.g. add a second anchor token from the sample
  context, or change the pattern's `task_zh` to demand "原因 + so + 结果" and keep
  `["so"]` only if the grader also checks `min_words` (it does). Minimum action:
  document that "so" alone is intentional here.
- `lesson_30.json` — writing pattern 1 (handled in L30 (b) above).

(L27's case is milder than L30's because its pattern is literally "… so …"; the
L30 fix is the important one.)

---

## Lessons that PASS unchanged

- **26** — optional only: it reuses the original's signature "upside down"
  punchline as both the reading reveal and writing pattern 5; acceptable, but if
  you want more distance, vary the reveal.
- **27** ★ — strong: it *inverts* the original (the group avoids the flood by
  reading water marks). Keep as a model.
- **28** ★, **29**, **31** — new incidents, correct vocab reuse, good questions.

---

## Acceptance checks (run after editing)

1. `python3 -c "import json; [json.load(open(f'web/data/extension/lesson_{n}.json')) for n in range(24,32)]"`
   parses without error.
2. Each edited reading still has exactly 5 questions, each with 4 options, one
   `answer_index`, and `explanation_zh`; every question is answerable from the
   passage (no reference to "the original lesson", no vocabulary-only asides).
3. Each reading passage is 90–140 words.
4. Every writing pattern still has `source`, `focus_zh`, `task_zh`, `min_words`,
   `sample`, `tip_zh`, `must_include`; each `sample` still contains all its
   `must_include` tokens and meets `min_words`.
5. For L24, the passage no longer follows the hotel→envelope→returned-cash plot
   of the original, and `intro_zh` accurately describes the new story.
6. For L25, pattern 4's `source` contains the `Could you … please` pattern.
7. `web/data/extension/index.json` still lists `[24,25,26,27,28,29,30,31]`.
8. Run the QC sub-agent gate per `LESSON_PRODUCTION_PLAN.md` before any commit;
   do not commit/push unless the user asks.
