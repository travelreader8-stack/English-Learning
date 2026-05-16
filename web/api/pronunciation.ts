import { checkToken } from "./_shared.js";

interface PronunciationPayload {
  lesson_id: number;
  token?: string;
  sentence_id: string;
  reference_text: string;
  focus_words?: string[];
  mime_type?: string;
  audio_base64: string;
}

function roundScore(v: any): number | null {
  const n = Number(v);
  return Number.isFinite(n) ? Math.round(n) : null;
}

function cleanWord(s: string): string {
  return String(s || "").toLowerCase().replace(/^[^a-z']+|[^a-z']+$/g, "");
}

function scoreNumber(v: any): number | null {
  const n = Number(v);
  return Number.isFinite(n) ? Math.round(n) : null;
}

function chooseCoach(scores: any, words: any[], focusWords: string[]): string {
  const focusSet = new Set((focusWords || []).map(cleanWord).filter(Boolean));
  const lowFocus = words.find(w => focusSet.has(cleanWord(w.word)) && typeof w.accuracy === "number" && w.accuracy < 78);
  if (lowFocus) {
    return `这一遍已经读下来了。下一遍只注意 ${lowFocus.word} 这个词，慢一点读清楚。`;
  }

  const lowWord = words.find(w => typeof w.accuracy === "number" && w.accuracy < 68);
  if (lowWord) {
    return `这一遍意思很完整。下一遍只挑一个点：把 ${lowWord.word} 读得更清楚。`;
  }

  if (typeof scores.completeness === "number" && scores.completeness < 78) {
    return "这一遍有些词可能没有完整读出来。下一遍先放慢，尽量把每个词都读到。";
  }

  if (typeof scores.fluency === "number" && scores.fluency < 72) {
    return "这句已经读对了大部分。下一遍试着少停顿一点，把短语连成一口气。";
  }

  if (typeof scores.prosody === "number" && scores.prosody < 72) {
    return "发音已经比较清楚了。下一遍注意句子的重音和语气，让它更像一句自然的话。";
  }

  const accuracy = scoreNumber(scores.accuracy);
  const completeness = scoreNumber(scores.completeness);
  const fluency = scoreNumber(scores.fluency);
  const prosody = scoreNumber(scores.prosody);
  const pronunciation = scoreNumber(scores.pronunciation);

  if (
    accuracy !== null && accuracy >= 92 &&
    completeness !== null && completeness >= 92 &&
    (fluency === null || fluency >= 85) &&
    (prosody === null || prosody >= 85)
  ) {
    return "优秀：发音清楚、句子完整，节奏也比较自然。可以换下一句，或者再挑战一次更像原音。";
  }

  if (
    (pronunciation !== null && pronunciation >= 85) ||
    (accuracy !== null && accuracy >= 85 && completeness !== null && completeness >= 85)
  ) {
    return "清楚过关：发音和完整度都不错。下一遍如果还想提高，只练一个小目标：把短语之间连得更自然。";
  }

  return "已经读下来了：主要意思完整。下一遍先保持发音清楚，再慢慢把停顿减少一点。";
}

function normalizeAzureResult(raw: any, focusWords: string[]) {
  const best = raw?.NBest?.[0] || {};
  const pa = best.PronunciationAssessment || raw?.PronunciationAssessment || {};
  const scores = {
    accuracy: roundScore(best.AccuracyScore ?? pa.AccuracyScore),
    fluency: roundScore(best.FluencyScore ?? pa.FluencyScore),
    completeness: roundScore(best.CompletenessScore ?? pa.CompletenessScore),
    prosody: roundScore(best.ProsodyScore ?? pa.ProsodyScore),
    pronunciation: roundScore(best.PronScore ?? pa.PronScore),
  };
  const words = Array.isArray(best.Words)
    ? best.Words.map((w: any) => ({
        word: String(w.Word || ""),
        accuracy: roundScore(w.AccuracyScore ?? w.PronunciationAssessment?.AccuracyScore),
        error_type: w.ErrorType || w.PronunciationAssessment?.ErrorType || "None",
      })).filter((w: any) => w.word)
    : [];

  const hasAnyScore = Object.values(scores).some(v => typeof v === "number");
  return {
    provider_status: hasAnyScore ? "ok" : "no_match",
    recognition_status: raw?.RecognitionStatus || "",
    display_text: best.Display || raw?.DisplayText || "",
    scores,
    words,
    coach_zh: hasAnyScore
      ? chooseCoach(scores, words, focusWords)
      : "我这次听得不够清楚。下一遍靠近麦克风一点，慢一点读完整句。",
  };
}

export default async function handler(req: any, res: any) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  let payload: PronunciationPayload;
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

  const referenceText = String(payload.reference_text || "").trim();
  const audioBase64 = String(payload.audio_base64 || "");
  if (!payload.lesson_id || !payload.sentence_id || !referenceText || !audioBase64) {
    res.status(400).json({ error: "缺少 lesson_id / sentence_id / reference_text / audio_base64" });
    return;
  }

  const key = process.env.AZURE_SPEECH_KEY || process.env.SPEECH_KEY;
  const region = process.env.AZURE_SPEECH_REGION || process.env.SPEECH_REGION;
  if (!key || !region) {
    res.status(503).json({ error: "Azure Speech 未配置，录音已保存在本地，暂时不能云端纠音" });
    return;
  }

  let audio: Buffer;
  try {
    audio = Buffer.from(audioBase64, "base64");
  } catch {
    res.status(400).json({ error: "录音格式无效" });
    return;
  }
  if (!audio.length || audio.length > 6 * 1024 * 1024) {
    res.status(400).json({ error: "录音为空或过大，请只录一句话" });
    return;
  }

  const assessment = {
    ReferenceText: referenceText,
    GradingSystem: "HundredMark",
    Granularity: "Word",
    Dimension: "Comprehensive",
    EnableMiscue: "True",
    EnableProsodyAssessment: "True",
  };
  const assessmentHeader = Buffer.from(JSON.stringify(assessment), "utf8").toString("base64");
  const url = `https://${region}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=en-US&format=detailed`;

  try {
    const r = await fetch(url, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": key,
        "Content-Type": "audio/wav; codecs=audio/pcm; samplerate=16000",
        "Accept": "application/json",
        "Pronunciation-Assessment": assessmentHeader,
      },
      body: new Uint8Array(audio),
    });
    const text = await r.text();
    if (!r.ok) {
      res.status(502).json({ error: `Azure 纠音失败 (${r.status})：${text.slice(0, 180)}` });
      return;
    }
    let raw: any;
    try {
      raw = JSON.parse(text);
    } catch {
      res.status(502).json({ error: "Azure 返回了非 JSON 内容" });
      return;
    }
    if (raw.RecognitionStatus && raw.RecognitionStatus !== "Success") {
      res.status(200).json({
        provider_status: "no_match",
        recognition_status: raw.RecognitionStatus,
        scores: {},
        words: [],
        coach_zh: "我这次听得不够清楚。下一遍靠近麦克风一点，慢一点读完整句。",
      });
      return;
    }
    res.status(200).json(normalizeAzureResult(raw, payload.focus_words || []));
  } catch (e: any) {
    res.status(502).json({ error: `Azure 纠音请求失败：${e.message ?? e}` });
  }
}
