# Lesson 74 Plan - Out of the limelight

This is the source-of-truth design card for producing Lesson 74. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 74 assets.

## Basic Info

- Lesson: 74
- Title: `Out of the limelight`
- Chinese title: `舞台之外`
- Core bridge: `名人有时也想离开聚光灯，像普通人一样安静休息；但这篇的笑点是他们伪装得太成功，等他们想用明星身份解释时，反而没人相信。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule and the section
responsibility rule in `LESSON_PRODUCTION_PLAN.md`.

- Keep the opening hook short.
  - Use 4-6 spoken lines only.
  - The hook should ask: what happens if famous people hide so well that nobody
    believes they are famous?
  - Do not retell the full picnic-and-sheriff story before the four `retell`
    frames.
- Teach `limelight` as the core metaphor.
  - Original sense: strong stage light/public spotlight.
  - Modern sense: public attention, media attention, fan attention.
  - `out of the limelight` means away from attention, trying to be private.
- Connect fame with privacy.
  - Famous actors, athletes, influencers, and creators may enjoy recognition
    but also need quiet ordinary time.
  - Do not make fans or newspaper men look evil; the issue is attention and
    privacy.
  - Keep the tone comic rather than bitter.
- Make the reversal explicit.
  - The actors take precautions so that no one should recognize them.
  - Their disguises are too perfect.
  - When they finally reveal their names, the sheriff thinks they are lying.
- Teach rules and public space.
  - `No Camping` is not a small detail; it creates the conflict.
  - Being famous does not give anyone permission to ignore public notices.
  - The sheriff is rude, but he is enforcing a rule.
- Explain unfamiliar cultural terms.
  - `sheriff` is a local law-enforcement officer in some English-speaking
    settings.
  - `notice` means a written sign or public announcement.
  - `film fans` are fans of film actors; connect to modern fans/followers.
- Story spine must be Chinese-first.
  - Present the fame-privacy-disguise-reversal chain in Chinese first.
  - Attach short English chunks after each Chinese anchor.
  - Do not show an all-English plot chain as the main memory path.
- Avoid repeated script content across sections.
  - The four `retell` frames are the only section that should walk through the
    passage in order.
  - The teacher-student dialogue should deepen limelight, privacy, public
    rules, and mistaken identity.
  - Vocabulary and grammar sections should explain language tools, not retell
    the whole story again.
- Generated illustrations must be text-free.
  - No readable English or Chinese text inside images.
  - No readable `No Camping` notice, actor names, road signs, bus markings,
    newspaper headlines, film posters, fan signs, sheriff badges, vehicle
    plates, speech bubbles, UI panels, or fake lesson text.
  - Render words such as `limelight`, `precautions`, `disguises`,
    `No Camping`, `sheriff`, `notice`, and `sneer` as real UI text outside the
    image.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, camera directions,
    or generated-image mechanics.
  - Storyboard prompts must not leak into spoken lesson content.

## Production Warnings

- Known source-data issues in `web/data/lessons.json` should be surfaced before
  production edits shared data.
  - English says `An ancient bus`, but Chinese currently says `一辆古旧的汽车`.
  - It should be `一辆破旧的公共汽车` or `一辆旧巴士`.
  - Chinese currently has a stray opening quote before `此时，另外两位演员...`:
    `？”“此时，另外两位演员...`
  - It should remove the extra quote:
    `？”此时，另外两位演员...`
  - If production is allowed to patch shared data, make only these exact
    Chinese corrections and do not rewrite the passage.
  - If production is not allowed to patch shared data, stop and ask instead of
    building finished assets on top of visible source issues.
- `舞台之外` can remain as the Chinese title, but production should explain the
  metaphor as `走出聚光灯 / 离开公众视线`.
- Do not make fame look like a superpower.
  - The actors' fame does not let them ignore a `No Camping` rule.
  - The lesson should end with comic embarrassment, not celebrity privilege.
- Do not make the sheriff a villain.
  - He is angry and sarcastic, but the rule is real.
  - Keep his tone as blunt/rude local authority, not threat or violence.
- Do not overdo celebrity culture.
  - The modern bridge can mention celebrities, influencers, fans, paparazzi,
    and followers, but the story remains a short picnic comedy.
- Do not put readable signs in images.
  - The `No Camping` notice should be shown as a blank notice board or a simple
    non-readable pictogram inside the image.
  - The actual words `No Camping` should appear in UI/script text, not inside
    the generated picture.

## Lesson Positioning

Lesson 74 is a fame-and-privacy comedy about famous actors who want to escape
public attention. They arrive in an ancient bus near a dry river bed. They are
dressed in dark glasses and old clothes because they have taken precautions so
that no one should recognize them. At first, this seems to work beautifully:
there are no newspaper men and no film fans. The actors settle down for a
picnic in a shady spot. Then an angry sheriff appears and tells them to leave
because a notice says `No Camping`. When Rockwall Slinger tries to explain that
he and Merlin Greeves are famous actors, the sheriff refuses to believe him.
He sneers and mockingly claims to be Brinksley Meers and Gloria Gleam himself.
The final joke is that the actors wanted to be out of the limelight, but their
disguises work so well that their real famous identities become useless.

The courseware should make the student understand:

`一群著名演员想躲开记者和影迷 -> 他们戴墨镜、穿旧衣服，坐破旧巴士出门 -> 他们特别小心不让人认出来 -> 他们以为干河床边很适合野餐 -> 没有记者，没有影迷 -> 另外两位演员把食物篮放到树荫下 -> 大家刚舒服下来，一个愤怒的 sheriff 出现 -> sheriff 指着 No Camping notice 让他们离开 -> Rockwall 自曝明星身份求情 -> sheriff 以为他们在撒谎，用讥笑说自己也是明星 -> 伪装太成功，反而没人相信他们`

The central bridge is:

`今天的孩子很容易理解“被关注”和“想安静”的矛盾：明星、博主、运动员、校园红人都可能想 out of the limelight。但公众空间也有规则，身份不能替代规则。`

## One-Sentence Hook

Some famous actors hide from the public so perfectly that when they reveal who
they are, the sheriff thinks they are joking.

## Vivid Teaching Opening

The opening should set up fame, privacy, and the reversal quickly. It must be a
short hook, not a complete retelling.

Suggested teacher narration:

`如果一个明星不想被认出来，会怎么做？`

`戴墨镜，穿旧衣服，坐一辆破旧巴士，远离记者和粉丝。`

`可是如果伪装太成功，会发生什么？`

`这课里，演员们真的没人认出来；等他们想证明自己是明星时，反而没人信。`

`今天我们学 out of the limelight：离开聚光灯，也可能带来一个笑话。`

Tone:

- Light, witty, and modern.
- Let the privacy issue feel human, not glamorous.
- Save the full sequence for the four `retell` frames.

## Section Responsibility And Anti-Repetition Plan

### Opening

Job:

- Introduce `limelight` as public attention.
- Raise the comic question of disguise working too well.
- Connect fame and privacy to modern life.

Do not:

- Retell the full picnic conflict.
- Start with a long history of stage lighting.
- Make the sheriff confrontation sound threatening.

### Four Retell Frames

Job:

- Walk through the passage in order.
- Make the disguise-to-misrecognition chain easy to remember.
- Use Chinese anchors and short English chunks.

Do not:

- Put readable signs, names, bus markings, or `No Camping` text inside images.
- Make the actors glamorous in every frame; their disguise should look
  deliberately ordinary.
- Show fans or reporters as aggressive.

### Teacher-Student Dialogue

Job:

- Deepen four ideas:
  1. what `limelight` means in modern English
  2. why famous people may want privacy
  3. why disguise can be "too perfect"
  4. why public rules still apply to famous people
- Compare:
  `in the limelight` versus `out of the limelight`
  `recognize` versus `disguise`
  `identity` versus `public rule`
  `explaining` versus `name-dropping`

Do not:

- Re-list the full plot.
- Turn the lesson into celebrity gossip.
- Present fame as an excuse to ignore rules.

### Vocabulary And Grammar

Job:

- Explain words and structures that make the lesson work:
  `limelight`, `ancient bus`, `a party of`, `actors and actresses`,
  `dark glasses`, `precautions`, `recognize`, `disguises`, `film fans`,
  `shady spot`, `sheriff`, `notice`, `No Camping`, `in case`, `sneer`.
- Teach participle opener:
  `Dressed in dark glasses and old clothes...`
- Teach purpose:
  `so that no one should recognize them`.
- Teach discovery and reversal:
  `as they soon discovered`, `disguises can sometimes be too perfect`.
- Teach sharp spoken phrases:
  `It couldn't be better`, `don't be too hard on us`,
  `in case you can't read`, `with a sneer`.

Do not:

- Reduce the lesson to a celebrity vocabulary list.
- Skip `a party of`, because it is easy to mistake for a celebration.
- Skip `in case`, because it carries the sheriff's sarcasm.

### Practice And Living-Scene Transfer

Job:

- Move the language into a modern child-understandable situation:
  a school drama club, a local student celebrity, a popular livestreamer, or a
  sports team member tries to rest quietly at a park but forgets a rule.
- Let the student say:
  `I wanted to stay out of the limelight.`
  `I took precautions so that no one would recognize me.`
  `My disguise was too perfect.`
  `There was a notice that said...`
  `The rule still applies to me.`

Do not:

- Make the exercise about cheating or privilege.
- Ask the child to impersonate real celebrities.
- Make privacy mean ignoring other people's rules.

## Cultural And Background Bridge

The lesson needs a compact modern bridge:

1. Limelight
   - `limelight` once referred to a bright stage light.
   - Now it often means public attention.
   - `out of the limelight` means away from fame, media, fans, or public
     attention.
2. Famous actors and privacy
   - Actors may be recognized by newspaper men and film fans.
   - Modern equivalents include fans, followers, paparazzi, livestream viewers,
     and social media attention.
   - Wanting privacy is normal; it is not rejecting people.
3. Disguise
   - The actors use dark glasses and old clothes to avoid recognition.
   - The joke is that the disguise works too well.
   - This is a "be careful what you wish for" reversal.
4. Picnic versus camping
   - The actors think they are having a picnic.
   - The sheriff points to a `No Camping` notice.
   - The student should understand that public places often have rules.
5. Sheriff
   - A sheriff is a local law-enforcement officer in some English-speaking
     places, especially in the United States.
   - Here he speaks bluntly and sarcastically.
6. Identity and rules
   - Saying "I am famous" does not cancel a public rule.
   - This makes the ending more modern: status does not replace responsibility.

## Visual Direction

The four illustrations should form one continuous fame-and-privacy comedy.

### Visual Consistency

Use a consistent classic film-star picnic visual motif:

- same group of famous actors and actresses throughout
- deliberately ordinary disguises: dark glasses, old clothes, plain hats,
  understated posture
- old/ancient bus as the arrival vehicle
- dry river bed, trees, and shady picnic spot
- sheriff as a stern local authority figure
- blank notice board or non-readable pictogram for the `No Camping` rule

Characters:

- Gloria Gleam: famous actress, disguised but still elegant, relaxed at first.
- Brinksley Meers: famous actor, disguised and confident.
- Rockwall Slinger: actor who tries to use his real identity to explain.
- Merlin Greeves: actor beside Rockwall, awkward when the sheriff does not
  believe them.
- Sheriff: stern, sarcastic, local authority, not violent.

Do not put readable text in images.

### Frame 1 - Out Of The Limelight

Scene purpose:

- Establish famous actors trying to disappear from public attention.

Visual:

- An old bus stops near a dry river bed.
- A group of actors in dark glasses and old clothes gets off quietly.
- They look relieved to be away from cameras and fans.
- No readable bus markings or signs.

Student-facing anchor:

`一群著名演员坐破旧巴士来到干河床边，戴墨镜、穿旧衣服，想躲开公众视线。`

English chunks:

- `An ancient bus`
- `a party of famous actors and actresses`
- `Dressed in dark glasses and old clothes`
- `taken special precautions`
- `so that no one should recognize them`

### Frame 2 - A Perfect Disguise Picnic

Scene purpose:

- Show the actors enjoying privacy and the "too perfect" disguise setup.

Visual:

- The actors settle into a shady picnic spot under trees.
- Two actors carry large food baskets.
- They look happy that no reporters or film fans are nearby.
- Keep the scene quiet and comic.

Student-facing anchor:

`他们觉得这里野餐再好不过了：没有记者，没有影迷；伪装似乎非常成功。`

English chunks:

- `disguises can sometimes be too perfect`
- `a wonderful place for a picnic`
- `It couldn't be better`
- `No newspaper men, no film fans`
- `a shady spot`

### Frame 3 - The Sheriff And The Notice

Scene purpose:

- Introduce the rule conflict.

Visual:

- A stern sheriff arrives and points toward a blank notice board or
  non-readable camping-rule pictogram.
- The actors look surprised and uncomfortable.
- The picnic baskets are visible under the trees.

Student-facing anchor:

`大家刚坐舒服，一个愤怒的 sheriff 出现，指着告示说这里 No Camping。`

English chunks:

- `a stranger appeared`
- `He looked very angry`
- `Now you get out of here`
- `I'm sheriff here`
- `Do you see that notice?`
- `in case you can't read`

### Frame 4 - Too Famous To Be Believed

Scene purpose:

- Land the final joke: their real names do not help because the disguise worked
  too well.

Visual:

- Rockwall and Merlin try to explain who they are.
- The sheriff responds with a sarcastic sneer.
- Gloria and Brinksley react in embarrassed surprise.
- Keep the ending comic, not hostile.

Student-facing anchor:

`演员们自报姓名，想让 sheriff 别太严厉；可他以为他们在撒谎，还讥讽地冒充另外两位明星。`

English chunks:

- `don't be too hard on us`
- `I'm Rockwall Slinger`
- `this is Merlin Greeves`
- `with a sneer`
- `I'm Brinksley Meers`
- `get out of here fast`

## Storyboard Requirements

The storyboard JSON must include:

- `visual_consistency`
  - Mention the same actors, actresses, old bus, dry river bed, picnic baskets,
    and sheriff across the four frames.
  - Mention the disguise details: dark glasses, old clothes, deliberately
    ordinary look.
  - Mention the blank/non-readable notice board for the `No Camping` rule.
  - Mention that images must contain no readable signs, actor names, bus
    markings, newspaper text, film posters, notices, badges, captions, or text.
- 4 frames only.
- Each frame prompt should:
  - maintain the same actor group and picnic location
  - keep the comedy of privacy, disguise, and mistaken identity
  - avoid celebrity glamour overpowering the disguise
  - avoid threatening law-enforcement imagery
  - avoid readable environmental text

## Teacher-Student Dialogue Direction

The dialogue should not retell the whole passage. It should deepen the modern
meaning.

Suggested dialogue spine:

1. Student asks what `limelight` means.
   - Teacher: it comes from stage light and now means public attention.
2. Student asks why famous actors want to hide.
   - Teacher: fame brings fans and reporters, but people also need privacy.
3. Student asks why the disguise is "too perfect".
   - Teacher: it works when they want privacy, but fails when they need their
     identity to be believed.
4. Student asks why the sheriff does not care who they are.
   - Teacher: he thinks they are lying, and the public rule still matters.
5. Teacher connects to the student:
   - Whether you are famous, popular in class, or ordinary, rules in public
     spaces still apply.

The dialogue should leave the student feeling:

- I understand `in/out of the limelight`.
- I know why famous people may want privacy.
- I understand the disguise reversal.
- I can explain `No Camping`, `sheriff`, `notice`, and `sneer`.
- I understand that identity does not cancel rules.

## Vocabulary Direction

Use exactly 3 formal vocabulary blocks.

Recommended formal vocab blocks:

1. `limelight`
   - Explain as public attention or spotlight.
   - Connect `out of the limelight` to wanting privacy.
   - Give modern examples: actor, athlete, influencer, school performer.
2. `precaution`
   - Explain as something you do in advance to avoid a problem.
   - Connect to `taken special precautions so that no one should recognize
     them`.
   - Give examples: wearing a mask in dust, saving a file, checking weather.
3. `disguise`
   - Explain as clothes or appearance used to hide who someone is.
   - Connect to dark glasses and old clothes.
   - Highlight the joke: disguises can be too perfect.

Supporting words and phrases:

- `ancient bus`
- `a party of`
- `actors and actresses`
- `dark glasses`
- `old clothes`
- `recognize`
- `film fans`
- `newspaper men`
- `picnic`
- `shady spot`
- `make themselves comfortable`
- `sheriff`
- `notice`
- `No Camping`
- `in case`
- `don't be too hard on us`
- `sneer`

Useful Chinese explanations:

- `limelight`: 聚光灯；引申为公众关注。
- `out of the limelight`: 离开聚光灯，离开公众视线。
- `ancient bus`: 破旧的公共汽车/旧巴士，不是古代汽车。
- `a party of`: 一群人，不是派对。
- `precautions`: 预防措施，提前做的防备。
- `recognize`: 认出。
- `disguise`: 伪装、装扮。
- `film fans`: 影迷。
- `shady spot`: 树荫处、阴凉处。
- `sheriff`: 治安官/地方执法官。
- `notice`: 告示、布告。
- `in case you can't read`: 免得你看不懂，带讽刺语气。
- `with a sneer`: 带着冷笑/讥笑。

## Grammar Handling

Do not start from a participle table. Start from the disguise setup:

`他们穿成这样，是为了不被认出来；结果伪装真的成功了，甚至成功过头。`

### Job 1 - Participle Opener For Appearance

Key line:

- `Dressed in dark glasses and old clothes, they had taken special precautions...`

Teaching point:

The opening phrase describes their appearance before the main action. It is a
compact way to set the scene.

Student explanation:

`Dressed in... 放在句首，意思是“他们穿戴着……”。它先告诉我们他们的伪装样子，再说他们采取了特别的预防措施。`

### Job 2 - Purpose With So That

Key line:

- `so that no one should recognize them`

Teaching point:

`so that` explains purpose. The actors take precautions for one purpose: not to
be recognized.

Student explanation:

`so that 表示“为了……”。他们戴墨镜、穿旧衣服，不是随便穿，而是为了 no one should recognize them。`

### Job 3 - Discovery And Reversal

Key lines:

- `as they soon discovered`
- `disguises can sometimes be too perfect`

Teaching point:

`as they soon discovered` prepares the reader for a lesson or reversal. `too
perfect` sounds positive, but here it creates the problem.

Student explanation:

`too perfect 很好玩：伪装太成功，成功到 sheriff 完全不相信他们是真明星。这里就是文章的反转。`

### Job 4 - Sarcastic Spoken English

Key lines:

- `It couldn't be better`
- `in case you can't read`
- `with a sneer`
- `Oh, is it?`

Teaching point:

The passage uses short spoken phrases to show attitude. `in case you can't
read` and `Oh, is it?` are not neutral; they carry sarcasm.

Student explanation:

`It couldn't be better 是“再好不过了”。但 sheriff 的 in case you can't read 和 Oh, is it? 带冷笑，不是真的客气发问。英语里语气很重要。`

Use a compact display:

| Story meaning | English |
| --- | --- |
| 一群著名演员 | `a party of famous actors and actresses` |
| 戴墨镜、穿旧衣服 | `Dressed in dark glasses and old clothes` |
| 采取特别预防措施 | `taken special precautions` |
| 为了没人认出他们 | `so that no one should recognize them` |
| 伪装有时太完美 | `disguises can sometimes be too perfect` |
| 再好不过了 | `It couldn't be better` |
| 树荫下的地方 | `a shady spot` |
| 别对我们太严厉 | `don't be too hard on us` |
| 带着冷笑 | `with a sneer` |

## Read-Aloud Direction

Create `web/data/read_aloud/lesson_74.json` with 5-8 high-value sentences.

Recommended sentences:

1. `An ancient bus stopped by a dry river bed and a party of famous actors and actresses got off.`
   - Focus: `ancient bus`, `a party of`, story opening.
2. `Dressed in dark glasses and old clothes, they had taken special precautions so that no one should recognize them.`
   - Focus: participle opener and purpose with `so that`.
3. `But as they soon discovered, disguises can sometimes be too perfect.`
   - Focus: reversal sentence and comic tone.
4. `'It couldn't be better, Gloria,' Brinksley Meers agreed.`
   - Focus: useful spoken phrase and proper names.
5. `No newspaper men, no film fans! Why don't we come more often?`
   - Focus: short spoken enthusiasm, `film fans`.
6. `Meanwhile, two other actors, Rockwall Slinger and Merlin Greeves, had carried two large food baskets to a shady spot under some trees.`
   - Focus: long sentence with names and `shady spot`.
7. `'Now you get out of here, all of you!' he shouted.`
   - Focus: sheriff's blunt command; read clearly, not too aggressively.
8. `'Oh, is it?' said the sheriff with a sneer.`
   - Focus: sarcasm and `with a sneer`.

If a shorter read-aloud set is needed, prioritize sentences 1, 2, 3, 5, 7, and
8.

Pronunciation notes:

- `limelight`: compound rhythm, stress first part.
- `ancient`: two syllables; do not read like `an-kient`.
- `actors and actresses`: keep plural endings clear.
- `precautions`: stress second syllable.
- `recognize`: stress first syllable.
- `disguises`: long word; final syllable clear.
- `Gloria Gleam`, `Brinksley Meers`, `Rockwall Slinger`, `Merlin Greeves`:
  fictional names; model steadily but do not over-score them.
- `shady`: not `shadowy`; stress first syllable.
- `sheriff`: stress first syllable.
- `notice`: stress first syllable.
- `sneer`: single syllable; model clearly.

Feedback style:

- Praise natural pauses in spoken dialogue.
- Encourage the student to distinguish cheerful actor lines from sarcastic
  sheriff lines.
- Do not over-penalize fictional names; focus on rhythm and sentence meaning.

## Living-Scene Exercise Direction

The living-scene exercise should transfer the lesson into a modern privacy and
rule scenario.

Recommended setting:

`A school drama club has become popular after a performance. The students wear ordinary clothes and dark glasses because they want to stay out of the limelight during a park picnic. They choose a quiet spot, but a park guard points out a notice: no picnic setup is allowed there. When they say they are the drama-club stars, the guard thinks they are joking. They learn that privacy is fine, but rules still apply.`

Why this works:

- It keeps fame, disguise, privacy, notice, and rule conflict.
- It is age-appropriate and does not rely on celebrity gossip.
- It naturally uses:
  `out of the limelight`, `precautions`, `recognize`, `disguise`,
  `notice`, `in case`, `with a sneer`, and `don't be too hard on us`.

Possible roles:

- Drama-club student
- Popular performer
- Park guard
- Classmate/fan
- Teacher supervising the group

Target language:

- `I wanted to stay out of the limelight.`
- `We took precautions so that no one would recognize us.`
- `Our disguises were too perfect.`
- `The guard pointed to a notice.`
- `The rule still applies to us.`
- `Please don't be too hard on us.`

## Suggested You Too Scene

Scene title:

`Out Of The Spotlight`

Scene premise:

`Your school drama club is popular after a performance, but you want a quiet picnic. You disguise yourselves, then learn that public rules still matter even when people know your name.`

Dialogue goals:

- explain why you want privacy
- describe the precautions you took
- respond to being told about a rule
- avoid using popularity as a privilege
- explain what you learned

Suggested exchanges:

1. Guard:
   `Why are you wearing dark glasses?`
2. Student:
   `We wanted to stay out of the limelight, so we took precautions.`
3. Guard:
   `Did you see that notice?`
4. Student:
   `No. We thought this was a shady spot for a picnic.`
5. Guard:
   `The rule still applies to you.`
6. Student:
   `You're right. Please don't be too hard on us. We'll move now.`
7. Guard:
   `Are you really the drama-club actors?`
8. Student:
   `Yes, but today our disguises were too perfect.`

Keep the exercise funny but responsible.

## Extension Practice Direction

Lesson 74 extension production should be included in full production. If the
main lesson assets already exist later and only extension is missing, create
`web/data/extension/lesson_74.json` and register `74` in
`web/data/extension/index.json` without regenerating script, audio, timeline,
read-aloud data, or storyboard images.

### Extension Reading

Use an original same-topic fame-privacy-and-rules story. A school performer,
young athlete, local livestreamer, or drama-club group wants to stay out of the
limelight and uses a disguise or quiet location to avoid attention. The plan
works too well, and an adult does not recognize them when they explain who they
are. A notice or public rule creates the conflict. The story should land on:
privacy is reasonable, but public rules still apply. Do not retell the actor
picnic story exactly, and do not use real celebrity names.

Suggested title: `The Perfect Disguise`

Recommended word bank: `limelight`, `precaution`, `recognize`, `disguise`,
`fan`, `shady`, `notice`, `in case`, `sneer`, `rule`, `privacy`.

The 5 reading questions should test:

1. why the students or performers wanted privacy
2. what precautions or disguise they used
3. why the disguise became a problem
4. what notice or rule they had missed
5. what they learned about fame, privacy, and rules

When creating the JSON, shuffle the options so the correct answers are
distributed. For these 5 questions, use at least 3 different `answer_index`
positions, include at least one correct answer in C or D, and do not put more
than 2 correct answers in the same position.

### Sentence Writing

Use 5 patterns:

1. `Dressed in ..., they had taken ... so that ...`
   - Source: `Dressed in dark glasses and old clothes, they had taken special precautions so that no one should recognize them.`
   - Focus: appearance plus purpose.
   - Must include: `Dressed in`, `precautions`, and `so that`
2. `as ... discovered, ... can sometimes be too ...`
   - Source: `as they soon discovered, disguises can sometimes be too perfect`
   - Focus: setting up a lesson or reversal.
   - Must include: `as`, `discovered`, and `too`
3. `It couldn't be better`
   - Source: `It couldn't be better, Gloria`
   - Focus: saying something is ideal.
   - Must include: `couldn't be better`
4. `Why don't we ... more often?`
   - Source: `Why don't we come more often?`
   - Focus: casual suggestion.
   - Must include: `Why don't we` and `more often`
5. `don't be too hard on ...`
   - Source: `don't be too hard on us`
   - Focus: asking someone not to judge or punish too strictly.
   - Must include: `don't be too hard on`

## Chinese-To-English Exercise Direction

If production creates guided translation prompts inside lesson-local materials,
use meaning chunks that preserve the disguise-and-reversal chain.

Suggested chunking:

1. 一辆破旧的公共汽车停在一条干涸的河床边，一群著名男女演员下了车。
   - `An ancient bus stopped by a dry river bed and a party of famous actors and actresses got off.`
2. 他们戴着墨镜，穿着旧衣服，采取了特别的预防措施，以便没有人认出他们。
   - `Dressed in dark glasses and old clothes, they had taken special precautions so that no one should recognize them.`
3. 但正如他们很快发现的那样，伪装有时可能太完美。
   - `But as they soon discovered, disguises can sometimes be too perfect.`
4. Gloria Gleam 说这是一个野餐的好地方，Brinksley Meers 也同意说再好不过了。
   - `This is a wonderful place for a picnic, said Gloria Gleam. It couldn't be better, Gloria, Brinksley Meers agreed.`
5. 没有记者，没有影迷，他们觉得应该更常来。
   - `No newspaper men, no film fans! Why don't we come more often?`
6. 另外两位演员把两个大食品篮子提到树下阴凉的地方。
   - `Meanwhile, two other actors had carried two large food baskets to a shady spot under some trees.`
7. 当他们都坐舒服以后，一个看起来很生气的陌生人出现了。
   - `When they had all made themselves comfortable, a stranger appeared. He looked very angry.`
8. 他大喊让他们离开，并说自己是这里的 sheriff。
   - `Now you get out of here, all of you! he shouted. I'm sheriff here.`
9. 他指着告示说上面写着 No Camping，还讽刺说免得他们看不懂。
   - `Do you see that notice? It says "No Camping" -- in case you can't read!`
10. Rockwall 自报姓名求情，但 sheriff 冷笑着不相信他们。
   - `Rockwall said, don't be too hard on us, but the sheriff answered with a sneer.`

Keep translation feedback focused on:

- `ancient bus`
- `a party of`
- `Dressed in`
- `taken special precautions`
- `so that no one should recognize them`
- `as they soon discovered`
- `too perfect`
- `It couldn't be better`
- `No newspaper men, no film fans`
- `a shady spot`
- `in case you can't read`
- `with a sneer`

## Image Prompt Guidance

Do not include text in images. The production agent should avoid prompts that
ask for readable `No Camping` signs, actor names, newspaper headlines, film
posters, fan signs, sheriff badges, bus labels, road signs, notice text,
captions, or speech bubbles.

Preferred style:

- classic light film-comedy picnic atmosphere
- dry river bed, trees, old bus, picnic baskets
- disguised celebrities in dark glasses and old clothes
- stern but non-threatening sheriff
- blank notice board or non-readable symbol for the public rule
- expressive faces showing privacy, surprise, embarrassment, and sarcasm

Avoid:

- making the sheriff violent or frightening
- celebrity glamour that breaks the disguise premise
- readable signs, badges, newspaper text, posters, or names
- camping gear that overwhelms the picnic setup
- real celebrity likenesses
- modern paparazzi chaos unless mentioned only outside images

## Tone

Witty, modern, privacy-aware, and rule-conscious.

The child should feel:

- "I understand `limelight` as public attention."
- "I can see why famous people may want privacy."
- "I understand the joke: the disguises are too perfect."
- "I know `party` can mean a group, and `ancient bus` means a very old bus."
- "I can use phrases like `so that no one should recognize them`,
  `It couldn't be better`, `in case you can't read`, and `with a sneer`."
- "I understand that being famous does not let someone ignore public rules."
