#!/usr/bin/env node
/**
 * 浏览器 / DOM 模拟测试：
 *   - 自定义 progress scrubber 拖动时的所有副作用
 *   - 卡拉 OK 句子点击跳读
 * 不依赖 audio.currentTime（preview 环境会被重置）、用 DOM 事件 + state 验证。
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

async function main() {
  // ─── 测试 1：scrubber CSS gradient progress 变量被正确更新 ──
  section('1. scrubber 拖动行为');

  // 直接读源码、检查关键代码路径存在
  const appJs = await fs.readFile(path.join(ROOT, 'web/assets/app.js'), 'utf8');

  // 1.1 scrubber 监听 input 事件
  if (/scrubber\.addEventListener\(["']input["']/.test(appJs)) {
    ok("scrubber 注册 'input' 事件（拖动时持续触发、不只是 release 后）");
  } else {
    bad("scrubber 没监听 input 事件");
  }

  // 1.2 input 处理器调 player._tick (实时同步幻灯)
  const inputHandler = appJs.match(/scrubber\.addEventListener\(["']input["'],\s*\(\)\s*=>\s*\{[\s\S]+?\}\);/);
  if (inputHandler) {
    if (/_tick/.test(inputHandler[0])) {
      ok("input 处理器调用 player._tick (实时幻灯片预览)");
    } else {
      bad("input 处理器没调 _tick、拖动时幻灯不会跟随");
    }
    // 1.3 设置 audio.currentTime
    if (/audio\.currentTime\s*=/.test(inputHandler[0])) {
      ok("input 处理器设置 audio.currentTime");
    } else {
      bad("input 处理器没设置 audio.currentTime");
    }
    // 1.4 更新 timeCur 文本
    if (/timeCur\.textContent/.test(inputHandler[0])) {
      ok("input 处理器更新当前时间显示");
    } else {
      bad("input 处理器没更新时间显示");
    }
    // 1.5 设置 --progress CSS var (背景填充)
    if (/--progress/.test(inputHandler[0])) {
      ok("input 处理器更新 --progress CSS 变量");
    } else {
      bad("input 处理器没更新 CSS progress var");
    }
  } else {
    bad("没找到 scrubber.input 处理器");
  }

  // 1.6 timeupdate 不强制覆盖正在拖动的 scrubber.value
  const timeupdate = appJs.match(/audio\.addEventListener\(["']timeupdate["']\s*,\s*updateProgressUI\)/);
  const updateUI = appJs.match(/const updateProgressUI = \(\) => \{[\s\S]+?\};/);
  if (timeupdate && updateUI && /scrubber\.matches\(["']:active["']\)/.test(updateUI[0])) {
    ok("timeupdate 跳过覆盖 scrubber.value 当用户在拖（保护用户输入）");
  } else {
    bad("timeupdate 可能会在用户拖动时覆盖 scrubber.value");
  }

  // ─── 测试 2：卡拉 OK 句子点击 ─────────────────────
  section('2. 卡拉 OK 点击跳读');

  const slidePlayerJs = await fs.readFile(path.join(ROOT, 'web/assets/slide-player.js'), 'utf8');

  if (/data-line-idx="\$\{lineIdx\}"/.test(slidePlayerJs) || /data-line-idx="/.test(slidePlayerJs)) {
    ok("passage 句子带 data-line-idx 属性");
  } else {
    bad("没找到 data-line-idx");
  }

  if (/_onSentenceClick/.test(slidePlayerJs)) {
    ok("有 _onSentenceClick 处理器");
  } else {
    bad("缺 _onSentenceClick");
  }

  if (/stageEl\.addEventListener\(["']click["']/.test(slidePlayerJs)) {
    ok("stage 事件委托监听 click");
  } else {
    bad("stage 没委托 click");
  }

  // 模拟 click → _render 跳到对应 line
  globalThis.document = { querySelectorAll: () => [] };
  const playerMod = await import(`file://${path.join(ROOT, 'web/assets/slide-player.js')}`);
  const timeline = JSON.parse(await fs.readFile(path.join(ROOT, 'web/audio/lesson_1.timeline.json'), 'utf8'));
  const lesson = (JSON.parse(await fs.readFile(path.join(ROOT, 'web/data/lessons.json'), 'utf8'))).find(L => L.id === 1);

  // makeStubElement (复用 test_slide_player 的 stub)
  function makeClassList(initial = []) {
    const set = new Set(initial);
    return { add: (...n) => n.forEach(x => set.add(x)), remove: (...n) => n.forEach(x => set.delete(x)), contains: n => set.has(n), toggle: n => set.has(n) ? set.delete(n) : set.add(n), [Symbol.iterator]: () => set[Symbol.iterator]() };
  }
  function makeStubElement() {
    const el = {
      classList: makeClassList(),
      _innerHTML: '',
      style: { _props: {}, setProperty(k, v) { this._props[k] = v; }, getPropertyValue(k) { return this._props[k] ?? ''; } },
      dataset: {},
      set innerHTML(v) {
        this._innerHTML = v;
        const m = v.match(/<div[^>]*class="([^"]*)"[^>]*>/);
        this._fec = m ? { className: m[1] } : null;
      },
      get innerHTML() { return this._innerHTML; },
      get firstElementChild() { return this._fec; },
      get offsetWidth() { return 800; },
      addEventListener() {},
      removeEventListener() {},
      querySelector() { return null; },
      querySelectorAll() { return []; },
    };
    return el;
  }
  const stage = makeStubElement();
  const player = new playerMod.SlidePlayer({ stageEl: stage, audioEl: null, timeline, lesson });

  // 找一个 passage_normal line idx
  const passageLines = timeline.lines.filter(l => l.scene === 'passage_normal');
  if (passageLines.length < 3) {
    bad('passage_normal 行少于 3、不便测试');
  } else {
    const targetLineIdx = passageLines[2].i;
    // 模拟 click 事件
    const fakeEvent = {
      target: {
        classList: { contains: (c) => c === 'passage-sent' },
        dataset: { lineIdx: String(targetLineIdx) },
      },
      preventDefault() {},
    };
    const beforeIdx = player.currentIdx;
    player._onSentenceClick(fakeEvent);
    if (player.currentIdx === targetLineIdx && beforeIdx !== targetLineIdx) {
      ok(`点击 line=${targetLineIdx} → currentIdx 跳到 ${player.currentIdx}（之前 ${beforeIdx}）`);
    } else {
      bad(`点击未生效：before=${beforeIdx} after=${player.currentIdx} expected=${targetLineIdx}`);
    }

    // 点击非 passage-sent 元素 → 不跳
    const fakeEvent2 = {
      target: { classList: { contains: () => false }, dataset: {} },
      preventDefault() {},
    };
    const before2 = player.currentIdx;
    player._onSentenceClick(fakeEvent2);
    if (player.currentIdx === before2) {
      ok('点击非 passage-sent 不跳');
    } else {
      bad('点击非 passage-sent 也跳了');
    }
  }

  // 总结
  section('总结');
  const total = PASS + FAIL;
  console.log(`\x1b[1m通过: ${PASS} / ${total}\x1b[0m  失败: ${FAIL}`);
  if (FAIL > 0) {
    console.log('\x1b[31m\nscrubber/click 行为有 bug\x1b[0m');
    process.exit(1);
  } else {
    console.log('\x1b[32m\nscrubber/click 全部 OK\x1b[0m');
    process.exit(0);
  }
}

main().catch(e => {
  console.error('测试本身抛错：', e);
  process.exit(1);
});
