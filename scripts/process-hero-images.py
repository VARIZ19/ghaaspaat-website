#!/usr/bin/env python3
"""Crop and resize hero slideshow images to 4:3 (1200x900)."""

from pathlib import Path
from PIL import Image, ImageOps

SRC = Path(
    r"C:\Users\variz\.cursor\projects\c-Users-variz-Documents-curser\assets"
)
DST = Path(__file__).resolve().parent.parent / "public" / "images" / "hero-slideshow"
TARGET_W, TARGET_H = 1200, 900  # 4:3
TARGET_RATIO = TARGET_W / TARGET_H

SKIP_KEYWORDS = ("ghasssss",)  # website screenshot

NAMES = {
    "9cf116eb": "01-product-bowl.jpg",
    "f67a7147": "02-wooden-bowl.jpg",
    "ba174644": "03-comparison.jpg",
    "605b4ffc": "04-benefits.jpg",
    "23b04481": "05-fresh-pure.jpg",
    "da21d9f3": "06-brand-end.jpg",
    "becb3573": "07-recipe-steps.jpg",
    "7cce7e85": "08-salad-plates.jpg",
}


def smart_crop(img: Image.Image) -> Image.Image:
    w, h = img.size
    current = w / h

    if current > TARGET_RATIO:
        # too wide — crop width
        new_w = int(h * TARGET_RATIO)
        left = (w - new_w) // 2
        img = img.crop((left, 0, left + new_w, h))
    elif current < TARGET_RATIO:
        # too tall — crop height (bias slightly toward top for portraits)
        new_h = int(w / TARGET_RATIO)
        top = max(0, (h - new_h) // 3)  # keep upper portion for vertical promos
        img = img.crop((0, top, w, top + new_h))

    return img.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)


def main():
    DST.mkdir(parents=True, exist_ok=True)
    processed = []

    for src in sorted(SRC.glob("*.png")):
        if any(k in src.name for k in SKIP_KEYWORDS):
            print(f"  skip {src.name}")
            continue

        out_name = None
        for key, name in NAMES.items():
            if key in src.name:
                out_name = name
                break
        if not out_name:
            out_name = f"slide-{len(processed) + 1:02d}.jpg"

        img = Image.open(src).convert("RGB")
        img = ImageOps.exif_transpose(img)
        img = smart_crop(img)
        out_path = DST / out_name
        img.save(out_path, "JPEG", quality=88, optimize=True)
        processed.append(out_name)
        print(f"  {src.name[:40]}... -> {out_name} ({img.size})")

    print(f"\nDone: {len(processed)} images -> {DST}")


if __name__ == "__main__":
    main()
