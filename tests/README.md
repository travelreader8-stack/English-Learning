# 测试套件

5 个 suite、确保 NCE2 课件系统在批量推 96 课前没有回归。

## 一键跑

```bash
# 前置：dev-server 跑在 5500
cd web && npx tsx dev-server.ts &

# 跑所有测试
./tests/run_all.sh
```

## 5 个 suite

| # | Suite | 命令 | 是否需要 dev-server |
|---|---|---|---|
| 1 | Lesson 1 文件完整性 | `bash tests/test_lesson1_files.sh` | ❌ |
| 2 | lessons.json 96 课 schema | `python3 tests/test_pipeline.py` | ❌ |
| 3 | slide-player 单元测试 | `node tests/test_slide_player.mjs` | ❌ |
| 4 | API 端点测试 | `bash tests/test_api.sh` | ✅ |
| 5 | E2E session 模拟 | `bash tests/test_session_e2e.sh` | ✅ |

## 各 suite 覆盖

### 1. test_lesson1_files.sh — 36 项检查
- ✓ 文件存在（PDF / lessons.json / 脚本 / storyboard / mp3 / timeline / 4 帧 webp）
- ✓ 媒体最低尺寸（mp3 ≥500KB、webp ≥50KB）
- ✓ 前后端代码文件齐全
- ✓ script.md SCENE 标记覆盖（hook/retell×4/passage/vocab×3/grammar/you_too/outro）
- ✓ `[EN]` 标记数平衡
- ✓ narration 不再含「Lesson 1」（应为「第一课」）
- ✓ storyboard.json 4 帧、prompt 长度
- ✓ you_too lesson_1.json：word_bank、4 选项、3 fill + 1 自由
- ✓ timeline.json：scene 完整、retell 4 帧、vocab 3 词、时间单调

### 2. test_pipeline.py — 13+ 项检查
- ✓ 96 课总数
- ✓ 7 个必填字段
- ✓ english/chinese 长度合理
- ✓ keywords 数量
- ✓ cloze.blanks + rendered_html 完整 + 对齐
- ✓ blank.answer 在 english 里出现
- ✓ first_sentence_prefix 是首句开头
- ✓ audio_path 路径规范
- ✓ Lesson 1 chunks 数量 + 内容覆盖

### 3. test_slide_player.mjs — 19 项检查
- ✓ 6 种 scene 类型在 timeline.json 都存在
- ✓ SlidePlayer 渲染 8 种位置（hook/retell f1+f4/passage/vocab/grammar/you_too/outro）不报错
- ✓ vocab word fallback：scene_meta 缺失时仍能渲染 word
- ✓ 同 vocab 段 A→B→A 不重建 DOM（firstElementChild 同对象）
- ✓ 连续 passage 行 1→2→3 不重建 DOM（高亮切换）
- ✓ retell 4 帧图片各自独立渲染（不同 webp）

### 4. test_api.sh — 23 项检查
- ✓ /api/grade cloze 全对 / 1 错 / 空答
- ✓ /api/grade translation 含 per_sentence + overall_score + overall_summary
- ✓ /api/grade dictation 含 match_pct + diff_html + ai_tip
- ✓ /api/grade you_too fill 含 comment + fill_correct（对错都验证）
- ✓ /api/grade you_too free 含 comment
- ✓ 错误处理：lesson_id=999 / kind=INVALID / GET method / 非法 JSON
- ✓ /api/finish 接受完整 session、Resend 未配也返回 ok

### 5. test_session_e2e.sh — 8 项端到端
模拟一个学生 session：① 生活场景 → ② 完形 → ③ 中译英 → ④ 英译中 → ⑤ 默写 → ✉️ finish。

V4 Pro 偶发返回格式异常，**自动重试最多 3 次**（间隔 10s/20s）兜底。

## V4 Pro 偶发抖动

DeepSeek V4 Pro 在长 prompt（3 段翻译）下偶尔会返回 `{"error":"AI 返回格式异常"}`。这不是 bug，是模型本身的不稳定。生产环境同样会遇到——前端 onTransInput 已经做了「修改答案 → 清旧反馈、点重新提交即可」的兜底。

测试用 retry 模拟用户重试，3 次后还失败才算真挂了。

## 加新测试

新功能对应的测试都加到 `tests/` 目录、命名 `test_*.sh` / `test_*.py` / `test_*.mjs`、然后在 `run_all.sh` 里加一行 `run_suite "名称" cmd args...`。
