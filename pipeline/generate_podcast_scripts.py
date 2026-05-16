#!/usr/bin/env python3
"""
NCE2 lessons.json → 96 个 AB 双角色播客脚本
============================================

每课产出一个 markdown 文件 `pipeline/scripts/lesson_N.md`，格式与
vet-school 的 podcast_tts/convert_script.py 输入兼容（SPEAKER:TEXT 行）。

播客结构（每课 7-9 分钟）：
  1. 开场（A，30s）
  2. 课文背景（A+B，1min）
  3. 重点词逐讲（A 主、B 提问，3-4min）
  4. 整段跟读（A 慢读、B 正常，2min）
  5. 中译英要点（A，1min）
  6. 收尾（A，30s）

英文片段在脚本里用 [EN]…[/EN] 包裹，hybrid_tts_render.py 会自动切到英文音色。

用法：
    export ANTHROPIC_API_KEY=sk-...
    python generate_podcast_scripts.py web/data/lessons.json pipeline/scripts/

支持单课调试：
    python generate_podcast_scripts.py web/data/lessons.json pipeline/scripts/ --only 1
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
from pathlib import Path

try:
    from anthropic import Anthropic
except ImportError:
    sys.exit("缺少 anthropic：pip install anthropic")

try:
    from tqdm import tqdm
except ImportError:
    def tqdm(x, **k):
        return x


SYSTEM_PROMPT = """你是一名专业初中英语教研老师，正在为初一英语刚及格水平的学生录制《新概念英语 2》课文精讲播客。

教学理念：**不教单词、不念课文**——而是让英语成为讲故事的工具。播客约 6-8 分钟，分三层：

  Layer 1 — 故事（约 3 分钟）
    ① 钩子（hook，30s 全中文，**B 故事式**）：用一个具体到画面的场景开头、把学生带入主角的处境。
       **硬规则**：
         - ❌ 禁止用「想象一下」「我们今天来看」「这一课讲的是」这类套话开头
         - ✅ 第一句必须是「具体场景细节 / 反常事实 / 一句金句」之一
         - ✅ 100-130 字、3-4 个停顿点、像电影开场白
         - ✅ 末尾用一句话点出今天要拆的文化点 / 反讽点 / 知识点（不剧透答案）
       范例：「剧院里、灯刚熄、戏刚开场——你身后那对情侣开始大声聊天、演员说什么你都听不清。你回头瞪了一眼、没用。再回头、忍不住说了一句。结果对方反呛了一句更狠的、当场把你气傻。60 年前一个英国人、就遇到了这事。今天咱们来看——英国人是怎么把『骂人』包装得跟『道歉』一样礼貌的。」
    ② 故事重现（retell，1 min，中文为主、关键英文穿插，分 4 帧）：A 用自己的口语**重讲**这个故事——不是翻译、不是朗读，是带情绪的口述。这一段会同步显示 4 幅连环画。
    ③ 双人讨论（discuss，约 1 min、11 行 A↔B 交替）：A+B 像播客主持人聊课文。
       **不要每课都用「英式幽默」这一个角度**——下面 5 个角度任选 1-2 个、和课文最贴的：
         1. **风土人情**：节日 / 食物 / 礼仪 / 名字习惯（如 Sunday roast / theatre etiquette）
         2. **历史背景**：事件 / 制度 / 文化典故
         3. **语言哲学**：这个词背后的英式思维 / 中英对比
         4. **流行文化连接**：英剧 / 电影 / 现代俚语 / 网络词（如 Downton Abbey, Sherlock, 躺平类比）
         5. **双关 / 故意曲解**：NCE2 很多笑点不是「礼貌反讽」、而是「故意把对方的话理解成另一个意思」。
            比如 L1 主角说 [EN]I can't hear a word![/EN]（听不见戏）、对方装作他想偷听他们对话、回 [EN]This is a private conversation[/EN]。
            **优先扫描课文里有没有这种「字面 vs 故意误读」的双关、有就一定要点出来**——这是 NCE2 真正的精髓。
       形式：A 抛问题、B 答、A 引出文化点 / 双关、B 顿悟、A 收。**不解释词汇**、只聊"这事好玩在哪"。
       要求：每行中能 inline 一段 [EN]…[/EN]、让学生听到地道英文表达。
    ④ 听原文（passage_normal，30s）：现在才放 NCE2 原段英文（B 学生 normal speed）。学生已懂故事框架 + 笑点、听原文是带着戏感再过一遍。

  Layer 2 — 拆（约 2 分钟）
    ⑤ 重点词（vocab，**只挑 3 个**）：punchline 词、词形规律词、万能短语。每个词必须连一个学生生活里的场景。**不要 12 个词全讲一遍。**
       **教重音用大写音节、不要用 IPA**：
         - ✅ `读 [EN]out-SIDE[/EN]、不是 [EN]OUT-side[/EN]` —— TTS 会自动给大写音节加重音
         - ✅ `[EN]pho-TOG-ra-phy[/EN]` —— 三音节词同理
         - ❌ `读 /aʊtˈsaɪd/、不是 /ˈaʊtsaɪd/` —— Azure 神经声音会忽略 IPA 重音标记
       **教元音 / 个别音素差异、用 IPA**：`/aɪ/` `/i/` `/ʌ/` 这种**短**音标可以、TTS 能区分。
    ⑥ 语法点（grammar，1 个）：从课文里挑 1 个最有用的语法点，**用「为什么这么说」的解释**而不是规则背诵。
       语法对比里的 `was/were`、`am/is/are`、`a/an`、`he/she/it` 等斜杠直连写法、TTS 自动加 280ms 停顿、不必特殊处理。

  Layer 3 — 生活场景（约 1 分钟）
    ⑦ 我们生活的场景（you_too）：A 抛一个个性化问题让学生把今天课文的情绪带入到自己的真实生活，A 给一个示范回答，提示学生「下面练习里输入」。

  收尾
    ⑧ 收尾（outro，30s）：鼓励一句、提示进入练习。

播客同时作为动态视觉课件播放——脚本里的 ## SCENE 标记驱动前端切换连环画 / 单词卡 / 语法卡 / 收尾页。

你的输出必须是**严格 JSON**，不要 markdown 代码块、不要 ```json 标记、不要前言。直接以 `{` 开头，以 `}` 结尾。

【输出 JSON Schema】
{
  "script": "完整脚本字符串，下面会展开规则",
  "storyboard": [
    {"frame": 1, "prompt": "第 1 帧的视觉描述（英文，会拼接固定风格预设）"},
    {"frame": 2, "prompt": "..."},
    {"frame": 3, "prompt": "..."},
    {"frame": 4, "prompt": "..."}
  ],
  "you_too": {
    "question": "A 老师抛的个性化问题，1-2 句中文",
    "example_answer": "A 老师的示范回答，1-2 句话，中英混合",
    "options": <见下>
  }
}

【script 字段格式】
- 行格式：每行 `A: <内容>` 或 `B: <内容>`
- 场景标记：行首 `## SCENE: <type>` 切场景；type 必须是以下之一：
    - hook                — 开场钩子（必须、仅一次、纯中文、A 一段）
    - retell frame=N      — 故事重现的第 N 帧（N=1,2,3,4，**必须出现 4 个 retell 段、各对应 1 帧**）
    - discuss             — 双人播客对话聊课文笑点（必须、A↔B 交替 8-10 行、抓英式幽默 / 反讽 / 文化亮点、不解释词汇）
    - passage_normal      — NCE2 原段（每句一行 `B: [EN]<sentence>[/EN]`）
    - vocab word=<lower>  — 重点词卡（**只输出 3 个 vocab 段、按你挑选的顺序**）
    - grammar             — 语法点（A 一段，1 个语法点）
    - you_too             — A 抛问题 + 给示范（A 两段：先问题、再示范）
    - outro               — 收尾（必须、仅一次、A 一段）
- 中文讲解为主，英文片段必须 [EN]…[/EN] 包裹（音频会切英文音色）
- 「Lesson 1 / Page 5 / Unit 3」这种英文+数字组合**不必手动包 [EN]**，渲染器会自动处理
- 不要编造课文没有的内容，不要给学生留作业

【storyboard.prompt 字段格式】
- 全英文（OpenAI 图像模型对英文 prompt 更可控）
- 不要写 "in the style of Studio Ghibli"——风格预设由渲染器统一拼接
- 描述 4 个连贯的「电影分镜」，主角同人、场景同地点、连环画式叙事
- 每帧 1-2 句、聚焦一个动作或情绪瞬间
- 不要在画面里加文字、字母、字幕

【you_too.options 字段格式】
- 如果 lesson_id ≤ 5：必须输出 4 个选项的数组（脚手架最足）
    [
      {"label": "A", "scenario_zh": "...生活化场景中文...", "english_phrase": "I got angry"},
      {"label": "B", ...},
      {"label": "C", ...},
      {"label": "D", "scenario_zh": "自己写一句", "english_phrase": null}
    ]
    前 3 个是预写好的场景（覆盖学生可能经历的不同情形），第 4 个固定是「自己写」。
- 如果 lesson_id ≥ 6：options 字段为 null（开放式问题、学生自由作答）
"""


def build_user_prompt(lesson: dict) -> str:
    has_options = lesson["id"] <= 5
    options_note = (
        "由于 lesson_id ≤ 5，you_too.options **必须**输出 4 个选项（前 3 个预写场景 + 第 4 个「自己写」）。"
        if has_options else
        "由于 lesson_id ≥ 6，you_too.options **必须**为 null（开放式自由作答）。"
    )
    return f"""【课文信息】
Lesson {lesson['id']} — {lesson['title']}

【英文原文】
{lesson['english']}

【中文译文】
{lesson['chinese']}

【全部重点词】
{', '.join(lesson.get('keywords', []))}

【你呢」选项规则】
{options_note}

请按系统指令直接输出 JSON 对象（不要 ```json 代码块、不要任何解释文字）。"""


def generate_one(client: Anthropic, lesson: dict, model: str = "claude-opus-4-7") -> dict:
    """返回结构化字典 {script, storyboard, you_too}"""
    msg = client.messages.create(
        model=model,
        max_tokens=6000,
        system=SYSTEM_PROMPT,
        messages=[{"role": "user", "content": build_user_prompt(lesson)}],
    )
    parts = []
    for block in msg.content:
        if getattr(block, "type", None) == "text":
            parts.append(block.text)
    raw = "\n".join(parts).strip()
    # 容错：万一模型仍包了 ```json … ```，剥掉
    if raw.startswith("```"):
        raw = re.sub(r"^```(?:json)?\s*\n", "", raw)
        raw = re.sub(r"\n```\s*$", "", raw)
    try:
        return json.loads(raw)
    except json.JSONDecodeError as e:
        raise RuntimeError(f"模型输出不是合法 JSON：{e}\n原始前 500 字：\n{raw[:500]}")


VALID_SCENES = {"hook", "retell", "discuss", "passage_normal", "vocab", "grammar", "you_too", "outro"}


def validate_payload(payload: dict, lesson_id: int) -> list[str]:
    """返回错误列表，空 = OK"""
    errors = []

    # 顶层结构
    for key in ("script", "storyboard", "you_too"):
        if key not in payload:
            errors.append(f"缺顶层字段 {key!r}")
    if errors:
        return errors

    # script 字段
    text = payload["script"]
    if not isinstance(text, str) or not text.strip():
        errors.append("script 字段空或非字符串")
        return errors

    lines = [ln for ln in text.splitlines() if ln.strip()]
    scene_heads = []
    speech_lines = []
    for i, ln in enumerate(lines):
        s = ln.lstrip()
        if s.startswith("## SCENE:") or s.startswith("##SCENE:"):
            scene_heads.append((i, s))
        elif s.startswith("<!--") and s.endswith("-->"):
            continue
        else:
            speech_lines.append((i, ln))

    if not scene_heads:
        errors.append("script 缺少 ## SCENE: 标记")

    scene_types_seen = []
    retell_frames_seen = []
    vocab_count = 0
    for line_no, head in scene_heads:
        body = head.split(":", 1)[1].strip() if ":" in head else ""
        if not body:
            errors.append(f"script 第 {line_no + 1} 行 SCENE 头无类型")
            continue
        parts = body.split()
        scene_type = parts[0]
        if scene_type not in VALID_SCENES:
            errors.append(f"script 第 {line_no + 1} 行 SCENE 类型非法：{scene_type}")
        scene_types_seen.append(scene_type)
        kv = dict(p.split("=", 1) for p in parts[1:] if "=" in p)
        if scene_type == "retell":
            if "frame" not in kv:
                errors.append(f"script 第 {line_no + 1} 行 retell 缺 frame=N")
            else:
                try:
                    retell_frames_seen.append(int(kv["frame"]))
                except ValueError:
                    errors.append(f"script 第 {line_no + 1} 行 frame 不是数字：{kv['frame']}")
        if scene_type == "vocab":
            vocab_count += 1
            if "word" not in kv:
                errors.append(f"script 第 {line_no + 1} 行 vocab 缺 word=<lower>")

    bad = [i for i, ln in speech_lines if not ln.lstrip().startswith(("A:", "B:", "A：", "B："))]
    if bad:
        errors.append(f"script 有 {len(bad)} 行非 A:/B:/SCENE 头（首处第 {bad[0] + 1} 行）")

    if "[EN]" not in text or "[/EN]" not in text:
        errors.append("script 缺 [EN]…[/EN] 标记")
    en_open = text.count("[EN]")
    en_close = text.count("[/EN]")
    if en_open != en_close:
        errors.append(f"script 的 [EN] 标记不平衡：{en_open} vs {en_close}")

    for required in ("hook", "discuss", "outro", "you_too"):
        if required not in scene_types_seen:
            errors.append(f"script 缺 {required} 场景")

    if sorted(retell_frames_seen) != [1, 2, 3, 4]:
        errors.append(f"script 的 retell frames 不齐：{sorted(retell_frames_seen)}（应为 [1,2,3,4]）")

    if vocab_count != 3:
        errors.append(f"script 只能有 3 个 vocab 段（实际 {vocab_count}）")

    # storyboard 字段
    sb = payload["storyboard"]
    if not isinstance(sb, list) or len(sb) != 4:
        errors.append(f"storyboard 必须是 4 元素数组（实际 {type(sb).__name__} 长度 {len(sb) if isinstance(sb, list) else 'N/A'}）")
    else:
        for i, frame in enumerate(sb, 1):
            if not isinstance(frame, dict):
                errors.append(f"storyboard 第 {i} 项不是 object")
                continue
            if frame.get("frame") != i:
                errors.append(f"storyboard 第 {i} 项 frame 字段不为 {i}")
            if not frame.get("prompt") or not isinstance(frame["prompt"], str):
                errors.append(f"storyboard 第 {i} 项 prompt 字段空或非字符串")

    # you_too 字段
    yt = payload["you_too"]
    if not isinstance(yt, dict):
        errors.append("you_too 必须是 object")
    else:
        if not yt.get("question") or not isinstance(yt["question"], str):
            errors.append("you_too.question 空或非字符串")
        if not yt.get("example_answer") or not isinstance(yt["example_answer"], str):
            errors.append("you_too.example_answer 空或非字符串")
        opts = yt.get("options")
        if lesson_id <= 5:
            if not isinstance(opts, list) or len(opts) != 4:
                errors.append(f"lesson {lesson_id} ≤ 5、you_too.options 必须是 4 元素数组")
            else:
                for i, opt in enumerate(opts):
                    if not isinstance(opt, dict):
                        errors.append(f"you_too.options[{i}] 不是 object")
                        continue
                    if not opt.get("label"):
                        errors.append(f"you_too.options[{i}] 缺 label")
                    if not opt.get("scenario_zh"):
                        errors.append(f"you_too.options[{i}] 缺 scenario_zh")
                    # english_phrase 可以为 null（最后一个「自己写」）
        else:
            if opts not in (None, []):
                errors.append(f"lesson {lesson_id} ≥ 6、you_too.options 必须为 null（实际 {type(opts).__name__}）")

    return errors


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("lessons", type=Path, help="lessons.json 路径")
    ap.add_argument("out_dir", type=Path, help="脚本输出目录（如 pipeline/scripts/）")
    ap.add_argument("--only", type=int, help="只跑指定 lesson id（调试）")
    ap.add_argument("--model", default="claude-opus-4-7", help="Claude 模型 ID")
    ap.add_argument("--skip-existing", action="store_true", help="已存在的脚本跳过")
    args = ap.parse_args()

    if not os.environ.get("ANTHROPIC_API_KEY"):
        sys.exit("环境变量 ANTHROPIC_API_KEY 未设置")

    lessons = json.loads(args.lessons.read_text(encoding="utf-8"))
    if args.only is not None:
        lessons = [L for L in lessons if L["id"] == args.only]
        if not lessons:
            sys.exit(f"找不到 lesson id={args.only}")

    args.out_dir.mkdir(parents=True, exist_ok=True)
    client = Anthropic()

    # you_too 文件直接写到前端能直接 fetch 的位置
    you_too_dir = args.out_dir.parent.parent / "web" / "data" / "you_too"
    you_too_dir.mkdir(parents=True, exist_ok=True)

    fails = []
    for L in tqdm(lessons, desc="生成脚本"):
        script_path = args.out_dir / f"lesson_{L['id']}.script.md"
        sb_path = args.out_dir / f"lesson_{L['id']}.storyboard.json"
        yt_path = you_too_dir / f"lesson_{L['id']}.json"
        if args.skip_existing and script_path.exists() and sb_path.exists() and yt_path.exists():
            continue

        try:
            payload = generate_one(client, L, model=args.model)
        except Exception as e:
            fails.append((L["id"], str(e)))
            print(f"\n❌ Lesson {L['id']} 失败：{e}")
            continue

        errs = validate_payload(payload, L["id"])
        if errs:
            print(f"\n⚠️  Lesson {L['id']} 校验有问题（仍写出供人工查）：")
            for er in errs:
                print(f"    - {er}")

        # 三件套各写一个文件
        front = f"<!-- Lesson {L['id']} — {L['title']} -->\n<!-- 自动生成、可以人工编辑后再交给 hybrid_tts_render.py -->\n\n"
        script_path.write_text(front + payload.get("script", ""), encoding="utf-8")
        sb_path.write_text(json.dumps({
            "lesson_id": L["id"],
            "title": L["title"],
            "frames": payload.get("storyboard", []),
        }, ensure_ascii=False, indent=2), encoding="utf-8")
        yt_path.write_text(json.dumps({
            "lesson_id": L["id"],
            "title": L["title"],
            **payload.get("you_too", {}),
        }, ensure_ascii=False, indent=2), encoding="utf-8")

        time.sleep(0.3)  # 速率友好

    if fails:
        print(f"\n❌ 失败 {len(fails)} 课：{[f[0] for f in fails]}")
        sys.exit(1)
    print(f"\n✅ 全部完成 → {args.out_dir}")
    print(f"   每课 3 个文件：lesson_N.script.md / .storyboard.json / .you_too.json")


if __name__ == "__main__":
    main()
