#!/usr/bin/env python3
"""
Codex Image 烟雾测试
=====================

在跑 96 课 × 4 帧 = 384 张图前，先生成 1 张样图验证：
  1. Codex OAuth 认证 OK（沿用 vet-school 的 ~/.codex/auth.json）
  2. 生图 prompt 出来的视觉风格符合预期
     —— 童书水彩感、温暖暖色调、手绘质感、表情温柔
  3. 16:9 aspect ratio 适合嵌在课件 stage 里

不直接说 "Studio Ghibli" / "宫崎骏"——一是法律稳妥，二是这些 keyword
反而容易让模型偏向"摹仿感"而不是"清新感"。用更通用的水彩童书插画描述。

用法：
    python3 pipeline/test_codex_image.py

产出：
    pipeline/test_codex_image.png       ← 用任何看图工具打开

需要：
    ~/.codex/auth.json 存在（即你 Codex CLI 已登录）
"""
from __future__ import annotations

import sys
from pathlib import Path

# 复用 vet-school 的 codex_image 模块（不重复造轮子）
VET_WORKFLOWS = Path("/Users/jiangfangming/Library/CloudStorage/GoogleDrive-travelreader8@gmail.com/My Drive/Claude Code/Vet-school New/workflows")
if not VET_WORKFLOWS.exists():
    sys.exit(f"❌ 找不到 vet-school workflows 目录：{VET_WORKFLOWS}")

sys.path.insert(0, str(VET_WORKFLOWS))
from codex_image import generate_image_codex  # type: ignore

# ─── 风格基线（每幅图前置）──────────────────────────────
# 这段字符串会和场景描述拼在一起，确保 96 课 × 4 帧的整套连环画风格统一。
STYLE_PRESET = (
    "Style: gentle watercolor children's book illustration, "
    "hand-painted texture, warm pastel palette of cream, rose, soft amber and dusty teal, "
    "soft brush strokes, slight grain, painterly composition reminiscent of "
    "mid-century animated film backgrounds. "
    "Characters have simple but expressive faces with kind eyes. "
    "No text, no letters, no captions in the image. "
    "Cinematic frame composition, slightly desaturated, cozy and gentle mood."
)

# ─── Lesson 1 第 1 帧：剧院全景，戏剧开场 ────────────────
SCENE_PROMPT = (
    "A vintage 1960s British theatre interior at the moment a play is about to begin. "
    "Rows of red velvet seats fill the foreground, the heavy stage curtains are slowly "
    "pulling apart revealing soft warm stage lighting beyond. "
    "Audience members are seated, a man wearing a smart but unassuming suit sits in "
    "a middle row holding a paper program, his expression is calm and curious — "
    "he doesn't yet know the play will be ruined for him. "
    "Cinematic side angle. The chandelier above casts a gentle glow."
)

OUT_PATH = Path(__file__).parent / "test_codex_image.png"


def main() -> None:
    full_prompt = f"{SCENE_PROMPT}\n\n{STYLE_PRESET}"
    print("🎨 正在生成测试样图…\n")
    print(f"  Prompt（前 200 字）：{full_prompt[:200]}…\n")
    print(f"  比例：16:9（适合嵌在课件 stage 里）")
    print(f"  输出：{OUT_PATH}\n")
    print(f"  注意：首次调用约 30-60 秒\n")

    generate_image_codex(
        prompt=full_prompt,
        output_path=str(OUT_PATH),
        aspect_ratio="16:9",
    )

    png_kb = OUT_PATH.stat().st_size // 1024

    # 压缩成 WebP（生产用、Vercel 部署的就是这个）
    from PIL import Image
    webp_path = OUT_PATH.with_suffix(".webp")
    with Image.open(OUT_PATH) as im:
        im.save(webp_path, "WEBP", quality=85, method=6)
    webp_kb = webp_path.stat().st_size // 1024
    ratio = png_kb / webp_kb if webp_kb > 0 else 0

    print()
    print(f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    print(f"✅ PNG（原始）→ {OUT_PATH}（{png_kb} KB）")
    print(f"✅ WebP（部署用）→ {webp_path}（{webp_kb} KB，压缩 {ratio:.1f}× 小）")
    print()
    print("👁 现在打开看一下，重点关注：")
    print("  1. 风格——是否有水彩童书 / 手绘 / 温暖感？")
    print("  2. 构图——剧院场景能不能 self-explanatory？")
    print("  3. 没有文字、字母、标志混在图里？（gpt-image-2 偶尔会偷偷加）")
    print("  4. 像不像「连环画第 1 帧」——有故事感、有留白？")
    print()
    print("满意 → 我开始批量。")
    print("不满意 → 告诉我具体哪里需要调，可能是：")
    print("  - 风格描述（更柔 / 更明亮 / 更童趣 / 更复古）")
    print("  - 构图（拉近 / 拉远 / 换角度）")
    print("  - 色调（更暖 / 更冷 / 高对比）")


if __name__ == "__main__":
    main()
