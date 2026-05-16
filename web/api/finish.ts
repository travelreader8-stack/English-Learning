import { Resend } from "resend";
import {
  loadLessons,
  checkToken,
  escapeHtml,
  type Lesson,
  type ClozeResult,
  type TranslationResult,
  type DictationResult,
  type YouTooResult,
} from "./_shared.js";

interface FinishPayload {
  lesson_id: number;
  token?: string;
  submitted_at: string;
  /** 测试模式：true 则跳过 Resend 实发、只验证 schema。测试脚本传、生产前端不要传。 */
  _test?: boolean;
  answers: {
    read_aloud?: { listened?: boolean; attempted_sentence_ids?: string[]; last_attempt_at?: string };
    you_too?: { selected_label: string | null; custom_text: string };
    cloze: string[];
    cn_to_en: string[] | string;     // 新版数组、兼容旧字符串
    en_to_cn: string[] | string;
    dictation: string;
  };
  results: {
    read_aloud?: any;
    you_too?: YouTooResult | null;
    cloze: ClozeResult | null;
    cn_to_en: TranslationResult | null;
    en_to_cn: TranslationResult | null;
    dictation: DictationResult | null;
  };
}

function renderTranslationBlock(label: string, b: TranslationResult | null, answers: string[] | string | undefined): string {
  if (!b) return `<h3>${label}</h3><p style="color:#9ca3af">未做</p>`;
  if (b.error) return `<h3>${label}</h3><p style="color:#dc2626">⚠️ ${escapeHtml(b.error)}</p>`;

  // 兼容旧格式（单一 score / comment）
  if (!b.per_sentence && typeof b.score === "number") {
    const fixes = (b.fixes ?? []).length
      ? `<ul style="font-size:14px;color:#4b5563">${b.fixes!.map(f => `<li><del style="background:#fee2e2">${escapeHtml(f.original)}</del> → <ins style="text-decoration:none;background:#dcfce7;padding:0 4px">${escapeHtml(f.suggested)}</ins><br><small>${escapeHtml(f.reason_zh)}</small></li>`).join("")}</ul>`
      : "";
    const ansStr = Array.isArray(answers) ? answers.join("\n") : (answers ?? "");
    return `
      <h3>${label} <span style="color:#2563eb">${b.score} / ${b.out_of}</span></h3>
      <p>${escapeHtml(b.comment ?? "")}</p>
      ${fixes}
      <details><summary style="cursor:pointer;color:#6b7280;font-size:13px">学生答案</summary><pre style="background:#fafaf7;padding:10px;border-radius:6px;white-space:pre-wrap;font-size:14px">${escapeHtml(ansStr)}</pre></details>
    `;
  }

  // 新格式：逐句 + 整体
  const ans = Array.isArray(answers) ? answers : [];
  const rows = (b.per_sentence ?? []).map(p => {
    const studentAns = (ans[p.index] ?? "").trim();
    const fixes = (p.fixes ?? []).length
      ? `<ul style="font-size:13px;color:#4b5563;margin:4px 0 0">${p.fixes.map(f => `<li><del style="background:#fee2e2">${escapeHtml(f.original)}</del> → <ins style="text-decoration:none;background:#dcfce7;padding:0 4px">${escapeHtml(f.suggested)}</ins><br><small>${escapeHtml(f.reason_zh)}</small></li>`).join("")}</ul>`
      : "";
    return `
      <div style="background:#fafaf7;border-radius:8px;padding:10px 12px;margin:8px 0">
        <div style="font-size:13px;color:#6b7280">第 ${p.index + 1} 句 · <span style="color:#2563eb;font-weight:600">${p.score} / 10</span></div>
        <div style="font-size:14px;margin:4px 0">${escapeHtml(studentAns || "(未作答)")}</div>
        <div style="font-size:14px;color:#1f2937">${escapeHtml(p.comment ?? "")}</div>
        ${fixes}
      </div>
    `;
  }).join("");

  return `
    <h3>${label} <span style="color:#2563eb">整体 ${b.overall_score ?? "—"} / 10</span></h3>
    <p style="background:#dbeafe;border-left:3px solid #2563eb;padding:10px 14px;border-radius:6px">${escapeHtml(b.overall_summary ?? "")}</p>
    ${rows}
  `;
}

function renderReadAloudBlock(result: any, answer: FinishPayload["answers"]["read_aloud"]): string {
  if (!result && !answer?.listened && !answer?.attempted_sentence_ids?.length) return "";
  const attempted = answer?.attempted_sentence_ids?.length ?? result?.attempted ?? 0;
  const total = result?.total;
  return `
    <h3>⓪ 跟读 Read Aloud</h3>
    <p style="background:#fef3c7;padding:10px 14px;border-radius:8px;border-left:3px solid #f97316">
      已听全文${attempted ? `，录了 ${attempted}${total ? ` / ${total}` : ""} 个核心句` : ""}。
      ${result?.last_coach_zh ? `最近反馈：${escapeHtml(result.last_coach_zh)}` : ""}
    </p>
  `;
}

function renderDictationBlock(d: DictationResult | null, answer: string): string {
  if (!d) return `<h3>⑤ 默写</h3><p style="color:#9ca3af">未做</p>`;
  if (d.error) return `<h3>⑤ 默写</h3><p style="color:#dc2626">⚠️ ${escapeHtml(d.error)}</p>`;
  return `
    <h3>⑤ 默写 <span style="color:#2563eb">${d.match_pct}%</span></h3>
    <div style="background:#fff;border:1px solid #e5e7eb;border-radius:6px;padding:12px;font-family:Helvetica,sans-serif;font-size:15px;line-height:1.8">
      <style>del{background:#fee2e2;color:#dc2626}ins{background:#dcfce7;color:#16a34a;text-decoration:none;padding:0 2px}</style>
      ${d.diff_html ?? ""}
    </div>
    ${d.ai_tip ? `<div style="background:#dbeafe;border-left:3px solid #2563eb;padding:10px 14px;border-radius:6px;margin-top:10px">📌 ${escapeHtml(d.ai_tip)}</div>` : ""}
    <details><summary style="cursor:pointer;color:#6b7280;font-size:13px;margin-top:8px">学生默写原文</summary><pre style="background:#fafaf7;padding:10px;border-radius:6px;white-space:pre-wrap;font-size:14px">${escapeHtml(answer)}</pre></details>
  `;
}

function renderYouTooBlock(yt: YouTooResult | null | undefined, answer: { selected_label: string | null; custom_text: string } | undefined): string {
  if (!yt) return "";
  if (yt.error) return `<h3>① 生活场景</h3><p style="color:#dc2626">⚠️ ${escapeHtml(yt.error)}</p>`;
  const ansSummary = answer?.selected_label
    ? `选了 <strong>${escapeHtml(answer.selected_label)}</strong>${answer.custom_text ? `，并写：${escapeHtml(answer.custom_text)}` : ""}`
    : `自己写：${escapeHtml(answer?.custom_text ?? "")}`;
  return `
    <h3>① 生活场景（鼓励 + 小建议）</h3>
    <p style="background:#fef3c7;padding:10px 14px;border-radius:8px;border-left:3px solid #f97316">${escapeHtml(yt.comment ?? "")}</p>
    <p style="color:#6b7280;font-size:14px">儿子的回答：${ansSummary}</p>
  `;
}

function renderClozeBlock(c: ClozeResult | null, submitted: string[]): string {
  if (!c) return `<h3>② 完形填空</h3><p style="color:#9ca3af">未做</p>`;
  const wrong = c.details.filter(d => !d.correct);
  return `
    <h3>② 完形填空 <span style="color:#2563eb">${c.score} / ${c.total}</span></h3>
    ${wrong.length === 0 ? "<p>满分 🎉</p>" : `<p>错的：</p><ul>${wrong.map(d => `<li>第 ${d.index + 1} 空：写成 <code style="background:#fee2e2;padding:1px 4px;border-radius:3px">${escapeHtml(d.submitted || "(空)")}</code>，正确 <code style="background:#dcfce7;padding:1px 4px;border-radius:3px">${escapeHtml(d.expected)}</code></li>`).join("")}</ul>`}
  `;
}

function buildEmail(lesson: Lesson, p: FinishPayload): { subject: string; html: string } {
  const r = p.results;
  const summaryParts: string[] = [];
  if (r.cloze) summaryParts.push(`完形 ${r.cloze.score}/${r.cloze.total}`);
  if (r.cn_to_en?.score !== undefined) summaryParts.push(`中译英 ${r.cn_to_en.score}/${r.cn_to_en.out_of}`);
  if (r.en_to_cn?.score !== undefined) summaryParts.push(`英译中 ${r.en_to_cn.score}/${r.en_to_cn.out_of}`);
  if (r.dictation?.match_pct !== undefined) summaryParts.push(`默写 ${r.dictation.match_pct}%`);
  const subject = `[NCE2 L${lesson.id}] ${lesson.title} · ${summaryParts.join(" · ")}`;

  const html = `<!doctype html>
<html><body style="font-family:-apple-system,sans-serif;max-width:720px;margin:0 auto;padding:24px;color:#1f2937;line-height:1.7">
  <h1 style="margin:0 0 4px">📝 Lesson ${lesson.id} — ${escapeHtml(lesson.title)}</h1>
  <p style="color:#6b7280;margin:0 0 24px">提交时间：${escapeHtml(p.submitted_at)}</p>

  ${renderReadAloudBlock(r.read_aloud, p.answers.read_aloud)}
  ${renderYouTooBlock(r.you_too, p.answers.you_too)}
  ${renderClozeBlock(r.cloze, p.answers.cloze)}
  ${renderTranslationBlock("③ 中译英", r.cn_to_en, p.answers.cn_to_en)}
  ${renderTranslationBlock("④ 英译中", r.en_to_cn, p.answers.en_to_cn)}
  ${renderDictationBlock(r.dictation, p.answers.dictation)}

  <hr style="margin-top:32px;border:none;border-top:1px solid #e5e7eb">
  <p style="color:#9ca3af;font-size:13px">本邮件由 NCE2 互动课件自动发送。</p>
</body></html>`;

  return { subject, html };
}

async function sendEmail(
  html: string,
  subject: string,
): Promise<{ id?: string; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const parent = process.env.PARENT_EMAIL;
  const student = process.env.STUDENT_EMAIL;  // 可选：同时抄送给学生本人
  const from = process.env.FROM_EMAIL || "onboarding@resend.dev";
  if (!apiKey || !parent) {
    console.warn("RESEND_API_KEY / PARENT_EMAIL 未配置，跳过邮件发送");
    return { error: "RESEND_API_KEY / PARENT_EMAIL 未配置" };
  }
  const to = student && student !== parent ? [parent, student] : parent;
  const resend = new Resend(apiKey);
  const result = await resend.emails.send({ from, to, subject, html });
  if ((result as any)?.error) {
    const err = (result as any).error;
    console.error(`[finish] Resend 报错：${err.name ?? ""} ${err.message ?? JSON.stringify(err)}`);
    return { error: `${err.name ?? "Resend"}: ${err.message ?? "未知"}` };
  }
  const id = (result as any)?.data?.id;
  console.log(`[finish] Resend 已接收：id=${id} to=${Array.isArray(to) ? to.join(", ") : to}`);
  return { id };
}

export default async function handler(req: any, res: any) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  let payload: FinishPayload;
  try {
    payload = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch {
    res.status(400).json({ error: "Invalid JSON" });
    return;
  }

  const tokenErr = checkToken(payload);
  if (tokenErr) {
    res.status(403).json({ error: tokenErr });
    return;
  }

  let lessons;
  try {
    lessons = await loadLessons(req);
  } catch (e: any) {
    res.status(500).json({ error: e.message ?? "无法加载课程数据" });
    return;
  }

  const lesson = lessons.find(L => L.id === payload.lesson_id);
  if (!lesson) {
    res.status(400).json({ error: `Lesson ${payload.lesson_id} 不存在` });
    return;
  }

  try {
    const { subject, html } = buildEmail(lesson, payload);
    // 测试模式：只构建邮件、不真发（避免测试每跑一次就给家长邮箱发一封）
    if (payload._test === true) {
      console.log(`[finish] _test=true、跳过实发。subject="${subject}" html_len=${html.length}`);
      res.status(200).json({ ok: true, test_mode: true, subject, html_len: html.length });
      return;
    }
    const sendResult = await sendEmail(html, subject);
    if (sendResult.error) {
      res.status(200).json({ ok: true, email_warning: sendResult.error });
      return;
    }
    res.status(200).json({ ok: true, email_id: sendResult.id });
  } catch (e: any) {
    res.status(500).json({ error: `邮件发送失败：${e.message ?? e}` });
  }
}
