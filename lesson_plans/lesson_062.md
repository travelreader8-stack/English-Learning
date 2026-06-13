# Lesson 62 Plan - After the fire

This is the source-of-truth design card for producing Lesson 62. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 62 assets.

## Basic Info

- Lesson: 62
- Title: `After the fire`
- Chinese title: `大火之后`
- Core bridge: `这一课不要只讲“森林大火很可怕”，而要讲成一个更有层次的灾后恢复故事：火被控制住以后，危险并没有结束。树和草原来能抓住土壤；大火烧掉植被后，冬天的大雨可能冲走 soil，引发 floods，威胁 surrounding villages。所以 forest authorities 赶紧用 aeroplanes 喷洒 grass-seed，让草先 take root。孩子要抓住：after the fire, the second battle is to protect the soil and help green life return。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule and the section
responsibility rule in `LESSON_PRODUCTION_PLAN.md`.

- Keep the opening hook short.
  - Use 4-6 spoken lines only.
  - The hook should ask one clear question:
    why can hills still threaten villages after the fire is out?
  - Do not retell the whole passage before the four `retell` frames.
  - Do not open with a long disaster explanation.
- Treat the lesson as a post-fire recovery story.
  - The central chain is:
    `forest fire -> blackened hills -> soil at risk -> heavy rain -> floods -> grass-seed sprayed -> grass takes root -> green patches return`.
  - The emotional movement should be:
    danger -> emptiness -> hidden risk -> human action -> first signs of recovery.
- Story spine must be Chinese-first.
  - Present the environmental cause-and-result chain in Chinese first.
  - Attach short English chunks after each Chinese anchor.
  - Do not show an all-English arrow chain as the main student-facing memory
    path.
- Avoid repeated script content across sections.
  - The four `retell` frames are the only section that should walk through the
    full passage in order.
  - The teacher-student dialogue must not repeat the retell narration.
  - The dialogue should deepen the key idea:
    why soil without roots can be washed away, and why quick grass matters.
  - Vocabulary and grammar sections should explain language tools, not retell
    the story again.
- Keep the tone serious but not frightening.
  - No graphic disaster imagery.
  - No injured people.
  - No sensational flames or panic.
  - The courseware should focus on recovery, prevention, and the first return of
    green life.
- The four illustrations must form one continuous story line.
  - They are not four isolated wildfire pictures.
  - The same hillside, valley, and nearby village should carry across frames.
  - Visual continuity should show the land changing:
    forested hillside -> burned hillside -> seed-spraying operation -> green
    patches in blackened soil.
- Generated illustrations must be text-free.
  - No readable English or Chinese text inside images.
  - No readable signs, maps, official labels, screen text, captions, speech
    bubbles, UI panels, or fake lesson text.
  - If the courseware needs words such as `desolate`, `grass-seed`, `floods`,
    `take root`, or `patches of green`, render them as real UI text outside the
    image.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, camera directions,
    or generated-image mechanics.
  - Storyboard prompts must not leak into spoken lesson content.

## Production Warnings

- The current lesson record has a likely source-text problem in the first
  sentence:
  - Current English: `Firemen had been fighting the forest for nearly three weeks...`
  - The Chinese translation and ordinary meaning point to `forest fire`, not
    `forest`.
  - Production should verify the source before generating final audio,
    karaoke text, cloze, and follow-read.
- This is a shared-data issue in `web/data/lessons.json`.
  - A normal production thread should stop and ask before editing this shared
    file, unless the user explicitly authorizes the correction in that thread.
  - If approved, keep the edit narrowly scoped to Lesson 62's `english` and
    `cloze.rendered_html` fields.
- The lesson contains disaster vocabulary.
  - Keep it age-appropriate and constructive.
  - Emphasize how people reduce the next danger after the fire.
- `Firemen` is the source word, but modern English often says `firefighters`.
  - Teach the source word as text vocabulary.
  - It is fine to explain in Chinese that today we often use the more general
    word `firefighters`.
- `forest authorities` may be unfamiliar.
  - Explain it as people or departments responsible for forest management.
  - Do not turn it into a government-structure lecture.
- `grass-seed` is old-fashioned hyphenated spelling in the source.
  - Treat it as grass seed, seeds that grow into grass.
  - Avoid letting TTS read the hyphen unnaturally if the spoken script uses the
    word in Chinese explanation.
- `aeroplanes` is British spelling.
  - It means airplanes.
  - Keep the source spelling in text, but explanation can say `planes`.
- `threatened the surrounding villages with destruction` is vivid but abstract.
  - Make the concrete risk clear: heavy rain can wash away soil and cause
    floods.
- `patches of green` is the positive ending.
  - Make the last frame visibly hopeful.

If production requires editing `web/data/lessons.json`, stop and ask for a
shared-data edit because it is outside the normal per-lesson write set.

## Lesson Positioning

Lesson 62 is a post-fire environmental recovery story. Firefighters had been
fighting a forest fire for nearly three weeks before they could get it under
control. Only a short time earlier, great trees had covered the countryside for
miles around. Now the trees are gone, smoke still rises from the warm ground,
and the hills are desolate. Winter is coming, and heavy rain will not only wash
away the soil but also cause serious floods. That is why the hills threaten the
surrounding villages even after the fire has been put out. The forest
authorities order several tons of fast-growing grass seed, and aeroplanes spray
the seed over the ground in huge quantities. By the time rain begins, in many
places the grass has already taken root. In place of the old great trees,
patches of green begin to appear in the blackened soil.

The courseware should make the student understand:

`forest fire -> nearly three weeks fighting -> get it under control -> great trees had covered the countryside -> now smoke rises from warm ground -> desolate hills -> winter coming -> heavy rain would wash away soil -> floods threaten villages -> fire put out -> forest authorities order grass-seed -> seed sprayed by aeroplanes -> planes plant seed for nearly a month -> rain begins -> grass has taken root -> patches of green appear in blackened soil`

The central bridge is:

`火灭了不是故事结束。没有树根和草根抓住 soil，山坡一遇到 heavy rain 就可能把泥土冲走，造成 floods。先让 grass take root，就是灾后恢复的第一步。`

## One-Sentence Hook

After a forest fire is finally controlled, the hills can still threaten nearby
villages because rain may wash away the unprotected soil.

## Vivid Teaching Opening

The opening should establish the hidden danger quickly. It must be a short hook,
not a complete plot retelling. Keep it to 4-6 spoken lines so the first visual
does not stay on screen too long before the frame-by-frame retell begins.

Suggested teacher narration:

`你可能会以为：fire 被 put out 以后，危险就结束了。`

`但这篇课文告诉我们，真正麻烦的地方在 after the fire。`

`树被烧掉以后，山坡上的 soil 没有根抓住。`

`冬天一来，heavy rain 可能 wash away the soil，还会造成 floods。`

`所以这节课的关键不是火焰，而是 soil, roots, rain, and the first patches of green。`

Tone:

- Serious, calm, and hopeful.
- Make the danger understandable without making it frightening.
- Keep the focus on cause and recovery.
- Save the full sequence for the four `retell` frames.

## Section Responsibility And Anti-Repetition Plan

Production must treat the lesson as several sections with distinct jobs.

### Opening

Job:

- Raise the hidden question:
  why can a burned hillside still threaten villages after the fire?
- Introduce the soil-and-roots idea.
- Keep the hook short.

Do not:

- Retell the full passage.
- Explain every ecology word.
- Start with a long lecture about climate or wildfire policy.

### Four Retell Frames

Job:

- Walk through the passage in order.
- Make the landscape transformation visible:
  forest -> burned hills -> seed spraying -> green patches.
- Pair each event with Chinese anchors and short English chunks.

Do not:

- Show only flames in every frame.
- Turn the retell into a general fire-safety lesson.
- Use all-English arrows as the student's main memory path.

### Teacher-Student Dialogue

Job:

- Deepen one idea:
  roots hold soil; without roots, heavy rain can wash soil away.
- Connect that idea to why grass seed is sprayed quickly.
- Clarify that `take root` is both literal and memorable.

Do not:

- Re-list the whole plot.
- Re-explain every vocabulary word.
- Make the dialogue a second summary of the passage.

### Vocabulary And Grammar

Job:

- Explain words and structures that make the passage work:
  `get it under control`, `desolate`, `threaten`, `surrounding`, `destruction`,
  `not only ... but ... as well`, `authorities`, `sprayed`, `in huge
  quantities`, `taken root`, `patches of green`, `blackened soil`.
- Show how past perfect and past perfect continuous create a before-and-after
  timeline.

Do not:

- Restart the story through vocabulary examples.
- Turn tense explanation into abstract formula first.

### Practice And Transfer

Job:

- Move the language into a smaller, modern child-understandable scene:
  after heavy rain or a school garden problem, bare soil needs quick planting so
  it will not be washed away.
- Preserve the lesson's cause chain:
  damage -> bare soil -> rain risk -> plant fast-growing seeds -> roots hold
  soil -> green patches appear.

Do not:

- Replace the original forest-fire story.
- Make the practice scene frightening.

## Story Focus

The post-fire recovery chain is:

1. Firefighters had been fighting the forest fire for nearly three weeks.
2. At last, they could get it under control.
3. A short time before, great trees had covered the countryside for miles
   around.
4. Now smoke still rose from the warm ground.
5. The hills were desolate.
6. Winter was coming on.
7. The hills threatened the surrounding villages with destruction.
8. Heavy rain would wash away the soil.
9. Heavy rain would cause serious floods as well.
10. When the fire had at last been put out, forest authorities ordered several
    tons of fast-growing grass seed.
11. Aeroplanes sprayed the seed over the ground in huge quantities.
12. The planes had been planting seed for nearly a month when rain began.
13. By then, in many places, the grass had already taken root.
14. Patches of green had begun to appear in the blackened soil.
15. These patches appeared in place of the great trees that had been growing
    there for centuries.

The production should make the contrast visible:

`great trees for centuries` versus `blackened soil`.

`fire put out` versus `danger still coming with rain`.

`desolate hills` versus `patches of green`.

`short-term grass` versus `long-term forest recovery`.

## Chinese-First Story Spine For Courseware

Use this as the main student-facing story line.

1. 消防员和 forest fire 搏斗了将近三周
   - `Firemen had been fighting`
   - `the forest fire`
   - `for nearly three weeks`
2. 最后他们才把火势控制住
   - `before`
   - `they could get it`
   - `under control`
3. 不久之前，great trees 覆盖了方圆数英里的乡野
   - `A short time before`
   - `great trees had covered`
   - `the countryside`
   - `for miles around`
4. 现在，warm ground 上还有 smoke 升起
   - `Now`
   - `smoke still rose up`
   - `from the warm ground`
5. 山丘变得 desolate
   - `over`
   - `the desolate hills`
6. 冬天快来了，山丘威胁 surrounding villages
   - `Winter was coming on`
   - `the hills threatened`
   - `the surrounding villages`
   - `with destruction`
7. 因为 heavy rain 不仅会冲走 soil，还会造成 floods
   - `for heavy rain`
   - `would not only wash away the soil`
   - `but would cause serious floods`
   - `as well`
8. 火终于被扑灭以后，forest authorities 订购了几吨 grass-seed
   - `When the fire`
   - `had at last been put out`
   - `the forest authorities ordered`
   - `several tons`
   - `of grass-seed`
9. 这种 grass-seed 会快速生长
   - `a special type`
   - `which would grow quickly`
10. 飞机把 seed 大量喷洒在地面上
    - `The seed was sprayed`
    - `over the ground`
    - `in huge quantities`
    - `by aeroplanes`
11. 飞机播种将近一个月后，雨开始下了
    - `The planes had been planting seed`
    - `for nearly a month`
    - `when it began to rain`
12. 到那时，很多地方的 grass 已经 take root
    - `By then`
    - `in many places`
    - `the grass had already taken root`
13. 黑色土壤上开始出现一片片绿色
    - `patches of green`
    - `had begun to appear`
    - `in the blackened soil`
14. 这些绿色暂时代替了生长了几个世纪的 great trees
    - `In place of`
    - `the great trees`
    - `which had been growing there`
    - `for centuries`

Student memory prompt:

`先记中文恢复线：firemen fight forest fire -> finally under control -> before, great trees covered the countryside -> now smoke and desolate hills -> winter rain threatens villages -> rain washes away soil and causes floods -> authorities order grass-seed -> aeroplanes spray seed -> rain begins -> grass has taken root -> patches of green appear in blackened soil。再把英文短语挂到每个节点上。`

Do not show this as an all-English arrow chain in the student-facing courseware.

## Recitation Blocks

Break the passage into four Chinese-first recitation blocks:

### Block 1: 大火终于被控制住

Chinese anchor:

`消防员和森林大火搏斗了将近三周，最后才把火势控制住。不久之前，参天大树还覆盖着方圆数英里的乡野。`

English chunks:

- `Firemen had been fighting`
- `the forest fire`
- `for nearly three weeks`
- `before they could get it`
- `under control`
- `A short time before`
- `great trees had covered`
- `the countryside`
- `for miles around`

Teaching point:

- This block sets up the long struggle and the before-picture.
- `had been fighting` shows an action continuing before another past moment.
- `get it under control` is the first practical goal.

### Block 2: 火灭后，山坡仍然危险

Chinese anchor:

`现在，发热的地面上还有烟升起，山丘一片荒凉。冬天快来了，周围村庄仍然面临危险。`

English chunks:

- `Now`
- `smoke still rose up`
- `from the warm ground`
- `over the desolate hills`
- `Winter was coming on`
- `the hills threatened`
- `the surrounding villages`
- `with destruction`

Teaching point:

- This block is the hidden danger after the fire.
- `desolate` gives the empty, burned landscape.
- `threatened` makes the hills sound dangerous because of what rain may do.

### Block 3: 大雨会冲走土壤，所以要撒草籽

Chinese anchor:

`大雨不仅会冲走 soil，还会造成严重 floods。大火扑灭后，forest authorities 订购了几吨快速生长的 grass-seed。`

English chunks:

- `for heavy rain`
- `would not only wash away the soil`
- `but would cause serious floods`
- `as well`
- `When the fire`
- `had at last been put out`
- `the forest authorities ordered`
- `several tons`
- `of grass-seed`
- `which would grow quickly`

Teaching point:

- This block explains the reason for action.
- `not only ... but ... as well` is the key structure.
- The grass seed is a solution to soil and flood risk.

### Block 4: 飞机播种，绿色重新出现

Chinese anchor:

`飞机大量喷洒 seed。雨开始下的时候，很多地方的 grass 已经扎根。黑色土壤上开始出现一片片绿色。`

English chunks:

- `The seed was sprayed`
- `over the ground`
- `in huge quantities`
- `by aeroplanes`
- `The planes had been planting seed`
- `for nearly a month`
- `when it began to rain`
- `By then`
- `the grass had already taken root`
- `patches of green`
- `had begun to appear`
- `in the blackened soil`

Teaching point:

- This block is the hopeful ending.
- `taken root` is literal and central.
- `patches of green` should become the visual memory of recovery.

## Modern Child Bridge

For a modern child, connect the passage to a simple soil-and-roots idea.

Suggested child-facing explanation:

`你可以把山坡想成一盘土。如果上面有草和树根，土会被抓住；如果大火之后只剩 bare soil，大雨一冲，土就会流走。Lesson 62 的重点就是：火灭以后，要赶快让新的 roots 出现。`

Useful modern analogies:

- A flowerpot with no roots: water can wash the soil away.
- A school garden after plants are removed: the soil becomes loose.
- A muddy slope after heavy rain: grass helps hold the ground.
- A construction site covered with temporary grass or matting to stop erosion.

Do not replace the original story. Use the bridge to make the forest recovery
logic concrete.

## Fire, Soil, And Flood Bridge

Keep this background short and concrete.

Student-facing explanation:

`森林里的树根和草根像很多小手，能抓住 soil。大火烧掉树和草以后，山坡只剩 blackened soil。冬天 heavy rain 一来，soil 会被 wash away，水和泥可能冲向 surrounding villages，造成 floods。grass-seed 生长快，所以先让草 take root，帮助把土稳住。`

Important boundaries:

- Do not make this a full ecology lecture.
- Do not add complicated scientific terms such as erosion unless the script
  explains them in plain Chinese.
- Keep the key idea physical and visible:
  roots hold soil, rain washes loose soil away.
- Keep the ending hopeful:
  patches of green begin to appear.

## Teacher-Student Dialogue Direction

The dialogue section must not repeat the plot. It should explore why the grass
seed matters.

Recommended dialogue path:

1. Teacher asks:
   `Fire had been put out. 那为什么 hills 还会 threaten villages?`
2. Student:
   `因为还会下雨？`
3. Teacher:
   `Right. But rain itself is not always a problem. What is missing from the hills?`
4. Student:
   `Trees? Roots?`
5. Teacher:
   `Exactly. Roots hold the soil. After the fire, the soil is loose and blackened.`
6. Teacher asks:
   `If heavy rain comes before new roots grow, what may happen?`
7. Student:
   `The rain may wash away the soil and cause floods.`
8. Teacher:
   `That's why grass-seed is sprayed quickly. Grass grows fast, takes root, and the first patches of green help protect the land.`

Keep this section short. It should feel like a new thinking angle after retell,
not a second retell.

## Main Language Focus

### Past Perfect Continuous: `had been fighting`

Core sentence:

`Firemen had been fighting the forest fire for nearly three weeks before they could get it under control.`

Teaching:

- The fighting continued for a long time.
- It happened before the later past moment when the fire was controlled.
- Teach through a timeline, not a formula first.

Student-facing idea:

`had been fighting 表示：在“终于控制住”之前，他们已经持续战斗了将近三周。`

### Before-And-Now Contrast

Core expressions:

- `A short time before`
- `Now`

Teaching:

- The passage uses before and now to show a dramatic change.
- Before: great trees covered the countryside.
- Now: smoke rises over desolate hills.

### Cause And Risk

Core sentence:

`for heavy rain would not only wash away the soil but would cause serious floods as well.`

Teaching:

- `for` here gives the reason, like `because`.
- `not only ... but ... as well` adds a second danger.
- The rain does two things: washes away soil and causes floods.

### Passive Voice: Fire And Seed

Core sentences:

- `When the fire had at last been put out`
- `The seed was sprayed over the ground in huge quantities by aeroplanes.`

Teaching:

- Passive voice puts focus on the fire and seed.
- Who did it is less important than what happened.
- `by aeroplanes` tells us how the spraying was done.

### Past Perfect: Already Before Rain

Core sentence:

`By then, however, in many places the grass had already taken root.`

Teaching:

- Rain began.
- Before that time, the grass had already taken root in many places.
- This is why the ending feels hopeful.

### Long-Time Background: `had been growing`

Core phrase:

`the great trees which had been growing there for centuries`

Teaching:

- These trees were not new.
- They had been growing there for hundreds of years.
- This makes the loss serious, and the green patches modest but hopeful.

## Vocabulary Plan

Prioritize vocabulary that supports the post-fire risk and recovery chain.

### `firemen`

- People whose job is to fight fires.
- The modern general word is often `firefighters`.
- Keep the source word but explain naturally.

### `fight a fire`

- Try to stop and control a fire.
- If source text is corrected, use `fight the forest fire`.

### `under control`

- No longer spreading freely; managed.
- `get it under control` is a useful everyday phrase too.

### `countryside`

- Land outside towns and cities.
- Here it was once covered by great trees.

### `smoke`

- Grey or dark gas from fire.
- In the text, smoke still rises after the fire.

### `desolate`

- Empty, lonely, and ruined-looking.
- A strong word for the burned hills.

### `threaten`

- Be likely to cause harm or danger.
- The hills threaten villages because rain may cause floods.

### `surrounding`

- Around something.
- `surrounding villages` means villages nearby around the hills.

### `destruction`

- Serious damage or ruin.
- Keep the explanation concrete.

### `flood`

- A large amount of water covering land that is usually dry.
- Link to heavy rain and soil being washed away.

### `wash away`

- Carry something away with water.
- Heavy rain can wash away soil.

### `soil`

- The top layer of earth where plants grow.
- Central word for this lesson.

### `authorities`

- Official people or organizations responsible for something.
- `forest authorities` means people managing the forest.

### `several tons`

- A large weight.
- Shows that the seed operation is large.

### `grass-seed`

- Seeds that grow into grass.
- Explain the hyphenated source word simply.

### `spray`

- Send liquid or small particles over an area.
- Here planes spray seed over the ground.

### `quantity`

- Amount.
- `in huge quantities` means in very large amounts.

### `aeroplanes`

- British spelling for airplanes.
- In this text, planes scatter the seed from above.

### `take root`

- Begin to grow roots in the soil.
- It can also mean become established, but here it is literal.

### `in place of`

- Instead of; replacing something.
- Green patches appear where great trees used to be.

### `century`

- One hundred years.
- `for centuries` means for hundreds of years.

### `patch`

- A small area different from the area around it.
- `patches of green` are small green areas in black soil.

### `blackened`

- Made black by burning.
- `blackened soil` is the burned ground after the fire.

## Storyboard Continuity Rule

The storyboard must feel like four shots from one post-fire recovery sequence,
not four unrelated disaster illustrations.

Continuity requirements:

- Use the same valley and hillside across frames.
- Keep a small surrounding village visible in the distance when helpful, so the
  threat to villages is understandable.
- Let the land visibly change:
  1. forest and fire response
  2. blackened desolate hills with smoke
  3. planes spraying seed
  4. green patches taking root in blackened soil
- Firefighters, forest authorities, and planes should feel practical and
  realistic, not heroic fantasy.
- The final frame should contrast strongly with the earlier desolate hills.

Avoid:

- graphic disaster scenes
- injured people
- flames dominating every frame
- unreadable maps or labels
- text boxes inside the illustration
- a final frame that instantly becomes a full mature forest

## Visual Direction

Overall visual feel:

- Semi-realistic educational illustration.
- Serious, calm, and hopeful.
- Natural landscape focus.
- Strong before-and-after contrast.
- No in-image text.

The visual sequence should show:

1. firefighters finally controlling a forest fire after a long struggle
2. burned hills with smoke and a vulnerable nearby village before winter rain
3. aeroplanes spraying fast-growing grass seed over the blackened ground
4. rain has come, grass has taken root, and patches of green appear in the
   blackened soil

## Character And Place Consistency Brief

Suggested storyboard-level `visual_consistency`:

`A consistent semi-realistic educational illustration style. The same hilly countryside valley appears across all four frames: rolling hills, a small cluster of village houses in the distance, winding rural paths, and a wide sky. Before the fire, the hills have tall mature trees; after the fire, the same hills are blackened with warm smoky ground. Firefighters wear practical yellow and dark protective gear with helmets and no readable markings. Forest authority workers wear simple outdoor jackets and carry clipboards or seed bags with no readable text. Aeroplanes are small practical agricultural-style planes with no readable markings. The emotional mood moves from exhausted control of danger, to quiet desolation, to organized recovery work, to hopeful green patches appearing in blackened soil.`

Production should reuse this exact place and object wording inside each frame
prompt.

## Four-Frame Storyboard Intent

### Frame 1: Nearly Three Weeks To Control The Fire

Purpose:

- Establish the long struggle.
- Show firefighters finally getting the forest fire under control.
- Show that this was once a forested countryside.

Visual content:

- Firefighters at the edge of a forest fire on the same hillside valley.
- Smoke in the sky, controlled flames in the distance, and tired but focused
  firefighters.
- A hint of the surrounding countryside and village far away.
- No readable labels or signs.

Teaching overlay outside image:

- `had been fighting`
- `for nearly three weeks`
- `get it under control`

Avoid:

- intense disaster spectacle
- close-up fear or injury
- making the entire frame only flames

### Frame 2: Desolate Hills And The Threat Of Rain

Purpose:

- Show that the danger continues after the fire.
- Make `desolate hills`, `smoke`, `surrounding villages`, and `floods` visually
  understandable.

Visual content:

- The same hills now blackened and empty.
- Smoke still rises from warm ground.
- A small village sits below or beyond the hills.
- Dark winter rain clouds gather, hinting at heavy rain.

Teaching overlay outside image:

- `smoke still rose up`
- `desolate hills`
- `threatened the surrounding villages`
- `wash away the soil`
- `serious floods`

Avoid:

- showing flood destruction before the explanation
- over-dark horror atmosphere
- unreadable weather maps

### Frame 3: Aeroplanes Spray Grass-Seed

Purpose:

- Show the human response.
- Make `grass-seed`, `sprayed`, and `in huge quantities` concrete.

Visual content:

- Small planes fly low over the blackened hills.
- A visible mist or stream of seed spreads over the ground.
- Forest authority workers observe from the ground with seed bags or equipment.
- The same village remains in the far background.

Teaching overlay outside image:

- `forest authorities ordered`
- `several tons of grass-seed`
- `The seed was sprayed`
- `in huge quantities`
- `by aeroplanes`

Avoid:

- crop-duster labels or readable markings
- making the seed look like snow
- confusing grass seed with water only

### Frame 4: Patches Of Green In Blackened Soil

Purpose:

- Show the hopeful ending.
- Make `taken root`, `patches of green`, and `blackened soil` memorable.

Visual content:

- After rain, the same hillside has small green patches across black soil.
- Close enough to see young grass taking root.
- The village looks calmer in the distance.
- The sky is clearing, but the burned landscape is still visible.

Teaching overlay outside image:

- `the grass had already taken root`
- `patches of green`
- `had begun to appear`
- `in the blackened soil`
- `in place of the great trees`

Avoid:

- instantly replacing the scene with a full forest
- making the ending too cheerful or unrealistic
- hiding the blackened soil entirely

## Script And Courseware Presentation

### Opening Script

- Keep it to 4-6 spoken lines.
- Mention only the core hook:
  fire out, soil exposed, heavy rain risk, grass taking root.
- Do not pre-explain all vocabulary.
- Do not speak image-generation directions.

### Retell Frames

- Use Chinese-first anchors.
- Attach short English chunks after each anchor.
- Keep the story chronological.
- Make the cause chain explicit:
  `no roots` -> `soil washed away` -> `floods` -> `grass-seed` -> `take root`.

### Teacher-Student Dialogue

- Use the dialogue to discuss roots, soil, rain, and why fast-growing grass is
  useful.
- Do not repeat the full retell.
- Keep the child voice natural:
  short answers, a concrete image of soil being washed away, and one moment of
  realization.

### Vocabulary

- Three vocabulary blocks should group words by function:
  1. Fire and landscape words:
     `firemen`, `under control`, `smoke`, `desolate`, `blackened`
  2. Risk words:
     `threaten`, `surrounding`, `destruction`, `wash away`, `floods`, `soil`
  3. Recovery words:
     `authorities`, `grass-seed`, `sprayed`, `quantities`, `take root`,
     `patches`
- Keep definitions concrete and visual.

### Grammar

- Present grammar through the recovery timeline.
- Use a simple board:
  `long action before past moment`, `earlier past`, `passive action`,
  `already completed before rain`.
- Avoid a dense tense table.

### Passage Reading And Follow-Read

- The karaoke passage page should keep its guidance clear:
  the student can click a sentence to hear only that sentence.
- Follow-read should remain part of the course flow.
- The final course-flow page should include the follow-read step:
  `跟读：听课文全文 -> 听原音 -> 录一句 -> 获取反馈`.

## Read-Aloud And Pronunciation Direction

Create 5-8 guided sentences for `web/data/read_aloud/lesson_62.json`.

Prioritize:

- `Firemen had been fighting the forest fire for nearly three weeks before they could get it under control.`
- `A short time before, great trees had covered the countryside for miles around.`
- `Smoke still rose up from the warm ground over the desolate hills.`
- `The hills threatened the surrounding villages with destruction.`
- `Heavy rain would not only wash away the soil but would cause serious floods as well.`
- `The seed was sprayed over the ground in huge quantities by aeroplanes.`
- `By then, however, in many places the grass had already taken root.`
- `Patches of green had begun to appear in the blackened soil.`

Pronunciation notes:

- `firemen`: clear first syllable.
- `under control`: link naturally.
- `desolate`: three syllables; do not rush.
- `threatened`: past-tense ending should be present but light.
- `surrounding`: stress the second syllable.
- `authorities`: long word; break gently.
- `grass-seed`: in spoken Chinese explanation, avoid reading the hyphen as a
  literal punctuation mark.
- `aeroplanes`: British spelling; pronunciation can be handled as airplanes.
- `quantities`: plural ending needs clarity.
- `blackened`: two syllables in natural speech.

Feedback style:

- Encourage steady rhythm through long cause-and-result sentences.
- Praise clear pronunciation of key disaster and recovery words.
- Do not over-penalize proper British spelling words if the child says the
  modern equivalent in discussion.

## Living-Scene Exercise Direction

The living-scene exercise should transfer the lesson into a smaller recovery
scenario.

Recommended setting:

`A school garden has a bare muddy slope after old plants are removed. Heavy rain is coming. A teacher and students decide to spread fast-growing grass seed so the soil will not be washed away. A few days later, patches of green appear.`

Why this works:

- It keeps the original logic but removes disaster intensity.
- It naturally uses:
  `soil`, `wash away`, `heavy rain`, `grass seed`, `spray/spread`,
  `take root`, `patches of green`.
- It makes the ecological cause chain physically understandable.

Possible roles:

- Science teacher
- Student helper
- Classmate checking the weather
- School gardener

Target language:

- `Heavy rain is coming.`
- `The soil may be washed away.`
- `We should spread grass seed.`
- `The grass will take root quickly.`
- `Patches of green have begun to appear.`

## Suggested You Too Scene

Scene title:

`Protecting The School Garden`

Scene premise:

`You and your classmate see a bare slope in the school garden. Heavy rain is coming, so you help spread fast-growing grass seed before the soil is washed away. Later, green patches begin to appear.`

Dialogue goals:

- identify the risk
- explain why rain may wash away soil
- suggest spreading grass seed
- describe the hopeful result

Suggested exchanges:

1. Student A:
   `Heavy rain is coming.`
2. Student B:
   `The soil may be washed away.`
3. Student A:
   `Let's spread grass seed over the ground.`
4. Student B:
   `Good idea. The grass will take root quickly.`
5. Student A:
   `Look, patches of green have begun to appear.`

Keep the exercise calm, practical, and visual.

## Extension Practice Direction

Lesson 62 extension production should be extension-only if the main lesson
assets already exist. Create `web/data/extension/lesson_62.json` and register
`62` in `web/data/extension/index.json`. Do not regenerate script, audio,
timeline, read-aloud data, or storyboard images.

### Extension Reading

Use an original recovery passage set on a small, child-scale slope: a school
garden bank or a neighbourhood park slope left bare after a small fire or after
builders cleared it. Keep the ecological-repair idea (bare soil, the risk that
rain washes the soil away, fast-growing seed, roots, the first green shoots), but
it must read as a NEW situation with new characters (students, volunteers, a
gardener), NOT a retelling of the lesson's forest fire fought by firemen and
seeded from aeroplanes. Do not paraphrase the original passage or reuse its
large-scale disaster sequence.

Suggested title: `Green on the School Slope`

Recommended word bank: `bare slope`, `wash away`, `soil`, `fast-growing seed`,
`scatter`, `take root`, `green shoots`, `protect`, `volunteers`, `at last`.

The 5 reading questions should test:

1. what damage had happened
2. why heavy rain was dangerous after the fire
3. what solution the students, volunteers, or gardener used
4. why grass seed helped
5. what hopeful sign appeared in the soil

### Sentence Writing

Use 5 patterns:

1. `had been fighting ... for nearly ... before ...`
   - Source: `Firemen had been fighting the forest fire for nearly three weeks before they could get it under control.`
   - Focus: long action before success.
   - Must include: `had been` and `before`
2. `threatened ... with ...`
   - Source: `The hills threatened the surrounding villages with destruction.`
   - Focus: danger posed by a place or situation.
   - Must include: `threatened` and `with`
3. `not only ... but ... as well`
   - Source: `Heavy rain would not only wash away the soil but would cause serious floods as well.`
   - Focus: two serious results.
   - Must include: `not only` and `as well`
4. `had at last been put out`
   - Source: `When the fire had at last been put out...`
   - Focus: passive past perfect after a long effort.
   - Must include: `had at last been put out`
5. `had already taken root`
   - Source: `By then, however, in many places the grass had already taken root.`
   - Focus: hopeful result before a later event.
   - Must include: `had already taken root`

## Chinese-To-English Exercise Direction

If production creates guided translation prompts inside lesson-local materials,
use meaning chunks that mirror the recovery chain.

Suggested chunking:

1. 消防员和森林大火搏斗了将近三周，最后才把火势控制住。
   - `Firemen had been fighting the forest fire for nearly three weeks before they could get it under control.`
2. 不久之前，参天大树还覆盖着方圆数英里的乡野；现在，荒凉的山丘上仍然升起烟雾。
   - `A short time before, great trees had covered the countryside for miles around; now, smoke still rose up over the desolate hills.`
3. 冬天快来了，大雨不仅会冲走土壤，还会造成严重洪水，威胁周围村庄。
   - `Winter was coming on, and heavy rain would not only wash away the soil but would cause serious floods as well, threatening the surrounding villages.`
4. 大火被扑灭后，森林管理部门订购了几吨快速生长的草籽，并由飞机大量喷洒到地面上。
   - `When the fire had been put out, the forest authorities ordered several tons of fast-growing grass seed, and the seed was sprayed over the ground in huge quantities by aeroplanes.`
5. 雨开始下的时候，许多地方的草已经扎根，烧黑的土壤上开始出现一片片绿色。
   - `When it began to rain, the grass had already taken root in many places, and patches of green had begun to appear in the blackened soil.`

Do not edit `web/data/lessons.json` just to add chunks unless the user explicitly
asks for a shared-data update.

## Grammar Board

### 1. Past Perfect Continuous

Pattern:

`had been + doing`

Example:

`Firemen had been fighting the forest fire for nearly three weeks.`

Student explanation:

`在“终于控制住”之前，这个动作已经持续了很久。`

### 2. Past Perfect

Pattern:

`had + past participle`

Examples:

- `great trees had covered the countryside`
- `the fire had at last been put out`
- `the grass had already taken root`

Student explanation:

`讲过去中的更早过去，用 had done。`

### 3. Passive Voice

Pattern:

`be + past participle`

Examples:

- `the fire had at last been put out`
- `The seed was sprayed over the ground`

Student explanation:

`重点放在 fire 和 seed 身上，所以用被动。`

### 4. Reason With `for`

Pattern:

`statement, for + reason`

Example:

`The hills threatened the surrounding villages with destruction, for heavy rain would...`

Student explanation:

`这里的 for 接近 because，用来说明原因。`

### 5. `not only ... but ... as well`

Pattern:

`not only + A + but + B + as well`

Example:

`Heavy rain would not only wash away the soil but would cause serious floods as well.`

Student explanation:

`不只是 A，还会 B。这里雨的危险有两层。`

### 6. `by then`

Expression:

`By then, however, in many places the grass had already taken root.`

Student explanation:

`到那个时候为止，草已经在很多地方扎根了。`

### 7. `in place of`

Pattern:

`in place of + noun`

Example:

`In place of the great trees ... patches of green had begun to appear.`

Student explanation:

`原来是 great trees，现在先出现的是 patches of green。`

### 8. Descriptive Past Participles

Expression:

`blackened soil`

Student explanation:

`blackened 表示“被烧黑的”，一个词就把火后的土地画出来了。`

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
  creates `web/data/extension/lesson_62.json`, and registers the lesson in
  `web/data/extension/index.json`.
- `lesson_plans/lesson_062.md` is the production source of truth for Lesson 62.
- The root `LESSON_PRODUCTION_PLAN.md` index includes Lesson 62 and points the
  future placeholder to Lesson 63.
- The opening hook is short and does not retell the whole passage.
- The four retell frames use Chinese-first anchors with English chunks.
- The teacher-student dialogue explains roots, soil, rain, and grass seed
  without repeating the full story.
- The storyboard keeps the same hillside, village, and recovery sequence across
  all four frames.
- The storyboard images are text-free.
- The script does not contain image prompt wording.
- The plan warns production about the likely `forest` versus `forest fire`
  source-text problem without silently editing shared data.
- The final course-flow page includes the follow-read step.
