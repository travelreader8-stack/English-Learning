# Lesson 56 Plan - Faster than sound!

This is the source-of-truth design card for producing Lesson 56. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 56 assets.

## Basic Info

- Lesson: 56
- Title: `Faster than sound!`
- Chinese title: `比声音还快！`
- Core bridge: `这一课不要讲成现代赛车课，也不要真的讲成“比声音快”的物理课。它的核心是老爷车比赛的机械喜剧：这些 old cars 很漂亮、很有历史感，但也会爆响、抛锚、需要司机趴到车底下修。冠军只有 forty miles an hour，却因为声音大、机器老、状况多、大家期待高，所以一点也不比现代赛车少 exciting。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule.

- Keep the opening hook short.
  - Use 4-6 spoken lines only.
  - The hook should set up the old-car race comedy and the playful title.
  - Do not retell the whole passage before the four `retell` frames.
  - Put the full race chain into the frame-by-frame retell section.
- Story spine must be Chinese-first.
  - Present the race chain first as Chinese scene anchors.
  - Attach short English chunks after each Chinese anchor.
  - Do not use an all-English arrow chain as the main student-facing memory
    path.
- The four illustrations must form one continuous story line.
  - They are not four isolated car posters.
  - Each frame should inherit visible consequences from the previous frame.
  - The same race route, same crowd, same winning car, and same driver should
    carry through the sequence.
  - The emotional line should accumulate: excited lineup -> noisy start ->
    breakdown comedy -> downhill finish and happy crowd.
  - Storyboard prompts should explicitly describe the causal relation between
    frames, so the images feel like four shots from one short film.
- Generated illustrations must be text-free.
  - No readable English or Chinese text inside images.
  - No readable labels on cars, race signs, speed boards, flags, maps,
    dashboards, newspapers, posters, or mechanic tools.
  - No speech bubbles, captions, UI panels, fake lesson text, or empty text
    boxes inside images.
  - If the courseware needs words such as `Rolls-Royce Silver Ghost`, `Benz`,
    `forty miles an hour`, or `break down`, render them as real UI text outside
    the image.
- Keep the driving scene safe and comic.
  - Do not glamorize reckless driving.
  - Do not show crashes, injuries, fire, explosions as bombs, or frightening
    accidents.
  - The downhill stopping trouble should feel like old-machine difficulty, not
    dangerous stunt driving.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, camera directions,
    or generated-image mechanics.
  - Storyboard prompts must not leak into spoken lesson content.

## Production Warnings

- The title `Faster than sound!` is playful exaggeration.
  - The winning car reaches only `forty miles an hour`.
  - That is not literally faster than sound.
  - Teach the title as humor: the cars are noisy, old, dramatic, and exciting.
- `old cars` means vintage / antique cars.
  - Children may only know modern cars, racing games, electric cars, or sports
    cars.
  - Explain old-car races as museum-like machines coming alive.
- `explosions` does not mean bombs.
  - In this context, it means loud engine pops, backfires, or mechanical bangs.
  - Do not draw bombs, fireballs, war imagery, or disaster scenes.
- `break down` means the cars stop working.
  - It does not mean drivers emotionally collapse.
  - Show repair under the car, not a broken car in a crash.
- `course` means the race route or track.
  - It is not a school course.
- `some drivers spent more time under their cars than in them` is a joke.
  - They are repairing their cars underneath.
  - This is one of the most memorable sentences and should be made visual.
- `handsome` can describe an object.
  - Here it means elegant, good-looking, or beautiful as a car.
- `Rolls-Royce Silver Ghost` and `Benz` are proper nouns.
  - Give a light object background only: one is an elegant early luxury car;
    the other is a very early, unusual three-wheeled car.
  - Do not turn the lesson into a brand-history lecture.
- `Built in 1885` should be treated as the lesson's source wording.
  - Do not silently change the source passage or cloze data.
  - If production wants to add a precise historical note, keep it brief and do
    not edit `web/data/lessons.json` without approval.
- `rivals` means competitors in the race.
  - It does not mean enemies.
- `no less exciting` means just as exciting.
  - It is not saying modern car races are less exciting.

If production requires editing `web/data/lessons.json`, stop and ask for a
shared-data edit because it is outside the normal per-lesson write set.

## Lesson Positioning

Lesson 56 is an old-car race comedy. Once a year, a race is held for old cars.
Last year, many cars entered, and there was great excitement just before the
start. Among the cars, one of the most handsome was a `Rolls-Royce Silver
Ghost`, while the most unusual was a three-wheeled `Benz` built in 1885. After
a great many loud engine pops, the race began. Many cars broke down on the
course, and some drivers spent more time repairing their cars underneath than
actually sitting inside them. A few cars completed the race. The winning car
reached forty miles an hour, much faster than its rivals. At the end, it sped
downhill and the driver had trouble stopping it. Everyone enjoyed the race. It
was very different from modern car races, but no less exciting.

The courseware should make the student understand:

`每年一次旧车比赛 -> 去年很多车参加 -> 开赛前大家很兴奋 -> 漂亮的 Rolls-Royce Silver Ghost -> 奇特的三轮 Benz -> 1885 年制造，是最老的参赛车 -> 一阵响亮的发动机爆响后比赛开始 -> 很多车在赛道上抛锚 -> 有些司机修车时间比开车时间还多 -> 少数车完成比赛 -> 冠军达到时速 40 英里，比对手快得多 -> 最后冲下坡，司机很难把车停住 -> 大家都很开心 -> 它和现代赛车很不同，但同样刺激`

The central bridge is:

`这不是“速度真的惊人”的故事，而是“老机器带着历史感和故障感重新跑起来，所以慢也能很 exciting”的故事。`

## One-Sentence Hook

The winning car was only doing forty miles an hour, but in a noisy old-car race
full of breakdowns and engine bangs, it felt wonderfully exciting.

## Vivid Teaching Opening

The opening should establish the old-car race comedy quickly. It must be a
short hook, not a complete plot retelling. Keep it to 4-6 spoken lines so the
first visual does not stay on screen too long before the frame-by-frame retell
begins.

Suggested teacher narration:

`现在的赛车很快、很稳、很科技。`

`但这篇课文讲的是 old cars race，老车重新上路。`

`它们不一定快，还可能砰砰响、半路坏掉，司机要钻到车底下修。`

`所以标题 Faster than sound! 不是科学事实，而是一个好玩的夸张。`

`今天记住这条线：old machines, loud noise, breakdowns, but real excitement。`

Tone:

- Warm, amused, and mechanical.
- Make the student feel the charm of old machines.
- Keep the title explanation clear: playful, not literal.
- Save the detailed sequence for the four `retell` frames.

## Story Focus

The old-car race chain is:

1. A race is held once a year for old cars.
2. Last year, many cars entered.
3. There was a great deal of excitement just before the race began.
4. One handsome car was a `Rolls-Royce Silver Ghost`.
5. The most unusual car was a three-wheeled `Benz`.
6. Built in 1885, it was the oldest car taking part.
7. After many loud engine pops, the race began.
8. Many cars broke down on the course.
9. Some drivers spent more time under their cars than in them.
10. A few cars completed the race.
11. The winning car reached forty miles an hour.
12. It was much faster than its rivals.
13. It sped downhill at the end.
14. The driver had a lot of trouble trying to stop it.
15. The race gave everyone a great deal of pleasure.
16. It was very different from modern car races but no less exciting.

The production should make the contrast visible:

`old, slow, unreliable machines` versus `real excitement`.

`forty miles an hour` versus `Faster than sound!`

## Chinese-First Story Spine For Courseware

Use this as the main student-facing story line.

1. 每年都会为旧车举行一次比赛
   - `Once a year`
   - `a race is held`
   - `for old cars`
2. 去年很多车参加了这场比赛
   - `A lot of cars`
   - `entered for this race`
   - `last year`
3. 比赛开始前，大家非常兴奋
   - `there was`
   - `a great deal of excitement`
   - `just before it began`
4. 最漂亮的车之一是 Rolls-Royce Silver Ghost
   - `One of the most handsome cars`
   - `was a Rolls-Royce Silver Ghost`
5. 最特别的车是一辆只有三个轮子的 Benz
   - `The most unusual car`
   - `was a Benz`
   - `which had only three wheels`
6. 它造于 1885 年，是参赛的车里最老的一辆
   - `Built in 1885`
   - `it was the oldest car`
   - `taking part`
7. 一阵响亮的发动机爆响之后，比赛开始了
   - `After a great many loud explosions`
   - `the race began`
8. 很多车在赛道上抛锚了
   - `Many of the cars`
   - `broke down`
   - `on the course`
9. 有些司机修车的时间比坐在车里的时间还多
   - `some drivers`
   - `spent more time`
   - `under their cars`
   - `than in them`
10. 不过，还是有几辆车完成了比赛
    - `A few cars`
    - `however`
    - `completed the race`
11. 获胜的车达到了每小时 40 英里的速度
    - `The winning car`
    - `reached a speed`
    - `of forty miles an hour`
12. 它比任何对手都快得多
    - `much faster`
    - `than any of its rivals`
13. 比赛最后，它冲下了山坡
    - `It sped downhill`
    - `at the end of the race`
14. 司机费了很大劲才把它停住
    - `its driver`
    - `had a lot of trouble`
    - `trying to stop it`
15. 这场比赛让每个人都很快乐
    - `The race gave everyone`
    - `a great deal of pleasure`
16. 它和现代赛车很不同，但一点也不缺少刺激
    - `very different from modern car races`
    - `but no less exciting`

Student memory prompt:

`先记中文比赛线：每年旧车赛 -> 去年很多车参加 -> 开赛前很兴奋 -> 漂亮的 Rolls-Royce -> 奇特的三轮 Benz -> 1885 年制造 -> 砰砰响后开赛 -> 很多车抛锚 -> 司机钻车底修 -> 少数车完赛 -> 冠军 40 mph -> 冲下坡难停住 -> 大家很开心 -> 和现代赛车不同但同样刺激。再把英文短语挂到每个节点上。`

Do not show this as an all-English arrow chain in the student-facing courseware.

## Recitation Blocks

Break the passage into four Chinese-first recitation blocks:

### Block 1: 旧车比赛和开赛前的兴奋

Chinese anchor:

`每年都会为旧车举行一次比赛。去年很多车参加了这场比赛，比赛开始前大家非常兴奋。`

English chunks:

- `Once a year`
- `a race is held`
- `for old cars`
- `A lot of cars entered`
- `there was a great deal of excitement`
- `just before it began`

Teaching point:

- This block establishes the event and the crowd mood.
- Teach passive voice through `a race is held`.
- Connect `a lot of` and `a great deal of` as quantity expressions.

### Block 2: 两辆最有记忆点的老车

Chinese anchor:

`最漂亮的车之一是 Rolls-Royce Silver Ghost；最特别的车是一辆只有三个轮子的 Benz。它造于 1885 年，是参赛车里最老的一辆。`

English chunks:

- `One of the most handsome cars`
- `a Rolls-Royce Silver Ghost`
- `The most unusual car`
- `a Benz`
- `which had only three wheels`
- `Built in 1885`
- `the oldest car taking part`

Teaching point:

- This block uses superlatives to make the lineup memorable.
- Explain `handsome` for a car as elegant or good-looking.
- Keep car history light and visual.

### Block 3: 比赛开始，老车纷纷出状况

Chinese anchor:

`一阵响亮的发动机爆响之后，比赛开始了。很多车在赛道上抛锚，有些司机修车的时间比开车的时间还多。`

English chunks:

- `After a great many loud explosions`
- `the race began`
- `Many of the cars broke down`
- `on the course`
- `some drivers spent more time`
- `under their cars`
- `than in them`

Teaching point:

- This block is the mechanical comedy.
- `explosions` means engine pops, not bombs.
- The `under their cars than in them` sentence should be treated as a vivid joke.

### Block 4: 少数车完赛，冠军下坡难停

Chinese anchor:

`不过，还是有几辆车完成了比赛。冠军车达到每小时 40 英里，比任何对手都快得多。比赛最后它冲下山坡，司机费了很大劲才把车停住。大家很开心，因为它和现代赛车不同，却同样刺激。`

English chunks:

- `A few cars, however`
- `completed the race`
- `The winning car`
- `reached a speed of forty miles an hour`
- `much faster than any of its rivals`
- `sped downhill`
- `had a lot of trouble trying to stop it`
- `gave everyone a great deal of pleasure`
- `very different from modern car races`
- `but no less exciting`

Teaching point:

- This block resolves the race without making speed the only excitement.
- Teach `however` as the turn from breakdowns to completion.
- Teach `no less exciting` as "just as exciting".

## Modern Child Bridge

For a modern child, connect the text to familiar vehicle and game experiences:

- racing games where speed and finishing matter
- Formula 1 or sports-car clips, but only as a contrast
- electric cars that are quiet and reliable
- museums where old machines are preserved
- vintage-car shows, parades, or demonstrations

Suggested child-facing line:

`你熟悉的车可能很快、很安静、很稳定；但 old cars 的魅力恰好相反：它们会响、会坏、需要人修，所以每跑完一段都像一次小冒险。`

Do not replace the original story with a modern racing game. Use the modern
bridge only to make the old-car race understandable.

## Old-Car Race Bridge

Keep this background short and concrete.

Student-facing explanation:

`old cars race 不是为了证明谁是世界最快，而是让很早以前的车重新跑起来。观众喜欢看的不只是速度，还有这些老机器的样子、声音、历史感，以及它们会不会顺利跑完全程。`

Important boundaries:

- Do not make the lesson about car brands or modern motorsport rankings.
- Do not overteach engine mechanics.
- Do not make old cars look like broken trash; they should feel charming,
  historical, and fragile.

## Title And Humor Bridge

### `Faster than sound!`

Teach the title after the student understands the race.

- The car is not literally faster than sound.
- The winning speed is only `forty miles an hour`.
- The title is a playful, dramatic way to describe a loud, exciting old-car
  race.

Child-facing line:

`标题 Faster than sound! 有点像在开玩笑：车其实不快，但声音很大，场面很热闹，大家觉得特别 exciting。`

### `no less exciting`

Use the ending to connect back to the title:

- Modern races may be much faster.
- This old-car race is different.
- But it is `no less exciting`: just as exciting in another way.

## Main Language Focus

### Quantity Expressions

Core expressions:

- `A lot of cars`
- `a great deal of excitement`
- `a great many loud explosions`
- `Many of the cars`
- `some drivers`
- `A few cars`
- `a great deal of pleasure`

Teaching:

- These expressions create the scale of the event.
- Keep the distinction practical:
  - `a lot of` for many cars
  - `a great deal of` for uncountable feeling / pleasure
  - `a great many` for many countable events or things
  - `a few` for a small number that still matters

Student-facing idea:

`这一课数量词很多，因为作者在写一场热闹的比赛：很多车、很多兴奋、很多爆响、很多车坏掉，但仍有几辆完成。`

### Comparatives And Superlatives

Core expressions:

- `one of the most handsome cars`
- `the most unusual car`
- `the oldest car`
- `much faster than any of its rivals`
- `no less exciting`

Teaching:

- Superlatives help the student remember the two special cars.
- Comparatives help the student remember the winning car.
- `no less exciting` is a high-value writing phrase for comparing two things
  without saying one is worse.

### Passive And Reduced Participle

Core sentences:

- `a race is held for old cars`
- `Built in 1885, it was the oldest car taking part.`

Teaching:

- `is held` puts the focus on the event, not the organizer.
- `Built in 1885` means "because it was built in 1885".
- Do not overteach participle grammar; connect it to the car's age.

### Mechanical Comedy Sentence

Core sentence:

`some drivers spent more time under their cars than in them`

Teaching:

- This is a visual sentence, almost like a joke in a cartoon.
- `under their cars` means repairing from below.
- `than in them` means they were not actually driving very much.

Student-facing line:

`这句话非常有画面感：比赛本来应该坐在车里开，结果很多时间是在车底下修。`

### `had trouble trying to...`

Core sentence:

`its driver had a lot of trouble trying to stop it`

Teaching:

- Useful pattern: `have trouble doing something`.
- Here it means stopping the old car was difficult.
- Keep it comic and safe.

## Vocabulary Plan

Prioritize vocabulary that supports the old-car race, mechanical trouble, and
comparison.

### `sound`

- In the title, it connects to noise and exaggeration.
- Do not teach it as a physics lesson unless briefly clarifying that the title
  is not literal.

### `race`

- A competition where people try to finish first.
- Here it is an old-car race, not a modern high-speed race.

### `held`

- In `a race is held`, means organized or takes place.
- Pair with annual events: `is held once a year`.

### `entered`

- Means joined or took part in a competition.
- Pair with `entered for this race`.

### `excitement`

- The feeling before something interesting happens.
- Pair with `a great deal of excitement`.

### `handsome`

- For people: good-looking.
- For cars or objects: elegant and beautiful.
- Here it describes the Rolls-Royce.

### `Rolls-Royce Silver Ghost`

- Proper noun.
- Explain lightly as a famous elegant old car.
- Do not put readable brand text inside images.

### `Benz`

- Proper noun.
- Explain lightly as a very early car in the lesson.
- The key memory point is `only three wheels`.

### `wheel`

- A round part a vehicle moves on.
- Make `three wheels` visual.

### `explosion`

- Here: loud engine pop or bang.
- Not a bomb.

### `break down`

- A machine or car stops working.
- Pair with old cars and repairs.

### `course`

- Race route or track.
- Not a school subject.

### `complete`

- Finish something.
- Pair with `completed the race`.

### `speed`

- How fast something moves.
- Pair with `forty miles an hour`.

### `rival`

- Competitor or opponent in a race.
- Not necessarily an enemy.

### `downhill`

- Moving down a slope or hill.
- Make it visual in Frame 4.

### `pleasure`

- Enjoyment or happiness.
- Pair with `gave everyone a great deal of pleasure`.

### `modern`

- Of the present time or recent times.
- Useful contrast with old cars.

## Storyboard Continuity Rule

The storyboard must be designed as four linked shots from the same short film.
This is a production requirement, not an optional style preference.

Continuity spine:

`old-car lineup -> loud start -> breakdown repairs -> downhill finish`

Frame-to-frame continuity:

- Frame 1 establishes the race start, crowd, old-car lineup, elegant car,
  unusual three-wheeled car, winning car, and driver.
- Frame 2 keeps the same starting area and vehicles; loud engine pops send the
  old cars forward.
- Frame 3 keeps the same route and cars; several old cars break down while
  drivers repair them underneath.
- Frame 4 keeps the same winning car and driver; the car goes downhill toward
  the finish, the driver works hard to stop it, and the crowd enjoys the result.

Prompt discipline:

- Do not generate four unrelated vintage-car posters.
- Do not change the winning driver's clothing, age, face, or car between
  frames.
- Do not turn engine explosions into dangerous fire or bombs.
- Do not show crashes or injuries.
- Do not show modern race cars dominating the scene.
- Do not put readable race banners, number plates, maps, or car logos in the
  image.
- Keep the old cars charming, not junk-like.

## Visual Direction

Overall visual style:

- Warm, realistic, child-friendly vintage motorsport comedy.
- Gentle period feeling, but not a museum lecture.
- Same winning car and driver across frames.
- Same race route and crowd across frames.
- No readable text inside images.
- No labels, captions, speech bubbles, or UI-like boxes.

The visuals should help the student remember:

`annual old-car race -> special old cars -> noisy start -> breakdowns -> a few finish -> forty miles an hour -> downhill trouble -> no less exciting`

Avoid:

- modern supercars replacing the old cars
- fiery explosions, smoke disasters, crashes, injuries, ambulances, or police
- car-brand logos as readable text
- disconnected images with no causal link
- making the old-car drivers look foolish or incompetent
- visual text inside signs, flags, dashboards, or plaques

## Character Consistency Brief

Use a consistent winning car and driver:

`A cheerful adult driver in a leather driving cap, round goggles pushed up, cream shirt, dark vest, brown driving gloves, medium build, friendly focused face, driving the same dark green vintage open-top car with brass lamps, thin wheels, and no readable logos or numbers.`

Supporting elements:

- A bright outdoor country race route with gentle hills, crowd barriers without
  readable signs, and spectators in period-inspired clothing.
- Several old cars with varied shapes, including one elegant luxury-looking car
  and one unusual three-wheeled car.
- The same winning car should appear in all frames.
- The three-wheeled Benz-like car should be visible in Frames 1-2 if useful,
  but it should not steal continuity from the winning car.

## Four-Frame Storyboard Intent

### Frame 1: Annual Old-Car Race Lineup

Purpose:

- Establish the event and excitement.
- Make old cars visibly different from modern cars.

Visual:

- A starting line for an old-car race on a country road.
- The same winning driver sits in or stands beside the dark green vintage car.
- Several old cars line up nearby, including one elegant luxury-looking car and
  one unusual three-wheeled car.
- Spectators look excited.
- No readable signs, banners, logos, number plates, or labels.

Teaching content:

- `Once a year`
- `a race is held for old cars`
- `A lot of cars entered`
- `a great deal of excitement`
- `most handsome`
- `most unusual`

Continuity note:

- This frame establishes the driver, winning car, race route, crowd, and old-car
  lineup that must remain consistent later.

### Frame 2: Loud Engine Pops And The Start

Purpose:

- Show the race beginning after loud engine pops.
- Make the title's sound joke understandable.

Visual:

- Same starting area and same old cars beginning to move.
- Engines puff and pop with small harmless smoke puffs.
- The crowd reacts with excitement.
- The winning car starts forward with the same driver.
- No fireballs, bombs, or dangerous explosions.

Teaching content:

- `After a great many loud explosions`
- `the race began`
- `Faster than sound!`
- `old cars`

Continuity note:

- This frame should clearly follow from the lineup in Frame 1.
- The engine noise should be comic mechanical noise, not disaster.

### Frame 3: Breakdowns On The Course

Purpose:

- Show the mechanical comedy.
- Make the `under their cars than in them` sentence unforgettable.

Visual:

- Same race route farther along the course.
- Several old cars have stopped at the roadside.
- Drivers repair cars from underneath or kneel beside wheels.
- The same winning car continues forward past the breakdowns.
- The mood is busy and funny, not dangerous.

Teaching content:

- `Many of the cars broke down`
- `on the course`
- `some drivers spent more time`
- `under their cars`
- `than in them`
- `A few cars, however`

Continuity note:

- This frame must be the consequence of the noisy start.
- The winning car should still be recognizable and moving.

### Frame 4: Downhill Finish And Trouble Stopping

Purpose:

- Resolve the race and show why it was exciting.
- Make the modest speed feel dramatic without glamorizing danger.

Visual:

- Same winning car speeds gently downhill near the finish area.
- The same driver looks focused while trying to slow or stop the car.
- Spectators cheer and laugh with pleasure.
- The car is stable; no crash or injury.
- The hill, route, and crowd connect visually to earlier frames.

Teaching content:

- `The winning car`
- `reached a speed of forty miles an hour`
- `much faster than any of its rivals`
- `sped downhill`
- `had a lot of trouble trying to stop it`
- `no less exciting`

Continuity note:

- The frame should feel like the end of the same race.
- It should show excitement and relief, not a dangerous accident.

## Script And Courseware Presentation

The script should follow this pacing:

1. Short hook: old cars, noise, breakdowns, playful title.
2. Four `retell` frames:
   - Frame 1: annual old-car race and special car lineup.
   - Frame 2: loud engine pops and race start.
   - Frame 3: breakdowns and drivers repairing cars.
   - Frame 4: winning car downhill, difficult stop, happy crowd.
3. Discussion:
   - why the title is humorous exaggeration.
   - old-car race versus modern race.
   - Rolls-Royce Silver Ghost and three-wheeled Benz as light background.
   - `explosions`, `break down`, `course`, `rivals`.
   - quantity expressions and comparison expressions.
4. Passage normal reading.
5. Three vocabulary blocks.
6. Grammar board.
7. You Too living-scene transfer.
8. Outro with the full practice order.

The opening must not contain the full story chain. Do not say all of:

`旧车赛 -> Rolls-Royce -> 三轮 Benz -> 发动机爆响 -> 车坏 -> 司机修车 -> 冠军 40 mph -> 下坡难停 -> 大家开心`

inside the hook. Save that sequence for the four retell frames.

Student-facing Chinese should feel like a guided race comedy:

- `先看为什么旧车比赛会让大家兴奋。`
- `再看两辆最有记忆点的车。`
- `然后看比赛为什么变成修车喜剧。`
- `最后看冠军为什么不快也很刺激。`

## Read-Aloud And Pronunciation Direction

Choose 5-8 high-value sentences for read-aloud. Suggested targets:

1. `Once a year, a race is held for old cars.`
   - Focus: `Once a year`, passive `is held`.
2. `A lot of cars entered for this race last year and there was a great deal of excitement just before it began.`
   - Focus: quantity expressions, long-sentence grouping.
3. `One of the most handsome cars was a Rolls-Royce Silver Ghost.`
   - Focus: superlative rhythm, proper noun.
4. `The most unusual car was a Benz which had only three wheels.`
   - Focus: `most unusual`, `which had only three wheels`.
5. `Built in 1885, it was the oldest car taking part.`
   - Focus: `Built in 1885`, `oldest`, `taking part`.
6. `Many of the cars broke down on the course and some drivers spent more time under their cars than in them!`
   - Focus: humor, `broke down`, `course`, contrast stress.
7. `The winning car reached a speed of forty miles an hour -- much faster than any of its rivals.`
   - Focus: speed phrase, comparative `much faster than`.
8. `It was very different from modern car races but no less exciting.`
   - Focus: contrast, `no less exciting`.

Read-aloud feedback should reward:

- clear grouping of long race-description sentences
- natural stress on quantity and comparison words
- expressive reading of the comic repair sentence
- careful pronunciation of `Rolls-Royce`, `Silver Ghost`, `Benz`, `explosions`,
  `course`, `rivals`, and `downhill`

## Living-Scene Exercise Direction

Use a modern safe transfer that preserves old object, unpredictable trouble,
and "not fast but exciting".

Recommended scene:

`The Old Bike Race`

Chinese setup:

`孩子和朋友们参加一个旧自行车趣味赛。大家骑的不是最快的新车，而是家里很旧、很有特点的自行车。有的车链条掉了，有的轮胎没气了。最后一辆旧车慢慢骑完了全程，虽然速度不快，但大家觉得一点也不比正式比赛少 exciting。`

Target transfer:

- `Once a year`
- `entered for this race`
- `a great deal of excitement`
- `broke down`
- `on the course`
- `completed the race`
- `reached a speed`
- `much faster than`
- `had trouble trying to...`
- `no less exciting`

This keeps the lesson's race-comedy structure without encouraging unsafe car
driving.

## Suggested You Too Scene

Scene title:

`The Old Bike Race`

Role:

- Student tells a short race story about old bicycles or toy cars.
- Parent/teacher asks guiding questions.

Expected student output shape:

1. `Once a year, a race is held for old bikes.`
2. `A lot of children entered for this race last year.`
3. `There was a great deal of excitement before it began.`
4. `Many of the bikes broke down on the course.`
5. `A few bikes, however, completed the race.`
6. `The winning bike reached a speed of fifteen miles an hour.`
7. `It was very different from a modern bike race but no less exciting.`

Keep the exercise short. The goal is transfer of quantity, race sequence,
breakdown humor, and `no less exciting`, not a new long sports story.

## Extension Practice Direction

Lesson 56 extension production should be extension-only if the main lesson
assets already exist. Create `web/data/extension/lesson_56.json` and register
`56` in `web/data/extension/index.json`. Do not regenerate script, audio,
timeline, read-aloud data, or storyboard images.

### Extension Reading

Use an original same-theme short passage about an old-vehicle race or display
race. Do not retell the vintage-car event with the Rolls-Royce, three-wheeled
Benz, repeated breakdowns, forty miles an hour, and downhill finish. A safe
modern bridge can be an old-bike race, model-car course, school cart race, or
museum-yard demonstration. The race should be slow, funny, and safe: old
vehicles break down, a few finish, and the winner is not fast by modern
standards but is still exciting.

Suggested title: `The Old Bike Race`

Recommended word bank: `once a year`, `race`, `entered`, `excitement`,
`well-kept`, `take part`, `break down`, `course`, `rival`, `no less exciting`.

The 5 reading questions should test:

1. what kind of race was held
2. which vehicle was oldest or most unusual
3. what happened to many vehicles on the course
4. how fast the winner went
5. why the race was still exciting

### Sentence Writing

Use 5 patterns:

1. `Once a year, ... is held`
   - Source: `Once a year, a race is held for old cars.`
   - Focus: passive for regular events.
   - Must include: `Once a year` and `is held`
2. `a great deal of ...`
   - Source: `There was a great deal of excitement just before it began.`
   - Focus: uncountable quantity.
   - Must include: `a great deal of`
3. `Built in ..., ...`
   - Source: `Built in 1885, it was the oldest car taking part.`
   - Focus: compact past-participle opener.
   - Must include: `Built in`
4. `spent more time ... than ...`
   - Source: `Some drivers spent more time under their cars than in them.`
   - Focus: comic comparison.
   - Must include: `spent more time` and `than`
5. `very different from ... but no less exciting`
   - Source: `It was very different from modern car races but no less exciting.`
   - Focus: contrast without lowering value.
   - Must include: `very different from` and `no less exciting`

## Chinese-To-English Exercise Direction

The translation practice should reinforce the race chain, quantity expressions,
and comparison expressions.

Suggested chunk logic:

1. 每年都会为旧车举行一次比赛；去年很多车参加了这场比赛。
2. 比赛开始前非常令人兴奋，其中最漂亮的一辆车是 Rolls-Royce Silver Ghost。
3. 最特别的一辆车是只有三个轮子的 Benz，它造于 1885 年，是参赛车中最老的一辆。
4. 一阵响亮的发动机爆响之后，比赛开始了；很多车在赛道上抛锚。
5. 有些司机修车的时间比开车的时间还多，但还是有几辆车完成了比赛。
6. 获胜的车达到每小时 40 英里的速度，比任何对手都快得多。
7. 它最后冲下山坡，司机很难把它停住；这场比赛和现代赛车不同，但同样刺激。

High-value expressions to preserve:

- `Once a year`
- `a race is held`
- `entered for this race`
- `a great deal of excitement`
- `one of the most handsome cars`
- `the most unusual car`
- `which had only three wheels`
- `Built in 1885`
- `After a great many loud explosions`
- `broke down on the course`
- `spent more time under their cars than in them`
- `A few cars, however`
- `reached a speed of forty miles an hour`
- `much faster than any of its rivals`
- `sped downhill`
- `had a lot of trouble trying to stop it`
- `no less exciting`

If manual chunks are added to `web/data/lessons.json`, Chinese and English chunk
counts must match. Otherwise rely on the frontend fallback.

## Grammar Board

### 1. Passive Event Expression

Board idea:

`a race is held`

Example:

- `Once a year, a race is held for old cars.`

Chinese anchor:

`比赛被举行，也就是“有一场比赛”。重点是活动本身，不是谁组织。`

### 2. Quantity Expressions

Board idea:

`a lot of / a great deal of / a great many / many / some / a few`

Examples:

- `A lot of cars entered.`
- `a great deal of excitement`
- `a great many loud explosions`
- `A few cars completed the race.`

Chinese anchor:

`很多车、很多兴奋、很多爆响、一些司机、几辆车。数量词帮我们看见这场比赛有多热闹。`

### 3. Superlatives

Board idea:

`the most... / the oldest`

Examples:

- `one of the most handsome cars`
- `the most unusual car`
- `the oldest car taking part`

Chinese anchor:

`最漂亮之一、最特别、最老。作者用“最”让几辆车变得好记。`

### 4. `Built in 1885`

Core phrase:

`Built in 1885, it was the oldest car taking part.`

Teaching:

- Meaning: because it was built in 1885.
- Useful reduced phrase for background information.
- Keep it tied to the old car; do not overtheorize.

### 5. Comparative With `much`

Core phrase:

`much faster than any of its rivals`

Teaching:

- `faster than` compares speed.
- `much faster` makes the difference stronger.
- `rivals` means competitors.

### 6. `spend time doing`

Core sentence:

`some drivers spent more time under their cars than in them`

Teaching:

- Pattern: `spend time doing / spend time somewhere`.
- This sentence is memorable because it compares repairing with driving.

### 7. `have trouble doing`

Core phrase:

`had a lot of trouble trying to stop it`

Teaching:

- Pattern: `have trouble doing something`.
- Meaning: it was difficult to do.

### 8. `no less exciting`

Board idea:

`different, but no less exciting`

Example:

- `It was very different from modern car races but no less exciting.`

Chinese anchor:

`不一样，但一点也不差；不是速度更快，而是刺激感不输。`

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

`这一课先把旧车比赛喜剧线背熟：每年旧车赛 -> 开赛前很兴奋 -> 漂亮的 Rolls-Royce -> 奇特的三轮 Benz -> 发动机爆响 -> 车在赛道上抛锚 -> 司机在车底修车 -> 少数车完赛 -> 冠军 40 mph 下坡难停 -> 和现代赛车不同但同样刺激。跟读时注意数量词和比较级；生活场景里，用 broke down, completed the race, much faster than, no less exciting 讲一个自己的“旧东西也很好玩”的比赛故事。`

## Acceptance Criteria

- The extension practice follows the `Extension Practice Direction` above,
  creates `web/data/extension/lesson_56.json`, and registers the lesson in
  `web/data/extension/index.json`.
Lesson 56 is ready for production when:

- The opening hook is 4-6 spoken lines and does not retell the whole passage.
- The lesson is framed as an old-car race comedy, not a modern racing lecture.
- The student-facing story spine is Chinese-first.
- The title `Faster than sound!` is explained as playful exaggeration, not a
  literal physics claim.
- The winning speed `forty miles an hour` is kept clear.
- `explosions` is explained and illustrated as harmless old-engine pops, not
  bombs or danger.
- `break down`, `course`, `rivals`, `downhill`, and `no less exciting` are
  explained in context.
- Quantity expressions are grouped and taught as part of the race's scale.
- Comparatives and superlatives are tied to the special cars and winning car.
- The four illustrations form one continuous cause-and-effect story line.
- Storyboard prompts preserve the same winning car, same driver, same race
  route, and same crowd across frames.
- Generated illustrations contain no readable text, labels, captions, or empty
  text boxes.
- The old cars look charming, historical, and fragile, not like modern
  supercars or junk.
- The downhill stopping trouble is comic and safe, with no crash, injury, or
  reckless-driving glamour.
- The living-scene transfer uses a safe old-bike or toy-car race scenario.
- Read-aloud includes the quantity sentence, the special-car sentences, the
  repair joke sentence, and the final `no less exciting` sentence.
- The outro includes `⓪ 跟读` before `① 生活场景`, with the concrete read-aloud
  steps.
