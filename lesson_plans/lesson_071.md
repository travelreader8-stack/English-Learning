# Lesson 71 Plan - A famous clock

This is the source-of-truth design card for producing Lesson 71. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 71 assets.

## Basic Info

- Lesson: 71
- Title: `A famous clock`
- Chinese title: `一个著名的大钟`
- Core bridge: `Big Ben 不只是一个漂亮的大钟，而是旧时代“公共时间”的象征：城市地标、广播报时、天文台校准，像今天手机和服务器自动同步时间一样。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule and the section
responsibility rule in `LESSON_PRODUCTION_PLAN.md`.

- Keep the opening hook short.
  - Use 4-6 spoken lines only.
  - The hook should ask: before phones and internet time, how did people trust
    that the time was correct?
  - Do not retell the full Big Ben history before the four `retell` frames.
- Teach Big Ben as public time, not just a tourist photo.
  - Explain why a clock can be famous: it gives shared time to a city and a
    country.
  - Connect BBC broadcast time to today's phone/network/server time.
  - Make clear that the clock's fame is both visual and auditory: people see
    the tower and hear the chimes.
- Explain the London background lightly.
  - The child should know what `Big Ben`, `Houses of Parliament`, `B.B.C.`,
    `Greenwich Observatory`, and `Sir Benjamin Hall` are.
  - Keep this as a compact "London time map", not a long history lecture.
  - Mention that in everyday speech people often say `Big Ben` for the clock
    tower, while strictly it originally refers to the great bell.
- Preserve the textbook history as passage logic.
  - The passage says the Houses of Parliament burned down in 1834.
  - It says Big Ben takes its name from Sir Benjamin Hall.
  - Do not overload production with alternative historical debates.
- Land the final joke clearly.
  - The passage builds Big Ben as huge, accurate, checked twice a day, and
    broadcast by BBC.
  - Then a small pot of paint on one hand slows it down.
  - The child should feel the contrast: a famous precision system can be
    affected by one small human detail.
- Teach `hands` carefully.
  - In the final sentence, `hands` means clock hands, not human hands.
  - This is essential for understanding the joke.
- Story spine must be Chinese-first.
  - Present the public-time-and-paint-pot chain in Chinese first.
  - Attach short English chunks after each Chinese anchor.
  - Do not show an all-English plot chain as the main memory path.
- Avoid repeated script content across sections.
  - The four `retell` frames are the only section that should walk through the
    passage in order.
  - The teacher-student dialogue should deepen public time, London institutions,
    and the final joke.
  - Vocabulary and grammar sections should explain language tools, not retell
    the whole story again.
- Generated illustrations must be text-free.
  - No readable English or Chinese text inside images.
  - No readable clock numerals, signage, building plaques, BBC logos, maps,
    posters, broadcast labels, warning labels, UI panels, or fake lesson text.
  - Render words such as `Big Ben`, `Parliament`, `B.B.C.`, `Greenwich`,
    `accurate`, `have the clock checked`, `hands`, and `go wrong` as real UI
    text outside the image.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, camera directions,
    or generated-image mechanics.
  - Storyboard prompts must not leak into spoken lesson content.

## Production Warnings

- Known source-data issue in `web/data/lessons.json` should be surfaced before
  production edits shared data.
  - Chinese currently says `“大本”钟很多出差错`.
  - English says `Big Ben has rarely gone wrong.`
  - The Chinese should be `“大本”钟很少出差错`.
  - If production is allowed to patch shared data, make only this exact Chinese
    meaning fix and do not rewrite the passage.
  - If production is not allowed to patch shared data, stop and ask instead of
    building finished assets on top of visible source issues.
- Do not overteach London institutions.
  - `Houses of Parliament`, `B.B.C.`, and `Greenwich Observatory` should be
    explained through the story of time.
  - Avoid turning the courseware into a tourist guide.
- Do not overcomplicate Big Ben naming.
  - A light note is enough: everyday people say `Big Ben` for the landmark;
    strictly, the name originally refers to the great bell.
  - Do not make the naming detail the main lesson.
- Do not confuse `hand`.
  - In the final joke, `one of the hands` means one of the clock hands.
  - Production should explicitly show this in teaching text and read-aloud
    feedback if needed.
- Do not make the painter a villain.
  - The joke is a small accidental interference, not sabotage.
  - Keep the tone lightly comic.

## Lesson Positioning

Lesson 71 is a public-time story with a small mechanical joke. When visitors go
to London, Big Ben is one of the first landmarks they may see. It is famous not
only because of its position at the Houses of Parliament, but because its
chimes can be heard all over the world on the B.B.C. The passage links the
clock to the burning of the old Houses of Parliament in 1834 and to Sir
Benjamin Hall, who was responsible for the making of the clock when the new
building was being built. Big Ben is immense and extremely accurate. Officials
from Greenwich Observatory have it checked twice a day, and microphones connect
the clock tower to the B.B.C. so people can hear it striking. It rarely goes
wrong. The final turn is comic: once it failed to give the correct time because
a painter hung a pot of paint on one of the clock hands and slowed it down.

The courseware should make the student understand:

`到伦敦会看到 Big Ben -> 它的钟声通过 BBC 被全世界听见 -> 国会大厦 1834 年被烧毁后才有了这座大钟 -> 它按课文说法得名于 Sir Benjamin Hall -> 它很大，也很准 -> Greenwich Observatory 的官员每天两次检查 -> 麦克风把钟塔声音连到 BBC -> Big Ben 很少出错 -> 但有一次油漆工把油漆桶挂在指针上 -> 一个小重量把著名大钟拖慢了`

The central bridge is:

`旧时代人们依靠大钟、广播和天文台建立共同时间；今天我们依靠手机、网络和服务器时间。Big Ben 的故事让孩子理解“公共时间为什么需要可信、准确、可同步”。`

## One-Sentence Hook

Big Ben is famous because the world could hear its accurate chimes, but once a
small pot of paint was enough to make it give the wrong time.

## Vivid Teaching Opening

The opening should set up public time quickly. It must be a short hook, not a
complete retelling.

Suggested teacher narration:

`如果没有手机，你怎么知道现在几点？`

`以前很多人会看城市里的大钟，或者听广播里的报时。`

`Big Ben 就是这样的钟：它不只是被人看见，还能通过 BBC 被全世界听见。`

`可是这么著名、这么准确的大钟，也曾经被一个小小的油漆桶拖慢。`

`今天我们学一个关于公共时间、准确性和小反转的故事。`

Tone:

- Calm, curious, and lightly comic.
- Make the clock feel grand, then let the paint-pot joke land.
- Save the full sequence for the four `retell` frames.

## Section Responsibility And Anti-Repetition Plan

### Opening

Job:

- Raise the problem of trusted time before phones.
- Introduce Big Ben as a visual and auditory symbol.
- Tease the paint-pot reversal.

Do not:

- Retell every historical detail.
- Start with a long London tourism lecture.
- Explain all conditional grammar immediately.

### Four Retell Frames

Job:

- Walk through the passage in order.
- Make the public-time-to-small-failure chain easy to remember.
- Use Chinese anchors and short English chunks.

Do not:

- Put readable clock numerals, signs, logos, labels, or map text inside images.
- Make the tower look like a fantasy castle disconnected from London.
- Show the painter as malicious.

### Teacher-Student Dialogue

Job:

- Deepen three ideas:
  1. why a clock can become famous before smartphones
  2. how BBC and Greenwich make the clock part of shared public time
  3. why the final `hands` and paint-pot detail is funny
- Compare:
  `public time` versus `personal phone time`
  `accurate system` versus `small human interference`
  `hand` as a body part versus `hand` as a clock pointer

Do not:

- Re-list the full plot.
- Overteach British politics or astronomy.
- Leave the final joke unexplained.

### Vocabulary And Grammar

Job:

- Explain words and structures that make the lesson work:
  `Parliament`, `erected`, `take its name from`, `responsible for`,
  `immense`, `accurate`, `officials`, `Greenwich Observatory`,
  `have the clock checked`, `striking`, `microphones`, `tower`,
  `go wrong`, `hands`, `slow down`.
- Teach third conditional:
  `If the Houses of Parliament had not been burned down in 1834, the great
  clock would never have been erected.`
- Teach passive and causative checking:
  `were being built`, `have the clock checked twice a day`.
- Teach `not only ... but ... as well`:
  `It is not only of immense size, but is extremely accurate as well.`

Do not:

- Reduce the lesson to a conditionals table.
- Skip `hands`, because it is essential to the punchline.
- Treat `checked` as necessarily "corrected"; it means inspected/checked.

### Practice And Living-Scene Transfer

Job:

- Move the language into a modern child-understandable situation:
  a school clock, online class timer, sports scoreboard, subway display,
  server clock, phone time sync, or classroom bell system.
- Let the student say:
  `The clock is extremely accurate.`
  `We have it checked every day.`
  `It rarely goes wrong.`
  `Once, however, it failed to give the correct time.`
  `A small mistake slowed it down.`

Do not:

- Make the exercise a pure London quiz.
- Make it only about mechanical clocks if a modern sync analogy helps.
- Ask the student to memorize all institutional names without use.

## Cultural And Background Bridge

The lesson needs a compact modern bridge:

1. Big Ben
   - In daily speech, Big Ben is often used for the famous clock-tower
     landmark in London.
   - Strictly, Big Ben originally refers to the great bell inside.
   - For this lesson, follow the passage wording while giving the light naming
     note.
2. Houses of Parliament
   - This is where the British Parliament meets.
   - The building is beside the Thames and connected visually with the famous
     clock tower.
   - The passage says the old Houses of Parliament burned down in 1834, leading
     to the new building and clock.
3. B.B.C.
   - The British Broadcasting Corporation is the public broadcaster.
   - In the passage, its broadcast carries the clock sound to listeners far
     away.
   - This helps the child understand how a clock becomes a national sound.
4. Greenwich Observatory
   - Greenwich is strongly connected with standard time.
   - The observatory officials checking the clock make Big Ben feel trusted and
     authoritative.
   - Keep this light: it is about reliable time, not a full astronomy lesson.
5. Modern time sync
   - Today, phones and computers quietly synchronize time through networks.
   - The old equivalent was public clocks, radio time signals, observatories,
     and official checks.
6. Mechanical joke
   - A clock hand is a physical part.
   - If a pot of paint hangs on it, even a famous clock can slow down.
   - This turns a grand public system into a very human, visual joke.

## Visual Direction

The four illustrations should form one continuous public-time story around Big
Ben and the paint-pot reversal.

### Visual Consistency

Use a consistent London public-time visual motif:

- the same famous clock tower and Houses of Parliament exterior
- river/old-city atmosphere without readable signs or map labels
- broadcast microphones and sound waves shown as visual metaphor only, without
  logos or text
- Greenwich officials/checkers as calm timekeepers in period-appropriate but
  simple clothing
- one painter working on the tower with a paint pot in the final frame

Core object:

- Big Ben/clock tower: tall, stone, iconic, with visible clock face but no
  readable numerals.
- Clock hands: visible enough to support the final paint-pot joke, but no
  readable clock numbers.
- Painter: ordinary worker, accidental and comic, not villainous.

Do not put readable text in images.

### Frame 1 - London And The Famous Clock

Scene purpose:

- Establish Big Ben as one of the first London landmarks visitors see and hear.

Visual:

- A visitor looks up at the famous clock tower beside the Houses of Parliament.
- A subtle broadcast/radio-listening visual metaphor connects the chimes to
  distant listeners.
- No readable logos, signs, or clock numbers.

Student-facing anchor:

`到伦敦时，Big Ben 是最先看到的地标之一，它的钟声还能通过 BBC 被远处的人听见。`

English chunks:

- `When you visit London`
- `one of the first things you will see`
- `the famous clock`
- `heard all over the world on the B.B.C.`

### Frame 2 - Burned Down And Built Again

Scene purpose:

- Explain the historical condition and Sir Benjamin Hall connection.

Visual:

- A respectful split-time composition: a smoky old Parliament fire memory in
  the background and the new Parliament/clock construction in the foreground.
- Sir Benjamin Hall is suggested as a responsible official overseeing the
  project.
- Keep it non-chaotic and text-free.

Student-facing anchor:

`如果国会大厦没有在 1834 年被烧毁，这座大钟也许就不会被建起来。`

English chunks:

- `If the Houses of Parliament had not been burned down`
- `would never have been erected`
- `takes its name from Sir Benjamin Hall`
- `responsible for the making of the clock`

### Frame 3 - Accurate Public Time

Scene purpose:

- Show Big Ben as enormous, accurate, checked, and broadcast.

Visual:

- Officials carefully inspect the clock mechanism.
- A Greenwich/observatory feeling is suggested through instruments and careful
  timekeeping, without readable labels.
- Microphones near the clock tower suggest the BBC broadcast connection.

Student-facing anchor:

`它不仅巨大，而且非常准确；Greenwich 的官员每天两次检查，麦克风把钟声传给 BBC。`

English chunks:

- `not only of immense size`
- `extremely accurate as well`
- `have the clock checked twice a day`
- `microphones are connected to the clock tower`

### Frame 4 - The Pot Of Paint

Scene purpose:

- Land the comic reversal: the famous accurate clock is slowed by a paint pot.

Visual:

- A painter working high on the tower accidentally hangs a pot of paint on one
  of the clock hands.
- The clock hand is weighed down or slowed in a clear but non-destructive way.
- Officials or passers-by react with surprised concern.
- No readable clock numerals or labels.

Student-facing anchor:

`这么准确的大钟也曾出错：油漆工把油漆桶挂在一根指针上，把它拖慢了。`

English chunks:

- `rarely gone wrong`
- `failed to give the correct time`
- `hung a pot of paint`
- `on one of the hands`
- `slowed it down`

## Storyboard Requirements

The storyboard JSON must include:

- `visual_consistency`
  - Mention the same Big Ben clock tower as the recurring core object across
    all four frames.
  - Mention the clock hands as important visual parts, especially in frame 4.
  - Mention London public-time mood: Parliament, broadcast, observatory
    checking, and a painter's accidental interference.
  - Mention that images must contain no readable signs, logos, clock numerals,
    maps, labels, captions, or text.
- 4 frames only.
- Each frame prompt should:
  - maintain the same clock tower design
  - keep the tone grand but lightly comic by the final frame
  - avoid readable environmental text and clock numbers
  - avoid making the painter malicious or dangerous

## Teacher-Student Dialogue Direction

The dialogue should not retell the whole passage. It should deepen the modern
meaning.

Suggested dialogue spine:

1. Student asks why a clock can be famous.
   - Teacher: before everyone had phone time, a public clock and broadcast
     chimes helped people share a trusted time.
2. Student asks what Big Ben actually is.
   - Teacher: people often use the name for the whole landmark, but strictly
     Big Ben originally refers to the great bell; the passage uses the familiar
     name.
3. Student asks why BBC and Greenwich appear in an English lesson.
   - Teacher: BBC spreads the sound; Greenwich represents official, accurate
     time.
4. Student asks why the final sentence is funny.
   - Teacher: the passage spends many lines saying the clock is huge, accurate,
     checked, and famous; then one small paint pot slows one hand down.
5. Teacher connects to the student:
   - Today, your phone and computer also need trusted time. If a server clock
     goes wrong, messages, games, classes, and tickets can all become confusing.

The dialogue should leave the student feeling:

- I understand why Big Ben is famous.
- I know the light difference between Big Ben the bell and the landmark name.
- I can connect BBC/Greenwich to public time.
- I understand the paint-pot joke.
- I can explain `have the clock checked` and `one of the hands`.

## Vocabulary Direction

Use exactly 3 formal vocabulary blocks.

Recommended formal vocab blocks:

1. `accurate`
   - Explain as correct and exact.
   - Connect to time, measurements, answers, and clocks.
   - Contrast `accurate` with simply `big` or `famous`.
2. `official`
   - Explain as a person connected with an organization or public duty.
   - Connect to `Officials from Greenwich Observatory`.
   - Give modern examples: school officials, race officials, airport officials.
3. `erect`
   - Explain as build or put up something tall/large, formal word.
   - Connect to `the great clock would never have been erected`.
   - Keep it contextual; do not overuse as everyday speech.

Supporting words and phrases:

- `Parliament`
- `Big Ben`
- `B.B.C.`
- `Greenwich Observatory`
- `take its name from`
- `responsible for`
- `making of the clock`
- `immense`
- `as well`
- `have the clock checked`
- `twice a day`
- `striking`
- `microphones`
- `connected to`
- `tower`
- `rarely`
- `go wrong`
- `failed to give the correct time`
- `painter`
- `pot of paint`
- `hands`
- `slow down`

Useful Chinese explanations:

- `Parliament`: 议会；`Houses of Parliament` 指英国议会所在地。
- `erected`: 建起、竖立起来，常用于大型建筑或纪念物。
- `takes its name from`: 得名于……
- `responsible for`: 对……负责。
- `immense`: 巨大的，比 `very big` 更书面。
- `accurate`: 准确的、精确的。
- `officials`: 官员、工作人员、官方人员。
- `Greenwich Observatory`: 格林尼治天文台，和标准时间概念有关。
- `have the clock checked`: 安排别人检查钟；不是自己亲自检查。
- `striking`: 钟在打点。
- `go wrong`: 出错、出故障。
- `hands`: 钟表的指针，不是人的手。
- `slowed it down`: 让它慢下来。

## Grammar Handling

Do not start from an abstract conditional table. Start from the historical
"if not" logic:

`如果 1834 年那场火没有发生，就不会有后来的新国会大厦和这座大钟。`

### Job 1 - Third Conditional Historical Logic

Key line:

- `If the Houses of Parliament had not been burned down in 1834, the great clock would never have been erected.`

Teaching point:

This is a counterfactual sentence about the past: something did happen, and the
sentence imagines the opposite past and a different result.

Student explanation:

`had not been burned down 表示“如果过去没有被烧毁”，would never have been erected 表示“后来就永远不会被建起来”。它不是在讲未来，而是在想象一个没有发生的过去。`

### Job 2 - Passive Building And Naming

Key lines:

- `would never have been erected`
- `when the new Houses of Parliament were being built`

Teaching point:

Passive voice fits buildings and public projects because the object being built
matters more than the exact worker.

Student explanation:

`这里重点不是“谁一砖一瓦建了它”，而是国会大厦和大钟“被建起来”。所以英文自然用 passive：have been erected, were being built。`

### Job 3 - Causative Have

Key line:

- `Officials from Greenwich Observatory have the clock checked twice a day.`

Teaching point:

`have something done` means arrange for something to be done. The officials do
not necessarily check it personally; they make sure it is checked.

Student explanation:

`have the clock checked 不是“拥有一个被检查的钟”，而是“安排/让人检查这个钟”。这个结构很实用：have my bike repaired, have my eyes checked。`

### Job 4 - Not Only ... But ... As Well

Key line:

- `It is not only of immense size, but is extremely accurate as well.`

Teaching point:

This pattern joins two strong qualities: not just big, but also accurate.

Student explanation:

`not only ... but ... as well 用来叠加亮点。这里不是只夸它大，而是说它又大又准。`

Use a compact display:

| Story meaning | English |
| --- | --- |
| 如果国会大厦没有被烧毁 | `If the Houses of Parliament had not been burned down` |
| 大钟就不会被建起来 | `the great clock would never have been erected` |
| 得名于 Sir Benjamin Hall | `takes its name from Sir Benjamin Hall` |
| 对造钟负责 | `was responsible for the making of the clock` |
| 不仅巨大，而且很准确 | `not only of immense size, but extremely accurate as well` |
| 安排每天检查两次 | `have the clock checked twice a day` |
| 钟在打点 | `the clock is actually striking` |
| 很少出错 | `has rarely gone wrong` |
| 一根指针 | `one of the hands` |

## Read-Aloud Direction

Create `web/data/read_aloud/lesson_71.json` with 5-8 high-value sentences.

Recommended sentences:

1. `When you visit London, one of the first things you will see is Big Ben, the famous clock which can be heard all over the world on the B.B.C.`
   - Focus: long opening sentence, relative clause, `B.B.C.` letters.
2. `If the Houses of Parliament had not been burned down in 1834, the great clock would never have been erected.`
   - Focus: third conditional and passive.
3. `Big Ben takes its name from Sir Benjamin Hall who was responsible for the making of the clock when the new Houses of Parliament were being built.`
   - Focus: name origin and long relative clause.
4. `It is not only of immense size, but is extremely accurate as well.`
   - Focus: `not only ... but ... as well`, stress `immense` and `accurate`.
5. `Officials from Greenwich Observatory have the clock checked twice a day.`
   - Focus: institutional names and causative `have ... checked`.
6. `On the B.B.C. you can hear the clock when it is actually striking because microphones are connected to the clock tower.`
   - Focus: broadcast explanation and passive `are connected`.
7. `Big Ben has rarely gone wrong.`
   - Focus: short sentence with `rarely`; make the meaning clear.
8. `A painter who had been working on the tower hung a pot of paint on one of the hands and slowed it down!`
   - Focus: final joke, `hands` as clock hands, excitement without rushing.

If a shorter read-aloud set is needed, prioritize sentences 1, 2, 4, 5, 7, and
8.

Pronunciation notes:

- `Big Ben`: strong two-beat rhythm.
- `B.B.C.`: read as separate letters.
- `Parliament`: tricky spelling; common pronunciation drops the full middle
  written sound.
- `erected`: stress the second syllable.
- `Benjamin Hall`: proper name; read steadily.
- `immense`: stress the second syllable.
- `accurate`: stress the first syllable.
- `Greenwich`: model carefully; do not force spelling-based pronunciation.
- `Observatory`: long word; break it into chunks.
- `microphones`: stress the first syllable.
- `rarely`: make the first syllable clear.
- `hands`: explain before reading if needed.

Feedback style:

- Praise clear pauses in long landmark/history sentences.
- Encourage the student to read `rarely gone wrong` accurately; this sentence
  reverses the mistaken Chinese source typo.
- For the final sentence, coach the student to let the joke land on
  `one of the hands` and `slowed it down`.

## Living-Scene Exercise Direction

The living-scene exercise should transfer the lesson into a modern trusted-time
scenario.

Recommended setting:

`A school has a central digital bell and clock system. Most students trust it because it is connected to the school's network time and checked by staff. Once, however, a small setting error makes the bell ring three minutes late, and the class learns why accurate public time matters.`

Why this works:

- It keeps the public-time logic from the original story.
- It is close to a child's daily life: school bells, online classes, buses,
  tests, and sports schedules.
- It naturally uses:
  `accurate`, `official`, `checked`, `connected to`, `go wrong`,
  `failed to give the correct time`, `slowed it down`.

Possible roles:

- Student
- Teacher
- School IT staff member
- Class monitor

Target language:

- `Our school clock is extremely accurate.`
- `The staff have it checked every morning.`
- `It is connected to the school network.`
- `It has rarely gone wrong.`
- `Once, however, it failed to give the correct time.`
- `A small setting error slowed it down.`

## Suggested You Too Scene

Scene title:

`The School Clock`

Scene premise:

`Your school uses one central clock for classes, bells, and activities. One day it goes wrong by a few minutes, and you explain why accurate public time matters.`

Dialogue goals:

- explain what shared clock people trust
- say how it is checked or synchronized
- describe what went wrong once
- explain why a small time error matters
- compare public time with personal phone time

Suggested exchanges:

1. Teacher:
   `Why do we need an accurate school clock?`
2. Student:
   `Because everyone uses it for classes and activities.`
3. Teacher:
   `How do we keep it accurate?`
4. Student:
   `We have it checked every morning, and it is connected to the school network.`
5. Teacher:
   `Has it ever gone wrong?`
6. Student:
   `Once, it failed to give the correct time because a small setting error slowed it down.`
7. Teacher:
   `What did you learn?`
8. Student:
   `Shared time must be accurate, or everyone gets confused.`

Keep the exercise practical and clear.

## Extension Practice Direction

Lesson 71 extension production should be included in full production. If the
main lesson assets already exist later and only extension is missing, create
`web/data/extension/lesson_71.json` and register `71` in
`web/data/extension/index.json` without regenerating script, audio, timeline,
read-aloud data, or storyboard images.

### Extension Reading

Use an original same-topic public-time story. A school, sports centre, subway
station, online-class platform, or city museum uses one trusted clock or time
system. The system is usually accurate and checked regularly, but once a small
human mistake or object slows it down or sets it wrong. The story should help
the student understand why shared time matters today. Do not retell Big Ben or
copy a real article.

Suggested title: `Three Minutes Late`

Recommended word bank: `accurate`, `official`, `checked`, `connected`,
`tower`, `microphone`, `go wrong`, `failed`, `hands`, `slow down`,
`public time`.

The 5 reading questions should test:

1. what shared time system people trusted
2. why it was usually accurate
3. what small problem made it go wrong
4. how the time error affected people
5. what lesson the students learned about public time and checking systems

When creating the JSON, shuffle the options so the correct answers are
distributed. For these 5 questions, use at least 3 different `answer_index`
positions, include at least one correct answer in C or D, and do not put more
than 2 correct answers in the same position.

### Sentence Writing

Use 5 patterns:

1. `one of the first things ...`
   - Source: `one of the first things you will see is Big Ben`
   - Focus: describing an important first impression.
   - Must include: `one of the first things`
2. `If ... had not ..., ... would never have ...`
   - Source: `If the Houses of Parliament had not been burned down in 1834, the great clock would never have been erected.`
   - Focus: counterfactual past result.
   - Must include: `If`, `had not`, and `would never have`
3. `not only ..., but ... as well`
   - Source: `It is not only of immense size, but is extremely accurate as well.`
   - Focus: adding two strong qualities.
   - Must include: `not only`, `but`, and `as well`
4. `have ... checked`
   - Source: `Officials from Greenwich Observatory have the clock checked twice a day.`
   - Focus: arranging for something to be inspected.
   - Must include: `have` and `checked`
5. `failed to ... because ...`
   - Source: `it failed to give the correct time`
   - Focus: explaining a failure and its cause.
   - Must include: `failed to` and `because`

## Chinese-To-English Exercise Direction

If production creates guided translation prompts inside lesson-local materials,
use meaning chunks that preserve the public-time story and final joke.

Suggested chunking:

1. 当你游览伦敦时，最先看到的东西之一就是 Big Ben。
   - `When you visit London, one of the first things you will see is Big Ben.`
2. 这座著名的大钟可以通过 BBC 被全世界听到。
   - `The famous clock can be heard all over the world on the B.B.C.`
3. 如果国会大厦没有在 1834 年被烧毁，这座大钟就永远不会被建起来。
   - `If the Houses of Parliament had not been burned down in 1834, the great clock would never have been erected.`
4. Big Ben 得名于 Sir Benjamin Hall，他在建造新国会大厦时负责造钟。
   - `Big Ben takes its name from Sir Benjamin Hall, who was responsible for the making of the clock when the new Houses of Parliament were being built.`
5. 它不仅体型巨大，而且也非常准确。
   - `It is not only of immense size, but is extremely accurate as well.`
6. Greenwich Observatory 的官员安排每天两次检查这座钟。
   - `Officials from Greenwich Observatory have the clock checked twice a day.`
7. 当大钟真正打点时，你可以在 BBC 上听到它，因为麦克风连接到了钟塔。
   - `On the B.B.C. you can hear the clock when it is actually striking because microphones are connected to the clock tower.`
8. Big Ben 很少出错。
   - `Big Ben has rarely gone wrong.`
9. 但是有一次，它没有报出正确的时间。
   - `Once, however, it failed to give the correct time.`
10. 一个在塔上工作的油漆工把一桶油漆挂在一根指针上，把它拖慢了。
   - `A painter who had been working on the tower hung a pot of paint on one of the hands and slowed it down.`

Keep translation feedback focused on:

- `one of the first things`
- `can be heard`
- `If ... had not been ..., would never have been ...`
- `takes its name from`
- `responsible for`
- `not only ... but ... as well`
- `have the clock checked`
- `actually striking`
- `rarely gone wrong`
- `one of the hands`
- `slowed it down`

## Image Prompt Guidance

Do not include text in images. The production agent should avoid prompts that
ask for readable clock numerals, BBC logos, Parliament signs, Greenwich labels,
map labels, plaques, tickets, captions, or speech bubbles.

Preferred style:

- cinematic London public-time atmosphere
- clear recurring Big Ben/clock tower object
- subtle broadcast and observatory-checking visual ideas
- final-frame visual comedy with a paint pot on a clock hand
- realistic but warm educational style

Avoid:

- readable signs, logos, labels, clock numbers, or interface text
- overcrowded tourist-collage composition
- confusing Big Ben with a random clock tower
- making the painter malicious or reckless in a scary way
- technical diagrams with text inside the image

## Tone

Curious, precise, lightly historical, and gently comic.

The child should feel:

- "I understand why a clock could be world-famous before smartphones."
- "I know what Big Ben, BBC, Parliament, and Greenwich are doing in the same
  story."
- "I can explain public time and modern time synchronization."
- "I understand that `hands` means clock hands in the final joke."
- "I can use structures like `If ... had not ..., would never have ...`,
  `have the clock checked`, and `not only ... but ... as well`."
