#!/usr/bin/env bash
# API 端点测试：验证 dev-server 5500 上的 /api/grade 各种 kind + /api/finish
# 必须先有 dev-server 跑起来：cd web && npx tsx dev-server.ts

set -uo pipefail

BASE="${BASE:-http://127.0.0.1:5500}"
PASS=0
FAIL=0

ok()    { printf '\033[32m  ✓ %s\033[0m\n' "$1"; PASS=$((PASS+1)); }
fail()  { printf '\033[31m  ✗ %s\033[0m\n' "$1"; FAIL=$((FAIL+1)); }
section() { printf '\n\033[1;36m▶ %s\033[0m\n' "$1"; }

check_health() {
  local code
  code=$(curl -s -o /dev/null -w "%{http_code}" "$BASE/lesson.html" || echo 000)
  if [[ "$code" == "200" ]]; then
    ok "dev-server 在 $BASE 响应"
  else
    fail "dev-server 不可达 (code=$code)、请先 cd web && npx tsx dev-server.ts"
    exit 1
  fi
}

# JSON 字段 assertion — 通过 stdin 传 body，避免 shell 引号转义问题
assert_json_has() {
  local body="$1"
  local jq_path="$2"  # python 表达式，例如 ['per_sentence'][0]['score']
  local desc="$3"
  local result
  result=$(printf '%s' "$body" | python3 -c "
import json, sys
try:
    d = json.load(sys.stdin)
    val = d$jq_path
    assert val is not None, 'val is None'
    print('OK')
except Exception as e:
    print(f'FAIL:{e}')
")
  if [[ "$result" == "OK" ]]; then ok "$desc"; else fail "$desc — $result; body[:120]=${body:0:120}"; fi
}

# ─── 0. 健康检查 ───────────────────────────────────────
section "0. 健康检查"
check_health

# ─── 0.5 HTTP Range 支持（卡拉 OK 点击跳读依赖）──────────
# dev-server 必须支持 Range，否则 audio.seekable 是 [0,0]、
# audio.currentTime = N 被浏览器静默 clamp 到 0、点击跳读全跳到开头
section "0.5 静态文件 HTTP Range 支持"
HEADERS=$(curl -sD - -o /dev/null "$BASE/audio/lesson_1.mp3" 2>/dev/null)
echo "$HEADERS" | grep -qi '^Accept-Ranges:.*bytes' && ok "MP3 含 Accept-Ranges: bytes" || fail "MP3 缺 Accept-Ranges 头（dev-server 不支持 Range）"

RANGE_HEADERS=$(curl -sD - -o /dev/null -H 'Range: bytes=100-200' "$BASE/audio/lesson_1.mp3" 2>/dev/null)
echo "$RANGE_HEADERS" | head -1 | grep -q '206' && ok "Range 请求返 206 Partial Content" || fail "Range 请求没返 206"
echo "$RANGE_HEADERS" | grep -qi '^Content-Range:.*bytes 100-200/' && ok "Content-Range 头正确" || fail "Content-Range 头不对"

# ─── 1. /api/grade kind=cloze ──────────────────────────
section "1. /api/grade — cloze"
# L1 cloze v3: 12 空（≤15 上限）— theatre, seat, interesting, talking, loudly, angry, turned, attention, bear, rudely, private, conversation
L1_FULL='["theatre","seat","interesting","talking","loudly","angry","turned","attention","bear","rudely","private","conversation"]'
RESP=$(curl -s -X POST "$BASE/api/grade" -H 'content-type: application/json' \
  -d "{\"lesson_id\":1,\"kind\":\"cloze\",\"answers\":$L1_FULL}")
SCORE=$(echo "$RESP" | python3 -c "import json,sys; print(json.load(sys.stdin)['score'])")
TOTAL=$(echo "$RESP" | python3 -c "import json,sys; print(json.load(sys.stdin)['total'])")
if [[ "$SCORE" == "12" && "$TOTAL" == "12" ]]; then ok "全对 cloze 12/12"; else fail "全对应 12/12 实际 $SCORE/$TOTAL"; fi

# 英美拼写双接受：theatre 写成 theater 也算对
RESP=$(curl -s -X POST "$BASE/api/grade" -H 'content-type: application/json' \
  -d '{"lesson_id":1,"kind":"cloze","answers":["theater","seat","interesting","talking","loudly","angry","turned","attention","bear","rudely","private","conversation"]}')
SCORE=$(echo "$RESP" | python3 -c "import json,sys; print(json.load(sys.stdin)['score'])")
if [[ "$SCORE" == "12" ]]; then ok "英美拼写双接受 (theater = theatre) 12/12"; else fail "应 12/12 实际 $SCORE/12"; fi

# 1 错
RESP=$(curl -s -X POST "$BASE/api/grade" -H 'content-type: application/json' \
  -d '{"lesson_id":1,"kind":"cloze","answers":["WRONG","seat","interesting","talking","loudly","angry","turned","attention","bear","rudely","private","conversation"]}')
SCORE=$(echo "$RESP" | python3 -c "import json,sys; print(json.load(sys.stdin)['score'])")
if [[ "$SCORE" == "11" ]]; then ok "1 错 cloze 11/12"; else fail "11/12 实际 $SCORE/12"; fi

# 错题 details 应含 hint_zh
HINT=$(echo "$RESP" | python3 -c "import json,sys; d=json.load(sys.stdin); wrongs=[x for x in d['details'] if not x['correct']]; print(wrongs[0].get('hint_zh','')[:30] if wrongs else 'NO_WRONG')")
if [[ -n "$HINT" && "$HINT" != "NO_WRONG" ]]; then ok "错题反馈含 hint_zh：${HINT}..."; else fail "错题缺 hint_zh"; fi

RESP=$(curl -s -X POST "$BASE/api/grade" -H 'content-type: application/json' \
  -d '{"lesson_id":1,"kind":"cloze","answers":[]}')
SCORE=$(echo "$RESP" | python3 -c "import json,sys; print(json.load(sys.stdin)['score'])")
if [[ "$SCORE" == "0" ]]; then ok "空答案 0/12"; else fail "空答案应 0 实际 $SCORE"; fi

# ─── 2. /api/grade kind=translation 新版（sentences[]）─
section "2. /api/grade — translation (per-sentence)"
TRANS_PAYLOAD='{"lesson_id":1,"kind":"translation","direction":"cn_to_en","sentences":[{"index":0,"source":"上星期我去看戏。","reference":"Last week I went to the theatre.","answer":"Last week I went to theatre."}]}'
# V4 Pro 偶发返回 error 格式、重试最多 5 次（指数退避）
RESP=""
for try in 1 2 3 4 5; do
  RESP=$(curl -s -X POST "$BASE/api/grade" -H 'content-type: application/json' --max-time 180 -d "$TRANS_PAYLOAD")
  if echo "$RESP" | python3 -c "import json,sys; d=json.load(sys.stdin); sys.exit(0 if isinstance(d.get('per_sentence'), list) and d['per_sentence'] else 1)" 2>/dev/null; then
    break
  fi
  if [[ "$try" -lt 5 ]]; then
    wait=$((try * 15))
    echo "    （第 $try 次失败、等 ${wait}s 重试）"
    sleep $wait
  fi
done
assert_json_has "$RESP" "['per_sentence']" "translation 含 per_sentence"
assert_json_has "$RESP" "['per_sentence'][0]['score']" "per_sentence[0].score"
assert_json_has "$RESP" "['per_sentence'][0]['comment']" "per_sentence[0].comment"
assert_json_has "$RESP" "['overall_score']" "overall_score"
assert_json_has "$RESP" "['overall_summary']" "overall_summary"

# 1 段输入应得 1 段反馈
LEN=$(echo "$RESP" | python3 -c "import json,sys; print(len(json.load(sys.stdin).get('per_sentence', [])))")
if [[ "$LEN" == "1" ]]; then ok "per_sentence 长度 = 1"
else fail "per_sentence 应 1 段、实际 $LEN"; fi

# 错误格式：sentences 全空
RESP=$(curl -s -X POST "$BASE/api/grade" -H 'content-type: application/json' --max-time 180 \
  -d '{"lesson_id":1,"kind":"translation","direction":"cn_to_en","sentences":[{"index":0,"source":"x","reference":"y","answer":""}]}')
ERR=$(echo "$RESP" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('error', 'NONE'))")
if [[ "$ERR" != "NONE" ]]; then ok "全空答案返回 error"; else fail "应返回 error、实际 $RESP"; fi

# ─── 3. /api/grade kind=dictation ──────────────────────
section "3. /api/grade — dictation"
RESP=$(curl -s -X POST "$BASE/api/grade" -H 'content-type: application/json' --max-time 180 \
  -d '{"lesson_id":1,"kind":"dictation","answer":"Last week I went to the theatre. I had a very good seat."}')
assert_json_has "$RESP" "['match_pct']" "dictation 含 match_pct"
assert_json_has "$RESP" "['diff_html']" "dictation 含 diff_html"

# AI tip 是 string、可能空（如果完全 100% 匹配），允许空字符串
HAS_TIP=$(echo "$RESP" | python3 -c "import json,sys; d=json.load(sys.stdin); print('YES' if 'ai_tip' in d else 'NO')")
if [[ "$HAS_TIP" == "YES" ]]; then ok "dictation 含 ai_tip 字段"; else fail "dictation 缺 ai_tip"; fi

# ─── 4. /api/grade kind=you_too sub_kind=all_fills ──────
section "4. /api/grade — you_too all_fills (新模式：A/B/C 都填)"
RESP=$(curl -s -X POST "$BASE/api/grade" -H 'content-type: application/json' --max-time 180 \
  -d '{
    "lesson_id":1,"kind":"you_too","question":"...","sub_kind":"all_fills",
    "word_bank":["got angry","talking loudly","did not say anything","did not pay any attention","could not bear it","angrily","rudely","private"],
    "fills":[
      {"label":"A","scenario_zh":"妈妈打断游戏喊吃饭","english_template":"At home, my mom called me to dinner when I was playing a game. I got very angry, but I ___ to her.","expected_phrase":"did not say anything","filled_value":"did not say anything"},
      {"label":"B","scenario_zh":"上课同桌打扰","english_template":"My classmate kept asking me questions when I was taking a test. I got very angry, and I ___ to him.","expected_phrase":"did not pay any attention","filled_value":"did not pay any attention"},
      {"label":"C","scenario_zh":"邻居一大早大声喧哗","english_template":"My neighbors were ___ in the morning, and I could not sleep.","expected_phrase":"talking loudly","filled_value":"WRONG"}
    ]
  }')
COUNT=$(echo "$RESP" | python3 -c "import json,sys; d=json.load(sys.stdin); print(len(d.get('per_fill',[])))")
if [[ "$COUNT" == "3" ]]; then ok "返回 per_fill 数组、长度 3"; else fail "per_fill 应 3 个、实际 $COUNT"; fi
# A、B 期望对、C 故意错
A_CORRECT=$(echo "$RESP" | python3 -c "import json,sys; d=json.load(sys.stdin); a=next((x for x in d.get('per_fill',[]) if x['label']=='A'),None); print(a['fill_correct'] if a else 'NONE')")
B_CORRECT=$(echo "$RESP" | python3 -c "import json,sys; d=json.load(sys.stdin); b=next((x for x in d.get('per_fill',[]) if x['label']=='B'),None); print(b['fill_correct'] if b else 'NONE')")
C_CORRECT=$(echo "$RESP" | python3 -c "import json,sys; d=json.load(sys.stdin); c=next((x for x in d.get('per_fill',[]) if x['label']=='C'),None); print(c['fill_correct'] if c else 'NONE')")
if [[ "$A_CORRECT" == "True" && "$B_CORRECT" == "True" && "$C_CORRECT" == "False" ]]; then
  ok "fill_correct 判断对：A=✓ B=✓ C=✗"
else
  fail "fill_correct 错：A=$A_CORRECT B=$B_CORRECT C=$C_CORRECT"
fi
# 每条都有 comment
HAS_COMMENT=$(echo "$RESP" | python3 -c "import json,sys; d=json.load(sys.stdin); print(all(x.get('comment','').strip() for x in d.get('per_fill',[])))")
if [[ "$HAS_COMMENT" == "True" ]]; then ok "每条 fill 都有 AI comment"; else fail "有 fill 缺 comment"; fi

# ─── 5. /api/grade kind=you_too sub_kind=fill (legacy) ──
section "5. /api/grade — you_too fill (旧模式、L11+ 之后可能继续用)"
RESP=$(curl -s -X POST "$BASE/api/grade" -H 'content-type: application/json' --max-time 180 \
  -d '{"lesson_id":1,"kind":"you_too","question":"...","sub_kind":"fill","chosen_label":"B","english_template":"... ___ to him.","expected_phrase":"did not pay any attention","filled_value":"did not pay any attention","scenario_zh":"x","word_bank":["did not pay any attention","got angry"]}')
assert_json_has "$RESP" "['comment']" "you_too 旧 fill 模式仍可用、含 comment"

# ─── 6. /api/grade 错误处理 ────────────────────────────
section "6. /api/grade — 错误处理"
# Lesson id 不存在
RESP=$(curl -s -X POST "$BASE/api/grade" -H 'content-type: application/json' \
  -d '{"lesson_id":999,"kind":"cloze","answers":[]}')
ERR=$(echo "$RESP" | python3 -c "import json,sys; print(json.load(sys.stdin).get('error', 'NONE'))")
if [[ "$ERR" != "NONE" ]]; then ok "lesson_id=999 返回 error"; else fail "应返回 error"; fi

# kind 未知
RESP=$(curl -s -X POST "$BASE/api/grade" -H 'content-type: application/json' \
  -d '{"lesson_id":1,"kind":"INVALID"}')
ERR=$(echo "$RESP" | python3 -c "import json,sys; print(json.load(sys.stdin).get('error', 'NONE'))")
if [[ "$ERR" != "NONE" ]]; then ok "kind=INVALID 返回 error"; else fail "应返回 error"; fi

# Method 错（GET 而非 POST）
CODE=$(curl -s -o /dev/null -w "%{http_code}" "$BASE/api/grade")
if [[ "$CODE" == "405" || "$CODE" == "404" ]]; then ok "GET /api/grade 拒绝 (code=$CODE)"; else fail "GET 应被拒绝、实际 $CODE"; fi

# 非法 JSON
CODE=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$BASE/api/grade" -H 'content-type: application/json' -d 'not-json')
if [[ "$CODE" == "400" || "$CODE" == "500" ]]; then ok "非法 JSON 返回 4xx/5xx (code=$CODE)"; else fail "非法 JSON 应错、实际 $CODE"; fi

# ─── 7. /api/finish ────────────────────────────────────
section "7. /api/finish"
RESP=$(curl -s -X POST "$BASE/api/finish" -H 'content-type: application/json' --max-time 180 \
  -d '{"lesson_id":1,"_test":true,"submitted_at":"2026-05-11T00:00:00Z","answers":{"you_too":{"selected_label":"A","custom_text":""},"cloze":["a","b"],"cn_to_en":["x"],"en_to_cn":["y"],"dictation":""},"results":{"you_too":{"comment":"ok"},"cloze":{"score":2,"total":2,"details":[]},"cn_to_en":null,"en_to_cn":null,"dictation":null}}')
OK_FIELD=$(echo "$RESP" | python3 -c "import json,sys; d=json.load(sys.stdin); print('OK' if d.get('ok')==True else d.get('error','UNKNOWN'))")
if [[ "$OK_FIELD" == "OK" ]]; then
  ok "/api/finish 返回 ok（即使无 RESEND_API_KEY 也应跳过邮件返回 ok）"
else
  # Resend 未配置时不会失败、应该返回 ok。如果失败、说明实现有 bug 或环境不对
  fail "/api/finish 失败：$OK_FIELD"
fi

# ─── 总结 ──────────────────────────────────────────────
section "总结"
TOTAL=$((PASS + FAIL))
printf '\033[1m通过: %d / %d\033[0m  失败: %d\n' "$PASS" "$TOTAL" "$FAIL"
if [[ "$FAIL" -gt 0 ]]; then
  printf '\033[31m\nAPI 测试失败\033[0m\n'
  exit 1
else
  printf '\033[32m\nAPI 全部 OK\033[0m\n'
  exit 0
fi
