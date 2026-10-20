import os
from PIL import Image, ImageDraw

def make_pixel_art(draw_func, base_w=64, base_h=64, scale=2):
    base = Image.new("RGBA", (base_w, base_h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(base)
    draw_func(draw, base_w, base_h)
    # Scale up with nearest neighbor for crisp pixel art
    scaled = base.resize((base_w * scale, base_h * scale), Image.NEAREST)
    return scaled

# 1. DRAGON PET
def draw_dragon(d, w, h):
    # Colors
    c_dark_outline = (35, 10, 15, 255)
    c_red_dark = (153, 27, 27, 255)
    c_red_mid = (220, 38, 38, 255)
    c_red_bright = (248, 113, 113, 255)
    c_belly = (251, 191, 36, 255)
    c_belly_shadow = (217, 119, 6, 255)
    c_eye = (254, 240, 138, 255)
    c_eye_slit = (20, 5, 5, 255)
    c_horn = (245, 158, 11, 255)
    c_horn_shadow = (180, 83, 9, 255)
    c_wing_web = (249, 115, 22, 240)
    c_wing_bone = (127, 29, 29, 255)
    c_flame = (253, 224, 71, 220)
    c_flame_core = (255, 255, 255, 255)

    # Wings (Left & Right)
    # Left wing
    d.polygon([(14, 26), (4, 14), (18, 16), (26, 24)], fill=c_wing_bone)
    d.polygon([(5, 15), (12, 10), (19, 15), (20, 24), (12, 23)], fill=c_wing_web)
    d.polygon([(11, 10), (22, 6), (28, 18), (22, 22)], fill=c_wing_web)
    # Right wing
    d.polygon([(50, 26), (60, 14), (46, 16), (38, 24)], fill=c_wing_bone)
    d.polygon([(59, 15), (52, 10), (45, 15), (44, 24), (52, 23)], fill=c_wing_web)
    d.polygon([(53, 10), (42, 6), (36, 18), (42, 22)], fill=c_wing_web)

    # Tail with fiery tip
    d.polygon([(32, 46), (26, 52), (20, 50), (16, 56)], fill=c_red_dark)
    d.polygon([(26, 50), (21, 49), (18, 54)], fill=c_red_mid)
    # Tail flame
    d.ellipse([12, 52, 18, 58], fill=c_flame)
    d.ellipse([14, 54, 16, 56], fill=c_flame_core)

    # Body
    d.ellipse([22, 28, 42, 48], fill=c_dark_outline)
    d.ellipse([23, 29, 41, 47], fill=c_red_mid)
    d.ellipse([24, 30, 39, 45], fill=c_red_bright)

    # Amber Belly scales
    d.ellipse([27, 34, 37, 46], fill=c_belly_shadow)
    d.ellipse([28, 35, 36, 44], fill=c_belly)
    for y in (36, 39, 42):
        d.line([(28, y), (36, y)], fill=c_belly_shadow)

    # Feet / claws
    d.polygon([(24, 46), (21, 51), (27, 51)], fill=c_horn)
    d.polygon([(38, 46), (35, 51), (41, 51)], fill=c_horn)

    # Head
    d.ellipse([24, 14, 40, 30], fill=c_dark_outline)
    d.ellipse([25, 15, 39, 29], fill=c_red_mid)
    d.ellipse([26, 16, 38, 27], fill=c_red_bright)

    # Horns
    d.polygon([(27, 16), (20, 8), (29, 12)], fill=c_horn_shadow)
    d.polygon([(26, 15), (21, 9), (28, 12)], fill=c_horn)
    d.polygon([(37, 16), (44, 8), (35, 12)], fill=c_horn_shadow)
    d.polygon([(38, 15), (43, 9), (36, 12)], fill=c_horn)

    # Snout
    d.ellipse([28, 21, 36, 28], fill=c_red_mid)
    d.point([(30, 24), (34, 24)], fill=c_dark_outline)

    # Eyes (glowing slit eyes)
    d.ellipse([27, 18, 31, 23], fill=c_eye)
    d.line([(29, 18), (29, 22)], fill=c_eye_slit)
    d.ellipse([33, 18, 37, 23], fill=c_eye)
    d.line([(35, 18), (35, 22)], fill=c_eye_slit)

    # Small flame ember breath
    d.ellipse([31, 26, 34, 29], fill=c_flame)
    d.point([(32, 27)], fill=c_flame_core)

# 2. WOLF PET (Shadow Spirit Fenrir)
def draw_wolf(d, w, h):
    c_out = (15, 10, 30, 255)
    c_dark = (30, 27, 75, 255)
    c_mid = (67, 56, 202, 255)
    c_light = (129, 140, 248, 255)
    c_cyan = (56, 189, 248, 255)
    c_cyan_glow = (165, 243, 252, 255)
    c_white = (255, 255, 255, 255)

    # Ghostly shadow aura tail
    for i in range(5):
        d.ellipse([14 + i*2, 40 + i*2, 26 + i*2, 52 + i*2], fill=(99, 102, 241, 100 - i*18))
    d.polygon([(28, 42), (18, 48), (12, 40), (18, 36)], fill=c_mid)
    d.polygon([(18, 46), (14, 41), (19, 38)], fill=c_light)

    # Body
    d.ellipse([22, 28, 44, 50], fill=c_out)
    d.ellipse([23, 29, 43, 49], fill=c_dark)
    d.ellipse([25, 30, 41, 47], fill=c_mid)

    # Chest ruff / mane (spirit fur)
    d.polygon([(26, 28), (32, 40), (38, 28)], fill=c_light)
    d.polygon([(29, 30), (32, 38), (35, 30)], fill=c_cyan_glow)

    # Legs & spirit mist paws
    d.rectangle([25, 45, 29, 53], fill=c_dark)
    d.ellipse([23, 50, 31, 56], fill=(56, 189, 248, 180))
    d.rectangle([37, 45, 41, 53], fill=c_dark)
    d.ellipse([35, 50, 43, 56], fill=(56, 189, 248, 180))

    # Head
    d.polygon([(22, 22), (42, 22), (32, 36)], fill=c_out)
    d.polygon([(23, 23), (41, 23), (32, 35)], fill=c_dark)
    d.ellipse([25, 14, 39, 28], fill=c_dark)
    d.ellipse([26, 15, 38, 27], fill=c_mid)

    # Pointed wolf ears
    d.polygon([(25, 16), (21, 6), (29, 13)], fill=c_out)
    d.polygon([(26, 15), (22, 8), (28, 13)], fill=c_mid)
    d.polygon([(26, 14), (24, 10), (27, 13)], fill=c_cyan)

    d.polygon([(39, 16), (43, 6), (35, 13)], fill=c_out)
    d.polygon([(38, 15), (42, 8), (36, 13)], fill=c_mid)
    d.polygon([(38, 14), (40, 10), (37, 13)], fill=c_cyan)

    # Muzzle & Nose
    d.polygon([(29, 22), (35, 22), (32, 29)], fill=c_dark)
    d.ellipse([30, 26, 34, 29], fill=c_cyan)

    # Glowing eyes
    d.ellipse([27, 17, 30, 21], fill=c_cyan)
    d.point([(28, 18)], fill=c_white)
    d.ellipse([34, 17, 37, 21], fill=c_cyan)
    d.point([(35, 18)], fill=c_white)

# 3. OWL PET (Ancient Rune Horned Owl)
def draw_owl(d, w, h):
    c_out = (15, 23, 42, 255)
    c_dark = (30, 41, 59, 255)
    c_mid = (51, 65, 85, 255)
    c_teal = (14, 116, 144, 255)
    c_cyan = (6, 182, 212, 255)
    c_cyan_bright = (103, 232, 249, 255)
    c_gold = (245, 158, 11, 255)

    # Body
    d.ellipse([21, 24, 43, 50], fill=c_out)
    d.ellipse([22, 25, 42, 49], fill=c_dark)
    d.ellipse([24, 26, 40, 47], fill=c_mid)

    # Wing folds
    d.ellipse([18, 27, 27, 45], fill=c_out)
    d.ellipse([19, 28, 26, 44], fill=c_teal)
    d.ellipse([37, 27, 46, 45], fill=c_out)
    d.ellipse([38, 28, 45, 44], fill=c_teal)

    # Rune patterns on chest
    d.line([(32, 30), (32, 44)], fill=c_cyan_bright, width=1)
    d.line([(28, 35), (36, 35)], fill=c_cyan_bright, width=1)
    d.line([(29, 41), (35, 41)], fill=c_cyan, width=1)

    # Head
    d.ellipse([22, 12, 42, 29], fill=c_out)
    d.ellipse([23, 13, 41, 28], fill=c_dark)
    d.ellipse([24, 14, 40, 27], fill=c_mid)

    # Horn tufts
    d.polygon([(25, 14), (20, 5), (28, 11)], fill=c_out)
    d.polygon([(26, 13), (21, 7), (27, 11)], fill=c_teal)
    d.polygon([(39, 14), (44, 5), (36, 11)], fill=c_out)
    d.polygon([(38, 13), (43, 7), (37, 11)], fill=c_teal)

    # Big glowing magical owl eyes (spectacles)
    d.ellipse([24, 15, 32, 23], fill=c_cyan)
    d.ellipse([26, 17, 30, 21], fill=(255, 255, 255, 255))
    d.ellipse([32, 15, 40, 23], fill=c_cyan)
    d.ellipse([34, 17, 38, 21], fill=(255, 255, 255, 255))

    # Golden beak
    d.polygon([(30, 21), (34, 21), (32, 26)], fill=c_gold)

    # Golden talons
    d.polygon([(26, 48), (24, 53), (28, 53)], fill=c_gold)
    d.polygon([(36, 48), (34, 53), (38, 53)], fill=c_gold)

# 4. PHOENIX PET (Solar Flame Phoenix)
def draw_phoenix(d, w, h):
    c_out = (69, 10, 10, 255)
    c_crimson = (185, 28, 28, 255)
    c_orange = (234, 88, 12, 255)
    c_gold = (250, 204, 21, 255)
    c_yellow = (254, 240, 138, 255)
    c_white = (255, 255, 255, 255)

    # Flaming tail ribbons
    d.polygon([(30, 46), (22, 58), (28, 56), (32, 46)], fill=c_orange)
    d.polygon([(23, 56), (20, 62), (25, 60)], fill=c_gold)
    d.polygon([(34, 46), (42, 58), (36, 56), (32, 46)], fill=c_orange)
    d.polygon([(41, 56), (44, 62), (39, 60)], fill=c_gold)
    d.polygon([(31, 46), (32, 63), (33, 46)], fill=c_yellow)

    # Expansive flaming wings
    # Left wing feathers
    d.polygon([(26, 26), (8, 14), (16, 22), (12, 28), (24, 36)], fill=c_crimson)
    d.polygon([(10, 16), (18, 22), (14, 26), (24, 32)], fill=c_orange)
    d.polygon([(14, 18), (20, 24), (24, 30)], fill=c_gold)

    # Right wing feathers
    d.polygon([(38, 26), (56, 14), (48, 22), (52, 28), (40, 36)], fill=c_crimson)
    d.polygon([(54, 16), (46, 22), (50, 26), (40, 32)], fill=c_orange)
    d.polygon([(50, 18), (44, 24), (40, 30)], fill=c_gold)

    # Body
    d.ellipse([25, 24, 39, 46], fill=c_out)
    d.ellipse([26, 25, 38, 45], fill=c_crimson)
    d.ellipse([28, 26, 36, 43], fill=c_orange)
    d.ellipse([29, 28, 35, 40], fill=c_gold)

    # Head & Crown feathers
    d.ellipse([27, 12, 37, 24], fill=c_out)
    d.ellipse([28, 13, 36, 23], fill=c_orange)
    d.ellipse([29, 14, 35, 21], fill=c_gold)

    # Fire Crest
    d.polygon([(30, 13), (25, 4), (32, 9)], fill=c_orange)
    d.polygon([(32, 12), (32, 2), (34, 9)], fill=c_gold)
    d.polygon([(34, 13), (39, 4), (33, 9)], fill=c_orange)

    # Golden sharp beak
    d.polygon([(30, 19), (34, 19), (32, 24)], fill=c_gold)

    # Glowing eyes
    d.ellipse([28, 15, 31, 18], fill=c_yellow)
    d.point([(29, 16)], fill=c_out)
    d.ellipse([33, 15, 36, 18], fill=c_yellow)
    d.point([(34, 16)], fill=c_out)

# 5. WOOD CHEST
def draw_chest_wood(d, w, h):
    c_out = (25, 18, 12, 255)
    c_wood_dark = (78, 42, 18, 255)
    c_wood_mid = (133, 77, 34, 255)
    c_wood_light = (180, 115, 57, 255)
    c_iron = (55, 65, 81, 255)
    c_iron_light = (107, 114, 128, 255)
    c_lock = (217, 119, 6, 255)

    # Base Chest Bottom
    d.rectangle([10, 28, 54, 52], fill=c_out)
    d.rectangle([12, 30, 52, 50], fill=c_wood_mid)

    # Wood planks lines
    d.line([(12, 37), (52, 37)], fill=c_wood_dark, width=1)
    d.line([(12, 44), (52, 44)], fill=c_wood_dark, width=1)

    # Curved Chest Lid
    d.polygon([(10, 28), (14, 14), (50, 14), (54, 28)], fill=c_out)
    d.polygon([(12, 27), (16, 16), (48, 16), (52, 27)], fill=c_wood_mid)
    d.line([(17, 21), (47, 21)], fill=c_wood_light, width=1)

    # Iron Bands (Left, Center, Right)
    for bx in (14, 46):
        d.rectangle([bx, 15, bx+4, 50], fill=c_iron)
        d.line([(bx+1, 15), (bx+1, 50)], fill=c_iron_light)
        # Rivets
        d.point([(bx+2, 18), (bx+2, 32), (bx+2, 46)], fill=(200, 200, 200, 255))

    # Center Iron Clasp & Padlock
    d.rectangle([29, 24, 35, 38], fill=c_iron)
    d.ellipse([28, 30, 36, 38], fill=c_lock)
    d.point([(32, 34)], fill=c_out)

# 6. SILVER CHEST
def draw_chest_silver(d, w, h):
    c_out = (15, 23, 42, 255)
    c_steel_dark = (71, 85, 105, 255)
    c_steel_mid = (148, 163, 184, 255)
    c_steel_light = (226, 232, 240, 255)
    c_blue_trim = (30, 58, 138, 255)
    c_gem = (56, 189, 248, 255)
    c_gem_glow = (224, 242, 254, 255)

    # Chest Body
    d.rectangle([10, 28, 54, 52], fill=c_out)
    d.rectangle([12, 30, 52, 50], fill=c_steel_mid)

    # Blue velvet inlay
    d.rectangle([18, 32, 46, 48], fill=c_blue_trim)

    # Lid
    d.polygon([(10, 28), (14, 14), (50, 14), (54, 28)], fill=c_out)
    d.polygon([(12, 27), (16, 16), (48, 16), (52, 27)], fill=c_steel_mid)
    d.polygon([(20, 25), (22, 18), (42, 18), (44, 25)], fill=c_blue_trim)

    # Polished Silver Trim Bands
    for bx in (12, 48):
        d.rectangle([bx, 15, bx+4, 50], fill=c_steel_light)
        d.point([(bx+2, 20), (bx+2, 35), (bx+2, 45)], fill=c_out)

    d.line([(12, 28), (52, 28)], fill=c_steel_light, width=2)

    # Glowing Blue Gem Lock
    d.ellipse([27, 26, 37, 36], fill=c_out)
    d.ellipse([28, 27, 36, 35], fill=c_steel_light)
    d.polygon([(32, 27), (35, 31), (32, 35), (29, 31)], fill=c_gem)
    d.point([(32, 31)], fill=c_gem_glow)

# 7. GOLD CHEST
def draw_chest_gold(d, w, h):
    c_out = (45, 20, 5, 255)
    c_gold_dark = (180, 83, 9, 255)
    c_gold_mid = (245, 158, 11, 255)
    c_gold_light = (253, 224, 71, 255)
    c_ruby_dark = (153, 27, 27, 255)
    c_ruby = (239, 68, 68, 255)
    c_ruby_glint = (254, 202, 202, 255)

    # Body
    d.rectangle([10, 28, 54, 52], fill=c_out)
    d.rectangle([12, 30, 52, 50], fill=c_gold_dark)
    d.rectangle([18, 33, 46, 47], fill=(120, 53, 15, 255))

    # Lid
    d.polygon([(10, 28), (14, 14), (50, 14), (54, 28)], fill=c_out)
    d.polygon([(12, 27), (16, 16), (48, 16), (52, 27)], fill=c_gold_mid)
    d.polygon([(20, 25), (23, 18), (41, 18), (44, 25)], fill=c_gold_dark)

    # Golden Filigree corners
    for bx in (12, 47):
        d.rectangle([bx, 15, bx+5, 50], fill=c_gold_light)
        d.line([(bx+1, 15), (bx+1, 50)], fill=(255, 255, 255, 255))

    d.line([(12, 28), (52, 28)], fill=c_gold_light, width=2)

    # Ruby Lock with golden frame
    d.ellipse([27, 25, 37, 37], fill=c_gold_light)
    d.ellipse([29, 27, 35, 35], fill=c_ruby_dark)
    d.ellipse([30, 28, 34, 34], fill=c_ruby)
    d.point([(31, 29)], fill=c_ruby_glint)

# 8. MAGIC CHEST (Arcane Cosmic Violet)
def draw_chest_magic(d, w, h):
    c_out = (25, 10, 40, 255)
    c_obsidian = (40, 20, 60, 255)
    c_purple = (126, 34, 206, 255)
    c_purple_light = (192, 132, 252, 255)
    c_cyan = (56, 189, 248, 255)
    c_star = (255, 255, 255, 255)

    # Ethereal mist under chest
    d.ellipse([14, 48, 50, 56], fill=(147, 51, 234, 90))

    # Body
    d.rectangle([10, 28, 54, 52], fill=c_out)
    d.rectangle([12, 30, 52, 50], fill=c_obsidian)

    # Rune plate inlay
    d.rectangle([18, 32, 46, 48], fill=c_purple)

    # Lid
    d.polygon([(10, 28), (14, 14), (50, 14), (54, 28)], fill=c_out)
    d.polygon([(12, 27), (16, 16), (48, 16), (52, 27)], fill=c_obsidian)
    d.polygon([(20, 25), (23, 18), (41, 18), (44, 25)], fill=c_purple)

    # Glowing Arcane Rune Borders
    for bx in (12, 47):
        d.rectangle([bx, 15, bx+5, 50], fill=c_purple_light)
        # Glowing runes
        d.line([(bx+2, 20), (bx+2, 24)], fill=c_cyan)
        d.line([(bx+2, 34), (bx+2, 38)], fill=c_cyan)
        d.line([(bx+2, 44), (bx+2, 48)], fill=c_cyan)

    d.line([(12, 28), (52, 28)], fill=c_cyan, width=2)

    # Cosmic Star Lock
    d.ellipse([27, 25, 37, 37], fill=c_purple_light)
    d.ellipse([29, 27, 35, 35], fill=c_cyan)
    d.polygon([(32, 27), (34, 31), (32, 35), (30, 31)], fill=c_star)
    d.polygon([(28, 31), (32, 33), (36, 31), (32, 29)], fill=c_star)

# Generate and save all 8 assets
sprites = {
    "assets/pet_dragon.png": draw_dragon,
    "assets/pet_wolf.png": draw_wolf,
    "assets/pet_owl.png": draw_owl,
    "assets/pet_phoenix.png": draw_phoenix,
    "assets/chest_wood.png": draw_chest_wood,
    "assets/chest_silver.png": draw_chest_silver,
    "assets/chest_gold.png": draw_chest_gold,
    "assets/chest_magic.png": draw_chest_magic,
}

for path, func in sprites.items():
    img = make_pixel_art(func, base_w=64, base_h=64, scale=2)
    img.save(path)
    print(f"Generated {path} ({img.size})")

print("All 8 pixel art sprites generated successfully!")
