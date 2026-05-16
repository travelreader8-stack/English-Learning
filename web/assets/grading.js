// 客户端评分 — 完形填空逐空对照（瞬时反馈）
// 默写 diff、翻译评分都在服务端做，前端只负责完形。

const PUNCT_RE = /^[\s.,!?;:'"`()\[\]{}—\-]+|[\s.,!?;:'"`()\[\]{}—\-]+$/g;

export function normalizeAnswer(raw, caseSensitive = false) {
  if (raw === undefined || raw === null) return "";
  let s = String(raw).trim().replace(PUNCT_RE, "");
  if (!caseSensitive) s = s.toLowerCase();
  return s;
}

export function gradeCloze(submitted, blanks) {
  const details = blanks.map((blank, i) => {
    const got = normalizeAnswer(submitted[i] ?? "", blank.case_sensitive);
    // 接受 answer + alt_answers（英美拼写双接受）
    const acceptable = [blank.answer, ...(blank.alt_answers ?? [])]
      .map(a => normalizeAnswer(a, blank.case_sensitive));
    const correct = got !== "" && acceptable.includes(got);
    return {
      index: i,
      correct,
      expected: blank.answer,
      submitted: submitted[i] ?? "",
      hint_zh: correct ? undefined : blank.hint_zh,
      category: blank.category,
    };
  });
  const score = details.filter(d => d.correct).length;
  return { score, total: blanks.length, details };
}
