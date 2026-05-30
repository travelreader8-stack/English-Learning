#!/usr/bin/env node
/**
 * slide-player.js 单元测试
 *
 * 用真实 timeline.json + lessons.json 数据驱动 SlidePlayer，验证：
 *   1. 6 种 scene 类型都能渲染
 *   2. vocab word fallback 链工作（即使 scene_meta 缺失也能找到 word）
 *   3. 同 vocab word 内多行不重渲染（A→B→A 优化）
 *   4. 连续 passage 行只更新高亮、不重建 DOM
 *   5. 同一插画内换台词不重建 DOM
 *   6. retell 各帧切图正确
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

let PASS = 0, FAIL = 0;
const ok = (msg) => { console.log(`\x1b[32m  ✓ ${msg}\x1b[0m`); PASS++; };
const bad = (msg) => { console.log(`\x1b[31m  ✗ ${msg}\x1b[0m`); FAIL++; };
const section = (title) => console.log(`\n\x1b[1;36m▶ ${title}\x1b[0m`);

// 简易 DOMTokenList stub（支持 add/remove/contains/toggle）
function makeClassList(initial = []) {
  const set = new Set(initial);
  return {
    add: (...names) => names.forEach(n => set.add(n)),
    remove: (...names) => names.forEach(n => set.delete(n)),
    contains: (n) => set.has(n),
    toggle: (n) => { set.has(n) ? set.delete(n) : set.add(n); },
    get length() { return set.size; },
    [Symbol.iterator]: () => set[Symbol.iterator](),
    _set: set,
  };
}

// 简易 jsdom 替代：用 happy-dom 风格的 stub
function makeStubElement() {
  const el = {
    children: [],
    classList: makeClassList(),
    _innerHTML: '',
    _textContent: '',
    style: { _props: {}, setProperty(k, v) { this._props[k] = v; }, getPropertyValue(k) { return this._props[k] ?? ''; } },
    dataset: {},
    set innerHTML(v) {
      this._innerHTML = v;
      // 解析 firstElementChild — 模拟 DOM 节点身份
      const m = v.match(/<div[^>]*class="([^"]*)"[^>]*>/);
      if (m) {
        this._fec = { className: m[1], outerHTML: v.slice(0, 300), classList: makeClassList(m[1].split(/\s+/)) };
      } else {
        this._fec = null;
      }
    },
    get innerHTML() { return this._innerHTML; },
    get firstElementChild() { return this._fec; },
    set textContent(v) { this._textContent = v; },
    get textContent() { return this._textContent; },
    get offsetWidth() { return 800; },
    addEventListener() {},
    removeEventListener() {},
    querySelector(sel) {
      const cls = sel.replace(/^\./, '').split(' ').pop();
      const re = new RegExp(`<[^>]*class="[^"]*${cls}[^"]*"[^>]*>([^<]*)`);
      const m = this._innerHTML.match(re);
      if (!m) return null;
      return { textContent: m[1], outerHTML: m[0], dataset: {} };
    },
    querySelectorAll(sel) {
      const cls = sel.replace(/^\./, '').split(' ').pop();
      const re = new RegExp(`<[^>]*class="[^"]*${cls}[^"]*"[^>]*>([^<]*)`, 'g');
      const out = [];
      let m;
      while ((m = re.exec(this._innerHTML))) {
        out.push({ textContent: m[1], outerHTML: m[0], classList: makeClassList([cls]) });
      }
      return out;
    },
  };
  return el;
}

function makeAudioStub() {
  const listeners = {};
  return {
    currentTime: 0,
    paused: true,
    playCalls: 0,
    pauseCalls: 0,
    addEventListener(type, fn) {
      (listeners[type] ??= []).push(fn);
    },
    play() {
      this.paused = false;
      this.playCalls++;
      return Promise.resolve();
    },
    pause() {
      this.paused = true;
      this.pauseCalls++;
      for (const fn of listeners.pause ?? []) fn();
    },
    emit(type) {
      for (const fn of listeners[type] ?? []) fn();
    },
  };
}

// ─── 测试 ────────────────────────────────────────────
async function main() {
  const timeline = JSON.parse(
    await fs.readFile(path.join(ROOT, 'web/audio/lesson_1.timeline.json'), 'utf8')
  );
  const lessons = JSON.parse(
    await fs.readFile(path.join(ROOT, 'web/data/lessons.json'), 'utf8')
  );
  const lesson = lessons.find(L => L.id === 1);
  if (!lesson) { bad('Lesson 1 not in lessons.json'); process.exit(1); }

  // global stubs (slide-player.js 用 document.querySelectorAll)
  globalThis.document = {
    querySelectorAll: () => [],
  };

  // 直接 import slide-player.js（ES module）
  const playerMod = await import(`file://${path.join(ROOT, 'web/assets/slide-player.js')}`);

  section('1. 6 种 scene 类型都能渲染');
  const sceneTypes = new Set(timeline.lines.map(l => l.scene));
  for (const t of ['hook', 'retell', 'passage_normal', 'vocab', 'grammar', 'you_too', 'outro']) {
    if (sceneTypes.has(t)) ok(`scene 类型: ${t}`);
    else bad(`timeline 缺 scene: ${t}`);
  }

  section('2. SlidePlayer 渲染各种 scene 不报错');
  const stage = makeStubElement();
  const player = new playerMod.SlidePlayer({ stageEl: stage, audioEl: null, timeline, lesson });
  const lineIndices = {
    hook: timeline.lines.findIndex(l => l.scene === 'hook'),
    retell_f1: timeline.lines.findIndex(l => l.scene === 'retell' && l.scene_meta?.frame === '1'),
    retell_f4: timeline.lines.findIndex(l => l.scene === 'retell' && l.scene_meta?.frame === '4'),
    passage: timeline.lines.findIndex(l => l.scene === 'passage_normal'),
    vocab: timeline.lines.findIndex(l => l.scene === 'vocab'),
    grammar: timeline.lines.findIndex(l => l.scene === 'grammar'),
    you_too: timeline.lines.findIndex(l => l.scene === 'you_too'),
    outro: timeline.lines.findIndex(l => l.scene === 'outro'),
  };
  for (const [name, idx] of Object.entries(lineIndices)) {
    if (idx < 0) { bad(`找不到 ${name}`); continue; }
    try {
      player.goTo(idx);
      const has = stage._innerHTML.length > 50;
      if (has) ok(`${name} 渲染（${stage._innerHTML.length} 字节 HTML）`);
      else bad(`${name} 渲染输出太短: ${stage._innerHTML.length}`);
    } catch (e) {
      bad(`${name} 渲染抛错: ${e.message}`);
    }
  }
  player.goTo(lineIndices.hook);
  if (stage._innerHTML.includes('lesson_1_frame_1.webp') && stage._innerHTML.includes('hook-art')) {
    ok('hook 从开场就显示第 1 帧插画');
  } else {
    bad('hook 没有接入第 1 帧插画');
  }
  if (!stage._innerHTML.includes('hook-kicker') && !stage._innerHTML.includes('hook-title')) {
    ok('hook 不重复显示 Lesson 编号和标题');
  } else {
    bad('hook 仍重复显示 Lesson 编号或标题');
  }

  section('3. vocab word fallback — 即使 scene_meta 损坏也能渲染');
  // 制造一个缺 scene_meta.word 的 vocab 行（模拟 pipeline bug）
  const corruptedTimeline = JSON.parse(JSON.stringify(timeline));
  for (const L of corruptedTimeline.lines) {
    if (L.scene === 'vocab') {
      // 删除一个行的 scene_meta.word
      delete L.scene_meta.word;
      break;
    }
  }
  const stage2 = makeStubElement();
  const player2 = new playerMod.SlidePlayer({ stageEl: stage2, audioEl: null, timeline: corruptedTimeline, lesson });
  const firstVocabIdx = corruptedTimeline.lines.findIndex(l => l.scene === 'vocab');
  player2.goTo(firstVocabIdx);
  const html2 = stage2._innerHTML;
  // word 应通过 fallback 找到（其他 vocab 行的 scene_meta.word、或 segments 的 [EN]）
  const wordMatch = html2.match(/<div class="vocab-word">([^<]+)<\/div>/);
  if (wordMatch && wordMatch[1].trim() && wordMatch[1] !== '(?)') {
    ok(`scene_meta.word 缺失时仍渲染 word: "${wordMatch[1]}"`);
  } else {
    bad(`fallback 失败、word="${wordMatch?.[1] ?? '(无)'}"`);
  }

  section('4. 同 vocab 段（A→B→A）DOM 不重建');
  const stage3 = makeStubElement();
  const player3 = new playerMod.SlidePlayer({ stageEl: stage3, audioEl: null, timeline, lesson });
  // 找 private 三行
  const privateLines = timeline.lines.filter(l => l.scene === 'vocab' && l.scene_meta?.word === 'private');
  if (privateLines.length === 3) {
    player3.goTo(privateLines[0].i);
    const node1 = stage3.firstElementChild;
    player3.goTo(privateLines[1].i);
    const node2 = stage3.firstElementChild;
    player3.goTo(privateLines[2].i);
    const node3 = stage3.firstElementChild;
    if (node1 === node2 && node2 === node3) {
      ok('private A→B→A 渲染：firstElementChild 同一个对象（DOM 没重建）');
    } else {
      bad('private A→B→A 渲染：DOM 重建了');
    }
  } else {
    bad(`期望 private 3 行、实际 ${privateLines.length}`);
  }

  section('5. 连续 passage 行：只切高亮、不重建 DOM');
  const stage4 = makeStubElement();
  const player4 = new playerMod.SlidePlayer({ stageEl: stage4, audioEl: null, timeline, lesson });
  const passageLines = timeline.lines.filter(l => l.scene === 'passage_normal');
  if (passageLines.length >= 3) {
    player4.goTo(passageLines[0].i);
    const node1 = stage4.firstElementChild;
    player4.goTo(passageLines[1].i);
    const node2 = stage4.firstElementChild;
    player4.goTo(passageLines[2].i);
    const node3 = stage4.firstElementChild;
    if (node1 === node2 && node2 === node3) {
      ok(`passage 1→2→3 渲染：firstElementChild 同一个对象（高亮切换、DOM 不变）`);
    } else {
      bad(`passage 1→2→3：DOM 重建了`);
    }
  } else {
    bad(`期望 >=3 passage 行、实际 ${passageLines.length}`);
  }

  section('5.1 hook / retell 同图换台词：只更新文案、不重建插画 DOM');
  const timeline49 = JSON.parse(
    await fs.readFile(path.join(ROOT, 'web/audio/lesson_49.timeline.json'), 'utf8')
  );
  const lesson49 = lessons.find(L => L.id === 49);
  const stage41 = makeStubElement();
  const player41 = new playerMod.SlidePlayer({ stageEl: stage41, audioEl: null, timeline: timeline49, lesson: lesson49 });
  const hookLines = timeline49.lines.filter(l => l.scene === 'hook');
  if (hookLines.length >= 2) {
    player41.goTo(hookLines[0].i);
    const hookNode1 = stage41.firstElementChild;
    player41.goTo(hookLines[1].i);
    const hookNode2 = stage41.firstElementChild;
    if (hookNode1 === hookNode2) {
      ok('hook 连续台词：插画 DOM 未重建');
    } else {
      bad('hook 连续台词：DOM 被重建，插画可能闪烁');
    }
  } else {
    bad(`期望 >=2 hook 行、实际 ${hookLines.length}`);
  }

  const retellFrame1Lines = timeline49.lines.filter(l => l.scene === 'retell' && l.scene_meta?.frame === '1');
  if (retellFrame1Lines.length >= 2) {
    player41.goTo(retellFrame1Lines[0].i);
    const retellNode1 = stage41.firstElementChild;
    player41.goTo(retellFrame1Lines[1].i);
    const retellNode2 = stage41.firstElementChild;
    if (retellNode1 === retellNode2) {
      ok('retell 同一帧连续台词：插画 DOM 未重建');
    } else {
      bad('retell 同一帧连续台词：DOM 被重建，插画可能闪烁');
    }
  } else {
    bad(`期望 retell frame=1 >=2 行、实际 ${retellFrame1Lines.length}`);
  }

  section('6. passage 句子带 data-line-idx（点击跳读）');
  const stage6 = makeStubElement();
  const player6 = new playerMod.SlidePlayer({ stageEl: stage6, audioEl: null, timeline, lesson });
  const firstPassageIdx = timeline.lines.findIndex(l => l.scene === 'passage_normal');
  player6.goTo(firstPassageIdx);
  const html6 = stage6._innerHTML;
  // 至少一半句子有 data-line-idx
  const idxMatches = html6.match(/data-line-idx="\d+"/g) || [];
  if (idxMatches.length >= 5) {
    ok(`passage 渲染含 ${idxMatches.length} 个 data-line-idx 属性`);
  } else {
    bad(`只发现 ${idxMatches.length} 个 data-line-idx`);
  }

  // 模拟点击 — _onSentenceClick 处理
  const fakeTarget = {
    classList: { contains: (c) => c === 'passage-sent' },
    dataset: { lineIdx: String(firstPassageIdx + 2) },
  };
  const fakeEvent = { target: fakeTarget, preventDefault() {} };
  player6._onSentenceClick(fakeEvent);
  // 期望 currentIdx 跳到 firstPassageIdx + 2
  if (player6.currentIdx === firstPassageIdx + 2) {
    ok(`点击句子后 currentIdx = ${player6.currentIdx}（期望 ${firstPassageIdx + 2}）`);
  } else {
    bad(`点击未跳：currentIdx=${player6.currentIdx} 期望 ${firstPassageIdx + 2}`);
  }

  section('6.1 passage 点击句子：只播放这一句、到句尾暂停');
  const stage61 = makeStubElement();
  const audio61 = makeAudioStub();
  const player61 = new playerMod.SlidePlayer({ stageEl: stage61, audioEl: audio61, timeline, lesson });
  const targetLine61 = timeline.lines[firstPassageIdx + 2];
  player61.goTo(firstPassageIdx);
  player61._onSentenceClick({
    target: {
      classList: { contains: (c) => c === 'passage-sent' },
      dataset: { lineIdx: String(firstPassageIdx + 2) },
    },
    preventDefault() {},
  });
  const startedAtSentence = Math.abs(audio61.currentTime - (targetLine61.start + 0.05)) < 0.001 && audio61.playCalls === 1;
  audio61.currentTime = targetLine61.end + 0.12;
  player61._tick();
  const stoppedAtEnd = audio61.paused &&
    audio61.pauseCalls === 1 &&
    Math.abs(audio61.currentTime - targetLine61.end) < 0.001 &&
    player61.currentIdx === firstPassageIdx + 2;
  if (startedAtSentence && stoppedAtEnd) {
    ok('点击句子后从句首播放，并在该句句尾自动暂停');
  } else {
    bad(`点读范围异常：startOk=${startedAtSentence} stopOk=${stoppedAtEnd} currentTime=${audio61.currentTime} currentIdx=${player61.currentIdx}`);
  }

  section('6.2 Lesson 5 passage：Mr. Scott 不会把第二句高亮拆断');
  const timeline5 = JSON.parse(
    await fs.readFile(path.join(ROOT, 'web/audio/lesson_5.timeline.json'), 'utf8')
  );
  const lesson5 = lessons.find(L => L.id === 5);
  const stage62 = makeStubElement();
  const player62 = new playerMod.SlidePlayer({ stageEl: stage62, audioEl: null, timeline: timeline5, lesson: lesson5 });
  const passage5 = timeline5.lines.filter(l => l.scene === 'passage_normal');
  if (lesson5 && passage5.length >= 2) {
    player62.goTo(passage5[1].i);
    const html62 = stage62._innerHTML;
    const currentMatch = html62.match(/<span class="passage-sent current"[^>]*>([^<]+)<\/span>/);
    const currentText = currentMatch?.[1] ?? "";
    const expectedText = passage5[1].segments.find(s => s.lang === 'en')?.text ?? "";
    const passageSentCount = (html62.match(/class="passage-sent/g) || []).length;
    if (currentText === expectedText && passageSentCount === passage5.length) {
      ok('Lesson 5 第二句完整高亮，未被 Mr. Scott 拆成两句');
    } else {
      bad(`Lesson 5 第二句高亮异常：current="${currentText}" count=${passageSentCount} expectedCount=${passage5.length}`);
    }
  } else {
    bad(`Lesson 5 passage 数据不足：lesson=${!!lesson5} passage=${passage5.length}`);
  }

  section('6.5 vocab 卡片：保留 inline 例句英文 + 跳过 echo 行');
  // 历史 bug 1：aggZh 把所有 en 都丢了、inline 例句消失
  // 历史 bug 2：过滤标题词后留下 "原形是 、意思是..." 这种孤儿标点
  // 现在的策略：保留所有 en（包括标题词在内）、只跳过 B 同学的 echo 行（整行只剩单 en）
  const stage65 = makeStubElement();
  const player65 = new playerMod.SlidePlayer({ stageEl: stage65, audioEl: null, timeline, lesson });
  const privateLine35 = timeline.lines.find(l =>
    l.scene === 'vocab' && l.scene_meta?.word === 'private' &&
    (l.segments ?? []).some(s => s.lang === 'en' && s.text.length > 5)
  );
  if (privateLine35) {
    player65.goTo(privateLine35.i);
    const html65 = stage65._innerHTML;
    const inlineEns = html65.match(/<span class="seg-en">[^<]+<\/span>/g) || [];
    const phrases = inlineEns.map(s => s.replace(/^<span class="seg-en">/, '').replace(/<\/span>$/, ''));
    // 至少有 inline 例句（"a private conversation"、"This is my private space"）
    const hasExamples = phrases.some(p => p.includes('private conversation')) &&
                       phrases.some(p => p.includes('private space'));
    if (hasExamples) {
      ok(`vocab-zh 含完整 inline 例句（${phrases.length} 个、含 a private conversation / private space）`);
    } else {
      bad(`vocab-zh 缺关键 inline 例句、找到：${phrases.join(' / ')}`);
    }
    // 检查没有孤儿标点（、起首 + zh 接续）
    const vocabZhMatch = html65.match(/<div class="vocab-zh">([\s\S]+?)<\/div>/);
    const vocabZhText = (vocabZhMatch?.[1] ?? '').replace(/<[^>]+>/g, '');
    // 检测「： 、」「 、」开头的接续模式（标题词被过滤后留下的孤儿）
    const hasOrphanPunct = /[：:][\s]+[、，。;]/.test(vocabZhText) || /\s+[、,]\s*意思是/.test(vocabZhText);
    if (!hasOrphanPunct) ok('vocab-zh 没有孤儿标点（如 「： 、」 或 「 、意思是」）');
    else bad(`vocab-zh 有孤儿标点：${vocabZhText.slice(0, 80)}`);
  } else {
    bad('找不到 private 的多片段 vocab 行');
  }

  // 跨课验证：echo 行（B 同学单独念一遍单词）应被丢弃
  section('6.6 vocab echo 行被跳过');
  const echoLines = timeline.lines.filter(l =>
    l.scene === 'vocab' && l.speaker === 'B' &&
    (l.segments ?? []).filter(s => /[一-鿿\w]/.test(s.text)).length === 1
  );
  if (echoLines.length) {
    // 拿到 echo 行的 word、检查它对应渲染里不会有多余的「单独 en 占一段」
    const echoLine = echoLines[0];
    const echoWord = echoLine.scene_meta?.word;
    const stage66 = makeStubElement();
    const player66 = new playerMod.SlidePlayer({ stageEl: stage66, audioEl: null, timeline, lesson });
    player66.goTo(echoLine.i);
    const html66 = stage66._innerHTML;
    // 渲染 vocab-zh 时、echo 行的内容（单 en）不应该在聚合的 zh 文本里
    // 即：seg-en 数量 = 同 word 段所有 A 行的 en 总数（不含 B echo）
    const sameWordLines = timeline.lines.filter(l =>
      l.scene === 'vocab' &&
      (l.scene_meta?.word ?? '').toLowerCase() === String(echoWord).toLowerCase()
    );
    const aLineEnCount = sameWordLines
      .filter(l => l.speaker === 'A')
      .reduce((acc, l) => acc + (l.segments ?? []).filter(s => s.lang === 'en').length, 0);
    const renderedEns = (html66.match(/<span class="seg-en">/g) || []).length;
    if (renderedEns === aLineEnCount) {
      ok(`echo 行已跳过（${echoWord}）：渲染 ${renderedEns} 个 en、等于 A 行总 en 数`);
    } else {
      bad(`echo 行未跳过：渲染 ${renderedEns} 个 en、A 行有 ${aLineEnCount} 个`);
    }
  } else {
    ok('（timeline 里没有 B echo 单 en 行可测）');
  }

  section('7. retell frames 1-4 各自独立渲染（不同图）');
  const stage5 = makeStubElement();
  const player5 = new playerMod.SlidePlayer({ stageEl: stage5, audioEl: null, timeline, lesson });
  const retellLines = timeline.lines.filter(l => l.scene === 'retell' && l.scene_meta?.frame);
  const seen = new Set();
  for (const L of retellLines) {
    player5.goTo(L.i);
    const html = stage5._innerHTML;
    const imgMatch = html.match(/lesson_1_frame_(\d)\.webp/);
    if (imgMatch) seen.add(imgMatch[1]);
  }
  if (seen.size === 4) {
    ok(`retell 4 帧图片全部出现：${[...seen].sort().join(',')}`);
  } else {
    bad(`retell 只渲染了 ${seen.size} 帧: ${[...seen].sort().join(',')}`);
  }

  // 总结
  section('总结');
  const total = PASS + FAIL;
  console.log(`\x1b[1m通过: ${PASS} / ${total}\x1b[0m  失败: ${FAIL}`);
  if (FAIL > 0) {
    console.log('\x1b[31m\nslide-player 有 bug\x1b[0m');
    process.exit(1);
  } else {
    console.log('\x1b[32m\nslide-player 全部 OK\x1b[0m');
    process.exit(0);
  }
}

main().catch(e => {
  console.error('测试本身抛错：', e);
  process.exit(1);
});
