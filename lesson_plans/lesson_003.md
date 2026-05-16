# Lesson 3 Plan - Please Send Me A Card

This is the source-of-truth design card for producing Lesson 3. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 3 assets.

## Basic Info

- Lesson: 3
- Title: `Please send me a card`
- Chinese title: `请给我寄一张明信片`
- Core bridge: `明信片过时了，拖延症没过时。`

## Lesson Positioning

This lesson is not mainly about postcards. A postcard was once a travel update:
roughly "I came here, I thought of you, here is a small picture from my trip."
For a child today, connect it to sending travel photos, posting moments, replying
to messages, making a travel vlog, bringing something back for a friend, or
finishing holiday homework.

The real topic is task anxiety during a holiday: the narrator is supposed to do
something small, keeps thinking about it, delays it, makes a dramatic decision,
spends a whole day preparing, and still finishes nothing.

## One-Sentence Hook

You go on holiday to have fun, but one small task keeps floating in your head
every day. You finally spend a whole day on it, and somehow complete exactly
zero.

## Story Punchline

The comic chain is:

1. `Postcards always spoil my holidays.`
2. He enjoys Italy, but keeps thinking about postcards.
3. `I made a big decision` sounds dramatic.
4. The decision is only to buy thirty-seven cards.
5. He spends `the whole day` in his room.
6. `not a single card` is written.

The humor should land on self-deceiving effort: doing many things around a task
without actually doing the task.

## Modern Bridge

Do not ask "Have you ever sent a postcard?" as the main question. Ask whether
the student has ever carried an unfinished task through a holiday:

- holiday homework
- replying to a friend
- sorting travel photos
- sending photos to relatives
- writing a travel diary
- preparing a promised gift or message

## Language Focus

Use only the strongest points. Recommended focus:

- `spoil my holidays`
  - Not physical destruction. It means something ruins the mood or peace of the
    holiday.
- `made a big decision`
  - Dramatic wording. In this story it is funny because the actual decision is
    small and not enough.
- `the whole day`
  - Emphasizes wasted time.
- `not a single card`
  - More dramatic than `no card`; it means not even one.
- Optional secondary point: `a few words` / `a few lines`
  - Means a small number, but still more than none.

## Vocab Blocks

Use exactly 3 vocab blocks. Prefer:

1. `spoil`
2. `decision`
3. `single`

If one more phrase needs emphasis, include it in grammar/discussion rather than
adding a fourth vocab block.

## Grammar Point

Recommended grammar point: past-tense story chain.

Explain how the story moves through short past-tense actions:

`went`, `visited`, `sat`, `taught`, `lent`, `read`, `thought`, `made`, `got up`,
`bought`, `spent`, `did not write`

Keep this practical: past tense is how we report a finished story step by step.
Do not turn it into a full irregular-verb lecture.

## Read Aloud Sentences

Use 5 guided sentences. The goal is to read the procrastination rhythm naturally
before moving into the life-scene transfer.

- `Postcards always spoil my holidays.`
  - focus: `always spoil my holidays` as one strong complaint.
- `A friendly waiter taught me a few words of Italian.`
  - focus: `a few words of Italian` without chopping the phrase.
- `I read a few lines, but I did not understand a word.`
  - focus: pause after `but`, then stress `did not understand a word`.
- `On the last day I made a big decision.`
  - focus: make `made a big decision` sound dramatic.
- `I spent the whole day in my room, but I did not write a single card!`
  - focus: `the whole day` and `not a single card`.

## Living-Scene Exercise

Use `mode: "all_fills"` for Lesson 3, consistent with Lessons 1-2.

The exercise should make the student complete 3 modern scenes with word-bank
phrases. The goal is task anxiety and procrastination, not postcards.

Suggested word bank:

- `thought about`
- `made a big decision`
- `spent the whole day`
- `did not write a single word`
- `did not finish a single page`
- `spoil my holiday`
- `a few lines`
- `quickly`

Suggested three fill scenes:

- Holiday homework:
  `During the holiday, I ___ my homework every day, but I did not start it.`
  Expected: `thought about`
- Photo/message task:
  `I ___ choosing photos for my family, but I did not send a single picture.`
  Expected: `spent the whole day`
- Writing task:
  `I opened my notebook and ___, but I still did not finish the diary.`
  Expected: `wrote a few lines`

Adjust wording if needed so the expected phrases appear exactly in the word
bank and fit naturally.

## Visual Direction

Use 4 retell frames:

1. Italy holiday: museums, public garden, relaxed travel mood.
2. Friendly waiter teaching a few Italian words and lending a book.
3. The narrator enjoying the trip but seeing postcard racks everywhere, with a
   small cloud of worry.
4. Last day: a room with many postcards spread out, the narrator stuck at the
   desk, zero cards written.

No text, letters, captions, or visible English words in images.

## Tone

Lightly funny, not moralistic. Do not scold procrastination. Let the student
recognize the feeling: "I look busy, but I still have not truly started."

## Lesson 3 Acceptance Criteria

Lesson 3 is ready only when:

- `pipeline/scripts/lesson_3.script.md` exists and follows the required scene
  structure.
- `pipeline/scripts/lesson_3.storyboard.json` has exactly 4 frames.
- `web/data/you_too/lesson_3.json` uses `mode: "all_fills"` and does not center
  the question on sending postcards.
- `web/data/read_aloud/lesson_3.json` has 5 guided sentences centered on the
  procrastination rhythm.
- `web/audio/lesson_3.mp3` and `web/audio/lesson_3.timeline.json` exist.
- `web/audio/lesson_3_frame_1.webp` through `lesson_3_frame_4.webp` exist.
- The lesson can be opened at `/lesson.html?id=3`.
- The script clearly explains postcard as an old travel-update medium and then
  bridges to modern task anxiety.
