# Lesson 55 Plan - Not a gold mine

This is the source-of-truth design card for producing Lesson 55. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 55 assets.

## Basic Info

- Lesson: 55
- Title: `Not a gold mine`
- Chinese title: `并非金矿`
- Core bridge: `这一课不要讲成“海盗知识课”或“考古课”，而要讲成一个期待很大、结果很小的寻宝反讽故事。新机器、海边洞穴、海盗藏宝、地下黄金这些元素会让孩子天然有兴趣，但课文真正好背的线是：大家以为找到 treasure 的梦快成真了，机器也显示地下有 gold，于是探宝队很兴奋地挖，最后却只找到一枚 almost worthless 的小金币和一个 empty tin trunk。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule.

- Keep the opening hook short.
  - Use 4-6 spoken lines only.
  - The hook should set up the treasure-hunt expectation and ironic result.
  - Do not retell the whole passage before the four `retell` frames.
  - Put the full treasure-search chain into the frame-by-frame retell section.
- Story spine must be Chinese-first.
  - Present the treasure-search chain first as Chinese scene anchors.
  - Attach short English chunks after each Chinese anchor.
  - Do not use an all-English arrow chain as the main student-facing memory
    path.
- The four illustrations must form one continuous story line.
  - They are not four isolated pirate / cave / machine pictures.
  - Each frame should inherit the situation from the previous frame.
  - The same search-party leader, same machine, same cave entrance, and same
    search party should carry through the sequence.
  - The emotional line should accumulate: hopeful approach -> machine signal ->
    excited digging -> disappointing find but continued hope.
  - Storyboard prompts should explicitly describe the causal relation between
    frames, so the images feel like four shots from one short film.
- Generated illustrations must be text-free.
  - No readable English or Chinese text inside images.
  - No readable label on the machine, coin, trunk, cave sign, map, notebook, or
    equipment.
  - No speech bubbles, captions, UI panels, fake lesson text, or empty text
    boxes inside images.
  - If the courseware needs words such as `The Revealer`, `treasure`, `detect`,
    or `worthless`, render them as real UI text outside the image.
- Keep the pirate / treasure material child-safe and grounded.
  - Do not turn the lesson into a scary cave adventure.
  - Do not show weapons, skeletons, cursed treasure, traps, or horror imagery.
  - Pirates are a background legend in this text, not the active characters.
  - The search party should look cautious and practical, not reckless.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, camera directions,
    or generated-image mechanics.
  - Storyboard prompts must not leak into spoken lesson content.

## Production Warnings

- Source-text issue:
  - The current lesson data contains `dug a hole two feel deep`.
  - Standard English should be `two feet deep`.
  - The Chinese translation already says `两英尺深`.
  - Because changing the passage data would touch `web/data/lessons.json`, a
    production thread should not silently edit the shared lesson text. If a
    source correction is required for displayed passage text, cloze, or passage
    audio, stop and ask for approval.
- `party` does not mean a celebration here.
  - In this lesson, `a search party` means a group of people searching.
  - Explain this explicitly; otherwise children may picture a birthday party in
    a cave.
- `Armed with the new machine` does not mean they carry weapons.
  - Here `armed with` means equipped with.
  - Student-facing explanation: `他们不是拿着武器，而是带着这台新机器。`
- `gold mine` needs concrete explanation.
  - A gold mine is a place where people dig or extract gold.
  - The title `Not a gold mine` means the cave is not a real source of riches.
  - It is a title about disappointment after big expectations.
- `The Revealer` is a machine name built from `reveal`.
  - Teach `reveal` as "show something hidden".
  - The machine name is memorable, but the image itself must not contain text.
- `worthless` is central to the irony.
  - Explain as "almost no value", not "completely meaningless".
  - Pair it with `treasure`, `gold`, and `something of value`.
- Avoid overteaching pirate history.
  - The student only needs to know the story convention: pirates are imagined
    as people who hid treasure near the sea.
  - The lesson is not a historical lecture on piracy.
- Keep cave safety clear.
  - Do not encourage children to enter caves or dig holes.
  - Student-facing line can be short: `现实里洞穴和挖掘都需要专业人员和安全许可。`

If production requires editing `web/data/lessons.json`, stop and ask for a
shared-data edit because it is outside the normal per-lesson write set.

## Lesson Positioning

Lesson 55 is a treasure-hunt irony story. The opening promises a near miracle:
dreams of finding lost treasure almost came true. A new machine called `The
Revealer` has been invented, and it has been used to detect buried gold. The
machine is taken into a cave near the seashore where pirates are said to have
hidden gold. A search party enters the cave hoping to find buried treasure. When
the leader examines soil near the entrance, the machine shows that there is gold
under the ground. The party gets excited and digs a hole two feet deep. The
result is anticlimactic: they find only a small gold coin, almost worthless.
They search the whole cave thoroughly and find only an empty tin trunk. Even so,
many people remain confident that `The Revealer` may soon reveal something
valuable.

The courseware should make the student understand:

`寻找失踪宝藏的梦想差点成真 -> 新机器 The Revealer 被发明出来 -> 它能探测地下埋藏的黄金 -> 机器被带到海边洞穴 -> 据说海盗过去在那里藏金子 -> 探宝队带着机器进洞 -> 队长检查洞口附近的土壤 -> 机器显示地下有金子 -> 大家很兴奋地挖了两英尺深 -> 最后只找到一枚几乎不值钱的小金币 -> 又彻底搜遍洞穴 -> 除了空铁皮箱什么也没找到 -> 尽管如此，人们仍相信机器很快会发现有价值的东西`

The central bridge is:

`这不是“真的找到宝藏”的故事，而是“期待被机器和传说推得很高，结果只找到一个很小的东西”的反讽。`

## One-Sentence Hook

A machine seems ready to reveal buried pirate treasure, but the first exciting
signal leads only to a tiny, almost worthless coin.

## Vivid Teaching Opening

The opening should establish the treasure-hunt irony quickly. It must be a short
hook, not a complete plot retelling. Keep it to 4-6 spoken lines so the first
visual does not stay on screen too long before the frame-by-frame retell begins.

Suggested teacher narration:

`想象你听说海边洞穴里可能有 pirates 留下的 gold。`

`现在又有一台新机器，名字叫 The Revealer，好像能把地下隐藏的东西 reveal 出来。`

`这听起来像 treasure dream almost came true。`

`可是这篇课文的笑点在落差：大家很兴奋，最后只找到一枚 almost worthless 的小金币。`

`今天先记住这条线：big dream, small result, still hopeful。`

Tone:

- Curious and lightly ironic.
- Keep the treasure-hunt excitement, but do not overpromise.
- Make the final disappointment clear without making the search party look
  stupid.
- Save the detailed sequence for the four `retell` frames.

## Story Focus

The treasure-search chain is:

1. Dreams of finding lost treasure almost come true.
2. A new machine called `The Revealer` has been invented.
3. The machine has been used to detect buried gold.
4. The machine is used in a cave near the seashore.
5. People say pirates used to hide gold there.
6. Pirates would often bury gold in the cave and fail to collect it.
7. A search party goes into the cave with the new machine.
8. They hope to find buried treasure.
9. The leader examines the soil near the cave entrance.
10. The machine shows there is gold under the ground.
11. The excited party digs a hole two feet deep.
12. They find a small gold coin.
13. The coin is almost worthless.
14. They search the whole cave thoroughly.
15. They find nothing except an empty tin trunk.
16. In spite of this, many people still believe `The Revealer` may find
    something valuable soon.

The production should make the contrast visible:

`lost treasure dream` versus `almost worthless coin`.

`new machine confidence` versus `empty tin trunk`.

## Chinese-First Story Spine For Courseware

Use this as the main student-facing story line.

1. 寻找失踪宝藏的梦想最近差点成真
   - `Dreams of finding lost treasure`
   - `almost came true recently`
2. 一台叫 The Revealer 的新机器已经被发明出来
   - `A new machine`
   - `called 'The Revealer'`
   - `has been invented`
3. 它已经被用来探测埋在地下的黄金
   - `has been used`
   - `to detect gold`
   - `which has been buried in the ground`
4. 这台机器被用在海边附近的一个洞穴里
   - `The machine was used`
   - `in a cave`
   - `near the seashore`
5. 据说海盗过去常在那里藏金子
   - `where -- it is said --`
   - `pirates used to hide gold`
6. 海盗过去常把金子埋在洞里，后来却没取走
   - `would often bury gold`
   - `in the cave`
   - `fail to collect it`
7. 探宝队带着新机器进了洞
   - `Armed with the new machine`
   - `a search party went into the cave`
8. 他们希望找到埋藏的宝藏
   - `hoping to find`
   - `buried treasure`
9. 队长正在检查洞口附近的土壤
   - `The leader of the party`
   - `was examining the soil`
   - `near the entrance to the cave`
10. 这时机器显示地下有金子
    - `when the machine showed`
    - `there was gold under the ground`
11. 大家很兴奋，挖了一个两英尺深的洞
    - `Very excited`
    - `dug a hole`
    - `two feet deep`
12. 最后，他们找到一枚小金币
    - `They finally found`
    - `a small gold coin`
13. 这枚金币几乎不值钱
    - `which was almost worthless`
14. 他们接着彻底搜遍了整个洞穴
    - `searched the whole cave`
    - `thoroughly`
15. 但除了一只空铁皮箱，什么也没找到
    - `did not find anything`
    - `except an empty tin trunk`
16. 尽管如此，很多人仍相信机器很快会发现有价值的东西
    - `In spite of this`
    - `many people are confident`
    - `may reveal something of value`
    - `fairly soon`

Student memory prompt:

`先记中文寻宝线：宝藏梦差点成真 -> 新机器能探测埋藏黄金 -> 海边洞穴据说有海盗藏宝 -> 探宝队进洞 -> 机器显示有金子 -> 大家兴奋开挖 -> 只找到几乎不值钱的小金币 -> 又搜到空铁皮箱 -> 仍然相信机器以后会找到值钱东西。再把英文短语挂到每个节点上。`

Do not show this as an all-English arrow chain in the student-facing courseware.

## Recitation Blocks

Break the passage into four Chinese-first recitation blocks:

### Block 1: 宝藏梦和新机器

Chinese anchor:

`寻找失踪宝藏的梦想最近差点成真，因为一台叫 The Revealer 的新机器已经被发明出来，并被用来探测地下埋藏的黄金。`

English chunks:

- `Dreams of finding lost treasure`
- `almost came true recently`
- `A new machine called 'The Revealer'`
- `has been invented`
- `has been used`
- `to detect gold`
- `which has been buried in the ground`

Teaching point:

- This block introduces the promise: technology may reveal treasure.
- It is excellent for passive voice in a machine / invention context.
- `reveal` and `detect` should be connected, not taught as isolated words.

### Block 2: 海边洞穴和海盗传说

Chinese anchor:

`这台机器被用在海边附近的一个洞穴里。据说海盗过去常在那里藏金子，他们常把金子埋在洞里，却没能取走。`

English chunks:

- `was used in a cave`
- `near the seashore`
- `where -- it is said --`
- `pirates used to hide gold`
- `would often bury gold`
- `fail to collect it`

Teaching point:

- This block builds the background without turning into a pirate lecture.
- Teach `used to` and `would often` as past habits.
- Keep `pirates` as story background.

### Block 3: 机器显示有金子，大家兴奋开挖

Chinese anchor:

`探宝队带着新机器进洞，希望找到埋藏的宝藏；队长检查洞口附近的土壤时，机器显示地下有金子，于是大家兴奋地挖了两英尺深。`

English chunks:

- `Armed with the new machine`
- `a search party`
- `went into the cave`
- `hoping to find buried treasure`
- `was examining the soil`
- `near the entrance to the cave`
- `the machine showed`
- `there was gold under the ground`
- `Very excited`
- `dug a hole two feet deep`

Teaching point:

- This block is the peak of expectation.
- Teach `Armed with` as equipped with, not weapons.
- Teach `party` as group.
- Note the source typo `two feel deep`; normal English is `two feet deep`.

### Block 4: 结果很小，但希望还在

Chinese anchor:

`他们最后只找到一枚几乎不值钱的小金币；接着彻底搜遍整个洞穴，也只发现一个空铁皮箱。尽管如此，人们仍相信机器很快会发现有价值的东西。`

English chunks:

- `finally found`
- `a small gold coin`
- `almost worthless`
- `searched the whole cave thoroughly`
- `did not find anything`
- `except an empty tin trunk`
- `In spite of this`
- `many people are confident`
- `may reveal something of value`
- `fairly soon`

Teaching point:

- This block is the irony and final hope.
- The emotional contrast is important: big expectation, small result.
- `In spite of this` carries the final turn.

## Modern Child Bridge

For a modern child, connect the text to familiar "hidden thing + detecting
tool" experiences:

- treasure-hunt games
- metal detector videos or museum demonstrations
- finding a lost object with a tracker or search tool
- scanning / detecting something hidden
- opening an old box and expecting something valuable, but finding something
  ordinary

Suggested child-facing line:

`你不一定见过海盗藏宝洞，但你一定懂这种心理：如果一个机器告诉你地下可能有金子，你会马上觉得 treasure dream 要成真了。`

Do not replace the original story. Use the modern bridge to make the old
treasure-cave setup understandable.

## Treasure, Cave, And Pirate Bridge

Keep this background short and visual.

Student-facing explanation:

`pirates 是海盗。在很多老故事里，海盗会把 gold 或 treasure 藏在海边、岛上或 cave 里。课文不是让我们研究海盗历史，而是借这个背景制造寻宝期待。`

Important boundaries:

- Do not make pirates active characters in the main story.
- Do not add a pirate fight, map riddle, or curse.
- The search party is investigating an old legend with a machine.

## Machine Name Bridge

### `The Revealer`

Teach the name through `reveal`:

- `reveal` means show something that was hidden.
- `The Revealer` means "the machine that reveals hidden things".
- It is a dramatic name, which is why the expectation becomes high.

Child-facing line:

`这台机器叫 The Revealer，因为它好像能 reveal 隐藏在地下的东西。名字本身就很会制造期待。`

### `detect`

Teach:

- `detect` means discover or notice something that is not directly visible.
- A machine can detect metal, gold, heat, sound, or movement.
- In this lesson, the machine detects gold under the ground.

## Title And Irony Bridge

### `Not a gold mine`

Teach the title after the story expectation is clear.

- A `gold mine` is a place where people can get a lot of gold.
- The cave has a tiny gold coin, but it is not a real gold mine.
- The title is ironic because the search party expected treasure.

Child-facing line:

`标题 Not a gold mine 不是说完全没有金子，而是说：这不是一个能让人发财的大金矿。期待很大，结果很小。`

## Main Language Focus

### Passive Voice In A Machine Story

Core sentences:

- `A new machine called 'The Revealer' has been invented.`
- `it has been used to detect gold`
- `gold which has been buried in the ground`
- `The machine was used in a cave`

Teaching:

- The focus is on the machine and the gold, not on who invented or used it.
- Passive voice fits inventions, tools, discoveries, and buried objects.
- Do not overteach all passive tenses; keep it tied to the story.

Student-facing idea:

`这一课的被动语态不是抽象语法，而是机器和宝藏故事天然需要：机器被发明、被使用，金子被埋在地下。`

### Past Habit: `used to` And `would often`

Core sentences:

- `pirates used to hide gold`
- `The pirates would often bury gold`

Teaching:

- `used to` shows a past habit or past situation.
- `would often` shows repeated past action.
- Both help make the pirate background feel like an old legend.

Child-facing line:

`这里不是说海盗现在还天天藏金子，而是在讲过去传说里经常发生的事。`

### Expectation And Disappointment

High-value expressions:

- `almost came true`
- `hoping to find`
- `Very excited`
- `finally found`
- `almost worthless`
- `did not find anything except...`
- `In spite of this`

Teaching:

- These expressions carry the emotional curve.
- The student should hear the shift from hope to disappointment to continued
  hope.

### `where -- it is said --`

Core phrase:

`where -- it is said -- pirates used to hide gold`

Teaching:

- `it is said` means people say this, but it may be a legend or report.
- The dashes create a parenthetical comment.
- Keep explanation practical; do not turn it into punctuation theory.

### `In spite of this`

Core sentence:

`In spite of this, many people are confident...`

Teaching:

- It means "although this disappointing result happened".
- It turns from failure to continued hope.
- Very useful for writing: bad result, but people still believe.

## Vocabulary Plan

Prioritize vocabulary that supports the treasure-search and irony.

### `gold`

- Gold is both a material and the object of the search.
- Pair with `gold mine`, `gold coin`, and `detect gold`.

### `mine`

- A place where people dig valuable material from the ground.
- `gold mine` is not the same as a cave with one coin.

### `treasure`

- Valuable things hidden, lost, or discovered.
- Pair with `lost treasure` and `buried treasure`.

### `revealer` / `reveal`

- `reveal` means show something hidden.
- `The Revealer` is the machine name.
- Do not put readable text on the machine in images.

### `invent`

- Meaning: create something new.
- In this text: `has been invented`.
- Good passive-voice word.

### `detect`

- Meaning: find or notice something hidden or hard to see.
- Pair with machines and instruments.

### `bury` / `buried`

- Meaning: put something under the ground.
- Pair with `buried treasure`.

### `cave`

- Natural hollow place in rock or earth.
- Keep cave safety boundary clear.

### `seashore`

- The land beside the sea.
- Link to pirate-story setting.

### `pirate`

- Sea robber in old stories.
- Background concept only.

### `armed`

- In this lesson: equipped with.
- Do not teach it primarily as weapons here.

### `party`

- In this lesson: a group of people.
- `search party` means search group.

### `soil`

- Earth / dirt / ground material.
- The leader examines soil near the entrance.

### `entrance`

- The place where you go in.
- Pair with `entrance to the cave`.

### `finally`

- Signals result after effort.
- Here it sets up the disappointing result.

### `worthless`

- Almost no value.
- Key irony word.

### `thoroughly`

- Completely and carefully.
- Pair with `searched the whole cave thoroughly`.

### `trunk`

- In this text, a large box or chest, not an elephant's trunk or car trunk.
- Explain as `tin trunk`: a metal storage box.

### `in spite of`

- Means despite / although the bad result happened.
- Good writing connector.

## Storyboard Continuity Rule

The storyboard must be designed as four linked shots from the same short film.
This is a production requirement, not an optional style preference.

Continuity spine:

`seashore cave legend -> machine detects gold -> excited digging -> tiny coin and empty trunk`

Frame-to-frame continuity:

- Frame 1 establishes the seashore cave, search party, and `The Revealer`
  machine.
- Frame 2 keeps the same cave entrance and machine; the leader examines soil
  near the entrance while the machine gives a signal.
- Frame 3 keeps the same spot and search party; the group digs where the signal
  was detected.
- Frame 4 keeps the same cave interior; the search ends with a tiny gold coin
  and an empty tin trunk, making the disappointment visible.

Prompt discipline:

- Do not generate four unrelated pirate-themed scenes.
- Do not show pirates as active present-day characters.
- Do not change the search-party leader's clothing, age, or face between
  frames.
- Do not let the coin or trunk appear before Frame 4.
- Do not let the machine disappear after Frame 1.
- Keep the cave and seashore visually connected across frames.

## Visual Direction

Overall visual style:

- Warm, realistic, child-friendly adventure illustration.
- Clear treasure-hunt mood, but not dark or scary.
- Same search-party leader across frames.
- Same machine across frames.
- No readable text inside images.
- No labels, captions, speech bubbles, or UI-like boxes.
- Cave should feel interesting and safe-looking, not claustrophobic horror.

The visuals should help the student remember:

`new machine -> pirate cave legend -> gold signal -> digging -> tiny coin -> empty trunk -> still hopeful`

Avoid:

- pirate combat
- weapons
- skeletons or curses
- scary cave monsters
- unsafe children digging
- readable maps, signs, labels, or machine names
- a huge pile of treasure, because that contradicts the lesson
- disconnected images with no causal link

## Character Consistency Brief

Use a consistent search-party leader:

`A calm adult search-party leader in a practical tan field jacket, dark trousers, short dark hair, focused expression, medium build, carrying a compact gold-detecting machine with a round sensor coil and small screen with no readable text.`

Supporting elements:

- Two or three adult search-party members in simple outdoor clothing.
- A cave near the seashore, with rock, sand, and muted daylight.
- The same machine should be visible in Frames 1-3 and optionally nearby in
  Frame 4.
- The tiny gold coin should be visually small in Frame 4, not a dramatic
  treasure pile.
- The empty tin trunk should look clearly empty but contain no readable marks.

## Four-Frame Storyboard Intent

### Frame 1: Seashore Cave And The New Machine

Purpose:

- Establish the treasure dream and the machine.
- Show the cave near the seashore.

Visual:

- The search-party leader and team stand near a cave entrance by the sea.
- The leader carries the compact detecting machine.
- The mood is hopeful and organized.
- The cave is visible, but not frightening.
- No readable text on the machine or equipment.

Teaching content:

- `Dreams of finding lost treasure`
- `A new machine called 'The Revealer'`
- `has been invented`
- `detect gold`

Continuity note:

- This frame establishes the leader, machine, search party, cave entrance, and
  seashore setting that must stay consistent later.

### Frame 2: Signal Near The Cave Entrance

Purpose:

- Show the machine detecting something underground.
- Make `soil` and `entrance` visible.

Visual:

- Same leader near the same cave entrance.
- The leader examines the soil with the machine sensor close to the ground.
- Other team members watch with cautious excitement.
- A subtle visual cue can suggest the machine has detected something, but no
  readable screen text or labels.

Teaching content:

- `Armed with the new machine`
- `was examining the soil`
- `near the entrance to the cave`
- `the machine showed`
- `there was gold under the ground`

Continuity note:

- The detected spot in this frame should become the digging spot in Frame 3.

### Frame 3: Excited Digging

Purpose:

- Show the peak of expectation.
- Make the two-foot dig practical and safe.

Visual:

- Same cave area and same search party.
- The team digs a modest hole where the machine signaled.
- The leader watches or helps, visibly excited but controlled.
- The machine is nearby.
- No dangerous deep pit or reckless action.

Teaching content:

- `Very excited`
- `dug a hole`
- `two feet deep`
- `hoping to find buried treasure`

Continuity note:

- This frame should clearly follow from the signal in Frame 2.
- Do not reveal the coin yet if the composition can delay the result until
  Frame 4.

### Frame 4: Tiny Coin, Empty Tin Trunk

Purpose:

- Show the anticlimax and final hope.
- Make "not a gold mine" visible.

Visual:

- Same cave setting after the search.
- The leader holds or examines one tiny gold coin.
- An empty tin trunk sits nearby, open and clearly empty.
- The team looks disappointed but not defeated.
- The machine remains nearby, suggesting people still believe it may find
  something later.

Teaching content:

- `finally found a small gold coin`
- `almost worthless`
- `searched the whole cave thoroughly`
- `except an empty tin trunk`
- `In spite of this`
- `may reveal something of value`

Continuity note:

- The frame should feel like the result of the previous search, not a new
  location.
- There must not be a large treasure pile.

## Script And Courseware Presentation

The script should follow this pacing:

1. Short hook: treasure-hunt expectation and irony only.
2. Four `retell` frames:
   - Frame 1: new machine and seashore cave.
   - Frame 2: machine signal near cave entrance.
   - Frame 3: excited digging.
   - Frame 4: tiny coin, empty tin trunk, continued hope.
3. Discussion:
   - `gold mine` title and irony.
   - `The Revealer` / `reveal` / `detect`.
   - `party` as search group.
   - `Armed with` as equipped with.
   - `two feel deep` source typo.
4. Passage normal reading.
5. Three vocabulary blocks.
6. Grammar board.
7. You Too living-scene transfer.
8. Outro with the full practice order.

The opening must not contain the full story chain. Do not say all of:

`新机器 -> 海边洞穴 -> 海盗藏宝 -> 机器显示有金子 -> 挖洞 -> 找到小金币 -> 空铁皮箱 -> 仍然相信`

inside the hook. Save that sequence for the four retell frames.

Student-facing Chinese should feel like a guided treasure-search irony:

- `先看为什么大家会期待宝藏。`
- `再看机器怎样把期待推高。`
- `然后看大家为什么兴奋开挖。`
- `最后看结果为什么反讽。`

## Read-Aloud And Pronunciation Direction

Choose 5-8 high-value sentences for read-aloud. Suggested targets:

1. `Dreams of finding lost treasure almost came true recently.`
   - Focus: `Dreams of finding lost treasure`, `almost came true`.
2. `A new machine called 'The Revealer' has been invented and it has been used to detect gold which has been buried in the ground.`
   - Focus: passive chain, `The Revealer`, `detect`, `buried`.
3. `The machine was used in a cave near the seashore where -- it is said -- pirates used to hide gold.`
   - Focus: chunking, parenthetical `it is said`, `used to`.
4. `The pirates would often bury gold in the cave and then fail to collect it.`
   - Focus: `would often`, `bury`, `fail to collect`.
5. `Armed with the new machine, a search party went into the cave hoping to find buried treasure.`
   - Focus: `Armed with`, `search party`, `hoping to find`.
6. `The leader of the party was examining the soil near the entrance to the cave when the machine showed that there was gold under the ground.`
   - Focus: long-sentence grouping, `examining the soil`, `entrance`.
7. `They finally found a small gold coin which was almost worthless.`
   - Focus: irony, `finally`, `almost worthless`.
8. `In spite of this, many people are confident that 'The Revealer' may reveal something of value fairly soon.`
   - Focus: `In spite of this`, `confident`, `reveal something of value`.

Read-aloud feedback should reward:

- clear passive-voice chunking
- correct stress on expectation words
- natural contrast between excitement and disappointment
- careful pronunciation of `treasure`, `Revealer`, `detect`, `buried`,
  `thoroughly`, and `worthless`

## Living-Scene Exercise Direction

Use a safe modern transfer that preserves expectation, detecting, and
disappointment.

Recommended scene:

`The Old Box Search`

Chinese setup:

`孩子在家里发现一个旧铁盒，以为里面可能有很值钱的东西。他用手电筒和磁铁认真检查，觉得自己快找到 treasure 了。结果盒子里只有一枚旧游戏币，几乎不值钱。尽管如此，他还是相信家里某个角落也许会找到更有价值的东西。`

Target transfer:

- `lost treasure`
- `detect`
- `buried` / hidden
- `search party` as a joking family search group
- `finally found`
- `almost worthless`
- `In spite of this`
- `something of value`

This keeps the lesson's expectation-and-disappointment structure without
encouraging unsafe cave exploration or digging.

## Suggested You Too Scene

Scene title:

`The Old Box Search`

Role:

- Student tells a short search story about expecting something valuable in an
  old box.
- Parent/teacher asks guiding questions.

Expected student output shape:

1. `Dreams of finding lost treasure almost came true.`
2. `I found an old tin box in the cupboard.`
3. `I used a flashlight to detect something inside it.`
4. `Very excited, I opened the box.`
5. `I finally found a small game coin.`
6. `It was almost worthless.`
7. `In spite of this, I am still confident that I may find something of value one day.`

Keep the exercise short. The goal is transfer of expectation, search, result,
and contrast, not a new long story.

## Extension Practice Direction

Lesson 55 extension production should be extension-only if the main lesson
assets already exist. Create `web/data/extension/lesson_55.json` and register
`55` in `web/data/extension/index.json`. Do not regenerate script, audio,
timeline, read-aloud data, or storyboard images.

### Extension Reading

Use an original same-theme treasure-search passage that is safe, small-scale,
and permitted. Do not retell the cave, pirate, Revealer-machine, two-foot hole,
gold coin, and empty box sequence. A modern bridge can be an old box in a school
cupboard, a history-club display, a family storage room, or a supervised
beach-clean activity. Keep the expectation-and-disappointment structure: a
promising signal or clue, an excited search, a tiny almost-worthless find, and
hope that something valuable may appear later.

Suggested title: `The Old Box Search`

Recommended word bank: `treasure`, `detect`, `buried`, `signal`, `display`,
`armed with`, `examine`, `showed that`, `almost worthless`, `in spite of`.

The 5 reading questions should test:

1. what the search party hoped to find
2. what tool or clue made them excited
3. what they actually found
4. why the result was disappointing
5. why hope remains in spite of the small result

### Sentence Writing

Use 5 patterns:

1. `Dreams of ... almost came true`
   - Source: `Dreams of finding lost treasure almost came true recently.`
   - Focus: expectation almost becoming real.
   - Must include: `Dreams of` and `almost came true`
2. `has been invented and ...`
   - Source: `A new machine called 'The Revealer' has been invented.`
   - Focus: passive present perfect plus naming an invention or tool.
   - Must include: `called` and `has been invented`
3. `has been used to detect ...`
   - Source: `It has been used to detect gold which has been buried in the ground.`
   - Focus: purpose of a tool, with passive voice.
   - Must include: `has been used to detect`
4. `Armed with ..., ...`
   - Source: `Armed with the new machine, a search party went into the cave...`
   - Focus: opening a sentence with equipment or preparation.
   - Must include: `Armed with`
5. `In spite of this, ...`
   - Source: `In spite of this, many people are confident...`
   - Focus: hope despite disappointing evidence.
   - Must include: `In spite of this`

## Chinese-To-English Exercise Direction

The translation practice should reinforce the treasure-search chain and passive
voice.

Suggested chunk logic:

1. 寻找失踪宝藏的梦想差点成真；一台叫 The Revealer 的新机器已经被发明出来。
2. 这台机器被用来探测埋在地下的黄金，并被带到海边附近的洞穴。
3. 据说海盗过去常在那里藏金子；探宝队带着新机器进洞，希望找到埋藏的宝藏。
4. 机器显示地下有金子，大家很兴奋地挖了两英尺深。
5. 最后只找到一枚几乎不值钱的小金币和一个空铁皮箱；尽管如此，人们仍然有信心。

High-value expressions to preserve:

- `Dreams of finding lost treasure`
- `almost came true`
- `has been invented`
- `has been used to detect`
- `has been buried in the ground`
- `used to hide gold`
- `would often bury gold`
- `Armed with the new machine`
- `a search party`
- `hoping to find buried treasure`
- `was examining the soil`
- `near the entrance to the cave`
- `dug a hole two feet deep`
- `almost worthless`
- `searched the whole cave thoroughly`
- `In spite of this`
- `may reveal something of value`

If manual chunks are added to `web/data/lessons.json`, Chinese and English chunk
counts must match. Otherwise rely on the frontend fallback.

## Grammar Board

### 1. Passive Voice For Inventions And Tools

Board idea:

`has been invented / has been used / was used / has been buried`

Examples:

- `The machine has been invented.`
- `It has been used to detect gold.`
- `Gold has been buried in the ground.`

Chinese anchor:

`机器被发明、被使用；金子被埋藏。`

### 2. `called...`

Core phrase:

`A new machine called 'The Revealer'`

Teaching:

- `called...` gives the name of a person, object, or machine.
- Keep it as a useful phrase, not a long grammar lecture.

### 3. `used to`

Core phrase:

`pirates used to hide gold`

Meaning:

`过去常常这样，现在不是在说现在。`

### 4. `would often`

Core phrase:

`The pirates would often bury gold`

Meaning:

`过去经常重复做的动作。`

### 5. `Armed with`

Core phrase:

`Armed with the new machine`

Teaching:

- In this text it means equipped with.
- Do not translate as carrying weapons.

### 6. `was doing...when...`

Core sentence:

`The leader of the party was examining the soil ... when the machine showed...`

Teaching:

- One action was in progress.
- Then a key event happened.

Chinese anchor:

`正在检查土壤的时候，机器显示地下有金子。`

### 7. `except`

Core phrase:

`did not find anything except an empty tin trunk`

Meaning:

`除了一个空铁皮箱，什么也没找到。`

### 8. `In spite of this`

Board idea:

`bad result + in spite of this + continued hope`

Example:

- `In spite of this, many people are confident...`

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

`这一课先把寻宝反讽线背熟：宝藏梦 -> 新机器 -> 海边洞穴 -> 海盗传说 -> 机器显示有金子 -> 兴奋开挖 -> 小金币几乎不值钱 -> 空铁皮箱 -> 仍然有希望。跟读时注意被动语态长句分组；生活场景里，用 detect, finally found, almost worthless, In spite of this 讲一个自己的“期待很大、结果很小”的搜索故事。`

## Acceptance Criteria

- The extension practice follows the `Extension Practice Direction` above,
  creates `web/data/extension/lesson_55.json`, and registers the lesson in
  `web/data/extension/index.json`.
Lesson 55 is ready for production when:

- The opening hook is 4-6 spoken lines and does not retell the whole passage.
- The lesson is framed as a treasure-hunt irony story, not a pirate history
  lesson.
- The student-facing story spine is Chinese-first.
- The `two feel deep` source-text issue is explicitly handled or flagged before
  passage audio/display decisions.
- The four illustrations form one continuous cause-and-effect story line.
- Storyboard prompts preserve the same search-party leader, machine, cave, and
  search party across frames.
- Generated illustrations contain no readable text, labels, captions, or empty
  text boxes.
- The machine name `The Revealer` is explained through `reveal`.
- `party` is explained as a search group, not a celebration.
- `Armed with` is explained as equipped with, not weapons.
- `Not a gold mine` is explained as ironic disappointment after high
  expectation.
- Pirate and cave background stays short, safe, and non-scary.
- The living-scene transfer uses a safe old-box or hidden-object search scenario.
- Read-aloud includes the passive-voice machine sentence, the pirate cave
  background sentence, the long soil / entrance sentence, and the final
  `In spite of this` sentence.
- The outro includes `⓪ 跟读` before `① 生活场景`, with the concrete read-aloud
  steps.
