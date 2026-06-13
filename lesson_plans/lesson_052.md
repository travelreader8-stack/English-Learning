# Lesson 52 Plan - A pretty carpet

This is the source-of-truth design card for producing Lesson 52. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 52 assets.

## Basic Info

- Lesson: 52
- Title: `A pretty carpet`
- Chinese title: `漂亮的地毯`
- Core bridge: `这一课的核心不是“书太多”这个事实，而是一个很有画面感的比喻笑话：刚搬家后房间小、书太多，书临时铺满了地板，妹妹看见后不说“真乱”，而说这是她见过最漂亮的 carpet，最后还说可以 sit here and read the carpet。孩子要先看见“书铺满每一寸地板”的画面，才能听懂这个结尾。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule.

- Story spine must be Chinese-first.
  - Present the plot first as a Chinese scene line.
  - Attach short English chunks after each Chinese anchor.
  - Do not use an all-English arrow chain as the main student-facing memory
    path.
- Generated illustrations must be text-free.
  - No readable English or Chinese text inside images.
  - No readable book titles, book covers, moving-box labels, carpet labels,
    room signs, speech bubbles, captions, or fake UI text inside images.
  - No empty boxes, blank labels, placeholder panels, or fake text areas.
  - If the courseware needs text, render it as real UI text outside the image.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, visual style
    instructions, camera directions, or generated-image mechanics.
  - Storyboard prompts must not become spoken lesson content.
- Preserve the gentle sibling humor.
  - The sister is not mocking cruelly.
  - Her joke reframes a messy problem as an imaginative "book carpet".
  - The narrator is overwhelmed by books, but the scene should stay warm.
- Keep the room scene safe and respectful.
  - Do not encourage stepping on books as a good habit.
  - Show the walking-on-books line as comic exaggeration / unavoidable clutter
    in the story.
  - Do not create unsafe stair-carrying or falling scenes with the bookcase.

## Production Warnings

- Explain `bookcase` concretely.
  - It is a bookcase/book cabinet, not a small desk shelf.
  - The sister helps carry an old bookcase upstairs because the room needs
    storage.
- Explain `carpet` before the punchline if needed.
  - Many Western rooms may have wall-to-wall carpet or a large carpet area.
  - Chinese children may picture wood floor, tile floor, or a small rug.
  - The important idea is a surface covering the floor.
- Make the "book carpet" image visible.
  - The books cover every inch of floor space.
  - The narrator actually has to walk on them.
  - The sister looks at the floor and jokes that it is the prettiest carpet.
- Do not overteach home-culture background.
  - This lesson does not need a long cultural lecture.
  - The bridge is mainly visual: books as floor covering.
- Keep the final joke clear.
  - `read the carpet` is funny because carpets are not read, but books are.
  - Since the "carpet" is made of books, the phrase suddenly makes sense.

If production requires editing `web/data/lessons.json`, stop and ask for a
shared-data edit because it is outside the normal per-lesson write set.

## Lesson Positioning

Lesson 52 is a visual domestic comedy. The narrator has just moved into a new
house and has been working hard all morning to get the new room in order. The
problem is that he owns over a thousand books and the room is rather small. To
make matters worse, he temporarily puts the books on the floor. They cover every
inch of floor space, so he actually has to walk on them to get in or out. A
short while later, his sister helps carry an old bookcase upstairs, sees the
floor covered with books, and jokes that it is the prettiest carpet she has ever
seen. She then adds that he does not need bookcases at all because he can sit
there in his spare time and read the carpet.

The courseware should make the student understand:

`刚搬进新房子 -> 整理新房间忙了一上午 -> 想把房间收拾好 -> 书超过一千本 -> 房间又很小 -> 暂时把书放地上 -> 书铺满每一寸地板 -> 进出房间都要踩着书 -> 妹妹帮忙搬旧书柜上楼 -> 她看到满地的书很惊讶 -> 她说这是见过最漂亮的地毯 -> 她又说不用书柜了，可以坐在这里读地毯`

The central bridge is:

`书本来应该放进 bookcase；现在书铺满了 floor space，于是妹妹把“乱”看成了 carpet，把“地毯”变成了可以 read 的东西。`

## One-Sentence Hook

A room is so full of books that the sister jokes the books on the floor are the
prettiest carpet she has ever seen.

## Vivid Teaching Opening

The opening should establish the visual joke quickly. It must be a short hook,
not a complete plot retelling. Keep it to 4-6 spoken lines so the first visual
does not stay on screen too long before the frame-by-frame retell begins.

Suggested teacher narration:

`想象你刚搬进一个新房间，最想做的事是 get your room in order，把房间整理好。`

`可是这个人的问题很夸张：他有 over a thousand books，房间又 rather small。`

`书暂时放在地上，慢慢铺满地板，最后看起来不像一堆书，倒像一张 carpet。`

`所以今天先看懂这个笑点：普通 carpet 不能 read，可是如果这张 carpet 是书铺成的，就可以 read the carpet。`

Tone:

- Bright, visual, and lightly amused.
- Make the mess feel imaginative, not stressful.
- Keep the sibling joke kind.
- Save the detailed sequence for the four `retell` frames.

## Story Focus

The book-carpet comedy chain is:

1. The narrator has just moved into a new house.
2. He has been working hard all morning.
3. He has been trying to get the new room in order.
4. This is difficult because he owns over a thousand books.
5. The room is rather small.
6. To make matters worse, he temporarily puts the books on the floor.
7. At the moment, the books cover every inch of floor space.
8. He actually has to walk on them to get in or out of the room.
9. A short while ago, his sister helps him carry an old bookcase upstairs.
10. She goes into the room.
11. She gets a big surprise when she sees all the books on the floor.
12. She calls the book-covered floor the prettiest carpet she has ever seen.
13. She gazes at it for some time.
14. She adds that he does not need bookcases at all.
15. He can sit there in his spare time and read the carpet.

The production should make the contrast visible:

`想整理房间` versus `书多到地板变成地毯`.

## Chinese-First Story Spine For Courseware

Use this as the main student-facing story line.

1. 他们刚搬进新房子
   - `We have just moved into a new house`
2. 他整个上午一直在努力干活
   - `I have been working hard all morning`
3. 他一直想把新房间收拾好
   - `I have been trying`
   - `to get my new room in order`
4. 这并不容易，因为他有一千多本书
   - `This has not been easy`
   - `over a thousand books`
5. 更糟糕的是，房间很小
   - `To make matters worse`
   - `the room is rather small`
6. 所以他暂时把书放在地板上
   - `temporarily put my books on the floor`
7. 现在书铺满了每一寸地板
   - `At the moment`
   - `cover every inch of floor space`
8. 他居然必须踩着书进出房间
   - `actually have to walk on them`
   - `to get in or out of the room`
9. 不久前，妹妹帮他把旧书柜搬上楼
   - `A short while ago`
   - `helped me to carry`
   - `one of my old bookcases up the stairs`
10. 妹妹进屋后大吃一惊
    - `She went into my room`
    - `got a big surprise`
11. 她说这是见过最漂亮的地毯
    - `the prettiest carpet`
    - `I have ever seen`
12. 她盯着看了一会儿
    - `gazed at it for some time`
13. 她又说根本不需要书柜
    - `You don't need bookcases at all`
14. 可以空闲时坐在这里读地毯
    - `in your spare time`
    - `read the carpet`

Student memory prompt:

`先记中文画面线：刚搬家 -> 想整理房间 -> 书太多 -> 房间太小 -> 书暂时放地上 -> 铺满地板 -> 妹妹搬书柜上楼 -> 看到“书地毯” -> 说不用书柜了，可以读地毯。再把英文短语挂到每个画面上。`

Do not show this as an all-English arrow chain in the student-facing courseware.

## Recitation Blocks

Break the passage into four Chinese-first recitation blocks:

### Block 1: 刚搬家，一直在收拾

Chinese anchor:

`他们刚搬进新房子，他整个上午一直努力收拾新房间。`

English chunks:

- `We have just moved into a new house`
- `I have been working hard all morning`
- `I have been trying to get my new room in order`

Teaching point:

- This block is excellent for feeling present perfect and present perfect
  continuous.
- The work started earlier and is still relevant now.

### Block 2: 书太多，房间太小

Chinese anchor:

`收拾并不容易，因为他有一千多本书；更糟糕的是，房间很小。`

English chunks:

- `This has not been easy`
- `I own over a thousand books`
- `To make matters worse`
- `the room is rather small`

Teaching point:

- This is the problem setup.
- `To make matters worse` is the turning point from problem to worse problem.

### Block 3: 书铺满地板

Chinese anchor:

`他暂时把书放在地板上，结果书铺满了每一寸地板，进出都要踩着书。`

English chunks:

- `temporarily put my books on the floor`
- `At the moment`
- `cover every inch of floor space`
- `actually have to walk on them`
- `to get in or out of the room`

Teaching point:

- This block builds the visual basis for the title.
- `actually` tells us the situation is more extreme than expected.

### Block 4: 妹妹把书看成地毯

Chinese anchor:

`妹妹帮他搬书柜上楼，看见满地的书后，说这是最漂亮的地毯，还说可以读地毯。`

English chunks:

- `helped me to carry one of my old bookcases up the stairs`
- `got a big surprise`
- `the prettiest carpet I have ever seen`
- `You don't need bookcases at all`
- `in your spare time`
- `read the carpet`

Teaching point:

- This is the punchline block.
- The joke depends on treating books like a carpet and a carpet like something
  readable.

## Bookcase, Carpet, And Room Bridge

This bridge should be short and visual.

Suggested student-facing explanation:

`bookcase 不是一本书，也不是一个小架子，而是放书的书柜/书橱。课文里妹妹帮他把 old bookcase 搬上楼，是因为他的书太多，需要地方放。`

`carpet 是铺在地板上的地毯。有些房间会铺一大片地毯，所以当书铺满整个地板时，妹妹就开玩笑说：这是一张漂亮的 carpet。`

Production guidance:

- Show the bookcase as a large storage object, not a tiny shelf.
- Show enough floor coverage for the carpet comparison to make sense.
- Do not use readable text on the books or boxes.
- Keep the moving-house context simple: boxes, new room, bookcase, books on
  floor.

## Modern Child Bridge

The modern bridge can connect to a child's messy room without losing the book
focus.

Possible student-facing analogy:

`现在很多孩子的东西可能不是一千本书，而是漫画、课外书、模型、乐高、卡牌、文具、运动装备。东西太多、房间太小的时候，地板也会变成“临时仓库”。这篇课文夸张地把这种临时仓库变成了一张“书地毯”。`

Keep the original special:

- The original punchline needs books because books can be read.
- Other objects can explain the modern feeling, but the lesson's joke remains
  "read the carpet".

## Title And Wordplay Bridge

Explain the title as a visual metaphor.

`A pretty carpet` has two layers:

- Literal object:
  - A carpet is something that covers the floor.
  - The books cover the floor like a carpet.
- Wordplay:
  - You cannot normally read a carpet.
  - But if the "carpet" is made of books, you can "read the carpet".

Student-facing summary:

`妹妹不是在认真说地板上有地毯。她是在把满地的书想象成一张地毯，所以最后的 read the carpet 才会好笑。`

## Main Language Focus

### Present Perfect: `have just moved`

Target:

`We have just moved into a new house`

Explain:

- `have just moved` means the move happened very recently.
- The new-room mess still matters now.

Teaching move:

- Start from Chinese:
  - `我们刚刚搬进新房子。`
- Map to English:
  - `We have just moved into a new house.`

### Present Perfect Continuous

Targets:

- `I have been working hard all morning`
- `I have been trying to get my new room in order`

Explain:

- The action started earlier and continued for a period of time.
- The speaker is still affected by it now.

Student-facing idea:

`不是只说“我干了活”，而是说“我从早上一直干到现在”。`

### `get...in order`

Target:

`get my new room in order`

Explain:

- Make something tidy and organized.
- `order` here is not a command. It means an organized state.

Practice:

- `I need to get my desk in order.`
- `She tried to get her books in order.`

### `own`

Target:

`I own over a thousand books`

Explain:

- `own` means possess / have as one's own.
- It is more formal and exact than simply `have`.

### `To make matters worse`

Target:

`To make matters worse, the room is rather small`

Explain:

- Used when one problem is followed by another problem.
- It means "更糟糕的是".

Practice:

- `It was raining. To make matters worse, I forgot my umbrella.`
- `The box was heavy. To make matters worse, the stairs were narrow.`

### `rather`

Target:

`rather small`

Explain:

- Means quite / fairly.
- It softens the adjective but still says the room is small enough to cause a
  problem.

### `temporarily`

Target:

`temporarily put my books on the floor`

Explain:

- For a short time, not permanently.
- The narrator does not intend the floor to be the final bookshelf.

### `At the moment`

Target:

`At the moment, they cover every inch of floor space`

Explain:

- Right now.
- This phrase helps the student see the current state of the room.

### `every inch of floor space`

Target:

`every inch of floor space`

Explain:

- Every tiny part of the floor.
- Very strong visual phrase.
- `floor space` means usable space on the floor.

### `actually have to`

Target:

`I actually have to walk on them`

Explain:

- `actually` adds surprise: it is really true.
- `have to` means must / have no better choice.

Boundary:

- In real life, do not walk on books as a habit.
- In the story, it shows how full the room is.

### `A short while ago`

Target:

`A short while ago`

Explain:

- A little while before now.
- It moves the story from the room situation to the sister's visit/help.

### `help someone to do`

Target:

`my sister helped me to carry one of my old bookcases up the stairs`

Explain:

- `helped me to carry...` = helped me carry.
- `up the stairs` gives direction.

### `get a big surprise`

Target:

`got a big surprise`

Explain:

- Natural phrase for being very surprised.
- Her surprise comes from seeing the floor covered with books.

### Superlative + `I have ever seen`

Target:

`This is the prettiest carpet I have ever seen`

Explain:

- `the prettiest` is the highest degree.
- `I have ever seen` means in all my experience.

Practice:

- `This is the funniest story I have ever heard.`
- `This is the smallest room I have ever seen.`

### `gaze at`

Target:

`She gazed at it for some time`

Explain:

- Look steadily for a while.
- Stronger and slower than a quick look.

### `not...at all`

Target:

`You don't need bookcases at all`

Explain:

- Not in any degree / completely not.
- It makes the sister's joke stronger.

### `in your spare time`

Target:

`in your spare time`

Explain:

- Free time.
- Time when you are not studying, working, or doing required things.

### `read the carpet`

Target:

`read the carpet`

Explain:

- Normally impossible: we read books, not carpets.
- Funny because this "carpet" is made of books.

## Vocabulary Plan

Prioritize visual meaning and sentence usefulness.

- `carpet`
  - Floor covering.
  - In the story, the books look like a carpet.
- `move into`
  - Start living in a new house or room.
- `work hard`
  - Put in effort.
- `get...in order`
  - Make tidy / organized.
- `own`
  - Have something as yours.
- `over`
  - More than.
- `bookcase`
  - Book cabinet / bookshelf furniture.
- `temporarily`
  - For a short time.
- `inch`
  - A small unit of length.
  - In this sentence, it helps mean every tiny part.
- `space`
  - Room or area.
- `floor space`
  - Usable area on the floor.
- `actually`
  - Really, surprisingly.
- `a short while ago`
  - A little time before now.
- `stairs`
  - Steps inside a building.
- `surprise`
  - Unexpected feeling.
- `pretty / prettiest`
  - Nice-looking / most nice-looking.
- `gaze`
  - Look steadily.
- `add`
  - Say something more.
- `at all`
  - Used for emphasis in negatives.
- `spare time`
  - Free time.

Vocabulary memory grouping:

- Moving/room words: `move into`, `room`, `bookcase`, `stairs`, `floor space`
- Amount/space words: `over`, `temporarily`, `every inch`, `space`, `actually`
- Joke words: `carpet`, `prettiest`, `gazed`, `spare time`, `read the carpet`

## Visual Direction

The visuals should make the "book carpet" instantly understandable without
putting text inside generated images.

Overall style:

- Warm illustrated realism.
- Light family/home comedy.
- Clear moving-house setting.
- Dense but organized book-covered floor.
- Consistent narrator and sister across all frames.

Avoid:

- Readable book titles or cover text.
- Moving boxes with labels or fake text.
- Speech bubbles, captions, blank signs, or fake UI.
- Dangerous stair accident scenes.
- Making the room look dirty or neglected.
- Making the sister mean or mocking.

Use:

- New-room moving boxes with no readable labels.
- Many books with colorful but textless covers.
- A small room where floor coverage is visible.
- A large old bookcase being carried safely.
- Sister's surprised but playful expression.
- A final image where the book-covered floor visually resembles a carpet.

## Character Consistency Brief

Keep the narrator and sister consistent across all four lesson illustrations.

Narrator:

- Adult or older student-like narrator.
- Tired from moving and organizing, but not miserable.
- Same clothing, hairstyle, and build across frames.
- Loves books; the mess comes from abundance, not carelessness.

Sister:

- Warm, helpful, playful.
- Same appearance across frames.
- Helps carry the bookcase, then makes a kind joke.

Room/books:

- The room should remain recognizably the same across frames.
- The books should look numerous and varied, but never include readable text.
- The old bookcase should be visually consistent.

## Four-Frame Storyboard Intent

### Frame 1: Moving Into The New Room

Purpose:

- Establish the moving and organizing situation.

Content:

- Narrator in a new room with moving boxes and many books.
- The room looks partly unpacked.
- Narrator looks hardworking and a little tired.

Must avoid:

- Readable moving-box labels or book titles.

### Frame 2: Books Cover The Floor

Purpose:

- Show why the title will make sense.

Content:

- Small room with books covering nearly every part of the floor.
- Narrator carefully steps through or stands at the edge, showing the difficulty
  of getting in or out.
- The books should look like a continuous surface.

Must avoid:

- Making book-walking look like a recommended habit.
- Unsafe slipping or falling.

### Frame 3: Carrying The Old Bookcase

Purpose:

- Show the practical solution entering the story.

Content:

- Sister helps carry an old bookcase upstairs or into the room.
- The action is safe and cooperative.
- Narrator and sister are both visible.

Must avoid:

- Dangerous heavy-object accident.
- Text on the bookcase or walls.

### Frame 4: The Book Carpet Joke

Purpose:

- Land the punchline.

Content:

- Sister stands in the room, gazing at the book-covered floor with amused
  surprise.
- Narrator reacts with mild embarrassment or amusement.
- The floor of books visually resembles a colorful carpet.

Must avoid:

- Speech bubbles or written punchline inside the image.
- Readable book covers.

## Script And Courseware Presentation

The script should speak to the student in Chinese, with short English phrases
inserted where the language matters.

Required presentation principles:

- Start with the visual situation: moved in, many books, small room.
- Explain `bookcase` and `carpet` only enough for the joke.
- Make "read the carpet" the final punchline.
- Use Chinese-first story spine for recitation.
- Attach English chunks to Chinese anchors.
- Keep grammar explanations practical and sentence-based.
- Do not put image prompt language into the teaching script.

Recommended page rhythm:

1. Hook: books so many they become a carpet.
2. Background: moving house, new room, bookcase, carpet.
3. Setup: just moved in, working hard all morning.
4. Problem: over a thousand books, small room.
5. Worse problem: books temporarily on floor, every inch covered.
6. Comic inconvenience: actually have to walk on them.
7. Sister arrives: helps carry old bookcase upstairs.
8. Surprise: sees books on floor.
9. Punchline: prettiest carpet, read the carpet.
10. Language board: present perfect continuous, `To make matters worse`,
    `every inch of floor space`, superlative + `ever`, `not...at all`.
11. Read-aloud / shadowing.
12. Living-scene exercise.
13. Chinese-to-English exercise.
14. Final flow reminder.

## Read-Aloud And Pronunciation Direction

The read-aloud section should preserve the existing courseware flow:

`听课文全文 -> 听原音 -> 录一句 -> 获取反馈`

For Lesson 52, emphasize:

- Smooth long-sentence rhythm.
- Clear contrast between setup and sister's quoted joke.
- Natural stress on amount and space words.
- A small pause before `read the carpet`.

Suggested chunking:

- `We have just moved into a new house`
- `and I have been working hard all morning.`
- `I have been trying`
- `to get my new room in order.`
- `This has not been easy`
- `because I own over a thousand books.`
- `To make matters worse,`
- `the room is rather small,`
- `so I have temporarily put my books on the floor.`
- `At the moment,`
- `they cover every inch of floor space`
- `and I actually have to walk on them`
- `to get in or out of the room.`
- `A short while ago,`
- `my sister helped me to carry`
- `one of my old bookcases up the stairs.`
- `This is the prettiest carpet`
- `I have ever seen.`
- `You don't need bookcases at all.`
- `You can sit here in your spare time`
- `and read the carpet!`

Pronunciation watchlist:

- `moved into`
  - Link gently without swallowing sounds.
- `working hard all morning`
  - Keep rhythm steady.
- `order`
  - Clear first syllable.
- `thousand`
  - Do not drop the `th`.
- `matters worse`
  - Crisp final sounds.
- `temporarily`
  - Break into syllables.
- `inch`
  - Short and clear.
- `actually`
  - Natural, not over-pronounced.
- `bookcases`
  - Plural ending.
- `prettiest`
  - Three syllables.
- `gazed`
  - Clear final sound.

Feedback should reward:

- Clear present-perfect-continuous chunks.
- Smooth `To make matters worse` sentence.
- Accurate `every inch of floor space`.
- Expressive reading of the sister's final joke.

## Living-Scene Exercise Direction

The living-scene exercise should modernize the pattern while keeping books
central enough for the joke.

Target function:

- Say you have just moved or started organizing.
- Say you have been working for a period of time.
- Explain that something is hard because there are too many objects.
- Use `To make matters worse`.
- Describe objects covering floor space.
- End with a playful metaphor.

Safe modern scene idea:

`孩子刚换了自己的学习角，一直在收拾桌子和书架。他有很多漫画、课外书和练习本，书架还没装好，只能暂时把书放在地上。书铺满地板，妹妹说这不是乱，是一张可以阅读的地毯。`

Why this works:

- It keeps the original book/carpet logic.
- It connects to a modern child's room.
- It avoids making the scene only about clutter or scolding.

Possible student prompts:

- `I have just...`
- `I have been trying to...`
- `This has not been easy because...`
- `To make matters worse,...`
- `They cover every inch of...`
- `This is the prettiest... I have ever seen.`

## Suggested You Too Scene

Scene title:

`A Book Floor`

Chinese setup:

`你刚换了一个新的学习角，整个上午一直在收拾。你有很多漫画书、课外书和练习本，可是新书架还没有装好。更糟糕的是，房间很小，所以你暂时把书放在地板上。妹妹进来后说，这像一张漂亮的书地毯，空闲时你可以坐在这里读地毯。`

Target narration shape:

- `I have just moved into a new study corner.`
- `I have been working hard all morning.`
- `I have been trying to get my books in order.`
- `This has not been easy because I own many books and notebooks.`
- `To make matters worse, the room is rather small.`
- `I have temporarily put my books on the floor.`
- `They cover every inch of floor space.`
- `My sister said it was the prettiest carpet she had ever seen.`
- `She added that I could sit there and read the carpet.`

Keep it natural:

- Do not put readable book titles inside images.
- Keep the sibling humor warm.
- Do not turn it into a scolding about messy rooms.

## Extension Practice Direction

Lesson 52 extension production should be extension-only if the main lesson
assets already exist. Create `web/data/extension/lesson_52.json` and register
`52` in `web/data/extension/index.json`. Do not regenerate script, audio,
timeline, read-aloud data, or storyboard images.

### Extension Reading

Use an original room-organization story: a student moves into a new study
corner, tries to get books in order, runs out of shelf space, and someone jokes
that the books have become a carpet. Keep the humor affectionate and visual.

Suggested title: `The Book Carpet`

Recommended word bank: `move into`, `work hard`, `in order`, `own`,
`to make matters worse`, `temporarily`, `every inch`, `floor space`, `gaze`,
`spare time`.

The 5 reading questions should test:

1. what the student was trying to organize
2. why it was not easy
3. what made matters worse
4. why the floor looked like a carpet
5. how the joke turns mess into a picture

### Sentence Writing

Use 5 patterns:

1. `have just moved into ...`
   - Source: `We have just moved into a new house.`
   - Focus: recent change with present result.
   - Must include: `have just moved into`
2. `have been trying to get ... in order`
   - Source: `I have been trying to get my new room in order.`
   - Focus: ongoing effort.
   - Must include: `have been trying to get` and `in order`
3. `To make matters worse, ...`
   - Source: `To make matters worse, the room is rather small.`
   - Focus: adding a second problem.
   - Must include: `To make matters worse`
4. `every inch of ...`
   - Source: `They cover every inch of floor space.`
   - Focus: vivid total coverage.
   - Must include: `every inch of`
5. `the prettiest ... I have ever seen`
   - Source: `This is the prettiest carpet I have ever seen.`
   - Focus: humorous superlative.
   - Must include: `the prettiest` and `I have ever seen`

## Chinese-To-English Exercise Direction

Use exercises that map directly to Lesson 52 structures.

Suggested items:

1. 我们刚刚搬进一所新房子。
   - `We have just moved into a new house.`
2. 我整个上午一直在努力干活。
   - `I have been working hard all morning.`
3. 我一直在试着把新房间收拾整齐。
   - `I have been trying to get my new room in order.`
4. 这并不容易，因为我有一千多本书。
   - `This has not been easy because I own over a thousand books.`
5. 更糟糕的是，房间相当小。
   - `To make matters worse, the room is rather small.`
6. 我暂时把书放在了地板上。
   - `I have temporarily put my books on the floor.`
7. 它们占满了每一寸地板空间。
   - `They cover every inch of floor space.`
8. 我实际上不得不踩着它们进出房间。
   - `I actually have to walk on them to get in or out of the room.`
9. 这是我见过的最漂亮的地毯。
   - `This is the prettiest carpet I have ever seen.`
10. 你可以在空闲时间坐在这里读地毯。
    - `You can sit here in your spare time and read the carpet.`

Exercise notes:

- Keep the `read the carpet` line as the punchline.
- Do not over-explain present perfect continuous before the student can retell
  the scene.
- Use Chinese anchors to preserve story order.

## Grammar Board

The grammar board should be practical and story-linked.

### 1. `have just + past participle`

Form:

`We have just moved into a new house.`

Meaning:

`刚刚做完某事，结果和现在有关。`

### 2. `have been + V-ing`

Form:

`I have been working hard all morning.`

`I have been trying to get my new room in order.`

Meaning:

`从过去一直做，到现在仍然有影响。`

### 3. `get...in order`

Form:

`get my new room in order`

Meaning:

`把……整理好。`

### 4. `To make matters worse`

Form:

`To make matters worse, + worse problem.`

Meaning:

`更糟糕的是……`

### 5. `every inch of...`

Form:

`every inch of floor space`

Meaning:

`每一寸……，强调全部占满。`

### 6. `actually have to`

Form:

`I actually have to walk on them.`

Meaning:

`真的/居然不得不……`

### 7. Superlative + `I have ever seen`

Form:

`This is the prettiest carpet I have ever seen.`

Meaning:

`这是我见过的最……的……`

### 8. `not...at all`

Form:

`You don't need bookcases at all.`

Meaning:

`一点也不需要 / 根本不需要。`

### 9. `in your spare time`

Form:

`You can sit here in your spare time.`

Meaning:

`在空闲时间。`

## Final Page / Course Flow Reminder

The final summary page should include the full course flow, with the read-aloud
and shadowing step included explicitly.

Recommended flow:

1. 跟读：听课文全文 -> 听原音 -> 录一句 -> 获取反馈
2. 生活场景
3. 完形填空
4. 中译英
5. 英译中
6. 拓展阅读
7. 句式仿写
8. 默写

For Lesson 52, the final reminder can say:

`这一课先记住画面线：刚搬家 -> 一直收拾 -> 书太多 -> 房间太小 -> 书铺满地板 -> 妹妹看到“书地毯” -> 说可以 read the carpet。重点是看懂书和地毯之间的比喻笑话。`

## Acceptance Criteria

- The extension practice follows the `Extension Practice Direction` above,
  creates `web/data/extension/lesson_52.json`, and registers the lesson in
  `web/data/extension/index.json`.
Lesson 52 production is acceptable only if:

- The student can clearly picture books covering the floor like a carpet.
- `bookcase` and `carpet` are explained just enough for the joke.
- The story spine is Chinese-first, with English chunks attached after Chinese
  anchors.
- The final `read the carpet` line is treated as the punchline.
- The sister's humor is warm and imaginative, not mean.
- The plan avoids encouraging students to walk on books as a real habit.
- Language teaching includes `have just moved`, `have been working`,
  `get...in order`, `over a thousand`, `To make matters worse`, `temporarily`,
  `every inch of floor space`, `actually`, `got a big surprise`,
  `prettiest ... I have ever seen`, `gazed`, `not...at all`, and `spare time`.
- Generated illustrations contain no readable book titles, cover text, moving
  box labels, room signs, speech bubbles, blank boxes, or fake UI.
- The narrator, sister, room, books, and old bookcase stay visually consistent
  across the four frames.
- The room looks cluttered from books but not dirty or neglected.
- The script contains teaching content only, not storyboard/image prompt
  wording.
- The read-aloud / shadowing flow is included in the final course flow.
- The living-scene exercise modernizes the room-organizing situation while
  preserving the book/carpet wordplay.
