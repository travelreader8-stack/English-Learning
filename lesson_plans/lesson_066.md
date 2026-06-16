# Lesson 66 Plan - Sweet As Honey!

This is the source-of-truth design card for producing Lesson 66. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 66 assets.

## Basic Info

- Lesson: 66
- Title: `Sweet as honey!`
- Chinese title: `像蜜一样甜！`
- Core bridge: `一个被遗忘的历史物件，经过时间、地点和自然的意外保护，重新变成值得修复的宝贝。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule and the section
responsibility rule in `LESSON_PRODUCTION_PLAN.md`.

- Keep the opening hook short.
  - Use 4-6 spoken lines only.
  - The hook should ask: how can an old crashed plane be forgotten for years,
    then suddenly become a treasure worth rescuing?
  - Do not retell the full 1963-to-1989 sequence before the four `retell`
    frames.
- Make the geography visible.
  - The student should understand that Wallis Island is a remote island in the
    South Pacific, west of Samoa.
  - Include a simplified map-style visual in frame 1 or frame 2.
  - Map images may show ocean, island shapes, and a search-plane route, but
    must not contain readable map labels inside the image. Put labels as
    courseware UI text outside the image.
- Handle the old bomber background carefully.
  - Explain `Lancaster bomber` as an old British wartime aircraft that later
    became a valuable aviation-history object.
  - Do not make the lesson a war lecture.
  - Do not show bombing, explosions, battlefield scenes, fire, injuries, or
    combat action.
- Make the surprise clear.
  - The title `Sweet as honey!` is not just a cute phrase.
  - The joke is that bees turned an engine into a hive, and beeswax preserved
    it in perfect condition.
- Story spine must be Chinese-first.
  - Present the discovery-and-restoration chain in Chinese first.
  - Attach short English chunks after each Chinese anchor.
  - Do not show an all-English timeline as the main memory path.
- Avoid repeated script content across sections.
  - The four `retell` frames are the only section that should walk through the
    passage in order.
  - The teacher-student dialogue should deepen geography, historical-object
    value, and the natural-preservation surprise.
  - Vocabulary and grammar sections should explain language tools, not retell
    the whole story again.
- Generated illustrations must be text-free.
  - No readable English or Chinese text inside images.
  - No readable map labels, aircraft numbers, museum plaques, shipping labels,
    repair notes, diagrams, captions, speech bubbles, UI panels, or fake lesson
    text.
  - Render words such as `Wallis Island`, `South Pacific`, `Lancaster bomber`,
    `aerial survey`, `restored`, `hive`, and `beeswax` as real UI text outside
    the image.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, camera directions,
    or generated-image mechanics.
  - Storyboard prompts must not leak into spoken lesson content.

## Production Warnings

- Known source-data issues in `web/data/lessons.json` should be surfaced before
  production edits shared data.
  - Chinese currently says `在瓦立斯岛毁`; it should mean `在瓦利斯岛坠毁`.
  - Chinese currently says `南太洋`; it should be `南太平洋`.
  - Chinese currently says `装装配有`; it should be `装配有`.
  - If production is allowed to patch shared data, make only these exact Chinese
    typo fixes and do not change the English passage.
  - If production is not allowed to patch shared data, stop and ask instead of
    building finished assets on top of visible Chinese typos.
- Do not overteach war history.
  - Mention World War II / wartime aircraft only as compact background for why
    a Lancaster bomber is historically valuable.
  - Keep the emotional centre on rediscovery, rescue, restoration, and the
    beeswax surprise.
- `French authorities` should be explained simply.
  - It means the relevant French officials/government departments arranged the
    plane's packaging and transport.
  - Do not turn this into a complicated political geography lecture.
- `Rolls-Royce Merlin engines` are proper technical names.
  - Explain them as famous aircraft engines.
  - Do not require the child to memorize engine history.
- `sweet as honey` should be treated as a title pun.
  - It means literally connected to honey/bees, and figuratively a sweet
    surprise.
- Do not show readable labels or numbers on the plane.
  - The UI can display vocabulary; the generated image itself should remain
    text-free.

## Lesson Positioning

Lesson 66 is a rediscovery-and-restoration story. In 1963, a Lancaster bomber
crashes on remote Wallis Island in the South Pacific. The plane is not too
badly damaged, but over the years the crash is forgotten and the wreck remains
undisturbed. In 1989, an aerial survey accidentally rediscovers the plane. By
then, a Lancaster bomber in reasonable condition is rare and worth rescuing.
French authorities have the plane packaged and moved back to France in parts.
A group of enthusiasts plan to have it restored. Three of its four engines need
to be rebuilt, but the fourth is found in perfect condition because bees have
turned it into a hive and preserved it in beeswax.

The courseware should make the student understand:

`1963 年老飞机坠毁在偏远南太平洋小岛 -> 多年无人打扰，事故被遗忘 -> 1989 年航空勘查意外重新发现残骸 -> 老式 Lancaster bomber 已经很稀有，值得抢救 -> 法国方面把飞机拆分包装运回法国 -> 爱好者准备修复飞机 -> 四台发动机中三台要重修 -> 第四台发动机被蜜蜂和蜂蜡完整保存 -> 标题 Sweet as honey! 变成一个惊喜`

The central bridge is:

`有些旧东西不是“废物”。当它有历史价值，又被意外保存下来，它就可能成为值得修复、值得讲述的宝贝。`

## One-Sentence Hook

An old bomber crashed on a remote island and was forgotten for twenty-six
years, but when people found it again, bees had protected one engine better
than any mechanic could have expected.

## Vivid Teaching Opening

The opening should create curiosity quickly. It must be a short hook, not a
complete retelling.

Suggested teacher narration:

`如果一架老飞机掉在一个很远很远的小岛上，几十年没人碰它，会发生什么？`

`你可能会想：它一定早就坏掉了。`

`可是这篇课文的惊喜就在这里：有一部分发动机反而被大自然保存得很好。`

`保存它的不是博物馆，也不是工程师，而是一群蜜蜂。`

`今天我们学一个故事：forgotten wreck, sweet surprise。`

Tone:

- Curious, cinematic, and gently amazed.
- Let the remote island and old aircraft feel mysterious but not frightening.
- Save the full sequence for the four `retell` frames.

## Section Responsibility And Anti-Repetition Plan

### Opening

Job:

- Raise the mystery: how can a forgotten crash become a valuable discovery?
- Introduce the beeswax surprise without retelling every step.
- Establish that the lesson is about value, restoration, and accidental
  preservation.

Do not:

- Explain the full 1963-1989 timeline.
- Start with an engine vocabulary list.
- Spend the opening on war history.

### Four Retell Frames

Job:

- Walk through the passage in order.
- Make the time line and location easy to remember.
- Use Chinese anchors and short English chunks.

Do not:

- Put readable labels, dates, numbers, plaques, or map text inside images.
- Show violent crash scenes.
- Make the four images look like unrelated museum posters.

### Teacher-Student Dialogue

Job:

- Deepen three ideas:
  1. why a remote island can make an object disappear from memory
  2. why an old aircraft can become worth rescuing
  3. why beeswax could preserve an engine
- Keep the discussion child-understandable:
  `remote place`, `forgotten`, `rare`, `worth rescuing`, `preserved`.

Do not:

- Re-list the full plot.
- Turn the dialogue into a long aviation-history lecture.
- Make the bees seem magical; explain it as a natural preservation surprise.

### Vocabulary And Grammar

Job:

- Explain words and structures that make the lesson work:
  `Lancaster bomber`, `crashed`, `remote`, `South Pacific`, `Samoa`,
  `damaged`, `wreck`, `undisturbed`, `accidentally`, `rediscovered`,
  `aerial survey`, `reasonable condition`, `rare`, `worth rescuing`,
  `authorities`, `packaged`, `moved in parts`, `enthusiasts`, `restored`,
  `rebuilt`, `packing cases`, `colony`, `hive`, `preserved`, `beeswax`.
- Teach `have something done`:
  `had the plane packaged and moved`
  `have the plane restored`
  `have only three of them rebuilt`
- Teach passive rediscovery/preservation:
  `was forgotten`
  `was accidentally rediscovered`
  `was totally preserved`
- Teach value judgment:
  `worth rescuing`

Do not:

- Teach every passive form mechanically.
- Turn `have something done` into a long grammar table before the story is
  understood.
- Skip `worth rescuing`, because it carries the whole value judgment.

### Practice And Living-Scene Transfer

Job:

- Move the language into a modern, child-understandable restoration scenario:
  a school club, museum corner, family storeroom, or science room rediscovers
  an old object that is worth repairing or displaying.
- Let the student use:
  `was rediscovered`, `worth rescuing`, `had it cleaned`, `had it repaired`,
  `have it restored`, `was preserved`.

Do not:

- Ask the child to describe war action.
- Make the practice only about plane parts.
- Make bees/honey mandatory in the living scene if it becomes awkward.

## Cultural And Background Bridge

The lesson needs a compact background bridge:

1. `Lancaster bomber`
   - It was an old British wartime aircraft.
   - For this lesson, the key idea is not fighting; the key idea is historical
     value.
   - A rare old aircraft in reasonable condition can be worth rescuing and
     restoring.
2. Wallis Island and the South Pacific
   - Wallis Island is remote from many large cities and transport routes.
   - A remote island helps explain why the wreck could be forgotten and left
     undisturbed.
   - Use a simple map so the student can feel the distance.
3. Aerial survey
   - People looked at the island from the air.
   - They were not necessarily searching for this exact plane.
   - This is why `accidentally rediscovered` matters.
4. Restoration culture
   - Some people love old machines, old trains, old planes, or old cameras.
   - These enthusiasts spend time and money to restore them because they carry
     history.
5. Beeswax preservation
   - Bees made a hive inside the engine.
   - Beeswax covered and protected the engine.
   - That is why the fourth engine is the sweet surprise.

## Visual Direction

The four illustrations should form one continuous discovery-and-restoration
story.

### Visual Consistency

Use a consistent aviation-history visual motif:

- remote tropical South Pacific island
- old but intact aircraft wreck
- aerial survey aircraft or survey viewpoint
- careful transport/restoration atmosphere
- honeycomb/beeswax detail in the final frame

Recurring object:

- The Lancaster bomber should remain visually consistent across frames:
  old silver/olive aircraft body, weathered but not destroyed, large wings,
  four-engine structure, no readable markings or numbers.

Recurring people:

- Survey team: practical, curious, modern clothing.
- French restoration handlers / enthusiasts: careful, respectful, excited.

Do not put readable text in images.

### Frame 1 - A Forgotten Crash On A Remote Island

Scene purpose:

- Establish location, time, and isolation.

Visual:

- A remote South Pacific island with ocean around it.
- A damaged but recognizable old bomber resting in dense green vegetation.
- The scene should feel quiet and forgotten, not violent.
- Optional map-like composition with ocean and island shapes, but no readable
  labels.

Student-facing anchor:

`1963 年，一架 Lancaster bomber 坠毁在南太平洋的偏远小岛上。`

English chunks:

- `In 1963`
- `a Lancaster bomber crashed`
- `a remote place`
- `in the South Pacific`

### Frame 2 - Rediscovered From The Air

Scene purpose:

- Show the accidental rediscovery.

Visual:

- A survey aircraft or aerial viewpoint over the island.
- The old wreck is visible through the trees from above.
- A small survey team looks surprised at a photo or aerial view, without any
  readable screen text.

Student-facing anchor:

`1989 年，航空勘查中，人们意外重新发现了这架飞机。`

English chunks:

- `twenty-six years after the crash`
- `accidentally rediscovered`
- `an aerial survey`
- `worth rescuing`

### Frame 3 - Packaged And Moved Back To France

Scene purpose:

- Teach `had the plane packaged and moved in parts`.

Visual:

- Careful workers packing large aircraft parts into crates or transport frames.
- The plane is being moved respectfully, like a valuable historical object.
- Crates should be plain, with no readable labels.

Student-facing anchor:

`法国方面把飞机拆分、包装，一部分一部分运回法国。`

English chunks:

- `the French authorities`
- `had the plane packaged`
- `moved in parts`
- `back to France`

### Frame 4 - The Sweet Engine

Scene purpose:

- Land the title, the surprise, and the beeswax preservation.

Visual:

- Enthusiasts open a plain packing case and discover an aircraft engine with
  honeycomb and beeswax inside.
- People look surprised and delighted.
- Bees may be shown gently around honeycomb, not as a scary swarm.
- The engine should look preserved, not ruined.

Student-facing anchor:

`他们打开包装箱，发现第四台发动机被蜂蜡完整保存了下来。`

English chunks:

- `sweet as honey`
- `still in perfect condition`
- `a colony of bees`
- `turned the engine into a hive`
- `preserved in beeswax`

## Storyboard Requirements

The storyboard JSON must include:

- `visual_consistency`
  - Mention the same old Lancaster bomber / aircraft wreck across all frames.
  - Mention the remote South Pacific island motif.
  - Mention the restoration-team visual continuity.
  - Mention that images must contain no readable labels, numbers, signs, or
    captions.
- 4 frames only.
- Each frame prompt should:
  - maintain the same aircraft shape and weathering
  - keep the story nonviolent and discovery-focused
  - avoid readable text, labels, map names, serial numbers, plaques, or crate
    markings
  - keep bees in the final frame gentle and visually clear

## Teacher-Student Dialogue Direction

The dialogue should not retell the whole passage. It should deepen the modern
meaning.

Suggested dialogue spine:

1. Student asks why the crash was forgotten.
   - Teacher: because Wallis Island is remote, and the wreck was left
     undisturbed for years.
2. Student asks why people cared about an old bomber.
   - Teacher: when an object becomes rare and carries history, it can be worth
     rescuing.
3. Student asks what an aerial survey is.
   - Teacher: people look from the air; that is why the rediscovery was partly
     accidental.
4. Student asks why only three engines needed rebuilding.
   - Teacher: the fourth was unexpectedly preserved by beeswax.
5. Teacher connects to the student:
   - Some old objects are worth throwing away, but some are worth restoring
     because they tell a story.

The dialogue should leave the student feeling:

- I can picture Wallis Island as remote.
- I understand why a rare old aircraft can be valuable.
- I understand `worth rescuing`.
- I understand the title joke.
- I can use `have something done`.

## Vocabulary Direction

Use exactly 3 formal vocabulary blocks.

Recommended formal vocab blocks:

1. `remote`
   - Explain as far away and hard to reach.
   - Connect it to Wallis Island and why the plane was forgotten.
   - Contrast with `near`, `central`, and `easy to visit`.
2. `restore`
   - Explain as repair something old so it is close to its earlier condition.
   - Connect to old planes, cars, cameras, furniture, and museum objects.
   - Distinguish from simply `repair`: restoration cares about history and
     original condition.
3. `preserve`
   - Explain as keep something safe from damage or decay.
   - Connect to beeswax preserving the engine.
   - Contrast with `damage`, `destroy`, and `throw away`.

Supporting words and phrases:

- `Lancaster bomber`
- `crash`
- `Wallis Island`
- `South Pacific`
- `Samoa`
- `wreck`
- `undisturbed`
- `rediscover`
- `aerial survey`
- `reasonable condition`
- `rare`
- `worth rescuing`
- `authorities`
- `package`
- `move in parts`
- `enthusiast`
- `rebuild`
- `packing case`
- `colony`
- `hive`
- `beeswax`

Useful Chinese explanations:

- `remote`: 偏远的，不容易到达的。
- `wreck`: 事故后留下的残骸，不是普通的垃圾。
- `aerial survey`: 从空中进行勘查、观察。
- `worth rescuing`: 值得抢救、值得保存。
- `enthusiast`: 对某件事特别热心、愿意投入时间的人。
- `hive`: 蜂房、蜂巢。
- `beeswax`: 蜂蜡。

## Grammar Handling

Do not start from a passive-voice table. Start from the story question:

`这架飞机不是自己包装、自己运输、自己修复的，是有人安排别人来做。`

### Job 1 - Have Something Done

Key lines:

- `The French authorities had the plane packaged and moved in parts back to France.`
- `Now a group of enthusiasts are going to have the plane restored.`
- `the group will need to have only three of them rebuilt`

Teaching point:

`have + object + past participle` often means someone arranges for another
person or team to do the work.

Student explanation:

`他们不是自己亲手把飞机每一块都打包、搬运、修复，而是安排专业的人去做。英语用 had the plane packaged, have the plane restored, have three engines rebuilt。`

### Job 2 - Passive Discovery And Preservation

Key lines:

- `the crash was forgotten`
- `the plane was accidentally rediscovered`
- `it was totally preserved in beeswax`

Teaching point:

The passive voice keeps attention on the object: the crash, the plane, the
engine.

Student explanation:

`这篇文章关心的不是“谁忘了它”或者“谁发现它”，而是这架飞机经历了什么。所以英语常用 was forgotten, was rediscovered, was preserved。`

### Job 3 - Worth Doing

Key line:

- `a Lancaster bomber in reasonable condition was rare and worth rescuing`

Teaching point:

`worth doing` means something deserves the action.

Student explanation:

`worth rescuing 不是“已经救了”，而是“值得去抢救”。因为它稀有、有历史价值，而且状态还算可以。`

Use a compact display:

| Story meaning | English |
| --- | --- |
| 安排别人把飞机包装并运走 | `had the plane packaged and moved` |
| 准备请人修复飞机 | `have the plane restored` |
| 只需要重修三台发动机 | `have only three of them rebuilt` |
| 事故被遗忘了 | `the crash was forgotten` |
| 飞机被意外重新发现 | `the plane was accidentally rediscovered` |
| 这架飞机值得抢救 | `worth rescuing` |
| 发动机被蜂蜡保存 | `preserved in beeswax` |

## Read-Aloud Direction

Create `web/data/read_aloud/lesson_66.json` with 5-8 high-value sentences.

Recommended sentences:

1. `In 1963 a Lancaster bomber crashed on Wallis Island, a remote place in the South Pacific, a long way west of Samoa.`
   - Focus: location phrase and appositive explanation.
2. `The plane wasn't too badly damaged, but over the years, the crash was forgotten and the wreck remained undisturbed.`
   - Focus: contrast, passive, `undisturbed`.
3. `Then in 1989, twenty-six years after the crash, the plane was accidentally rediscovered in an aerial survey of the island.`
   - Focus: time insert and passive rediscovery.
4. `By this time, a Lancaster bomber in reasonable condition was rare and worth rescuing.`
   - Focus: `by this time`, `worth rescuing`.
5. `The French authorities had the plane packaged and moved in parts back to France.`
   - Focus: `had something done`.
6. `Now a group of enthusiasts are going to have the plane restored.`
   - Focus: `have something restored`.
7. `Imagine their surprise and delight when they broke open the packing cases and found that the fourth engine was sweet as honey -- still in perfect condition.`
   - Focus: expressive opening and title phrase.
8. `A colony of bees had turned the engine into a hive and it was totally preserved in beeswax!`
   - Focus: final surprise, `colony`, `hive`, `beeswax`.

If a shorter read-aloud set is needed, prioritize sentences 1, 3, 4, 5, 7, and
8.

Pronunciation notes:

- `Lancaster`: proper name; keep it clear but do not overdrill.
- `bomber`: the `b` in `bomb` stays silent; say it like `BOM-er`, not with a
  hard `b` sound in the middle.
- `Wallis Island`: proper place name; keep rhythm natural.
- `Samoa`: three syllables; avoid rushing.
- `aerial`: can be hard; model slowly.
- `authorities`: stress the second syllable.
- `enthusiasts`: four syllables; keep the final `sts` light.
- `Rolls-Royce Merlin`: proper technical names; read steadily.
- `hive`: long `i`.
- `beeswax`: compound word, clear `bees` + `wax`.

Feedback style:

- Praise clear chunking in long location/time sentences.
- Encourage a curious, surprised tone in sentence 7.
- Do not over-penalize proper nouns if the rhythm and meaning are clear.

## Living-Scene Exercise Direction

The living-scene exercise should transfer the lesson into a modern restoration
scenario.

Recommended setting:

`A school science club finds an old model airplane or camera in a forgotten storage room. It is dusty but not badly damaged. The students ask the teacher whether it is worth rescuing. They have it cleaned and repaired, then prepare to display it because it tells a story about the school.`

Why this works:

- It keeps the rediscovery and restoration logic from the original story.
- It avoids war/combat content.
- It naturally uses:
  `forgotten`, `rediscovered`, `not too badly damaged`, `worth rescuing`,
  `had it cleaned`, `had it repaired`, `have it restored`, `preserved`.

Possible roles:

- Student
- Teacher
- School science-club member
- Museum volunteer or display helper

Target language:

- `We found it in a remote corner of the storeroom.`
- `It wasn't too badly damaged.`
- `It was accidentally rediscovered.`
- `Is it worth rescuing?`
- `We had it cleaned and repaired.`
- `We are going to have it restored.`
- `It was preserved in the box for many years.`

## Suggested You Too Scene

Scene title:

`The Old Model Plane`

Scene premise:

`You and your classmates find an old model plane in a school storeroom. It is dusty but still in reasonable condition. You decide whether it is worth rescuing and how to have it restored.`

Dialogue goals:

- describe where the object was found
- say it was not too badly damaged
- decide it is worth rescuing
- use `had it cleaned/repaired` or `have it restored`
- explain why it should be preserved

Suggested exchanges:

1. Teacher:
   `Where did you find this model plane?`
2. Student:
   `We found it in a remote corner of the storeroom.`
3. Teacher:
   `Is it badly damaged?`
4. Student:
   `No. It is dusty, but it is in reasonable condition.`
5. Teacher:
   `What are you going to do with it?`
6. Student:
   `We are going to have it cleaned and restored because it is worth rescuing.`

Keep the exercise practical and warm.

## Extension Practice Direction

Lesson 66 extension production should be included in full production. If the
main lesson assets already exist later and only extension is missing, create
`web/data/extension/lesson_66.json` and register `66` in
`web/data/extension/index.json` without regenerating script, audio, timeline,
read-aloud data, or storyboard images.

### Extension Reading

Use an original same-topic rediscovery-and-restoration story. A school club,
small museum, or family finds an old object in a storeroom, shed, attic, or
warehouse. The object is forgotten but still in reasonable condition. The group
decides it is worth rescuing, has it cleaned or repaired, and prepares to
display it. Do not retell the bomber/beeswax plot.

Suggested title: `The Camera In The Cupboard`

Recommended word bank: `forgotten`, `remote corner`, `damaged`,
`rediscovered`, `reasonable condition`, `rare`, `worth rescuing`,
`enthusiasts`, `restored`, `preserved`.

The 5 reading questions should test:

1. where the old object was found
2. why people had forgotten it
3. why it was worth rescuing
4. what the group had done to it
5. what the student learned about preserving old objects

When creating the JSON, shuffle the options so the correct answers are
distributed. For these 5 questions, use at least 3 different `answer_index`
positions, include at least one correct answer in C or D, and do not put more
than 2 correct answers in the same position.

### Sentence Writing

Use 5 patterns:

1. `a remote place in ...`
   - Source: `a remote place in the South Pacific`
   - Focus: giving a location with a compact descriptive phrase.
   - Must include: `a remote place in`
2. `was not too badly damaged`
   - Source: `The plane wasn't too badly damaged`
   - Focus: describing condition without exaggeration.
   - Must include: `wasn't too badly damaged` or `was not too badly damaged`
3. `was accidentally rediscovered`
   - Source: `the plane was accidentally rediscovered`
   - Focus: passive rediscovery.
   - Must include: `was accidentally rediscovered`
4. `was rare and worth ...`
   - Source: `was rare and worth rescuing`
   - Focus: value judgment with `worth doing`.
   - Must include: `was rare and worth`
5. `had ... cleaned/repaired/restored`
   - Source: `had the plane packaged and moved`; `have the plane restored`
   - Focus: arranging for someone else to do work.
   - Must include: `had` or `have` plus an object plus a past participle

## Chinese-To-English Exercise Direction

If production creates guided translation prompts inside lesson-local materials,
use meaning chunks that preserve the rediscovery-and-restoration chain.

Suggested chunking:

1. 1963 年，一架兰开斯特轰炸机坠毁在南太平洋的瓦利斯岛。
   - `In 1963 a Lancaster bomber crashed on Wallis Island, a remote place in the South Pacific.`
2. 飞机损坏得并不严重，但多年以后，事故被人遗忘，残骸也一直没有被打扰。
   - `The plane wasn't too badly damaged, but over the years, the crash was forgotten and the wreck remained undisturbed.`
3. 1989 年，人们在一次航空勘查中意外重新发现了这架飞机。
   - `In 1989, the plane was accidentally rediscovered in an aerial survey of the island.`
4. 到那时，状况还算不错的兰开斯特轰炸机已经很稀有，值得抢救。
   - `By this time, a Lancaster bomber in reasonable condition was rare and worth rescuing.`
5. 法国方面安排人把飞机拆分包装，并运回法国。
   - `The French authorities had the plane packaged and moved in parts back to France.`
6. 爱好者准备修复这架飞机，但他们只需要重修四台发动机中的三台。
   - `A group of enthusiasts are going to have the plane restored, but they will need to have only three of the engines rebuilt.`
7. 第四台发动机像蜂蜜一样甜，仍然完好无损。
   - `The fourth engine was sweet as honey -- still in perfect condition.`
8. 一群蜜蜂把发动机变成了蜂房，它被蜂蜡完整保存了下来。
   - `A colony of bees had turned the engine into a hive and it was totally preserved in beeswax.`

Keep translation feedback focused on:

- `remote place`
- `was forgotten`
- `remained undisturbed`
- `was accidentally rediscovered`
- `worth rescuing`
- `had the plane packaged and moved`
- `have the plane restored`
- `preserved in beeswax`

## Image Prompt Guidance

Do not include text in images. The production agent should avoid prompts that
ask for labeled maps, readable aircraft serial numbers, museum plaques, repair
notes, crate labels, captions, speech bubbles, or UI panels.

Preferred style:

- cinematic educational illustration
- remote island mystery
- respectful aviation-history restoration mood
- warm surprise in the final beeswax frame
- clear action and expressions without text

Avoid:

- war combat, explosions, bombing, smoke, injury, or death
- horror-style swarms of bees
- readable labels or technical diagrams inside images
- making the aircraft look completely destroyed
- turning the restoration team into soldiers
- cluttered museum text panels

## Tone

Curious, historical, and delighted.

The child should feel:

- "I can picture a remote South Pacific island."
- "I understand why a rare old aircraft can be worth rescuing."
- "I can explain `have something done` with real examples."
- "I know why the title `Sweet as honey!` is funny and clever."
- "I can connect an old object's history with the idea of restoration."
