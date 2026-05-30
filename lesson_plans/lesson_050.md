# Lesson 50 Plan - Taken for a ride

This is the source-of-truth design card for producing Lesson 50. A development
thread should read `AGENTS.md`, then `LESSON_PRODUCTION_PLAN.md`, then this file
before producing any Lesson 50 assets.

## Basic Info

- Lesson: 50
- Title: `Taken for a ride`
- Chinese title: `乘车兜风`
- Core bridge: `这一课的关键不是“坐公交”本身，而是让孩子先想象到一个已经很陌生的旧式公交场景：车上除了 driver 还有 conductor。conductor 在车厢里卖票、查票、照看乘客，也可能提醒乘客在哪里下车。主人公把“到站提醒”交给了 conductor，结果 conductor 忘了，他就被带着多坐了一圈。`

## Non-Negotiable Production Rules

This plan follows the current courseware presentation rule.

- Story spine must be Chinese-first.
  - Present the plot first as a Chinese scene line.
  - Attach short English chunks after each Chinese anchor.
  - Do not use an all-English arrow chain as the main student-facing memory
    path.
- Generated illustrations must be text-free.
  - No readable English text inside images.
  - No route numbers, destination boards, bus-stop names, tickets with text,
    map labels, speech bubbles, captions, or fake UI text inside images.
  - No empty boxes, blank signs, placeholder labels, or fake text areas.
  - If the courseware needs text, render it as real UI text outside the image.
- Keep script and image prompts separate.
  - Teaching script must not contain image prompt wording, visual style
    instructions, camera directions, or generated-image mechanics.
  - Storyboard prompts must not become spoken lesson content.
- Make the old bus system visible before teaching the joke.
  - Driver drives the bus.
  - Conductor moves around the bus, sells/checks tickets, and helps passengers.
  - The passenger relies on the conductor to tell him where to get off.
- Keep the scene light and safe.
  - No dangerous bus driving, traffic accident, or scary lost-child tone.
  - The joke is mild: the passenger enjoys the view and rides too far.

## Production Warnings

- Explain `conductor` early and concretely.
  - Many children today have never seen a bus conductor.
  - Do not assume they know the word from public transport.
  - Also distinguish it from a music conductor if useful: here it is a bus
    conductor, not someone conducting an orchestra.
- Do not modernize the story too quickly.
  - If the script immediately says "today we use phones", the old setting may
    disappear.
  - First build the old bus scene, then compare it with GPS, automatic stop
    announcements, bus cards, and mobile payment.
- Clarify why the protagonist is not simply careless.
  - He tells the conductor his destination as soon as he gets on.
  - The conductor promises to tell him where to get off.
  - He sits in front to enjoy the countryside.
  - He is relying on a human reminder in a pre-smartphone travel scene.
- Explain `Woodford Green` as a place name.
  - Do not let the child interpret it as literally "a green field called
    Woodford".
  - It is enough to say: this is the name of the place he wants to go.
  - Avoid overloading the lesson with detailed local geography.
- Make the title's idiom gentle.
  - `take someone for a ride` can mean to trick or cheat someone.
  - In this story, it is not malicious cheating; it is a comic accident where he
    is literally taken for an extra ride.

If production requires editing `web/data/lessons.json`, stop and ask for a
shared-data edit because it is outside the normal per-lesson write set.

## Lesson Positioning

Lesson 50 is a small travel comedy from an older public-transport world. A
passenger loves travelling in the country but does not like losing his way. He
gets on a bus to Woodford Green and asks the conductor to tell him where to get
off. The conductor agrees. The passenger sits at the front of the bus and enjoys
the countryside view. After some time, he suddenly realizes he is the only
passenger left. The bus has reached the end of the route. The conductor then
remembers that he forgot to put the passenger off. Since the bus is going back,
the passenger decides to stay on the bus.

The courseware should make the student understand:

`喜欢乡间旅行但不喜欢迷路 -> 去 Woodford Green 但不知道在哪下车 -> 上车告诉 conductor -> conductor 说会提醒他 -> 他坐前排看风景 -> 过了一会儿车停了 -> 一看车上只剩自己 -> conductor 说终点到了 -> 他问这里是不是 Woodford Green -> conductor 才想起忘了叫他下车 -> 车现在要往回开 -> 他决定继续坐`

The central bridge is:

`没有手机导航、没有自动报站的时候，乘客可能真的会依赖 conductor 提醒下车。`

## One-Sentence Hook

A passenger asks an old bus conductor to tell him where to get off, enjoys the
countryside too much, and only realizes the mistake when the bus reaches the end
of the route.

## Vivid Teaching Opening

The opening should help the child see the vanished job before hearing the
dialogue.

Suggested teacher narration:

`今天我们坐公交，通常是刷卡、扫码、听自动报站，或者看手机地图。可是课文里的公交车不是这样的。那时候车上除了 driver，还有一个 conductor。driver 负责开车，conductor 在车厢里走动，卖票、查票，也会照看乘客。`

`所以当这个人上车时，他对 conductor 说：I'm going to Woodford Green, but I don't know where it is. 这句话的意思不是他完全没脑子，而是他不知道到哪一站下车。conductor 回答：I'll tell you where to get off. 也就是：到了该下车的地方，我会告诉你。`

`于是他放心地坐到前排，看 countryside 的风景。可是他看得太投入，conductor 也忘了提醒。等车停下来，他才发现整辆车上只剩他一个乘客。`

`最后 conductor 说：I forgot to put you off. 这里不是“我让你生气了”，而是“我忘了提醒你下车/让你下车”。更好笑的是，车马上要往回开，所以他说：in that case, I prefer to stay on the bus.`

Tone:

- Conversational and visual.
- Mildly comic, not anxious.
- Make the old system feel logical before explaining why the mistake happens.

## Story Focus

The travel-comedy chain is:

1. The narrator likes travelling in the country.
2. He does not like losing his way.
3. He goes on an excursion.
4. The trip takes longer than he expected.
5. He gets on a bus to Woodford Green.
6. He tells the conductor he does not know where it is.
7. The conductor promises to tell him where to get off.
8. He sits at the front to get a good view of the countryside.
9. After some time, the bus stops.
10. He looks round and realizes he is the only passenger left.
11. The conductor says he has to get off here.
12. The bus has reached the end of the route.
13. He asks whether this is Woodford Green.
14. The conductor suddenly remembers the mistake.
15. The conductor forgot to put him off.
16. The narrator says he will get off here.
17. The conductor says the bus is going back now.
18. The narrator decides to stay on the bus.

The production should make the contrast visible:

`他想避免迷路` versus `他因为太相信 conductor，反而坐过了站`.

## Chinese-First Story Spine For Courseware

Use this as the main student-facing story line.

1. 他喜欢乡间旅行，但不喜欢迷路
   - `I love travelling in the country`
   - `but I don't like losing my way`
2. 最近他去短途旅行
   - `I went on an excursion recently`
3. 这趟旅行比预想更久
   - `my trip took me longer than I expected`
4. 他上车时告诉 conductor 自己要去哪
   - `as I got on the bus`
   - `I said to the conductor`
5. 他不知道在哪里下车
   - `I don't know where it is`
6. conductor 说会告诉他哪里下车
   - `I'll tell you where to get off`
7. 他坐在车前面看乡间风景
   - `in the front of the bus`
   - `to get a good view of the countryside`
8. 过了一会儿，车停了
   - `After some time`
   - `the bus stopped`
9. 他环顾四周，震惊地发现只剩自己
   - `Looking round`
   - `with a shock`
   - `the only passenger left`
10. conductor 说终点到了
    - `You'll have to get off here`
    - `This is as far as we go`
11. 他问这里是不是 Woodford Green
    - `Is this Woodford Green?`
12. conductor 突然想起忘了提醒他下车
    - `Oh dear`
    - `I forgot to put you off`
13. 他说那就在这里下吧
    - `It doesn't matter`
    - `I'll get off here`
14. conductor 说车现在要开回去
    - `We're going back now`
15. 既然这样，他决定继续坐车
    - `in that case`
    - `I prefer to stay on the bus`

Student memory prompt:

`先记中文电影线：上车问 conductor -> conductor 答应提醒 -> 他看风景 -> 车到终点 -> conductor 才发现忘了叫他下车 -> 车要返回 -> 他继续坐。再把英文短语挂到每个镜头上。`

Do not show this as an all-English arrow chain in the student-facing courseware.

## Recitation Blocks

Break the passage into four Chinese-first recitation blocks:

### Block 1: 喜欢旅行，但怕迷路

Chinese anchor:

`他喜欢在乡间旅行，但不喜欢迷路。最近一次旅行比预想更久。`

English chunks:

- `I love travelling in the country`
- `but I don't like losing my way`
- `I went on an excursion recently`
- `my trip took me longer than I expected`

Teaching point:

- `in the country` means in the countryside, not "inside a nation".
- `losing my way` is the natural English way to say getting lost.
- `took me longer than I expected` is a very useful life sentence.

### Block 2: 上车求助 conductor

Chinese anchor:

`他上车时告诉 conductor 自己要去 Woodford Green，但不知道在哪里下车。conductor 说会提醒他。`

English chunks:

- `as I got on the bus`
- `I said to the conductor`
- `I don't know where it is`
- `I'll tell you where to get off`

Teaching point:

- This block needs the old bus background.
- The passenger is using the conductor as a human stop reminder.
- `where to get off` is a useful mini-pattern.

### Block 3: 看风景看过站

Chinese anchor:

`他坐在前排看乡间风景。过了一会儿车停了，他才发现车上只剩自己。`

English chunks:

- `in the front of the bus`
- `to get a good view of the countryside`
- `After some time`
- `Looking round`
- `with a shock`
- `the only passenger left on the bus`

Teaching point:

- Let the child see the empty bus.
- The comedy begins when he realizes everyone else has already got off.

### Block 4: 忘了提醒，只好多坐

Chinese anchor:

`conductor 说车到终点了，才想起忘了叫他下车。车要开回去，他干脆继续坐。`

English chunks:

- `This is as far as we go`
- `I forgot to put you off`
- `We're going back now`
- `in that case`
- `I prefer to stay on the bus`

Teaching point:

- `put you off` needs careful explanation in this context.
- The ending is practical and funny: if the bus is going back, staying on is
  easier than getting off in the wrong place.

## Old Bus Conductor Bridge

This bridge is essential for Lesson 50.

Suggested student-facing explanation:

`现在很多公交车只有司机，乘客自己刷卡、扫码，或者听自动报站。但在一些旧式公交车上，车上会有两个人：driver 和 conductor。driver 开车，conductor 管车厢里的乘客。`

`conductor 会卖票、查票，也会告诉乘客哪里下车。你可以把他想象成车上的“移动售票员和乘客管理员”。所以课文里的人一上车就对 conductor 说自己要去 Woodford Green，因为他希望 conductor 到站时提醒他。`

Make this visual:

- Driver: sitting at the front, hands on the wheel.
- Conductor: standing or walking in the bus, with a ticket bag/puncher or small
  ticket machine.
- Passenger: telling the conductor the destination.
- Other passengers: normal rural bus passengers, not a crowd.

Simple memory contrast:

`driver 开车，conductor 管乘客和车票。`

Do not overteach:

- No long history of public transport.
- No policy discussion about why the job disappeared.
- A short modern comparison is enough: automatic ticketing, bus cards, mobile
  payment, automatic announcements, and phone maps replaced much of this work.

## Modern Travel Bridge

Use the modern comparison to make the old setting understandable.

Today:

- We check a route on a phone.
- We listen to automatic stop announcements.
- We watch the map dot move.
- We scan a card or QR code.
- We can ask the driver, but the driver is not usually walking around helping
  each passenger.

In the story:

- There is no phone navigation.
- There is no automatic announcement in the student's mental picture.
- The conductor is the human reminder.
- The narrator trusts him and relaxes.

Suggested student-facing line:

`这篇课文像是一个没有手机地图、没有自动报站的时代。主人公不是没有问路，他问了；问题是，负责提醒他的人忘了。`

## Woodford Green And Place-Name Bridge

Keep this simple.

Suggested student-facing explanation:

`Woodford Green 是一个地名。孩子不用把它翻译成“木头福德绿色草地”，也不用记复杂地理。只要知道：这是他想去的地方，但他不知道哪一站下车。`

Production guidance:

- Do not make Woodford Green a geography lecture.
- Do not put a readable place name inside generated images.
- If the courseware needs the name, show it as UI text outside the image.
- The important contrast is destination versus end of route.

## Title And Idiom Bridge

Explain the title gently.

`Taken for a ride` has two layers:

- Literal:
  - He is taken for a ride on a bus.
  - In fact, he is taken for a longer ride than he expected.
- Idiomatic:
  - `take someone for a ride` can mean to trick or cheat someone.
  - Here, the conductor does not deliberately cheat him.
  - The title is playful because he is literally and accidentally taken for an
    extra ride.

Student-facing summary:

`标题像一个小玩笑：他确实被带着坐了一趟更长的车，但不是被坏人骗了，而是 conductor 忘了提醒他。`

## Main Language Focus

### `love doing` / `like doing`

Targets:

- `I love travelling in the country`
- `I don't like losing my way`

Explain:

- `love doing` means you enjoy the activity.
- `don't like doing` means you dislike the experience.
- The contrast sets up the whole story: he likes trips, but not getting lost.

Practice:

- `I love reading in the library, but I don't like losing my seat.`
- `I love taking photos, but I don't like losing my camera.`

### `in the country`

Target:

`travelling in the country`

Explain:

- Here `country` means countryside / rural area.
- It does not mean "in a country" such as China or Britain.

Contrast:

- `my country` = my nation.
- `the country` = the countryside.

### `lose one's way`

Target:

`losing my way`

Explain:

- Natural English for getting lost.
- It can mean not knowing which road or stop is right.

Practice:

- `I lost my way in the old part of town.`
- `She doesn't like losing her way in a new city.`

### `go on an excursion`

Target:

`I went on an excursion recently`

Explain:

- An `excursion` is a short trip, often for pleasure.
- It sounds more formal than `trip`.
- The story is not a daily commute; it is a small outing.

### `take + person + time`

Target:

`my trip took me longer than I expected`

Explain:

- In English, a trip/task can "take" time.
- `longer than I expected` means longer than I thought it would be.

Practice:

- `The homework took me longer than I expected.`
- `The bus ride took us longer than we expected.`

### `as I got on the bus`

Target:

`I said to the conductor as I got on the bus`

Explain:

- `as` here means when / while.
- He speaks at the moment he gets on the bus.

Teaching move:

- Map it to Chinese:
  - `我一上车就对 conductor 说...`

### `where to get off`

Target:

`I'll tell you where to get off.`

Explain:

- `where to + verb` is a compact pattern.
- It means the place where you should do the action.

Practice:

- `Can you tell me where to wait?`
- `Do you know where to buy tickets?`
- `Please tell me where to get off.`

### Purpose With `to`

Target:

`I sat in the front of the bus to get a good view of the countryside.`

Explain:

- `to get...` tells the purpose.
- He sits at the front because he wants a good view.

Student-facing idea:

`坐前排不是随便坐，是为了看风景。`

### Participial Phrase: `Looking round`

Target:

`Looking round, I realized with a shock...`

Explain:

- He first looks around.
- Then he realizes something shocking.
- English compresses the first action into `Looking round`.

Do not overteach terminology. Focus on story rhythm:

`一看周围 -> 才发现 -> 震惊了。`

### `the only passenger left`

Target:

`I was the only passenger left on the bus`

Explain:

- Everyone else has got off.
- `left` here means remaining.

Visual anchor:

`空空的车厢里，只剩他一个乘客。`

### `This is as far as we go`

Target:

`This is as far as we go.`

Explain:

- This means the bus route ends here.
- It does not mean the people are physically unable to walk farther.

Student-facing paraphrase:

`我们的车最远就开到这里。`

### `put you off`

Target:

`I forgot to put you off.`

Explain carefully:

- In this old bus context, it means "I forgot to let you get off / remind you
  to get off at the right place."
- It is not the same as the common modern meaning "make someone dislike
  something" or "make someone lose interest."

Production note:

- This is one of the most important vocabulary/phrase clarifications in Lesson
  50.
- The script should explicitly prevent misunderstanding.

### `in that case`

Target:

`Well, in that case, I prefer to stay on the bus.`

Explain:

- `in that case` means if that is the situation / since that is true.
- The narrator changes his decision after hearing the bus is going back.

Practice:

- `If the bus is going back, in that case, I will stay on it.`
- `If the shop is closed, in that case, we will come tomorrow.`

### `prefer to`

Target:

`I prefer to stay on the bus`

Explain:

- `prefer to do` means choose this option because it is better for you.
- He chooses staying on the bus because it is going back.

## Vocabulary Plan

Prioritize concrete meaning, story value, and modern bridge.

- `ride`
  - A journey in a vehicle.
  - Also part of the title's playful idiom.
- `travel`
  - Move from place to place, often for pleasure here.
- `country`
  - In this sentence, countryside.
- `lose one's way`
  - Get lost.
- `excursion`
  - A short pleasure trip.
- `trip`
  - A journey; here it takes longer than expected.
- `conductor`
  - Old bus conductor / ticket collector / passenger helper.
  - Not a music conductor in this story.
- `get on`
  - Board a bus.
- `get off`
  - Leave a bus.
- `view`
  - What you can see from a place.
- `countryside`
  - Rural scenery outside the city.
- `passenger`
  - Someone travelling in a vehicle but not driving it.
- `left`
  - Remaining.
- `as far as`
  - To the limit or end point.
- `put off`
  - In this story: let someone get off / remind someone to get off.
  - Mark as context-specific.
- `go back`
  - Return.
- `in that case`
  - If that is true; since that is the situation.
- `prefer`
  - Like one choice better than another.

Vocabulary memory grouping:

- Bus system: `driver`, `conductor`, `passenger`, `ticket`, `get on`, `get off`
- Travel feeling: `excursion`, `trip`, `view`, `countryside`, `lose my way`
- Mistake and ending: `only passenger left`, `as far as we go`, `put you off`,
  `going back`, `in that case`, `prefer`

## Visual Direction

The visuals should make the old public-transport system understandable without
putting text inside generated images.

Overall style:

- Warm illustrated realism.
- Light British countryside travel mood.
- Gentle comic timing.
- Clear distinction between driver, conductor, and passenger.
- Consistent narrator and conductor across all frames.

Avoid:

- Readable route numbers, station signs, destination boards, tickets, maps, or
  bus labels inside generated images.
- Modern phone navigation dominating the old story scene.
- Traffic danger or frightening lost-person mood.
- Turning the conductor into a villain.
- Empty signboards or blank text boxes.

Use:

- Old-style bus interior.
- Conductor with a ticket bag/puncher or simple ticket machine.
- Passenger sitting near the front and looking out.
- Countryside seen through bus windows.
- Empty bus at the route end.
- A mild comic facial expression when the mistake is discovered.

## Character Consistency Brief

Keep the narrator and conductor consistent across all four lesson illustrations.

Narrator:

- Adult or young adult passenger.
- Curious, polite, slightly absent-minded because he is enjoying the view.
- Same clothing and face across frames.
- Carries a small travel bag if useful.

Conductor:

- Old-style bus conductor, not the driver.
- Same uniform-like outfit, ticket bag, or ticket tool across frames.
- Helpful but forgetful, not malicious.

Driver:

- Present only when needed to show the bus system.
- Keep visually secondary.

## Four-Frame Storyboard Intent

### Frame 1: Getting On The Old Bus

Purpose:

- Establish the old bus system and conductor role.

Content:

- Narrator steps onto an old-style bus.
- Driver is at the wheel.
- Conductor stands in the bus aisle with ticket bag/tool.
- Narrator speaks politely to the conductor.
- Other passengers are visible.

Must avoid:

- Readable route signs, ticket text, destination boards, or speech bubbles.

### Frame 2: Enjoying The Countryside View

Purpose:

- Explain why the narrator misses the stop.

Content:

- Narrator sits in the front of the bus.
- Countryside visible through windows.
- He is absorbed in the view.
- Conductor is elsewhere in the bus, busy or distracted.

Must avoid:

- Making the narrator look foolish.
- Modern GPS phone screen as the main visual.

### Frame 3: Only Passenger Left

Purpose:

- Show the shock moment.

Content:

- Bus has stopped.
- Narrator looks around and realizes the bus is empty.
- Conductor stands nearby, starting to realize something is wrong.
- The route-end feeling is clear without readable signs.

Must avoid:

- Dark or frightening isolation.
- Station signs with text.

### Frame 4: Staying On The Returning Bus

Purpose:

- Land the final joke.

Content:

- Conductor gestures that the bus is going back.
- Narrator chooses to stay seated.
- The mood is resigned and lightly funny.
- Bus interior remains consistent.

Must avoid:

- Making the conductor angry or cruel.
- Visual text explaining the punchline.

## Script And Courseware Presentation

The script should speak to the student in Chinese, with short English phrases
inserted where the language matters.

Required presentation principles:

- Start with the old bus conductor scene.
- Make the driver/conductor distinction visual and verbal.
- Then tell the story as a "human reminder failed" comedy.
- Use Chinese-first story spine for recitation.
- Attach English chunks to Chinese anchors.
- Keep grammar explanations practical and sentence-based.
- Do not put image prompt language into the teaching script.

Recommended page rhythm:

1. Hook: why this bus scene is strange to today's child.
2. Background: driver vs conductor, old bus ticket/reminder system.
3. Story setup: love travelling, dislike losing the way.
4. Asking for help: going to Woodford Green, not knowing where to get off.
5. Promise: conductor will tell him where to get off.
6. View: sitting in front to enjoy countryside.
7. Shock: only passenger left.
8. Mistake: end of route, forgot to put him off.
9. Comic ending: bus going back, he prefers to stay on.
10. Language board: `where to get off`, `as far as we go`, `put you off`,
    `in that case`.
11. Read-aloud / shadowing.
12. Living-scene exercise.
13. Chinese-to-English exercise.
14. Final flow reminder.

## Read-Aloud And Pronunciation Direction

The read-aloud section should preserve the existing courseware flow:

`听课文全文 -> 听原音 -> 录一句 -> 获取反馈`

For Lesson 50, emphasize:

- Dialogue rhythm.
- Clear contrast between narrator and conductor lines.
- Pausing before the punchline.
- Not rushing `I forgot to put you off`.

Suggested chunking:

- `I love travelling in the country,`
- `but I don't like losing my way.`
- `I went on an excursion recently,`
- `but my trip took me longer than I expected.`
- `I'm going to Woodford Green,`
- `I said to the conductor`
- `as I got on the bus,`
- `but I don't know where it is.`
- `I'll tell you`
- `where to get off.`
- `I sat in the front of the bus`
- `to get a good view`
- `of the countryside.`
- `Looking round,`
- `I realized with a shock`
- `that I was the only passenger left`
- `on the bus.`
- `This is as far as we go.`
- `I forgot to put you off.`
- `Well, in that case,`
- `I prefer to stay on the bus.`

Pronunciation watchlist:

- `travelling`
  - Keep the middle syllable light.
- `country`
  - Do not pronounce it like `county`.
- `excursion`
  - Break and model slowly.
- `conductor`
  - Stress the second syllable.
- `countryside`
  - Three parts: `coun-try-side`.
- `passenger`
  - Soft `g` sound.
- `Woodford Green`
  - Treat as a place name; do not overdramatize it.
- `prefer`
  - Stress the second syllable.

Feedback should reward:

- Natural dialogue intonation.
- Clear `where to get off`.
- Correct stress in `conductor` and `prefer`.
- Smooth long sentence ending in `the only passenger left on the bus`.

## Living-Scene Exercise Direction

The living-scene exercise should modernize the pattern while preserving the core
logic.

Target function:

- Say you like an activity but dislike a problem.
- Ask someone where to get off / where to go.
- Say a trip took longer than expected.
- Explain that you missed a stop or destination because you relied on someone.
- Use `in that case` to make a new decision.

Safe modern scene idea:

`孩子去参加一个活动，坐一辆校车或景区接驳车。他不熟悉路线，请车上的工作人员提醒他在哪里下车。工作人员一忙忘了提醒，他看风景看过站。车马上要开回去，他决定继续坐。`

Why this works:

- It keeps the human-reminder logic.
- It connects to modern shuttle buses, school buses, or scenic buses where a
  staff member may still help passengers.
- It avoids forcing a modern city bus to have a conductor.

Possible student prompts:

- `I love..., but I don't like...`
- `Can you tell me where to get off?`
- `The trip took me longer than I expected.`
- `I realized with a shock that...`
- `In that case, I prefer to...`

## Suggested You Too Scene

Scene title:

`A Shuttle Ride`

Chinese setup:

`你去一个很大的公园参加活动，不知道在哪一站下接驳车。上车时你请工作人员提醒你。你坐在前面看风景，结果工作人员忘了提醒。车到终点后又要开回去，你决定继续坐。`

Target dialogue / narration shape:

- `I love visiting big parks, but I don't like losing my way.`
- `I got on the shuttle bus and spoke to the attendant.`
- `Please tell me where to get off.`
- `I sat in the front to get a good view.`
- `After some time, I realized with a shock that I was the only passenger left.`
- `I forgot to tell you where to get off.`
- `We're going back now.`
- `In that case, I prefer to stay on the bus.`

Keep it natural:

- Use `attendant` or `staff member` for the modern scene if `conductor` feels
  unnatural.
- Keep `conductor` for the original passage.
- Do not put the child in a scary lost situation.

## Chinese-To-English Exercise Direction

Use exercises that map directly to Lesson 50 structures.

Suggested items:

1. 我喜欢在乡间旅行，但不喜欢迷路。
   - `I love travelling in the country, but I don't like losing my way.`
2. 这次旅行比我预想的时间更长。
   - `My trip took me longer than I expected.`
3. 我一上车就对售票员说。
   - `I said to the conductor as I got on the bus.`
4. 我不知道在哪里下车。
   - `I don't know where to get off.`
5. 我会告诉你在哪里下车。
   - `I'll tell you where to get off.`
6. 我坐在汽车前部，为了好好看看乡间风景。
   - `I sat in the front of the bus to get a good view of the countryside.`
7. 我环顾四周，惊讶地发现车上只剩我一个乘客。
   - `Looking round, I realized with a shock that I was the only passenger left on the bus.`
8. 我们的车最远就到这里。
   - `This is as far as we go.`
9. 我忘了提醒你下车。
   - `I forgot to put you off.`
10. 既然这样，我宁愿继续待在车上。
    - `In that case, I prefer to stay on the bus.`

Exercise notes:

- Keep `conductor` tied to the old bus scene.
- In modern exercises, allow `attendant` or `staff member` when appropriate.
- Avoid isolated phrase drills that hide the story context.

## Grammar Board

The grammar board should be practical and story-linked.

### 1. `love doing`, `like doing`

Form:

`love/like + V-ing`

Meaning:

`喜欢做某事。`

Example:

`I love travelling in the country, but I don't like losing my way.`

### 2. `take + person + time`

Form:

`Something took me longer than I expected.`

Meaning:

`某件事花的时间比我预想的更久。`

Example:

`My trip took me longer than I expected.`

### 3. `as + sentence`

Form:

`I said to the conductor as I got on the bus.`

Meaning:

`当我上车的时候 / 我一上车就。`

### 4. `where to + verb`

Form:

`where to get off`

Meaning:

`在哪里做某事。`

Examples:

- `where to get off`
- `where to wait`
- `where to buy tickets`

### 5. Purpose With `to`

Form:

`I sat in the front of the bus to get a good view.`

Meaning:

`to + 动词` tells us the purpose.

### 6. `Looking round, ...`

Form:

`Looking round, I realized...`

Meaning:

`先做一个小动作，再发生主要发现。`

### 7. `as far as`

Form:

`This is as far as we go.`

Meaning:

`到这里为止 / 最远就到这里。`

### 8. `in that case`

Form:

`In that case, I prefer to...`

Meaning:

`既然这样，那我选择……`

### 9. `prefer to`

Form:

`prefer to + verb`

Meaning:

`更愿意做某事。`

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

For Lesson 50, the final reminder can say:

`这一课先记住旧式公交场景：driver 开车，conductor 管乘客和车票。主人公请 conductor 提醒下车，自己看风景，结果被带到终点；车要开回去，他就继续坐。`

## Acceptance Criteria

Lesson 50 production is acceptable only if:

- The student can clearly imagine an old bus with both driver and conductor.
- The conductor's vanished job is explained through concrete actions: selling or
  checking tickets, helping passengers, and reminding passengers where to get
  off.
- The driver/conductor distinction is clear.
- The modern comparison mentions GPS, automatic stop announcements, card/phone
  payment, or other current reminders without overwhelming the lesson.
- The story spine is Chinese-first, with English chunks attached after Chinese
  anchors.
- The title `Taken for a ride` is explained as both literal extra ride and a
  playful idiom.
- `Woodford Green` is treated as a place name, not overtranslated.
- Language teaching includes `in the country`, `losing my way`, `excursion`,
  `took me longer than I expected`, `where to get off`, `as far as we go`,
  `put you off`, `in that case`, and `prefer to`.
- `I forgot to put you off` is explicitly explained in context and not confused
  with the common meaning of making someone dislike something.
- Generated illustrations contain no readable route text, destination boards,
  labels, tickets, speech bubbles, blank boxes, or fake UI.
- The narrator and conductor stay visually consistent across the four frames.
- The conductor is forgetful but not malicious.
- The script contains teaching content only, not storyboard/image prompt
  wording.
- The read-aloud / shadowing flow is included in the final course flow.
- The living-scene exercise modernizes the structure without pretending ordinary
  modern city buses still have conductors.
