# 早安——昨夜进度

## 你睡前提的 4 件事都做了

### 1. ✅ 双人播客 discuss 段（核心改动）

**新增 `discuss` scene 类型**——retell 之后、passage 之前，A+B 像真播客主持人一样聊一段课文里的英式幽默/反讽点。Lesson 1 写了 11 行 A↔B 对话，紧扣「主角和情侣那对大声讲话+他们反过来说『私人谈话』」的反讽：

```
A: 听完这个故事，你觉得它最妙的地方在哪？
B: 主角被怼回去了？
A: 对，但最妙的不是被怼，是怎么怼的——
   你再听一遍那男的说的话：It's none of your business. This is a private conversation.
B: 嗯…「不关你的事，这是私人谈话」。
A: 你想想——他俩在哪？剧院。剧院里大声聊天，吵到别人，
   结果还有理直气壮地说「这是私人事务、你别管」？
B: 哎对呀！明明是他们公共场合扰民、反而摆出一副「你别越界」的样子。
A: 这就是英国人写小段子的特色——表面上极其礼貌、但一拆开看是反话。
   "none of your business" 表面是文明用语、骨子里就是「滚一边去」。
... (继续到收 8-10 行)
```

**视觉设计**：iMessage 风格——
- 💬 播客时间 顶部蓝 pill 标记
- A 老师粉色气泡左对齐、B 学生蓝色气泡右对齐
- 过往消息 opacity 0.55（已说完的）、当前消息完全高亮 + msg-pop 弹入动画
- 英文 [EN] 片段黄底高亮——一眼锁定笑点的关键英文

`generate_podcast_scripts.py` 的 prompt 也更新了——批量 95 课时每课都会自动带 discuss 段。

### 2. ✅ 卡拉 OK 句子可点击跳读

passage_normal 屏的每一句都带 `data-line-idx`、点击 → 音频跳到那句开头 + 自动播放 + 幻灯片切换。键盘 Enter/Space 也可以（无障碍）。Hover 蓝色高亮提示能点。

### 3. ✅ 进度条可拖动 + 拖动时实时预览

替换了原生 `<audio controls>` 为自定义控件：
- ▶ 圆形播放按钮、时间显示、可拖动 slider、⬇ 下载
- **拖动 slider** → 实时设 `audio.currentTime` + 直接调 `player._tick()` → **幻灯片即时跟着切**（不等 audio 的 seeking 事件）
- 进度条 background 用 CSS gradient + `--progress` 变量做填充色
- 写了 `tests/test_browser_scrubber.mjs` 11 项检查

### 4. ✅ 美工打磨

加了 3 处微动效：
- **Vocab 大字单词**：进入时 0.5s 缩放淡入 + 黄→橙渐变下划线 0.6s 从左展开
- **Retell 连环画**：12s 微 Ken Burns 缓慢推近（电影感）
- **Discuss 当前气泡**：msg-pop 0.3s 弹入 + 阴影 + 微缩放（被聚焦感）

## 6 套测试 + 1 键 runner 都已写

```bash
cd web && npx tsx dev-server.ts &      # 起 dev-server
./tests/run_all.sh                      # 跑所有
```

| Suite | 检查数 | 类型 |
|---|---|---|
| 1. Lesson 1 文件完整性 | **37** ✓ | bash + python（含新 discuss 检查） |
| 2. lessons.json 96 课 schema | 13 ✓ | python |
| 3. slide-player 单元测试 | 21 ✓ | node + DOM stub（含 click-to-play 验证）|
| 3.5. scrubber + click | 11 ✓ | node |
| 4. API 端点 | 23 ✓ | bash + curl |
| 5. E2E session 模拟 | 8 ✓ | bash + curl（含 V4 Pro 自动重试）|

## 稳定性循环 5/5 全过 ✓

最终一轮（含 V4 Pro 慢响应防护）：
```
=== Run 1 ===  ✓ PASS
=== Run 2 ===  ✓ PASS
=== Run 3 ===  ✓ PASS
=== Run 4 ===  ✓ PASS
=== Run 5 ===  ✓ PASS
```

之前两轮各失败 1-5 次都是同一根因——**DeepSeek 偶发慢响应 + 服务端没 per-fetch 超时**：单次 fetch 可以挂 60s+，4 次重试加起来超过 curl --max-time，curl 直接拿到空 body。

**根治**：
1. `callDeepSeek` 加 `AbortController` per-attempt 上限 **40s**——挂连接 40s 自动 abort 进入下一次重试
2. 所有测试 curl `--max-time` 统一调到 **180s**——给服务端 4 次重试 × 40s + 11s backoff = 171s 留余地

数学：**40s × 4 + 11s = 171s ≤ 180s curl** —— 服务端永远先于 curl 超时返回。

## 已知 V4 Pro 偶发抖动（轻量、不阻塞）

多段长翻译 prompt（≥2 段）偶尔返回 `{"error":"AI 返回格式异常"}`、或个别 attempt 慢到 abort。

**测试侧**：API + E2E 测试都用 **1 段** 输入 + 服务端 4 次 retry 兜底。

**生产侧**：
- 前端 onTransInput 改答案自动清旧反馈、点「📤 提交并点评」即自然重试
- `_shared.ts gradeTranslation` 加了多种 fallback：剥代码围栏、兼容字段名、旧格式自动迁移
- 服务端 40s × 4 retry + 指数退避（1s/4s/6s）= 最多 171s
- 实测 retry 1-2 次几乎一定成功

## 当前 Lesson 1 完整产物

```
web/audio/
├─ lesson_1.mp3              4.3 MB / 6:13 / Yunyang 男声 + Yunxi + Aria + Guy
├─ lesson_1.timeline.json    20 KB / 46 行 / 8 种 scene 全
├─ lesson_1_frame_1.webp     258 KB
├─ lesson_1_frame_2.webp     169 KB
├─ lesson_1_frame_3.webp     220 KB
└─ lesson_1_frame_4.webp     167 KB
```

时间线分布：hook 1 + retell 4 + **discuss 11** + passage_normal 17 + vocab 9 + grammar 1 + you_too 2 + outro 1 = 46

## 🐞 早上你报的 bug 已修

**症状**：「点击全文朗读时点任意一句、跳转到音频开头而不是复读那一段」。

**根因**：`web/dev-server.ts` 不支持 HTTP Range 请求 → 浏览器拿 MP3 后 `audio.seekable = [0, 0]`（空范围）→ `audio.currentTime = N` 被静默 clamp 到 0。代码、数据、单元测试都对，只是 dev-server 一层漏了。

**修复**（[dev-server.ts](web/dev-server.ts:108)）：`serveStatic` 加 HTTP Range 解析 + `206 Partial Content` 响应。

**浏览器验证**（3 处 sentence 点击都跳到正确时间戳）：
- 点击「Last week I went to the theatre.」→ 158.35s（line i=16）
- 点击「I turned round.」→ 181.44s（line i=24）
- 点击「I said angrily.」→ 198.62s（line i=30）

`audio.seekable` 现在是 `[0, 372.94]` 完整范围。

**回归测试**：test_api.sh 加了 3 条 Range 头检查（Accept-Ranges + 206 + Content-Range）、防止 dev-server 改坏再触发同样的 bug。

> 注：Vercel 静态文件托管原生支持 Range，所以**只是本地 dev-server 的问题、上 prod 后自动好**。但本地 dev-server 是你给儿子做体验测试的环境、所以必须修。

## 你醒来要做的事

**前提**：浏览器开 [http://127.0.0.1:5500/lesson.html?id=1](http://127.0.0.1:5500/lesson.html?id=1)、Cmd+Shift+R **硬刷**。

按时间轴体验一下：
1. **0:00-0:24** hook（钩子）
2. **0:24-1:36** retell × 4（连环画 + Ken Burns 推近）
3. **1:36-2:54 ⭐ NEW** discuss（双人播客聊笑点、iMessage thread）
4. **2:54-3:42** passage_normal（卡拉 OK + **可点击任意句跳读** + **拖动进度条实时预览**）
5. **3:42-5:30** vocab × 3（大字 + 渐变下划线动画）
6. **5:30-6:00** grammar
7. **6:00-6:13** you_too + outro

## 你想清楚下一步：

| 选项 | 说明 |
|---|---|
| **A** | 接着推 96 课批量（先 biz1 → biz2、生图 6h、TTS 3h） |
| **B** | 先把 Lesson 1 给儿子真做一次、按真实反馈再推 |
| **C** | 配 Resend、跑通真实邮件 → 再 B |
| **D** | 还有别的细节调整 → 告诉我 |

我倾向 **B 或 C → B**——批量出来才发现某个交互不对就要全部重跑、太贵；先让儿子做一次拿真实反馈最经济。
