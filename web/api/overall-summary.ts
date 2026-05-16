/**
 * /api/overall-summary
 *
 * 输入：lesson_id + 5 站 results
 * 输出：{ summary, focus_points: string[], encouragement }
 *
 * 学生做完所有 5 站后落到 summary 屏时调用一次、得到整体回顾。
 * 失败不阻塞 — 客户端会单独显示「AI 总评暂不可用」并继续走 finish 流程。
 */
import { loadLessons, checkToken, generateOverallSummary } from "./_shared.js";

interface Payload {
  lesson_id: number;
  token?: string;
  results: any;  // 5 站 results 对象（不严格 typed、容错优先）
}

export default async function handler(req: any, res: any) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  let payload: Payload;
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
  if (!payload || typeof payload.lesson_id !== "number" || !payload.results) {
    res.status(400).json({ error: "缺 lesson_id 或 results" });
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
    const result = await generateOverallSummary(lesson, payload.results);
    res.status(200).json(result);
  } catch (e: any) {
    res.status(200).json({
      summary: "",
      focus_points: [],
      encouragement: "",
      error: `AI 总评失败：${e.message ?? e}`,
    });
  }
}
