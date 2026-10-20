import os
import math
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

os.makedirs('/Users/erdalalp/rrr/assets', exist_ok=True)

PW, PH = 235, 222
W, H = 470, 444

# 4x4 Bayer Dithering Matrix (normalized -0.5 .. +0.5)
BAYER_4X4 = (np.array([
    [ 0,  8,  2, 10],
    [12,  4, 14,  6],
    [ 3, 11,  1,  9],
    [15,  7, 13,  5]
], dtype=np.float32) / 16.0) - 0.5

def save_pixel_art(arr_rgba, filename, target_size=(W, H)):
    img_low = Image.fromarray(np.clip(arr_rgba, 0, 255).astype(np.uint8), 'RGBA')
    upscaled = img_low.resize(target_size, Image.Resampling.NEAREST)
    upscaled.save(f'/Users/erdalalp/rrr/assets/{filename}')

def ramp_color(t, c_shadow, c_mid, c_high):
    """Map scalar 0..1 to a 5-step quantized 16-bit pixel art color ramp."""
    q = np.clip(np.floor(t * 5.0) / 4.0, 0.0, 1.0)
    if q < 0.5:
        u = q * 2.0
        return (
            int(c_shadow[0] * (1 - u) + c_mid[0] * u),
            int(c_shadow[1] * (1 - u) + c_mid[1] * u),
            int(c_shadow[2] * (1 - u) + c_mid[2] * u),
        )
    else:
        u = (q - 0.5) * 2.0
        return (
            int(c_mid[0] * (1 - u) + c_high[0] * u),
            int(c_mid[1] * (1 - u) + c_high[1] * u),
            int(c_mid[2] * (1 - u) + c_high[2] * u),
        )

# ==============================================================================
# 1. TRUE 16-BIT VOLUMETRIC PIXEL-ART STAGES (stage_1.png .. stage_5.png)
# ==============================================================================
THEMES = [
    {
        'id': 1,
        'name': 'Sunken Crypts',
        'stone_sh': (12, 18, 20),
        'stone_mid': (42, 58, 56),
        'stone_hi': (88, 112, 104),
        'moss': (44, 118, 56),
        'liq_sh': (6, 22, 26),
        'liq_mid': (18, 58, 58),
        'liq_hi': (58, 145, 130),
        'torch_rgb': (255, 165, 55),
        'accent_rgb': (65, 240, 145),
        'feature': 'crypt'
    },
    {
        'id': 2,
        'name': 'Cathedral of Bones',
        'stone_sh': (18, 10, 24),
        'stone_mid': (58, 38, 68),
        'stone_hi': (118, 86, 128),
        'moss': (145, 28, 52),
        'liq_sh': (18, 6, 20),
        'liq_mid': (56, 16, 42),
        'liq_hi': (140, 42, 85),
        'torch_rgb': (215, 85, 255),
        'accent_rgb': (255, 70, 130),
        'feature': 'cathedral'
    },
    {
        'id': 3,
        'name': 'Plague Alchemarium',
        'stone_sh': (14, 18, 12),
        'stone_mid': (48, 56, 38),
        'stone_hi': (96, 108, 76),
        'moss': (105, 220, 42),
        'liq_sh': (12, 38, 10),
        'liq_mid': (48, 125, 24),
        'liq_hi': (145, 245, 55),
        'torch_rgb': (155, 255, 50),
        'accent_rgb': (180, 255, 75),
        'feature': 'alchemy'
    },
    {
        'id': 4,
        'name': 'Frostbite Spire',
        'stone_sh': (10, 20, 38),
        'stone_mid': (42, 76, 118),
        'stone_hi': (115, 175, 225),
        'moss': (190, 240, 255),
        'liq_sh': (14, 34, 64),
        'liq_mid': (52, 108, 168),
        'liq_hi': (145, 215, 255),
        'torch_rgb': (90, 225, 255),
        'accent_rgb': (160, 245, 255),
        'feature': 'frost'
    },
    {
        'id': 5,
        'name': 'The Abyssal Forge',
        'stone_sh': (22, 8, 8),
        'stone_mid': (64, 24, 22),
        'stone_hi': (122, 52, 42),
        'moss': (235, 95, 20),
        'liq_sh': (85, 14, 4),
        'liq_mid': (210, 65, 12),
        'liq_hi': (255, 205, 45),
        'torch_rgb': (255, 140, 25),
        'accent_rgb': (255, 80, 20),
        'feature': 'abyss'
    }
]

def generate_rich_stage(th):
    rng = np.random.default_rng(th['id'] * 777)
    arr = np.zeros((PH, PW, 4), dtype=np.float32)
    arr[:, :, 3] = 255.0
    cx = PW // 2 # 117
    horizon_y = 144

    # Torch positions for dynamic per-pixel point lighting!
    torches = [(14, 88, 42.0), (54, 78, 52.0), (80, 92, 36.0), (PW - 80, 92, 36.0), (PW - 54, 78, 52.0), (PW - 14, 88, 42.0)]

    def get_light(x, y):
        # Ambient + Torch point lights
        lum = 0.22
        for tx, ty, rad in torches:
            d = math.hypot(x - tx, y - ty)
            if d < rad * 1.4:
                lum += max(0.0, (1.0 - d / (rad * 1.4)) ** 1.6) * 0.72
        return lum

    # 1. Back Wall & Vaulted Archways with Dithered Stone Blocks
    for y in range(0, horizon_y):
        by = y // 10
        for x in range(0, PW):
            dither = BAYER_4X4[y % 4, x % 4] * 0.16
            bx = (x + (by % 2) * 8) // 16
            in_mortar = (y % 10 == 0) or ((x + (by % 2) * 8) % 16 == 0)
            # Crack pattern
            crack = ((x * 13 + y * 7) % 97 == 0) or ((x - y * 2) % 67 == 0 and y % 5 < 2)

            lum = get_light(x, y) + dither
            if in_mortar or crack:
                lum *= 0.38
            else:
                # Top-left bevel highlight on each stone brick
                if (y % 10 == 1) or ((x + (by % 2) * 8) % 16 == 1):
                    lum += 0.18
                elif (y % 10 == 9):
                    lum -= 0.15

            # Check if inside the central dark portal archway (x in cx-34..cx+34, y > 62 + arch curve)
            dx = abs(x - cx)
            arch_top = 56 + int((dx / 35.0) ** 2 * 28) if dx <= 35 else 999
            if dx <= 34 and y >= arch_top:
                # Deep dark archway interior with subtle rim & hanging chains
                rim = max(0.0, 1.0 - (34 - dx) / 6.0) * 0.18
                c = ramp_color(rim, (2, 3, 5), th['stone_sh'], th['stone_mid'])
                # Hanging chains in archway
                if dx in (10, 22) and y < arch_top + 42 and (y % 3 != 0):
                    c = th['stone_mid']
                arr[y, x, :3] = c
            elif dx <= 41 and y >= arch_top - 7:
                # Ornate Carved Archway Trim Stones
                stone_t = min(1.0, lum + 0.15)
                arr[y, x, :3] = ramp_color(stone_t, th['stone_sh'], th['stone_mid'], th['stone_hi'])
            else:
                # Moss near top or cracks
                if ((x * 19 + y * 23) % 53 < 3) and y < 85:
                    arr[y, x, :3] = th['moss']
                else:
                    arr[y, x, :3] = ramp_color(lum, th['stone_sh'], th['stone_mid'], th['stone_hi'])

    # 2. Chapter-Specific Centerpiece Landmark above the Archway!
    feat = th['feature']
    if feat == 'cathedral':
        # Stained-Glass Rose Window at (cx, 28)
        for dy in range(-21, 22):
            for dx in range(-21, 22):
                r = math.hypot(dx, dy)
                if r <= 21:
                    ang = (math.degrees(math.atan2(dy, dx)) + 360) % 45
                    if r > 18 or abs(r - 10) < 1.3 or ang < 6:
                        arr[28 + dy, cx + dx, :3] = th['stone_sh']
                    elif r < 6:
                        arr[28 + dy, cx + dx, :3] = (255, 195, 225)
                    else:
                        arr[28 + dy, cx + dx, :3] = (195, 32, 78) if (dx + dy) % 2 == 0 else (125, 18, 95)
    elif feat == 'alchemy':
        # Glowing Mutagen Glass Tubes flanking archway (cx-48 and cx+48)
        for vx in [cx - 48, cx + 48]:
            for y in range(44, 126):
                for x in range(vx - 8, vx + 9):
                    dx = x - vx
                    if y in (44, 45, 46, 123, 124, 125) or abs(dx) >= 7:
                        arr[y, x, :3] = (165, 115, 52) # Brass frame
                    else:
                        cyl = 1.0 - (dx / 7.0) ** 2
                        bubble = ((x * 7 + y * 13) % 19 == 0)
                        c = (220, 255, 160) if bubble else ramp_color(cyl, (24, 85, 18), (75, 195, 38), (165, 255, 80))
                        arr[y, x, :3] = c
    elif feat == 'frost':
        # Crystalline Ice Spires & Hanging Icicles
        for x in range(8, PW - 8):
            ice_len = int(8 + 14 * abs(math.sin(x * 0.37)))
            for y in range(0, ice_len):
                t = 1.0 - y / float(ice_len)
                arr[y, x, :3] = ramp_color(t, th['stone_mid'], th['stone_hi'], (235, 252, 255))
    elif feat == 'abyss':
        # Molten Magma Waterfalls pouring down at cx-48 and cx+48 + Eclipse Sigil at (cx, 26)
        for dy in range(-16, 17):
            for dx in range(-16, 17):
                r = math.hypot(dx, dy)
                if 11 <= r <= 16:
                    arr[26 + dy, cx + dx, :3] = (255, 150, 25) if r < 13.5 else (195, 35, 10)
                elif r < 11:
                    arr[26 + dy, cx + dx, :3] = (12, 2, 4)
        for lx in [cx - 48, cx + 48]:
            for y in range(28, horizon_y):
                for dx in range(-4, 5):
                    heat = 1.0 - abs(dx) / 4.5 + BAYER_4X4[y % 4, (lx + dx) % 4] * 0.2
                    arr[y, lx + dx, :3] = ramp_color(heat, (140, 22, 6), (245, 95, 15), (255, 235, 80))

    # 3. Left & Right 3D Cylindrical/Beveled Stone Pillars (Foreground & Midground)
    pillars = [
        (36, 56, 0, 178),          # Left foreground main pillar
        (PW - 56, PW - 36, 0, 178),# Right foreground main pillar
        (68, 82, 16, 152),         # Left inner pillar
        (PW - 82, PW - 68, 16, 152)# Right inner pillar
    ]
    for px0, px1, py0, py1 in pillars:
        pw_span = float(px1 - px0)
        for y in range(py0, py1):
            is_seam = (y % 18 == 0)
            for x in range(px0, px1 + 1):
                # Cylindrical normal facing the center torches
                nx = (x - px0) / pw_span # 0..1
                # Highlight towards inside of corridor
                facing = (1.0 - abs(nx - 0.35) * 1.4) if px0 < cx else (1.0 - abs(nx - 0.65) * 1.4)
                lum = get_light(x, y) * 0.75 + facing * 0.42 + BAYER_4X4[y % 4, x % 4] * 0.15
                if is_seam or x in (px0, px1):
                    lum *= 0.35
                elif (y % 18 == 1):
                    lum += 0.16
                # Moss near top of pillars
                if y < py0 + 28 and ((x * 11 + y * 5) % 17 < 4):
                    arr[y, x, :3] = th['moss']
                else:
                    arr[y, x, :3] = ramp_color(lum, th['stone_sh'], th['stone_mid'], th['stone_hi'])
        # Pillar base plinth
        for y in range(py1 - 8, min(PH, py1 + 5)):
            for x in range(max(0, px0 - 3), min(PW, px1 + 4)):
                lum = get_light(x, y) + (0.2 if y == py1 - 8 else -0.1)
                arr[y, x, :3] = ramp_color(lum, th['stone_sh'], th['stone_mid'], th['stone_hi'])

    # 4. Flooded Floor (Water / Blood / Acid / Ice / Lava) + Perspective Stepping Stones
    for y in range(horizon_y, PH):
        depth = (y - horizon_y) / float(PH - horizon_y)
        for x in range(0, PW):
            dither = BAYER_4X4[y % 4, x % 4] * 0.15
            ripple = math.sin(y * 0.65 + x * 0.18) * 0.22
            lum = get_light(x, y) * 0.65 + depth * 0.35 + ripple + dither
            arr[y, x, :3] = ramp_color(lum, th['liq_sh'], th['liq_mid'], th['liq_hi'])

    # Stepping Stone Slabs with 3D side thickness & cracks
    for row_i, (sy0, sy1) in enumerate([(146, 157), (159, 173), (175, 193), (195, 221)]):
        half_span = 25 + row_i * 10
        sx0, sx1 = cx - half_span, cx + half_span
        slab_w = (sx1 - sx0) // 2
        for s_idx in range(2):
            bx0 = sx0 + s_idx * slab_w + 2
            bx1 = bx0 + slab_w - 4
            for y in range(sy0, sy1):
                for x in range(bx0, bx1):
                    dither = BAYER_4X4[y % 4, x % 4] * 0.14
                    if y >= sy1 - 3:
                        # 3D front vertical edge of stone slab
                        arr[y, x, :3] = th['stone_sh']
                    elif y == sy0 or x in (bx0, bx1 - 1):
                        arr[y, x, :3] = th['stone_hi']
                    else:
                        lum = 0.48 + get_light(x, y) * 0.4 + dither
                        arr[y, x, :3] = ramp_color(lum, th['stone_sh'], th['stone_mid'], th['stone_hi'])

    # 5. Wall Sconces & Pixel Torch Flames + Treasure Piles
    t_rgb = th['torch_rgb']
    for tx, ty, _ in torches:
        # Iron torch holder
        for dy in range(0, 10):
            if 0 <= ty + dy < PH:
                arr[ty + dy, tx, :3] = (32, 36, 42)
                if dy < 3:
                    for dx in range(-2, 3):
                        arr[ty + dy, max(0, min(PW - 1, tx + dx)), :3] = (68, 74, 82)
        # Pixel flame
        for dy in range(-11, 0):
            fw = max(1, int((11 + dy) * 0.42))
            for dx in range(-fw, fw + 1):
                px, py = tx + dx, ty + dy
                if 0 <= px < PW and 0 <= py < PH:
                    core = (abs(dx) <= 1 and dy >= -6)
                    arr[py, px, :3] = (255, 252, 215) if core else t_rgb

    # Glittering Gold Coins & Gems Pile on right floor
    for gx, gy, rx_r, ry_r in [(198, 204, 22, 9), (168, 166, 12, 5), (26, 168, 11, 5)]:
        for dy in range(-ry_r, ry_r + 1):
            for dx in range(-rx_r, rx_r + 1):
                if (dx / rx_r) ** 2 + (dy / ry_r) ** 2 <= 1.0:
                    px, py = gx + dx, gy + dy
                    if 0 <= px < PW and 0 <= py < PH:
                        dither = BAYER_4X4[py % 4, px % 4]
                        if (dx * 11 + dy * 17) % 31 == 0:
                            arr[py, px, :3] = th['accent_rgb']
                        else:
                            gt = 0.65 - (dy / float(ry_r)) * 0.35 + dither * 0.25
                            arr[py, px, :3] = ramp_color(gt, (110, 72, 12), (205, 152, 28), (255, 235, 110))

    save_pixel_art(arr, f"stage_{th['id']}.png")
    if th['id'] == 1:
        save_pixel_art(arr, "dungeon_bg.png")

for th in THEMES:
    generate_rich_stage(th)
print("Generated 5 volumetric 16-bit stages!")


# ==============================================================================
# 2. VOLUMETRIC 3D-SHADED + BAYER-DITHERED 16-BIT SPRITE ENGINE
# ==============================================================================
def shade_shape(canvas_rgba, mask_img, c_sh, c_mid, c_hi, outline_col=(14, 12, 16), ridge_mode='cylinder'):
    """
    Takes a PIL 'L' mask_img and renders a 3D normal-shaded, Bayer-dithered 16-bit pixel art
    part onto canvas_rgba with a 1px dark pixel outline!
    """
    m = np.array(mask_img) > 127
    if not m.any():
        return
    h, w = m.shape
    ys, xs = np.where(m)
    x0, x1 = xs.min(), xs.max()
    y0, y1 = ys.min(), ys.max()
    span_x = max(1.0, float(x1 - x0))
    span_y = max(1.0, float(y1 - y0))

    # 4-neighbor erosion to detect 1px pixel-art outline
    padded = np.pad(m, 1, mode='constant', constant_values=False)
    interior = (
        padded[1:-1, 1:-1] &
        padded[:-2, 1:-1] &
        padded[2:, 1:-1] &
        padded[1:-1, :-2] &
        padded[1:-1, 2:]
    )
    outline = m & (~interior)

    for y, x in zip(ys, xs):
        if outline[y, x]:
            canvas_rgba[y, x] = [*outline_col, 255]
        else:
            nx = ((x - x0) / span_x) * 2.0 - 1.0 # -1 .. +1
            ny = ((y - y0) / span_y) * 2.0 - 1.0 # -1 .. +1
            if ridge_mode == 'sphere':
                r2 = min(1.0, nx * nx + ny * ny)
                nz = math.sqrt(max(0.0, 1.0 - r2))
                lum = nz * 0.65 - nx * 0.28 - ny * 0.25 + 0.15
            elif ridge_mode == 'folds':
                fold = 0.5 + 0.5 * math.cos(nx * math.pi * 3.5)
                lum = 0.25 + fold * 0.55 - ny * 0.2
            elif ridge_mode == 'blade':
                lum = 0.65 + 0.35 * (1.0 - abs(nx + ny) * 0.8)
            else: # cylinder
                nz = math.sqrt(max(0.0, 1.0 - nx * nx))
                lum = nz * 0.72 - nx * 0.25 - ny * 0.18 + 0.12

            lum += BAYER_4X4[y % 4, x % 4] * 0.18
            col = ramp_color(lum, c_sh, c_mid, c_hi)
            canvas_rgba[y, x] = [*col, 255]

def generate_volumetric_hero():
    kw, kh = 132, 115
    canvas = np.zeros((kh, kw, 4), dtype=np.float32)

    def part(draw_fn, c_sh, c_mid, c_hi, mode='cylinder'):
        m_im = Image.new('L', (kw, kh), 0)
        d = ImageDraw.Draw(m_im)
        draw_fn(d)
        shade_shape(canvas, m_im, c_sh, c_mid, c_hi, ridge_mode=mode)

    # 1. Raised Broadsword Blade & Golden Crossguard
    part(lambda d: d.polygon([(56, 3), (63, 4), (101, 42), (94, 48), (55, 10)], fill=255),
         (58, 68, 84), (135, 152, 175), (235, 245, 255), mode='blade')
    # Glowing crimson blood-rune along sword fuller
    for i in range(14, 38):
        canvas[i, 52 + i] = [255, 65, 45, 255]
        canvas[i + 1, 52 + i] = [175, 22, 18, 255]

    part(lambda d: d.polygon([(87, 49), (106, 33), (110, 37), (91, 53)], fill=255),
         (85, 52, 16), (175, 128, 38), (250, 215, 95), mode='cylinder')

    # 2. Left Heater Shield (Layered Oak, Dark Steel Face, and Gold Cross Trim)
    part(lambda d: d.polygon([(17, 28), (40, 35), (40, 64), (27, 86), (9, 94), (4, 74), (8, 45)], fill=255),
         (68, 44, 22), (145, 102, 42), (225, 180, 75), mode='cylinder')
    part(lambda d: d.polygon([(19, 33), (36, 39), (36, 62), (25, 80), (11, 87), (8, 72), (12, 48)], fill=255),
         (22, 28, 38), (48, 58, 74), (92, 108, 130), mode='sphere')
    # Gold cross emblem on shield
    part(lambda d: (d.line([(23, 37), (18, 82)], fill=255, width=3), d.line([(10, 58), (35, 54)], fill=255, width=3)),
         (95, 62, 18), (185, 138, 42), (250, 215, 95), mode='cylinder')

    # 3. Back Plate Cuirass & Tattered Crimson Surcoat/Cloak
    part(lambda d: d.polygon([(38, 45), (76, 45), (80, 78), (85, 114), (32, 114), (37, 78)], fill=255),
         (42, 8, 14), (112, 20, 28), (185, 42, 52), mode='folds')
    # Upper steel backplate over surcoat
    part(lambda d: d.polygon([(40, 46), (74, 46), (71, 74), (43, 74)], fill=255),
         (26, 32, 42), (62, 74, 92), (128, 148, 172), mode='cylinder')
    # Leather & Gold Belt + Steel Tassets
    part(lambda d: d.rectangle((38, 74, 76, 80), fill=255),
         (45, 28, 16), (95, 62, 34), (165, 118, 65), mode='cylinder')
    part(lambda d: d.polygon([(66, 80), (77, 80), (82, 104), (70, 102)], fill=255),
         (32, 38, 48), (78, 90, 110), (155, 175, 198), mode='sphere')

    # 4. Left & Right Layered Steel Pauldrons & Right Armored Gauntlet
    part(lambda d: d.ellipse((25, 41, 47, 65), fill=255),
         (28, 34, 44), (74, 88, 108), (168, 188, 212), mode='sphere')
    part(lambda d: d.ellipse((65, 40, 89, 65), fill=255),
         (28, 34, 44), (78, 92, 114), (178, 198, 222), mode='sphere')
    part(lambda d: d.polygon([(80, 52), (93, 58), (105, 44), (111, 51), (95, 69), (77, 62)], fill=255),
         (28, 34, 44), (72, 84, 104), (158, 175, 198), mode='cylinder')

    # 5. Chainmail Coif, Horned Greathelm & Crimson Plume/Scarf
    part(lambda d: d.polygon([(43, 41), (72, 41), (75, 51), (40, 51)], fill=255),
         (52, 16, 20), (118, 32, 38), (185, 58, 62), mode='folds')
    # Horns
    part(lambda d: (
        d.polygon([(49, 32), (38, 17), (43, 15), (52, 26)], fill=255),
        d.polygon([(67, 32), (78, 17), (73, 15), (64, 26)], fill=255)
    ), (52, 46, 38), (120, 108, 92), (205, 192, 170), mode='cylinder')
    # Helmet Dome
    part(lambda d: d.ellipse((47, 20, 69, 45), fill=255),
         (30, 36, 48), (82, 96, 118), (185, 205, 228), mode='sphere')
    # Helmet central ridge highlight
    for y in range(22, 44):
        canvas[y, 58] = [220, 235, 250, 255]

    save_pixel_art(canvas, 'hero_knight.png', (265, 229))
    save_pixel_art(canvas, 'knight_back.png', (265, 229))

def generate_front_hero_variants():
    """
    Generates a detailed FRONT-FACING 16-bit Knight Portrait (hero_front.png and helm-specific
    front portraits hero_front_helm_*.png) with a clear knight face/visor, glowing eyes, chest
    emblem, shoulder pauldrons, front heater shield, and broadsword!
    """
    helm_configs = [
        ('helm_unhelmed', {
            'helm_ramp': ((30, 38, 52), (85, 102, 128), (195, 215, 240)),
            'trim_ramp': ((95, 62, 18), (185, 138, 42), (255, 225, 105)),
            'eye_col': (75, 215, 255),
            'horns': 'none',
            'crest': 'open_face'
        }),
        ('helm_iron', {
            'helm_ramp': ((30, 38, 52), (85, 102, 128), (195, 215, 240)),
            'trim_ramp': ((95, 62, 18), (185, 138, 42), (255, 225, 105)),
            'eye_col': (90, 225, 255),
            'horns': 'classic',
            'crest': 'plume_red'
        }),
        ('helm_hydra', {
            'helm_ramp': ((12, 48, 28), (38, 128, 68), (105, 230, 115)),
            'trim_ramp': ((24, 75, 32), (75, 185, 62), (175, 255, 130)),
            'eye_col': (120, 255, 90),
            'horns': 'fangs',
            'crest': 'hydra_fin'
        }),
        ('helm_boneking', {
            'helm_ramp': ((68, 60, 48), (165, 152, 132), (242, 235, 215)),
            'trim_ramp': ((72, 20, 98), (155, 58, 215), (235, 155, 255)),
            'eye_col': (225, 95, 255),
            'horns': 'royal_spikes',
            'crest': 'gold_crown'
        }),
        ('helm_chimera', {
            'helm_ramp': ((78, 48, 14), (175, 122, 34), (250, 215, 95)),
            'trim_ramp': ((35, 92, 22), (98, 205, 48), (185, 255, 120)),
            'eye_col': (165, 255, 70),
            'horns': 'ram_horns',
            'crest': 'emerald_gem'
        }),
        ('helm_wyrm', {
            'helm_ramp': ((18, 48, 92), (62, 135, 210), (165, 230, 255)),
            'trim_ramp': ((45, 105, 165), (120, 205, 250), (225, 252, 255)),
            'eye_col': (145, 255, 255),
            'horns': 'dragon_wings',
            'crest': 'ice_crystal'
        }),
        ('helm_azazel', {
            'helm_ramp': ((48, 10, 12), (132, 26, 24), (235, 78, 42)),
            'trim_ramp': ((110, 32, 8), (230, 105, 20), (255, 230, 85)),
            'eye_col': (255, 230, 65),
            'horns': 'demon_horns',
            'crest': 'hell_halo'
        }),
        ('helm_eternal', {
            'helm_ramp': ((85, 58, 14), (195, 148, 38), (255, 238, 135)),
            'trim_ramp': ((65, 22, 98), (155, 65, 225), (240, 185, 255)),
            'eye_col': (255, 250, 160),
            'horns': 'wings_gold',
            'crest': 'imperial_crown'
        })
    ]

    for helm_id, hcfg in helm_configs:
        kw, kh = 132, 120
        canvas = np.zeros((kh, kw, 4), dtype=np.float32)
        cx = kw // 2 # 66

        def part(draw_fn, c_sh, c_mid, c_hi, mode='cylinder'):
            m_im = Image.new('L', (kw, kh), 0)
            d = ImageDraw.Draw(m_im)
            draw_fn(d)
            shade_shape(canvas, m_im, c_sh, c_mid, c_hi, ridge_mode=mode)

        # 1. Flowing Royal Crimson Cloak Behind Shoulders
        part(lambda d: d.polygon([(cx - 34, 42), (cx + 34, 42), (cx + 42, 117), (cx - 42, 117)], fill=255),
             (46, 8, 14), (118, 22, 32), (195, 45, 58), mode='folds')

        # 2. Raised Right-Hand Broadsword (held heroically on right side)
        part(lambda d: d.polygon([(102, 6), (110, 6), (104, 68), (96, 68)], fill=255),
             (58, 68, 84), (145, 162, 185), (240, 248, 255), mode='blade')
        # Glowing rune line down the front blade
        for ry in range(14, 58):
            canvas[ry, 103] = [255, 75, 55, 255]
            canvas[ry, 104] = [195, 28, 22, 255]
        # Golden Crossguard & Pommel
        part(lambda d: d.rectangle((90, 65, 115, 71), fill=255),
             (85, 52, 16), (185, 138, 42), (255, 225, 105), mode='cylinder')

        # 3. Armored Legs / Greaves & Front Tabard with Gold Trim
        part(lambda d: (
            d.rectangle((cx - 22, 86, cx - 6, 117), fill=255),
            d.rectangle((cx + 6, 86, cx + 22, 117), fill=255)
        ), (26, 32, 44), (72, 86, 108), (158, 178, 202), mode='cylinder')

        # Front Surcoat Tabard hanging between legs
        part(lambda d: d.polygon([(cx - 14, 76), (cx + 14, 76), (cx + 17, 114), (cx, 118), (cx - 17, 114)], fill=255),
             (55, 10, 18), (135, 26, 36), (215, 55, 65), mode='folds')
        # Gold vertical stripe on tabard
        part(lambda d: d.rectangle((cx - 2, 78, cx + 2, 114), fill=255),
             (95, 62, 18), (185, 138, 42), (255, 225, 105), mode='cylinder')

        # 4. Sculpted Front Steel Breastplate & Golden Lion/Sun Chest Emblem
        part(lambda d: d.polygon([(cx - 24, 42), (cx + 24, 42), (cx + 19, 76), (cx, 81), (cx - 19, 76)], fill=255),
             (28, 36, 48), (78, 94, 118), (182, 202, 228), mode='sphere')
        # Golden Chest Crest Emblem (Winged Diamond / Cross)
        part(lambda d: (
            d.polygon([(cx, 48), (cx + 11, 57), (cx, 68), (cx - 11, 57)], fill=255),
            d.line([(cx - 14, 57), (cx + 14, 57)], fill=255, width=3)
        ), (95, 62, 18), (195, 148, 45), (255, 232, 115), mode='sphere')

        # Heavy Knight Belt & Gold Buckle
        part(lambda d: d.rectangle((cx - 21, 73, cx + 21, 80), fill=255),
             (45, 28, 16), (98, 64, 34), (170, 122, 65), mode='cylinder')
        part(lambda d: d.rectangle((cx - 5, 72, cx + 5, 81), fill=255),
             (95, 62, 18), (195, 148, 45), (255, 232, 115), mode='sphere')

        # 5. Left & Right Layered Shoulder Pauldrons & Right Gauntlet Holding Sword
        part(lambda d: d.ellipse((cx - 39, 38, cx - 15, 63), fill=255),
             (28, 36, 48), (82, 98, 122), (185, 205, 230), mode='sphere')
        part(lambda d: d.ellipse((cx + 15, 38, cx + 39, 63), fill=255),
             (28, 36, 48), (82, 98, 122), (185, 205, 230), mode='sphere')
        # Right armored arm & gauntlet gripping sword hilt
        part(lambda d: d.polygon([(cx + 24, 54), (108, 66), (104, 77), (cx + 20, 66)], fill=255),
             (28, 36, 48), (76, 90, 112), (168, 188, 212), mode='cylinder')

        # 6. Front-Left Heater Shield with Golden Cross (angled so chest & face are 100% visible)
        part(lambda d: d.polygon([(12, 48), (44, 52), (44, 82), (28, 104), (12, 94), (8, 70)], fill=255),
             (75, 48, 18), (165, 118, 42), (245, 202, 88), mode='cylinder')
        part(lambda d: d.polygon([(15, 52), (40, 56), (40, 80), (27, 98), (15, 90), (12, 70)], fill=255),
             (20, 28, 42), (48, 64, 88), (102, 125, 155), mode='sphere')
        part(lambda d: (
            d.line([(27, 55), (27, 94)], fill=255, width=3),
            d.line([(15, 72), (39, 72)], fill=255, width=3)
        ), (95, 62, 18), (195, 148, 45), (255, 232, 115), mode='cylinder')

        # 7. Neck Gorget
        part(lambda d: d.polygon([(cx - 12, 36), (cx + 12, 36), (cx + 16, 45), (cx - 16, 45)], fill=255),
             (24, 30, 42), (65, 78, 98), (145, 165, 190), mode='cylinder')

        # 8. FRONT HEAD / FACE OR GREATHELM VISOR!
        h_sh, h_mid, h_hi = hcfg['helm_ramp']
        t_sh, t_mid, t_hi = hcfg['trim_ramp']
        horns = hcfg['horns']
        crest = hcfg['crest']

        if crest == 'open_face':
            # Unhelmed Heroic Knight Face with Silver-Streaked Dark Hair, Beard, Scar, Circlet & Glowing Eyes!
            # Hair back/sides
            part(lambda d: d.ellipse((cx - 15, 7, cx + 15, 34), fill=255),
                 (18, 16, 22), (46, 42, 54), (95, 90, 110), mode='sphere')
            # Face skin
            part(lambda d: d.polygon([
                (cx - 11, 14), (cx + 11, 14),
                (cx + 11, 31), (cx, 38), (cx - 11, 31)
            ], fill=255), (110, 68, 48), (198, 142, 108), (248, 202, 168), mode='sphere')
            # Knight Beard & Mustache
            part(lambda d: d.polygon([
                (cx - 11, 28), (cx + 11, 28), (cx + 9, 36), (cx, 40), (cx - 9, 36)
            ], fill=255), (22, 18, 24), (58, 50, 62), (115, 105, 122), mode='folds')
            # Mouth highlight
            canvas[32, cx - 2:cx + 3] = [165, 95, 82, 255]
            # Heroic Eyes & Eyebrows
            for ex in [cx - 6, cx + 4]:
                canvas[21, ex - 1:ex + 3] = [28, 22, 26, 255] # Brow
                canvas[23, ex:ex + 3] = [245, 248, 255, 255]  # Sclera
                canvas[23, ex + 1] = [*hcfg['eye_col'], 255]  # Iris
                canvas[24, ex + 1] = [18, 24, 36, 255]        # Pupil
            # Nose bridge & battle scar on left cheek
            canvas[24:28, cx] = [165, 112, 84, 255]
            canvas[25:30, cx - 7] = [175, 65, 65, 255]
            # Golden Knight Circlet / Headband on Forehead
            part(lambda d: d.rectangle((cx - 12, 13, cx + 12, 17), fill=255),
                 t_sh, t_mid, t_hi, mode='cylinder')
            canvas[15, cx] = [90, 225, 255, 255] # Center sapphire gem
        else:
            # Plume / Crest / Halo behind or on top of helmet
            if crest == 'plume_red':
                part(lambda d: d.polygon([(cx - 5, 14), (cx + 6, 4), (cx + 18, 9), (cx + 10, 20), (cx - 4, 18)], fill=255),
                     (75, 12, 18), (175, 28, 38), (250, 75, 85), mode='folds')
            elif crest == 'hydra_fin':
                part(lambda d: d.polygon([(cx - 6, 16), (cx, 2), (cx + 6, 16)], fill=255),
                     t_sh, t_mid, t_hi, mode='blade')
            elif crest == 'hell_halo':
                part(lambda d: d.ellipse((cx - 18, 2, cx + 18, 14), fill=255),
                     (140, 25, 8), (245, 110, 20), (255, 240, 95), mode='sphere')
                part(lambda d: d.ellipse((cx - 12, 5, cx + 12, 11), fill=255),
                     (15, 12, 18), (25, 20, 28), (40, 32, 44), mode='sphere')

            # Horns / Wings on sides of helmet
            if horns == 'classic':
                part(lambda d: (
                    d.polygon([(cx - 12, 22), (cx - 25, 8), (cx - 19, 6), (cx - 9, 16)], fill=255),
                    d.polygon([(cx + 12, 22), (cx + 25, 8), (cx + 19, 6), (cx + 9, 16)], fill=255)
                ), (58, 50, 40), (135, 122, 102), (220, 208, 185), mode='cylinder')
            elif horns == 'fangs':
                part(lambda d: (
                    d.polygon([(cx - 12, 20), (cx - 28, 12), (cx - 22, 6), (cx - 10, 14)], fill=255),
                    d.polygon([(cx + 12, 20), (cx + 28, 12), (cx + 22, 6), (cx + 10, 14)], fill=255)
                ), t_sh, t_mid, t_hi, mode='blade')
            elif horns == 'ram_horns':
                part(lambda d: (
                    d.ellipse((cx - 26, 14, cx - 10, 30), fill=255),
                    d.ellipse((cx + 10, 14, cx + 26, 30), fill=255)
                ), t_sh, t_mid, t_hi, mode='sphere')
            elif horns == 'dragon_wings':
                part(lambda d: (
                    d.polygon([(cx - 12, 24), (cx - 30, 5), (cx - 26, 22), (cx - 14, 28)], fill=255),
                    d.polygon([(cx + 12, 24), (cx + 30, 5), (cx + 26, 22), (cx + 14, 28)], fill=255)
                ), t_sh, t_mid, t_hi, mode='folds')
            elif horns == 'demon_horns':
                part(lambda d: (
                    d.polygon([(cx - 11, 20), (cx - 29, 3), (cx - 21, 3), (cx - 8, 15)], fill=255),
                    d.polygon([(cx + 11, 20), (cx + 29, 3), (cx + 21, 3), (cx + 8, 15)], fill=255)
                ), t_sh, t_mid, t_hi, mode='cylinder')
            elif horns == 'wings_gold':
                part(lambda d: (
                    d.polygon([(cx - 12, 24), (cx - 32, 4), (cx - 24, 18), (cx - 28, 25), (cx - 13, 28)], fill=255),
                    d.polygon([(cx + 12, 24), (cx + 32, 4), (cx + 24, 18), (cx + 28, 25), (cx + 13, 28)], fill=255)
                ), t_sh, t_mid, t_hi, mode='blade')

            # Main Front Greathelm Dome & Faceplate
            part(lambda d: d.polygon([
                (cx - 13, 14), (cx, 10), (cx + 13, 14),
                (cx + 14, 32), (cx, 40), (cx - 14, 32)
            ], fill=255), h_sh, h_mid, h_hi, mode='sphere')

            # Crown on top of helmet if royal/eternal
            if crest in ('gold_crown', 'imperial_crown'):
                part(lambda d: d.polygon([
                    (cx - 13, 16), (cx - 15, 5), (cx - 7, 11),
                    (cx, 3), (cx + 7, 11), (cx + 15, 5), (cx + 13, 16)
                ], fill=255), (110, 72, 14), (215, 165, 38), (255, 242, 130), mode='cylinder')

            # Golden Face Trim (Cross Noseguard & Brow Band)
            part(lambda d: (
                d.rectangle((cx - 13, 20, cx + 13, 23), fill=255),
                d.rectangle((cx - 2, 14, cx + 2, 37), fill=255)
            ), t_sh, t_mid, t_hi, mode='cylinder')

            # Dark Visor Eye Slits + Breathing Vents (gives unmistakable front-facing face!)
            for vx in range(cx - 10, cx + 11):
                if abs(vx - cx) >= 2:
                    canvas[24, vx] = [10, 12, 18, 255]
                    canvas[25, vx] = [10, 12, 18, 255]
                    canvas[26, vx] = [16, 20, 28, 255]

            # Glowing Heroic Eyes inside the visor!
            eye_rgb = hcfg['eye_col']
            for ex in [cx - 6, cx + 5]:
                canvas[25, ex] = [*eye_rgb, 255]
                canvas[25, ex + 1] = [255, 255, 255, 255]
                canvas[24, ex] = [eye_rgb[0] // 2, eye_rgb[1] // 2, eye_rgb[2] // 2, 255]

            # Cheekguard breathing slits on lower faceplate
            for vy in [30, 33]:
                for vx in [cx - 7, cx - 5, cx + 5, cx + 7]:
                    canvas[vy, vx] = [16, 20, 28, 255]

        save_pixel_art(canvas, f'hero_front_{helm_id}.png', (265, 240))
        if helm_id == 'helm_iron':
            save_pixel_art(canvas, 'hero_front.png', (265, 240))
            save_pixel_art(canvas, 'hero_knight.png', (265, 240))

generate_volumetric_hero()
generate_front_hero_variants()

# ==============================================================================
# 3. VOLUMETRIC 16-BIT MONSTERS & BOSSES
# ==============================================================================
def generate_volumetric_monster(filename, cfg):
    mw, mh = 90, 88
    canvas = np.zeros((mh, mw, 4), dtype=np.float32)
    cx = mw // 2 # 45

    p_sh, p_mid, p_hi = cfg['p_ramp']
    s_sh, s_mid, s_hi = cfg['s_ramp']
    w_sh, w_mid, w_hi = cfg['w_ramp']
    eye_col = cfg['eye']
    kind = cfg['kind']

    def part(draw_fn, r_sh, r_mid, r_hi, mode='cylinder'):
        m_im = Image.new('L', (mw, mh), 0)
        d = ImageDraw.Draw(m_im)
        draw_fn(d)
        shade_shape(canvas, m_im, r_sh, r_mid, r_hi, ridge_mode=mode)

    # 1. Wings (if winged boss/gargoyle/valkyrie)
    if cfg.get('wings'):
        part(lambda d: (
            d.polygon([(cx, 36), (4, 8), (2, 38), (16, 58), (cx, 48)], fill=255),
            d.polygon([(cx, 36), (mw - 4, 8), (mw - 2, 38), (mw - 16, 58), (cx, 48)], fill=255)
        ), s_sh, s_mid, s_hi, mode='folds')

    # 2. Lower Body (Coiled Serpent Tail vs Armored Battle Cloak & Greaves)
    if kind in ('serpent', 'hydra'):
        for y0, rx, ry in [(80, 28, 6), (73, 23, 6), (66, 18, 5), (59, 13, 5)]:
            part(lambda d, y0=y0, rx=rx, ry=ry: d.ellipse((cx - rx, y0 - ry, cx + rx, y0 + ry), fill=255),
                 p_sh, p_mid, p_hi, mode='cylinder')
    else:
        # Folds of dark battle cloak
        part(lambda d: d.polygon([(cx - 17, 50), (cx + 17, 50), (cx + 24, 85), (cx - 24, 85)], fill=255),
             s_sh, s_mid, s_hi, mode='folds')
        # Left & Right Armored Greaves
        part(lambda d: (
            d.rectangle((cx - 14, 58, cx - 4, 85), fill=255),
            d.rectangle((cx + 4, 58, cx + 14, 85), fill=255)
        ), p_sh, p_mid, p_hi, mode='cylinder')

    # 3. Torso, Pauldrons & Chest
    part(lambda d: d.polygon([(cx - 16, 29), (cx + 16, 29), (cx + 12, 59), (cx - 12, 59)], fill=255),
         p_sh, p_mid, p_hi, mode='sphere')
    # Pauldrons
    part(lambda d: (
        d.ellipse((cx - 23, 27, cx - 9, 41), fill=255),
        d.ellipse((cx + 9, 27, cx + 23, 41), fill=255)
    ), s_sh, s_mid, s_hi, mode='sphere')

    if kind == 'skeleton':
        # Glowing necromantic ribcage
        for ry in range(35, 53, 4):
            part(lambda d, ry=ry: d.rectangle((cx - 9, ry, cx + 9, ry + 2), fill=255),
                 (90, 85, 75), (185, 178, 160), (245, 240, 225), mode='cylinder')
    elif kind == 'golem':
        # Glowing core in chest
        part(lambda d: d.ellipse((cx - 7, 36, cx + 7, 50), fill=255),
             w_sh, w_mid, w_hi, mode='sphere')

    # 4. Left & Right Arms + Curved Twin Blades / Scythes
    part(lambda d: (
        d.polygon([(cx - 17, 33), (cx - 29, 46), (cx - 24, 52), (cx - 13, 39)], fill=255),
        d.polygon([(cx + 17, 33), (cx + 29, 46), (cx + 24, 52), (cx + 13, 39)], fill=255)
    ), p_sh, p_mid, p_hi, mode='cylinder')

    # Weapons (Curved Scimitars / Greatswords)
    part(lambda d: (
        d.polygon([(cx - 25, 49), (cx - 41, 16), (cx - 34, 14), (cx - 20, 45)], fill=255),
        d.polygon([(cx + 25, 49), (cx + 41, 16), (cx + 34, 14), (cx + 20, 45)], fill=255)
    ), w_sh, w_mid, w_hi, mode='blade')

    # 5. Head(s), Cobra Hood, Horns, Crown & Glowing Eyes
    heads = [(cx, 20)]
    if kind == 'hydra':
        heads = [(cx - 17, 23), (cx, 16), (cx + 17, 23)]
        for hx, hy in heads:
            part(lambda d, hx=hx, hy=hy: d.polygon([(cx - 3, 32), (cx + 3, 32), (hx + 3, hy + 4), (hx - 3, hy + 4)], fill=255),
                 s_sh, s_mid, s_hi, mode='cylinder')

    for hx, hy in heads:
        if kind in ('serpent', 'hydra'):
            part(lambda d, hx=hx, hy=hy: d.ellipse((hx - 12, hy - 8, hx + 12, hy + 9), fill=255),
                 s_sh, s_mid, s_hi, mode='sphere')
        if cfg.get('horns'):
            part(lambda d, hx=hx, hy=hy: (
                d.polygon([(hx - 6, hy - 4), (hx - 16, hy - 14), (hx - 11, hy - 15), (hx - 3, hy - 7)], fill=255),
                d.polygon([(hx + 6, hy - 4), (hx + 16, hy - 14), (hx + 11, hy - 15), (hx + 3, hy - 7)], fill=255)
            ), w_sh, w_mid, w_hi, mode='cylinder')
        if cfg.get('crown'):
            part(lambda d, hx=hx, hy=hy: d.polygon([
                (hx - 8, hy - 6), (hx - 9, hy - 15), (hx - 4, hy - 10),
                (hx, hy - 17), (hx + 4, hy - 10), (hx + 9, hy - 15), (hx + 8, hy - 6)
            ], fill=255), (120, 75, 12), (215, 165, 35), (255, 240, 120), mode='cylinder')

        # Head dome
        part(lambda d, hx=hx, hy=hy: d.ellipse((hx - 8, hy - 8, hx + 8, hy + 8), fill=255),
             p_sh, p_mid, p_hi, mode='sphere')

        # Glowing pixel eyes
        for ex in [hx - 3, hx + 2]:
            canvas[hy - 1, ex] = [*eye_col, 255]
            canvas[hy - 1, ex + 1] = [255, 255, 255, 255]

    save_pixel_art(canvas, filename, (180, 175))

VOL_MONSTERS = [
    # Chapter 1: Sunken Crypts
    ('monster_viper.png', {
        'kind': 'serpent',
        'p_ramp': ((58, 8, 10), (148, 22, 24), (235, 72, 58)),
        's_ramp': ((34, 4, 8), (92, 12, 18), (168, 38, 42)),
        'w_ramp': ((72, 14, 14), (175, 38, 32), (255, 130, 95)),
        'eye': (255, 230, 55), 'horns': True
    }),
    ('monster_drowned.png', {
        'kind': 'knight',
        'p_ramp': ((18, 38, 38), (52, 96, 90), (118, 182, 168)),
        's_ramp': ((12, 24, 26), (32, 62, 58), (74, 124, 116)),
        'w_ramp': ((35, 68, 68), (88, 155, 148), (185, 245, 235)),
        'eye': (80, 255, 210), 'horns': True
    }),
    ('monster_hydra_boss.png', {
        'kind': 'hydra',
        'p_ramp': ((14, 52, 24), (42, 138, 64), (115, 235, 95)),
        's_ramp': ((10, 34, 18), (28, 88, 44), (78, 175, 82)),
        'w_ramp': ((38, 85, 22), (105, 205, 48), (205, 255, 120)),
        'eye': (255, 55, 55), 'horns': True, 'crown': True
    }),
    # Chapter 2: Cathedral of Bones
    ('monster_inquisitor.png', {
        'kind': 'knight',
        'p_ramp': ((48, 8, 22), (125, 22, 52), (215, 65, 105)),
        's_ramp': ((24, 6, 16), (68, 14, 36), (135, 38, 72)),
        'w_ramp': ((65, 58, 72), (145, 135, 160), (235, 225, 245)),
        'eye': (255, 90, 150), 'horns': False
    }),
    ('monster_gargoyle.png', {
        'kind': 'knight',
        'p_ramp': ((28, 24, 36), (78, 70, 94), (152, 140, 175)),
        's_ramp': ((18, 14, 26), (48, 40, 64), (105, 92, 128)),
        'w_ramp': ((52, 32, 74), (128, 78, 175), (215, 165, 255)),
        'eye': (215, 85, 255), 'wings': True, 'horns': True
    }),
    ('monster_boneking_boss.png', {
        'kind': 'skeleton',
        'p_ramp': ((78, 70, 58), (168, 158, 138), (242, 235, 215)),
        's_ramp': ((34, 10, 48), (88, 26, 118), (165, 68, 205)),
        'w_ramp': ((68, 22, 98), (155, 65, 225), (235, 175, 255)),
        'eye': (210, 75, 255), 'wings': True, 'crown': True
    }),
    # Chapter 3: Plague Alchemarium
    ('monster_plague.png', {
        'kind': 'knight',
        'p_ramp': ((22, 30, 18), (58, 76, 46), (118, 148, 92)),
        's_ramp': ((14, 20, 12), (38, 52, 28), (82, 108, 62)),
        'w_ramp': ((38, 92, 18), (105, 215, 42), (195, 255, 115)),
        'eye': (175, 255, 60), 'horns': False
    }),
    ('monster_golem.png', {
        'kind': 'golem',
        'p_ramp': ((62, 38, 16), (148, 98, 42), (235, 178, 85)),
        's_ramp': ((38, 24, 12), (92, 58, 26), (168, 115, 55)),
        'w_ramp': ((35, 95, 22), (98, 215, 48), (185, 255, 125)),
        'eye': (135, 255, 65), 'horns': False
    }),
    ('monster_chimera_boss.png', {
        'kind': 'golem',
        'p_ramp': ((32, 68, 18), (85, 165, 42), (175, 250, 95)),
        's_ramp': ((34, 16, 46), (82, 42, 108), (155, 92, 195)),
        'w_ramp': ((58, 115, 22), (140, 235, 52), (225, 255, 140)),
        'eye': (255, 235, 55), 'wings': True, 'horns': True, 'crown': True
    }),
    # Chapter 4: Frostbite Spire
    ('monster_valkyrie.png', {
        'kind': 'knight',
        'p_ramp': ((28, 58, 96), (78, 145, 210), (175, 230, 255)),
        's_ramp': ((18, 38, 68), (48, 96, 155), (118, 185, 240)),
        'w_ramp': ((45, 98, 148), (115, 198, 245), (220, 250, 255)),
        'eye': (140, 255, 255), 'wings': True, 'horns': True
    }),
    ('monster_wyrm_boss.png', {
        'kind': 'hydra',
        'p_ramp': ((22, 52, 98), (68, 138, 215), (165, 228, 255)),
        's_ramp': ((14, 34, 68), (42, 92, 158), (110, 180, 240)),
        'w_ramp': ((58, 125, 185), (135, 215, 250), (230, 252, 255)),
        'eye': (160, 255, 255), 'wings': True, 'horns': True, 'crown': True
    }),
    # Chapter 5: The Abyssal Forge
    ('monster_hellknight.png', {
        'kind': 'knight',
        'p_ramp': ((24, 10, 12), (68, 26, 28), (138, 58, 52)),
        's_ramp': ((48, 12, 8), (128, 32, 18), (225, 78, 32)),
        'w_ramp': ((95, 24, 8), (215, 85, 18), (255, 215, 65)),
        'eye': (255, 215, 45), 'horns': True
    }),
    ('monster_azazel_boss.png', {
        'kind': 'golem',
        'p_ramp': ((54, 10, 12), (138, 26, 22), (235, 78, 42)),
        's_ramp': ((28, 6, 10), (78, 16, 22), (158, 42, 38)),
        'w_ramp': ((115, 32, 8), (235, 110, 20), (255, 235, 85)),
        'eye': (255, 245, 95), 'wings': True, 'horns': True, 'crown': True
    })
]

for fname, mcfg in VOL_MONSTERS:
    generate_volumetric_monster(fname, mcfg)

print("Generated volumetric 16-bit Hero and 13 Monsters/Bosses!")
