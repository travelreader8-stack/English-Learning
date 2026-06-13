# Extension Review — Lessons 33–63 (current directions)

Review-only report. No files were modified; nothing was committed or pushed.

- **Reviewed against:** `origin/main` HEAD `39163a3` ("Refine extension plans for
  lessons 49-56"), read via the GitHub API.
- **Date:** 2026-06-13.
- **Note on sync:** `git pull --ff-only` could not complete on this
  Google-Drive-backed working tree (auth/filesystem hang), so the review was done
  against the authoritative `origin/main` content, not the stale local checkout.

## Scope

This reviews the `## Extension Practice Direction` section of
`lesson_plans/lesson_033.md` … `lesson_063.md`. From Lesson 33 onward, only the
**plan directions** exist — there is **no generated `web/data/extension/*.json`
yet** (`index.json` registers only `[24…32]`). So this is a review of the
directions.

Criteria:
1. Reading extension fits the lesson theme and key vocabulary.
2. Sentence-writing patterns are high-value, not random simple sentences.
3. Avoids repeating the main lesson's teaching (no paraphrase of the original).
4. Suitable for a child to understand and memorize.
5. English errors / unnatural Chinese / non-unique answer options.

Criterion 5 mostly lives in *generated* passages and questions, which do not
exist yet for 33–63; at the direction level it was checked on titles, word
banks, source sentences, and whether each question goal has a single clear
answer. **Criterion 5 must be re-checked on the generated JSON at production
time** (as was done for Lessons 24–31 in `EXTENSION_PRODUCED_REVIEW_24-31.md`).

## Big picture

The directions are in good shape. The recent revision commits already fixed the
issues from the earlier `EXTENSION_PLAN_REVIEW_28-63.md` pass (L43 Q5, L44
patterns, L49 "Because", L60 timing, L62 paraphrase), and nearly every card now
carries an explicit "do not retell …" anti-paraphrase guard plus consistent
child-safety reframing. This report supersedes the 33–63 portion of that earlier
file.

## Per-lesson result

| Lesson | Result | Lesson | Result | Lesson | Result |
|---|---|---|---|---|---|
| 33 Out of the darkness | PASS | 44 Through the forest | PASS | 55 Not a gold mine | PASS |
| 34 Quick work | PASS | 45 A clear conscience | PASS | 56 Faster than sound! | PASS |
| 35 Stop thief! | PASS | 46 Expensive & uncomfortable | PASS | 57 Can I help you, madam? | PASS |
| 36 Across the Channel | PASS | 47 A thirsty ghost | PASS | 58 A blessing in disguise? | PASS |
| 37 The Olympic Games | PASS | 48 Did you want to tell me…? | PASS | 59 In or out? | PASS |
| 38 Everything except the weather | PASS | 49 The end of a dream | PASS | 60 The future | PASS |
| 39 Am I all right? | PASS | 50 Taken for a ride | PASS | 61 Trouble with the Hubble | PASS |
| 40 Food and talk | PASS | **51 Reward for virtue** | **NEEDS FIX** | 62 After the fire | PASS |
| 41 Do you call that a hat? | PASS | 52 A pretty carpet | PASS | 63 She was not amused | PASS |
| 42 Not very musical | PASS | 53 Hot snake | PASS | | |
| 43 Over the South Pole | PASS | 54 Sticky fingers | PASS | | |

**30 PASS · 1 NEEDS FIX.**

## NEEDS FIX

### Lesson 51 — Reward for virtue (criterion 2)

- **Problem:** two of the five sentence-writing patterns drill the same
  `so + adjective + that` frame:
  - Pattern 1: `things got so bad that …`
  - Pattern 5: `so strict that …`
  For a set meant to be "carefully chosen, not random," 2/5 on one structure
  wastes a slot.
- **Suggestion (do not edit — for production to apply):** keep pattern 5
  (`so strict that …`, which carries the lesson's comic point) and replace
  pattern 1 with a distinct, high-value structure from the same passage, e.g.:
  - `hurriedly hid … under …` — source: *"he hurriedly hid a large parcel under
    his desk."* (vivid action verb), or
  - `was not surprised to see that …` — source: *"I … was not surprised to see
    that Hugh was still …"* (useful reporting structure).
  Either keeps the lesson theme while giving five genuinely different patterns.

## Optional / non-blocking notes (still PASS)

- **L59:** patterns 2 (`Every time … would … until …`) and 5
  (`As soon as … until …`) both lean on `until`-loops. Defensible (loop vs.
  sequence-inside-loop), but for maximum variety one could become
  `let herself in` or `developed a bad habit`. Not required.
- **L37:** purely cosmetic — the word-bank list has an awkward line break leaving
  `anxiously,` on its own line. Renders fine; no content impact.
- **Reuse across the set:** `used to` recurs in L35 and L59, and `such a … that`
  now appears only in L35 (the L44 duplicate was removed). Source-faithful and
  acceptable.

## Production-time reminder (33–63)

When these lessons are generated into `web/data/extension/lesson_N.json`,
re-run criterion 5 on the actual output:
- every reading question answerable from the passage, with exactly one correct
  option and plausible distractors;
- passage 90–140 words, original (not a paraphrase of the NCE text);
- natural, accurate Chinese in `intro_zh` / `focus_zh` / `explanation_zh`;
- each writing `sample` satisfies its own `must_include` + `min_words`.

(L32 is now produced — outside the "from 33" scope of this report, but available
for the same generated-data check on request.)
