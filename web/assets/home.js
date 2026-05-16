const LESSONS_URL = "/data/lessons.json";
const LESSONS_FALLBACK_URL = "/data/lessons.sample.json";
const TOKEN_KEY = "nce2_student_token";

const $ = (sel) => document.querySelector(sel);

async function loadLessons() {
  for (const url of [LESSONS_URL, LESSONS_FALLBACK_URL]) {
    const r = await fetch(url, { cache: "no-cache" });
    if (r.ok) return r.json();
  }
  throw new Error("无法加载课程数据");
}

function renderToken() {
  const cur = localStorage.getItem(TOKEN_KEY) || "";
  $("#token-input").value = cur;
  if (cur) $("#token-status").textContent = `已保存口令（前 4 位：${cur.slice(0, 4)}…）`;
}

function bindTokenSave() {
  $("#token-save").addEventListener("click", () => {
    const v = $("#token-input").value.trim();
    if (!v) {
      localStorage.removeItem(TOKEN_KEY);
      $("#token-status").textContent = "口令已清空";
      return;
    }
    localStorage.setItem(TOKEN_KEY, v);
    $("#token-status").textContent = `已保存口令（前 4 位：${v.slice(0, 4)}…）`;
  });
}

function lessonHref(id) {
  const token = localStorage.getItem(TOKEN_KEY) || "";
  const params = new URLSearchParams({ id: String(id) });
  if (token) params.set("k", token);
  return `/lesson.html?${params.toString()}`;
}

function renderLessons(lessons) {
  const grid = $("#lesson-grid");
  if (!lessons.length) {
    grid.innerHTML = `<p class="loading">尚无课程数据。</p>`;
    return;
  }
  const cards = lessons.map(L => `
    <a class="lesson-card" href="${lessonHref(L.id)}">
      <span class="num">Lesson ${L.id}</span>
      <span class="title">${escapeHtml(L.title)}</span>
    </a>
  `).join("");
  grid.innerHTML = cards;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}[c]));
}

async function main() {
  renderToken();
  bindTokenSave();
  try {
    const lessons = await loadLessons();
    lessons.sort((a, b) => a.id - b.id);
    renderLessons(lessons);
  } catch (e) {
    $("#lesson-grid").innerHTML = `<p class="loading">⚠️ ${escapeHtml(e.message)}</p>`;
  }
}

main();
