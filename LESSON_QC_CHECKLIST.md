# Lesson QC Checklist

This checklist is for a QC sub-agent called by the production agent after a
single lesson has been produced and locally validated.

The QC sub-agent's job is to inspect the finished lesson like a fresh user and
return a clear release decision. By default, the QC sub-agent is read-only.

## Operating Rules

- You must be a newly spawned or otherwise independent QC agent/session. If you
  are the same agent that produced the lesson, stop and report that QC was not
  run. A production agent's self-check cannot satisfy the QC gate.
- Do not edit files unless the production agent or user explicitly asks you to
  fix something.
- Do not stage, commit, push, merge, or delete files.
- Read `LESSON_PRODUCTION_PLAN.md` first.
- Read the matching lesson plan, for example `lesson_plans/lesson_064.md`.
- Inspect only the target lesson and directly relevant shared code or tests.
- Open the lesson in a browser before giving a final decision.
- End the report with exactly one status: `PASS` or `NEEDS FIX`.
  Also include the independent QC context, such as `QC agent: <id>` or
  `QC session: separate Codex session`.

## Required Inputs

For Lesson N, inspect:

- `lesson_plans/lesson_NNN.md`
- `web/data/lessons.json` record for Lesson N
- `pipeline/scripts/lesson_N.script.md`
- `pipeline/scripts/lesson_N.storyboard.json`
- `web/data/you_too/lesson_N.json`
- `web/data/read_aloud/lesson_N.json`
- `web/audio/lesson_N.mp3`
- `web/audio/lesson_N.timeline.json`
- `web/audio/lesson_N_frame_1.webp` through `lesson_N_frame_4.webp`
- Any platform files changed by the production diff

## Static QC

Check that:

- The produced lesson follows the approved lesson plan's hook, modern bridge,
  language focus, cultural background, and visual direction.
- The script has all required scene types: `hook`, `retell` x4, `discuss`,
  `passage_normal`, exactly 3 `vocab` blocks, `grammar`, `you_too`, `outro`.
- The opening hook is short and does not retell the whole passage.
- The teacher-student dialogue does not repeat the four-frame retell.
- The outro lists the full student workflow, including `⓪ 跟读` before
  `① 生活场景`.
- The storyboard has exactly 4 frames and includes `visual_consistency`.
- The four image prompts keep the same protagonist or core object unless the
  lesson intentionally has no recurring subject.
- The image prompts do not ask for visible text boxes, captions, labels, or
  prompt text inside the illustration unless the lesson plan explicitly requires
  text in the image.
- `you_too` and `read_aloud` JSON are lesson-local and match the lesson focus.
- `read_aloud` has 5-8 high-value sentences with `focus_zh`, `start`, `end`,
  and `focus_words`.
- Translation chunks, if present in `web/data/lessons.json`, have equal Chinese
  and English segment counts.

## Media QC

Check that:

- MP3, timeline JSON, and all 4 WebP frames exist and are non-trivial in size.
- The timeline has monotonic timing and contains all required scene types.
- Karaoke highlighting appears during `passage_normal`.
- Clicking a passage sentence plays only that sentence, not the rest of the
  passage.
- The read-aloud sentence timings line up with the lesson audio.
- The first hook visual appears without flicker or blank image behavior.

## Browser QC

Open:

`http://127.0.0.1:5500/lesson.html?id=N&k=dev`

If the server is not running, ask the production agent to start:

`cd web && npx tsx dev-server.ts`

In the browser, check:

- The page loads without blocking errors.
- The console has no new lesson-breaking errors.
- The stepper order is correct for the current platform workflow.
- The courseware stage renders, audio controls work, and the visual is not
  blank.
- Passage karaoke highlighting is visible.
- The read-aloud section shows the intended guided sentences and buttons.
- `生活场景`, `完形`, `中译英`, `英译中`, `默写`, and `总结` are reachable.
- Any optional sections enabled for the lesson, such as `拓展阅读` or
  `句式仿写`, are reachable, submit correctly, clear correctly, and show a next
  button after submission.
- Mobile-sized layout does not have obvious overlapping text or cut-off buttons.

## Regression QC

Check for accidental cross-lesson or platform damage:

- `git status --short` shows only intentional files.
- Shared code changes, if any, are justified by the user's request.
- A nearby existing lesson still opens and does not show optional sections meant
  only for the target lesson.
- Run or confirm relevant tests, normally:
  - `python3 tests/test_pipeline.py`
  - `node tests/test_slide_player.mjs`
  - `node tests/test_read_aloud_data.mjs`

## Report Format

Use this exact structure:

```markdown
## QC Result
QC agent: <new sub-agent id or separate session>
PASS
```

or:

```markdown
## QC Result
QC agent: <new sub-agent id or separate session>
NEEDS FIX

## Findings
- [P1] Short title of issue
  - Evidence: file, browser URL, screenshot note, console message, or command.
  - Impact: what the student or production flow experiences.
  - Suggested fix: concrete action for the production agent.
```

Severity guide:

- `P0`: lesson cannot load, production data is corrupted, or publishing would
  break other lessons.
- `P1`: core learning flow is broken, such as missing audio, missing next
  button, broken read-aloud, wrong lesson text, or unusable images.
- `P2`: quality issue that should be fixed before release, such as weak plan
  alignment, unclear exercise, minor layout problem, or console noise.
- `P3`: polish suggestion that should not block release.
