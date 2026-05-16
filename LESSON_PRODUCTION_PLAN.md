# Lesson Production Plan

This file is the handoff contract between the course-planning thread and any
development thread. If a new Codex thread is opened in this folder and the user
says "开始生产 Lesson N", read this file first, then read the matching
per-lesson plan under `lesson_plans/`.

## Project Shape

- Frontend app: `web/`
- Lesson data: `web/data/lessons.json`
- Per-lesson living-scene data: `web/data/you_too/lesson_N.json`
- Per-lesson read-aloud data: `web/data/read_aloud/lesson_N.json`
- Generated lesson scripts: `pipeline/scripts/lesson_N.script.md`
- Generated storyboards: `pipeline/scripts/lesson_N.storyboard.json`
- Lesson media: `web/audio/lesson_N.mp3`, `web/audio/lesson_N.timeline.json`,
  `web/audio/lesson_N_frame_1.webp` through `lesson_N_frame_4.webp`
- Local dev server: `cd web && npx tsx dev-server.ts`

## Production Rule

Do not mechanically batch-generate lessons. Each lesson needs a course design
card first. The design card defines the modern bridge, story hook, language
focus, living-scene exercise, and visual direction.

For a lesson production thread:

1. Read this file.
2. Read the matching per-lesson plan, for example
   `lesson_plans/lesson_003.md`.
3. Read the requested lesson from `web/data/lessons.json`.
4. Check whether any target files already exist.
5. Produce only the files for that lesson unless the user explicitly asks for a
   platform or shared-code change.
6. Run focused validation before reporting completion.

## Per-Lesson Plans

Course design cards live in `lesson_plans/`:

- `lesson_plans/lesson_003.md` - Lesson 3, `Please send me a card`
- `lesson_plans/lesson_004.md` - Lesson 4, `An exciting trip`
- `lesson_plans/lesson_005.md` - Lesson 5, `No wrong numbers`
- `lesson_plans/lesson_006.md` - Lesson 6, `Percy Buttons`
- `lesson_plans/lesson_007.md` - Lesson 7, `Too late`
- `lesson_plans/lesson_008.md` - Lesson 8, `The best and the worst`
- `lesson_plans/lesson_009.md` - Lesson 9, `A cold welcome`
- `lesson_plans/lesson_010.md` - Lesson 10, `Not for jazz`
- `lesson_plans/lesson_011.md` - Lesson 11, `One good turn deserves another`
- `lesson_plans/lesson_012.md` - Lesson 12, `Goodbye and good luck`

When future lessons are discussed, add one new file:

- `lesson_plans/lesson_013.md`
- etc.

Do not keep lesson-specific design cards in this root plan. This file is the
stable workflow; each `lesson_plans/lesson_NNN.md` file is the source of truth
for a specific lesson.

## Write Boundaries

For "开始生产 Lesson N", the normal write set is limited to:

- `pipeline/scripts/lesson_N.script.md`
- `pipeline/scripts/lesson_N.storyboard.json`
- `web/data/you_too/lesson_N.json`
- `web/data/read_aloud/lesson_N.json`
- `web/audio/lesson_N.mp3`
- `web/audio/lesson_N.timeline.json`
- `web/audio/lesson_N_frame_1.webp`
- `web/audio/lesson_N_frame_2.webp`
- `web/audio/lesson_N_frame_3.webp`
- `web/audio/lesson_N_frame_4.webp`

Do not edit shared files unless the user separately asks for platform work:

- `web/assets/app.js`
- `web/assets/style.css`
- `web/assets/slide-player.js`
- `web/api/_shared.ts`
- `web/data/lessons.json`
- `pipeline/generate_podcast_scripts.py`
- `pipeline/hybrid_tts_render.py`
- `pipeline/generate_storyboard_images.py`
- `tests/*`

If a shared-file defect blocks production, stop and explain the defect instead
of silently patching the platform.

## Standard Production Steps

1. **Preflight**
   - Load the lesson record from `web/data/lessons.json`.
   - Inspect existing lesson assets, if any.
   - Confirm that the course design card exists at
     `lesson_plans/lesson_NNN.md`.

2. **Script and exercise assets**
   - Create `pipeline/scripts/lesson_N.script.md`.
   - Create `pipeline/scripts/lesson_N.storyboard.json`.
   - Create `web/data/you_too/lesson_N.json`.
   - Create `web/data/read_aloud/lesson_N.json` with 5-8 guided sentences.
   - Keep `[EN]...[/EN]` tags balanced.
   - Include all required scenes: `hook`, `retell` x4, `discuss`,
     `passage_normal`, exactly 3 `vocab` blocks, `grammar`, `you_too`, `outro`.
   - The `outro` must mention the full practice order and the concrete
     read-aloud steps:
     `⓪ 跟读：听课文全文 -> 听原音 -> 录一句 -> 获取反馈`, then
     `① 生活场景`, `② 完形`, `③ 中译英`, `④ 英译中`, `⑤ 默写`.

3. **Media**
   - Render audio and timeline:
     `python3 pipeline/hybrid_tts_render.py pipeline/scripts/ web/audio/ --only N`
   - Generate 4 storyboard images:
     `python3 pipeline/generate_storyboard_images.py pipeline/scripts/ web/audio/ --only N`

4. **Validation**
   - Verify target files exist and are non-trivial in size.
   - Verify the timeline has all required scene types, 4 retell frames, 3 vocab
     words, and monotonic timing.
   - Run baseline tests that do not require changing shared files:
     `python3 tests/test_pipeline.py`
     `node tests/test_slide_player.mjs`
   - If the local server is needed:
     `cd web && npx tsx dev-server.ts`
     then open `http://127.0.0.1:5500/lesson.html?id=N`.

## Course Design Principles

New Concept English is old, but the courseware should not feel like a museum.
For each lesson, connect:

`old object or old life scene -> modern equivalent -> unchanged emotion or human
pattern -> English expression`

Do not replace the original text. Preserve the classic article, but build a
modern bridge around it so a present-day child can understand why it still
matters.

The courseware should feel like:

- classic short text
- modern explanation
- story/punchline first, grammar second
- only 2-4 language points per lesson
- living-scene transfer into the student's own life

## Generic Acceptance Criteria

A lesson is ready only when:

- The per-lesson script exists and follows the required scene structure.
- The per-lesson storyboard has exactly 4 frames.
- The per-lesson `you_too` JSON follows the course design card.
- The per-lesson `read_aloud` JSON has 5-8 high-value sentences with
  `focus_zh`, `start`, `end`, and `focus_words`.
- The lesson audio, timeline, and 4 WebP frames exist.
- The lesson can be opened at `/lesson.html?id=N`.
- The script clearly follows the modern bridge and story focus from the
  per-lesson plan.
- The final `outro` page and narration explicitly include `⓪ 跟读` before
  `① 生活场景`, with the concrete read-aloud steps.
