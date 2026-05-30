// 动态课件 slide player
// 输入：stage DOM 节点、audio 元素、timeline JSON
// 行为：监听 audio.timeupdate，按 currentTime 找到当前 line，渲染对应场景。
//
// 也支持「无音频」沙箱模式：constructor 不传 audio 时，提供 .next() / .prev() 方法手动翻页。

const SCENE_TYPES = ["hook", "retell", "discuss", "passage_normal", "vocab", "grammar", "you_too", "outro",
                     // 旧版兼容
                     "intro", "background", "dialogue", "passage_slow", "tip"];

const CHARACTERS = {
  A: { name: "小雪老师", emoji: "👩‍🏫", color: "var(--char-a)" },
  B: { name: "小军同学", emoji: "👦", color: "var(--char-b)" },
};

function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}[c]));
}

function joinSegmentsHtml(segments) {
  return segments.map(seg => {
    if (seg.lang === "en") {
      return `<span class="seg-en">${escapeHtml(seg.text)}</span>`;
    }
    return `<span class="seg-zh">${escapeHtml(seg.text)}</span>`;
  }).join(" ");
}

function findEnSegment(segments) {
  return segments.find(s => s.lang === "en")?.text ?? "";
}

function findZhSegment(segments) {
  return segments.filter(s => s.lang === "zh").map(s => s.text).join(" ");
}

function storyFrameUrl(lessonId, frame = 1) {
  return `/audio/lesson_${lessonId}_frame_${frame}.webp`;
}

// ─── Scene renderers ───────────────────────────────────────
const renderers = {
  // 新框架：钩子 — 抓注意力的悬念问题
  hook(line, ctx) {
    const imgUrl = storyFrameUrl(ctx.lesson.id, 1);
    return `
      <div class="scene scene-hook">
        <div class="hook-art-wrap">
          <img class="hook-art" src="${imgUrl}" alt="Lesson ${ctx.lesson.id} 开场插画" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="hook-art-fallback" style="display:none">
            <span>第 1 帧图片正在生成</span>
          </div>
        </div>
        <div class="hook-cover">
          <p class="hook-question">${joinSegmentsHtml(line.segments)}</p>
        </div>
      </div>
    `;
  },

  // 新框架：双人播客 — A+B 聊聊这篇课文、抓笑点和文化背景
  discuss(line, ctx) {
    const all = ctx.timeline?.lines ?? [];
    const discussLines = all.filter(L => L.scene === "discuss");
    const cursorIdx = discussLines.findIndex(L => L.i === line.i);
    const visible = cursorIdx >= 0 ? discussLines.slice(0, cursorIdx + 1) : [line];
    const msgs = visible.map(L => {
      const c = CHARACTERS[L.speaker] ?? CHARACTERS.A;
      const isA = L.speaker === "A";
      const isCur = L.i === line.i;
      return `
        <div class="discuss-msg ${isA ? "msg-a" : "msg-b"} ${isCur ? "msg-current" : "msg-past"}">
          <div class="msg-avatar">${c.emoji}</div>
          <div class="msg-bubble">${joinSegmentsHtml(L.segments)}</div>
        </div>
      `;
    }).join("");
    return `
      <div class="scene scene-discuss">
        <div class="discuss-header">💬 播客时间 · 聊聊这篇课文</div>
        <div class="discuss-thread">${msgs}</div>
      </div>
    `;
  },

  // 新框架：故事重现 — 4 帧连环画 + 中文口述
  retell(line, ctx) {
    const c = CHARACTERS[line.speaker];
    const frame = Number(line.scene_meta?.frame ?? 1);
    const imgUrl = storyFrameUrl(ctx.lesson.id, frame);
    return `
      <div class="scene scene-retell">
        <div class="retell-image-wrap">
          <img class="retell-image" src="${imgUrl}" alt="Lesson ${ctx.lesson.id} 第 ${frame} 帧" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="retell-image-fallback" style="display:none">
            <span>🖼️ 第 ${frame} 帧（图片正在生成）</span>
          </div>
          <div class="retell-frame-badge">${frame} / 4</div>
        </div>
        <div class="retell-narration">
          <span class="speaker-pill" data-speaker="${line.speaker}">${c.emoji} ${c.name}</span>
          <p class="bubble">${joinSegmentsHtml(line.segments)}</p>
        </div>
      </div>
    `;
  },

  // 新框架：语法点
  grammar(line, ctx) {
    return `
      <div class="scene scene-grammar">
        <div class="scene-deco">📐</div>
        <div class="scene-section-title">语法点</div>
        <div class="bubble">${joinSegmentsHtml(line.segments)}</div>
      </div>
    `;
  },

  // 新框架：生活场景 — A 老师抛个性化问题 + 给示范
  you_too(line, ctx) {
    const c = CHARACTERS[line.speaker];
    return `
      <div class="scene scene-you-too">
        <div class="scene-deco">🪞</div>
        <div class="scene-section-title">我们生活的场景</div>
        <div class="speaker-card">
          <div class="speaker-avatar">${c.emoji}</div>
          <div class="speaker-name">${c.name}</div>
        </div>
        <div class="bubble">${joinSegmentsHtml(line.segments)}</div>
        <p class="you-too-cta">下面练习里第一题就是这个 →</p>
      </div>
    `;
  },

  // 旧版兼容：intro
  intro(line, ctx) {
    const titleEn = ctx.lesson.title;
    const titleZh = ctx.lesson.title_zh ?? "";
    return `
      <div class="scene scene-intro">
        <div class="scene-deco">📖</div>
        <div class="scene-lesson-no">Lesson ${ctx.lesson.id}</div>
        <h2 class="scene-title-en">${escapeHtml(titleEn)}</h2>
        ${titleZh ? `<h3 class="scene-title-zh">${escapeHtml(titleZh)}</h3>` : ""}
        <p class="scene-bubble">${joinSegmentsHtml(line.segments)}</p>
      </div>
    `;
  },

  background(line, ctx) {
    return renderers.dialogue(line, ctx);  // 同样的对话风格
  },

  dialogue(line, ctx) {
    const c = CHARACTERS[line.speaker];
    const isA = line.speaker === "A";
    return `
      <div class="scene scene-dialogue ${isA ? "speaker-a" : "speaker-b"}">
        <div class="speaker-card">
          <div class="speaker-avatar">${c.emoji}</div>
          <div class="speaker-name">${c.name}</div>
        </div>
        <div class="bubble">${joinSegmentsHtml(line.segments)}</div>
      </div>
    `;
  },

  vocab(line, ctx) {
    const c = CHARACTERS[line.speaker];
    // word fallback 链：scene_meta → 本行第一个 [EN] 段 → 同 vocab 段中第一个有 scene_meta.word 的行 → 最后兜底空
    let word = line.scene_meta?.word;
    if (!word) word = findEnSegment(line.segments);
    if (!word && Array.isArray(ctx.timeline?.lines)) {
      // 找当前 vocab "块" 的边界（连续的 vocab 行）、再读其中任一行的 scene_meta.word
      const allLines = ctx.timeline.lines;
      const here = allLines.findIndex(L => L === line || L.i === line.i);
      // 向前向后扫连续 vocab
      const isVocab = (L) => L?.scene === "vocab";
      let lo = here, hi = here;
      while (lo > 0 && isVocab(allLines[lo - 1])) lo--;
      while (hi < allLines.length - 1 && isVocab(allLines[hi + 1])) hi++;
      for (let i = lo; i <= hi; i++) {
        const w = allLines[i]?.scene_meta?.word;
        if (w) { word = w; break; }
      }
    }
    word = word || "(?)";  // 万一全部 fallback 失效，至少不显示空白

    // 聚合本 vocab 段所有 lines 的内容（保证 A→B→A 切换时卡片解释不消失）
    // ⭐ 保留 en 例句片段（"a private conversation"、"This is my private space"）inline
    //    只丢掉等于「大字标题词」本身的 en 片段（避免和顶部大字重复）
    //    丢掉之后只剩标点 / 空白的整行也跳过（B 同学的"echo"行）
    const allLines = ctx.timeline?.lines ?? [];
    const sameVocab = allLines.filter(L =>
      L.scene === "vocab" &&
      String(L.scene_meta?.word ?? "").toLowerCase() === String(word).toLowerCase()
    );
    const isMeaningful = (text) => /[一-鿿぀-ヿ\w]/.test(text || "");
    // 「echo 行」检测：去掉纯标点 zh 后、只剩单个 en 片段 → 整行跳过
    //   （脚本的固定 pattern：A 引入 → B 单独 echo 一遍 → A 详细解释。B 那一句对显示无意义。）
    //   注意：检测「单 en」而不是「en 文本 = headline word」、因为 vocab 标题
    //   可能是 "repeat" 但 echo 实际念的是 "repeated"（过去式）。
    const isEchoLine = (segs) => {
      const meaningful = (segs ?? []).filter(s => isMeaningful(s.text));
      return meaningful.length === 1 && meaningful[0].lang === "en";
    };
    const aggregatedSegs = sameVocab.flatMap(L => {
      if (isEchoLine(L.segments ?? [])) return [];
      // 保留所有 en（包括标题词、为了句子通顺）、只丢纯标点 zh 孤儿片段
      return (L.segments ?? []).filter(s => {
        if (s.lang === "zh" && !isMeaningful(s.text)) return false;
        return true;
      });
    });
    const zhMixedHtml = aggregatedSegs.map(seg => {
      if (seg.lang === "en") return `<span class="seg-en">${escapeHtml(seg.text)}</span>`;
      return escapeHtml(seg.text);
    }).join(" ").trim();
    const ipa = line.scene_meta?.ipa ?? "";
    const example = line.scene_meta?.example ?? "";
    return `
      <div class="scene scene-vocab">
        <div class="vocab-meta">
          <span class="speaker-pill" data-speaker="${line.speaker}">${c.emoji} ${c.name}</span>
          <span class="vocab-tag">🌟 重点词</span>
        </div>
        <div class="vocab-word">${escapeHtml(word)}</div>
        ${ipa ? `<div class="vocab-ipa">${escapeHtml(ipa)}</div>` : ""}
        ${zhMixedHtml ? `<div class="vocab-zh">${zhMixedHtml}</div>` : ""}
        ${example ? `<div class="vocab-example">💡 ${escapeHtml(example)}</div>` : ""}
      </div>
    `;
  },

  passage_slow(line, ctx) {
    return renderers._passage(line, ctx, "🐢 慢速");
  },

  passage_normal(line, ctx) {
    return renderers._passage(line, ctx, "▶ 正常语速");
  },

  _passage(line, ctx, speedLabel) {
    const c = CHARACTERS[line.speaker];
    const passageRows = getPassageRows(line, ctx);
    const currentEn = findEnSegment(line.segments).trim();
    const currentIdx = passageRows.findIndex(row => normalizeForMatch(row.text) === normalizeForMatch(currentEn));

    const sentencesHtml = passageRows.map((row, i) => {
      let cls = "passage-sent";
      if (i === currentIdx) cls += " current";
      else if (currentIdx > -1 && i < currentIdx) cls += " past";
      else cls += " future";
      const lineIdx = row.lineIdx;
      const clickable = lineIdx >= 0 ? ` data-line-idx="${lineIdx}" role="button" tabindex="0" title="点击只听这一句"` : "";
      return `<span class="${cls}"${clickable}>${escapeHtml(row.text)}</span>`;
    }).join(" ");

    return `
      <div class="scene scene-passage">
        <div class="passage-meta">
          <span class="speaker-pill" data-speaker="${line.speaker}">${c.emoji} ${c.name}</span>
          <span class="passage-tag">${speedLabel} 跟读</span>
        </div>
        <div class="passage-guidance">
          <div class="passage-guidance-title">课文朗读</div>
          <div class="passage-guidance-text">点击任意英文句子，只听这一句。听不清就点它，再听一遍。</div>
        </div>
        <div class="passage-text">${sentencesHtml || `<span class="passage-sent current">${escapeHtml(currentEn)}</span>`}</div>
      </div>
    `;
  },

  tip(line, ctx) {
    return `
      <div class="scene scene-tip">
        <div class="tip-deco">💡</div>
        <div class="tip-title">翻译要点</div>
        <div class="bubble">${joinSegmentsHtml(line.segments)}</div>
      </div>
    `;
  },

  outro(line, ctx) {
    return `
      <div class="scene scene-outro">
        <div class="scene-deco">🎉</div>
        <div class="bubble">${joinSegmentsHtml(line.segments)}</div>
        <ul class="next-checklist">
          <li>⓪ 跟读：听课文全文 → 听原音 → 录一句 → 获取反馈</li>
          <li>① 生活场景</li>
          <li>② 完形填空</li>
          <li>③ 中译英</li>
          <li>④ 英译中</li>
          <li>⑤ 默写</li>
        </ul>
        <p class="scene-cta">加油 💪</p>
      </div>
    `;
  },
};

function normalizeForMatch(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function splitFallbackPassageText(text) {
  return String(text ?? "")
    .replace(/\b(Mr|Mrs|Ms|Dr|St)\.\s+/g, "$1.__abbr__")
    .replace(/([.!?]['"]?)\s+/g, "$1\n")
    .split("\n")
    .map(s => s.replace(/__abbr__/g, " ").trim())
    .filter(Boolean);
}

function getPassageRows(line, ctx) {
  const allLines = ctx.timeline?.lines ?? [];
  const sameScene = allLines.filter(L => L.scene === line.scene);
  const passageLines = sameScene.length
    ? sameScene
    : allLines.filter(L => L.scene === "passage_normal" || L.scene === "passage_slow");

  const rows = [];
  const seen = new Set();
  for (const L of passageLines) {
    const text = findEnSegment(L.segments).trim();
    const key = normalizeForMatch(text);
    if (!text || seen.has(key)) continue;
    seen.add(key);
    const fallbackIdx = allLines.findIndex(item => item === L);
    const lineIdx = Number.isInteger(L.i) ? L.i : fallbackIdx;
    rows.push({ text, lineIdx });
  }
  if (rows.length) return rows;

  return splitFallbackPassageText(ctx.lesson?.english)
    .map(text => ({ text, lineIdx: -1 }));
}

// ─── Player ────────────────────────────────────────────────
export class SlidePlayer {
  constructor({ stageEl, audioEl, timeline, lesson }) {
    this.stageEl = stageEl;
    this.audioEl = audioEl;
    this.timeline = timeline;
    this.lesson = lesson;
    this.currentIdx = -1;
    this._lastRenderedHtml = "";
    this._singleLinePlayback = null;

    if (this.audioEl) {
      this.audioEl.addEventListener("timeupdate", () => this._tick());
      this.audioEl.addEventListener("seeking", () => this._tick());
      this.audioEl.addEventListener("loadedmetadata", () => this._tick());
      this.audioEl.addEventListener("pause", () => {
        if (this._singleLinePlayback && this.audioEl.currentTime < this._singleLinePlayback.end - 0.08) {
          this._singleLinePlayback = null;
        }
      });
    }
    // 卡拉 OK 句子点击跳读：事件委托
    if (this.stageEl?.addEventListener) {
      this.stageEl.addEventListener("click", (ev) => this._onSentenceClick(ev));
      this.stageEl.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" || ev.key === " ") this._onSentenceClick(ev);
      });
    }
    // 初始渲染
    this._render(0);
  }

  _onSentenceClick(ev) {
    const target = ev.target;
    if (!target || !target.classList?.contains("passage-sent")) return;
    const idx = Number(target.dataset?.lineIdx ?? -1);
    if (!Number.isFinite(idx) || idx < 0) return;
    const line = this.timeline.lines[idx];
    if (!line) return;
    ev.preventDefault();
    if (this.audioEl) {
      const start = Number(line.start);
      const end = Number(line.end);
      this._singleLinePlayback = Number.isFinite(start) && Number.isFinite(end) && end > start
        ? { idx, end }
        : null;
      this.audioEl.currentTime = (Number.isFinite(start) ? start : 0) + 0.05;  // 略前移、确保 _tick 找到这一行
      this.audioEl.play?.().catch(() => {});
    }
    // 同步幻灯（不等 audio 事件）
    this._render(idx);
  }

  _findLineAt(t) {
    const lines = this.timeline.lines;
    // 二分查找
    let lo = 0, hi = lines.length - 1, ans = -1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (lines[mid].start <= t) {
        ans = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    return ans;
  }

  _tick() {
    const t = this.audioEl?.currentTime ?? 0;
    if (this._singleLinePlayback && t >= this._singleLinePlayback.end - 0.03) {
      const { idx, end } = this._singleLinePlayback;
      this._singleLinePlayback = null;
      if (this.audioEl) {
        this.audioEl.pause?.();
        if (Number.isFinite(end)) this.audioEl.currentTime = end;
      }
      if (idx !== this.currentIdx && idx >= 0) this._render(idx);
      return;
    }
    const idx = this._findLineAt(t);
    if (idx !== this.currentIdx && idx >= 0) {
      this._render(idx);
    }
  }

  _render(idx) {
    this.currentIdx = idx;
    const line = this.timeline.lines[idx];
    if (!line) return;

    // 优化 1：连续两个 passage 场景之间只切高亮、不重建 DOM、不重放动画
    // —— 避免卡拉 OK 朗读时每换一句屏幕闪一下
    const isPassageScene = (s) => s === "passage_normal" || s === "passage_slow";
    if (isPassageScene(line.scene) && isPassageScene(this._lastScene)) {
      if (this._updatePassageHighlightOnly(line)) {
        this._lastScene = line.scene;
        return;
      }
    }

    // 优化 2：同一张插画内换台词时只更新文案，不重建 <img>
    // —— 避免 hook / retell 连续台词切换时插画闪烁。
    if (line.scene === "hook" && this._lastScene === "hook") {
      if (this._updateHookTextOnly(line)) {
        this._lastScene = line.scene;
        return;
      }
    }

    const retellFrame = line.scene === "retell" ? Number(line.scene_meta?.frame ?? 1) : null;
    if (line.scene === "retell" && this._lastScene === "retell" && retellFrame === this._lastRetellFrame) {
      if (this._updateRetellNarrationOnly(line)) {
        this._lastScene = line.scene;
        return;
      }
    }

    // 优化 3：同一个 vocab 段（A→B→A）内多行不重渲染——避免 [EN]private[/EN] 时单词卡片闪空
    if (line.scene === "vocab" && this._lastScene === "vocab" &&
        String(line.scene_meta?.word ?? "").toLowerCase() === String(this._lastVocabWord ?? "").toLowerCase() &&
        line.scene_meta?.word) {
      // 只更新 speaker pill（A → B → A 的角色变化）
      this._updateVocabSpeakerOnly(line);
      this._lastScene = line.scene;
      return;
    }

    // 否则：常规重渲染 + 淡入动画
    const renderer = renderers[line.scene] ?? renderers.dialogue;
    const html = renderer(line, { lesson: this.lesson, timeline: this.timeline });
    if (html === this._lastRenderedHtml) {
      this._lastScene = line.scene;
      return;
    }
    this._lastRenderedHtml = html;
    this._lastScene = line.scene;
    this._lastVocabWord = line.scene === "vocab" ? line.scene_meta?.word : null;
    this._lastRetellFrame = line.scene === "retell" ? Number(line.scene_meta?.frame ?? 1) : null;
    // stage--discuss / stage--retell 类用于解除 16:9 锁、给特殊场景独立的 flex 布局
    this.stageEl.classList.toggle("stage--hook", line.scene === "hook");
    this.stageEl.classList.toggle("stage--discuss", line.scene === "discuss");
    this.stageEl.classList.toggle("stage--retell", line.scene === "retell");
    this.stageEl.classList.remove("fade-in");
    void this.stageEl.offsetWidth;  // reflow trigger for animation restart
    this.stageEl.innerHTML = html;
    this.stageEl.classList.add("fade-in");
    // discuss 场景：渲染后把当前消息滚到可见位置（iMessage 行为）
    if (line.scene === "discuss") {
      requestAnimationFrame(() => {
        const cur = this.stageEl.querySelector(".discuss-msg.msg-current");
        if (cur && typeof cur.scrollIntoView === "function") {
          cur.scrollIntoView({ behavior: "smooth", block: "end" });
        }
      });
    }
  }

  // 只更新 hook 台词，保留开场插画 DOM 节点
  _updateHookTextOnly(line) {
    const question = this.stageEl.querySelector(".hook-question");
    if (!question) return false;
    question.innerHTML = joinSegmentsHtml(line.segments);
    return true;
  }

  // 只更新同一 retell frame 的讲解文字，保留插画 DOM 节点
  _updateRetellNarrationOnly(line) {
    const c = CHARACTERS[line.speaker] ?? CHARACTERS.A;
    const pill = this.stageEl.querySelector(".retell-narration .speaker-pill") ||
      this.stageEl.querySelector(".speaker-pill");
    const bubble = this.stageEl.querySelector(".retell-narration .bubble") ||
      this.stageEl.querySelector(".bubble");
    if (!bubble) return false;
    if (pill) {
      pill.dataset.speaker = line.speaker;
      pill.textContent = `${c.emoji} ${c.name}`;
    }
    bubble.innerHTML = joinSegmentsHtml(line.segments);
    return true;
  }

  // 仅更新 vocab 卡片上的 speaker pill（不重建整张卡）
  _updateVocabSpeakerOnly(line) {
    const c = CHARACTERS[line.speaker];
    const pill = this.stageEl.querySelector(".scene-vocab .speaker-pill");
    if (!pill || !c) return;
    pill.dataset.speaker = line.speaker;
    pill.textContent = `${c.emoji} ${c.name}`;
  }

  // 只更新 passage 当前句高亮、不重建 DOM
  _updatePassageHighlightOnly(line) {
    const enText = (line.segments?.find(s => s.lang === "en")?.text ?? "").trim();
    if (!enText) return false;
    const sentEls = this.stageEl.querySelectorAll(".passage-sent");
    if (!sentEls.length) return false;

    let targetIdx = -1;
    for (let i = 0; i < sentEls.length; i++) {
      if (normalizeForMatch(sentEls[i].textContent) === normalizeForMatch(enText)) {
        targetIdx = i;
        break;
      }
    }
    if (targetIdx === -1) return false;

    sentEls.forEach((el, i) => {
      el.classList.remove("past", "current", "future");
      if (i < targetIdx) el.classList.add("past");
      else if (i === targetIdx) el.classList.add("current");
      else el.classList.add("future");
    });
    return true;
  }

  // 沙箱模式：手动翻页
  next() {
    this._singleLinePlayback = null;
    const idx = Math.min(this.currentIdx + 1, this.timeline.lines.length - 1);
    this._render(idx);
    if (this.audioEl) this.audioEl.currentTime = this.timeline.lines[idx].start;
  }
  prev() {
    this._singleLinePlayback = null;
    const idx = Math.max(this.currentIdx - 1, 0);
    this._render(idx);
    if (this.audioEl) this.audioEl.currentTime = this.timeline.lines[idx].start;
  }
  goTo(idx) {
    if (idx < 0 || idx >= this.timeline.lines.length) return;
    this._singleLinePlayback = null;
    this._render(idx);
    if (this.audioEl) this.audioEl.currentTime = this.timeline.lines[idx].start;
  }
}
