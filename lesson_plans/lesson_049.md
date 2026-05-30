# Lesson 49 Plan - The end of a dream

This is the source-of-truth design card for producing Lesson 49. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 49 assets.

## Basic Info

- Lesson: 49
- Title: `The end of a dream`
- Chinese title: `美梦告终`
- Core bridge: `这不是一个单纯的倒霉故事，而是一个“好不容易买到真床，最后又回到地板上睡”的圆形喜剧。孩子需要先理解德黑兰的炎热天气、平屋顶和院子这样的住房背景，才能明白为什么主人公会把床搬到屋顶上睡。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule.

- Story spine must be Chinese-first.
  - Present the plot first as a Chinese scene line.
  - Attach short English chunks after each Chinese anchor.
  - Do not use an all-English arrow chain as the main student-facing memory
    path.
- Generated illustrations must be text-free.
  - No readable English text inside images.
  - No city labels, map labels, shop signs, speech bubbles, captions, or fake UI
    text inside images.
  - No empty boxes, blank labels, placeholder panels, or fake text areas.
  - If the courseware needs text, render it as real UI text outside the image.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, visual style
    instructions, camera directions, or generated-image mechanics.
  - Storyboard prompts must not become spoken lesson content.
- Keep the rooftop scene safe and comic.
  - Do not make the fall frightening, violent, or physically graphic.
  - Do not show injury, panic, blood, or dangerous imitation.
  - The key point is comic surprise: the bed is smashed, but the man is
    miraculously unhurt and still on the mattress.
- Respect the source wording without overcorrecting shared data.
  - The source uses `Teheran`; student-facing explanation may mention modern
    `Tehran / 德黑兰`.
  - The Chinese source says `一个人年轻人`; normalize to `一个年轻人` in teaching
    script if needed, but do not edit `web/data/lessons.json` during normal
    lesson production.

## Production Warnings

- Explain the rooftop sleeping background early.
  - Chinese students living in apartments may not understand why anyone would
    carry a bed onto a roof.
  - Give a short bridge: in some hot places, older houses may have flat roofs
    and courtyards; before air-conditioning was common, rooftops or outdoor
    spaces could feel cooler at night.
  - Keep this as a practical life-background explanation, not a long Iran
    lecture.
- Add a clear modern safety boundary.
  - Today we use fans, air-conditioning, safer rooms, and proper beds.
  - Students should not imitate sleeping on a roof or moving furniture to a
    dangerous place.
- Avoid exoticizing Tehran / Iran.
  - Show a warm city and simple flat-roof house details, not a stereotype.
  - The lesson is about climate, housing, and a comic accident, not about making
    Iran seem strange.
- Preserve the dry humor.
  - The ending should not feel tragic.
  - The comedy is that after years of saving for a real bed, the man ends up
    putting the mattress back on the floor and promptly going to sleep again.
- Make the title double meaning visible.
  - `The end of a dream` means the dream of owning a real bed ends.
  - It also lightly echoes literal sleeping and waking up.

If production requires editing `web/data/lessons.json`, stop and ask for a
shared-data edit because it is outside the normal per-lesson write set.

## Lesson Positioning

Lesson 49 is a circular comic story: a young man is tired of sleeping on the
floor, saves for years, buys a real bed, enjoys it for two nights, loses the bed
in a storm, and ends by sleeping on the floor again.

The lesson should help the student feel three layers at once:

1. The practical background: hot weather, flat roof, courtyard, and rooftop
   sleeping.
2. The emotional arc: long saving, pride, comfort, disaster, sadness, and quick
   sleep.
3. The comic structure: from floor to dream bed, then back to floor.

The courseware should make the student understand:

`睡地板睡腻了 -> 攒多年买真床 -> 第一次拥有弹簧和床垫 -> 天热搬上屋顶 -> 前两晚睡得好 -> 第三晚风暴来了 -> 一阵风把床刮下屋顶 -> 摔进院子 -> 床碎了但人没伤 -> 还躺在床垫上 -> 捡起床垫拿回屋 -> 放回地板又睡着`

The ending should land as:

`他终于实现了“有一张真正的床”的梦，可是风暴一来，床架碎了，只剩床垫。故事最后，他又回到地板上睡觉，所以这个梦真的结束了。`

## One-Sentence Hook

A young man finally buys a real bed after years of saving, but a storm blows it
off the roof and leaves him back on the floor with only the mattress.

## Vivid Teaching Opening

The opening should establish the cultural bridge and the circular comedy.

Suggested teacher narration:

`想象一个年轻人一直睡在地板上。他不是偶尔睡地板，而是已经睡烦了，真的 tired of sleeping on the floor。于是他一点一点攒钱，saved up for years，终于买了一张真正的床。`

`这张床对他来说不是普通家具，而是一个梦想：有 springs，有 mattress，他第一次觉得自己成了 proud owner。`

`可是天气太热了。在一些炎热地区，传统房子可能有平屋顶，晚上屋顶比屋里凉。所以他把床搬到 roof 上睡。前两晚很舒服，第三晚 storm blew up。一阵 gust of wind 把床从屋顶上刮了下去。`

`最妙的是：床 smashed to pieces，可是人 miraculously unhurt。他醒来时还在 mattress 上。最后他捡起床垫，放回地板，然后 promptly went to sleep again。`

Tone:

- Warm, slightly amused, not tragic.
- Let the child understand the old living context before judging the action.
- Keep safety clear: this is a story scene, not something to copy.

## Story Focus

The circular story chain is:

1. The young man is tired of sleeping on the floor.
2. He saves up for years.
3. He finally buys a real bed.
4. He becomes the proud owner of a bed with springs and a mattress.
5. The weather is very hot.
6. He carries the bed onto the roof.
7. He sleeps well for the first two nights.
8. On the third night, a storm blows up.
9. A gust of wind sweeps the bed off the roof.
10. The bed crashes into the courtyard below.
11. He does not wake up until the bed has struck the ground.
12. The bed is smashed to pieces.
13. The man is miraculously unhurt.
14. He wakes up still on the mattress.
15. He looks at the bits of wood and metal around him.
16. He sadly picks up the mattress and carries it into the house.
17. He puts it on the floor.
18. He promptly goes to sleep again.

The production should make the contrast visible:

`多年攒钱的梦想` versus `一阵风造成的结局`.

## Chinese-First Story Spine For Courseware

Use this as the main student-facing story line.

1. 他睡地板睡烦了
   - `Tired of sleeping on the floor`
2. 他攒了很多年钱
   - `saved up for years`
3. 他终于买了一张真正的床
   - `to buy a real bed`
4. 他第一次拥有弹簧和床垫
   - `For the first time in his life`
   - `springs and a mattress`
5. 天气太热，他把床搬到屋顶上
   - `Because the weather was very hot`
   - `carried the bed on to the roof`
6. 前两晚睡得很好
   - `for the first two nights`
7. 第三晚风暴来了
   - `on the third night`
   - `a storm blew up`
8. 一阵风把床刮下屋顶
   - `A gust of wind`
   - `swept the bed off the roof`
9. 床摔进下面的院子
   - `sent it crashing into the courtyard below`
10. 床撞到地上，他才醒
    - `did not wake up until`
    - `had struck the ground`
11. 床碎了，人却没伤
    - `smashed to pieces`
    - `miraculously unhurt`
12. 他醒来时还在床垫上
    - `still on the mattress`
13. 他看了看碎木片和金属片
    - `Glancing at the bits of wood and metal`
14. 他把床垫捡回屋里
    - `sadly picked up the mattress`
15. 他把床垫放回地板，又睡着了
    - `put it on the floor`
    - `promptly went to sleep again`

Student memory prompt:

`先记中文圆形故事：睡地板 -> 买真床 -> 搬上屋顶 -> 风暴刮下去 -> 床碎人没事 -> 床垫回到地板。再把英文短语挂到每个镜头上。`

Do not show this as an all-English arrow chain in the student-facing courseware.

## Recitation Blocks

Break the passage into four Chinese-first recitation blocks:

### Block 1: 从睡地板到真床

Chinese anchor:

`他睡地板睡烦了，攒了很多年钱，终于买了一张真正的床。`

English chunks:

- `Tired of sleeping on the floor`
- `saved up for years`
- `to buy a real bed`

Teaching point:

- `Tired of doing...` is not just physically sleepy. It means he cannot stand
  doing it anymore.
- `saved up for years` should feel slow and hard-earned.

### Block 2: 第一次拥有梦想中的床

Chinese anchor:

`他第一次拥有了一张有弹簧和床垫的床，非常自豪。`

English chunks:

- `For the first time in his life`
- `became the proud owner`
- `springs and a mattress`

Teaching point:

- Let the student feel that `a real bed` is a big achievement in this story.
- `proud owner` is emotional, not just factual.

### Block 3: 天热、屋顶、风暴

Chinese anchor:

`天气太热，他把床搬到屋顶。前两晚很好，第三晚风暴来了。`

English chunks:

- `Because the weather was very hot`
- `carried the bed on to the roof`
- `for the first two nights`
- `on the third night`
- `a storm blew up`

Teaching point:

- Explain the roof/courtyard living background before asking the student to
  retell it.
- `blew up` here means a storm suddenly developed.

### Block 4: 床碎了，人没事，又睡了

Chinese anchor:

`一阵风把床刮下屋顶，床摔碎了，但他奇迹般没受伤。最后他把床垫拿回屋，放在地板上又睡着了。`

English chunks:

- `A gust of wind swept the bed off the roof`
- `sent it crashing into the courtyard below`
- `smashed to pieces`
- `miraculously unhurt`
- `sadly picked up the mattress`
- `promptly went to sleep again`

Teaching point:

- This block contains the comic ending.
- Do not let the student only memorize the accident; make them feel the return
  to the beginning.

## Tehran, Roof, And Courtyard Bridge

Keep this bridge short, visual, and practical.

Suggested student-facing explanation:

`Teheran 是课文里的拼法，现在我们通常写 Tehran，中文是德黑兰，是伊朗的首都。这里不用记很多地理知识，只要知道它可以很热，而且一些传统房子可能有平屋顶和院子。`

`在没有现代空调的时候，屋顶晚上可能比屋里凉，所以课文里这个年轻人会把床搬到屋顶上睡。对我们今天住楼房的孩子来说，这件事很陌生，但放到炎热地区、平屋顶房子的背景里，就容易理解了。`

Do not overteach:

- No long political or religious background.
- No heavy Iran history.
- No stereotype of Middle Eastern life.

Add a simple geography cue only if helpful:

- Tehran / 德黑兰 is in Iran, in West Asia.
- The exact map can appear as a tiny contextual cue in UI if the production
  thread already has a clean visual pattern for maps, but it is not required.
- If a map is used, do not put readable map text inside generated illustrations.
  Use real UI text outside images instead.

## Modern Safety Bridge

The safety bridge should be clear but not moralizing.

Suggested student-facing wording:

`今天我们当然不会学他把床搬到屋顶上睡。现在有电扇、空调，也有更安全的睡觉方式。课文让我们理解的是过去某些地方的生活场景，以及一个很有戏剧性的意外。`

Production guidance:

- Do not ask the student to imagine doing this themselves as a real-life option.
- Do not make the living-scene exercise involve climbing onto roofs, balconies,
  windowsills, or unsafe outdoor sleeping.
- If the scene mentions heat, solve it with a fan, open door, living room, or
  safe indoor space.

## Title And Comic Structure

Explain the title with two meanings:

- Dream as wish:
  - He dreams of owning a real bed.
  - Years of saving make the bed feel precious.
  - The storm destroys the bed, so the dream ends.
- Dream as sleep:
  - He is literally sleeping.
  - He wakes only after the bed strikes the ground.
  - He immediately goes back to sleep on the mattress.

The courseware should make the title memorable:

`梦开始在地板上，梦实现为一张真床，梦结束后又回到地板。`

## Main Language Focus

### Opening Participle Phrase

Target:

`Tired of sleeping on the floor, a young man in Teheran saved up for years to buy a real bed.`

Explain as:

`因为睡地板睡烦了，所以他攒钱买床。`

Teaching moves:

- Show the full idea first:
  - `He was tired of sleeping on the floor.`
  - `He saved up for years to buy a real bed.`
- Then compress it:
  - `Tired of sleeping on the floor, he saved up for years...`
- Keep the child-facing explanation semantic, not overly grammatical.

Practice pattern:

- `Tired of using the old chair, he saved up to buy a new one.`
- `Tired of waiting in the heat, they went inside.`

### `saved up for years`

Target:

`saved up for years`

Explain:

- `save` can mean put money aside.
- `save up` means slowly collect enough money for something.
- `for years` makes the effort feel long.

Contrast:

- `saved money` = saved some money.
- `saved up for years` = kept saving until he could finally buy the bed.

### `for the first time in his life`

Target:

`For the first time in his life, he became the proud owner...`

Explain:

- This phrase makes the moment feel important.
- It tells us the bed is not ordinary to him.

Practice:

- `For the first time in his life, he had his own room.`
- `For the first time in her life, she travelled alone.`

### Relative Clause With `which`

Target:

`a bed which had springs and a mattress`

Explain:

- `which had...` tells us what kind of bed it was.
- The clause makes `a real bed` concrete.

Student-facing idea:

`不是光说 a bed，而是补一句：这张床有什么。`

### Cause And Sequence

Targets:

- `Because the weather was very hot`
- `for the first two nights`
- `on the third night`

Explain:

- `Because...` gives the reason for moving the bed.
- `first two nights` and `third night` create story rhythm.
- The story becomes easy to remember because the time sequence is simple.

### Storm Action Chain

Targets:

- `a storm blew up`
- `A gust of wind swept the bed off the roof`
- `sent it crashing into the courtyard below`

Explain:

- `blew up` means the storm suddenly developed.
- `gust` is one strong sudden push of wind.
- `swept...off...` means the wind pushed it away from the roof.
- `sent it crashing into...` makes the motion vivid.

This is a strong writing model:

`wind + verb + object + direction + result`

Example:

`A gust of wind blew the papers off the desk and sent them flying across the room.`

### `not...until`

Target:

`The young man did not wake up until the bed had struck the ground.`

Explain:

`他一直没醒，直到床撞到地上才醒。`

Teaching moves:

- First show the Chinese timing:
  - `直到撞地，他才醒。`
- Then map the English:
  - `did not wake up until...`

### `Although...`

Target:

`Although the bed was smashed to pieces, the man was miraculously unhurt.`

Explain:

- `Although` sets up a surprise contrast.
- Expected result: terrible accident, injury.
- Actual result: bed destroyed, man fine.

Practice:

- `Although the cup broke, no one was hurt.`
- `Although the story sounds frightening, the ending is comic.`

### `Glancing at...`

Target:

`Glancing at the bits of wood and metal that lay around him...`

Explain:

- `Glancing at...` means looking quickly.
- It gives a small action before the main action.

Teaching focus:

- This is a compact storytelling device.
- Do not overburden the student with participle terminology.

### `promptly`

Target:

`he promptly went to sleep again`

Explain:

- `promptly` means quickly, immediately, without delay.
- Here it is funny because after such a big accident, he still goes to sleep
  right away.

## Vocabulary Plan

Prioritize concrete meaning, story value, and pronunciation.

- `tired of`
  - Not simply sleepy.
  - Means fed up with something after doing it too long.
- `real`
  - Here, `a real bed` means a proper bed, not the floor.
- `owner`
  - Someone who owns something.
  - `proud owner` shows emotion.
- `spring`
  - Metal coil inside a bed or mattress that makes it bounce/support the body.
  - Use a simple visual if needed, but no text inside generated images.
- `mattress`
  - The soft thick part of a bed.
  - Important because the man survives and carries this back inside.
- `roof`
  - Top of a house.
  - In this story, a flat roof where someone can put a bed.
- `courtyard`
  - An open space inside or beside a house compound.
  - Not the same as a modern apartment hallway.
- `gust`
  - A sudden strong push of wind.
- `sweep / swept / swept`
  - Here, wind pushes something away quickly.
  - Teach the irregular past form `swept`.
- `crash`
  - Hit something loudly and violently.
  - Use sound imagination, not scary injury.
- `strike / struck`
  - Hit.
  - `had struck the ground` is formal/story style.
- `smash`
  - Break badly.
  - `smashed to pieces` = broken into many pieces.
- `miraculously`
  - In an amazing, almost unbelievable way.
- `unhurt`
  - Not hurt.
- `glance`
  - Look quickly.
- `promptly`
  - Immediately, without delay.

Vocabulary memory grouping:

- Bed dream: `real`, `owner`, `spring`, `mattress`
- Weather accident: `storm`, `gust`, `sweep`, `crash`
- Result: `courtyard`, `smash`, `miraculously`, `unhurt`
- Ending action: `glance`, `promptly`

## Visual Direction

The visuals should support comprehension and memory without inserting text into
the images.

Overall style:

- Warm illustrated realism.
- Gentle comic timing.
- Clear, child-safe scene staging.
- Consistent main character across all frames.
- Flat-roof house and courtyard should be visually understandable.

Avoid:

- Scary falling-body images.
- Injury, broken bones, blood, or medical danger.
- Exaggerated disaster-movie storm.
- Orientalist or stereotyped Iran imagery.
- Text, captions, signs, speech bubbles, empty panels, or fake labels inside
  generated images.

Use:

- Warm evening heat.
- Simple flat roof.
- Courtyard below.
- A distinct mattress and bed frame.
- Broken wood and metal after the crash.
- The same young man looking sleepy, surprised, sad, then sleepy again.

## Character Consistency Brief

Keep the protagonist consistent across all four lesson illustrations.

- Young adult man from Tehran.
- Modest everyday clothing or simple sleepwear.
- Same hairstyle, face shape, and build across frames.
- Same bed/mattress design across frames before and after the crash.
- His expressions should move through pride, comfort, surprise, sadness, and
  sleepy resignation.

Do not turn him into a caricature. He should feel like an ordinary person in an
old textbook story.

## Four-Frame Storyboard Intent

### Frame 1: The Dream Bed

Purpose:

- Show the emotional value of the bed.

Content:

- The young man indoors with his newly bought real bed.
- The bed has a clear mattress and visible spring/bed-frame structure if it can
  be shown naturally.
- He looks proud and happy.
- The room can be simple to show why the bed matters.

Must avoid:

- Price tags, labels, store signs, or readable text.

### Frame 2: Hot Night On The Roof

Purpose:

- Make the roof choice understandable.

Content:

- Warm night, flat roof, bed set up safely within the story world.
- Courtyard or house layout visible enough to explain the setting.
- The man sleeps comfortably on the bed.
- The mood is calm, hot, and still.

Must avoid:

- Making the roof look like a modern high-rise balcony.
- Encouraging imitation. This is a story scene, not a suggestion.

### Frame 3: The Storm

Purpose:

- Show the action chain without horror.

Content:

- Wind and storm arrive.
- The bed frame is being swept off the roof or tumbling away.
- The mattress is separated or cushioning the man in a comic, non-graphic way.
- The courtyard below is visible enough to connect the sentence.

Must avoid:

- A terrifying falling-body pose.
- Injury or danger close-up.

### Frame 4: Back To The Floor

Purpose:

- Land the circular ending.

Content:

- Broken bits of wood and metal in the courtyard or near the house.
- The man is unhurt, still with the mattress.
- Final visual may show him carrying the mattress indoors or already sleeping on
  it on the floor.
- The feeling should be sad but funny: the dream bed is gone, but sleep wins.

Must avoid:

- Visual text explaining the joke.
- Overly tragic facial expression.

## Script And Courseware Presentation

The script should speak to the student in Chinese, with short English phrases
inserted where the language matters.

Required presentation principles:

- Begin by explaining the roof/courtyard background.
- Then tell the story as a circular comedy.
- Keep the safety boundary clear.
- Use Chinese-first story spine for recitation.
- Attach English chunks to Chinese anchors.
- Keep grammar explanations semantic and usable.
- Do not put image prompt language into the teaching script.

Recommended page rhythm:

1. Hook: why this story looks strange to us today.
2. Background: Tehran, heat, flat roof, courtyard.
3. Story setup: tired of floor, saved for years, real bed.
4. Dream moment: proud owner, springs and mattress.
5. Roof decision: hot weather, roof sleeping.
6. Disaster action: storm, gust, swept off roof, crashing into courtyard.
7. Miracle: smashed bed, unhurt man.
8. Comic ending: mattress back on floor, promptly asleep.
9. Language board: compressed opening, action verbs, `not...until`,
   `Although...`, `promptly`.
10. Read-aloud / shadowing.
11. Living-scene exercise.
12. Chinese-to-English exercise.
13. Final flow reminder.

## Read-Aloud And Pronunciation Direction

The read-aloud section should preserve the existing courseware flow:

`听课文全文 -> 听原音 -> 录一句 -> 获取反馈`

For Lesson 49, emphasize:

- Chunking long sentences before recording.
- Clear stress on action verbs.
- Natural pause after fronted phrases.
- Not rushing the storm sentence.

Suggested chunking:

- `Tired of sleeping on the floor,`
- `a young man in Teheran`
- `saved up for years`
- `to buy a real bed.`
- `For the first time in his life,`
- `he became the proud owner`
- `of a bed which had springs and a mattress.`
- `Because the weather was very hot,`
- `he carried the bed on to the roof of his house.`
- `A gust of wind`
- `swept the bed off the roof`
- `and sent it crashing`
- `into the courtyard below.`
- `Although the bed was smashed to pieces,`
- `the man was miraculously unhurt.`
- `After he had put it on the floor,`
- `he promptly went to sleep again.`

Pronunciation watchlist:

- `Teheran`
  - Use the textbook spelling when reading the passage.
  - Explain that modern spelling is usually `Tehran`.
- `mattress`
  - Keep it short and clear.
- `courtyard`
  - Two parts: `court` + `yard`.
- `miraculously`
  - Break into syllables during practice.
- `promptly`
  - Crisp final consonants.

Feedback should reward:

- Correct sentence rhythm.
- Clear contrast in `Although...`
- Smooth long action sentence.
- Accurate key sounds in `mattress`, `courtyard`, `miraculously`, and
  `promptly`.

## Living-Scene Exercise Direction

The living-scene exercise should modernize the pattern safely.

Target function:

- Say that you are tired of something.
- Say you saved up to buy something.
- Tell a small accident with vivid action verbs.
- End with a comic or practical result.

Safe modern scene idea:

`孩子一直用旧椅子写作业，攒钱买了一把新椅子。因为房间很热，他把椅子搬到窗边。忽然一阵风把桌上的作业纸吹得到处都是。他收拾好纸，又坐回椅子继续写。`

Why this works:

- It keeps `tired of`, `saved up`, `because`, `a gust of wind`, `swept`, and
  `promptly`.
- It avoids unsafe roof imitation.
- It connects the old story to a child's current life.

Possible student prompts:

- `I was tired of...`
- `I saved up for...`
- `Because the weather was very hot...`
- `A gust of wind swept...`
- `Although..., ...`
- `I promptly...`

## Suggested You Too Scene

Scene title:

`A Windy Homework Day`

Chinese setup:

`你写作业时总觉得旧椅子不舒服，于是攒钱买了一把新椅子。天气很热，你把椅子搬到窗边。突然一阵风把作业纸吹得到处都是。你把纸捡回来，又马上继续写。`

Target dialogue / narration shape:

- `I was tired of using the old chair.`
- `I saved up for months to buy a new one.`
- `Because the room was very hot, I moved it near the window.`
- `A gust of wind swept my homework off the desk.`
- `Although the papers were everywhere, nothing was lost.`
- `I picked them up and promptly went back to work.`

Keep it safe:

- No roofs.
- No balconies.
- No climbing.
- No heavy furniture accidents.

## Chinese-To-English Exercise Direction

Use exercises that map directly to Lesson 49 structures.

Suggested items:

1. 他睡地板睡烦了。
   - `He was tired of sleeping on the floor.`
2. 他攒了很多年钱买一张真正的床。
   - `He saved up for years to buy a real bed.`
3. 他第一次拥有了一张有弹簧和床垫的床。
   - `For the first time in his life, he owned a bed which had springs and a mattress.`
4. 因为天气很热，他把床搬到了屋顶上。
   - `Because the weather was very hot, he carried the bed on to the roof.`
5. 一阵风把床从屋顶上刮了下来。
   - `A gust of wind swept the bed off the roof.`
6. 他直到床撞到地上才醒。
   - `He did not wake up until the bed had struck the ground.`
7. 尽管床摔成了碎片，他却奇迹般没有受伤。
   - `Although the bed was smashed to pieces, he was miraculously unhurt.`
8. 他立刻又睡着了。
   - `He promptly went to sleep again.`

Exercise notes:

- Keep source sentence patterns recognizable.
- Do not introduce new grammar burdens.
- Allow simpler first attempts, then guide toward textbook phrasing.

## Grammar Board

The grammar board should be practical and story-linked.

### 1. `Tired of doing..., ...`

Form:

`Tired of + V-ing, subject + action.`

Meaning:

`因为已经受够了某件事，所以做了后面的动作。`

Example:

`Tired of sleeping on the floor, he saved up for years to buy a real bed.`

### 2. `saved up for + time + to do`

Form:

`saved up for years/months to buy...`

Meaning:

`为了买某物，慢慢攒了很久。`

### 3. `which had...`

Form:

`a bed which had springs and a mattress`

Meaning:

`which had...` adds detail to the thing before it.

### 4. `not...until`

Form:

`did not wake up until...`

Meaning:

`直到某个时间点才发生。`

### 5. `Although..., ...`

Form:

`Although + surprising condition, unexpected result.`

Meaning:

`虽然前面发生了某事，后面的结果却和预期不一样。`

### 6. Action Chain

Form:

`A gust of wind swept the bed off the roof and sent it crashing into the courtyard below.`

Meaning:

`一个主语连续带出动作、方向和结果。`

Teaching note:

This sentence is worth slowing down. It is vivid writing and a useful recitation
anchor.

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

For Lesson 49, the final reminder can say:

`这一课先记住圆形故事：地板 -> 真床 -> 屋顶 -> 风暴 -> 床垫 -> 地板。然后把英文短语挂到每个画面上。`

## Acceptance Criteria

Lesson 49 production is acceptable only if:

- The student understands why the man carries the bed to the roof.
- The Tehran / hot climate / flat roof / courtyard bridge is short, clear, and
  non-stereotyped.
- A modern safety boundary is included.
- The story spine is Chinese-first, with English chunks attached after Chinese
  anchors.
- The title's double meaning is explained.
- The circular comedy is clear: floor -> dream bed -> broken bed -> floor.
- Vocabulary teaching includes `mattress`, `gust`, `swept`, `courtyard`,
  `smashed`, `miraculously`, `unhurt`, `glancing`, and `promptly`.
- `Tired of sleeping...`, `not...until`, `Although...`, and the storm action
  chain are explicitly taught.
- Generated illustrations contain no readable text, captions, labels, signs,
  speech bubbles, blank boxes, or fake UI.
- The protagonist and bed/mattress stay visually consistent across the four
  frames.
- The rooftop accident is comic and safe, not frightening or graphic.
- The script contains teaching content only, not storyboard/image prompt
  wording.
- The read-aloud / shadowing flow is included in the final course flow.
- The living-scene exercise modernizes the structure without unsafe roof or
  balcony imitation.
