#!/usr/bin/env bash
# 端到端「学生 session」模拟：从 you_too 一路做到 finish
# 验证 5 站全跑通、AI 反馈结构合规、最终发邮件 endpoint 接受所有数据

set -uo pipefail

BASE="${BASE:-http://127.0.0.1:5500}"
PASS=0
FAIL=0

ok()    { printf '\033[32m  ✓ %s\033[0m\n' "$1"; PASS=$((PASS+1)); }
fail()  { printf '\033[31m  ✗ %s\033[0m\n' "$1"; FAIL=$((FAIL+1)); }
section() { printf '\n\033[1;36m▶ %s\033[0m\n' "$1"; }

# ─── 模拟一个完整的 session ────────────────────────────
section "0. 健康检查"
CODE=$(curl -s -o /dev/null -w "%{http_code}" "$BASE/lesson.html")
[[ "$CODE" == "200" ]] && ok "dev-server 在线" || { fail "dev-server 不可达"; exit 1; }

# ─── Step 0: 生活场景 all_fills（A/B/C 都填）──────────
section "0. ① 生活场景：A/B/C 三个全填、一起交"
RESP_YT=$(curl -s -X POST "$BASE/api/grade" -H 'content-type: application/json' --max-time 180 \
  -d '{
    "lesson_id":1,"kind":"you_too","question":"...","sub_kind":"all_fills",
    "word_bank":["got angry","talking loudly","did not say anything","did not pay any attention","could not bear it"],
    "fills":[
      {"label":"A","scenario_zh":"妈妈打断游戏","english_template":"... I got very angry, but I ___ to her.","expected_phrase":"did not say anything","filled_value":"did not say anything"},
      {"label":"B","scenario_zh":"同桌打扰","english_template":"... I got very angry, and I ___ to him.","expected_phrase":"did not pay any attention","filled_value":"did not pay any attention"},
      {"label":"C","scenario_zh":"邻居吵","english_template":"My neighbors were ___ in the morning.","expected_phrase":"talking loudly","filled_value":"talking loudly"}
    ]
  }')
echo "$RESP_YT" | python3 -c "
import json, sys
d = json.load(sys.stdin)
assert isinstance(d.get('per_fill'), list) and len(d['per_fill']) == 3, f'per_fill={d.get(\"per_fill\")}'
assert all(x.get('comment','').strip() for x in d['per_fill']), 'some fill missing comment'
print('OK')
" 2>/dev/null | grep -q OK && ok "you_too all_fills 3 段都有 comment" || fail "you_too 失败：${RESP_YT:0:200}"

# ─── Step 1: 完形填空（10 对 + 2 错）──────────────────
section "1. ② 完形填空：10 对 2 错"
RESP_CL=$(curl -s -X POST "$BASE/api/grade" -H 'content-type: application/json' \
  -d '{"lesson_id":1,"kind":"cloze","answers":["theatre","seat","interesting","WRONG","loudly","angry","turned","attention","WRONG","rudely","private","conversation"]}')
SCORE=$(echo "$RESP_CL" | python3 -c "import json,sys; print(json.load(sys.stdin)['score'])")
[[ "$SCORE" == "10" ]] && ok "完形 10/12（2 个故意写错）" || fail "应 10/12 实际 $SCORE"

# ─── Step 2: 中译英（带语法错）─────────────────────────
section "2. ③ 中译英：1 段（避开 V4 Pro 长 prompt 不稳定）"
sleep 2  # 给 DeepSeek 缓口气
# 用更短的 1 段输入降低 V4 Pro 偶发返回格式异常的概率
TRANS_PAYLOAD='{"lesson_id":1,"kind":"translation","direction":"cn_to_en","sentences":[{"index":0,"source":"上星期我去看戏。","reference":"Last week I went to the theatre.","answer":"Last week i go to theater."}]}'
# 失败重试一次（DeepSeek 偶尔超时）
# 检查响应是否包含 per_sentence；不含或者是 error → 重试
check_translation_ok() {
  local body="$1"
  [[ -z "$body" ]] && return 1
  echo "$body" | python3 -c "
import json, sys
try:
    d = json.loads(sys.stdin.read())
except:
    sys.exit(1)
if not isinstance(d.get('per_sentence'), list) or not d['per_sentence']:
    sys.exit(1)
sys.exit(0)
" 2>/dev/null
}

RESP_CE=$(curl -s -X POST "$BASE/api/grade" -H 'content-type: application/json' --max-time 180 -d "$TRANS_PAYLOAD")
attempt=1
while ! check_translation_ok "$RESP_CE"; do
  if [[ "$attempt" -ge 3 ]]; then
    echo "    （3 次都失败、放弃）"
    break
  fi
  echo "    （第 $attempt 次尝试失败 ${RESP_CE:0:80}…，等 ${attempt}0s 重试）"
  sleep $((attempt * 10))
  attempt=$((attempt + 1))
  RESP_CE=$(curl -s -X POST "$BASE/api/grade" -H 'content-type: application/json' --max-time 180 -d "$TRANS_PAYLOAD")
done
echo "$RESP_CE" | python3 -c "
import json, sys
d = json.load(sys.stdin)
assert isinstance(d.get('per_sentence'), list), 'no per_sentence'
n = len(d['per_sentence'])
assert n in (1,2,3), f'unexpected per_sentence count: {n}'
assert d.get('overall_summary'), 'no overall_summary'
assert isinstance(d.get('overall_score'), (int, float)), 'no overall_score'
print('OK')
" 2>/dev/null | grep -q OK && ok "中译英 per_sentence + overall 完整" || fail "中译英 失败：${RESP_CE:0:300}"

# ─── Step 3: 英译中（混合错误）─────────────────────────
section "3. ④ 英译中"
RESP_EC=$(curl -s -X POST "$BASE/api/grade" -H 'content-type: application/json' --max-time 180 \
  -d '{"lesson_id":1,"kind":"translation","direction":"en_to_cn","sentences":[{"index":0,"source":"Last week I went to the theatre. I had a very good seat.","reference":"上星期我去看戏。","answer":"上星期我去剧院了。我有一个很好的位置。"}]}')
echo "$RESP_EC" | python3 -c "
import json, sys
d = json.load(sys.stdin)
assert isinstance(d.get('per_sentence'), list)
assert len(d['per_sentence']) >= 1
print('OK')
" 2>/dev/null | grep -q OK && ok "英译中 per_sentence 完整" || fail "英译中 失败：${RESP_EC:0:200}"

# ─── Step 4: 默写（部分错）──────────────────────────────
section "4. ⑤ 默写"
RESP_DI=$(curl -s -X POST "$BASE/api/grade" -H 'content-type: application/json' --max-time 180 \
  -d '{"lesson_id":1,"kind":"dictation","answer":"Last week I went to the theater. I had a good seat. The play was very interesting but I did not enjoy it. Two young people behind me were talking loud. I got very angry."}')
PCT=$(echo "$RESP_DI" | python3 -c "import json,sys; print(json.load(sys.stdin).get('match_pct', -1))")
[[ "$PCT" -ge 0 ]] && [[ "$PCT" -le 100 ]] && ok "默写 match_pct=$PCT% (范围正常)" || fail "match_pct=$PCT 异常"
echo "$RESP_DI" | python3 -c "
import json, sys
d = json.load(sys.stdin)
assert d.get('diff_html'), 'no diff_html'
print('OK')
" | grep -q OK && ok "默写 diff_html 存在" || fail "无 diff_html"

# ─── Step 5: finish（汇总发邮件）───────────────────────
section "5. ✉️ finish — 汇总打包"
# 防御：如果 RESP_CE 为空或非 JSON，用空数组兜底
PER_SENTENCE=$(echo "$RESP_CE" | python3 -c "import json,sys
try:
    d = json.load(sys.stdin)
    print(json.dumps(d.get('per_sentence', [])))
except Exception:
    print('[]')")
RESP_FIN=$(curl -s -X POST "$BASE/api/finish" -H 'content-type: application/json' --max-time 180 \
  -d "{\"lesson_id\":1,\"_test\":true,\"submitted_at\":\"2026-05-11T01:00:00Z\",\"answers\":{\"you_too\":{\"selected_label\":\"B\",\"custom_text\":\"\"},\"cloze\":[\"theatre\",\"seat\",\"play\",\"WRONG\",\"angry\",\"angrily\",\"attention\",\"WRONG\",\"business\",\"rudely\",\"private\",\"conversation\"],\"cn_to_en\":[\"a\",\"b\",\"c\"],\"en_to_cn\":[\"a\"],\"dictation\":\"Last week I went to the theater\"},\"results\":{\"you_too\":{\"comment\":\"good\"},\"cloze\":{\"score\":10,\"total\":12,\"details\":[]},\"cn_to_en\":{\"per_sentence\":${PER_SENTENCE},\"overall_score\":7,\"overall_summary\":\"summary\"},\"en_to_cn\":{\"per_sentence\":[],\"overall_score\":7,\"overall_summary\":\"\"},\"dictation\":{\"match_pct\":50,\"diff_html\":\"x\",\"ai_tip\":\"\"}}}")
echo "$RESP_FIN" | python3 -c "import json,sys; d=json.load(sys.stdin); print('OK' if d.get('ok')==True else d.get('error','UNKNOWN'))" | grep -q '^OK' && ok "finish 接受完整 session 数据" || fail "finish 失败：${RESP_FIN:0:200}"

# ─── 总结 ──────────────────────────────────────────────
section "总结"
TOTAL=$((PASS + FAIL))
printf '\033[1m通过: %d / %d\033[0m  失败: %d\n' "$PASS" "$TOTAL" "$FAIL"
if [[ "$FAIL" -gt 0 ]]; then
  printf '\033[31m\nE2E session 测试失败\033[0m\n'
  exit 1
else
  printf '\033[32m\nE2E session 全程跑通 ✓\033[0m\n'
  exit 0
fi
