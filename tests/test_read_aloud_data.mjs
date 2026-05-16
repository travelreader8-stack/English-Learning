#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(process.cwd());
const DATA_DIR = path.join(ROOT, "web/data/read_aloud");

let pass = 0;
let fail = 0;

function ok(msg) {
  pass++;
  console.log(`✓ ${msg}`);
}

function bad(msg) {
  fail++;
  console.error(`✗ ${msg}`);
}

function isNum(v) {
  return typeof v === "number" && Number.isFinite(v);
}

const files = (await fs.readdir(DATA_DIR))
  .filter(f => /^lesson_\d+\.json$/.test(f))
  .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));

if (!files.length) {
  bad("没有 read_aloud 数据文件");
}

for (const file of files) {
  const full = path.join(DATA_DIR, file);
  let data;
  try {
    data = JSON.parse(await fs.readFile(full, "utf8"));
  } catch (e) {
    bad(`${file} 不是合法 JSON: ${e.message}`);
    continue;
  }
  const lessonNo = Number(file.match(/\d+/)[0]);
  if (data.lesson_id === lessonNo) ok(`${file} lesson_id 正确`);
  else bad(`${file} lesson_id 应为 ${lessonNo}`);

  if (data.mode === "guided_sentences") ok(`${file} mode=guided_sentences`);
  else bad(`${file} mode 应为 guided_sentences`);

  if (typeof data.intro_zh === "string" && data.intro_zh.trim()) ok(`${file} intro_zh 存在`);
  else bad(`${file} intro_zh 缺失`);

  const sentences = Array.isArray(data.sentences) ? data.sentences : [];
  if (sentences.length >= 5 && sentences.length <= 8) ok(`${file} 有 ${sentences.length} 个跟读句`);
  else bad(`${file} 跟读句数量应为 5-8，实际 ${sentences.length}`);

  const ids = new Set();
  for (const [idx, s] of sentences.entries()) {
    const label = `${file} sentences[${idx}]`;
    if (typeof s.id === "string" && s.id.trim() && !ids.has(s.id)) ok(`${label} id 唯一`);
    else bad(`${label} id 缺失或重复`);
    ids.add(s.id);

    if (typeof s.text === "string" && s.text.trim()) ok(`${label} text 存在`);
    else bad(`${label} text 缺失`);

    if (typeof s.focus_zh === "string" && s.focus_zh.trim()) ok(`${label} focus_zh 存在`);
    else bad(`${label} focus_zh 缺失`);

    if (isNum(s.start) && isNum(s.end) && s.end > s.start) ok(`${label} start/end 合法`);
    else bad(`${label} start/end 不合法`);

    if (Array.isArray(s.focus_words) && s.focus_words.length) ok(`${label} focus_words 存在`);
    else bad(`${label} focus_words 缺失`);
  }
}

console.log(`\nRead aloud data: ${pass} passed, ${fail} failed`);
if (fail) process.exit(1);
