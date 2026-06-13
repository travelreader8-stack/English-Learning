# Lesson 53 Plan - Hot snake

This is the source-of-truth design card for producing Lesson 53. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 53 assets.

## Basic Info

- Lesson: 53
- Title: `Hot snake`
- Chinese title: `触电的蛇`
- Core bridge: `这一课不要讲成“蛇的恐怖故事”，而要讲成一篇火灾调查的小侦探故事。火已经扑灭，但真正的问题才开始：到底是什么引起了森林大火？消防员先排除常见原因：碎玻璃、烟头；最后发现一个非常少见但逻辑完整的因果链：鸟抓蛇、蛇落到高压线、蛇缠住电线、火花落地、引起火灾。孩子要先抓住“调查原因”和“因果链推理”，再背英文。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule.

- Keep the opening hook short.
  - Use 4-6 spoken lines only.
  - The hook should set up the fire-investigation mystery.
  - Do not retell the whole passage before the four `retell` frames.
  - Put the full plot sequence into the frame-by-frame retell section.
- Story spine must be Chinese-first.
  - Present the investigation chain first as Chinese scene anchors.
  - Attach short English chunks after each Chinese anchor.
  - Do not use an all-English arrow chain as the main student-facing memory
    path.
- Generated illustrations must be text-free.
  - No readable English or Chinese text inside images.
  - No fire-warning signs, voltage labels, newspaper titles, captions, speech
    bubbles, UI panels, or fake lesson text inside images.
  - If the courseware needs labels such as `cause`, `mystery`, or `spark`, put
    them in real UI text outside the image.
- Keep the high-voltage scene safe and non-graphic.
  - Do not show anyone touching wires.
  - Do not encourage children to inspect power lines or damaged cables.
  - The firefighter observes from a safe distance.
  - Show the snake remains gently and indirectly, never as a graphic close-up.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, camera directions,
    or generated-image mechanics.
  - Storyboard prompts must not leak into spoken lesson content.
- Treat the lesson as an investigation story.
  - The emotional center is curiosity and logical reconstruction.
  - The snake is part of the evidence chain, not a horror object.

## Production Warnings

- Source-text issue:
  - The current lesson data contains `a firemen accidentally discovered the
    cause`.
  - Standard singular grammar should be `a fireman`.
  - Modern neutral English often says `a firefighter`.
  - Because changing the passage data would touch `web/data/lessons.json`, a
    production thread should not silently edit the shared lesson text. If a
    source correction is required for the displayed passage or passage audio,
    stop and ask for approval.
  - In teacher explanation, it is fine to say: `课文里的 firemen 是旧教材说法，现代英语里更常说 firefighters；单数应是 a fireman / a firefighter。`
- `firemen` is an older gendered word.
  - Teach it as the textbook word.
  - Lightly connect it to modern `firefighters`.
  - Do not turn this into a long culture lecture.
- `Hot snake` is not simply "a warm snake".
  - Here `hot` points toward electricity, live wires, high voltage, and sparks.
  - Child-facing explanation: `这条蛇不是热得发烫，而是跟高压电线有关，所以 hot 有带电、触电、危险的感觉。`
- `wound` is a likely confusion point.
  - In this lesson, `was wound round` and `wound itself round` come from the
    verb `wind`, meaning curl/twist around.
  - It is not the noun `wound` meaning an injury.
  - Pronunciation differs from the injury word; make this explicit in teaching.
- `remains` should be handled gently.
  - Explain as "what was left after the event".
  - Avoid graphic animal language.
- California and forest fires:
  - Children may know California only as a faraway place in the United States.
  - Briefly explain that California has large natural areas and forest fires can
    happen there.
  - Do not make this a current-events wildfire lecture.
- Electricity safety boundary:
  - High-voltage power lines are extremely dangerous.
  - The story is for understanding cause and effect, not for trying anything.
  - Student-facing safety line can be short: `看到电线、火花或掉落的电缆，一定远离并找大人。`

If production requires editing `web/data/lessons.json`, stop and ask for a
shared-data edit because it is outside the normal per-lesson write set.

## Lesson Positioning

Lesson 53 is a cause-chain mystery. At first the fire seems ordinary: a big
forest fire in California has finally been put out. The firefighters then try to
find out how it began. The usual suspects are broken glass and cigarette ends,
but the ground investigation rules them out. Then one firefighter finds a
strange clue: the remains of a snake wound round the electric wires of a
16,000-volt power line. That clue solves the mystery. A bird had snatched up the
snake, dropped it onto the wires, the snake wound itself round the wires, sparks
fell to the ground, and the sparks started the fire.

The courseware should make the student understand:

`大火终于扑灭 -> 消防员继续调查原因 -> 常见原因是碎玻璃和烟头 -> 地上没有碎玻璃 -> 也不是烟头 -> 一个消防员偶然发现线索 -> 高压线上有蛇的遗骸 -> 谜团解开 -> 鸟抓起蛇 -> 蛇掉到电线上 -> 蛇缠住电线 -> 火花落到地面 -> 引起大火`

The central bridge is:

`这不是“背一个奇怪新闻”，而是学习如何用英语把一个原因一步步查出来、排除错误原因、最后重建真正的因果链。`

## One-Sentence Hook

A forest fire is out, but the firefighters still have to solve a mystery: what
started it?

## Vivid Teaching Opening

The opening should establish the mystery quickly. It must be a short hook, not a
complete plot retelling. Keep it to 4-6 spoken lines so the first visual does
not stay on screen too long before the frame-by-frame retell begins.

Suggested teacher narration:

`火已经扑灭了，但故事还没结束。`

`消防员接下来要做一件像侦探一样的事：find out how the fire began。`

`他们先排除最常见的原因，比如 broken glass 和 cigarette ends。`

`最后，真正的线索竟然在高压线上：a hot snake。`

`今天我们不是记一个吓人的故事，而是记一条清楚的 cause chain。`

Tone:

- Curious, clear, and slightly suspenseful.
- Avoid horror.
- Make the student feel they are solving a mystery.
- Save the detailed sequence for the four `retell` frames.

## Story Focus

The investigation chain is:

1. Firefighters have finally put out a big forest fire in California.
2. Since then, they have been trying to find out how the fire began.
3. Forest fires are often caused by broken glass or cigarette ends.
4. People sometimes carelessly throw cigarette ends away.
5. The firefighters examine the ground carefully.
6. They cannot find any broken glass.
7. They are quite sure a cigarette end did not start the fire.
8. One firefighter accidentally discovers the cause.
9. He notices the remains of a snake.
10. The snake is wound round the electric wires of a 16,000-volt power line.
11. This solves the mystery.
12. A bird had snatched up the snake from the ground.
13. The bird dropped it onto the wires.
14. The snake wound itself round the wires.
15. Sparks went down to the ground.
16. The sparks immediately started a fire.

The production should make the contrast visible:

`常见原因` versus `真正原因`.

`地面调查` versus `高压线上的奇怪线索`.

## Chinese-First Story Spine For Courseware

Use this as the main student-facing story line.

1. 消防员终于扑灭了一场加利福尼亚森林大火
   - `At last firemen have put out`
   - `a big forest fire in California`
2. 从那以后，他们一直在查火是怎么烧起来的
   - `Since then`
   - `they have been trying to find out`
   - `how the fire began`
3. 森林火灾常常由碎玻璃或烟头引起
   - `Forest fires are often caused by`
   - `broken glass`
   - `cigarette ends`
4. 昨天，他们仔细检查地面
   - `Yesterday`
   - `examined the ground carefully`
5. 但是没有找到碎玻璃
   - `were not able to find`
   - `any broken glass`
6. 他们也很确定，不是烟头引起的
   - `were also quite sure`
   - `a cigarette end did not start the fire`
7. 今天上午，一个消防员偶然发现了原因
   - `This morning, however`
   - `accidentally discovered the cause`
8. 他发现一条蛇的遗骸缠在电线上
   - `noticed the remains of a snake`
   - `which was wound round the electric wires`
9. 那是 16,000 伏的高压电线
   - `a 16,000-volt power line`
10. 就这样，他解开了谜团
    - `In this way`
    - `solve the mystery`
11. 解释很简单，但非常少见
    - `The explanation was simple`
    - `but very unusual`
12. 一只鸟从地上抓起了蛇
    - `A bird had snatched up the snake`
    - `from the ground`
13. 然后把它扔到了电线上
    - `dropped it on to the wires`
14. 蛇缠住了电线
    - `wound itself round the wires`
15. 这样一来，火花落到地上
    - `When it did so`
    - `sent sparks down to the ground`
16. 火花立刻引起了火灾
    - `these immediately started a fire`

Student memory prompt:

`先记中文侦探线：火灭了 -> 查原因 -> 常见原因是碎玻璃和烟头 -> 都排除了 -> 高压线上发现蛇 -> 鸟抓蛇 -> 蛇落到电线 -> 缠住电线 -> 火花落地 -> 引起火灾。再把英文短语挂到每个原因节点上。`

Do not show this as an all-English arrow chain in the student-facing courseware.

## Recitation Blocks

Break the passage into four Chinese-first recitation blocks:

### Block 1: 火灭了，但还要查原因

Chinese anchor:

`消防员终于扑灭了加利福尼亚的一场森林大火；从那以后，他们一直在查火是怎么烧起来的。`

English chunks:

- `At last firemen have put out`
- `a big forest fire in California`
- `Since then`
- `they have been trying to find out`
- `how the fire began`

Teaching point:

- This block contrasts present perfect and present perfect continuous.
- `have put out` gives the result: the fire is out.
- `have been trying to find out` gives the ongoing investigation.

### Block 2: 排除常见原因

Chinese anchor:

`森林火灾常常由碎玻璃或随手扔掉的烟头引起；他们仔细检查地面，却没有找到碎玻璃，也很确定不是烟头。`

English chunks:

- `are often caused by`
- `broken glass`
- `cigarette ends`
- `people carelessly throw away`
- `examined the ground carefully`
- `were not able to find`
- `quite sure`
- `did not start the fire`

Teaching point:

- This block teaches passive cause: `are caused by`.
- It also teaches investigation language: examine, rule out, be sure.

### Block 3: 奇怪线索出现

Chinese anchor:

`今天上午，一个消防员偶然发现了原因：他看到一条蛇的遗骸缠在 16,000 伏高压线的电线上。`

English chunks:

- `This morning, however`
- `accidentally discovered the cause`
- `noticed the remains of a snake`
- `which was wound round`
- `the electric wires`
- `a 16,000-volt power line`
- `solve the mystery`

Teaching point:

- This block is the mystery reveal.
- Teach `remains` gently.
- Teach `wound round` as the past form of `wind round`.
- Explain `16,000-volt power line` as dangerous high voltage.

### Block 4: 还原真正的因果链

Chinese anchor:

`解释很简单但很反常：鸟抓起蛇，把它掉到电线上；蛇缠住电线，火花落到地面，立刻引起火灾。`

English chunks:

- `simple but very unusual`
- `snatched up the snake`
- `dropped it on to the wires`
- `wound itself round the wires`
- `sent sparks down to the ground`
- `immediately started a fire`

Teaching point:

- This block is a chain of action verbs.
- The student should feel the sequence, not memorize isolated words.
- Emphasize how English can rebuild a cause step by step.

## Fire Investigation Bridge

For a modern child, the strongest bridge is "investigation after an accident".
The child may not know forestry, power lines, or fire investigation, but they
understand the question:

`事情已经发生了，可是为什么会发生？`

Teach the text like a detective board:

- What happened?
  - A big forest fire happened.
- What do people usually suspect?
  - Broken glass or cigarette ends.
- What evidence did the firefighters check?
  - The ground.
- What did they rule out?
  - No broken glass, not a cigarette end.
- What strange clue appeared?
  - Snake remains on a power line.
- What was the real chain?
  - Bird -> snake -> wires -> sparks -> fire.

This structure will help the student remember the passage as logic instead of
as disconnected facts.

## California And Forest Fire Bridge

Do not spend too long on geography. The student only needs a small, usable
picture:

- California is a state in the western United States.
- It has cities, mountains, dry areas, forests, and natural landscapes.
- In dry places, fire can spread quickly.
- The lesson is not trying to explain all modern wildfire causes; it uses one
  unusual story to teach cause and effect.

Suggested child-facing line:

`California 是美国西部的一个州，有很多自然地貌。这里我们不用上地理课，只要知道：森林火灾一旦发生，消防员不仅要灭火，还要查清楚原因。`

## Power Line Safety Bridge

The lesson includes `electric wires`, `16,000-volt`, and `power line`. These
need a short, firm safety boundary.

Student-facing explanation:

`power line 是输电线路，不是家里普通的小电线。16,000-volt 表示非常高的电压。故事里消防员能判断线索，但孩子不能靠近电线、火花、掉落电缆或看起来坏掉的充电线。`

Keep it short. The main lesson is still language, not electrical engineering.

## Title And Word Choice Bridge

### `Hot snake`

Teach the title as a compact joke/mystery title:

- `hot` can mean physically hot.
- In this title, it also hints at electricity, danger, and sparks.
- The snake is "hot" because it ends up connected with a live power line.

Child-facing wording:

`标题 Hot snake 很短，但很会制造悬念。hot 不是说蛇像热水一样烫，而是暗示它和高压电、火花、起火有关。`

### `firemen` / `firefighter`

Teach without overloading:

- `firemen` is the textbook word.
- Singular is `fireman`.
- Modern neutral English often uses `firefighter`.

Suggested line:

`课文里用 firemen，这是老教材常见说法。现在很多场合会说 firefighters，因为消防员可以是男性，也可以是女性。`

## Main Language Focus

### Present Perfect: `have put out`

Core sentence:

`At last firemen have put out a big forest fire in California.`

Teaching:

- The fire is now out.
- The result matters now.
- `At last` gives a feeling of relief after effort.

Child-facing contrast:

`不是只说他们昨天灭过火，而是说：终于灭掉了，现在进入下一步调查。`

### Present Perfect Continuous: `have been trying to find out`

Core sentence:

`Since then, they have been trying to find out how the fire began.`

Teaching:

- `Since then` starts from a past point.
- `have been trying` shows the effort continued for a period of time.
- The action is not just one moment; they have been working on the question.

### Passive Cause: `are often caused by`

Core sentence:

`Forest fires are often caused by broken glass or by cigarette ends...`

Teaching:

- This is a cause structure.
- The focus is on forest fires and their causes.
- `by` introduces the cause.

Transfer:

- `The problem was caused by...`
- `The accident was caused by...`
- `The noise was caused by...`

### Investigation Language

Teach these as one semantic group:

- `find out`
- `cause`
- `examine`
- `be not able to find`
- `be quite sure`
- `accidentally discover`
- `solve the mystery`

Student-facing idea:

`这一组词不是普通单词表，而是一套侦探英语：查原因、检查证据、排除可能、发现线索、解开谜团。`

### Relative Clause: `which was wound round...`

Core phrase:

`the remains of a snake which was wound round the electric wires`

Teaching:

- `which...` tells us more about the snake.
- It answers: what kind of snake remains? Where were they?
- The clause carries the key evidence.

Do not over-grammarize. The student mainly needs to understand how this phrase
packs the clue into one sentence.

### Cause-Chain Verbs

Teach as motion sequence:

- `snatched up`
- `dropped`
- `wound itself round`
- `sent sparks down`
- `started a fire`

Student-facing idea:

`这些动词像电影镜头一样，一个动作推着下一个动作走。背这一段时，不要一个词一个词背，要按动作顺序背。`

## Vocabulary Plan

Prioritize vocabulary that supports investigation and cause-chain memory.

### `put out`

- Meaning: extinguish a fire.
- Do not translate only as "put something outside".
- Student phrase: `put out a fire`.

### `cause`

- Meaning: reason that makes something happen.
- Use as noun and verb if helpful.
- Example: `What caused the fire?` / `the cause of the fire`.

### `find out`

- Meaning: discover information after trying.
- Different from simply `find` an object.
- In this lesson: find out how the fire began.

### `broken glass`

- Meaning: pieces of glass after something breaks.
- Explain why it appears in the passage only lightly.
- It is one possible "usual suspect" in the story logic.

### `cigarette ends`

- Meaning: the small leftover part of a cigarette.
- Make the carelessness clear: `people carelessly throw away`.
- Do not turn this into a smoking lecture; connect it to fire risk.

### `examine`

- Meaning: look at something carefully to understand it.
- Stronger than just `look at`.
- Pair with `carefully`.

### `accidentally`

- Meaning: by chance, not planned.
- Useful adverb; connect to `discovered`.
- Chinese anchor: `偶然地`.

### `remains`

- Meaning: what is left after something is gone, damaged, or dead.
- In this lesson, explain gently.
- Do not use graphic visuals.

### `wire`

- Meaning: metal line that carries electricity or signal.
- In the story, use with `electric wires`.
- Safety boundary: do not touch unknown wires.

### `volt`

- Meaning: a unit for electric pressure/voltage.
- Student does not need technical detail.
- `16,000-volt` means very high voltage and very dangerous.

### `power line`

- Meaning: large line that carries electricity over distance.
- Not a phone charger cable.
- Link to the visual of tall utility poles or towers.

### `solve`

- Meaning: find the answer to a problem or mystery.
- Pair with `mystery`.
- Useful phrase: `solve the mystery`.

### `mystery`

- Meaning: something unexplained.
- This is the narrative engine of the lesson.
- Use it to frame the whole passage.

### `snatch`

- Meaning: grab something quickly.
- In the text: `snatched up the snake`.
- Make the bird action vivid but not frightening.

### `spark`

- Meaning: tiny flash of fire/electricity.
- In the text, sparks fall to the ground and start the fire.
- Show visually as small bright flashes, not huge explosions.

### `immediately`

- Meaning: right away.
- This adverb makes the final cause feel fast.
- Pair with `started a fire`.

### `wound`

- In this text, past tense/past participle of `wind`.
- Meaning: twisted or curled around something.
- Pronunciation and meaning differ from `wound` as an injury.
- This is a must-teach word in read-aloud and vocabulary explanation.

## Visual Direction

Overall visual style:

- Realistic, warm, child-friendly educational illustration.
- Slight mystery-story feeling, but not dark or frightening.
- No graphic animal detail.
- No text inside images.
- No UI boxes, captions, or labels inside images.
- Use the same firefighter protagonist across all four frames.

The visuals should help the student remember:

`fire out -> investigate ground -> discover power-line clue -> reconstruct cause chain`.

Avoid:

- dramatic disaster spectacle
- burning animals
- close-up dead snake imagery
- children near wires
- firefighters touching high-voltage wires
- readable signs or labels
- comic speech bubbles

## Character Consistency Brief

Use a consistent firefighter protagonist:

`A calm adult firefighter investigator in protective yellow wildfire jacket and dark trousers, white helmet with no readable text, medium build, focused but gentle expression, carrying a small field notebook and flashlight, always observing safely from a distance.`

Supporting elements:

- A quiet forest edge in California after a fire has been put out.
- Charred ground should be visible but not overwhelming.
- Other firefighters may appear in the background, but the same protagonist
  should anchor the frames.
- The bird and snake appear as part of the reconstructed cause chain, not as
  horror imagery.

## Four-Frame Storyboard Intent

### Frame 1: Fire Out, Mystery Begins

Purpose:

- Show that the fire has been put out.
- Establish relief plus unanswered question.

Visual:

- The firefighter protagonist stands at the edge of a recently burned forest.
- Light smoke remains in the distance, no active dramatic flames.
- Fire truck or hose in background, no readable text.
- Mood: calm after hard work.

Teaching content:

- `At last firemen have put out...`
- `Since then... trying to find out...`

### Frame 2: Ground Investigation Rules Out Usual Causes

Purpose:

- Show careful examination of the ground.
- Make broken glass and cigarette ends feel like "usual suspects".

Visual:

- The same firefighter kneels or bends safely to examine the ground.
- A small flashlight or evidence marker shape may appear, but no text.
- The composition should suggest searching carefully and finding nothing
  obvious.
- Avoid readable labels.

Teaching content:

- `broken glass`
- `cigarette ends`
- `examined the ground carefully`
- `were not able to find`
- `quite sure`

### Frame 3: The Strange Power-Line Clue

Purpose:

- Reveal the unusual evidence without graphic detail.
- Make high voltage feel dangerous and distant.

Visual:

- The firefighter observes a power line from a safe distance.
- A small dark coil-like shape is visible on the wire, treated as distant
  evidence, not a close-up.
- Utility poles or power lines are visible.
- The firefighter does not touch anything.

Teaching content:

- `accidentally discovered the cause`
- `remains of a snake`
- `wound round the electric wires`
- `16,000-volt power line`
- `solve the mystery`

### Frame 4: Reconstructed Cause Chain

Purpose:

- Show the explanation: bird, snake, wire, sparks, fire.
- Make the final cause-chain memorable.

Visual:

- Use a clean reconstructed scene.
- A bird in the sky carries or drops a snake toward power lines.
- Small sparks fall toward dry ground in a stylized, non-explosive way.
- The same firefighter may be shown in the foreground imagining or pointing
  toward the sequence, but no speech bubble or text.

Teaching content:

- `snatched up`
- `dropped it on to the wires`
- `wound itself round`
- `sent sparks down`
- `immediately started a fire`

## Script And Courseware Presentation

The script should follow this pacing:

1. Short hook: mystery setup only.
2. Four `retell` frames:
   - Frame 1: fire out and investigation begins.
   - Frame 2: usual causes ruled out.
   - Frame 3: strange clue on the power line.
   - Frame 4: bird-snake-wire-spark chain.
3. Discussion:
   - `firemen` vs `firefighters`.
   - `Hot snake` title.
   - high-voltage safety boundary.
4. Passage normal reading.
5. Three vocabulary blocks.
6. Grammar board.
7. You Too living-scene transfer.
8. Outro with the full practice order.

The opening must not contain the full story chain. Do not say all of:

`鸟抓蛇 -> 蛇掉电线 -> 蛇缠电线 -> 火花落地 -> 起火`

inside the hook. Save that reveal for Frame 4.

Student-facing Chinese should feel like a guided detective reconstruction:

- `先看发生了什么。`
- `再看他们怀疑什么。`
- `然后看他们排除了什么。`
- `最后看真正的原因链。`

## Read-Aloud And Pronunciation Direction

Choose 5-8 high-value sentences for read-aloud. Suggested targets:

1. `At last firemen have put out a big forest fire in California.`
   - Focus: `At last`, `have put out`, sentence rhythm.
2. `Since then, they have been trying to find out how the fire began.`
   - Focus: present perfect continuous, linking in `find out`.
3. `Forest fires are often caused by broken glass or by cigarette ends which people carelessly throw away.`
   - Focus: passive `are often caused by`, long sentence chunking.
4. `Yesterday the firemen examined the ground carefully, but were not able to find any broken glass.`
   - Focus: `examined`, `carefully`, contrast after `but`.
5. `This morning, however, a fireman accidentally discovered the cause.`
   - Focus: `however`, `accidentally discovered`.
   - Note: if passage text remains uncorrected in shared data, production must
     decide with user approval how to handle the displayed `a firemen` typo.
6. `He noticed the remains of a snake which was wound round the electric wires of a 16,000-volt power line.`
   - Focus: `remains`, `wound round`, `electric wires`, `16,000-volt`.
7. `A bird had snatched up the snake from the ground and then dropped it on to the wires.`
   - Focus: `had snatched up`, `dropped it on to`.
8. `When it did so, it sent sparks down to the ground and these immediately started a fire.`
   - Focus: `sent sparks down`, `immediately`.

Read-aloud feedback should reward:

- clear cause-chain grouping
- correct stress on investigation words
- not rushing the long power-line sentence
- correct pronunciation of `wound` as `wind` past tense in this text

## Living-Scene Exercise Direction

The living-scene transfer should avoid dangerous electricity. Use the same
investigation language in a safe everyday mystery.

Recommended scene:

`The Mystery of the Wet Backpack`

Chinese setup:

`孩子回家发现书包里面湿了。大家一开始怀疑是下雨、杯子洒了、或者书包放在潮湿的地方。后来他仔细检查，发现水瓶盖没有拧紧。这样他就解开了谜团。`

Target transfer:

- `try to find out`
- `cause`
- `examine carefully`
- `not able to find`
- `quite sure`
- `accidentally discover`
- `solve the mystery`
- `was caused by`

This keeps the lesson's investigation pattern while avoiding unsafe imitation of
power-line inspection.

## Suggested You Too Scene

Scene title:

`The Wet Backpack Mystery`

Role:

- Student tells a short investigation story about a wet backpack.
- Parent/teacher asks guiding questions.

Expected student output shape:

1. `At last, I found out why my backpack was wet.`
2. `At first, I thought it was caused by rain.`
3. `I examined the books carefully.`
4. `I was not able to find any rainwater on the outside.`
5. `Then I accidentally discovered the cause.`
6. `My water bottle was not closed properly.`
7. `In this way, I solved the mystery.`

Keep the exercise short. The goal is transfer of investigation language, not a
new long story.

## Extension Practice Direction

Lesson 53 extension production should be extension-only if the main lesson
assets already exist. Create `web/data/extension/lesson_53.json` and register
`53` in `web/data/extension/index.json`. Do not regenerate script, audio,
timeline, read-aloud data, or storyboard images.

### Extension Reading

Use an original same-theme short passage about a harmless mystery and a logical
investigation. Do not retell the forest fire, broken glass, cigarette ends,
snake, bird, or power-line chain. A safe modern bridge can be a wet backpack, a
strange classroom smell after lunch, or a broken charger case: common causes are
checked first, expected evidence is not found, and an unusual but simple cause
is discovered.

Suggested title: `The Wet Backpack Mystery`

Recommended word bank: `at last`, `find out`, `cause`, `carelessly`, `examine`,
`quite sure`, `accidentally`, `in this way`, `explanation`, `evidence`.

The 5 reading questions should test:

1. what mystery was being investigated
2. what common causes were checked first
3. what evidence was not found
4. what unusual cause was discovered
5. how the mystery was solved logically

### Sentence Writing

Use 5 patterns:

1. `At last, ...`
   - Source: `At last firemen have put out a big forest fire.`
   - Focus: relief after a long problem.
   - Must include: `At last`
2. `Since then, ... have been trying to ...`
   - Source: `Since then, they have been trying to find out how the fire began.`
   - Focus: ongoing investigation since a point in time.
   - Must include: `Since then` and `have been trying to`
3. `are often caused by ...`
   - Source: `Forest fires are often caused by broken glass or by cigarette ends.`
   - Focus: passive cause.
   - Must include: `are often caused by`
4. `were not able to find ...`
   - Source: `They were not able to find any broken glass.`
   - Focus: failure to find evidence.
   - Must include: `were not able to find`
5. `In this way, ... solved the mystery`
   - Source: `In this way, he was able to solve the mystery.`
   - Focus: explaining how a mystery was solved.
   - Must include: `In this way` and `mystery`

## Chinese-To-English Exercise Direction

The translation practice should reinforce meaning chunks, not word-for-word
translation only.

Suggested chunk logic:

1. 火已经扑灭；从那以后一直在调查原因。
2. 常见原因是碎玻璃和烟头；他们仔细检查后排除了这些。
3. 一个消防员偶然发现蛇缠在 16,000 伏高压线上。
4. 鸟抓蛇、蛇落线、火花落地，立刻引起火灾。

High-value expressions to preserve:

- `At last`
- `have put out`
- `Since then`
- `have been trying to find out`
- `are often caused by`
- `examined the ground carefully`
- `accidentally discovered the cause`
- `the remains of a snake`
- `was wound round`
- `solve the mystery`
- `snatched up`
- `sent sparks down`
- `immediately started a fire`

If manual chunks are added to `web/data/lessons.json`, Chinese and English chunk
counts must match. Otherwise rely on the frontend fallback.

## Grammar Board

### 1. `have put out`

Board idea:

`have + past participle = result now`

Example:

- `Firemen have put out the fire.`
- Result: the fire is out now.

### 2. `have been trying`

Board idea:

`have been + V-ing = from then until now / for a period`

Example:

- `They have been trying to find out the cause.`

### 3. `are caused by`

Board idea:

`result + be caused by + cause`

Examples:

- `Forest fires are often caused by broken glass.`
- `The wet backpack was caused by an open water bottle.`

### 4. Investigation Words

Board cluster:

- `find out`
- `examine`
- `discover`
- `solve`

Chinese anchor:

`查清楚 -> 仔细检查 -> 发现 -> 解开`

### 5. `which was wound round...`

Board idea:

`which...` adds the key clue.

Example:

- `a snake which was wound round the electric wires`

Keep explanation practical. Avoid a long relative-clause lecture.

### 6. Past Perfect In The Explanation

Core phrase:

`A bird had snatched up the snake...`

Teaching:

- The bird action happened before the firefighter discovered the clue.
- Past perfect helps reconstruct what had happened earlier.

### 7. Cause-Chain Verbs

Board sequence:

`snatch up -> drop -> wind round -> send sparks down -> start a fire`

Chinese anchor:

`抓起 -> 掉到 -> 缠住 -> 火花落下 -> 起火`

## Final Page / Course Flow Reminder

The final page and spoken outro must include the full practice order:

`⓪ 跟读：听课文全文 -> 听原音 -> 录一句 -> 获取反馈`

then:

`① 生活场景`

`② 完形填空`

`③ 中译英`

`④ 英译中`

`⑤ 拓展阅读`

`⑥ 句式仿写`

`⑦ 默写`

The final reminder should connect practice to the lesson goal:

`这一课先把侦探线背熟：查原因、排除可能、发现线索、还原因果链。接下来跟读时，注意长句分组；生活场景里，用 find out, cause, examine, discover, solve the mystery 讲一个安全的小谜题。`

## Acceptance Criteria

- The extension practice follows the `Extension Practice Direction` above,
  creates `web/data/extension/lesson_53.json`, and registers the lesson in
  `web/data/extension/index.json`.
Lesson 53 is ready for production when:

- The opening hook is 4-6 spoken lines and does not retell the whole passage.
- The lesson is framed as a fire-investigation mystery, not a horror story.
- The student-facing story spine is Chinese-first.
- The `a firemen` source-text issue is explicitly handled or flagged before
  passage audio/display decisions.
- `firemen` versus `firefighters` is explained briefly and naturally.
- `Hot snake` is explained as a title connected to electricity/high voltage.
- `wound` is taught as the past form of `wind`, not as an injury word.
- High-voltage safety is stated clearly and briefly.
- Visual prompts are text-free and non-graphic.
- The same firefighter protagonist is used across all four frames.
- The living-scene transfer uses safe everyday investigation language, not
  dangerous wire inspection.
- Read-aloud includes the long power-line clue sentence and the final cause
  chain sentence.
- The outro includes `⓪ 跟读` before `① 生活场景`, with the concrete read-aloud
  steps.
