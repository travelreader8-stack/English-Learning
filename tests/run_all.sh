#!/usr/bin/env bash
# 一键跑所有测试
# 顺序：
#   1. test_lesson1_files.sh —— 静态文件 / 结构验证（不需要服务器）
#   2. test_pipeline.py     —— 96 课 lessons.json schema（不需要服务器）
#   3. test_read_aloud_data.mjs —— 跟读数据结构（不需要服务器）
#   4. test_slide_player.mjs —— slide-player 单元测试（不需要服务器）
#   5. test_api.sh          —— 各 endpoint 验证（需要 dev-server）
#   6. test_session_e2e.sh  —— 完整 session 流程（需要 dev-server）

set -o pipefail   # 保留 pipefail、但不开 -u（路径含空格时 array 默认值会触发 unbound）
TESTS_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$TESTS_DIR/.." && pwd)"

GREEN='\033[32m'
RED='\033[31m'
CYAN='\033[1;36m'
RESET='\033[0m'
BOLD='\033[1m'

PASSED_SUITES=()
FAILED_SUITES=()

# 用数组而不是 eval、避免路径里空格拆字符串
run_suite() {
  local name="$1"
  shift
  printf '\n%b━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━%b\n' "$CYAN" "$RESET"
  printf '%b▶ Suite: %s%b\n' "$CYAN" "$name" "$RESET"
  printf '%b━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━%b\n' "$CYAN" "$RESET"
  if "$@"; then
    PASSED_SUITES+=("$name")
  else
    FAILED_SUITES+=("$name")
  fi
}

# 1) 静态文件 / 结构 — 永远先跑这一组（最快、最容易暴露问题）
run_suite "1. Lesson 1 文件完整性" bash "$TESTS_DIR/test_lesson1_files.sh"

# 2) lessons.json schema
run_suite "2. lessons.json 96 课 schema" python3 "$TESTS_DIR/test_pipeline.py"

# 3) read_aloud 数据结构
run_suite "3. read_aloud 数据结构" node "$TESTS_DIR/test_read_aloud_data.mjs"

# 4) slide-player 单元测试
run_suite "4. slide-player 单元测试" node "$TESTS_DIR/test_slide_player.mjs"

# 4.5) scrubber + click-to-play 行为
run_suite "4.5 scrubber + 卡拉 OK 点击跳读" node "$TESTS_DIR/test_browser_scrubber.mjs"

# 4) API 端点测试 — 先确认 dev-server 在线
DEV_OK=0
if curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:5500/lesson.html 2>/dev/null | grep -q "200"; then
  DEV_OK=1
fi

if [[ "$DEV_OK" == "1" ]]; then
  run_suite "5. API 端点测试" bash "$TESTS_DIR/test_api.sh"
  run_suite "6. E2E session 模拟" bash "$TESTS_DIR/test_session_e2e.sh"
else
  printf '\n%b⚠ dev-server 未运行（http://127.0.0.1:5500）、跳过 API/E2E 测试%b\n' "$RED" "$RESET"
  printf '   启动方法：cd web && npx tsx dev-server.ts\n'
  FAILED_SUITES+=("5. API 端点测试 (跳过)" "6. E2E session (跳过)")
fi

# 总结（用 ${arr[@]:-} 兜底空数组）
printf '\n%b━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━%b\n' "$BOLD" "$RESET"
printf '%b★ 总报告%b\n' "$BOLD" "$RESET"
printf '%b━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━%b\n' "$BOLD" "$RESET"
printf '\n%b通过 %d 个 suite：%b\n' "$GREEN" "${#PASSED_SUITES[@]}" "$RESET"
for s in "${PASSED_SUITES[@]:-}"; do
  [[ -n "$s" ]] && printf '  %b✓ %s%b\n' "$GREEN" "$s" "$RESET"
done

if [[ "${#FAILED_SUITES[@]}" -gt 0 ]]; then
  printf '\n%b失败 %d 个 suite：%b\n' "$RED" "${#FAILED_SUITES[@]}" "$RESET"
  for s in "${FAILED_SUITES[@]}"; do printf '  %b✗ %s%b\n' "$RED" "$s" "$RESET"; done
  printf '\n%b⚠️ 有失败、修后再批量上线%b\n' "$RED" "$RESET"
  exit 1
else
  printf '\n%b🎉 所有 suite 通过、可以批量推 96 课%b\n' "$GREEN" "$RESET"
  exit 0
fi
