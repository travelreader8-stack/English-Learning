# Lesson 73 Plan - The record-holder

This is the source-of-truth design card for producing Lesson 73. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 73 assets.

## Basic Info

- Lesson: 73
- Title: `The record-holder`
- Chinese title: `纪录保持者`
- Core bridge: `这篇不是鼓励逃学，而是用夸张和反向表扬讲一个荒唐的跨国逃学故事；真正要学的是讽刺语气、路线记忆和安全边界。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule and the section
responsibility rule in `LESSON_PRODUCTION_PLAN.md`.

- Keep the opening hook short.
  - Use 4-6 spoken lines only.
  - The hook should ask: why would a school truant be called a record-holder?
  - Do not retell the full England-to-France route before the four `retell`
    frames.
- Do not romanticize truancy, hitchhiking, or running away.
  - `play truant` means miss school without permission.
  - The boy's journey is unsafe, irresponsible, and not a model to copy.
  - The story is comic exaggeration and satire, not behaviour advice.
- Make the geography concrete.
  - The child should understand the route:
    `England -> Dover -> Calais -> Paris -> Perpignan -> French-Spanish border -> back to England`.
  - Use a simple Europe/Channel route idea in visual planning.
  - Explain Dover, Calais, Paris, Perpignan, and the French-Spanish border just
    enough to support memory.
- Treat `record-holder` as ironic.
  - This is not a real honourable school record.
  - The writer uses mock admiration: other truants are "unimaginative", and
    this boy "puts them to shame".
  - Make the student feel the humour without praising the action.
- Explain old-world travel risk.
  - The boy hitchhikes, hides in a boat, rides in a lorry, and is picked up by
    police.
  - Today, children should never take lifts from strangers, hide in vehicles,
    cross borders alone, or evade school.
  - Keep the story vivid but safety-minded.
- Story spine must be Chinese-first.
  - Present the route-and-consequence chain in Chinese first.
  - Attach short English chunks after each Chinese anchor.
  - Do not show an all-English plot chain as the main memory path.
- Avoid repeated script content across sections.
  - The four `retell` frames are the only section that should walk through the
    passage in order.
  - The teacher-student dialogue should deepen irony, route geography, and
    safety boundaries.
  - Vocabulary and grammar sections should explain language tools, not retell
    the whole story again.
- Generated illustrations must be text-free.
  - No readable English or Chinese text inside images.
  - No readable map labels, road signs, ferry names, city signs, vehicle
    plates, tickets, cinema posters, school signs, border signs, speech
    bubbles, UI panels, or fake lesson text.
  - Render words such as `play truant`, `hitchhike`, `Dover`, `Calais`,
    `Perpignan`, `border`, and `evade school` as real UI text outside the
    image.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, camera directions,
    or generated-image mechanics.
  - Storyboard prompts must not leak into spoken lesson content.

## Production Warnings

- Known source-data issues in `web/data/lessons.json` should be surfaced before
  production edits shared data.
  - Chinese title currently says `纪录保持着`.
  - It should be `纪录保持者`.
  - Chinese currently says `发现船在这段时间已经到了加`.
  - It should be `发现船在这段时间已经到了加莱` or `发现船在这段时间已经到了 Calais`.
  - If production is allowed to patch shared data, make only these exact
    Chinese corrections and do not rewrite the passage.
  - If production is not allowed to patch shared data, stop and ask instead of
    building finished assets on top of visible source issues.
- Do not turn the boy into a hero.
  - He is clever/lucky in the story structure, but the behaviour is dangerous.
  - The word `record-holder` should be explained as comic irony.
- Do not present hitchhiking as safe.
  - `hitchhike` is important vocabulary, but the safety message must be clear.
  - Use modern alternatives only for safe, supervised travel planning.
- Do not overload with European geography.
  - The route should support story memory, not become a full geography lesson.
  - A simple route line is enough.
- Keep the policeman and authorities neutral.
  - They are not villains; they bring the child back to safety and school
    responsibility.
- Keep illustrations child-safe.
  - Avoid scary lost-child imagery, abduction implication, dark roads, or
    threatening strangers.
  - Make the story comic and cautionary rather than frightening.

## Lesson Positioning

Lesson 73 is a satirical travel story about a boy who plays truant from school
and accidentally turns truancy into a ridiculous long-distance record. The
opening says ordinary truants are unimaginative: they might go fishing for a
day or sit in a cinema watching the same film. Then the writer mockingly says
they have all been put to shame by a boy who travelled 1,600 miles while
playing truant. He hitchhikes to Dover, climbs into a boat to sleep, and wakes
up in Calais. He creeps off unnoticed, hitchhikes in a lorry toward Paris, is
left outside the city, then stops another car that takes him not to central
Paris but to Perpignan on the French-Spanish border. There a policeman picks
him up, and the local authorities send him back to England. The final sentence
calls him a record-holder for children who dream of evading school, but the
tone is ironic rather than approving.

The courseware should make the student understand:

`一般逃学孩子最多钓鱼或看电影 -> 作者讽刺他们缺乏想象力 -> 一个男孩逃学时旅行了 1,600 miles -> 他搭便车到 Dover -> 夜里钻进船里睡觉 -> 醒来发现船到了 Calais -> 他悄悄下船 -> 又搭卡车到 Paris 外面 -> 下一辆车没把他带进巴黎市中心，而是带到 Perpignan -> 那里靠近法国和西班牙边界 -> 警察发现他 -> 当地当局把他送回 England -> 作者讽刺地说他为逃学孩子创造了纪录`

The central bridge is:

`今天的孩子需要明白：幽默文章可以把错误行为写得荒唐好记，但读懂讽刺不等于模仿行为。真正要学的是路线、表达和安全边界。`

## One-Sentence Hook

A boy skips school and somehow travels from England deep into France, becoming
a "record-holder" only in the writer's ironic imagination.

## Vivid Teaching Opening

The opening should set up the irony and route quickly. It must be a short hook,
not a complete retelling.

Suggested teacher narration:

`逃学当然不是好事，可这篇文章偏偏叫 The record-holder。`

`为什么一个逃学的孩子会被说成“纪录保持者”？`

`因为他不是躲在电影院里，而是一路从 England 跑到了 France。`

`但作者不是在表扬他，而是在用夸张和讽刺讲一个荒唐故事。`

`今天我们一边看路线，一边学会分辨 humour 和 behaviour advice。`

Tone:

- Wry, clear, safety-minded, and map-driven.
- Let the journey feel surprising, but not admirable.
- Save the full route sequence for the four `retell` frames.

## Section Responsibility And Anti-Repetition Plan

### Opening

Job:

- Raise the contradiction: truant plus record-holder.
- Make clear that the tone is ironic.
- Set up the route as the memory tool.

Do not:

- Retell every stop on the route.
- Make escape from school sound attractive.
- Begin with a moral lecture so heavy that the humour disappears.

### Four Retell Frames

Job:

- Walk through the passage in order.
- Make the England-France route easy to remember.
- Use Chinese anchors and short English chunks.

Do not:

- Put readable city labels, map labels, signs, or vehicle text inside images.
- Show dangerous adult strangers in a frightening way.
- Make hitchhiking or hiding in a boat look glamorous.

### Teacher-Student Dialogue

Job:

- Deepen four ideas:
  1. what `play truant` means and why it is unsafe
  2. why `record-holder` and `put to shame` are ironic
  3. how the geography route works
  4. why modern safety rules matter
- Compare:
  `adventure in a story` versus `safe choices in real life`
  `record` as an honour versus `record` as a joke
  `as he hoped it would` versus what actually happened

Do not:

- Re-list the full plot.
- Shame children harshly; keep it practical and clear.
- Make the dialogue only about geography.

### Vocabulary And Grammar

Job:

- Explain words and structures that make the lesson work:
  `record-holder`, `play truant`, `unimaginative`, `as far as they get`,
  `put to shame`, `while playing truant`, `hitchhike`, `Dover`, `Calais`,
  `in the meantime`, `crept off`, `lorry`, `as he hoped it would`,
  `Perpignan`, `French-Spanish border`, `local authorities`, `evading school`.
- Teach relative clauses:
  `Children who play truant`, `a boy who...`, `the next car the boy stopped`.
- Teach reduced time phrase:
  `while playing truant`.
- Teach expectation versus reality:
  `did not take him into the centre of Paris as he hoped it would, but to
  Perpignan...`

Do not:

- Reduce the lesson to a list of place names.
- Skip `as far as they get`, because it explains the opening sarcasm.
- Skip `as he hoped it would`, because it is a useful expectation pattern.

### Practice And Living-Scene Transfer

Job:

- Move the language into a safe, supervised modern scenario:
  planning a school trip route, getting lost during a supervised museum visit,
  misunderstanding a bus route with a teacher nearby, or comparing a fantasy
  adventure story with real safety rules.
- Let the student say:
  `I did not go as far as I hoped I would.`
  `In the meantime, the bus had travelled to...`
  `I was picked up by a teacher.`
  `The local authorities helped me.`
  `It was a story, not advice.`

Do not:

- Ask the child to role-play truancy as a desirable option.
- Ask the child to practise hitchhiking.
- Make the living scene involve crossing borders alone.

## Cultural And Background Bridge

The lesson needs a compact modern bridge:

1. Play truant
   - `play truant` means stay away from school without permission.
   - It is not the same as an approved school trip or staying home when sick.
   - Modern teaching should connect it to safety, trust, and responsibility.
2. Hitchhiking
   - `hitchhike` means get free rides from passing vehicles.
   - It appears in older stories, but children should not do this today.
   - Teach the word, not the behaviour.
3. The route
   - Dover is a port in southeast England.
   - Calais is a port in northern France, across the English Channel from
     Dover.
   - Paris is the French capital.
   - Perpignan is in southern France, near the Spanish border.
   - This route makes `1,600 miles` feel possible and absurd.
4. England and France crossing
   - The boy's accidental boat trip crosses the Channel.
   - A simple map route helps the student remember the order.
   - Do not over-explain travel documents or border law; keep the focus on the
     story.
5. Local authorities
   - `local authorities` means the official local people/organizations
     responsible for public order and safety.
   - They send the boy back because a child alone across borders is unsafe.
6. Irony
   - The title `record-holder` sounds like praise.
   - In context, it is a joke: he has set a "record" for a bad idea taken to an
     extreme.

## Visual Direction

The four illustrations should form one continuous route story with a map-like
memory line, without readable labels.

### Visual Consistency

Use a consistent mid-century European travel-comedy visual motif:

- same schoolboy throughout, around early teenager age, school clothes, small
  bag, curious but increasingly tired
- safe, lightly comic tone rather than frightening lost-child drama
- route-map visual motif as non-readable shapes: England, Channel, France, and
  a dotted route line without text labels
- vehicles shown generically: ferry/boat, lorry, car, police/local authority
  vehicle without readable marks
- no readable city names, road signs, tickets, maps, posters, vehicle plates,
  school signs, or captions

Characters:

- Schoolboy: young, scruffy after travel, not heroic; his confidence fades into
  confusion.
- Lorry driver: neutral, ordinary, gives food and coffee, not threatening.
- Policeman/local authority figure: calm and protective, bringing the boy back
  to safety.

Do not put readable text in images.

### Frame 1 - Ordinary Truants And The Bigger "Record"

Scene purpose:

- Establish the satirical opening and the contrast with ordinary truancy.

Visual:

- A light split composition: ordinary truants doing dull things like fishing or
  sitting in a cinema, contrasted with a schoolboy beginning a much longer
  journey.
- Keep it comic and non-glamorous.
- No readable cinema posters or school signs.

Student-facing anchor:

`作者先讽刺说，一般逃学孩子最多钓鱼或看电影，而这个男孩“把他们都比下去了”。`

English chunks:

- `play truant from school`
- `unimaginative`
- `as far as they get`
- `put to shame`
- `travelled 1,600 miles`

### Frame 2 - Dover To Calais By Accident

Scene purpose:

- Show the accidental Channel crossing.

Visual:

- The boy reaches a coastal port and sneaks into a boat to sleep.
- A simple non-readable route-map shape suggests crossing water from England
  to France.
- Morning light shows him waking near another coast.

Student-facing anchor:

`他搭便车到 Dover，晚上钻进船里睡觉；醒来发现船已经到了 Calais。`

English chunks:

- `hitchhiked to Dover`
- `went into a boat`
- `somewhere to sleep`
- `in the meantime`
- `travelled to Calais`

### Frame 3 - Towards Paris, Then Too Far South

Scene purpose:

- Make the route twist memorable: he wants Paris centre, but ends near Spain.

Visual:

- The boy rides in a lorry, receives simple food, then stands outside a big
  city area.
- Another car takes him along a long southward route shown by a dotted line on
  a text-free map motif.
- He looks surprised that the journey is not going where he hoped.

Student-facing anchor:

`他搭卡车到巴黎外面；下一辆车没有把他带进巴黎市中心，却把他带到靠近西班牙边境的 Perpignan。`

English chunks:

- `hitchhiked to Paris in a lorry`
- `a few biscuits and a cup of coffee`
- `just outside the city`
- `as he hoped it would`
- `French-Spanish border`

### Frame 4 - Picked Up And Sent Back

Scene purpose:

- Land the consequence and ironic record-holder ending.

Visual:

- A calm policeman/local authority figure finds the tired boy near a border
  town setting.
- The boy is being safely sent back toward England.
- A route-map motif shows the long loop ending back home, with no readable
  labels.

Student-facing anchor:

`最后他被警察发现，当地当局把他送回英国；所谓“纪录保持者”其实是讽刺。`

English chunks:

- `picked up by a policeman`
- `sent back to England`
- `local authorities`
- `set up a record`
- `evading school`

## Storyboard Requirements

The storyboard JSON must include:

- `visual_consistency`
  - Mention the same schoolboy across all four frames.
  - Mention a text-free Europe route motif connecting England, the Channel,
    northern France, Paris area, southern France, and return to England.
  - Mention that the tone is satirical and cautionary, not glamorous.
  - Mention that images must contain no readable signs, city labels, road
    signs, ferry names, vehicle plates, maps, captions, or text.
- 4 frames only.
- Each frame prompt should:
  - maintain the same boy and route visual logic
  - show hitchhiking and hiding as unsafe/cautionary, not exciting
  - make adults neutral/protective rather than frightening
  - avoid dark danger, abduction implication, violence, or panic
  - avoid readable environmental text

## Teacher-Student Dialogue Direction

The dialogue should not retell the whole passage. It should deepen the modern
meaning.

Suggested dialogue spine:

1. Student asks whether the boy is brave.
   - Teacher: no. The writer makes the story funny, but the behaviour is
     unsafe and irresponsible.
2. Student asks why he is called a record-holder.
   - Teacher: it is ironic. The "record" is for an absurdly extreme version of
     a bad idea.
3. Student asks where Dover, Calais, and Perpignan are.
   - Teacher: use a simple route: England to France by boat, north France to
     Paris, then far south near Spain.
4. Student asks what `hitchhike` means.
   - Teacher: it means getting rides from strangers; the word is useful in old
     stories, but children should not do it.
5. Teacher connects to the student:
   - Stories can be funny without being examples to follow. If you are lost or
     in trouble, contact a trusted adult, teacher, police, or family.

The dialogue should leave the student feeling:

- I understand `play truant` and why it is unsafe.
- I can follow the route on a simple map.
- I know `record-holder` is ironic here.
- I can explain `hitchhike`, `lorry`, `border`, and `local authorities`.
- I understand the difference between humour and advice.

## Vocabulary Direction

Use exactly 3 formal vocabulary blocks.

Recommended formal vocab blocks:

1. `truant`
   - Explain as a child/student absent from school without permission.
   - Connect to `play truant from school`.
   - Make clear it is a behaviour word, not a cool identity.
2. `hitchhike`
   - Explain as travel by asking strangers for free rides.
   - Connect to Dover, Paris, and the lorry.
   - Add safety note: understand the old-story word; do not copy it.
3. `evade`
   - Explain as avoid or escape from something, often by clever or dishonest
     means.
   - Connect to `evading school`.
   - Contrast with legitimate absence or asking for help.

Supporting words and phrases:

- `record-holder`
- `unimaginative`
- `a quiet day's fishing`
- `over and over again`
- `as far as they get`
- `put to shame`
- `while playing truant`
- `Dover`
- `towards evening`
- `in the meantime`
- `Calais`
- `crept off`
- `lorry`
- `biscuits`
- `as he hoped it would`
- `Perpignan`
- `French-Spanish border`
- `picked up by a policeman`
- `local authorities`
- `set up a record`

Useful Chinese explanations:

- `record-holder`: 纪录保持者；本课是讽刺说法。
- `play truant`: 逃学、翘课。
- `unimaginative`: 缺乏想象力。
- `as far as they get`: 他们通常最多也就做到这种程度。
- `put to shame`: 使……相形见绌。
- `hitchhike`: 搭便车；现代儿童安全教育中不建议这样做。
- `in the meantime`: 在这段时间里、与此同时。
- `crept off`: 悄悄溜下去。
- `lorry`: 卡车，英式英语；美式常说 `truck`。
- `as he hoped it would`: 像他希望的那样。
- `border`: 边界、边境。
- `local authorities`: 当地有关部门/当局。
- `evade school`: 逃避上学。

## Grammar Handling

Do not start from a relative-clause table. Start from the story's route and
expectation:

`作者一边用 who/while/as 串人物和动作，一边让路线不断偏离男孩的计划。`

### Job 1 - Relative Clauses For People

Key lines:

- `Children who play truant from school are unimaginative.`
- `a boy who, while playing truant, travelled 1,600 miles`

Teaching point:

`who` adds information about people. It lets the writer define which children
or which boy he is talking about.

Student explanation:

`who play truant from school 修饰 children，说明是哪类孩子。a boy who... travelled 1,600 miles 则把这个男孩和普通逃学孩子区别开。`

### Job 2 - Reduced Time Phrase With While

Key line:

- `while playing truant`

Teaching point:

This means `while he was playing truant`. The subject is understood from the
main sentence.

Student explanation:

`while playing truant 是省略写法，完整说法是 while he was playing truant。文章这样写更紧凑。`

### Job 3 - Expectation Versus Reality

Key line:

- `The next car the boy stopped did not take him into the centre of Paris as he hoped it would, but to Perpignan on the French-Spanish border.`

Teaching point:

`as he hoped it would` means "in the way he hoped it would." The sentence then
contrasts expectation with reality.

Student explanation:

`他希望车会把他带进巴黎市中心，但实际却到了法国南部边境。as he hoped it would 是很自然的英文表达：像他希望的那样。`

### Job 4 - Passive Consequence

Key lines:

- `There he was picked up by a policeman`
- `sent back to England by the local authorities`

Teaching point:

The passive voice focuses on what happens to the boy after the journey: he is
found and sent back.

Student explanation:

`这里男孩不再主动跑来跑去，而是被警察发现、被当地当局送回去。被动语态正好表现“后果来了”。`

Use a compact display:

| Story meaning | English |
| --- | --- |
| 逃学的孩子 | `children who play truant from school` |
| 通常最多也就这样 | `as far as they get` |
| 使他们相形见绌 | `put to shame` |
| 逃学期间 | `while playing truant` |
| 在这段时间里 | `in the meantime` |
| 悄悄溜下船 | `crept off` |
| 像他希望的那样 | `as he hoped it would` |
| 法国和西班牙边界 | `the French-Spanish border` |
| 被警察发现 | `was picked up by a policeman` |
| 被当地当局送回英国 | `sent back to England by the local authorities` |

## Read-Aloud Direction

Create `web/data/read_aloud/lesson_73.json` with 5-8 high-value sentences.

Recommended sentences:

1. `Children who play truant from school are unimaginative.`
   - Focus: `play truant`, relative clause, ironic tone.
2. `A quiet day's fishing, or eight hours in a cinema seeing the same film over and over again, is usually as far as they get.`
   - Focus: rhythm, `over and over again`, `as far as they get`.
3. `They have all been put to shame by a boy who, while playing truant, travelled 1,600 miles.`
   - Focus: passive, `put to shame`, reduced time phrase.
4. `He hitchhiked to Dover and, towards evening, went into a boat to find somewhere to sleep.`
   - Focus: route start and `hitchhiked`.
5. `When he woke up next morning, he discovered that the boat had, in the meantime, travelled to Calais.`
   - Focus: `in the meantime`, past perfect.
6. `From there, he hitchhiked to Paris in a lorry.`
   - Focus: route continuation, `lorry`.
7. `The next car the boy stopped did not take him into the centre of Paris as he hoped it would, but to Perpignan on the French-Spanish border.`
   - Focus: long expectation-versus-reality sentence.
8. `There he was picked up by a policeman and sent back to England by the local authorities.`
   - Focus: passive consequence and safety ending.

If a shorter read-aloud set is needed, prioritize sentences 1, 3, 4, 5, 7, and
8.

Pronunciation notes:

- `truant`: two syllables; model slowly.
- `unimaginative`: long word; break into chunks.
- `cinema`: stress first syllable.
- `over and over again`: natural repeated rhythm.
- `hitchhiked`: final consonants clear.
- `Dover`: place name; model clearly.
- `Calais`: French place name; model gently and consistently.
- `lorry`: British word; two syllables.
- `Perpignan`: unfamiliar French place name; model in chunks.
- `French-Spanish border`: keep the hyphenated phrase clear.
- `authorities`: stress the second syllable.
- `evading`: do not swallow the middle syllable.

Feedback style:

- Praise clear pauses in long route sentences.
- Encourage an ironic but not excited tone for `record-holder` language.
- For place names, coach gently; do not make pronunciation of French names the
  main scoring issue.

## Living-Scene Exercise Direction

The living-scene exercise should transfer the lesson into a safe modern route
and responsibility scenario.

Recommended setting:

`A student on a supervised school trip follows the wrong group and ends up at the wrong museum entrance. The student does not hide or hitchhike; instead, they learn to ask a trusted adult for help, describe the route, and explain what they hoped would happen versus what actually happened.`

Why this works:

- It keeps route memory and expectation-versus-reality language.
- It removes dangerous truancy and hitchhiking.
- It naturally uses:
  `as he hoped it would`, `in the meantime`, `picked up by`, `sent back`,
  `local authorities`, `border/boundary`, and `evade` in a safe reframing.

Possible roles:

- Student on school trip
- Teacher
- Museum staff member
- Class monitor

Target language:

- `I followed the wrong group.`
- `In the meantime, my class had gone to another entrance.`
- `The bus did not take me where I hoped it would.`
- `I asked a teacher for help.`
- `I was sent back to my group safely.`
- `I should not evade school rules.`

## Suggested You Too Scene

Scene title:

`The Wrong Group`

Scene premise:

`During a supervised school trip, you follow the wrong group and end up near the wrong entrance. You practise explaining the route clearly and asking a trusted adult for help.`

Dialogue goals:

- explain where you were supposed to go
- describe what happened in the meantime
- say what you hoped would happen
- explain what actually happened
- ask for help safely
- state the rule you learned

Suggested exchanges:

1. Teacher:
   `Where were you supposed to go?`
2. Student:
   `I was supposed to go to the main entrance with my class.`
3. Teacher:
   `What happened?`
4. Student:
   `I followed the wrong group. In the meantime, my class had moved on.`
5. Teacher:
   `Did the bus take you where you hoped it would?`
6. Student:
   `No. It took me to the wrong entrance.`
7. Teacher:
   `What did you do next?`
8. Student:
   `I asked a museum staff member for help, and I was sent back to my group safely.`

Keep the exercise safe and responsible.

## Extension Practice Direction

Lesson 73 extension production should be included in full production. If the
main lesson assets already exist later and only extension is missing, create
`web/data/extension/lesson_73.json` and register `73` in
`web/data/extension/index.json` without regenerating script, audio, timeline,
read-aloud data, or storyboard images.

### Extension Reading

Use an original same-topic route-and-responsibility story. A student on a
supervised trip, camp, museum visit, or sports event misunderstands a route and
ends up far from the group. The student does not hitchhike or hide; instead,
they find a trusted adult, explain what happened, and are safely returned. The
story should reuse the ideas of route, expectation versus reality, being
picked up/helped by an authority figure, and learning not to evade rules. Do
not retell the truant boy's cross-border story, and do not make unsafe escape
look fun.

Suggested title: `The Wrong Stop`

Recommended word bank: `truant`, `unimaginative`, `route`, `in the meantime`,
`lorry`, `border`, `authority`, `evade`, `as he hoped it would`, `sent back`,
`safe`.

The 5 reading questions should test:

1. where the student was supposed to go
2. what went wrong with the route
3. what the student hoped would happen
4. how a trusted adult or authority helped
5. what lesson the student learned about rules and safety

When creating the JSON, shuffle the options so the correct answers are
distributed. For these 5 questions, use at least 3 different `answer_index`
positions, include at least one correct answer in C or D, and do not put more
than 2 correct answers in the same position.

### Sentence Writing

Use 5 patterns:

1. `Children who ... are ...`
   - Source: `Children who play truant from school are unimaginative.`
   - Focus: defining a group with a relative clause.
   - Must include: `who` and a plural noun group
2. `is usually as far as ... get`
   - Source: `is usually as far as they get`
   - Focus: saying the normal limit of someone's action.
   - Must include: `as far as` and `get`
3. `while ...ing, ...`
   - Source: `while playing truant`
   - Focus: compact time phrase.
   - Must include: `while` plus an `-ing` verb
4. `in the meantime, ... had ...`
   - Source: `the boat had, in the meantime, travelled to Calais`
   - Focus: something happened during another time period.
   - Must include: `in the meantime` and `had`
5. `did not ..., as ... hoped it would, but ...`
   - Source: `did not take him into the centre of Paris as he hoped it would, but to Perpignan`
   - Focus: expectation versus reality.
   - Must include: `did not`, `as`, `hoped it would`, and `but`

## Chinese-To-English Exercise Direction

If production creates guided translation prompts inside lesson-local materials,
use meaning chunks that preserve the route and irony.

Suggested chunking:

1. 逃学的孩子们缺乏想象力。
   - `Children who play truant from school are unimaginative.`
2. 安静地钓一天鱼，或者在电影院里看八小时同一部电影，通常也就是他们能做到的程度了。
   - `A quiet day's fishing, or eight hours in a cinema seeing the same film over and over again, is usually as far as they get.`
3. 一个男孩在逃学期间旅行了 1,600 英里，使他们全都相形见绌。
   - `They have all been put to shame by a boy who, while playing truant, travelled 1,600 miles.`
4. 他搭便车到了 Dover，傍晚时走进一条船里找地方睡觉。
   - `He hitchhiked to Dover and, towards evening, went into a boat to find somewhere to sleep.`
5. 第二天早上醒来时，他发现船在这段时间里已经到了 Calais。
   - `When he woke up next morning, he discovered that the boat had, in the meantime, travelled to Calais.`
6. 没有人注意到这个男孩悄悄下了船。
   - `No one noticed the boy as he crept off.`
7. 从那里，他搭一辆卡车到了 Paris。
   - `From there, he hitchhiked to Paris in a lorry.`
8. 司机给了他几块饼干和一杯咖啡，把他留在城外。
   - `The driver gave him a few biscuits and a cup of coffee and left him just outside the city.`
9. 他拦下的下一辆车没有像他希望的那样把他带进巴黎市中心，而是把他带到了法国和西班牙边界上的 Perpignan。
   - `The next car the boy stopped did not take him into the centre of Paris as he hoped it would, but to Perpignan on the French-Spanish border.`
10. 他在那里被一个警察发现，并被当地当局送回英国。
   - `There he was picked up by a policeman and sent back to England by the local authorities.`

Keep translation feedback focused on:

- `children who play truant`
- `as far as they get`
- `put to shame`
- `while playing truant`
- `in the meantime`
- `crept off`
- `hitchhiked`
- `as he hoped it would`
- `French-Spanish border`
- `was picked up by`
- `local authorities`

## Image Prompt Guidance

Do not include text in images. The production agent should avoid prompts that
ask for readable city names, country labels, route labels, road signs, ferry
names, tickets, cinema posters, school signs, vehicle plates, map text,
captions, or speech bubbles.

Preferred style:

- light mid-century European travel-comedy mood
- simple text-free route-map motif integrated behind the scenes
- clear route stages: dull truancy contrast, Dover/boat/Calais crossing,
  lorry/Paris/Perpignan twist, police/local authority return
- same schoolboy in every frame
- cautionary rather than glamorous tone

Avoid:

- making truancy, hitchhiking, or hiding in a boat look adventurous and cool
- dark thriller imagery, abduction implication, violence, or panic
- threatening strangers
- readable map labels or signs
- adult-looking protagonist; keep him clearly a schoolboy
- modern smartphone tracking visuals unless used outside images as UI text

## Tone

Wry, route-focused, safe, and lightly cautionary.

The child should feel:

- "I understand that this is satire, not a suggestion to skip school."
- "I can follow the route from England to France and back."
- "I know why `record-holder` is funny here."
- "I can use phrases like `play truant`, `put to shame`, `in the meantime`,
  `as he hoped it would`, and `local authorities`."
- "I understand how English can make a bad idea sound comic without approving
  it."
