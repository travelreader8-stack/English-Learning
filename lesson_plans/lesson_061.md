# Lesson 61 Plan - Trouble with the Hubble

This is the source-of-truth design card for producing Lesson 61. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 61 assets.

## Basic Info

- Lesson: 61
- Title: `Trouble with the Hubble`
- Chinese title: `哈勃望远镜的困境`
- Core bridge: `这一课不要讲成一节很重的 NASA 科普课，而要讲成一个清楚的工程故事：一台花费巨大、被送上太空的望远镜，一开始因为主镜有问题而拍不清楚；科学家没有放弃，而是派宇航员乘 Endeavour 去太空维修，最后让它成为能看见遥远星系的 eagle eye。孩子要抓住：高科技也会出错，但科学和工程的厉害之处在于发现问题、修复问题、继续前进。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule and the section
responsibility rule in `LESSON_PRODUCTION_PLAN.md`.

- Keep the opening hook short.
  - Use 4-6 spoken lines only.
  - The hook should raise the question: why did a billion-dollar space telescope
    take disappointing pictures at first?
  - Do not retell the whole passage before the four `retell` frames.
  - Do not explain every space object, date, and grammar point in the opening.
- Treat the text as a repair story, not a random space vocabulary list.
  - Make the causal chain visible:
    `launched -> costly -> trouble -> blurry pictures -> faulty mirror -> NASA repair plan -> shuttle Endeavour -> robot-arm -> astronauts repair -> clear space pictures`.
  - Keep the emotional movement clear:
    excitement -> disappointment -> diagnosis -> repair mission -> wonder.
- Story spine must be Chinese-first.
  - Use Chinese scene anchors first, with short English chunks attached.
  - Do not use an all-English arrow chain as the main student-facing memory
    path.
  - Space terms may be kept in English when they are key words, but each must
    have a simple Chinese explanation nearby.
- Avoid repeated script content across sections.
  - The four `retell` frames are the only section that should walk through the
    full passage in order.
  - The teacher-student dialogue must not repeat the retell narration.
  - The dialogue should deepen one or two ideas:
    why being above the atmosphere matters, and why a failed high-tech mission
    can still become a success after repair.
  - Vocabulary and grammar sections should explain the language tools, not tell
    the story again.
- The four illustrations must form one continuous story line.
  - They are not four isolated space posters.
  - The same Hubble telescope design should be recognizable across frames.
  - The same NASA-style mission control room and repair mission should carry
    visual continuity when they appear.
  - The emotional line should accumulate: launch pride -> control-room
    disappointment -> tense repair -> clear universe images.
- Generated illustrations must be text-free.
  - No readable English or Chinese text inside images.
  - No readable NASA logos, shuttle labels, mission patches, screen text,
    captions, speech bubbles, UI panels, or fake lesson text.
  - If the courseware needs words such as `NASA`, `Hubble`, `Endeavour`,
    `atmosphere`, or `galaxy`, render them as real UI text outside the image.
- Keep real-world science claims modest unless production verifies current
  facts.
  - The courseware may say Hubble became famous for clear space images after
    repair.
  - Do not add detailed current comparisons with newer telescopes unless the
    production thread verifies them from reliable sources.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, camera directions,
    or generated-image mechanics.
  - Storyboard prompts must not leak into spoken lesson content.

## Production Warnings

- The current lesson record has two source-data issues that production should
  notice before generating final assets.
  - English and cloze text show `April 20,1990`; display and speech would be
    cleaner as `April 20, 1990`.
  - The Chinese translation renders `stars and distant galaxies` as `有关行星和远距离星系`;
    `stars` should be understood as `恒星`, not `行星`.
- These are shared-data issues in `web/data/lessons.json`.
  - A normal production thread should stop and ask before editing this shared
    file, unless the user explicitly authorizes the correction in that thread.
  - If approved, keep the edit narrowly scoped to Lesson 61's relevant fields.
- The text is written from an old future-looking moment.
  - `NASA is now going to...`, `will soon be...`, and `By the time you read this`
    sound like the repair mission is about to happen.
  - For today's child, frame this as a 1990s technology-news time capsule.
  - Do not let the student think the repair mission is still in the future now.
- `Hubble` is a proper name and should not be overtranslated.
  - Use `哈勃望远镜` in Chinese explanation.
  - Keep `Hubble telescope` as a key English phrase.
- `NASA` should be explained simply as the American space agency.
  - Do not turn the section into a long institutional history.
- `Endeavour` is the name of the space shuttle.
  - Treat it as a named spacecraft.
  - Do not overteach spelling unless it helps pronunciation.
- `robot-arm` is visually important.
  - Make it concrete: a mechanical arm on the shuttle grabs and holds the
    telescope while astronauts repair it.
- `eagle eye` is a metaphor.
  - Explain it as `sharp eye` or `very clear sight`, not a literal eagle.
- `at a cost of over a billion dollars` is useful for scale.
  - Do not dwell on exact exchange rates.
  - Say it was extremely expensive, which makes the initial failure more
    surprising.
- `faulty` should be taught as a calm engineering word.
  - It means something has a fault or defect.
  - Do not exaggerate the situation into a disaster movie.

If production requires editing `web/data/lessons.json`, stop and ask for a
shared-data edit because it is outside the normal per-lesson write set.

## Lesson Positioning

Lesson 61 is a space-engineering repair story. The Hubble telescope was launched
into space by NASA on April 20, 1990 at a cost of over a billion dollars. From
the start, however, there was trouble: the pictures it sent back were
disappointing because the main mirror was faulty. NASA planned to put the
telescope right by sending four astronauts to repair it. The shuttle Endeavour
would carry the astronauts to the Hubble, and a robot-arm from the shuttle would
grab and hold the telescope while the astronauts made the necessary repairs.
Because Hubble is above the earth's atmosphere, it could send clearer pictures
of stars and distant galaxies than people had ever seen before. The lesson ends
with a confident future-perfect sentence: by the time the reader reads the
article, Hubble's eagle eye will have sent thousands and thousands of wonderful
pictures.

The courseware should make the student understand:

`NASA 发射 Hubble telescope -> 花费 over a billion dollars -> 一开始就有 trouble -> 传回来的 pictures disappointing -> main mirror faulty -> NASA 要 put the telescope right -> send up four astronauts -> shuttle Endeavour 带他们去 Hubble -> robot-arm grab and hold the telescope -> astronauts make repairs -> Hubble above the earth's atmosphere -> send clearest pictures of stars and distant galaxies -> tell us age and size of universe -> eagle eye will have sent thousands of pictures`

The central bridge is:

`这不是“太空望远镜名词课”，而是“一个昂贵的高科技项目出了错，人类怎样在太空中把它修好”的故事。`

## One-Sentence Hook

A billion-dollar telescope was sent into space, but its first pictures were
blurry; the real wonder is how people repaired it in space.

## Vivid Teaching Opening

The opening should establish the engineering surprise quickly. It must be a
short hook, not a complete plot retelling. Keep it to 4-6 spoken lines so the
first visual does not stay on screen too long before the frame-by-frame retell
begins.

Suggested teacher narration:

`如果一个花了十多亿美元的太空望远镜，拍出来的照片却不清楚，会不会很尴尬？`

`这就是 Hubble telescope 一开始遇到的 trouble。`

`它不是没有飞上太空，而是主镜有问题，pictures were very disappointing。`

`更厉害的是，NASA 后来要把宇航员送上去，在太空里把它修好。`

`今天抓住这条线：big machine, big problem, brave repair, clear universe。`

Tone:

- Curious, precise, and a little dramatic.
- Let the child feel the scale of the problem without making it frightening.
- Keep the wonder focused on repair and discovery.
- Save the full sequence for the four `retell` frames.

## Section Responsibility And Anti-Repetition Plan

Production must treat the lesson as several sections with distinct jobs.

### Opening

Job:

- Raise the problem: why did an expensive space telescope disappoint people at
  first?
- Frame the repair mission as the hook.
- Keep the opening short.

Do not:

- Explain the full Hubble history.
- Explain all future-tense forms.
- Describe all four frames before the retell section begins.

### Four Retell Frames

Job:

- Walk through the passage in order.
- Make the launch, disappointing pictures, repair mission, and final clear
  universe images visible.
- Pair each event with Chinese anchors and short English chunks.

Do not:

- Turn the retell into a long science lecture.
- Overload the child with modern telescope comparisons.
- Use only English arrows for the memory chain.

### Teacher-Student Dialogue

Job:

- Deepen the idea that being above the atmosphere helps the telescope see more
  clearly.
- Deepen the idea that high-tech projects can fail at first and still become
  successful through repair.
- Discuss `eagle eye` as a metaphor for sharp sight.

Do not:

- Re-list the whole passage.
- Re-explain every vocabulary word.
- Make the dialogue a second plot summary.

### Vocabulary And Grammar

Job:

- Explain the words and structures that make the lesson work:
  `launched`, `at a cost of`, `faulty`, `put ... right`, `shuttle`,
  `robot-arm`, `atmosphere`, `distant galaxies`, `will have sent`.
- Show how the text moves from past fact to planned future to expected result.

Do not:

- Restart the story through vocabulary examples.
- Turn future perfect into abstract grammar first.

### Practice And Transfer

Job:

- Move the language into a modern child-understandable repair scene:
  a school science device, camera, robot, telescope, or drone has a fault, and
  the team finds the problem and repairs it.
- Keep the emotional pattern:
  exciting launch/use -> disappointing result -> faulty part -> repair -> clear
  result.

Do not:

- Replace the original Hubble story.
- Use a scene that requires too much specialist science.

## Story Focus

The repair-and-discovery chain is:

1. The Hubble telescope was launched into space.
2. NASA launched it on April 20, 1990.
3. It cost over a billion dollars.
4. Right from the start, there was trouble with the Hubble.
5. The pictures it sent back were very disappointing.
6. The main mirror was faulty.
7. NASA is going to put the telescope right.
8. NASA will send up four astronauts to repair it.
9. The shuttle Endeavour will take the astronauts to the Hubble.
10. A robot-arm from Endeavour will grab the telescope.
11. The robot-arm will hold it.
12. The astronauts will make the necessary repairs.
13. Hubble is above the earth's atmosphere.
14. It will send the clearest pictures of stars and distant galaxies.
15. It will tell us a great deal about the age and size of the universe.
16. By the time the reader reads the article, Hubble's eagle eye will have sent
    thousands and thousands of wonderful pictures.

The production should make the contrast visible:

`expensive launch` versus `faulty mirror`.

`disappointing first pictures` versus `clearest pictures`.

`ordinary repair` versus `repair in space`.

`old future-looking article` versus `today's historical reading`.

## Chinese-First Story Spine For Courseware

Use this as the main student-facing story line.

1. Hubble telescope 被 NASA 发射到太空
   - `The Hubble telescope`
   - `was launched into space`
   - `by NASA`
2. 时间是 1990 年 4 月 20 日，花费超过十亿美元
   - `on April 20, 1990`
   - `at a cost of`
   - `over a billion dollars`
3. 可是从一开始，Hubble 就有 trouble
   - `Right from the start`
   - `there was trouble`
   - `with the Hubble`
4. 它传回来的 pictures 让人很失望
   - `The pictures it sent us`
   - `were very disappointing`
5. 原因是它的 main mirror 有问题
   - `because`
   - `its main mirror`
   - `was faulty`
6. NASA 现在要把 telescope 修好
   - `NASA is now going to`
   - `put the telescope right`
7. 所以他们要送四名 astronauts 上去维修
   - `so`
   - `it will soon be sending up`
   - `four astronauts`
   - `to repair it`
8. shuttle Endeavour 会把 astronauts 带到 Hubble 那里
   - `The shuttle Endeavour`
   - `will be taking`
   - `the astronauts`
   - `to the Hubble`
9. Endeavour 上的 robot-arm 会抓住并托住 telescope
   - `A robot-arm`
   - `from the Endeavour`
   - `will grab the telescope`
   - `and hold it`
10. 在它托住的时候，astronauts 进行必要维修
    - `while`
    - `the astronauts`
    - `make the necessary repairs`
11. Hubble 在地球 atmosphere 之外
    - `the Hubble`
    - `is above`
    - `the earth's atmosphere`
12. 所以它会传回最清晰的 stars 和 distant galaxies 图片
    - `it will soon be sending us`
    - `the clearest pictures`
    - `of the stars`
    - `and distant galaxies`
    - `that we have ever seen`
13. Hubble 会告诉我们关于 universe 年龄和大小的许多信息
    - `The Hubble will tell us`
    - `a great deal about`
    - `the age and size`
    - `of the universe`
14. 等你读到这篇时，它的 eagle eye 已经送回成千上万张精彩照片
    - `By the time you read this`
    - `the Hubble's eagle eye`
    - `will have sent us`
    - `thousands and thousands of`
    - `wonderful pictures`

Student memory prompt:

`先记中文工程线：发射 Hubble -> 花费巨大 -> 一开始有 trouble -> 照片 disappointing -> main mirror faulty -> NASA 要 put it right -> astronauts 乘 Endeavour 去维修 -> robot-arm 抓住并托住 -> Hubble 在 atmosphere 外 -> 传回 clearest pictures -> 告诉我们 universe 的 age and size -> eagle eye 已经送回 thousands of pictures。再把英文短语挂到每个节点上。`

Do not show this as an all-English arrow chain in the student-facing courseware.

## Recitation Blocks

Break the passage into four Chinese-first recitation blocks:

### Block 1: 发射成功，但代价巨大

Chinese anchor:

`Hubble telescope 由 NASA 在 1990 年 4 月 20 日发射到太空，花费超过十亿美元。`

English chunks:

- `The Hubble telescope`
- `was launched into space`
- `by NASA`
- `on April 20, 1990`
- `at a cost of`
- `over a billion dollars`

Teaching point:

- This block establishes scale and importance.
- `was launched` is passive because the focus is the telescope.
- `at a cost of` sounds like a formal report.

### Block 2: 一开始就有 trouble

Chinese anchor:

`可是从一开始，Hubble 就有问题。它传回来的 pictures 很令人失望，因为 main mirror 是 faulty 的。`

English chunks:

- `Right from the start`
- `there was trouble`
- `with the Hubble`
- `The pictures it sent us`
- `were very disappointing`
- `because its main mirror`
- `was faulty`

Teaching point:

- This block is the turn from pride to disappointment.
- `faulty` is the key engineering word.
- Make the cause clear: not space itself, but the mirror.

### Block 3: NASA 派人去太空维修

Chinese anchor:

`NASA 要把 telescope 修好，所以会送四名 astronauts 上去。Endeavour 会带他们到 Hubble，robot-arm 会抓住并托住 telescope，让 astronauts 完成维修。`

English chunks:

- `NASA is now going to`
- `put the telescope right`
- `it will soon be sending up`
- `four astronauts`
- `to repair it`
- `The shuttle Endeavour`
- `will be taking the astronauts`
- `A robot-arm`
- `will grab the telescope`
- `and hold it`
- `while the astronauts`
- `make the necessary repairs`

Teaching point:

- This block is the most vivid action sequence.
- `put ... right` means fix the problem.
- `grab and hold ... while ... repair` should be shown visually.

### Block 4: 在大气层外看见清晰宇宙

Chinese anchor:

`因为 Hubble 在地球 atmosphere 之外，它很快会传回我们见过最清晰的 stars 和 distant galaxies 图片，还会帮助我们了解 universe 的年龄和大小。`

English chunks:

- `the Hubble is above`
- `the earth's atmosphere`
- `it will soon be sending us`
- `the clearest pictures`
- `of the stars`
- `and distant galaxies`
- `that we have ever seen`
- `will tell us`
- `a great deal about`
- `the age and size`
- `of the universe`
- `By the time you read this`
- `will have sent us`
- `thousands and thousands`
- `of wonderful pictures`

Teaching point:

- This block connects science to wonder.
- Explain `above the atmosphere` simply.
- `eagle eye` is a metaphor for very sharp sight.

## Modern Child Bridge

For a modern child, connect the text to familiar experiences of cameras,
screens, and repair:

- A phone camera lens has a scratch, so all photos are blurry.
- A school telescope is pointed at the moon, but the image is unclear because
  the lens is not set right.
- A robot or drone is built carefully, but one part has a fault, so the team has
  to diagnose and repair it.
- A very expensive device can still fail if one tiny part is wrong.

Suggested child-facing line:

`孩子可能没见过太空维修，但一定懂：如果相机镜头出了问题，再贵的相机也拍不清楚。Hubble 的故事就是这个道理放大到太空里。`

Do not replace the original story. Use the bridge to make the Hubble story
concrete.

## Hubble And Space Background Bridge

Keep this background short and concrete.

Student-facing explanation:

`Hubble telescope 可以理解成一台放在太空里的超级望远镜。地球外面有 atmosphere，大气会让远处星光变得不那么清楚。Hubble 在大气层外面看 universe，所以能拍到更清晰的 stars 和 distant galaxies。`

Important boundaries:

- Do not turn this into a long astronomy lecture.
- Do not overload the child with detailed optical physics.
- Keep `stars` as `恒星`, not `行星`.
- Keep `distant galaxies` as `遥远的星系`.
- If adding current science facts beyond the passage, verify them first.

## Historical Time-Capsule Bridge

This passage has an old-newspaper feeling. The original text speaks as if the
repair and wonderful pictures are about to arrive.

Student-facing explanation:

`这篇文章写的时候，Hubble 的维修还像一件马上要发生的大事，所以文中有很多 future language。今天我们读它，就像读一篇 1990 年代的科技新闻：那时候大家正在期待 Hubble 修好以后给人类带来更清楚的宇宙照片。`

Use this bridge to explain:

- why the passage uses `is now going to`
- why it says `will soon be sending up`
- why it says `By the time you read this`
- why future perfect `will have sent` appears near the end

Do not make the child memorize a full Hubble timeline. The point is to understand
the article's time perspective.

## Teacher-Student Dialogue Direction

The dialogue section must not repeat the plot. It should explore why the repair
matters and why Hubble can see clearly.

Recommended dialogue path:

1. Teacher asks:
   `如果望远镜在地面上，为什么看遥远的星星可能不够清楚？`
2. Student:
   `因为中间有空气？`
3. Teacher:
   `Right. The earth's atmosphere is like a moving layer between us and space. It can make light less clear.`
4. Teacher:
   `So why put Hubble above the atmosphere?`
5. Student:
   `To get clearer pictures.`
6. Teacher:
   `Exactly. But Hubble had another problem: its main mirror was faulty.`
7. Teacher asks:
   `如果一个 billion-dollar machine 出错了，是不是故事就结束了？`
8. Student:
   `不是，可以 repair it.`
9. Teacher:
   `That's the powerful idea. Science is not "never making mistakes". It is finding the fault, putting it right, and learning more.`

Keep this section short. It should feel like a new thinking angle after retell,
not a second retell.

## Main Language Focus

### Passive Voice: `was launched`

Core sentence:

`The Hubble telescope was launched into space by NASA.`

Teaching:

- The focus is the telescope, not the people launching it.
- `was launched` means `被发射`.
- `by NASA` tells us who did it.

Student-facing idea:

`英语里如果重点是“这个东西被怎么样了”，就常用 passive voice：The Hubble telescope was launched.`

### Cost And News-Report Language

Core expression:

`at a cost of over a billion dollars`

Teaching:

- This sounds formal and report-like.
- It tells the scale of the project.
- It makes the later problem more surprising.

### Cause And Result

Core sentences:

- `because its main mirror was faulty`
- `so it will soon be sending up four astronauts`

Teaching:

- `because` gives the reason.
- `so` gives the result or next action.
- The story is easy to remember if the child follows this cause-result chain.

### Repair Language

Core expressions:

- `put the telescope right`
- `repair it`
- `make the necessary repairs`
- `faulty`

Teaching:

- `faulty` names the problem.
- `put ... right` means fix what is wrong.
- `necessary repairs` are repairs that must be done.

### Future Plan And Future Action

Core expressions:

- `NASA is now going to put the telescope right`
- `it will soon be sending up four astronauts`
- `The shuttle Endeavour will be taking the astronauts`
- `A robot-arm ... will grab the telescope and hold it`

Teaching:

- The article describes a planned mission.
- The future forms give the feeling of a coming operation.
- Do not teach these as isolated tense labels first; connect them to the repair
  mission timeline.

### `while` For Simultaneous Actions

Core sentence:

`A robot-arm from the Endeavour will grab the telescope and hold it while the astronauts make the necessary repairs.`

Teaching:

- The robot-arm holds the telescope.
- At the same time, the astronauts repair it.
- `while` helps the child visualize two actions happening together.

### Superlative Plus Experience

Core expression:

`the clearest pictures ... that we have ever seen`

Teaching:

- `clearest` means no pictures were clearer before.
- `that we have ever seen` means in all our experience up to now.
- It expresses excitement and achievement.

### Future Perfect: `will have sent`

Core sentence:

`By the time you read this, the Hubble's eagle eye will have sent us thousands and thousands of wonderful pictures.`

Teaching:

- `By the time you read this` sets a future point.
- `will have sent` means the sending will already be completed by then.
- Teach it through the old-news time perspective, not as abstract formula first.

## Vocabulary Plan

Prioritize vocabulary that supports the space repair story and the wonder of
clear pictures.

### `Hubble`

- Proper name of the telescope.
- Use `哈勃望远镜` in Chinese explanation.

### `telescope`

- A tool for seeing faraway objects.
- Here it is a space telescope, like a very powerful eye in space.

### `launch`

- Send something up, especially into the air or space.
- `was launched into space` means `被发射到太空`.

### `NASA`

- The American space agency.
- Keep the explanation simple.

### `billion`

- One thousand million.
- In this text, it mainly means the project was extremely expensive.

### `right from the start`

- From the very beginning.
- It tells us the trouble appeared immediately.

### `trouble`

- Problem or difficulty.
- The title says there was trouble with Hubble.

### `disappointing`

- Making people feel let down.
- The pictures were not as good as expected.

### `faulty`

- Having a fault or defect.
- Key word for the mirror problem.

### `main mirror`

- The most important mirror inside the telescope.
- Explain simply as the part that helps it see clearly.

### `put ... right`

- Fix a problem and make it correct.
- `put the telescope right` means repair the telescope.

### `astronaut`

- A person trained to travel and work in space.
- Here four astronauts go to repair Hubble.

### `shuttle`

- A spacecraft that carries people and equipment.
- Here `Endeavour` is the shuttle's name.

### `Endeavour`

- Proper name of the shuttle.
- Pronunciation support is useful, but do not overteach the spelling.

### `robot-arm`

- A mechanical arm controlled from the shuttle.
- It grabs and holds the telescope during repair.

### `grab`

- Take hold of something quickly and firmly.
- The robot-arm grabs the telescope.

### `hold`

- Keep something in place.
- The robot-arm holds Hubble while astronauts work.

### `necessary`

- Needed; not optional.
- `necessary repairs` are repairs that must be done.

### `atmosphere`

- The layer of air around the earth.
- It can make views of space less clear from the ground.

### `distant`

- Far away.
- Pair with `distant galaxies`.

### `galaxy`

- A huge group of stars.
- Explain as `星系`, not just one star.

### `universe`

- Everything in space.
- Keep the explanation broad and simple.

### `a great deal`

- A lot.
- `tell us a great deal about` means give us a lot of information about.

### `eagle eye`

- A metaphor for very sharp sight.
- Do not make it literal.

### `thousands and thousands`

- A very large number.
- Repetition adds emphasis.

## Storyboard Continuity Rule

The storyboard must feel like four shots from one short science documentary, not
four unrelated space illustrations.

Continuity requirements:

- Hubble should have the same recognizable shape across frames:
  a cylindrical silver telescope body, dark solar panels, and a reflective
  opening.
- If mission control appears, keep the same room style:
  realistic control desks, soft screen glow, scientists in modest professional
  clothing, no readable text.
- Endeavour and the robot-arm should appear only when the repair mission begins.
- The robot-arm action must be physically clear:
  it grabs and holds Hubble while astronauts repair it.
- The final frame should visibly contrast with the earlier disappointing
  pictures:
  clear stars and distant galaxies appear as beautiful space imagery on screens
  or around the telescope.

Avoid:

- random astronauts floating without connection to Hubble
- fantasy spaceships
- readable NASA logos or mission text
- dramatic explosions or disaster imagery
- images that imply Hubble is broken into pieces
- text boxes inside the illustration

## Visual Direction

Overall visual feel:

- Semi-realistic educational illustration.
- Warm, cinematic, and child-friendly.
- Accurate enough to support memory, but not technical-diagram heavy.
- Use deep space, earth horizon, mission-control light, and clear repair action.
- No in-image text.

The visual sequence should show:

1. a proud launch into space
2. the disappointment of blurry returned pictures
3. the repair mission with shuttle, robot-arm, and astronauts
4. the reward: clear stars and distant galaxies

## Character And Object Consistency Brief

Suggested storyboard-level `visual_consistency`:

`A consistent semi-realistic educational illustration style. The Hubble telescope is always the same object: a silver cylindrical space telescope with dark rectangular solar panels, a black circular front opening, subtle panel seams, and a calm metallic shine. Mission-control scientists, when shown, wear modest 1990s-inspired shirts and headsets in a realistic control room with no readable screen text. The shuttle Endeavour appears as a white space shuttle with no readable markings, carrying a segmented mechanical robot arm. Astronauts wear white EVA suits with gold visors and no readable patches. The mood moves from launch excitement, to quiet disappointment, to focused repair, to wonder at clear space images.`

Production should reuse this exact object wording inside each frame prompt.

## Four-Frame Storyboard Intent

### Frame 1: Launching Hubble Into Space

Purpose:

- Establish the big project and the scale.
- Show Hubble being sent into space by a launch vehicle or already separating in
  orbit.
- Create excitement before the problem appears.

Visual content:

- A rocket or deployment scene sending the Hubble telescope into orbit.
- Earth below, deep space above.
- Hubble's shape should be visible enough to carry forward.
- No readable labels or logos.

Teaching overlay outside image:

- `Hubble telescope`
- `was launched into space`
- `at a cost of over a billion dollars`

Avoid:

- too many technical labels
- fictional spacecraft
- an image that looks like a generic satellite instead of a telescope

### Frame 2: Disappointing Pictures And Faulty Mirror

Purpose:

- Show the problem.
- Make `disappointing` and `faulty` easy to understand.

Visual content:

- Mission-control scientists look at blurry star images on screens.
- A simple visual hint of Hubble's main mirror problem can appear as an inset or
  nearby non-text diagram-like object, but no labels.
- The mood is quiet surprise and concern, not panic.

Teaching overlay outside image:

- `The pictures were very disappointing`
- `because its main mirror was faulty`

Avoid:

- sad melodrama
- broken glass everywhere
- readable charts or screen words

### Frame 3: Endeavour Repairs Hubble

Purpose:

- Show the most memorable action: repair in space.
- Make `robot-arm`, `grab`, `hold`, and `repair` visible.

Visual content:

- The white shuttle Endeavour near Hubble in orbit.
- A mechanical robot-arm reaches from the shuttle and holds the telescope.
- Two or four astronauts in white suits work carefully near Hubble.
- Earth curve in background.

Teaching overlay outside image:

- `The shuttle Endeavour`
- `will be taking the astronauts`
- `A robot-arm will grab the telescope and hold it`
- `while the astronauts make the necessary repairs`

Avoid:

- action-movie danger
- loose tools flying everywhere
- unreadable clutter

### Frame 4: Clear Pictures Of The Universe

Purpose:

- Show the reward of repair.
- Connect `above the atmosphere` with clear pictures.

Visual content:

- Hubble in orbit above the glowing edge of earth's atmosphere.
- Clear stars and distant galaxies fill the sky.
- Scientists or a child looking at beautiful clear space images may appear in a
  blended classroom/control-room view, but keep it uncluttered.
- The mood is wonder and achievement.

Teaching overlay outside image:

- `above the earth's atmosphere`
- `the clearest pictures`
- `stars and distant galaxies`
- `the age and size of the universe`
- `eagle eye`

Avoid:

- fantasy planets dominating the image
- using planets when the text says stars and galaxies
- readable screens

## Script And Courseware Presentation

### Opening Script

- Keep it to 4-6 spoken lines.
- Mention only the core hook:
  expensive telescope, disappointing pictures, faulty mirror, repair in space.
- Do not pre-explain all vocabulary.
- Do not speak image-generation directions.

### Retell Frames

- Use Chinese-first anchors.
- Attach short English chunks after each anchor.
- Keep the story chronological.
- Make cause and result explicit:
  `because its main mirror was faulty` -> `so NASA will send up astronauts`.

### Teacher-Student Dialogue

- Use the dialogue to discuss `atmosphere`, repair, and `eagle eye`.
- Do not repeat the full retell.
- Keep the child voice natural:
  short answers, curious questions, occasional confusion about why a telescope
  in space would still need fixing.

### Vocabulary

- Three vocabulary blocks should group words by function:
  1. Space mission words: `telescope`, `launch`, `NASA`, `shuttle`, `astronaut`
  2. Problem and repair words: `trouble`, `disappointing`, `faulty`, `put right`,
     `repair`, `necessary`
  3. Universe and vision words: `atmosphere`, `distant`, `galaxy`, `universe`,
     `eagle eye`
- Keep definitions concrete and child-friendly.

### Grammar

- Present grammar through the mission timeline.
- Use a simple board rather than a dense tense table.
- Key idea:
  `past launch -> present repair plan -> future mission -> future completed result`.

### Passage Reading And Follow-Read

- The karaoke passage page should keep its guidance clear:
  the student can click a sentence to hear only that sentence.
- Follow-read should remain part of the course flow.
- The final course-flow page should include the follow-read step:
  `跟读：听课文全文 -> 听原音 -> 录一句 -> 获取反馈`.

## Read-Aloud And Pronunciation Direction

Create 5-8 guided sentences for `web/data/read_aloud/lesson_61.json`.

Prioritize:

- `The Hubble telescope was launched into space by NASA.`
- `Right from the start there was trouble with the Hubble.`
- `The pictures it sent us were very disappointing because its main mirror was faulty.`
- `NASA is now going to put the telescope right.`
- `The shuttle Endeavour will be taking the astronauts to the Hubble.`
- `A robot-arm from the Endeavour will grab the telescope and hold it.`
- `The Hubble is above the earth's atmosphere.`
- `The Hubble's eagle eye will have sent us thousands and thousands of wonderful pictures.`

Pronunciation notes:

- `Hubble`: keep short and clear; do not overpronounce.
- `NASA`: can be pronounced as the common acronym, but Chinese explanation may
  say `美国国家航空航天局`.
- `telescope`: stress the first syllable.
- `Endeavour`: proper name; give a friendly pronunciation hint if needed.
- `astronaut`: break into manageable syllables.
- `atmosphere`: avoid turning it into a long technical obstacle.
- `galaxies`: plural; help the child hear the ending.
- `will have sent`: link naturally as one future-perfect phrase.

Feedback style:

- Encourage clear rhythm in long technical sentences.
- Do not punish the child heavily for proper-name pronunciation.
- Praise complete sentence shape and key word clarity.

## Living-Scene Exercise Direction

The living-scene exercise should transfer the lesson into a modern repair
scenario.

Recommended setting:

`A school science club has built a small telescope camera for a science night. It is expensive for the club and everyone is excited, but the first moon pictures are blurry because the lens is faulty. The students put the camera right, and by the time parents arrive, it will have sent clear pictures to the classroom screen.`

Why this works:

- It keeps the Hubble pattern but scales it down to a child's world.
- It naturally uses:
  `telescope`, `faulty`, `put ... right`, `repair`, `clear pictures`,
  `by the time`, `will have sent`.
- It avoids a space-agency lecture while preserving the core grammar and
  emotional arc.

Possible roles:

- Teacher or science-club mentor
- Student helper
- Classmate checking the blurry pictures
- Parent arriving for science night

Target language:

- `The camera was set up for science night.`
- `The first pictures were disappointing.`
- `The lens was faulty.`
- `We are going to put it right.`
- `By the time the parents arrive, it will have sent clear pictures.`

## Suggested You Too Scene

Scene title:

`Science Night Telescope`

Scene premise:

`You and your classmate are preparing a small telescope camera for science night. The first pictures are blurry. You find that the lens is faulty, fix it, and explain what will happen by the time the parents arrive.`

Dialogue goals:

- identify the problem
- explain why the pictures are disappointing
- say what you are going to repair
- predict the result by a future time

Suggested exchanges:

1. Student A:
   `The first pictures are disappointing.`
2. Student B:
   `Maybe the lens is faulty.`
3. Student A:
   `Let's put it right before science night starts.`
4. Student B:
   `By the time the parents arrive, it will have sent clear pictures.`

Keep the exercise practical and reassuring. The child should feel that mistakes
can be diagnosed and repaired.

## Extension Practice Direction

Lesson 61 extension production should be extension-only if the main lesson
assets already exist. Create `web/data/extension/lesson_61.json` and register
`61` in `web/data/extension/index.json`. Do not regenerate script, audio,
timeline, read-aloud data, or storyboard images.

### Extension Reading

Use an original science-club telescope, school observatory, or camera-repair
passage. The first pictures are disappointing, a lens or mirror is faulty,
students or volunteers plan a repair, and by a future time the device will have
sent clearer pictures. Keep Hubble as the background inspiration, but do not
retell NASA, Endeavour, robot-arm, or space-repair details.

Suggested title: `The Blurry Telescope`

Recommended word bank: `telescope`, `launch`, `at a cost of`,
`right from the start`, `disappointing`, `faulty`, `put right`, `repair team`,
`repair`, `by the time`.

The 5 reading questions should test:

1. what device had a problem
2. why the pictures were disappointing
3. what part was faulty
4. how the repair would be made by the repair team
5. what clear result was expected by a future time

### Sentence Writing

Use 5 patterns:

1. `was launched ... by ...`
   - Source: `The Hubble telescope was launched into space by NASA.`
   - Focus: passive action with agent.
   - Must include: `was launched` and `by`
2. `Right from the start, ...`
   - Source: `Right from the start there was trouble with the Hubble.`
   - Focus: trouble beginning immediately.
   - Must include: `Right from the start`
3. `because ... was faulty`
   - Source: `The pictures it sent us were very disappointing because its main mirror was faulty.`
   - Focus: explaining the technical cause.
   - Must include: `because` and `was faulty`
4. `is going to put ... right`
   - Source: `NASA is now going to put the telescope right.`
   - Focus: repair plan.
   - Must include: `is going to put` and `right`
5. `By the time ..., ... will have ...`
   - Source: `By the time you read this, the Hubble's eagle eye will have sent us thousands...`
   - Focus: future perfect by a later moment.
   - Must include: `By the time` and `will have`

## Chinese-To-English Exercise Direction

If production creates guided translation prompts inside lesson-local materials,
use meaning chunks that mirror the repair chain.

Suggested chunking:

1. 哈勃望远镜由 NASA 发射到太空，花费超过十亿美元。
   - `The Hubble telescope was launched into space by NASA at a cost of over a billion dollars.`
2. 从一开始它就有问题，因为主镜有缺陷，传回来的照片令人失望。
   - `Right from the start there was trouble with the Hubble because its main mirror was faulty and the pictures were disappointing.`
3. NASA 准备派宇航员乘奋进号去维修它，机械臂会抓住并托住望远镜。
   - `NASA is going to send up astronauts on the shuttle Endeavour to repair it, and a robot-arm will grab and hold the telescope.`
4. 因为哈勃在地球大气层外，它会传回我们见过最清晰的恒星和遥远星系照片。
   - `Because the Hubble is above the earth's atmosphere, it will send us the clearest pictures of the stars and distant galaxies that we have ever seen.`
5. 等你读到这篇时，它敏锐的眼睛已经送回成千上万张精彩照片。
   - `By the time you read this, the Hubble's eagle eye will have sent us thousands and thousands of wonderful pictures.`

Do not edit `web/data/lessons.json` just to add chunks unless the user explicitly
asks for a shared-data update.

## Grammar Board

### 1. Passive Voice

Pattern:

`be + past participle`

Example:

`The Hubble telescope was launched into space by NASA.`

Student explanation:

`重点放在 telescope 身上，所以说它 was launched。`

### 2. Cost Phrase

Pattern:

`at a cost of + amount`

Example:

`at a cost of over a billion dollars`

Student explanation:

`这是一种新闻报道式表达，说明这个项目非常昂贵。`

### 3. Cause And Result

Patterns:

`because + reason`

`so + result`

Examples:

- `because its main mirror was faulty`
- `so it will soon be sending up four astronauts`

Student explanation:

`先找 cause，再找 result，课文顺序就清楚了。`

### 4. Future Plan

Patterns:

`be going to + verb`

`will be + doing`

Examples:

- `NASA is now going to put the telescope right.`
- `The shuttle Endeavour will be taking the astronauts to the Hubble.`

Student explanation:

`这些 future forms 都在说明一个即将展开的维修任务。`

### 5. `while`

Pattern:

`one action + while + another action`

Example:

`A robot-arm will grab the telescope and hold it while the astronauts make the necessary repairs.`

Student explanation:

`robot-arm 托住，astronauts 维修，两件事同时发生。`

### 6. Superlative And Experience

Pattern:

`the + superlative + noun + that we have ever seen`

Example:

`the clearest pictures of the stars and distant galaxies that we have ever seen`

Student explanation:

`这是“到目前为止见过最清楚的”的说法。`

### 7. Future Perfect

Pattern:

`By the time + present tense, will have + past participle`

Example:

`By the time you read this, the Hubble's eagle eye will have sent us thousands and thousands of wonderful pictures.`

Student explanation:

`到你读到这篇文章那个时间点，这件事已经完成了，所以用 will have sent。`

### 8. Metaphor

Expression:

`eagle eye`

Student explanation:

`eagle eye 不是说哈勃真的有鹰的眼睛，而是说它看得特别清楚。`

## Final Page / Course Flow Reminder

The final page should list the complete course flow in the current product
style and include the follow-read step.

Recommended flow:

1. `跟读：听课文全文 -> 听原音 -> 录一句 -> 获取反馈`
2. `生活场景`
3. `完形填空`
4. `中译英`
5. `英译中`
6. `默写`

Make the first item wide enough so the full follow-read wording does not feel
cramped on desktop or mobile.

## Acceptance Criteria

- The extension practice follows the `Extension Practice Direction` above,
  creates `web/data/extension/lesson_61.json`, and registers the lesson in
  `web/data/extension/index.json`.
- `lesson_plans/lesson_061.md` is the production source of truth for Lesson 61.
- The root `LESSON_PRODUCTION_PLAN.md` index includes Lesson 61 and points the
  future placeholder to Lesson 62.
- The opening hook is short and does not retell the whole passage.
- The four retell frames use Chinese-first anchors with English chunks.
- The teacher-student dialogue discusses atmosphere, repair, and `eagle eye`
  without repeating the full story.
- The storyboard keeps the Hubble telescope visually consistent across all four
  frames.
- The storyboard images are text-free.
- The script does not contain image prompt wording.
- The plan warns production about `April 20,1990` and the Chinese `stars`
  translation issue without silently editing shared data.
- The final course-flow page includes the follow-read step.
