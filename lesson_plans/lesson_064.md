# Lesson 64 Plan - The Channel Tunnel

This is the source-of-truth design card for producing Lesson 64. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 64 assets.

## Basic Info

- Lesson: 64
- Title: `The Channel Tunnel`
- Chinese title: `海峡隧道`
- Core bridge: `一个伟大的工程梦想，不只是技术问题。它还需要地理想象、通风方案、安全信任，以及时代条件一起成熟。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule and the section
responsibility rule in `LESSON_PRODUCTION_PLAN.md`.

- Keep the original passage date unchanged.
  - Do not edit `web/data/lessons.json`.
  - The passage says `officially opened on March 7,1994`; preserve it in the
    passage, cloze, audio, read-aloud, and translation references.
  - In the teaching explanation, add a light historical note: many modern
    historical references record the public inauguration as May 6, 1994, while
    the course text keeps its own printed wording. Present this as source
    comparison, not as a reason to rewrite the lesson.
- Keep the opening hook short.
  - Use 4-6 spoken lines only.
  - The hook should ask: why did a tunnel under the sea take more than 100
    years to become real?
  - Do not retell the whole 1858-1994 history before the four `retell` frames.
- Make the geography concrete.
  - The student should understand that Britain is an island and the English
    Channel separates Britain from France / the European continent.
  - Include one simplified Europe/Channel visual in the first or second frame.
  - Map images may show land shapes and route line, but should not contain
    readable country labels inside the image. Put labels as courseware UI text
    outside the image.
- Treat the tunnel as an engineering-and-history story, not a vocabulary list.
  - Explain why a sea tunnel needs ventilation and why a double railway tunnel
    was a better idea.
  - Explain `fear invasion` as island-country security anxiety in that period,
    not as a joke or a simple dislike of foreigners.
- Story spine must be Chinese-first.
  - Present the engineering timeline in Chinese first.
  - Attach short English chunks after each Chinese anchor.
  - Do not show an all-English timeline as the main student-facing memory path.
- Avoid repeated script content across sections.
  - The four `retell` frames are the only section that should walk through the
    whole passage in order.
  - The teacher-student dialogue should deepen geography, engineering logic,
    and the historical date note.
  - Vocabulary and grammar sections should explain tools, not retell the whole
    story again.
- Generated illustrations must be text-free.
  - No readable English or Chinese text inside images.
  - No readable map labels, station signs, engineering notes, plaques, dates,
    captions, speech bubbles, UI panels, or fake lesson text.
  - Render words such as `English Channel`, `tunnel`, `ventilation`,
    `invasion`, and `European continent` as real UI text outside the image.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, camera directions,
    or generated-image mechanics.
  - Storyboard prompts must not leak into spoken lesson content.

## Production Warnings

- Do not change the original lesson record's date.
  - The course text says March 7, 1994.
  - Historical reference works commonly give May 6, 1994 as the public
    inauguration / official opening ceremony date.
  - The lesson should teach this as a small source-comparison note:
    `课文保留教材里的日期；如果查历史资料，常见说法是 1994 年 5 月 6 日正式揭幕。`
  - Keep the note brief and calm. Do not make the lesson become a date dispute.
- `Aime Thome de Gamond` is a proper name in the lesson data.
  - Do not add accents or rewrite the name in `web/data/lessons.json`.
  - Pronounce it gently; do not overdrill.
- `twenty-one-mile tunnel` is the old plan's length in the passage.
  - Do not replace it with modern Channel Tunnel length figures.
  - If modern context is mentioned, say only that the final modern tunnel was a
    much larger later project.
- `port` in the early plan means a sea transport facility, not a computer port.
- `European` should be capitalized in student-facing English when the passage
  uses `European continent`.
- Avoid overloading the child with every detail of the real Channel Tunnel
  project, Eurostar, Le Shuttle, financing, or political history.

If production believes a shared data edit is needed, stop and ask. The default
for Lesson 64 is: no shared data edit.

## Lesson Positioning

Lesson 64 is a history-of-an-idea lesson. In 1858, a French engineer comes to
England with a plan for a tunnel under the English Channel. His early solution
imagines a platform in the centre of the Channel, serving as both a port and a
railway station, with tall chimneys above sea level for ventilation. In 1860,
William Low proposes a better double railway tunnel, because a train entering
the tunnel would draw in fresh air behind it. Forty-two years later, work is
actually begun, but British fear of invasion prevents completion. The world
waits almost another 100 years before the Channel Tunnel finally connects
Britain to the European continent.

The courseware should make the student understand:

`英国是岛 -> 英吉利海峡隔开英国和欧洲大陆 -> 1858 年法国工程师提出海底隧道设想 -> 早期方案需要海中平台和通风烟囱 -> 1860 年双轨铁路隧道方案更合理 -> 42 年后工程开始 -> 英国担心入侵，计划停下 -> 世界又等了近 100 年 -> 海峡隧道最终把英国和欧洲大陆连起来`

The central bridge is:

`一个想法可以很早出现，但真正实现，常常要等技术、工程、安全信任和时代心理都准备好。`

## One-Sentence Hook

A tunnel under the sea sounds like a modern miracle, but people were imagining
the Channel Tunnel more than a century before it finally connected Britain to
Europe.

## Vivid Teaching Opening

The opening should establish the wonder quickly. It must be a short hook, not a
complete timeline retelling.

Suggested teacher narration:

`如果一个国家是一座岛，和大陆之间隔着一片海，你会怎么过去？`

`坐船可以，坐飞机也可以。可是有人很早就想：能不能从海底坐火车过去？`

`这就是 The Channel Tunnel，海峡隧道。`

`它难的不是“挖一个洞”这么简单，而是通风、安全、火车运行，还有英国人心里的担心。`

`今天我们看一个工程梦想，为什么等了 100 多年才真正实现。`

Tone:

- Curious, grand, and grounded.
- Let the engineering feel impressive but understandable.
- Make history feel like a timeline of attempts, not a dry list of dates.
- Save the detailed sequence for the four `retell` frames.

## Section Responsibility And Anti-Repetition Plan

### Opening

Job:

- Raise the sea-tunnel question.
- Establish Britain as an island and the Channel as the barrier.
- Make the student curious about why the idea took so long to realize.

Do not:

- Retell all dates and names.
- Explain every engineering detail.
- Start with a grammar chart.

### Four Retell Frames

Job:

- Walk through the passage in order.
- Use Chinese-first scene anchors with short English chunks.
- Make each plan or obstacle visually distinct.

Do not:

- Put readable labels inside the image.
- Turn the tunnel into a science-fiction tube.
- Make all four images look like unrelated engineering posters.

### Teacher-Student Dialogue

Job:

- Deepen three ideas:
  geography, engineering logic, and historical source comparison.
- Explain why Britain being an island matters.
- Explain why ventilation mattered in a railway tunnel.
- Add the date note gently: the lesson text keeps March 7, 1994; many modern
  references record May 6, 1994 for the official inauguration.

Do not:

- Replay the full retell.
- Argue that the textbook is "wrong" in a way that distracts the student.
- Spend too much time on Eurostar or modern ticketing.

### Vocabulary And Grammar

Job:

- Explain the words and structures that make the lesson work:
  `tunnel`, `Channel`, `platform`, `port`, `railway station`,
  `well-ventilated`, `chimney`, `sea level`, `put forward`, `double`,
  `ventilation`, `draw in`, `fear`, `invasion`, `officially`, `connect`,
  `European continent`.
- Teach imagined future in a past plan:
  `would serve as`, `would solve`.
- Teach passive proposal language:
  `was put forward`, `should be built`, `were built`.
- Teach the missed historical possibility:
  `If ... had not feared invasion, it would have been completed.`

Do not:

- Turn vocabulary into a long engineering glossary.
- Teach all conditional types mechanically.
- Skip the emotional reason behind `feared invasion`.

### Practice And Living-Scene Transfer

Job:

- Move the language into a modern child-understandable project situation:
  a school bridge/tunnel/model design, a subway ventilation design, or a big
  idea that needs both imagination and safety planning.
- Let the child explain a plan using:
  `would serve as`, `would solve`, `should be built`, `if... would...`.

Do not:

- Ask the child to design a real dangerous tunnel.
- Make the practice only factual recall.

## Cultural And Background Bridge

The lesson needs a compact background bridge:

1. Britain is an island.
   - It is separated from France and mainland Europe by the English Channel.
   - Before the tunnel, travel depended on ships, ferries, and later planes.
2. A tunnel under the sea feels natural now, but was a radical idea in the
   nineteenth century.
   - Engineers had to think about trains, air, water, and safety.
   - A tunnel is not only a line on a map; people must breathe and trains must
     move safely.
3. Britain had a long island-security mindset.
   - The sea was a natural protection.
   - A fixed tunnel could feel like a new path for invasion.
   - Explain this as historical anxiety, not as a simple "they were afraid of
     foreigners."
4. The modern date note can be a short teacher aside.
   - `教材里写的是 March 7, 1994。我们保留原文。`
   - `如果查现代资料，很多会把正式揭幕写作 May 6, 1994。`
   - `这提醒我们：学英语课文时，也可以顺手学会核对历史资料。`

## Visual Direction

The four illustrations should form one continuous time-and-idea line.

### Visual Consistency

Use a consistent visual motif across all four frames:

- a simplified English Channel map shape or route line
- cool sea blues and muted engineering greys
- nineteenth-century engineering paper / model motif in early frames
- modern train/tunnel motif in the final frame

Characters:

- Aime Thome de Gamond: nineteenth-century French engineer, middle-aged,
  neat beard or moustache, dark formal coat, carrying rolled plans.
- William Low: nineteenth-century English engineer, middle-aged, formal suit,
  calm technical presence.
- If modern travellers appear in frame 4, keep them small and secondary; the
  tunnel/train is the protagonist.

Do not put readable text in images.

### Frame 1 - The Island And The Idea

Scene purpose:

- Establish geography and the first bold plan.

Visual:

- A simplified view of Britain, France, and the English Channel from a
  slightly elevated map-table perspective.
- A French engineer arrives in England holding rolled plans.
- A faint route line crosses under the sea.

Student-facing anchor:

`1858 年，一位法国工程师带着海底隧道计划来到英国。`

English chunks:

- `arrived in England`
- `with a plan`
- `a twenty-one-mile tunnel`
- `under the English Channel`

### Frame 2 - The Platform And Ventilation Chimneys

Scene purpose:

- Make the early engineering solution visible.

Visual:

- Cross-section style but still realistic: sea surface above, tunnel idea
  below, a platform in the centre, tall chimney-like ventilation shafts rising
  above sea level.
- Keep it simple and child-readable.

Student-facing anchor:

`早期方案想在海峡中央建平台，还要用高烟囱给隧道通风。`

English chunks:

- `serve as a port and a railway station`
- `well-ventilated`
- `tall chimneys`
- `above sea level`

### Frame 3 - A Better Double Railway Tunnel

Scene purpose:

- Explain William Low's better plan and the ventilation logic.

Visual:

- William Low presents a cleaner double railway tunnel cross-section.
- A train entering one tunnel pulls fresh air behind it, shown with subtle air
  flow arrows outside the image text system, not readable labels.
- The mood should be technical progress.

Student-facing anchor:

`1860 年，William Low 提出双轨铁路隧道，让火车运行本身帮助带入新鲜空气。`

English chunks:

- `a better plan was put forward`
- `a double railway-tunnel should be built`
- `solve the problem of ventilation`
- `draw in fresh air`

### Frame 4 - Fear, Delay, And Final Connection

Scene purpose:

- Show why the idea stalled and what finally happened.

Visual:

- A split-time composition:
  on one side, early works paused by security anxiety; on the other, a modern
  train passes through a clean undersea tunnel connecting Britain and the
  continent.
- Keep the final feeling hopeful, not militarized.

Student-facing anchor:

`因为担心入侵，工程没有早早完成；世界又等了将近 100 年，海峡隧道才最终连接英国和欧洲大陆。`

English chunks:

- `feared invasion`
- `would have been completed`
- `almost another 100 years`
- `finally connecting Britain to the European continent`

## Storyboard Requirements

The storyboard JSON must include:

- `visual_consistency`
  - Mention the recurring sea-map/tunnel motif.
  - Mention the same visual style across all four frames.
  - Mention that images must contain no readable text or labels.
- 4 frames only.
- Each frame prompt should:
  - use the same visual motif
  - maintain a realistic educational illustration style
  - avoid text, labels, captions, signs, plaques, or readable maps
  - keep engineering details simple enough for a child

## Teacher-Student Dialogue Direction

The dialogue should not retell the whole passage. It should deepen the "why" of
the lesson.

Suggested dialogue spine:

1. Student asks why a tunnel was such a big deal.
   - Teacher explains Britain as an island and the Channel as a real barrier.
2. Student asks why they needed chimneys.
   - Teacher compares the tunnel to a long underground room where trains and
     people need air.
3. Student asks why a better idea was a double railway tunnel.
   - Teacher explains that the moving train could help draw in fresh air.
4. Student asks why it still was not finished.
   - Teacher explains historical fear of invasion and island security.
5. Teacher adds the source-comparison date note.
   - Keep it light:
     `课文日期我们照读照学；不过真实历史资料里，正式揭幕常见写法是 1994 年 5 月 6 日。`
   - Connect it to study habits:
     `这不是今天的背诵重点，但说明老教材里的历史信息也可以顺手核对。`

The dialogue should leave the student feeling:

- I can picture where the Channel Tunnel is.
- I understand why ventilation was a real problem.
- I understand why security fears delayed the project.
- I know how to respect the textbook while also checking historical facts.

## Vocabulary Direction

Use exactly 3 formal vocabulary blocks.

Recommended formal vocab blocks:

1. `tunnel`
   - Explain as an underground or undersea passage.
   - Connect to subway tunnels, road tunnels, and the Channel Tunnel.
2. `ventilation`
   - Explain as moving fresh air in and bad air out.
   - Connect to classrooms, subway stations, and long tunnels.
3. `invasion`
   - Explain as an army entering another country by force.
   - Keep it age-appropriate and historical.
   - Connect to why an island country might worry about a fixed tunnel.

Supporting words and phrases:

- `Channel`
- `platform`
- `port`
- `railway station`
- `well-ventilated`
- `chimney`
- `sea level`
- `put forward`
- `double`
- `draw in`
- `fear`
- `officially`
- `connect`
- `European continent`

Useful Chinese explanations:

- `the English Channel`: 英吉利海峡，不是电视/网络 channel。
- `European continent`: 欧洲大陆；英国是岛，所以这里有“岛”和“大陆”的对比。
- `put forward`: 提出一个想法或方案。
- `draw in fresh air`: 把新鲜空气带进来、吸进来。
- `would serve as`: 在计划里“会用作……”。

## Grammar Handling

Do not start from a full conditional chart. Start from the story's three
language jobs.

### Job 1 - Future In A Past Plan

Key lines:

- `This platform would serve as a port and a railway station.`
- `This would solve the problem of ventilation.`

Teaching point:

`would` here is not simply "would like". It is the future imagined inside an
old plan.

Student explanation:

`1858 年的人在说未来方案：如果这个平台建成，它 would serve as a port and railway station；如果双轨隧道建成，它 would solve the problem of ventilation。这里的 would 是“在那个计划里，它将会……”。`

### Job 2 - Passive Proposal Language

Key lines:

- `a better plan was put forward`
- `a double railway-tunnel should be built`
- `if tall chimneys were built above sea level`

Teaching point:

Engineering plans often focus on the thing to be built, not only on the person
who builds it.

Student explanation:

`工程方案里常常说“什么应该被建造”：should be built。重点是方案本身，不是某一个人在做动作。`

### Job 3 - A Past Possibility That Did Not Happen

Key line:

- `If, at the time, the British had not feared invasion, it would have been completed.`

Teaching point:

This means the tunnel was not completed then. The sentence imagines a different
past.

Student explanation:

`这句话很有力量：如果当时英国人没有害怕入侵，隧道本来就会完成。但真实历史是：他们担心，所以没有完成。英语用 had not feared + would have been completed 来说“过去本来可能发生，但没有发生”。`

Use a compact display:

| Story meaning | English |
| --- | --- |
| In the old plan, the platform would have a job | `would serve as` |
| In the old plan, the tunnel would fix a problem | `would solve` |
| A plan was proposed | `was put forward` |
| A tunnel should be constructed | `should be built` |
| A different past is imagined | `If... had not..., it would have been...` |

## Read-Aloud Direction

Create `web/data/read_aloud/lesson_64.json` with 5-8 high-value sentences.

Recommended sentences:

1. `In 1858, a French engineer, Aime Thome de Gamond, arrived in England with a plan for a twenty-one-mile tunnel under the English Channel.`
   - Focus: long opening sentence, name, plan, place.
2. `He said that it would be possible to build a platform in the centre of the Channel.`
   - Focus: `would be possible`, `in the centre of`.
3. `This platform would serve as a port and a railway station.`
   - Focus: `would serve as`.
4. `The tunnel would be well-ventilated if tall chimneys were built above sea level.`
   - Focus: passive and condition.
5. `In 1860, a better plan was put forward by an Englishman, William Low.`
   - Focus: passive `was put forward`, proper name.
6. `He suggested that a double railway-tunnel should be built.`
   - Focus: `suggested that`, `should be built`.
7. `If, at the time, the British had not feared invasion, it would have been completed.`
   - Focus: missed past possibility.
8. `It was officially opened on March 7,1994, finally connecting Britain to the European continent.`
   - Focus: `officially opened`, `finally connecting`, `European continent`.

If a shorter read-aloud set is needed, prioritize sentences 1, 3, 4, 6, 7, and
8.

Pronunciation notes:

- `Channel`: not a TV channel here; keep the first syllable clear.
- `Aime Thome de Gamond`: proper name; read naturally and gently.
- `twenty-one-mile`: do not let TTS or the student over-emphasize the hyphens.
- `ventilated` / `ventilation`: four syllables; connect meaning to fresh air.
- `chimneys`: final `s` clear.
- `invasion`: stress the second syllable.
- `officially`: avoid swallowing the middle syllables.
- `European continent`: keep `European` clear and capitalized in text.

Feedback style:

- Praise steady rhythm in long technical sentences.
- Encourage the student to group phrases:
  `with a plan / for a tunnel / under the English Channel`.
- Do not over-penalize proper names.

## Living-Scene Exercise Direction

The living-scene exercise should transfer the lesson into a modern design-plan
scenario.

Recommended setting:

`A student team is designing a model underground tunnel for a school science fair. They must explain what the tunnel would serve as, how it would be ventilated, and what problem their design would solve.`

Why this works:

- It keeps the engineering language alive without making the child design a real
  dangerous tunnel.
- It naturally uses:
  `tunnel`, `would serve as`, `ventilation`, `should be built`, `solve the
  problem`, `connect`.
- It lets the student speak like a young engineer.

Possible roles:

- Student engineer
- Teammate
- Teacher
- Visitor at the science fair

Target language:

- `Our tunnel would connect two places.`
- `This platform would serve as a station.`
- `We need ventilation, so fresh air can come in.`
- `A second tunnel should be built for safety.`
- `This would solve the problem of traffic.` 

## Suggested You Too Scene

Scene title:

`My Tunnel Plan`

Scene premise:

`You are presenting a model tunnel at a school science fair. A teacher asks how your tunnel works, why it needs ventilation, and what problem it would solve.`

Dialogue goals:

- explain what the model tunnel would connect
- say what a platform or station would serve as
- explain why ventilation is needed
- suggest one safety improvement using `should be built`
- describe what problem the plan would solve

Suggested exchanges:

1. Teacher:
   `What would your tunnel connect?`
2. Student:
   `It would connect the school library and the science building.`
3. Teacher:
   `What would this platform serve as?`
4. Student:
   `It would serve as a small station.`
5. Teacher:
   `Why do you need ventilation?`
6. Student:
   `Fresh air must come in, so the tunnel should be well-ventilated.`
7. Teacher:
   `What problem would your plan solve?`
8. Student:
   `It would solve the problem of walking outside in heavy rain.`

Keep the exercise practical and confident.

## Extension Practice Direction

Lesson 64 extension production should be included in full production. If the
main lesson assets already exist later and only extension is missing, create
`web/data/extension/lesson_64.json` and register `64` in
`web/data/extension/index.json` without regenerating script, audio, timeline,
read-aloud data, or storyboard images.

### Extension Reading

Use an original same-topic engineering passage. A student or young engineer
proposes a tunnel, bridge, subway passage, or covered walkway that connects two
places and solves a practical problem. The passage should reuse the lesson's
engineering vocabulary but must not retell the Channel Tunnel history.

Suggested title: `The School Tunnel Model`

Recommended word bank: `tunnel`, `platform`, `serve as`, `ventilation`,
`chimney`, `sea level`, `put forward`, `double`, `draw in`, `connect`.

The 5 reading questions should test:

1. what two places the new tunnel/model would connect
2. what the platform or station would serve as
3. why ventilation is needed
4. what improvement was put forward
5. what problem the final plan would solve

### Sentence Writing

Use 5 patterns:

1. `with a plan for ...`
   - Source: `arrived in England with a plan for a twenty-one-mile tunnel`
   - Focus: introducing a planned project.
   - Must include: `with a plan for`
2. `would serve as ...`
   - Source: `This platform would serve as a port and a railway station.`
   - Focus: explaining the function of a place or object in a plan.
   - Must include: `would serve as`
3. `would be well-ventilated if ... were built`
   - Source: `The tunnel would be well-ventilated if tall chimneys were built above sea level.`
   - Focus: condition plus passive building.
   - Must include: `would be well-ventilated` and `were built`
4. `was put forward by ...`
   - Source: `a better plan was put forward by an Englishman, William Low`
   - Focus: passive voice for a proposed idea.
   - Must include: `was put forward by`
5. `If ... had not ..., it would have been ...`
   - Source: `If, at the time, the British had not feared invasion, it would have been completed.`
   - Focus: imagining a different past.
   - Must include: `If`, `had not`, and `would have been`

## Chinese-To-English Exercise Direction

If production creates guided translation prompts inside lesson-local materials,
use meaning chunks that preserve the engineering timeline.

Suggested chunking:

1. 1858 年，一位法国工程师带着海峡隧道计划来到英国。
   - `In 1858, a French engineer arrived in England with a plan for a tunnel under the English Channel.`
2. 他认为可以在海峡中央建一个平台，用作港口和火车站。
   - `He said that it would be possible to build a platform in the centre of the Channel, and it would serve as a port and a railway station.`
3. 如果在海面以上建造高烟囱，隧道就会通风良好。
   - `The tunnel would be well-ventilated if tall chimneys were built above sea level.`
4. 后来 William Low 提出双轨铁路隧道，这会解决通风问题。
   - `Later, William Low put forward a double railway-tunnel plan, and this would solve the problem of ventilation.`
5. 如果英国人当时没有害怕入侵，隧道本来会完成。
   - `If the British had not feared invasion at the time, the tunnel would have been completed.`
6. 世界又等了将近 100 年，海峡隧道才最终连接英国和欧洲大陆。
   - `The world had to wait almost another 100 years for the Channel Tunnel, finally connecting Britain to the European continent.`

Keep translation feedback focused on:

- `would serve as`
- `would be well-ventilated if`
- `was put forward`
- `would solve`
- `had not feared... would have been completed`
- `European continent`

## Image Prompt Guidance

Do not include text in images. The production agent should avoid prompts that
ask for labeled maps, dated plaques, readable plans, handwritten documents, or
caption boxes.

Preferred style:

- cinematic educational illustration
- historically grounded but child-friendly
- sea-blue and engineering-grey palette with warm human details
- clear undersea-tunnel cross sections
- no dark, frightening war imagery

Avoid:

- readable country names or route labels inside maps
- military invasion scenes
- scary flooding or disaster scenes
- modern Eurostar advertisement style
- excessive technical diagrams
- fake English text on blueprints

## Tone

Curious, intelligent, and quietly inspiring.

The child should feel:

- "I can picture Britain, France, and the English Channel."
- "I know why a sea tunnel needs ventilation."
- "I understand why fear of invasion delayed the plan."
- "I can use `would serve as`, `should be built`, and `would have been completed`."
- "I see that great ideas sometimes need a long time before the world is ready."

Avoid:

- making the lesson only about memorizing dates
- mocking old engineering plans as silly
- making British fear of invasion sound childish
- overcorrecting the textbook date
- turning the lesson into a full documentary on the modern Channel Tunnel

## Acceptance Criteria For Production

Lesson 64 production is successful only if:

- The script clearly frames the lesson as engineering dream plus historical
  delay.
- The original passage date is preserved; no shared data edit is made.
- The teaching explanation includes a brief source-comparison note about the
  commonly cited May 6, 1994 inauguration date without changing the passage.
- The geography bridge makes Britain, France, the English Channel, and the
  European continent understandable.
- The 4 retell frames show:
  1. the 1858 French engineer and sea-tunnel idea
  2. the platform / port / railway station / chimney ventilation plan
  3. William Low's double railway tunnel and fresh-air logic
  4. fear of invasion, long delay, and final connection
- The storyboard includes `visual_consistency` for the sea-map/tunnel motif and
  the engineering visual style.
- Generated images contain no readable text, labels, captions, maps, signs, or
  fake documents.
- The 3 formal vocab blocks are `tunnel`, `ventilation`, and `invasion`.
- Supporting words include `Channel`, `platform`, `port`, `railway station`,
  `well-ventilated`, `chimney`, `sea level`, `put forward`, `double`,
  `draw in`, `fear`, `officially`, `connect`, and `European continent`.
- The grammar section teaches:
  `would serve as`, `would solve`, `was put forward`, `should be built`, and
  `If... had not feared..., it would have been completed`.
- The living-scene exercise asks the student to present a model tunnel or
  engineering plan.
- The extension practice follows the `Extension Practice Direction` above,
  creates `web/data/extension/lesson_64.json`, and registers the lesson in
  `web/data/extension/index.json`.
- The outro includes the full practice order and the concrete read-aloud steps:
  `⓪ 跟读：听课文全文 -> 听原音 -> 录一句 -> 获取反馈`, then
  `① 生活场景`, `② 完形`, `③ 中译英`, `④ 英译中`, `⑤ 拓展阅读`,
  `⑥ 句式仿写`, `⑦ 默写`.
