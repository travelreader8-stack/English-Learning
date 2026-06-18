# Lesson 68 Plan - Persistent

This is the source-of-truth design card for producing Lesson 68. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 68 assets.

## Basic Info

- Lesson: 68
- Title: `Persistent`
- Chinese title: `纠缠不休`
- Core bridge: `坚持如果不尊重别人的边界，就会从优点变成打扰；真正礼貌的英语，也包括清楚地说 no。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule and the section
responsibility rule in `LESSON_PRODUCTION_PLAN.md`.

- Keep the opening hook short.
  - Use 4-6 spoken lines only.
  - The hook should ask: when does being friendly become too persistent?
  - Do not retell the whole Elizabeth-and-Nigel encounter before the four
    `retell` frames.
- Teach social boundary, not lying as a strategy.
  - The passage joke depends on Elizabeth lying about going to the dentist.
  - The modern teaching bridge should say: in real life, a clear and polite
    boundary is better than inventing excuses.
  - Do not praise Elizabeth's lie as the right solution.
- Treat Nigel as socially over-eager, not evil.
  - He is annoying because he ignores cues and pushes into Elizabeth's morning.
  - Keep the tone comic and human.
  - Do not make him frightening, stalking, threatening, or malicious.
- Explain `persistent` as two-sided.
  - Positive: persistent study, practice, training.
  - Negative: persistent pressure when someone else needs space.
  - This lesson's title uses the negative/socially uncomfortable meaning.
- Story spine must be Chinese-first.
  - Present the awkward social chain in Chinese first.
  - Attach short English chunks after each Chinese anchor.
  - Do not show an all-English plot chain as the main memory path.
- Avoid repeated script content across sections.
  - The four `retell` frames are the only section that should walk through the
    passage in order.
  - The teacher-student dialogue should deepen politeness versus boundaries and
    better ways to refuse.
  - Vocabulary and grammar sections should explain language tools, not retell
    the whole story again.
- Generated illustrations must be text-free.
  - No readable English or Chinese text inside images.
  - No readable street signs, shop signs, dental signs, appointment cards,
    waiting-room posters, phone screens, speech bubbles, UI panels, or fake
    lesson text.
  - Render words such as `persistent`, `avoid`, `insist on`, `Would you mind`,
    `dentist`, and `waiting room` as real UI text outside the image.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, camera directions,
    or generated-image mechanics.
  - Storyboard prompts must not leak into spoken lesson content.

## Production Warnings

- Known source-data issues in `web/data/lessons.json` should be surfaced before
  production edits shared data.
  - Chinese currently says `正好见到好`; it should be `正好见到你`.
  - The English passage appears to be missing the final closing quote after
    `There's always plenty to read in the waiting room!`
  - If production is allowed to patch shared data, make only these exact fixes
    and do not otherwise rewrite the passage.
  - If production is not allowed to patch shared data, stop and ask instead of
    building finished assets on top of visible source issues.
- `Persistent` should not be taught as purely negative.
  - Make clear that persistence can be good when used for goals.
  - In this story, persistence becomes uncomfortable because Nigel does not
    notice Elizabeth's boundary.
- Do not moralize too heavily.
  - The passage is a light social comedy.
  - The modern bridge should be practical: how to say no kindly and clearly.
- `Would you mind my coming with you?` is polite in form but pushy in context.
  - Teach both the grammar and the social pressure.
  - Do not present it as a universally perfect polite request.
- `Fancy meeting you here!` is a spoken expression.
  - Explain it naturally as `真没想到在这儿遇见你`.
  - Do not overdrill it as a formal writing pattern.
- `dentist` should be a simple modern context.
  - A dentist visit is private and not a fun outing.
  - This helps explain why Elizabeth expects the excuse to work.

## Lesson Positioning

Lesson 68 is a social-boundary comedy. Elizabeth sees Nigel Dykes and crosses
the street to avoid him, but he sees her and runs toward her. It is no use
pretending she has not seen him, so she waves. Nigel never has anything to do
and always insists on coming with other people, no matter how busy they are.
Elizabeth tries to think of a way to prevent him from following her all
morning. Nigel asks whether she is busy and interrupts before she can finish
speaking. He asks whether she would mind his coming with her. Elizabeth lies
that she is going to the dentist, hoping this will stop him. Nigel still wants
to come, because there is plenty to read in the waiting room.

The courseware should make the student understand:

`Elizabeth 想避开 Nigel -> Nigel 发现她并跑过来 -> 假装没看见已经没用 -> 她尴尬地打招呼 -> Nigel 总是没事做，还坚持跟别人一起走 -> Elizabeth 想办法不让他跟一上午 -> Nigel 表面礼貌地问能不能一起去 -> Elizabeth 撒谎说要去看牙医 -> Nigel 仍然要跟去，因为候诊室有东西可读 -> persistent 的笑点落地`

The central bridge is:

`有时候别人不是坏人，只是太 persistent。英语学习不只要会客气，也要会清楚、尊重地表达边界。`

## One-Sentence Hook

Elizabeth tries to avoid Nigel because he is always too persistent, but every
excuse she makes only gives him another reason to come along.

## Vivid Teaching Opening

The opening should set up the social discomfort quickly. It must be a short
hook, not a complete retelling.

Suggested teacher narration:

`如果有个同学总是要跟着你，你会怎么办？`

`他不一定是坏人，也许只是太热情、太 persistent。`

`可是当你需要自己的时间，别人还一直 insist on coming with you，这就变成了打扰。`

`Elizabeth 想躲开 Nigel，可 Nigel 偏偏看见了她。`

`今天我们学一个很实用的话题：how to be polite, and still say no。`

Tone:

- Light, awkward, and comic.
- Keep sympathy for both characters, but make the boundary issue clear.
- Save the full sequence for the four `retell` frames.

## Section Responsibility And Anti-Repetition Plan

### Opening

Job:

- Raise the everyday social-boundary problem.
- Introduce `persistent` as the key personality word.
- Make the student curious about the final dentist joke.

Do not:

- Retell every line of dialogue.
- Teach all gerund patterns at once.
- Make Nigel scary.

### Four Retell Frames

Job:

- Walk through the passage in order.
- Make the awkward escalation easy to remember.
- Use Chinese anchors and short English chunks.

Do not:

- Put readable street signs, dental signs, posters, or dialogue text inside
  images.
- Make the scene threatening or stalker-like.
- Turn Elizabeth into a villain for being uncomfortable.

### Teacher-Student Dialogue

Job:

- Deepen three ideas:
  1. persistence can be positive or negative
  2. politeness without boundaries can become uncomfortable
  3. better modern refusal phrases are clearer than lying
- Compare:
  `Would you mind my coming with you?`
  versus
  `I'm sorry, I need to go alone today.`

Do not:

- Re-list the full plot.
- Make the moral lesson heavy.
- Teach children that making excuses is the best way to handle boundaries.

### Vocabulary And Grammar

Job:

- Explain words and structures that make the lesson work:
  `persistent`, `avoid`, `pretend`, `wave`, `insist on`, `no matter how`,
  `think of a way`, `prevent ... from`, `Fancy meeting you here`,
  `wondering how to`, `Would you mind`, `dentist`, `waiting room`,
  `plenty to read`.
- Teach gerund after prepositions and set phrases:
  `avoid meeting`, `pretending`, `insists on coming`, `preventing him from
  following`, `mind my coming`.
- Teach social-function language:
  polite request, awkward refusal, clear boundary.

Do not:

- Reduce the lesson to an abstract gerund chart.
- Skip the social context of `Would you mind...`.
- Overload the child with every possible `mind` pattern.

### Practice And Living-Scene Transfer

Job:

- Move the language into a modern child-understandable situation:
  a classmate wants to follow you to the library, join your practice time, sit
  in on a private tutoring session, or keep messaging when you need to focus.
- Let the student practise both sides:
  asking politely and refusing clearly.
- Use:
  `avoid doing`, `insist on doing`, `prevent ... from doing`,
  `Would you mind...?`, `I need to... alone today`, `Maybe another time`.

Do not:

- Make the practice about humiliating a persistent friend.
- Make the only solution lying.
- Make the scenario too adult or romantic.

## Cultural And Background Bridge

The lesson needs a compact modern bridge:

1. Street encounter
   - In the passage, Elizabeth sees Nigel in the street and tries to avoid him.
   - For a modern student, this can map to school hallways, libraries, chat
     messages, clubs, or study plans.
2. British spoken politeness
   - `Fancy meeting you here!` is a casual greeting for a surprise encounter.
   - `Would you mind my coming with you?` sounds polite, but context matters.
3. Social boundary
   - Being friendly does not mean joining every plan.
   - A person can be kind and still say no.
4. Better refusal language
   - The student should learn a few practical English lines:
     `I'm sorry, I need to go alone today.`
     `I can't this morning.`
     `Maybe another time.`
     `I need to finish something by myself.`
5. Dentist context
   - Elizabeth chooses the dentist because most people do not want to join a
     dentist visit.
   - Nigel's answer creates the joke: even that excuse does not stop him.

## Visual Direction

The four illustrations should form one continuous social-comedy story.

### Visual Consistency

Use a consistent modern-but-light city-street visual motif:

- quiet morning street
- Elizabeth trying to keep moving politely
- Nigel cheerful, over-eager, and oblivious to social cues
- dentist/waiting-room context only in the final frame

Characters:

- Elizabeth: teenager or young adult, polite but uncomfortable, practical
  everyday clothes, expressive face, trying not to be rude.
- Nigel Dykes: cheerful, persistent, slightly clueless, energetic body
  language, never threatening.

Do not put readable text in images.

### Frame 1 - Crossing The Street

Scene purpose:

- Establish Elizabeth's attempt to avoid Nigel.

Visual:

- Elizabeth sees Nigel from across a quiet street and crosses to avoid meeting
  him.
- Nigel is visible in the distance but not yet interacting.
- Elizabeth's expression shows awkward recognition.

Student-facing anchor:

`Elizabeth 看见 Nigel，立刻穿过马路想避开他。`

English chunks:

- `crossed the street`
- `to avoid meeting him`
- `he saw me`
- `came running towards me`

### Frame 2 - No Use Pretending

Scene purpose:

- Show that Elizabeth can no longer pretend she has not seen him.

Visual:

- Nigel runs over happily.
- Elizabeth gives a small polite wave while looking uncomfortable.
- Keep the tone comic, not alarming.

Student-facing anchor:

`她再装作没看见已经没用了，只好向他招手。`

English chunks:

- `It was no use pretending`
- `I had not seen him`
- `so I waved to him`
- `I never enjoy meeting Nigel`

### Frame 3 - Nigel Insists On Coming

Scene purpose:

- Teach persistent behaviour and the interrupted boundary.

Visual:

- Nigel talks eagerly and leans into the conversation.
- Elizabeth tries to explain her plan but is interrupted.
- Show a light city sidewalk setting with body language doing the storytelling.

Student-facing anchor:

`Nigel 总是没事做，不管别人多忙，他都坚持要跟着。`

English chunks:

- `No matter how busy you are`
- `insists on coming with you`
- `preventing him from following me`
- `Would you mind my coming with you?`

### Frame 4 - The Dentist Excuse Fails

Scene purpose:

- Land the final joke.

Visual:

- Elizabeth mentions the dentist with a hopeful expression.
- Nigel looks pleased and points toward a waiting-room-like area or imagines
  reading magazines.
- If a waiting room appears, use generic magazines with no readable covers.

Student-facing anchor:

`她说要去看牙医，没想到 Nigel 还要跟去，因为候诊室有东西可读。`

English chunks:

- `I'm going to the dentist`
- `Then I'll come with you`
- `plenty to read`
- `in the waiting room`

## Storyboard Requirements

The storyboard JSON must include:

- `visual_consistency`
  - Mention the same Elizabeth and Nigel across all four frames.
  - Mention light social-comedy tone and expressive body language.
  - Mention that Nigel should be over-eager but not threatening.
  - Mention that images must contain no readable signs, posters, speech
    bubbles, phone screens, or text.
- 4 frames only.
- Each frame prompt should:
  - maintain the same characters and street/waiting-room visual logic
  - keep the comedy of awkward persistence
  - avoid readable text in the environment
  - avoid frightening, stalking, or aggressive imagery

## Teacher-Student Dialogue Direction

The dialogue should not retell the whole passage. It should deepen the modern
meaning.

Suggested dialogue spine:

1. Student asks whether persistent is a bad word.
   - Teacher: not always. Being persistent with study is good; being
     persistent after someone wants space is uncomfortable.
2. Student asks why Elizabeth does not just say no.
   - Teacher: many people try to stay polite, but unclear politeness can make
     the situation worse.
3. Student asks whether `Would you mind my coming with you?` is polite.
   - Teacher: the sentence is polite, but Nigel asks before Elizabeth can
     finish speaking, so the context is pushy.
4. Student asks whether lying about the dentist is a good solution.
   - Teacher: it makes the joke, but in real life a clear boundary is better.
5. Teacher gives modern phrases:
   - `I'm sorry, I need to go alone today.`
   - `I can't this morning.`
   - `Maybe another time.`

The dialogue should leave the student feeling:

- I understand the joke.
- I know persistent can be good or bad.
- I can spot polite language that still creates pressure.
- I can say no in English without being rude.

## Vocabulary Direction

Use exactly 3 formal vocabulary blocks.

Recommended formal vocab blocks:

1. `persistent`
   - Explain the two sides: determined versus annoyingly continuing.
   - Connect positive examples to study or practice.
   - Connect the story meaning to Nigel's social pressure.
2. `avoid`
   - Explain as keep away from something or someone.
   - Highlight `avoid doing`: `avoid meeting him`.
   - Give modern examples: avoid interrupting, avoid making noise.
3. `insist`
   - Explain as keep saying or demanding something strongly.
   - Highlight `insist on doing`: `insists on coming with you`.
   - Connect to boundaries: insisting can be rude if the other person is not
     comfortable.

Supporting words and phrases:

- `pretend`
- `wave`
- `have anything to do`
- `no matter how busy`
- `think of a way`
- `prevent ... from`
- `follow me around`
- `Fancy meeting you here`
- `wondering how to`
- `Would you mind`
- `dentist`
- `waiting room`
- `plenty to read`

Useful Chinese explanations:

- `persistent`: 坚持不懈；也可以是纠缠不休，要看语境。
- `avoid meeting him`: 避免遇见他。`avoid` 后面接 doing。
- `It was no use pretending`: 再假装也没有用了。
- `insist on coming`: 坚持要跟着来。
- `prevent him from following me`: 阻止他一直跟着我。
- `Would you mind my coming with you?`: 你介意我跟你一起去吗？
- `Fancy meeting you here!`: 真没想到在这儿遇见你！

## Grammar Handling

Do not start from a gerund table. Start from the social situation:

`Elizabeth 一直想避开、假装、阻止 Nigel 跟着；这些动作都自然带出 doing。`

### Job 1 - Verb Plus Doing

Key lines:

- `avoid meeting him`
- `It was no use pretending`
- `You're not busy doing anything`

Teaching point:

Some verbs and phrases naturally take `doing`, especially when we talk about
activities rather than one single command.

Student explanation:

`avoid 后面不是 avoid to meet，而是 avoid meeting。It was no use 后面也接 doing，表示“做这件事没用了”。`

### Job 2 - Preposition Plus Doing

Key lines:

- `insists on coming with you`
- `a way of preventing him from following me`
- `Would you mind my coming with you?`

Teaching point:

After prepositions like `on`, `of`, and `from`, use `doing`.

Student explanation:

`on / of / from 后面如果接动作，常常变成 doing：coming, preventing, following。Would you mind my coming with you? 里面 coming 也是这个感觉。`

### Job 3 - Polite Request Versus Clear Boundary

Key lines:

- `Would you mind my coming with you?`
- `Not at all, I lied`

Teaching point:

Polite grammar does not automatically make a request socially comfortable. The
answer also matters. Students should learn a clear refusal.

Student explanation:

`Would you mind...? 很客气，但如果别人还没说完你就插进来，还是会让人有压力。现实里可以说：I'm sorry, I need to go alone today.`

Use a compact display:

| Story meaning | English |
| --- | --- |
| 避免遇见他 | `avoid meeting him` |
| 假装没看见已经没用 | `It was no use pretending` |
| 坚持要跟你一起去 | `insists on coming with you` |
| 阻止他一直跟着我 | `prevent him from following me` |
| 你介意我一起去吗 | `Would you mind my coming with you?` |
| 我今天需要一个人去 | `I need to go alone today.` |

## Read-Aloud Direction

Create `web/data/read_aloud/lesson_68.json` with 5-8 high-value sentences.

Recommended sentences:

1. `I crossed the street to avoid meeting him, but he saw me and came running towards me.`
   - Focus: action chain, `avoid meeting`.
2. `It was no use pretending that I had not seen him, so I waved to him.`
   - Focus: `It was no use doing`, rhythm of the long clause.
3. `No matter how busy you are, he always insists on coming with you.`
   - Focus: `No matter how`, `insists on coming`.
4. `I had to think of a way of preventing him from following me around all morning.`
   - Focus: `a way of`, `preventing ... from following`.
5. `'Fancy meeting you here!'`
   - Focus: natural spoken surprise.
6. `'Would you mind my coming with you?' he asked, before I had finished speaking.`
   - Focus: polite request, `my coming`, timing.
7. `'Not at all,' I lied, 'but I'm going to the dentist.'`
   - Focus: short comic pause and `dentist`.
8. `'Then I'll come with you,' he answered. 'There's always plenty to read in the waiting room!'`
   - Focus: final joke and upbeat Nigel tone.

If a shorter read-aloud set is needed, prioritize sentences 1, 2, 3, 4, 6, and
8.

Pronunciation notes:

- `persistent`: stress the second syllable.
- `avoid`: stress the second syllable.
- `Nigel Dykes`: proper name; model steadily.
- `pretending`: do not swallow the middle syllable.
- `insists on`: link naturally but keep `s` clear.
- `Fancy meeting you here`: casual spoken rhythm.
- `Would you mind my coming with you?`: polite rising tone.
- `dentist`: two syllables; stress the first.

Feedback style:

- Praise natural conversational rhythm.
- Encourage Elizabeth's lines to sound polite but awkward.
- Encourage Nigel's lines to sound cheerful and oblivious, not aggressive.

## Living-Scene Exercise Direction

The living-scene exercise should transfer the lesson into a modern
school-and-boundary scenario.

Recommended setting:

`A classmate wants to follow you to the library while you need to finish a quiet assignment alone. The classmate asks politely but keeps insisting. You practise saying no clearly without being rude.`

Why this works:

- It keeps the social pressure of the original story.
- It avoids teaching lying as the best solution.
- It naturally uses:
  `avoid`, `insist on`, `prevent ... from`, `Would you mind`, `busy doing`,
  `Maybe another time`, `I need to go alone`.

Possible roles:

- Student who needs quiet time
- Persistent classmate
- Teacher or librarian
- Friend who helps set a boundary

Target language:

- `I am busy finishing my project.`
- `Would you mind my coming with you?`
- `I'm sorry, I need to work alone today.`
- `Maybe another time.`
- `Please don't follow me around all morning.`
- `I am trying to avoid being late.`

## Suggested You Too Scene

Scene title:

`I Need To Go Alone`

Scene premise:

`A classmate wants to come with you to the library, but you need quiet time to finish your work. You practise refusing politely and clearly.`

Dialogue goals:

- explain that you are busy
- respond to `Would you mind my coming with you?`
- set a clear boundary
- offer another time if appropriate
- avoid lying

Suggested exchanges:

1. Classmate:
   `Would you mind my coming with you?`
2. Student:
   `I'm sorry, I need to go alone today.`
3. Classmate:
   `Are you busy doing something?`
4. Student:
   `Yes. I am busy finishing my project.`
5. Classmate:
   `But I have nothing to do.`
6. Student:
   `Maybe another time. Today I need quiet time.`

Keep the exercise kind but firm.

## Extension Practice Direction

Lesson 68 extension production should be included in full production. If the
main lesson assets already exist later and only extension is missing, create
`web/data/extension/lesson_68.json` and register `68` in
`web/data/extension/index.json` without regenerating script, audio, timeline,
read-aloud data, or storyboard images.

### Extension Reading

Use an original same-topic social-boundary story. A student wants quiet time to
finish a project, practise music, read in the library, or join a private
tutoring session. A friendly classmate keeps asking to come along. The main
student learns to refuse politely and clearly rather than inventing an excuse.
Do not retell Elizabeth and Nigel, and do not make the persistent classmate
threatening.

Suggested title: `Maybe Another Time`

Recommended word bank: `persistent`, `avoid`, `pretend`, `insist`, `prevent`,
`busy`, `Would you mind`, `alone`, `maybe another time`, `polite`.

The 5 reading questions should test:

1. what the main student needed to do alone
2. how the classmate showed persistence
3. why pretending or inventing excuses was not the best solution
4. what polite boundary sentence the student used
5. what both students learned about friendship and space

When creating the JSON, shuffle the options so the correct answers are
distributed. For these 5 questions, use at least 3 different `answer_index`
positions, include at least one correct answer in C or D, and do not put more
than 2 correct answers in the same position.

### Sentence Writing

Use 5 patterns:

1. `crossed ... to avoid ...`
   - Source: `I crossed the street to avoid meeting him`
   - Focus: action plus purpose.
   - Must include: `to avoid` plus a gerund or noun
2. `It was no use ...`
   - Source: `It was no use pretending that I had not seen him`
   - Focus: saying an action will not help.
   - Must include: `It was no use` plus `doing`
3. `No matter how ..., he always ...`
   - Source: `No matter how busy you are, he always insists on coming with you`
   - Focus: a repeated habit despite conditions.
   - Must include: `No matter how` and `always`
4. `prevent ... from ...`
   - Source: `preventing him from following me around all morning`
   - Focus: stopping an unwanted action.
   - Must include: `prevent` and `from` plus `doing`
5. `Would you mind my ...?`
   - Source: `Would you mind my coming with you?`
   - Focus: polite request with a gerund.
   - Must include: `Would you mind my` plus `doing`

## Chinese-To-English Exercise Direction

If production creates guided translation prompts inside lesson-local materials,
use meaning chunks that preserve the awkward social-comedy chain.

Suggested chunking:

1. 我穿过马路，想避开遇见 Nigel，但他看见了我，朝我跑过来。
   - `I crossed the street to avoid meeting Nigel, but he saw me and came running towards me.`
2. 再假装没看见他已经没用了，所以我向他招了招手。
   - `It was no use pretending that I had not seen him, so I waved to him.`
3. Nigel 从来没事可做，不管你多忙，他总是坚持要跟你一起去。
   - `Nigel never has anything to do. No matter how busy you are, he always insists on coming with you.`
4. 我得想个办法，阻止他整个上午一直跟着我。
   - `I had to think of a way of preventing him from following me around all morning.`
5. 他问我是否介意他跟我一起去，而且是在我还没说完之前。
   - `He asked whether I would mind his coming with me before I had finished speaking.`
6. 我撒谎说我要去看牙医。
   - `I lied and said that I was going to the dentist.`
7. 他却说他也要一起去，因为候诊室里总有很多东西可读。
   - `He said he would come with me because there was always plenty to read in the waiting room.`

Keep translation feedback focused on:

- `avoid meeting`
- `It was no use pretending`
- `No matter how busy`
- `insists on coming`
- `a way of preventing ... from following`
- `Would you mind my coming`
- `plenty to read`

## Image Prompt Guidance

Do not include text in images. The production agent should avoid prompts that
ask for readable street signs, dental-clinic signs, appointment cards, waiting
room posters, magazine covers, phone screens, captions, or speech bubbles.

Preferred style:

- light cinematic social comedy
- expressive facial reactions
- clear body language
- modern city street and simple waiting-room visual cues
- warm but awkward interpersonal tone

Avoid:

- threatening stalking imagery
- aggressive pursuit
- humiliating Nigel
- making Elizabeth look cruel
- readable environmental text
- adult romantic framing

## Tone

Light, awkward, and practical.

The child should feel:

- "I understand why persistent can be good or bad."
- "I can see why Elizabeth feels uncomfortable."
- "I can use gerund patterns like `avoid meeting` and `insist on coming`."
- "I can ask politely with `Would you mind...`."
- "I can also refuse clearly and kindly in English."
