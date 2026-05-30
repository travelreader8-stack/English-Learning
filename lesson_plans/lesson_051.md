# Lesson 51 Plan - Reward for virtue

This is the source-of-truth design card for producing Lesson 51. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 51 assets.

## Basic Info

- Lesson: 51
- Title: `Reward for virtue`
- Chinese title: `对美德的奖赏`
- Core bridge: `这一课不是讲“嘲笑一个人胖”，而是讲一个很熟悉的人性喜剧：Hugh 制定了非常严格的饮食规则，把自己喜欢的东西全列为 forbidden foods，结果越禁止越想吃，最后用“奖励自己”来给破戒找理由。课件要把重点放在自律、诱惑、借口和标题反讽上。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule.

- Story spine must be Chinese-first.
  - Present the plot first as a Chinese scene line.
  - Attach short English chunks after each Chinese anchor.
  - Do not use an all-English arrow chain as the main student-facing memory
    path.
- Generated illustrations must be text-free.
  - No readable English text inside images.
  - No diet lists, food labels, package text, weight numbers, slogans, speech
    bubbles, captions, or fake UI text inside images.
  - No empty boxes, blank labels, placeholder panels, or fake text areas.
  - If the courseware needs text, render it as real UI text outside the image.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, visual style
    instructions, camera directions, or generated-image mechanics.
  - Storyboard prompts must not become spoken lesson content.
- Avoid body shaming.
  - Do not turn Hugh's body into the joke.
  - Do not draw Hugh as a cruel caricature.
  - Do not present dieting as moral superiority or weight as a character flaw.
  - The comedy is about strict rules, temptation, guilty hiding, and self-justifying
    reward.
- Keep food and health framing age-appropriate.
  - The source includes adult items such as beer; mention only as source-text
    vocabulary if needed, without glamorizing alcohol.
  - Do not give diet advice or health claims.
  - Use modern student-facing examples about screen time, snacks, homework, or
    routines rather than weight loss coaching.

## Production Warnings

- Handle the source wording carefully.
  - The original says `has always been fat` and `still as fat as ever`.
  - Student-facing narration may acknowledge the source, but should soften the
    framing: Hugh feels his situation has got bad, so he decides to control his
    diet.
  - The target is reading comprehension, not judging Hugh's body.
- Explain the title before or soon after the story.
  - `virtue` means good behavior or self-discipline.
  - `reward` means something you give yourself after doing well.
  - The irony is that Hugh rewards his diet with exactly the foods he is trying
    not to eat.
- Make the forbidden-food list visual but text-free.
  - The list can appear as a courseware UI list.
  - Generated images should show the idea through objects, not readable labels.
- Make Hugh psychologically understandable.
  - He creates a very strict list.
  - The list contains most of what he loves.
  - He hides the parcel because he knows the reward does not fit the plan.
  - He smiles guiltily because he has an excuse and knows it is weak.
- Avoid turning the lesson into a moral lecture.
  - The useful takeaway is: extremely strict rules can create pressure and
    excuses.
  - The story remains a light textbook comedy.

If production requires editing `web/data/lessons.json`, stop and ask for a
shared-data edit because it is outside the normal per-lesson write set.

## Lesson Positioning

Lesson 51 is a self-control comedy. Hugh decides to go on a diet and writes a
long list of forbidden foods. The funny problem is that the list includes most
of the things he loves. When the narrator visits him, Hugh hurriedly hides a
large parcel under the desk. He is embarrassed and smiles guiltily. Then he
explains that his diet is so strict that he has to reward himself occasionally.
The parcel contains five large bars of chocolate and three bags of sweets.

The courseware should make the student understand:

`Hugh 觉得情况变糟 -> 决定节食 -> 写出 forbidden foods 长清单 -> 清单上几乎都是他爱吃的 -> 朋友来看他 -> 他慌忙把大包藏到桌下 -> 他明显很尴尬 -> 被问到时内疚地笑 -> 他说饮食太严格，所以偶尔要奖励自己 -> 打开包一看，全是巧克力和糖果`

The central bridge is:

`他不是没有规则，而是规则太严格；他不是没有自律的愿望，而是用“奖励自己”给破戒找了一个好听的理由。`

## One-Sentence Hook

Hugh makes a strict forbidden-food list for his diet, then rewards himself with
a hidden parcel full of chocolate and sweets.

## Vivid Teaching Opening

The opening should establish the human psychology without body shame.

Suggested teacher narration:

`这一课不要先笑 Hugh 胖。真正好笑的是：他下定决心要控制饮食，go on a diet，还写了一张很长的 forbidden foods 清单。问题是，这张清单上几乎都是他最喜欢的东西。`

`你可以想象一个孩子说：从今天开始，我再也不玩游戏了，再也不吃零食了，再也不刷视频了。规则听起来很严格，可是越严格，心里越惦记。`

`Hugh 也是这样。朋友来拜访他时，他 hurriedly hid a large parcel under his desk。为什么要藏？因为他知道这个包不太对劲。后来他 smiled guiltily，也就是内疚地笑。`

`最后他说：my diet was so strict that I had to reward myself occasionally。听起来像一个理由，可是包里是什么？five large bars of chocolate and three bags of sweets。标题 Reward for virtue 的反讽就在这里：他用破坏节食的东西来奖励自己的节食。`

Tone:

- Warm, humane, and lightly amused.
- No mocking of body size.
- Let the child recognize the "strict rule -> temptation -> excuse" pattern in
  everyday life.

## Story Focus

The self-control comedy chain is:

1. Hugh has always been fat in the source wording.
2. Things recently get bad enough for him to decide to go on a diet.
3. He begins the diet a week ago.
4. First, he writes out a long list of forbidden foods.
5. The list includes most of the things he loves.
6. The narrator visits Hugh.
7. Hugh still looks the same, so the narrator is not surprised.
8. Hugh leads the narrator into his room.
9. He hurriedly hides a large parcel under his desk.
10. It is obvious that Hugh is embarrassed.
11. The narrator asks what he is doing.
12. Hugh smiles guiltily.
13. Hugh puts the parcel on the desk.
14. Hugh explains that his diet is so strict that he has to reward himself
    occasionally.
15. He shows the contents of the parcel.
16. The parcel contains five large bars of chocolate and three bags of sweets.

The production should make the contrast visible:

`严格节食的计划` versus `藏在桌下的一大包甜食`.

## Chinese-First Story Spine For Courseware

Use this as the main student-facing story line.

1. Hugh 最近觉得情况变糟，决定控制饮食
   - `things got so bad recently`
   - `decided to go on a diet`
2. 他一周前开始节食
   - `He began his diet a week ago`
3. 首先，他写出一张很长的禁食清单
   - `First of all`
   - `wrote out a long list`
   - `foods which were forbidden`
4. 清单上大多是他最爱的东西
   - `The list included`
   - `most of the things Hugh loves`
5. 朋友昨天来看他
   - `Yesterday I paid him a visit`
   - `I rang the bell`
6. Hugh 看起来还是老样子，朋友并不惊讶
   - `was not surprised`
   - `still as fat as ever`
7. Hugh 把朋友领进房间
   - `He led me into his room`
8. 他慌忙把一个大包藏到桌子下面
   - `hurriedly hid a large parcel`
   - `under his desk`
9. 很明显，他非常尴尬
   - `It was obvious that`
   - `very embarrassed`
10. 朋友问他在做什么
    - `When I asked him`
    - `what he was doing`
11. 他内疚地笑了
    - `smiled guiltily`
12. 他解释说饮食太严格
    - `his diet was so strict`
13. 所以他偶尔必须奖励自己
    - `had to reward himself`
    - `occasionally`
14. 包里的东西全是巧克力和糖果
    - `the contents of the parcel`
    - `five large bars of chocolate`
    - `three bags of sweets`

Student memory prompt:

`先记中文心理线：决定节食 -> 列禁食清单 -> 禁的都是爱吃的 -> 朋友来访 -> 慌忙藏包 -> 尴尬内疚 -> 解释说要奖励自己 -> 包里全是甜食。再把英文短语挂到每个画面上。`

Do not show this as an all-English arrow chain in the student-facing courseware.

## Recitation Blocks

Break the passage into four Chinese-first recitation blocks:

### Block 1: 决定节食

Chinese anchor:

`Hugh 觉得情况变糟，于是决定节食，并在一周前开始。`

English chunks:

- `things got so bad recently`
- `decided to go on a diet`
- `He began his diet a week ago`

Teaching point:

- Keep this respectful.
- `go on a diet` means start controlling what one eats.
- Do not turn this into advice about weight.

### Block 2: 禁食清单

Chinese anchor:

`他先写出一张很长的禁食清单，而清单上大多是他爱吃的东西。`

English chunks:

- `First of all`
- `wrote out a long list`
- `all the foods which were forbidden`
- `most of the things Hugh loves`

Teaching point:

- This is the setup for the joke.
- The stricter the list is, the stronger the temptation becomes.

### Block 3: 藏包和尴尬

Chinese anchor:

`朋友来看他，他慌忙把一个大包藏到桌下，显然很尴尬。`

English chunks:

- `Yesterday I paid him a visit`
- `He led me into his room`
- `hurriedly hid a large parcel`
- `It was obvious that`
- `very embarrassed`

Teaching point:

- The adverb `hurriedly` tells the child this is not a normal action.
- `embarrassed` tells us his feeling before the secret is revealed.

### Block 4: 内疚的奖励

Chinese anchor:

`他内疚地笑了，说饮食太严格，所以偶尔要奖励自己；包里全是巧克力和糖果。`

English chunks:

- `smiled guiltily`
- `so strict that`
- `reward himself occasionally`
- `the contents of the parcel`
- `five large bars of chocolate`
- `three bags of sweets`

Teaching point:

- This is the punchline.
- `reward himself` sounds reasonable, but the contents make it ironic.

## Body-Respect And Health Boundary

This bridge is required for Lesson 51.

Suggested student-facing explanation:

`课文用了比较直接的旧式表达，说 Hugh has always been fat。我们今天讲这篇，不是为了嘲笑他的身材。真正要看懂的是他的心理：他想改变习惯，于是定了很严格的规则；可是规则太严格，他又偷偷给自己找理由。`

`所以这课不是“胖不胖”的课，而是“人怎样给自己找借口”的小喜剧。`

Production guidance:

- Do not add teasing jokes about appearance.
- Do not use before/after weight visuals.
- Do not make Hugh's body shape the visual punchline.
- Do not tell the student to diet.
- Keep the moral frame about habits, rules, and excuses.

## Strict Rules And Rebound Bridge

The modern bridge should connect to a child's life.

Possible examples:

- A student says, "I will never play games again," then rewards a good day with
  two hours of games.
- A student says, "I will never eat snacks," then hides snacks in a drawer.
- A student makes a strict homework plan, then says, "I worked hard, so I need a
  long break," and never returns to the plan.

Suggested student-facing line:

`有时候规则太绝对，人反而会想办法绕过去。Hugh 的笑点就是：他把喜欢的食物全列为 forbidden foods，然后又说，因为自己太严格了，所以要 reward himself occasionally。`

Do not over-moralize:

- Keep the story funny.
- The child should recognize the excuse pattern, not feel lectured.

## Food List And Child-Friendly Handling

The source food list includes:

- `butter`
- `potatoes`
- `rice`
- `beer`
- `milk`
- `chocolate`
- `sweets`

Production guidance:

- Explain the list as "things Hugh loves" and "forbidden foods".
- For `beer`, keep it minimal: it is an adult drink in the source list.
- Do not glamorize alcohol or use it in children's living-scene examples.
- Living-scene examples should use snacks, screen time, homework, sports
  practice, or bedtime routines.

## Title And Irony Bridge

Explain the title clearly.

`Reward for virtue` has two layers:

- `virtue`
  - A good quality or good behavior.
  - In this story, Hugh's "virtue" is trying to follow a strict diet.
- `reward`
  - Something you give someone after doing well.
  - Hugh gives himself a reward.
- Irony:
  - The reward is chocolate and sweets.
  - The reward directly fights against the diet.

Student-facing summary:

`标题像一句很严肃的话：对美德的奖赏。可是课文里这个“奖赏”是一大包巧克力和糖果，所以它其实是在开玩笑。`

## Main Language Focus

### `so...that...`

Target:

`things got so bad recently that he decided to go on a diet`

`his diet was so strict that he had to reward himself occasionally`

Explain:

- `so + adjective/adverb + that + result`
- It tells us something reaches a level and causes a result.

Teaching contrast:

- First sentence:
  - Situation so bad -> he decides to diet.
- Punchline sentence:
  - Diet so strict -> he claims he must reward himself.

Practice:

- `The rule was so strict that everyone felt nervous.`
- `The homework was so long that I needed a break.`

### `go on a diet`

Target:

`decided to go on a diet`

Explain:

- Start controlling what one eats.
- `diet` can mean a diet plan, but also a person's normal eating pattern.
- In this story, it means Hugh starts a strict food-control plan.

Boundary:

- Do not frame this as advice to the student.

### `First of all`

Target:

`First of all, he wrote out a long list...`

Explain:

- Used to introduce the first step in a plan.
- Hugh's first step is not eating differently, but writing a list.

### `write out`

Target:

`wrote out a long list`

Explain:

- Write something fully and clearly.
- It suggests Hugh makes the rule formal.

Practice:

- `She wrote out a shopping list.`
- `He wrote out his plan for the week.`

### Relative Clause With `which`

Target:

`all the foods which were forbidden`

Explain:

- `which were forbidden` tells us what kind of foods they were.
- `forbidden` means not allowed.

Teaching move:

- Start with:
  - `the foods were forbidden`
- Then attach it:
  - `the foods which were forbidden`

### `include`

Target:

`The list included most of the things Hugh loves`

Explain:

- `include` means contain as part of a larger group.
- The sentence is funny because the forbidden list includes what he loves.

### `pay someone a visit`

Target:

`Yesterday I paid him a visit`

Explain:

- A slightly formal way to say "visited him".
- Do not translate word by word as paying money.

Practice:

- `I paid my uncle a visit.`
- `We paid our teacher a visit after school.`

### `as...as ever`

Target:

`Hugh was still as fat as ever`

Explain:

- Means "as ... as before / unchanged".
- Teach the structure but keep the tone respectful.

Production note:

- Do not make this line a visual joke.

### Action And Feeling Adverbs

Targets:

- `hurriedly hid`
- `smiled guiltily`

Explain:

- `hurriedly` tells us how fast and nervously he hides the parcel.
- `guiltily` tells us he knows he is doing something against his own rule.

Practice:

- `He hurriedly closed the book.`
- `She smiled guiltily when I saw the sweets.`

### `It was obvious that...`

Target:

`It was obvious that he was very embarrassed.`

Explain:

- Means everyone can easily see it.
- Useful phrase for describing a clear feeling or fact.

Practice:

- `It was obvious that he was nervous.`
- `It was obvious that she was proud of her work.`

### `embarrassed` vs `embarrassing`

Target:

`very embarrassed`

Explain:

- `embarrassed` describes the person who feels awkward.
- `embarrassing` describes the situation that causes the feeling.

Example:

- `Hugh was embarrassed.`
- `The hidden parcel was embarrassing.`

### `reward oneself`

Target:

`had to reward himself occasionally`

Explain:

- `reward himself` means give himself something as a prize.
- The joke is that the reward goes against the diet.

### `occasionally`

Target:

`occasionally`

Explain:

- Sometimes, now and then, not every day.
- In Hugh's excuse, it makes the reward sound reasonable.

### `contents` and `contained`

Targets:

- `the contents of the parcel`
- `It contained five large bars...`

Explain:

- `contents` = the things inside.
- `contained` = had inside.

Practice:

- `The contents of the bag were books.`
- `The box contained three apples.`

## Vocabulary Plan

Prioritize meaning, story value, and emotional nuance.

- `reward`
  - Give something good after effort.
  - Here it is ironic.
- `virtue`
  - Good behavior or good quality.
  - In the title, it sounds serious and moral.
- `diet`
  - Food-control plan in this story.
  - Not necessarily a command for the student.
- `forbid / forbidden`
  - Not allow.
  - `forbidden` is the past participle/adjective form.
- `list`
  - A written set of items.
- `include`
  - Contain as part of a group.
- `butter`
  - Food vocabulary.
- `potatoes`
  - Food vocabulary.
- `rice`
  - Food vocabulary.
- `beer`
  - Adult drink in the source list; do not dwell on it.
- `chocolate`
  - Important for the punchline.
- `sweets`
  - Candy.
- `parcel`
  - Wrapped package.
- `hurriedly`
  - Quickly, often because of worry.
- `hide / hid / hidden`
  - Put something where others cannot see it.
- `obvious`
  - Easy to see or understand.
- `embarrassed`
  - Feeling awkward or ashamed.
- `guiltily`
  - In a way that shows one feels guilty.
- `strict`
  - Very exact about rules.
- `occasionally`
  - Sometimes.
- `contents`
  - Things inside something.
- `contain`
  - Have inside.

Vocabulary memory grouping:

- Rule words: `diet`, `forbidden`, `strict`, `virtue`
- Secret-action words: `parcel`, `hurriedly`, `hid`, `embarrassed`, `guiltily`
- Punchline words: `reward`, `occasionally`, `contents`, `contained`,
  `chocolate`, `sweets`

## Visual Direction

The visuals should make the comedy of hidden temptation clear without mocking
Hugh's appearance.

Overall style:

- Warm illustrated realism.
- Light domestic comedy.
- Respectful character design.
- Clear emotional acting: resolve, temptation, embarrassment, guilty smile.
- Consistent Hugh and narrator across all frames.

Avoid:

- Body-shaming caricature.
- Before/after body comparison.
- Weight scales, numbers, shame posters, or diet slogans.
- Readable diet lists or food labels inside generated images.
- Alcohol-focused visuals.
- Cruel laughter from the narrator.
- Text, captions, speech bubbles, blank labels, or fake UI inside images.

Use:

- Hugh writing a serious-looking list.
- Food objects shown as tempting but not labeled.
- A large parcel under the desk.
- Hugh's embarrassed body language.
- Chocolate bars and sweets visible as objects, with no readable wrappers.
- Narrator looking surprised but not mean.

## Character Consistency Brief

Keep Hugh and the narrator consistent across all four lesson illustrations.

Hugh:

- Adult friend, ordinary and sympathetic.
- Slightly self-conscious, but not ridiculous.
- Same face, hairstyle, clothing, and body type across frames.
- Expressions move from determined to nervous to embarrassed to guilty/excusing.

Narrator:

- Adult friend visiting Hugh.
- Curious, polite, lightly amused.
- Never cruel or mocking.

Food/parcel:

- The parcel should stay visually consistent.
- Chocolate and sweets should be recognizable as objects but not carry readable
  brand names or text.

## Four-Frame Storyboard Intent

### Frame 1: The Strict List

Purpose:

- Show Hugh's serious plan.

Content:

- Hugh at a desk writing a long list.
- Food items nearby or imagined visually, but no readable text.
- He looks determined.
- The scene should feel like "I am making strict rules."

Must avoid:

- Readable forbidden-food list inside the image.
- Body-shaming visual jokes.

### Frame 2: The Visit

Purpose:

- Show the narrator arriving and Hugh hiding something.

Content:

- Narrator enters Hugh's room after ringing/visiting.
- Hugh hurriedly hides a large parcel under the desk.
- Hugh's movement should feel quick and guilty.

Must avoid:

- Making Hugh look villainous or absurd.
- Text on parcel.

### Frame 3: The Guilty Explanation

Purpose:

- Show embarrassment and self-justification.

Content:

- Hugh puts the parcel on the desk.
- He smiles guiltily and explains.
- Narrator looks curious and surprised, not judgmental.

Must avoid:

- Speech bubbles or captions.
- Cruel laughing.

### Frame 4: The Contents

Purpose:

- Land the punchline.

Content:

- Parcel open on the desk.
- It contains multiple chocolate bars and bags of sweets.
- Hugh looks sheepish.
- Narrator reacts with mild surprise.

Must avoid:

- Readable brand labels or wrapper text.
- Making the food look like an advertisement.

## Script And Courseware Presentation

The script should speak to the student in Chinese, with short English phrases
inserted where the language matters.

Required presentation principles:

- Start with the body-respect boundary.
- Frame the story as "strict rules and excuses", not "laughing at Hugh's body".
- Explain `Reward for virtue` as ironic before the ending or right after it.
- Use Chinese-first story spine for recitation.
- Attach English chunks to Chinese anchors.
- Keep grammar explanations practical and sentence-based.
- Do not put image prompt language into the teaching script.

Recommended page rhythm:

1. Hook: this is about self-control and excuses, not body shaming.
2. Title: `reward`, `virtue`, and irony.
3. Story setup: Hugh decides to go on a diet.
4. Forbidden list: most of the foods are things he loves.
5. Visit: narrator pays him a visit and rings the bell.
6. Secret parcel: Hugh hurriedly hides it under the desk.
7. Feelings: obvious embarrassment and guilty smile.
8. Excuse: diet so strict that he has to reward himself occasionally.
9. Punchline: parcel contains chocolate and sweets.
10. Language board: `so...that...`, `forbidden`, `It was obvious that`,
    adverbs, `reward himself occasionally`.
11. Read-aloud / shadowing.
12. Living-scene exercise.
13. Chinese-to-English exercise.
14. Final flow reminder.

## Read-Aloud And Pronunciation Direction

The read-aloud section should preserve the existing courseware flow:

`听课文全文 -> 听原音 -> 录一句 -> 获取反馈`

For Lesson 51, emphasize:

- Reading the serious setup naturally.
- Slowing down on the food-list sentence.
- Giving the adverbs emotional color.
- Pausing before the final contents reveal.

Suggested chunking:

- `My friend, Hugh,`
- `has always been fat,`
- `but things got so bad recently`
- `that he decided to go on a diet.`
- `First of all,`
- `he wrote out a long list`
- `of all the foods which were forbidden.`
- `The list included`
- `most of the things Hugh loves:`
- `butter, potatoes, rice, beer, milk, chocolate, and sweets.`
- `He led me into his room`
- `and hurriedly hid`
- `a large parcel under his desk.`
- `It was obvious`
- `that he was very embarrassed.`
- `he smiled guiltily`
- `and then put the parcel on the desk.`
- `his diet was so strict`
- `that he had to reward himself occasionally.`
- `It contained`
- `five large bars of chocolate`
- `and three bags of sweets!`

Pronunciation watchlist:

- `Hugh`
  - Clear initial sound; do not add an extra syllable.
- `diet`
  - Two syllables.
- `forbidden`
  - Stress the second syllable.
- `hurriedly`
  - Do not rush the word despite its meaning.
- `embarrassed`
  - Stress the second syllable.
- `guiltily`
  - Break it slowly during practice.
- `strict`
  - Crisp consonant cluster.
- `occasionally`
  - Break into syllables.
- `contents`
  - Stress may differ by noun/verb; here it is the noun.

Feedback should reward:

- Clear `so...that...` structure.
- Natural emotion in `hurriedly`, `embarrassed`, and `guiltily`.
- Accurate pronunciation of `forbidden`, `embarrassed`, `occasionally`.
- Good pause before the final food reveal.

## Living-Scene Exercise Direction

The living-scene exercise should modernize the pattern without focusing on body
or dieting.

Target function:

- Describe a strict rule.
- Say what is forbidden.
- Describe hiding or guilt.
- Use `so...that...`.
- Use `reward myself occasionally` as a comic excuse.

Safe modern scene idea:

`孩子决定这一周少玩游戏，先写出一张 forbidden list：不能玩游戏、不能刷短视频、不能看太久平板。朋友来时，他慌忙把游戏手柄藏到书下面。他说自己的计划太严格了，所以偶尔要奖励自己玩十分钟。`

Why this works:

- It preserves the psychology of strict rules and excuses.
- It connects to a child's life.
- It avoids body/weight pressure.

Possible student prompts:

- `I made a strict rule.`
- `I wrote out a list of things which were forbidden.`
- `I hurriedly hid...`
- `It was obvious that I was embarrassed.`
- `The rule was so strict that I had to reward myself occasionally.`

## Suggested You Too Scene

Scene title:

`A Reward For Study`

Chinese setup:

`你决定这周认真学习，写了一张很严格的清单：不能玩游戏，不能刷短视频，不能把作业拖到很晚。朋友来找你时，你慌忙把游戏手柄藏到书下面。朋友问你在干什么，你内疚地笑了，说自己的计划太严格了，所以偶尔要奖励自己一下。`

Target dialogue / narration shape:

- `I decided to follow a strict study plan.`
- `First of all, I wrote out a long list of things which were forbidden.`
- `The list included most of the things I love.`
- `When my friend came in, I hurriedly hid a game controller under my book.`
- `It was obvious that I was very embarrassed.`
- `I smiled guiltily.`
- `My plan was so strict that I had to reward myself occasionally.`

Keep it natural:

- Avoid diet/body examples.
- Avoid making the child feel morally bad.
- Keep the punchline light and recognizable.

## Chinese-To-English Exercise Direction

Use exercises that map directly to Lesson 51 structures.

Suggested items:

1. Hugh 决定节食。
   - `Hugh decided to go on a diet.`
2. 他写出了一张很长的禁食清单。
   - `He wrote out a long list of all the foods which were forbidden.`
3. 清单上包括大多数他喜欢的东西。
   - `The list included most of the things Hugh loves.`
4. 昨天我去看望了他。
   - `Yesterday I paid him a visit.`
5. 他慌忙把一个大包藏到了桌子下面。
   - `He hurriedly hid a large parcel under his desk.`
6. 很明显，他非常尴尬。
   - `It was obvious that he was very embarrassed.`
7. 他内疚地笑了。
   - `He smiled guiltily.`
8. 他的饮食计划太严格了，所以他不得不偶尔奖励自己。
   - `His diet was so strict that he had to reward himself occasionally.`
9. 他给我看了包里的东西。
   - `He showed me the contents of the parcel.`
10. 包里有五大块巧克力和三袋糖果。
    - `It contained five large bars of chocolate and three bags of sweets.`

Exercise notes:

- Use the textbook vocabulary, but keep the tone kind.
- Do not ask the student to produce teasing sentences about body size.
- Use the `so...that...` sentence as the key recitation sentence.

## Grammar Board

The grammar board should be practical and story-linked.

### 1. `so...that...`

Form:

`so + adjective/adverb + that + result`

Meaning:

`如此……以至于……`

Examples:

- `Things got so bad that he decided to go on a diet.`
- `His diet was so strict that he had to reward himself occasionally.`

### 2. Relative Clause With `which`

Form:

`the foods which were forbidden`

Meaning:

`which were forbidden` adds detail to `the foods`.

### 3. `write out`

Form:

`write out a list`

Meaning:

`完整、清楚地写出来。`

### 4. `pay someone a visit`

Form:

`pay + person + a visit`

Meaning:

`去看望某人。`

### 5. `It was obvious that...`

Form:

`It was obvious that + sentence.`

Meaning:

`很明显……`

### 6. Adverbs Ending In `-ly`

Examples:

- `hurriedly`
- `guiltily`
- `occasionally`

Meaning:

These words tell us how or how often something happens.

### 7. `embarrassed` vs `embarrassing`

Form:

`person + be embarrassed`

`thing/situation + be embarrassing`

Meaning:

`embarrassed` describes the feeling person. `embarrassing` describes the thing
or situation that causes the feeling.

### 8. `contents` / `contained`

Form:

`the contents of the parcel`

`It contained...`

Meaning:

`contents` are the things inside. `contained` means had inside.

## Final Page / Course Flow Reminder

The final summary page should include the full course flow, with the read-aloud
and shadowing step included explicitly.

Recommended flow:

1. 跟读：听课文全文 -> 听原音 -> 录一句 -> 获取反馈
2. 生活场景
3. 完形填空
4. 中译英
5. 英译中
6. 默写

For Lesson 51, the final reminder can say:

`这一课先记住心理线：严格节食 -> 禁食清单 -> 禁的都是爱吃的 -> 慌忙藏包 -> 内疚解释 -> 用巧克力和糖果奖励自己。重点不是嘲笑 Hugh，而是看懂“严格规则、诱惑和借口”的反讽。`

## Acceptance Criteria

Lesson 51 production is acceptable only if:

- The lesson is framed as a comedy about strict rules, temptation, excuses, and
  irony, not as body shaming.
- Hugh is presented as sympathetic and human, not a caricature.
- The source wording about body size is handled respectfully and not turned into
  the main joke.
- The title `Reward for virtue` is explained through `reward`, `virtue`, and
  irony.
- The story spine is Chinese-first, with English chunks attached after Chinese
  anchors.
- The student understands the forbidden-food list as setup for the punchline.
- Language teaching includes `go on a diet`, `forbidden`, `included`, `paid him
  a visit`, `hurriedly`, `It was obvious that`, `embarrassed`, `guiltily`,
  `so strict that`, `reward himself occasionally`, `contents`, and `contained`.
- The `so...that...` pattern is taught using both setup and punchline sentences.
- `embarrassed` versus `embarrassing` is clarified if the production includes
  the adjective explanation.
- The food list is handled age-appropriately, with no alcohol glamorization.
- Generated illustrations contain no readable food labels, diet lists, weight
  numbers, slogans, speech bubbles, blank boxes, or fake UI.
- The visuals focus on hidden parcel, guilty smile, and the revealed sweets, not
  on mocking Hugh's body.
- Hugh and the narrator stay visually consistent across the four frames.
- The script contains teaching content only, not storyboard/image prompt
  wording.
- The read-aloud / shadowing flow is included in the final course flow.
- The living-scene exercise modernizes the pattern without using weight-loss or
  body-focused examples.
