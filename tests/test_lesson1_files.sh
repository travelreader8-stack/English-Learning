#!/usr/bin/env bash
# E2E test: 验证 Lesson 1 全套产物存在 + 结构正确
# 通过 = 这一课具备「能上线」资格

set -uo pipefail

ROOT="${ROOT:-/Users/jiangfangming/Library/CloudStorage/GoogleDrive-travelreader8@gmail.com/My Drive/Claude Code/English Learning}"
cd "$ROOT" || exit 1

PASS=0
FAIL=0
SKIP=0

reset_color() { printf '\033[0m'; }
ok()    { printf '\033[32m  ✓ %s\033[0m\n' "$1"; PASS=$((PASS+1)); }
fail()  { printf '\033[31m  ✗ %s\033[0m\n' "$1"; FAIL=$((FAIL+1)); }
skip()  { printf '\033[33m  ⊝ %s\033[0m\n' "$1"; SKIP=$((SKIP+1)); }
section() { printf '\n\033[1;36m▶ %s\033[0m\n' "$1"; }

assert_exists() {
  local path="$1"
  local desc="${2:-$1}"
  if [[ -e "$path" ]]; then ok "$desc"; else fail "$desc 缺失: $path"; fi
}

assert_min_size() {
  local path="$1"
  local min="$2"
  local desc="$3"
  if [[ ! -e "$path" ]]; then fail "$desc 缺失: $path"; return; fi
  local size
  size=$(stat -f%z "$path" 2>/dev/null || stat -c%s "$path" 2>/dev/null || echo 0)
  if [[ "$size" -ge "$min" ]]; then ok "$desc ($((size/1024)) KB)"; else fail "$desc 文件太小: $size < $min"; fi
}

# ─── 1. 数据文件 ───────────────────────────────────────
section "1. 数据 / 脚本文件"
assert_exists "data/raw/nce2.pdf" "PDF 原始文件"
assert_exists "web/data/lessons.json" "lessons.json"
assert_exists "web/data/you_too/lesson_1.json" "Lesson 1 生活场景数据"
assert_exists "pipeline/scripts/lesson_1.script.md" "Lesson 1 播客脚本"
assert_exists "pipeline/scripts/lesson_1.storyboard.json" "Lesson 1 storyboard"

# ─── 2. 媒体文件 ───────────────────────────────────────
section "2. 媒体产物"
assert_min_size "web/audio/lesson_1.mp3" 500000 "Lesson 1 MP3 (>=500KB)"
assert_min_size "web/audio/lesson_1.timeline.json" 1000 "Lesson 1 timeline (>=1KB)"
for f in 1 2 3 4; do
  assert_min_size "web/audio/lesson_1_frame_${f}.webp" 50000 "Lesson 1 frame ${f} WebP (>=50KB)"
done

# ─── 3. 前端代码 ───────────────────────────────────────
section "3. 前端代码"
assert_exists "web/index.html" "首页"
assert_exists "web/lesson.html" "课件页"
assert_exists "web/assets/app.js" "app.js"
assert_exists "web/assets/slide-player.js" "slide-player.js"
assert_exists "web/assets/grading.js" "grading.js"
assert_exists "web/assets/style.css" "style.css"

# ─── 4. 后端代码 ───────────────────────────────────────
section "4. 后端代码"
assert_exists "web/api/grade.ts" "grade.ts"
assert_exists "web/api/finish.ts" "finish.ts"
assert_exists "web/api/_shared.ts" "_shared.ts"
assert_exists "web/dev-server.ts" "dev-server.ts"
assert_exists "web/.env.local" ".env.local"

# ─── 5. lesson_1.script.md 结构验证 ────────────────────
section "5. lesson_1.script.md SCENE 标记"
SCRIPT="pipeline/scripts/lesson_1.script.md"
required_scenes=("hook" "retell" "discuss" "passage_normal" "vocab" "grammar" "you_too" "outro")
for scene in "${required_scenes[@]}"; do
  if grep -q "^## SCENE: $scene" "$SCRIPT"; then ok "SCENE: $scene 存在"; else fail "SCENE: $scene 缺失"; fi
done

# retell 4 帧
retell_count=$(grep -c "^## SCENE: retell frame=" "$SCRIPT" || true)
if [[ "$retell_count" == "4" ]]; then ok "retell 共 4 帧"; else fail "retell 帧数 = $retell_count 期望 4"; fi

# vocab 3 个
vocab_count=$(grep -c "^## SCENE: vocab word=" "$SCRIPT" || true)
if [[ "$vocab_count" == "3" ]]; then ok "vocab 共 3 词"; else fail "vocab 数 = $vocab_count 期望 3"; fi

# [EN] 标记平衡
en_open=$(grep -c -o "\[EN\]" "$SCRIPT" || true)
en_close=$(grep -c -o "\[/EN\]" "$SCRIPT" || true)
if [[ "$en_open" -gt 0 && "$en_open" == "$en_close" ]]; then
  ok "[EN] 标记平衡 ($en_open 对)"
else
  fail "[EN] 不平衡: $en_open / $en_close"
fi

# 不应该再有 "Lesson 1" 直接出现在 narration（用户要求中文「第一课」）
if grep -q "今天 *Lesson 1" "$SCRIPT"; then
  fail "narration 仍含 'Lesson 1'，应改为「第一课」"
else
  ok "narration 不含 'Lesson 1'（已用「第一课」）"
fi

# ─── 6. lesson_1 storyboard.json 结构验证 ──────────────
section "6. storyboard.json 结构"
SB="pipeline/scripts/lesson_1.storyboard.json"
python3 -c "
import json, sys
d = json.load(open('$SB'))
assert d['lesson_id'] == 1, 'lesson_id != 1'
assert d.get('title'), 'title 缺失'
frames = d.get('frames', [])
assert len(frames) == 4, f'frames 数 = {len(frames)} 期望 4'
for i, f in enumerate(frames, 1):
    assert f.get('frame') == i, f'frame {i} 编号错'
    assert f.get('prompt') and len(f['prompt']) > 50, f'frame {i} prompt 太短'
print('OK')
" 2>&1 | grep -q "^OK" && ok "storyboard 4 帧、prompt 完整" || fail "storyboard 结构异常"

# ─── 7. lesson_1.json (生活场景) 结构 ──────────────────
section "7. you_too/lesson_1.json 结构"
YT="web/data/you_too/lesson_1.json"
python3 -c "
import json
d = json.load(open('$YT'))
assert d['lesson_id'] == 1, 'lesson_id != 1'
assert d.get('question'), 'question 缺失'
wb = d.get('word_bank', [])
assert isinstance(wb, list) and len(wb) >= 5, f'word_bank 数 = {len(wb)}'
opts = d.get('options', [])
mode = d.get('mode', 'legacy')
if mode == 'all_fills':
    # L1-L10 新模式：3 个 fill 选项都必填、无 D
    assert len(opts) == 3, f'all_fills options 应 = 3、实际 {len(opts)}'
    for i, o in enumerate(opts):
        assert o.get('english_template'), f'option {i} 缺 english_template'
        assert o.get('expected_phrase'), f'option {i} 缺 expected_phrase'
        assert '___' in o['english_template'], f'option {i} 模板缺空格 ___'
else:
    # 旧模式：3 fill + 1 自由（L11+ 用）
    assert len(opts) == 4, f'legacy options 数 = {len(opts)} 期望 4'
    for i, o in enumerate(opts[:-1]):
        assert o.get('english_template'), f'option {i} 缺 english_template'
        assert o.get('expected_phrase'), f'option {i} 缺 expected_phrase'
        assert '___' in o['english_template'], f'option {i} 模板缺空格 ___'
    last = opts[-1]
    assert last.get('english_template') is None, 'D 选项 english_template 应为 null'
print('OK', mode)
" 2>&1 | grep -q "^OK" && ok "you_too 结构正确 (mode=all_fills、3 选项都必填)" || fail "you_too 结构异常"

# ─── 8. timeline.json 结构 ─────────────────────────────
section "8. timeline.json 结构"
TL="web/audio/lesson_1.timeline.json"
python3 -c "
import json
t = json.load(open('$TL'))
assert t.get('lesson_id') == 1
assert t.get('total_duration', 0) > 200, f'duration {t.get(\"total_duration\")}s 太短'
lines = t.get('lines', [])
assert len(lines) >= 25, f'lines 数 {len(lines)} 太少'
# scene 类型完整
scenes = set(l['scene'] for l in lines)
need = {'hook', 'retell', 'discuss', 'passage_normal', 'vocab', 'grammar', 'you_too', 'outro'}
miss = need - scenes
assert not miss, f'缺 scenes: {miss}'
# retell 各帧覆盖
retell_frames = set(int(l['scene_meta']['frame']) for l in lines if l['scene']=='retell' and l['scene_meta'].get('frame'))
assert retell_frames == {1,2,3,4}, f'retell frames: {retell_frames}'
# vocab 三词
vocab_words = set(l['scene_meta']['word'] for l in lines if l['scene']=='vocab' and l['scene_meta'].get('word'))
assert len(vocab_words) == 3, f'vocab words: {vocab_words}'
# 时间单调递增
prev_end = 0
for L in lines:
    assert L['start'] >= prev_end - 0.1, f'line {L[\"i\"]} start={L[\"start\"]} < prev_end={prev_end}'
    prev_end = L['end']
print('OK')
" 2>&1 | grep -q "^OK" && ok "timeline 完整：scene 全、retell 4 帧、vocab 3 词、时间单调" || fail "timeline 结构异常"

# ─── 总结 ──────────────────────────────────────────────
section "总结"
TOTAL=$((PASS + FAIL + SKIP))
printf '\033[1m通过: %d / %d\033[0m  失败: %d  跳过: %d\n' "$PASS" "$TOTAL" "$FAIL" "$SKIP"
if [[ "$FAIL" -gt 0 ]]; then
  printf '\033[31m\nLesson 1 NOT ready\033[0m\n'
  exit 1
else
  printf '\033[32m\nLesson 1 资料就绪 ✓\033[0m\n'
  exit 0
fi
