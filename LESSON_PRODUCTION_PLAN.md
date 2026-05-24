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
- `lesson_plans/lesson_013.md` - Lesson 13, `The Greenwood Boys`
- `lesson_plans/lesson_014.md` - Lesson 14, `Do you speak English?`
- `lesson_plans/lesson_015.md` - Lesson 15, `Good news`
- `lesson_plans/lesson_016.md` - Lesson 16, `A polite request`
- `lesson_plans/lesson_017.md` - Lesson 17, `Always young`
- `lesson_plans/lesson_018.md` - Lesson 18, `He often does this!`
- `lesson_plans/lesson_019.md` - Lesson 19, `Sold out`
- `lesson_plans/lesson_020.md` - Lesson 20, `One man in a boat`
- `lesson_plans/lesson_021.md` - Lesson 21, `Mad or not?`
- `lesson_plans/lesson_022.md` - Lesson 22, `A glass envelope`
- `lesson_plans/lesson_023.md` - Lesson 23, `A new house`
- `lesson_plans/lesson_024.md` - Lesson 24, `It could be worse`
- `lesson_plans/lesson_025.md` - Lesson 25, `Do the English speak English?`
- `lesson_plans/lesson_026.md` - Lesson 26, `The best art critics`
- `lesson_plans/lesson_027.md` - Lesson 27, `A wet night`
- `lesson_plans/lesson_028.md` - Lesson 28, `No parking`
- `lesson_plans/lesson_029.md` - Lesson 29, `Taxi!`
- `lesson_plans/lesson_030.md` - Lesson 30, `Football or polo?`
- `lesson_plans/lesson_031.md` - Lesson 31, `Success story`
- `lesson_plans/lesson_032.md` - Lesson 32, `Shopping made easy`
- `lesson_plans/lesson_033.md` - Lesson 33, `Out of the darkness`
- `lesson_plans/lesson_034.md` - Lesson 34, `Quick work`
- `lesson_plans/lesson_035.md` - Lesson 35, `Stop thief!`
- `lesson_plans/lesson_036.md` - Lesson 36, `Across the Channel`
- `lesson_plans/lesson_037.md` - Lesson 37, `The Olympic Games`
- `lesson_plans/lesson_038.md` - Lesson 38, `Everything except the weather`
- `lesson_plans/lesson_039.md` - Lesson 39, `Am I all right?`
- `lesson_plans/lesson_040.md` - Lesson 40, `Food and talk`
- `lesson_plans/lesson_041.md` - Lesson 41, `Do you call that a hat?`
- `lesson_plans/lesson_042.md` - Lesson 42, `Not very musical`
- `lesson_plans/lesson_043.md` - Lesson 43, `Over the South Pole`
- `lesson_plans/lesson_044.md` - Lesson 44, `Through the forest`
- `lesson_plans/lesson_045.md` - Lesson 45, `A clear conscience`
- `lesson_plans/lesson_046.md` - Lesson 46, `Expensive and uncomfortable`
- `lesson_plans/lesson_047.md` - Lesson 47, `A thirsty ghost`

When future lessons are discussed, add one new file:

- `lesson_plans/lesson_048.md`
- etc.

Do not keep lesson-specific design cards in this root plan. This file is the
stable workflow; each `lesson_plans/lesson_NNN.md` file is the source of truth
for a specific lesson.

## Planning Commit Rule

When a planning thread creates a new course design card:

1. Create only the new `lesson_plans/lesson_NNN.md` file.
2. Update only this root plan's per-lesson index and next future lesson slot.
3. Run `git status --short`.
4. Stage only the new lesson plan and this root plan. Do not stage unrelated
   production assets or files from other sessions.
5. Commit with a concise message such as `Add Lesson N planning card`.
6. Push the current branch to `origin` immediately so production threads can
   read the new plan.

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
   - Add a top-level `visual_consistency` string in the storyboard JSON. This
     must describe the recurring protagonist or core object in English:
     age range, hair, face shape, clothing colors, build, mood, and key props.
     Each of the 4 frame prompts should reuse the same character/object wording
     instead of inventing a new-looking person in each frame.
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

5. **Commit and push**
   - After a lesson is fully produced and validated, commit and push the lesson
     automatically.
   - First run `git status --short`.
   - Stage only the files for this lesson and any explicit plan/index files that
     were intentionally changed for this lesson. Do not stage unrelated local
     work.
   - Use a concise commit message such as
     `Produce Lesson N courseware assets`.
   - Push the current branch to `origin` so GitHub and Vercel receive the
     completed lesson.

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
- The storyboard includes `visual_consistency`, and all 4 image prompts preserve
  the same protagonist or core object unless the lesson intentionally has no
  recurring subject.
- The per-lesson `you_too` JSON follows the course design card.
- The per-lesson `read_aloud` JSON has 5-8 high-value sentences with
  `focus_zh`, `start`, `end`, and `focus_words`.
- The lesson audio, timeline, and 4 WebP frames exist.
- The lesson can be opened at `/lesson.html?id=N`.
- The script clearly follows the modern bridge and story focus from the
  per-lesson plan.
- The final `outro` page and narration explicitly include `⓪ 跟读` before
  `① 生活场景`, with the concrete read-aloud steps.
- The completed lesson is committed and pushed, unless the user explicitly asks
  for a local-only run.
