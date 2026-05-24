# Lesson 46 Plan - Expensive and uncomfortable

This is the source-of-truth design card for producing Lesson 46. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 46 assets.

## Basic Info

- Lesson: 46
- Title: `Expensive and uncomfortable`
- Chinese title: `既昂贵又受罪`
- Core bridge: `这不是一个“逃票冒险”故事，而是一篇讽刺偷搭飞机的故事：一个人想藏在货运木箱里从 London 到 Sydney，结果在箱子里被困 18 个多小时，既危险又难受，最后还要付比正常票价更高的钱。`

## Non-Negotiable Production Rules

This plan incorporates the Lesson 45 feedback about story-line presentation and
image/text separation.

- Story spine must be Chinese-first.
  - Present the plot first as a Chinese movie line.
  - Attach short English chunks after each Chinese anchor.
  - Do not show an all-English arrow chain as the main student-facing memory
    path.
- Generated illustrations must be text-free.
  - No readable English text inside images.
  - No price labels inside images.
  - No airport signs with readable words.
  - No captions, speech bubbles, fake documents, or readable crate markings.
- No empty boxes inside generated illustrations.
  - Do not draw blank labels, empty cards, empty panels, or placeholder boxes.
  - If the courseware needs text, render it as real UI text outside the image.
- Keep script and image prompts separate.
  - `pipeline/scripts/lesson_46.script.md` must contain only teaching content.
  - `pipeline/scripts/lesson_46.storyboard.json` may contain image prompts.
  - The teaching script must not include prompt-style phrases such as visual
    style instructions, character consistency prompts, camera directions, or
    generated-image mechanics.
- Do not make the story look like a clever trick.
  - The man is not a hero.
  - The lesson should make the danger, illegality, discomfort, and final irony
    clear.

## Production Warnings

This lesson should feel like a cargo-airport discovery story with a sharp comic
cost comparison.

- Explain airport cargo early.
  - Planes carry passengers and cargo.
  - `wooden boxes` are cargo boxes, not suitcases.
  - Workers at Sydney airport unload boxes from a plane from London.
- Add a safety and legal boundary.
  - Hiding in cargo, a box, a container, or a luggage area is illegal and
    extremely dangerous.
  - Risks include lack of air, cold, injury, being crushed, panic, and death.
  - The lesson is not a guide to avoiding a ticket. It is a warning and a joke:
    the worst seat becomes the most expensive trip.
- Explain the price mismatch from the English text.
  - English source uses `$3,500` and `$2,000`.
  - Chinese source says pounds for the cost, but production should follow the
    English lesson data and keep dollars in English-facing explanation.
  - Do not edit `web/data/lessons.json` during normal lesson production.
- Explain spelling gently.
  - The passage uses `woolen goods`; the keyword list has `woollen`.
  - `woolen` is common American spelling; `woollen` is British spelling.
  - Do not turn this into a spelling lecture.
- Keep visuals safe.
  - Show the man tired and cramped, not injured or dying.
  - No dark horror, suffocation imagery, or graphic arrest scene.

If production requires editing `web/data/lessons.json`, stop and ask for a
shared-data edit because it is outside the normal per-lesson write set.

## Lesson Positioning

Lesson 46 is about a stowaway who tries to travel cheaply but ends up with the
most uncomfortable and expensive trip.

A plane from London arrives at Sydney airport. Workers begin to unload wooden
boxes containing clothing. One box is extremely heavy, and nobody can account
for the fact. A worker suddenly thinks of opening the box. He is astonished: a
man is lying inside on top of a pile of woolen goods. The man is so surprised at
being discovered that he does not even try to run away. After he is arrested,
he admits hiding in the box before the plane left London. He has had a long and
uncomfortable trip because he has been confined to the wooden box for over
eighteen hours. He is ordered to pay `$3,500` for the trip, while a normal
ticket costs only `$2,000`.

The courseware should make the student understand:

`伦敦来的飞机到悉尼 -> 工人卸货运木箱 -> 一个箱子异常重 -> 工人想到打开看看 -> 箱子里躺着一个人 -> 他太吃惊，没逃跑 -> 他承认起飞前躲进箱子 -> 被困 18 个多小时 -> 被要求付 3500 美元 -> 正常票价才 2000 美元`

The ending should land as:

`他想省机票钱，结果买到了最难受的“座位”和最贵的账单。`

## One-Sentence Hook

A man hid in a cargo box to avoid buying a plane ticket, but the trip was
dangerous, uncomfortable, and more expensive than a normal ticket.

## Vivid Teaching Opening

The opening should make the cargo-airport scene easy to picture.

Suggested teacher narration:

`想象一下，Sydney airport 到了一架从 London 飞来的飞机。飞机不只运乘客，也运货物。工人们开始从飞机上卸下一批 wooden boxes，里面装的是 clothing。可是其中一个箱子特别重，重得不正常。大家都解释不了：为什么装衣服的箱子会这么沉？`

`这时，一个工人突然想到：打开看看。箱子一开，他吓了一跳。里面不是衣服，而是一个人，正躺在一堆 woolen goods 上。这个人本来想省一张机票，结果在木箱里闷了 18 个多小时，最后还被要求付 3500 美元。正常机票才 2000 美元。`

`所以标题说 Expensive and uncomfortable：又贵，又受罪。`

Tone:

- Curious and suspenseful at the start.
- Clear safety judgment after the reveal.
- Let the final price comparison create the joke.

## Story Focus

The cargo-discovery chain is:

1. A plane from London arrives at Sydney airport.
2. Workers begin to unload wooden boxes.
3. The boxes contain clothing.
4. One box is extremely heavy.
5. No one can account for the fact.
6. One worker suddenly thinks of opening the box.
7. He is astonished at what he finds.
8. A man is lying in the box on top of woolen goods.
9. The man is so surprised at being discovered that he does not run away.
10. After being arrested, he admits hiding in the box before the plane left.
11. He has had a long and uncomfortable trip.
12. He has been confined to the wooden box for over eighteen hours.
13. He is ordered to pay `$3,500`.
14. A normal ticket is `$2,000`.

The production should make the contrast visible:

`想省钱的偷偷旅行` versus `更贵、更难受、更危险的真实结果`.

## Chinese-First Story Spine For Courseware

Use this as the main student-facing story line. It should appear in Chinese
first, with short English chunks attached.

1. 伦敦来的飞机抵达悉尼机场
   - `a plane from London`
   - `arrived at Sydney airport`
2. 工人开始卸货运木箱
   - `workers began to unload`
   - `wooden boxes`
3. 一个箱子重得不正常
   - `one of the boxes`
   - `extremely heavy`
4. 没人解释得清楚
   - `No one could account for`
5. 一个工人突然想到打开看看
   - `It suddenly occurred to one of the workers`
   - `to open up the box`
6. 箱子里躺着一个人
   - `A man was lying in the box`
   - `on top of a pile of woolen goods`
7. 他被发现后太吃惊，没跑
   - `so surprised at being discovered`
   - `did not even try to run away`
8. 他承认起飞前躲进箱子
   - `admitted hiding in the box`
   - `before the plane left London`
9. 他被困在木箱里 18 个多小时
   - `had been confined`
   - `for over eighteen hours`
10. 最后比正常票价付得还多
    - `ordered to pay $3,500`
    - `normal price of a ticket is $2,000`

Student memory prompt:

`先记中文电影线：飞机到、工人卸、箱子重、打开看、箱里有人、承认躲、被困 18 小时、罚得更贵。再把英文短语挂到每个镜头上。`

Do not show this as an all-English arrow chain in the student-facing courseware.

## Recitation Blocks

Break the passage into four Chinese-first recitation blocks:

1. 机场卸货
   - 中文锚点：伦敦来的飞机到了悉尼，工人开始卸装衣服的木箱。
   - English chunks:
     - `When a plane from London arrived at Sydney airport`
     - `workers began to unload`
     - `wooden boxes which contained clothing`
2. 异常沉重的箱子
   - 中文锚点：有一个箱子特别重，没人解释得清，工人想到打开看看。
   - English chunks:
     - `No one could account for`
     - `extremely heavy`
     - `It suddenly occurred to one of the workers`
     - `to open up the box`
3. 箱子里的人
   - 中文锚点：箱子里躺着一个人，他被发现后太吃惊，连跑都没跑。
   - English chunks:
     - `astonished at what he found`
     - `A man was lying in the box`
     - `on top of a pile of woolen goods`
     - `so surprised at being discovered`
4. 又贵又受罪
   - 中文锚点：他承认自己躲进箱子，被困 18 小时，最后付得比正常票价还多。
   - English chunks:
     - `admitted hiding in the box`
     - `had been confined to the wooden box`
     - `for over eighteen hours`
     - `ordered to pay $3,500`
     - `normal price of a ticket is $2,000`

## Airport Cargo And Modern Safety Bridge

This bridge should appear early.

Explain:

- Modern students usually picture passenger cabins, boarding passes, luggage,
  and security checks.
- This story is about air cargo: boxes of clothing are transported by plane.
- `unload` means workers take cargo off the plane.
- `wooden boxes` are not passenger luggage.
- A person hiding in cargo is called a stowaway in broader English usage, but
  the lesson can simply say: a man hid in a cargo box.
- Today, hiding in cargo is illegal and extremely dangerous.

Student-facing bridge:

`飞机不只运人，也运货。课文里的 wooden boxes 是货运箱，里面装 clothing。这个人不是坐在客舱里，而是偷偷躲在货箱里。今天机场安检非常严格，而且这样做违法又危险：可能缺氧、失温、受伤，甚至有生命危险。所以这课不是教人逃票，而是讽刺：想省钱，最后更贵、更难受。`

## Price Joke And Source Note

The price comparison is the punchline.

Explain:

- The man tries not to buy a normal ticket.
- He travels in the worst possible way: in a wooden box.
- He is confined for over eighteen hours.
- He is then ordered to pay `$3,500`.
- A normal ticket costs `$2,000`.
- So he pays more for a terrible trip than he would have paid for a normal
  seat.

Source note:

- English lesson data uses dollars: `$3,500` and `$2,000`.
- Chinese source says pounds, but production should follow the English source
  for this lesson.
- Do not edit shared lesson data unless the user explicitly asks.

Student-facing line:

`他想免费坐飞机，结果得到的是最差的座位、最长的折磨、最贵的账单。`

## Main Language Focus

The main language focus is problem discovery plus hidden-action grammar:

- `account for`
- `It occurred to someone to do something`
- `admit doing`
- passive / passive-ing forms such as `being discovered`, `was arrested`, `had
  been confined`, `was ordered`

### `account for`

Key sentence:

`No one could account for the fact that one of the boxes was extremely heavy.`

Meaning:

`No one could explain why the box was so heavy.`

Student-facing explanation:

`account` 不只是“账户”。在 `account for` 里，它的意思是“解释原因”。这里大家解释不了：装衣服的箱子为什么会这么重？`

Examples:

- `Can you account for the missing money?`
- `No one could account for the strange noise.`
- `The worker could not account for the heavy box.`

### `It occurred to someone to do something`

Key sentence:

`It suddenly occurred to one of the workers to open up the box.`

Meaning:

`One worker suddenly had the idea to open the box.`

Student-facing explanation:

`It occurred to me...` 不是“发生在我身上”，而是“我突然想到”。这个句型很地道。`

Examples:

- `It occurred to me to check my bag.`
- `It occurred to him to call the police.`
- `It occurred to one worker to open the box.`

### `admit doing`

Key sentence:

`the man admitted hiding in the box`

Meaning:

`He said that he had hidden in the box.`

Teach the pattern:

`admit + doing`

Examples:

- `He admitted hiding in the box.`
- `She admitted breaking the cup.`
- `They admitted making a mistake.`

### Passive And Being Discovered

Story examples:

- `being discovered`
- `he was arrested`
- `he had been confined to the wooden box`
- `The man was ordered to pay $3,500`

Student-facing explanation:

`这一课里很多被动，是因为这个人不是主动舒服地旅行，而是被发现、被逮捕、被困在箱子里、被要求付钱。语法和他的处境是一致的：他想控制局面，结果处处被动。`

### `had had`

Key sentence:

`He had had a long and uncomfortable trip.`

Explain lightly:

- First `had` = past perfect helper.
- Second `had` = main verb meaning `experienced`.
- Meaning: `He had experienced a long and uncomfortable trip.`

Do not over-teach this because Lesson 43 already introduced the repeated `had`.
Use it only to prevent confusion.

## Vocabulary Plan

Formal vocab blocks should be exactly 3:

1. `account for`
   - Meaning: explain the reason for something.
   - Bridge: no one can explain why a box of clothing is so heavy.
   - Example: `No one could account for the fact that one of the boxes was extremely heavy.`
2. `occur`
   - Meaning in this pattern: an idea comes into someone's mind.
   - Bridge: one worker suddenly thinks of opening the strange box.
   - Example: `It suddenly occurred to one of the workers to open up the box.`
3. `confine`
   - Meaning: keep someone or something inside a limited space.
   - Bridge: the man has been trapped / shut inside the wooden box for over
     eighteen hours.
   - Example: `He had been confined to the wooden box for over eighteen hours.`

Supporting vocabulary to introduce in context, not as full vocab cards:

- `unload` = take goods off a plane / truck / ship
- `wooden` = made of wood
- `box` = container
- `clothing` = clothes in general
- `extremely` = very, very
- `open up` = open
- `astonished` = very surprised
- `pile` = a heap / stack
- `woolen goods` = goods made of wool; British spelling can be `woollen`
- `goods` = products / things for sale or transport
- `discovered` = found
- `run away` = escape
- `arrested` = taken by police
- `admit` = say that something bad or embarrassing is true
- `normal` = usual / standard
- `ticket` = document or record showing you paid for travel

## Woolen / Woollen Mini-Bridge

Keep this short.

Explain:

- `woolen` and `woollen` both refer to things made of wool.
- `woolen` is common American spelling.
- `woollen` is British spelling.
- The passage uses `woolen goods`; the keyword list may show `woollen`.

Student-facing line:

`看到 woolen / woollen 不用紧张，都是“羊毛的”。这只是美式和英式拼写差异。`

## Visual Direction

Keep visuals realistic, safe, and text-free.

- Setting:
  - Sydney airport cargo area.
  - Cargo workers unloading wooden boxes from a plane.
  - Boxes of clothing / woolen goods.
- Man in the box:
  - Tired, cramped, embarrassed, and surprised.
  - Not heroic or adventurous.
  - No injury, horror, or suffocation imagery.
- Workers:
  - Curious and astonished.
  - One worker opens the unusually heavy box.
- Final scene:
  - Show a formal consequence / payment moment without readable documents.
  - The price comparison should be delivered by UI text or narration, not
    written into the image.
- Forbidden:
  - readable airport signs or crate labels
  - price tags in the image
  - empty text boxes
  - speech bubbles
  - image prompt words inside the script

## Character Consistency Brief

Use this brief for storyboard image prompts only. Do not copy it into the
teaching script.

`A warm educational airport cargo discovery illustration without any readable text or empty label boxes. Scene is Sydney airport cargo area with workers unloading wooden cargo boxes from a plane from London. One box is unusually heavy and contains clothing and woolen goods. A tired embarrassed adult man is discovered lying cramped inside the wooden box, surprised but not injured. Airport workers look astonished and professional. The mood is safe, realistic, and lightly comic, showing that the trip was dangerous, uncomfortable, and foolish. No readable signs, no speech bubbles, no captions, no price text, no blank boxes. Consistent airport workers, wooden boxes, cargo area, and discovered man across all frames.`

## Four-Frame Storyboard Intent

Frame 1: Cargo From London

- A plane has arrived at Sydney airport.
- Workers unload wooden cargo boxes containing clothing.
- Keep the scene text-free.
- The visual question: "Why is this cargo important?"

Frame 2: The Extremely Heavy Box

- Workers notice one wooden box is much heavier than expected.
- One worker decides to open it.
- Show curiosity and concern, not panic.
- No labels or empty boxes.

Frame 3: The Man In The Box

- The box is open.
- A tired man lies on top of woolen goods.
- Workers are astonished.
- The man looks too surprised and cramped to run.

Frame 4: Expensive And Uncomfortable

- The man faces consequences after being discovered.
- Show a safe, official setting: worker / officer / payment desk feel, but no
  readable documents.
- The UI or narration should explain `$3,500` versus `$2,000`.
- The final feeling: the attempted free trip cost more than a normal ticket.

## Script And Courseware Presentation

The production should present the story line in a student-friendly way:

- Use Chinese scene anchors before English chunks.
- Use the English sentence only after the student understands the scene.
- Put vocabulary and grammar in courseware text / narration.
- Do not bake any English into the illustration.
- Avoid all-English story chains as the main memory scaffold.

Suggested slide pattern:

1. 中文场景句：`一个箱子重得不正常。`
2. English chunk: `one of the boxes was extremely heavy`
3. Teacher explanation: `extremely = very, very; account for = explain`
4. Picture: workers examining a heavy cargo box, with no text in the image.

This pattern should be used for the story spine and recitation map.

## Read-Aloud And Pronunciation Direction

Production should preserve the existing read-aloud structure:

- First listen to the full passage.
- Then listen to the original sentence.
- Then record one sentence.
- Then receive feedback.

This lesson has long sentences, passive forms, and several useful chunks.
Feedback should help the student group the cargo-discovery sequence clearly.

Useful sentence groups for read-aloud focus:

- `When a plane from London arrived at Sydney airport, workers began to unload a number of wooden boxes which contained clothing.`
- `No one could account for the fact that one of the boxes was extremely heavy.`
- `It suddenly occurred to one of the workers to open up the box.`
- `He was astonished at what he found.`
- `A man was lying in the box on top of a pile of woolen goods.`
- `He was so surprised at being discovered that he did not even try to run away.`
- `After he was arrested, the man admitted hiding in the box before the plane left London.`
- `He had had a long and uncomfortable trip, for he had been confined to the wooden box for over eighteen hours.`
- `The man was ordered to pay $3,500 for the cost of the trip.`
- `The normal price of a ticket is $2,000!`

For feedback tone:

- Praise clear grouping after `When`, `After`, and `for`.
- Practice `unload`, `wooden`, `extremely`, `occurred`, `astonished`,
  `woolen`, `goods`, `discovered`, `admitted`, `confined`, and `normal`.
- Help the student read `being discovered` as a phrase.
- Help the student say prices naturally: `three thousand five hundred dollars`,
  `two thousand dollars`.
- The final sentence should sound ironic and amused.

## Living-Scene Exercise Direction

The living-scene exercise should transfer the lesson into explaining a strange
discovery and making a safe judgment.

Recommended scenario:

`You notice something strange in a school storage room, delivery box, suitcase, or package. You do not open dangerous things alone. You ask an adult or staff member for help and explain what cannot be accounted for.`

Student should practice:

- explaining why something is strange
- using `account for`
- using `It occurred to me to...`
- using `admit doing`
- describing safe adult help
- making the judgment that dangerous shortcuts are not worth it

Useful expressions:

- `No one could account for the strange noise.`
- `It occurred to me to ask a teacher for help.`
- `We did not open it alone.`
- `He admitted hiding the object there.`
- `It was dangerous and not worth it.`

Safety point:

If a package, box, or storage area seems strange or unsafe, a child should not
investigate alone. Ask an adult.

## Suggested You Too Scene

Scene:

`You and a teacher find a delivery box in the school storage room. It is much heavier than expected. You explain the situation safely.`

Prompt ideas:

- `怎样用中文先讲清楚故事线？`
- `怎样用 account for 表达“解释不了为什么这么重”？`
- `怎样用 It occurred to me to... 表达“我突然想到去找老师”？`
- `怎样用 admit doing 说“承认做了某事”？`
- `为什么危险的省钱方法不值得？`

Target output pattern:

`No one could account for the fact that the box was extremely heavy. It occurred to me to ask a teacher for help. We did not open it alone. Later, a student admitted putting extra books in the box.`

The exercise should make the target phrases useful without imitating the unsafe
airport story.

## Chinese-To-English Exercise Direction

The Chinese-to-English practice should reinforce the cargo-discovery chain and
key structures.

Suggested items:

1. `当一架从伦敦来的飞机抵达悉尼机场时，工人们开始卸木箱。`
   - `When a plane from London arrived at Sydney airport, workers began to unload wooden boxes.`
2. `这些木箱里装着衣服。`
   - `The boxes contained clothing.`
3. `没人能解释为什么其中一个箱子特别重。`
   - `No one could account for the fact that one of the boxes was extremely heavy.`
4. `一个工人突然想到打开箱子。`
   - `It suddenly occurred to one of the workers to open up the box.`
5. `他对自己发现的东西感到非常吃惊。`
   - `He was astonished at what he found.`
6. `一个人正躺在箱子里的一堆羊毛制品上。`
   - `A man was lying in the box on top of a pile of woolen goods.`
7. `他被发现时太吃惊了，甚至没有试图逃跑。`
   - `He was so surprised at being discovered that he did not even try to run away.`
8. `被逮捕后，他承认在飞机离开伦敦前躲进了箱子。`
   - `After he was arrested, he admitted hiding in the box before the plane left London.`
9. `他经历了一次漫长而不舒服的旅行。`
   - `He had had a long and uncomfortable trip.`
10. `他被困在木箱里超过十八个小时。`
    - `He had been confined to the wooden box for over eighteen hours.`
11. `他被要求支付 3500 美元的旅费。`
    - `He was ordered to pay $3,500 for the cost of the trip.`
12. `正常票价是 2000 美元。`
    - `The normal price of a ticket is $2,000.`

## Grammar Board

Keep the grammar board tied to discovery and consequences.

Board structure:

`中文电影线`

- 飞机到悉尼
- 工人卸木箱
- 一个箱子异常重
- 工人想到打开
- 箱里躺着一个人
- 被困十八小时
- 最后付得更贵

`Account for`

- `No one could account for...`
- meaning: no one could explain...

`It occurred to...`

- `It occurred to one worker to open the box.`
- meaning: one worker suddenly had the idea.

`Admit doing`

- `admitted hiding in the box`
- not `admitted to hide`

`Passive consequence`

- `being discovered`
- `was arrested`
- `had been confined`
- `was ordered to pay`

`Title joke`

- `Expensive` = `$3,500` instead of `$2,000`
- `uncomfortable` = confined in a wooden box for over eighteen hours

Avoid presenting the grammar as detached forms. Each structure should explain
one part of the discovery or consequence.

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
But the Lesson 46 script and per-lesson data should describe the read-aloud step
as part of the lesson flow.

## Acceptance Criteria

Lesson 46 production is acceptable only if:

- The story spine and recitation support are Chinese-first, with English chunks
  attached after Chinese scene anchors.
- Generated illustrations contain no readable text, price labels, speech
  bubbles, captions, fake documents, or empty boxes.
- The teaching script contains no image prompts, visual style instructions, or
  storyboard-generation language.
- The script explains airport cargo, wooden boxes, and unloading before the
  discovery scene.
- The script includes a clear safety / legal boundary: hiding in cargo is
  illegal and extremely dangerous.
- The script treats the man as foolish and endangered, not clever or heroic.
- The price comparison uses the English source values `$3,500` and `$2,000`.
- The plan notes the Chinese source currency mismatch without editing shared
  lesson data.
- The 3 formal vocab blocks are exactly `account for`, `occur`, and `confine`.
- The main language board covers `account for`, `It occurred to...`, `admit
  doing`, and passive consequence phrases.
- The `woolen / woollen` spelling difference is explained briefly if it appears.
- The storyboard preserves consistent airport workers, cargo boxes, discovered
  man, and cargo-area setting across all four frames.
- The final flow reminder includes `⓪ 跟读` before the other practice steps.
