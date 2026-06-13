# Lesson 59 Plan - In or out?

This is the source-of-truth design card for producing Lesson 59. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 59 assets.

## Basic Info

- Lesson: 59
- Title: `In or out?`
- Chinese title: `进来还是出去？`
- Core bridge: `这一课不要讲成“训练狗开门”的技巧课，而要讲成一个家庭喜剧：大人想解决 Rex 在门外 barking 的问题，于是训练它用 paw 按 latch，让它自己进 garden。训练非常成功，Rex soon became an expert；但它把这个本领变成了新游戏：自己进来、等门关、叫人放出去、再自己进来、又开始叫。孩子要先看懂：the trick worked, but the problem got worse。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule and the section
responsibility rule in `LESSON_PRODUCTION_PLAN.md`.

- Keep the opening hook short.
  - Use 4-6 spoken lines only.
  - The hook should set up the comic problem: a clever training solution creates
    a new barking loop.
  - Do not retell the whole passage before the four `retell` frames.
  - Do not list the full in-out-in-out sequence in the opening.
- Story spine must be Chinese-first.
  - Present the gate-training-and-barking-loop chain first as Chinese scene
    anchors.
  - Attach short English chunks after each Chinese anchor.
  - Do not use an all-English arrow chain as the main student-facing memory
    path.
- Avoid repeated script content across sections.
  - The four `retell` frames are the only section that should walk through the
    full plot in order.
  - The teacher-student dialogue must not repeat the retell narration.
  - The dialogue should deepen the idea: why did a successful training trick
    fail as a real solution?
  - Vocabulary and grammar sections should explain language tools, not tell the
    story again.
- The four illustrations must form one continuous story line.
  - They are not four isolated dog pictures.
  - Each frame should inherit visible consequences from the previous frame.
  - The same dog Rex, same front gate, same latch, same garden, and same family
    setting should carry through the sequence.
  - The emotional line should accumulate: noisy problem -> clever training ->
    new out-barking problem -> gate removed and Rex annoyed.
  - Storyboard prompts should explicitly describe the causal relation between
    frames, so the images feel like four shots from one short film.
- Generated illustrations must be text-free.
  - No readable English or Chinese text inside images.
  - No readable house signs, gate signs, name tags, labels, posters, captions,
    speech bubbles, UI panels, or fake lesson text.
  - If the courseware needs words such as `bark`, `paw`, `latch`, `in`, or
    `out`, render them as real UI text outside the image.
- Keep the dog comedy safe and warm.
  - Do not make Rex look abandoned, injured, frightened, or in danger.
  - Do not show punishment, anger at the dog, or harsh training.
  - The ending should feel like comic annoyance and mystery, not a lost-pet
    tragedy.
  - If showing Rex leaving after the gate is removed, keep it light and
    storybook-like.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, camera directions,
    or generated-image mechanics.
  - Storyboard prompts must not leak into spoken lesson content.

## Production Warnings

- Source-text issue:
  - The current lesson data in `web/data/lessons.json` contains a corrupted
    first sentence:
    `Our dog, Rex, used to sit outside our front gate and dark.`
  - The corrected passage should read:
    `Our dog, Rex, used to sit outside our front gate and bark.`
  - The same error appears in `cloze.rendered_html`.
  - This affects displayed passage text, cloze text, passage audio, and any
    read-aloud sentence that uses the first sentence.
  - Because changing the passage data would touch `web/data/lessons.json`, a
    production thread should not silently edit the shared lesson text. If
    correction is required for production, stop and ask for approval or make the
    correction only after explicit approval.
- `front gate`, `garden`, and `latch` need visual explanation.
  - Many Chinese children live in apartments and may not picture a house with a
    front gate and garden.
  - Show a simple house gate, not an apartment door.
- `bark` is both the sound and the repeated problem.
  - It is not `dark`.
  - The lesson should connect `bark` to noise complaints and to the in/out loop.
- `neighbours complained of the noise` should be handled gently.
  - The neighbours are not villains; the barking is genuinely noisy.
- `press his paw on the latch` needs concrete action.
  - `paw` is the dog's foot.
  - `latch` is the small gate fastening.
  - Pressing the latch lets Rex open the gate.
- `let himself in` and `let him out` are the core direction phrases.
  - They should be taught together with clear visual arrows or UI text outside
    images if needed.
- `expert at opening the gate` is comic praise.
  - Rex is clever, but the cleverness creates a new problem.
- `got so annoyed we have not seen him since` should not become a sad ending.
  - Treat it as a comic final line.
  - Do not make students worry about pet loss or danger.
- Do not encourage real-life unsafe pet behavior.
  - In real life, pets need safe boundaries and supervision.
  - The story is a comedy about unintended consequences, not pet-care advice.

If production requires editing `web/data/lessons.json`, stop and ask for a
shared-data edit because it is outside the normal per-lesson write set.

## Lesson Positioning

Lesson 59 is a comic story about unintended consequences. Rex used to sit
outside the front gate and bark whenever he wanted to come into the garden.
Because the neighbours complained about the noise, the narrator's husband spent
weeks training Rex to press his paw on the latch and let himself in. Rex quickly
became an expert at opening the gate. But then the problem reversed: when the
narrator was going shopping, she found Rex inside the garden, barking so that
someone would let him out. After that, Rex developed a new bad habit. He opened
the gate from the outside, came in, waited until the gate shut, barked until
someone let him out, then immediately let himself in and began barking again.
Finally, the husband removed the gate. Rex became so annoyed that the family has
not seen him since.

The courseware should make the student understand:

`Rex 过去坐在 front gate 外面 bark -> 每次想进 garden 就一直叫到有人开门 -> 邻居投诉 noise -> 丈夫花几周训练它用 paw 按 latch -> Rex 学会自己 let himself in -> 很快成了 opening the gate 的 expert -> 后来它在 garden 里面靠 gate 叫 -> 这次是想让人 let him out -> 从那以后养成新 bad habit -> 从外面开门进 garden -> 等 gate shuts -> 坐下叫到有人放它出去 -> 出去后马上 let himself in -> 又开始 barking -> 丈夫 removed the gate -> Rex 很 annoyed -> 从此没再见到它`

The central bridge is:

`这不是“狗被成功训练”的故事，而是“一个聪明办法解决了 in，却制造了 out，再变成无限循环”的故事。`

## One-Sentence Hook

Rex learned how to open the gate by himself, but he used the trick to create an
even noisier in-and-out barking game.

## Vivid Teaching Opening

The opening should establish the comic loop quickly. It must be a short hook,
not a complete plot retelling. Keep it to 4-6 spoken lines so the first visual
does not stay on screen too long before the frame-by-frame retell begins.

Suggested teacher narration:

`有时候，大人想训练宠物解决一个 problem。`

`可是宠物太聪明，反而把办法玩成了新 problem。`

`Rex 原来在 gate 外面 barking，因为它想 come into the garden。`

`主人训练它自己开门，结果 Rex really became an expert。`

`今天先抓住这个笑点：he learned the trick, but he used it the wrong way。`

Tone:

- Warm, amused, and family-comedy-like.
- Make Rex clever and funny, not naughty in a harsh way.
- Do not retell the full in/out loop in the hook.
- Save the detailed sequence for the four `retell` frames.

## Section Responsibility And Anti-Repetition Plan

Production must treat the lesson as several sections with distinct jobs.

### Opening

Job:

- Raise the comic problem.
- Make the student curious about how a good training idea becomes worse.
- Keep the hook short.

Do not:

- Explain every step of the in/out loop.
- Describe the gate removal ending.
- Teach all vocabulary before the story starts.

### Four Retell Frames

Job:

- Walk through the plot in order.
- Make the gate mechanism and the repeated loop visible.
- Pair each visual event with Chinese anchors and English chunks.

Do not:

- Spend the retell on pet-care advice.
- Turn each frame into a grammar lecture.

### Teacher-Student Dialogue

Job:

- Deepen the idea of unintended consequences.
- Discuss why the training was successful as a trick but failed as a solution.
- Clarify `let himself in` versus `let him out`.

Do not:

- Retell the full plot again.
- Re-list every bark, gate, and shopping event.

### Vocabulary And Grammar

Job:

- Explain action words and time connectors:
  `bark`, `press`, `paw`, `latch`, `used to`, `would`, `until`, `so that`,
  `As soon as`, `let himself in`, `let him out`.

Do not:

- Restart the story through vocabulary examples.

### Practice And Transfer

Job:

- Move the pattern into a modern child-understandable situation where a clever
  solution creates a new annoying habit.

Do not:

- Encourage annoying others intentionally.
- Make pet behavior unsafe or sad.

## Story Focus

The gate-training comedy chain is:

1. Rex used to sit outside the front gate and bark.
2. Every time he wanted to come into the garden, he barked until someone opened
   the gate.
3. The neighbours complained of the noise.
4. The husband spent weeks training Rex.
5. Rex learned to press his paw on the latch.
6. This let Rex open the gate and let himself in.
7. Rex became an expert at opening the gate.
8. Last week, the narrator was going shopping.
9. She noticed Rex in the garden near the gate.
10. This time Rex barked so that someone would let him out.
11. Since then, Rex developed another bad habit.
12. From the outside, he opened the gate and came into the garden.
13. He waited until the gate shut.
14. He sat and barked until someone let him out.
15. He immediately let himself in again and began barking again.
16. The husband removed the gate.
17. Rex became so annoyed that the family has not seen him since.

The production should make the contrast visible:

`problem: barking to come in` versus `new problem: barking to go out`.

`training success` versus `real-life failure`.

`Rex controls the gate` versus `Rex controls the humans`.

## Chinese-First Story Spine For Courseware

Use this as the main student-facing story line.

1. 我们家的狗 Rex 过去常坐在 front gate 外面叫
   - `Our dog, Rex`
   - `used to sit`
   - `outside our front gate`
   - `and bark`
2. 每次它想进 garden，就一直叫到有人开门
   - `Every time`
   - `he wanted to come into the garden`
   - `he would bark`
   - `until someone opened the gate`
3. 因为邻居投诉 noise，丈夫训练它
   - `As the neighbours complained`
   - `of the noise`
   - `my husband spent weeks`
   - `training him`
4. 他训练 Rex 用 paw 按 latch，把自己放进来
   - `to press his paw`
   - `on the latch`
   - `to let himself in`
5. Rex 很快成了开门 expert
   - `Rex soon became`
   - `an expert`
   - `at opening the gate`
6. 但上周我出去 shopping 时，发现 Rex 在 garden 里靠近 gate
   - `However`
   - `when I was going out shopping`
   - `I noticed him`
   - `in the garden near the gate`
7. 这次它叫，是为了让人把它放出去
   - `This time`
   - `he was barking`
   - `so that someone would let him out`
8. 从那以后，它养成了另一个 bad habit
   - `Since then`
   - `he has developed`
   - `another bad habit`
9. 它一从外面打开 gate，就进 garden
   - `As soon as`
   - `he opens the gate`
   - `from the outside`
   - `he comes into the garden`
10. 然后等 gate 关上
    - `and waits`
    - `until the gate shuts`
11. 接着它坐下叫，直到有人把它放出去
    - `Then he sits`
    - `and barks`
    - `until someone lets him out`
12. 之后它马上又把自己放进来，并再次开始叫
    - `After this`
    - `he immediately lets himself in`
    - `and begins barking again`
13. 昨天丈夫把 gate 拆掉了
    - `Yesterday`
    - `my husband removed the gate`
14. Rex 气坏了，从那以后我们再也没见到它
    - `Rex got so annoyed`
    - `we have not seen him since`

Student memory prompt:

`先记中文循环线：Rex 在 gate 外叫 -> 想进 garden 就叫到有人开门 -> 邻居投诉 -> 丈夫训练它按 latch -> Rex 学会自己进来 -> 成了开门 expert -> 后来在 garden 里叫着要出去 -> 从此形成新 habit -> 外面开门进来 -> 等门关 -> 叫人放出去 -> 马上又自己进来 -> 又叫 -> gate 被拆 -> Rex 生气不见了。再把英文短语挂到每个节点上。`

Do not show this as an all-English arrow chain in the student-facing courseware.

## Recitation Blocks

Break the passage into four Chinese-first recitation blocks:

### Block 1: Rex 在门外叫，邻居投诉

Chinese anchor:

`Rex 过去常坐在 front gate 外面叫。每次它想进 garden，就一直叫到有人开门。因为邻居投诉 noise，丈夫决定训练它。`

English chunks:

- `Our dog, Rex`
- `used to sit outside our front gate`
- `and bark`
- `Every time he wanted to come into the garden`
- `he would bark`
- `until someone opened the gate`
- `the neighbours complained of the noise`

Teaching point:

- This block establishes the original problem.
- Production must use corrected source wording `and bark`.
- Teach `used to` and `would` as old repeated habit.

### Block 2: 训练按 latch，Rex 成为 expert

Chinese anchor:

`丈夫花了几周训练 Rex 用 paw 按 latch，把自己放进来。Rex 很快成了开门专家。`

English chunks:

- `my husband spent weeks`
- `training him`
- `to press his paw`
- `on the latch`
- `to let himself in`
- `Rex soon became`
- `an expert at opening the gate`

Teaching point:

- This block is the successful trick.
- `paw`, `latch`, and `let himself in` should be visual.
- The student should feel that the solution seems clever.

### Block 3: Rex 开始叫着要出去

Chinese anchor:

`然而，上周我出去 shopping 时，发现 Rex 在 garden 里靠近 gate。这一次，它叫是为了让人把它放出去。`

English chunks:

- `However`
- `when I was going out shopping`
- `last week`
- `I noticed him`
- `in the garden near the gate`
- `This time he was barking`
- `so that someone would let him out`

Teaching point:

- This block is the reversal.
- `However` marks the twist.
- `so that` explains the purpose of barking.

### Block 4: 新坏习惯和拆门结尾

Chinese anchor:

`从那以后，Rex 养成了另一个坏习惯：它从外面开门进来，等门关上，再叫人放它出去；出去后又马上自己进来，继续叫。最后丈夫把 gate 拆了，Rex 气得从此不见了。`

English chunks:

- `Since then`
- `has developed another bad habit`
- `As soon as he opens the gate`
- `he comes into the garden`
- `waits until the gate shuts`
- `barks until someone lets him out`
- `immediately lets himself in`
- `begins barking again`
- `removed the gate`
- `got so annoyed`
- `we have not seen him since`

Teaching point:

- This block is the in/out loop and punchline.
- Teach `As soon as` and `until` through the action sequence.
- Keep the ending comic, not sad.

## Modern Child Bridge

For a modern child, connect the text to clever systems that solve one problem
but create another:

- a pet learns to press a button, then presses it all the time
- a smart door opens automatically, then a child or pet keeps triggering it
- a phone notification solves one reminder problem but creates constant alerts
- a child learns a shortcut in a game and overuses it
- a robot vacuum learns a route but gets stuck repeating a loop

Suggested child-facing line:

`你可以把 Rex 想成学会了一个“按钮”的宠物。大人以为它学会以后就安静了，结果它发现：只要我开门、等门关、再叫，人类就会被我指挥。`

Do not replace the original story. Use the modern bridge to make the gate and
latch logic easy to understand.

## Front Gate, Garden, And Latch Bridge

Keep this background short and visual.

Student-facing explanation:

`这里的 front gate 不是公寓门，而是房子外面通向 garden 的小门。latch 是门上的小门闩，Rex 用 paw 按住 latch，就能把 gate 打开。`

Important boundaries:

- Do not overteach British house architecture.
- Show the physical action clearly in the retell frames.
- Keep the focus on the comedy of in and out.

## Teacher-Student Dialogue Direction

The dialogue section must not repeat the plot. It should explore the solution
failure through a short conversation.

Recommended dialogue path:

1. Teacher asks:
   `Rex 学会按 latch 以后，训练算成功了吗？`
2. Student:
   `算成功了，因为它会自己进来了。`
3. Teacher:
   `Right. The trick worked. But did it solve the real problem?`
4. Student:
   `没有，因为它还是一直叫。`
5. Teacher:
   `Exactly. The real goal was not "open the gate"; the real goal was "stop barking".`
6. Teacher asks:
   `后来 Rex 是想进来，还是想出去？`
7. Student:
   `一会儿进来，一会儿出去。`
8. Teacher:
   `That is the joke: Rex learned the trick, then turned it into an in-and-out habit.`

Keep this section short. It should feel like a new thinking angle after retell,
not a second retell.

## Main Language Focus

### Past Habit: `used to` And `would`

Core expressions:

- `used to sit outside our front gate`
- `he would bark until someone opened the gate`

Teaching:

- `used to` shows an old habit.
- `would` shows repeated action in the past.
- Keep both tied to Rex's old barking pattern.

Student-facing idea:

`used to 和 would 在这里不是抽象语法，而是在写 Rex 以前每天反复做的事。`

### Purpose: `so that`

Core sentence:

`This time he was barking so that someone would let him out.`

Teaching:

- `so that` explains why Rex is barking.
- First he barked to come in; now he barks to go out.
- This phrase carries the reversal.

### Time Connectors: `Every time`, `As soon as`, `until`

Core expressions:

- `Every time he wanted...`
- `As soon as he opens the gate...`
- `waits until the gate shuts`
- `barks until someone lets him out`

Teaching:

- These expressions create the repeated loop.
- They are more important than a long grammar label.
- Use a visual sequence if the UI supports it.

### Direction Phrases: `let himself in` And `let him out`

Core expressions:

- `to let himself in`
- `so that someone would let him out`
- `he immediately lets himself in`

Teaching:

- `in` and `out` are the title and the joke.
- `himself` means Rex does it by himself.
- `someone lets him out` means a human opens the way for him.

### `spend time doing`

Core phrase:

`my husband spent weeks training him`

Teaching:

- Pattern: `spend + time + doing`.
- Good everyday expression.

### `expert at`

Core phrase:

`an expert at opening the gate`

Teaching:

- `expert at doing something`.
- Here it is comic because Rex becomes too good at the gate.

### Result: `so annoyed...since`

Core sentence:

`Rex got so annoyed we have not seen him since.`

Teaching:

- The ending is compressed and comic.
- `since` means from that time until now.
- Do not make it emotionally heavy.

## Vocabulary Plan

Prioritize vocabulary that supports the gate action and habit loop.

### `bark`

- The sound a dog makes.
- This is the repeated problem.
- Correct source text must say `and bark`, not `and dark`.

### `front gate`

- The gate in front of a house or garden.
- Needs visual explanation for apartment-living children.

### `garden`

- In British English, often means the yard / outdoor space around a house.
- In this text, Rex wants to come into the garden.

### `neighbour`

- Someone living nearby.
- The neighbours complain because the barking is noisy.

### `complain`

- Say that something is wrong or annoying.
- Pair with `complained of the noise`.

### `noise`

- Unwanted or unpleasant sound.
- The reason for training Rex.

### `spend`

- Use time or money.
- Here: `spent weeks training him`.

### `training`

- Teaching a person or animal to do something by practice.
- Keep it gentle and positive.

### `press`

- Push down with force.
- Rex presses the latch with his paw.

### `paw`

- A dog or cat's foot.
- Needs visual support.

### `latch`

- A small fastening on a gate or door.
- Central object in Frame 2.

### `let himself in`

- Open the way and enter by himself.
- Pair with `let him out`.

### `expert`

- Someone very good at something.
- Rex becomes an expert at opening the gate.

### `notice`

- See or become aware of something.
- The narrator notices Rex inside the garden.

### `develop`

- Gradually form or acquire.
- Here: Rex develops another bad habit.

### `habit`

- Something done repeatedly.
- The in/out loop becomes a bad habit.

### `shut`

- Close.
- Rex waits until the gate shuts.

### `immediately`

- At once, right away.
- Rex immediately lets himself in again.

### `remove`

- Take away.
- The husband removes the gate.

### `annoyed`

- Irritated or upset.
- Rex is annoyed when the gate is removed.

## Storyboard Continuity Rule

The storyboard must be designed as four linked shots from the same short film.
This is a production requirement, not an optional style preference.

Continuity spine:

`barking outside -> latch training -> barking inside to go out -> gate removed`

Frame-to-frame continuity:

- Frame 1 establishes Rex, the front gate, the garden, the house, and the noise
  problem.
- Frame 2 keeps the same gate and garden; the husband trains Rex to press the
  latch with his paw.
- Frame 3 keeps the same gate and garden; Rex is now inside, barking so someone
  will let him out.
- Frame 4 keeps the same setting; the gate has been removed, and Rex looks
  annoyed before disappearing from the family's routine.

Prompt discipline:

- Do not generate four unrelated dog scenes.
- Do not change Rex's breed, coat color, size, or face between frames.
- Do not change the gate, latch, garden, or house layout.
- Do not show harsh training, punishment, danger, injury, or sadness.
- Do not place readable labels, signs, or text in the image.
- Keep the gate mechanism clear, especially the latch action.

## Visual Direction

Overall visual style:

- Warm, realistic, child-friendly family comedy.
- Same house garden and same front gate across frames.
- Same Rex across frames.
- No readable text inside images.
- No labels, captions, speech bubbles, or UI-like boxes.

The visuals should help the student remember:

`outside barking -> neighbours complain -> paw on latch -> Rex opens gate -> inside barking to go out -> repeated loop -> gate removed -> Rex annoyed`

Avoid:

- scary or sad lost-dog mood
- aggressive adults or punishment
- modern apartment hallway replacing the garden gate
- disconnected dog portraits with no gate action
- text boxes, labels, house signs, or fake lesson text inside images
- making Rex look unsafe near roads or traffic

## Character And Object Consistency Brief

Use a consistent Rex:

`A medium-sized friendly brown-and-white dog named Rex, floppy ears, bright eyes, expressive face, wagging tail when clever, slightly stubborn posture when barking, same collar without readable tag, same coat pattern across all frames.`

Use a consistent husband / trainer:

`A patient adult man in casual home clothes, average build, short dark hair, kind expression, kneeling or standing near the front gate while training Rex, never angry or harsh.`

Supporting elements:

- A house front garden with a low wooden or metal front gate.
- A visible latch mechanism that can be pressed by Rex's paw.
- A neighbour or house window may appear in Frame 1 to show noise complaints,
  but no readable signs.
- The gate should be present in Frames 1-3 and removed in Frame 4.

## Four-Frame Storyboard Intent

### Frame 1: Barking Outside The Front Gate

Purpose:

- Establish the original problem.
- Show why the family needs a solution.

Visual:

- Rex sits outside the front gate of a house garden.
- He barks toward the garden or house.
- A neighbour or family member looks mildly bothered by the noise.
- The gate and garden are clearly visible.
- No readable signs, labels, or text.

Teaching content:

- `used to sit outside our front gate`
- `and bark`
- `Every time`
- `would bark until someone opened the gate`
- `neighbours complained of the noise`

Continuity note:

- This frame establishes Rex, the gate, garden, and noise problem.

### Frame 2: Training Rex To Press The Latch

Purpose:

- Show the clever training solution.
- Make `paw` and `latch` visible.

Visual:

- Same gate and garden.
- The husband gently trains Rex to press his paw on the gate latch.
- Rex looks focused and clever.
- The latch is visible but contains no labels.
- The scene feels patient and friendly.

Teaching content:

- `spent weeks training him`
- `to press his paw`
- `on the latch`
- `to let himself in`
- `became an expert`

Continuity note:

- This frame should clearly show how Rex gains the trick that causes the later
  loop.

### Frame 3: Barking Inside To Be Let Out

Purpose:

- Show the reversal.
- Make `let him out` contrast with `let himself in`.

Visual:

- Same garden and gate.
- Rex is now inside the garden near the closed gate.
- He barks toward the outside, wanting someone to let him out.
- The narrator or family member notices him while preparing to go shopping.
- The mood is surprised and funny.

Teaching content:

- `when I was going out shopping`
- `I noticed him`
- `in the garden near the gate`
- `This time he was barking`
- `so that someone would let him out`
- `another bad habit`

Continuity note:

- The frame should feel like the direct twist after Rex learned to open the
  gate.

### Frame 4: Gate Removed, Rex Annoyed

Purpose:

- Show the final punchline.
- Make the removed gate and Rex's annoyance visible.

Visual:

- Same garden entrance, but the gate has been removed.
- The husband stands nearby with the removed gate or empty gateposts.
- Rex looks annoyed and confused, maybe walking away with comic dignity.
- The family looks puzzled rather than devastated.
- No danger, road traffic, or sad lost-dog tone.

Teaching content:

- `immediately lets himself in`
- `begins barking again`
- `removed the gate`
- `got so annoyed`
- `we have not seen him since`

Continuity note:

- This frame should be a comic conclusion to the loop, not a tragic ending.

## Script And Courseware Presentation

The script should follow this pacing:

1. Short hook: clever training solution creates a new barking loop.
2. Four `retell` frames:
   - Frame 1: Rex barks outside the front gate.
   - Frame 2: husband trains Rex to press the latch.
   - Frame 3: Rex barks inside the garden to be let out.
   - Frame 4: gate removed; Rex annoyed.
3. Teacher-student dialogue:
   - Do not retell the plot.
   - Discuss why the trick worked but the real problem remained.
   - Contrast `let himself in` and `let him out`.
4. Passage normal reading.
5. Three vocabulary blocks.
6. Grammar board.
7. You Too living-scene transfer.
8. Outro with the full practice order.

The opening must not contain the full story chain. Do not say all of:

`Rex barked outside -> neighbours complained -> husband trained him -> Rex pressed the latch -> Rex became expert -> barked inside to go out -> came in and out repeatedly -> gate removed -> Rex disappeared`

inside the hook. Save that sequence for the four retell frames.

The teacher-student dialogue must not contain the full story chain either. It
should be a theme discussion after the student already understands the events.

Student-facing Chinese should feel like a guided comic loop:

- `先看原来的问题：Rex 想进来，所以叫。`
- `再看聪明办法：用 paw 按 latch。`
- `然后看新问题：Rex 又想出去，所以叫。`
- `最后看这个办法怎样被 Rex 玩成了 in-out loop。`

## Read-Aloud And Pronunciation Direction

Choose 5-8 high-value sentences for read-aloud. Suggested targets:

1. `Our dog, Rex, used to sit outside our front gate and bark.`
   - Focus: corrected source wording, `used to`, `front gate`, `bark`.
2. `Every time he wanted to come into the garden he would bark until someone opened the gate.`
   - Focus: `Every time`, `would`, `until`.
3. `As the neighbours complained of the noise, my husband spent weeks training him to press his paw on the latch to let himself in.`
   - Focus: long sentence grouping, `press his paw`, `latch`, `let himself in`.
4. `Rex soon became an expert at opening the gate.`
   - Focus: `expert at`, comic praise.
5. `This time he was barking so that someone would let him out!`
   - Focus: reversal, `so that`, `let him out`.
6. `As soon as he opens the gate from the outside, he comes into the garden and waits until the gate shuts.`
   - Focus: action sequence, `As soon as`, `until`.
7. `Then he sits and barks until someone lets him out.`
   - Focus: repeated loop, `until someone lets him out`.
8. `After this he immediately lets himself in and begins barking again.`
   - Focus: `immediately`, `lets himself in`, loop.

Optional final sentence if production wants the punchline in read-aloud:

`Yesterday my husband removed the gate and Rex got so annoyed we have not seen him since.`

Read-aloud feedback should reward:

- clear contrast between `in` and `out`
- natural rhythm for repeated actions
- correct stress on `Every time`, `until`, `so that`, and `immediately`
- careful pronunciation of `Rex`, `bark`, `neighbours`, `complained`, `press`,
  `paw`, `latch`, `expert`, `developed`, and `habit`

## Living-Scene Exercise Direction

Use a modern safe transfer that preserves the pattern:

`solution -> clever use -> new annoying habit`

Recommended scene:

`The Doorbell Button`

Chinese setup:

`家里给孩子装了一个小门铃按钮，本来是让他进房间前不用大喊。孩子很快学会了按按钮。可是后来他每次想要零食、想让人开门、想叫人来看东西，都一直按按钮。大人解决了“大喊”的问题，却制造了“按门铃不停响”的新问题。`

Target transfer:

- `used to`
- `Every time`
- `spent weeks training`
- `press`
- `became an expert at`
- `so that someone would`
- `developed another bad habit`
- `As soon as`
- `until`
- `immediately`

This keeps the lesson's comedy while avoiding unsafe pet behavior.

## Suggested You Too Scene

Scene title:

`The Doorbell Button`

Role:

- Student tells a short story about a button or shortcut that solves one problem
  but creates another.
- Parent/teacher asks guiding questions.

Expected student output shape:

1. `My little brother used to shout outside my room.`
2. `Every time he wanted to come in, he would shout until someone opened the door.`
3. `My father spent days training him to press a small button.`
4. `He soon became an expert at pressing it.`
5. `This time he pressed the button so that someone would bring him snacks.`
6. `Since then, he has developed another bad habit.`
7. `As soon as he presses the button, he waits until someone answers.`
8. `Then he immediately presses it again.`

Keep the exercise short. The goal is transfer of the repeated-action loop and
the unintended-consequence joke, not a new long story.

## Extension Practice Direction

Lesson 59 extension production should be extension-only if the main lesson
assets already exist. Create `web/data/extension/lesson_59.json` and register
`59` in `web/data/extension/index.json`. Do not regenerate script, audio,
timeline, read-aloud data, or storyboard images.

### Extension Reading

Use an original repeated-habit passage about a pet, younger sibling, or smart
home button that solves one problem and creates another. Keep the loop clear:
old habit, training, new skill, unintended use, repeated cycle. Make it a NEW
domestic comedy, not another dog/front-gate/latch story.

Suggested title: `The Doorbell Button`

Recommended word bank: `doorbell`, `press`, `neighbour`, `complain`,
`let herself in`, `expert`, `so that`, `bad habit`, `immediately`,
`switch off`.

The 5 reading questions should test:

1. what the old habit was
2. why someone trained the new action
3. what new skill was learned
4. how the skill created a new problem
5. why removing, moving, or switching off the system broke the loop

### Sentence Writing

Use 5 patterns:

1. `used to ...`
   - Source: `Rex used to sit outside our front gate and bark.`
   - Focus: old repeated habit.
   - Must include: `used to`
2. `Every time ..., ... would ... until ...`
   - Source: `Every time he wanted to come into the garden he would bark until someone opened the gate.`
   - Focus: repeated action loop.
   - Must include: `Every time` and `until`
3. `spent weeks training ... to ...`
   - Source: `My husband spent weeks training him to press his paw on the latch.`
   - Focus: time spent teaching a skill.
   - Must include: `spent` and `training`
4. `so that ... would ...`
   - Source: `This time he was barking so that someone would let him out.`
   - Focus: purpose behind repeated action.
   - Must include: `so that` and `would`
5. `As soon as ..., ... until ...`
   - Source: `As soon as he opens the gate from the outside, he comes into the garden and waits until the gate shuts.`
   - Focus: sequence inside a loop.
   - Must include: `As soon as` and `until`

## Chinese-To-English Exercise Direction

The translation practice should reinforce the gate loop, direction words, and
time connectors.

Suggested chunk logic:

1. 我们家的狗 Rex 过去常坐在 front gate 外面叫；每次它想进 garden，就一直叫到有人开门。
2. 因为邻居投诉 noise，丈夫花了几周训练它用 paw 按 latch，把自己放进来。
3. Rex 很快成了开门专家；但上周我出去 shopping 时，发现它在 garden 里靠近 gate。
4. 这一次它叫是为了让人把它放出去；从那以后，它养成了另一个 bad habit。
5. 它一从外面开门进来，就等 gate 关上，然后叫到有人把它放出去。
6. 出去后它马上又把自己放进来并再次叫；最后丈夫把 gate 拆了，Rex 很生气，从此不见了。

High-value expressions to preserve:

- `Our dog, Rex`
- `used to sit outside our front gate and bark`
- `Every time`
- `he would bark until`
- `complained of the noise`
- `spent weeks training him`
- `press his paw on the latch`
- `to let himself in`
- `became an expert at opening the gate`
- `when I was going out shopping`
- `so that someone would let him out`
- `Since then`
- `has developed another bad habit`
- `As soon as`
- `waits until the gate shuts`
- `immediately lets himself in`
- `removed the gate`
- `we have not seen him since`

If manual chunks are added to `web/data/lessons.json`, Chinese and English chunk
counts must match. Otherwise rely on the frontend fallback.

## Grammar Board

### 1. `used to`

Board idea:

`Rex used to sit outside the gate and bark.`

Chinese anchor:

`过去常常这样，现在讲的是以前的习惯。`

Teaching:

- Tie it to Rex's old behavior.
- Do not overteach tense tables.

### 2. `would` For Repeated Past Action

Core sentence:

`he would bark until someone opened the gate`

Teaching:

- `would` can describe repeated past action.
- Here it repeats every time Rex wants to come in.

### 3. `Every time...until...`

Core sentence:

`Every time he wanted to come into the garden he would bark until someone opened the gate.`

Teaching:

- `Every time` starts the repeated condition.
- `until` shows when the barking stops.

### 4. `spend time doing`

Core phrase:

`spent weeks training him`

Teaching:

- Pattern: `spend + time + doing`.
- Useful for daily English.

### 5. `expert at doing`

Core phrase:

`an expert at opening the gate`

Teaching:

- Pattern: `expert at + doing`.
- Rex becomes too good at the action.

### 6. `so that`

Core sentence:

`he was barking so that someone would let him out`

Teaching:

- Shows purpose.
- He barks because he wants someone to do something.

### 7. `As soon as...until...`

Core sentence:

`As soon as he opens the gate from the outside, he comes into the garden and waits until the gate shuts.`

Teaching:

- `As soon as` means immediately after.
- `until` means up to the moment something happens.
- Together they build the loop.

### 8. `let himself in` / `let him out`

Board idea:

`let himself in -> let him out -> let himself in again`

Teaching:

- This is the title's direction contrast.
- `himself` matters because Rex does it by himself.

### 9. `since`

Core phrase:

`we have not seen him since`

Teaching:

- From that time until now.
- Keep it as comic ending.

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

`这一课先把 in-out 喜剧线背熟：Rex 在 gate 外 barking -> 训练 paw 按 latch -> let himself in -> 成为 expert -> 又在 garden 里叫着 let him out -> 开门进来、等门关、叫人放出去、马上又进来 -> gate removed -> Rex annoyed。跟读时注意 used to, would, until, so that, As soon as, let himself in / let him out；生活场景里，用 a clever solution created another bad habit 讲一个现代小故事。`

## Acceptance Criteria

- The extension practice follows the `Extension Practice Direction` above,
  creates `web/data/extension/lesson_59.json`, and registers the lesson in
  `web/data/extension/index.json`.
Lesson 59 is ready for production when:

- The opening hook is 4-6 spoken lines and does not retell the whole passage.
- The lesson is framed as an unintended-consequence family comedy, not a pet
  training tutorial.
- The student-facing story spine is Chinese-first.
- The course sections have distinct jobs and do not repeat the same full story
  script.
- The teacher-student dialogue does not repeat the retell sequence; it deepens
  why the trick worked but the real problem remained.
- The corrupted source sentence in `web/data/lessons.json` is explicitly handled
  before passage display, cloze use, passage audio, or read-aloud production.
- `front gate`, `garden`, `paw`, and `latch` are explained visually and simply.
- `bark` is corrected and taught as the central noise problem.
- `let himself in` and `let him out` are taught as the title's core direction
  contrast.
- `used to`, `would`, `until`, `so that`, `As soon as`, and `since` are taught
  through the action loop.
- The four illustrations form one continuous cause-and-effect story line.
- Storyboard prompts preserve the same Rex, same gate, same latch, same garden,
  and same family setting across frames.
- Generated illustrations contain no readable text, labels, captions, signs, or
  empty text boxes.
- The visual tone is warm and comic, with no harsh training, pet danger, or sad
  lost-dog atmosphere.
- The living-scene transfer uses a safe button / shortcut / smart-device
  scenario where a clever solution creates another habit.
- Read-aloud includes the corrected first sentence, the `Every time...until`
  sentence, the latch-training sentence, the `so that` reversal sentence, and
  the in/out loop sentences.
- The outro includes `⓪ 跟读` before `① 生活场景`, with the concrete read-aloud
  steps.
