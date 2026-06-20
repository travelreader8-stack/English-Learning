# Lesson 72 Plan - A car called Bluebird

This is the source-of-truth design card for producing Lesson 72. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 72 assets.

## Basic Info

- Lesson: 72
- Title: `A car called Bluebird`
- Chinese title: `“蓝鸟”汽车`
- Core bridge: `速度纪录不是普通道路上“开快车很酷”，而是在特殊场地、特殊车辆、精确测量和巨大风险控制下完成的工程挑战；最后还带出父子追随同一梦想的传承感。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule and the section
responsibility rule in `LESSON_PRODUCTION_PLAN.md`.

- Keep the opening hook short.
  - Use 4-6 spoken lines only.
  - The hook should ask: why can someone reach over 304 mph but still be
    disappointed by an average speed of 299 mph?
  - Do not retell the full Malcolm Campbell story before the four `retell`
    frames.
- Make the setting clear before talking about speed.
  - Bonneville Salt Flats is a flat, open salt-flat record course, not an
    ordinary road.
  - Explain that this is a controlled speed-record attempt, not street racing.
  - Do not make illegal speeding or reckless driving look exciting.
- Teach `miles per hour` and `kilometers per hour` lightly.
  - `mile` is a distance unit common in Britain and the United States.
  - `kilometer` is the familiar unit in China and many other countries.
  - Rough classroom conversion: `1 mile ≈ 1.6 kilometers`.
  - `300 miles per hour` is about `480 kilometers per hour`; `600 miles per
    hour` is about `960 kilometers per hour`.
  - This is for speed intuition only; do not turn the lesson into a conversion
    worksheet.
- Explain peak speed versus average speed.
  - Campbell reached over 304 mph at one point.
  - The record depended on average speed.
  - That is why `299 miles per hour` felt like failure, while corrected `301
    miles per hour` changed the result.
- Treat engineering and risk seriously.
  - The car was specially built, over 30 feet long, with a 2,500-horsepower
    engine.
  - A tyre burst during the first run, and Campbell had great difficulty
    controlling the car.
  - The courseware should not invite children to imitate dangerous driving.
- Teach family legacy without sentimentality overload.
  - Donald Campbell follows in his father's footsteps many years later.
  - The repeated name `Bluebird` gives the ending a strong memory hook.
  - Connect this gently to learning, sport, family influence, and long-term
    dreams.
- Story spine must be Chinese-first.
  - Present the speed-record chain in Chinese first.
  - Attach short English chunks after each Chinese anchor.
  - Do not show an all-English plot chain as the main memory path.
- Avoid repeated script content across sections.
  - The four `retell` frames are the only section that should walk through the
    passage in order.
  - The teacher-student dialogue should deepen speed units, average speed, risk
    control, and family legacy.
  - Vocabulary and grammar sections should explain language tools, not retell
    the whole story again.
- Generated illustrations must be text-free.
  - No readable English or Chinese text inside images.
  - No readable car logos, race numbers, speedometer digits, plaques, maps,
    banners, signs, dashboards, measuring screens, UI panels, or fake lesson
    text.
  - Render words such as `Bluebird`, `Bonneville Salt Flats`, `miles per hour`,
    `average speed`, `horsepower`, `tyre burst`, and `following in his father's
    footsteps` as real UI text outside the image.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, camera directions,
    or generated-image mechanics.
  - Storyboard prompts must not leak into spoken lesson content.

## Production Warnings

- Known source-data issue in `web/data/lessons.json` should be surfaced before
  production edits shared data.
  - Title currently says `A car called bluebird`.
  - The proper car name in the passage is `Bluebird`.
  - The title should be `A car called Bluebird`.
  - If production is allowed to patch shared data, make only this exact title
    capitalization fix and do not rewrite the passage.
  - If production is not allowed to patch shared data, stop and ask instead of
    building finished assets on top of visible source issues.
- Do not present the speed attempt as normal driving.
  - This is an official record attempt on a salt-flat course.
  - It is not a road-driving model for a child.
- Do not overdo unit conversion.
  - Give the `1 mile ≈ 1.6 kilometers` rule and the two useful examples:
    `300 mph ≈ 480 km/h`, `600 mph ≈ 960 km/h`.
  - Keep the focus on understanding how fast it is.
- Do not confuse highest speed with average speed.
  - This is the most important comprehension point in the passage.
  - The production script should explicitly explain why 304 mph and 299/301
    mph can both be true.
- Do not make the tyre burst graphic.
  - Show danger through controlled body language, dust, repair crew, or a tyre
    problem cue.
  - Avoid crashes, injury, panic, flames, or wreckage.
- Use British `tyre` because the passage uses it.
  - If needed, mention American spelling `tire` briefly, but keep the passage
    spelling in lesson materials.

## Lesson Positioning

Lesson 72 is a speed-record story about engineering, measurement, risk, and
legacy. Sir Malcolm Campbell was the first man to drive at over 300 miles per
hour. In September 1935, he set a world record at Bonneville Salt Flats in Utah.
His car, Bluebird, had been specially built for him: it was over 30 feet long
and had a 2,500-horsepower engine. Campbell reached over 304 miles per hour,
but because a tyre burst during the first run, he had great difficulty
controlling the car. After the attempt, he was disappointed to learn that his
average speed was 299 miles per hour. A few days later, he was told that a
mistake had been made: the correct average speed was 301 miles per hour. The
story then zooms out to later racing records and ends with Donald Campbell,
Sir Malcolm's son, following in his father's footsteps and driving another car
called Bluebird.

The courseware should make the student understand:

`Malcolm Campbell 是伟大的赛车手 -> 他要挑战 300 mph 以上的速度纪录 -> 地点是 Utah 的 Bonneville Salt Flats，不是普通马路 -> Bluebird 是专门制造的纪录车 -> 车很长，发动机马力极大 -> 他瞬间速度超过 304 mph，但轮胎爆裂，控制很困难 -> 纪录看平均速度，他先听说只有 299 mph，所以失望 -> 后来发现算错了，平均速度其实是 301 mph -> 许多年后，他的儿子 Donald 也追随父亲脚步，开着名叫 Bluebird 的车创造纪录`

The central bridge is:

`现代孩子可以把这篇理解成一次极限工程挑战：特殊场地、专用车辆、精确测速、风险控制和平均速度，最后落到“追随父亲脚步”的传承感。`

## One-Sentence Hook

Sir Malcolm Campbell drove faster than 300 miles per hour, but the story turns
on a tiny difference between 299 and 301 average miles per hour.

## Vivid Teaching Opening

The opening should set up speed measurement and the reversal quickly. It must
be a short hook, not a complete retelling.

Suggested teacher narration:

`如果一辆车瞬间开到 304 miles per hour，算不算破纪录？`

`不一定，因为纪录看的不是某一秒最快，而是 average speed。`

`Malcolm Campbell 开的 Bluebird 不是普通汽车，而是一辆专门为速度纪录制造的车。`

`300 miles per hour 大约是 480 kilometers per hour，快得几乎不像日常驾驶。`

`今天我们学一个关于速度、测量、风险和父子传承的故事。`

Tone:

- Awe-inspiring, precise, and safety-minded.
- Let the speed feel impressive, but never encourage imitation.
- Save the full sequence for the four `retell` frames.

## Section Responsibility And Anti-Repetition Plan

### Opening

Job:

- Raise the 304 mph versus 299/301 mph puzzle.
- Introduce controlled record attempt versus ordinary driving.
- Give one quick mile/kilometer intuition.

Do not:

- Retell every detail of the record.
- Show speed as reckless fun.
- Spend too long on arithmetic.

### Four Retell Frames

Job:

- Walk through the passage in order.
- Make the record-attempt chain easy to remember.
- Use Chinese anchors and short English chunks.

Do not:

- Put readable car numbers, logos, measuring-board text, or speedometer digits
  inside images.
- Show a crash, injury, or dangerous public-road scene.
- Let the salt-flat setting look like a normal highway.

### Teacher-Student Dialogue

Job:

- Deepen four ideas:
  1. why Bonneville Salt Flats is suitable for speed records
  2. miles per hour versus kilometers per hour
  3. peak speed versus average speed
  4. following in a parent's footsteps
- Compare:
  `reached a speed of over 304 mph` versus `average speed had been 299/301 mph`
  `racing record` versus `reckless driving`
  `miles per hour` versus `kilometers per hour`
  `copying someone` versus `following in someone's footsteps`

Do not:

- Re-list the full plot.
- Make the conversation a pure maths lesson.
- Turn Campbell into an unsafe-driving hero.

### Vocabulary And Grammar

Job:

- Explain words and structures that make the lesson work:
  `racing driver`, `miles per hour`, `set up a world record`,
  `Bonneville Salt Flats`, `Utah`, `specially built`, `in length`,
  `horsepower`, `reached a speed`, `tyre burst`, `attempt`,
  `average speed`, `a mistake had been made`, `following in his father's
  footsteps`.
- Teach passive and past perfect passive:
  `had been specially built`, `had been 299 miles per hour`,
  `he was told that a mistake had been made`.
- Teach contrast:
  `Although Campbell reached a speed of over 304 miles per hour, he had great
  difficulty in controlling the car...`
- Teach participle opening:
  `Following in his father's footsteps...`

Do not:

- Reduce the lesson to passive voice only.
- Skip `average speed`, because it is the logic key.
- Skip `footsteps`, because it is the emotional ending.

### Practice And Living-Scene Transfer

Job:

- Move the language into a modern child-understandable situation:
  a model-car speed challenge, robotics speed test, drone timing challenge,
  school athletics timing, or racing simulator with safety rules.
- Let the student say:
  `The car was specially built for the test.`
  `It reached a speed of...`
  `Its average speed was...`
  `A mistake had been made.`
  `I was disappointed to learn that...`
  `I followed in my father's footsteps.`

Do not:

- Ask the child to practise dangerous real driving.
- Make the scene about breaking traffic rules.
- Make the calculation more important than the language.

## Cultural And Background Bridge

The lesson needs a compact modern bridge:

1. Bonneville Salt Flats
   - It is a very flat, open salt-flat area in Utah, used for speed-record
     attempts.
   - This explains why the record is not attempted on an ordinary road.
   - Visually, show white flat land, huge sky, long straight course.
2. Bluebird
   - Bluebird is the name of Campbell's record car.
   - The name repeats when Donald Campbell later drives a car called Bluebird.
   - Treat it as a family-record symbol, not just a car model.
3. Miles and kilometers
   - `mile` and `kilometer` are both distance units.
   - English-speaking countries often use `miles per hour` for road speed.
   - China uses kilometers per hour.
   - `1 mile ≈ 1.6 kilometers`; `300 mph ≈ 480 km/h`.
   - Use this only to build a sense of scale.
4. Peak speed and average speed
   - `reached a speed of over 304 mph` means a high speed reached during the
     run.
   - `average speed` is the calculated speed for the record.
   - The difference explains Campbell's disappointment and later relief.
5. Engineering risk
   - A 2,500-horsepower engine is far beyond normal car experience.
   - A tyre burst at extreme speed is terrifying and dangerous.
   - The lesson should respect the bravery and engineering, not romanticize the
     danger.
6. Family legacy
   - `following in his father's footsteps` means doing similar work or chasing
     a similar dream.
   - It can be used for sports, study, music, science, business, or public
     service.

## Visual Direction

The four illustrations should form one continuous speed-record story on the
salt flats.

### Visual Consistency

Use a consistent 1930s land-speed-record visual motif:

- bright, flat, white Bonneville-style salt flats
- same streamlined blue record car across frames 1-3
- same Sir Malcolm Campbell: middle-aged racing driver, helmet/goggles,
  focused and composed
- timing officials/mechanics suggested with instruments, notebooks, tools, and
  signal flags, but no readable text or numbers
- final frame introduces Donald Campbell later with a newer blue record car,
  visually echoing the father's Bluebird

Core object:

- Bluebird: long, low, streamlined blue record car, clearly specially built,
  not a normal road car.
- Salt-flat course: vast, safe, controlled, empty, not public traffic.
- Measurement equipment: visual only, no readable digits.

Do not put readable text in images.

### Frame 1 - The Salt Flats Record Attempt

Scene purpose:

- Establish Malcolm Campbell, Bonneville Salt Flats, and the 300 mph record
  goal.

Visual:

- Sir Malcolm Campbell stands beside the long blue Bluebird on a vast white
  salt-flat course.
- Timing officials and mechanics prepare the controlled record attempt.
- The scene feels official and engineered, not like street racing.

Student-facing anchor:

`Malcolm Campbell 在 Utah 的 Bonneville Salt Flats 挑战 300 mph 以上的世界纪录。`

English chunks:

- `great racing driver`
- `over 300 miles per hour`
- `set up a new world record`
- `Bonneville Salt Flats, Utah`

### Frame 2 - Specially Built And Hard To Control

Scene purpose:

- Show the engineering scale and the tyre-burst danger.

Visual:

- Bluebird races across the salt flats, low and powerful.
- A subtle tyre problem/dust cue suggests a burst tyre without crash imagery.
- Campbell keeps control with intense focus.

Student-facing anchor:

`Bluebird 是专门为他制造的，车很长、马力巨大；轮胎爆裂后，他很难控制汽车。`

English chunks:

- `had been specially built for him`
- `over 30 feet in length`
- `2,500-horsepower engine`
- `a tyre burst`
- `great difficulty in controlling the car`

### Frame 3 - 299 Or 301 Average Speed

Scene purpose:

- Teach the peak-versus-average-speed reversal.

Visual:

- Campbell first looks disappointed beside officials reviewing measurement
  instruments.
- A second moment in the same frame shows corrected calculation and relief.
- Do not show readable numbers on paper or screens; use body language.

Student-facing anchor:

`他一开始听说平均速度只有 299 mph，很失望；几天后才知道算错了，实际是 301 mph。`

English chunks:

- `reached a speed of over 304 miles per hour`
- `average speed`
- `was disappointed to learn`
- `a mistake had been made`
- `301 miles per hour`

### Frame 4 - Following In His Father's Footsteps

Scene purpose:

- Land the legacy ending with Donald Campbell and another Bluebird.

Visual:

- Many years later, Donald Campbell prepares beside a newer blue record car on
  an open record course.
- A subtle visual echo of Sir Malcolm's earlier Bluebird appears through
  composition or a small non-text family photo shape, but no readable labels.
- The mood is respectful and inspiring.

Student-facing anchor:

`多年后，Donald Campbell 追随父亲的脚步，也驾驶一辆名叫 Bluebird 的车创造纪录。`

English chunks:

- `Since that time`
- `racing drivers have reached speeds over 600 miles an hour`
- `Following in his father's footsteps`
- `also set up a world record`
- `a car called Bluebird`

## Storyboard Requirements

The storyboard JSON must include:

- `visual_consistency`
  - Mention the same 1930s blue streamlined Bluebird and Sir Malcolm Campbell
    across frames 1-3.
  - Mention the wide Bonneville-style salt flats as the controlled record
    environment.
  - Mention the tyre-burst difficulty without crash, injury, fire, or wreckage.
  - Mention Donald Campbell and a later blue record car in frame 4 as a visual
    echo of the father's Bluebird.
  - Mention that images must contain no readable logos, race numbers,
    speedometer digits, maps, signs, plaques, dashboards, captions, or text.
- 4 frames only.
- Each frame prompt should:
  - maintain the same salt-flat environment for the record attempt
  - keep the car clearly specially built, not a normal road car
  - keep the tone engineering-focused and safety-aware
  - avoid public-road racing, crashes, injury, flames, or dangerous glamour
  - avoid readable environmental text

## Teacher-Student Dialogue Direction

The dialogue should not retell the whole passage. It should deepen the modern
meaning.

Suggested dialogue spine:

1. Student asks whether Campbell was just driving too fast.
   - Teacher: no. This was a controlled land-speed-record attempt on a salt
     flat, not ordinary road driving.
2. Student asks what `miles per hour` means.
   - Teacher: miles and kilometers are distance units. One mile is about 1.6
     kilometers, so 300 mph is about 480 km/h.
3. Student asks why he was disappointed if he reached over 304 mph.
   - Teacher: that was a reached/peak speed. The record depended on average
     speed, first reported as 299 mph and later corrected to 301 mph.
4. Student asks why the tyre burst matters.
   - Teacher: at that speed, even a tyre problem makes control extremely
     difficult; this is engineering risk, not fun driving.
5. Student asks what `following in his father's footsteps` means.
   - Teacher: Donald chose a similar path and continued the family dream,
     driving another car called Bluebird.

The dialogue should leave the student feeling:

- I understand the salt-flat record setting.
- I know miles are not kilometers, and 300 mph is nearly 480 km/h.
- I understand peak speed versus average speed.
- I know why a tyre burst at high speed is dangerous.
- I can use `following in his father's footsteps` beyond this passage.

## Vocabulary Direction

Use exactly 3 formal vocabulary blocks.

Recommended formal vocab blocks:

1. `average`
   - Explain as the calculated middle/overall value over a whole attempt.
   - Connect to the 299/301 mph record result.
   - Contrast with `reached a speed of over 304 miles per hour`.
2. `horsepower`
   - Explain as a unit for engine power.
   - Connect to `2,500-horsepower engine`.
   - Give only intuition: this is far beyond an ordinary family car.
3. `burst`
   - Explain as suddenly break open.
   - Connect to `a tyre burst`.
   - Mention British spelling `tyre`; American spelling `tire` if useful.

Supporting words and phrases:

- `racing driver`
- `miles per hour`
- `kilometers per hour`
- `per`
- `set up a world record`
- `Bonneville Salt Flats`
- `Utah`
- `specially built`
- `in length`
- `engine`
- `reached a speed`
- `have great difficulty in`
- `controlling the car`
- `attempt`
- `disappointed to learn`
- `a mistake had been made`
- `since that time`
- `following in his father's footsteps`
- `called Bluebird`

Useful Chinese explanations:

- `racing driver`: 赛车手，不是普通司机。
- `miles per hour`: 每小时英里数，常写作 mph。
- `kilometers per hour`: 每小时公里数，常写作 km/h。
- `1 mile ≈ 1.6 kilometers`: 粗略换算，帮助理解速度。
- `set up a world record`: 创造世界纪录。
- `Bonneville Salt Flats`: 犹他州的盐滩速度纪录场地。
- `specially built`: 专门制造的。
- `horsepower`: 马力，描述发动机功率。
- `tyre burst`: 轮胎爆裂；`tyre` 是英式拼法。
- `attempt`: 尝试、挑战。
- `average speed`: 平均速度，纪录判断的关键。
- `was disappointed to learn`: 失望地得知。
- `a mistake had been made`: 出了一个错误；被动语气。
- `following in his father's footsteps`: 追随父亲的脚步。

## Grammar Handling

Do not start from a passive-voice table. Start from the record attempt:

`这篇的语法服务于两个事实：车是专门被制造出来的，速度是后来被测量和更正出来的。`

### Job 1 - Past Perfect Passive For Preparation

Key line:

- `Bluebird, the car he was driving, had been specially built for him.`

Teaching point:

`had been specially built` tells us the car was built before the record attempt
and was designed for Campbell.

Student explanation:

`had been specially built 表示在他开这辆车挑战纪录之前，这辆车已经被专门制造好了。这里强调“被制造”，不是普通买来的车。`

### Job 2 - Although And Difficulty

Key line:

- `Although Campbell reached a speed of over 304 miles per hour, he had great difficulty in controlling the car because a tyre burst during the first run.`

Teaching point:

`Although` sets up a contrast: the speed was impressive, but the run was not
easy or safe.

Student explanation:

`Although 后面是“虽然很快”，主句却说“控制很困难”。这让孩子知道作者不是只在夸速度，也在提醒风险。`

### Job 3 - Reported Result And Passive Mistake

Key lines:

- `Campbell was disappointed to learn that his average speed had been 299 miles per hour.`
- `he was told that a mistake had been made`
- `His average speed had been 301 miles per hour.`

Teaching point:

The passage uses reported information and past perfect to show that the result
was calculated, announced, then corrected.

Student explanation:

`was disappointed to learn 是“失望地得知”。a mistake had been made 是“一个错误已经被造成/出现了”。速度纪录不是感觉出来的，而是测量和计算出来的。`

### Job 4 - Following In His Father's Footsteps

Key line:

- `Following in his father's footsteps many years later, Sir Malcolm's son, Donald, also set up a world record.`

Teaching point:

The opening `Following...` phrase gives background before the main sentence.
The idiom means choosing a similar path to someone before you.

Student explanation:

`following in his father's footsteps 不是字面上踩脚印，而是“走上和父亲相似的道路”。这句话让结尾有一种传承感。`

Use a compact display:

| Story meaning | English |
| --- | --- |
| 第一个超过 300 mph 的人 | `the first man to drive at over 300 miles per hour` |
| 创造世界纪录 | `set up a new world record` |
| 专门为他制造 | `had been specially built for him` |
| 车长超过 30 英尺 | `over 30 feet in length` |
| 轮胎爆裂 | `a tyre burst` |
| 很难控制汽车 | `had great difficulty in controlling the car` |
| 失望地得知 | `was disappointed to learn` |
| 平均速度 | `average speed` |
| 出了一个错误 | `a mistake had been made` |
| 追随父亲脚步 | `following in his father's footsteps` |

## Read-Aloud Direction

Create `web/data/read_aloud/lesson_72.json` with 5-8 high-value sentences.

Recommended sentences:

1. `The great racing driver, Sir Malcolm Campbell, was the first man to drive at over 300 miles per hour.`
   - Focus: proper name, `racing driver`, `miles per hour`.
2. `He set up a new world record in September 1935 at Bonneville Salt Flats, Utah.`
   - Focus: place name and record phrase.
3. `Bluebird, the car he was driving, had been specially built for him.`
   - Focus: apposition and past perfect passive.
4. `It was over 30 feet in length and had a 2,500-horsepower engine.`
   - Focus: measurements and `horsepower`.
5. `Although Campbell reached a speed of over 304 miles per hour, he had great difficulty in controlling the car because a tyre burst during the first run.`
   - Focus: long contrast sentence, risk language.
6. `After his attempt, Campbell was disappointed to learn that his average speed had been 299 miles per hour.`
   - Focus: `disappointed to learn`, `average speed`.
7. `However, a few days later, he was told that a mistake had been made.`
   - Focus: correction turn and passive.
8. `Following in his father's footsteps many years later, Sir Malcolm's son, Donald, also set up a world record.`
   - Focus: idiom and legacy ending.

If a shorter read-aloud set is needed, prioritize sentences 1, 3, 5, 6, 7, and
8.

Pronunciation notes:

- `Sir Malcolm Campbell`: proper name; model slowly.
- `miles per hour`: link naturally; explain `per`.
- `Bonneville Salt Flats`: unfamiliar place name; model in chunks.
- `Utah`: two syllables.
- `Bluebird`: compound word; keep both parts clear.
- `specially`: do not drop the middle sound.
- `horsepower`: stress first part.
- `tyre`: British spelling; same idea as American `tire`.
- `burst`: final consonant cluster clear.
- `average`: stress the first syllable.
- `Donald`: proper name.
- `footsteps`: two clear parts.

Feedback style:

- Praise clear pauses in long speed-record sentences.
- Encourage the student to read numbers slowly and confidently.
- If the student says `kilometers` while reading the passage, remind them that
  the passage says `miles per hour`, while the Chinese explanation may compare
  it with kilometers.

## Living-Scene Exercise Direction

The living-scene exercise should transfer the lesson into a safe modern
measurement challenge.

Recommended setting:

`A school robotics club builds a small model car for a speed test on a safe track. The car reaches a high peak speed, but the team learns that the competition uses average speed over the full run. At first the calculation looks disappointing; later a timing mistake is corrected.`

Why this works:

- It keeps the engineering and measurement logic.
- It removes dangerous real driving.
- It naturally uses:
  `specially built`, `reached a speed`, `average speed`, `attempt`,
  `a mistake had been made`, `disappointed to learn`, and `world record` in a
  child-safe way.

Possible roles:

- Student engineer
- Robotics club teammate
- Teacher/timekeeper
- Parent who inspired the project

Target language:

- `Our model car was specially built for the test.`
- `It reached a speed of ...`
- `Its average speed was ...`
- `We were disappointed to learn the result.`
- `Later, we were told that a mistake had been made.`
- `I followed in my father's footsteps by joining the robotics club.`

## Suggested You Too Scene

Scene title:

`The Model Car Speed Test`

Scene premise:

`Your robotics club tests a model car on a safe track. You explain the difference between peak speed and average speed, and you learn why accurate measurement matters.`

Dialogue goals:

- explain what was specially built
- compare peak speed and average speed
- respond to a disappointing result
- explain that a timing mistake was corrected
- connect the activity to family influence or a personal goal

Suggested exchanges:

1. Teacher:
   `What did your team build?`
2. Student:
   `We built a model car for a speed test.`
3. Teacher:
   `Was it an ordinary toy car?`
4. Student:
   `No. It was specially built for the test.`
5. Teacher:
   `Why were you disappointed?`
6. Student:
   `We were disappointed to learn that our average speed was lower than we expected.`
7. Teacher:
   `What happened later?`
8. Student:
   `We were told that a mistake had been made, so the result was corrected.`

Keep the exercise safe, measured, and practical.

## Extension Practice Direction

Lesson 72 extension production should be included in full production. If the
main lesson assets already exist later and only extension is missing, create
`web/data/extension/lesson_72.json` and register `72` in
`web/data/extension/index.json` without regenerating script, audio, timeline,
read-aloud data, or storyboard images.

### Extension Reading

Use an original same-topic engineering-and-measurement story. A school robotics
team, model-car club, drone team, or athletics timing group tries to set a safe
record. Their machine or runner reaches an impressive peak speed, but the final
result depends on average speed. A small timing or calculation mistake is later
corrected. The story should reuse the ideas of special preparation, accurate
measurement, disappointment, correction, and following someone's footsteps. Do
not retell Malcolm Campbell or use dangerous road racing.

Suggested title: `The Average Speed`

Recommended word bank: `record`, `miles per hour`, `kilometers per hour`,
`specially built`, `horsepower`, `burst`, `attempt`, `average`, `mistake`,
`footsteps`, `safe track`.

The 5 reading questions should test:

1. what machine or activity was being tested
2. how peak speed differed from average speed
3. why the first result was disappointing
4. what mistake was corrected
5. how the student or team followed someone else's example or dream

When creating the JSON, shuffle the options so the correct answers are
distributed. For these 5 questions, use at least 3 different `answer_index`
positions, include at least one correct answer in C or D, and do not put more
than 2 correct answers in the same position.

### Sentence Writing

Use 5 patterns:

1. `the first ... to ...`
   - Source: `was the first man to drive at over 300 miles per hour`
   - Focus: describing a breakthrough.
   - Must include: `the first` and `to`
2. `had been specially built for ...`
   - Source: `had been specially built for him`
   - Focus: special preparation before a challenge.
   - Must include: `had been specially built for`
3. `Although ..., ... had great difficulty in ...`
   - Source: `Although Campbell reached a speed of over 304 miles per hour, he had great difficulty in controlling the car`
   - Focus: contrast between success and difficulty.
   - Must include: `Although` and `had great difficulty in`
4. `was disappointed to learn that ...`
   - Source: `Campbell was disappointed to learn that his average speed had been 299 miles per hour`
   - Focus: receiving disappointing information.
   - Must include: `was disappointed to learn that`
5. `Following in ... footsteps, ...`
   - Source: `Following in his father's footsteps many years later`
   - Focus: legacy or influence.
   - Must include: `Following in` and `footsteps`

## Chinese-To-English Exercise Direction

If production creates guided translation prompts inside lesson-local materials,
use meaning chunks that preserve the speed-record logic.

Suggested chunking:

1. 伟大的赛车手 Malcolm Campbell 爵士是第一个以超过每小时 300 英里速度驾驶的人。
   - `The great racing driver, Sir Malcolm Campbell, was the first man to drive at over 300 miles per hour.`
2. 他于 1935 年 9 月在 Utah 的 Bonneville Salt Flats 创造了一项新的世界纪录。
   - `He set up a new world record in September 1935 at Bonneville Salt Flats, Utah.`
3. 他驾驶的 Bluebird 是专门为他制造的。
   - `Bluebird, the car he was driving, had been specially built for him.`
4. 它长超过 30 英尺，并有一台 2,500 马力的发动机。
   - `It was over 30 feet in length and had a 2,500-horsepower engine.`
5. 虽然 Campbell 达到了超过每小时 304 英里的速度，但由于第一次行驶中轮胎爆裂，他很难控制汽车。
   - `Although Campbell reached a speed of over 304 miles per hour, he had great difficulty in controlling the car because a tyre burst during the first run.`
6. 尝试结束后，他失望地得知自己的平均速度是每小时 299 英里。
   - `After his attempt, Campbell was disappointed to learn that his average speed had been 299 miles per hour.`
7. 然而几天后，有人告诉他出了一个错误。
   - `However, a few days later, he was told that a mistake had been made.`
8. 他的平均速度实际是每小时 301 英里。
   - `His average speed had been 301 miles per hour.`
9. 许多年后，Malcolm 爵士的儿子 Donald 追随父亲的脚步，也创造了一项世界纪录。
   - `Following in his father's footsteps many years later, Sir Malcolm's son, Donald, also set up a world record.`
10. 和父亲一样，他驾驶的也是一辆名叫 Bluebird 的汽车。
   - `Like his father, he was driving a car called Bluebird.`

Keep translation feedback focused on:

- `racing driver`
- `over 300 miles per hour`
- `set up a new world record`
- `had been specially built for him`
- `over 30 feet in length`
- `2,500-horsepower engine`
- `Although`
- `had great difficulty in controlling`
- `average speed`
- `a mistake had been made`
- `following in his father's footsteps`

## Image Prompt Guidance

Do not include text in images. The production agent should avoid prompts that
ask for readable car names, logos, race numbers, speedometer digits, timing
boards, plaques, maps, road signs, captions, or speech bubbles.

Preferred style:

- cinematic 1930s land-speed-record atmosphere
- vast white salt flats and long horizon
- streamlined blue record car as the recurring object
- engineering seriousness: mechanics, timing officials, measuring instruments
- final-frame family legacy with Donald Campbell and a later Bluebird echo
- restrained drama around the tyre burst, without crash imagery

Avoid:

- public-road racing
- illegal street-racing glamour
- crashes, flames, injuries, wreckage, or panic
- readable measurement screens or dashboard numbers
- making speed look like something children should imitate
- overcomplicated technical diagrams

## Tone

Exciting, precise, safety-minded, and quietly inspiring.

The child should feel:

- "I understand that this was a controlled speed-record attempt, not ordinary
  driving."
- "I know miles and kilometers are different, and 300 mph is about 480 km/h."
- "I understand why peak speed and average speed are different."
- "I can explain why 299 and 301 mph mattered so much."
- "I can use phrases like `had been specially built`, `average speed`, and
  `following in his father's footsteps`."
