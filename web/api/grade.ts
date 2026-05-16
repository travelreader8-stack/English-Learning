import {
  loadLessons,
  checkToken,
  gradeClozeServer,
  gradeDictation,
  gradeTranslation,
  generateDictationTip,
  gradeYouToo,
} from "./_shared.js";

interface BasePayload {
  lesson_id: number;
  token?: string;
  kind: "cloze" | "translation" | "dictation" | "you_too";
}
interface ClozePayload extends BasePayload {
  kind: "cloze";
  answers: string[];
}
interface TranslationPayload extends BasePayload {
  kind: "translation";
  direction: "cn_to_en" | "en_to_cn";
  sentences: { index: number; source: string; reference: string; answer: string }[];
}
interface DictationPayload extends BasePayload {
  kind: "dictation";
  answer: string;
}
interface YouTooFillPayload extends BasePayload {
  kind: "you_too";
  question: string;
  // 来自前端 payload 字段（kind: "fill" | "free"）
  // 简化：grade.ts 直接把整个 payload 传给 _shared.gradeYouToo
}
type Payload = ClozePayload | TranslationPayload | DictationPayload | YouTooFillPayload;

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
    if (payload.kind === "cloze") {
      const result = gradeClozeServer(payload.answers ?? [], lesson.cloze.blanks);
      res.status(200).json(result);
      return;
    }
    if (payload.kind === "translation") {
      const direction = payload.direction;
      const sentences = Array.isArray(payload.sentences) ? payload.sentences : [];
      const result = await gradeTranslation(direction, sentences, lesson.title);
      res.status(200).json(result);
      return;
    }
    if (payload.kind === "dictation") {
      const dict = gradeDictation(payload.answer ?? "", lesson.english);
      const tip = await generateDictationTip(lesson.english, payload.answer ?? "", dict.match_pct);
      res.status(200).json({ ...dict, ai_tip: tip });
      return;
    }
    if (payload.kind === "you_too") {
      // 前端送来的 payload 含 nested kind="fill"|"free" + 其余字段；直接转给 gradeYouToo
      const innerKind = (payload as any).kind === "you_too" ? (payload as any) : payload;
      // grade.ts kind 是外层（"you_too"），_shared.gradeYouToo 期望的内层 kind 在 (payload as any).kind
      // 因为前端用 callGrade("you_too", { kind: "fill"|"free", ... }) 把 inner kind 也叫 kind 覆盖了
      // 我们改名：前端把 inner kind 放到 sub_kind 里（更清晰）
      // —— 这里兼容：若没有 sub_kind，退化用 chosen_label / english_template 区分
      const sub: any = (payload as any).sub_kind
        ? { ...(payload as any), kind: (payload as any).sub_kind }
        : ((payload as any).english_template !== undefined
          ? { ...(payload as any), kind: "fill" }
          : { ...(payload as any), kind: "free" });
      const result = await gradeYouToo(
        (payload as any).question ?? "",
        sub,
        lesson.title
      );
      res.status(200).json(result);
      return;
    }
    res.status(400).json({ error: "Unknown grade kind" });
  } catch (e: any) {
    res.status(500).json({ error: e.message ?? "评分失败" });
  }
}
