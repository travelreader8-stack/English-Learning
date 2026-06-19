# Lesson 70 Plan - Red for danger

This is the source-of-truth design card for producing Lesson 70. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 70 assets.

## Basic Info

- Lesson: 70
- Title: `Red for danger`
- Chinese title: `危险的红色`
- Core bridge: `真正的危险不是红色本身，而是一个人不了解场景规则、闯进危险区域，还把侥幸误认为勇敢。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule and the section
responsibility rule in `LESSON_PRODUCTION_PLAN.md`.

- Keep the opening hook short.
  - Use 4-6 spoken lines only.
  - The hook should ask: if someone does not even know he is in danger, why
    might the crowd cheer when he escapes?
  - Do not retell the full bullfight story before the four `retell` frames.
- Explain bullfighting as background, not as a sport to admire.
  - The student needs to understand `bullfight`, `ring`, `matador`, and why
    the scene is dangerous.
  - Present it as an old cultural spectacle with animal-welfare controversy.
  - Do not make the courseware celebrate hurting animals.
- Correct the red-colour myth gently.
  - The lesson title makes red feel important.
  - Explain that the movement of the red cap and the man's behaviour matter
    more than the colour itself.
  - Treat red as a danger signal and story symbol, not a scientific rule that
    bulls hate red.
- Make the drunk's danger concrete for a modern child.
  - A drunk person wandering into a bullring may be unfamiliar.
  - Connect it to modern safety boundaries: do not enter a performance area,
    sports field, animal enclosure, road, or robot-demo zone when you do not
    understand the risk.
- Keep the comedy safe.
  - The story is funny because the drunk survives by luck and misunderstands
    the crowd's reaction.
  - Do not show gore, injury, animal suffering, or realistic violence.
  - Do not make drunkenness look cool or heroic.
- Teach the writer's personification.
  - The bull is described almost like a person:
    `sensitive to criticism`, `forgot all about the matador`,
    `seemed to feel sorry for him`, `looked on sympathetically`.
  - Make clear this is comic writing, not literal animal psychology.
- Story spine must be Chinese-first.
  - Present the danger-and-comedy chain in Chinese first.
  - Attach short English chunks after each Chinese anchor.
  - Do not show an all-English plot chain as the main memory path.
- Avoid repeated script content across sections.
  - The four `retell` frames are the only section that should walk through the
    passage in order.
  - The teacher-student dialogue should deepen cultural background, the red
    myth, and personification.
  - Vocabulary and grammar sections should explain language tools, not retell
    the whole story again.
- Generated illustrations must be text-free.
  - No readable English or Chinese text inside images.
  - No readable arena posters, banners, signs, tickets, scoreboard, warning
    labels, speech bubbles, UI panels, or fake lesson text.
  - Render words such as `bullfight`, `matador`, `unaware`, `charge at`,
    `sensitive to criticism`, and `dragged to safety` as real UI text outside
    the image.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, camera directions,
    or generated-image mechanics.
  - Storyboard prompts must not leak into spoken lesson content.

## Production Warnings

- Known source-data issue in `web/data/lessons.json` should be surfaced before
  production edits shared data.
  - Chinese currently says `他踉跄地住旁边一闪`.
  - It should be `他踉跄地往旁边一闪`.
  - If production is allowed to patch shared data, make only this exact Chinese
    typo fix and do not rewrite the passage.
  - If production is not allowed to patch shared data, stop and ask instead of
    building finished assets on top of visible source issues.
- Do not overstate the red-cap science.
  - The passage title and red cap are useful story symbols.
  - The teaching note should say that motion and provocation are the key
    triggers; the red colour is not the whole explanation.
- Do not turn the lesson into a long history of bullfighting.
  - Give just enough cultural context to make the story understandable.
  - Avoid detailed legal or political discussion.
- Do not normalize public drunkenness.
  - The drunk is not brave; he is unaware, lucky, and ridiculous.
  - The crowd cheers because the danger has passed, not because his behaviour
    was wise.
- Do not make the bull a monster.
  - The bull is a powerful animal inside a dangerous human-made spectacle.
  - The comic effect comes from how the narrator describes it like a thoughtful
    character.

## Lesson Positioning

Lesson 70 is a bullring comedy about danger, ignorance, and lucky escape. During
a bullfight, a drunk wanders into the middle of the ring. The crowd shouts
because he is in danger, but he is unaware of it. The bull is busy with the
matador until it catches sight of the drunk shouting rude remarks and waving a
red cap. The narrator jokingly says the bull is apparently sensitive to
criticism. It forgets the matador and charges at the drunk. The crowd becomes
quiet. The drunk seems sure of himself and clumsily steps aside when the bull
gets close. The crowd cheers, and the drunk bows as if he has performed
bravely. Three men drag him to safety. The final joke is that even the bull
seems to feel sorry for him and watches sympathetically before turning back to
the matador.

The courseware should make the student understand:

`斗牛正在进行 -> 醉汉突然走进斗牛场中央 -> 人群大喊提醒危险 -> 他却没有意识到危险 -> 公牛看见他挥红帽、说粗鲁的话 -> 公牛像被批评冒犯了一样冲向他 -> 人群突然安静 -> 醉汉笨拙地闪开 -> 人群欢呼，他还鞠躬 -> 三个人把他拖到安全处 -> 公牛被写得像同情他一样 -> 公牛重新注意斗牛士`

The central bridge is:

`危险场景里，真正可怕的是“我不知道自己不知道”。英语里，这篇文章又把危险写成喜剧，用 personification 让公牛像一个会生气、会同情的角色。`

## One-Sentence Hook

A drunk wanders into a bullring, mistakes luck for courage, and even the bull
is described as if it feels sorry for him.

## Vivid Teaching Opening

The opening should set up the danger and comic misunderstanding quickly. It
must be a short hook, not a complete retelling.

Suggested teacher narration:

`如果一个人走进危险区域，却完全不知道自己危险，你会替他紧张吗？`

`在这课里，一个醉汉走进斗牛场中央，观众都开始喊。`

`他却以为自己很镇定，甚至还向观众鞠躬。`

`更好笑的是，作者把公牛写得像一个会生气、会同情的人。`

`今天我们学的不只是 red for danger，而是 danger, luck, and comic writing。`

Tone:

- Tense, comic, and safety-aware.
- Let the danger feel real, but keep the presentation non-graphic.
- Save the full sequence for the four `retell` frames.

## Section Responsibility And Anti-Repetition Plan

### Opening

Job:

- Raise the question of being unaware of danger.
- Introduce the red cap and bullring as the story's danger signal.
- Tease the personification joke.

Do not:

- Retell every event.
- Lecture on bullfighting history.
- Suggest that the drunk is heroic.

### Four Retell Frames

Job:

- Walk through the passage in order.
- Make the danger-to-lucky-escape chain easy to remember.
- Use Chinese anchors and short English chunks.

Do not:

- Put readable arena signs, banners, tickets, or captions inside images.
- Show injury, blood, animal cruelty, or graphic violence.
- Make the bull look evil or monstrous.

### Teacher-Student Dialogue

Job:

- Deepen three ideas:
  1. bullfighting background and why the ring is dangerous
  2. why red is a symbol but movement/provocation is the real issue
  3. how personification makes the bull funny and memorable
- Compare:
  `unaware of danger` versus `sure of himself`
  `red cap as a signal` versus `red colour as a myth`
  literal animal behaviour versus comic personification

Do not:

- Re-list the full plot.
- Turn the dialogue into animal-science trivia.
- Make the cultural background heavy or judgmental.

### Vocabulary And Grammar

Job:

- Explain words and structures that make the lesson work:
  `bullfight`, `drunk`, `wander`, `ring`, `unaware`, `matador`,
  `catch sight of`, `rude remarks`, `sensitive to criticism`, `charge at`,
  `clumsily`, `step aside`, `break into cheers`, `dragged to safety`,
  `looked on sympathetically`, `turning its attention`.
- Teach story-time connectors:
  `During`, `at the time`, `When`, `By this time`, `until`, `before once more`.
- Teach participle/adjective phrases:
  `shouting rude remarks and waving a red cap`,
  `Apparently sensitive to criticism`,
  `turning its attention to the matador`.
- Teach personification as a writing technique.

Do not:

- Reduce the lesson to isolated word translation.
- Skip `sensitive to criticism`, because it is the comic engine.
- Overload the student with every participle form.

### Practice And Living-Scene Transfer

Job:

- Move the language into a modern child-understandable situation:
  a student wanders into a sports field, robot demonstration area, animal
  enclosure boundary, or stage performance zone without noticing the danger.
- Let the student say:
  `I was unaware of the danger.`
  `I caught sight of...`
  `It charged at...`
  `I stepped aside.`
  `They dragged me to safety.`
  `Everyone broke into cheers.`

Do not:

- Ask the child to imitate dangerous behaviour.
- Make the practice about real violence.
- Make the student proud of ignoring safety rules.

## Cultural And Background Bridge

The lesson needs a compact modern bridge:

1. Bullfight
   - A bullfight is a traditional spectacle in which a bull and a matador face
     each other in a ring.
   - The student only needs the basic scene: a powerful bull, a trained
     matador, a watching crowd, and a dangerous open arena.
2. Ring
   - `ring` here is not jewellery; it means a circular performance or fighting
     area.
   - This helps connect `boxing ring`, `circus ring`, and `bullring`.
3. Matador
   - A matador is the performer who faces the bull.
   - The word is Spanish in origin; keep the explanation simple.
4. Red cap
   - The red cap is a vivid danger signal in the story.
   - The teaching note should correct the common myth: the movement and
     provocation matter more than the red colour itself.
5. Animal-welfare note
   - Some people see bullfighting as cultural tradition; many others criticize
     it because animals are harmed.
   - The courseware should not ask the child to admire bullfighting.
6. Modern safety bridge
   - In today's life, children may encounter sports fields, roads, stages,
     construction areas, animal enclosures, or robot-demo zones.
   - The practical lesson is: notice the boundary before someone has to drag
     you to safety.

## Visual Direction

The four illustrations should form one continuous bullring comedy, without
graphic violence.

### Visual Consistency

Use a consistent old European bullring visual motif:

- sunlit circular arena with sand floor
- audience suggested as a distant crowd, no readable banners or posters
- same powerful bull throughout
- same matador in traditional outfit, but without readable decoration
- same drunk man with dishevelled clothes and a red cap
- three arena assistants appearing only when they pull the drunk to safety

Characters:

- Drunk man: middle-aged, unsteady posture, rumpled jacket, red cap in hand,
  unaware and foolishly confident; never glamorous.
- Bull: powerful, alert, expressive, not monstrous.
- Matador: trained and focused, initially the bull's target.
- Arena assistants: practical and urgent, rescuing the drunk.

Do not put readable text in images.

### Frame 1 - A Drunk In The Ring

Scene purpose:

- Establish the bullfight setting and the drunk's dangerous entrance.

Visual:

- A bullfight is already happening in a circular sandy ring.
- The matador is engaged with the bull.
- The drunk wanders into the middle of the ring, unaware.
- The crowd reacts with alarm in the background.

Student-facing anchor:

`斗牛正在进行，一个醉汉突然走进场地中央，完全没有意识到危险。`

English chunks:

- `During a bullfight`
- `wandered into the middle of the ring`
- `began to shout`
- `unaware of the danger`

### Frame 2 - The Red Cap

Scene purpose:

- Show why the bull turns from the matador to the drunk.

Visual:

- The drunk waves a red cap and shouts rudely.
- The bull catches sight of him and turns its head sharply.
- The matador is momentarily ignored.

Student-facing anchor:

`公牛看见醉汉挥着红帽、说粗鲁的话，注意力从斗牛士转向了他。`

English chunks:

- `caught sight of the drunk`
- `shouting rude remarks`
- `waving a red cap`
- `forgot all about the matador`

### Frame 3 - The Charge And The Step Aside

Scene purpose:

- Land the main danger and the lucky escape.

Visual:

- The bull charges toward the drunk.
- The crowd has gone silent.
- The drunk clumsily steps aside at the last moment.
- Keep the distance safe enough to avoid graphic threat.

Student-facing anchor:

`公牛冲向醉汉，人群突然安静；他却踉跄地往旁边一闪，侥幸躲开。`

English chunks:

- `charged at the drunk`
- `grew quiet`
- `got close to him`
- `clumsily stepped aside`

### Frame 4 - Dragged To Safety

Scene purpose:

- Show the rescue and the final personification joke.

Visual:

- Three men drag the drunk safely out of the ring.
- The drunk tries to bow or still looks foolishly proud.
- The bull watches from a distance with an oddly sympathetic expression before
  turning back to the matador.

Student-facing anchor:

`人们把醉汉拖到安全处；作者却写得好像连公牛都在同情他。`

English chunks:

- `broke into cheers`
- `dragged the drunk to safety`
- `looked on sympathetically`
- `turning its attention to the matador`

## Storyboard Requirements

The storyboard JSON must include:

- `visual_consistency`
  - Mention the same drunk man, bull, matador, and bullring across all four
    frames.
  - Mention the red cap as the recurring visual prop.
  - Mention that the tone is tense comic escape, not graphic violence.
  - Mention that images must contain no readable signs, banners, captions,
    posters, tickets, or text.
- 4 frames only.
- Each frame prompt should:
  - maintain the same bullring and character designs
  - keep the red cap visible in frames 2 and 3
  - avoid blood, injury, animal suffering, gore, or realistic violence
  - avoid glorifying the drunk
  - avoid readable environmental text

## Teacher-Student Dialogue Direction

The dialogue should not retell the whole passage. It should deepen the modern
meaning.

Suggested dialogue spine:

1. Student asks what a bullfight is.
   - Teacher: it is an old spectacle with a bull, a matador, a ring, and a
     watching crowd; it is dangerous and controversial.
2. Student asks whether bulls really hate red.
   - Teacher: the red cap is a vivid story signal, but movement and provocation
     matter more than the colour itself.
3. Student asks why the drunk is funny if he is in danger.
   - Teacher: he is unaware of the danger and mistakes lucky escape for skill.
4. Student asks why the bull is described as `sensitive to criticism`.
   - Teacher: that is personification; the writer makes the bull sound like a
     proud person who dislikes rude remarks.
5. Teacher connects to the student:
   - In real life, when a boundary or warning exists, do not wait for the crowd
     to shout; notice the danger early.

The dialogue should leave the student feeling:

- I understand the bullfight setting.
- I know red is a story symbol, not the whole science.
- I understand why the drunk is unaware, lucky, and ridiculous.
- I can explain personification in this passage.
- I can use `unaware of`, `catch sight of`, `charge at`, and `drag to safety`.

## Vocabulary Direction

Use exactly 3 formal vocabulary blocks.

Recommended formal vocab blocks:

1. `unaware`
   - Explain as not knowing or not noticing something important.
   - Connect to `unaware of the danger`.
   - Give modern examples: unaware of a car, unaware of a rule, unaware of a
     deadline.
2. `sensitive`
   - Explain as easily affected by something.
   - Connect to `sensitive to criticism`.
   - Make clear that here it is comic personification: the bull is written as
     if it can feel offended.
3. `charge`
   - Explain as rush forward suddenly and powerfully.
   - Connect to `charged at the drunk`.
   - Briefly contrast with `charge` as money/battery only if useful; keep the
     main meaning as movement.

Supporting words and phrases:

- `bullfight`
- `drunk`
- `wander`
- `ring`
- `matador`
- `catch sight of`
- `rude remarks`
- `criticism`
- `clumsily`
- `step aside`
- `break into cheers`
- `bow`
- `drag ... to safety`
- `look on`
- `sympathetically`
- `turn one's attention to`

Useful Chinese explanations:

- `bullfight`: 斗牛，一种传统表演/竞技场景，现代也有很多争议。
- `ring`: 圆形场地，不是戒指。
- `matador`: 斗牛士。
- `wandered into`: 漫无目的地走进，带有“不该进去却进去了”的感觉。
- `unaware of the danger`: 没有意识到危险。
- `caught sight of`: 突然看见、瞥见。
- `rude remarks`: 粗鲁的话、冒犯的话。
- `sensitive to criticism`: 对批评很敏感；这里是幽默拟人。
- `charged at`: 朝……猛冲过去。
- `clumsily`: 笨拙地、不灵活地。
- `break into cheers`: 突然欢呼起来。
- `dragged ... to safety`: 把……拖到安全处。
- `looked on sympathetically`: 在一旁同情地看着。
- `turning its attention to`: 把注意力转向……

## Grammar Handling

Do not start from a participle chart. Start from the story camera:

`作者像电影一样切镜头：什么时候、谁看见谁、谁在做什么、危险怎么转移。`

### Job 1 - Story-Time Connectors

Key lines:

- `During a bullfight`
- `at the time`
- `When the bull got close to him`
- `By this time`
- `until the drunk was out of the way`
- `before once more turning its attention to the matador`

Teaching point:

These connectors help the reader follow the timing of a fast dangerous scene.

Student explanation:

`这篇不是平铺直叙，而是一连串镜头。During 告诉我们背景，at the time 告诉我们当时公牛在做什么，When / By this time / until / before 把危险和救援的顺序排清楚。`

### Job 2 - Action Phrases With -ing

Key lines:

- `who was shouting rude remarks and waving a red cap`
- `before once more turning its attention to the matador`

Teaching point:

The `-ing` phrases add actions happening around the main verb. They make the
scene feel alive without starting a new sentence each time.

Student explanation:

`shouting 和 waving 不是两个新的主句，而是在补充说明这个醉汉当时正在干什么。最后的 turning its attention 也是把公牛重新转向斗牛士这个动作接在句尾。`

### Job 3 - Personification And Comic Adjective Phrase

Key lines:

- `Apparently sensitive to criticism`
- `Even the bull seemed to feel sorry for him`
- `it looked on sympathetically`

Teaching point:

The writer gives the bull human feelings to make the story funny. This is
personification.

Student explanation:

`公牛当然不是真的懂“批评”或者“同情”。作者故意这样写，让公牛像一个被冒犯、又有点同情醉汉的人。这样文章就不只是危险，而是有幽默感。`

Use a compact display:

| Story meaning | English |
| --- | --- |
| 在斗牛时 | `During a bullfight` |
| 没意识到危险 | `unaware of the danger` |
| 突然看见醉汉 | `caught sight of the drunk` |
| 说粗鲁的话、挥红帽 | `shouting rude remarks and waving a red cap` |
| 对批评很敏感 | `sensitive to criticism` |
| 朝醉汉冲过去 | `charged at the drunk` |
| 笨拙地往旁边一闪 | `clumsily stepped aside` |
| 拖到安全处 | `dragged the drunk to safety` |
| 同情地看着 | `looked on sympathetically` |

## Read-Aloud Direction

Create `web/data/read_aloud/lesson_70.json` with 5-8 high-value sentences.

Recommended sentences:

1. `During a bullfight, a drunk suddenly wandered into the middle of the ring.`
   - Focus: opening time phrase, `wandered into`, `ring`.
2. `The crowd began to shout, but the drunk was unaware of the danger.`
   - Focus: contrast with `but`, `unaware of`.
3. `The bull was busy with the matador at the time, but it suddenly caught sight of the drunk who was shouting rude remarks and waving a red cap.`
   - Focus: long sentence, `caught sight of`, two `-ing` actions.
4. `Apparently sensitive to criticism, the bull forgot all about the matador and charged at the drunk.`
   - Focus: comic opening phrase, `charged at`.
5. `When the bull got close to him, he clumsily stepped aside to let it pass.`
   - Focus: timing, `clumsily`, action chain.
6. `By this time, however, three men had come into the ring and they quickly dragged the drunk to safety.`
   - Focus: rescue sequence, `dragged ... to safety`.
7. `Even the bull seemed to feel sorry for him, for it looked on sympathetically until the drunk was out of the way.`
   - Focus: personification and long rhythm.
8. `It looked on sympathetically until the drunk was out of the way before once more turning its attention to the matador.`
   - Focus: final complex timing, `turning its attention`.

If a shorter read-aloud set is needed, prioritize sentences 1, 2, 3, 4, 5, and
6. Sentence 8 is advanced; use it only if the student can handle the long final
structure.

Pronunciation notes:

- `bullfight`: stress the first part.
- `drunk`: final `k` clear.
- `wandered`: do not pronounce as `wondered`; explain the difference if useful.
- `unaware`: stress the last part.
- `matador`: model slowly; it may be unfamiliar.
- `remarks`: final `ks` cluster clear.
- `apparently`: stress the second syllable.
- `sensitive`: stress the first syllable.
- `criticism`: stress the first syllable.
- `charged`: final `d` should be light but present.
- `clumsily`: stress the first syllable.
- `sympathetically`: long word; break it into chunks.

Feedback style:

- Praise clear pauses in long story sentences.
- Encourage the student to read the bull's personification with a lightly comic
  tone.
- Do not over-penalize unfamiliar proper/cultural words like `matador`; coach
  them gently.

## Living-Scene Exercise Direction

The living-scene exercise should transfer the lesson into a modern safety-zone
scenario.

Recommended setting:

`A school robotics demonstration is happening in the gym. A student wanders into the marked demonstration area while a large robot is moving. The crowd warns him, but he is unaware of the danger. He steps aside clumsily, and teachers pull him to safety. Later he learns that lucky escape is not the same as good judgment.`

Why this works:

- It keeps the original structure: dangerous area, unaware person, crowd
  warning, sudden movement, lucky escape, rescue.
- It avoids asking the student to admire bullfighting.
- It is modern and child-understandable.
- It naturally uses:
  `wandered into`, `unaware of the danger`, `caught sight of`, `charged at`,
  `clumsily stepped aside`, `dragged ... to safety`, `broke into cheers`.

Possible roles:

- Student who wandered into the demo area
- Teacher or coach
- Robotics club member
- Classmate in the crowd

Target language:

- `I wandered into the middle of the demonstration area.`
- `I was unaware of the danger.`
- `The robot suddenly caught sight of the obstacle.`
- `It moved straight towards me.`
- `I clumsily stepped aside.`
- `The teacher dragged me to safety.`
- `I was lucky, not brave.`

## Suggested You Too Scene

Scene title:

`The Robot Demonstration`

Scene premise:

`You accidentally walk into a robotics demonstration area while a large robot is moving. You practise explaining what happened, admitting that you were unaware of the danger, and saying what you should do next time.`

Dialogue goals:

- explain where you wandered
- say why the crowd shouted
- admit that you were unaware of the danger
- describe stepping aside and being pulled to safety
- say the safety rule you learned

Suggested exchanges:

1. Teacher:
   `Where did you wander?`
2. Student:
   `I wandered into the middle of the demonstration area.`
3. Teacher:
   `Why did everyone shout?`
4. Student:
   `They shouted because I was unaware of the danger.`
5. Teacher:
   `What happened when the robot moved towards you?`
6. Student:
   `I clumsily stepped aside, and you pulled me to safety.`
7. Teacher:
   `Were you brave?`
8. Student:
   `No. I was lucky. Next time I will stay behind the safety line.`

Keep the exercise practical and non-scary.

## Extension Practice Direction

Lesson 70 extension production should be included in full production. If the
main lesson assets already exist later and only extension is missing, create
`web/data/extension/lesson_70.json` and register `70` in
`web/data/extension/index.json` without regenerating script, audio, timeline,
read-aloud data, or storyboard images.

### Extension Reading

Use an original same-topic safety-boundary story. A student at a school
robotics show, sports event, animal exhibit, or stage performance wanders into
a restricted area and is unaware of the danger. Other people shout a warning.
The student escapes by luck, is pulled to safety, and later understands the
difference between bravery and not noticing danger. Do not retell the bullring
story, and do not include graphic injury.

Suggested title: `Behind the Safety Line`

Recommended word bank: `wander`, `unaware`, `danger`, `catch sight of`,
`charge`, `clumsily`, `step aside`, `cheers`, `safety`, `attention`,
`sensitive`.

The 5 reading questions should test:

1. what event or demonstration was taking place
2. why the student was in danger
3. what warning or movement showed that danger was near
4. how the student escaped and was brought to safety
5. what lesson the student learned about luck, bravery, and safety boundaries

When creating the JSON, shuffle the options so the correct answers are
distributed. For these 5 questions, use at least 3 different `answer_index`
positions, include at least one correct answer in C or D, and do not put more
than 2 correct answers in the same position.

### Sentence Writing

Use 5 patterns:

1. `During ..., ... wandered into ...`
   - Source: `During a bullfight, a drunk suddenly wandered into the middle of the ring.`
   - Focus: setting the scene and introducing an unexpected movement.
   - Must include: `During` and `wandered into`
2. `was unaware of the danger`
   - Source: `the drunk was unaware of the danger`
   - Focus: not noticing a risk.
   - Must include: `was unaware of the danger`
3. `caught sight of ... who was ...`
   - Source: `it suddenly caught sight of the drunk who was shouting rude remarks and waving a red cap`
   - Focus: sudden noticing plus what the person was doing.
   - Must include: `caught sight of` and `who was`
4. `Apparently sensitive to ..., ...`
   - Source: `Apparently sensitive to criticism, the bull forgot all about the matador`
   - Focus: a vivid opening phrase that explains a reaction.
   - Must include: `Apparently sensitive to`
5. `When ... got close to ..., ... stepped aside to let it pass`
   - Source: `When the bull got close to him, he clumsily stepped aside to let it pass.`
   - Focus: timing and physical action.
   - Must include: `When`, `got close to`, and `stepped aside`

## Chinese-To-English Exercise Direction

If production creates guided translation prompts inside lesson-local materials,
use meaning chunks that preserve the danger-and-comedy chain.

Suggested chunking:

1. 在一次斗牛时，一个醉汉突然走进斗牛场中央。
   - `During a bullfight, a drunk suddenly wandered into the middle of the ring.`
2. 人群开始大喊，但醉汉没有意识到危险。
   - `The crowd began to shout, but the drunk was unaware of the danger.`
3. 当时公牛正忙着对付斗牛士。
   - `The bull was busy with the matador at the time.`
4. 它突然看见醉汉正在说粗鲁的话，并挥舞着一顶红帽子。
   - `It suddenly caught sight of the drunk who was shouting rude remarks and waving a red cap.`
5. 公牛显然对批评很敏感，完全忘了斗牛士，朝醉汉冲去。
   - `Apparently sensitive to criticism, the bull forgot all about the matador and charged at the drunk.`
6. 当公牛靠近他时，他笨拙地往旁边一闪，让公牛过去了。
   - `When the bull got close to him, he clumsily stepped aside to let it pass.`
7. 人群突然欢呼起来，醉汉还鞠了个躬。
   - `The crowd broke into cheers and the drunk bowed.`
8. 三个人进入斗牛场，迅速把醉汉拖到安全处。
   - `Three men had come into the ring and they quickly dragged the drunk to safety.`
9. 连公牛似乎都为他感到遗憾，一直同情地看着他，直到他离开危险区域。
   - `Even the bull seemed to feel sorry for him, for it looked on sympathetically until the drunk was out of the way.`

Keep translation feedback focused on:

- `During a bullfight`
- `wandered into`
- `unaware of the danger`
- `caught sight of`
- `shouting ... and waving ...`
- `Apparently sensitive to criticism`
- `charged at`
- `clumsily stepped aside`
- `broke into cheers`
- `dragged ... to safety`
- `looked on sympathetically`

## Image Prompt Guidance

Do not include text in images. The production agent should avoid prompts that
ask for readable arena signs, banners, tickets, posters, warning labels,
captions, or speech bubbles.

Preferred style:

- cinematic but non-graphic bullring comedy
- warm sunlit arena colours
- clear staging of danger and rescue
- expressive faces and body language
- red cap as the visible story prop
- personification hinted through the bull's expression, not through text

Avoid:

- blood, wounds, injury, animal suffering, gore, or death
- making bullfighting look glamorous or heroic
- making the drunk look cool
- readable signs, banners, or captions
- exaggerated monster-bull imagery
- showing the bull striking a person

## Tone

Tense, comic, culturally aware, and safety-minded.

The child should feel:

- "I understand what a bullfight, ring, and matador are."
- "I know red is a story symbol, but motion and provocation matter more."
- "I can explain why the drunk is unaware, lucky, and not brave."
- "I can recognize personification in English writing."
- "I can use phrases like `unaware of`, `caught sight of`, `charged at`, and
  `dragged to safety`."
