# Lesson 67 Plan - Volcanoes

This is the source-of-truth design card for producing Lesson 67. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 67 assets.

## Basic Info

- Lesson: 67
- Title: `Volcanoes`
- Chinese title: `火山`
- Core bridge: `真正的科学探索不是盲目冒险，而是在危险面前尽量靠近事实，同时懂得及时撤退。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule and the section
responsibility rule in `LESSON_PRODUCTION_PLAN.md`.

- Keep the opening hook short.
  - Use 4-6 spoken lines only.
  - The hook should ask: why would a scientist go close to an erupting volcano,
    and how does he know when to retreat?
  - Do not retell the full Lake Kivu / Kituro sequence before the four
    `retell` frames.
- Make volcano science visual and concrete.
  - The student should understand `active volcano`, `erupting violently`,
    `liquid rock`, `mouth of the volcano`, and `measure temperatures`.
  - Use strong but controlled visuals: lava flow, crater, heat, smoke, camera,
    thermometer, and safety distance.
  - Do not show gore, panic, burning people, or disaster-movie destruction.
- Make the geography understandable.
  - Explain Lake Kivu and the Congo as Central African geography in a compact
    way.
  - Include a simplified map-style visual in frame 1 or frame 2.
  - Map images may show Africa shape, lake, volcano, and route line, but must
    not contain readable labels inside the image. Put labels as courseware UI
    text outside the image.
- Treat Tazieff as a scientist, not a reckless action hero.
  - His courage matters, but the teaching point is observation, evidence,
    photography, measurement, and knowing when to escape.
  - Add a modern safety bridge: today scientists often use drones, remote
    sensors, thermal cameras, and safety teams.
  - Do not encourage children to approach dangerous natural phenomena.
- Story spine must be Chinese-first.
  - Present the risk-and-observation chain in Chinese first.
  - Attach short English chunks after each Chinese anchor.
  - Do not show an all-English plot chain as the main memory path.
- Avoid repeated script content across sections.
  - The four `retell` frames are the only section that should walk through the
    passage in order.
  - The teacher-student dialogue should deepen scientific courage versus safety,
    the geography background, and the meaning of `manage to`.
  - Vocabulary and grammar sections should explain language tools, not retell
    the whole story again.
- Generated illustrations must be text-free.
  - No readable English or Chinese text inside images.
  - No readable map labels, volcano labels, camera notes, safety signs, data
    screens, captions, speech bubbles, UI panels, or fake lesson text.
  - Render words such as `active volcano`, `Lake Kivu`, `Congo`, `Kituro`,
    `liquid rock`, `managed to escape`, and `measure temperatures` as real UI
    text outside the image.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, camera directions,
    or generated-image mechanics.
  - Storyboard prompts must not leak into spoken lesson content.

## Production Warnings

- Known source-data issue in `web/data/lessons.json` should be surfaced before
  production edits shared data.
  - Chinese currently translates `deep caves` as `探洞`, which is not natural
    as a noun phrase here. It should mean `深洞` or `很深的洞穴`.
  - If production is allowed to patch shared data, make only this exact Chinese
    translation fix and do not change the English passage.
  - If production is not allowed to patch shared data, stop and ask instead of
    building finished assets on top of a visible Chinese wording issue.
- Keep the textbook wording `the Polish scientist`.
  - The passage calls Haroun Tazieff a Polish scientist.
  - Modern background can lightly say he was born in Warsaw and is widely known
    as a Franco-Belgian volcanologist, but do not turn the lesson into an
    identity correction.
- Keep the historical geography simple.
  - The passage says `the Congo`. Do not overload the child with colonial and
    modern state-name history.
  - A compact teacher aside may say Lake Kivu is in the Central African Great
    Lakes region.
- Do not over-dramatize danger.
  - Show the lava and heat clearly, but avoid disaster spectacle.
  - The lesson should model scientific respect for danger, not thrill-seeking.
- `liquid rock` should be explained as lava / molten rock.
  - It is not an ordinary river with water.
- `mouth of Kituro` means the crater opening, not a real animal mouth.

## Lesson Positioning

Lesson 67 is a science-and-risk story. Haroun Tazieff has spent his lifetime
studying active volcanoes and deep caves around the world. In 1948, he goes to
Lake Kivu in the Congo to observe a new volcano, later named Kituro. He is able
to set up camp very close to the volcano while it is erupting violently. He
manages to take brilliant photographs, but cannot stay long because a river of
liquid rock comes towards him and threatens to surround him. He escapes just in
time. After the volcano becomes quiet, he returns, climbs into the mouth of
Kituro, takes photographs, and measures temperatures. He has often risked his
life this way, and his observations tell people more about active volcanoes.

The courseware should make the student understand:

`Tazieff 一生研究活火山和深洞 -> 1948 年来到刚果基伍湖观察新火山 Kituro -> 火山猛烈喷发时，他仍能在近处扎营 -> 他设法拍到精彩照片，但不能久留 -> 一股液态岩石像河一样流来，几乎包围他 -> 他及时逃脱 -> 火山安静后，两天后返回 -> 他爬进火山口拍照、测温 -> 他多次冒险，让人们更了解活火山`

The central bridge is:

`科学探索需要勇气，但勇气不是硬撑。真正的科学家要观察、记录、测量，也要在危险逼近时及时撤退。`

## One-Sentence Hook

Tazieff went close to an erupting volcano to observe it, but the real lesson is
how he managed to learn from danger without pretending danger was harmless.

## Vivid Teaching Opening

The opening should establish danger and scientific purpose quickly. It must be
a short hook, not a complete retelling.

Suggested teacher narration:

`如果一座火山正在喷发，你会靠近它吗？`

`大多数人当然会离远一点。`

`可是火山科学家要做一件很难的事：他们要靠近事实，但不能轻视危险。`

`Tazieff 拍照、测温、观察岩浆，也在岩浆逼近时及时逃走。`

`今天我们学一个词组的感觉：manage to do something。困难很大，但设法做到了。`

Tone:

- Tense, curious, and respectful.
- Let the volcano feel powerful, but keep the scientist calm and observant.
- Save the full sequence for the four `retell` frames.

## Section Responsibility And Anti-Repetition Plan

### Opening

Job:

- Raise the volcano danger question.
- Establish scientific observation as the purpose.
- Introduce `manage to` as the emotional grammar of the lesson.

Do not:

- Retell every event.
- Start with a volcano encyclopedia.
- Make risk-taking sound cool by itself.

### Four Retell Frames

Job:

- Walk through the passage in order.
- Make the action chain easy to remember.
- Use Chinese anchors and short English chunks.

Do not:

- Put readable labels, map text, data screens, or captions inside images.
- Show people being burned or trapped.
- Make Tazieff look like a fantasy hero.

### Teacher-Student Dialogue

Job:

- Deepen three ideas:
  1. why scientists need to observe dangerous places
  2. why `manage to` means success through difficulty
  3. how modern science uses safer tools and teams
- Compare:
  `was able to` versus `could not`
  `managed to take photographs` versus `managed to escape`

Do not:

- Re-list the full plot.
- Turn the dialogue into a long geology lecture.
- Encourage students to get close to volcanoes, fires, floods, or storms.

### Vocabulary And Grammar

Job:

- Explain words and structures that make the lesson work:
  `volcano`, `active volcano`, `deep cave`, `observe`, `Kituro`,
  `set up camp`, `erupt`, `violently`, `manage to`, `brilliant`,
  `liquid rock`, `threaten`, `surround`, `escape`, `just in time`,
  `mouth of the volcano`, `measure temperatures`, `risk his life`,
  `any man alive`.
- Teach ability under pressure:
  `was able to set up`, `managed to take`, `could not stay`,
  `managed to escape`, `was able to return`, `managed to climb`.
- Teach contrast with `Though`.
- Teach purpose with `so that`.

Do not:

- Reduce the lesson to a simple `can/could` chart.
- Skip `manage to`, because it is the main grammar-feeling word.
- Overload the child with volcano geology terms not in the passage.

### Practice And Living-Scene Transfer

Job:

- Move the language into a modern safe observation scenario:
  a school science team observes a volcano model, a remote camera, a drone
  video, a storm from indoors, or a safe field-study zone.
- Let the student say:
  `We managed to...`, `We were able to...`, `We could not...`,
  `We escaped just in time`, `so that we could...`.

Do not:

- Ask the child to role-play entering real dangerous sites.
- Make the practice only factual recall.
- Make science look like ignoring safety rules.

## Cultural And Background Bridge

The lesson needs a compact background bridge:

1. Haroun Tazieff
   - The passage calls him a Polish scientist.
   - He was born in Warsaw and became famous for studying and filming
     volcanoes.
   - For the lesson, the key point is his work as a volcanologist: observing
     active volcanoes closely and recording evidence.
2. Lake Kivu and the Congo
   - Lake Kivu is in Central Africa.
   - The location helps the student understand that Tazieff travelled to a real
     volcanic region, not a classroom demonstration.
3. Kituro
   - Kituro is the volcano named in the passage.
   - The lesson should not require the child to memorize every African
     geography detail.
4. Old scientific fieldwork versus modern tools
   - Earlier scientists often had to go physically close to dangerous places.
   - Today, researchers can use drones, remote sensors, thermal cameras,
     satellite images, and safety teams.
   - This makes a good modern bridge: courage plus safety, not courage instead
     of safety.
5. Active volcanoes
   - An active volcano is not just a mountain shape.
   - It can erupt, release heat and gas, and produce lava.
   - This explains why `measure temperatures` matters.

## Visual Direction

The four illustrations should form one continuous scientific fieldwork story.

### Visual Consistency

Use a consistent volcano-expedition visual motif:

- Central African volcanic landscape near a lake
- dark volcanic rock, orange lava glow, smoke/steam, and scientific field gear
- the same calm scientist figure based on Tazieff's role, without needing exact
  portrait likeness
- camera, notebook, thermometer/temperature probe, and simple camp equipment

Recurring character:

- Tazieff: adult scientist, practical field clothing, camera gear, focused and
  calm, not a superhero.

Recurring environment:

- Kituro volcano should remain visually consistent across frames: crater,
  lava flow, dark rock, and distant lake/green landscape cues.

Do not put readable text in images.

### Frame 1 - A Life Studying Volcanoes

Scene purpose:

- Establish Tazieff as a field scientist and introduce active volcanoes.

Visual:

- Tazieff studying a volcanic landscape with camera and notebook.
- Include a simplified map-like background or globe/Africa silhouette without
  readable labels.
- Show active-volcano glow in the distance, not a disaster scene.

Student-facing anchor:

`Tazieff 一生研究世界各地的活火山和深洞。`

English chunks:

- `has spent his lifetime`
- `studying active volcanoes`
- `deep caves`
- `in all parts of the world`

### Frame 2 - Camp Near Kituro

Scene purpose:

- Show the bold fieldwork setup near an erupting volcano.

Visual:

- A small scientific camp set up at a safe-looking but close observation point.
- Kituro is erupting violently in the background.
- Tazieff photographs the eruption with disciplined focus.

Student-facing anchor:

`1948 年，他来到基伍湖附近，靠近正在喷发的 Kituro 扎营观察。`

English chunks:

- `went to Lake Kivu`
- `observe a new volcano`
- `set up his camp`
- `erupting violently`

### Frame 3 - The River Of Liquid Rock

Scene purpose:

- Land the danger and the `managed to escape` turn.

Visual:

- A glowing lava flow moves across dark rock toward the observation area.
- Tazieff retreats with camera gear, focused and urgent but not panicked.
- The lava should look powerful; do not show injury.

Student-facing anchor:

`一股液态岩石向他流来，几乎包围他，他及时逃脱。`

English chunks:

- `a river of liquid rock`
- `coming towards him`
- `threatened to surround him`
- `managed to escape just in time`

### Frame 4 - Return To The Mouth Of Kituro

Scene purpose:

- Show scientific persistence after the volcano becomes quiet.

Visual:

- Two days later, the volcano is calmer.
- Tazieff carefully approaches or descends near the crater mouth with camera
  and temperature-measuring equipment.
- The mood is tense but controlled.

Student-facing anchor:

`火山平静后，他返回火山口，拍照并测量温度。`

English chunks:

- `the volcano became quiet`
- `was able to return`
- `climb into the mouth of Kituro`
- `measure temperatures`

## Storyboard Requirements

The storyboard JSON must include:

- `visual_consistency`
  - Mention the same Tazieff-like field scientist across all frames.
  - Mention Kituro volcano, dark rock, orange lava glow, and lake/green
    Central African landscape cues.
  - Mention recurring camera and measuring equipment.
  - Mention that images must contain no readable labels, map names, safety
    signs, data screens, or captions.
- 4 frames only.
- Each frame prompt should:
  - maintain the same scientist and volcano environment
  - keep the danger clear but not graphic
  - avoid readable text, labels, warning signs, map names, or instrument
    screens
  - show scientific observation rather than reckless heroics

## Teacher-Student Dialogue Direction

The dialogue should not retell the whole passage. It should deepen the modern
meaning.

Suggested dialogue spine:

1. Student asks why anyone would go near an erupting volcano.
   - Teacher: scientists need direct observations, photographs, temperatures,
     and evidence, but they must respect danger.
2. Student asks whether Tazieff was just brave.
   - Teacher: bravery alone is not enough. He observed, took photos, retreated,
     waited, and returned when the volcano became quiet.
3. Student asks what `manage to` really means.
   - Teacher: it means the task was difficult, but he succeeded:
     `managed to take photographs`, `managed to escape`, `managed to climb`.
4. Student asks whether scientists today still do this.
   - Teacher: today they often use drones, remote sensors, and safety teams, so
     they can study danger without standing too close.
5. Teacher connects to the student:
   - In study and life, real courage is not ignoring danger; it is doing hard
     work carefully.

The dialogue should leave the student feeling:

- I can picture an active volcano.
- I understand why scientists observe dangerous places.
- I know `manage to` means successful effort under difficulty.
- I understand the safety lesson: observe carefully, retreat in time.

## Vocabulary Direction

Use exactly 3 formal vocabulary blocks.

Recommended formal vocab blocks:

1. `active`
   - Explain as able to erupt; not sleeping or extinct in the story sense.
   - Connect to `active volcanoes`.
   - Contrast with a quiet mountain or inactive volcano.
2. `manage`
   - Explain as succeed in doing something difficult.
   - Connect to the repeated passage pattern:
     `managed to take`, `managed to escape`, `managed to climb`.
   - Emphasize effort plus success.
3. `escape`
   - Explain as get away from danger.
   - Connect to `just in time`.
   - Contrast with simply `leave`; escape has pressure and risk.

Supporting words and phrases:

- `volcano`
- `deep cave`
- `Lake Kivu`
- `Congo`
- `Kituro`
- `observe`
- `set up camp`
- `erupt`
- `violently`
- `brilliant photographs`
- `liquid rock`
- `threaten`
- `surround`
- `just in time`
- `became quiet`
- `mouth of Kituro`
- `measure temperatures`
- `risk his life`
- `any man alive`

Useful Chinese explanations:

- `active volcano`: 活火山，可能喷发或正在活动的火山。
- `erupt violently`: 猛烈喷发。
- `liquid rock`: 液态岩石，也就是熔岩/岩浆流，不是普通河水。
- `managed to`: 不是简单“能”，而是“困难中设法做成了”。
- `mouth of the volcano`: 火山口，不是真正的嘴。
- `risk his life`: 冒生命危险。

## Grammar Handling

Do not start from a modal-verb table. Start from the action line:

`他能靠近火山，但不能久留；他设法拍照，也设法逃脱。`

### Job 1 - Ability Under Pressure

Key lines:

- `Tazieff was able to set up his camp very close to the volcano`
- `he could not stay near the volcano for very long`
- `he was able to return two days later`
- `He has been able to tell us more about active volcanoes than any man alive.`

Teaching point:

`was able to` often points to a specific successful ability in a real situation.
`could not` marks a real limit. The lesson moves between ability and limit.

Student explanation:

`Tazieff 能靠近、能回来、能告诉我们更多，但他也不能一直待在那里。科学探索不是一直往前冲，而是在能力和危险之间判断。`

### Job 2 - Manage To Do

Key lines:

- `he managed to take a number of brilliant photographs`
- `Tazieff managed to escape just in time`
- `he managed to climb into the mouth of Kituro`

Teaching point:

`manage to do` means success after difficulty. It carries a stronger story
feeling than plain `do`.

Student explanation:

`managed to take 说明拍照不容易；managed to escape 说明逃出来很惊险；managed to climb 说明进入火山口也很困难。这个词组有“费劲但成功”的味道。`

### Job 3 - Though And So That

Key lines:

- `Though he managed to take a number of brilliant photographs, he could not stay near the volcano for very long.`
- `he managed to climb into the mouth of Kituro so that he could take photographs and measure temperatures.`

Teaching point:

`Though` creates contrast. `So that` explains purpose.

Student explanation:

`Though 后面先说成功拍照，后面转折说不能久留。so that 后面说明他为什么爬进火山口：为了拍照和测温。`

Use a compact display:

| Story meaning | English |
| --- | --- |
| 成功在近处扎营 | `was able to set up his camp` |
| 设法拍到照片 | `managed to take photographs` |
| 不能久留 | `could not stay` |
| 及时逃脱 | `managed to escape just in time` |
| 火山平静后返回 | `was able to return` |
| 设法爬进火山口 | `managed to climb into the mouth of Kituro` |
| 为了拍照和测温 | `so that he could take photographs and measure temperatures` |

## Read-Aloud Direction

Create `web/data/read_aloud/lesson_67.json` with 5-8 high-value sentences.

Recommended sentences:

1. `Haroun Tazieff, the Polish scientist, has spent his lifetime studying active volcanoes and deep caves in all parts of the world.`
   - Focus: appositive phrase, present perfect, `active volcanoes`.
2. `In 1948, he went to Lake Kivu in the Congo to observe a new volcano which he later named Kituro.`
   - Focus: location and relative clause.
3. `Tazieff was able to set up his camp very close to the volcano while it was erupting violently.`
   - Focus: `was able to`, `while`, `erupting violently`.
4. `Though he managed to take a number of brilliant photographs, he could not stay near the volcano for very long.`
   - Focus: `Though`, `managed to`, `could not`.
5. `He noticed that a river of liquid rock was coming towards him.`
   - Focus: vivid phrase `a river of liquid rock`.
6. `It threatened to surround him completely, but Tazieff managed to escape just in time.`
   - Focus: danger and `managed to escape`.
7. `This time, he managed to climb into the mouth of Kituro so that he could take photographs and measure temperatures.`
   - Focus: `managed to`, `so that`, purpose.
8. `He has been able to tell us more about active volcanoes than any man alive.`
   - Focus: present perfect and final evaluation.

If a shorter read-aloud set is needed, prioritize sentences 1, 3, 4, 6, 7, and
8.

Pronunciation notes:

- `Haroun Tazieff`: proper name; model slowly and do not over-penalize.
- `Polish`: stress the first syllable; do not confuse with `polish` as a verb.
- `volcanoes`: four syllables; keep the ending clear.
- `Lake Kivu`: proper place name; keep both words clear.
- `Congo`: two syllables.
- `Kituro`: proper name; read steadily.
- `erupting violently`: strong rhythm; do not swallow `violently`.
- `liquid`: two syllables.
- `temperatures`: can be read naturally as three or four syllables; keep it
  clear.

Feedback style:

- Praise clear grouping in long sentences.
- Encourage tense but calm reading for the lava sentence.
- Do not over-penalize proper nouns if the main rhythm and meaning are clear.

## Living-Scene Exercise Direction

The living-scene exercise should transfer the lesson into a modern safe
science-observation scenario.

Recommended setting:

`A school science team is studying a volcano model, a drone video, or a remote camera feed from a safe observation centre. The team wants close evidence, but the teacher reminds them to keep a safe distance and use tools. They manage to collect photos and temperatures without going into danger.`

Why this works:

- It keeps the scientific observation goal from the original story.
- It modernizes safety through remote tools.
- It naturally uses:
  `observe`, `active`, `erupt`, `manage to`, `could not`, `escape`, `so that`,
  `measure temperatures`.

Possible roles:

- Student scientist
- Teacher
- Safety officer
- Drone operator
- Classmate taking notes

Target language:

- `We managed to take some clear photographs.`
- `We were able to measure the temperature from a safe place.`
- `We could not go any closer.`
- `The lava was coming towards the camera.`
- `We moved back just in time.`
- `We used a drone so that we could observe safely.`

## Suggested You Too Scene

Scene title:

`The Safe Volcano Team`

Scene premise:

`You and your classmates are observing a volcano model or remote volcano video. You want good evidence, but you must stay safe and use tools instead of getting too close.`

Dialogue goals:

- explain what the team wants to observe
- say what they managed to do
- admit what they could not do safely
- use `so that` to explain purpose
- choose a safer method

Suggested exchanges:

1. Teacher:
   `What are you trying to observe?`
2. Student:
   `We are observing an active volcano model.`
3. Teacher:
   `Can you go closer?`
4. Student:
   `No. We could not go closer because it was too hot.`
5. Teacher:
   `What did you manage to do?`
6. Student:
   `We managed to take photos and measure temperatures from a safe place.`
7. Teacher:
   `Why did you use the camera?`
8. Student:
   `We used it so that we could observe safely.`

Keep the exercise scientific and safety-minded.

## Extension Practice Direction

Lesson 67 extension production should be included in full production. If the
main lesson assets already exist later and only extension is missing, create
`web/data/extension/lesson_67.json` and register `67` in
`web/data/extension/index.json` without regenerating script, audio, timeline,
read-aloud data, or storyboard images.

### Extension Reading

Use an original same-topic science-fieldwork story. A student science club,
young research team, or park education group observes a hot spring, a safe
volcano model, a remote crater camera, or a drone feed. They want useful
photographs and temperature readings, but a teacher or safety officer stops
them from going too close. They manage to collect evidence safely. Do not
retell the Tazieff / Kituro plot, and do not encourage students to enter real
danger.

Suggested title: `The Drone Above The Crater`

Recommended word bank: `active`, `observe`, `erupt`, `violently`, `manage`,
`brilliant`, `liquid`, `escape`, `measure`, `temperature`, `safe distance`.

The 5 reading questions should test:

1. what the team wanted to observe
2. why they could not go closer
3. what they managed to photograph or measure
4. how they used tools to stay safe
5. what lesson they learned about scientific courage and caution

When creating the JSON, shuffle the options so the correct answers are
distributed. For these 5 questions, use at least 3 different `answer_index`
positions, include at least one correct answer in C or D, and do not put more
than 2 correct answers in the same position.

### Sentence Writing

Use 5 patterns:

1. `has spent his lifetime ...`
   - Source: `has spent his lifetime studying active volcanoes`
   - Focus: describing long-term dedication.
   - Must include: `has spent` and a time expression or long-term activity
2. `was able to ... while ...`
   - Source: `was able to set up his camp ... while it was erupting violently`
   - Focus: ability in a difficult situation.
   - Must include: `was able to` and `while`
3. `Though ..., he could not ...`
   - Source: `Though he managed to take ... he could not stay ...`
   - Focus: success plus limitation.
   - Must include: `Though` and `could not`
4. `managed to ... just in time`
   - Source: `managed to escape just in time`
   - Focus: success under pressure.
   - Must include: `managed to` and `just in time`
5. `so that he could ...`
   - Source: `so that he could take photographs and measure temperatures`
   - Focus: purpose.
   - Must include: `so that` and `could`

## Chinese-To-English Exercise Direction

If production creates guided translation prompts inside lesson-local materials,
use meaning chunks that preserve the scientific risk-and-observation chain.

Suggested chunking:

1. Haroun Tazieff 一生都在研究世界各地的活火山和深洞。
   - `Haroun Tazieff has spent his lifetime studying active volcanoes and deep caves in all parts of the world.`
2. 1948 年，他来到刚果的基伍湖，观察一座后来被他命名为 Kituro 的新火山。
   - `In 1948, he went to Lake Kivu in the Congo to observe a new volcano which he later named Kituro.`
3. 火山猛烈喷发时，他仍然能够把营地搭在离火山很近的地方。
   - `Tazieff was able to set up his camp very close to the volcano while it was erupting violently.`
4. 虽然他设法拍到了一些精彩照片，但他不能在火山附近停留太久。
   - `Though he managed to take a number of brilliant photographs, he could not stay near the volcano for very long.`
5. 他发现一股液态岩石正向他流来，几乎要把他完全包围。
   - `He noticed that a river of liquid rock was coming towards him and threatened to surround him completely.`
6. Tazieff 设法及时逃脱了。
   - `Tazieff managed to escape just in time.`
7. 火山平静以后，他两天后又返回了。
   - `He waited until the volcano became quiet and he was able to return two days later.`
8. 这一次，他设法爬进 Kituro 的火山口，以便拍照和测量温度。
   - `This time, he managed to climb into the mouth of Kituro so that he could take photographs and measure temperatures.`

Keep translation feedback focused on:

- `has spent his lifetime`
- `active volcanoes`
- `was able to`
- `managed to`
- `could not`
- `a river of liquid rock`
- `threatened to surround`
- `just in time`
- `so that he could`

## Image Prompt Guidance

Do not include text in images. The production agent should avoid prompts that
ask for labeled maps, readable volcano names, safety signs, instrument screens,
camera displays, notebooks with writing, caption boxes, or speech bubbles.

Preferred style:

- cinematic educational illustration
- tense but controlled scientific fieldwork
- powerful lava and crater visuals
- calm scientist with camera and measuring gear
- clear action and expressions without text

Avoid:

- disaster-movie destruction, burning people, injuries, or panic crowds
- fantasy hero poses
- encouraging children to approach lava
- readable map or equipment labels
- turning Kituro into a generic cartoon volcano with no field-science feeling

## Tone

Tense, scientific, and respectful.

The child should feel:

- "I can picture an active volcano and a lava flow."
- "I understand why Tazieff needed courage and caution."
- "I can use `manage to` for difficult success."
- "I can distinguish `was able to`, `could not`, and `managed to`."
- "I know that modern science should use safer tools when studying danger."
