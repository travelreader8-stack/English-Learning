# Lesson 58 Plan - A blessing in disguise?

This is the source-of-truth design card for producing Lesson 58. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 58 assets.

## Basic Info

- Lesson: 58
- Title: `A blessing in disguise?`
- Chinese title: `是因祸得福吗？`
- Core bridge: `这一课不要讲成“恐怖树”的故事，也不要让孩子只记住 cursed tree 的吓人传说。它的核心是一个关于坏名声反而变成流量和收入的讽刺故事：小村 Frinley 有一棵据说 cursed 的树，报纸一报道，游客反而增加；村民想砍掉它，vicar 却拒绝，因为这棵树已经成了 useful source of income。中文可以用“塞翁失马，焉知非福”帮助孩子理解 blessing in disguise。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule and the section
responsibility rule in `LESSON_PRODUCTION_PLAN.md`.

- Keep the opening hook short.
  - Use 4-6 spoken lines only.
  - The hook should set up the paradox: a cursed tree sounds like bad luck, but
    it brings visitors and income.
  - Do not retell the whole passage before the four `retell` frames.
  - Do not list all legends, villagers, vicar, tourists, and final irony in the
    opening.
- Story spine must be Chinese-first.
  - Present the cursed-tree-and-tourism chain first as Chinese scene anchors.
  - Attach short English chunks after each Chinese anchor.
  - Do not use an all-English arrow chain as the main student-facing memory
    path.
- Avoid repeated script content across sections.
  - The four `retell` frames are the only section that should walk through the
    full plot in order.
  - The teacher-student dialogue must not repeat the retell narration.
  - The dialogue should deepen the theme: why a bad reputation can become a
    tourist attraction, and why `blessing in disguise` is close to `塞翁失马，焉知非福`.
  - Vocabulary and grammar sections should explain language tools, not tell the
    story again.
- The four illustrations must form one continuous story line.
  - They are not four isolated spooky-tree pictures.
  - Each frame should inherit visible consequences from the previous frame.
  - The same village, same church, same tree, same vicar, and same tourist flow
    should carry through the sequence.
  - The emotional line should accumulate: rumor -> publicity -> income debate
    -> tourists ignoring the curse.
  - Storyboard prompts should explicitly describe the causal relation between
    frames, so the images feel like four shots from one short film.
- Generated illustrations must be text-free.
  - No readable English or Chinese text inside images.
  - No readable newspaper headlines, village signs, church notices, carved
    names, warning signs, maps, labels, posters, captions, or fake lesson text.
  - No speech bubbles, UI panels, or empty text boxes inside images.
  - If the courseware needs words such as `cursed tree`, `source of income`,
    `vicar`, or `blessing in disguise`, render them as real UI text outside the
    image.
- Keep the tree story mysterious but not scary.
  - Do not make the lesson a horror story.
  - Do not show ghosts, monsters, corpses, graveyard terror, supernatural
    attacks, or people dying.
  - The final irony is that tourists are not struck down by sudden death.
  - Keep the mood as village satire with mild mystery, not fear.
- Keep respect for public places and nature.
  - The tourists in the text pick leaves and cut names on the tree-trunk, but
    the courseware should not encourage damaging trees.
  - Explain that this behavior belongs to the story's irony; in real life,
    people should not carve names into trees or damage public places.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, camera directions,
    or generated-image mechanics.
  - Storyboard prompts must not leak into spoken lesson content.

## Production Warnings

- Source-text issue:
  - The current lesson data in `web/data/lessons.json` contains a corrupted
    repeated sentence:
    `He has pointed out that the tree cut down, but so far he has refused.`
  - The corrected passage should read:
    `The vicar has been asked to have the tree cut down, but so far he has refused. He has pointed out that the tree is a useful source of income, as tourists have been coming from all parts of the country to see it.`
  - This affects displayed passage text, cloze text, passage audio, and any
    read-aloud sentence that uses this portion.
  - Because changing the passage data would touch `web/data/lessons.json`, a
    production thread should not silently edit the shared lesson text. If
    correction is required for production, stop and ask for approval or make the
    correction only after explicit approval.
- The title `A blessing in disguise?` should be taught through the Chinese
  idiom `塞翁失马，焉知非福`.
  - It means something that looks bad may turn out to be good.
  - The question mark matters: is the cursed tree really a blessing, or only a
    questionable benefit?
- `cursed tree` should not become a horror focus.
  - Teach `cursed` as "said to bring bad luck".
  - Keep the tone curious and ironic.
- `It is said that...` appears because these are reports or rumors.
  - The courseware should distinguish rumor from evidence.
- `claimed a number of victims` sounds dramatic.
  - Explain that villagers believe this; do not show victims or deaths in the
    images.
- `vicar` is culturally unfamiliar.
  - Explain as a church / parish priest, roughly a local church leader.
  - In a small English village, the church and vicar may be part of community
    life, not just a private religious detail.
- `source of income` is the practical reason the vicar refuses.
  - The tree brings tourists, and tourists bring money to the village.
- `cutting their names on the tree-trunk` is destructive behavior.
  - The text uses it to show tourists are not afraid.
  - Student-facing explanation should say this is not good real-life behavior.
- `struck down by sudden death` is ironic and exaggerated.
  - Do not make it frightening or literal in visuals.
  - The point is that the scary rumor has not come true for the tourists.

If production requires editing `web/data/lessons.json`, stop and ask for a
shared-data edit because it is outside the normal per-lesson write set.

## Lesson Positioning

Lesson 58 is a village-rumor satire. The tiny village of Frinley is said to
possess a `cursed tree`. A newspaper mentions the tree, and the number of
visitors to Frinley increases. The tree was planted near the church fifty years
ago, but only in recent years has it gained an evil reputation. People say that
anyone who touches it will have bad luck and anyone who picks a leaf will die.
Many villagers believe the tree has claimed victims. The vicar has been asked
to have the tree cut down, but he refuses. He points out that the tree is a
useful source of income because tourists come from all parts of the country to
see it. In spite of all the warnings, tourists pick leaves and carve names on
the trunk. So far, not one has been struck down by sudden death.

The courseware should make the student understand:

`小村 Frinley 据说有一棵 cursed tree -> 报纸提到后游客增加 -> 树 50 年前种在 church 附近 -> 只是近几年才有 evil reputation -> 据说摸树会倒霉、摘叶会死 -> 村民相信它已经害过一些人 -> 大家要求 vicar 砍掉树 -> vicar 到目前为止拒绝 -> 他指出树是 useful source of income -> 因为游客从全国各地来看它 -> 尽管有这些说法，游客仍然摘叶、在树干上刻名字 -> 到目前为止没有一个人突然死去`

The central bridge is:

`这不是“树真的可怕”的故事，而是“一个坏名声被传播以后，反而变成旅游吸引力和收入来源”的讽刺。`

## One-Sentence Hook

A village has a tree with a terrible reputation, but that bad reputation brings
so many visitors that it may be a blessing in disguise.

## Vivid Teaching Opening

The opening should establish the paradox quickly. It must be a short hook, not
a complete plot retelling. Keep it to 4-6 spoken lines so the first visual does
not stay on screen too long before the frame-by-frame retell begins.

Suggested teacher narration:

`如果一个地方有一棵 cursed tree，听起来像 bad luck。`

`可是有时候，坏名声反而会吸引人来围观。`

`这就像中文说的：塞翁失马，焉知非福。`

`Frinley 的这棵树被报纸报道后，游客反而越来越多。`

`今天先抓住一个问题：bad reputation 怎么会变成 source of income？`

Tone:

- Curious, lightly ironic, and not scary.
- Make the bad-luck rumor understandable, then quickly point to the income
  paradox.
- Do not retell the full village story in the hook.
- Save the detailed sequence for the four `retell` frames.

## Section Responsibility And Anti-Repetition Plan

Production must treat the lesson as several sections with distinct jobs.

### Opening

Job:

- Raise the central paradox.
- Explain `blessing in disguise` through `塞翁失马，焉知非福`.
- Keep the tone mysterious but safe.

Do not:

- Retell all events.
- Explain all vocabulary.
- Describe the final tourist behavior in detail.

### Four Retell Frames

Job:

- Walk through the plot in order.
- Help the student memorize the cursed-tree-and-tourism chain.
- Pair each visual event with Chinese anchors and English chunks.

Do not:

- Turn the retell into a long moral lecture.
- Overexplain superstition and evidence; save that for dialogue.

### Teacher-Student Dialogue

Job:

- Deepen the idea that rumor can become tourism.
- Discuss why `bad reputation` can produce `income`.
- Distinguish `It is said...` from proven truth.

Do not:

- Retell `newspaper -> villagers -> vicar -> tourists` again in order.
- Make the dialogue another plot summary.

### Vocabulary And Grammar

Job:

- Explain reporting language, rumor words, and present-perfect forms.
- Focus on `is said to`, `It is said that`, `has gained`, `have been coming`,
  and `In spite of`.

Do not:

- Restart the entire story through vocabulary examples.

### Practice And Transfer

Job:

- Move the idea into a modern child-understandable situation, such as a strange
  online rumor turning a small place into a tourist spot.

Do not:

- Encourage superstition, tree damage, or scary storytelling.

## Story Focus

The cursed-tree tourism chain is:

1. Frinley is a tiny village.
2. It is said to possess a `cursed tree`.
3. A newspaper mentions the tree.
4. The number of visitors increases.
5. The tree was planted near the church fifty years ago.
6. Only in recent years has it gained an evil reputation.
7. People say anyone who touches it will have bad luck.
8. People say anyone who picks a leaf will die.
9. Many villagers believe it has claimed victims.
10. The vicar is asked to have the tree cut down.
11. So far, he refuses.
12. He points out that the tree is a useful source of income.
13. Tourists come from all parts of the country.
14. In spite of the warnings, tourists pick leaves.
15. They cut their names on the tree-trunk.
16. So far, none has been struck down by sudden death.

The production should make the contrast visible:

`cursed tree` versus `source of income`.

`It is said...` rumor versus `So far...` evidence.

`evil reputation` versus `more visitors`.

## Chinese-First Story Spine For Courseware

Use this as the main student-facing story line.

1. Frinley 这个小村据说有一棵 cursed tree
   - `The tiny village of Frinley`
   - `is said to possess`
   - `a 'cursed tree'`
2. 因为报纸提到了这棵树，来 Frinley 的游客增加了
   - `Because the tree was mentioned`
   - `in a newspaper`
   - `the number of visitors`
   - `has now increased`
3. 这棵树 50 年前种在 church 附近
   - `The tree was planted`
   - `near the church`
   - `fifty years ago`
4. 但它只是近几年才有了 evil reputation
   - `only in recent years`
   - `has gained`
   - `an evil reputation`
5. 据说，如果有人摸这棵树，他会倒霉
   - `It is said that`
   - `if anyone touches the tree`
   - `he will have bad luck`
6. 如果有人摘一片叶子，他就会死
   - `if he picks a leaf`
   - `he will die`
7. 很多村民相信这棵树已经害过一些人
   - `Many villagers believe`
   - `the tree has already claimed`
   - `a number of victims`
8. 人们请求 vicar 让人把树砍掉
   - `The vicar has been asked`
   - `to have the tree cut down`
9. 但到目前为止，他拒绝了
   - `but so far`
   - `he has refused`
10. 他指出这棵树是一个有用的收入来源
    - `He has pointed out`
    - `the tree is`
    - `a useful source of income`
11. 因为游客从全国各地来看它
    - `as tourists`
    - `have been coming`
    - `from all parts of the country`
    - `to see it`
12. 尽管有这些说法，游客还是摘叶子、刻名字
    - `In spite of all that has been said`
    - `the tourists have been picking leaves`
    - `and cutting their names`
    - `on the tree-trunk`
13. 到目前为止，没有一个人突然死亡
    - `So far`
    - `not one of them`
    - `has been struck down`
    - `by sudden death`

Student memory prompt:

`先记中文反差线：Frinley 有 cursed tree -> 报纸报道后游客增加 -> 树在 church 附近已有 50 年 -> 近几年有 evil reputation -> 据说摸了倒霉、摘叶会死 -> 村民相信它害过人 -> 大家请 vicar 砍树 -> vicar 拒绝 -> 因为树成了 income source -> 游客从全国各地来 -> 还摘叶刻名字 -> 到目前为止没人突然死。再把英文短语挂到每个节点上。`

Do not show this as an all-English arrow chain in the student-facing courseware.

## Recitation Blocks

Break the passage into four Chinese-first recitation blocks:

### Block 1: 小村、怪树和游客增加

Chinese anchor:

`Frinley 这个小村据说有一棵 cursed tree。因为报纸提到了这棵树，现在来 Frinley 的游客增加了。`

English chunks:

- `The tiny village of Frinley`
- `is said to possess`
- `a 'cursed tree'`
- `Because the tree was mentioned`
- `in a newspaper`
- `the number of visitors`
- `has now increased`

Teaching point:

- This block establishes the paradox.
- Teach `is said to possess` as "people say it has".
- Connect `newspaper` to modern media spread.

### Block 2: 树的坏名声

Chinese anchor:

`这棵树 50 年前种在 church 附近，但只是近几年才得到了 evil reputation。据说摸树会倒霉，摘叶会死，很多村民相信它已经害过一些人。`

English chunks:

- `The tree was planted`
- `near the church`
- `fifty years ago`
- `only in recent years`
- `has gained an evil reputation`
- `It is said that`
- `if anyone touches the tree`
- `he will have bad luck`
- `if he picks a leaf`
- `he will die`
- `claimed a number of victims`

Teaching point:

- This block is rumor and reputation, not proof.
- `It is said that` should be highlighted as reported belief.
- Do not make this block frightening.

### Block 3: 村民想砍树，vicar 拒绝

Chinese anchor:

`人们请求 vicar 让人把树砍掉，但到目前为止他拒绝了。他指出这棵树是一个有用的收入来源，因为游客从全国各地来看它。`

English chunks:

- `The vicar has been asked`
- `to have the tree cut down`
- `but so far he has refused`
- `He has pointed out`
- `the tree is a useful source of income`
- `as tourists have been coming`
- `from all parts of the country`
- `to see it`

Teaching point:

- This block explains the `blessing in disguise`.
- `have the tree cut down` means arrange for someone to cut it down.
- `source of income` is the practical reason for refusing.
- Production must use the corrected source wording here.

### Block 4: 游客不怕传说，结尾反讽

Chinese anchor:

`尽管有这些说法，游客还是摘叶子、在树干上刻名字。到目前为止，还没有一个人突然死去。`

English chunks:

- `In spite of all that has been said`
- `the tourists have been picking leaves`
- `and cutting their names`
- `on the tree-trunk`
- `So far`
- `not one of them`
- `has been struck down`
- `by sudden death`

Teaching point:

- This block is the final irony.
- Tourists are not acting respectfully, but the curse is not visibly working.
- Explain real-life boundary: do not damage trees or public places.

## Modern Child Bridge

For a modern child, connect the text to media-driven curiosity and "check-in"
places:

- a strange place goes viral online
- a "haunted" or mysterious object attracts visitors
- a small village becomes famous after a news story
- a bad review or strange rumor unexpectedly brings attention
- people visit a place because it sounds unusual, not because it is beautiful

Suggested child-facing line:

`今天如果一个地方被短视频说成 mysterious 或 haunted，很多人反而会想去看看。课文里的 newspaper 就像早一点时代的传播工具：它把一个小村的怪传说变成了 tourist attraction。`

Do not replace the original story. Use the bridge to help the child understand
why a bad reputation can produce income.

## Idiom Bridge

### `A blessing in disguise`

Teach with:

`塞翁失马，焉知非福`

Student-facing explanation:

`A blessing in disguise 指的是：一件事刚开始看起来像 bad luck，后来却可能带来 good luck。Frinley 的 cursed tree 听起来是坏事，可游客增加、收入增加，所以它可能是 blessing in disguise。`

Important nuance:

- The question mark in the title matters.
- The tree brings income, but it also brings superstition, disrespectful tourist
  behavior, and a moral question.
- So the courseware should not say it is simply good. It is a funny, uneasy
  "maybe".

## Church And Vicar Bridge

Keep the cultural background short and concrete.

Student-facing explanation:

`vicar 是英国教区里的牧师。小村里的 church 往往不只是一个建筑，也和村庄公共生活有关。所以大家会去找 vicar，希望他处理教堂附近这棵有坏名声的树。`

Important boundaries:

- Do not turn the lesson into a religious lecture.
- Use the church / vicar background only to explain why the vicar is involved.
- Keep the focus on community, rumor, and income.

## Teacher-Student Dialogue Direction

The dialogue section must not repeat the plot. It should explore the paradox
and evidence question through a short conversation.

Recommended dialogue path:

1. Teacher asks:
   `如果一棵树被说成 cursed tree，它听起来是好事还是坏事？`
2. Student:
   `坏事。`
3. Teacher:
   `But what happened after the newspaper mentioned it?`
4. Student:
   `More visitors came.`
5. Teacher:
   `Right. A bad reputation became attention. Attention became tourism. Tourism became income. That is why we can say: a blessing in disguise.`
6. Teacher asks:
   `这些传说是真的被证明了吗，还是 just "It is said"?`
7. Student:
   `只是据说。`
8. Teacher:
   `Exactly. This lesson is funny because rumor is scary, but the evidence at the end is: so far, no tourist has died suddenly.`

Keep this section short. It should feel like a new thinking angle after retell,
not a second retell.

## Main Language Focus

### Reported Rumor: `is said to` And `It is said that`

Core expressions:

- `is said to possess`
- `It is said that if anyone touches the tree...`

Teaching:

- These expressions report what people say.
- They do not prove the rumor is true.
- This lesson is a good chance to teach the difference between rumor and
  evidence.

Student-facing idea:

`It is said 不是“我确定是真的”，而是“有人这么说”。这篇课文的幽默就藏在这里：传说很吓人，但证据并没有那么吓人。`

### Present Perfect For Reputation And Results

Core expressions:

- `has now increased`
- `has gained an evil reputation`
- `has already claimed`
- `has been asked`
- `has refused`
- `has pointed out`
- `has been struck down`

Teaching:

- The present perfect connects past events to the current situation.
- The village now has more visitors.
- The tree now has a reputation.
- The vicar has not yet agreed.
- So far, no tourist has died.

### Present Perfect Continuous

Core expressions:

- `tourists have been coming`
- `tourists have been picking leaves`
- `cutting their names`

Teaching:

- These actions have been happening repeatedly up to now.
- The continuous form helps the student feel ongoing tourist behavior.

### Causality And Contrast

Core expressions:

- `Because the tree was mentioned in a newspaper`
- `as tourists have been coming`
- `In spite of all that has been said`

Teaching:

- `Because` explains why visitors increased.
- `as` explains why the tree is income.
- `In spite of` shows tourists ignore the warnings.

### `have something done`

Core phrase:

`have the tree cut down`

Teaching:

- It means arrange for someone else to cut the tree down.
- It does not mean the vicar personally cuts the tree.

## Vocabulary Plan

Prioritize vocabulary that supports rumor, reputation, tourism, and the title.

### `blessing`

- Something good or fortunate.
- Pair with `blessing in disguise`.

### `disguise`

- A hidden or covered form.
- In the idiom, the good thing is hidden inside something bad.

### `tiny`

- Very small.
- Pair with `tiny village`.

### `possess`

- Own or have.
- In `is said to possess`, it means people say the village has the tree.

### `cursed`

- Said to bring bad luck.
- Keep it as rumor, not horror.

### `increase`

- Become larger in number.
- Pair with visitors increasing.

### `planted`

- Put a tree or plant into the ground.
- Pair with fifty years ago.

### `church`

- Religious building and village landmark.
- Keep cultural explanation brief.

### `evil`

- Very bad or harmful.
- Pair with `evil reputation`, not a proven fact.

### `reputation`

- What people think or say about someone or something.
- Key to the lesson: bad reputation attracts visitors.

### `claim`

- In this text: cause death or take victims.
- Dramatic and report-like; avoid graphic visuals.

### `victim`

- Someone harmed by something.
- In this lesson, villagers believe there were victims.

### `vicar`

- A church / parish priest.
- Explain as local church leader.

### `cut down`

- Cut a tree so it falls.
- Pair with `have the tree cut down`.

### `source`

- Where something comes from.
- Pair with `source of income`.

### `income`

- Money received.
- In this lesson, tourists bring money to the village.

### `tourist`

- A person who travels to visit a place.
- Pair with modern check-in / sightseeing.

### `tree-trunk`

- The main woody stem of a tree.
- Explain because children may know `tree` but not `trunk`.

### `struck down`

- Suddenly knocked down or killed.
- In this text, used ironically with `sudden death`.

## Storyboard Continuity Rule

The storyboard must be designed as four linked shots from the same short film.
This is a production requirement, not an optional style preference.

Continuity spine:

`quiet village tree -> newspaper attention -> vicar income debate -> tourists ignore curse`

Frame-to-frame continuity:

- Frame 1 establishes Frinley, the church, the tree, and the mild cursed
  reputation around it.
- Frame 2 keeps the same tree and church; after newspaper attention, tourists
  arrive and the village becomes busier.
- Frame 3 keeps the same village and tree; villagers ask the vicar to cut it
  down, while the vicar points to the visitors as income.
- Frame 4 keeps the same tree and tourist crowd; tourists pick leaves and carve
  names while nothing supernatural happens.

Prompt discipline:

- Do not generate four unrelated spooky-tree scenes.
- Do not change the tree's shape, church style, village layout, or vicar between
  frames.
- Do not show deaths, ghosts, monsters, graves, or horror imagery.
- Do not show readable newspaper headlines, carved names, church signs, maps, or
  labels.
- Do not make the tourist behavior look admirable; keep it mildly irresponsible
  and ironic.
- Keep the tree recognizable and central across all frames.

## Visual Direction

Overall visual style:

- Warm, realistic, child-friendly English village satire.
- Mild mystery, not horror.
- Same village church and same tree across frames.
- Same vicar across Frames 3-4 if visible.
- No readable text inside images.
- No labels, captions, speech bubbles, carved readable names, or UI-like boxes.

The visuals should help the student remember:

`cursed tree -> newspaper attention -> visitors increase -> villagers worry -> vicar refuses -> source of income -> tourists pick leaves and carve names -> no sudden death`

Avoid:

- horror lighting or frightening supernatural effects
- dead bodies, coffins, ghosts, monsters, or graveyard terror
- readable warnings, newspaper headlines, signs, or carved names
- tourists smiling proudly while damaging the tree
- disconnected tree portraits with no village or tourism story
- making the church or vicar the whole lesson focus

## Character And Object Consistency Brief

Use a consistent cursed tree:

`A large old tree near a small stone village church, thick twisting trunk, broad uneven branches, dark green leaves, slightly mysterious but healthy and non-horror appearance, with the same trunk shape and branch silhouette across all frames, no readable carvings or labels.`

Use a consistent vicar:

`A middle-aged village vicar with kind but practical expression, short grey hair, black clerical clothing with a simple white collar, average build, calm posture, standing near the church and tree, concerned but not frightened.`

Supporting elements:

- A tiny English village with stone cottages and a small church.
- Tourists in modern casual clothing, cameras or phones allowed but no readable
  screens.
- Villagers should look worried or doubtful, not terrified.
- The tree should remain the same recognizable object in all four frames.

## Four-Frame Storyboard Intent

### Frame 1: The Cursed Tree Near The Church

Purpose:

- Establish Frinley, the church, and the tree's reputation.
- Show the tree as mysterious but not horrifying.

Visual:

- A tiny English village with a small stone church.
- The old tree stands near the church.
- A few villagers look at it from a distance with worried curiosity.
- The tree looks unusual and memorable, but not scary.
- No readable signs, warnings, inscriptions, or labels.

Teaching content:

- `The tiny village of Frinley`
- `is said to possess`
- `a 'cursed tree'`
- `planted near the church`
- `evil reputation`

Continuity note:

- This frame establishes the village, church, and tree that must stay visually
  consistent later.

### Frame 2: Newspaper Attention And More Visitors

Purpose:

- Show publicity turning rumor into tourism.
- Make `the number of visitors has now increased` visible.

Visual:

- Same tree and church.
- More tourists arrive along the village road with cameras or phones.
- A villager holds or reads a folded newspaper without readable text.
- The village feels busier than Frame 1.
- No readable headlines, signs, or text.

Teaching content:

- `Because the tree was mentioned in a newspaper`
- `the number of visitors`
- `has now increased`
- `tourists have been coming`
- `from all parts of the country`

Continuity note:

- This frame should clearly show that attention from outside has changed the
  village.

### Frame 3: Villagers Ask The Vicar To Cut It Down

Purpose:

- Show the village debate.
- Make `source of income` understandable.

Visual:

- Same church, tree, villagers, and vicar.
- Villagers speak with the vicar near the tree, looking worried.
- Tourists are visible in the background taking interest in the tree.
- The vicar looks calm and practical, gesturing toward the visitors or village
  activity.
- No readable petitions, signs, or written notices.

Teaching content:

- `The vicar has been asked`
- `to have the tree cut down`
- `but so far he has refused`
- `the tree is a useful source of income`
- `as tourists have been coming`

Continuity note:

- This frame should feel like the practical response to the visitor increase in
  Frame 2.

### Frame 4: Tourists Ignore The Curse

Purpose:

- Show the final irony.
- Make the contrast between warning and evidence visible.

Visual:

- Same tree near the same church.
- Tourists crowd around the tree; one gently picks a leaf, another pretends to
  carve but no readable names appear.
- The vicar or villagers watch with mixed concern and disbelief.
- Nobody collapses; the mood is ironic and slightly comic.
- No readable carvings, text, signs, or frightening death imagery.

Teaching content:

- `In spite of all that has been said`
- `tourists have been picking leaves`
- `cutting their names on the tree-trunk`
- `So far`
- `not one of them`
- `has been struck down by sudden death`

Continuity note:

- This frame should be the payoff of the whole story: scary rumor, fearless
  tourists, no sudden death.

## Script And Courseware Presentation

The script should follow this pacing:

1. Short hook: `塞翁失马，焉知非福`, cursed tree, visitors, income paradox.
2. Four `retell` frames:
   - Frame 1: Frinley, church, cursed tree reputation.
   - Frame 2: newspaper mention and increased visitors.
   - Frame 3: vicar refuses to cut down the income-producing tree.
   - Frame 4: tourists ignore warnings; no sudden death.
3. Teacher-student dialogue:
   - Do not retell the plot.
   - Discuss why bad reputation can become attention and income.
   - Distinguish rumor language from evidence.
4. Passage normal reading.
5. Three vocabulary blocks.
6. Grammar board.
7. You Too living-scene transfer.
8. Outro with the full practice order.

The opening must not contain the full story chain. Do not say all of:

`cursed tree -> newspaper -> visitors increase -> planted near church -> evil reputation -> touch means bad luck -> pick leaf means death -> villagers ask vicar -> vicar refuses -> tourists pick leaves -> no sudden death`

inside the hook. Save that sequence for the four retell frames.

The teacher-student dialogue must not contain the full story chain either. It
should be a theme discussion after the student already understands the events.

Student-facing Chinese should feel like a guided paradox:

- `先看为什么这棵树听起来像坏事。`
- `再看 newspaper 怎样让坏名声变成注意力。`
- `然后看 vicar 为什么不愿砍掉它。`
- `最后看游客为什么让传说显得更讽刺。`

## Read-Aloud And Pronunciation Direction

Choose 5-8 high-value sentences for read-aloud. Suggested targets:

1. `The tiny village of Frinley is said to possess a 'cursed tree'.`
   - Focus: `is said to possess`, `cursed tree`.
2. `Because the tree was mentioned in a newspaper, the number of visitors to Frinley has now increased.`
   - Focus: cause and result, `number of visitors`, `increased`.
3. `The tree was planted near the church fifty years ago, but it is only in recent years that it has gained an evil reputation.`
   - Focus: contrast, `planted`, `gained an evil reputation`.
4. `It is said that if anyone touches the tree, he will have bad luck; if he picks a leaf, he will die.`
   - Focus: `It is said that`, conditional rhythm.
5. `The vicar has been asked to have the tree cut down, but so far he has refused.`
   - Focus: present perfect, `have the tree cut down`, `so far`.
6. `He has pointed out that the tree is a useful source of income, as tourists have been coming from all parts of the country to see it.`
   - Focus: corrected source sentence, `source of income`, present perfect
     continuous.
7. `In spite of all that has been said, the tourists have been picking leaves and cutting their names on the tree-trunk.`
   - Focus: contrast, ongoing behavior, `tree-trunk`.
8. `So far, not one of them has been struck down by sudden death!`
   - Focus: ironic ending, `So far`, `not one`, `struck down`.

Read-aloud feedback should reward:

- clear grouping of reported-rumor sentences
- natural contrast between scary rumor and ironic evidence
- correct stress on `so far`, `not one`, and `source of income`
- careful pronunciation of `blessing`, `disguise`, `Frinley`, `possess`,
  `cursed`, `reputation`, `vicar`, `source`, and `income`

## Living-Scene Exercise Direction

Use a modern safe transfer that preserves the pattern:

`bad reputation -> attention -> visitors / income -> evidence question`

Recommended scene:

`The Strange Little Cafe`

Chinese setup:

`一个小咖啡店被网上说成“最奇怪的咖啡店”，因为门口有一把看起来很旧的椅子，据说坐了会倒霉。这个名声听起来不好，但越来越多人来拍照打卡，咖啡店的生意反而变好了。店主说这把椅子成了 source of income。到目前为止，也没有人真的因为坐椅子而倒霉。`

Target transfer:

- `is said to possess`
- `was mentioned online`
- `the number of visitors has increased`
- `has gained a strange reputation`
- `It is said that`
- `source of income`
- `In spite of`
- `So far, not one...`

This keeps the lesson's ironic structure without superstition-heavy or scary
content.

## Suggested You Too Scene

Scene title:

`The Strange Little Cafe`

Role:

- Student tells a short story about a strange rumor making a place popular.
- Parent/teacher asks guiding questions.

Expected student output shape:

1. `The tiny cafe is said to possess a strange old chair.`
2. `Because the chair was mentioned online, the number of visitors has increased.`
3. `It is said that if anyone sits on the chair, he will have bad luck.`
4. `The owner has been asked to remove the chair, but so far he has refused.`
5. `He has pointed out that the chair is a useful source of income.`
6. `In spite of all that has been said, tourists have been taking photos of it.`
7. `So far, not one of them has had bad luck.`

Keep the exercise short. The goal is transfer of rumor, attention, income, and
ironic evidence, not a new scary story.

## Extension Practice Direction

Lesson 58 extension production should be extension-only if the main lesson
assets already exist. Create `web/data/extension/lesson_58.json` and register
`58` in `web/data/extension/index.json`. Do not regenerate script, audio,
timeline, read-aloud data, or storyboard images.

### Extension Reading

Use an original rumor-to-tourism passage about a small public place or local
business that becomes famous online because of a silly unlucky reputation. The
object should NOT be a cursed tree, a churchyard tree, or a near-copy of Frinley.
Make `blessing in disguise` concrete: a bad reputation unexpectedly brings
visitors and income, but people should still respect the place and avoid
damaging it.

Suggested title: `The Unlucky Bench`

Recommended word bank: `blessing in disguise`, `is said to`, `possess`,
`unlucky`, `reputation`, `visitor`, `remove`, `source of income`,
`in spite of`, `so far`.

The 5 reading questions should test:

1. what place or object had a strange reputation
2. why visitors increased after the rumour spread
3. what people said would happen to anyone who used it
4. why the owner or manager refused to remove it
5. how the evidence undercuts the rumour

### Sentence Writing

Use 5 patterns:

1. `is said to possess ...`
   - Source: `The tiny village of Frinley is said to possess a 'cursed tree'.`
   - Focus: reporting a rumour.
   - Must include: `is said to possess`
2. `Because ..., the number of ... has increased`
   - Source: `Because the tree was mentioned in a newspaper, the number of visitors has now increased.`
   - Focus: cause and result with present perfect.
   - Must include: `the number of` and `has increased`
3. `It is said that if ..., ...`
   - Source: `It is said that if anyone touches the tree, he will have bad luck.`
   - Focus: reporting a conditional belief.
   - Must include: `It is said that if`
4. `has pointed out that ...`
   - Source: `He has pointed out that the tree is a useful source of income.`
   - Focus: giving a practical argument against panic.
   - Must include: `has pointed out that`
5. `So far, not one of them has ...`
   - Source: `So far, not one of them has been struck down by sudden death.`
   - Focus: evidence up to now.
   - Must include: `So far, not one of them has`

## Chinese-To-English Exercise Direction

The translation practice should reinforce the rumor-to-income chain and the
present-perfect structures.

Suggested chunk logic:

1. 据说 Frinley 这个小村拥有一棵 cursed tree；报纸提到它之后，游客数量增加了。
2. 这棵树 50 年前种在 church 附近，但只是近几年才得到了 evil reputation。
3. 据说任何人摸了这棵树都会倒霉；如果摘一片叶子，就会死。
4. 很多村民相信这棵树已经害过一些人，于是请求 vicar 叫人把树砍掉。
5. 但到目前为止，vicar 拒绝了；他指出这棵树是一个有用的 income source。
6. 尽管有这些说法，游客仍然摘叶子、在树干上刻名字；到目前为止，没有一个人突然死去。

High-value expressions to preserve:

- `The tiny village of Frinley`
- `is said to possess`
- `a 'cursed tree'`
- `was mentioned in a newspaper`
- `the number of visitors`
- `has now increased`
- `was planted near the church`
- `has gained an evil reputation`
- `It is said that`
- `will have bad luck`
- `has already claimed a number of victims`
- `The vicar has been asked`
- `to have the tree cut down`
- `so far he has refused`
- `a useful source of income`
- `tourists have been coming`
- `In spite of all that has been said`
- `tree-trunk`
- `has been struck down by sudden death`

If manual chunks are added to `web/data/lessons.json`, Chinese and English chunk
counts must match. Otherwise rely on the frontend fallback.

## Grammar Board

### 1. `is said to`

Board idea:

`The village is said to possess a cursed tree.`

Chinese anchor:

`据说这个村子有一棵被诅咒的树。`

Teaching:

- Reports what people say.
- Does not prove the claim.

### 2. `It is said that`

Core sentence:

`It is said that if anyone touches the tree, he will have bad luck.`

Teaching:

- A formal way to introduce rumor.
- Good for discussing hearsay versus evidence.

### 3. Present Perfect: Results Up To Now

Board idea:

`has increased / has gained / has refused / has pointed out / has been struck down`

Examples:

- `the number of visitors has now increased`
- `it has gained an evil reputation`
- `so far he has refused`
- `not one of them has been struck down`

Chinese anchor:

`过去发生的事影响到现在：游客变多了，名声形成了，牧师到现在还没同意，目前还没人死。`

### 4. Present Perfect Continuous

Core phrases:

- `tourists have been coming`
- `tourists have been picking leaves`
- `cutting their names`

Teaching:

- Shows repeated or continuing behavior up to now.
- Good for describing ongoing tourist actions.

### 5. `have something done`

Core phrase:

`have the tree cut down`

Teaching:

- Arrange for someone else to do it.
- The villagers want the vicar to arrange the cutting down.

### 6. `only in recent years that...`

Core sentence:

`it is only in recent years that it has gained an evil reputation`

Teaching:

- Emphasizes timing.
- The tree is old, but the bad reputation is recent.

### 7. `In spite of`

Core phrase:

`In spite of all that has been said`

Teaching:

- Means despite all the warnings and rumors.
- It introduces the tourists' fearless behavior.

### 8. `So far`

Board idea:

`So far + present perfect`

Example:

- `So far, not one of them has been struck down by sudden death.`

Chinese anchor:

`到目前为止，还没有。`

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

`这一课先把“塞翁失马，焉知非福”的反差线背熟：cursed tree -> newspaper mention -> visitors increase -> evil reputation -> villagers ask vicar to cut it down -> vicar refuses -> useful source of income -> tourists ignore the warnings -> so far no sudden death。跟读时注意 It is said, has gained, have been coming, In spite of, So far；生活场景里，用 a strange rumor became a source of income 讲一个现代“坏名声变打卡点”的小故事。`

## Acceptance Criteria

- The extension practice follows the `Extension Practice Direction` above,
  creates `web/data/extension/lesson_58.json`, and registers the lesson in
  `web/data/extension/index.json`.
Lesson 58 is ready for production when:

- The opening hook is 4-6 spoken lines and does not retell the whole passage.
- The lesson is framed as bad reputation becoming tourism and income, not a
  horror story.
- The student-facing story spine is Chinese-first.
- The course sections have distinct jobs and do not repeat the same full story
  script.
- The teacher-student dialogue does not repeat the retell sequence; it deepens
  the `blessing in disguise` / rumor-versus-evidence idea.
- `A blessing in disguise?` is explained through `塞翁失马，焉知非福`, with the
  question mark preserved as nuance.
- The corrupted source sentence in `web/data/lessons.json` is explicitly handled
  before passage display, cloze use, passage audio, or read-aloud production.
- `cursed`, `evil reputation`, `claimed victims`, and `struck down by sudden
  death` are taught as reported rumor / ironic language, not horror content.
- `vicar` and `church` are explained briefly as English village / church
  background without turning into a religious lecture.
- `source of income` is connected to tourist visits and local money.
- Tourist leaf-picking and name-carving are shown as story irony, not encouraged
  as real-life behavior.
- The four illustrations form one continuous cause-and-effect story line.
- Storyboard prompts preserve the same tree, church, village, and vicar across
  frames.
- Generated illustrations contain no readable text, labels, captions, newspaper
  headlines, carved names, warning signs, or empty text boxes.
- The visual tone is mildly mysterious and satirical, with no ghosts, deaths,
  monsters, or frightening supernatural effects.
- The living-scene transfer uses a modern strange-rumor / check-in location
  scenario without encouraging superstition or public-place damage.
- Read-aloud includes `is said to possess`, `It is said that`, `have the tree
  cut down`, corrected `source of income`, `In spite of`, and `So far`.
- The outro includes `⓪ 跟读` before `① 生活场景`, with the concrete read-aloud
  steps.
