# Lesson 47 Plan - A thirsty ghost

This is the source-of-truth design card for producing Lesson 47. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 47 assets.

## Basic Info

- Lesson: 47
- Title: `A thirsty ghost`
- Chinese title: `嗜酒的鬼魂`
- Core bridge: `这不是恐怖故事，而是一个“闹鬼酒馆”的推理笑话：Mr. Thompson 认为 pub 里有鬼，叙述者认为可能是村民偷喝免费酒，最后村民说就算白送也不要这个 pub，把笑点推到最荒唐。`

## Non-Negotiable Production Rules

This plan follows the post-Lesson-45 presentation rule.

- Story spine must be Chinese-first.
  - Present the plot first as a Chinese scene line.
  - Attach short English chunks after each Chinese anchor.
  - Do not use an all-English arrow chain as the main student-facing memory
    path.
- Generated illustrations must be text-free.
  - No readable English text inside images.
  - No pub sign text, bottle labels, sale signs, notes, captions, or speech
    bubbles inside images.
  - No empty boxes, blank labels, placeholder panels, or fake UI cards inside
    images.
  - If the courseware needs text, render it as real UI text outside the image.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, visual style
    instructions, camera directions, or generated-image mechanics.
  - Storyboard prompts must not become spoken lesson content.
- Keep the tone lightly mysterious and comic, not frightening.
  - The lesson is about competing explanations for evidence.
  - It should not become a horror scene.
- Add an adult-context boundary.
  - `pub`, `bar`, `whisky`, and `free drink` are adult context.
  - The lesson explains the story background; it does not normalize drinking
    for children.

## Production Warnings

- Explain `public house` early.
  - It means `pub`, a British public drinking and social place.
  - It is not a public building or "public home."
  - In British village life, a pub can be a local social center for adults.
- Do not make the pub visually text-dependent.
  - Show a village pub through bar counter, tables, chairs, bottles, and village
    exterior atmosphere.
  - Do not rely on a readable pub sign in the image.
- Explain the title carefully.
  - `thirsty ghost` is humorous: a ghost that drinks whisky.
  - The title is not meant to be genuinely scary.
- Explain evidence versus interpretation.
  - Evidence: doors blocked, furniture moved, lights on, whisky bottles empty.
  - Thompson's interpretation: a ghost did it.
  - Narrator's interpretation: villagers came in for a free drink.
- Keep villagers respectful.
  - Do not portray them as criminals or drunkards visually.
  - The narrator only suggests a possible explanation.
- Do not edit `web/data/lessons.json` during normal lesson production.

If production requires editing `web/data/lessons.json`, stop and ask for a
shared-data edit because it is outside the normal per-lesson write set.

## Lesson Positioning

Lesson 47 is a comic mystery about evidence and interpretation.

Mr. Ian Thompson has recently bought a public house, but now it is up for sale.
He wants to sell it because he says it is haunted. One night, he cannot sleep
because he hears a strange noise from the bar. The next morning, he finds that
chairs have blocked the doors, furniture has been moved, lights are on, and
five whisky bottles are empty. He says the ghost must have drunk the whisky the
night before. The narrator suggests another explanation: some villagers must
have come in for a free drink. Mr. Thompson rejects this idea, because the
villagers have told him they will not accept the pub even if he gives it away.

The courseware should make the student understand:

`Ian Thompson 买了一个 pub -> 很快又要卖 -> 因为他说那里闹鬼 -> 夜里听到 bar 里有怪声 -> 第二天门被椅子堵住 -> 家具被移动 -> 灯自己亮着 -> 五个 whisky 空瓶 -> 他认为鬼喝了酒 -> 叙述者暗示村民来免费喝酒 -> 村民说白送都不要`

The ending should land as:

`这不是证明真有鬼，而是说明这个 pub 的名声差到离谱：连免费送给村民，村民都不要。`

## One-Sentence Hook

Mr. Thompson thinks a whisky-drinking ghost haunts his pub, but the real joke is
that nobody wants the pub even for free.

## Vivid Teaching Opening

The opening should establish the pub scene and the logic of the joke.

Suggested teacher narration:

`先别把这课当恐怖故事。这里的 public house 不是公共房子，而是英国的 pub，小酒馆。Mr. Thompson 刚买了这个 pub，结果很快就想卖掉，因为他说那里 haunted，闹鬼。`

`有一天夜里，他睡不着，因为听到 bar 里有 strange noise。第二天早上，他看到门被椅子堵住，furniture 被挪过，灯明明睡前关了，早上却亮着，还有五个 whisky 空瓶。Mr. Thompson 的解释是：ghost must have drunk the whisky.`

`叙述者更冷静一点：会不会是村民进来喝免费酒？但最后又反转了。村民说，这个 pub 就算白送，他们也不要。`

Tone:

- Light mystery.
- Clear reasoning.
- No horror atmosphere.
- Adult-context boundary stated briefly.

## Story Focus

The haunted-pub chain is:

1. A public house bought by Mr. Ian Thompson is up for sale.
2. Mr. Thompson wants to sell it because it is haunted.
3. One night, he cannot sleep.
4. He hears a strange noise coming from the bar.
5. The next morning, chairs block the doors.
6. The furniture has been moved.
7. The lights are on, though he turned them off before bed.
8. He finds five empty whisky bottles.
9. He says the ghost must have drunk them.
10. The narrator suggests villagers must have come in for a free drink.
11. Mr. Thompson shakes his head.
12. The villagers have said they will not accept the pub even if he gives it
    away.

The production should make the contrast visible:

`same evidence` -> `ghost explanation` versus `villager explanation` -> `free
pub still refused`.

## Chinese-First Story Spine For Courseware

Use this as the main student-facing story line.

1. Mr. Thompson 买了一个英国小酒馆
   - `a public house`
   - `recently bought by Mr. Ian Thompson`
2. 他很快又要卖掉
   - `is up for sale`
   - `is going to sell it`
3. 原因是他说酒馆闹鬼
   - `because it is haunted`
4. 夜里他听到酒吧里有怪声
   - `could not go to sleep`
   - `a strange noise coming from the bar`
5. 早上发现门被椅子堵住
   - `doors had been blocked by chairs`
6. 家具被移动，灯也自己亮着
   - `furniture had been moved`
   - `the lights... were on`
7. 五个威士忌瓶子空了
   - `five empty whisky bottles`
8. 他推断是鬼喝了
   - `the ghost must have drunk`
9. 叙述者推断可能是村民来喝免费酒
   - `some villagers must have come in`
   - `for a free drink`
10. 最后反转：白送村民都不要
    - `will not accept the pub`
    - `even if he gives it away`

Student memory prompt:

`先记中文电影线：买 pub、要卖、说闹鬼、夜里怪声、早上现场乱、空酒瓶、两种推断、白送也不要。再把英文短语挂到每个镜头上。`

Do not show this as an all-English arrow chain in the student-facing courseware.

## Recitation Blocks

Break the passage into four Chinese-first recitation blocks:

1. 酒馆要卖
   - 中文锚点：Thompson 刚买的 public house 又要卖，因为他说那里闹鬼。
   - English chunks:
     - `A public house`
     - `recently bought by Mr. Ian Thompson`
     - `is up for sale`
     - `because it is haunted`
2. 夜里怪声
   - 中文锚点：他夜里睡不着，听到 bar 里有怪声。
   - English chunks:
     - `could not go to sleep`
     - `one night`
     - `heard a strange noise`
     - `coming from the bar`
3. 早上证据
   - 中文锚点：早上门被堵，家具被挪，灯亮着，还有五个空酒瓶。
   - English chunks:
     - `doors had been blocked by chairs`
     - `furniture had been moved`
     - `they were on in the morning`
     - `five empty whisky bottles`
4. 两种推断和反转
   - 中文锚点：他觉得鬼喝了酒；叙述者觉得村民来喝免费酒；村民说白送也不要。
   - English chunks:
     - `the ghost must have drunk`
     - `some villagers must have come in`
     - `for a free drink`
     - `will not accept the pub`
     - `even if he gives it away`

## Pub Culture And Adult-Context Bridge

This bridge should appear early.

Explain:

- `public house` is the full term behind `pub`.
- A pub is an adult social place in British village / town life.
- People may drink, talk, meet neighbors, watch events, or gather socially.
- In this lesson, the pub is also the setting for a mystery: a bar room, chairs,
  furniture, lights, and empty whisky bottles.
- For a child, the important point is not alcohol. The important point is the
  scene: an adult village pub where something strange seems to happen at night.

Student-facing bridge:

`public house 不是公共房子，而是 pub，小酒馆。在英国村镇里，pub 常常是成年人聊天、聚会、喝东西的地方。这课里出现 whisky 是因为故事发生在酒馆，不是让孩子学喝酒。我们要看的是：夜里酒馆里出现了一堆奇怪证据，Mr. Thompson 和叙述者给出了不同解释。`

## Evidence And Interpretation Bridge

This should be the core thinking point.

Evidence in the story:

- strange noise from the bar
- doors blocked by chairs
- furniture moved
- lights on in the morning
- five empty whisky bottles

Interpretation 1:

- Mr. Thompson: `the ghost must have drunk the whisky`

Interpretation 2:

- Narrator: `some villagers must have come in for a free drink`

Final complication:

- Villagers say they will not accept the pub even if it is free.

Student-facing explanation:

`同一组证据，可以有不同解释。Thompson 看到空酒瓶，就说 ghost must have drunk。叙述者更现实，说 villagers must have come in for a free drink。可是最后又好笑了：村民说这个 pub 白送也不要。`

This is the lesson's main intellectual value:

`not ghost knowledge, but reasoning from evidence.`

## Main Language Focus

The main grammar is deduction about the past:

- `must have done`
- passive evidence chain
- `even if`

### `must have done`

Story examples:

- `the ghost must have drunk the night before`
- `some villagers must have come in for a free drink`

Meaning:

`must have done` = speaker is making a strong guess about something in the past.

Student-facing explanation:

`must have done` 不是“必须做”，而是“过去一定做过”。它是根据证据做推断。Thompson 根据空酒瓶推断：鬼昨天晚上一定喝了。叙述者根据同样证据推断：村民一定进来喝免费酒了。`

Examples:

- `The floor is wet. It must have rained.`
- `The lights are on. Someone must have come in.`
- `The bottles are empty. Someone must have drunk the whisky.`

### Passive Evidence Chain

Story examples:

- `doors had been blocked by chairs`
- `furniture had been moved`
- `the lights had been turned off`

Student-facing explanation:

`门被堵住，家具被移动，这些句子用被动语态，因为重点是现场发生了什么，不是先说谁做的。被动语态在这里像侦探故事里的现场证据。`

### `even if`

Key sentence:

`they will not accept the pub even if he gives it away`

Meaning:

`Even if he offers it for free, they still will not take it.`

Student-facing explanation:

`even if` = 即使。它让最后一句更强：不是便宜不便宜的问题，而是这个 pub 名声太糟，白送都没人要。`

Secondary language points:

- `up for sale`
  - available to be sold.
- `go to sleep`
  - fall asleep.
- `shake his head`
  - show disagreement / no.
- `give away`
  - give for free.
- `accept`
  - agree to take.

## Vocabulary Plan

Formal vocab blocks should be exactly 3:

1. `public house`
   - Meaning: a pub, especially in British English; an adult social drinking
     place.
   - Bridge: not a public building; the pub setting explains bar, whisky, and
     empty bottles.
   - Example: `A public house which was recently bought by Mr. Ian Thompson is up for sale.`
2. `haunted`
   - Meaning: believed to have a ghost.
   - Bridge: Mr. Thompson wants to sell the pub because he thinks it is haunted.
   - Example: `He is going to sell it because it is haunted.`
3. `suggest`
   - Meaning: say an idea indirectly or offer a possible explanation.
   - Bridge: the narrator suggests a non-ghost explanation: villagers may have
     come in for a free drink.
   - Example: `I suggested that some villagers must have come in for a free drink.`

Supporting vocabulary to introduce in context, not as full vocab cards:

- `thirsty` = wanting to drink; humorous in the title
- `ghost` = spirit of a dead person in stories
- `bar` = counter / room where drinks are served
- `block` = stop passage by putting something in the way
- `chairs` = used to block the doors
- `furniture` = chairs, tables, and other movable things in a room
- `move` = change position
- `whisky` = alcoholic drink; adult context
- `empty bottle` = bottle with nothing inside
- `shake his head` = show no / disagreement
- `accept` = agree to take
- `give away` = give for free
- `free drink` = drink without paying; adult context here

## Visual Direction

Keep visuals lightly mysterious, restrained, and text-free.

- Setting:
  - British village pub exterior and bar interior.
  - Bar counter, chairs, tables, lights, bottles.
  - No readable pub sign.
- Mr. Thompson:
  - Adult pub owner, tired, worried, slightly stubborn.
  - Same appearance across frames.
- Ghost:
  - Do not show a clear scary ghost as fact.
  - If a ghostly idea is suggested visually, keep it ambiguous: shadow, faint
    glow, or Mr. Thompson's imagination.
  - Avoid horror imagery.
- Villagers:
  - If shown, keep them ordinary and respectful.
  - Do not visually accuse them of theft.
- Alcohol:
  - Bottles can appear as story objects, but not with readable labels.
  - Do not glamorize drinking.
- Forbidden:
  - readable text inside images
  - pub signs with words
  - whisky labels
  - speech bubbles
  - captions
  - empty boxes or placeholder labels

## Character Consistency Brief

Use this brief for storyboard image prompts only. Do not copy it into the
teaching script.

`A warm educational British village pub mystery illustration without any readable text or empty label boxes. Mr. Ian Thompson is a tired, worried adult pub owner in a small village pub. The pub has a bar counter, chairs, tables, lights, and plain unlabeled bottles. The mood is lightly mysterious and comic, not frightening. A possible ghost should remain ambiguous and not clearly real. Villagers, if shown, are ordinary and respectful, not caricatured. No readable pub signs, no bottle labels, no speech bubbles, no captions, no blank boxes. Consistent Mr. Thompson, pub interior, furniture, bottles, and village setting across all frames.`

## Four-Frame Storyboard Intent

Frame 1: Pub Up For Sale

- Mr. Thompson has bought a village pub and now wants to sell it.
- Show pub exterior or interior without readable signage.
- Mood: worried owner, bad reputation.
- The visual question: "Why does he want to sell it so soon?"

Frame 2: Strange Noise At Night

- Mr. Thompson lies awake at night.
- The bar area feels strange; a noise seems to come from there.
- Keep atmosphere suspenseful but not scary.
- No visible text or speech bubbles.

Frame 3: Morning Evidence

- Chairs block doors.
- Furniture is moved.
- Lights are on.
- Empty whisky bottles are visible.
- This frame should show evidence, not final explanation.

Frame 4: Two Explanations, Final Refusal

- Mr. Thompson insists on the ghost idea.
- Narrator suggests a realistic possibility.
- Villagers refuse the pub even if it is free.
- Show a village refusal / owner frustration visually, without text.

## Script And Courseware Presentation

The production should present the plot as reasoning from evidence.

Use this slide pattern:

1. 中文场景句：`早上，门被椅子堵住，家具也被移动了。`
2. English chunks:
   - `doors had been blocked by chairs`
   - `furniture had been moved`
3. Teacher explanation:
   - `这些是现场证据。谁做的还不知道，所以用被动语态。`
4. Picture:
   - pub interior with blocked door and moved furniture, no image text.

Use the same pattern for:

- the empty whisky bottles
- Thompson's ghost deduction
- narrator's villager deduction
- the final `even if he gives it away`

Do not bake English text into illustrations.

## Read-Aloud And Pronunciation Direction

Production should preserve the existing read-aloud structure:

- First listen to the full passage.
- Then listen to the original sentence.
- Then record one sentence.
- Then receive feedback.

This lesson has reported speech, passive evidence, and deduction phrases.
Feedback should help the student distinguish evidence from interpretation.

Useful sentence groups for read-aloud focus:

- `A public house which was recently bought by Mr. Ian Thompson is up for sale.`
- `Mr. Thompson is going to sell it because it is haunted.`
- `He told me that he could not go to sleep one night because he heard a strange noise coming from the bar.`
- `The next morning, he found that the doors had been blocked by chairs and the furniture had been moved.`
- `Though Mr. Thompson had turned the lights off before he went to bed, they were on in the morning.`
- `He had found five empty whisky bottles which the ghost must have drunk the night before.`
- `Some villagers must have come in for a free drink.`
- `The villagers have told him that they will not accept the pub even if he gives it away.`

For feedback tone:

- Practice `public house`, `haunted`, `strange noise`, `blocked`, `furniture`,
  `whisky`, `suggested`, `accept`, and `even if`.
- Help the student chunk `must have drunk` and `must have come in` as past
  deduction.
- Encourage a light, amused tone for the final sentence.
- Do not make the reading sound like horror narration.

## Living-Scene Exercise Direction

The living-scene exercise should transfer the lesson into evidence-based
guessing, not ghost belief.

Recommended scenario:

`You come into a classroom, kitchen, or club room in the morning. Something is strange: chairs have been moved, lights are on, and snacks are missing. You explain the evidence and make a reasonable guess using must have done.`

Student should practice:

- describing evidence
- using passive voice for changed objects
- using `must have done` for a strong guess about the past
- using `suggest that...`
- using `even if`
- separating evidence from interpretation

Useful expressions:

- `The chairs had been moved.`
- `The lights were on.`
- `The snacks were gone.`
- `Someone must have come in last night.`
- `I suggested that the club members must have had a meeting.`
- `Even if it is free, I will not take it.`

Adult-context adaptation:

Use snacks, classroom items, or club-room objects for the student exercise.
Do not ask the child to role-play drinking whisky.

## Suggested You Too Scene

Scene:

`You arrive at the classroom in the morning. The chairs have been moved, the lights are on, and a box of snacks is empty. You make two possible explanations.`

Prompt ideas:

- `哪些是证据？`
- `怎样用被动语态描述现场？`
- `怎样用 must have done 做过去推断？`
- `怎样用 suggested that... 提出另一种解释？`
- `怎样用 even if 表达“即使……也……”？`

Target output pattern:

`The chairs had been moved and the lights were on. The snack box was empty. Someone must have come in last night. I suggested that the club members must have had a meeting.`

The exercise should make deduction grammar practical and age-appropriate.

## Chinese-To-English Exercise Direction

The Chinese-to-English practice should reinforce the haunted-pub story,
evidence chain, and deduction grammar.

Suggested items:

1. `Ian Thompson 先生最近买下的一家小酒馆现在要出售。`
   - `A public house which was recently bought by Mr. Ian Thompson is up for sale.`
2. `他打算卖掉它，因为那里闹鬼。`
   - `He is going to sell it because it is haunted.`
3. `有天夜里，他听到酒吧里传来奇怪的声音。`
   - `One night, he heard a strange noise coming from the bar.`
4. `第二天早上，他发现门被椅子堵住了。`
   - `The next morning, he found that the doors had been blocked by chairs.`
5. `家具也被移动过。`
   - `The furniture had been moved.`
6. `虽然他睡觉前关了灯，但早上灯是亮着的。`
   - `Though he had turned the lights off before he went to bed, they were on in the morning.`
7. `他发现了五个空的威士忌瓶子。`
   - `He found five empty whisky bottles.`
8. `他认为鬼魂前一晚一定喝了那些酒。`
   - `He thought that the ghost must have drunk them the night before.`
9. `我暗示说，一些村民一定进来喝了免费的酒。`
   - `I suggested that some villagers must have come in for a free drink.`
10. `Thompson 先生摇了摇头。`
    - `Mr. Thompson shook his head.`
11. `村民们说，即使他白送，他们也不会接受这个小酒馆。`
    - `The villagers said that they would not accept the pub even if he gave it away.`

## Grammar Board

Keep the grammar board tied to evidence and competing interpretations.

Board structure:

`中文电影线`

- 买 pub 后又要卖
- 夜里 bar 里有怪声
- 早上门被堵、家具被挪、灯亮着
- 五个 whisky 空瓶
- Thompson: 鬼一定喝了
- Narrator: 村民一定来喝免费酒
- Villagers: 白送也不要

`Evidence`

- `doors had been blocked`
- `furniture had been moved`
- `lights were on`
- `five empty whisky bottles`

`Deduction`

- `the ghost must have drunk`
- `some villagers must have come in`
- `must have done` = strong guess about the past

`Even if`

- `even if he gives it away`
- 即使白送也不要

`Title joke`

- `thirsty ghost` = a ghost that drinks whisky
- funny, not scary

Avoid presenting this lesson as ghost lore. The grammar should support
evidence-based reasoning and the comic final refusal.

## Final Page / Course Flow Reminder

The final courseware flow should include the read-aloud step explicitly:

0. 跟读：听课文全文 -> 听原音 -> 录一句 -> 获取反馈
1. 生活场景
2. 完形填空
3. 中译英
4. 英译中
5. 默写

If the final page is auto-generated from shared code, do not edit shared code
during this lesson production unless the user separately asks for platform work.
But the Lesson 47 script and per-lesson data should describe the read-aloud step
as part of the lesson flow.

## Acceptance Criteria

Lesson 47 production is acceptable only if:

- The story spine and recitation support are Chinese-first, with English chunks
  attached after Chinese scene anchors.
- Generated illustrations contain no readable text, pub signs, bottle labels,
  speech bubbles, captions, fake UI text, or empty boxes.
- The teaching script contains no image prompts, visual style instructions, or
  storyboard-generation language.
- The script explains `public house` as British `pub` early.
- The script includes an adult-context boundary for pub, whisky, and free drink.
- The lesson is lightly mysterious and comic, not horror-focused.
- The script frames the story as evidence and competing interpretations.
- The 3 formal vocab blocks are exactly `public house`, `haunted`, and
  `suggest`.
- The main grammar board covers `must have done`, passive evidence chain, and
  `even if`.
- The living-scene exercise uses age-appropriate classroom / club-room evidence,
  not alcohol.
- The storyboard preserves consistent Mr. Thompson, pub interior, furniture,
  bottles, and village setting across all four frames.
- The final flow reminder includes `⓪ 跟读` before the other practice steps.
