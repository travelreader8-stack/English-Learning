# Lesson 60 Plan - The future

This is the source-of-truth design card for producing Lesson 60. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 60 assets.

## Basic Info

- Lesson: 60
- Title: `The future`
- Chinese title: `卜算未来`
- Core bridge: `这一课不要讲成“算命到底准不准”的课，也不要让 fortune-teller 显得真的有神秘能力。它的核心是一个轻巧的巧合笑话：Madam Bellinsky 的预言听起来很神秘，但她说的内容其实很 vague，可以被日常事件套上去。主人公刚走出 tent，就被 wife 叫去 station 接 sister，于是 relation, a woman you know well, lead you away 这些话好像都“应验”了。孩子要先看懂：mysterious prediction meets ordinary family emergency。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule and the section
responsibility rule in `LESSON_PRODUCTION_PLAN.md`.

- Keep the opening hook short.
  - Use 4-6 spoken lines only.
  - The hook should set up the comic question: why does a vague prediction feel
    as if it came true?
  - Do not retell the whole passage before the four `retell` frames.
  - Do not list the full fortune-teller prediction in the opening.
- Story spine must be Chinese-first.
  - Present the fortune-teller-and-wife chain first as Chinese scene anchors.
  - Attach short English chunks after each Chinese anchor.
  - Do not use an all-English arrow chain as the main student-facing memory
    path.
- Avoid repeated script content across sections.
  - The four `retell` frames are the only section that should walk through the
    full plot in order.
  - The teacher-student dialogue must not repeat the retell narration.
  - The dialogue should deepen the idea: vague predictions can feel accurate
    when ordinary events happen to match them.
  - Vocabulary and grammar sections should explain language tools, not tell the
    story again.
- The four illustrations must form one continuous story line.
  - They are not four isolated fortune-teller or fair pictures.
  - Each frame should inherit visible consequences from the previous frame.
  - The same village fair, same fortune-teller tent, same narrator, same wife,
    and same exit path from the fair should carry through the sequence.
  - The emotional line should accumulate: curiosity -> mysterious prediction ->
    sudden ordinary interruption -> being led away to the station.
  - Storyboard prompts should explicitly describe the causal relation between
    frames, so the images feel like four shots from one short film.
- Generated illustrations must be text-free.
  - No readable English or Chinese text inside images.
  - No readable fair signs, tent labels, fortune cards, tickets, station signs,
    posters, captions, speech bubbles, UI panels, or fake lesson text.
  - If the courseware needs words such as `fortune-teller`, `crystal ball`,
    `relation`, `wife`, or `station`, render them as real UI text outside the
    image.
- Keep fortune-telling as story comedy, not belief instruction.
  - Do not present Madam Bellinsky as truly magical.
  - Do not make the crystal ball glow with supernatural power.
  - Do not turn the scene into witchcraft, horror, or occult imagery.
  - The fair booth should feel like a playful entertainment stall.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, camera directions,
    or generated-image mechanics.
  - Storyboard prompts must not leak into spoken lesson content.

## Production Warnings

- No obvious source-text correction is required for Lesson 60 in the current
  lesson record.
- `village fair` needs cultural bridging.
  - It is not a trade fair or modern shopping mall.
  - Explain it as a local village event with small stalls, tents, games, food,
    and entertainment.
- `fortune-teller` should be handled as fair entertainment.
  - Do not encourage superstition.
  - The lesson's humor depends on coincidence and vague wording.
- `Madam Bellinsky` is a proper name.
  - Keep pronunciation support, but do not overteach the name.
- `relation` means relative / family member.
  - In this passage it finally matches the narrator's sister.
- `A woman you know well` is deliberately vague.
  - It finally matches the wife.
  - This is useful for discussing why predictions can feel accurate.
- `Where have you been hiding?` is not literal hiding.
  - It means "Where have you been?" with impatience.
  - Keep it natural and conversational.
- `lead you away from this place` sounds mysterious in the tent.
  - In reality, the wife simply hurries him away from the fair to go to the
    station.
- `impatiently` is important for tone.
  - The wife is rushed and annoyed because they are already late.
  - Do not make her cruel or frightening.

If production requires editing `web/data/lessons.json`, stop and ask for a
shared-data edit because it is outside the normal per-lesson write set.

## Lesson Positioning

Lesson 60 is a comic coincidence story. At a village fair, the narrator decides
to visit a fortune-teller called Madam Bellinsky. He enters her tent, sits down,
and gives her some money. She looks into a crystal ball and predicts that a
relation of his is coming to see him, that she will arrive that evening, and
that she intends to stay for a few days. She also says that the moment he leaves
the tent, he will get a big surprise: a woman he knows well will rush towards
him, speak to him, and lead him away. As soon as he goes outside, he forgets all
about Madam Bellinsky because his wife hurries towards him. She asks where he
has been hiding and tells him that his sister will arrive in less than an hour,
so they must go to the station. They are already late. As she walks away, he
follows her out of the fair.

The courseware should make the student understand:

`乡村 fair -> 我决定去看 fortune-teller Madam Bellinsky -> 走进 tent -> 她让我坐下 -> 我给了她一些钱 -> 她看着 crystal ball 说话 -> 一个 relation 要来看我 -> 她今晚会到，打算住几天 -> 我一离开 tent 就会大吃一惊 -> 一个熟悉的 woman 会冲向我 -> 她会跟我说话，然后把我带离这个地方 -> 我一出去就忘了算命 -> 因为 wife 急匆匆冲过来 -> 她问我去哪儿了 -> sister 不到一小时就到 -> 我们必须去 station 接她 -> 已经 late -> 我跟着 wife 离开 fair`

The central bridge is:

`这不是“预言真神奇”的故事，而是“模糊的神秘话语碰上普通家庭急事，于是看起来像被说中了”的故事。`

## One-Sentence Hook

A fortune-teller makes a mysterious prediction, and a few minutes later the
narrator's ordinary family problem seems to make it come true.

## Vivid Teaching Opening

The opening should establish the comic coincidence quickly. It must be a short
hook, not a complete plot retelling. Keep it to 4-6 spoken lines so the first
visual does not stay on screen too long before the frame-by-frame retell begins.

Suggested teacher narration:

`你有没有见过那种“预测未来”的小游戏？`

`有些话听起来很神秘，但其实说得很 vague。`

`这篇课文里，fortune-teller 说主人公马上会遇到 surprise。`

`结果他一走出 tent，wife 就急匆匆冲过来催他去 station。`

`今天先抓住这个笑点：mysterious prediction, ordinary family emergency。`

Tone:

- Light, curious, and skeptical in a friendly way.
- Keep fortune-telling as a story device, not a belief.
- Do not retell all predicted details in the hook.
- Save the detailed sequence for the four `retell` frames.

## Section Responsibility And Anti-Repetition Plan

Production must treat the lesson as several sections with distinct jobs.

### Opening

Job:

- Raise the question of vague predictions.
- Frame the contrast between mystery and ordinary life.
- Keep the hook short.

Do not:

- Explain every line of the fortune-teller's prediction.
- Mention all later family details.
- Teach all future forms before the story starts.

### Four Retell Frames

Job:

- Walk through the plot in order.
- Make the fair, tent, prediction, wife, sister, station, and exit path visible.
- Pair each visual event with Chinese anchors and English chunks.

Do not:

- Turn each frame into a debate about superstition.
- Spend the retell explaining all future grammar.

### Teacher-Student Dialogue

Job:

- Deepen the idea that vague predictions can be fitted to ordinary events.
- Compare `a relation of yours` with `your sister`.
- Compare `a woman you know well` with `my wife`.
- Discuss why the story is funny without retelling it.

Do not:

- Re-list the whole passage.
- Make the dialogue a second plot summary.

### Vocabulary And Grammar

Job:

- Explain useful prediction and timing language:
  `will be arriving`, `intends to`, `The moment`, `As soon as`, `in less than`,
  `Where have you been hiding?`

Do not:

- Restart the story through vocabulary examples.

### Practice And Transfer

Job:

- Move the idea into a modern safe scene, such as a vague prediction app or
  school fair booth that seems to match a normal event.

Do not:

- Encourage fortune-telling belief.
- Make the transfer scary or mystical.

## Story Focus

The prediction-and-reality chain is:

1. The narrator is at a village fair.
2. He decides to visit Madam Bellinsky, a fortune-teller.
3. He enters her tent.
4. She tells him to sit down.
5. He gives her some money.
6. She looks into a crystal ball.
7. She says a relation of his is coming to see him.
8. She says the relation will arrive this evening and stay for a few days.
9. She says the moment he leaves the tent, he will get a big surprise.
10. She says a woman he knows well will rush towards him.
11. She says the woman will speak to him and lead him away.
12. He goes outside and forgets all about the fortune-teller.
13. His wife hurries towards him.
14. She asks where he has been hiding.
15. She says his sister will arrive in less than an hour.
16. They must go to the station to meet her.
17. They are already late.
18. He follows his wife out of the fair.

The production should make the contrast visible:

`mysterious prediction` versus `ordinary family emergency`.

`a relation of yours` versus `your sister`.

`a woman you know well` versus `my wife`.

`lead you away` versus `go to the station`.

## Chinese-First Story Spine For Courseware

Use this as the main student-facing story line.

1. 在乡村 fair 上，我决定去看一位 fortune-teller
   - `At a village fair`
   - `I decided`
   - `to visit a fortune-teller`
2. 这位 fortune-teller 叫 Madam Bellinsky
   - `called Madam Bellinsky`
3. 我走进她的 tent，她让我坐下
   - `I went into her tent`
   - `she told me`
   - `to sit down`
4. 我给了她一些钱之后，她看着 crystal ball
   - `After I had given her some money`
   - `she looked into`
   - `a crystal ball`
5. 她说，我的一个 relation 要来看我
   - `A relation of yours`
   - `is coming to see you`
6. 这位亲戚今晚会到，并打算住几天
   - `She will be arriving`
   - `this evening`
   - `and intends to stay`
   - `for a few days`
7. 我一离开 tent，就会大吃一惊
   - `The moment`
   - `you leave this tent`
   - `you will get a big surprise`
8. 一个我很熟悉的 woman 会冲向我
   - `A woman you know well`
   - `will rush towards you`
9. 她会跟我说话，然后把我带离这里
   - `She will speak to you`
   - `and then`
   - `she will lead you away`
   - `from this place`
10. 我一走到外面，就把 Madam Bellinsky 忘了
    - `As soon as I went outside`
    - `I forgot all about`
    - `Madam Bellinsky`
11. 因为我的 wife 急匆匆向我走来
    - `because my wife`
    - `hurried towards me`
12. 她不耐烦地问我，到底躲到哪里去了
    - `Where have you been hiding?`
    - `she asked impatiently`
13. 她说，我的 sister 不到一小时就到
    - `Your sister`
    - `will be here`
    - `in less than an hour`
14. 我们必须去 station 接她，而且已经 late
    - `we must be at the station`
    - `to meet her`
    - `We are late already`
15. 她走开时，我跟着她出了 fair
    - `As she walked away`
    - `I followed her`
    - `out of the fair`

Student memory prompt:

`先记中文巧合线：village fair -> fortune-teller tent -> 给钱 -> crystal ball -> relation 要来 -> tonight arriving, stay a few days -> 一出 tent 会 surprise -> 熟悉的 woman 会冲过来并带我走 -> 我出去后 wife 冲来 -> sister 不到一小时到 -> 必须去 station -> 已经 late -> 跟着 wife 离开 fair。再把英文短语挂到每个节点上。`

Do not show this as an all-English arrow chain in the student-facing courseware.

## Recitation Blocks

Break the passage into four Chinese-first recitation blocks:

### Block 1: 乡村集市和算命帐篷

Chinese anchor:

`在乡村 fair 上，我决定去看一位叫 Madam Bellinsky 的 fortune-teller。我走进她的 tent，她让我坐下。`

English chunks:

- `At a village fair`
- `I decided to visit`
- `a fortune-teller`
- `called Madam Bellinsky`
- `I went into her tent`
- `she told me to sit down`

Teaching point:

- This block establishes the old fair setting.
- Explain `village fair` as a local event with stalls and entertainment.
- Keep `fortune-teller` as story entertainment, not belief instruction.

### Block 2: 水晶球里的模糊预言

Chinese anchor:

`我给了她一些钱后，她看着 crystal ball，说我的一个 relation 要来看我；她今晚会到，并打算住几天。`

English chunks:

- `After I had given her some money`
- `she looked into a crystal ball`
- `A relation of yours`
- `is coming to see you`
- `She will be arriving this evening`
- `intends to stay`
- `for a few days`

Teaching point:

- This block contains the prediction about the sister.
- `relation` is vague; later it becomes `your sister`.
- `will be arriving` sounds like an arranged future.

### Block 3: 一走出帐篷就会有 surprise

Chinese anchor:

`她又说：我一离开 tent，就会大吃一惊；一个我很熟悉的 woman 会冲向我，跟我说话，然后带我离开。`

English chunks:

- `The moment you leave this tent`
- `you will get a big surprise`
- `A woman you know well`
- `will rush towards you`
- `She will speak to you`
- `she will lead you away`
- `from this place`

Teaching point:

- This block is mysterious because the words are dramatic but still vague.
- `The moment` is a strong time connector.
- `a woman you know well` later becomes the narrator's wife.

### Block 4: 妻子催去车站，预言像是应验

Chinese anchor:

`我一走出帐篷，就把算命忘了，因为 wife 急匆匆向我走来。她说 sister 不到一小时就到，我们必须去 station 接她，而且已经 late。于是我跟着她离开 fair。`

English chunks:

- `As soon as I went outside`
- `I forgot all about Madam Bellinsky`
- `because my wife hurried towards me`
- `Where have you been hiding?`
- `asked impatiently`
- `Your sister will be here`
- `in less than an hour`
- `we must be at the station`
- `We are late already`
- `I followed her out of the fair`

Teaching point:

- This block is the comic explanation of the prediction.
- `As soon as` echoes `The moment`.
- `Where have you been hiding?` is impatient everyday speech, not literal hiding.

## Modern Child Bridge

For a modern child, connect the text to familiar "future prediction" experiences:

- horoscope or personality-test style predictions
- short-video "today you will meet someone important" claims
- a school fair fortune booth
- a game or app that gives vague predictions
- AI or algorithmic predictions that sound clever but are broad

Suggested child-facing line:

`今天孩子不一定见过 fair 里的 fortune-teller tent，但一定见过“预测你今天会发生什么”的 app、短视频或小游戏。很多 prediction 听起来准，是因为它说得很 vague，后来普通事情也能套进去。`

Do not replace the original story. Use the bridge to make the old fair scene
understandable.

## Village Fair And Fortune-Teller Bridge

Keep this background short and concrete.

Student-facing explanation:

`village fair 是乡村里的热闹活动，会有 stalls, games, food, tents, entertainment。fortune-teller 在这里更像一个集市娱乐项目。Madam Bellinsky 看 crystal ball，是为了让 prediction 显得神秘。`

Important boundaries:

- Do not turn the lesson into a fortune-telling lesson.
- Do not make students believe the crystal ball has power.
- Keep the focus on storytelling, vague wording, and comic coincidence.

## Teacher-Student Dialogue Direction

The dialogue section must not repeat the plot. It should explore why the
prediction feels accurate.

Recommended dialogue path:

1. Teacher asks:
   `Madam Bellinsky 的 prediction 听起来准不准？`
2. Student:
   `好像挺准。`
3. Teacher:
   `But look carefully. She says "a relation of yours", not a name. Is that specific or vague?`
4. Student:
   `Vague.`
5. Teacher:
   `Exactly. Later it matches "your sister". She also says "a woman you know well". That can match many people, but here it matches his wife.`
6. Teacher asks:
   `So is the story about magic, or about a funny coincidence?`
7. Student:
   `A funny coincidence.`
8. Teacher:
   `Right. The language sounds mysterious, but the explanation is ordinary family life: hurry, station, sister, late.`

Keep this section short. It should feel like a new thinking angle after retell,
not a second retell.

## Main Language Focus

### Future Arrangements And Predictions

Core expressions:

- `is coming to see you`
- `will be arriving this evening`
- `intends to stay`
- `will get a big surprise`
- `will rush towards you`
- `will lead you away`
- `will be here in less than an hour`

Teaching:

- The fortune-teller uses future language to sound mysterious.
- The wife uses future language for a real schedule.
- This contrast is the lesson's humor.

Student-facing idea:

`同样是 future，一个在 crystal ball 里听起来神秘，一个在 wife 口中就是日常安排：姐姐快到了，我们要去 station。`

### Time Connectors: `The moment` And `As soon as`

Core expressions:

- `The moment you leave this tent`
- `As soon as I went outside`

Teaching:

- Both mean something happens immediately after another action.
- The text uses them to connect prediction and reality.

### Past Perfect Sequence

Core sentence:

`After I had given her some money, she looked into a crystal ball...`

Teaching:

- First he gives money.
- Then she looks into the crystal ball.
- Keep it as sequence, not heavy tense theory.

### Vague Prediction Language

Core expressions:

- `A relation of yours`
- `A woman you know well`
- `from this place`

Teaching:

- These phrases sound personal, but they are not very specific.
- This helps the prediction match ordinary events.

### Everyday Impatience

Core sentence:

`Where have you been hiding?`

Teaching:

- This is not literal hiding.
- It means "Where have you been?" with impatience.
- Pair with `asked impatiently`.

## Vocabulary Plan

Prioritize vocabulary that supports the fair setting, prediction, and ordinary
family explanation.

### `future`

- Time after now.
- The title points to prediction, but the story is comic.

### `fair`

- A local event with stalls, games, tents, and entertainment.
- Not necessarily a modern exhibition.

### `fortune-teller`

- A person who claims to tell the future.
- In this lesson, treat as fair entertainment.

### `Madam`

- Formal title before a woman's name.
- Here part of the fortune-teller's name style.

### `tent`

- A temporary cloth shelter.
- The fortune-teller works inside a tent at the fair.

### `crystal`

- Clear glass-like material.
- Pair with `crystal ball`.

### `crystal ball`

- A round glass-like ball used in fortune-telling scenes.
- Visual prop, not real evidence of magic.

### `relation`

- Relative / family member.
- Here it turns out to be the narrator's sister.

### `arriving`

- Coming to a place.
- `will be arriving` sounds like a planned arrival.

### `intend`

- Plan or mean to do something.
- `intends to stay for a few days`.

### `The moment`

- As soon as; immediately when.
- Strong timing phrase.

### `surprise`

- Something unexpected.
- The surprise is his wife rushing toward him.

### `rush`

- Move quickly.
- Wife rushes because they are late.

### `lead`

- Take or guide someone somewhere.
- Wife leads him away from the fair.

### `hurried`

- Moved quickly because there was little time.
- Pair with wife and station.

### `impatiently`

- In an annoyed or hurried way.
- Wife is impatient because they are late.

### `less than`

- Smaller amount of time or number.
- `in less than an hour`.

### `station`

- Train station.
- They must go there to meet the sister.

## Storyboard Continuity Rule

The storyboard must be designed as four linked shots from the same short film.
This is a production requirement, not an optional style preference.

Continuity spine:

`village fair curiosity -> fortune-teller prediction -> wife rushes over -> leaving for the station`

Frame-to-frame continuity:

- Frame 1 establishes the village fair, fortune-teller tent, narrator, and
  curious decision to enter.
- Frame 2 keeps the same narrator and tent; Madam Bellinsky gives the prediction
  with the crystal ball.
- Frame 3 keeps the same fair exit area; the narrator steps outside and his wife
  rushes toward him.
- Frame 4 keeps the same fair path; the wife leads the narrator away toward the
  station errand.

Prompt discipline:

- Do not generate four unrelated fortune-teller scenes.
- Do not make Madam Bellinsky supernatural, frightening, or witch-like.
- Do not change the narrator or wife between frames.
- Do not show readable signs, tickets, cards, posters, or labels.
- Do not put text inside the crystal ball.
- Do not show the sister in all frames; she is the reason for going to the
  station, not a main visual until needed.

## Visual Direction

Overall visual style:

- Warm, realistic, child-friendly village fair comedy.
- Slightly mysterious tent atmosphere, but not spooky.
- Same narrator across frames.
- Same wife in Frames 3-4.
- No readable text inside images.
- No labels, captions, speech bubbles, or UI-like boxes.

The visuals should help the student remember:

`village fair -> fortune-teller tent -> crystal ball prediction -> wife rushes -> sister arriving soon -> station -> leaving the fair`

Avoid:

- horror, witchcraft, dark magic, glowing supernatural powers
- readable fair signs, station signs, fortune cards, or posters
- making the wife look cruel
- making the fortune-teller the hero of real magic
- disconnected fair scenes with no prediction-to-reality connection

## Character And Object Consistency Brief

Use a consistent narrator:

`An adult man in casual village-fair clothing, average build, short dark hair, curious expression in the fair, then surprised and hurried after meeting his wife, same face and clothing across all frames.`

Use a consistent Madam Bellinsky:

`A middle-aged fortune-teller at a village fair, warm but theatrical expression, colorful shawl and simple headscarf, seated inside a small tent with a crystal ball, not scary or supernatural, no readable symbols or text.`

Use a consistent wife:

`An adult woman with practical hurried energy, medium build, dark hair tied back, simple coat or cardigan, concerned and impatient expression, moving quickly toward the narrator, not angry in a frightening way.`

Supporting elements:

- A village fair with stalls, bunting, tents, and visitors, but no readable
  signs.
- A small fortune-teller tent with a crystal ball.
- A path out of the fair that can visually carry the narrator and wife away.
- The station itself can be suggested by direction and urgency, without readable
  station signage.

## Four-Frame Storyboard Intent

### Frame 1: Village Fair And Fortune-Teller Tent

Purpose:

- Establish the old fair setting.
- Show the narrator deciding to visit Madam Bellinsky.

Visual:

- A lively village fair with small stalls and tents.
- The narrator stands near a fortune-teller tent, curious and ready to enter.
- Madam Bellinsky is visible near or inside the tent if composition allows.
- The mood is playful and slightly theatrical.
- No readable signs, banners, tickets, or text.

Teaching content:

- `At a village fair`
- `I decided to visit`
- `a fortune-teller`
- `called Madam Bellinsky`
- `went into her tent`

Continuity note:

- This frame establishes the fair, tent, narrator, and fortune-teller.

### Frame 2: Crystal Ball Prediction

Purpose:

- Show the mysterious prediction setting.
- Make the vague prediction feel theatrical but not magical.

Visual:

- Inside the same tent.
- Madam Bellinsky sits by a crystal ball.
- The narrator sits across from her after paying.
- The crystal ball is a prop; no supernatural glow or readable text.
- The mood is mysterious entertainment, not horror.

Teaching content:

- `After I had given her some money`
- `she looked into a crystal ball`
- `A relation of yours`
- `will be arriving this evening`
- `The moment you leave this tent`
- `A woman you know well`

Continuity note:

- The prediction in this frame sets up the wife and sister details in Frames
  3-4.

### Frame 3: Wife Rushes Toward Him

Purpose:

- Show the ordinary event that seems to fulfill the prediction.
- Make the surprise immediate.

Visual:

- Just outside the same fortune-teller tent at the village fair.
- The narrator has stepped outside and looks surprised.
- His wife hurries toward him with impatient urgency.
- The fair remains visible in the background.
- No readable signs or speech bubbles.

Teaching content:

- `As soon as I went outside`
- `I forgot all about Madam Bellinsky`
- `because my wife hurried towards me`
- `Where have you been hiding?`
- `asked impatiently`

Continuity note:

- The wife should visibly match the phrase `a woman you know well`, but the
  scene should feel ordinary rather than magical.

### Frame 4: Leaving The Fair For The Station

Purpose:

- Resolve the prediction through family urgency.
- Show being led away from the fair.

Visual:

- The wife leads the narrator away from the fair path.
- The narrator follows, surprised and hurried.
- A travel bag, clock-like urgency, or distant station-direction feel can be
  suggested without readable text.
- The mood is comic rush, not panic.
- No readable station signs or written labels.

Teaching content:

- `Your sister will be here`
- `in less than an hour`
- `we must be at the station`
- `We are late already`
- `As she walked away`
- `I followed her out of the fair`

Continuity note:

- This frame should feel like the everyday explanation for `lead you away from
  this place`.

## Script And Courseware Presentation

The script should follow this pacing:

1. Short hook: vague prediction meets ordinary family emergency.
2. Four `retell` frames:
   - Frame 1: village fair and fortune-teller tent.
   - Frame 2: crystal ball prediction.
   - Frame 3: wife rushes over as soon as narrator leaves.
   - Frame 4: wife leads narrator away to meet sister at station.
3. Teacher-student dialogue:
   - Do not retell the plot.
   - Discuss vague prediction versus ordinary explanation.
   - Contrast `relation` / `sister` and `woman you know well` / `wife`.
4. Passage normal reading.
5. Three vocabulary blocks.
6. Grammar board.
7. You Too living-scene transfer.
8. Outro with the full practice order.

The opening must not contain the full story chain. Do not say all of:

`village fair -> fortune-teller tent -> crystal ball -> relation will arrive -> woman will rush over -> wife arrives -> sister arriving soon -> station -> leave fair`

inside the hook. Save that sequence for the four retell frames.

The teacher-student dialogue must not contain the full story chain either. It
should be a theme discussion after the student already understands the events.

Student-facing Chinese should feel like a guided coincidence:

- `先看神秘场景怎样被搭起来。`
- `再看 prediction 为什么说得模糊。`
- `然后看 wife 的出现怎样像是应验。`
- `最后看普通家庭急事怎样解释这个“预言”。`

## Read-Aloud And Pronunciation Direction

Choose 5-8 high-value sentences for read-aloud. Suggested targets:

1. `At a village fair, I decided to visit a fortune-teller called Madam Bellinsky.`
   - Focus: setting, `village fair`, `fortune-teller`, proper name.
2. `After I had given her some money, she looked into a crystal ball and said...`
   - Focus: past perfect sequence, `crystal ball`.
3. `A relation of yours is coming to see you.`
   - Focus: vague phrase `a relation of yours`.
4. `She will be arriving this evening and intends to stay for a few days.`
   - Focus: `will be arriving`, `intends to stay`.
5. `The moment you leave this tent, you will get a big surprise.`
   - Focus: `The moment`, prediction tone.
6. `A woman you know well will rush towards you.`
   - Focus: vague phrase, `rush towards`.
7. `As soon as I went outside, I forgot all about Madam Bellinsky because my wife hurried towards me.`
   - Focus: `As soon as`, ordinary explanation.
8. `Your sister will be here in less than an hour and we must be at the station to meet her.`
   - Focus: real schedule, `less than`, `station`.

Optional final sentence if production wants the punchline closure:

`As she walked away, I followed her out of the fair.`

Read-aloud feedback should reward:

- clear contrast between mysterious prediction and hurried everyday speech
- natural grouping of long future sentences
- correct stress on `The moment`, `As soon as`, `less than`, and `late already`
- careful pronunciation of `future`, `fair`, `fortune-teller`, `Madam
  Bellinsky`, `crystal`, `relation`, `impatiently`, and `station`

## Living-Scene Exercise Direction

Use a modern safe transfer that preserves the pattern:

`vague prediction -> ordinary event seems to match it`

Recommended scene:

`The Prediction App`

Chinese setup:

`孩子在学校活动上试了一个“future prediction”小程序。小程序说：今天会有一个你认识的人来找你，一个 family member 会给你带来 surprise。孩子觉得很神秘。结果刚走出教室，妈妈就来接他，说 cousin 马上到家，要赶紧回去。这个 prediction 好像准了，其实它说得很 vague。`

Target transfer:

- `a person you know well`
- `a relation of yours`
- `will be arriving`
- `The moment`
- `As soon as`
- `rush towards`
- `lead you away`
- `in less than an hour`

This keeps the lesson's coincidence structure without encouraging belief in
fortune-telling.

## Suggested You Too Scene

Scene title:

`The Prediction App`

Role:

- Student tells a short story about a vague prediction app seeming to come true.
- Parent/teacher asks guiding questions.

Expected student output shape:

1. `At a school fair, I decided to try a prediction app.`
2. `It said a relation of mine was coming to see me.`
3. `The moment I left the classroom, I would get a big surprise.`
4. `As soon as I went outside, my mother hurried towards me.`
5. `She said my cousin would be here in less than an hour.`
6. `We had to go home to meet him.`
7. `The prediction sounded mysterious, but it was just a funny coincidence.`

Keep the exercise short. The goal is transfer of vague prediction, timing
connectors, and ordinary explanation.

## Chinese-To-English Exercise Direction

The translation practice should reinforce the prediction chain, timing
connectors, and future forms.

Suggested chunk logic:

1. 在一个 village fair 上，我决定去看一位叫 Madam Bellinsky 的 fortune-teller。
2. 我走进她的 tent，给了她一些钱后，她看着 crystal ball 开始说话。
3. 她说我的一个 relation 要来看我，今晚会到，并打算住几天。
4. 她又说，我一离开 tent，就会大吃一惊；一个熟悉的 woman 会冲向我，并把我带走。
5. 我一走到外面，就忘了 Madam Bellinsky，因为 wife 急匆匆向我走来。
6. 她说 sister 不到一小时就到，我们必须去 station 接她，而且已经 late。
7. 她走开时，我跟着她离开了 fair。

High-value expressions to preserve:

- `At a village fair`
- `decided to visit`
- `a fortune-teller called Madam Bellinsky`
- `went into her tent`
- `After I had given her some money`
- `looked into a crystal ball`
- `A relation of yours`
- `will be arriving this evening`
- `intends to stay`
- `The moment you leave this tent`
- `A woman you know well`
- `will rush towards you`
- `lead you away`
- `As soon as I went outside`
- `my wife hurried towards me`
- `Where have you been hiding?`
- `in less than an hour`
- `at the station to meet her`
- `followed her out of the fair`

If manual chunks are added to `web/data/lessons.json`, Chinese and English chunk
counts must match. Otherwise rely on the frontend fallback.

## Grammar Board

### 1. Future Prediction With `will`

Board idea:

`will get / will rush / will speak / will lead`

Chinese anchor:

`fortune-teller 用 will 让话听起来像未来预言。`

Teaching:

- These are future statements.
- In this story, they sound mysterious but match ordinary events.

### 2. Future Arrangement: `will be arriving`

Core sentence:

`She will be arriving this evening.`

Teaching:

- Sounds like an arranged arrival.
- Wife later says the sister will be here soon.

### 3. `intend to`

Core phrase:

`intends to stay for a few days`

Teaching:

- Means plans to.
- Useful formal verb for intention.

### 4. Past Perfect After `After`

Core sentence:

`After I had given her some money, she looked into a crystal ball.`

Teaching:

- First: he gives money.
- Then: she looks into the crystal ball.
- Use sequence, not tense charts.

### 5. `The moment`

Core sentence:

`The moment you leave this tent, you will get a big surprise.`

Teaching:

- Means as soon as.
- Makes the prediction feel immediate.

### 6. `As soon as`

Core sentence:

`As soon as I went outside, I forgot all about Madam Bellinsky.`

Teaching:

- Shows one action happens immediately after another.
- Echoes `The moment`.

### 7. `Where have you been hiding?`

Core phrase:

`Where have you been hiding?`

Teaching:

- Everyday impatient question.
- Not literal hiding.

### 8. `less than`

Core phrase:

`in less than an hour`

Teaching:

- Means under one hour.
- It creates urgency.

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

`这一课先把神秘预言和日常解释的反差线背熟：village fair -> fortune-teller tent -> crystal ball -> relation will arrive -> woman you know well will rush towards you -> wife hurries over -> sister will be here in less than an hour -> station -> followed her out of the fair。跟读时注意 will be arriving, intends to, The moment, As soon as, in less than an hour；生活场景里，用 a vague prediction met an ordinary event 讲一个现代小故事。`

## Acceptance Criteria

Lesson 60 is ready for production when:

- The opening hook is 4-6 spoken lines and does not retell the whole passage.
- The lesson is framed as mysterious prediction meeting ordinary family urgency,
  not as a lesson promoting fortune-telling.
- The student-facing story spine is Chinese-first.
- The course sections have distinct jobs and do not repeat the same full story
  script.
- The teacher-student dialogue does not repeat the retell sequence; it deepens
  why vague predictions can feel accurate.
- `village fair`, `fortune-teller`, `tent`, and `crystal ball` are explained as
  fair-setting concepts, not supernatural proof.
- `relation` is explained as a vague family-member word that later matches
  `sister`.
- `a woman you know well` is explained as vague wording that later matches
  `wife`.
- `Where have you been hiding?` is explained as impatient everyday speech, not
  literal hiding.
- `The moment` and `As soon as` are taught as immediate timing connectors.
- Future forms are contrasted: prediction-style future versus real schedule.
- The four illustrations form one continuous cause-and-effect story line.
- Storyboard prompts preserve the same narrator, fair, tent, wife, and exit path
  across frames.
- Generated illustrations contain no readable text, labels, captions, fair
  signs, station signs, fortune cards, or empty text boxes.
- The visual tone is playful and lightly mysterious, with no horror, witchcraft,
  or supernatural power display.
- The living-scene transfer uses a safe prediction-app or school-fair scenario
  where a vague prediction meets an ordinary event.
- Read-aloud includes the fair opening, crystal-ball sentence, `relation`,
  `will be arriving`, `The moment`, `As soon as`, and station urgency sentence.
- The outro includes `⓪ 跟读` before `① 生活场景`, with the concrete read-aloud
  steps.
