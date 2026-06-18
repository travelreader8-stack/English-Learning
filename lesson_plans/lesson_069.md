# Lesson 69 Plan - But Not Murder!

This is the source-of-truth design card for producing Lesson 69. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 69 assets.

## Basic Info

- Lesson: 69
- Title: `But not murder!`
- Chinese title: `并非谋杀！`
- Core bridge: `开车安全不只是会操作，更重要的是提前发现危险、迅速反应，并且不要被一时的自信冲昏头。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule and the section
responsibility rule in `LESSON_PRODUCTION_PLAN.md`.

- Keep the opening hook short.
  - Use 4-6 spoken lines only.
  - The hook should ask: why can a driving test be failed by one slow reaction?
  - Do not retell the full Mr. Eames driving-test story before the four
    `retell` frames.
- Treat the title as black humour, not real violence.
  - `But not murder!` sounds dramatic, but the story is about a simulated
    emergency-stop test.
  - Make clear that no real child is hit in the story.
  - Do not show a real child being struck, injured, killed, or in physical
    danger.
- Make the driving-test context concrete for a child.
  - Explain `driving licence`, `examiner`, `heavy traffic`, `brake pedal`,
    `within five feet`, and emergency stop.
  - The student does not need to know every driving-law detail.
  - The main modern bridge is hazard perception: seeing danger early and
    reacting safely.
- Show overconfidence as the story turn.
  - Mr. Eames starts nervous because this is his third test.
  - He succeeds in heavy traffic and begins to acquire confidence.
  - The slow reaction at the emergency stop ruins the moment.
- Story spine must be Chinese-first.
  - Present the confidence-and-reaction chain in Chinese first.
  - Attach short English chunks after each Chinese anchor.
  - Do not show an all-English plot chain as the main memory path.
- Avoid repeated script content across sections.
  - The four `retell` frames are the only section that should walk through the
    passage in order.
  - The teacher-student dialogue should deepen road-safety thinking,
    overconfidence, and simulated emergency testing.
  - Vocabulary and grammar sections should explain language tools, not retell
    the whole story again.
- Generated illustrations must be text-free.
  - No readable English or Chinese text inside images.
  - No readable road signs, test papers, licence cards, dashboard screens,
    warning labels, speech bubbles, UI panels, or fake lesson text.
  - Render words such as `driving licence`, `examiner`, `heavy traffic`,
    `emergency stop`, `react`, and `brake pedal` as real UI text outside the
    image.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, camera directions,
    or generated-image mechanics.
  - Storyboard prompts must not leak into spoken lesson content.

## Production Warnings

- Known source-data issues in `web/data/lessons.json` should be surfaced before
  production edits shared data.
  - English currently says `he smiled and said.` before direct speech; it
    should use comma or colon-style punctuation before the quote.
  - English currently says `Mr.Eames`; it should be `Mr. Eames`.
  - English currently says `the examiner tapped loudly, Though`; punctuation
    and capitalization should be fixed to separate the clauses.
  - The final quote should be checked for proper closing punctuation.
  - If production is allowed to patch shared data, make only these exact
    punctuation/spacing fixes and do not rewrite the passage.
  - If production is not allowed to patch shared data, stop and ask instead of
    building finished assets on top of visible source issues.
- Do not make the child-in-road scenario graphic.
  - The examiner asks the driver to imagine a child crossing the road.
  - Illustrations should use an empty road, examiner gesture, imagined hazard
    cue, or safe symbolic setup rather than a child in danger.
- Explain `murder` carefully.
  - In ordinary language, murder means deliberate unlawful killing.
  - Here the title is comic exaggeration; the driving failure is not murder.
  - Avoid legal-detail overload.
- Do not overteach traffic law.
  - The courseware is an English lesson with a road-safety bridge.
  - Mention emergency stop and hazard perception only enough to make the story
    understandable.
- `within five feet` should be treated as the passage's test condition.
  - Do not convert the unit inside the passage.
  - A quick classroom note can say five feet is roughly a very short stopping
    distance.

## Lesson Positioning

Lesson 69 is a driving-test comedy with a serious road-safety core. Mr. Eames
is being tested for a driving licence for the third time. He has already driven
successfully in heavy traffic. After being instructed to drive out of town, he
begins to acquire confidence and almost enjoys the test. The examiner seems
pleased and gives one final emergency-stop scenario: suppose a child suddenly
crosses the road, and when the examiner taps on the window, Mr. Eames must stop
within five feet. Mr. Eames keeps driving. When the examiner taps loudly, he
hears the sound clearly but reacts too slowly. He suddenly presses the brake
pedal, throwing both men forward. The examiner then delivers the grim joke:
`you have just killed that child`.

The courseware should make the student understand:

`Mr. Eames 第三次考驾照 -> 他在拥挤交通中顺利驾驶 -> 开出城后开始有信心 -> 他以为自己已经通过了 -> 考官提出最后一个假设：孩子突然过马路 -> 听到敲窗必须在 5 英尺内停车 -> 考官敲窗，声音很清楚 -> Mr. Eames 反应太慢 -> 他猛踩刹车，两人向前冲 -> 考官用悲伤语气说出黑色幽默`

The central bridge is:

`安全驾驶考的不是“我感觉我会了”，而是在危险出现时能不能及时观察、判断、反应。`

## One-Sentence Hook

Mr. Eames almost believes he has passed his driving test, but one slow reaction
turns his confidence into the examiner's darkest joke.

## Vivid Teaching Opening

The opening should set up the test and the reversal quickly. It must be a short
hook, not a complete retelling.

Suggested teacher narration:

`如果你第三次考驾照，前面都开得不错，你会不会开始觉得：这次稳了？`

`Mr. Eames 就是这样，越开越有信心。`

`可是驾驶考试最怕的不是平时会不会开，而是危险突然出现时，你能不能马上反应。`

`考官只敲了一下车窗，他却慢了。`

`今天我们学一个小黑色幽默：It was only a test, but the reaction was real。`

Tone:

- Lightly tense, comic, and safety-minded.
- Let the final line feel sharp, but never graphic.
- Save the full sequence for the four `retell` frames.

## Section Responsibility And Anti-Repetition Plan

### Opening

Job:

- Raise the driving-test pressure.
- Establish overconfidence as the setup.
- Introduce emergency reaction as the key point.

Do not:

- Retell every test step.
- Begin with a passive-voice lecture.
- Make the child scenario frightening.

### Four Retell Frames

Job:

- Walk through the passage in order.
- Make the confidence-to-reaction chain easy to remember.
- Use Chinese anchors and short English chunks.

Do not:

- Put readable road signs, licence text, dashboard text, or test notes inside
  images.
- Show collision, injury, death, or an actual child in danger.
- Make the examiner cruel; he is strict and dryly humorous.

### Teacher-Student Dialogue

Job:

- Deepen three ideas:
  1. emergency stop is a safety test, not a random trick
  2. confidence is useful but overconfidence slows attention
  3. hazard perception means noticing danger before it is too late
- Compare:
  `hear the signal` versus `react to the signal`
  `acquire confidence` versus `assume I have passed`

Do not:

- Re-list the full plot.
- Turn the dialogue into a driving-law lesson.
- Let the final joke dominate the safety message.

### Vocabulary And Grammar

Job:

- Explain words and structures that make the lesson work:
  `driving licence`, `for the third time`, `heavy traffic`, `successfully`,
  `instructed`, `acquire confidence`, `examiner`, `performance`, `suppose`,
  `tap`, `within five feet`, `react`, `brake pedal`, `thrown forward`,
  `mournful`, `murder`.
- Teach passive and perfect-passive testing language:
  `was being tested`, `had been asked`, `had been instructed`, `could be
  heard`, `were both thrown forward`.
- Teach deduction:
  `The examiner must have been pleased`.
- Teach quick time logic:
  `As soon as I tap`, `it took me a long time to react`.

Do not:

- Reduce the lesson to a passive-voice chart.
- Skip `react`, because it is the real safety word.
- Over-explain the legal word `murder`.

### Practice And Living-Scene Transfer

Job:

- Move the language into a modern child-understandable scenario:
  a bicycle safety drill, school bus safety drill, sports reaction drill,
  simulator game, or PE class stop-signal exercise.
- Let the student say:
  `As soon as I hear the signal, I must...`
  `It took me too long to react.`
  `I began to acquire confidence.`
  `I was being tested on...`

Do not:

- Ask the child to practise dangerous road behaviour.
- Make the practice about real driving if the student is too young.
- Make the final line graphic or scary.

## Cultural And Background Bridge

The lesson needs a compact modern bridge:

1. Driving licence test
   - A driving licence proves someone is allowed to drive.
   - An examiner tests whether the driver can control the car safely.
   - The test is not only about moving the car; it is about judgment and
     reaction.
2. Emergency stop
   - The examiner gives a signal.
   - The driver must stop quickly and safely.
   - The key is not panic braking, but quick reaction with control.
3. Hazard perception
   - Modern driving training often emphasizes seeing hazards early.
   - A child crossing the road is a classic sudden hazard.
   - This links the old textbook scene to current safety thinking.
4. Overconfidence
   - Mr. Eames begins to feel sure he has passed.
   - That confidence makes the final failure funnier and more instructive.
5. Black humour
   - The examiner's final line sounds severe because the test is about a
     pretend child.
   - The joke is dark but not violent: no real accident happens.

## Visual Direction

The four illustrations should form one continuous driving-test comedy.

### Visual Consistency

Use a consistent mid-century driving-test visual motif:

- a small car interior with examiner and driver
- quiet town road and open road outside town
- practical driving-test atmosphere
- expressive faces: Mr. Eames gaining confidence, examiner calm and strict
- no readable signs, papers, dashboard text, or licence text

Characters:

- Mr. Eames: nervous at first, then increasingly confident, then startled.
- Examiner: composed, observant, slightly dry humour, not cruel.

Do not put readable text in images.

### Frame 1 - The Third Driving Test

Scene purpose:

- Establish test pressure and heavy traffic success.

Visual:

- Mr. Eames driving with an examiner in the passenger seat.
- Busy traffic around them, but no readable road signs.
- Mr. Eames looks tense but focused.

Student-facing anchor:

`Mr. Eames 第三次考驾照，先在拥挤交通中顺利驾驶。`

English chunks:

- `being tested for a driving licence`
- `for the third time`
- `drive in heavy traffic`
- `done so successfully`

### Frame 2 - Confidence Out Of Town

Scene purpose:

- Show the growing confidence before the reversal.

Visual:

- The car leaves the busy town road for a quieter open road.
- Mr. Eames relaxes and smiles slightly.
- The examiner watches carefully with a small neutral smile.

Student-facing anchor:

`开出城后，他开始有了信心，甚至以为自己已经通过了。`

English chunks:

- `instructed to drive out of town`
- `began to acquire confidence`
- `Sure that I had passed`
- `almost beginning to enjoy my test`

### Frame 3 - The Emergency Stop Instruction

Scene purpose:

- Teach the imaginary hazard and the exact stopping rule.

Visual:

- Examiner calmly explains the emergency-stop test inside the car.
- Show a symbolic safe imagined road crossing outside, but no real child in
  danger.
- Examiner's hand near the window, ready to tap.

Student-facing anchor:

`考官说：假设有孩子突然过马路，我一敲窗，你必须在很短距离内停下。`

English chunks:

- `Let us suppose`
- `a child suddenly crosses the road`
- `tap on the window`
- `stop within five feet`

### Frame 4 - Too Slow To React

Scene purpose:

- Land the action chain and final dark joke without showing harm.

Visual:

- Examiner taps on the window; Mr. Eames reacts late and brakes suddenly.
- Both bodies lurch forward inside the car.
- Empty road visible ahead; no actual child present.
- Examiner looks mournful; Mr. Eames looks shocked.

Student-facing anchor:

`他听清了敲窗声，却反应太慢；猛踩刹车后，考官说出最后的黑色幽默。`

English chunks:

- `tapped loudly`
- `took me a long time to react`
- `pressed the brake pedal`
- `thrown forward`
- `in a mournful voice`

## Storyboard Requirements

The storyboard JSON must include:

- `visual_consistency`
  - Mention the same Mr. Eames and examiner across all four frames.
  - Mention a small car interior and driving-test setting.
  - Mention that the child-crossing scenario is imaginary/symbolic and no
    actual child should be shown in danger.
  - Mention that images must contain no readable signs, papers, dashboard text,
    licence text, or captions.
- 4 frames only.
- Each frame prompt should:
  - maintain the same car, driver, and examiner
  - keep the tone as safety comedy, not accident drama
  - avoid collision, injury, death, or a child in danger
  - avoid readable environmental text

## Teacher-Student Dialogue Direction

The dialogue should not retell the whole passage. It should deepen the modern
meaning.

Suggested dialogue spine:

1. Student asks whether Mr. Eames really killed a child.
   - Teacher: no. It is a driving-test simulation and a dark joke.
2. Student asks why the examiner uses a child in the example.
   - Teacher: children crossing roads are sudden hazards; drivers must react
     quickly and safely.
3. Student asks why Mr. Eames failed if he heard the tap.
   - Teacher: hearing is not enough; he took too long to react.
4. Student asks whether confidence is bad.
   - Teacher: confidence helps, but overconfidence can reduce attention.
5. Teacher connects to the student:
   - In any safety drill, the signal matters only if you respond in time.

The dialogue should leave the student feeling:

- I understand the title is black humour.
- I know no real child is hurt.
- I understand emergency stop and hazard perception.
- I can explain `react` and `brake pedal`.
- I understand why overconfidence can be dangerous.

## Vocabulary Direction

Use exactly 3 formal vocabulary blocks.

Recommended formal vocab blocks:

1. `licence`
   - Explain as official permission to do something, especially drive.
   - Connect to `driving licence`.
   - Mention American spelling `license` only briefly if useful; keep the
     passage spelling.
2. `react`
   - Explain as respond to something that happens.
   - Connect to the slow reaction after the tap.
   - Contrast with simply hearing the sound.
3. `brake`
   - Explain as the system/action that slows or stops a vehicle.
   - Connect to `brake pedal`.
   - Make clear it is not `break`.

Supporting words and phrases:

- `murder`
- `driving licence`
- `for the third time`
- `heavy traffic`
- `successfully`
- `instruct`
- `acquire confidence`
- `examiner`
- `performance`
- `suppose`
- `tap`
- `within five feet`
- `pedal`
- `thrown forward`
- `mournful voice`

Useful Chinese explanations:

- `driving licence`: 驾照，允许你合法开车的证件。
- `examiner`: 考官，负责测试你是否合格的人。
- `acquire confidence`: 逐渐有了信心，不是突然自大。
- `suppose`: 假设。
- `tap`: 轻敲。
- `react`: 作出反应。
- `brake pedal`: 刹车踏板。
- `mournful`: 悲伤的、哀伤的，带一点夸张的戏剧效果。

## Grammar Handling

Do not start from a passive-voice table. Start from the test situation:

`Mr. Eames 不是在自由驾驶，他正在被测试、被要求、被指示。`

### Job 1 - Passive Test Language

Key lines:

- `I was being tested for a driving licence`
- `I had been asked to drive in heavy traffic`
- `After having been instructed to drive out of town`
- `Though the sound could be heard clearly`
- `we were both thrown forward`

Teaching point:

The passive voice fits the test situation because Mr. Eames is the person being
examined, instructed, and affected.

Student explanation:

`考试里，他不是完全主动安排一切的人。考官要求他、指示他、测试他，所以英文会出现 was being tested, had been asked, had been instructed。`

### Job 2 - Deduction With Must Have Been

Key line:

- `The examiner must have been pleased with my performance`

Teaching point:

`must have been` is a strong guess about the past based on evidence. The
examiner smiled, so Mr. Eames thinks the examiner must have been pleased.

Student explanation:

`这里的 must 不是“必须”，而是“想必、一定是”。他看到考官微笑，就推断考官一定满意。`

### Job 3 - Timing And Reaction

Key lines:

- `As soon as I tap on the window, you must stop within five feet.`
- `it took me a long time to react`

Teaching point:

`As soon as` sets an immediate trigger. `It took me a long time to...` shows
the delay that causes the failure.

Student explanation:

`as soon as 是“一……就……”。考官要的是一敲窗就停车。可是 It took me a long time to react 说明他反应慢了。`

Use a compact display:

| Story meaning | English |
| --- | --- |
| 正在接受驾照考试 | `was being tested for a driving licence` |
| 已被要求在拥挤交通中驾驶 | `had been asked to drive in heavy traffic` |
| 被指示开出城 | `having been instructed to drive out of town` |
| 想必考官很满意 | `must have been pleased` |
| 一敲窗就停车 | `As soon as I tap on the window, you must stop` |
| 反应花了很久 | `It took me a long time to react` |
| 猛踩刹车踏板 | `pressed the brake pedal` |

## Read-Aloud Direction

Create `web/data/read_aloud/lesson_69.json` with 5-8 high-value sentences.

Recommended sentences:

1. `I was being tested for a driving licence for the third time.`
   - Focus: passive progressive and `for the third time`.
2. `I had been asked to drive in heavy traffic and had done so successfully.`
   - Focus: perfect passive and successful setup.
3. `After having been instructed to drive out of town, I began to acquire confidence.`
   - Focus: long opening phrase and `acquire confidence`.
4. `The examiner must have been pleased with my performance, for he smiled and said, 'Just one more thing, Mr. Eames.'`
   - Focus: deduction and quoted speech.
5. `Let us suppose that a child suddenly crosses the road in front of you.`
   - Focus: scenario setup, not real accident.
6. `As soon as I tap on the window, you must stop within five feet.`
   - Focus: trigger and rule.
7. `Though the sound could be heard clearly, it took me a long time to react.`
   - Focus: contrast and `react`.
8. `I suddenly pressed the brake pedal and we were both thrown forward.`
   - Focus: action chain and passive result.

If a shorter read-aloud set is needed, prioritize sentences 1, 3, 5, 6, 7, and
8.

Pronunciation notes:

- `licence`: two syllables; British spelling in the passage.
- `traffic`: two syllables; stress the first.
- `instructed`: three syllables; keep the `str` cluster clear.
- `acquire`: stress the second syllable.
- `examiner`: stress the second syllable.
- `performance`: stress the second syllable.
- `suppose`: stress the second syllable.
- `react`: stress the second syllable.
- `brake pedal`: make `brake` sound different from `break` only by meaning,
  not pronunciation; they sound the same.
- `mournful`: stress the first syllable.

Feedback style:

- Praise clear pauses in long passive sentences.
- Encourage the student to read the examiner's final style as dry and serious,
  not scary.
- Do not over-penalize `licence/license` spelling in spoken feedback.

## Living-Scene Exercise Direction

The living-scene exercise should transfer the lesson into a modern safety-drill
scenario.

Recommended setting:

`A student is taking a bicycle safety course or a school simulator test. The teacher says that as soon as the signal is given, the student must stop safely. The student feels confident after easy practice, but reacts too slowly when the real signal comes.`

Why this works:

- It keeps the reaction-test structure from the original story.
- It is age-appropriate for a child who is not learning to drive yet.
- It naturally uses:
  `being tested`, `acquire confidence`, `suppose`, `as soon as`, `react`,
  `brake`, `within`, and `safety`.

Possible roles:

- Student rider
- Safety teacher
- Examiner or coach
- Classmate observing

Target language:

- `I was being tested in a bicycle safety drill.`
- `I began to acquire confidence.`
- `Let us suppose that someone suddenly steps onto the path.`
- `As soon as I raise my hand, you must stop safely.`
- `It took me too long to react.`
- `I pressed the brake too late.`

## Suggested You Too Scene

Scene title:

`The Bicycle Safety Drill`

Scene premise:

`You are practising a bicycle safety drill. Your teacher gives you a signal, and you must stop quickly and safely. You learn that confidence is useful only when your reaction is fast enough.`

Dialogue goals:

- explain what test you are taking
- say what made you feel confident
- react to a sudden signal
- admit that you reacted too slowly
- say how you will improve next time

Suggested exchanges:

1. Teacher:
   `What are you being tested on today?`
2. Student:
   `I am being tested on stopping safely.`
3. Teacher:
   `As soon as I raise my hand, what must you do?`
4. Student:
   `I must stop within a short distance.`
5. Teacher:
   `What happened this time?`
6. Student:
   `It took me too long to react, so I pressed the brake too late.`
7. Teacher:
   `What will you do next time?`
8. Student:
   `I will watch carefully and react as soon as I see the signal.`

Keep the exercise practical and non-scary.

## Extension Practice Direction

Lesson 69 extension production should be included in full production. If the
main lesson assets already exist later and only extension is missing, create
`web/data/extension/lesson_69.json` and register `69` in
`web/data/extension/index.json` without regenerating script, audio, timeline,
read-aloud data, or storyboard images.

### Extension Reading

Use an original same-topic safety-reaction story. A student takes a bicycle
safety test, sports reaction drill, school-bus safety drill, or driving
simulator exercise. The student becomes confident after doing the easy part
well, but reacts too slowly to the final signal. A teacher explains that safety
depends on noticing hazards and reacting in time. Do not retell Mr. Eames or
use a real child-in-danger accident.

Suggested title: `The Last Signal`

Recommended word bank: `licence`, `examiner`, `confidence`, `suppose`, `tap`,
`react`, `brake`, `pedal`, `within`, `safely`, `hazard`.

The 5 reading questions should test:

1. what safety test or drill the student was taking
2. why the student began to feel confident
3. what signal the teacher/examiner gave
4. why the student failed the final part
5. what lesson the student learned about confidence and reaction

When creating the JSON, shuffle the options so the correct answers are
distributed. For these 5 questions, use at least 3 different `answer_index`
positions, include at least one correct answer in C or D, and do not put more
than 2 correct answers in the same position.

### Sentence Writing

Use 5 patterns:

1. `was being tested for ...`
   - Source: `I was being tested for a driving licence`
   - Focus: being examined for a skill or qualification.
   - Must include: `was being tested for`
2. `After having been instructed to ...`
   - Source: `After having been instructed to drive out of town`
   - Focus: formal sequence after receiving instructions.
   - Must include: `After having been instructed to`
3. `began to acquire confidence`
   - Source: `I began to acquire confidence`
   - Focus: gradual growth of confidence.
   - Must include: `began to acquire confidence`
4. `Let us suppose that ...`
   - Source: `Let us suppose that a child suddenly crosses the road`
   - Focus: setting up a hypothetical situation.
   - Must include: `Let us suppose that`
5. `It took me ... to react`
   - Source: `it took me a long time to react`
   - Focus: delay in response.
   - Must include: `It took me` and `to react`

## Chinese-To-English Exercise Direction

If production creates guided translation prompts inside lesson-local materials,
use meaning chunks that preserve the driving-test reversal.

Suggested chunking:

1. 我第三次接受驾照考试。
   - `I was being tested for a driving licence for the third time.`
2. 我被要求在拥挤的交通中驾驶，并且顺利完成了。
   - `I had been asked to drive in heavy traffic and had done so successfully.`
3. 被指示开出城以后，我开始有了信心。
   - `After having been instructed to drive out of town, I began to acquire confidence.`
4. 我确信自己已经通过了，几乎开始喜欢这次考试。
   - `Sure that I had passed, I was almost beginning to enjoy my test.`
5. 考官假设一个孩子突然在我面前穿过马路。
   - `The examiner asked me to suppose that a child suddenly crossed the road in front of me.`
6. 他一敲车窗，我就必须在五英尺内停车。
   - `As soon as he tapped on the window, I had to stop within five feet.`
7. 虽然声音听得很清楚，但我花了很长时间才反应过来。
   - `Though the sound could be heard clearly, it took me a long time to react.`
8. 我突然踩下刹车踏板，我们俩都向前冲去。
   - `I suddenly pressed the brake pedal and we were both thrown forward.`

Keep translation feedback focused on:

- `was being tested`
- `had been asked`
- `After having been instructed`
- `acquire confidence`
- `Let us suppose`
- `As soon as`
- `within five feet`
- `took me a long time to react`
- `pressed the brake pedal`

## Image Prompt Guidance

Do not include text in images. The production agent should avoid prompts that
ask for readable road signs, test forms, licence cards, dashboard text, window
labels, warning signs, captions, or speech bubbles.

Preferred style:

- light cinematic driving-test comedy
- clear car interior staging
- expressive examiner and driver
- road-safety seriousness without graphic danger
- visual focus on signal, reaction, brake pedal, and body lurch

Avoid:

- child injury, collision, death, blood, panic crowds, or crash damage
- showing a child directly in front of the car
- making the examiner cruel or villainous
- readable signs or paperwork
- modern dashboard text or UI inside the image

## Tone

Tense, comic, and safety-minded.

The child should feel:

- "I understand that no real child is hurt."
- "I know what an emergency stop tests."
- "I can explain why hearing a signal is different from reacting in time."
- "I can use passive test language like `was being tested`."
- "I understand that confidence is useful only with attention and control."
