# Lesson 45 Plan - A clear conscience

This is the revised source-of-truth design card for producing Lesson 45. A
development thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`,
then this file before producing or regenerating any Lesson 45 assets.

## Revision Notes

This plan replaces the earlier Lesson 45 card because the first production
direction caused several problems:

- Illustrations contained visible English text.
- Some illustrations included empty boxes / label areas.
- Script text mixed in image-prompt language.
- The opening explanation was not vivid enough.
- The recitation path was too English-heavy and not friendly for the student.

The corrected production rule is:

`Images tell the scene. Courseware text explains the language. Script is for
teaching. Image prompts stay in storyboard data only.`

## Basic Info

- Lesson: 45
- Title: `A clear conscience`
- Chinese title: `问心无愧`
- Core bridge: `这是一篇“良心分期付款”的小村庄幽默故事：Sam 丢了钱包，匿名的人一点一点把钱还回来，还用 50%、25%、100% 给自己的诚实程度打分。好笑的地方是，道德不能像数学题一样分期结清。`

## Non-Negotiable Production Fixes

These are required for regeneration:

- No readable text inside generated illustrations.
  - No English labels.
  - No percentage words inside the image.
  - No readable note text inside the image.
  - No shop signs, captions, speech bubbles, handwriting, or UI boxes baked
    into the image.
- No empty boxes inside generated illustrations.
  - Do not draw blank cards, empty labels, empty panels, or placeholder boxes.
  - If the courseware needs a text card, it must be real UI text rendered by the
    app, not an empty area inside the image.
- Do not mix image prompts into the teaching script.
  - The narration script must never contain prompt language such as `warm
    educational illustration`, `consistent character`, `camera`, `frame`, or
    style instructions.
  - Visual prompts belong only in `pipeline/scripts/lesson_45.storyboard.json`.
  - Teaching script belongs only in `pipeline/scripts/lesson_45.script.md`.
- Recitation support must be Chinese-first.
  - Use Chinese scene anchors first.
  - Attach key English chunks after the Chinese anchor.
  - Do not give the student an all-English memory chain.
- Explanation must be vivid.
  - Start from a small-village lost-wallet scene.
  - Make the anonymous return and percentage notes feel like a little mystery.
  - Keep the moral point clear but not preachy.

## Production Warnings

This lesson should feel like a warm village mystery with a dry comic ending, not
like a theft trick.

- Explain `clear conscience` clearly.
  - Meaning: having no guilty feeling because you have done right or made things
    right.
  - Student-friendly line: `问心无愧，就是心里没有亏欠，晚上能睡得踏实。`
- Do not normalize theft.
  - The notes are funny, but keeping someone else's money is still wrong.
  - Returning money bit by bit does not make stealing acceptable.
  - The humor is that the anonymous person treats honesty like a percentage
    score.
- Explain the old village / post office background.
  - The whole village knows the news because it is a small familiar community.
  - A `local butcher` is a known person in village life.
  - In older settings, people might take cash savings to the post office.
  - Today, many people use bank apps, cards, Alipay, WeChat Pay, or transfers.
- Keep the anonymous returner anonymous.
  - Do not show a clear thief face.
  - Use doorstep parcels, shadows, hands, envelopes, or off-screen actions.
- Use passive voice as mystery grammar.
  - The grammar fits the story because we know what happened, but not who did
    it.
- Do not edit `web/data/lessons.json` during normal lesson production.

If production requires editing `web/data/lessons.json`, stop and ask for a
shared-data edit because it is outside the normal per-lesson write set.

## Lesson Positioning

Lesson 45 is a small moral comedy.

Sam Benton is the village butcher. One day, he loses his wallet while taking his
savings to the post office. Because this is a small village, the news spreads
quickly. Sam believes that someone in the village must have found the wallet,
but nobody returns it.

Three months later, the wallet appears outside Sam's front door. It is wrapped
in newspaper. Inside is half the money and a note. The anonymous person admits:
`A thief, yes, but only 50 per cent a thief!`

Two months later, more money arrives with another note: `Only 25 per cent a
thief now!` Finally, all the money is paid back, and the last note says: `I am
100 per cent honest now!`

The courseware should make the student understand:

`Sam 丢钱包 -> 全村都知道 -> Sam 猜到有人捡了但没还 -> 三个月后钱包悄悄回来一半钱 -> 纸条说“50% 小偷” -> 又过两个月再还一些 -> 纸条说“25% 小偷” -> 最后全还清 -> 纸条说“100% 诚实”`

The ending should land as:

`他想把良心像欠款一样分期还清，但真正的诚实不是百分比。`

## One-Sentence Hook

Sam lost his wallet, and the person who kept the money tried to pay back both
the money and his conscience in installments.

## Vivid Teaching Opening

The first explanation should be more story-like than the previous version.

Suggested teacher narration:

`想象一个小村庄。村里有个大家都认识的 butcher，叫 Sam Benton。有一天，他带着自己攒下来的 savings 去 post office，结果钱包丢了。村子很小，消息传得很快：Sam 的一大笔钱不见了。Sam 心里也明白，这钱包大概不是掉进河里了，而是被村里某个人捡到了。可是，没有人来还。`

`三个月后，一个早晨，Sam 打开门，发现门口放着一个用报纸包起来的钱包。里面不是全部的钱，而是一半的钱，还有一张纸条。这个匿名的人好像在跟自己的良心谈判：我是小偷，是的，但我只是 50% 的小偷。`

`这就好笑了。钱可以一部分一部分还，可是诚实真的能一部分一部分变回来吗？`

Tone:

- Warm and curious.
- Slightly suspenseful.
- Let the percentage notes create humor.
- Do not lecture too early.

## Story Focus

The conscience-payment chain is:

1. A large sum of money is lost.
2. The whole village learns the news.
3. Sam Benton, the local butcher, has lost his wallet.
4. He lost it while taking his savings to the post office.
5. Sam thinks one of the villagers must have found it.
6. The wallet is not returned.
7. Three months pass.
8. Sam finds the wallet outside his front door.
9. It is wrapped in newspaper.
10. It contains half the money and a note.
11. The note says the returner is `only 50 per cent a thief`.
12. Two months later, more money is sent.
13. The second note says `only 25 per cent a thief now`.
14. In time, all the money is paid back.
15. The last note says `I am 100 per cent honest now`.

The production should make the contrast visible:

`匿名、被动、没人露面` versus `纸条上的百分比越来越大胆`.

## Chinese-First Memory Map For Recitation

The recitation support must be student-friendly. Use Chinese scene anchors
first, then key English chunks.

Use this exact Chinese-first memory chain:

`全村知道丢了一大笔钱 -> Sam 这个本地 butcher 丢了 wallet -> 他带着 savings 去 post office -> Sam 觉得钱包肯定被村民捡到了 -> 可是没有还 -> 三个月后钱包出现在家门口 -> 报纸包着 -> 里面有一半钱和纸条 -> 50% 小偷 -> 两个月后又还一些 -> 25% 小偷 -> 最后全还清 -> 100% honest`

Break the passage into four recitation blocks:

1. 丢钱传开
   - 中文锚点：全村都知道，Sam 丢了一大笔钱。
   - English chunks:
     - `The whole village soon learnt`
     - `a large sum of money had been lost`
     - `Sam Benton, the local butcher`
     - `had lost his wallet`
2. 钱包没有回来
   - 中文锚点：Sam 带存款去邮局，觉得有人捡到了，但没人还。
   - English chunks:
     - `while taking his savings to the post office`
     - `must have been found`
     - `by one of the villagers`
     - `was not returned to him`
3. 第一次良心分期
   - 中文锚点：三个月后，钱包包在报纸里回来了，但只回来一半钱。
   - English chunks:
     - `Three months passed`
     - `outside his front door`
     - `wrapped up in newspaper`
     - `contained half the money`
     - `only 50 per cent a thief`
4. 逐步还清
   - 中文锚点：又还一些，最后全还清，还说自己 100% 诚实。
   - English chunks:
     - `Two months later`
     - `some more money was sent`
     - `Only 25 per cent a thief now`
     - `all Sam's money was paid back`
     - `100 per cent honest now`

Student memory prompt:

`先记中文电影线，再挂英文短语。不要一上来硬背一串英文。`

## Visual Presentation Rules

Generated illustrations must be text-free.

Correct visual approach:

- Show Sam, village, butcher shop atmosphere, post office route, front door,
  newspaper-wrapped wallet, money, and anonymous delivery.
- The note can appear as a small piece of paper, but it must not contain
  readable words.
- Percentages should be taught in the courseware text panel or narration, not
  written inside the generated image.
- If the app needs a percentage progression, render it as real UI text outside
  the generated illustration, for example a separate HTML card or grammar board.
- Do not create empty visual boxes for future text.

Forbidden visual elements:

- readable English words inside images
- percentage labels inside images
- empty rectangles / blank label boxes
- speech bubbles
- caption boxes
- fake handwriting that looks like broken text
- shop signs with readable text

This is especially important because generated image text often looks wrong and
distracts the student.

## Script / Storyboard Separation

The production must keep these two files conceptually separate:

- `pipeline/scripts/lesson_45.script.md`
  - teaching narration
  - student-facing explanations
  - dialogue
  - grammar explanation
  - practice instructions
- `pipeline/scripts/lesson_45.storyboard.json`
  - visual prompts
  - image descriptions
  - character consistency
  - scene composition

The script must not contain:

- image prompt wording
- visual style prompts
- character consistency prompt text
- frame composition instructions
- references to generated-image mechanics

The storyboard prompts must not become spoken lesson content.

Acceptance test for script:

`If a parent reads the script aloud to a child, it should sound like a lesson, not like instructions to an image model.`

## Village / Butcher / Post Office Background Bridge

This bridge should appear early in the script.

Explain:

- This is a small village story, not a big anonymous city story.
- `The whole village soon learnt` means news travels quickly because people know
  one another.
- `local butcher` means the person who runs the meat shop in the community.
- In older community life, the butcher would be a familiar local figure.
- `savings` means money someone has saved.
- In older settings, people might take cash savings to the post office for
  postal savings, payment, or money services.
- Today, a child may think of bank apps, cards, Alipay, WeChat Pay, or online
  transfers instead.

Student-facing bridge:

`这不是手机支付时代的故事，而是一个老式小村庄故事。Sam 是本地 butcher，大家认识他；他拿着 savings 去 post office，所以钱包丢了以后，whole village 很快都知道了。今天我们可能用银行 App 或手机支付，但课文里的时代更依赖现金、钱包和邮局服务。`

## Clear Conscience Bridge

This should be the emotional center of the lesson.

Explain:

- `conscience` is the inner feeling that tells you whether you have done right
  or wrong.
- `a clear conscience` means you do not feel guilty.
- In this story, the anonymous person does not have a clear conscience at first.
- He tries to make his conscience clear by returning the money bit by bit.
- The notes are funny because he acts as if honesty can be measured with
  percentages.

Student-facing explanation:

`conscience 可以理解成心里的“良心声音”。A clear conscience 就是问心无愧。这个人拿了 Sam 的钱以后，良心不舒服，于是一点一点把钱还回来，还给自己算百分比：50% thief、25% thief、100% honest。好笑的地方是，道德不是数学题，不能真的这样算。`

## Percentage Humor Mini-Bridge

This should be playful and memorable.

Explain:

- The anonymous notes make the story funny.
- The returner writes as if being a thief can be measured like a test score.
- First: `50 per cent a thief`
- Then: `25 per cent a thief`
- Finally: `100 per cent honest`

Student-facing explanation:

`他好像在给自己的良心做数学题：还一半，就说自己只是 50% 小偷；再还一些，就说自己只剩 25% 小偷；最后还清，就宣布自己 100% honest。这个逻辑很荒唐，所以好笑。钱可以分期还，诚实不能分期变回来。`

Important moral point:

`如果捡到别人的东西，正确做法是立刻完整归还，而不是一边保留一部分，一边给自己算诚实百分比。`

## Main Language Focus

The main grammar is passive voice and past deduction.

### Passive Voice As Mystery Grammar

Examples:

- `a large sum of money had been lost`
- `the wallet must have been found`
- `it was not returned`
- `It had been wrapped up in newspaper`
- `some more money was sent`
- `all Sam's money was paid back`

Student-facing explanation:

`这篇为什么有这么多被动语态？因为故事里真正做事的人一直躲着。我们知道钱丢了，钱包被人捡到了，钱又被送回来了，但不知道是谁做的。所以被动语态很适合这个“匿名良心故事”。`

Use a compact board:

| Passive phrase | 中文意思 | 为什么用被动 |
| --- | --- | --- |
| `had been lost` | 钱已经丢了 | 重点是钱丢了 |
| `must have been found` | 肯定被人捡到了 | Sam 不知道是谁 |
| `was not returned` | 没有被还回来 | 捡到的人不露面 |
| `had been wrapped up` | 被报纸包起来 | 包的人匿名 |
| `was sent` | 又有钱被送来 | 送的人仍匿名 |
| `was paid back` | 钱被还清了 | 重点是结果 |

### `must have been found`

Teach this as a strong guess about the past:

`Sam was sure that the wallet must have been found by one of the villagers.`

Meaning:

`Sam 没看见是谁捡的，但他很肯定：钱包一定被村里某个人捡到了。`

Form:

`must have been + past participle`

Function:

high-confidence guess about a past passive event.

Student-friendly examples:

- `The wallet is missing. It must have been found by someone.`
- `The door is open. It must have been opened by someone.`
- `The cake is gone. It must have been eaten.`

### Percentage Language

Teach:

- `50 per cent`
- `25 per cent`
- `100 per cent`
- `%` = percent sign

Explain:

- British style often writes `per cent` as two words.
- Modern everyday English often uses `percent` or `%`.
- In this story, percentages create humor, not a real moral calculation.

Secondary language points:

- `a large sum of money`
  - a lot of money.
- `wrapped up in newspaper`
  - covered / packaged in newspaper.
- `together with a note`
  - with a note.
- `in time`
  - eventually / after some time.
- `in this way`
  - by this method.
- `paid back`
  - returned money that was owed.

## Vocabulary Plan

Formal vocab blocks should be exactly 3:

1. `conscience`
   - Meaning: the inner sense of right and wrong; the feeling that tells you
     whether you should feel guilty.
   - Bridge: the anonymous person pays the money back because his conscience is
     not clear.
   - Example: `The title is A clear conscience.`
2. `savings`
   - Meaning: money that someone has saved.
   - Bridge: Sam is taking his saved money to the post office, which fits an
     older cash-and-community setting.
   - Example: `Sam had lost his wallet while taking his savings to the post office.`
3. `villager`
   - Meaning: a person who lives in a village.
   - Bridge: Sam thinks one of the villagers must have found the wallet, and the
     small village setting makes the mystery personal.
   - Example: `The wallet must have been found by one of the villagers.`

Supporting vocabulary to introduce in context, not as full vocab cards:

- `clear` = free from guilt in this title
- `wallet` = small object for money and cards
- `large sum of money` = a lot of money
- `local` = in the nearby community
- `butcher` = person who sells meat
- `post office` = place for mail and, in some settings, money services
- `returned` = given back
- `front door` = main door of a house
- `wrapped up` = covered / packaged
- `newspaper` = printed paper with news
- `contained` = had inside
- `half` = 50%
- `together with` = along with
- `note` = short written message
- `thief` = person who steals
- `per cent` = percent
- `honest` = truthful / not stealing or cheating
- `paid back` = returned money owed
- `in this way` = by this method
- `in time` = eventually

## Scene And Script Direction

The script should feel like a small village mystery with a comic moral twist.

Recommended sequence:

1. Hook: "Someone tried to pay back his conscience in installments."
2. Vivid village opening: Sam, butcher, savings, post office, whole village.
3. Explain `clear conscience`.
4. Retell in 4 frames:
   - Frame 1: Sam loses his wallet while taking savings to the post office; the
     whole village hears the news.
   - Frame 2: Sam believes a villager must have found it, but nobody returns
     it.
   - Frame 3: three months later, a newspaper-wrapped wallet appears outside
     the front door with half the money and a note.
   - Frame 4: more money returns over time; the final note says the returner is
     `100 per cent honest now`.
5. Explain the percentage humor in Chinese first, then show the English notes.
6. Grammar: passive voice as mystery grammar; `must have been found`.
7. Vocab: `conscience`, `savings`, `villager`.
8. Passage reading.
9. Living-scene transfer: honest lost-property return.
10. Outro: practice order, including read-aloud steps.

Script style requirements:

- Use lively Chinese explanation before abstract grammar.
- Do not include image prompts or visual generation instructions.
- Do not use all-English chains for student-facing recitation.
- Keep moral explanation short, clear, and humane.

## Visual Direction

Keep visuals small-town, warm, and slightly mysterious.

- Setting:
  - Village street, butcher shop atmosphere, post office route, Sam's front
    door.
  - Older cash-based community feel.
- Sam Benton:
  - Local butcher, worried at first, then puzzled and relieved.
  - Same appearance across frames.
- Anonymous returner:
  - Do not show a clear identity.
  - Use shadow, hand, doorstep parcel, envelope, or off-screen delivery.
- Wallet / money:
  - The wallet, newspaper wrapping, money, and small note are visual anchors.
  - The note must not contain readable text in the generated image.
- Mood:
  - Frame 1: village news / loss.
  - Frame 2: suspicion / no return.
  - Frame 3: mysterious parcel.
  - Frame 4: comic relief and full repayment.
- Avoid:
  - readable text inside images.
  - empty boxes or label placeholders.
  - showing a clear thief face.
  - making theft look clever or harmless.
  - overly dark crime imagery.

## Character Consistency Brief

Use this brief for storyboard image prompts only. Do not copy it into the
teaching script.

`A warm educational village mystery illustration without any readable text or empty label boxes. Sam Benton is a friendly local butcher in a small old-fashioned village, worried after losing his wallet of savings on the way to the post office. The anonymous person returning money is never clearly identified, shown only through wrapped parcels, envelopes, shadows, or a hand near the front door. Newspaper-wrapped wallet, money, and a small unreadable note are visual anchors. No readable signs, no speech bubbles, no captions, no blank boxes. Consistent Sam, village setting, wallet, notes, and door-step parcel across all frames.`

## Four-Frame Storyboard Intent

Frame 1: The Whole Village Learns

- Sam Benton, the local butcher, loses his wallet while taking savings to the
  post office.
- Villagers hear the news in a small village street.
- No readable text in the image.
- The visual question: "Who found the wallet?"

Frame 2: Not Returned

- Sam looks worried and puzzled.
- Show a village street and an anonymous possibility, but no clear returner.
- The wallet remains missing.
- No labels, speech bubbles, or empty boxes.

Frame 3: Wrapped In Newspaper

- Sam finds his wallet outside his front door.
- It is wrapped in newspaper.
- Money and a small note are visible, but the note text is unreadable.
- The script / UI later explains the `50 per cent a thief` note.

Frame 4: All Paid Back

- More money has been returned over time.
- Sam has the recovered wallet, money, and final note.
- The final note is visually present but unreadable in the image.
- The courseware text or narration explains `100 per cent honest now`.

## Read-Aloud And Pronunciation Direction

Production should preserve the existing read-aloud structure:

- First listen to the full passage.
- Then listen to the original sentence.
- Then record one sentence.
- Then receive feedback.

This lesson has passive voice, percentages, and note quotations. Feedback should
help the student separate the narration from the funny notes.

Useful sentence groups for read-aloud focus:

- `The whole village soon learnt that a large sum of money had been lost.`
- `Sam Benton, the local butcher, had lost his wallet while taking his savings to the post office.`
- `Sam was sure that the wallet must have been found by one of the villagers, but it was not returned to him.`
- `Three months passed, and then one morning, Sam found his wallet outside his front door.`
- `It had been wrapped up in newspaper and it contained half the money he had lost.`
- `A thief, yes, but only 50 per cent a thief!`
- `Only 25 per cent a thief now!`
- `In time, all Sam's money was paid back in this way.`
- `I am 100 per cent honest now!`

For feedback tone:

- Praise clear passive phrases: `had been lost`, `must have been found`, `was
  not returned`, `was paid back`.
- Encourage a light comic tone for the note quotations.
- Practice `conscience`, `wallet`, `savings`, `villagers`, `butcher`,
  `newspaper`, `per cent`, and `honest`.
- Help the student say percentages naturally: `fifty per cent`, `twenty-five
  per cent`, `one hundred per cent`.
- The final note should sound proud but absurd.

## Living-Scene Exercise Direction

The living-scene exercise should transfer the lesson into lost property and
honest return.

Recommended scenario:

`You find someone else's wallet, student card, phone, or money. You return it through a teacher, security desk, front desk, police station, or lost-and-found office.`

Student should practice:

- saying something has been lost
- saying something has been found
- saying it must have been left somewhere
- returning an object properly
- writing a short note
- understanding why partial return is not enough
- using `honest` and `clear conscience`

Useful expressions:

- `This wallet has been found near the classroom.`
- `It must have been left by a student.`
- `I found it outside the library.`
- `I am giving it to the lost-and-found office.`
- `Everything is inside.`
- `I want to have a clear conscience.`

Ethical point:

Returning lost property means returning it completely and quickly, not bit by
bit.

## Suggested You Too Scene

Scene:

`You find a wallet near the school gate. You do not know whose it is. You take it to the school office and write a short note.`

Prompt ideas:

- `怎样用 passive voice 说“钱包被找到了”？`
- `怎样用 must have been... 表达“它肯定是被某个学生落下的”？`
- `怎样说明你把东西交给了失物招领处？`
- `为什么不能只还一部分？`
- `clear conscience 可以怎样放进句子里？`

Target output pattern:

`This wallet was found near the school gate. It must have been left by a student. I have given it to the school office. Everything is inside. I want to have a clear conscience.`

The exercise should make passive voice useful for real lost-property reporting.

## Chinese-To-English Exercise Direction

The Chinese-to-English practice should reinforce the passive chain, village
background, and percentage humor.

Suggested items:

1. `整个村子很快知道，有一大笔钱丢了。`
   - `The whole village soon learnt that a large sum of money had been lost.`
2. `当地的屠户 Sam Benton 丢了他的钱包。`
   - `Sam Benton, the local butcher, had lost his wallet.`
3. `他当时正把自己的存款送往邮局。`
   - `He was taking his savings to the post office.`
4. `Sam 确信钱包一定是被一个村民捡到了。`
   - `Sam was sure that the wallet must have been found by one of the villagers.`
5. `但是钱包没有被还给他。`
   - `But it was not returned to him.`
6. `三个月过去了。`
   - `Three months passed.`
7. `一天早上，Sam 在自己的前门外发现了钱包。`
   - `One morning, Sam found his wallet outside his front door.`
8. `钱包被报纸包了起来。`
   - `It had been wrapped up in newspaper.`
9. `里面有他丢失的钱的一半，还有一张纸条。`
   - `It contained half the money he had lost, together with a note.`
10. `纸条上写着：“一个小偷，是的，但只是 50% 的小偷！”`
    - `The note said, "A thief, yes, but only 50 per cent a thief!"`
11. `两个月后，又有一些钱被送给 Sam。`
    - `Two months later, some more money was sent to Sam.`
12. `最后，Sam 的钱全部都用这种方式还了回来。`
    - `In time, all Sam's money was paid back in this way.`
13. `最后一张纸条写着：“我现在是 100% 诚实的人了！”`
    - `The last note said, "I am 100 per cent honest now!"`

## Grammar Board

Keep the grammar board tied to hidden action and conscience.

Board structure:

`被动语态 = 匿名故事的语法`

- `a large sum of money had been lost`
- `the wallet must have been found`
- `it was not returned`
- `it had been wrapped up`
- `some more money was sent`
- `all Sam's money was paid back`

`为什么用被动？`

- 我们知道发生了什么。
- 但我们不知道是谁做的。
- 那个人一直躲在故事背后。

`过去推测`

- `must have been found`
- Sam 很确定钱包过去已经被人捡到了。
- 因为不知道是谁，所以仍然用被动。

`百分比笑点`

- `50 per cent a thief`
- `25 per cent a thief`
- `100 per cent honest`
- 钱可以分期还，诚实不能分期算。

`clear conscience`

- 拿了钱 -> 良心不安 -> 部分归还 -> 全部归还 -> 自称问心无愧

Avoid turning passive voice into a dry form chart. It should feel like the
grammar of an anonymous village mystery.

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
But the Lesson 45 script and per-lesson data should describe the read-aloud step
as part of the lesson flow.

## Acceptance Criteria

Lesson 45 production is acceptable only if:

- Generated illustrations contain no readable text.
- Generated illustrations contain no empty boxes, blank labels, or placeholder
  cards.
- The teaching script contains no image prompts, visual style instructions, or
  storyboard-generation language.
- The script begins with a vivid small-village explanation, not a dry grammar
  setup.
- Recitation support is Chinese-first, with English chunks attached after
  Chinese story anchors.
- The script explains `clear conscience` as the emotional center of the story.
- The script explains village life, local butcher, post office, and cash savings
  enough for the setting to make sense.
- The script does not normalize theft or imply that partial repayment makes
  stealing acceptable.
- The percentage notes are treated as comic moral arithmetic.
- The main grammar board explains passive voice through the hidden doer /
  anonymous returner.
- The plan for `must have been found` explains high-confidence deduction about a
  past passive event.
- The 3 formal vocab blocks are exactly `conscience`, `savings`, and
  `villager`.
- The storyboard preserves consistent Sam, village setting, wallet, notes, and
  door-step parcel across all four frames.
- The unknown thief / returner is kept anonymous.
- The living-scene exercise practices honest lost-property return.
- The final flow reminder includes `⓪ 跟读` before the other practice steps.
