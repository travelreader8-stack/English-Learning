# Lesson 63 Plan - She was not amused

This is the source-of-truth design card for producing Lesson 63. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 63 assets.

## Basic Info

- Lesson: 63
- Title: `She was not amused`
- Chinese title: `她并不觉得好笑`
- Core bridge: `这一课不要只讲成“Jenny 误会大家在嘲笑爸爸”的笑话。它还要鼓励孩子理解 public speaking 是一种值得练习的表达能力：Jeremy 有很多朋友，受欢迎，有 humour，朋友请他在 wedding reception 上 make a speech，他认真准备，最后讲话很成功。Jenny 的可爱误会在于，她还分不清 people laughing with him 和 people laughing at him。孩子要抓住：大胆表达、认真准备、讲得生动，让别人善意地笑，是一种能力，不是丢脸。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule and the section
responsibility rule in `LESSON_PRODUCTION_PLAN.md`.

- Keep the opening hook short.
  - Use 4-6 spoken lines only.
  - The hook should raise one clear question:
    when people laugh during a speech, are they always laughing at the speaker?
  - Do not retell the whole passage before the four `retell` frames.
  - Do not explain every wedding custom and grammar structure in the opening.
- Treat the lesson as both a humour misunderstanding and a public-speaking
  encouragement lesson.
  - Jeremy is a positive model: social, funny, prepared, and willing to speak in
    front of many people.
  - Jenny is not rude or silly; she is a six-year-old child trying to protect
    her father.
  - The courseware should gently separate:
    `laughing with someone` from `laughing at someone`.
- Story spine must be Chinese-first.
  - Present the speech-and-misunderstanding chain in Chinese first.
  - Attach short English chunks after each Chinese anchor.
  - Do not show an all-English arrow chain as the main student-facing memory
    path.
- Avoid repeated script content across sections.
  - The four `retell` frames are the only section that should walk through the
    full passage in order.
  - The teacher-student dialogue must not repeat the retell narration.
  - The dialogue should deepen two ideas:
    public speaking is a trainable ability, and laughter can be friendly.
  - Vocabulary and grammar sections should explain language tools, not retell
    the story again.
- Keep the tone warm and socially safe.
  - Do not shame Jenny for misunderstanding.
  - Do not make Jeremy vain or clownish.
  - Do not present public speaking as performance pressure.
  - The child should feel: I can prepare, speak clearly, and make people smile.
- The four illustrations must form one continuous story line.
  - They are not four unrelated party scenes.
  - The same Jeremy and Jenny should be visually consistent across frames.
  - The same wedding reception environment should carry through the middle
    frames.
  - The emotional line should accumulate:
    admired father -> prepared speech -> friendly audience laughter -> Jenny's
    protective misunderstanding.
- Generated illustrations must be text-free.
  - No readable English or Chinese text inside images.
  - No readable wedding signs, menus, speech notes, projected slides, captions,
    speech bubbles, UI panels, or fake lesson text.
  - If the courseware needs words such as `wedding reception`, `make a speech`,
    `sense of humour`, `laughing at him`, or `not amused`, render them as real
    UI text outside the image.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, camera directions,
    or generated-image mechanics.
  - Storyboard prompts must not leak into spoken lesson content.

## Production Warnings

- The current lesson record has two clear source-data issues that production
  should resolve before generating final assets.
  - Current English: `Jeremy Hampden has a large circle of friends and if very popular at parties.`
  - It should almost certainly be `and is very popular at parties`.
  - Current English later has sentence-start lowercase:
    `he had included a large number of funny stories...`
  - It should be `He had included...`
- These are shared-data issues in `web/data/lessons.json`.
  - A normal production thread should stop and ask before editing this shared
    file, unless the user explicitly authorizes the correction in that thread.
  - If approved, keep the edit narrowly scoped to Lesson 63's `english` and
    `cloze.rendered_html` fields.
- The title `She was not amused` should be handled carefully.
  - It means Jenny did not find the situation funny and was not pleased.
  - Do not reduce it to only `她没有笑`.
- `wedding reception` needs cultural bridging.
  - In many English-speaking wedding contexts, speeches can be a normal part of
    the reception.
  - Explain it as the social gathering or meal after the wedding ceremony, not
    the ceremony itself.
  - Do not overdo wedding custom details.
- `make a speech` should be positive.
  - Connect it to school presentations, storytelling, class sharing, and later
    English speaking.
  - Emphasize preparation and confidence.
- `laughing at him` is Jenny's interpretation, not the real social meaning of
  the audience's laughter.
  - Teach the contrast with `laughing with him` in the teacher-student dialogue.
- Jeremy's humour should stay kind and warm.
  - Do not write jokes that mock guests, the bride and groom, or Jenny.
  - The text says funny stories, not cruel jokes.

If production requires editing `web/data/lessons.json`, stop and ask for a
shared-data edit because it is outside the normal per-lesson write set.

## Lesson Positioning

Lesson 63 is a warm social misunderstanding story about humour, public speaking,
and a child's protective love. Jeremy Hampden has many friends and is popular at
parties because people admire his sense of humour. Almost everyone enjoys his
jokes, except his six-year-old daughter Jenny. One of Jeremy's closest friends
asks him to make a speech at a wedding reception. Jeremy loves this kind of
thing, prepares carefully, and takes Jenny to the wedding. He includes many
funny stories in the speech, and the speech is a great success. But as soon as
he finishes, Jenny wants to go home. On the way home, Jeremy asks whether she
enjoyed the speech. To his surprise, she says she did not, because she did not
like to see so many people laughing at him.

The courseware should make the student understand:

`Jeremy has a large circle of friends -> popular at parties -> people admire his sense of humour -> except Jenny -> friend asks him to make a speech at a wedding reception -> Jeremy loves this sort of thing -> prepares carefully -> goes with Jenny -> includes funny stories -> speech is a great success -> Jenny wants to go home -> Jeremy is disappointed but does as she asks -> on the way home he asks if she enjoyed the speech -> she says she hadn't -> she does not like to see so many people laughing at him`

The central bridge is:

`别人笑，不一定是在嘲笑你。有时候他们是在被你的故事打动、被你的表达逗笑，是在 laughing with you。能在很多人面前认真准备、清楚表达、讲得生动，是中文和英文都需要练习的能力。`

## One-Sentence Hook

Jeremy gives a successful wedding speech, but his little daughter thinks the
audience is laughing at him instead of enjoying his humour.

## Vivid Teaching Opening

The opening should establish the social misunderstanding quickly. It must be a
short hook, not a complete plot retelling. Keep it to 4-6 spoken lines so the
first visual does not stay on screen too long before the frame-by-frame retell
begins.

Suggested teacher narration:

`如果你在很多人面前讲话，大家突然笑了，你会紧张吗？`

`有时候，别人笑不是在嘲笑你，而是因为你讲得生动。`

`Jeremy 就很会 make a speech，他的 humour 让婚礼上的人都笑了。`

`可是他的六岁女儿 Jenny 看不懂，她以为大家在 laughing at him。`

`今天我们学一个很细的区别：laugh with someone, not laugh at someone。`

Tone:

- Warm, encouraging, and socially observant.
- Make public speaking feel possible and worth practising.
- Let Jenny's misunderstanding feel sweet, not foolish.
- Save the full sequence for the four `retell` frames.

## Section Responsibility And Anti-Repetition Plan

Production must treat the lesson as several sections with distinct jobs.

### Opening

Job:

- Raise the public-speaking question:
  when people laugh during your speech, what can it mean?
- Introduce the `laughing with` versus `laughing at` contrast.
- Keep the hook short.

Do not:

- Retell the full story.
- Explain all wedding customs.
- List all reported-speech grammar before the story begins.

### Four Retell Frames

Job:

- Walk through the passage in order.
- Make Jeremy's popularity, prepared speech, audience laughter, and Jenny's
  misunderstanding visible.
- Pair each event with Chinese anchors and short English chunks.

Do not:

- Make the speech a long text-heavy scene.
- Show readable notes or captions inside images.
- Turn Jenny into a rude critic.

### Teacher-Student Dialogue

Job:

- Deepen two ideas:
  public speaking can be prepared and practised, and friendly laughter is not
  the same as mockery.
- Compare:
  `laugh at someone` with `laugh with someone`.
- Encourage the student to try speaking in front of classmates in Chinese or
  English.

Do not:

- Re-list the whole plot.
- Make the dialogue a second summary.
- Turn encouragement into pressure.

### Vocabulary And Grammar

Job:

- Explain words and structures that make the lesson work:
  `a large circle of friends`, `popular`, `admire`, `sense of humour`,
  `wedding reception`, `make a speech`, `sort of thing`, `a great success`,
  `not amused`, `to his surprise`, `laughing at him`.
- Teach reported speech and question patterns through the father-daughter
  conversation.

Do not:

- Restart the story through vocabulary examples.
- Overload the student with formal grammar terminology.

### Practice And Transfer

Job:

- Move the language into a modern child-understandable speaking scene:
  class sharing, English presentation, telling a funny story, or speaking at a
  small family event.
- Help the child practise:
  preparing a short speech, noticing audience reaction, and responding calmly.

Do not:

- Replace the original wedding story.
- Make the exercise about embarrassment or stage fright only.

## Story Focus

The speech-and-misunderstanding chain is:

1. Jeremy Hampden has a large circle of friends.
2. He is very popular at parties.
3. Everybody admires him for his great sense of humour.
4. The exception is his six-year-old daughter Jenny.
5. One of Jeremy's closest friends asks him to make a speech at a wedding
   reception.
6. This is the sort of thing Jeremy loves.
7. He prepares the speech carefully.
8. He goes to the wedding with Jenny.
9. He includes many funny stories in the speech.
10. The speech is a great success.
11. As soon as Jeremy finishes, Jenny says she wants to go home.
12. Jeremy is a little disappointed but does as Jenny asks.
13. On the way home, he asks Jenny if she enjoyed the speech.
14. To his surprise, she says she had not.
15. Jeremy asks why.
16. Jenny says she did not like to see so many people laughing at him.

The production should make the contrast visible:

`adult audience enjoying humour` versus `child thinking they are mocking him`.

`public-speaking success` versus `Jenny's worry for her father`.

`laughing with him` versus `laughing at him`.

`speech preparation` versus `speech as natural confidence`.

## Chinese-First Story Spine For Courseware

Use this as the main student-facing story line.

1. Jeremy Hampden 有很大的朋友圈
   - `Jeremy Hampden`
   - `has a large circle of friends`
2. 他在 parties 上很受欢迎
   - `and is very popular`
   - `at parties`
3. 大家都欣赏他的幽默感
   - `Everybody admires him`
   - `for his great sense of humour`
4. 但是他的六岁女儿 Jenny 例外
   - `everybody, that is`
   - `except`
   - `his six-year-old daughter`
   - `Jenny`
5. 最近，一个亲密朋友请他在婚礼宴会上致辞
   - `one of Jeremy's closest friends`
   - `asked him`
   - `to make a speech`
   - `at a wedding reception`
6. 这正是 Jeremy 喜欢做的事
   - `This is`
   - `the sort of thing`
   - `that Jeremy loves`
7. 他认真准备 speech，并带 Jenny 去参加婚礼
   - `He prepared the speech carefully`
   - `and went to the wedding`
   - `with Jenny`
8. 他在 speech 里加入很多 funny stories
   - `He had included`
   - `a large number of`
   - `funny stories`
   - `in the speech`
9. 当然，这个 speech 大获成功
   - `and, of course`
   - `it was a great success`
10. 他刚讲完，Jenny 就说想回家
    - `As soon as`
    - `he had finished`
    - `Jenny told him`
    - `she wanted to go home`
11. Jeremy 有点失望，但照女儿说的做了
    - `Jeremy was`
    - `a little disappointed`
    - `but he did`
    - `as his daughter asked`
12. 回家路上，他问 Jenny 是否喜欢这个 speech
    - `On the way home`
    - `he asked Jenny`
    - `if she had enjoyed`
    - `the speech`
13. 令他惊讶的是，Jenny 说没有
    - `To his surprise`
    - `she said`
    - `she hadn't`
14. Jeremy 问她为什么
    - `Jeremy asked her`
    - `why this was so`
15. Jenny 说，她不喜欢看到那么多人 laughing at him
    - `she told him`
    - `that she did not like`
    - `to see so many people`
    - `laughing at him`

Student memory prompt:

`先记中文误会线：Jeremy 朋友多 -> parties 上受欢迎 -> 大家欣赏 humour -> Jenny 例外 -> friend asks him to make a speech -> Jeremy prepares carefully -> speech has funny stories -> great success -> Jenny wants to go home -> on the way home Jeremy asks if she enjoyed it -> she hadn't -> because she thinks people were laughing at him。再把英文短语挂到每个节点上。`

Do not show this as an all-English arrow chain in the student-facing courseware.

## Recitation Blocks

Break the passage into four Chinese-first recitation blocks:

### Block 1: Jeremy 很受欢迎，但 Jenny 例外

Chinese anchor:

`Jeremy Hampden 有很大的朋友圈，在聚会上很受欢迎。大家都欣赏他的幽默感，除了他六岁的女儿 Jenny。`

English chunks:

- `Jeremy Hampden`
- `has a large circle of friends`
- `and is very popular at parties`
- `Everybody admires him`
- `for his great sense of humour`
- `except his six-year-old daughter`
- `Jenny`

Teaching point:

- This block introduces Jeremy's social strength.
- `a large circle of friends` is a metaphor, not a literal circle.
- Jenny's exception prepares the final joke.

### Block 2: 朋友请他在婚宴上讲话

Chinese anchor:

`最近，一个亲密朋友请 Jeremy 在婚礼宴会上致辞。这正是他喜欢做的事。他认真准备讲稿，并带 Jenny 去参加婚礼。`

English chunks:

- `Recently`
- `one of Jeremy's closest friends`
- `asked him to make a speech`
- `at a wedding reception`
- `This is the sort of thing`
- `that Jeremy loves`
- `He prepared the speech carefully`
- `and went to the wedding with Jenny`

Teaching point:

- This block connects public speaking with preparation.
- `make a speech` is a useful expression for speeches and presentations.
- `wedding reception` needs a short cultural explanation.

### Block 3: 讲话成功，Jenny 却想回家

Chinese anchor:

`Jeremy 在讲话里加入很多有趣的小故事，讲话大获成功。可是他刚讲完，Jenny 就说想回家。Jeremy 有点失望，但还是照女儿说的做了。`

English chunks:

- `He had included`
- `a large number of funny stories`
- `in the speech`
- `it was a great success`
- `As soon as he had finished`
- `Jenny told him`
- `she wanted to go home`
- `Jeremy was a little disappointed`
- `but he did as his daughter asked`

Teaching point:

- This block is the contrast:
  public success versus Jenny's unhappy reaction.
- `As soon as` makes the reaction immediate.
- Jeremy respects Jenny even though he is disappointed.

### Block 4: Jenny 以为大家在嘲笑爸爸

Chinese anchor:

`回家路上，Jeremy 问 Jenny 是否喜欢他的讲话。令他吃惊的是，她说不喜欢，因为她不想看到那么多人嘲笑他。`

English chunks:

- `On the way home`
- `he asked Jenny`
- `if she had enjoyed the speech`
- `To his surprise`
- `she said she hadn't`
- `Jeremy asked her`
- `why this was so`
- `she told him`
- `she did not like`
- `to see so many people`
- `laughing at him`

Teaching point:

- This block is the punchline and emotional center.
- Jenny misunderstands friendly laughter as mockery.
- Teach `laughing at him` carefully.

## Modern Child Bridge

For a modern child, connect the passage to class presentations and speaking in
front of others.

Suggested child-facing explanation:

`今天孩子不一定熟悉英文婚礼上的 wedding speech，但一定会遇到 class presentation、讲故事、朗读、英文展示。Jeremy 的重点不是“天生会说”，而是他 prepared the speech carefully。别人善意地笑，可能说明你讲得生动，not that they are laughing at you。`

Useful modern analogies:

- A child tells a funny story in class and classmates laugh kindly.
- A student gives an English presentation and the class smiles at a clever line.
- A family gathering asks the child to say a few words.
- A school event has a small speech or reading.

Do not replace the original story. Use the bridge to make `make a speech`
relevant to the child's own growth.

## Wedding Reception And Speech Bridge

Keep this background short and concrete.

Student-facing explanation:

`wedding reception 可以理解成婚礼仪式之后的聚会或宴会。在一些英文场景里，朋友或家人会 make a speech，说祝福，也讲一些轻松、有趣的小故事。大家笑，通常是在表示气氛好，说明 speaker 的 humour 起作用了。`

Important boundaries:

- Do not spend too long comparing Chinese and Western weddings.
- Do mention that Chinese weddings may have different customs, such as hosts,
  toasts, and family greetings.
- Keep the focus on `speech` and audience reaction.
- Do not invent rude wedding jokes.

## Public Speaking Encouragement Bridge

This lesson should explicitly encourage the child to speak in front of others.

Student-facing idea:

`不管是中文还是英文，敢在别人面前表达都是一种能力。好的 speech 不是随便说，而是先准备，再讲清楚，再观察听众反应。Jeremy 的 speech 成功，是因为他 prepared it carefully and included funny stories。`

Use this bridge to support:

- confidence in class presentations
- English speaking practice
- storytelling ability
- understanding friendly audience laughter
- trying again even if a speech feels nervous at first

Do not:

- create pressure to perform perfectly
- imply the child must be funny to be good at speaking
- make laughter the only sign of success

## Teacher-Student Dialogue Direction

The dialogue section must not repeat the plot. It should explore public speaking
and friendly laughter.

Recommended dialogue path:

1. Teacher asks:
   `如果你在台上讲故事，大家笑了，你第一反应会是什么？`
2. Student:
   `可能会紧张，以为我说错了。`
3. Teacher:
   `That's possible. But laughter has different meanings. Are they laughing at you, or laughing with you?`
4. Student:
   `有什么区别？`
5. Teacher:
   `Laughing at someone 是嘲笑。Laughing with someone 是一起笑，说明你讲得生动。`
6. Teacher asks:
   `Jeremy 的 speech was a great success. So the guests were probably laughing with him, right?`
7. Student:
   `Right. But Jenny thought they were laughing at him.`
8. Teacher:
   `Exactly. Jenny cared about her father. But for us, the lesson is also this: prepare carefully, speak bravely, and learn to read friendly audience reactions.`

Keep this section short. It should feel like a new thinking angle after retell,
not a second retell.

## Main Language Focus

### Social Ability: `a large circle of friends`

Core expression:

`Jeremy Hampden has a large circle of friends.`

Teaching:

- `circle` here means a group of people around someone socially.
- It does not mean a literal shape.
- Useful phrase for describing social relationships.

Student-facing idea:

`a large circle of friends 就是朋友圈很广。`

### Popularity And Humour

Core expressions:

- `popular at parties`
- `admire him for his great sense of humour`

Teaching:

- `popular` means liked by many people.
- `admire someone for something` gives the reason for admiration.
- `sense of humour` is the ability to see and say funny things in a good way.

### Public Speaking Pattern

Core expression:

`asked him to make a speech`

Teaching:

- Pattern: `ask someone to do something`.
- `make a speech` is used for formal or semi-formal speaking.
- Connect to presentations, storytelling, and class sharing.

### `the sort of thing`

Core sentence:

`This is the sort of thing that Jeremy loves.`

Teaching:

- `sort of thing` means type of activity or situation.
- Jeremy likes this kind of public speaking and humour.

### Past Perfect For Earlier Preparation

Core sentence:

`He had included a large number of funny stories in the speech.`

Teaching:

- The funny stories were included before the speech succeeded.
- Keep it as story sequence, not abstract grammar first.

### Immediate Reaction: `As soon as`

Core sentence:

`As soon as he had finished, Jenny told him she wanted to go home.`

Teaching:

- Jenny reacts immediately after the speech.
- `As soon as` helps create comic timing.

### Reported Speech And Questions

Core sentences:

- `Jenny told him she wanted to go home.`
- `he asked Jenny if she had enjoyed the speech.`
- `she said she hadn't.`
- `she told him that she did not like...`

Teaching:

- The story moves through what people said and asked.
- `if` introduces a yes-no question inside a sentence.
- `she hadn't` is a short answer that avoids repeating the whole phrase.

### `laughing at him`

Core sentence:

`she did not like to see so many people laughing at him`

Teaching:

- `laugh at someone` can mean mock or ridicule someone.
- Jenny thinks the guests are laughing at Jeremy.
- The reader understands that they are probably laughing with him.

## Vocabulary Plan

Prioritize vocabulary that supports social context, public speaking, and the
misunderstanding.

### `circle`

- In this lesson, a group of friends or social contacts.
- Not a geometric circle.

### `popular`

- Liked by many people.
- Jeremy is popular at parties.

### `party`

- A social gathering.
- Jeremy is comfortable in social situations.

### `admire`

- Respect or think highly of someone.
- People admire Jeremy for his humour.

### `sense of humour`

- The ability to understand and create humour.
- Important phrase for personality.

### `except`

- Not including.
- Everyone admires Jeremy except Jenny.

### `six-year-old`

- Used before a noun:
  `his six-year-old daughter`.
- Hyphenated as an adjective in written English.

### `closest friend`

- One of his best or most intimate friends.
- Shows why Jeremy is asked to speak.

### `make a speech`

- Give a prepared talk in front of people.
- Connect to presentation practice.

### `wedding reception`

- A social celebration after a wedding ceremony.
- Often includes food, speeches, and celebration.

### `sort`

- Type or kind.
- `the sort of thing` means the kind of thing.

### `prepare`

- Get ready carefully before doing something.
- Key word for public speaking.

### `carefully`

- With attention and care.
- Jeremy does not just improvise lazily.

### `include`

- Put something into a larger whole.
- He includes funny stories in the speech.

### `a large number of`

- Many.
- Useful formal phrase.

### `funny`

- Making people laugh.
- In this context, friendly and amusing.

### `success`

- Something that goes well.
- The speech is a great success.

### `disappointed`

- A little sad because something is not as hoped.
- Jeremy is disappointed when Jenny wants to leave.

### `do as someone asks`

- Do what someone asks you to do.
- Jeremy respects Jenny's wish.

### `on the way home`

- During the journey home.
- Useful everyday phrase.

### `to his surprise`

- He is surprised by what happens next.
- Marks the twist.

### `amused`

- Finding something funny or entertaining.
- `not amused` can also mean not pleased.

### `laugh at`

- Laugh in a way that may mock someone.
- Contrast with `laugh with`.

### `laugh with`

- Share laughter together.
- This phrase is not in the passage but is crucial for modern explanation.

## Storyboard Continuity Rule

The storyboard must feel like four shots from one warm social story, not four
unrelated wedding or party illustrations.

Continuity requirements:

- Jeremy must look consistent:
  friendly middle-aged father, neat dark hair, warm expressive face, smart suit,
  confident but kind posture.
- Jenny must look consistent:
  six-year-old daughter, small build, shoulder-length dark hair, simple dress or
  cardigan, observant face, protective mood.
- The wedding reception should be tasteful and text-free:
  tables, flowers, guests, soft lights, no readable signs or menus.
- Audience laughter should look friendly, not mocking.
- Jenny's concern should look sincere, not rude.
- The final frame should make the father-daughter misunderstanding clear
  through expressions and body language.

Avoid:

- readable speech notes, banners, menus, or projection screens
- exaggerated humiliation
- cruel-looking audience laughter
- Jenny looking spoiled or angry in a harsh way
- turning Jeremy into a clown
- text boxes inside the illustration

## Visual Direction

Overall visual feel:

- Semi-realistic educational illustration.
- Warm social comedy with emotional tenderness.
- Gentle lighting and expressive faces.
- Clear father-daughter continuity.
- No in-image text.

The visual sequence should show:

1. Jeremy admired by friends at a social gathering, Jenny watching uncertainly.
2. Jeremy making a prepared wedding speech while guests laugh warmly.
3. Jenny asking to go home right after the speech; Jeremy looks surprised and
   slightly disappointed.
4. On the way home, Jenny explains her concern while Jeremy realizes the sweet
   misunderstanding.

## Character And Setting Consistency Brief

Suggested storyboard-level `visual_consistency`:

`A consistent semi-realistic educational illustration style. Jeremy Hampden is the same friendly middle-aged father in every frame: neat dark brown hair, clean-shaven face, expressive eyebrows, warm smile, average build, navy suit with a light shirt, confident but kind posture. Jenny is the same six-year-old daughter in every frame: small build, shoulder-length dark brown hair with a simple hair clip, round thoughtful face, pale yellow cardigan over a simple dress, protective and serious expression when adults laugh. The wedding reception setting has soft warm lighting, round tables, flowers, guests in semi-formal clothes, and no readable text anywhere. Audience laughter is friendly and appreciative, never cruel. The emotional mood moves from social admiration, to successful public speech, to Jenny's discomfort, to a tender misunderstanding on the way home.`

Production should reuse this exact character wording inside each frame prompt.

## Four-Frame Storyboard Intent

### Frame 1: Jeremy Is Popular At Parties

Purpose:

- Establish Jeremy as social, admired, and humorous.
- Show Jenny as the exception who does not fully understand adult laughter yet.

Visual content:

- Jeremy stands among a circle of friends at a warm party or reception-like
  setting.
- Friends smile and listen appreciatively.
- Jenny stands nearby, watching with a serious or puzzled expression.
- No readable decorations or signs.

Teaching overlay outside image:

- `a large circle of friends`
- `popular at parties`
- `great sense of humour`
- `except Jenny`

Avoid:

- literal circular diagram of friends
- Jeremy performing silly clowning
- Jenny looking mean

### Frame 2: Jeremy Makes A Wedding Speech

Purpose:

- Show public speaking as prepared and successful.
- Make audience laughter feel supportive.

Visual content:

- Jeremy gives a speech at a wedding reception.
- He holds small blank note cards or gestures naturally, with no readable text.
- Guests laugh warmly at tables.
- Jenny sits or stands nearby, looking worried rather than amused.

Teaching overlay outside image:

- `make a speech`
- `wedding reception`
- `prepared the speech carefully`
- `a large number of funny stories`
- `a great success`

Avoid:

- readable speech notes
- mocking faces in the audience
- overformal ceremony scene instead of reception

### Frame 3: Jenny Wants To Go Home

Purpose:

- Show the immediate reaction after the speech.
- Make Jeremy's mild disappointment visible but gentle.

Visual content:

- Jeremy has just finished speaking and steps away from the guests.
- Jenny tugs gently at his sleeve or speaks to him seriously.
- Jeremy looks surprised and a little disappointed, but caring.
- The reception continues warmly in the background.

Teaching overlay outside image:

- `As soon as he had finished`
- `Jenny told him`
- `she wanted to go home`
- `a little disappointed`
- `did as his daughter asked`

Avoid:

- Jenny throwing a tantrum
- Jeremy looking angry
- in-image speech bubbles

### Frame 4: On The Way Home

Purpose:

- Show the punchline and emotional tenderness.
- Make `laughing at him` visibly a misunderstanding.

Visual content:

- Jeremy and Jenny walk home together in the evening or sit in a car-like travel
  scene without readable signs.
- Jeremy looks gently surprised.
- Jenny looks earnest and protective, explaining her concern.
- The mood is affectionate and lightly comic.

Teaching overlay outside image:

- `On the way home`
- `if she had enjoyed the speech`
- `To his surprise`
- `she said she hadn't`
- `laughing at him`
- `laughing with him`

Avoid:

- making Jenny look foolish
- showing people laughing cruelly in this frame
- text inside the image

## Script And Courseware Presentation

### Opening Script

- Keep it to 4-6 spoken lines.
- Mention only the core hook:
  speaking in front of people, audience laughter, Jenny's misunderstanding.
- Include the confidence idea:
  speaking well can make people smile.
- Do not pre-explain all vocabulary.
- Do not speak image-generation directions.

### Retell Frames

- Use Chinese-first anchors.
- Attach short English chunks after each anchor.
- Keep the story chronological.
- Preserve the warmth:
  Jeremy prepares carefully, guests enjoy the speech, Jenny misunderstands out
  of concern.

### Teacher-Student Dialogue

- Use the dialogue to discuss public speaking courage and friendly laughter.
- Do not repeat the full retell.
- Include a clear distinction:
  `laugh at someone` versus `laugh with someone`.
- Encourage the student to practise short speeches in Chinese and English.

### Vocabulary

- Three vocabulary blocks should group words by function:
  1. Social personality:
     `circle`, `popular`, `admire`, `sense of humour`, `except`
  2. Speaking and event:
     `closest friend`, `make a speech`, `wedding reception`, `sort`,
     `prepare carefully`
  3. Reaction and misunderstanding:
     `success`, `disappointed`, `on the way home`, `to his surprise`,
     `not amused`, `laugh at`
- Keep definitions concrete and child-friendly.

### Grammar

- Present grammar through what people ask, tell, and think.
- Key idea:
  speech story -> reported speech -> question inside a sentence -> final
  misunderstanding.
- Do not use a dense grammar table.

### Passage Reading And Follow-Read

- The karaoke passage page should keep its guidance clear:
  the student can click a sentence to hear only that sentence.
- Follow-read should remain part of the course flow.
- The final course-flow page should include the follow-read step:
  `跟读：听课文全文 -> 听原音 -> 录一句 -> 获取反馈`.

## Read-Aloud And Pronunciation Direction

Create 5-8 guided sentences for `web/data/read_aloud/lesson_63.json`.

Prioritize:

- `Jeremy Hampden has a large circle of friends and is very popular at parties.`
- `Everybody admires him for his great sense of humour.`
- `One of Jeremy's closest friends asked him to make a speech at a wedding reception.`
- `He prepared the speech carefully and went to the wedding with Jenny.`
- `He had included a large number of funny stories in the speech.`
- `As soon as he had finished, Jenny told him she wanted to go home.`
- `On the way home, he asked Jenny if she had enjoyed the speech.`
- `She did not like to see so many people laughing at him.`

Pronunciation notes:

- `Jeremy Hampden`: proper name; keep it friendly, do not overdrill.
- `circle`: do not pronounce it like `cycle`.
- `popular`: three syllables; stress the first.
- `humour`: British spelling; pronounce naturally as humour.
- `wedding reception`: two-word event phrase.
- `speech`: final consonant needs clarity.
- `success`: stress the second syllable.
- `disappointed`: longer word; keep rhythm steady.
- `laughing at him`: link naturally, but keep `at` clear because it carries
  meaning.

Feedback style:

- Encourage clear rhythm and confidence in longer reported-speech sentences.
- Praise expressive reading for dialogue and surprise.
- Do not over-penalize proper-name pronunciation.

## Living-Scene Exercise Direction

The living-scene exercise should transfer the lesson into a modern public
speaking scenario.

Recommended setting:

`A student gives a short class presentation in English or Chinese and includes a funny little story. Classmates laugh kindly. The student feels nervous at first and wonders if they are laughing at them, but the teacher explains that the class is laughing with them because the story was clear and funny.`

Why this works:

- It directly supports the user's goal of encouraging the child to speak in
  front of many people.
- It naturally uses:
  `make a speech`, `prepare carefully`, `funny story`, `a great success`,
  `laugh at`, `laugh with`, `to my surprise`.
- It turns the passage into a healthy speaking habit.

Possible roles:

- Student speaker
- Teacher
- Classmate
- Parent listening after school

Target language:

- `I prepared my speech carefully.`
- `I included a funny story.`
- `Were they laughing at me?`
- `No, they were laughing with you.`
- `Your presentation was a great success.`

## Suggested You Too Scene

Scene title:

`My Class Speech`

Scene premise:

`You have prepared a short speech for class. You include one funny story. When classmates laugh, you feel nervous, but your teacher helps you understand that friendly laughter can mean your speech is successful.`

Dialogue goals:

- say that you prepared a speech
- describe including a funny story
- ask whether people were laughing at you
- understand the difference between `laugh at` and `laugh with`
- leave with confidence to speak again

Suggested exchanges:

1. Student:
   `I prepared my speech carefully.`
2. Teacher:
   `Good. Did you include a story?`
3. Student:
   `Yes, I included a funny story.`
4. Student:
   `But when everyone laughed, I felt nervous. Were they laughing at me?`
5. Teacher:
   `No. They were laughing with you. Your speech was a great success.`

Keep the exercise encouraging rather than evaluative.

## Chinese-To-English Exercise Direction

If production creates guided translation prompts inside lesson-local materials,
use meaning chunks that mirror the social misunderstanding.

Suggested chunking:

1. Jeremy Hampden 朋友很多，在聚会上很受欢迎。
   - `Jeremy Hampden has a large circle of friends and is very popular at parties.`
2. 大家都欣赏他的幽默感，除了他六岁的女儿 Jenny。
   - `Everybody admires him for his great sense of humour, except his six-year-old daughter Jenny.`
3. 一个亲密朋友请他在婚礼宴会上致辞，他认真准备了讲稿。
   - `One of his closest friends asked him to make a speech at a wedding reception, and he prepared the speech carefully.`
4. 他在讲话里加入了很多有趣的小故事，讲话非常成功。
   - `He had included a large number of funny stories in the speech, and it was a great success.`
5. 回家路上，Jenny 说她不喜欢，因为她不想看到那么多人嘲笑他。
   - `On the way home, Jenny said she had not enjoyed it because she did not like to see so many people laughing at him.`

Do not edit `web/data/lessons.json` just to add chunks unless the user explicitly
asks for a shared-data update.

## Grammar Board

### 1. `ask someone to do something`

Pattern:

`ask + person + to + verb`

Example:

`One of Jeremy's closest friends asked him to make a speech.`

Student explanation:

`请某人做某事，就可以用 ask someone to do something。`

### 2. `admire someone for something`

Pattern:

`admire + person + for + reason`

Example:

`Everybody admires him for his great sense of humour.`

Student explanation:

`for 后面说原因：大家为什么欣赏他。`

### 3. Past Perfect

Pattern:

`had + past participle`

Examples:

- `He had included a large number of funny stories.`
- `As soon as he had finished...`
- `if she had enjoyed the speech`

Student explanation:

`讲过去里面更早发生的事，可以用 had done。`

### 4. `As soon as`

Pattern:

`As soon as + event, another event`

Example:

`As soon as he had finished, Jenny told him she wanted to go home.`

Student explanation:

`一......就......，让 Jenny 的反应很快、很有戏剧性。`

### 5. Reported Statement

Pattern:

`tell + person + that-clause`

Example:

`Jenny told him she wanted to go home.`

Student explanation:

`别人说的话放进句子里，就变成 reported speech。`

### 6. Reported Yes-No Question

Pattern:

`ask + person + if + clause`

Example:

`He asked Jenny if she had enjoyed the speech.`

Student explanation:

`原来是 Did you enjoy the speech? 放进句子里，就用 if。`

### 7. Short Answer

Expression:

`she said she hadn't`

Student explanation:

`hadn't 省掉了 enjoyed the speech，避免重复。`

### 8. `see someone doing something`

Pattern:

`see + person + doing`

Example:

`to see so many people laughing at him`

Student explanation:

`看到某人正在做某事，用 see someone doing。`

### 9. `laugh at` Versus `laugh with`

Expressions:

- `laugh at someone`
- `laugh with someone`

Student explanation:

`laugh at someone 可能是嘲笑；laugh with someone 是一起笑、善意地笑。Jenny 误会了这一点。`

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

- `lesson_plans/lesson_063.md` is the production source of truth for Lesson 63.
- The root `LESSON_PRODUCTION_PLAN.md` index includes Lesson 63 and points the
  future placeholder to Lesson 64.
- The opening hook is short and does not retell the whole passage.
- The four retell frames use Chinese-first anchors with English chunks.
- The teacher-student dialogue explains public speaking confidence and
  `laughing at` versus `laughing with` without repeating the full story.
- The storyboard keeps Jeremy, Jenny, and the wedding reception visually
  consistent across all four frames.
- The storyboard images are text-free.
- The script does not contain image prompt wording.
- The plan warns production about `if` versus `is` and lowercase `he` source
  issues without silently editing shared data.
- The final course-flow page includes the follow-read step.
