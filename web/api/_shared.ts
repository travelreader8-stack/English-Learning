import dmp from "diff-match-patch";

// ─── Types ──────────────────────────────────────────────
export interface ClozeBlank {
  index: number;
  answer: string;                    // 标准答案（教材英式）
  case_sensitive?: boolean;
  alt_answers?: string[];            // 可接受的替代拼写（英美差异如 theatre/theater）
  category?: string;                 // 词性分类（keyword/verb-past/verb-ing/adverb/noun/preposition/other）
  hint_zh?: string;                  // 错题时的中文语法提示
}
export interface Lesson {
  id: number;
  title: string;
  english: string;
  chinese: string;
  cloze: { blanks: ClozeBlank[]; rendered_html: string; };
}

export interface ClozeResult {
  score: number;
  total: number;
  details: { index: number; correct: boolean; expected: string; submitted: string; hint_zh?: string; category?: string }[];
}

export interface TranslationFix {
  original: string;
  suggested: string;
  reason_zh: string;
}
export interface PerSentenceResult {
  index: number;
  score: number;
  comment: string;
  fixes: TranslationFix[];
}
export interface TranslationResult {
  // 旧字段（兼容）
  score?: number;
  out_of?: number;
  comment?: string;
  fixes?: TranslationFix[];
  // 新字段（逐句）
  per_sentence?: PerSentenceResult[];
  overall_score?: number;
  overall_summary?: string;
  error?: string;
}

export interface SentencePair {
  index: number;
  source: string;
  reference: string;
  answer: string;
}

export interface DictationResult {
  match_pct?: number;
  diff_html?: string;
  ai_tip?: string;
  error?: string;
}

// ─── Helpers ────────────────────────────────────────────
const PUNCT_RE = /^[\s.,!?;:'"`()\[\]{}—\-]+|[\s.,!?;:'"`()\[\]{}—\-]+$/g;

export function normalize(raw: string, caseSensitive = false): string {
  let s = (raw ?? "").trim().replace(PUNCT_RE, "");
  if (!caseSensitive) s = s.toLowerCase();
  return s;
}

export function escapeHtml(s: string): string {
  return String(s ?? "").replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}[c]!));
}

// ─── Cloze grading ──────────────────────────────────────
export function gradeClozeServer(submitted: string[], blanks: ClozeBlank[]): ClozeResult {
  const details = blanks.map((b, i) => {
    const got = normalize(submitted?.[i] ?? "", b.case_sensitive);
    // 接受 answer + 所有 alt_answers（英美拼写都对）
    const acceptable = [b.answer, ...(b.alt_answers ?? [])].map(a => normalize(a, b.case_sensitive));
    const correct = got !== "" && acceptable.includes(got);
    return {
      index: i,
      correct,
      expected: b.answer,
      submitted: submitted?.[i] ?? "",
      hint_zh: correct ? undefined : b.hint_zh,
      category: b.category,
    };
  });
  return { score: details.filter(d => d.correct).length, total: blanks.length, details };
}

// ─── Dictation diff ─────────────────────────────────────
export function gradeDictation(submitted: string, original: string): { match_pct: number; diff_html: string } {
  const dmpInstance = new dmp.diff_match_patch();
  const subWords = (submitted ?? "").trim().split(/\s+/).filter(Boolean);
  const origWords = (original ?? "").trim().split(/\s+/).filter(Boolean);

  const chars: { chars1: string; chars2: string; lineArray: string[] } =
    (dmpInstance as any).diff_linesToChars_(origWords.join("\n"), subWords.join("\n"));
  const diffs = dmpInstance.diff_main(chars.chars1, chars.chars2, false);
  (dmpInstance as any).diff_charsToLines_(diffs, chars.lineArray);
  dmpInstance.diff_cleanupSemantic(diffs);

  let html = "";
  let matched = 0;
  for (const [op, text] of diffs) {
    const words = text.split("\n").filter(Boolean);
    const safe = words.map(escapeHtml).join(" ");
    if (op === 0) { html += `<span class="ok">${safe}</span> `; matched += words.length; }
    else if (op === -1) { html += `<del>${safe}</del> `; }
    else if (op === 1) { html += `<ins>${safe}</ins> `; }
  }
  const total = origWords.length || 1;
  const matchPct = Math.round((matched / total) * 100);
  return { match_pct: matchPct, diff_html: html.trim() };
}

// ─── DeepSeek client ────────────────────────────────────
export async function callDeepSeek(
  messages: { role: string; content: string }[],
  opts: { json?: boolean; maxTokens?: number; temperature?: number; retries?: number } = {}
): Promise<string> {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  const model = process.env.DEEPSEEK_MODEL || "deepseek-v4-pro";
  const base = process.env.DEEPSEEK_BASE_URL || "https://api.deepseek.com/v1";
  if (!apiKey) throw new Error("DEEPSEEK_API_KEY 未配置");

  const body: any = {
    model,
    messages,
    temperature: opts.temperature ?? 0.3,
    max_tokens: opts.maxTokens ?? 1200,
  };
  if (opts.json) body.response_format = { type: "json_object" };

  const retries = opts.retries ?? 3;  // 服务端默认 3 次重试 + 指数退避
  const perAttemptTimeoutMs = 40000;  // 每次 fetch 上限 40s — 防 DeepSeek 长挂、又给慢响应留余地
  let lastErr: any;
  for (let attempt = 0; attempt <= retries; attempt++) {
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), perAttemptTimeoutMs);
    try {
      const r = await fetch(`${base}/chat/completions`, {
        method: "POST",
        headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: ctl.signal
      });
      if (!r.ok) {
        const errText = await r.text();
        throw new Error(`DeepSeek HTTP ${r.status}: ${errText.slice(0, 200)}`);
      }
      const j: any = await r.json();
      const content = j.choices?.[0]?.message?.content;
      if (!content) throw new Error("DeepSeek 返回空内容");
      return content;
    } catch (e) {
      lastErr = e;
      if (attempt < retries) {
        // 指数退避：1s / 3s / 6s
        const wait = Math.min(6000, 1000 * (attempt + 1) * (attempt + 1));
        await new Promise(resolve => setTimeout(resolve, wait));
      }
    } finally {
      clearTimeout(timer);
    }
  }
  throw lastErr;
}

export function safeParseJSON<T = any>(s: string): T | null {
  if (!s) return null;
  // 1) 直接 parse
  try { return JSON.parse(s); } catch {}
  // 2) 剥 markdown 代码围栏（```json ... ```）
  const stripped = s.trim()
    .replace(/^```(?:json|JSON)?\s*\n?/, "")
    .replace(/\n?\s*```\s*$/, "");
  try { return JSON.parse(stripped); } catch {}
  // 3) 抽取最长 { ... } 块
  const m = stripped.match(/\{[\s\S]*\}/);
  if (m) {
    try { return JSON.parse(m[0]); } catch {}
  }
  return null;
}

// ─── Translation grading（逐句版） ─────────────────────
export async function gradeTranslation(
  direction: "cn_to_en" | "en_to_cn",
  sentences: SentencePair[],
  lessonTitle: string
): Promise<TranslationResult> {
  // 至少要有一个非空答案
  const written = sentences.filter(s => s.answer && s.answer.trim());
  if (!written.length) return { error: "未作答" };

  const dirText = direction === "cn_to_en" ? "中译英" : "英译中";
  const sourceLang = direction === "cn_to_en" ? "中文" : "英文";
  const targetLang = direction === "cn_to_en" ? "英文" : "中文";

  const sys = `你是一名专业初中英语老师，正在批改一名初一学生（英语刚及格水平）的《新概念英语 2》${dirText}练习。课文按语义切成了若干**段落**（每段约 3-5 句），学生按段落逐段翻译——你**必须逐段独立点评**、并给出**整体回顾**。

【硬性规则】
1. 每段满分 10 分。评分标准：意思正确 6 分 + 语法正确 2 分 + 用词地道 / 自然 2 分。
2. 不要求和「参考译文」逐字一致——意思对、语法对就给高分；如果学生没翻译这一段（answer 为空），score=0、comment="未作答"。
3. **per_sentence[i].comment 必须针对该段的具体错误**（指出最关键的 1-2 个问题）——不能笼统说"很好"或"再加油"，要点名错在哪、哪里地道。
4. **per_sentence[i].fixes 最多 2 条**——每条 {original, suggested, reason_zh}，是这一段的具体改写建议（针对最严重的两处）。如果这段完全没问题、fixes 为空数组。
5. **overall_summary 必须扫描所有段落、归纳 1-2 个最常见的错误模式**——比如"普遍漏复数"、"过去进行时和一般过去时混淆"、"喜欢用 can not 不爱用 could not"。不要笼统说"整体不错继续努力"。
6. **overall_score** 是各段分的算术平均、四舍五入。

【严格返回 JSON 对象】
{
  "per_sentence": [
    {"index": 0, "score": 数字, "comment": "中文 1-2 句、针对该段", "fixes": [{"original": "...", "suggested": "...", "reason_zh": "..."}]},
    {"index": 1, ...},
    ...
  ],
  "overall_score": 数字,
  "overall_summary": "中文 2-4 句、归纳模式问题、不空泛"
}
不要输出 JSON 之外的任何文字、不要 \`\`\`json 包装。`;

  // 拼用户消息
  const lines: string[] = [
    `课文：Lesson — ${lessonTitle}`,
    `方向：${dirText}（源 ${sourceLang} → 译 ${targetLang}）`,
    "",
    "【按句子对照】",
  ];
  for (const s of sentences) {
    lines.push(`---`);
    lines.push(`第 ${s.index + 1} 句`);
    lines.push(`源文 (${sourceLang})：${s.source}`);
    lines.push(`参考译文 (${targetLang})：${s.reference || "(无)"}`);
    lines.push(`学生答案：${s.answer || "(未作答)"}`);
  }
  lines.push("");
  lines.push("请按系统指令直接返回 JSON。");

  let raw = "";
  try {
    raw = await callDeepSeek([
      { role: "system", content: sys },
      { role: "user", content: lines.join("\n") }
    ], { json: true, maxTokens: 2400, temperature: 0.3 });
    let parsed = safeParseJSON<any>(raw);

    // 如果 parsed 没拿到 per_sentence、试着兼容多种字段名
    if (parsed && !Array.isArray(parsed.per_sentence)) {
      if (Array.isArray(parsed.sentences)) parsed.per_sentence = parsed.sentences;
      else if (Array.isArray(parsed.results)) parsed.per_sentence = parsed.results;
      else if (Array.isArray(parsed.evaluations)) parsed.per_sentence = parsed.evaluations;
      // 旧格式兜底：如果是 {score, comment, fixes} 单 object、包成 1 元素数组
      else if (typeof parsed.score === "number") {
        parsed = {
          per_sentence: [{
            index: 0,
            score: parsed.score,
            comment: parsed.comment ?? "",
            fixes: Array.isArray(parsed.fixes) ? parsed.fixes : [],
          }],
          overall_score: parsed.score,
          overall_summary: parsed.comment ?? "",
        };
      }
    }

    if (!parsed || !Array.isArray(parsed.per_sentence) || parsed.per_sentence.length === 0) {
      console.error("[gradeTranslation] 模型返回不含 per_sentence。原始响应（前 800 字）：\n" + (raw ?? "").slice(0, 800));
      return { error: "AI 返回格式异常，请稍后重试" };
    }

    // 规范化
    parsed.per_sentence = parsed.per_sentence.map((p: any, idx: number) => ({
      index: typeof p.index === "number" ? p.index : idx,
      score: typeof p.score === "number" ? Math.max(0, Math.min(10, p.score)) : 0,
      comment: typeof p.comment === "string" ? p.comment : "",
      fixes: Array.isArray(p.fixes) ? p.fixes.slice(0, 2) : [],
    }));
    if (typeof parsed.overall_score !== "number") {
      const total = parsed.per_sentence.reduce((a: number, b: any) => a + (b.score || 0), 0);
      parsed.overall_score = Math.round(total / Math.max(1, parsed.per_sentence.length));
    }
    if (typeof parsed.overall_summary !== "string") {
      parsed.overall_summary = "";
    }
    return parsed as TranslationResult;
  } catch (e: any) {
    console.error("[gradeTranslation] 抛错：", e?.message ?? e, "raw:", raw?.slice?.(0, 400));
    return { error: `AI 评分失败：${e.message ?? e}` };
  }
}

// ─── 我们生活的场景 (you_too): rate-free encouragement ───
export interface YouTooResult {
  comment?: string;
  fill_correct?: boolean;        // 填空题专用：填的对不对
  per_fill?: { label: string; fill_correct: boolean; comment: string }[];  // all_fills 模式
  error?: string;
}

interface FillPayload {
  kind: "fill";
  chosen_label: string;
  english_template: string;
  expected_phrase: string;
  filled_value: string;
  scenario_zh: string;
  word_bank: string[];
}

interface FreePayload {
  kind: "free";
  chosen_label: string;
  custom_text: string;
  word_bank: string[];
}

interface AllFillsPayload {
  kind: "all_fills";
  word_bank: string[];
  fills: {
    label: string;
    english_template: string;
    expected_phrase: string;
    filled_value: string;
    scenario_zh: string;
  }[];
}

function normalizeForCompare(s: string): string {
  return s.toLowerCase().trim().replace(/[.,!?;:'"`]+$/g, "").replace(/\s+/g, " ");
}

export async function gradeYouToo(
  question: string,
  payload: FillPayload | FreePayload | AllFillsPayload,
  lessonTitle: string
): Promise<YouTooResult> {
  if (payload.kind === "fill") {
    return gradeYouTooFill(question, payload, lessonTitle);
  }
  if (payload.kind === "all_fills") {
    return gradeYouTooAllFills(question, payload, lessonTitle);
  }
  return gradeYouTooFree(question, payload, lessonTitle);
}

// 新模式：A/B/C 三个场景都填、一次性 AI 评 3 段
async function gradeYouTooAllFills(
  question: string,
  p: AllFillsPayload,
  lessonTitle: string
): Promise<YouTooResult> {
  const fills = p.fills ?? [];
  if (!fills.length) return { error: "未填空" };

  // 先做客观判断
  const objective = fills.map(f => {
    const filledNorm = normalizeForCompare(f.filled_value ?? "");
    const expectedNorm = normalizeForCompare(f.expected_phrase ?? "");
    const exactExpected = filledNorm && filledNorm === expectedNorm;
    const inBank = (p.word_bank ?? []).some(w => normalizeForCompare(w) === filledNorm);
    return { label: f.label, exactExpected: !!exactExpected, inBank, filled: f.filled_value ?? "" };
  });

  const sys = `你是一名温和的初中英语老师，正在批一名初一学生（英语刚及格水平）的「生活场景」3 道填空题。这是套娃式题：把学生最近的经历套进 3 个场景模板里、用 word bank 里的短语来填。

这一题不打分。请逐题、给一段简短的中文反馈（每题 30-60 字）；如果填错或拼错、明确说出来。

【严格返回 JSON】
{
  "per_fill": [
    {"label": "A", "fill_correct": true/false, "comment": "中文 30-60 字"},
    {"label": "B", "fill_correct": true/false, "comment": "..."},
    {"label": "C", "fill_correct": true/false, "comment": "..."}
  ]
}
不要 \`\`\`json 包装、不要其他文字。

fill_correct 标准：
- 完全等于 expected_phrase（忽略大小写/末尾标点）或在 word_bank 里且语境通顺 → true
- 拼错、时态错、不在 word_bank 又不通顺 → false`;

  const lines: string[] = [
    `课文：Lesson — ${lessonTitle}`,
    `Word bank：${(p.word_bank ?? []).join(" · ")}`,
    "",
    "【3 道题如下】",
  ];
  for (let i = 0; i < fills.length; i++) {
    const f = fills[i];
    const o = objective[i];
    lines.push(`---`);
    lines.push(`${f.label}：${f.scenario_zh}`);
    lines.push(`英文模板：${f.english_template}`);
    lines.push(`期望填入：${f.expected_phrase}`);
    lines.push(`学生填了："${f.filled_value}"`);
    lines.push(`对照：完全等于=${o.exactExpected}、在 bank 里=${o.inBank}`);
  }
  lines.push("");
  lines.push("请按系统指令返回 JSON。");

  try {
    const raw = await callDeepSeek(
      [{ role: "system", content: sys }, { role: "user", content: lines.join("\n") }],
      { json: true, maxTokens: 800, temperature: 0.5 }
    );
    const parsed = safeParseJSON<any>(raw);
    if (!parsed || !Array.isArray(parsed.per_fill)) {
      // AI 返回异常、用客观判断兜底
      return {
        per_fill: objective.map(o => ({
          label: o.label,
          fill_correct: o.exactExpected || o.inBank,
          comment: o.exactExpected ? "填得对、就是这个短语 ✓"
                 : o.inBank ? "也通顺、word bank 里的短语 ✓"
                 : `「${o.filled}」 看一下 word bank、可能拼错或不在范围内`,
        })),
        error: "AI 评语返回格式异常、显示客观判断兜底",
      };
    }
    return {
      per_fill: parsed.per_fill.map((p: any, idx: number) => ({
        label: String(p.label ?? objective[idx]?.label ?? ""),
        fill_correct: !!p.fill_correct,
        comment: String(p.comment ?? "").trim(),
      })),
    };
  } catch (e: any) {
    return { error: `AI 反馈失败：${e.message ?? e}` };
  }
}

async function gradeYouTooFill(
  question: string,
  p: FillPayload,
  lessonTitle: string
): Promise<YouTooResult> {
  const filled = (p.filled_value ?? "").trim();
  if (!filled) return { error: "未填空" };

  // 客观：先做一次粗匹配，看填的是不是 word bank 里某个短语
  const filledNorm = normalizeForCompare(filled);
  const expectedNorm = normalizeForCompare(p.expected_phrase ?? "");
  const exactExpected = filledNorm === expectedNorm;
  const inBank = (p.word_bank ?? []).some(w => normalizeForCompare(w) === filledNorm);

  const sys = `你是一名温和的初中英语老师，正在批一名初一学生（英语刚及格水平）的「生活场景」填空题。
这一题不打分、不返回 JSON，只用一段 60-120 字的中文给反馈。

题目机制：
  - 学生从今天的 word bank 里挑出一个短语、填进给定的英文句子模板里。
  - 期望填的短语是 expected_phrase；word_bank 里其他短语如果填进去也通顺、就算合格。
  - 如果填的不在 word_bank 里、但语法和上下文都对、给中度认可（鼓励、但提示下次试试 word bank）。
  - 如果填的有拼写错、时态错、上下文不通——明确指出哪里错、给出正确写法。

输出要求：
1. 一段中文 60-120 字，不要 JSON。
2. 先肯定一个具体的点（不要空泛）。
3. 然后说他填得对不对、如果不对就给正确写法。
4. 最后一句小提示（可以是英文一句，也可以是中文一句）。`;

  const user = `课文：Lesson — ${lessonTitle}

【场景】${p.scenario_zh}

【英文模板（"___" 是空格）】
${p.english_template}

【期望填入】${p.expected_phrase}

【今天的 word bank】
${(p.word_bank ?? []).join(" · ")}

【学生填了】"${filled}"

【对照】
- 是否完全等于 expected_phrase（忽略大小写/末尾标点）：${exactExpected}
- 是否在 word_bank 里：${inBank}

请输出 60-120 字中文反馈。`;

  try {
    const raw = await callDeepSeek(
      [{ role: "system", content: sys }, { role: "user", content: user }],
      { json: false, maxTokens: 350, temperature: 0.5 }
    );
    return { comment: raw.trim(), fill_correct: exactExpected || inBank };
  } catch (e: any) {
    return { error: `AI 反馈失败：${e.message ?? e}` };
  }
}

async function gradeYouTooFree(
  question: string,
  p: FreePayload,
  lessonTitle: string
): Promise<YouTooResult> {
  const text = (p.custom_text ?? "").trim();
  if (!text) return { error: "未作答" };

  const sys = `你是一名温和的初中英语老师，正在批一名初一学生（英语刚及格水平）的「生活场景」自由作答（学生选了「自己写」选项）。
这一题不打分、不返回 JSON、只用一段 60-120 字中文给反馈。

输出要求：
1. 先肯定他写的内容里某个**具体的点**（看到你提到了 X、表达 Y），不要空泛。
2. 检查他是否用上 word_bank 里至少一个短语——
   - 如果用上了：表扬他记住了今天学的；
   - 如果没用上：温和地提醒「下次记得用上今天的短语」+ 给出他这句话**改进版**（嵌入 1 个 word bank 短语）。
3. 如果有明显的拼写 / 语法错，指出最关键那一个、给正确写法。
4. 一段中文 60-120 字，不要 JSON。`;

  const user = `课文：Lesson — ${lessonTitle}

【「生活场景」题面】
${question}

【今天的 word bank（必须用上至少一个）】
${(p.word_bank ?? []).join(" · ")}

【学生自己写的】
${text}

请输出 60-120 字中文反馈。`;

  try {
    const raw = await callDeepSeek(
      [{ role: "system", content: sys }, { role: "user", content: user }],
      { json: false, maxTokens: 350, temperature: 0.6 }
    );
    return { comment: raw.trim() };
  } catch (e: any) {
    return { error: `AI 反馈失败：${e.message ?? e}` };
  }
}

// ─── Dictation AI tip ───────────────────────────────────
export async function generateDictationTip(
  original: string,
  studentAnswer: string,
  matchPct: number
): Promise<string> {
  if (!studentAnswer.trim()) return "";
  if (matchPct >= 95) return "默写非常工整，标点和大小写也很注意，继续保持！";

  const sys = `你是一名初中英语老师，给一名初一学生（英语刚及格水平）写一句简短的默写讲评。要求：
1. 长度 1-2 句、50-100 字。
2. 指出 1-2 处最典型的错误（漏词、拼错、复数/时态错），并明确告诉他下次怎么注意。
3. 语气温和具体、不空洞鼓励。
4. 只输出一段中文，不要 JSON、不要 markdown。`;

  const user = `【原文】
${original}

【学生默写】
${studentAnswer}

【词级匹配率】${matchPct}%`;

  try {
    const raw = await callDeepSeek([
      { role: "system", content: sys },
      { role: "user", content: user }
    ], { json: false, maxTokens: 200, temperature: 0.5 });
    return raw.trim();
  } catch {
    return "";
  }
}

// ─── 整课总评：各 station 一起读、给学生一段整体反馈 ───
export interface OverallSummaryResult {
  summary: string;        // 2-3 句总体评价
  focus_points: string[]; // 2-4 条具体提醒（最该注意的薄弱点）
  encouragement: string;  // 一句鼓励
  error?: string;
}

export async function generateOverallSummary(
  lesson: Lesson,
  results: any
): Promise<OverallSummaryResult> {
  // 收集各站的关键信息
  const sections: string[] = [];
  // ⓪ read_aloud
  if (results.read_aloud) {
    const ra = results.read_aloud;
    sections.push(`⓪ 跟读：已录 ${ra.attempted ?? 0} / ${ra.total ?? "?"} 句。最近反馈：${(ra.last_coach_zh ?? "").slice(0, 200)}`);
  }
  // ① you_too
  if (results.you_too) {
    const yt = results.you_too;
    sections.push(`① 生活场景：${yt.error ? `未通过（${yt.error}）` : `已交。AI 评语：${(yt.comment ?? "").slice(0, 200)}`}`);
  }
  // ② cloze
  if (results.cloze) {
    const c = results.cloze;
    const wrongs = (c.details ?? []).filter((d: any) => !d.correct);
    const wrongList = wrongs.slice(0, 8).map((d: any) => `第 ${d.index + 1} 空: 写了 "${d.submitted}"、应是 "${d.expected}"`).join("； ");
    sections.push(`② 完形：${c.score} / ${c.total}${wrongs.length ? `。错点：${wrongList}` : "。全对"}`);
  }
  // ③ cn_to_en
  if (results.cn_to_en && !results.cn_to_en.error) {
    const t = results.cn_to_en;
    const per = (t.per_sentence ?? []).map((p: any) => `[第 ${p.index + 1} 段 ${p.score}/10] ${(p.comment ?? "").slice(0, 100)}`).join("; ");
    sections.push(`③ 中译英：平均 ${t.overall_score ?? "?"} / 10。逐段：${per}。整体：${(t.overall_summary ?? "").slice(0, 200)}`);
  }
  // ④ en_to_cn
  if (results.en_to_cn && !results.en_to_cn.error) {
    const t = results.en_to_cn;
    const per = (t.per_sentence ?? []).map((p: any) => `[第 ${p.index + 1} 段 ${p.score}/10] ${(p.comment ?? "").slice(0, 100)}`).join("; ");
    sections.push(`④ 英译中：平均 ${t.overall_score ?? "?"} / 10。逐段：${per}。整体：${(t.overall_summary ?? "").slice(0, 200)}`);
  }
  // ⑤ dictation
  if (results.dictation) {
    const d = results.dictation;
    sections.push(`⑤ 默写：匹配率 ${d.match_pct ?? "?"}%。AI 评语：${(d.ai_tip ?? "").slice(0, 200)}`);
  }
  if (!sections.length) {
    return { summary: "", focus_points: [], encouragement: "", error: "没有任何提交数据" };
  }

  const sys = `你是一名初中英语老师，给一名初一学生（英语刚及格水平）写本课的 **整体作业总评**。学生刚做完《新概念英语 2》Lesson ${lesson.id} — "${lesson.title}" 的练习。

【你的任务】通读所有题目的成绩 + AI 评语，归纳：
1. **summary**（2-3 句中文）：今天整体表现如何、最稳的是哪块、最弱的是哪块。具体、不空泛、不说教。
2. **focus_points**（2-4 条中文，每条 30 字以内）：针对错得最集中的 1-2 类问题、给「下次怎么注意」的可操作建议。例如「过去式不要漏 -ed」、「介词 in/on/at 多对照课文」。不要泛泛说「多练习」。
3. **encouragement**（一句中文、20 字以内）：温和、具体的鼓励、不油腻。

【严格返回 JSON】
{"summary": "...", "focus_points": ["...", "..."], "encouragement": "..."}
不要 \`\`\`json 包装、不要 JSON 之外的任何字。`;

  const user = sections.join("\n\n");
  try {
    const raw = await callDeepSeek([
      { role: "system", content: sys },
      { role: "user", content: user }
    ], { json: true, maxTokens: 700, temperature: 0.4 });
    const parsed = safeParseJSON<any>(raw);
    if (!parsed || typeof parsed.summary !== "string") {
      return { summary: "", focus_points: [], encouragement: "", error: "AI 返回格式异常" };
    }
    return {
      summary: String(parsed.summary || "").trim(),
      focus_points: Array.isArray(parsed.focus_points)
        ? parsed.focus_points.slice(0, 4).map((s: any) => String(s).trim()).filter(Boolean)
        : [],
      encouragement: String(parsed.encouragement || "").trim(),
    };
  } catch (e: any) {
    return { summary: "", focus_points: [], encouragement: "", error: `AI 总评失败：${e.message ?? e}` };
  }
}

// ─── Lesson loader ──────────────────────────────────────
let lessonsCache: Lesson[] | null = null;
let lessonsCacheAt = 0;

export async function loadLessons(req: any): Promise<Lesson[]> {
  const now = Date.now();
  if (lessonsCache && now - lessonsCacheAt < 5 * 60 * 1000) return lessonsCache;

  const host = req.headers.host || process.env.VERCEL_URL || "localhost:3000";
  const proto = host.includes("localhost") || host.includes("127.0.0.1") ? "http" : "https";
  for (const filename of ["/data/lessons.json", "/data/lessons.sample.json"]) {
    const url = `${proto}://${host}${filename}`;
    try {
      const r = await fetch(url, { cache: "no-cache" });
      if (r.ok) {
        const data = await r.json();
        lessonsCache = data;
        lessonsCacheAt = now;
        return data;
      }
    } catch {}
  }
  throw new Error("无法加载课程数据");
}

// ─── Token check ────────────────────────────────────────
export function checkToken(payload: any): string | null {
  const expected = process.env.STUDENT_TOKEN;
  if (!expected) return null;  // 未配置 token = 不校验
  return payload?.token === expected ? null : "口令不正确";
}
