# Lesson 48 Plan - Did you want to tell me something?

This is the source-of-truth design card for producing Lesson 48. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 48 assets.

## Basic Info

- Lesson: 48
- Title: `Did you want to tell me something?`
- Chinese title: `你想对我说什么吗？`
- Core bridge: `这不是牙科恐怖故事，而是一个“牙医一直闲聊，病人却完全说不了话”的误会笑话。牙医刚拔完牙，病人嘴里塞满 cotton wool，只能点头或发怪声；真正重要的话一直说不出来，直到最后才说出：牙医拔错了牙。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule.

- Story spine must be Chinese-first.
  - Present the plot first as a Chinese scene line.
  - Attach short English chunks after each Chinese anchor.
  - Do not use an all-English arrow chain as the main student-facing memory
    path.
- Generated illustrations must be text-free.
  - No readable English text inside images.
  - No clinic signs, labels, dental charts, speech bubbles, captions, or fake UI
    text inside images.
  - No empty boxes, blank labels, placeholder panels, or fake text areas.
  - If the courseware needs text, render it as real UI text outside the image.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, visual style
    instructions, camera directions, or generated-image mechanics.
  - Storyboard prompts must not become spoken lesson content.
- Keep the dental scene safe and comic.
  - No blood, gore, frightening instruments, or graphic tooth extraction.
  - The wrong-tooth ending is textbook exaggeration / comic shock, not a modern
    medical instruction.
- Normalize source typo only in student-facing materials.
  - The Chinese source has `米柴盒`; interpret it as `火柴盒`.
  - Do not edit `web/data/lessons.json` during normal lesson production.

## Production Warnings

- Explain the dental setting early.
  - The patient has just had a tooth pulled out.
  - His mouth is full of `cotton wool`, so he cannot answer normally.
  - The dentist asks friendly questions at exactly the wrong moment.
- Add a short China / UK dental-visit bridge.
  - Chinese students may picture a public hospital stomatology / dental
    department: registration, waiting, hospital room, many patients.
  - This lesson feels more like an appointment with a dentist in a dental
    practice / dentist surgery, where the dentist may know personal details
    about the patient.
  - Do not turn this into an NHS policy lesson. Mention only that British dental
    care is often accessed through dental practices, sometimes under the NHS or
    privately.
- Add a modern medical boundary.
  - In real life, dentists should verify the tooth and treatment before
    extraction.
  - The wrong-tooth ending is a comic punchline in an old textbook story.
- Explain `match boxes`.
  - Older everyday object; some people collected match boxes for their designs.
  - Bridge to modern collecting: cards, stickers, badges, figures, game items,
    blind-box cards, keychains.
- Keep the dentist human.
  - The dentist is not evil.
  - The joke is about badly timed friendly chatter and the patient's inability
    to speak.

If production requires editing `web/data/lessons.json`, stop and ask for a
shared-data edit because it is outside the normal per-lesson write set.

## Lesson Positioning

Lesson 48 is a two-track comedy: outside, the dentist keeps making polite
conversation; inside, the patient grows more and more worried because he cannot
say the important thing.

The dentist has just pulled out one of the patient's teeth and tells him to rest
for a while. The patient tries to speak, but his mouth is full of cotton wool.
The dentist knows the patient collects match boxes, so he asks whether the
collection is growing. Then he asks about the patient's brother and his new job
in London. The patient can only nod or make strange noises. Meanwhile, his
tongue is searching for the hole where the tooth had been. He becomes very
worried but still cannot speak. When the dentist finally removes the cotton
wool, the patient is able to say that the dentist has pulled out the wrong
tooth.

The courseware should make the student understand:

`牙医刚拔完一颗牙 -> 病人嘴里塞满药棉 -> 牙医开始闲聊 -> 问火柴盒收藏 -> 问兄弟 -> 问伦敦新工作 -> 病人只能点头或发怪声 -> 舌头偷偷找牙洞 -> 病人越来越着急但说不出 -> 棉花终于拿掉 -> 他说牙医拔错牙了`

The ending should land as:

`牙医一直以为病人只是想闲聊，病人真正想说的是：你拔错了。`

## One-Sentence Hook

A dentist keeps asking friendly questions while the patient cannot speak, and
the patient is trying to say the dentist pulled out the wrong tooth.

## Vivid Teaching Opening

The opening should establish the comic impossibility of answering.

Suggested teacher narration:

`想象你刚刚拔完牙，嘴里塞满 cotton wool。你想说话，但一张嘴只能发出奇怪的声音。这个时候，牙医偏偏很热情，开始问你问题：你的 match boxes 收藏还在增加吗？你哥哥怎么样？你喜欢 London 的新工作吗？`

`这些问题平时都很普通，甚至有点像熟人聊天。但现在最大的问题是：你根本说不了话。更糟糕的是，你的舌头正在找刚拔牙留下的洞，突然发现不对劲。你越来越着急，却还是说不出来。`

`最后 cotton wool 拿出来，你终于能说话了：他拔错牙了。`

Tone:

- Light, anxious comedy.
- No scary dental description.
- Make the two tracks clear: dentist chatting outside, patient alarm inside.

## Story Focus

The dental-comedy chain is:

1. Dentists ask questions when it is impossible for the patient to answer.
2. The dentist has just pulled out one of the patient's teeth.
3. He tells the patient to rest for a while.
4. The patient tries to say something.
5. His mouth is full of cotton wool.
6. The dentist asks whether his match-box collection is growing.
7. The dentist asks how his brother is.
8. The dentist asks whether he likes his new job in London.
9. The patient either nods or makes strange noises.
10. Meanwhile, his tongue searches for the hole where the tooth had been.
11. He suddenly feels very worried.
12. He cannot say anything.
13. The dentist finally removes the cotton wool.
14. The patient says the dentist has pulled out the wrong tooth.

The production should make the contrast visible:

`牙医外部闲聊` versus `病人内部警报`.

## Chinese-First Story Spine For Courseware

Use this as the main student-facing story line.

1. 牙医总在你无法回答时问问题
   - `Dentists always ask questions`
   - `when it is impossible for you to answer`
2. 牙医刚拔完一颗牙
   - `had just pulled out one of my teeth`
3. 病人嘴里塞满药棉，说不了话
   - `my mouth was full of cotton wool`
4. 牙医问火柴盒收藏
   - `collected match boxes`
   - `whether my collection was growing`
5. 牙医又问兄弟和伦敦新工作
   - `how my brother was`
   - `whether I liked my new job in London`
6. 病人只能点头或发怪声
   - `either nodded or made strange noises`
7. 同时，舌头在找牙洞
   - `Meanwhile`
   - `my tongue was busy searching out the hole`
8. 病人突然很担心，却说不出来
   - `felt very worried`
   - `could not say anything`
9. 棉花终于被拿出来
   - `removed the cotton wool from my mouth`
10. 他终于说：拔错牙了
    - `he had pulled out the wrong tooth`

Student memory prompt:

`先记中文电影线：拔牙后嘴里塞棉花、牙医闲聊、病人只能点头、舌头发现不对、最后说拔错牙。再把英文短语挂到每个镜头上。`

Do not show this as an all-English arrow chain in the student-facing courseware.

## Recitation Blocks

Break the passage into four Chinese-first recitation blocks:

1. 无法回答
   - 中文锚点：牙医总是在病人无法回答时问问题。
   - English chunks:
     - `Dentists always ask questions`
     - `when it is impossible for you to answer`
2. 嘴里塞满药棉
   - 中文锚点：牙医刚拔完牙，让我休息；我想说话，但嘴里塞满药棉。
   - English chunks:
     - `had just pulled out one of my teeth`
     - `had told me to rest for a while`
     - `I tried to say something`
     - `my mouth was full of cotton wool`
3. 牙医开始闲聊
   - 中文锚点：牙医问我的收藏、兄弟和伦敦新工作；我只能点头或发怪声。
   - English chunks:
     - `asked me whether my collection was growing`
     - `asked me how my brother was`
     - `whether I liked my new job in London`
     - `either nodded or made strange noises`
4. 内心警报
   - 中文锚点：与此同时，舌头在找牙洞；我发现不对，却说不出来；最后才说拔错牙。
   - English chunks:
     - `Meanwhile`
     - `searching out the hole`
     - `I suddenly felt very worried`
     - `could not say anything`
     - `pulled out the wrong tooth`

## Dental Visit Culture Bridge

This bridge should be short and practical.

Explain:

- In China, many children picture dental treatment in a public hospital dental /
  stomatology department: registration, waiting area, hospital clinic, and many
  patients.
- In Britain, many ordinary dental visits happen in dental practices / dentist
  surgeries rather than a large hospital setting.
- Some care may be under the NHS and some may be private; the lesson does not
  need the payment details.
- The important story point is that the dentist seems to know the patient
  personally: match boxes, brother, and new job.
- This makes the dentist's questions feel like friendly small talk, but the
  timing is absurd because the patient cannot answer.

Student-facing bridge:

`中国孩子想到看牙，可能先想到医院口腔科；这篇课文里的 dentist 更像预约制牙医诊所里的牙医，甚至知道病人的收藏、哥哥和新工作。所以他会像熟人一样闲聊。真正好笑的是：他聊天的时机完全不对，病人嘴里塞满 cotton wool，根本说不了话。`

Do not turn this into an NHS policy explanation. The bridge should support the
scene, not become a healthcare-system lecture.

## Cotton Wool And Dental Safety Bridge

Explain:

- `cotton wool` is British English for soft cotton material.
- After a tooth is pulled out, cotton wool may be placed in the mouth to help
  stop bleeding.
- With cotton wool in the mouth, speech becomes unclear or impossible.
- The wrong-tooth ending is an old textbook comic punchline.
- In real dental care, dentists should verify which tooth is being treated.

Student-facing bridge:

`cotton wool 就是药棉。拔牙后嘴里塞着药棉，病人很难正常说话，所以只能点头或者发怪声。最后“拔错牙”是课文的夸张笑点，现实中医生应该先确认牙位。`

## Match Boxes And Collecting Bridge

Explain:

- `match boxes` are small boxes that hold matches.
- In older daily life, match boxes were common objects.
- Some people collected match boxes because different hotels, restaurants, or
  brands had different designs.
- Today, a student can connect this to collecting cards, stickers, badges,
  figures, blind-box cards, keychains, or game items.

Student-facing bridge:

`match boxes 现在孩子可能不熟，但以前很常见。不同地方的火柴盒会有不同图案，有些人会收藏。今天可以想成收集贴纸、卡牌、徽章、小卡或者游戏周边。`

## Main Language Focus

The main language focus is double-track storytelling plus indirect questions.

### Opening Generalization

Key sentence:

`Dentists always ask questions when it is impossible for you to answer.`

Explain:

This sentence is the narrator's complaint and the whole lesson's setup.

Student-facing explanation:

`这句话不是在认真统计所有牙医，而是在吐槽：牙医总是在你最不能回答的时候问问题。后面所有笑点都从这里来。`

### Indirect Questions

Story examples:

- `asked me whether my collection was growing`
- `asked me how my brother was`
- `whether I liked my new job in London`

Student-facing explanation:

These are reported / indirect questions. The dentist is chatting, but the
questions are reported by the narrator.

Connect to earlier learning:

This can briefly review Lesson 39's indirect questions, but keep the new scene
clear:

- Lesson 39: indirect questions in a phone inquiry.
- Lesson 48: indirect questions in badly timed small talk.

### `either...or...`

Key sentence:

`I either nodded or made strange noises.`

Meaning:

`I had only two possible answers: nod, or make strange sounds.`

Student-facing examples:

- `I either nodded or shook my head.`
- `He either smiled or said nothing.`
- `I either texted back or called him.`

### `Meanwhile`

Key sentence:

`Meanwhile, my tongue was busy searching out the hole where the tooth had been.`

Meaning:

`At the same time, another action was happening.`

Student-facing explanation:

`Meanwhile 很关键。外面是牙医在聊天，里面是病人的舌头在检查牙洞。这个词把两个画面并排放在一起：外线闲聊，内线警报。`

### Past Perfect Punchline

Key phrase:

`he had pulled out the wrong tooth`

Explain:

By the time the patient can say it, the mistake has already happened.

Student-facing explanation:

`had pulled out` 说明错误已经发生了。不是“快要拔错”，而是已经拔错了，所以最后一句才有冲击力。`

## Vocabulary Plan

Formal vocab blocks should be exactly 3:

1. `cotton wool`
   - Meaning: soft cotton material used here after dental treatment.
   - Bridge: it explains why the patient cannot answer.
   - Example: `My mouth was full of cotton wool.`
2. `collection`
   - Meaning: a group of things someone collects.
   - Bridge: the dentist knows the patient's match-box collection, so the
     question feels like familiar small talk.
   - Example: `He asked me whether my collection was growing.`
3. `meanwhile`
   - Meaning: at the same time.
   - Bridge: it separates the dentist's friendly questions from the patient's
     hidden worry.
   - Example: `Meanwhile, my tongue was busy searching out the hole.`

Supporting vocabulary to introduce in context, not as full vocab cards:

- `dentist` = tooth doctor
- `pull out` = remove by pulling; here, remove a tooth
- `tooth / teeth` = singular / plural
- `rest for a while` = rest for a short time
- `match boxes` = boxes for matches; old collectible object
- `collect` = gather and keep things as a hobby
- `growing` = becoming larger
- `brother` = family member
- `new job in London` = friendly small-talk topic
- `in answer to` = as a response to
- `nod` = move head up and down to mean yes
- `make strange noises` = make unclear sounds
- `tongue` = part inside the mouth used for tasting and speaking
- `search out` = look carefully for something
- `hole` = empty space left by the removed tooth
- `worried` = anxious / concerned
- `remove` = take away
- `wrong tooth` = incorrect tooth

## Visual Direction

Keep visuals clean, comic, and non-scary.

- Setting:
  - Dental practice / dentist room.
  - Chair, dentist, patient, simple dental tools in background.
  - No readable clinic signs or dental charts.
- Patient:
  - Adult narrator, mouth full of cotton wool, trying to communicate.
  - Expressive eyes and hand gestures.
  - Shows growing worry without horror.
- Dentist:
  - Friendly, chatty, not malicious.
  - Looks professional and calm.
- Tooth / cotton:
  - Cotton wool can be visible.
  - Do not show blood, extracted tooth close-ups, or graphic medical detail.
- Comedy:
  - Use expressions: nodding, muffled sounds, worried eyes, dentist chatting.
  - The inner worry can be shown through the patient's expression, not text.
- Forbidden:
  - readable text inside images
  - speech bubbles
  - captions
  - empty boxes
  - graphic dental imagery

## Character Consistency Brief

Use this brief for storyboard image prompts only. Do not copy it into the
teaching script.

`A warm educational dental-office comedy illustration without any readable text or empty label boxes. A friendly adult dentist stands beside a dental chair after treatment. The adult patient sits in the chair with cotton wool in his mouth, trying to communicate with expressive eyes and small gestures. The dentist is chatty and professional, not malicious. The scene is clean, bright, and non-scary, with simple dental equipment in the background but no blood, no extracted tooth close-ups, no readable signs, no speech bubbles, no captions, and no blank boxes. Consistent dentist, patient, dental chair, cotton wool, and clinic setting across all frames.`

## Four-Frame Storyboard Intent

Frame 1: Mouth Full Of Cotton Wool

- Dentist has just finished treatment.
- Patient sits in the chair with cotton wool in his mouth.
- Patient tries to say something but cannot.
- No gore and no readable text.

Frame 2: Dentist Keeps Chatting

- Dentist asks friendly questions.
- Patient can only nod or make muffled sounds.
- Show the mismatch: dentist relaxed, patient unable to speak.
- No speech bubbles or text.

Frame 3: Meanwhile, The Tongue Checks

- Patient looks suddenly worried.
- The visual should imply internal checking / realization without showing
  graphic mouth detail.
- Dentist is still unaware.
- This is the double-track moment: outside calm, inside alarm.

Frame 4: Wrong Tooth

- Dentist finally removes the cotton wool.
- Patient is finally able to speak.
- Dentist reacts with surprise.
- The UI / narration, not the image, delivers the line that the wrong tooth was
  pulled out.

## Script And Courseware Presentation

The production should present the story as two simultaneous lines.

Suggested slide pattern:

1. 中文场景句：`牙医在闲聊。`
2. English chunks:
   - `asked me whether my collection was growing`
   - `asked me how my brother was`
3. 中文场景句：`与此同时，病人的舌头在找牙洞。`
4. English chunk:
   - `Meanwhile, my tongue was busy searching out the hole`
5. Teacher explanation:
   - `外线是聊天，内线是警报。Meanwhile 把两个画面接起来。`

Use this pattern for the story spine and recitation map.

Do not bake English text into illustrations.

## Read-Aloud And Pronunciation Direction

Production should preserve the existing read-aloud structure:

- First listen to the full passage.
- Then listen to the original sentence.
- Then record one sentence.
- Then receive feedback.

This lesson has indirect questions, mouth-related vocabulary, and a final
punchline. Feedback should help the student read the contrast clearly.

Useful sentence groups for read-aloud focus:

- `Dentists always ask questions when it is impossible for you to answer.`
- `My dentist had just pulled out one of my teeth and had told me to rest for a while.`
- `I tried to say something, but my mouth was full of cotton wool.`
- `He knew I collected match boxes and asked me whether my collection was growing.`
- `He then asked me how my brother was and whether I liked my new job in London.`
- `In answer to these questions I either nodded or made strange noises.`
- `Meanwhile, my tongue was busy searching out the hole where the tooth had been.`
- `I suddenly felt very worried, but could not say anything.`
- `When the dentist at last removed the cotton wool from my mouth, I was able to tell him that he had pulled out the wrong tooth.`

For feedback tone:

- Practice `dentists`, `pulled out`, `cotton wool`, `collected`, `collection`,
  `nodded`, `meanwhile`, `tongue`, `searching out`, and `wrong tooth`.
- Help the student group indirect questions clearly.
- Encourage a small pause after `Meanwhile`.
- The final sentence should sound like sudden realization, not horror.

## Living-Scene Exercise Direction

The living-scene exercise should transfer the lesson into communicating when you
cannot speak normally.

Recommended scenario:

`You are at a clinic, dentist, or school nurse's office. You cannot speak clearly for a moment, so you use gestures, nodding, writing, or a phone note to communicate something important.`

Student should practice:

- saying someone cannot answer
- using `either...or...`
- using indirect questions
- using `meanwhile`
- politely asking for a moment to write or gesture
- explaining the important message after they can speak

Useful expressions:

- `I could not answer because...`
- `I either nodded or made a gesture.`
- `Meanwhile, I was trying to tell him something important.`
- `Could I write it down?`
- `I wanted to tell you that...`

Safety point:

In real medical or dental situations, if something feels wrong, the patient
should signal clearly and the adult / doctor should stop and check.

## Suggested You Too Scene

Scene:

`You are at the dentist. Your mouth is full of cotton wool, so you cannot speak clearly. The dentist asks you a question, but you need to tell him something important.`

Prompt ideas:

- `你为什么不能回答？`
- `你只能做哪两种反应？用 either...or...`
- `Meanwhile 可以怎样描述你心里正在想的事？`
- `你怎样礼貌地请求写下来？`
- `最后你想告诉牙医什么？`

Target output pattern:

`I could not answer because my mouth was full of cotton wool. I either nodded or made strange noises. Meanwhile, I was trying to tell the dentist something important. At last, I wrote it down.`

The exercise should be age-appropriate and should not ask the student to
describe graphic dental treatment.

## Chinese-To-English Exercise Direction

The Chinese-to-English practice should reinforce the dental-comedy chain,
indirect questions, and double-track structure.

Suggested items:

1. `牙医总是在你无法回答的时候问问题。`
   - `Dentists always ask questions when it is impossible for you to answer.`
2. `我的牙医刚刚拔掉了我的一颗牙。`
   - `My dentist had just pulled out one of my teeth.`
3. `他让我休息一会儿。`
   - `He had told me to rest for a while.`
4. `我想说点什么，但我的嘴里塞满了药棉。`
   - `I tried to say something, but my mouth was full of cotton wool.`
5. `他知道我收集火柴盒。`
   - `He knew I collected match boxes.`
6. `他问我收藏是否在增加。`
   - `He asked me whether my collection was growing.`
7. `他又问我哥哥怎么样。`
   - `He then asked me how my brother was.`
8. `他还问我是否喜欢伦敦的新工作。`
   - `He also asked me whether I liked my new job in London.`
9. `我不是点头，就是发出奇怪的声音。`
   - `I either nodded or made strange noises.`
10. `与此同时，我的舌头正忙着寻找牙齿原来所在的那个洞。`
    - `Meanwhile, my tongue was busy searching out the hole where the tooth had been.`
11. `我突然感到非常担心，但说不出话。`
    - `I suddenly felt very worried, but could not say anything.`
12. `最后，我能告诉他，他拔错了牙。`
    - `At last, I was able to tell him that he had pulled out the wrong tooth.`

## Grammar Board

Keep the grammar board tied to the two-track comedy.

Board structure:

`中文电影线`

- 刚拔完牙
- 嘴里塞满 cotton wool
- 牙医开始闲聊
- 病人只能点头或发怪声
- Meanwhile: 舌头发现不对
- 最后：wrong tooth

`Indirect questions`

- `whether my collection was growing`
- `how my brother was`
- `whether I liked my new job`

`Either...or...`

- `I either nodded or made strange noises.`
- two possible responses

`Meanwhile`

- outside: dentist chatting
- inside: tongue searching / patient worrying

`Past perfect punchline`

- `he had pulled out the wrong tooth`
- the mistake had already happened

Avoid presenting the lesson as dental trivia. The grammar should support the
comic timing: unable to speak, too many questions, hidden worry, final reveal.

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
But the Lesson 48 script and per-lesson data should describe the read-aloud step
as part of the lesson flow.

## Acceptance Criteria

Lesson 48 production is acceptable only if:

- The story spine and recitation support are Chinese-first, with English chunks
  attached after Chinese scene anchors.
- Generated illustrations contain no readable text, signs, speech bubbles,
  captions, fake UI text, dental-chart labels, or empty boxes.
- The teaching script contains no image prompts, visual style instructions, or
  storyboard-generation language.
- The script explains the China / UK dental-visit scene difference briefly and
  does not become an NHS policy lesson.
- The script explains `cotton wool` as the reason the patient cannot answer.
- The script explains `match boxes` as an older collectible object and bridges
  it to modern collecting.
- The lesson is comic and non-scary, with no graphic dental imagery.
- The script notes that real dentists should verify the tooth before extraction.
- The source typo `米柴盒` is normalized to `火柴盒 / match boxes` in
  student-facing content without editing shared data.
- The 3 formal vocab blocks are exactly `cotton wool`, `collection`, and
  `meanwhile`.
- The main grammar board covers indirect questions, `either...or...`,
  `Meanwhile`, and the final past-perfect punchline.
- The living-scene exercise practices communicating safely when speech is
  temporarily unclear.
- The storyboard preserves consistent dentist, patient, cotton wool, dental
  chair, and clinic setting across all four frames.
- The final flow reminder includes `⓪ 跟读` before the other practice steps.
