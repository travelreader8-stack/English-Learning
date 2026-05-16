# Lesson 5 Plan - No Wrong Numbers

This is the source-of-truth design card for producing Lesson 5. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 5 assets.

## Basic Info

- Lesson: 5
- Title: `No wrong numbers`
- Chinese title: `无错号之虞`
- Core bridge: `电话过时了，信号/系统失灵没过时；鸽子很旧，但“自己搭一个备用通信系统”很现代。`

## Production Warnings

The current `web/data/lessons.json` text has a few data-quality issues. Do not
blindly reproduce them in student-facing scripts or exercises.

- English spacing:
  - Current: `Mr.James Scott`
  - Correct display: `Mr. James Scott`
  - Current: `Mr.Scott`
  - Correct display: `Mr. Scott`
- `first_sentence_prefix` is currently `Mr` because `Mr.` was probably treated
  as a sentence boundary. For dictation prompting, use a more meaningful prefix
  such as `Mr. James Scott`.
- Chinese translation says `所以他买了只鸽子`, but the English says
  `twelve pigeons`. The production script should reflect that he bought twelve
  pigeons.

If production requires editing `web/data/lessons.json`, stop and ask for a
shared-data edit because it is outside the normal per-lesson write set.

## Lesson Positioning

This lesson is not mainly about pigeons as an old communication tool. The
interesting part is the workaround: Mr. Scott cannot get a telephone for his new
garage, so he builds his own private message system using twelve pigeons.

For a child today, connect it to moments when the normal communication system is
unreliable: no signal, no Wi-Fi, an app crashes, a message goes to the wrong
group, a game voice chat breaks, or a class/family notification needs a backup
route.

The real topic is practical ingenuity: when the standard system fails, someone
uses a strange but effective backup method.

## One-Sentence Hook

Two garages are only five miles apart, but the new one cannot get a telephone.
Most people would wait. Mr. Scott buys twelve pigeons and creates his own
private "telephone" service.

## Story Punchline

The comic and clever chain is:

1. Mr. Scott has one garage and buys another nearby.
2. The two garages are only five miles apart.
3. He cannot get a telephone for the new garage.
4. He buys twelve pigeons instead.
5. One pigeon carries the first message in three minutes.
6. Up to now, he has sent many requests and urgent messages.
7. The narrator calls this a private "telephone" service.

The humor should land on low-tech innovation: the solution sounds old and odd,
but it works.

## Modern Bridge

Do not frame the main question as "Have you seen a pigeon carrying letters?"
Ask whether the student has ever needed a backup communication method:

- no internet or weak signal
- messages sent to the wrong person or wrong group
- school/class notifications delayed
- family logistics when phones are unavailable
- online game voice chat breaks
- using a written note, screenshot, phone call, or another app as backup

## Language Focus

Use only the strongest points. Recommended focus:

- `cannot get a telephone`
  - Means he cannot obtain/install telephone service, not that he cannot answer
    a phone.
- `carried the first message`
  - `message` means any piece of information being sent, not only a phone text.
- `covered the distance`
  - Here `cover` means travel across a distance, not put something over it.
- `urgent messages`
  - Messages that need to arrive quickly.
- `private telephone service`
  - Funny phrasing: pigeons become his own communication service.

## Vocab Blocks

Use exactly 3 vocab blocks. Prefer:

1. `message`
2. `distance`
3. `urgent`

If `service` or `request` needs explanation, include it in discussion or the
living-scene exercise rather than adding a fourth vocab block.

## Grammar Point

Recommended grammar point: single event vs progress up to now.

Contrast:

- `Yesterday, a pigeon carried the first message...`
  - A completed test event yesterday.
- `Up to now, Mr. Scott has sent...`
  - From then until now, this private system has already been used many times.
- `he has begun his own private telephone service`
  - The result now exists: the system has started.

Keep it as story logic, not a tense chart.

## Read Aloud Sentences

Use 6 guided sentences. The goal is to make the backup-communication story easy
to say before the student moves into modern communication scenarios.

- `Mr. James Scott has a garage in Silbury and now he has just bought another garage in Pinhurst.`
  - focus: names and place names clearly.
- `Pinhurst is only five miles from Silbury, but Mr. Scott cannot get a telephone for his new garage, so he has just bought twelve pigeons.`
  - focus: split the long sentence at `but` and `so`.
- `Yesterday, a pigeon carried the first message from Pinhurst to Silbury.`
  - focus: `carried the first message` as one phrase.
- `The bird covered the distance in three minutes.`
  - focus: `covered the distance`, not word-by-word.
- `Up to now, Mr. Scott has sent a great many requests for spare parts and other urgent messages from one garage to the other.`
  - focus: `urgent messages` and the long ending.
- `In this way, he has begun his own private 'telephone' service.`
  - focus: `private telephone service` as the punchline.

## Living-Scene Exercise

Use `mode: "all_fills"` for Lesson 5, consistent with Lessons 1-4.

The exercise should make the student complete 3 modern backup-communication
scenes. The goal is reliable message delivery, not animal facts.

Suggested word bank:

- `sent a message`
- `urgent message`
- `wrong group`
- `covered the distance`
- `private service`
- `spare parts`
- `in this way`
- `cannot get a signal`

Suggested three fill scenes:

- No signal:
  `When I ___, I called my mom from my friend's phone.`
  Expected: `cannot get a signal`
- Wrong chat:
  `I wanted to tell my classmate something, but I sent it to the ___.`
  Expected: `wrong group`
- Urgent update:
  `The teacher sent an ___ because the meeting time changed.`
  Expected: `urgent message`

Adjust wording if needed so the expected phrases appear exactly in the word bank
and fit naturally.

## Visual Direction

Use 4 retell frames:

1. Mr. Scott has two small garages in nearby towns, with a sense that they need
   to communicate.
2. The new garage has no telephone connection; Mr. Scott looks annoyed but
   practical.
3. Twelve pigeons as an unusual but organized backup system, with one carrying a
   message between the two garages.
4. The pigeon arrives quickly; Mr. Scott's private "telephone" service feels
   clever and slightly funny.

No text, letters, captions, readable signs, or visible English words in images.

## Tone

Light, practical, and clever. This should feel like a small invention story: a
low-tech workaround that is surprisingly effective.

## Lesson 5 Acceptance Criteria

Lesson 5 is ready only when:

- `pipeline/scripts/lesson_5.script.md` exists and follows the required scene
  structure.
- `pipeline/scripts/lesson_5.storyboard.json` has exactly 4 frames.
- `web/data/you_too/lesson_5.json` uses `mode: "all_fills"` and does not center
  the question on pigeons as animal trivia.
- `web/data/read_aloud/lesson_5.json` has 6 guided sentences centered on the
  backup-communication story.
- `web/audio/lesson_5.mp3` and `web/audio/lesson_5.timeline.json` exist.
- `web/audio/lesson_5_frame_1.webp` through `lesson_5_frame_4.webp` exist.
- The lesson can be opened at `/lesson.html?id=5`.
- The script explains the telephone/pigeon situation as an old but effective
  backup communication system.
- The script does not reproduce spacing issues like `Mr.James` or `Mr.Scott` in
  student-facing narration.
