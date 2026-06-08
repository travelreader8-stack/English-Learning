# Lesson 57 Plan - Can I help you, madam?

This is the source-of-truth design card for producing Lesson 57. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 57 assets.

## Basic Info

- Lesson: 57
- Title: `Can I help you, madam?`
- Chinese title: `您要买什么，夫人？`
- Core bridge: `这一课不要讲成“买裙子”的普通购物故事，也不要把重点放在女人最后怎样报复店员。它的核心是一个关于 appearance judgment 的讽刺故事：同一个女人，第一天穿 jeans，被售货员 scornfully 对待；第二天穿 fur coat、拿 handbag 和 long umbrella，售货员没认出她，却 suddenly eager to serve her。孩子要先看懂 same person, different clothes, different treatment，再去背课文。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule and adds an
anti-repetition rule for this lesson.

- Keep the opening hook short.
  - Use 4-6 spoken lines only.
  - The hook should set up the core question: why does the same person receive
    two completely different kinds of service?
  - Do not retell the whole passage before the four `retell` frames.
  - Do not list the full shopping sequence in the opening.
- Story spine must be Chinese-first.
  - Present the shopping-and-disguise chain first as Chinese scene anchors.
  - Attach short English chunks after each Chinese anchor.
  - Do not use an all-English arrow chain as the main student-facing memory
    path.
- Avoid repeated script content across sections.
  - The four `retell` frames are the only section that should walk through the
    full plot in order.
  - The teacher-student dialogue must not repeat the retell narration.
  - The dialogue should deepen the theme: judging by clothes, `madam` politeness
    versus real respect, and why `scornfully` and `eager` form the emotional
    contrast.
  - Vocabulary and grammar sections should explain language tools, not tell the
    story again.
- The four illustrations must form one continuous story line.
  - They are not four isolated fashion or shopping pictures.
  - Each frame should inherit visible consequences from the previous frame.
  - The same woman, same rude assistant, same expensive shop, same shop window,
    and same dress should carry through the sequence.
  - The emotional line should accumulate: hesitation -> insult -> return in a
    more formal outfit -> assistant forced into over-service.
  - Storyboard prompts should explicitly describe the causal relation between
    frames, so the images feel like four shots from one short film.
- Generated illustrations must be text-free.
  - No readable English or Chinese text inside images.
  - No readable shop names, sale signs, brand labels, price tags, dress labels,
    window posters, receipts, plaques, or shopping bags.
  - No speech bubbles, captions, UI panels, fake lesson text, or empty text
    boxes inside images.
  - If the courseware needs words such as `madam`, `scornfully`, `eager`, or
    `fur coat`, render them as real UI text outside the image.
- Keep the social lesson respectful and balanced.
  - Criticize the assistant's snobbish attitude, not the job of shop assistant.
  - Do not teach that expensive clothing makes a person more worthy.
  - Do not make the woman cruel or humiliating; her behavior is a comic lesson
    for the rude assistant.
  - Avoid encouraging students to "punish" service workers in real life.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, camera directions,
    or generated-image mechanics.
  - Storyboard prompts must not leak into spoken lesson content.

## Production Warnings

- `jeans` may not feel informal to a modern child.
  - Today jeans are ordinary and can even be stylish or expensive.
  - In this older expensive-shop context, jeans signal that the woman does not
    look like the assistant's imagined wealthy customer.
  - Do not teach that jeans are low-class.
- The central problem is appearance judgment.
  - The assistant judges her by clothing.
  - The lesson should say clearly: same person, different clothes, different
    treatment.
- `madam` is polite language, but politeness can be shallow.
  - The title sounds polite.
  - The assistant's first behavior is not truly respectful.
  - This contrast is useful for the teacher-student dialogue.
- `assistant` means shop assistant / salesperson.
  - It does not mean a general assistant in an office.
- `window` means shop window / display window.
  - It is not an ordinary home window.
- `scornfully` is a key emotional word.
  - It means looking down on someone.
  - Do not overact it into cartoon villain cruelty.
- `punish` here means teach the assistant a lesson.
  - It is not physical punishment.
  - Make the tone comic, not vengeful.
- `fur coat` needs careful handling.
  - In the text, it signals expensive, formal-looking clothing.
  - Modern courseware should not promote real fur.
  - In images, use a luxurious fur-like coat with no animal imagery, or simply
    a formal expensive-looking coat if production wants a safer look.
- `Not realizing who she was` is central.
  - The assistant changes because he does not recognize the same woman.
  - Make this clear before discussing the comic revenge.
- `eager to serve` contrasts with `scornfully`.
  - First day: scornful.
  - Second day: eager.
  - This contrast carries the social satire.
- `make the assistant bring almost everything` can sound harsh.
  - Teach it as story comedy and irony.
  - Do not present it as a real-life model for treating service staff.

If production requires editing `web/data/lessons.json`, stop and ask for a
shared-data edit because it is outside the normal per-lesson write set.

## Lesson Positioning

Lesson 57 is a social satire about judging by appearance. A woman in jeans
stands outside an expensive shop and looks at a dress in the window. She
hesitates, then goes in and asks to see the dress. The assistant dislikes the
way she is dressed. He glances at her scornfully and says the dress is sold.
The woman leaves angrily and decides to teach him a lesson. The next morning,
she returns in a fur coat, carrying a handbag and a long umbrella. She finds the
same rude assistant and asks for the same dress. Because he does not realize
who she is, he is eager to serve her this time. With great difficulty, he climbs
into the shop window to get the dress. As soon as she sees it, she says she
does not like it. She enjoys making him bring almost everything in the window,
then finally buys the dress she first asked for.

The courseware should make the student understand:

`女人穿 jeans 站在高档商店橱窗前 -> 犹豫后进店 -> 想看橱窗里的 dress -> 售货员不喜欢她的穿着 -> 轻蔑地看她，说 dress 已经卖了 -> 女人生气离开 -> 决定第二天教训他 -> 第二天穿正式贵气的 coat、拿 handbag 和 long umbrella 回来 -> 找到同一个 rude assistant -> 又要看同一条 dress -> 售货员没有认出她 -> 这一次很 eager to serve -> 费劲爬进橱窗拿 dress -> 她看一眼说不喜欢 -> 让他几乎把橱窗里所有东西都拿出来 -> 最后才买下最开始想看的那条 dress`

The central bridge is:

`这不是“穿得贵就更值得尊重”的故事，而是“同一个人只因衣着不同就被区别对待”的讽刺。`

## One-Sentence Hook

The same woman visits the same shop twice, but the assistant treats her badly
in jeans and eagerly in a fur coat.

## Vivid Teaching Opening

The opening should establish the social contrast quickly. It must be a short
hook, not a complete plot retelling. Keep it to 4-6 spoken lines so the first
visual does not stay on screen too long before the frame-by-frame retell begins.

Suggested teacher narration:

`有时候，一个人还没开口，别人就先看她穿什么。`

`这篇课文里的 woman 第一天穿 jeans 去 expensive shop。`

`售货员看不起她，觉得她不像会买贵衣服的人。`

`第二天，她换了一身看起来很贵的衣服，待遇马上变了。`

`今天先抓住一个问题：same person, different clothes, different treatment。`

Tone:

- Thoughtful, lightly ironic, and not preachy.
- Make the social unfairness clear without making the lesson heavy.
- Do not retell the full revenge sequence in the hook.
- Save the detailed sequence for the four `retell` frames.

## Section Responsibility And Anti-Repetition Plan

Production must treat the lesson as several sections with distinct jobs.

### Opening

Job:

- Raise the core question.
- Introduce the contrast between clothing and treatment.
- Keep it short.

Do not:

- Explain the whole plot.
- Describe the final purchase.
- Repeat the full story spine.

### Four Retell Frames

Job:

- Walk through the plot in order.
- Give the child a clear memory path for recitation.
- Pair each visual event with Chinese anchors and English chunks.

Do not:

- Turn the retell into a moral lecture.
- Spend too long explaining vocabulary that belongs in later sections.

### Teacher-Student Dialogue

Job:

- Deepen one or two ideas that the retell cannot fully explore.
- Recommended dialogue topic:
  `为什么同一个人换了衣服，售货员态度就变了？`
- Secondary topic:
  `Can I help you, madam? 听起来很礼貌，但真正的尊重不是只看衣服。`

Do not:

- Retell the plot again.
- Ask the student to repeat every event from the passage.
- Spend the dialogue walking through `jeans -> dress -> sold -> fur coat ->
  window -> buying` again.

### Vocabulary And Grammar

Job:

- Explain language that makes the story work.
- Focus on contrasts and sentence tools:
  `scornfully` versus `eager`, `not realizing who she was`, `with great
  difficulty`, `as soon as`, `before finally buying`.

Do not:

- Use vocabulary examples that simply retell every event again.

### Practice And Transfer

Job:

- Let the student use the pattern in a modern scene.
- Recommended transfer:
  being judged by a casual outfit, school uniform, sports clothes, or a simple
  backpack before someone realizes who the person is.

Do not:

- Encourage revenge behavior.
- Make the student act out rude customer behavior.

## Story Focus

The appearance-judgment chain is:

1. A woman in jeans stands at the window of an expensive shop.
2. She hesitates for a moment.
3. She finally goes in.
4. She asks to see a dress in the window.
5. The assistant does not like the way she is dressed.
6. He glances at her scornfully.
7. He tells her the dress is sold.
8. She walks out angrily.
9. She decides to punish the assistant the next day.
10. She returns in a fur coat, with a handbag and a long umbrella.
11. She seeks out the rude assistant.
12. She asks for the same dress.
13. The assistant does not realize who she is.
14. He is eager to serve her this time.
15. With great difficulty, he climbs into the shop window.
16. She says she does not like the dress as soon as she sees it.
17. She makes him bring almost everything in the window.
18. She finally buys the dress she first asked for.

The production should make the contrast visible:

`jeans` versus `fur coat`.

`scornfully` versus `eager to serve`.

`the same woman` versus `different treatment`.

## Chinese-First Story Spine For Courseware

Use this as the main student-facing story line.

1. 一位穿 jeans 的女人站在一家高档商店的橱窗前
   - `A woman in jeans`
   - `stood at the window`
   - `of an expensive shop`
2. 她犹豫了一会儿，但最后还是进去了
   - `Though she hesitated for a moment`
   - `she finally went in`
3. 她要求看橱窗里的那条 dress
   - `asked to see a dress`
   - `that was in the window`
4. 接待她的售货员不喜欢她的穿着
   - `The assistant who served her`
   - `did not like`
   - `the way she was dressed`
5. 他轻蔑地看了她一眼，说那条 dress 已经卖了
   - `Glancing at her scornfully`
   - `he told her`
   - `that the dress was sold`
6. 女人生气地走出商店，决定第二天教训他
   - `walked out of the shop angrily`
   - `decided to punish the assistant`
   - `next day`
7. 第二天早上，她穿着 fur coat 回到商店
   - `returned to the shop`
   - `the following morning`
   - `dressed in a fur coat`
8. 她一只手拿 handbag，另一只手拿 long umbrella
   - `with a handbag in one hand`
   - `and a long umbrella in the other`
9. 找到那个 rude assistant 后，她又要看同一条 dress
   - `After seeking out`
   - `the rude assistant`
   - `she asked for the same dress`
10. 售货员没有认出她是谁
    - `Not realizing`
    - `who she was`
11. 这一次，他非常热情地接待她
    - `the assistant`
    - `was eager`
    - `to serve her this time`
12. 他费了好大劲爬进橱窗去拿 dress
    - `With great difficulty`
    - `he climbed`
    - `into the shop window`
    - `to get the dress`
13. 她一看到那条 dress，就说自己不喜欢
    - `As soon as she saw it`
    - `the woman said`
    - `she did not like it`
14. 她让售货员几乎把橱窗里的所有东西都拿出来
    - `She enjoyed herself`
    - `making the assistant bring`
    - `almost everything`
    - `in the window`
15. 最后她才买下最开始想看的那条 dress
    - `before finally buying`
    - `the dress`
    - `she had first asked for`

Student memory prompt:

`先记中文反差线：jeans 看橱窗 -> 犹豫后进店 -> 想看 dress -> 售货员看不起她 -> 说 dress sold -> 她生气离开 -> 第二天穿正式 coat 回来 -> 找到同一个店员 -> 店员没认出她 -> 这次 eager to serve -> 爬进橱窗拿 dress -> 她说不喜欢 -> 让他拿出几乎所有东西 -> 最后才买最开始那条。再把英文短语挂到每个节点上。`

Do not show this as an all-English arrow chain in the student-facing courseware.

## Recitation Blocks

Break the passage into four Chinese-first recitation blocks:

### Block 1: 穿 jeans 的顾客和高档商店

Chinese anchor:

`一位穿 jeans 的女人站在一家高档商店的橱窗前。她犹豫了一会儿，最后还是进去，要求看橱窗里的那条 dress。`

English chunks:

- `A woman in jeans`
- `stood at the window`
- `of an expensive shop`
- `Though she hesitated for a moment`
- `she finally went in`
- `asked to see a dress`
- `that was in the window`

Teaching point:

- This block establishes the old social context.
- Explain `window` as shop window.
- Explain that jeans are not bad; the assistant wrongly judges her by them.

### Block 2: 售货员轻蔑，女人决定教训他

Chinese anchor:

`接待她的售货员不喜欢她的穿着，轻蔑地看她，说那条 dress 已经卖了。女人生气地离开商店，决定第二天教训他。`

English chunks:

- `The assistant who served her`
- `did not like the way she was dressed`
- `Glancing at her scornfully`
- `he told her`
- `that the dress was sold`
- `walked out of the shop angrily`
- `decided to punish the assistant`

Teaching point:

- This block is the unfair treatment.
- `scornfully` is the emotional center.
- `punish` means teach him a lesson in the story, not physical punishment.

### Block 3: 第二天换装回来，售货员没认出她

Chinese anchor:

`第二天早上，她穿着正式贵气的 coat，拿着 handbag 和 long umbrella 回到商店。她找到那个无礼的售货员，又要求看同一条 dress。售货员没有认出她，这次非常殷勤。`

English chunks:

- `returned to the shop`
- `the following morning`
- `dressed in a fur coat`
- `with a handbag in one hand`
- `and a long umbrella in the other`
- `After seeking out the rude assistant`
- `asked for the same dress`
- `Not realizing who she was`
- `was eager to serve her this time`

Teaching point:

- This block is the social reversal.
- Keep `fur coat` as a status signal in the old text, not a fashion endorsement.
- `Not realizing who she was` explains why the assistant's behavior changes.

### Block 4: 橱窗取衣服和最后的反讽

Chinese anchor:

`售货员费了好大劲爬进橱窗去拿 dress。她一看到就说不喜欢，还让他几乎把橱窗里的所有东西都拿出来，最后才买下最开始想看的那条 dress。`

English chunks:

- `With great difficulty`
- `he climbed into the shop window`
- `to get the dress`
- `As soon as she saw it`
- `she said she did not like it`
- `enjoyed herself`
- `making the assistant bring almost everything`
- `before finally buying`
- `the dress she had first asked for`

Teaching point:

- This block is the comic revenge and final irony.
- Do not over-celebrate humiliating the assistant.
- Emphasize that the story exposes judging by appearance.

## Modern Child Bridge

For a modern child, connect the text to everyday appearance judgments without
making the lesson about luxury clothing.

Possible bridges:

- Someone is wearing sports clothes and is mistaken for "not serious".
- A student with a simple backpack is ignored in a shop.
- A person in casual clothes enters a fancy place and is underestimated.
- Someone is treated differently after changing into a uniform or formal outfit.

Suggested child-facing line:

`今天 jeans 很普通，不代表穷，也不代表不礼貌。课文真正想让我们看见的是：售货员不是在了解这个人，而是在根据衣服猜她值不值得服务。`

Do not replace the original story. Use the bridge to help the child understand
why the old-text setup worked.

## Expensive Shop And Display Window Bridge

Keep the background concrete and visual.

Student-facing explanation:

`expensive shop 的 window 是橱窗，不是普通窗户。商店会把最漂亮、最吸引人的 dress 放在橱窗里，让路过的人看到。女人第一天站在橱窗前，就是被里面那条 dress 吸引了。`

Important boundaries:

- Do not turn the lesson into a fashion lecture.
- Do not teach that high-end shops deserve snobbish service.
- Keep the focus on how the assistant misjudges a customer.

## Teacher-Student Dialogue Direction

The dialogue section must not repeat the plot. It should explore the theme and
language contrast through questions.

Recommended dialogue path:

1. Teacher asks:
   `如果同一个人换了一套衣服，别人态度马上变了，这说明别人是在看人，还是在看衣服？`
2. Student answers in Chinese first:
   `他其实是在看衣服。`
3. Teacher adds English:
   `He judged her by appearance.`
4. Teacher asks:
   `标题 Can I help you, madam? 听起来礼貌吗？`
5. Student:
   `听起来礼貌。`
6. Teacher:
   `Yes, but polite words are not enough. Real respect means you do not look down on someone.`
7. Teacher contrasts:
   `First he looked at her scornfully. Later he was eager to serve her. Same person, different clothes, different treatment.`

Keep this section short. It should feel like a new angle after retell, not a
second retell.

## Main Language Focus

### Appearance Judgment Contrast

Core expressions:

- `the way she was dressed`
- `Glancing at her scornfully`
- `dressed in a fur coat`
- `Not realizing who she was`
- `eager to serve her this time`

Teaching:

- These phrases show the assistant judging appearance.
- The student should hear the contrast between outer clothing and inner identity.

Student-facing idea:

`这篇不是在说哪种衣服更好，而是在说：同一个人换了衣服，别人态度就变了，这很讽刺。`

### Participles And Sentence Openers

Core phrases:

- `Glancing at her scornfully`
- `Not realizing who she was`
- `With great difficulty`
- `As soon as she saw it`

Teaching:

- These sentence openers make the story move like film shots.
- Do not overteach grammar labels.
- Teach them as useful ways to describe action, reason, difficulty, and timing.

### `though`

Core sentence:

`Though she hesitated for a moment, she finally went in.`

Teaching:

- `though` means although.
- It shows hesitation first, then action.

### `ask to see`

Core phrase:

`asked to see a dress`

Teaching:

- Useful shopping expression.
- Not `asked see`; keep `asked to see`.

### `the dress was sold`

Core sentence:

`he told her that the dress was sold`

Teaching:

- It may be true or a lie; the story suggests he uses it to dismiss her.
- Passive voice focuses on the dress status.

### `enjoyed herself making...`

Core sentence:

`She enjoyed herself making the assistant bring almost everything in the window`

Teaching:

- This means she took pleasure in making him do the work.
- Keep it as story irony, not a real-life behavior model.

## Vocabulary Plan

Prioritize vocabulary that supports the shopping scene, social contrast, and
story movement.

### `madam`

- Formal polite address for a woman customer.
- The title sounds polite, but the story shows that words alone are not enough.

### `jeans`

- Casual trousers made of denim.
- Today normal; in this text, a sign the assistant wrongly reads as "not rich".

### `expensive`

- Costs a lot of money.
- Pair with `expensive shop`.

### `window`

- Here: shop display window.
- Not an ordinary home window.

### `hesitate`

- Pause because you are not sure.
- Pair with `for a moment`.

### `finally`

- After hesitation or delay, she goes in.
- Useful for story movement.

### `assistant`

- Shop assistant / salesperson.
- Keep it tied to the shop.

### `serve`

- Help a customer in a shop.
- Contrast first-day poor service with second-day eager service.

### `dressed`

- Wearing clothes in a certain way.
- Pair with `the way she was dressed` and `dressed in a fur coat`.

### `glance`

- Look quickly.
- Pair with `scornfully`.

### `scornfully`

- With contempt; looking down on someone.
- Key emotional word.

### `sold`

- Already bought by someone else.
- In the story, it is used to reject her request.

### `angrily`

- In an angry way.
- Connects to her decision to return.

### `punish`

- Teach someone a lesson in this story.
- Avoid physical or cruel meaning.

### `fur`

- In the source text: expensive-looking coat material.
- In modern teaching: treat as a period/status signal, not a recommendation.

### `handbag`

- A bag carried by hand or over the arm.
- Part of the second-day formal appearance.

### `umbrella`

- A tool for rain or sun.
- In the text, long umbrella adds to the formal look.

### `seek out`

- Find someone deliberately.
- She intentionally finds the rude assistant.

### `rude`

- Impolite or disrespectful.
- Use for the assistant's behavior.

### `eager`

- Very willing or enthusiastic.
- Key contrast with `scornfully`.

### `difficulty`

- Hardness or trouble doing something.
- Pair with `With great difficulty`.

### `almost`

- Nearly, but not completely.
- Pair with `almost everything`.

## Storyboard Continuity Rule

The storyboard must be designed as four linked shots from the same short film.
This is a production requirement, not an optional style preference.

Continuity spine:

`jeans at the window -> scornful rejection -> formal return -> comic over-service`

Frame-to-frame continuity:

- Frame 1 establishes the expensive shop, display window, dress, woman in jeans,
  and her hesitation.
- Frame 2 keeps the same shop and dress; the same assistant dismisses her
  scornfully.
- Frame 3 keeps the same shop and assistant; the same woman returns in a more
  formal expensive-looking coat, with handbag and long umbrella, and the
  assistant fails to recognize her.
- Frame 4 keeps the same shop window, dress, woman, and assistant; the assistant
  struggles to bring out many display items before she buys the original dress.

Prompt discipline:

- Do not generate four unrelated fashion-store scenes.
- Do not change the woman's face, hair, build, or age between her jeans outfit
  and formal outfit.
- Do not change the assistant's face, hair, or uniform.
- Do not let the original dress disappear.
- Do not place readable text on shop signs, labels, tags, posters, bags, or
  receipts.
- Do not make the woman cruel; keep the revenge comic and controlled.
- Do not make the assistant look monstrous; the problem is his attitude.

## Visual Direction

Overall visual style:

- Warm, realistic, child-friendly social comedy.
- Expensive shop setting with polished display window.
- Same woman and same assistant across frames.
- Same dress visible in Frames 1, 2, and 4 if composition allows.
- No readable text inside images.
- No labels, captions, speech bubbles, or UI-like boxes.

The visuals should help the student remember:

`jeans -> hesitation -> scornful rejection -> formal return -> eager service -> difficult window climb -> almost everything -> finally buys original dress`

Avoid:

- readable luxury-brand logos
- modern mall signage with text
- making jeans look dirty or shameful
- promoting real fur or animal imagery
- humiliating service workers
- disconnected fashion poses with no plot
- text boxes, captions, price tags, or fake lesson text inside images

## Character Consistency Brief

Use a consistent woman:

`An adult woman in her early 30s, medium build, oval face, dark brown shoulder-length hair, calm intelligent expression, first wearing neat blue jeans and a simple light sweater, later wearing an elegant fur-like cream coat with a handbag and long umbrella; same face, same hair, same posture across both outfits.`

Use a consistent shop assistant:

`A male shop assistant in his 30s, slim build, tidy dark hair, wearing a dark formal shop suit with no readable name tag, first showing a restrained scornful expression, later overly eager and nervous while serving; same face and clothing across frames.`

Supporting elements:

- A polished expensive shop interior.
- A display window with an elegant dress and other clothing items.
- No readable shop name, price tags, labels, or posters.
- The original dress should be distinct by color and shape so the student can
  recognize it later.

## Four-Frame Storyboard Intent

### Frame 1: Woman In Jeans At The Shop Window

Purpose:

- Establish the expensive shop and the first appearance judgment setup.
- Show the woman hesitating before entering.

Visual:

- The woman in neat blue jeans stands outside an expensive shop window.
- She looks at an elegant dress displayed inside.
- Her posture shows hesitation and interest.
- The shop feels polished and formal.
- No readable shop sign, brand, price tag, or window text.

Teaching content:

- `A woman in jeans`
- `stood at the window`
- `of an expensive shop`
- `Though she hesitated for a moment`
- `asked to see a dress`

Continuity note:

- This frame establishes the woman, the shop, and the original dress.

### Frame 2: Scornful Rejection

Purpose:

- Show the assistant judging her by clothing.
- Make `scornfully` visible without overacting.

Visual:

- Same shop interior and same dress visible in or near the display window.
- The same woman has entered the shop.
- The assistant looks at her with restrained scorn and dismissive body language.
- The woman looks hurt or angry but controlled.
- No speech bubble or readable text.

Teaching content:

- `The assistant who served her`
- `did not like the way she was dressed`
- `Glancing at her scornfully`
- `the dress was sold`
- `walked out angrily`

Continuity note:

- This frame should explain why she returns the next day.

### Frame 3: Formal Return And Eager Service

Purpose:

- Show the same woman returning in a more formal outfit.
- Make the assistant's changed attitude visible.

Visual:

- Same shop, same assistant, same woman.
- The woman now wears an elegant fur-like cream coat and carries a handbag and
  long umbrella.
- She seeks out the same assistant.
- The assistant does not recognize her and appears eager to serve.
- No animal imagery, readable labels, or text.

Teaching content:

- `returned to the shop the following morning`
- `dressed in a fur coat`
- `with a handbag in one hand`
- `a long umbrella in the other`
- `Not realizing who she was`
- `eager to serve her this time`

Continuity note:

- The woman's face and hair must clearly match Frame 1.
- The assistant must be the same person from Frame 2.

### Frame 4: Almost Everything In The Window

Purpose:

- Show the comic revenge and final irony.
- Make the assistant's difficult work visible.

Visual:

- Same shop window and interior.
- The assistant awkwardly climbs into or reaches deeply into the display window
  to retrieve the dress and other display items.
- Several garments or accessories from the window are now out in the shop, but
  no readable labels or tags.
- The woman remains composed, finally choosing the original dress.
- The mood is comic, not cruel.

Teaching content:

- `With great difficulty`
- `he climbed into the shop window`
- `As soon as she saw it`
- `she did not like it`
- `making the assistant bring almost everything`
- `before finally buying the dress she had first asked for`

Continuity note:

- This frame should feel like the result of the first three frames.
- The original dress should be recognizable.

## Script And Courseware Presentation

The script should follow this pacing:

1. Short hook: same person, different clothes, different treatment.
2. Four `retell` frames:
   - Frame 1: woman in jeans outside expensive shop.
   - Frame 2: scornful assistant refuses her request.
   - Frame 3: same woman returns formally dressed; assistant is eager.
   - Frame 4: assistant brings almost everything before she buys the original
     dress.
3. Teacher-student dialogue:
   - Do not retell the plot.
   - Discuss appearance judgment and real respect.
   - Contrast `Can I help you, madam?` with the assistant's real attitude.
4. Passage normal reading.
5. Three vocabulary blocks.
6. Grammar board.
7. You Too living-scene transfer.
8. Outro with the full practice order.

The opening must not contain the full story chain. Do not say all of:

`jeans -> expensive shop -> assistant scornful -> says sold -> woman returns in fur coat -> assistant eager -> climbs into window -> brings everything -> she finally buys original dress`

inside the hook. Save that sequence for the four retell frames.

The teacher-student dialogue must not contain the full story chain either. It
should be a theme discussion after the student already understands the events.

Student-facing Chinese should feel like a guided contrast:

- `先看第一天她为什么被误判。`
- `再看售货员怎样表现出 scornfully。`
- `然后看第二天同一个人为什么被不同对待。`
- `最后看这个故事怎样讽刺“只看衣服不看人”。`

## Read-Aloud And Pronunciation Direction

Choose 5-8 high-value sentences for read-aloud. Suggested targets:

1. `A woman in jeans stood at the window of an expensive shop.`
   - Focus: `in jeans`, `at the window`, `expensive shop`.
2. `Though she hesitated for a moment, she finally went in and asked to see a dress that was in the window.`
   - Focus: `Though`, hesitation-to-action rhythm, `asked to see`.
3. `The assistant who served her did not like the way she was dressed.`
   - Focus: relative clause, `the way she was dressed`.
4. `Glancing at her scornfully, he told her that the dress was sold.`
   - Focus: participle opener, `scornfully`, passive `was sold`.
5. `She returned to the shop the following morning dressed in a fur coat, with a handbag in one hand and a long umbrella in the other.`
   - Focus: long description, `the following morning`, paired hands.
6. `Not realizing who she was, the assistant was eager to serve her this time.`
   - Focus: reason phrase, `eager to serve`, irony.
7. `With great difficulty, he climbed into the shop window to get the dress.`
   - Focus: `With great difficulty`, physical comedy.
8. `She enjoyed herself making the assistant bring almost everything in the window before finally buying the dress she had first asked for.`
   - Focus: long sentence chunking, `before finally buying`.

Read-aloud feedback should reward:

- clear grouping of long sentences
- expressive contrast between `scornfully` and `eager`
- correct stress on `same dress`, `this time`, and `finally`
- careful pronunciation of `madam`, `jeans`, `hesitated`, `assistant`,
  `scornfully`, `punish`, `fur`, and `eager`

## Living-Scene Exercise Direction

Use a modern safe transfer that preserves appearance judgment without teaching
revenge.

Recommended scene:

`The Casual Hoodie Visit`

Chinese setup:

`一个学生穿着普通 hoodie 和运动鞋去一个看起来很正式的活动现场。工作人员一开始以为他只是来玩的，态度很冷淡。后来工作人员发现他就是受邀展示作品的学生，马上变得很热情。学生没有羞辱对方，只是平静地说明：不要只根据衣服判断一个人。`

Target transfer:

- `the way he was dressed`
- `glancing at him scornfully`
- `not realizing who he was`
- `eager to serve / help`
- `same person, different clothes, different treatment`
- `real respect`

This keeps the lesson's social contrast while avoiding a revenge role-play.

## Suggested You Too Scene

Scene title:

`The Casual Hoodie Visit`

Role:

- Student tells a short story about someone being judged by casual clothes.
- Parent/teacher asks guiding questions.

Expected student output shape:

1. `A boy in a hoodie stood outside a formal event.`
2. `The assistant did not like the way he was dressed.`
3. `Glancing at him scornfully, she told him to wait outside.`
4. `The following morning, he returned with his invitation card.`
5. `Not realizing who he was, she was eager to help him this time.`
6. `He did not get angry.`
7. `He said people should not judge others by appearance.`

Keep the exercise short. The goal is transfer of appearance judgment and the
language contrast, not revenge behavior.

## Chinese-To-English Exercise Direction

The translation practice should reinforce the shopping sequence, social
contrast, and sentence openers.

Suggested chunk logic:

1. 一位穿 jeans 的女人站在一家高档商店的橱窗前，犹豫了一会儿后进去要求看那条 dress。
2. 接待她的售货员不喜欢她的穿着，轻蔑地看她，说那条 dress 已经卖了。
3. 女人生气地离开商店，决定第二天教训那个售货员。
4. 第二天早上，她穿着正式贵气的 coat，拿着 handbag 和 long umbrella 回到商店。
5. 售货员没有认出她，这次非常殷勤地接待她，并费劲爬进橱窗取那条 dress。
6. 她一看到就说不喜欢，让他几乎把橱窗里的所有东西都拿出来，最后才买最开始想看的那条 dress。

High-value expressions to preserve:

- `A woman in jeans`
- `stood at the window of an expensive shop`
- `Though she hesitated for a moment`
- `asked to see a dress`
- `the way she was dressed`
- `Glancing at her scornfully`
- `the dress was sold`
- `decided to punish the assistant`
- `the following morning`
- `dressed in a fur coat`
- `with a handbag in one hand and a long umbrella in the other`
- `After seeking out the rude assistant`
- `Not realizing who she was`
- `eager to serve her this time`
- `With great difficulty`
- `As soon as she saw it`
- `before finally buying`

If manual chunks are added to `web/data/lessons.json`, Chinese and English chunk
counts must match. Otherwise rely on the frontend fallback.

## Grammar Board

### 1. `Though...finally...`

Board idea:

`Though she hesitated for a moment, she finally went in.`

Chinese anchor:

`虽然犹豫了一会儿，但最后还是进去了。`

Teaching:

- `Though` sets up hesitation.
- `finally` shows she takes action after hesitation.

### 2. Relative Clause

Core sentence:

`The assistant who served her did not like the way she was dressed.`

Teaching:

- `who served her` tells us which assistant.
- `the way she was dressed` means how she looked in her clothes.

### 3. Participle Opener

Core phrase:

`Glancing at her scornfully`

Teaching:

- A quick look plus attitude.
- It makes the sentence vivid and compact.

### 4. Passive Voice

Core phrase:

`the dress was sold`

Teaching:

- Focus is on the dress status.
- In the story, it also becomes the assistant's excuse.

### 5. `with...in one hand and...in the other`

Core phrase:

`with a handbag in one hand and a long umbrella in the other`

Teaching:

- Useful visual description.
- Balanced structure: one hand / the other.

### 6. `Not realizing who she was`

Core phrase:

`Not realizing who she was, the assistant was eager to serve her this time.`

Teaching:

- Reason for his changed behavior.
- He does not know she is the same woman.

### 7. `With great difficulty`

Core phrase:

`With great difficulty, he climbed into the shop window`

Teaching:

- Shows the action is hard.
- Good for vivid narrative writing.

### 8. `As soon as`

Core phrase:

`As soon as she saw it`

Teaching:

- Means immediately after.
- Useful timing connector.

### 9. `before finally doing`

Core phrase:

`before finally buying the dress`

Teaching:

- Shows many actions happen first.
- `finally` marks the real result.

## Final Page / Course Flow Reminder

The final page and spoken outro must include the full practice order:

`⓪ 跟读：听课文全文 -> 听原音 -> 录一句 -> 获取反馈`

then:

`① 生活场景`

`② 完形填空`

`③ 中译英`

`④ 英译中`

`⑤ 默写`

The final reminder should connect practice to the lesson goal:

`这一课先把外表判断的反差线背熟：jeans 看橱窗 -> 售货员 scornfully -> 说 dress sold -> 第二天正式 dressed 回来 -> 售货员 not realizing who she was -> eager to serve -> 费劲拿出很多东西 -> 最后才买最开始那条 dress。跟读时注意 scornfully 和 eager 的语气反差；生活场景里，用 the way he was dressed, not realizing who he was, eager to help 讲一个“不要只看衣服判断人”的现代小故事。`

## Acceptance Criteria

Lesson 57 is ready for production when:

- The opening hook is 4-6 spoken lines and does not retell the whole passage.
- The lesson is framed as appearance-judgment satire, not a simple shopping
  story.
- The student-facing story spine is Chinese-first.
- The course sections have distinct jobs and do not repeat the same full story
  script.
- The teacher-student dialogue does not repeat the retell sequence; it deepens
  the theme of judging by appearance and real respect.
- `jeans` is explained as context-dependent in the old expensive-shop setting,
  not as low-class clothing.
- `madam` is explained as formal politeness, contrasted with true respect.
- `window` is explained as shop display window.
- `scornfully` and `eager` are taught as the emotional contrast pair.
- `punish` is explained as teaching a lesson in story comedy, not physical or
  cruel punishment.
- `fur coat` is handled as a period/status signal without promoting real fur.
- The four illustrations form one continuous cause-and-effect story line.
- Storyboard prompts preserve the same woman, same assistant, same shop, same
  shop window, and same dress across frames.
- Generated illustrations contain no readable text, labels, captions, price
  tags, shop signs, brand names, or empty text boxes.
- The visual tone is comic and satirical without humiliating service workers.
- The living-scene transfer uses a modern appearance-judgment situation without
  encouraging revenge behavior.
- Read-aloud includes the first-day scorn sentence, second-day return sentence,
  `Not realizing who she was`, and final long sentence.
- The outro includes `⓪ 跟读` before `① 生活场景`, with the concrete read-aloud
  steps.
