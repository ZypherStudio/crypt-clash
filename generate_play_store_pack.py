import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

os.makedirs("play_store_paket", exist_ok=True)

def load_rgba(path, size=None):
    img = Image.open(path).convert("RGBA")
    if size:
        img = img.resize(size, Image.Resampling.NEAREST)
    return img

def remove_black_bg(img, threshold=18):
    img = img.convert("RGBA")
    datas = img.getdata()
    new_data = []
    for item in datas:
        if item[0] < threshold and item[1] < threshold and item[2] < threshold:
            new_data.append((0, 0, 0, 0))
        else:
            new_data.append(item)
    img.putdata(new_data)
    return img

def get_font(size):
    for p in [
        "/System/Library/Fonts/Supplemental/Impact.ttf",
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
    ]:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                pass
    return ImageFont.load_default()

# ---------------------------------------------------------
# 1. 512x512 PLAY STORE ICON & ANDROID MIPMAP ICONS
# ---------------------------------------------------------
icon = Image.new("RGBA", (512, 512), (10, 12, 20, 255))
draw = ImageDraw.Draw(icon)

# Radial dark fantasy glow
for r in range(250, 10, -4):
    alpha = int(180 * (1 - r / 250))
    draw.ellipse([256 - r, 256 - r, 256 + r, 256 + r], fill=(45, 22, 84, alpha))

stage = load_rgba("assets/stage_1.png", (512, 512))
icon = Image.alpha_composite(icon, stage)

# Vignette + Golden border frame
overlay = Image.new("RGBA", (512, 512), (0, 0, 0, 110))
icon = Image.alpha_composite(icon, overlay)

hero = remove_black_bg(load_rgba("assets/hero_front_helm_eternal.png", (380, 380)))
pet = remove_black_bg(load_rgba("assets/pet_dragon.png", (170, 170)))
icon.paste(hero, (66, 86), hero)
icon.paste(pet, (315, 42), pet)

draw = ImageDraw.Draw(icon)
# Ornate gold border
draw.rounded_rectangle([8, 8, 503, 503], radius=80, outline=(251, 191, 36, 255), width=10)
draw.rounded_rectangle([18, 18, 493, 493], radius=72, outline=(120, 53, 15, 220), width=4)

# Title Banner at Bottom
draw.rounded_rectangle([46, 405, 466, 480], radius=18, fill=(15, 23, 42, 235), outline=(251, 191, 36, 255), width=4)
f_title = get_font(44)
draw.text((256, 442), "CRYPT CLASH", font=f_title, fill=(254, 240, 138, 255), anchor="mm")

icon_rgb = icon.convert("RGB")
icon_rgb.save("play_store_paket/icon_512x512.png", "PNG")
icon.save("assets/icon-512.png", "PNG")
icon.resize((192, 192), Image.Resampling.LANCZOS).save("assets/icon-192.png", "PNG")

# Update Android Mipmap Icons
mipmap_sizes = {
    "mipmap-mdpi": 48,
    "mipmap-hdpi": 72,
    "mipmap-xhdpi": 96,
    "mipmap-xxhdpi": 144,
    "mipmap-xxxhdpi": 192,
}
for folder, sz in mipmap_sizes.items():
    target_dir = os.path.join("android/app/src/main/res", folder)
    if os.path.exists(target_dir):
        resized = icon.resize((sz, sz), Image.Resampling.LANCZOS)
        resized.save(os.path.join(target_dir, "ic_launcher.png"), "PNG")
        resized.save(os.path.join(target_dir, "ic_launcher_round.png"), "PNG")
        resized.save(os.path.join(target_dir, "ic_launcher_foreground.png"), "PNG")

# ---------------------------------------------------------
# 2. 1024x500 GOOGLE PLAY FEATURE GRAPHIC (ÖZELLİK GRAFİĞİ)
# ---------------------------------------------------------
fg = Image.new("RGBA", (1024, 500), (9, 13, 22, 255))
bg_left = load_rgba("assets/stage_1.png", (520, 500))
bg_right = load_rgba("assets/dungeon_bg.png", (520, 500))
fg.paste(bg_left, (0, 0))
fg.paste(bg_right, (504, 0))

dark_grad = Image.new("RGBA", (1024, 500), (8, 12, 24, 165))
fg = Image.alpha_composite(fg, dark_grad)

# Characters & Chests
boss_img = remove_black_bg(load_rgba("assets/enemy_boss.png", (360, 360)))
hero_img = remove_black_bg(load_rgba("assets/hero_front_helm_azazel.png", (350, 350)))
phoenix_img = remove_black_bg(load_rgba("assets/pet_phoenix.png", (160, 160)))
chest_img = remove_black_bg(load_rgba("assets/chest_magic.png", (150, 150)))

fg.paste(hero_img, (40, 115), hero_img)
fg.paste(phoenix_img, (265, 65), phoenix_img)
fg.paste(boss_img, (650, 105), boss_img)
fg.paste(chest_img, (445, 315), chest_img)

d_fg = ImageDraw.Draw(fg)
d_fg.rectangle([0, 0, 1023, 499], outline=(251, 191, 36, 255), width=6)

f_big = get_font(68)
f_sub = get_font(26)
f_pill = get_font(20)

# Center Title Plate
d_fg.rounded_rectangle([250, 35, 774, 155], radius=22, fill=(15, 23, 42, 235), outline=(251, 191, 36, 255), width=4)
d_fg.text((512, 82), "CRYPT CLASH", font=f_big, fill=(251, 191, 36, 255), anchor="mm")
d_fg.text((512, 130), "TACTICAL DICE RPG • ONLINE ARENA • 100 FLOORS", font=f_pill, fill=(56, 189, 248, 255), anchor="mm")

# Bottom Feature Badges
badges = [
    ("⚔️ ZAR & TAKTİK SAVAŞ", 220),
    ("🐉 EFSANEVİ PETLER & +BASMA", 512),
    ("🏆 ONLINE PVP & SANDIKLAR", 804),
]
for txt, cx in badges:
    d_fg.rounded_rectangle([cx - 135, 435, cx + 135, 480], radius=12, fill=(30, 41, 59, 240), outline=(148, 163, 184, 200), width=2)
    d_fg.text((cx, 457), txt, font=f_pill, fill=(248, 250, 252, 255), anchor="mm")

fg.convert("RGB").save("play_store_paket/feature_graphic_1024x500.png", "PNG")

# ---------------------------------------------------------
# 3. 4 STORE SCREENSHOTS (1080x1920 PORTRAIT)
# ---------------------------------------------------------
shots = [
    (
        "screenshot_1_combat.png",
        "TAKTİKSEL ZAR SAVAŞLARI",
        "Zarları Eşleştir • Kalkan Kuşan • Bossları Yık!",
        "assets/stage_1.png",
        "assets/knight_back.png",
        "assets/enemy_cobra.png",
        "assets/pet_dragon.png",
    ),
    (
        "screenshot_2_arena_pvp.png",
        "CANLI ONLINE ARENA & PVP",
        "Gerçek Rakiplerle Eşleş • Kupa Yolu Ödüllerini Topla!",
        "assets/dungeon_bg.png",
        "assets/hero_front_helm_eternal.png",
        "assets/hero_front_helm_azazel.png",
        "assets/pet_phoenix.png",
    ),
    (
        "screenshot_3_chests_pets.png",
        "SANDIK AÇILIŞI & EFSANEVİ PETLER",
        "Büyülü Sandıkları Aç • Demirci'de +Bas • Yoldaşını Seç!",
        "assets/stage_1.png",
        "assets/chest_magic.png",
        "assets/chest_gold.png",
        "assets/pet_owl.png",
    ),
    (
        "screenshot_4_worlds_boss.png",
        "10 DÜNYA & 100 ZİNDAN KATI",
        "Sonsuz Kan Kulesi • Klan Boss Baskını • Çevrimdışı Ganimet!",
        "assets/dungeon_bg.png",
        "assets/hero_front_helm_wyrm.png",
        "assets/enemy_boss.png",
        "assets/pet_wolf.png",
    ),
]

for fname, headline, subline, bg_p, c1_p, c2_p, pet_p in shots:
    sc = Image.new("RGBA", (1080, 1920), (9, 13, 22, 255))
    bg_s = load_rgba(bg_p, (1080, 1420))
    sc.paste(bg_s, (0, 260))

    d_sc = ImageDraw.Draw(sc)
    # Top Marketing Header Banner
    d_sc.rectangle([0, 0, 1080, 270], fill=(15, 23, 42, 255))
    d_sc.line([0, 270, 1080, 270], fill=(251, 191, 36, 255), width=6)
    d_sc.text((540, 110), headline, font=get_font(58), fill=(251, 191, 36, 255), anchor="mm")
    d_sc.text((540, 195), subline, font=get_font(32), fill=(226, 232, 240, 255), anchor="mm")

    # Characters showcase
    ch1 = remove_black_bg(load_rgba(c1_p, (480, 480)))
    ch2 = remove_black_bg(load_rgba(c2_p, (500, 500)))
    pt = remove_black_bg(load_rgba(pet_p, (240, 240)))

    sc.paste(ch2, (480, 460), ch2)
    sc.paste(ch1, (80, 880), ch1)
    sc.paste(pt, (720, 960), pt)

    # Bottom HUD Mockup Bar
    d_sc = ImageDraw.Draw(sc)
    d_sc.rounded_rectangle([40, 1520, 1040, 1850], radius=32, fill=(15, 23, 42, 245), outline=(56, 189, 248, 255), width=5)
    d_sc.text((540, 1610), "⚜️ CRYPT CLASH: ZİNDAN DÜELLOSU ⚜️", font=get_font(42), fill=(251, 191, 36, 255), anchor="mm")
    d_sc.text((540, 1700), "🎲 Zar At  •  ⚔️ Saldır  •  🛡️ Kalkan  •  🔥 Öfke Ultisi", font=get_font(32), fill=(56, 189, 248, 255), anchor="mm")
    d_sc.text((540, 1780), "💎 7 Günlük Giriş Takvimi  •  📦 4 Sandık Yuvası  •  🌐 Online Arena", font=get_font(28), fill=(16, 185, 129, 255), anchor="mm")

    sc.convert("RGB").save(os.path.join("play_store_paket", fname), "PNG")

print("Play Store graphics generated successfully!")
