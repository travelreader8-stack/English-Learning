# Lesson 54 Plan - Sticky fingers

This is the source-of-truth design card for producing Lesson 54. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 54 assets.

## Basic Info

- Lesson: 54
- Title: `Sticky fingers`
- Chinese title: `粘糊的手指`
- Core bridge: `这一课的核心不是“妈妈做家务”，而是一个特别现代、特别生活化的倒霉链条：手最黏、最不方便的时候，电话偏偏响了；刚把电话处理完，门铃又响了；而且这次还要签收挂号信。孩子要先感受到“手脏 + 被打断 + 麻烦扩散”的喜剧节奏，再去背英文。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule.

- Keep the opening hook short.
  - Use 4-6 spoken lines only.
  - The hook should set up the "sticky hands + interruptions" comedy.
  - Do not retell the whole passage before the four `retell` frames.
  - Put the full mess chain into the frame-by-frame retell section.
- Story spine must be Chinese-first.
  - Present the mess chain first as Chinese scene anchors.
  - Attach short English chunks after each Chinese anchor.
  - Do not use an all-English arrow chain as the main student-facing memory
    path.
- The four illustrations must form one continuous story line.
  - They are not four isolated explanatory pictures.
  - Each frame should inherit visible consequences from the previous frame.
  - The same kitchen, pastry bowl, old telephone, door area, and protagonist
    should carry through the sequence.
  - The mess should accumulate: clean kitchen -> sticky hands -> sticky
    receiver and doorknobs -> interrupted again at the door.
  - Storyboard prompts should explicitly describe the causal relation between
    frames, so the images feel like four shots from one short film.
- Generated illustrations must be text-free.
  - No readable English or Chinese text inside images.
  - No readable labels on the letter, telephone, kitchen items, post bag,
    envelopes, shop bags, recipe book, or wall calendar.
  - No speech bubbles, captions, UI panels, fake lesson text, or empty text
    boxes inside the images.
  - If the courseware needs words such as `receiver`, `sticky pastry`, or
    `registered letter`, render them as real UI text outside the image.
- Keep the old domestic setting modern-readable and respectful.
  - Do not present the story as a lesson about what mothers "should" do.
  - The protagonist is simply a busy adult at home, caught in a comic timing
    problem.
  - The old family rhythm in the text can be explained briefly, but the core
    bridge is a universal interruption problem.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, camera directions,
    or generated-image mechanics.
  - Storyboard prompts must not leak into spoken lesson content.

## Production Warnings

- The title `Sticky fingers` has two possible meanings.
  - In this lesson it is literal: fingers covered with sticky pastry.
  - In broader English, `sticky fingers` can also imply a person who steals.
  - Mention the idiom lightly only if useful; do not make stealing the focus.
- `meat pies` and `pastry` need concrete explanation.
  - `meat pies` are Western-style pies with meat filling.
  - `pastry` is the dough/paste used for pies; butter and flour make it sticky.
  - Do not translate only as "面糊" if the courseware can visually show dough
    or pastry.
- `receiver` is an old telephone object.
  - Children may only know mobile phones.
  - Explain that an old landline has a handset/receiver that must be picked up
    and later put back.
- `hung up the receiver` should be visual.
  - It means putting the old phone handset back down to end the call.
  - Do not let the student imagine tapping a smartphone screen.
- `registered letter` is culturally and historically useful.
  - Explain as an important letter that needs a signature.
  - Modern child bridge: registered letter is like a package or document that
    cannot simply be left at the door; someone has to sign for it.
- `doorknobs` may be unfamiliar in Chinese apartments.
  - Explain as door handles/round knobs that get dirty when touched.
- `wake the dead` is exaggeration.
  - Do not make it literal or scary.
  - Teach it as comic hyperbole: the doorbell was extremely loud.
- Helen Bates should not be mocked as a bad person.
  - The comedy is that the call comes at the worst possible time and lasts too
    long.
  - The protagonist is dismayed by the timing, not because Helen is evil.

If production requires editing `web/data/lessons.json`, stop and ask for a
shared-data edit because it is outside the normal per-lesson write set.

## Lesson Positioning

Lesson 54 is a domestic interruption comedy. The protagonist finally has a quiet
house after breakfast: the children are at school, her husband is at work, and
she has returned home early. She decides to make meat pies. Very quickly her
hands are covered with sticky pastry. At exactly that moment, the telephone
rings. She has to pick up the old receiver with two sticky fingers, then spends
ten minutes persuading Helen Bates to call back later. By the time she hangs up,
pastry has spread to her fingers, the telephone, and the doorknobs. She has no
sooner got back to the kitchen than the doorbell rings loudly. This time the
postman is at the door, and he wants her to sign for a registered letter.

The courseware should make the student understand:

`早饭后送孩子上学 -> 去商店 -> 很早回家 -> 孩子上学、丈夫上班、家里安静 -> 决定做肉派 -> 手上沾满粘面皮 -> 电话正好响了 -> 用两个粘手指拿话筒 -> 发现是 Helen Bates -> 花十分钟劝她晚点再打 -> 终于挂断 -> 手指、电话、门把手全是面糊 -> 刚回厨房 -> 门铃大响 -> 邮递员要她签收挂号信`

The central bridge is:

`手越不方便，麻烦越爱找上门；这篇课文的笑点不是某个物件，而是打断一个接一个，mess 一层层扩大。`

## One-Sentence Hook

Her hands are covered with sticky pastry, and that is exactly when the phone and
the doorbell decide to interrupt her.

## Vivid Teaching Opening

The opening should establish the comedy quickly. It must be a short hook, not a
complete plot retelling. Keep it to 4-6 spoken lines so the first visual does
not stay on screen too long before the frame-by-frame retell begins.

Suggested teacher narration:

`你有没有过这种时刻：手上全是面粉、颜料或者胶水，偏偏有人叫你？`

`这篇课文里的主人公也遇到了这样的倒霉 timing。`

`她正在做 meat pies，手上全是 sticky pastry。`

`就在 exactly that moment，电话响了；后来门铃也响了。`

`今天我们要记住的不是一堆家务，而是一条越来越糟的 mess chain。`

Tone:

- Light, amused, and very visual.
- Do not moralize about housework.
- Make the student feel the physical inconvenience of sticky hands.
- Save the detailed sequence for the four `retell` frames.

## Story Focus

The mess chain is:

1. After breakfast, the protagonist sends the children to school.
2. She goes to the shops.
3. She returns home early.
4. The children are at school, her husband is at work, and the house is quiet.
5. She decides to make meat pies.
6. She mixes butter and flour.
7. Her hands are soon covered with sticky pastry.
8. At exactly that moment, the telephone rings.
9. She picks up the receiver between two sticky fingers.
10. She recognizes Helen Bates's voice and feels dismayed.
11. It takes ten minutes to persuade Helen to ring back later.
12. She finally hangs up the receiver.
13. Pastry is now on her fingers, the telephone, and the doorknobs.
14. She has no sooner got back to the kitchen than the doorbell rings loudly.
15. The postman is there.
16. He wants her to sign for a registered letter.

The production should make the comedy visible:

`安静的家` versus `麻烦连着来`.

`手上的 pastry` spreads to `receiver`, `telephone`, and `doorknobs`.

## Chinese-First Story Spine For Courseware

Use this as the main student-facing story line.

1. 早饭后，她送孩子上学，然后去了商店
   - `After breakfast`
   - `sent the children to school`
   - `went to the shops`
2. 她回家时还很早
   - `It was still early`
   - `when I returned home`
3. 孩子在学校，丈夫在上班，家里很安静
   - `The children were at school`
   - `my husband was at work`
   - `the house was quiet`
4. 所以她决定做一些肉派
   - `So I decided`
   - `to make some meat pies`
5. 很快，她忙着把黄油和面粉混在一起
   - `In a short time`
   - `busy mixing butter and flour`
6. 她的手很快沾满了粘面皮
   - `my hands were soon covered`
   - `with sticky pastry`
7. 正好在这个时候，电话响了
   - `At exactly that moment`
   - `the telephone rang`
8. 没有什么比这更烦人了
   - `Nothing could have been more annoying`
9. 她用两个粘手指拿起了话筒
   - `picked up the receiver`
   - `between two sticky fingers`
10. 听出 Helen Bates 的声音时，她很沮丧
    - `was dismayed`
    - `recognized the voice of Helen Bates`
11. 她花了十分钟才说服对方晚点再打
    - `It took me ten minutes`
    - `to persuade her`
    - `to ring back later`
12. 她终于挂上电话
    - `At last`
    - `hung up the receiver`
13. 真是一团糟
    - `What a mess!`
14. 面皮沾到了手指、电话和门把手上
    - `There was pastry`
    - `on my fingers`
    - `on the telephone`
    - `on the doorknobs`
15. 她刚回到厨房，门铃又响了
    - `I had no sooner got back to the kitchen`
    - `than the doorbell rang`
16. 门铃响得像能把死人吵醒
    - `loud enough`
    - `to wake the dead`
17. 这次是邮递员，要她签收一封挂号信
    - `This time it was the postman`
    - `wanted me to sign`
    - `for a registered letter`

Student memory prompt:

`先记中文麻烦线：家里安静 -> 做肉派 -> 手变粘 -> 电话响 -> 粘手指拿话筒 -> Helen Bates 聊了十分钟 -> 电话和门把手都脏了 -> 刚回厨房 -> 门铃又响 -> 邮递员要签字。再把英文短语挂到每个动作上。`

Do not show this as an all-English arrow chain in the student-facing courseware.

## Recitation Blocks

Break the passage into four Chinese-first recitation blocks:

### Block 1: 家里终于安静，可以做肉派

Chinese anchor:

`早饭后她送孩子上学，又去了商店；回家时还早，孩子在学校，丈夫在上班，家里很安静，所以她决定做肉派。`

English chunks:

- `After breakfast`
- `sent the children to school`
- `went to the shops`
- `It was still early`
- `returned home`
- `at school`
- `at work`
- `the house was quiet`
- `decided to make some meat pies`

Teaching point:

- This block sets up the quiet before the comedy.
- The child should feel that she finally has time and space to cook.

### Block 2: 手刚变粘，电话就响

Chinese anchor:

`不一会儿，她忙着混合黄油和面粉，手很快沾满粘面皮；正好这时，电话响了。`

English chunks:

- `In a short time`
- `busy mixing butter and flour`
- `hands were soon covered`
- `sticky pastry`
- `At exactly that moment`
- `the telephone rang`
- `Nothing could have been more annoying`

Teaching point:

- This block teaches comic timing.
- `At exactly that moment` is the heart of the joke.
- `Nothing could have been more annoying` expresses exaggerated irritation.

### Block 3: 电话把 mess 扩散开

Chinese anchor:

`她只好用两个粘手指拿起话筒，听出是 Helen Bates；花了十分钟才劝她晚点再打，终于挂上电话，结果到处都是面皮。`

English chunks:

- `picked up the receiver`
- `between two sticky fingers`
- `was dismayed`
- `recognized the voice of Helen Bates`
- `It took me ten minutes`
- `to persuade her`
- `to ring back later`
- `At last`
- `hung up the receiver`
- `What a mess!`
- `on my fingers`
- `on the telephone`
- `on the doorknobs`

Teaching point:

- This block makes the mess spread visually.
- `receiver` and `hung up` need old-telephone explanation.
- `persuade` is a high-value verb.

### Block 4: 刚回厨房，门铃又响

Chinese anchor:

`她刚回到厨房，门铃又响了，响得特别夸张；这次是邮递员，要她签收一封挂号信。`

English chunks:

- `I had no sooner got back`
- `to the kitchen`
- `than the doorbell rang`
- `loud enough to wake the dead`
- `This time it was the postman`
- `wanted me to sign`
- `for a registered letter`

Teaching point:

- This block teaches the "just when..." feeling of `no sooner...than`.
- `wake the dead` is comic exaggeration.
- `registered letter` creates the final problem because signing with sticky
  fingers is exactly what she does not want to do.

## Modern Child Bridge

For a modern child, connect the story to familiar "sticky hands" moments:

- hands covered with flour while baking
- glue on fingers during a craft project
- paint on hands during art class
- mud on hands after sports
- sanitizer or sunscreen making hands slippery
- a phone notification or delivery interruption at the worst time

Suggested child-facing line:

`你不一定做过 meat pies，也不一定用过老式电话。但你一定懂：手上全是东西的时候，最怕突然有人让你接电话、开门、签字。`

Do not replace the original story. Use the modern bridge to make the old objects
understandable.

## Old Object Bridge

### `receiver`

Explain:

`receiver 是老式电话的话筒。以前接电话不是点屏幕，而是把话筒拿起来，贴近耳朵和嘴巴。`

Visual:

- Show an old landline phone with a separate handset.
- No readable numbers or labels.

### `hung up the receiver`

Explain:

`hung up the receiver 就是把话筒放回电话座，电话才算挂断。`

### `doorknobs`

Explain:

`doorknob 是门把手，尤其是那种圆形门钮。手上有 pastry 时，一拧门把手，门把手也会变粘。`

### `registered letter`

Explain:

`registered letter 是比较重要的信，需要签收。今天可以想成快递员送来重要文件，必须本人签字。`

## Title And Idiom Bridge

### Literal title

Teach the title first as literal:

`Sticky fingers = 粘糊糊的手指。`

In this lesson, the fingers are sticky because of pastry.

### Broader idiom

Mention lightly:

`在别的语境里，sticky fingers 有时也可以说一个人爱偷东西，好像手会把东西粘走一样。但这篇课文不是这个意思。这里就是字面上的粘手指。`

Keep this short. The student should not leave thinking the protagonist is a
thief.

## Main Language Focus

### Time Sequence

High-value sequence words:

- `After breakfast`
- `then`
- `when I returned home`
- `In a short time`
- `At exactly that moment`
- `At last`
- `I had no sooner...than...`

Student-facing idea:

`这篇课文很好背，因为它不是散乱的句子，而是时间一步步往前推。`

### Comic Timing: `At exactly that moment`

Core sentence:

`At exactly that moment, the telephone rang.`

Teaching:

- `exactly` sharpens the timing.
- The telephone rings at the worst possible second.
- This phrase creates the first laugh.

Transfer:

- `At exactly that moment, my phone rang.`
- `At exactly that moment, the teacher came in.`

### Exaggerated Complaint: `Nothing could have been more annoying`

Teaching:

- This is stronger than `It was annoying`.
- It means: this was the most annoying thing possible at that moment.
- It is emotional and comic, not a scientific ranking.

Child-facing line:

`这句话的语气很像中文里的“真是烦死了，没有比这更烦的了”。`

### `It took me ten minutes to...`

Core sentence:

`It took me ten minutes to persuade her to ring back later.`

Teaching:

- `It took me + time + to do something`.
- Useful for talking about how long something took.
- `persuade` means convince someone to do something.

Transfer:

- `It took me ten minutes to finish the homework.`
- `It took me five minutes to persuade him to wait.`

### `had no sooner...than...`

Core sentence:

`I had no sooner got back to the kitchen than the doorbell rang...`

Teaching:

- Meaning: she had just got back when the doorbell rang.
- It expresses immediate interruption.
- Teach the feeling before the grammar label.

Child-facing line:

`这不是普通的“我回厨房，然后门铃响了”，而是“我刚刚回到厨房，门铃立刻又响了”。`

### Hyperbole: `loud enough to wake the dead`

Teaching:

- This is exaggeration.
- It means extremely loud.
- Do not explain literally.

Transfer:

- `loud enough to wake everyone in the house`
- The textbook phrase is more dramatic and funny.

## Vocabulary Plan

Prioritize vocabulary that supports the physical comedy and interruption chain.

### `sticky`

- Meaning: 粘的.
- Tie directly to fingers, pastry, receiver, and doorknobs.
- This word is the visual engine of the lesson.

### `finger`

- Make it physical and simple.
- Pair with `two sticky fingers`.

### `pie`

- Explain as Western-style pie, not exactly the same as Chinese 馅饼.
- In this lesson: `meat pies`.

### `mix`

- Meaning: combine things together.
- In the text: `mixing butter and flour`.

### `pastry`

- Dough/paste used for pies.
- Can be sticky when being prepared.
- Important for understanding the mess.

### `annoying`

- Something that makes you irritated.
- Pair with `Nothing could have been more annoying`.

### `receiver`

- Old telephone handset.
- Must be visually explained.

### `dismayed`

- Meaning: disappointed, upset, or discouraged by what happened.
- In context: she recognizes Helen Bates and realizes the call may take time.

### `recognize`

- Meaning: know who or what something is after seeing/hearing it.
- In this text: recognize a voice.

### `persuade`

- Meaning: convince someone to do something.
- High-value word for speaking and writing.

### `mess`

- Meaning: a dirty or disordered situation.
- Pair with `What a mess!`

### `doorknob`

- Door handle or round door knob.
- Helps the child visualize how the mess spreads.

### `sign`

- Meaning: write your name to confirm or accept something.
- Use with documents, letters, deliveries.

### `registered`

- Meaning: officially recorded; in this text, a letter that needs formal
  delivery and signature.
- Pair with `registered letter`.

## Storyboard Continuity Rule

The storyboard must be designed as four linked shots from the same short film.
This is a production requirement, not an optional style preference.

Continuity spine:

`quiet kitchen -> sticky pastry on hands -> sticky phone call spreads mess -> doorbell demands a signature`

Frame-to-frame continuity:

- Frame 1 starts with a clean, quiet kitchen and a pastry bowl.
- Frame 2 keeps the same kitchen and bowl, but the protagonist's hands are now
  visibly sticky and the old telephone is ringing nearby.
- Frame 3 keeps the same protagonist, phone, and room; the receiver and nearby
  doorknob now show pastry smears caused by the previous action.
- Frame 4 keeps visible traces of the earlier mess while the protagonist reaches
  the door and sees the postman with a registered letter to sign.

Prompt discipline:

- Do not generate four unrelated kitchen/phone/door scenes.
- Do not reset the room to clean after Frame 2.
- Do not change the protagonist's clothing, hair, age, or facial design between
  frames.
- Do not let the registered letter appear before Frame 4.
- Do not let the phone call appear before Frame 2.
- The cause of the mess should be visually readable across the sequence.

## Visual Direction

Overall visual style:

- Warm, realistic, child-friendly domestic comedy.
- Slightly exaggerated expressions are allowed, but not cartoon chaos.
- Same home interior across frames.
- Same protagonist across frames.
- No readable text inside images.
- No nested UI-like boxes, labels, captions, or speech bubbles.

The visuals should help the student remember:

`quiet house -> meat pies -> sticky pastry -> telephone interruption -> mess -> doorbell interruption -> registered letter`

Avoid:

- making the protagonist look foolish or incompetent
- mocking housework
- unreadable visual clutter
- modern smartphones replacing the old receiver
- fake writing on letters, packages, signs, calendars, or phone buttons
- isolated illustrations with no causal connection

## Character Consistency Brief

Use a consistent protagonist:

`A busy adult woman in a tidy 1960s-style home kitchen, warm brown hair tied back, light blue blouse with sleeves rolled up, cream apron with no readable text, medium build, expressive but kind face, gradually more flustered as sticky pastry spreads, never exaggerated into slapstick humiliation.`

Supporting elements:

- A cozy kitchen with a mixing bowl, flour, butter, pastry dough, and an old
  landline telephone nearby.
- A door area with a doorknob that becomes visibly smeared later.
- A postman in a simple uniform at the door in Frame 4, carrying an envelope or
  clipboard with no readable text.

## Four-Frame Storyboard Intent

### Frame 1: Quiet House, Meat Pies Begin

Purpose:

- Establish quiet after breakfast and the decision to make meat pies.
- Set up the clean starting state before the mess.

Visual:

- The protagonist stands in the same kitchen, preparing butter and flour in a
  mixing bowl.
- The house feels calm and quiet.
- Her hands are still mostly clean or only lightly dusted with flour.
- The old landline telephone is visible but not yet the focus.

Teaching content:

- `After breakfast`
- `returned home`
- `the house was quiet`
- `decided to make some meat pies`

Continuity note:

- This frame establishes the kitchen, protagonist, bowl, phone, and door area
  that must remain consistent later.

### Frame 2: Sticky Hands, Telephone Rings

Purpose:

- Show the exact bad timing.
- Make `At exactly that moment` visible.

Visual:

- Same kitchen and protagonist.
- Her hands are now covered with sticky pastry from the same mixing bowl.
- The old telephone is ringing nearby.
- Her expression shows comic frustration.
- The kitchen is messier than Frame 1, but not yet fully chaotic.

Teaching content:

- `busy mixing butter and flour`
- `hands were soon covered with sticky pastry`
- `At exactly that moment`
- `the telephone rang`
- `Nothing could have been more annoying`

Continuity note:

- The sticky hands caused by the pastry should clearly lead to the next frame's
  sticky receiver.

### Frame 3: Receiver, Long Call, Mess Spreads

Purpose:

- Show the phone interruption spreading the mess.
- Explain old telephone vocabulary visually.

Visual:

- Same protagonist and kitchen.
- She holds the old receiver awkwardly between two sticky fingers.
- The receiver and nearby phone area show small pastry smears.
- A nearby doorknob also has a smear, showing that the mess has spread.
- Her expression is dismayed but not mean.

Teaching content:

- `picked up the receiver`
- `between two sticky fingers`
- `was dismayed`
- `recognized the voice of Helen Bates`
- `persuade her to ring back later`
- `What a mess!`
- `on my fingers, on the telephone, and on the doorknobs`

Continuity note:

- This frame must preserve visible mess from Frame 2 and create visible mess
  that still exists in Frame 4.

### Frame 4: Doorbell And Registered Letter

Purpose:

- Show the second interruption and final punchline.
- Make signing difficult because the hands are still sticky.

Visual:

- Same protagonist, now near the front door or kitchen doorway.
- Her hands are still sticky; the previous phone or smeared doorknob is visible
  if composition allows.
- The postman stands at the door with an envelope or clipboard, asking for a
  signature without readable text.
- Her expression shows: "not again."

Teaching content:

- `I had no sooner got back to the kitchen`
- `than the doorbell rang`
- `loud enough to wake the dead`
- `the postman`
- `sign for a registered letter`

Continuity note:

- The frame should feel like the consequence of the first three frames, not a
  new scene. The sticky hands must still be the problem.

## Script And Courseware Presentation

The script should follow this pacing:

1. Short hook: sticky-hands interruption setup only.
2. Four `retell` frames:
   - Frame 1: quiet house and meat pies.
   - Frame 2: sticky hands and phone rings.
   - Frame 3: long phone call spreads the mess.
   - Frame 4: doorbell and registered letter.
3. Discussion:
   - old landline receiver
   - registered letter / signature bridge
   - title `Sticky fingers`
   - why `wake the dead` is exaggeration
4. Passage normal reading.
5. Three vocabulary blocks.
6. Grammar board.
7. You Too living-scene transfer.
8. Outro with the full practice order.

The opening must not contain the full story chain. Do not say all of:

`做肉派 -> 电话响 -> Helen Bates 聊十分钟 -> 电话和门把手脏了 -> 门铃响 -> 邮递员要签字`

inside the hook. Save that sequence for the four retell frames.

Student-facing Chinese should feel like a guided mess chain:

- `先看安静的开始。`
- `再看手为什么变粘。`
- `然后看电话怎样把 mess 扩散。`
- `最后看门铃怎样把麻烦推到顶点。`

## Read-Aloud And Pronunciation Direction

Choose 5-8 high-value sentences for read-aloud. Suggested targets:

1. `After breakfast, I sent the children to school and then I went to the shops.`
   - Focus: sequence rhythm, `After breakfast`, `then`.
2. `The children were at school, my husband was at work and the house was quiet.`
   - Focus: parallel structure, `at school`, `at work`, `quiet`.
3. `In a short time I was busy mixing butter and flour and my hands were soon covered with sticky pastry.`
   - Focus: long sentence chunking, `mixing butter and flour`, `sticky pastry`.
4. `At exactly that moment, the telephone rang.`
   - Focus: comic timing, stress on `exactly`.
5. `Nothing could have been more annoying.`
   - Focus: expressive stress and natural annoyance.
6. `I picked up the receiver between two sticky fingers and was dismayed when I recognized the voice of Helen Bates.`
   - Focus: chunking, `receiver`, `dismayed`, `recognized`.
7. `It took me ten minutes to persuade her to ring back later.`
   - Focus: `It took me...to...`, `persuade`, `ring back later`.
8. `I had no sooner got back to the kitchen than the doorbell rang loud enough to wake the dead.`
   - Focus: `no sooner...than`, comic hyperbole.

Read-aloud feedback should reward:

- clear grouping of long sentences
- natural stress on timing words
- expressive but not overacted complaint
- correct pronunciation of `pastry`, `receiver`, `persuade`, and `registered`

## Living-Scene Exercise Direction

Use a modern safe everyday transfer that preserves the interruption pattern.

Recommended scene:

`The Glue Fingers Problem`

Chinese setup:

`孩子正在做手工作业，手上都是胶水。正好这时手机响了；刚处理完，门口又有人送快递，还需要签字。`

Target transfer:

- `sticky fingers`
- `At exactly that moment`
- `Nothing could have been more annoying`
- `It took me...to...`
- `What a mess!`
- `I had no sooner...than...`
- `sign for...`

This keeps the original comedy while making the situation easy for a modern
child to imagine.

## Suggested You Too Scene

Scene title:

`The Glue Fingers Problem`

Role:

- Student tells a short story about being interrupted while doing a craft
  project.
- Parent/teacher asks guiding questions.

Expected student output shape:

1. `I was busy making a model.`
2. `My hands were covered with sticky glue.`
3. `At exactly that moment, my phone rang.`
4. `Nothing could have been more annoying.`
5. `It took me five minutes to answer the message.`
6. `What a mess! There was glue on my fingers and on the table.`
7. `I had no sooner got back to my model than the doorbell rang.`
8. `A delivery man wanted me to sign for a package.`

Keep the exercise light and funny. The goal is transfer of timing and
interruption language, not a new long passage.

## Extension Practice Direction

Lesson 54 extension production should be extension-only if the main lesson
assets already exist. Create `web/data/extension/lesson_54.json` and register
`54` in `web/data/extension/index.json`. Do not regenerate script, audio,
timeline, read-aloud data, or storyboard images.

### Extension Reading

Use an original interruption-comedy passage about a child doing a craft project,
baking, or repairing something sticky. The story should build a chain of
interruptions: sticky hands, phone/message, cleanup, then doorbell or delivery.
Keep it light and visual.

Suggested title: `The Glue Fingers Problem`

Recommended word bank: `sticky`, `pastry`, `receiver`, `dismayed`, `recognize`,
`persuade`, `ring back`, `mess`, `no sooner`, `sign for`.

The 5 reading questions should test:

1. what the person was doing when their hands became sticky
2. what happened at exactly that moment
3. why answering was annoying
4. what mess was left behind
5. how the second interruption creates the joke

### Sentence Writing

Use 5 patterns:

1. `It was still ... when ...`
   - Source: `It was still early when I returned home.`
   - Focus: time background.
   - Must include: `It was still` and `when`
2. `In a short time, ...`
   - Source: `In a short time I was busy mixing butter and flour.`
   - Focus: quick movement into an activity.
   - Must include: `In a short time`
3. `At exactly that moment, ...`
   - Source: `At exactly that moment, the telephone rang.`
   - Focus: comic timing.
   - Must include: `At exactly that moment`
4. `Nothing could have been more ...`
   - Source: `Nothing could have been more annoying.`
   - Focus: strong complaint.
   - Must include: `Nothing could have been more`
5. `had no sooner ... than ...`
   - Source: `I had no sooner got back to the kitchen than the doorbell rang.`
   - Focus: second interruption immediately after the first.
   - Must include: `had no sooner` and `than`

## Chinese-To-English Exercise Direction

The translation practice should reinforce the mess chain and the timing
structures.

Suggested chunk logic:

1. 早饭后她送孩子上学，又去了商店；回家时家里很安静。
2. 她决定做肉派，很快手上沾满了粘面皮。
3. 正好这时电话响了，她用两个粘手指拿起话筒。
4. 她花了十分钟才说服 Helen Bates 晚点再打，结果到处都是面皮。
5. 她刚回厨房，门铃又响了；邮递员要她签收挂号信。

High-value expressions to preserve:

- `After breakfast`
- `sent the children to school`
- `the house was quiet`
- `decided to make some meat pies`
- `busy mixing butter and flour`
- `covered with sticky pastry`
- `At exactly that moment`
- `Nothing could have been more annoying`
- `picked up the receiver`
- `between two sticky fingers`
- `It took me ten minutes to persuade her`
- `What a mess!`
- `I had no sooner...than...`
- `sign for a registered letter`

If manual chunks are added to `web/data/lessons.json`, Chinese and English chunk
counts must match. Otherwise rely on the frontend fallback.

## Grammar Board

### 1. Time Sequence

Board idea:

`After breakfast -> then -> when -> In a short time -> At exactly that moment -> At last`

Chinese anchor:

`早饭后 -> 然后 -> 回来时 -> 不一会儿 -> 正好那一刻 -> 终于`

### 2. `be covered with`

Core phrase:

`my hands were soon covered with sticky pastry`

Teaching:

- `be covered with...` means something is all over the surface.
- Use it visually: hands covered with pastry.

Transfer:

- `My hands were covered with paint.`
- `The table was covered with books.`

### 3. `At exactly that moment`

Board idea:

`the worst possible timing`

Example:

- `At exactly that moment, the telephone rang.`

### 4. `Nothing could have been more...`

Board idea:

`Nothing could have been more annoying = this was extremely annoying`

Do not over-explain modal grammar. Teach the expressive force.

### 5. `It took me + time + to...`

Board idea:

`It took me ten minutes to persuade her.`

Pattern:

`It took + person + time + to do something`

### 6. `no sooner...than...`

Board idea:

`I had no sooner got back... than the doorbell rang`

Meaning:

`I had just got back, and immediately the doorbell rang.`

This structure should be taught through timing and feeling first.

### 7. Hyperbole

Core phrase:

`loud enough to wake the dead`

Teaching:

- It is exaggeration.
- It means extremely loud.
- It makes the ending funnier.

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

`这一课先把 mess chain 背熟：安静做派、手变粘、电话打断、mess 扩散、门铃再打断、签收挂号信。跟读时注意时间词和长句分组；生活场景里，用 At exactly that moment, What a mess, no sooner...than 讲一个自己的倒霉时刻。`

## Acceptance Criteria

- The extension practice follows the `Extension Practice Direction` above,
  creates `web/data/extension/lesson_54.json`, and registers the lesson in
  `web/data/extension/index.json`.
Lesson 54 is ready for production when:

- The opening hook is 4-6 spoken lines and does not retell the whole passage.
- The lesson is framed as a sticky-hands interruption comedy, not a housework
  lesson.
- The student-facing story spine is Chinese-first.
- The four illustrations form one continuous cause-and-effect story line.
- Storyboard prompts preserve the same protagonist, kitchen, pastry bowl,
  telephone, and door area across frames.
- The visible mess accumulates across frames instead of resetting.
- Generated illustrations contain no readable text, labels, captions, or empty
  text boxes.
- Old objects are explained: `receiver`, `hung up the receiver`, `doorknobs`,
  and `registered letter`.
- The `Sticky fingers` title is explained literally, with the broader idiom only
  mentioned briefly if useful.
- `wake the dead` is taught as hyperbole, not literal horror.
- The living-scene transfer uses a modern sticky-hands interruption scenario.
- Read-aloud includes `At exactly that moment`, `Nothing could have been more
  annoying`, `It took me ten minutes...`, and `no sooner...than`.
- The outro includes `⓪ 跟读` before `① 生活场景`, with the concrete read-aloud
  steps.
