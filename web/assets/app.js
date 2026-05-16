import { gradeCloze } from "/assets/grading.js";
import { SlidePlayer } from "/assets/slide-player.js";

const LESSONS_URL = "/data/lessons.json";
const LESSONS_FALLBACK_URL = "/data/lessons.sample.json";
const TOKEN_KEY = "nce2_student_token";
const SESSION_KEY = (lessonId) => `nce2_session_${lessonId}`;
const READ_ALOUD_DB_NAME = "nce2_read_aloud";
const READ_ALOUD_DB_VERSION = 1;
const READ_ALOUD_STORE = "attempts";

const SCREENS = ["read_aloud", "you_too", "cloze", "cn_to_en", "en_to_cn", "dictation", "summary"];

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function getQuery(name) {
  return new URLSearchParams(location.search).get(name);
}

function getToken() {
  return getQuery("k") || localStorage.getItem(TOKEN_KEY) || "";
}

async function loadLessons() {
  for (const url of [LESSONS_URL, LESSONS_FALLBACK_URL]) {
    const r = await fetch(url, { cache: "no-cache" });
    if (r.ok) return r.json();
  }
  throw new Error("无法加载课程数据");
}

function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}[c]));
}

// ─── 句子拆分（中英） ─────────────────────────────────────
// 启发式切句子：英文按 .!? 切，中文按 。！？！？ 切；引号 + 后置说话标签会合并回一句。
function splitSentencesEN(text) {
  if (!text) return [];
  // 切点：.!? 后跟空格 + 大写字母（或引号 + 大写）
  const parts = text.split(/(?<=[.!?]['"]?)\s+(?=['"]?[A-Z])/);
  // 合并「引号内对话 + 后置说话标签」：
  //   "'I can't hear a word!'" + "I said angrily." → 一句
  const merged = [];
  for (let i = 0; i < parts.length; i++) {
    const cur = parts[i].trim();
    const next = (parts[i + 1] || "").trim();
    const isQuotedExclaim = /^['"].+[!?]['"]$/.test(cur);
    const nextIsDialogTag = /^(I|He|She|They|We|You)\s+(said|asked|replied|shouted|whispered|told|cried|answered|added)/i.test(next);
    if (isQuotedExclaim && nextIsDialogTag) {
      merged.push(cur + " " + next);
      i++;
    } else if (cur) {
      merged.push(cur);
    }
  }
  return merged.filter(Boolean);
}
function splitSentencesZH(text) {
  if (!text) return [];
  // 匹配「非句末标点 + 句末标点 + 可选引号」反复
  const matches = text.match(/[^。！？!?]+[。！？!?]+['"」']*/g);
  return (matches || [text]).map(s => s.trim()).filter(Boolean);
}

// ─── State ─────────────────────────────────────────────────
const state = {
  lesson: null,
  readAloud: null,
  youToo: null,  // 课件级数据（题面 + 选项）
  currentScreen: "read_aloud",
  answers: { read_aloud: { listened: false, attempted_sentence_ids: [], last_attempt_at: "" }, you_too: { selected_label: null, custom_text: "", fills: {} }, cloze: [], cn_to_en: [], en_to_cn: [], dictation: "" },
  results: { read_aloud: null, you_too: null, cloze: null, cn_to_en: null, en_to_cn: null, dictation: null },
  _readAloudLatest: {},
  _readAloudMessages: {},
  _readAloudRecorder: null,
  _readAloudSegmentStopper: null,
  _timeline: null,
};

function ensureStateShape() {
  if (!state.answers.read_aloud) {
    state.answers.read_aloud = { listened: false, attempted_sentence_ids: [], last_attempt_at: "" };
  }
  if (!Array.isArray(state.answers.read_aloud.attempted_sentence_ids)) {
    state.answers.read_aloud.attempted_sentence_ids = [];
  }
  if (!state.answers.you_too) {
    state.answers.you_too = { selected_label: null, custom_text: "", fills: {} };
  }
  if (!state.answers.you_too.fills) state.answers.you_too.fills = {};
  if (!("read_aloud" in state.results)) state.results.read_aloud = null;
}

function persistSession() {
  if (!state.lesson) return;
  try {
    localStorage.setItem(SESSION_KEY(state.lesson.id), JSON.stringify({
      currentScreen: state.currentScreen,
      answers: state.answers,
      results: state.results,
    }));
  } catch {}
}

function restoreSession() {
  if (!state.lesson) return;
  try {
    const raw = localStorage.getItem(SESSION_KEY(state.lesson.id));
    if (!raw) {
      ensureStateShape();
      return;
    }
    const saved = JSON.parse(raw);
    if (saved.answers) Object.assign(state.answers, saved.answers);
    if (saved.results) Object.assign(state.results, saved.results);
    if (saved.currentScreen && SCREENS.includes(saved.currentScreen)) {
      state.currentScreen = saved.currentScreen;
    }
    ensureStateShape();
  } catch {}
}

function clearSession() {
  if (!state.lesson) return;
  localStorage.removeItem(SESSION_KEY(state.lesson.id));
}

// ─── Screen swap ───────────────────────────────────────────
function showScreen(name) {
  state.currentScreen = name;
  $$(".screen").forEach(s => { s.hidden = s.dataset.screen !== name; });
  if (name === "summary") renderSummary();

  // 防作弊：进入做题屏（cloze / 中译英 / 英译中 / 默写）就隐藏课件 stage
  // —— 否则学生会往回翻看原文 / 单词卡照抄答案
  // read_aloud / you_too 不涉及抄写、保留 stage
  // summary 是结束总结、可以展示 stage 作回顾
  const PRACTICE_HIDE = new Set(["cloze", "cn_to_en", "en_to_cn", "dictation"]);
  const stageBlock = document.querySelector(".stage-block");
  if (stageBlock) stageBlock.hidden = PRACTICE_HIDE.has(name);
  // 离开课件 stage 时同时暂停音频、防止继续播
  if (PRACTICE_HIDE.has(name)) {
    const audio = document.querySelector("#lesson-audio");
    if (audio && !audio.paused) audio.pause();
  }

  updateStepper();
  persistSession();
  window.scrollTo({ top: 0, behavior: "instant" });
}

const STEP_LABELS = { read_aloud: "0", you_too: "1", cloze: "2", cn_to_en: "3", en_to_cn: "4", dictation: "5", summary: "📊" };

function isScreenDone(step) {
  if (step === "read_aloud") {
    return !!state.answers.read_aloud?.listened || (state.answers.read_aloud?.attempted_sentence_ids?.length ?? 0) > 0;
  }
  if (step === "summary") return state.currentScreen === "summary" && allDone();
  return !!state.results[step];
}

function updateStepper() {
  $$(".step").forEach(el => {
    const step = el.dataset.step;
    const numEl = el.querySelector(".step-num");
    el.classList.remove("active", "done");
    if (step === state.currentScreen) el.classList.add("active");
    const isDone = isScreenDone(step);
    if (isDone) el.classList.add("done");
    if (numEl) numEl.textContent = isDone ? "✓" : STEP_LABELS[step];

    el.onclick = () => {
      if (step === state.currentScreen) return;
      const order = SCREENS.indexOf(step);
      const cur = SCREENS.indexOf(state.currentScreen);
      if (order <= cur) showScreen(step);
    };
  });
}

function allDone() {
  return ["cloze", "cn_to_en", "en_to_cn", "dictation"].every(k => state.results[k]);
}

function nextScreen() {
  const idx = SCREENS.indexOf(state.currentScreen);
  if (idx === -1 || idx === SCREENS.length - 1) return;
  showScreen(SCREENS[idx + 1]);
}

// ─── You-too: question + options + textarea ───────────────
async function loadYouToo(lessonId) {
  for (const url of [`/data/you_too/lesson_${lessonId}.json`, `/data/you_too/lesson_${lessonId}.sample.json`]) {
    try {
      const r = await fetch(url, { cache: "no-cache" });
      if (r.ok) return await r.json();
    } catch {}
  }
  return null;
}

async function loadReadAloud(lessonId) {
  for (const url of [`/data/read_aloud/lesson_${lessonId}.json`, `/data/read_aloud/lesson_${lessonId}.sample.json`]) {
    try {
      const r = await fetch(url, { cache: "no-cache" });
      if (r.ok) return await r.json();
    } catch {}
  }
  return null;
}

function openReadAloudDb() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("当前浏览器不支持本地录音存储"));
      return;
    }
    const req = indexedDB.open(READ_ALOUD_DB_NAME, READ_ALOUD_DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(READ_ALOUD_STORE)) {
        const store = db.createObjectStore(READ_ALOUD_STORE, { keyPath: "attempt_id" });
        store.createIndex("lesson_sentence", ["lesson_id", "sentence_id"], { unique: false });
        store.createIndex("lesson_id", "lesson_id", { unique: false });
        store.createIndex("created_at", "created_at", { unique: false });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error || new Error("无法打开本地录音库"));
  });
}

async function withReadAloudStore(mode, fn) {
  const db = await openReadAloudDb();
  try {
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(READ_ALOUD_STORE, mode);
      const store = tx.objectStore(READ_ALOUD_STORE);
      let result;
      try {
        result = fn(store, tx);
      } catch (e) {
        reject(e);
        return;
      }
      tx.oncomplete = () => resolve(result);
      tx.onerror = () => reject(tx.error || new Error("本地录音库写入失败"));
      tx.onabort = () => reject(tx.error || new Error("本地录音库操作中断"));
    });
  } finally {
    db.close();
  }
}

async function saveReadAloudAttempt(record) {
  return withReadAloudStore("readwrite", (store) => {
    store.put(record);
  });
}

async function listReadAloudAttempts(lessonId) {
  return withReadAloudStore("readonly", (store) => {
    const req = store.index("lesson_id").getAll(Number(lessonId));
    return new Promise((resolve, reject) => {
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error || new Error("读取本地录音失败"));
    });
  });
}

async function deleteReadAloudLessonAttempts(lessonId) {
  return withReadAloudStore("readwrite", (store) => {
    const idx = store.index("lesson_id");
    const req = idx.openCursor(IDBKeyRange.only(Number(lessonId)));
    req.onsuccess = () => {
      const cursor = req.result;
      if (!cursor) return;
      cursor.delete();
      cursor.continue();
    };
  });
}

function getReadAloudSentences() {
  return Array.isArray(state.readAloud?.sentences) ? state.readAloud.sentences : [];
}

function markReadAloudAttempt(sentenceId, attempt) {
  state._readAloudLatest[sentenceId] = attempt;
  const ids = state.answers.read_aloud.attempted_sentence_ids;
  if (!ids.includes(sentenceId)) ids.push(sentenceId);
  state.answers.read_aloud.last_attempt_at = attempt.created_at || new Date().toISOString();
  state.results.read_aloud = {
    attempted: ids.length,
    total: getReadAloudSentences().length,
    last_sentence_id: sentenceId,
    last_coach_zh: attempt.coach_zh || "",
  };
  persistSession();
  updateStepper();
}

function renderReadAloud() {
  const data = state.readAloud;
  if (!data) return;
  $("#read-aloud-intro").textContent = data.intro_zh || "先听完整课文，再把几句关键句读顺。";
  const wrap = $("#read-aloud-sentences");
  const sentences = getReadAloudSentences();
  if (!sentences.length) {
    wrap.innerHTML = `<p class="muted">这一课还没有配置跟读句子。</p>`;
    return;
  }
  wrap.innerHTML = sentences.map((s, idx) => renderReadAloudCard(s, idx)).join("");
}

function readAloudScore(scores, key) {
  const n = Number(scores?.[key]);
  return Number.isFinite(n) ? Math.round(n) : null;
}

function getReadAloudBand(scores) {
  const accuracy = readAloudScore(scores, "accuracy");
  const completeness = readAloudScore(scores, "completeness");
  const fluency = readAloudScore(scores, "fluency");
  const prosody = readAloudScore(scores, "prosody");
  const pronunciation = readAloudScore(scores, "pronunciation");
  const known = [accuracy, completeness, fluency, prosody, pronunciation].filter(n => typeof n === "number");
  if (!known.length) return "";
  if (
    accuracy !== null && accuracy >= 92 &&
    completeness !== null && completeness >= 92 &&
    (fluency === null || fluency >= 85) &&
    (prosody === null || prosody >= 85)
  ) {
    return `<span class="read-aloud-band excellent">优秀</span>`;
  }
  const main = pronunciation ?? Math.round(known.reduce((sum, n) => sum + n, 0) / known.length);
  const low = Math.min(...known);
  if (main >= 85 && low >= 75) return `<span class="read-aloud-band good">清楚过关</span>`;
  if (main >= 70 && low >= 60) return `<span class="read-aloud-band practice">接近了</span>`;
  return `<span class="read-aloud-band retry">再试一次</span>`;
}

function renderReadAloudScores(scores) {
  const items = [
    ["accuracy", "发音", "单词音准"],
    ["fluency", "流利", "停顿连贯"],
    ["completeness", "完整", "有没有漏词"],
    ["prosody", "语调", "重音语气"],
  ];
  const rows = items.map(([key, label, hint]) => {
    const value = readAloudScore(scores, key);
    if (value === null) return "";
    const cls = value >= 85 ? "strong" : value >= 70 ? "mid" : "low";
    return `
      <div class="read-aloud-score-item ${cls}">
        <span class="read-aloud-score-name">${label}</span>
        <strong class="read-aloud-score-value">${value}</strong>
        <span class="read-aloud-score-hint">${hint}</span>
      </div>
    `;
  }).filter(Boolean).join("");
  return rows ? `<div class="read-aloud-score-grid">${rows}</div>` : "";
}

function displayReadAloudCoach(latest) {
  const coach = latest?.coach_zh || "";
  if (coach && coach !== "这一遍很清楚。再读一次时，试着让节奏更自然、更连贯。") return coach;
  const accuracy = readAloudScore(latest?.scores, "accuracy");
  const completeness = readAloudScore(latest?.scores, "completeness");
  const fluency = readAloudScore(latest?.scores, "fluency");
  const prosody = readAloudScore(latest?.scores, "prosody");
  if (
    accuracy !== null && accuracy >= 92 &&
    completeness !== null && completeness >= 92 &&
    (fluency === null || fluency >= 85) &&
    (prosody === null || prosody >= 85)
  ) {
    return "优秀：发音清楚、句子完整，节奏也比较自然。可以换下一句，或者再挑战一次更像原音。";
  }
  if (accuracy !== null || completeness !== null || fluency !== null || prosody !== null) {
    return "清楚过关：发音和完整度都不错。下一遍如果还想提高，只练一个小目标：把短语之间连得更自然。";
  }
  return coach;
}

function renderReadAloudCard(sentence, idx) {
  const latest = state._readAloudLatest?.[sentence.id];
  const message = state._readAloudMessages?.[sentence.id];
  const isRecording = state._readAloudRecorder?.sentenceId === sentence.id;
  const coach = displayReadAloudCoach(latest);
  const feedback = coach
    ? `<div class="read-aloud-feedback">${escapeHtml(coach)}</div>`
    : (latest ? `<div class="read-aloud-feedback muted">录音已保存在本地。可以提交获取一次轻纠音。</div>` : "");
  const status = message?.text
    ? `<div class="read-aloud-feedback ${message.kind === "error" ? "err" : "info"}">${escapeHtml(message.text)}</div>`
    : "";
  const scoreText = getReadAloudBand(latest?.scores);
  const scoreRows = renderReadAloudScores(latest?.scores);
  const player = latest?.audio_url
    ? `<audio class="read-aloud-user-audio" src="${latest.audio_url}" controls></audio>`
    : "";
  return `
    <article class="read-aloud-card" data-sentence-id="${escapeHtml(sentence.id)}">
      <div class="read-aloud-card-head">
        <span class="read-aloud-index">${idx + 1}</span>
        ${scoreText}
      </div>
      <p class="read-aloud-sentence">${escapeHtml(sentence.text)}</p>
      ${sentence.focus_zh ? `<p class="read-aloud-focus">${escapeHtml(sentence.focus_zh)}</p>` : ""}
      <div class="read-aloud-actions">
        <button type="button" class="secondary-btn" data-action="play-read-model" data-sentence-id="${escapeHtml(sentence.id)}">▶ 原音</button>
        <button type="button" class="secondary-btn ${isRecording ? "recording" : ""}" data-action="toggle-read-recording" data-sentence-id="${escapeHtml(sentence.id)}">${isRecording ? "■ 停止" : "● 录音"}</button>
        <button type="button" class="secondary-btn" data-action="submit-read-aloud" data-sentence-id="${escapeHtml(sentence.id)}" ${latest?.audio_blob ? "" : "disabled"}>获取反馈</button>
      </div>
      ${player}
      ${scoreRows}
      ${status}
      ${feedback}
    </article>
  `;
}

function setReadAloudMessage(sentenceId, text, kind = "info") {
  if (!sentenceId) return;
  if (!state._readAloudMessages) state._readAloudMessages = {};
  if (text) state._readAloudMessages[sentenceId] = { text, kind };
  else delete state._readAloudMessages[sentenceId];
  renderReadAloud();
}

function microphoneErrorMessage(e) {
  const name = String(e?.name || "");
  const msg = String(e?.message || "");
  if (name === "NotAllowedError" || /permission denied|not allowed|denied/i.test(msg)) {
    return "麦克风权限被拒绝了。请在浏览器或系统设置里允许这个页面使用麦克风；如果 in-app browser 没有弹权限，可以用 Chrome 打开同一地址再试。";
  }
  if (name === "NotFoundError" || /not found|no media/i.test(msg)) {
    return "没有找到可用麦克风。请确认电脑麦克风可用，或换一个浏览器再试。";
  }
  if (location.protocol !== "https:" && location.hostname !== "127.0.0.1" && location.hostname !== "localhost") {
    return "浏览器要求在 HTTPS 或 localhost 下使用麦克风。请用本地地址或 HTTPS 页面打开。";
  }
  return msg || "无法启动麦克风，请检查浏览器权限后再试。";
}

async function hydrateReadAloudAttempts() {
  if (!state.lesson || !state.readAloud) return;
  try {
    const attempts = await listReadAloudAttempts(state.lesson.id);
    const bySentence = {};
    for (const a of attempts) {
      if (!a?.sentence_id) continue;
      const prev = bySentence[a.sentence_id];
      if (!prev || String(a.created_at || "") > String(prev.created_at || "")) {
        if (a.audio_blob instanceof Blob) a.audio_url = URL.createObjectURL(a.audio_blob);
        bySentence[a.sentence_id] = a;
      }
    }
    state._readAloudLatest = bySentence;
    for (const attempt of Object.values(bySentence)) {
      const id = attempt.sentence_id;
      if (!state.answers.read_aloud.attempted_sentence_ids.includes(id)) {
        state.answers.read_aloud.attempted_sentence_ids.push(id);
      }
    }
    renderReadAloud();
    updateStepper();
  } catch (e) {
    console.warn("读取本地跟读记录失败", e);
  }
}

function clearAudioSegmentStopper() {
  if (typeof state._readAloudSegmentStopper === "function") {
    state._readAloudSegmentStopper();
    state._readAloudSegmentStopper = null;
  }
}

function playAudioSegment(start, end) {
  const audio = $("#lesson-audio");
  if (!audio || !audio.src) {
    showError("这一课的音频还没有加载");
    return;
  }
  clearAudioSegmentStopper();
  if (Number.isFinite(start)) audio.currentTime = Math.max(0, Number(start));
  audio.play().catch(() => showError("浏览器暂时不能播放音频，请再点一次"));
  if (Number.isFinite(end) && Number(end) > Number(start)) {
    const stopAtEnd = () => {
      if (audio.currentTime >= Number(end)) {
        audio.pause();
        clearAudioSegmentStopper();
      }
    };
    audio.addEventListener("timeupdate", stopAtEnd);
    state._readAloudSegmentStopper = () => audio.removeEventListener("timeupdate", stopAtEnd);
  }
}

function playFullAudio() {
  const audio = $("#lesson-audio");
  if (!audio || !audio.src) {
    showError("这一课的音频还没有加载");
    return;
  }
  const passageLines = Array.isArray(state._timeline?.lines)
    ? state._timeline.lines.filter(line => line.scene === "passage_normal" && Number.isFinite(line.start) && Number.isFinite(line.end))
    : [];
  if (passageLines.length) {
    playAudioSegment(passageLines[0].start, passageLines[passageLines.length - 1].end);
  } else {
    clearAudioSegmentStopper();
    audio.currentTime = 0;
    audio.play().catch(() => showError("浏览器暂时不能播放音频，请再点一次"));
  }
  state.answers.read_aloud.listened = true;
  persistSession();
  updateStepper();
}

function playReadModel(sentenceId) {
  const sentence = getReadAloudSentences().find(s => s.id === sentenceId);
  if (!sentence) return;
  playAudioSegment(Number(sentence.start), Number(sentence.end));
}

async function createWavRecorder() {
  if (!navigator.mediaDevices?.getUserMedia) {
    throw new Error("当前浏览器不支持麦克风录音");
  }
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: {
      channelCount: 1,
      echoCancellation: true,
      noiseSuppression: true,
      autoGainControl: true,
    },
  });
  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextCtor) throw new Error("当前浏览器不支持音频录制");
  const ctx = new AudioContextCtor();
  const source = ctx.createMediaStreamSource(stream);
  const processor = ctx.createScriptProcessor(4096, 1, 1);
  const silent = ctx.createGain();
  silent.gain.value = 0;
  const chunks = [];
  processor.onaudioprocess = (ev) => {
    chunks.push(new Float32Array(ev.inputBuffer.getChannelData(0)));
  };
  source.connect(processor);
  processor.connect(silent);
  silent.connect(ctx.destination);
  const startedAt = performance.now();
  return {
    async stop() {
      processor.disconnect();
      source.disconnect();
      silent.disconnect();
      stream.getTracks().forEach(track => track.stop());
      const durationMs = Math.round(performance.now() - startedAt);
      const merged = mergeFloat32Chunks(chunks);
      const downsampled = downsampleFloat32(merged, ctx.sampleRate, 16000);
      const wav = encodeWav16(downsampled, 16000);
      await ctx.close().catch(() => {});
      return { blob: new Blob([wav], { type: "audio/wav" }), durationMs };
    },
  };
}

function mergeFloat32Chunks(chunks) {
  const total = chunks.reduce((sum, c) => sum + c.length, 0);
  const merged = new Float32Array(total);
  let offset = 0;
  for (const c of chunks) {
    merged.set(c, offset);
    offset += c.length;
  }
  return merged;
}

function downsampleFloat32(buffer, inputRate, outputRate) {
  if (!inputRate || inputRate === outputRate) return buffer;
  const ratio = inputRate / outputRate;
  const newLength = Math.round(buffer.length / ratio);
  const result = new Float32Array(newLength);
  for (let i = 0; i < newLength; i++) {
    const start = Math.floor(i * ratio);
    const end = Math.min(Math.floor((i + 1) * ratio), buffer.length);
    let sum = 0;
    for (let j = start; j < end; j++) sum += buffer[j];
    result[i] = sum / Math.max(1, end - start);
  }
  return result;
}

function encodeWav16(samples, sampleRate) {
  const bytesPerSample = 2;
  const blockAlign = bytesPerSample;
  const buffer = new ArrayBuffer(44 + samples.length * bytesPerSample);
  const view = new DataView(buffer);
  writeAscii(view, 0, "RIFF");
  view.setUint32(4, 36 + samples.length * bytesPerSample, true);
  writeAscii(view, 8, "WAVE");
  writeAscii(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, 16, true);
  writeAscii(view, 36, "data");
  view.setUint32(40, samples.length * bytesPerSample, true);
  let offset = 44;
  for (const sample of samples) {
    const s = Math.max(-1, Math.min(1, sample));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    offset += 2;
  }
  return buffer;
}

function writeAscii(view, offset, str) {
  for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
}

async function toggleReadRecording(sentenceId) {
  if (!sentenceId) return;
  const current = state._readAloudRecorder;
  if (current && current.sentenceId === sentenceId) {
    await stopReadRecording(sentenceId);
    return;
  }
  if (current) await stopReadRecording(current.sentenceId);
  setReadAloudMessage(sentenceId, "正在请求麦克风权限...", "info");
  try {
    state._readAloudRecorder = { sentenceId, recorder: await createWavRecorder() };
    setReadAloudMessage(sentenceId, "正在录音。读完这一句后，再点一次停止。", "info");
    renderReadAloud();
  } catch (e) {
    const msg = microphoneErrorMessage(e);
    setReadAloudMessage(sentenceId, msg, "error");
    showError(msg);
  }
}

async function stopReadRecording(sentenceId) {
  const current = state._readAloudRecorder;
  if (!current || current.sentenceId !== sentenceId) return;
  state._readAloudRecorder = null;
  try {
    const { blob, durationMs } = await current.recorder.stop();
    const sentence = getReadAloudSentences().find(s => s.id === sentenceId);
    const attempt = {
      attempt_id: `${state.lesson.id}_${sentenceId}_${Date.now()}`,
      lesson_id: state.lesson.id,
      sentence_id: sentenceId,
      created_at: new Date().toISOString(),
      duration_ms: durationMs,
      reference_text: sentence?.text || "",
      focus_words: sentence?.focus_words || [],
      scores: null,
      coach_zh: "",
      audio_blob: blob,
      audio_url: URL.createObjectURL(blob),
    };
    await saveReadAloudAttempt(attempt).catch(e => console.warn("本地保存跟读录音失败", e));
    setReadAloudMessage(sentenceId, "", "info");
    markReadAloudAttempt(sentenceId, attempt);
  } catch (e) {
    showError(e.message || "录音保存失败");
  } finally {
    renderReadAloud();
  }
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || "").split(",")[1] || "");
    reader.onerror = () => reject(reader.error || new Error("无法读取录音"));
    reader.readAsDataURL(blob);
  });
}

async function submitReadAloud(sentenceId) {
  const sentence = getReadAloudSentences().find(s => s.id === sentenceId);
  const latest = state._readAloudLatest?.[sentenceId];
  if (!sentence || !latest?.audio_blob) {
    showError("请先录一句，再获取反馈");
    return;
  }
  const card = document.querySelector(`.read-aloud-card[data-sentence-id="${CSS.escape(sentenceId)}"]`);
  const btn = card?.querySelector('[data-action="submit-read-aloud"]');
  if (btn) {
    btn.disabled = true;
    btn.textContent = "分析中…";
  }
  try {
    const audioBase64 = await blobToBase64(latest.audio_blob);
    const result = await callPronunciation({
      sentence_id: sentenceId,
      reference_text: sentence.text,
      focus_words: sentence.focus_words || [],
      mime_type: latest.audio_blob.type || "audio/wav",
      audio_base64: audioBase64,
    });
    const updated = {
      ...latest,
      scores: result.scores || null,
      words: result.words || [],
      coach_zh: result.coach_zh || "清楚过关：这句已经录下来了。下一遍可以只练一个小目标：把短语之间连得更自然。",
      provider_status: result.provider_status || "ok",
    };
    await saveReadAloudAttempt(updated).catch(e => console.warn("本地保存跟读反馈失败", e));
    markReadAloudAttempt(sentenceId, updated);
  } catch (e) {
    const updated = {
      ...latest,
      coach_zh: `录音已保存在本地。云端纠音暂时不可用：${e.message}`,
      provider_status: "error",
    };
    await saveReadAloudAttempt(updated).catch(() => {});
    markReadAloudAttempt(sentenceId, updated);
  } finally {
    renderReadAloud();
  }
}

async function callPronunciation(extra) {
  const payload = {
    lesson_id: state.lesson.id,
    token: getToken(),
    ...extra,
  };
  const r = await fetch("/api/pronunciation", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!r.ok) {
    let msg = `纠音失败 (${r.status})`;
    try { const j = await r.json(); if (j.error) msg = j.error; } catch {}
    throw new Error(msg);
  }
  return r.json();
}

function renderYouTooSegmentsHtml(text) {
  // 沿用 [EN]…[/EN] 标记，渲染中英混合
  return escapeHtml(text).replace(/\[EN\](.+?)\[\/EN\]/g, '<span class="seg-en">$1</span>');
}

function renderYouToo() {
  const yt = state.youToo;
  if (!yt) return;
  $("#you-too-question").textContent = yt.question;
  if (yt.example_answer) {
    const ex = $("#you-too-example");
    ex.innerHTML = `💡 ${renderYouTooSegmentsHtml(yt.example_answer)}`;
    ex.hidden = false;
  }

  // Word bank 渲染（chip 形式）
  renderWordBank(yt.word_bank);

  const optsWrap = $("#you-too-options");
  const taWrap = $("#you-too-textarea-wrap");
  const ta = $("#you-too-input");

  // state.answers.you_too 数据形态升级（兼容旧格式）
  if (!state.answers.you_too.fills) state.answers.you_too.fills = {};

  // 新模式 all_fills：A/B/C 都必填、一起交。L1-L10 用这个。
  if (yt.mode === "all_fills") {
    optsWrap.hidden = false;
    taWrap.hidden = true;
    optsWrap.innerHTML = yt.options.map(opt => renderAllFillsOption(opt)).join("");
    optsWrap.addEventListener("input", onFillInput);
    // 恢复已填
    for (const [label, val] of Object.entries(state.answers.you_too.fills || {})) {
      const inp = optsWrap.querySelector(`.fill-input[data-fill-for="${label}"]`);
      if (inp) inp.value = val;
    }
  } else if (Array.isArray(yt.options) && yt.options.length) {
    // 旧模式 radio + 1 填空（L11+ 之后可能继续用、含 D 自由写）
    optsWrap.hidden = false;
    optsWrap.innerHTML = yt.options.map(opt => renderOption(opt)).join("");
    optsWrap.addEventListener("change", onOptionChange);
    optsWrap.addEventListener("input", onFillInput);
    restoreSelectionAndFills(yt);
    ta.value = state.answers.you_too.custom_text || "";
  } else {
    optsWrap.hidden = true;
    taWrap.hidden = false;
    ta.value = state.answers.you_too.custom_text || "";
  }

  if (state.results.you_too) {
    paintYouTooFeedback(state.results.you_too);
    enableNextOn("you_too");
  }
}

// all_fills 模式的选项渲染：3 个并列、都必填、无 radio
function renderAllFillsOption(opt) {
  const templateHtml = renderAllFillsTemplate(opt.english_template, opt.label);
  return `
    <div class="you-too-fill-card">
      <div class="you-too-fill-head">
        <span class="you-too-fill-label">${escapeHtml(opt.label)}</span>
        <span class="you-too-fill-scenario">${escapeHtml(opt.scenario_zh)}</span>
      </div>
      <div class="you-too-fill-template">${templateHtml}</div>
    </div>
  `;
}

function renderAllFillsTemplate(template, label) {
  const safe = escapeHtml(template);
  return safe.replace(/_{2,}/g, () =>
    `<input type="text" class="fill-input" data-fill-for="${escapeHtml(label)}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="从 word bank 选一个短语…">`
  );
}

function renderWordBank(bank) {
  const wbEl = $("#you-too-word-bank");
  if (!wbEl) return;
  if (!Array.isArray(bank) || !bank.length) {
    wbEl.hidden = true;
    return;
  }
  wbEl.hidden = false;
  wbEl.innerHTML = `
    <div class="word-bank-label">📚 今天可以用的短语 Word bank</div>
    <div class="word-bank-chips">
      ${bank.map(p => `<span class="word-bank-chip">${escapeHtml(p)}</span>`).join("")}
    </div>
  `;
}

function renderOption(opt) {
  const isLast = opt.english_template === null;
  if (isLast) {
    // 「自己写」选项 — 不渲染填空模板，textarea 在外面处理
    return `
      <label class="you-too-option">
        <input type="radio" name="you_too_choice" value="${escapeHtml(opt.label)}">
        <div class="you-too-option-body">
          <div class="you-too-option-label">${escapeHtml(opt.label)}</div>
          <div class="you-too-option-scenario">${escapeHtml(opt.scenario_zh)}</div>
        </div>
      </label>
    `;
  }
  // 渲染 english_template、把 ___ 换成可填的 input
  const templateHtml = renderTemplateWithInput(opt.english_template, opt.label);
  return `
    <label class="you-too-option">
      <input type="radio" name="you_too_choice" value="${escapeHtml(opt.label)}">
      <div class="you-too-option-body">
        <div class="you-too-option-label">${escapeHtml(opt.label)}</div>
        <div class="you-too-option-scenario">${escapeHtml(opt.scenario_zh)}</div>
        <div class="you-too-option-template">${templateHtml}</div>
      </div>
    </label>
  `;
}

function renderTemplateWithInput(template, label) {
  // 把 ___ 替换成 inline input（一个 option 一个 input，name 包含 label）
  const safe = escapeHtml(template);
  return safe.replace(/_{2,}/g, () =>
    `<input type="text" class="fill-input" data-fill-for="${escapeHtml(label)}" autocomplete="off" autocapitalize="off" spellcheck="false" disabled placeholder="…">`
  );
}

function onOptionChange(ev) {
  const yt = state.youToo;
  const sel = ev.target;
  if (!(sel instanceof HTMLInputElement) || sel.name !== "you_too_choice") return;
  state.answers.you_too.selected_label = sel.value;
  const lastOpt = yt.options[yt.options.length - 1];
  const isWriteOwn = sel.value === lastOpt.label && lastOpt.english_template === null;
  $("#you-too-textarea-wrap").hidden = !isWriteOwn;

  // 启用所选选项的 fill input、禁用其他
  document.querySelectorAll(".fill-input").forEach(el => {
    const enabled = el.dataset.fillFor === sel.value;
    el.disabled = !enabled;
    if (enabled) el.focus();
  });

  invalidateYouTooFeedback();
  persistSession();
}

function onFillInput(ev) {
  const t = ev.target;
  if (!(t instanceof HTMLInputElement) || !t.classList.contains("fill-input")) return;
  state.answers.you_too.fills[t.dataset.fillFor] = t.value;
  invalidateYouTooFeedback();
  persistSession();
}

function restoreSelectionAndFills(yt) {
  const sel = state.answers.you_too.selected_label;
  if (sel) {
    const radio = document.querySelector(`input[name="you_too_choice"][value="${sel}"]`);
    if (radio) {
      radio.checked = true;
      const lastOpt = yt.options[yt.options.length - 1];
      if (sel === lastOpt.label && lastOpt.english_template === null) {
        $("#you-too-textarea-wrap").hidden = false;
      }
      // 启用所选 fill 输入
      document.querySelectorAll(".fill-input").forEach(el => {
        el.disabled = el.dataset.fillFor !== sel;
      });
    }
  }
  // 恢复已填的内容
  for (const [label, val] of Object.entries(state.answers.you_too.fills || {})) {
    const inp = document.querySelector(`.fill-input[data-fill-for="${label}"]`);
    if (inp) inp.value = val;
  }
}

function paintYouTooFeedback(result) {
  const fb = $("#you-too-feedback");
  if (result.error && !result.per_fill?.length) {
    fb.innerHTML = `<p class="ai-error">⚠️ ${escapeHtml(result.error)}</p>`;
  } else if (Array.isArray(result.per_fill) && result.per_fill.length) {
    // 新模式：逐 fill 反馈
    const cards = result.per_fill.map(p => `
      <div class="you-too-fill-feedback ${p.fill_correct ? 'ok' : 'err'}">
        <div class="you-too-fill-fb-head">
          <span class="you-too-fill-label">${escapeHtml(p.label)}</span>
          <span class="you-too-fill-mark">${p.fill_correct ? '✓ 填得对' : '✗ 再看看'}</span>
        </div>
        <p class="you-too-comment">${escapeHtml(p.comment ?? "")}</p>
      </div>
    `).join("");
    fb.innerHTML = `${cards}${result.error ? `<p class="ai-error">⚠️ ${escapeHtml(result.error)}</p>` : ""}`;
  } else {
    fb.innerHTML = `<p class="you-too-comment">${escapeHtml(result.comment ?? "")}</p>`;
  }
  fb.hidden = false;
}

// 选项 / 文字一改 → 清掉旧反馈（保持答与评一致）
function invalidateYouTooFeedback() {
  if (!state.results.you_too) return;
  state.results.you_too = null;
  const fb = $("#you-too-feedback");
  if (fb) { fb.hidden = true; fb.innerHTML = ""; }
  const sec = document.querySelector('.screen[data-screen="you_too"]');
  if (sec) {
    const submit = sec.querySelector(".submit-btn");
    const next = sec.querySelector(".next-btn");
    if (submit) { submit.textContent = "📤 提交本题"; submit.disabled = false; }
    if (next) next.hidden = true;
  }
  updateStepper();
}

async function submitYouToo() {
  const yt = state.youToo;
  if (!yt) {
    showError("「生活场景」数据未加载");
    return;
  }
  let payload;

  // 新模式：3 个 fill 都填、一起交
  if (yt.mode === "all_fills") {
    const fills = [];
    const missing = [];
    for (const opt of yt.options) {
      const v = (state.answers.you_too.fills?.[opt.label] ?? "").trim();
      if (!v) { missing.push(opt.label); continue; }
      fills.push({
        label: opt.label,
        english_template: opt.english_template,
        expected_phrase: opt.expected_phrase,
        filled_value: v,
        scenario_zh: opt.scenario_zh,
      });
    }
    if (missing.length) {
      showError(`这 ${missing.length} 个空还没填：${missing.join(" / ")}`);
      return;
    }
    payload = {
      sub_kind: "all_fills",
      word_bank: yt.word_bank,
      fills,
    };
  } else {
    // 旧模式：radio 选一个、单 fill 或 free
    const customText = $("#you-too-input").value;
    state.answers.you_too.custom_text = customText;
    const chosenLabel = state.answers.you_too.selected_label;
    if (!chosenLabel) { showError("请先选一个选项"); return; }
    const opt = yt.options.find(o => o.label === chosenLabel);
    if (opt && opt.english_template === null) {
      if (!customText.trim()) { showError("请在下面文本框里写一整句"); return; }
      payload = { sub_kind: "free", chosen_label: chosenLabel, custom_text: customText, word_bank: yt.word_bank };
    } else if (opt) {
      const fill = (state.answers.you_too.fills?.[chosenLabel] ?? "").trim();
      if (!fill) { showError("请把空格里填上 word bank 里的英文短语"); return; }
      payload = {
        sub_kind: "fill", chosen_label: chosenLabel,
        english_template: opt.english_template, expected_phrase: opt.expected_phrase,
        filled_value: fill, scenario_zh: opt.scenario_zh, word_bank: yt.word_bank,
      };
    }
  }

  const btn = currentSubmitBtn();
  btn.disabled = true;
  btn.textContent = "AI 在读你写的内容…";

  try {
    const result = await callGrade("you_too", {
      question: yt.question,
      ...payload,
    });
    state.results.you_too = result;
    paintYouTooFeedback(result);
    enableNextOn("you_too");
    updateStepper();
    persistSession();
  } catch (e) {
    showError(e.message);
    btn.disabled = false;
    btn.textContent = "📤 提交本题";
    return;
  }

  btn.textContent = "📤 重新提交";
  btn.disabled = false;
}

// ─── Stage / slide-player setup ───────────────────────────
async function loadTimeline(lessonId) {
  const candidates = [
    `/audio/lesson_${lessonId}.timeline.json`,
    `/data/lesson_${lessonId}.timeline.sample.json`,
  ];
  for (const url of candidates) {
    try {
      const r = await fetch(url, { cache: "no-cache" });
      if (r.ok) return await r.json();
    } catch {}
  }
  return null;
}

async function setupStage(lesson) {
  const stageEl = $("#stage");
  const audio = $("#lesson-audio");
  const downloadLink = $("#audio-download");
  const stageBlock = $(".stage-block");
  const sandbox = $("#stage-sandbox");
  const audioBar = $(".audio-bar");
  const playPauseBtn = $("#audio-play-pause");
  const scrubber = $("#audio-scrubber");
  const timeCur = $("#audio-time-current");
  const timeTotal = $("#audio-time-total");

  const timeline = await loadTimeline(lesson.id);
  if (!timeline) {
    // 无 timeline → 不显示动画课件，stage-block 保持隐藏
    return;
  }
  state._timeline = timeline;

  // 反作弊：如果当前已在练习屏、就让 showScreen 控制 stage、不强制显示
  const PRACTICE_HIDE = new Set(["cloze", "cn_to_en", "en_to_cn", "dictation"]);
  stageBlock.hidden = PRACTICE_HIDE.has(state.currentScreen);

  // 配置音频
  if (lesson.audio_path) {
    audio.src = lesson.audio_path;
    downloadLink.href = lesson.audio_path;
    audio.addEventListener("error", () => {
      audioBar.hidden = true;
      sandbox.hidden = false;
    }, { once: true });
  } else {
    audioBar.hidden = true;
    sandbox.hidden = false;
  }

  const player = new SlidePlayer({
    stageEl,
    audioEl: audio,
    timeline,
    lesson,
  });
  // 暴露给自定义控件
  state._slidePlayer = player;

  // ─── 自定义播放器控件 ─────────────────────────
  const fmtTime = (s) => {
    if (!isFinite(s) || s < 0) s = 0;
    const m = Math.floor(s / 60);
    const ss = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${ss}`;
  };
  const updateProgressUI = () => {
    const dur = audio.duration || 0;
    const cur = audio.currentTime || 0;
    const pct = dur ? (cur / dur) * 100 : 0;
    scrubber.style.setProperty("--progress", `${pct}%`);
    if (!scrubber.matches(":active")) scrubber.value = String(pct);
    timeCur.textContent = fmtTime(cur);
    timeTotal.textContent = fmtTime(dur);
  };

  audio.addEventListener("loadedmetadata", updateProgressUI);
  audio.addEventListener("timeupdate", updateProgressUI);
  audio.addEventListener("play", () => { playPauseBtn.textContent = "⏸"; });
  audio.addEventListener("pause", () => { playPauseBtn.textContent = "▶"; });
  audio.addEventListener("ended", () => { playPauseBtn.textContent = "▶"; });

  playPauseBtn.addEventListener("click", () => {
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
  });

  // ⭐ 拖动 scrubber 时实时更新幻灯片预览
  scrubber.addEventListener("input", () => {
    const pct = Number(scrubber.value);
    const dur = audio.duration || 0;
    const newTime = (pct / 100) * dur;
    audio.currentTime = newTime;
    timeCur.textContent = fmtTime(newTime);
    scrubber.style.setProperty("--progress", `${pct}%`);
    // 同步 slide-player —— 不等 audio seeking 事件
    if (player && typeof player._tick === "function") player._tick();
  });

  // 沙箱手动翻页
  $("#sandbox-prev").addEventListener("click", () => {
    player.prev();
    updateSandboxStatus(player, timeline);
  });
  $("#sandbox-next").addEventListener("click", () => {
    player.next();
    updateSandboxStatus(player, timeline);
  });
  updateSandboxStatus(player, timeline);
}

function updateSandboxStatus(player, timeline) {
  const status = document.getElementById("sandbox-status");
  if (status) {
    const cur = player.currentIdx ?? 0;
    const line = timeline.lines[cur];
    status.textContent = `${cur + 1} / ${timeline.lines.length} · ${line?.scene ?? "-"}`;
  }
}

// ─── Lesson rendering ─────────────────────────────────────
function renderCloze(template, blanks) {
  // 统一宽度（不再按答案长度缩放）—— 不让学生通过框宽猜词长
  const html = template.replace(/\{\{(\d+)\}\}/g, (_, idx) => {
    const i = Number(idx);
    return `<input class="cloze-blank" type="text" data-blank="${i}" autocomplete="off" autocapitalize="off" spellcheck="false">`;
  });
  $("#cloze-body").innerHTML = html;
  // 恢复已存的 answers
  const inputs = $$(".cloze-blank");
  inputs.forEach((el, i) => {
    el.value = state.answers.cloze[i] ?? "";
  });
}

function renderLesson(lesson) {
  document.title = `Lesson ${lesson.id} — ${lesson.title} | NCE2`;
  $("#lesson-title").textContent = `Lesson ${lesson.id} — ${lesson.title}`;

  setupStage(lesson);

  renderCloze(lesson.cloze.rendered_html, lesson.cloze.blanks);

  // 中译英 / 英译中：优先用预切的 chunks（按语义切的 3-5 句一段）；没有 chunks 则按句切
  const zhSentences = (Array.isArray(lesson.chunks?.zh) && lesson.chunks.zh.length)
    ? lesson.chunks.zh
    : splitSentencesZH(lesson.chinese);
  const enSentences = (Array.isArray(lesson.chunks?.en) && lesson.chunks.en.length)
    ? lesson.chunks.en
    : splitSentencesEN(lesson.english);
  state.lesson.zhSentences = zhSentences;
  state.lesson.enSentences = enSentences;
  // 兼容旧的字符串答案 → 数组
  if (typeof state.answers.cn_to_en === "string") state.answers.cn_to_en = [];
  if (typeof state.answers.en_to_cn === "string") state.answers.en_to_cn = [];
  renderTranslationRows("cn_to_en", zhSentences, enSentences);
  renderTranslationRows("en_to_cn", enSentences, zhSentences);

  $("#dictation-anchor").textContent = `Lesson ${lesson.id} — ${lesson.title}\n${lesson.first_sentence_prefix} …`;

  // 恢复已存的 textarea 内容（默写）
  $("#dictation-input").value = state.answers.dictation;

  // 恢复已存的反馈
  if (state.results.cloze) {
    paintClozeFeedback(state.results.cloze);
    enableNextOn("cloze");
  }
  if (state.results.cn_to_en) {
    paintTranslation("cn_to_en", state.results.cn_to_en);
    enableNextOn("cn_to_en");
  }
  if (state.results.en_to_cn) {
    paintTranslation("en_to_cn", state.results.en_to_cn);
    enableNextOn("en_to_cn");
  }
  if (state.results.dictation) {
    paintDictation(state.results.dictation);
    enableNextOn("dictation");
  }

  $("#stepper").hidden = false;
  showScreen(state.currentScreen);
}

// ─── Submit handlers ──────────────────────────────────────
function paintClozeFeedback(result) {
  const inputs = $$(".cloze-blank");
  result.details.forEach((d, i) => {
    const el = inputs[i];
    if (!el) return;
    el.classList.remove("ok", "err");
    el.classList.add(d.correct ? "ok" : "err");
    if (!d.correct) {
      const hint = d.hint_zh ? `\n${d.hint_zh}` : "";
      el.title = `应为：${d.expected}${hint}`;
    }
    el.disabled = true;
  });
  const fb = $("#cloze-feedback");
  const wrong = result.details.filter(d => !d.correct);
  fb.innerHTML = `
    <div>完形：<span class="${result.score === result.total ? "right" : "wrong"}">${result.score} / ${result.total}</span></div>
    ${wrong.length ? `<ul class="cloze-wrong-list">${wrong.map(d => `
      <li>
        <span class="cloze-wrong-num">第 ${d.index + 1} 空</span>：
        你写 <code class="cloze-wrong-sub">${escapeHtml(d.submitted || "(空)")}</code>
        、应是 <code class="cloze-wrong-exp">${escapeHtml(d.expected)}</code>
        ${d.hint_zh ? `<div class="cloze-hint">💡 ${escapeHtml(d.hint_zh)}</div>` : ""}
      </li>
    `).join("")}</ul>` : "<p class='right'>满分！🎉</p>"}
  `;
  fb.hidden = false;
}

function submitCloze() {
  const inputs = $$(".cloze-blank");
  state.answers.cloze = inputs.map(el => el.value);
  const result = gradeCloze(state.answers.cloze, state.lesson.cloze.blanks);
  state.results.cloze = result;
  paintClozeFeedback(result);
  enableNextOn("cloze");
  updateStepper();
  persistSession();
}

// ─── 渲染逐句翻译行 ───────────────────────────────────────
function renderTranslationRows(direction, sourceSents, referenceSents) {
  const wrapId = direction === "cn_to_en" ? "#cn-to-en-rows" : "#en-to-cn-rows";
  const wrap = $(wrapId);
  if (!wrap) return;
  const targetLang = direction === "cn_to_en" ? "en" : "zh";
  const placeholder = targetLang === "en" ? "在这里写英文…" : "在这里写中文…";
  const ans = state.answers[direction];

  wrap.innerHTML = sourceSents.map((src, i) => `
    <div class="trans-row" data-row-idx="${i}">
      <div class="trans-row-num">${i + 1}</div>
      <div class="trans-row-body">
        <div class="trans-source">${escapeHtml(src)}</div>
        <textarea class="trans-input" data-direction="${direction}" data-row-idx="${i}" rows="2" placeholder="${placeholder}"></textarea>
        <div class="trans-row-feedback" data-direction="${direction}" data-row-idx="${i}" hidden></div>
      </div>
    </div>
  `).join("");

  // 恢复已填的内容
  wrap.querySelectorAll(".trans-input").forEach((el, i) => {
    el.value = ans[i] || "";
  });
  // input 监听
  wrap.addEventListener("input", onTransInput);
}

function onTransInput(ev) {
  const t = ev.target;
  if (!(t instanceof HTMLTextAreaElement) || !t.classList.contains("trans-input")) return;
  const dir = t.dataset.direction;
  const idx = Number(t.dataset.rowIdx);
  if (!Array.isArray(state.answers[dir])) state.answers[dir] = [];
  state.answers[dir][idx] = t.value;
  // 改了就清旧反馈
  if (state.results[dir]) {
    state.results[dir] = null;
    document.querySelectorAll(`.trans-row-feedback[data-direction="${dir}"]`).forEach(el => {
      el.hidden = true;
      el.innerHTML = "";
    });
    $(`.overall-feedback[data-target="${dir}"]`).hidden = true;
    const sec = document.querySelector(`.screen[data-screen="${dir}"]`);
    if (sec) {
      const submit = sec.querySelector(".submit-btn");
      const next = sec.querySelector(".next-btn");
      if (submit) { submit.textContent = "📤 提交并点评"; submit.disabled = false; }
      if (next) next.hidden = true;
    }
    updateStepper();
  }
  persistSession();
}

function paintTranslation(direction, result) {
  // 不锁输入——学生看到反馈后可以随时改、改了 onTransInput 自动清旧反馈
  const overall = $(`.overall-feedback[data-target="${direction}"]`);

  if (result.error) {
    overall.innerHTML = `<p class="ai-error">⚠️ ${escapeHtml(result.error)}</p>`;
    overall.hidden = false;
    return;
  }

  // 逐句反馈
  const perSent = Array.isArray(result.per_sentence) ? result.per_sentence : [];
  perSent.forEach(item => {
    const fb = document.querySelector(`.trans-row-feedback[data-direction="${direction}"][data-row-idx="${item.index}"]`);
    if (!fb) return;
    const score = typeof item.score === "number" ? item.score : null;
    const fixesHtml = (item.fixes ?? []).length
      ? `<ul class="fixes">${item.fixes.map(f => `<li><del>${escapeHtml(f.original ?? "")}</del> → <ins>${escapeHtml(f.suggested ?? "")}</ins><br><small>${escapeHtml(f.reason_zh ?? "")}</small></li>`).join("")}</ul>`
      : "";
    fb.innerHTML = `
      <div class="row-score-line">这句 <span class="score">${score !== null ? `${score} / 10` : "—"}</span></div>
      <p class="row-comment">${escapeHtml(item.comment ?? "")}</p>
      ${fixesHtml}
    `;
    fb.hidden = false;
  });

  // 整体回顾
  const o_score = typeof result.overall_score === "number" ? result.overall_score : null;
  const o_summary = result.overall_summary ?? "";
  overall.innerHTML = `
    <h3>📊 整体回顾 ${o_score !== null ? `<span class="score">${o_score} / 10</span>` : ""}</h3>
    <p class="comment">${escapeHtml(o_summary)}</p>
  `;
  overall.hidden = false;
}

async function submitTranslation(direction) {
  const sourceSents = direction === "cn_to_en" ? state.lesson.zhSentences : state.lesson.enSentences;
  const refSents    = direction === "cn_to_en" ? state.lesson.enSentences : state.lesson.zhSentences;
  const ans = state.answers[direction] || [];

  // 收集 sentences 数组（每句 source + reference + answer）
  const sentences = sourceSents.map((src, i) => ({
    index: i,
    source: src,
    reference: refSents[i] || "",
    answer: (ans[i] || "").trim(),
  }));

  // 至少有一句填了再提交
  if (!sentences.some(s => s.answer)) {
    showError("请至少翻译一句再提交");
    return;
  }

  const btn = currentSubmitBtn();
  btn.disabled = true;
  btn.textContent = "AI 逐句点评中…(10-40s)";

  try {
    const result = await callGrade("translation", { direction, sentences });
    state.results[direction] = result;
    paintTranslation(direction, result);
    enableNextOn(direction);
    updateStepper();
    persistSession();
  } catch (e) {
    showError(e.message);
    btn.disabled = false;
    btn.textContent = "📤 提交并点评";
    return;
  }

  btn.textContent = "📤 重新提交并点评";
  btn.disabled = false;
}

function paintDictation(result) {
  const fb = $("#dictation-feedback");
  $("#dictation-input").disabled = true;

  if (result.error) {
    fb.innerHTML = `<p class="ai-error">⚠️ ${escapeHtml(result.error)}</p>`;
  } else {
    fb.innerHTML = `
      <div class="score-line">默写匹配率：<strong>${result.match_pct}%</strong></div>
      <div class="diff-pre">${result.diff_html ?? ""}</div>
      ${result.ai_tip ? `<p class="ai-tip">📌 ${escapeHtml(result.ai_tip)}</p>` : ""}
    `;
  }
  fb.hidden = false;
}

async function submitDictation() {
  state.answers.dictation = $("#dictation-input").value;

  const btn = currentSubmitBtn();
  btn.disabled = true;
  btn.textContent = "AI 评分中…(10-30s)";

  try {
    const result = await callGrade("dictation", { answer: state.answers.dictation });
    state.results.dictation = result;
    paintDictation(result);
    enableNextOn("dictation");
    updateStepper();
    persistSession();
  } catch (e) {
    showError(e.message);
    btn.disabled = false;
    btn.textContent = "📤 提交本题";
    return;
  }

  btn.textContent = "📤 重新提交";
  btn.disabled = false;
}

// ─── API calls ─────────────────────────────────────────────
async function callGrade(kind, extra) {
  const payload = {
    lesson_id: state.lesson.id,
    token: getToken(),
    kind,
    ...extra,
  };
  const r = await fetch("/api/grade", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!r.ok) {
    let msg = `提交失败 (${r.status})`;
    try { const j = await r.json(); if (j.error) msg = j.error; } catch {}
    throw new Error(msg);
  }
  return r.json();
}

async function callFinish() {
  const payload = {
    lesson_id: state.lesson.id,
    token: getToken(),
    submitted_at: new Date().toISOString(),
    answers: state.answers,
    results: state.results,
  };
  const r = await fetch("/api/finish", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!r.ok) {
    let msg = `发送失败 (${r.status})`;
    try { const j = await r.json(); if (j.error) msg = j.error; } catch {}
    throw new Error(msg);
  }
  return r.json();
}

// ─── Summary screen ───────────────────────────────────────
// 整课总评：AI 整体反馈区 + 各站可展开详情
function renderSummary() {
  const r = state.results;
  const stations = [];

  // ⓪ read_aloud
  if (state.answers.read_aloud?.listened || state.answers.read_aloud?.attempted_sentence_ids?.length) {
    const attempted = state.answers.read_aloud?.attempted_sentence_ids?.length ?? 0;
    const total = getReadAloudSentences().length || r.read_aloud?.total || 0;
    const lastTip = r.read_aloud?.last_coach_zh || "";
    stations.push(`<details class="summary-station" open>
      <summary><span class="summary-station-title">⓪ 跟读</span><span class="summary-station-score ok">${attempted ? `${attempted} 句` : "已听"}</span></summary>
      <div class="summary-station-body">
        <p class="summary-comment">已完成全文听读${attempted ? `，并录了 ${attempted}${total ? ` / ${total}` : ""} 个核心句。` : "。"}</p>
        ${lastTip ? `<p class="summary-comment">🗣 ${escapeHtml(lastTip)}</p>` : ""}
      </div>
    </details>`);
  }

  // ① you_too
  if (r.you_too) {
    const yt = r.you_too;
    const sel = state.answers.you_too?.selected_label ?? "(未选)";
    const fillVal = state.answers.you_too?.fills?.[sel] ?? "";
    const customVal = state.answers.you_too?.custom_text ?? "";
    const answerLine = customVal ? `自由作答：${escapeHtml(customVal)}` : `选了 ${escapeHtml(sel)}${fillVal ? `、填了 "${escapeHtml(fillVal)}"` : ""}`;
    stations.push(`<details class="summary-station"${yt.error ? "" : " open"}>
      <summary><span class="summary-station-title">① 生活场景</span><span class="summary-station-score ${yt.error ? "warn" : "ok"}">${yt.error ? "未通过" : "✓ 已交"}</span></summary>
      <div class="summary-station-body">
        <p class="summary-answer">${answerLine}</p>
        ${yt.comment ? `<p class="summary-comment">📝 ${escapeHtml(yt.comment)}</p>` : ""}
        ${yt.error ? `<p class="ai-error">⚠️ ${escapeHtml(yt.error)}</p>` : ""}
      </div>
    </details>`);
  }

  // ② cloze
  if (r.cloze) {
    const c = r.cloze;
    const wrongs = (c.details ?? []).filter(d => !d.correct);
    stations.push(`<details class="summary-station">
      <summary><span class="summary-station-title">② 完形填空</span><span class="summary-station-score ${c.score === c.total ? "ok" : (c.score >= c.total * 0.7 ? "mid" : "warn")}">${c.score} / ${c.total}</span></summary>
      <div class="summary-station-body">
        ${wrongs.length === 0 ? `<p class="summary-comment ok">全部正确 🎉</p>` :
          `<p class="summary-comment">错 ${wrongs.length} 处：</p>
           <ul class="summary-wrong-list">${wrongs.map(d => `<li>第 ${d.index + 1} 空：你写 <code>${escapeHtml(d.submitted || "(空)")}</code>，应是 <code>${escapeHtml(d.expected)}</code></li>`).join("")}</ul>`}
      </div>
    </details>`);
  }

  // ③ / ④ translation
  for (const [dir, label] of [["cn_to_en", "③ 中译英"], ["en_to_cn", "④ 英译中"]]) {
    const t = r[dir];
    if (!t) {
      stations.push(`<details class="summary-station"><summary><span class="summary-station-title">${label}</span><span class="summary-station-score muted">未做</span></summary></details>`);
      continue;
    }
    if (t.error) {
      stations.push(`<details class="summary-station"><summary><span class="summary-station-title">${label}</span><span class="summary-station-score warn">评分失败</span></summary><div class="summary-station-body"><p class="ai-error">⚠️ ${escapeHtml(t.error)}</p></div></details>`);
      continue;
    }
    const overallScore = t.overall_score ?? "?";
    const cls = typeof overallScore === "number" ? (overallScore >= 8 ? "ok" : overallScore >= 6 ? "mid" : "warn") : "muted";
    const perSent = Array.isArray(t.per_sentence) ? t.per_sentence : [];
    const ans = state.answers[dir] ?? [];
    const perHtml = perSent.map(p => {
      const studentAns = ans[p.index] ?? "";
      const fixesHtml = Array.isArray(p.fixes) && p.fixes.length ?
        `<ul class="summary-fixes">${p.fixes.map(f => `<li><code>${escapeHtml(f.original)}</code> → <code>${escapeHtml(f.suggested)}</code> <em>${escapeHtml(f.reason_zh ?? "")}</em></li>`).join("")}</ul>` : "";
      return `<div class="summary-trans-row">
        <div class="summary-trans-head">第 ${p.index + 1} 段 <strong>${p.score}/10</strong></div>
        <div class="summary-trans-answer">${escapeHtml(studentAns || "(未作答)")}</div>
        <p class="summary-comment">${escapeHtml(p.comment ?? "")}</p>
        ${fixesHtml}
      </div>`;
    }).join("");
    stations.push(`<details class="summary-station">
      <summary><span class="summary-station-title">${label}</span><span class="summary-station-score ${cls}">${overallScore} / 10</span></summary>
      <div class="summary-station-body">
        ${t.overall_summary ? `<p class="summary-overall">📊 ${escapeHtml(t.overall_summary)}</p>` : ""}
        ${perHtml}
      </div>
    </details>`);
  }

  // ⑤ dictation
  if (r.dictation) {
    const d = r.dictation;
    const pct = d.match_pct ?? "?";
    const cls = typeof pct === "number" ? (pct >= 90 ? "ok" : pct >= 70 ? "mid" : "warn") : "muted";
    stations.push(`<details class="summary-station">
      <summary><span class="summary-station-title">⑤ 默写</span><span class="summary-station-score ${cls}">${pct}%</span></summary>
      <div class="summary-station-body">
        ${d.diff_html ? `<div class="diff-pre summary-diff">${d.diff_html}</div>` : ""}
        ${d.ai_tip ? `<p class="summary-comment">📌 ${escapeHtml(d.ai_tip)}</p>` : ""}
      </div>
    </details>`);
  } else {
    stations.push(`<details class="summary-station"><summary><span class="summary-station-title">⑤ 默写</span><span class="summary-station-score muted">未做</span></summary></details>`);
  }

  // AI 整体总评（占位、之后填）
  const aiBlock = `<div class="summary-ai-card" id="summary-ai-card">
    <div class="summary-ai-loading">🤖 AI 老师正在通读你今天的整体表现…</div>
  </div>`;

  $("#summary-body").innerHTML = aiBlock + stations.join("");

  // 异步拉 AI 总评（不阻塞 send-to-dad 按钮）
  fetchOverallSummary();
}

async function fetchOverallSummary() {
  const card = $("#summary-ai-card");
  if (!card) return;
  try {
    const r = await fetch("/api/overall-summary", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        lesson_id: state.lesson.id,
        token: getToken(),
        results: state.results,
      }),
    });
    if (!r.ok) throw new Error(`AI 总评失败 (${r.status})`);
    const data = await r.json();
    if (data.error || !data.summary) {
      card.innerHTML = `<div class="summary-ai-fallback">⚠️ AI 总评暂时不可用${data.error ? `（${escapeHtml(data.error)}）` : ""}、你可以直接发邮件给爸爸。</div>`;
      return;
    }
    const focus = Array.isArray(data.focus_points) ? data.focus_points : [];
    card.innerHTML = `
      <div class="summary-ai-header">🤖 AI 老师的整体反馈</div>
      <p class="summary-ai-overall">${escapeHtml(data.summary)}</p>
      ${focus.length ? `<div class="summary-ai-section">
        <div class="summary-ai-section-title">🎯 下次特别注意</div>
        <ul class="summary-ai-focus">${focus.map(p => `<li>${escapeHtml(p)}</li>`).join("")}</ul>
      </div>` : ""}
      ${data.encouragement ? `<p class="summary-ai-encour">💪 ${escapeHtml(data.encouragement)}</p>` : ""}
    `;
  } catch (e) {
    card.innerHTML = `<div class="summary-ai-fallback">⚠️ AI 总评暂时不可用（${escapeHtml(e.message ?? "")}）、你可以直接发邮件给爸爸。</div>`;
  }
}

async function finish() {
  const btn = $("#finish-btn");
  btn.disabled = true;
  btn.textContent = "正在发送…";
  $("#finish-status").textContent = "";
  try {
    await callFinish();
    btn.hidden = true;
    $("#finish-back").hidden = false;
    $("#finish-status").textContent = "✓ 已发送给爸爸。今天辛苦了！";
    clearSession();  // 整课完成、清掉本地缓存
  } catch (e) {
    btn.disabled = false;
    btn.textContent = "✉️ 把成绩发给爸爸";
    $("#finish-status").textContent = `⚠️ ${e.message}`;
  }
}

// ─── 清除当前 station 的答案 + 反馈 + 状态 ────────────────
// 不动其他 station、不动课件音频、不动进度
function clearScreen(screen) {
  if (!screen) return;
  const sec = document.querySelector(`.screen[data-screen="${screen}"]`);
  if (!sec) return;
  const hasFeedback = !!state.results[screen];
  const hasAnswers = (() => {
    switch (screen) {
      case "read_aloud": return !!state.answers.read_aloud?.listened || (state.answers.read_aloud?.attempted_sentence_ids?.length ?? 0) > 0;
      case "you_too":  return !!state.answers.you_too.selected_label || !!state.answers.you_too.custom_text?.trim() || Object.values(state.answers.you_too.fills || {}).some(v => v?.trim());
      case "cloze":    return state.answers.cloze.some(v => v?.trim());
      case "cn_to_en": return Array.isArray(state.answers.cn_to_en) && state.answers.cn_to_en.some(v => v?.trim());
      case "en_to_cn": return Array.isArray(state.answers.en_to_cn) && state.answers.en_to_cn.some(v => v?.trim());
      case "dictation":return !!state.answers.dictation?.trim();
      default: return false;
    }
  })();
  if (!hasAnswers && !hasFeedback) return;  // 已经是空、什么都不做
  // 有反馈才提示确认 —— 没提交过的就直接清、不打断
  if (hasFeedback && !confirm("清除本题的答案和点评？\n（不会影响其他题）")) return;

  switch (screen) {
    case "read_aloud": {
      state.answers.read_aloud = { listened: false, attempted_sentence_ids: [], last_attempt_at: "" };
      state.results.read_aloud = null;
      state._readAloudLatest = {};
      deleteReadAloudLessonAttempts(state.lesson.id).catch(e => console.warn("清除本地跟读失败", e));
      renderReadAloud();
      break;
    }
    case "you_too": {
      state.answers.you_too = { selected_label: null, custom_text: "", fills: {} };
      state.results.you_too = null;
      // 还原 UI：清掉选项 radio、textarea、所有 fill input、隐藏反馈
      sec.querySelectorAll('input[name="you_too_choice"]').forEach(r => { r.checked = false; });
      const ta = $("#you-too-input"); if (ta) ta.value = "";
      sec.querySelectorAll('input[data-fill-for]').forEach(i => { i.value = ""; });
      $("#you-too-textarea-wrap").hidden = true;
      const fb = $("#you-too-feedback"); if (fb) { fb.hidden = true; fb.innerHTML = ""; }
      break;
    }
    case "cloze": {
      state.answers.cloze = [];
      state.results.cloze = null;
      // ⚠ paintClozeFeedback 提交后会 .disabled=true + 加 "ok"/"err" + 设 title、
      //   清除时必须把这些都还原、否则输入框被锁住没法再填
      $$(".cloze-blank").forEach(el => {
        el.value = "";
        el.disabled = false;
        el.classList.remove("ok", "err");
        el.removeAttribute("title");
      });
      const fb = $("#cloze-feedback"); if (fb) { fb.hidden = true; fb.innerHTML = ""; }
      break;
    }
    case "cn_to_en":
    case "en_to_cn": {
      state.answers[screen] = [];
      state.results[screen] = null;
      sec.querySelectorAll(`textarea.trans-input`).forEach(t => { t.value = ""; });
      sec.querySelectorAll(`.trans-row-feedback`).forEach(el => { el.hidden = true; el.innerHTML = ""; });
      const overall = sec.querySelector(`.overall-feedback`);
      if (overall) { overall.hidden = true; overall.innerHTML = ""; }
      break;
    }
    case "dictation": {
      state.answers.dictation = "";
      state.results.dictation = null;
      // paintDictation 提交后会 disabled=true、清除时必须还原
      const ta = $("#dictation-input"); if (ta) { ta.value = ""; ta.disabled = false; }
      const fb = $("#dictation-feedback"); if (fb) { fb.hidden = true; fb.innerHTML = ""; }
      break;
    }
  }

  // 还原 submit 按钮文案 / 隐藏 next 按钮
  const submit = sec.querySelector(".submit-btn");
  const next = sec.querySelector(".next-btn");
  if (submit) {
    submit.disabled = false;
    submit.textContent = (screen === "cn_to_en" || screen === "en_to_cn") ? "📤 提交并点评" : "📤 提交本题";
  }
  if (next) next.hidden = true;
  persistSession();
  updateStepper();
}

// ─── Helpers ──────────────────────────────────────────────
function currentSubmitBtn() {
  return $(`.screen[data-screen="${state.currentScreen}"] .submit-btn`);
}

function enableNextOn(screen) {
  const sec = $(`.screen[data-screen="${screen}"]`);
  if (!sec) return;
  const next = sec.querySelector(".next-btn");
  if (next) next.hidden = false;
  // 提交后允许再做：让 submit 按钮也保留为「重新提交」
  const submit = sec.querySelector(".submit-btn");
  if (submit && screen === "cloze") {
    submit.textContent = "📤 再判一次";
    submit.disabled = false;
  }
}

function showError(msg) {
  const eb = $("#error-block");
  eb.textContent = msg;
  eb.hidden = false;
  setTimeout(() => { eb.hidden = true; }, 6000);
}

// ─── Wire up ──────────────────────────────────────────────
function bindEvents() {
  document.addEventListener("click", (ev) => {
    const target = ev.target;
    if (!(target instanceof HTMLElement)) return;
    const action = target.dataset.action;
    if (!action) return;

    if (action === "submit-you-too") {
      submitYouToo();
    } else if (action === "play-full-audio") {
      playFullAudio();
    } else if (action === "play-read-model") {
      playReadModel(target.dataset.sentenceId);
    } else if (action === "toggle-read-recording") {
      toggleReadRecording(target.dataset.sentenceId);
    } else if (action === "submit-read-aloud") {
      submitReadAloud(target.dataset.sentenceId);
    } else if (action === "submit-cloze") {
      submitCloze();
    } else if (action === "submit-translation") {
      submitTranslation(target.dataset.direction);
    } else if (action === "submit-dictation") {
      submitDictation();
    } else if (action === "clear-screen") {
      clearScreen(target.dataset.screen);
    } else if (action === "next") {
      nextScreen();
    }
  });

  $("#finish-btn")?.addEventListener("click", finish);

  // 默写 textarea 输入即存（cn_to_en / en_to_cn 的逐句 textarea 由 onTransInput 处理）
  const dictTa = $("#dictation-input");
  if (dictTa) {
    dictTa.addEventListener("input", () => {
      state.answers.dictation = dictTa.value;
      persistSession();
    });
  }
  // you_too textarea 也实时存 + 改了内容也清旧反馈
  const ytTa = $("#you-too-input");
  if (ytTa) {
    ytTa.addEventListener("input", () => {
      state.answers.you_too.custom_text = ytTa.value;
      invalidateYouTooFeedback();
      persistSession();
    });
  }
  // cloze 空格也存
  document.addEventListener("input", (ev) => {
    const t = ev.target;
    if (t instanceof HTMLInputElement && t.classList.contains("cloze-blank")) {
      const inputs = $$(".cloze-blank");
      state.answers.cloze = inputs.map(el => el.value);
      persistSession();
    }
  });
}

// ─── Main ──────────────────────────────────────────────────
async function main() {
  const lessonId = Number(getQuery("id"));
  if (!Number.isFinite(lessonId) || lessonId < 1) {
    showError("URL 缺少 ?id=N 参数");
    return;
  }

  let lessons;
  try {
    lessons = await loadLessons();
  } catch (e) {
    showError(e.message);
    return;
  }

  const lesson = lessons.find(L => L.id === lessonId);
  if (!lesson) {
    showError(`Lesson ${lessonId} 不存在（数据里只有 ${lessons.length} 课）`);
    return;
  }
  state.lesson = lesson;

  const urlToken = getQuery("k");
  if (urlToken) localStorage.setItem(TOKEN_KEY, urlToken);

  restoreSession();
  bindEvents();

  // 异步加载 read_aloud 数据。若没有配置，隐藏跟读屏、退回生活场景。
  state.readAloud = await loadReadAloud(lessonId);
  if (state.readAloud) {
    renderReadAloud();
    hydrateReadAloudAttempts();
  } else {
    const raScreen = document.querySelector('.screen[data-screen="read_aloud"]');
    const raStep = document.querySelector('.step[data-step="read_aloud"]');
    if (raScreen) raScreen.remove();
    if (raStep) raStep.remove();
    const idx = SCREENS.indexOf("read_aloud");
    if (idx >= 0) SCREENS.splice(idx, 1);
    if (state.currentScreen === "read_aloud") state.currentScreen = "you_too";
  }

  // 异步加载 you_too 数据并渲染（若该课没生成、退化为不显示「你呢」屏）
  state.youToo = await loadYouToo(lessonId);
  if (state.youToo) {
    renderYouToo();
  } else {
    // 隐藏「你呢」屏 + stepper 项；若当前 screen 是 you_too 则跳到 cloze
    const ytScreen = document.querySelector('.screen[data-screen="you_too"]');
    const ytStep = document.querySelector('.step[data-step="you_too"]');
    if (ytScreen) ytScreen.remove();
    if (ytStep) ytStep.remove();
    const idx = SCREENS.indexOf("you_too");
    if (idx >= 0) SCREENS.splice(idx, 1);
    if (state.currentScreen === "you_too") state.currentScreen = "cloze";
  }

  renderLesson(lesson);
}

main();
