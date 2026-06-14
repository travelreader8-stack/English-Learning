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
- Per-lesson extension practice data: `web/data/extension/lesson_N.json`
- Extension practice registry: `web/data/extension/index.json`
- Generated lesson scripts: `pipeline/scripts/lesson_N.script.md`
- Generated storyboards: `pipeline/scripts/lesson_N.storyboard.json`
- Lesson media: `web/audio/lesson_N.mp3`, `web/audio/lesson_N.timeline.json`,
  `web/audio/lesson_N_frame_1.webp` through `lesson_N_frame_4.webp`
- QC checklist: `LESSON_QC_CHECKLIST.md`
- Local dev server: `cd web && npx tsx dev-server.ts`

## Production Rule

Do not mechanically batch-generate lessons. Each lesson needs a course design
card first. The design card defines the modern bridge, story hook, language
focus, living-scene exercise, and visual direction.

## Courseware Section Responsibility

Avoid repeating the same full passage explanation across multiple courseware
sections. Each section should have a distinct job:

- Opening hook:
  - Raise interest and frame the core question in 4-6 spoken lines.
  - Do not retell the full passage.
- Four `retell` frames:
  - This is the main place to walk through the passage in order.
  - Use Chinese-first scene anchors with short English chunks.
- Teacher-student dialogue:
  - Do not repeat the four-frame retell script.
  - Deepen one or two ideas that the retell did not fully explore, such as
    cultural background, moral tension, tone, or a useful language contrast.
- Vocabulary and grammar:
  - Explain the words and structures that make the lesson work.
  - Do not use this section as another full plot narration.
- Practice and living-scene transfer:
  - Move the language into a modern, child-understandable situation.
  - Do not restart the original passage summary.

When a lesson card gives a specific teacher-student dialogue topic, production
should use that topic as the dialogue's purpose instead of replaying the story.

For a lesson production thread:

1. Read this file.
2. Read the matching per-lesson plan, for example
   `lesson_plans/lesson_003.md`.
3. Read the requested lesson from `web/data/lessons.json`.
4. Check whether any target files already exist.
5. Produce only the files for that lesson unless the user explicitly asks for a
   platform or shared-code change.
6. Run focused validation before reporting completion.
7. Run the QC sub-agent gate before committing or pushing `main`.

## Per-Lesson Plans

Course design cards live in `lesson_plans/`:

- `lesson_plans/lesson_001.md` - Lesson 1, `A private conversation`
- `lesson_plans/lesson_002.md` - Lesson 2, `Breakfast or lunch?`
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
- `lesson_plans/lesson_048.md` - Lesson 48, `Did you want to tell me something?`
- `lesson_plans/lesson_049.md` - Lesson 49, `The end of a dream`
- `lesson_plans/lesson_050.md` - Lesson 50, `Taken for a ride`
- `lesson_plans/lesson_051.md` - Lesson 51, `Reward for virtue`
- `lesson_plans/lesson_052.md` - Lesson 52, `A pretty carpet`
- `lesson_plans/lesson_053.md` - Lesson 53, `Hot snake`
- `lesson_plans/lesson_054.md` - Lesson 54, `Sticky fingers`
- `lesson_plans/lesson_055.md` - Lesson 55, `Not a gold mine`
- `lesson_plans/lesson_056.md` - Lesson 56, `Faster than sound!`
- `lesson_plans/lesson_057.md` - Lesson 57, `Can I help you, madam?`
- `lesson_plans/lesson_058.md` - Lesson 58, `A blessing in disguise?`
- `lesson_plans/lesson_059.md` - Lesson 59, `In or out?`
- `lesson_plans/lesson_060.md` - Lesson 60, `The future`
- `lesson_plans/lesson_061.md` - Lesson 61, `Trouble with the Hubble`
- `lesson_plans/lesson_062.md` - Lesson 62, `After the fire`
- `lesson_plans/lesson_063.md` - Lesson 63, `She was not amused`
- `lesson_plans/lesson_064.md` - Lesson 64, `The Channel Tunnel`

When future lessons are discussed, add one new file:

- `lesson_plans/lesson_065.md`
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
- `web/data/extension/lesson_N.json` when extension practice is enabled for
  the target lesson
- `web/data/extension/index.json` only to register or unregister the target
  lesson's extension practice
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

## Extension Practice Policy

Lesson 24 validated the extension-practice pattern. Extension practice can now
be produced for any lesson with an `Extension Practice Direction` in its lesson
plan. For Lessons 1-23 this is a backfill task on already-produced lessons; for
Lesson 25 and later, full lesson production should include two additional
practice sections unless the user explicitly asks for a local-only or legacy
flow:

1. `拓展阅读`
2. `句式仿写`

These sections live in `web/data/extension/lesson_N.json`, and the lesson number
must be registered in `web/data/extension/index.json`.

For an extension-only update to an already produced lesson, do not regenerate
the script, audio, timeline, or storyboard images unless the user explicitly
asks for a full lesson refresh or QC finds a defect in those assets. The normal
extension-only write set is:

- `web/data/extension/lesson_N.json`
- `web/data/extension/index.json`

The extension reading should be an original, controlled, same-topic passage. Do
not copy an internet article. Keep it close enough to the lesson topic to reuse
the target vocabulary and emotional situation, but do not merely paraphrase the
original New Concept passage. A typical target is 90-140 English words with 4-6
comprehension questions.

For extension reading multiple-choice questions, distribute correct answers
across the option positions. Do not leave all correct answers in A, or clustered
only in A/B. For a typical 5-question reading set, use at least 3 different
correct-answer positions, include at least one answer in C or D, and put no more
than 2 correct answers in the same position. After shuffling options, verify
that every `answer_index` still points to the correct option.

The sentence-writing section should contain 3-5 carefully chosen patterns from
the lesson. Do not pick random easy sentences. Prefer:

- fixed collocations or phrases worth memorizing
- grammar structures the student needs to internalize
- vivid or polished expressions that can improve writing
- compact story-turning sentences that are useful for retelling

Each writing pattern should include the original source sentence, a Chinese
focus explanation, a student-facing writing task, `must_include` checks,
`min_words`, a sample answer, and a short coaching tip.

If the lesson plan contains a specific extension-practice idea, follow the
lesson plan first. Otherwise, use the Lesson 24 extension pilot as the model.

## Translation Practice Chunk Policy

The `③ 中译英` and `④ 英译中` screens pair Chinese source segments with English
reference segments. Misaligned segment counts cause the AI grader to compare the
student's answer against the wrong reference.

- Do not add or preserve uneven `chunks` in `web/data/lessons.json`.
- If a lesson has `chunks`, `chunks.zh.length` must equal `chunks.en.length`.
- Prefer 3-5 meaning-based chunks for lessons where detailed translation
  feedback matters.
- If a lesson has no chunks, the frontend may auto-split the passage. When the
  auto-split Chinese and English counts differ, the frontend intentionally falls
  back to one whole-passage segment so references do not drift.
- During production validation, `python3 tests/test_pipeline.py` must pass; it
  checks all 96 lessons for uneven manual chunks and reports how many currently
  use the whole-passage fallback.

## Standard Production Steps

1. **Preflight**
   - Load the lesson record from `web/data/lessons.json`.
   - Inspect existing lesson assets, if any.
   - Confirm that the course design card exists at
     `lesson_plans/lesson_NNN.md`.
   - If the lesson already has `chunks`, confirm Chinese and English chunk
     counts are equal before producing or publishing.

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
   - For any lesson whose plan contains an `Extension Practice Direction`,
     create `web/data/extension/lesson_N.json` and register the lesson in
     `web/data/extension/index.json`.
   - Keep `[EN]...[/EN]` tags balanced.
   - Include all required scenes: `hook`, `retell` x4, `discuss`,
     `passage_normal`, exactly 3 `vocab` blocks, `grammar`, `you_too`, `outro`.
   - Keep the opening `hook` short. It should orient the student to the core
     bridge, object, role, or joke in 4-6 spoken lines, not retell the full
     passage. The full plot belongs in the four `retell frame=N` scenes.
   - Avoid duplicate narration between `hook` and `retell`. Do not put a full
     Chinese story spine or all major plot turns in `hook` if the same sequence
     will be taught frame by frame. A good `hook` should answer "what should I
     notice?" rather than "what happens from beginning to end?"
   - Because the lesson page shows the first visual during the early narration,
     a long `hook` makes the first frame stay on screen too long. If a lesson
     needs extra background, split it into the relevant retell frame or
     `discuss` scene instead of loading it all into `hook`.
   - The `outro` must mention the full practice order and the concrete
     read-aloud steps:
     `⓪ 跟读：听课文全文 -> 听原音 -> 录一句 -> 获取反馈`, then
     `① 生活场景`, `② 完形`, `③ 中译英`, `④ 英译中`, and, when extension
     practice is enabled, `⑤ 拓展阅读`, `⑥ 句式仿写`, then `⑦ 默写`.
     For lessons without extension practice, the final station remains
     `⑤ 默写`.

3. **Media**
   - Render audio and timeline:
     `python3 pipeline/hybrid_tts_render.py pipeline/scripts/ web/audio/ --only N`
   - Generate 4 storyboard images:
     `python3 pipeline/generate_storyboard_images.py pipeline/scripts/ web/audio/ --only N`

4. **Validation**
   - Verify target files exist and are non-trivial in size.
   - Verify the timeline has all required scene types, 4 retell frames, 3 vocab
     words, and monotonic timing.
   - Verify translation practice segmentation is safe: manual `chunks`, if
     present, must be equal length; otherwise the frontend whole-passage fallback
     is acceptable.
   - For any lesson whose plan contains an `Extension Practice Direction`,
     verify `web/data/extension/lesson_N.json` exists, is registered in
     `web/data/extension/index.json`, and contains both `reading` and
     `writing` sections.
   - For extension reading multiple-choice questions, verify the correct-answer
     positions are distributed rather than front-loaded in A/B, and verify each
     `answer_index` after shuffling options.
   - Run baseline tests that do not require changing shared files:
     `python3 tests/test_pipeline.py`
     `node tests/test_slide_player.mjs`
   - If the local server is needed:
     `cd web && npx tsx dev-server.ts`
     then open `http://127.0.0.1:5500/lesson.html?id=N`.

5. **QC sub-agent gate**
   - After production validation passes, the production agent must spawn a QC
     sub-agent before committing or pushing `main`.
   - Independence is mandatory. A QC pass is valid only if it comes from a
     different Codex agent context than the production agent. The production
     agent's own checks are local validation / pre-QC only and must not be
     reported as the QC gate.
   - Acceptable QC contexts are:
     - a newly spawned multi-agent QC sub-agent in the production session; or
     - a separate user-opened Codex session whose only job is QC for this
       lesson.
   - The same agent that produced the lesson must not mark its own work as
     `PASS`, even if it has opened the browser and run tests.
   - The QC sub-agent must read `LESSON_QC_CHECKLIST.md`, this root plan, the
     matching `lesson_plans/lesson_NNN.md`, and the produced lesson files.
   - The QC sub-agent is read-only by default: it must inspect, open the lesson
     in a browser, and report findings, but it must not edit files, stage,
     commit, or push.
   - The QC report must end with exactly one status:
     `PASS` or `NEEDS FIX`.
   - The QC report must also identify the independent QC context, for example
     `QC agent: <sub-agent id>` or `QC session: separate Codex session`.
   - If the QC report is `NEEDS FIX`, the production agent fixes the issues and
     runs the QC sub-agent again. Do not publish after a failed or incomplete
     QC pass.
   - If sub-agent tooling is unavailable, stop after local validation and tell
     the user that QC could not be run. Do not push `main`.

6. **Commit and push**
   - Commit and push only after production validation passes and the latest QC
     sub-agent report is `PASS`.
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
- For lessons with an `Extension Practice Direction`, the per-lesson extension
  JSON exists, is registered in `web/data/extension/index.json`, and contains:
  - one original same-topic reading passage with comprehension questions
  - one sentence-writing section with carefully selected source patterns,
    `must_include`, `min_words`, samples, and coaching tips
  - reading-question correct answers distributed across option positions, not
    concentrated in A or the first two options
- The lesson audio, timeline, and 4 WebP frames exist.
- The lesson can be opened at `/lesson.html?id=N`.
- Translation practice cannot pair a Chinese segment with the wrong English
  reference: manual chunks are equal length, or the lesson uses the frontend's
  whole-passage fallback.
- The script clearly follows the modern bridge and story focus from the
  per-lesson plan.
- The `hook` is brief and non-duplicative; it sets up the key bridge or joke
  without retelling the full passage before the retell frames begin.
- The final `outro` page and narration explicitly include `⓪ 跟读` before
  `① 生活场景`, with the concrete read-aloud steps.
- A QC sub-agent has inspected the produced lesson with
  `LESSON_QC_CHECKLIST.md` from an independent Codex agent context and returned
  `PASS`.
- The completed lesson is committed and pushed only after that QC `PASS`, unless
  the user explicitly asks for a local-only run.
