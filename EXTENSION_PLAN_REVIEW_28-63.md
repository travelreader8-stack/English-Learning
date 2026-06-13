# Extension Plan Review & Change Orders — Lessons 28–63

This file is a change order for a Codex thread. It reviews the
`## Extension Practice Direction` sections in `lesson_plans/lesson_028.md`
through `lesson_plans/lesson_063.md` and lists exactly what to change.

Reviewer scope: the **plan directions** in the cards (reading topic, suggested
title, word bank, 5 reading-question goals, 5 sentence-writing patterns). It does
**not** review generated `web/data/extension/lesson_N.json` content.

## How to use this file

- Edit **only** the `## Extension Practice Direction` section (and its
  `### Extension Reading` / `### Sentence Writing` subsections) of the named
  `lesson_plans/lesson_NNN.md` cards.
- Do **not** touch any other section of any card.
- Do **not** regenerate scripts, audio, timelines, storyboards, or
  `web/data/extension/*.json` unless the user separately asks. These are
  planning-card edits only.
- Follow `LESSON_PRODUCTION_PLAN.md` → "Planning Commit Rule": after edits, stage
  only the changed `lesson_plans/*.md` files, commit with a concise message such
  as `Revise Lesson 28-63 extension plan per review`, and push only if the user
  asks.
- "Before" blocks below are quoted verbatim from `origin/main`. Match them
  exactly when replacing.

## Verdict

No P1 (wrong-direction) issues. 30 of 36 cards PASS. Six need edits (30, 40, 43,
44, 60, 62). Two systemic quality issues (P2) are described in "Global tasks".

Severity: **P1** = wrong production direction · **P2** = affects production
quality · **P3** = minor wording/polish.

---

## Global tasks (apply across the set)

### G1 [P2] Do not pad to exactly 5 sentence patterns
`LESSON_PRODUCTION_PLAN.md` allows **3–5** patterns, but every card uses exactly
5. The 5th slot is where weak/duplicative patterns appear. Rule going forward:
- Apply the specific per-lesson pattern fixes below.
- You **may** drop a genuinely weak 5th pattern on any card down to 3–4 patterns;
  do **not** rewrite patterns that are already strong, and do not add new ones to
  reach 5.

### G2 [P2] Cross-lesson pattern duplication
Several structures repeat across the series: `so…that` / `such a…that` (L30, L35,
L44, L51), `used to` (L31, L35, L59), `had no sooner…than` (L38, L54),
`In spite of` (L55, L58). These are source-faithful and **acceptable — leave them
as-is**, EXCEPT the one mandatory case below:
- The sentence *"got such a fright that … dropped the bag"* appears in **both
  L35 and L44**, nearly identical. The mandatory fix is on **L44** (see below).

---

## Mandatory per-lesson edits

### Lesson 30 — `lesson_plans/lesson_030.md` (P3)

**(a) Reading question 4 — make it answerable from the new passage.**

Before:
```
4. what the child did differently from the original story
```
After:
```
4. what the child did after the ball reached the boat
```

**(b) Sentence pattern 1 — tighten the must-include so it enforces the structure.**

Before:
```
1. `It was ..., so ...`
   - Source: `It was warm last Sunday, so I went and sat on the river bank as usual.`
   - Focus: weather or situation leading naturally to an action.
   - Must include: `so`
```
After:
```
1. `It was ..., so ...`
   - Source: `It was warm last Sunday, so I went and sat on the river bank as usual.`
   - Focus: weather or situation leading naturally to an action.
   - Must include: `It was` and `so`
```

### Lesson 40 — `lesson_plans/lesson_040.md` (P3)

Sentence pattern 1 locks an over-specific phrase with little transfer value.
Broaden it to the general "ask someone to do something" structure.

Before:
```
1. `asked me to sit next to ...`
   - Source: `The hostess asked me to sit next to Mrs. Rumbold.`
   - Focus: asking someone to do something.
   - Must include: `asked me to sit next to`
```
After:
```
1. `asked ... to ...`
   - Source: `The hostess asked me to sit next to Mrs. Rumbold.`
   - Focus: asking someone to do something.
   - Must include: `asked` and `to`
```

### Lesson 43 — `lesson_plans/lesson_043.md` (P3)

Reading question 5 is a vocabulary aside, not a comprehension question about the
new passage. Replace it with a passage-based question.

Before:
```
5. how `photo` / `photograph` relates to modern English
```
After:
```
5. why the plane could finally clear the mountains
```

### Lesson 44 — `lesson_plans/lesson_044.md` (P2)

Two problems: pattern 5 duplicates L35's pattern 4 almost verbatim, and pattern 4
drills the *chasing* behaviour the reading direction tells students NOT to imitate
(Q5 = "vivid storytelling ≠ risky imitation"). Replace both with distinctive
structures taken from L44's own original text.

Before:
```
4. `so ... that ...`
   - Source: `Mrs. Sterling got so angry that she ran after them.`
   - Focus: strong feeling leading to action.
   - Must include: `so` and `that`
5. `such a ... that ...`
   - Source: `The men got such a fright that they dropped the bag and ran away.`
   - Focus: noun phrase causing a result.
   - Must include: `such a` and `that`
```
After:
```
4. `was soon out of breath, but ... continued to ...`
   - Source: `She was soon out of breath, but she continued to run.`
   - Focus: pushing on despite difficulty.
   - Must include: `out of breath` and `continued to`
5. `... needs mending`
   - Source: `The strap needs mending.`
   - Focus: `need` + `-ing` to say something must be repaired.
   - Must include: `needs` with an `-ing` verb
```
(Alternative for pattern 5 if you prefer a clause: `When ... caught up with ...`,
Source: `When she caught up with them, she saw that they had sat down.`)

### Lesson 60 — `lesson_plans/lesson_060.md` (P3)

**(a) Patterns 4 and 5 teach the same "immediately when" idea — replace pattern 5.**

Before:
```
5. `As soon as ...`
   - Source: `As soon as I went outside, I forgot all about Madam Bellinsky.`
   - Focus: one action immediately after another.
   - Must include: `As soon as`
```
After:
```
5. `in less than ...`
   - Source: `Your sister will be here in less than an hour.`
   - Focus: a tight time estimate.
   - Must include: `in less than`
```

**(b) Pattern 1 — broaden the must-include.**

Before:
```
1. `decided to visit ...`
   - Source: `I decided to visit a fortune-teller called Madam Bellinsky.`
   - Focus: choosing to try something.
   - Must include: `decided to visit`
```
After:
```
1. `decided to ...`
   - Source: `I decided to visit a fortune-teller called Madam Bellinsky.`
   - Focus: choosing to try something.
   - Must include: `decided to`
```

### Lesson 62 — `lesson_plans/lesson_062.md` (P2)

The reading direction mirrors the original passage beat-for-beat (burned hillside
→ rain washes away soil → fast-growing grass-seed sprayed → takes root → green
patches) and the word bank ≈ the original keywords, so production is likely to
**paraphrase the original**, which violates the "do not merely paraphrase" rule
in `LESSON_PRODUCTION_PLAN.md`. Rewrite the `### Extension Reading` block to a
smaller, clearly new setting with new agents and reduced word-bank overlap. Leave
the `### Sentence Writing` patterns unchanged.

Before:
```
### Extension Reading

Use an original recovery passage about a burned or bare hillside, school garden,
or park slope. The focus should be ecological repair: after damage, rain may wash
away soil, so fast-growing seed is spread, takes root, and green patches appear.

Suggested title: `Green After the Fire`

Recommended word bank: `forest fire`, `under control`, `desolate`, `threaten`,
`wash away`, `flood`, `grass-seed`, `spray`, `take root`, `patches of green`.
```
After:
```
### Extension Reading

Use an original recovery passage set on a small, child-scale slope: a school
garden bank or a neighbourhood park slope left bare after a small fire or after
builders cleared it. Keep the ecological-repair idea (bare soil, the risk that
rain washes the soil away, fast-growing seed, roots, the first green shoots), but
it must read as a NEW situation with new characters (students, volunteers, a
gardener), NOT a retelling of the lesson's forest fire fought by firemen and
seeded from aeroplanes. Do not paraphrase the original passage.

Suggested title: `Green on the School Slope`

Recommended word bank: `bare slope`, `wash away`, `soil`, `fast-growing seed`,
`scatter`, `take root`, `green shoots`, `protect`, `volunteers`, `at last`.
```

---

## Optional polish (P3 — apply only if you want; non-blocking)

- **L28 (`lesson_028.md`)** — If the new passage names Medusa, add a one-line
  gloss inside the reading so it stands alone (don't assume the main lesson). You
  can add to the reading direction: "Give one short line explaining that Medusa
  is a monster from an old Greek myth whose look could turn people to stone."
- **L33 (`lesson_033.md`) / L48 (`lesson_048.md`)** — Moderate paraphrase risk.
  Add a sentence to each `### Extension Reading` reinforcing that the setting,
  characters, and ending must clearly differ from the original. (Both already
  diverge; just hold the line.)
- **L39 (`lesson_039.md`)** — Pattern 4 (`was inquiring about`) reproduces the
  original's mildly deceptive framing. No edit required, but ensure the reading
  models the honest version (Q5 already covers this); optionally note it in the
  reading direction.
- **L49 (`lesson_049.md`)** — Pattern 4 (`Because`) is a low-value slot. Optional
  swap to a more distinctive structure:
  ```
  4. `swept ... off ... and sent it crashing ...`
     - Source: `A gust of wind swept the bed off the roof and sent it crashing into the courtyard below.`
     - Focus: a vivid chain of cause and motion.
     - Must include: `swept` and `sent it crashing`
  ```

---

## Lessons that PASS unchanged

28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 45, 46, 47, 48, 49, 50, 51,
52, 53, 54, 55, 56, 57, 58, 59, 61, 63.

(L33, L39, L48, L49 have optional notes above but require no mandatory change.)

These are strengths to preserve, not change:
- Child-safety reframing (L35, L44, L46, L47, L49, L51, L53, L57).
- Cultural/ethical framing (L42, L39, L58, L60).
- Same-topic-new-scenario design and word banks that recycle the lesson's own
  target language.

---

## Acceptance checks (run after editing)

1. Only `lesson_plans/lesson_030.md`, `_040.md`, `_043.md`, `_044.md`, `_060.md`,
   `_062.md` are modified (plus any optional cards you chose to touch). Confirm
   with `git status --short`.
2. Each edited card still has exactly one `## Extension Practice Direction`
   section containing `### Extension Reading` and `### Sentence Writing`.
3. Reading-question lists are still numbered 1–5 and every question is answerable
   from the new passage (no "compare to the original", no vocabulary asides).
4. Sentence-writing items still have, for each pattern: a title, `Source`,
   `Focus`, and `Must include`. After G1, a card may have 3–5 patterns.
5. L44 no longer contains the `such a … that … dropped the bag` pattern, and L62
   reading no longer reads as a paraphrase of the original (new setting + new
   agents + trimmed word bank).
6. No script/audio/timeline/storyboard/extension-JSON files were changed.
