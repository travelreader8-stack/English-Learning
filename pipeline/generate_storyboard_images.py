#!/usr/bin/env python3
"""
storyboard.json → 4 帧 WebP（96 课批量）
=========================================

每课读 `pipeline/scripts/lesson_N.storyboard.json`，每帧调一次 vet-school 的
codex_image 模块（gpt-image-2 via ChatGPT OAuth），然后用 Pillow 压成 WebP @ q85。

风格预设固定（不让 Claude 改），保证 96 课 × 4 帧的整套连环画风格统一。

用法：
    python3 pipeline/generate_storyboard_images.py pipeline/scripts/ web/audio/

    # 单课调试
    python3 pipeline/generate_storyboard_images.py pipeline/scripts/ web/audio/ --only 1

    # 续跑（已存在的跳过）
    python3 pipeline/generate_storyboard_images.py pipeline/scripts/ web/audio/ --skip-existing

需要：
    ~/.codex/auth.json 存在（你 Codex CLI 登录过即可）
    Pillow（pip install pillow）

成本：
    96 课 × 4 帧 = 384 张图，每张约 60s，总耗时约 6 小时。
    用你的 Codex/ChatGPT 订阅、$0 边际成本。
"""
from __future__ import annotations

import argparse
import json
import sys
import time
from pathlib import Path

# 复用 vet-school 的 codex_image
VET_WORKFLOWS = Path("/Users/jiangfangming/Library/CloudStorage/GoogleDrive-travelreader8@gmail.com/My Drive/Claude Code/Vet-school New/workflows")
if not VET_WORKFLOWS.exists():
    sys.exit(f"❌ 找不到 vet-school workflows 目录：{VET_WORKFLOWS}")
sys.path.insert(0, str(VET_WORKFLOWS))
from codex_image import generate_image_codex  # type: ignore

try:
    from PIL import Image
except ImportError:
    sys.exit("缺少 Pillow：pip install pillow")

try:
    from tqdm import tqdm
except ImportError:
    def tqdm(x, **k):
        return x


# 风格预设——所有图共用，保证 96 课视觉一致
STYLE_PRESET = (
    "Style: gentle watercolor children's book illustration, "
    "hand-painted texture, warm pastel palette of cream, rose, soft amber and dusty teal, "
    "soft brush strokes, slight grain, painterly composition reminiscent of "
    "mid-century animated film backgrounds. "
    "Characters have simple but expressive faces with kind eyes. "
    "No text, no letters, no captions in the image. "
    "Cinematic frame composition, slightly desaturated, cozy and gentle mood."
)


def render_frame(prompt: str, png_path: Path, webp_path: Path) -> tuple[int, int]:
    """生成 PNG，再压 WebP，删 PNG。返回 (png_kb, webp_kb)。"""
    full_prompt = f"{prompt}\n\n{STYLE_PRESET}"
    generate_image_codex(
        prompt=full_prompt,
        output_path=str(png_path),
        aspect_ratio="16:9",
    )
    png_kb = png_path.stat().st_size // 1024

    with Image.open(png_path) as im:
        im.save(webp_path, "WEBP", quality=85, method=6)
    webp_kb = webp_path.stat().st_size // 1024

    png_path.unlink()  # 留 webp 上传，删原 png
    return png_kb, webp_kb


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("script_dir", type=Path, help="脚本目录（含 *.storyboard.json）")
    ap.add_argument("audio_dir", type=Path, help="WebP 输出目录（如 web/audio/）")
    ap.add_argument("--only", type=int, help="只跑指定 lesson id（调试）")
    ap.add_argument("--skip-existing", action="store_true", help="已存在的 webp 跳过")
    args = ap.parse_args()

    sb_files = sorted(args.script_dir.glob("lesson_*.storyboard.json"))
    if args.only is not None:
        sb_files = [p for p in sb_files if p.name == f"lesson_{args.only}.storyboard.json"]
        if not sb_files:
            sys.exit(f"找不到 lesson_{args.only}.storyboard.json")

    args.audio_dir.mkdir(parents=True, exist_ok=True)

    total_png_kb = 0
    total_webp_kb = 0
    n_frames = 0
    fails: list[tuple[int, int, str]] = []

    for sb_path in tqdm(sb_files, desc="生图"):
        sb = json.loads(sb_path.read_text(encoding="utf-8"))
        lid = sb["lesson_id"]
        for frame in sb["frames"]:
            fnum = frame["frame"]
            png_path = args.audio_dir / f"lesson_{lid}_frame_{fnum}.png"
            webp_path = args.audio_dir / f"lesson_{lid}_frame_{fnum}.webp"
            if args.skip_existing and webp_path.exists():
                continue
            try:
                png_kb, webp_kb = render_frame(frame["prompt"], png_path, webp_path)
                total_png_kb += png_kb
                total_webp_kb += webp_kb
                n_frames += 1
                tqdm.write(f"  L{lid} F{fnum}：PNG {png_kb} KB → WebP {webp_kb} KB")
            except Exception as e:
                fails.append((lid, fnum, str(e)))
                tqdm.write(f"  ❌ L{lid} F{fnum}：{e}")
            time.sleep(1.0)  # 速率友好（codex 内部限速）

    print()
    print(f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    print(f"✅ 共 {n_frames} 帧生成成功")
    if n_frames:
        print(f"   原始 PNG 总大小：{total_png_kb / 1024:.1f} MB")
        print(f"   压缩 WebP 总大小：{total_webp_kb / 1024:.1f} MB（{total_png_kb / total_webp_kb:.1f}× 压缩）")
    if fails:
        print(f"\n❌ 失败 {len(fails)} 帧：{[(L, F) for L, F, _ in fails]}")
        sys.exit(1)


if __name__ == "__main__":
    main()
