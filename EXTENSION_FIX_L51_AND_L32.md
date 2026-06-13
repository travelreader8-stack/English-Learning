# L51 Fix + Lesson 32 Generated-Data Review

Reviewed against `origin/main` HEAD `39163a3` via the GitHub API.
This environment's local checkout is ~30 commits behind and `git fetch` fails
here (`git-remote-https … early EOF`), so these changes could not be applied in
place — apply them on a healthy, up-to-date checkout (e.g. via Codex), then run
QC before any commit/push.

---

## Part A — Fix Lesson 51 (card direction only; not yet produced)

`web/data/extension/index.json` registers only `[24…32]`, so Lesson 51 has **no
generated JSON yet**. The fix is to the planning card only; no regeneration is
needed.

**File:** `lesson_plans/lesson_051.md`, section `## Extension Practice Direction`
→ `### Sentence Writing`.

**Problem:** patterns 1 and 5 drill the same `so + adjective + that` frame
(`things got so bad that …` and `so strict that …`), wasting a slot in a set
that should be five distinct high-value structures.

**Edit — replace pattern 1 only.** Keep pattern 5 (it carries the lesson's comic
point). Replace:

```
1. `things got so bad that ...`
   - Source: `Things got so bad recently that he decided to go on a diet.`
   - Focus: a situation becoming serious enough to cause a decision.
   - Must include: `so bad` and `that`
```

with:

```
1. `hurriedly hid ... under ...`
   - Source: `He led me into his room and hurriedly hid a large parcel under his desk.`
   - Focus: a quick, secret action that shows guilt or embarrassment.
   - Must include: `hurriedly hid` and `under`
```

Result: five distinct patterns — `hurriedly hid … under …` / `First of all` /
`… which were forbidden` / `It was obvious that` / `so strict that`. The new one
is vivid, on-theme (the guilty-hiding beat the reading keeps), and child-safe.

---

## Part B — Lesson 32 generated data review (`web/data/extension/lesson_32.json`)

Title: `The Free Headphones`.

### Mechanical QC — PASS
- Valid JSON; correct shape (`reading` + `writing`, patterns use `id/title/
  source/focus_zh/task_zh/must_include/min_words/sample/tip_zh`).
- Passage 136 words (within 90–140).
- 5 MCQs, each with one correct, unique answer and plausible distractors.
- 5/5 writing samples satisfy their own `must_include` + `min_words`.

### Writing section — PASS
The five patterns are the lesson's signature comparison structures and are well
chosen and distinct: `not so … as … once were`, `greater than ever before`,
`fewer … than usual`, `as quickly as possible`, `found out that …`. Keep them.

### Reading section — NEEDS FIX (criterion 3: avoids repeating the main lesson)
The passage is a modernized **re-skin of the original's exact plot**, not a new
case in the same theme. Beat-by-beat overlap with NCE L32:

| Original "Shopping made easy" | Generated "The Free Headphones" |
|---|---|
| detective watches a regular customer (every Monday) | detective watches Ryan (same time every week) |
| buys a few small articles | buys a cheap cable + batteries |
| chooses one of the most expensive **dresses** | chooses one of the most expensive **headphones** |
| assistant wraps it **as quickly as possible** | assistant packs it **as quickly as possible** |
| walks out **without paying** | walks out **without paying** |
| arrested | arrested |
| assistant is her **daughter** | assistant is his **cousin** |

Eight beats map ~1:1; only the skin changes (electronics / self-checkout /
camera, cousin vs daughter, "belonged to the shop" ending). The `intro_zh`
claims "不复述原文", but this is essentially the original with swapped nouns —
the same issue flagged for Lessons 24–25.

**Root cause:** L32's card (`lesson_plans/lesson_032.md`) lacks the explicit
anti-paraphrase guard that Lessons 33–63 now carry. Its direction only says
"reuse the honesty theme and the hidden-collusion twist", with no "do not retell
the detective→small-items→most-expensive→assistant-wraps→leaves→relative
sequence".

**Fix (two steps):**
1. **Card** `lesson_plans/lesson_032.md` → `### Extension Reading`: add a guard
   matching the 33–63 style, e.g.:
   > It must NOT retell the original detective-watches-a-regular →
   > small-items → most-expensive-item → assistant-wraps-fast →
   > walks-out-without-paying → relative-reveal sequence. Use a genuinely
   > different case in the same honesty theme (e.g. a different way the
   > collusion is noticed, a different kind of item, or a different reveal),
   > and keep theft clearly dishonest.
2. **Data** `web/data/extension/lesson_32.json`: regenerate **only**
   `reading.passage`, `reading.questions`, and `reading.intro_zh` as a new case
   (keep `word_bank`, and keep the whole `writing` section unchanged). Target
   90–140 words, 5 MCQs answerable from the new passage.

   Differentiation ideas (pick one, don't replay all original beats): the
   collusion is spotted by a **receipt/stock mismatch** rather than by watching a
   weekly regular; or the "free" item is exposed at a **returns counter**; or a
   **price-tag swap** instead of wrap-and-walk. Keep the comparison language
   (`not so … as`, `greater than ever before`, `fewer … than usual`,
   `as quickly as possible`, `found out that`) so the reading still supports the
   writing patterns.

### Minor (P3, optional)
- `intro_zh`: "方便购物不能取消诚实" is slightly stiff — e.g. "购物再方便，也不能
  省去诚实" reads better.
- Q1 `explanation_zh` says "Ryan had come in …" while the passage says "Ryan
  came in …"; align the tense.

---

## How to apply
1. On a healthy, up-to-date checkout (`git pull --ff-only` on a machine where the
   git transport works, or via Codex), apply Part A and Part B.
2. For L32, this is an extension-only change: write set is
   `web/data/extension/lesson_32.json` (+ the `lesson_plans/lesson_032.md` card).
   Do not regenerate script/audio/timeline/storyboard.
3. Re-run the criterion-5 checks on the regenerated L32 reading (answer
   uniqueness, English, natural Chinese, 90–140 words, not a paraphrase).
4. Run the QC sub-agent gate per `LESSON_PRODUCTION_PLAN.md`. Do not commit/push
   until QC passes and the user approves.
