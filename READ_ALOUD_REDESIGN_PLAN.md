# Read Aloud Redesign Plan

This plan defines the platform change for adding a read-aloud practice layer to
the New Concept English 2 courseware.

Current implementation status:

- `Read Aloud` screen exists before `You Too`.
- Lessons 1-5 have `web/data/read_aloud/lesson_N.json`.
- Browser recording is local-first and stored in IndexedDB.
- `/api/pronunciation` forwards short 16 kHz WAV clips to Azure for assessment.
- Courseware `outro` pages and narration should mention `⓪ 跟读` before
  `① 生活场景`, including the concrete steps:
  `听课文全文 -> 听原音 -> 录一句 -> 获取反馈`.
- Parent/admin export is still a future enhancement.

## Core Decision

Merge the existing full-lesson audio experience and the new follow-reading
practice into one visible module named `Read Aloud`, but keep the learning
actions layered inside it.

Course order becomes:

1. `Story`
2. `Language Focus`
3. `Read Aloud`
4. `You Too`
5. `Cloze`
6. `CN -> EN`
7. `EN -> CN`
8. `Dictation`
9. `Summary`

The teaching logic is:

`understand the story -> read classic sentences aloud -> transfer into life`

The read-aloud module is placed before `You Too` because its purpose is to build
English feel gradually before asking the student to adapt the language to his own
life.

## Pedagogical Positioning

The module should feel like guided imitation, not a test.

- Do not ask the student to record and score the whole passage at first.
- Use the full passage for input: listening, rhythm, story flow.
- Use selected core sentences for output: repeat, record, compare, improve.
- Give one useful correction per attempt.
- Prefer warm feedback over heavy numeric ranking.
- Make retry feel normal and low-pressure.

The main success feeling should be:

`I can sound a little more like the sentence each time.`

## Module Shape

The visible module should be called `Read Aloud`.

Inside the module:

1. `Listen First`
   - Plays the existing full passage reading segment (`passage_normal`).
   - Uses the existing timeline and slide stage.
   - No scoring.
   - Goal: absorb the full story and rhythm.

2. `Read With Me`
   - Shows 5-8 selected sentences from the lesson.
   - Each sentence has:
     - play model sentence
     - record student voice
     - submit for pronunciation feedback
     - show one or two targeted suggestions
   - Goal: build pronunciation, rhythm, stress, and phrase memory.

3. `Try Again`
   - Lets the student repeat the same sentence.
   - Shows improvement gently, for example:
     - `This time was clearer.`
     - `Now just connect "whole day".`

Optional later phase:

4. `Read the Passage`
   - Full-passage recording.
   - Only unlock or suggest after sentence-level practice is comfortable.
   - This should not be part of the first implementation.

## Data Model

Add a per-lesson read-aloud file:

`web/data/read_aloud/lesson_N.json`

Suggested shape:

```json
{
  "lesson_id": 5,
  "mode": "guided_sentences",
  "intro_zh": "先听完整课文，再把几句关键句读顺。",
  "sentences": [
    {
      "id": "l5_s1",
      "text": "Yesterday, a pigeon carried the first message from Pinhurst to Silbury.",
      "focus_zh": "注意 carried the first message 的节奏。",
      "start": 239.526,
      "end": 244.422,
      "focus_words": ["carried", "message", "Pinhurst", "Silbury"]
    }
  ]
}
```

Fields:

- `lesson_id`: numeric lesson id.
- `mode`: initially `guided_sentences`.
- `intro_zh`: short student-facing instruction.
- `sentences`: 5-8 high-value lesson sentences.
- `id`: stable id for local progress.
- `text`: exact reference sentence.
- `focus_zh`: one pronunciation or rhythm focus.
- `start` and `end`: optional audio segment boundaries from timeline.
- `focus_words`: optional words to highlight in feedback.

The first version can derive `start` and `end` from `passage_normal` timeline
lines, because those lines already map to individual English passage sentences.

## Frontend Changes

Files likely involved:

- `web/lesson.html`
- `web/assets/app.js`
- `web/assets/style.css`

Add a new screen:

`data-screen="read_aloud"`

Stepper order should change from:

`you_too -> cloze -> cn_to_en -> en_to_cn -> dictation -> summary`

to:

`read_aloud -> you_too -> cloze -> cn_to_en -> en_to_cn -> dictation -> summary`

The stage should remain visible on `read_aloud` and `you_too`, but stay hidden on
answer-recall screens:

- hide stage: `cloze`, `cn_to_en`, `en_to_cn`, `dictation`
- show stage: `read_aloud`, `you_too`, `summary`

Read-aloud UI should include:

- full passage play controls, reusing the existing audio bar when possible
- sentence list
- per-sentence model play button
- record button
- submit button
- feedback area
- retry state

Avoid a separate second global audio player if possible. Passage and sentence
playback can reuse `#lesson-audio` by setting `currentTime` to the segment
`start`, playing, and pausing at `end`.

## Browser Recording

Use the browser microphone plus Web Audio to record one sentence as 16 kHz mono
WAV.

Reason: Azure's short-audio pronunciation REST path accepts WAV PCM or OGG OPUS.
Generating WAV in the browser avoids server-side audio transcoding and keeps the
serverless endpoint simple.

First implementation:

- request microphone permission only when the student clicks record
- record one sentence at a time
- keep recordings local-first by default
- upload recordings only transiently when pronunciation assessment is requested
- do not store raw audio in the online database
- show clear states: idle, recording, recorded, submitting, feedback

Supported format:

- browser records 16 kHz mono WAV
- server endpoint accepts JSON with a short base64 audio payload
- raw audio is forwarded transiently to Azure and is not stored server-side

## Recording Storage Policy

Use a local-first policy.

Default behavior:

1. The student records one sentence in the browser.
2. The browser keeps the audio blob locally.
3. When the student asks for feedback, the browser sends that one short audio
   clip to the pronunciation endpoint.
4. The server forwards it to the assessment provider.
5. The server returns normalized feedback.
6. The server does not save the raw audio.

This means read-aloud practice should not consume online database capacity. Raw
audio should not be written into the current grading database or email workflow.

Local archive behavior:

- Store recordings in browser `IndexedDB`, not `localStorage`.
- Store metadata with each attempt:
  - `lesson_id`
  - `sentence_id`
  - `attempt_id`
  - `created_at`
  - `duration_ms`
  - `reference_text`
  - `focus_words`
  - `scores`
  - `coach_zh`
  - audio blob
- Add a parent/admin export function later:
  - export selected lesson attempts as `.zip`
  - include audio files plus `metadata.json`
  - do not require cloud upload

Important limitation:

Browser-local storage is local to the current browser profile and device. It can
be cleared by the browser or lost if the user changes devices. If long-term
research analysis matters, add an explicit export button rather than relying on
browser storage forever.

Future optional cloud backup:

- If cloud sync is ever needed, store raw audio in object storage, not the
  relational/JSON grading database.
- Make it parent-controlled and opt-in.
- Use retention rules, for example keep only the latest N attempts per sentence
  or delete raw audio after export.

## Pronunciation Assessment API

Add a new serverless endpoint:

`web/api/pronunciation.ts`

Request:

- `lesson_id`
- `sentence_id`
- `reference_text`
- audio file blob
- token, if the site token is active

Response should be normalized for the frontend:

```json
{
  "overall": "good",
  "scores": {
    "accuracy": 82,
    "fluency": 76,
    "completeness": 90,
    "prosody": 74
  },
  "words": [
    { "word": "carried", "accuracy": 68, "hint_zh": "这个词可以读得更清楚一点。" }
  ],
  "coach_zh": "这一遍意思很清楚。下一遍只注意 carried 和 the first 连起来读。"
}
```

Implementation options:

1. Azure Speech Pronunciation Assessment
   - Best fit for reference-text read-aloud.
   - Current local environment already has Azure Speech TTS credentials, but the
     endpoint must verify whether the same resource supports pronunciation
     assessment.
   - May require adding `microsoft-cognitiveservices-speech-sdk` to `web`.

2. Fallback lightweight STT
   - If pronunciation assessment is not available, do speech-to-text and compare
     recognized text to the reference.
   - This can catch missing words but cannot reliably judge phoneme quality.
   - Good as a temporary fallback, not the final teaching experience.

First production target should use Azure pronunciation assessment if possible.

## Feedback Rules

The frontend should not dump raw API scoring onto the student.

Use scores internally to choose one correction:

- missing or skipped word -> completeness feedback
- repeated pauses -> fluency feedback
- low focus word accuracy -> word feedback
- otherwise -> rhythm or confidence encouragement

Student-facing feedback should be short:

- one encouragement sentence
- one concrete next attempt target

Examples:

- `这一遍已经很完整了。下一遍只注意 urgent message 这两个词连起来。`
- `message 很清楚。再试一次，把 covered the distance 读成一个更顺的节奏。`
- `这句读下来了。下一遍先慢一点，把 Pinhurst 和 Silbury 分清楚。`

Avoid:

- visible harsh red failing states
- full leaderboard-style scoring
- asking the student to fix many words at once

## Production Workflow Changes

After the platform change is accepted, update `LESSON_PRODUCTION_PLAN.md` so each
lesson production also creates:

`web/data/read_aloud/lesson_N.json`

Per-lesson design cards should add a small section:

`## Read Aloud Sentences`

It should list 5-8 sentences with the intended focus, for example:

```md
- `The bird covered the distance in three minutes.`
  - focus: `covered the distance` as one phrase, not word-by-word.
```

Normal lesson production should still be one lesson at a time.

## Migration Plan

Phase 1: plan and data contract

- Add this redesign plan.
- Decide final UI labels.
- Update future lesson cards to include read-aloud sentence choices.

Phase 2: static read-aloud UI

- Add `read_aloud` screen.
- Add `web/data/read_aloud/lesson_1.json` and `lesson_2.json` for existing
  completed lessons.
- Reuse existing audio/timeline for model playback.
- No microphone yet.

Phase 3: recording and local state

- Add microphone recording per sentence.
- Add local UI states and retry flow.
- Store only transient recordings in browser memory.

Phase 4: pronunciation endpoint

- Add Azure pronunciation endpoint.
- Normalize API output.
- Add warm coach feedback.
- Add fallback behavior when the service is unavailable.

Phase 5: production integration

- Update `LESSON_PRODUCTION_PLAN.md`.
- Update lesson 3+ plans with read-aloud sentence sections.
- Add validation for `web/data/read_aloud/lesson_N.json`.

## Acceptance Criteria

The redesign is ready when:

- `Read Aloud` appears before `You Too`.
- Existing full lesson audio still works.
- The student can play selected model sentences.
- The student can record one sentence at a time.
- The server returns pronunciation feedback for a recorded sentence.
- Feedback gives no more than one main correction per attempt.
- `You Too` remains the life-transfer step after read-aloud.
- `cloze`, translation, and dictation screens still hide the stage.
- Existing tests still pass, with new tests added for the read-aloud data shape.

## Open Decisions

1. UI label:
   - `Read Aloud`
   - `跟读`
   - `读顺这几句`

2. Feedback style:
   - show no numbers at all
   - show friendly bands such as `Good`, `Almost`, `Try once more`
   - show detailed scores only to parent/admin

3. Initial rollout:
   - retrofit Lessons 1-2 first
   - implement on Lesson 3 onward first
   - do both before continuing production
