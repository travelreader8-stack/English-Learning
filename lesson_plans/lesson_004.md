# Lesson 4 Plan - An Exciting Trip

This is the source-of-truth design card for producing Lesson 4. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 4 assets.

## Basic Info

- Lesson: 4
- Title: `An exciting trip`
- Chinese title: `激动人心的旅行`
- Core bridge: `信过时了，但远方的人生更新没过时。`

## Production Warning

The current `web/data/lessons.json` text contains this likely OCR/parse error:

- Current: `so he is fending this trip very exciting.`
- Correct: `so he is finding this trip very exciting.`

Do not reproduce `fending` in the Lesson 4 script, audio, timeline, or exercises.
If production requires the lesson data itself to be corrected, stop and ask for a
shared-data edit because `web/data/lessons.json` is outside the normal per-lesson
write set.

## Lesson Positioning

This lesson is not mainly about receiving a physical letter. A letter from
abroad was once a slow long-distance life update: where someone is, how long
they have been there, what they have already done, and where they will go next.

For a child today, connect it to WeChat messages, travel photos, map locations,
video calls, social posts, or seeing an older sibling/friend studying, working,
or traveling far away.

The real topic is the feeling that the world suddenly becomes bigger because a
familiar person is living a new life far from home.

## One-Sentence Hook

A message comes from someone you know, but the map behind that message is huge:
six months in Australia, many places already visited, a car just bought, and
more cities coming next.

## Story Focus

This lesson does not have a sharp joke like Lesson 1 or Lesson 3. Its strength is
map movement and life expansion:

1. The narrator receives a new update from Tim.
2. Tim is in Australia and has been there for six months.
3. He is working as an engineer.
4. He has already visited many different places.
5. He has just bought a car and gone to Alice Springs.
6. He will soon go to Darwin, then fly to Perth.
7. He has never been abroad before, so the trip feels exciting.

The courseware should make the student feel: "A familiar person has stepped onto
a much larger map."

## Modern Bridge

Do not ask "Have you ever received a letter?" as the main question. Ask whether
the student has ever seen updates from someone far away:

- an older sibling studying or working in another city
- a relative traveling abroad
- a friend moving away
- a parent on a business trip
- someone sharing photos, map locations, or video calls from a far place

## Language Focus

Use present perfect as "life update grammar", not as a formula table.

Recommended focus:

- `I have just received...`
  - A new update has just arrived.
- `He has been there for six months.`
  - Past arrival becomes current duration.
- `He has already visited...`
  - Completed travel experience up to now.
- `He has just bought...`
  - A fresh change in the present update.
- `He has gone to...`
  - He went there and is not back here now.
- `He has never been abroad before.`
  - Life experience before now was zero, so this trip is exciting.

Student-friendly explanation:

`Present perfect is not just "something happened in the past." It says: a past
event has become today's status or today's news.`

## Vocab Blocks

Use exactly 3 vocab blocks. Prefer:

1. `abroad`
2. `firm`
3. `exciting`

If `receive` needs explanation, include it in the hook or discussion rather than
adding a fourth vocab block.

## Grammar Point

Recommended grammar point: present perfect as status update.

Contrast these briefly:

- `He is in Australia.` - where he is now.
- `He has been there for six months.` - how long that current state has lasted.
- `He has gone to Alice Springs.` - he went there and is there/not here now.
- `He has never been abroad before.` - his life experience before this trip.

Keep it practical and concrete. Do not turn the scene into a tense chart.

## Read Aloud Sentences

Use 5 guided sentences. The goal is to make present-perfect life updates sound
natural before asking the student to create modern far-away updates.

- `I have just received a letter from my brother, Tim.`
  - focus: `have just received` as fresh news.
- `He has been there for six months.`
  - focus: `has been there` as a current status.
- `He is working for a big firm and he has already visited a great number of different places in Australia.`
  - focus: slow long sentence; stress `has already visited`.
- `He has just bought an Australian car and has gone to Alice Springs, a small town in the centre of Australia.`
  - focus: separate `has just bought` and `has gone to`.
- `My brother has never been abroad before, so he is finding this trip very exciting.`
  - focus: `never been abroad before`, then the excitement in the second half.

## Living-Scene Exercise

Use `mode: "all_fills"` for Lesson 4, consistent with Lessons 1-3.

The exercise should make the student complete 3 modern "far-away update" scenes.
The goal is distance, current status, and life-update feeling, not physical
letters.

Suggested word bank:

- `have just received`
- `has been there for`
- `has already visited`
- `has just bought`
- `has gone to`
- `has never been abroad before`
- `exciting`
- `different places`

Suggested three fill scenes:

- Message from a sibling:
  `I ___ a message from my cousin. He is studying in another city.`
  Expected: `have just received`
- Living somewhere for a while:
  `My sister is in Shanghai. She ___ three months.`
  Expected: `has been there for`
- First big trip:
  `My friend ___, so this trip feels very exciting to him.`
  Expected: `has never been abroad before`

Adjust wording if needed so the expected phrases appear exactly in the word bank
and fit naturally.

## Visual Direction

Use 4 retell frames:

1. Home scene: the narrator receives a long-distance update from Tim, with a
   letter or modern message plus a map hint.
2. Tim working as an engineer in Australia, with a professional but child-safe
   work setting.
3. Australia map/travel feeling: Alice Springs, Darwin, Perth represented as a
   route without readable text.
4. Tim standing in a wide Australian landscape, feeling that this first trip
   abroad is exciting and world-opening.

No text, letters, captions, readable map labels, or visible English words in
images.

## Tone

Open, curious, and expansive. This is a "the world is bigger than my daily life"
lesson. It should not be too funny or too moralistic.

## Lesson 4 Acceptance Criteria

Lesson 4 is ready only when:

- `pipeline/scripts/lesson_4.script.md` exists and follows the required scene
  structure.
- `pipeline/scripts/lesson_4.storyboard.json` has exactly 4 frames.
- `web/data/you_too/lesson_4.json` uses `mode: "all_fills"` and does not center
  the question on receiving letters.
- `web/data/read_aloud/lesson_4.json` has 5 guided sentences centered on
  present-perfect life updates.
- `web/audio/lesson_4.mp3` and `web/audio/lesson_4.timeline.json` exist.
- `web/audio/lesson_4_frame_1.webp` through `lesson_4_frame_4.webp` exist.
- The lesson can be opened at `/lesson.html?id=4`.
- The script explains `letter` as an old long-distance update medium and bridges
  to modern messages, photos, locations, or life updates.
- The script does not reproduce the erroneous word `fending`; it uses `finding`
  in the final sentence.
