// CRYPT CLASH: Mobile Edition (iOS & Android PWA + Capacitor Ready)

const SAVE_KEY = 'crypt_clash_save_v2';

const I18N = {
  tr: {
    gameTitle: 'CRYPT CLASH',
    gameSub: 'EFSANELERİN ZİNDANI • ZAR & TAKTİK RPG',
    storyMode: '📖 Hikaye Modu (Gezgin Şövalye)',
    classicMode: '⚔️ Klasik Roguelike',
    startExpedition: 'SEFERE BAŞLA ➔',
    arenaPvp: 'ONLINE ARENA & PVP ➔',
    heroInventory: '🛡️ ŞÖVALYE & ENVANTER ➔',
    skillTree: 'Yetenek Ağacı',
    skillTreeSub: 'Seviye & Rün Gücü',
    dungeonMap: '10 Dünya & 100 Kat',
    dungeonMapSub: 'Dünya & Bölüm Seç',
    dungeonShop: 'Zindan Marketi',
    dungeonShopSub: 'Tılsım & Kılıçlar',
    howToPlay: 'Nasıl Oynanır?',
    howToPlaySub: 'Taktik & Rehber',
    bestiary: '📜 Canavar Ansiklopedisi',
    mobileInstall: '📲 Mobil Kurulum',
    resetProgress: '🔄 Sıfırla',
    crownChestTitle: 'KRALİYET TAÇ SANDIĞI',
    crownChestSub: '5 Zafer Kazan • Altın & Taş Aç!',
    dailyLoginTitle: '7 Günlük Giriş',
    idlePatrolTitle: 'Zindan Devriyesi',
    idlePatrolSub: 'AFK Ganimeti',
    chestSlotsTitle: 'SANDIK YUVALARI',
    chestSlotsSub: 'Dokunarak Aç veya Kilit Başlat',
    emptySlot: 'Boş Yuva',
    winToEarnChest: 'Savaş Kazan',
    tapToStart: 'Dokun: Başlat',
    readyToOpen: '🎁 AÇILABİLİR!',
    attack: 'SALDIRI',
    shield: 'KALKAN',
    heal: 'İYİLEŞME',
    rune: 'RÜN GÜCÜ',
    victory: 'ZAFER!',
    defeat: 'YENİLGİ!',
    searchingRival: 'RAKİP ARANIYOR...',
    matchFound: 'EŞLEŞME BULUNDU!',
    cancel: 'İptal Et'
  },
  en: {
    gameTitle: 'CRYPT CLASH',
    gameSub: 'DUNGEON OF LEGENDS • TACTICAL DICE RPG',
    storyMode: '📖 Story Mode (Wayfarer Knight)',
    classicMode: '⚔️ Classic Roguelike',
    startExpedition: 'START RUN ➔',
    arenaPvp: 'ONLINE ARENA & PVP ➔',
    heroInventory: '🛡️ KNIGHT & INVENTORY ➔',
    skillTree: 'Skill Tree',
    skillTreeSub: 'Level & Runes',
    dungeonMap: '10 Worlds & 100 Floors',
    dungeonMapSub: 'Worlds & Stages',
    dungeonShop: 'Dungeon Market',
    dungeonShopSub: 'Relics & Swords',
    howToPlay: 'How to Play',
    howToPlaySub: 'Tactics & Guide',
    bestiary: '📜 Monster Bestiary',
    mobileInstall: '📲 Mobile Install',
    resetProgress: '🔄 Reset',
    crownChestTitle: 'ROYAL CROWN CHEST',
    crownChestSub: 'Win 5 Battles • Unlock Gold & Gems!',
    dailyLoginTitle: '7-Day Login',
    idlePatrolTitle: 'Dungeon Patrol',
    idlePatrolSub: 'AFK Rewards',
    chestSlotsTitle: 'CHEST SLOTS',
    chestSlotsSub: 'Tap to Unlock or Open',
    emptySlot: 'Empty Slot',
    winToEarnChest: 'Win Battles',
    tapToStart: 'Tap: Unlock',
    readyToOpen: '🎁 READY TO OPEN!',
    attack: 'ATTACK',
    shield: 'SHIELD',
    heal: 'HEAL',
    rune: 'RUNE POWER',
    victory: 'VICTORY!',
    defeat: 'DEFEAT!',
    searchingRival: 'SEARCHING FOR RIVAL...',
    matchFound: 'MATCH FOUND!',
    cancel: 'Cancel'
  }
};

const BASE_ARCHETYPES = [
  {
    id: 1,
    name: 'Sular Altındaki Mahzen',
    subtitle: 'Yosunlu zindanlar, zehirli sular ve üç başlı Hidra\'nın ini.',
    bgKey: 'stage1',
    bgFile: 'assets/stage_1.png',
    weatherType: 'mist',
    weatherColor: 'rgba(80, 255, 150, 0.45)',
    torchColor: [255, 175, 65],
    enemies: [
      {
        name: 'Lanetli İskelet Muhafızı',
        spriteKey: 'skeleton',
        hp: 36,
        clashMod: 0,
        baseDmg: 6,
        gold: 12,
        xp: 15,
        trait: '💀 Paslı Kılıç • Kemik Zırhı'
      },
      {
        name: 'Kızıl Engerek Muhafızı',
        spriteKey: 'viper',
        hp: 40,
        clashMod: -1,
        baseDmg: 6,
        gold: 15,
        xp: 18,
        trait: '🐍 Çift Pala • Hızlı Saldırı'
      },
      {
        name: 'Boğulmuş Zırhlı Şövalye',
        spriteKey: 'drowned',
        hp: 50,
        clashMod: 0,
        baseDmg: 7,
        gold: 18,
        xp: 22,
        trait: '⚓ Paslı Zırh • Ağır Darbe'
      }
    ],
    boss: {
      name: 'Hidra Tiranı Vex [BÖLÜM BOSS]',
      spriteKey: 'hydra_boss',
      hp: 78,
      clashMod: 1,
      baseDmg: 9,
      gold: 35,
      xp: 45,
      trait: '🐉 3 Başlı Hidra • Her Tur +3 Can Yeniler',
      regen: 3,
      isBoss: true
    }
  },
  {
    id: 2,
    name: 'Kemik Katedrali',
    subtitle: 'Kanlı vitraylar, ruh emici gargoyle\'lar ve İskelet Kral Ossa.',
    bgKey: 'stage2',
    bgFile: 'assets/stage_2.png',
    weatherType: 'souls',
    weatherColor: 'rgba(215, 110, 255, 0.55)',
    torchColor: [215, 90, 255],
    enemies: [
      {
        name: 'Kanlı Engizisyoncu',
        spriteKey: 'inquisitor',
        hp: 56,
        clashMod: 0,
        baseDmg: 8,
        gold: 18,
        xp: 22,
        trait: '🩸 Kan Ritüeli • Vurduğunda +2 İyileşir',
        lifesteal: 2
      },
      {
        name: 'Obsidyen Gargoyle',
        spriteKey: 'gargoyle',
        hp: 66,
        clashMod: 1,
        baseDmg: 9,
        gold: 22,
        xp: 26,
        trait: '🗿 Taş Kanat • Yüksek Çarpışma'
      }
    ],
    boss: {
      name: 'Kemik Kral Ossa [BÖLÜM BOSS]',
      spriteKey: 'boneking_boss',
      hp: 96,
      clashMod: 1,
      baseDmg: 11,
      gold: 45,
      xp: 55,
      trait: '👑 Ruh Tırpanı • Çarpışma Kazanırsa +4 Hasar',
      isBoss: true
    }
  },
  {
    id: 3,
    name: 'Veba Simyahanesi',
    subtitle: 'Kaynayan mutajen tüpleri, mekanik golemler ve Simya Kimera\'sı.',
    bgKey: 'stage3',
    bgFile: 'assets/stage_3.png',
    weatherType: 'bubbles',
    weatherColor: 'rgba(150, 255, 65, 0.55)',
    torchColor: [155, 255, 55],
    enemies: [
      {
        name: 'Mutant Veba Doktoru',
        spriteKey: 'plague',
        hp: 68,
        clashMod: 1,
        baseDmg: 9,
        gold: 24,
        xp: 28,
        trait: '🧪 Asit Şişesi • Kalkanlara Ekstra Vurur'
      },
      {
        name: 'Pirinç Otomat Golem',
        spriteKey: 'golem',
        hp: 80,
        clashMod: 1,
        baseDmg: 10,
        gold: 28,
        xp: 32,
        trait: '⚙️ Buhar Çekici • Ağır Zırh'
      }
    ],
    boss: {
      name: 'Simya Ucubesi Kimera [BÖLÜM BOSS]',
      spriteKey: 'chimera_boss',
      hp: 115,
      clashMod: 2,
      baseDmg: 12,
      gold: 55,
      xp: 65,
      trait: '☣️ Mutajenik Evrim • Her Tur +4 Can Yeniler',
      regen: 4,
      isBoss: true
    }
  },
  {
    id: 4,
    name: 'Donmuş Gözcü Kulesi',
    subtitle: 'Buz sarkıtları, kuzey fırtınası ve Kadim Buz Ejderi Boreas.',
    bgKey: 'stage4',
    bgFile: 'assets/stage_4.png',
    weatherType: 'snow',
    weatherColor: 'rgba(210, 245, 255, 0.75)',
    torchColor: [95, 225, 255],
    enemies: [
      {
        name: 'Kuzey Valkür Hayaleti',
        spriteKey: 'valkyrie',
        hp: 82,
        clashMod: 2,
        baseDmg: 11,
        gold: 30,
        xp: 35,
        trait: '❄️ Buz Mızrağı • Çarpışma +2'
      },
      {
        name: 'Buzul Muhafızı',
        spriteKey: 'drowned',
        hp: 92,
        clashMod: 1,
        baseDmg: 12,
        gold: 34,
        xp: 38,
        trait: '🧊 Kristal Zırh • Yüksek Can'
      }
    ],
    boss: {
      name: 'Buz Ejderi Boreas [BÖLÜM BOSS]',
      spriteKey: 'wyrm_boss',
      hp: 135,
      clashMod: 2,
      baseDmg: 14,
      gold: 70,
      xp: 80,
      trait: '🐲 Sıfır Altı Nefes • Çarpışma +2',
      isBoss: true
    }
  },
  {
    id: 5,
    name: 'Cehennem Ocağı',
    subtitle: 'Lav nehirleri, kan tutulması ve Karanlık Tanrı Azazel.',
    bgKey: 'stage5',
    bgFile: 'assets/stage_5.png',
    weatherType: 'embers',
    weatherColor: 'rgba(255, 145, 35, 0.8)',
    torchColor: [255, 130, 25],
    enemies: [
      {
        name: 'Cehennem Şövalyesi',
        spriteKey: 'hellknight',
        hp: 98,
        clashMod: 2,
        baseDmg: 13,
        gold: 38,
        xp: 45,
        trait: '🔥 Magma Kılıcı • Saldırıda +2 Yanma'
      },
      {
        name: 'Kızıl İblis Muhafız',
        spriteKey: 'viper',
        hp: 108,
        clashMod: 2,
        baseDmg: 14,
        gold: 42,
        xp: 48,
        trait: '👹 Cehennem Palası • Hızlı'
      }
    ],
    boss: {
      name: 'Karanlık Tanrı Azazel [BÖLÜM BOSS]',
      spriteKey: 'azazel_boss',
      hp: 165,
      clashMod: 3,
      baseDmg: 16,
      gold: 100,
      xp: 120,
      trait: '🔥 KÜLLERİN EFENDİSİ • Her Tur +4 Yenilenme',
      regen: 4,
      isBoss: true
    }
  }
];

const WORLDS_CONFIG = [
  {
    worldId: 1,
    name: 'Batık Sarnıçlar',
    icon: '🌊',
    archIdx: 0,
    bgTint: null,
    subNames: ['Yosunlu Giriş', 'Su Kemeri', 'Zehirli Kanal', 'Karanlık Sarnıç', 'Yılan Yuvası', 'Boğulmuş Salon', 'Batık Koridor', 'Derin Girdap', 'Mühürlü Havuz', 'Hidra Tapınağı']
  },
  {
    worldId: 2,
    name: 'Kemik Katedrali',
    icon: '💀',
    archIdx: 1,
    bgTint: null,
    subNames: ['Kanlı Avlu', 'Kemik Sütunlar', 'Vitraylı Salon', 'Engizisyon Mahzeni', 'Gargoyle Çatısı', 'Karanlık Mihrap', 'Ruh Koridoru', 'Kafatası Kulesi', 'Ölüler Meclisi', 'Kral Ossa Tahtı']
  },
  {
    worldId: 3,
    name: 'Veba Simyahanesi',
    icon: '🧪',
    archIdx: 2,
    bgTint: null,
    subNames: ['Asit Girişi', 'Mutajen Kazanı', 'Buhar Тüneli', 'Zehirli Sera', 'Dişli Atölyesi', 'Golem Dökümhanesi', 'Deney Hücreleri', 'Yeşil Duman Odası', 'Simya Çekirdeği', 'Kimera Laboratuvarı']
  },
  {
    worldId: 4,
    name: 'Donmuş Gözcü Kulesi',
    icon: '❄️',
    archIdx: 3,
    bgTint: null,
    subNames: ['Buzlu Merdiven', 'Rüzgarlı Siper', 'Kırağı Salonu', 'Donmuş Cephanelik', 'Valkür Balkonu', 'Kristal Mağara', 'Fırtına Köprüsü', 'Kutup Zindanı', 'Sıfır Altı Zirve', 'Ejder Boreas İni']
  },
  {
    worldId: 5,
    name: 'Cehennem Ocağı',
    icon: '🔥',
    archIdx: 4,
    bgTint: null,
    subNames: ['Kül Geçidi', 'Magma Köprüsü', 'Obsidyen Kapı', 'Kanlı Örs', 'İblis Kışlası', 'Lav Şelalesi', 'Kızıl Krater', 'Cehennem Çukuru', 'Karanlık Koridor', 'Azazel\'in Ocağı']
  },
  {
    worldId: 6,
    name: 'Zümrüt Bataklık & Gorgon',
    icon: '🐍',
    archIdx: 0,
    bgTint: 'rgba(16, 185, 129, 0.22)',
    weatherColor: 'rgba(52, 211, 153, 0.65)',
    torchColor: [52, 211, 153],
    subNames: ['Zehirli Sazlık', 'Çürümüş Kökler', 'Bataklık Tapınağı', 'Taşlaşmış Muhafızlar', 'Yılanlı Geçit', 'Yeşil Sis Vadisi', 'Lanetli Orman', 'Zümrüt Mağara', 'Gorgon Sunağı', 'Medusa\'nın Tahtı']
  },
  {
    worldId: 7,
    name: 'Kızıl Kan Kalesi',
    icon: '🩸',
    archIdx: 1,
    bgTint: 'rgba(220, 38, 38, 0.24)',
    weatherColor: 'rgba(248, 113, 113, 0.65)',
    torchColor: [248, 113, 113],
    subNames: ['Kanlı Hendek', 'Vampir Salonu', 'Kızıl Zindan', 'Karanlık Ziyafet', 'Gotik Kule', 'Kan Ayini Odası', 'Gölge Mahzeni', 'Lanetli Balkon', 'Ölümsüzler Koridoru', 'Kan Lordu Sarayı']
  },
  {
    worldId: 8,
    name: 'Altın Kumlar & Sfenks',
    icon: '🏜️',
    archIdx: 2,
    bgTint: 'rgba(234, 179, 8, 0.22)',
    weatherColor: 'rgba(253, 224, 71, 0.6)',
    torchColor: [250, 204, 21],
    subNames: ['Kum Fırtınası Kapısı', 'Antik Piramit', 'Akrep Dehlizi', 'Mumya Mezarı', 'Altın Lahit', 'Güneş Tapınağı', 'Kum Girdabı', 'Firavun Hazinesi', 'Kutsal Obelisk', 'Antik Sfenks Odası']
  },
  {
    worldId: 9,
    name: 'Yıldız & Astral Kule',
    icon: '🌌',
    archIdx: 3,
    bgTint: 'rgba(139, 92, 246, 0.25)',
    weatherColor: 'rgba(196, 181, 253, 0.75)',
    torchColor: [167, 139, 250],
    subNames: ['Kozmik Basamaklar', 'Yıldız Tozu Salonu', 'Nebula Köprüsü', 'Astral Kütüphane', 'Kuyruklu Yıldız Geçidi', 'Göktaşı Krateri', 'Zaman Çatlağı', 'Kristal Gözlemevi', 'Sonsuzluk Kapısı', 'Astral Hükümdar Zirvesi']
  },
  {
    worldId: 10,
    name: 'Sonsuz Boşluk Tahtı (Final)',
    icon: '👑',
    archIdx: 4,
    bgTint: 'rgba(192, 38, 211, 0.26)',
    weatherColor: 'rgba(240, 171, 252, 0.8)',
    torchColor: [232, 121, 249],
    subNames: ['Hiçlik Sınırı', 'Karanlık Yarığı', 'Kaos Köprüsü', 'Kader Koridoru', 'Efsaneler Mezarlığı', 'Kıyamet Sunağı', 'Ruh Fırtınası', 'Tanrıların Düşüşü', 'Son Mühür', '100. Kat: Boşluk İmparatoru']
  }
];

// Generate all 100 Levels across 10 Worlds!
const CHAPTERS = Array.from({ length: 100 }, (_, i) => {
  const levelNum = i + 1;
  const worldIdx = Math.floor(i / 10);
  const stageInWorld = (i % 10) + 1;
  const wCfg = WORLDS_CONFIG[worldIdx] || WORLDS_CONFIG[0];
  const arch = BASE_ARCHETYPES[wCfg.archIdx] || BASE_ARCHETYPES[0];
  const subName = wCfg.subNames[stageInWorld - 1] || `Bölge ${stageInWorld}`;

  const hpScale = 1 + i * 0.14;
  const dmgScale = 1 + i * 0.09;
  const rewardScale = 1 + i * 0.12;
  const extraClash = Math.floor(i / 18);

  return {
    id: levelNum,
    worldId: wCfg.worldId,
    worldName: wCfg.name,
    worldIcon: wCfg.icon,
    stageInWorld,
    baseArchId: arch.id,
    name: `${wCfg.name}: ${subName}`,
    subtitle: `Dünya ${wCfg.worldId} (Bölüm ${levelNum}/100) • ${arch.subtitle}`,
    bgKey: arch.bgKey,
    bgFile: arch.bgFile,
    bgTint: wCfg.bgTint || null,
    weatherType: arch.weatherType,
    weatherColor: wCfg.weatherColor || arch.weatherColor,
    torchColor: wCfg.torchColor || arch.torchColor,
    enemies: arch.enemies.map((e) => ({
      ...e,
      hp: Math.round(e.hp * hpScale),
      baseDmg: Math.round(e.baseDmg * dmgScale),
      clashMod: e.clashMod + extraClash,
      gold: Math.round(e.gold * rewardScale),
      xp: Math.round(e.xp * rewardScale)
    })),
    boss: {
      ...arch.boss,
      name: stageInWorld === 10
        ? `👑 ${wCfg.name} Hakimi: ${arch.boss.name}`
        : `${arch.boss.name.replace(' [BÖLÜM BOSS]', '')} (Kat ${levelNum}) [BOSS]`,
      hp: Math.round(arch.boss.hp * hpScale * (stageInWorld === 10 ? 1.15 : 1.0)),
      baseDmg: Math.round(arch.boss.baseDmg * dmgScale),
      clashMod: arch.boss.clashMod + extraClash,
      gold: Math.round(arch.boss.gold * rewardScale),
      xp: Math.round(arch.boss.xp * rewardScale),
      isBoss: true
    }
  };
});

// =========================================================
// HERO CUSTOMIZATION & BOSS DROP GEAR CATALOG
// =========================================================
const HERO_GEAR_CATALOG = [
  // HELMETS / CROWNS (Miğfer, Yüz & Kask)
  {
    id: 'helm_unhelmed',
    slot: 'helm',
    name: 'Açık Yüz & Kraliyet Çemberi',
    icon: '👑',
    portraitSrc: 'assets/hero_front_helm_unhelmed.png',
    rarity: 'common',
    rarityLabel: 'Şövalye Yüzü',
    stats: { hp: 2, atk: 1, shield: 0, clash: 0, rune: 0 },
    desc: '+2 Maks Can, +1 Saldırı • Miğfersiz Şövalye Yüzü',
    source: 'Başlangıç Görünümü',
    costGold: 0
  },
  {
    id: 'helm_iron',
    slot: 'helm',
    name: 'Gezgin Demir Miğferi',
    icon: '🪖',
    portraitSrc: 'assets/hero_front_helm_iron.png',
    rarity: 'common',
    rarityLabel: 'Başlangıç',
    stats: { hp: 0, atk: 0, shield: 2, clash: 0, rune: 0 },
    desc: '+2 Başlangıç Kalkanı • T-Vizörlü Şövalye Kaskı',
    source: 'Başlangıç Ekipmanı',
    costGold: 0
  },
  {
    id: 'helm_hydra',
    slot: 'helm',
    name: 'Hidra Dişi Miğfer',
    icon: '🐲',
    portraitSrc: 'assets/hero_front_helm_hydra.png',
    rarity: 'epic',
    rarityLabel: 'Destansı Boss Eşyası',
    stats: { hp: 8, atk: 1, shield: 0, clash: 0, rune: 1 },
    desc: '+8 Maks Can, +1 Saldırı, +1 Rün',
    source: 'Boss Ganimeti (Hidra Tiranı Vex)',
    dropBoss: 'hydra_boss',
    costGold: 45
  },
  {
    id: 'helm_bonecrown',
    slot: 'helm',
    name: 'Kral Ossa\'nın Kemik Tacı',
    icon: '👑',
    portraitSrc: 'assets/hero_front_helm_boneking.png',
    rarity: 'legendary',
    rarityLabel: 'Efsanevi Boss Kaskı',
    stats: { hp: 6, atk: 2, shield: 4, clash: 1, rune: 0 },
    desc: '+2 Saldırı, +1 Çarpışma Zarı, +6 Can, +4 Kalkan',
    source: 'Boss Ganimeti (Kemik Kral Ossa)',
    dropBoss: 'boneking_boss',
    costGold: 65
  },
  {
    id: 'helm_plague',
    slot: 'helm',
    name: 'Simyacı Kimera Miğferi',
    icon: '🎭',
    portraitSrc: 'assets/hero_front_helm_chimera.png',
    rarity: 'epic',
    rarityLabel: 'Destansı Boss Eşyası',
    stats: { hp: 10, atk: 0, shield: 4, clash: 0, rune: 3 },
    desc: '+10 Maks Can, +3 Rün Yıldırımı, +4 Kalkan',
    source: 'Boss Ganimeti (Kimera)',
    dropBoss: 'chimera_boss',
    costGold: 75
  },
  {
    id: 'helm_boreas',
    slot: 'helm',
    name: 'Boreas Kanatlı Kuzey Kaskı',
    icon: '❄️',
    portraitSrc: 'assets/hero_front_helm_wyrm.png',
    rarity: 'legendary',
    rarityLabel: 'Efsanevi Boss Kaskı',
    stats: { hp: 14, atk: 2, shield: 8, clash: 1, rune: 2 },
    desc: '+14 Can, +8 Mavi Kalkan, +2 Saldırı, +1 Çarpışma',
    source: 'Boss Ganimeti (Buz Ejderi Boreas)',
    dropBoss: 'wyrm_boss',
    costGold: 95
  },
  {
    id: 'helm_azazel',
    slot: 'helm',
    name: 'Azazel\'in Cehennem Halesi',
    icon: '👿',
    portraitSrc: 'assets/hero_front_helm_azazel.png',
    rarity: 'mythic',
    rarityLabel: 'Mitik Boss Tacı',
    stats: { hp: 20, atk: 4, shield: 8, clash: 2, rune: 3 },
    desc: '+4 Saldırı, +2 Çarpışma, +20 Can, +8 Kalkan, +3 Rün',
    source: 'Boss Ganimeti (Karanlık Tanrı Azazel)',
    dropBoss: 'azazel_boss',
    costGold: 140
  },
  {
    id: 'helm_eternal',
    slot: 'helm',
    name: 'Ebedi Hükümdar Kanatlı Tacı',
    icon: '🌟',
    portraitSrc: 'assets/hero_front_helm_eternal.png',
    rarity: 'mythic',
    rarityLabel: '100. Bölüm Efsanesi',
    stats: { hp: 28, atk: 5, shield: 12, clash: 2, rune: 4 },
    desc: '+5 Saldırı, +2 Çarpışma, +28 Can, +12 Kalkan, +4 Rün',
    source: 'Dünya 10 Boss Ganimeti',
    dropBoss: 'azazel_boss',
    costGold: 180
  },

  // ARMOR & SKINS (Zırh & Karakter Görünümü)
  {
    id: 'armor_steel',
    slot: 'armor',
    name: 'Gezgin Çelik Zırhı',
    icon: '🛡️',
    rarity: 'common',
    rarityLabel: 'Başlangıç',
    stats: { hp: 4, atk: 0, shield: 0, clash: 0, rune: 0 },
    desc: '+4 Maksimum Can • Klasik Çelik Görünüm',
    source: 'Başlangıç Zırhı',
    skinFilter: 'none',
    costGold: 0
  },
  {
    id: 'armor_emerald',
    slot: 'armor',
    name: 'Zehirli Hidra Pullu Zırhı',
    icon: '🐉',
    rarity: 'epic',
    rarityLabel: 'Destansı Zırh',
    stats: { hp: 12, atk: 1, shield: 6, clash: 0, rune: 1 },
    desc: '+12 Can, +6 Kalkan, +1 Saldırı • Zümrüt Yeşili Zırh',
    source: 'Boss Ganimeti veya 55 Altın',
    dropBoss: 'hydra_boss',
    skinFilter: 'hue-rotate(95deg) saturate(1.45)',
    costGold: 55
  },
  {
    id: 'armor_crimson',
    slot: 'armor',
    name: 'Kan Şövalyesi Plaka Zırhı',
    icon: '🩸',
    rarity: 'epic',
    rarityLabel: 'Destansı Zırh',
    stats: { hp: 15, atk: 3, shield: 4, clash: 0, rune: 0 },
    desc: '+15 Can, +3 Saldırı, +4 Kalkan • Kızıl Kan Zırhı',
    source: 'Boss Ganimeti (Ossa) veya 70 Altın',
    dropBoss: 'boneking_boss',
    skinFilter: 'sepia(0.55) hue-rotate(-35deg) saturate(2.1)',
    costGold: 70
  },
  {
    id: 'armor_frost',
    slot: 'armor',
    name: 'Buzul Valkür Kristal Zırhı',
    icon: '🧊',
    rarity: 'legendary',
    rarityLabel: 'Efsanevi Zırh',
    stats: { hp: 18, atk: 2, shield: 12, clash: 1, rune: 2 },
    desc: '+18 Can, +12 Kalkan, +1 Çarpışma • Buz Mavisi Görünüm',
    source: 'Boss Ganimeti (Boreas) veya 90 Altın',
    dropBoss: 'wyrm_boss',
    skinFilter: 'hue-rotate(175deg) saturate(1.6) brightness(1.08)',
    costGold: 90
  },
  {
    id: 'armor_gold',
    slot: 'armor',
    name: 'Kutsal İmparator Altın Zırhı',
    icon: '⚜️',
    rarity: 'legendary',
    rarityLabel: 'Mitik Zırh',
    stats: { hp: 25, atk: 3, shield: 14, clash: 2, rune: 3 },
    desc: '+25 Can, +14 Kalkan, +3 Saldırı, +2 Çarpışma • Altın Görünüm',
    source: 'Boss Ganimeti (Azazel) veya 130 Altın',
    dropBoss: 'azazel_boss',
    skinFilter: 'sepia(0.85) hue-rotate(5deg) saturate(2.4) brightness(1.12)',
    costGold: 130
  },

  // WEAPONS (Kılıç & Silah)
  {
    id: 'weapon_iron',
    slot: 'weapon',
    name: 'Gezgin Demir Kılıcı',
    icon: '🗡️',
    rarity: 'common',
    rarityLabel: 'Başlangıç',
    stats: { hp: 0, atk: 1, shield: 0, clash: 0, rune: 0 },
    desc: '+1 Saldırı Hasarı',
    source: 'Başlangıç Silahı',
    slashColor: 'silver',
    costGold: 0
  },
  {
    id: 'weapon_venom',
    slot: 'weapon',
    name: 'Engerek & Hidra Zehir Kılıcı',
    icon: '🐍',
    rarity: 'epic',
    rarityLabel: 'Destansı Silah',
    stats: { hp: 0, atk: 3, shield: 0, clash: 1, rune: 1 },
    desc: '+3 Saldırı, +1 Çarpışma, +1 Rün',
    source: 'Boss Ganimeti veya 50 Altın',
    dropBoss: 'hydra_boss',
    slashColor: 'crimson',
    costGold: 50
  },
  {
    id: 'weapon_scythe',
    slot: 'weapon',
    name: 'Ossa\'nın Ruh Biçen Tırpanı',
    icon: '⚔️',
    rarity: 'legendary',
    rarityLabel: 'Efsanevi Silah',
    stats: { hp: 4, atk: 5, shield: 0, clash: 1, rune: 2 },
    desc: '+5 Saldırı, +1 Çarpışma, +2 Rün, +4 Can',
    source: 'Boss Ganimeti (Ossa) veya 80 Altın',
    dropBoss: 'boneking_boss',
    slashColor: 'violet',
    costGold: 80
  },
  {
    id: 'weapon_frostblade',
    slot: 'weapon',
    name: 'Boreas Ebedi Buz Kılıcı',
    icon: '❄️',
    rarity: 'legendary',
    rarityLabel: 'Efsanevi Silah',
    stats: { hp: 6, atk: 6, shield: 5, clash: 2, rune: 2 },
    desc: '+6 Saldırı, +2 Çarpışma, +5 Kalkan',
    source: 'Boss Ganimeti (Boreas) veya 105 Altın',
    dropBoss: 'wyrm_boss',
    slashColor: 'frost',
    costGold: 105
  },
  {
    id: 'weapon_hellblade',
    slot: 'weapon',
    name: 'Azazel Kıyamet Yaran Kılıcı',
    icon: '🔥',
    rarity: 'legendary',
    rarityLabel: 'Mitik Silah',
    stats: { hp: 10, atk: 9, shield: 6, clash: 2, rune: 4 },
    desc: '+9 Saldırı, +2 Çarpışma, +4 Rün, +10 Can',
    source: 'Boss Ganimeti (Azazel) veya 150 Altın',
    dropBoss: 'azazel_boss',
    slashColor: 'magma',
    costGold: 150
  },

  // CAPES & AURAS (Pelerin & Aura Görünümü)
  {
    id: 'cape_traveler',
    slot: 'cape',
    name: 'Gezgin Yün Pelerini',
    icon: '🧣',
    rarity: 'common',
    rarityLabel: 'Başlangıç',
    stats: { hp: 2, atk: 0, shield: 0, clash: 0, rune: 0 },
    desc: '+2 Maks Can',
    source: 'Başlangıç Ekipmanı',
    auraColor: 'rgba(56, 189, 248, 0.35)',
    costGold: 0
  },
  {
    id: 'cape_shadow',
    slot: 'cape',
    name: 'Katedral Gölge Kanatları',
    icon: '🦇',
    rarity: 'epic',
    rarityLabel: 'Destansı Aura',
    stats: { hp: 6, atk: 2, shield: 4, clash: 1, rune: 1 },
    desc: '+1 Çarpışma, +2 Saldırı, +6 Can • Mor Gölge Aurası',
    source: 'Boss Ganimeti veya 60 Altın',
    dropBoss: 'chimera_boss',
    auraColor: 'rgba(192, 132, 252, 0.7)',
    costGold: 60
  },
  {
    id: 'cape_phoenix',
    slot: 'cape',
    name: 'Cehennem Anka Kanat Aurası',
    icon: '🔥',
    rarity: 'legendary',
    rarityLabel: 'Efsanevi Aura',
    stats: { hp: 14, atk: 3, shield: 8, clash: 2, rune: 3 },
    desc: '+2 Çarpışma, +3 Saldırı, +14 Can • Altın Ateş Aurası',
    source: 'Boss Ganimeti (Azazel) veya 115 Altın',
    dropBoss: 'azazel_boss',
    auraColor: 'rgba(251, 191, 36, 0.85)',
    costGold: 115
  }
];

const STORY_CHAPTER_LORE = [
  {
    chapter: 1,
    title: 'Mahzenin Girişi & Lanetli Kemikler',
    tag: 'DÜNYA 1: GİRİŞ',
    lore: '"Lanetli suların şapırtısı karanlık tonozlu dehlizlerde yankılanıyor. Yıllardır kayıp olan Kadim Kadeh\'in izini sürerken, yosun kaplı basamaklardan aşağı indim. Zırhım soğuk sisle ıslandı; karanlıkta parıldayan kırmızı gözler ve kemik şakırtıları var. Karşıma dikilen ilk muhafız: Lanetli bir İskelet!"'
  },
  {
    chapter: 2,
    title: 'Kemik Katedrali & Ruh Vitrayları',
    tag: 'DÜNYA 2: KATEDRAL',
    lore: '"Kemik Katedrali\'nin kan lekeli vitrayları arkamda kaldı. Kadim şövalye yoldaşlarımın kemikleri burada huzursuzca kıpırdanıyor. Gargoyle\'ların gölgeleri havada süzülürken kılıcımı sıkıca kavradım. İskelet Kral Ossa tahtında beni bekliyor."'
  },
  {
    chapter: 3,
    title: 'Veba Simyahanesi & Mekanik Dehşet',
    tag: 'DÜNYA 3: SİMYAHANE',
    lore: '"Simyacıların yeşil mutajen kazanları zehirli buharlar püskürtüyor. Pirinç otomat golem adımları yeri sarsıyor. Her nefeste havadaki zehir zırhımı aşındırıyor; sadece çelik irade ve rünlerin gücü beni bu zehirli cehennemden sağ çıkarabilir."'
  },
  {
    chapter: 4,
    title: 'Donmuş Gözcü Kulesi & Boreas\'ın İni',
    tag: 'DÜNYA 4: BUZUL KULE',
    lore: '"Buzul rüzgarları zırhımın eklemlerini donduruyor. Kulenin en tepesinde yüzyıllardır uyuyan Buz Ejderi Boreas uyanmak üzere. Kar fırtınasının ortasında donmuş basamakları tırmanırken şövalyelik andımı fısıldıyorum."'
  },
  {
    chapter: 5,
    title: 'Cehennem Ocağı & Tanrı Azazel',
    tag: 'DÜNYA 5+: KARANLIK DİYARLAR',
    lore: '"Cehennem Ocağı\'nın lav gölleri üzerinde son köprüye ulaştım. Karanlık Tanrı Azazel küllerin arasından yükseliyor. Bu sadece bir şövalyenin değil, tüm 10 dünyanın kader savaşı. Kılıcım hazır; zarlar atılsın!"'
  }
];

const BRANCHING_MAPS = {
  1: [
    { rank: 1, nodes: [{ id: '1', name: 'Mahzen Girişi', type: 'battle', icon: '💀', badge: '1 Düşman', enemyType: 'skeleton' }] },
    { rank: 2, nodes: [
      { id: '2A', name: 'Dar Koridor', type: 'battle', icon: '🐍', badge: 'Engerek', enemyType: 'viper' },
      { id: '2B', name: 'Kemik Çukuru', type: 'battle', icon: '💀🐍', badge: '2 Düşman!', enemyType: 'dual_skel_viper' }
    ]},
    { rank: 3, nodes: [
      { id: '3A', name: 'Kadim Sunak', type: 'shrine', icon: '⛩️', badge: 'Takdis' },
      { id: '3B', name: 'Gizli Sandık', type: 'chest', icon: '👑', badge: 'Hazine' }
    ]},
    { rank: 4, nodes: [
      { id: '4A', name: 'Kamp & Demirci', type: 'campfire', icon: '🔥', badge: 'Dinlen' },
      { id: '4B', name: 'Gezgin Simyacı', type: 'shop', icon: '🔮', badge: 'Market' }
    ]},
    { rank: 5, nodes: [{ id: '5', name: 'Hidra Tiranı Vex', type: 'boss', icon: '🐉', badge: 'BÖLÜM BOSS' }] }
  ],
  2: [
    { rank: 1, nodes: [{ id: '1', name: 'Katedral Kapısı', type: 'battle', icon: '🩸', badge: 'Engizisyon', enemyType: 'inquisitor' }] },
    { rank: 2, nodes: [
      { id: '2A', name: 'Gargoyle Kulesi', type: 'battle', icon: '🗿', badge: 'Gargoyle', enemyType: 'gargoyle' },
      { id: '2B', name: 'Mezar Mahzeni', type: 'battle', icon: '💀🩸', badge: '2 Düşman!', enemyType: 'dual_skel_inq' }
    ]},
    { rank: 3, nodes: [
      { id: '3A', name: 'Işık Sunağı', type: 'shrine', icon: '⛩️', badge: 'Takdis' },
      { id: '3B', name: 'Ruh Sandığı', type: 'chest', icon: '👑', badge: 'Hazine' }
    ]},
    { rank: 4, nodes: [
      { id: '4A', name: 'Kamp Ateşi', type: 'campfire', icon: '🔥', badge: 'Dinlen' },
      { id: '4B', name: 'Kadim Simyacı', type: 'shop', icon: '🔮', badge: 'Market' }
    ]},
    { rank: 5, nodes: [{ id: '5', name: 'Kemik Kral Ossa', type: 'boss', icon: '👑', badge: 'BÖLÜM BOSS' }] }
  ],
  3: [
    { rank: 1, nodes: [{ id: '1', name: 'Simya Laboratuvarı', type: 'battle', icon: '🧪', badge: 'Veba Dr.', enemyType: 'plague' }] },
    { rank: 2, nodes: [
      { id: '2A', name: 'Buhar Kazanı', type: 'battle', icon: '⚙️', badge: 'Golem', enemyType: 'golem' },
      { id: '2B', name: 'Mutasyon Çukuru', type: 'battle', icon: '🧪⚙️', badge: '2 Düşman!', enemyType: 'dual_plague_golem' }
    ]},
    { rank: 3, nodes: [
      { id: '3A', name: 'Rün Sunağı', type: 'shrine', icon: '⛩️', badge: 'Takdis' },
      { id: '3B', name: 'Simya Kasası', type: 'chest', icon: '👑', badge: 'Hazine' }
    ]},
    { rank: 4, nodes: [
      { id: '4A', name: 'Örs & Dinlenme', type: 'campfire', icon: '🔥', badge: 'Dinlen' },
      { id: '4B', name: 'Tüccar Karavanı', type: 'shop', icon: '🔮', badge: 'Market' }
    ]},
    { rank: 5, nodes: [{ id: '5', name: 'Kimera Ucubesi', type: 'boss', icon: '☣️', badge: 'BÖLÜM BOSS' }] }
  ],
  4: [
    { rank: 1, nodes: [{ id: '1', name: 'Donmuş Merdiven', type: 'battle', icon: '❄️', badge: 'Valkyrie', enemyType: 'valkyrie' }] },
    { rank: 2, nodes: [
      { id: '2A', name: 'Buzul Terası', type: 'battle', icon: '🛡️', badge: 'Muhafız', enemyType: 'drowned' },
      { id: '2B', name: 'Buz Çukuru', type: 'battle', icon: '❄️💀', badge: '2 Düşman!', enemyType: 'dual_valk_skel' }
    ]},
    { rank: 3, nodes: [
      { id: '3A', name: 'Buzul Sunağı', type: 'shrine', icon: '⛩️', badge: 'Takdis' },
      { id: '3B', name: 'Kraliyet Sandığı', type: 'chest', icon: '👑', badge: 'Hazine' }
    ]},
    { rank: 4, nodes: [
      { id: '4A', name: 'Sıcak Kamp', type: 'campfire', icon: '🔥', badge: 'Dinlen' },
      { id: '4B', name: 'Buzul Tüccarı', type: 'shop', icon: '🔮', badge: 'Market' }
    ]},
    { rank: 5, nodes: [{ id: '5', name: 'Ejder Boreas', type: 'boss', icon: '🐲', badge: 'BÖLÜM BOSS' }] }
  ],
  5: [
    { rank: 1, nodes: [{ id: '1', name: 'Lav Köprüsü', type: 'battle', icon: '🔥', badge: 'Cehennem Şövalyesi', enemyType: 'hellknight' }] },
    { rank: 2, nodes: [
      { id: '2A', name: 'Kızıl Geçit', type: 'battle', icon: '👹', badge: 'İblis', enemyType: 'viper' },
      { id: '2B', name: 'Magma Çukuru', type: 'battle', icon: '🔥👹', badge: '2 Düşman!', enemyType: 'dual_hell_demon' }
    ]},
    { rank: 3, nodes: [
      { id: '3A', name: 'Karanlık Sunak', type: 'shrine', icon: '⛩️', badge: 'Takdis' },
      { id: '3B', name: 'Azazel Sandığı', type: 'chest', icon: '👑', badge: 'Hazine' }
    ]},
    { rank: 4, nodes: [
      { id: '4A', name: 'Magma Ocağı', type: 'campfire', icon: '🔥', badge: 'Dinlen' },
      { id: '4B', name: 'Gölge Tüccar', type: 'shop', icon: '🔮', badge: 'Market' }
    ]},
    { rank: 5, nodes: [{ id: '5', name: 'Tanrı Azazel', type: 'boss', icon: '👑', badge: 'FİNAL BOSS' }] }
  ]
};

const ROOM_TYPES = [
  { room: 1, icon: '⚔️', label: 'Öncü Savaş' },
  { room: 2, icon: '⛩️', label: 'Kadim Sunak' },
  { room: 3, icon: '💀', label: 'Elit Muhafız' },
  { room: 4, icon: '🔥', label: 'Kamp & Demirci' },
  { room: 5, icon: '👑', label: 'BÖLÜM BOSS' }
];

const RELICS = {
  whetstone: {
    id: 'whetstone',
    name: 'Kan Taşı',
    icon: '🩸',
    badge: '+Hasar',
    desc: 'Zarı buraya bırak: Bu tur Çarpışma +2 ve sonraki saldırına +Zar kadar ekstra hasar verir.'
  },
  buckler: {
    id: 'buckler',
    name: 'Rün Kalkanı',
    icon: '🛡️',
    badge: '2xKalkan',
    desc: 'Zarı buraya bırak: Zar × 2 kadar Mavi Kalkan kazan ve düşmana 4 diken hasarı vur.'
  },
  vampire: {
    id: 'vampire',
    name: 'Vampir Yüzüğü',
    icon: '💍',
    badge: 'Can Çal',
    desc: 'Zarı buraya bırak: Düşmandan (Zar + 3) kadar can sömürür ve seni iyileştirir.'
  },
  alchemist: {
    id: 'alchemist',
    name: 'Simya Küresi',
    icon: '🔮',
    badge: 'Zar -> 6',
    desc: 'Zarı buraya bırak: +5 Can yeniler ve zarı anında 6\'ya dönüştürüp geri verir!'
  }
};

const TALENT_BRANCHES = {
  warrior: {
    name: '🔴 Savaşçı Yolu',
    color: '#ff5e5e',
    talents: [
      {
        id: 'w1',
        name: 'Keskin Bıçak',
        icon: '🗡️',
        cost: 1,
        req: null,
        desc: 'Tüm kılıç saldırılarına kalıcı +1 Taban Hasar ekler.'
      },
      {
        id: 'w2',
        name: 'Çarpışma Üstünlüğü',
        icon: '⚔️',
        cost: 2,
        req: 'w1',
        desc: 'Her tur başındaki Çarpışma Zarına kalıcı +1 bonus ekler.'
      },
      {
        id: 'w3',
        name: 'Kritik Kanama',
        icon: '🩸',
        cost: 3,
        req: 'w2',
        desc: 'Saldırı zarı 6 geldiğinde hedefe ekstra +4 Kanama uygular.'
      },
      {
        id: 'w4',
        name: 'Kana Susamışlık',
        icon: '💀',
        cost: 4,
        req: 'w3',
        desc: 'Bir düşmanı alt ettiğinde anında +6 Can yenilenir.'
      }
    ]
  },
  guardian: {
    name: '🔵 Muhafız Yolu',
    color: '#3bb6ff',
    talents: [
      {
        id: 'g1',
        name: 'Çelik İrade',
        icon: '🛡️',
        cost: 1,
        req: null,
        desc: 'Maksimum Canını kalıcı +8 artırır ve mevcut canını doldurur.'
      },
      {
        id: 'g2',
        name: 'Rün Kalkanı',
        icon: '🔷',
        cost: 2,
        req: 'g1',
        desc: 'Her savaşa fazladan +6 bedava Mavi Kalkan ile başlarsın.'
      },
      {
        id: 'g3',
        name: 'Dikenli Zırh',
        icon: '🌵',
        cost: 3,
        req: 'g2',
        desc: 'Kalkanın varken darbe aldığında düşmana 4 yansıma hasarı vurur.'
      },
      {
        id: 'g4',
        name: 'İkinci Şans',
        icon: '🕊️',
        cost: 4,
        req: 'g3',
        desc: 'Ölümcül darbede 1 HP ile hayatta kalırsın (seferde 1 kez).'
      }
    ]
  },
  runic: {
    name: '🟣 Rün & Zar Yolu',
    color: '#b66eff',
    talents: [
      {
        id: 'r1',
        name: 'Şanslı Zarlar',
        icon: '🎲',
        cost: 1,
        req: null,
        desc: 'Zarları yeniden atma (Reroll) maliyetini 2 Altından 1 Altına düşürür.'
      },
      {
        id: 'r2',
        name: 'Kadim Rün',
        icon: '⚡',
        cost: 2,
        req: 'r1',
        desc: 'Rün kartı hasarını kalıcı +2 artırır.'
      },
      {
        id: 'r3',
        name: '3. Taktik Zarı Yuvası',
        icon: '✨',
        cost: 3,
        req: 'r2',
        desc: 'Her tur fazladan 3. bir taktik zarı kazanırsın!'
      },
      {
        id: 'r4',
        name: 'Midas Dokunuşu',
        icon: '👑',
        cost: 4,
        req: 'r3',
        desc: 'Düşmanlardan ve sandıklardan +%40 daha fazla Altın ve Ruh Taşı kazanırsın.'
      }
    ]
  }
};

const BESTIARY_DATA = [
  {
    key: 'viper',
    name: 'Kızıl Engerek Muhafızı',
    chapter: 'Bölüm 1: Sular Altındaki Mahzen',
    threat: '💀 Düşük Tehdit',
    hp: 40,
    dmg: 6,
    clashMod: -1,
    trait: '🐍 Çift Pala • Hızlı Saldırı',
    lore: 'Mahzenin yosun kaplı tünellerinde pusuya yatan zehirli bir sürüngen muhafızı. Paslı çift palasıyla ani darbeler indirir fakat savunması zayıftır.',
    strategy: 'Çarpışma zarı -1 düşüktür. İlk turda güçlü bir saldırı ile hızlıca alt edilebilir.'
  },
  {
    key: 'drowned',
    name: 'Boğulmuş Zırhlı Şövalye',
    chapter: 'Bölüm 1 & 4: Sular Altındaki Mahzen',
    threat: '💀💀 Orta Tehdit',
    hp: 50,
    dmg: 7,
    clashMod: 0,
    trait: '⚓ Paslı Zırh • Ağır Darbe',
    lore: 'Asırlar önce mahzende boğulan kraliyet muhafızının lanetli bedeni. Çürümüş ağır zırhı ona direnç sağlar.',
    strategy: 'Kalkan biriktirerek darbelerini soğurun ve Rün yıldırımı ile zırhını delin.'
  },
  {
    key: 'hydra_boss',
    name: 'Hidra Tiranı Vex [BÖLÜM BOSS]',
    chapter: 'Bölüm 1 Boss',
    threat: '👑 BÖLÜM BOSS',
    hp: 78,
    dmg: 9,
    clashMod: 1,
    trait: '🐉 3 Başlı Hidra • Her Tur +3 Can Yeniler',
    lore: 'Yeraltı sularının derinliklerinde uyuyan antik dehşet. Kesilen her başın yerine zehir püskürten yenileri çıkar.',
    strategy: 'Sürekli yenilenmesini kırmak için Zar 6 atarak kanama uygulayın ve yüksek hasarlı kılıç darbeleri indirin.'
  },
  {
    key: 'inquisitor',
    name: 'Kanlı Engizisyoncu',
    chapter: 'Bölüm 2: Kemik Katedrali',
    threat: '💀💀 Orta Tehdit',
    hp: 56,
    dmg: 8,
    clashMod: 0,
    trait: '🩸 Kan Ritüeli • Vurduğunda +2 İyileşir',
    lore: 'Katedralin karanlık koridorlarında sapkın kan ayinleri düzenleyen acımasız cellat.',
    strategy: 'Hasar verdikçe can çalar. Kalkanınızı yüksek tutun ki iyileşmesini engelleyin.'
  },
  {
    key: 'gargoyle',
    name: 'Obsidyen Gargoyle',
    chapter: 'Bölüm 2: Kemik Katedrali',
    threat: '💀💀 Orta Tehdit',
    hp: 66,
    dmg: 9,
    clashMod: 1,
    trait: '🗿 Taş Kanat • Yüksek Çarpışma',
    lore: 'Katedralin çatılarından inen canlı obsidyen heykeli. Taş pençeleri kalkanları parçalar.',
    strategy: 'Rün kartını kullanarak çarpışma zarlarını zayıflatın.'
  },
  {
    key: 'boneking_boss',
    name: 'Kemik Kral Ossa [BÖLÜM BOSS]',
    chapter: 'Bölüm 2 Boss',
    threat: '👑 BÖLÜM BOSS',
    hp: 96,
    dmg: 11,
    clashMod: 1,
    trait: '👑 Ruh Tırpanı • Çarpışma Kazanırsa +4 Hasar',
    lore: 'Kemik Katedrali tahtında oturan ölümsüz kral. Ruhlardan beslenen tırpanıyla tüm meydan okuyanları biçer.',
    strategy: 'Çarpışmayı kaybetmemeye çalışın! Tılsım yuvasındaki Kan Taşını kullanarak çarpışma puanınızı artırın.'
  },
  {
    key: 'plague',
    name: 'Mutant Veba Doktoru',
    chapter: 'Bölüm 3: Veba Simyahanesi',
    threat: '💀💀 Orta Tehdit',
    hp: 68,
    dmg: 9,
    clashMod: 1,
    trait: '🧪 Asit Şişesi • Kalkan Delici',
    lore: 'Ölümsüzlük ararken kendi zehirli mutajenlerine kurban giden simyacı.',
    strategy: 'Kalkanı hızla eritebilir, doğrudan saldırı ve iyileşme kartlarına odaklanın.'
  },
  {
    key: 'golem',
    name: 'Pirinç Otomat Golem',
    chapter: 'Bölüm 3: Veba Simyahanesi',
    threat: '💀💀💀 Yüksek Tehdit',
    hp: 80,
    dmg: 10,
    clashMod: 1,
    trait: '⚙️ Buhar Çekici • Ağır Zırh',
    lore: 'Simyacının laboratuvarını korumak için tasarlanmış dev pirinç ve çelik makine.',
    strategy: 'Buhar darbeleri yıkıcıdır. Rün kartı ile makinesini kısa devre yaptırın.'
  },
  {
    key: 'chimera_boss',
    name: 'Simya Ucubesi Kimera [BÖLÜM BOSS]',
    chapter: 'Bölüm 3 Boss',
    threat: '👑 BÖLÜM BOSS',
    hp: 115,
    dmg: 12,
    clashMod: 2,
    trait: '☣️ Mutajenik Evrim • Her Tur +4 Can Yeniler',
    lore: 'Yüzlerce farklı canavar organının simyasal olarak birleştirilmesiyle yaratılmış korkunç hilkat garibesi.',
    strategy: 'Her tur 4 can yeniler. Saldırı gücünü en üst düzeye çıkarmak için tılsımları ve çift zarları birleştirin.'
  },
  {
    key: 'valkyrie',
    name: 'Kuzey Valkür Hayaleti',
    chapter: 'Bölüm 4: Donmuş Gözcü Kulesi',
    threat: '💀💀💀 Yüksek Tehdit',
    hp: 82,
    dmg: 11,
    clashMod: 2,
    trait: '❄️ Buz Mızrağı • Çarpışma +2',
    lore: 'Buzul fırtınasında kaybolan ve kuleden ayrılamayan savaşçı ruh.',
    strategy: 'Çarpışma bonusu yüksektir. Çarpışmada kazanmak için zarları dikkatli kullanın.'
  },
  {
    key: 'wyrm_boss',
    name: 'Buz Ejderi Boreas [BÖLÜM BOSS]',
    chapter: 'Bölüm 4 Boss',
    threat: '👑 BÖLÜM BOSS',
    hp: 135,
    dmg: 14,
    clashMod: 2,
    trait: '🐲 Sıfır Altı Nefes • Çarpışma +2',
    lore: 'Kulenin zirvesinde yüzyıllardır uyuyan kadim buzul ejderhası. Nefesi çeliği dahi dondurur.',
    strategy: 'Kritik vuruşlar ve rün zayıflatması ile nefesini kırın.'
  },
  {
    key: 'hellknight',
    name: 'Cehennem Şövalyesi',
    chapter: 'Bölüm 5: Cehennem Ocağı',
    threat: '💀💀💀 Yüksek Tehdit',
    hp: 98,
    dmg: 13,
    clashMod: 2,
    trait: '🔥 Magma Kılıcı • Saldırıda +2 Yanma',
    lore: 'Lav nehirlerinde dövülmüş zırhıyla zindanın en derin cehennem katını bekleyen karanlık muhafız.',
    strategy: 'Yüksek savunma ve sürekli şifa ile magma yakışına karşı direnin.'
  },
  {
    key: 'azazel_boss',
    name: 'Karanlık Tanrı Azazel [FİNAL BOSS]',
    chapter: 'Bölüm 5 Final Boss',
    threat: '👑👑 FİNAL BOSS',
    hp: 165,
    dmg: 16,
    clashMod: 3,
    trait: '🔥 KÜLLERİN EFENDİSİ • Her Tur +4 Yenilenme',
    lore: 'Zindanın kalbinde mühürlü olan kadim karanlık tanrı. Uyandığında tüm diyarları küle çevirme gücüne sahiptir.',
    strategy: 'Tüm yeteneklerinizi, tılsımlarınızı ve en yüksek kılıç seviyesini gerektiren nihai sınav!'
  }
];

const QUESTS_DATA = [
  // COMBAT ACHIEVEMENTS (⚔️ Savaş)
  {
    id: 'q_first_blood',
    cat: 'combat',
    icon: '💀',
    title: 'İlk Kemik Kıran',
    honorTitle: 'Kemik Kıran',
    desc: 'Zindanda ilk canavarı veya iskeleti mağlup et.',
    rewardGold: 15,
    rewardGems: 1,
    getProgress: (g) => {
      const totalKills = Object.values(g.state.bestiaryKills || {}).reduce((a, b) => a + b, 0);
      return { cur: Math.min(1, totalKills), max: 1 };
    }
  },
  {
    id: 'q_clash_master',
    cat: 'combat',
    icon: '⚔️',
    title: 'Çarpışma Ustası',
    honorTitle: 'Zar Ustası',
    desc: 'Üst çarpışma (Clash) zarlarında 5 kez üstünlük sağla.',
    rewardGold: 20,
    rewardGems: 1,
    getProgress: (g) => ({ cur: Math.min(5, g.state.stats?.clashWins || 0), max: 5 })
  },
  {
    id: 'q_clash_warlord',
    cat: 'combat',
    icon: '🎲',
    title: 'Kaderin Hakimi',
    honorTitle: 'Kader Hakimi',
    desc: 'Üst çarpışma (Clash) zarlarında toplam 20 kez zafer kazan.',
    rewardGold: 45,
    rewardGems: 2,
    getProgress: (g) => ({ cur: Math.min(20, g.state.stats?.clashWins || 0), max: 20 })
  },
  {
    id: 'q_tactical_15',
    cat: 'combat',
    icon: '🃏',
    title: 'Taktik Dehası',
    honorTitle: 'Taktik Dehası',
    desc: 'Savaşlarda toplam 15 kez Saldırı, Şifa veya Rün kartı kullan.',
    rewardGold: 25,
    rewardGems: 1,
    getProgress: (g) => ({ cur: Math.min(15, g.state.stats?.cardsUsed || 0), max: 15 })
  },
  {
    id: 'q_slayer_5',
    cat: 'combat',
    icon: '🗡️',
    title: 'Mahzen Temizleyicisi',
    honorTitle: 'Mahzen Avcısı',
    desc: 'Toplam 5 zindan yaratığını ortadan kaldır.',
    rewardGold: 30,
    rewardGems: 2,
    getProgress: (g) => {
      const totalKills = Object.values(g.state.bestiaryKills || {}).reduce((a, b) => a + b, 0);
      return { cur: Math.min(5, totalKills), max: 5 };
    }
  },
  {
    id: 'q_veteran_15',
    cat: 'combat',
    icon: '🏆',
    title: '100 Bölümün Fatihi',
    honorTitle: 'Zindan Fatihi',
    desc: 'Toplam 15 zindan canavarını dize getir.',
    rewardGold: 60,
    rewardGems: 3,
    getProgress: (g) => {
      const totalKills = Object.values(g.state.bestiaryKills || {}).reduce((a, b) => a + b, 0);
      return { cur: Math.min(15, totalKills), max: 15 };
    }
  },
  {
    id: 'q_slayer_40',
    cat: 'combat',
    icon: '🩸',
    title: 'Karanlıkların Kabusu',
    honorTitle: 'Karanlıkların Kabusu',
    desc: 'Zindanlarda toplam 40 yaratığı yok et.',
    rewardGold: 100,
    rewardGems: 5,
    getProgress: (g) => {
      const totalKills = Object.values(g.state.bestiaryKills || {}).reduce((a, b) => a + b, 0);
      return { cur: Math.min(40, totalKills), max: 40 };
    }
  },

  // BOSS & WORLD ACHIEVEMENTS (👑 Boss & Dünya)
  {
    id: 'q_boss_slayer',
    cat: 'boss',
    icon: '👑',
    title: 'Tiran Avcısı',
    honorTitle: 'Tiran Avcısı',
    desc: 'Herhangi bir Bölüm Sonu Boss yaratığını mağlup et.',
    rewardGold: 50,
    rewardGems: 3,
    getProgress: (g) => {
      const kills = g.state.bestiaryKills || {};
      const bossKills = (kills.hydra_boss || 0) + (kills.boneking_boss || 0) + (kills.chimera_boss || 0) + (kills.wyrm_boss || 0) + (kills.azazel_boss || 0);
      return { cur: Math.min(1, bossKills), max: 1 };
    }
  },
  {
    id: 'q_boss_hunter_3',
    cat: 'boss',
    icon: '🐲',
    title: 'Ejder & Tiran Katili',
    honorTitle: 'Ejder Katili',
    desc: 'Toplam 3 Bölüm Sonu Boss yaratığını dize getir.',
    rewardGold: 85,
    rewardGems: 4,
    getProgress: (g) => {
      const kills = g.state.bestiaryKills || {};
      const bossKills = (kills.hydra_boss || 0) + (kills.boneking_boss || 0) + (kills.chimera_boss || 0) + (kills.wyrm_boss || 0) + (kills.azazel_boss || 0);
      return { cur: Math.min(3, bossKills), max: 3 };
    }
  },
  {
    id: 'q_world_traveler',
    cat: 'boss',
    icon: '🌍',
    title: 'Diyarlar Gezgini',
    honorTitle: 'Diyarlar Gezgini',
    desc: 'Dünya 2 veya daha ileri bir Bölüme (Bölüm 11+) ulaş.',
    rewardGold: 55,
    rewardGems: 2,
    getProgress: (g) => {
      const maxCh = Math.max((g.state.chapterIdx || 0) + 1, g.state.stats?.highestChapter || 1);
      return { cur: Math.min(11, maxCh), max: 11 };
    }
  },
  {
    id: 'q_level_3',
    cat: 'boss',
    icon: '⭐',
    title: 'Kıdemli Gezgin Şövalye',
    honorTitle: 'Kıdemli Şövalye',
    desc: 'Sir Elden ile Seviye 3 (Lv.3) mertebesine ulaş.',
    rewardGold: 35,
    rewardGems: 2,
    getProgress: (g) => ({ cur: Math.min(3, g.state.level || 1), max: 3 })
  },
  {
    id: 'q_level_6',
    cat: 'boss',
    icon: '🌟',
    title: 'Ebedi Lordun Yükselişi',
    honorTitle: 'Ebedi Hükümdar',
    desc: 'Sir Elden ile Seviye 6 (Lv.6) mertebesine ulaş.',
    rewardGold: 90,
    rewardGems: 4,
    getProgress: (g) => ({ cur: Math.min(6, g.state.level || 1), max: 6 })
  },

  // COLLECTION & PROGRESSION ACHIEVEMENTS (🛡️ Koleksiyon)
  {
    id: 'q_talent_unlock',
    cat: 'collection',
    icon: '🌳',
    title: 'Rün Uyanışı',
    honorTitle: 'Rün Muhafızı',
    desc: 'Yetenek Ağacından en az 1 kalıcı yetenek aç.',
    rewardGold: 25,
    rewardGems: 1,
    getProgress: (g) => ({ cur: Math.min(1, (g.state.talents || []).length), max: 1 })
  },
  {
    id: 'q_talent_master_4',
    cat: 'collection',
    icon: '🔮',
    title: 'Kadim Rün Ustası',
    honorTitle: 'Kadim Büyücü',
    desc: 'Yetenek Ağacında toplam 4 kalıcı yetenek aç.',
    rewardGold: 65,
    rewardGems: 3,
    getProgress: (g) => ({ cur: Math.min(4, (g.state.talents || []).length), max: 4 })
  },
  {
    id: 'q_gear_collector',
    cat: 'collection',
    icon: '🪖',
    title: 'Zırh & Miğfer Koleksiyoncusu',
    honorTitle: 'Demir Koleksiyoncu',
    desc: 'Bosslardan veya Karakter Envanterinden 2 yeni ekipman aç.',
    rewardGold: 45,
    rewardGems: 2,
    getProgress: (g) => {
      const unlockedExtra = Math.max(0, ((g.state.ownedGear || []).length) - 5);
      return { cur: Math.min(2, unlockedExtra), max: 2 };
    }
  },
  {
    id: 'q_rich_knight',
    cat: 'collection',
    icon: '💰',
    title: 'Altın Hazinedarı',
    honorTitle: 'Altın Lordu',
    desc: 'Kesende aynı anda 50 veya daha fazla Altın biriktir.',
    rewardGold: 35,
    rewardGems: 2,
    getProgress: (g) => ({ cur: Math.min(50, g.state.gold || 0), max: 50 })
  }
];

// =========================================================
// 1. PET / COMPANION SYSTEM (SAVAŞ YOLDAŞLARI)
// =========================================================
const PET_COMPANIONS_CATALOG = [
  {
    id: 'pet_dragon',
    name: 'Kızıl Yavru Ejder (Ignis)',
    icon: '🐉',
    spriteKey: 'pet_dragon',
    spriteSrc: 'assets/pet_dragon.png',
    rarity: 'epic',
    rarityLabel: 'Destansı Yoldaş',
    unlockCostGems: 0,
    passiveDesc: 'Her saldırıda düşmana +3 Ateş Hasarı vurur ve +1 Saldırı Gücü verir.',
    stats: { atk: 1, hp: 4, shield: 0, clash: 0 },
    combatEffect: 'fire_breath'
  },
  {
    id: 'pet_wolf',
    name: 'Gölge Ruh Kurdu (Fenrir)',
    icon: '🐺',
    spriteKey: 'pet_wolf',
    spriteSrc: 'assets/pet_wolf.png',
    rarity: 'epic',
    rarityLabel: 'Destansı Yoldaş',
    unlockCostGems: 2,
    passiveDesc: 'Üst Çarpışma (Clash) zarlarına +1 Bonus verir ve saldırıda +2 Kanama hasarı ekler.',
    stats: { atk: 1, hp: 0, shield: 0, clash: 1 },
    combatEffect: 'wolf_bite'
  },
  {
    id: 'pet_owl',
    name: 'Kadim Rün Baykuşu (Aether)',
    icon: '🦉',
    spriteKey: 'pet_owl',
    spriteSrc: 'assets/pet_owl.png',
    rarity: 'legendary',
    rarityLabel: 'Efsanevi Yoldaş',
    unlockCostGems: 3,
    passiveDesc: 'Her tur başında otomatik +3 Mavi Kalkan ve +2 Rün Gücü sağlar.',
    stats: { atk: 0, hp: 6, shield: 4, clash: 1 },
    combatEffect: 'arcane_ward'
  },
  {
    id: 'pet_phoenix',
    name: 'Küllerinden Doğan Anka (Sol)',
    icon: '🦅',
    spriteKey: 'pet_phoenix',
    spriteSrc: 'assets/pet_phoenix.png',
    rarity: 'mythic',
    rarityLabel: 'Mitik Yoldaş',
    unlockCostGems: 5,
    passiveDesc: 'Her tur başında +3 Can yeniler, saldırıda +4 Kutsal Ateş vurur!',
    stats: { atk: 2, hp: 10, shield: 4, clash: 1 },
    combatEffect: 'phoenix_flame'
  }
];

// =========================================================
// 2. ONLINE PVP ARENA & ENDLESS TOWER GLOBAL RIVAL ROSTER
// =========================================================
const ONLINE_RIVAL_ROSTER = [
  { id: 'r1', nick: 'Kaan_TR', title: 'Kemik Kıran', helmId: 'helm_iron', portrait: 'assets/hero_front_helm_iron.png', baseLv: 1, trophies: 115, bestTower: 3, petIcon: '🐉' },
  { id: 'r2', nick: 'DarkBlade34', title: 'Mahzen Avcısı', helmId: 'helm_unhelmed', portrait: 'assets/hero_front_helm_unhelmed.png', baseLv: 1, trophies: 140, bestTower: 4, petIcon: '🐺' },
  { id: 'r3', nick: 'AlperenX', title: 'Zar Ustası', helmId: 'helm_hydra', portrait: 'assets/hero_front_helm_hydra.png', baseLv: 2, trophies: 195, bestTower: 6, petIcon: '🐉' },
  { id: 'r4', nick: 'GölgeŞövalye', title: 'Tiran Avcısı', helmId: 'helm_boneking', portrait: 'assets/hero_front_helm_boneking.png', baseLv: 3, trophies: 260, bestTower: 9, petIcon: '🦉' },
  { id: 'r5', nick: 'YavuzHan_06', title: 'Ejder Katili', helmId: 'helm_chimera', portrait: 'assets/hero_front_helm_chimera.png', baseLv: 4, trophies: 340, bestTower: 12, petIcon: '🐺' },
  { id: 'r6', nick: 'ValhallaKing', title: 'Buzul Fatihi', helmId: 'helm_wyrm', portrait: 'assets/hero_front_helm_wyrm.png', baseLv: 5, trophies: 430, bestTower: 16, petIcon: '🦅' },
  { id: 'r7', nick: 'Efe_Slayer', title: 'Kıyamet Biçici', helmId: 'helm_azazel', portrait: 'assets/hero_front_helm_azazel.png', baseLv: 7, trophies: 580, bestTower: 22, petIcon: '🦅' },
  { id: 'r8', nick: 'Lord_Baran', title: 'Ebedi Hükümdar', helmId: 'helm_eternal', portrait: 'assets/hero_front_helm_eternal.png', baseLv: 9, trophies: 790, bestTower: 30, petIcon: '🦅' }
];

class CryptClashGame {
  constructor() {
    this.canvas = document.getElementById('battle-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.deferredInstallPrompt = null;

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredInstallPrompt = e;
    });

    this.images = {};
    this.loadAssets();

    this.currentTreeBranch = 'warrior';
    this.selectedTalentId = null;
    this.selectedBestiaryKey = 'viper';
    this.viewBeforeTree = 'game';
    this.viewBeforeBestiary = 'game';
    this.viewBeforeGuide = 'menu';
    this.viewBeforeQuests = 'menu';
    this.viewBeforeInventory = 'menu';
    this.viewBeforeArena = 'menu';
    this.currentInvSlot = 'helm';
    this.currentArenaTab = 'pvp';
    this.currentLbType = 'trophies';

    this.state = {
      gameMode: 'story',
      selectedBlessing: 'guardian',
      chapterIdx: 0,
      room: 1,
      roomBranch: null,
      currentScene: 'battle',
      gold: 12,
      soulGems: 2,
      talents: [],
      bestiaryKills: {},
      claimedQuests: [],
      notifiedQuests: [],
      equippedTitle: '',
      fortuneStreak: 1,
      freeSpinUsed: false,
      ownedGear: ['helm_unhelmed', 'helm_iron', 'armor_steel', 'weapon_iron', 'cape_traveler'],
      equippedGear: {
        helm: 'helm_iron',
        armor: 'armor_steel',
        weapon: 'weapon_iron',
        cape: 'cape_traveler'
      },
      gearUpgrades: {
        helm_iron: 0,
        armor_steel: 0,
        weapon_iron: 0,
        cape_traveler: 0
      },
      ownedPets: ['pet_dragon'],
      equippedPet: 'pet_dragon',
      playerNick: 'Sir Elden',
      trophies: 100,
      towerFloor: 1,
      bestTowerFloor: 1,
      worldBossHp: 2500,
      worldBossMaxHp: 2500,
      raidTotalDmg: 0,
      claimedLeagueChestTier: 0,
      rage: 0,
      activeBattleType: 'campaign', // 'campaign' | 'tower' | 'pvp' | 'raid'
      activePvpRival: null,
      chestSlots: [
        { id: 'cs1', name: 'Gümüş Sandık', icon: '🥈', tier: 'silver', unlockTimeMs: 10000, unlockStart: 0, ready: true, gold: 65, gems: 2 },
        null,
        null,
        null
      ],
      stats: {
        clashWins: 0,
        cardsUsed: 0,
        pvpWins: 0
      },
      coachMode: true,
      coachStep: 0,
      guaranteeSixes: false,
      usedSecondChance: false,
      level: 1,
      xp: 10,
      xpToNext: 20,
      dailyLoginDay: 1,
      lastLoginDateStr: '',
      dailyClaimedToday: false,
      lastActiveTimestamp: Date.now(),
      crownCount: 0,
      crownChestReady: false,
      claimedTrophyMilestones: [],
      lang: typeof localStorage !== 'undefined' && localStorage.getItem('crypt_clash_lang')
        ? localStorage.getItem('crypt_clash_lang')
        : ((typeof navigator !== 'undefined' && navigator.language && navigator.language.toLowerCase().startsWith('tr')) ? 'tr' : 'en'),

      player: {
        hp: 28,
        maxHp: 28,
        shield: 10,
        atkBonus: 1,
        healBonus: 1,
        runeBonus: 1,
        clashBonus: 0,
        tempAtkBuff: 0,
        tempClashBuff: 0,
        relicId: 'whetstone',
        ownedRelics: ['whetstone'],
        relicUsedThisTurn: false
      },

      enemies: [],
      targetEnemyIdx: 0,
      enemy: null,

      clash: {
        playerDice: [2, 5],
        enemyDice: [2, 4],
        playerTotal: 7,
        enemyRaw: 6,
        enemyMod: -1,
        statusText: 'SENİN TURUN',
        statusType: 'victory'
      },

      actionDice: [6, 4],
      selectedSlot: 0,
      busy: false
    };

    this.loadProgress();

    this.anim = {
      time: 0,
      shakeTime: 0,
      shakeMag: 0,
      knightOffsetX: 0,
      knightOffsetY: 0,
      knightShieldGlow: 0,
      knightHealGlow: 0,
      slashAlpha: 0.0,
      slashColor: 'silver',
      lightningAlpha: 0.0,
      enemyOffsetX: 0,
      enemyOffsetY: 0,
      enemyHitFlash: 0,
      enemyAlpha: 1,
      floatingTexts: [],
      particles: [],
      weatherParticles: [],
      torches: [
        { x: 28, y: 176, r: 30 },
        { x: 108, y: 156, r: 36 },
        { x: 160, y: 184, r: 26 },
        { x: 310, y: 184, r: 26 },
        { x: 362, y: 156, r: 36 },
        { x: 442, y: 176, r: 30 }
      ]
    };

    this.initWeatherParticles();
    this.spawnEnemyForCurrentRoom();
    this.setupInteractions();
    this.updateAllUI();
    this.renderAllDice();
    this.updateCoachBanner();
    this.applyLanguageToDOM();
    this.updateSoundtrackBanner();

    this.checkDailyLoginStatus();
    setTimeout(() => {
      this.checkOfflinePatrolLoot();
    }, 600);

    requestAnimationFrame((ts) => this.loop(ts));
  }

  hasTalent(id) {
    return Boolean(this.state.talents && this.state.talents.includes(id));
  }

  getEquippedItem(slot) {
    const eqId = this.state.equippedGear?.[slot];
    return HERO_GEAR_CATALOG.find((g) => g.id === eqId) || HERO_GEAR_CATALOG.find((g) => g.slot === slot);
  }

  getEquippedPet() {
    const petId = this.state.equippedPet || 'pet_dragon';
    return PET_COMPANIONS_CATALOG.find((p) => p.id === petId) || PET_COMPANIONS_CATALOG[0];
  }

  getGearUpgradeLevel(gearId) {
    return (this.state.gearUpgrades && this.state.gearUpgrades[gearId]) || 0;
  }

  getGearBonuses() {
    const totals = { hp: 0, atk: 0, shield: 0, clash: 0, rune: 0 };
    ['helm', 'armor', 'weapon', 'cape'].forEach((slot) => {
      const item = this.getEquippedItem(slot);
      if (item && item.stats) {
        const upgLv = this.getGearUpgradeLevel(item.id);
        totals.hp += (item.stats.hp || 0) + (slot === 'armor' || slot === 'helm' ? upgLv * 2 : 0);
        totals.atk += (item.stats.atk || 0) + (slot === 'weapon' ? upgLv * 1 : 0);
        totals.shield += (item.stats.shield || 0) + (slot === 'armor' ? upgLv * 1 : 0);
        totals.clash += (item.stats.clash || 0) + (upgLv >= 3 ? 1 : 0);
        totals.rune += (item.stats.rune || 0) + (slot === 'cape' ? upgLv * 1 : 0);
      }
    });
    const pet = this.getEquippedPet();
    if (pet && pet.stats) {
      totals.hp += pet.stats.hp || 0;
      totals.atk += pet.stats.atk || 0;
      totals.shield += pet.stats.shield || 0;
      totals.clash += pet.stats.clash || 0;
    }
    return totals;
  }

  saveProgress() {
    try {
      const payload = {
        gameMode: this.state.gameMode,
        selectedBlessing: this.state.selectedBlessing,
        chapterIdx: this.state.chapterIdx,
        room: this.state.room,
        roomBranch: this.state.roomBranch,
        gold: this.state.gold,
        soulGems: this.state.soulGems,
        talents: this.state.talents,
        bestiaryKills: this.state.bestiaryKills,
        claimedQuests: this.state.claimedQuests,
        notifiedQuests: this.state.notifiedQuests,
        equippedTitle: this.state.equippedTitle,
        fortuneStreak: this.state.fortuneStreak,
        freeSpinUsed: this.state.freeSpinUsed,
        ownedGear: this.state.ownedGear,
        equippedGear: this.state.equippedGear,
        gearUpgrades: this.state.gearUpgrades,
        ownedPets: this.state.ownedPets,
        equippedPet: this.state.equippedPet,
        playerNick: this.state.playerNick,
        trophies: this.state.trophies,
        towerFloor: this.state.towerFloor,
        bestTowerFloor: this.state.bestTowerFloor,
        worldBossHp: this.state.worldBossHp,
        raidTotalDmg: this.state.raidTotalDmg,
        claimedLeagueChestTier: this.state.claimedLeagueChestTier,
        chestSlots: this.state.chestSlots,
        stats: this.state.stats,
        coachMode: this.state.coachMode,
        level: this.state.level,
        xp: this.state.xp,
        xpToNext: this.state.xpToNext,
        dailyLoginDay: this.state.dailyLoginDay,
        lastLoginDateStr: this.state.lastLoginDateStr,
        dailyClaimedToday: this.state.dailyClaimedToday,
        lastActiveTimestamp: this.state.lastActiveTimestamp,
        crownCount: this.state.crownCount,
        crownChestReady: this.state.crownChestReady,
        claimedTrophyMilestones: this.state.claimedTrophyMilestones,
        lang: this.state.lang,
        player: this.state.player
      };
      localStorage.setItem(SAVE_KEY, JSON.stringify(payload));
    } catch (e) {}
  }

  loadProgress() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (data.lang) this.state.lang = data.lang;
      if (data.gameMode) this.state.gameMode = data.gameMode;
      if (data.selectedBlessing) this.state.selectedBlessing = data.selectedBlessing;
      if (typeof data.chapterIdx === 'number') this.state.chapterIdx = data.chapterIdx % CHAPTERS.length;
      if (typeof data.room === 'number') this.state.room = Math.min(5, Math.max(1, data.room));
      if (data.roomBranch) this.state.roomBranch = data.roomBranch;
      if (typeof data.gold === 'number') this.state.gold = data.gold;
      if (typeof data.soulGems === 'number') this.state.soulGems = data.soulGems;
      if (Array.isArray(data.talents)) this.state.talents = data.talents;
      if (data.bestiaryKills && typeof data.bestiaryKills === 'object') this.state.bestiaryKills = data.bestiaryKills;
      if (Array.isArray(data.claimedQuests)) this.state.claimedQuests = data.claimedQuests;
      if (Array.isArray(data.notifiedQuests)) this.state.notifiedQuests = data.notifiedQuests;
      if (typeof data.equippedTitle === 'string') this.state.equippedTitle = data.equippedTitle;
      if (typeof data.fortuneStreak === 'number') this.state.fortuneStreak = data.fortuneStreak;
      if (typeof data.freeSpinUsed === 'boolean') this.state.freeSpinUsed = data.freeSpinUsed;
      if (Array.isArray(data.ownedGear)) {
        this.state.ownedGear = data.ownedGear;
        if (!this.state.ownedGear.includes('helm_unhelmed')) {
          this.state.ownedGear.unshift('helm_unhelmed');
        }
      }
      if (data.equippedGear && typeof data.equippedGear === 'object') {
        this.state.equippedGear = { ...this.state.equippedGear, ...data.equippedGear };
      }
      if (data.gearUpgrades && typeof data.gearUpgrades === 'object') {
        this.state.gearUpgrades = { ...this.state.gearUpgrades, ...data.gearUpgrades };
      }
      if (Array.isArray(data.ownedPets)) this.state.ownedPets = data.ownedPets;
      if (typeof data.equippedPet === 'string') this.state.equippedPet = data.equippedPet;
      if (typeof data.playerNick === 'string' && data.playerNick.trim()) this.state.playerNick = data.playerNick;
      if (typeof data.trophies === 'number') this.state.trophies = data.trophies;
      if (typeof data.towerFloor === 'number') this.state.towerFloor = Math.max(1, data.towerFloor);
      if (typeof data.bestTowerFloor === 'number') this.state.bestTowerFloor = Math.max(1, data.bestTowerFloor);
      if (typeof data.worldBossHp === 'number') this.state.worldBossHp = Math.max(100, data.worldBossHp);
      if (typeof data.raidTotalDmg === 'number') this.state.raidTotalDmg = data.raidTotalDmg;
      if (typeof data.claimedLeagueChestTier === 'number') this.state.claimedLeagueChestTier = data.claimedLeagueChestTier;
      if (Array.isArray(data.chestSlots)) this.state.chestSlots = data.chestSlots;
      if (data.stats && typeof data.stats === 'object') this.state.stats = { ...this.state.stats, ...data.stats };
      if (typeof data.coachMode === 'boolean') this.state.coachMode = data.coachMode;
      if (typeof data.level === 'number') this.state.level = data.level;
      if (typeof data.xp === 'number') this.state.xp = data.xp;
      if (typeof data.xpToNext === 'number') this.state.xpToNext = data.xpToNext;
      if (typeof data.dailyLoginDay === 'number') this.state.dailyLoginDay = data.dailyLoginDay;
      if (typeof data.lastLoginDateStr === 'string') this.state.lastLoginDateStr = data.lastLoginDateStr;
      if (typeof data.dailyClaimedToday === 'boolean') this.state.dailyClaimedToday = data.dailyClaimedToday;
      if (typeof data.lastActiveTimestamp === 'number') this.state.lastActiveTimestamp = data.lastActiveTimestamp;
      if (typeof data.crownCount === 'number') this.state.crownCount = data.crownCount;
      if (typeof data.crownChestReady === 'boolean') this.state.crownChestReady = data.crownChestReady;
      if (Array.isArray(data.claimedTrophyMilestones)) this.state.claimedTrophyMilestones = data.claimedTrophyMilestones;
      if (data.player) {
        this.state.player = { ...this.state.player, ...data.player, tempAtkBuff: 0, tempClashBuff: 0, relicUsedThisTurn: false };
      }
    } catch (e) {}
  }

  resetSaveData() {
    try {
      localStorage.removeItem(SAVE_KEY);
    } catch (e) {}
    this.state.chapterIdx = 0;
    this.state.room = 1;
    this.state.activeBattleType = 'campaign';
    this.state.activePvpRival = null;
    this.state.currentScene = 'battle';
    this.state.gold = 12;
    this.state.level = 1;
    this.state.xp = 0;
    this.state.xpToNext = 20;
    this.state.usedSecondChance = false;
    this.state.guaranteeSixes = false;
    this.state.coachStep = 0;
    const gearB = this.getGearBonuses();
    this.state.player = {
      hp: 28 + (this.hasTalent('g1') ? 8 : 0) + gearB.hp,
      maxHp: 28 + (this.hasTalent('g1') ? 8 : 0) + gearB.hp,
      shield: 10 + (this.hasTalent('g2') ? 6 : 0) + gearB.shield,
      atkBonus: 1 + (this.hasTalent('w1') ? 1 : 0) + gearB.atk,
      healBonus: 1,
      runeBonus: 1 + (this.hasTalent('r2') ? 2 : 0) + gearB.rune,
      clashBonus: 0 + (this.hasTalent('w2') ? 1 : 0) + gearB.clash,
      tempAtkBuff: 0,
      tempClashBuff: 0,
      relicId: 'whetstone',
      ownedRelics: ['whetstone'],
      relicUsedThisTurn: false
    };
    this.saveProgress();
    this.spawnEnemyForCurrentRoom();
    this.startNewPlayerTurn();
  }

  vibrate(pattern) {
    try {
      if (navigator.vibrate) navigator.vibrate(pattern);
    } catch (e) {}
  }

  getWeaponTier() {
    const eqWeapon = this.getEquippedItem('weapon');
    const upgLv = eqWeapon ? this.getGearUpgradeLevel(eqWeapon.id) : 0;
    const plusStr = upgLv > 0 ? ` +${upgLv}` : '';
    const atk = this.state.player.atkBonus;
    if (eqWeapon && eqWeapon.id !== 'weapon_iron') {
      return {
        name: `${eqWeapon.icon} ${eqWeapon.name}${plusStr}`,
        slashColor: eqWeapon.slashColor || 'magma',
        lifesteal: atk >= 6 ? 2 : 1,
        bonusDmg: (eqWeapon.stats?.atk || 2) + upgLv
      };
    }
    if (atk >= 7) {
      return { name: `🔥 Cehennem Yaran${plusStr}`, slashColor: 'magma', lifesteal: 2, bonusDmg: 2 + upgLv };
    } else if (atk >= 5) {
      return { name: `❄️ Buzul Rün Kılıcı${plusStr}`, slashColor: 'frost', lifesteal: 0, bonusDmg: 1 + upgLv };
    } else if (atk >= 3) {
      return { name: `🩸 Kanlı Kesici${plusStr}`, slashColor: 'crimson', lifesteal: 1, bonusDmg: upgLv };
    }
    return { name: `🗡️ Demir Kılıç${plusStr}`, slashColor: 'silver', lifesteal: 0, bonusDmg: upgLv };
  }

  loadAssets() {
    const assetList = {
      stage1: 'assets/stage_1.png',
      stage2: 'assets/stage_2.png',
      stage3: 'assets/stage_3.png',
      stage4: 'assets/stage_4.png',
      stage5: 'assets/stage_5.png',
      scene_campfire: 'assets/scene_campfire.png',
      scene_shrine: 'assets/scene_shrine.png',
      scene_chest: 'assets/scene_chest.png',
      knight: 'assets/knight_back.png',
      viper: 'assets/monster_viper.png',
      drowned: 'assets/monster_drowned.png',
      hydra_boss: 'assets/monster_hydra_boss.png',
      inquisitor: 'assets/monster_inquisitor.png',
      gargoyle: 'assets/monster_gargoyle.png',
      boneking_boss: 'assets/monster_boneking_boss.png',
      plague: 'assets/monster_plague.png',
      golem: 'assets/monster_golem.png',
      chimera_boss: 'assets/monster_chimera_boss.png',
      valkyrie: 'assets/monster_valkyrie.png',
      wyrm_boss: 'assets/monster_wyrm_boss.png',
      hellknight: 'assets/monster_hellknight.png',
      azazel_boss: 'assets/monster_azazel_boss.png',
      skeleton: 'assets/enemy_skeleton.png',
      gorgon: 'assets/enemy_gorgon.png',
      helm_unhelmed: 'assets/hero_front_helm_unhelmed.png',
      helm_iron: 'assets/hero_front_helm_iron.png',
      helm_hydra: 'assets/hero_front_helm_hydra.png',
      helm_boneking: 'assets/hero_front_helm_boneking.png',
      helm_chimera: 'assets/hero_front_helm_chimera.png',
      helm_wyrm: 'assets/hero_front_helm_wyrm.png',
      helm_azazel: 'assets/hero_front_helm_azazel.png',
      helm_eternal: 'assets/hero_front_helm_eternal.png',
      pet_dragon: 'assets/pet_dragon.png',
      pet_wolf: 'assets/pet_wolf.png',
      pet_owl: 'assets/pet_owl.png',
      pet_phoenix: 'assets/pet_phoenix.png',
      chest_wood: 'assets/chest_wood.png',
      chest_silver: 'assets/chest_silver.png',
      chest_gold: 'assets/chest_gold.png',
      chest_magic: 'assets/chest_magic.png'
    };

    Object.entries(assetList).forEach(([key, src]) => {
      const img = new Image();
      img.src = src;
      this.images[key] = img;
    });
  }

  initWeatherParticles() {
    this.anim.weatherParticles = [];
    for (let i = 0; i < 28; i++) {
      this.anim.weatherParticles.push({
        x: Math.random() * 470,
        y: Math.random() * 444,
        vx: (Math.random() - 0.5) * 18,
        vy: -15 - Math.random() * 25,
        size: 2 + Math.floor(Math.random() * 3),
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  getCurrentChapter() {
    return CHAPTERS[this.state.chapterIdx] || CHAPTERS[0];
  }

  createEnemyInstance(tpl, hpOverride) {
    const hp = hpOverride || tpl.hp;
    return {
      name: tpl.name,
      spriteKey: tpl.spriteKey,
      hp: hp,
      maxHp: hp,
      clashMod: tpl.clashMod,
      baseDmg: tpl.baseDmg,
      goldReward: tpl.gold,
      xpReward: tpl.xp,
      trait: tpl.trait,
      regen: tpl.regen || 0,
      lifesteal: tpl.lifesteal || 0,
      isBoss: Boolean(tpl.isBoss),
      bleed: 0,
      weakenClash: 0
    };
  }

  spawnEnemyForCurrentRoom() {
    const ch = this.getCurrentChapter();
    let enemyList = [];

    if (this.state.room === 5) {
      enemyList = [this.createEnemyInstance(ch.boss)];
    } else if (this.state.room === 3 || this.state.roomBranch === '2B') {
      // DUAL ENEMY BATTLE!
      const e0 = this.createEnemyInstance(ch.enemies[0], Math.round(ch.enemies[0].hp * 0.85));
      const e1 = this.createEnemyInstance(ch.enemies[1] || ch.enemies[0], Math.round((ch.enemies[1] || ch.enemies[0]).hp * 0.8));
      enemyList = [e0, e1];
    } else if (this.state.roomBranch === '2A') {
      enemyList = [this.createEnemyInstance(ch.enemies[1] || ch.enemies[0])];
    } else {
      // Room 1: Skeleton Champion encounter
      enemyList = [this.createEnemyInstance(ch.enemies[0])];
    }

    this.state.enemies = enemyList;
    this.state.targetEnemyIdx = 0;
    this.state.enemy = this.state.enemies[0];
    this.state.clash.enemyMod = this.state.enemy.clashMod;
    this.anim.enemyAlpha = 1.0;
    this.updateAllUI();
  }

  // =========================================================
  // RENDER CRACKED STONE / BONE DICE
  // =========================================================
  drawBoneDie(canvas, value, options = {}) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    if (!value) return;

    const pad = 3;
    const dw = w - pad * 2;
    const dh = h - pad * 2;

    ctx.fillStyle = '#181512';
    this.roundRect(ctx, pad, pad, dw, dh, 7);
    ctx.fill();

    const grad = ctx.createLinearGradient(pad, pad, pad + dw, pad + dh);
    if (options.highlight) {
      grad.addColorStop(0, '#e5d4a2');
      grad.addColorStop(0.5, '#c2ad7a');
      grad.addColorStop(1, '#85734b');
    } else {
      grad.addColorStop(0, '#b5aba0');
      grad.addColorStop(0.55, '#968d82');
      grad.addColorStop(1, '#6d655c');
    }

    ctx.fillStyle = grad;
    this.roundRect(ctx, pad + 2, pad + 2, dw - 4, dh - 4, 5);
    ctx.fill();

    ctx.strokeStyle = 'rgba(235, 228, 215, 0.45)';
    ctx.lineWidth = 1.5;
    this.roundRect(ctx, pad + 3, pad + 3, dw - 6, dh - 6, 4);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(38, 33, 29, 0.55)';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(pad + 6, pad + dh * 0.32);
    ctx.lineTo(pad + dw * 0.28, pad + dh * 0.42);
    ctx.lineTo(pad + dw * 0.22, pad + dh * 0.58);
    ctx.moveTo(pad + dw * 0.72, pad + 5);
    ctx.lineTo(pad + dw * 0.64, pad + dh * 0.25);
    ctx.stroke();

    const pipLayouts = {
      1: [[0.5, 0.5]],
      2: [[0.28, 0.28], [0.72, 0.72]],
      3: [[0.26, 0.26], [0.5, 0.5], [0.74, 0.74]],
      4: [[0.28, 0.28], [0.72, 0.28], [0.28, 0.72], [0.72, 0.72]],
      5: [[0.26, 0.26], [0.74, 0.26], [0.5, 0.5], [0.26, 0.74], [0.74, 0.74]],
      6: [[0.27, 0.24], [0.73, 0.24], [0.27, 0.5], [0.73, 0.5], [0.27, 0.76], [0.73, 0.76]]
    };

    const pips = pipLayouts[value] || pipLayouts[1];
    const pipRadius = Math.max(3.2, w * 0.078);

    pips.forEach(([nx, ny]) => {
      const px = pad + nx * dw;
      const py = pad + ny * dh;

      ctx.fillStyle = 'rgba(255, 255, 255, 0.28)';
      ctx.beginPath();
      ctx.arc(px + 0.8, py + 0.8, pipRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#1f1b18';
      ctx.beginPath();
      ctx.arc(px, py, pipRadius, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  renderAllDice() {
    const pHex0 = document.querySelector('#player-hex-0 .die-canvas');
    const pHex1 = document.querySelector('#player-hex-1 .die-canvas');
    const eHex0 = document.querySelector('#enemy-hex-0 .die-canvas');
    const eHex1 = document.querySelector('#enemy-hex-1 .die-canvas');

    this.drawBoneDie(pHex0, this.state.clash.playerDice[0]);
    this.drawBoneDie(pHex1, this.state.clash.playerDice[1]);
    this.drawBoneDie(eHex0, this.state.clash.enemyDice[0]);
    this.drawBoneDie(eHex1, this.state.clash.enemyDice[1]);

    [0, 1].forEach((slotIdx) => {
      const slotEl = document.getElementById(`action-slot-${slotIdx}`);
      const canvas = document.getElementById(`action-die-canvas-${slotIdx}`);
      const val = this.state.actionDice[slotIdx];

      if (val === null) {
        slotEl.classList.add('empty');
        slotEl.classList.remove('selected');
      } else {
        slotEl.classList.remove('empty');
        if (this.state.selectedSlot === slotIdx) {
          slotEl.classList.add('selected');
        } else {
          slotEl.classList.remove('selected');
        }
        this.drawBoneDie(canvas, val, {
          highlight: this.state.selectedSlot === slotIdx
        });
      }
    });

    this.updateActionCardPreviews();
  }

  updateActionCardPreviews() {
    const activeDieVal =
      this.state.selectedSlot !== null && this.state.actionDice[this.state.selectedSlot] !== null
        ? this.state.actionDice[this.state.selectedSlot]
        : this.state.actionDice.find((d) => d !== null) || null;

    const atkBadge = document.getElementById('preview-attack');
    const healBadge = document.getElementById('preview-heal');
    const runeBadge = document.getElementById('preview-rune');
    const p = this.state.player;
    const wTier = this.getWeaponTier();

    if (activeDieVal !== null) {
      const minDmg = activeDieVal + p.atkBonus + p.tempAtkBuff + wTier.bonusDmg;
      atkBadge.textContent = `⚔️ ${minDmg}-${minDmg + 3}`;

      const baseHeal = activeDieVal + p.healBonus + (activeDieVal % 2 === 0 ? 3 : 0);
      healBadge.textContent = `🧪 +${baseHeal}`;

      const runeDmg = activeDieVal + p.runeBonus + (activeDieVal % 2 === 1 ? 3 : 0);
      runeBadge.textContent = `⚡ ${runeDmg} & -1Z`;
    } else {
      atkBadge.textContent = `⚔️ +${p.atkBonus + p.tempAtkBuff}`;
      healBadge.textContent = `🧪 +${p.healBonus}`;
      runeBadge.textContent = `⚡ +${p.runeBonus}`;
    }

    document.querySelectorAll('.action-card').forEach((el) => {
      if (this.state.selectedSlot !== null) {
        el.classList.add('ready-target');
      } else {
        el.classList.remove('ready-target');
      }
    });
  }

  // =========================================================
  // DRAG & DROP + TOUCH INTERACTIONS
  // =========================================================
  setupInteractions() {
    const ghostEl = document.getElementById('drag-ghost');
    const ghostCanvas = document.getElementById('drag-ghost-canvas');
    let draggingSlot = null;
    let dragStartX = 0;
    let dragStartY = 0;
    let isDraggingMoved = false;

    const getDropTarget = (clientX, clientY) => {
      const el = document.elementFromPoint(clientX, clientY);
      if (!el) return null;
      return el.closest('.drop-target');
    };

    const clearDropHover = () => {
      document.querySelectorAll('.drop-target').forEach((t) => t.classList.remove('drop-hover'));
    };

    [0, 1, 2].forEach((slotIdx) => {
      const slotEl = document.getElementById(`action-slot-${slotIdx}`);
      if (!slotEl) return;

      slotEl.addEventListener('pointerdown', (e) => {
        if (this.state.busy) return;
        const val = this.state.actionDice[slotIdx];
        if (val === null || val === undefined) return;

        e.preventDefault();
        window.sfx.playDicePickup();
        this.vibrate(12);

        draggingSlot = slotIdx;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        isDraggingMoved = false;

        this.state.selectedSlot = slotIdx;
        this.renderAllDice();

        this.drawBoneDie(ghostCanvas, val, { highlight: true });
        ghostEl.style.left = `${e.clientX}px`;
        ghostEl.style.top = `${e.clientY}px`;
      });
    });

    window.addEventListener('pointermove', (e) => {
      if (draggingSlot === null) return;
      const dist = Math.hypot(e.clientX - dragStartX, e.clientY - dragStartY);
      if (dist > 6) {
        isDraggingMoved = true;
        ghostEl.classList.remove('hidden');
      }
      if (isDraggingMoved) {
        ghostEl.style.left = `${e.clientX}px`;
        ghostEl.style.top = `${e.clientY}px`;
        clearDropHover();
        const target = getDropTarget(e.clientX, e.clientY);
        if (target) target.classList.add('drop-hover');
      }
    });

    window.addEventListener('pointerup', (e) => {
      if (draggingSlot === null) return;
      const slotUsed = draggingSlot;
      draggingSlot = null;
      ghostEl.classList.add('hidden');
      clearDropHover();

      if (isDraggingMoved) {
        const target = getDropTarget(e.clientX, e.clientY);
        if (target) {
          const action = target.getAttribute('data-action');
          this.useDieOnAction(slotUsed, action);
        }
      }
    });

    document.querySelectorAll('.drop-target').forEach((targetEl) => {
      targetEl.addEventListener('click', () => {
        if (this.state.busy) return;
        const action = targetEl.getAttribute('data-action');

        let slotIdx = this.state.selectedSlot;
        if (slotIdx === null || this.state.actionDice[slotIdx] === null) {
          slotIdx = this.state.actionDice.findIndex((d) => d !== null);
        }
        if (slotIdx === -1) return;
        this.useDieOnAction(slotIdx, action);
      });
    });

    const rerollBtn = document.getElementById('btn-reroll');
    if (rerollBtn) rerollBtn.addEventListener('click', () => this.rerollActionDice());

    const shopBtn = document.getElementById('btn-shop');
    if (shopBtn) shopBtn.addEventListener('click', () => this.openShopModal());

    const mapBtn = document.getElementById('btn-open-map');
    if (mapBtn) mapBtn.addEventListener('click', () => this.openChapterMapModal());

    const installBtn = document.getElementById('btn-install');
    if (installBtn) installBtn.addEventListener('click', () => this.openMobileInstallModal());

    // Music & Sound Buttons in Top Bar
    const musicBtn = document.getElementById('btn-music');
    if (musicBtn) {
      musicBtn.addEventListener('click', () => {
        if (window.bgm) {
          const playing = window.bgm.toggle();
          musicBtn.textContent = playing ? '🎵' : '🔇';
          const menuMusicLabel = document.getElementById('menu-music-label');
          if (menuMusicLabel) menuMusicLabel.textContent = playing ? 'Müzik: Açık' : 'Müzik: Kapalı';
        }
      });
    }

    const soundBtn = document.getElementById('btn-sound');
    if (soundBtn) {
      soundBtn.addEventListener('click', (e) => {
        const on = window.sfx.toggle();
        e.currentTarget.textContent = on ? '🔊' : '🔇';
        const menuSfxLabel = document.getElementById('menu-sfx-label');
        if (menuSfxLabel) menuSfxLabel.textContent = on ? 'Ses: Açık' : 'Ses: Kapalı';
      });
    }

    const modalCloseBtn = document.getElementById('modal-close-btn');
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', () => {
        document.getElementById('modal-overlay').classList.add('hidden');
      });
    }

    // Dual-Enemy Target Selection via HUD Boxes
    [0, 1].forEach((idx) => {
      const box = document.getElementById(`enemy-box-${idx}`);
      if (box) {
        box.addEventListener('click', () => {
          if (this.state.busy) return;
          if (this.state.enemies && this.state.enemies[idx] && this.state.enemies[idx].hp > 0) {
            this.state.targetEnemyIdx = idx;
            this.state.enemy = this.state.enemies[idx];
            this.state.clash.enemyMod = this.state.enemy.clashMod;
            window.sfx.playDicePickup();
            this.updateAllUI();
          }
        });
      }
    });

    // Dual-Enemy Target Selection via Canvas Tap
    this.canvas.addEventListener('click', (e) => {
      if (this.state.busy || this.state.currentScene !== 'battle') return;
      if (this.state.enemies && this.state.enemies.length === 2) {
        const rect = this.canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newIdx = clickX < rect.width / 2 ? 0 : 1;
        if (this.state.enemies[newIdx] && this.state.enemies[newIdx].hp > 0) {
          this.state.targetEnemyIdx = newIdx;
          this.state.enemy = this.state.enemies[newIdx];
          this.state.clash.enemyMod = this.state.enemy.clashMod;
          window.sfx.playDicePickup();
          this.updateAllUI();
        }
      }
    });

    // Top Utility Bar Navigation
    const openMenuBtn = document.getElementById('btn-open-menu');
    if (openMenuBtn) openMenuBtn.addEventListener('click', () => this.showMainMenu());

    const openTreeBtn = document.getElementById('btn-open-tree');
    if (openTreeBtn) openTreeBtn.addEventListener('click', () => this.showSkillTree());

    const openInvBtn = document.getElementById('btn-open-inventory');
    if (openInvBtn) openInvBtn.addEventListener('click', () => this.showHeroInventory('game'));

    const openQuestsTopBtn = document.getElementById('btn-open-quests-top');
    if (openQuestsTopBtn) openQuestsTopBtn.addEventListener('click', () => this.showQuests('game'));

    const achToastEl = document.getElementById('achievement-toast');
    if (achToastEl) {
      achToastEl.addEventListener('click', () => {
        achToastEl.classList.add('hidden');
        this.showQuests('game');
      });
    }

    const openGuideBtn = document.getElementById('btn-open-guide');
    if (openGuideBtn) openGuideBtn.addEventListener('click', () => this.showHowToPlay('game'));

    const openBestiaryBtn = document.getElementById('btn-open-bestiary');
    if (openBestiaryBtn) openBestiaryBtn.addEventListener('click', () => this.showBestiary());

    // Main Menu Interactions
    const menuContinueBtn = document.getElementById('btn-menu-continue');
    if (menuContinueBtn) menuContinueBtn.addEventListener('click', () => this.hideMainMenu());

    const menuInvBtn = document.getElementById('btn-menu-inventory');
    if (menuInvBtn) menuInvBtn.addEventListener('click', () => this.showHeroInventory('menu'));

    const menuHeroClick = document.getElementById('menu-hero-actor-click');
    if (menuHeroClick) menuHeroClick.addEventListener('click', () => this.showHeroInventory('menu'));

    const btnBackInv = document.getElementById('btn-back-from-inventory');
    if (btnBackInv) btnBackInv.addEventListener('click', () => this.hideHeroInventory());

    document.querySelectorAll('.inv-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        window.sfx.playMenuClick();
        this.currentInventorySlot = btn.getAttribute('data-slot') || 'helm';
        this.renderHeroInventory();
      });
    });

    document.querySelectorAll('.inv-equip-slot').forEach((slotEl) => {
      slotEl.addEventListener('click', () => {
        window.sfx.playMenuClick();
        this.currentInventorySlot = slotEl.getAttribute('data-slot') || 'helm';
        this.renderHeroInventory();
      });
    });

    const menuHowToPlayBtn = document.getElementById('btn-menu-how-to-play');
    if (menuHowToPlayBtn) menuHowToPlayBtn.addEventListener('click', () => this.showHowToPlay('menu'));

    const menuGuideTopBtn = document.getElementById('btn-menu-guide-top');
    if (menuGuideTopBtn) menuGuideTopBtn.addEventListener('click', () => this.showHowToPlay('menu'));

    const menuQuestsBtn = document.getElementById('btn-menu-quests');
    if (menuQuestsBtn) menuQuestsBtn.addEventListener('click', () => this.showQuests('menu'));

    const stageChangeRealmBtn = document.getElementById('btn-stage-change-realm');
    if (stageChangeRealmBtn) {
      stageChangeRealmBtn.addEventListener('click', () => {
        this.hideMainMenu();
        this.openChapterMapModal();
      });
    }

    const menuTreeBtn = document.getElementById('btn-menu-tree');
    if (menuTreeBtn) menuTreeBtn.addEventListener('click', () => this.showSkillTree());

    const menuBestiaryBtn = document.getElementById('btn-menu-bestiary');
    if (menuBestiaryBtn) menuBestiaryBtn.addEventListener('click', () => this.showBestiary());

    const menuChaptersBtn = document.getElementById('btn-menu-chapters');
    if (menuChaptersBtn) {
      menuChaptersBtn.addEventListener('click', () => {
        this.hideMainMenu();
        this.openChapterMapModal();
      });
    }

    const menuShopBtn = document.getElementById('btn-menu-shop');
    if (menuShopBtn) {
      menuShopBtn.addEventListener('click', () => {
        this.hideMainMenu();
        this.openShopModal();
      });
    }

    const menuInstallBtn = document.getElementById('btn-menu-install');
    if (menuInstallBtn) {
      menuInstallBtn.addEventListener('click', () => {
        this.hideMainMenu();
        this.openMobileInstallModal();
      });
    }

    const menuResetBtn = document.getElementById('btn-menu-reset');
    if (menuResetBtn) {
      menuResetBtn.addEventListener('click', () => {
        if (confirm('Mevcut seferi sıfırlayıp 1. Bölümden başlamak istiyor musun? (Kazanılan Ruh Taşların ve Açılan Yeteneklerin Korunur)')) {
          this.resetSaveData();
          this.hideMainMenu();
        }
      });
    }

    // How-To-Play Guide & Coach Interactions
    const btnBackGuide = document.getElementById('btn-back-from-guide');
    if (btnBackGuide) btnBackGuide.addEventListener('click', () => this.hideHowToPlay());

    const btnGuideStart = document.getElementById('btn-guide-start-play');
    if (btnGuideStart) {
      btnGuideStart.addEventListener('click', () => {
        document.getElementById('scene-how-to-play').classList.add('hidden');
        document.getElementById('scene-main-menu').classList.add('hidden');
        this.updateCoachBanner();
        window.sfx.playMenuClick();
      });
    }

    document.querySelectorAll('.guide-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        window.sfx.playMenuClick();
        const tabKey = btn.getAttribute('data-gtab');
        document.querySelectorAll('.guide-tab-btn').forEach((b) => b.classList.toggle('active', b === btn));
        document.querySelectorAll('.guide-tab-panel').forEach((p) => {
          p.classList.toggle('hidden', p.id !== `gtab-panel-${tabKey}`);
          p.classList.toggle('active', p.id === `gtab-panel-${tabKey}`);
        });
      });
    });

    const chkCoach = document.getElementById('chk-coach-mode');
    if (chkCoach) {
      chkCoach.checked = Boolean(this.state.coachMode);
      chkCoach.addEventListener('change', (e) => {
        this.state.coachMode = Boolean(e.target.checked);
        if (this.state.coachMode) this.state.coachStep = 0;
        this.updateCoachBanner();
        this.saveProgress();
      });
    }

    const btnCloseCoach = document.getElementById('btn-close-coach');
    if (btnCloseCoach) {
      btnCloseCoach.addEventListener('click', () => {
        this.state.coachMode = false;
        const chk = document.getElementById('chk-coach-mode');
        if (chk) chk.checked = false;
        this.updateCoachBanner();
        this.saveProgress();
      });
    }

    // Quests, Achievements & Daily Fortune Wheel Interactions
    const btnBackQuests = document.getElementById('btn-back-from-quests');
    if (btnBackQuests) btnBackQuests.addEventListener('click', () => this.hideQuests());

    const btnClaimAllQuests = document.getElementById('btn-claim-all-quests');
    if (btnClaimAllQuests) btnClaimAllQuests.addEventListener('click', () => this.claimAllQuests());

    const btnSpinFortune = document.getElementById('btn-spin-fortune');
    if (btnSpinFortune) btnSpinFortune.addEventListener('click', () => this.spinDailyFortune());

    document.querySelectorAll('.q-cat-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        window.sfx.playMenuClick();
        this.currentQuestCat = btn.getAttribute('data-qcat') || 'all';
        document.querySelectorAll('.q-cat-btn').forEach((b) => b.classList.toggle('active', b === btn));
        this.renderQuests();
      });
    });

    // Online Arena, PvP Matchmaking & Endless Tower Interactions
    const openArenaTopBtn = document.getElementById('btn-open-arena-top');
    if (openArenaTopBtn) openArenaTopBtn.addEventListener('click', () => this.showArena('game'));

    const menuArenaBtn = document.getElementById('btn-menu-arena');
    if (menuArenaBtn) menuArenaBtn.addEventListener('click', () => this.showArena('menu'));

    const btnBackArena = document.getElementById('btn-back-from-arena');
    if (btnBackArena) btnBackArena.addEventListener('click', () => this.hideArena());

    const btnEditNick = document.getElementById('btn-edit-nick');
    if (btnEditNick) {
      btnEditNick.addEventListener('click', () => {
        const nextNick = prompt('Online Sıralama ve PvP için Şövalye Adını gir:', this.state.playerNick || 'Sir Elden');
        if (nextNick && nextNick.trim()) {
          this.state.playerNick = nextNick.trim().slice(0, 18);
          this.saveProgress();
          this.renderArena();
          this.updateAllUI();
        }
      });
    }

    const btnRefreshOpps = document.getElementById('btn-refresh-opponents');
    if (btnRefreshOpps) {
      btnRefreshOpps.addEventListener('click', () => {
        window.sfx.playDiceRoll();
        this.pvpSeed = Math.floor(Math.random() * 1000);
        this.renderArena();
      });
    }

    const btnStartTower = document.getElementById('btn-start-tower-climb');
    if (btnStartTower) {
      btnStartTower.addEventListener('click', () => this.startEndlessTowerBattle());
    }

    const btnStartRaid = document.getElementById('btn-start-world-raid');
    if (btnStartRaid) {
      btnStartRaid.addEventListener('click', () => this.startWorldBossRaidBattle());
    }

    const btnClaimLeague = document.getElementById('btn-claim-league-chest');
    if (btnClaimLeague) {
      btnClaimLeague.addEventListener('click', () => this.claimLeagueChest());
    }

    const btnUltimateRage = document.getElementById('btn-ultimate-rage');
    if (btnUltimateRage) {
      btnUltimateRage.addEventListener('click', () => this.triggerUltimateRage());
    }

    document.querySelectorAll('.arena-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        window.sfx.playMenuClick();
        this.currentArenaTab = btn.getAttribute('data-atab') || 'pvp';
        document.querySelectorAll('.arena-tab-btn').forEach((b) => b.classList.toggle('active', b === btn));
        ['pvp', 'tower', 'raid', 'leaderboard'].forEach((tKey) => {
          const panel = document.getElementById(`arena-panel-${tKey}`);
          if (panel) panel.classList.toggle('hidden', tKey !== this.currentArenaTab);
        });
        this.renderArena();
      });
    });

    document.querySelectorAll('.lb-sub-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        window.sfx.playMenuClick();
        this.currentLbType = btn.getAttribute('data-lbtype') || 'trophies';
        document.querySelectorAll('.lb-sub-btn').forEach((b) => b.classList.toggle('active', b === btn));
        this.renderArenaLeaderboard();
      });
    });

    // Story Mode vs Classic Switcher in Main Menu
    const btnModeStory = document.getElementById('btn-mode-story');
    const btnModeClassic = document.getElementById('btn-mode-classic');
    if (btnModeStory && btnModeClassic) {
      btnModeStory.addEventListener('click', () => {
        this.state.gameMode = 'story';
        btnModeStory.classList.add('active');
        btnModeClassic.classList.remove('active');
        this.saveProgress();
      });
      btnModeClassic.addEventListener('click', () => {
        this.state.gameMode = 'classic';
        btnModeClassic.classList.add('active');
        btnModeStory.classList.remove('active');
        this.saveProgress();
      });
    }

    // Main Menu Audio Pills
    const btnMenuMusic = document.getElementById('btn-menu-music');
    if (btnMenuMusic) {
      btnMenuMusic.addEventListener('click', () => {
        if (window.bgm) {
          const playing = window.bgm.toggle();
          const lbl = document.getElementById('menu-music-label');
          if (lbl) lbl.textContent = playing ? 'Müzik: Açık' : 'Müzik: Kapalı';
          btnMenuMusic.classList.toggle('muted', !playing);
          const topMusic = document.getElementById('btn-music');
          if (topMusic) topMusic.textContent = playing ? '🎵' : '🔇';
        }
      });
    }

    const btnMenuSfx = document.getElementById('btn-menu-sfx');
    if (btnMenuSfx) {
      btnMenuSfx.addEventListener('click', () => {
        const on = window.sfx.toggle();
        const lbl = document.getElementById('menu-sfx-label');
        if (lbl) lbl.textContent = on ? 'Ses: Açık' : 'Ses: Kapalı';
        btnMenuSfx.classList.toggle('muted', !on);
        const topSound = document.getElementById('btn-sound');
        if (topSound) topSound.textContent = on ? '🔊' : '🔇';
      });
    }

    // Story Mode Dialog Blessings and Start
    document.querySelectorAll('.blessing-card-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.blessing-card-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.state.selectedBlessing = btn.getAttribute('data-blessing');
      });
    });

    const btnStartStory = document.getElementById('btn-start-story-expedition');
    if (btnStartStory) {
      btnStartStory.addEventListener('click', () => {
        this.applySelectedBlessing();
        document.getElementById('scene-story-dialogue').classList.add('hidden');
        this.openBattleRoom();
        if (window.bgm && window.bgm.enabled && !window.bgm.isPlaying) {
          window.bgm.start();
        }
      });
    }

    const btnBackStory = document.getElementById('btn-back-from-story');
    if (btnBackStory) {
      btnBackStory.addEventListener('click', () => {
        document.getElementById('scene-story-dialogue').classList.add('hidden');
        this.showMainMenu();
      });
    }

    // Branching Map Portal Back Button
    const btnBackMap = document.getElementById('btn-back-from-map');
    if (btnBackMap) {
      btnBackMap.addEventListener('click', () => {
        document.getElementById('scene-map-portal').classList.add('hidden');
      });
    }

    // Unlock Background Medieval Music on First Touch / Interaction
    const unlockAudio = () => {
      if (window.bgm && !window.bgm.isPlaying && window.bgm.enabled) {
        window.bgm.start();
      }
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };
    window.addEventListener('pointerdown', unlockAudio, { once: true });
    window.addEventListener('keydown', unlockAudio, { once: true });

    // Skill Tree Interactions
    document.getElementById('btn-back-from-tree').addEventListener('click', () => this.hideSkillTree());
    document.getElementById('btn-reset-talents').addEventListener('click', () => this.resetTalents());
    document.getElementById('btn-buy-talent').addEventListener('click', () => this.buySelectedTalent());
    document.querySelectorAll('.tree-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        window.sfx.playMenuClick();
        this.currentTreeBranch = btn.dataset.branch;
        this.renderSkillTree();
      });
    });

    // Bestiary Interactions
    document.getElementById('btn-back-from-bestiary').addEventListener('click', () => this.hideBestiary());

    // Room Scene Interactions (Shrine, Campfire, Chest)
    document.querySelectorAll('#room-overlay-shrine .scene-choice-btn').forEach((btn) => {
      btn.addEventListener('click', () => this.handleShrineChoice(btn.dataset.choice));
    });
    document.getElementById('btn-leave-shrine').addEventListener('click', () => this.leaveShrineRoom());

    document.querySelectorAll('#room-overlay-campfire .scene-choice-btn').forEach((btn) => {
      btn.addEventListener('click', () => this.handleCampfireChoice(btn.dataset.choice));
    });
    document.getElementById('btn-leave-campfire').addEventListener('click', () => this.leaveCampfireRoom());

    document.getElementById('btn-open-chest').addEventListener('click', () => this.handleOpenChest());
    document.getElementById('btn-leave-chest').addEventListener('click', () => this.leaveChestRoom());

    // Retention & Daily Reward Listeners
    const btnOpenCrownChest = document.getElementById('btn-open-crown-chest');
    if (btnOpenCrownChest) btnOpenCrownChest.addEventListener('click', () => this.openCrownChest());
    const menuCrownCard = document.getElementById('menu-crown-chest-card');
    if (menuCrownCard) menuCrownCard.addEventListener('click', () => this.openCrownChest());

    const btnMenuDailyLogin = document.getElementById('btn-menu-daily-login');
    if (btnMenuDailyLogin) btnMenuDailyLogin.addEventListener('click', () => this.openDailyLoginModal());
    const btnClaimDailyReward = document.getElementById('btn-claim-daily-reward');
    if (btnClaimDailyReward) btnClaimDailyReward.addEventListener('click', () => this.claimDailyLoginReward());
    const btnCloseDailyModal = document.getElementById('btn-close-daily-modal');
    if (btnCloseDailyModal) btnCloseDailyModal.addEventListener('click', () => {
      document.getElementById('daily-login-modal')?.classList.add('hidden');
    });

    const btnMenuIdlePatrol = document.getElementById('btn-menu-idle-patrol');
    if (btnMenuIdlePatrol) btnMenuIdlePatrol.addEventListener('click', () => this.openIdlePatrolModalManual());
    const btnClaimIdleLoot = document.getElementById('btn-claim-idle-loot');
    if (btnClaimIdleLoot) btnClaimIdleLoot.addEventListener('click', () => this.claimIdlePatrolLoot());
    const btnCloseIdleModal = document.getElementById('btn-close-idle-modal');
    if (btnCloseIdleModal) btnCloseIdleModal.addEventListener('click', () => {
      document.getElementById('idle-patrol-modal')?.classList.add('hidden');
    });

    // Language Toggle
    const btnToggleLang = document.getElementById('btn-toggle-lang');
    if (btnToggleLang) btnToggleLang.addEventListener('click', () => this.toggleLanguage());

    // Soundtrack Controls & Ticker Skip
    const btnNextTrack = document.getElementById('btn-menu-next-track');
    if (btnNextTrack) btnNextTrack.addEventListener('click', () => this.skipToNextTrack());
    const ticker = document.getElementById('soundtrack-ticker');
    if (ticker) ticker.addEventListener('click', () => this.skipToNextTrack());

    // Web Testing Floating Console Dock
    this.setupWebDebugDock();
  }

  // =========================================================
  // TACTICAL DIE RESOLUTION (ATTACK, HEAL, RUNE, RELIC)
  // =========================================================
  async useDieOnAction(slotIdx, actionType) {
    if (this.state.busy) return;
    const dieVal = this.state.actionDice[slotIdx];
    if (dieVal === null) return;

    if (actionType === 'relic') {
      if (this.state.player.relicUsedThisTurn) {
        this.spawnFloatingText(115, 360, 'BU TUR KULLANILDI!', '#ffbf3c', 14);
        return;
      }
      this.activateRelicWithDie(slotIdx, dieVal);
      return;
    }

    this.state.busy = true;
    this.state.actionDice[slotIdx] = null;
    this.state.selectedSlot = this.state.actionDice.findIndex((d) => d !== null);
    if (this.state.selectedSlot === -1) this.state.selectedSlot = null;
    this.renderAllDice();

    if (this.state.stats) {
      this.state.stats.cardsUsed = (this.state.stats.cardsUsed || 0) + 1;
    }
    this.advanceCoachStep(actionType);

    // Charge Ultimate Rage Meter (+35% per card used!)
    this.state.rage = Math.min(100, (this.state.rage || 0) + 35);

    const clashResult = await this.performTopClashRoll(dieVal);
    if (clashResult.outcome === 'victory') {
      this.state.rage = Math.min(100, (this.state.rage || 0) + 15);
    }

    if (actionType === 'attack') {
      await this.executePlayerAttack(dieVal, clashResult);
    } else if (actionType === 'heal') {
      await this.executePlayerHeal(dieVal, clashResult);
    } else if (actionType === 'rune') {
      await this.executePlayerRune(dieVal, clashResult);
    }

    const allEnemiesDefeated = this.state.enemies && this.state.enemies.length > 0
      ? this.state.enemies.every((en) => en.hp <= 0)
      : (this.state.enemy ? this.state.enemy.hp <= 0 : true);

    if (allEnemiesDefeated) {
      await this.handleEnemyDefeated();
      this.state.busy = false;
      this.saveProgress();
      return;
    }

    const remainingDice = this.state.actionDice.filter((d) => d !== null).length;
    if (remainingDice === 0) {
      await this.delay(380);
      await this.executeEnemyTurn();

      const allEnemiesDefeatedAfter = this.state.enemies && this.state.enemies.length > 0
        ? this.state.enemies.every((en) => en.hp <= 0)
        : (this.state.enemy ? this.state.enemy.hp <= 0 : true);

      if (allEnemiesDefeatedAfter) {
        await this.handleEnemyDefeated();
        this.state.busy = false;
        this.saveProgress();
        return;
      }

      if (this.state.player.hp <= 0) {
        this.handlePlayerDefeated();
        this.state.busy = false;
        return;
      }

      await this.startNewPlayerTurn();
    }

    this.state.busy = false;
    this.saveProgress();
    this.updateAllUI();
    this.renderAllDice();
  }

  async triggerUltimateRage() {
    if (this.state.busy) return;
    const curRage = this.state.rage || 0;
    if (curRage < 100) {
      this.spawnFloatingText(115, 345, `🔥 ÖFKE: %${curRage}/100 (Kart Kullanarak Doldur!)`, '#f97316', 14);
      return;
    }

    this.state.busy = true;
    this.state.rage = 0;
    const p = this.state.player;
    const wTier = this.getWeaponTier();
    const ultDmg = 18 + Math.floor(this.state.level * 2.5) + p.atkBonus + wTier.bonusDmg;

    window.sfx.playClashVictory();
    window.sfx.playSwordSlash(true);
    this.vibrate([40, 50, 70]);
    this.anim.knightOffsetX = 24;
    this.anim.knightOffsetY = -18;
    this.anim.slashAlpha = 1.0;
    this.anim.slashColor = 'gold';
    this.anim.lightningAlpha = 1.0;
    this.anim.enemyHitFlash = 1.0;
    this.anim.knightShieldGlow = 1.0;
    this.triggerShake(12, 320);

    // Grant +8 HP & +8 Shield to Sir Elden
    p.hp = Math.min(p.maxHp, p.hp + 8);
    p.shield = Math.min(50, p.shield + 8);
    this.spawnFloatingText(155, 290, `🔥 KIYAMET ÖFKESİ! +8 CAN & +8 KALKAN!`, '#fbbf24', 16);

    const enemies = this.state.enemies && this.state.enemies.length > 0
      ? this.state.enemies
      : (this.state.enemy ? [this.state.enemy] : []);
    const isDual = enemies.length === 2;

    enemies.forEach((en, idx) => {
      if (!en || en.hp <= 0) return;
      const fxX = isDual ? (idx === 0 ? 115 : 320) : 235;
      en.hp = Math.max(0, en.hp - ultDmg);
      en.bleed = (en.bleed || 0) + 4;
      en.weakenClash = (en.weakenClash || 0) + 2;
      this.recordRaidBossDamage(ultDmg);
      this.spawnFloatingText(fxX, 185, `🔥 -${ultDmg} KIYAMET DARBESİ!`, '#f97316', 21);
      this.spawnFloatingText(fxX, 155, `🩸 +4 KANAMA & ⚡ -2 ZAYIFLAMA!`, '#fde047', 14);
      this.spawnParticles(fxX, 220, '#f97316', 32);
    });

    this.updateAllUI();
    await this.delay(340);
    this.anim.knightOffsetX = 0;
    this.anim.knightOffsetY = 0;

    // Auto-target survivor if dual
    if (isDual && this.state.enemy && this.state.enemy.hp <= 0) {
      const otherIdx = this.state.targetEnemyIdx === 0 ? 1 : 0;
      if (this.state.enemies[otherIdx] && this.state.enemies[otherIdx].hp > 0) {
        this.state.targetEnemyIdx = otherIdx;
        this.state.enemy = this.state.enemies[otherIdx];
        this.state.clash.enemyMod = this.state.enemy.clashMod;
      }
    }

    const allEnemiesDefeated = enemies.every((en) => en.hp <= 0);
    if (allEnemiesDefeated) {
      await this.handleEnemyDefeated();
    }

    this.state.busy = false;
    this.saveProgress();
    this.updateAllUI();
  }

  recordRaidBossDamage(dmgAmt) {
    if (this.state.activeBattleType === 'raid' && dmgAmt > 0) {
      this.state.raidTotalDmg = (this.state.raidTotalDmg || 0) + dmgAmt;
      this.state.worldBossHp = Math.max(0, (this.state.worldBossHp ?? 2500) - dmgAmt);
    }
  }

  activateRelicWithDie(slotIdx, dieVal) {
    const p = this.state.player;
    const e = this.state.enemy;
    p.relicUsedThisTurn = true;
    this.vibrate(25);

    if (p.relicId === 'whetstone') {
      window.sfx.playClashVictory();
      p.tempAtkBuff += dieVal;
      p.tempClashBuff += 2;
      this.state.actionDice[slotIdx] = null;
      this.spawnFloatingText(175, 310, `+${dieVal} HASAR & +2 ÇARPIŞMA!`, '#ff5252', 16);
      this.spawnParticles(180, 320, '#ff382e', 18);
    } else if (p.relicId === 'buckler') {
      window.sfx.playShieldBlock();
      const shieldGain = dieVal * 2;
      p.shield += shieldGain;
      e.hp = Math.max(0, e.hp - 4);
      this.recordRaidBossDamage(4);
      this.state.actionDice[slotIdx] = null;
      this.anim.knightShieldGlow = 1.0;
      this.spawnFloatingText(165, 310, `+${shieldGain} KALKAN!`, '#3bb6ff', 17);
      this.spawnFloatingText(240, 210, `-4 DİKEN`, '#ff9d2e', 15);
    } else if (p.relicId === 'vampire') {
      window.sfx.playSwordSlash(false);
      const drain = dieVal + 3;
      e.hp = Math.max(0, e.hp - drain);
      this.recordRaidBossDamage(drain);
      p.hp = Math.min(p.maxHp, p.hp + drain);
      this.state.actionDice[slotIdx] = null;
      this.anim.enemyHitFlash = 1.0;
      this.anim.knightHealGlow = 1.0;
      this.spawnFloatingText(235, 200, `-${drain} SÖMÜRÜ`, '#ff2e63', 17);
      this.spawnFloatingText(170, 310, `+${drain} CAN`, '#2fe662', 17);
    } else if (p.relicId === 'alchemist') {
      window.sfx.playHeal();
      p.hp = Math.min(p.maxHp, p.hp + 5);
      this.state.actionDice[slotIdx] = 6;
      this.anim.knightHealGlow = 1.0;
      this.spawnFloatingText(180, 310, `+5 CAN & ZAR -> 6!`, '#2fe662', 16);
    }

    this.state.selectedSlot = this.state.actionDice.findIndex((d) => d !== null);
    if (this.state.selectedSlot === -1) this.state.selectedSlot = null;

    this.updateAllUI();
    this.renderAllDice();

    if (e.hp <= 0) {
      this.handleEnemyDefeated();
    } else if (this.state.actionDice.filter((d) => d !== null).length === 0) {
      this.state.busy = true;
      setTimeout(async () => {
        await this.executeEnemyTurn();
        if (this.state.player.hp > 0 && this.state.enemy.hp > 0) {
          await this.startNewPlayerTurn();
        } else if (this.state.enemy.hp <= 0) {
          await this.handleEnemyDefeated();
        } else {
          this.handlePlayerDefeated();
        }
        this.state.busy = false;
        this.saveProgress();
        this.updateAllUI();
        this.renderAllDice();
      }, 380);
    }
  }

  async performTopClashRoll(placedDieVal) {
    window.sfx.playDiceRoll();
    const p = this.state.player;
    const e = this.state.enemy;

    this.state.clash.statusText = 'ÇARPIŞMA...';
    this.state.clash.statusType = 'ready';
    this.updateClashDOM();

    for (let i = 0; i < 6; i++) {
      this.state.clash.playerDice = [this.randDie(), this.randDie()];
      this.state.clash.enemyDice = [this.randDie(), this.randDie()];
      this.renderAllDice();
      await this.delay(45);
    }

    const pd1 = this.randDie();
    const pd2 = this.randDie();
    const ed1 = this.randDie();
    const ed2 = this.randDie();

    const highDieBonus = placedDieVal >= 5 ? 1 : 0;
    const playerTotal = pd1 + pd2 + p.clashBonus + p.tempClashBuff + highDieBonus;
    const enemyRaw = ed1 + ed2;
    const effectiveEnemyMod = e.clashMod - e.weakenClash;
    const enemyNet = Math.max(1, enemyRaw + effectiveEnemyMod);

    let outcome = 'victory';
    let banner = 'ZAFER!';

    if (playerTotal > enemyNet) {
      outcome = 'victory';
      banner = playerTotal >= enemyNet + 4 ? 'KRİTİK!' : 'ZAFER!';
      if (this.state.stats) {
        this.state.stats.clashWins = (this.state.stats.clashWins || 0) + 1;
      }
      window.sfx.playClashVictory();
    } else if (playerTotal === enemyNet) {
      outcome = 'draw';
      banner = 'BERABERE';
    } else {
      outcome = 'defeat';
      banner = 'BLOKLANDI';
    }

    this.state.clash = {
      playerDice: [pd1, pd2],
      enemyDice: [ed1, ed2],
      playerTotal,
      enemyRaw,
      enemyMod: effectiveEnemyMod,
      statusText: banner,
      statusType: outcome
    };

    this.renderAllDice();
    this.updateClashDOM();
    await this.delay(160);

    return { outcome, playerTotal, enemyNet, isCrit: banner === 'KRİTİK!' };
  }

  async executePlayerAttack(dieVal, clashResult) {
    const p = this.state.player;
    const e = this.state.enemy;
    const wTier = this.getWeaponTier();
    const isDual = this.state.enemies && this.state.enemies.length === 2;
    const fxX = isDual ? (this.state.targetEnemyIdx === 0 ? 115 : 320) : 235;

    let dmg = dieVal + p.atkBonus + p.tempAtkBuff + wTier.bonusDmg;
    p.tempAtkBuff = 0;

    if (clashResult.outcome === 'victory') {
      dmg += clashResult.isCrit ? 5 : 3;
      if (wTier.lifesteal > 0) {
        p.hp = Math.min(p.maxHp, p.hp + wTier.lifesteal);
      }
    } else if (clashResult.outcome === 'defeat') {
      dmg = Math.max(2, Math.floor(dmg * 0.65));
    }

    let bleedApplied = false;
    if (dieVal === 6) {
      e.bleed += 3;
      bleedApplied = true;
    }

    window.sfx.playSwordSlash(clashResult.isCrit);
    this.vibrate(clashResult.isCrit ? [30, 40, 50] : 25);
    this.anim.knightOffsetX = 18;
    this.anim.knightOffsetY = -14;
    this.anim.slashAlpha = 1.0;
    this.anim.slashColor = wTier.slashColor;
    this.anim.enemyHitFlash = 1.0;
    this.anim.enemyOffsetX = 10;
    this.triggerShake(clashResult.isCrit ? 9 : 5, 220);

    e.hp = Math.max(0, e.hp - dmg);
    this.recordRaidBossDamage(dmg);
    this.updateAllUI();

    const label = clashResult.isCrit ? `-${dmg} KRİTİK!` : `-${dmg}`;
    this.spawnFloatingText(fxX, 210, label, clashResult.isCrit ? '#ffd54f' : '#ff382e', 20);
    if (bleedApplied) {
      this.spawnFloatingText(fxX, 180, `🩸 KANAMA +3!`, '#ff5252', 15);
    }
    this.spawnParticles(fxX, 235, '#ff382e', clashResult.isCrit ? 24 : 14);

    // Pet Companion Active Assist Strike!
    const pet = this.getEquippedPet();
    if (pet && e.hp > 0) {
      let petDmg = 0;
      let petText = '';
      if (pet.combatEffect === 'fire_breath') {
        petDmg = 3;
        petText = `🐉 +3 EJDER ATEŞİ!`;
      } else if (pet.combatEffect === 'wolf_bite') {
        petDmg = 2;
        e.bleed += 1;
        petText = `🐺 +2 KURT PENÇESİ!`;
      } else if (pet.combatEffect === 'phoenix_flame') {
        petDmg = 4;
        petText = `🦅 +4 ANKA ALEVİ!`;
      }
      if (petDmg > 0) {
        e.hp = Math.max(0, e.hp - petDmg);
        this.recordRaidBossDamage(petDmg);
        this.spawnFloatingText(fxX, 152, petText, '#fb923c', 14);
        this.updateAllUI();
      }
    }

    // If target enemy died, auto-switch to living survivor if dual
    if (e.hp <= 0 && isDual) {
      const otherIdx = this.state.targetEnemyIdx === 0 ? 1 : 0;
      if (this.state.enemies[otherIdx] && this.state.enemies[otherIdx].hp > 0) {
        this.state.targetEnemyIdx = otherIdx;
        this.state.enemy = this.state.enemies[otherIdx];
        this.state.clash.enemyMod = this.state.enemy.clashMod;
        this.spawnFloatingText(fxX, 150, '🎯 YENİ HEDEF KİLİTLENDİ!', '#ffd54f', 15);
      }
    }

    await this.delay(230);
    this.anim.knightOffsetX = 0;
    this.anim.knightOffsetY = 0;
    this.anim.enemyOffsetX = 0;

    if (clashResult.outcome === 'defeat' && e.hp > 0) {
      await this.delay(130);
      this.applyDamageToPlayer(2, 'KARŞI DARBE -2');
    }
  }

  async executePlayerHeal(dieVal, clashResult) {
    const p = this.state.player;
    window.sfx.playHeal();
    this.vibrate(18);

    const isEvenCombo = dieVal % 2 === 0;
    let totalRecovery = dieVal + p.healBonus + (isEvenCombo ? 3 : 0);
    if (clashResult.outcome === 'victory') {
      totalRecovery += 3;
    } else if (clashResult.outcome === 'draw') {
      totalRecovery += 1;
    }

    const missingHp = p.maxHp - p.hp;
    const healedHp = Math.min(missingHp, totalRecovery);
    const overflowShield = Math.max(0, totalRecovery - healedHp);

    p.hp += healedHp;
    p.shield = Math.min(50, p.shield + overflowShield);

    this.anim.knightHealGlow = 1.0;
    if (overflowShield > 0) this.anim.knightShieldGlow = 1.0;

    this.updateAllUI();
    this.spawnParticles(175, 330, '#2fe662', 20);

    const comboTag = isEvenCombo ? ' (ÇİFT KOMBO!)' : '';
    if (healedHp > 0 && overflowShield > 0) {
      this.spawnFloatingText(175, 295, `+${healedHp} CAN +${overflowShield} KALKAN${comboTag}`, '#2fe662', 15);
    } else if (healedHp > 0) {
      this.spawnFloatingText(175, 295, `+${healedHp} CAN${comboTag}`, '#2fe662', 18);
    } else {
      this.spawnFloatingText(175, 295, `+${overflowShield} MAVİ KALKAN${comboTag}`, '#3bb6ff', 17);
    }

    await this.delay(290);
  }

  async executePlayerRune(dieVal, clashResult) {
    const p = this.state.player;
    const e = this.state.enemy;
    const isDual = this.state.enemies && this.state.enemies.length === 2;
    const fxX = isDual ? (this.state.targetEnemyIdx === 0 ? 115 : 320) : 235;

    const isOddCombo = dieVal % 2 === 1;
    let dmg = dieVal + p.runeBonus + (isOddCombo ? 3 : 0);
    if (clashResult.outcome === 'victory') {
      dmg += 3;
    }

    const weakenAmt = clashResult.outcome === 'victory' ? 2 : 1;
    e.weakenClash += weakenAmt;

    window.sfx.playSwordSlash(true);
    this.vibrate([20, 30, 35]);
    this.anim.lightningAlpha = 1.0;
    this.anim.slashAlpha = 1.0;
    this.anim.slashColor = 'violet';
    this.anim.enemyHitFlash = 1.0;
    this.triggerShake(7, 220);

    e.hp = Math.max(0, e.hp - dmg);
    this.recordRaidBossDamage(dmg);

    // Splash Chain Lightning to secondary enemy if alive!
    if (isDual) {
      const otherIdx = this.state.targetEnemyIdx === 0 ? 1 : 0;
      const otherE = this.state.enemies[otherIdx];
      if (otherE && otherE.hp > 0) {
        const splashDmg = Math.max(2, Math.floor(dmg * 0.55));
        otherE.hp = Math.max(0, otherE.hp - splashDmg);
        otherE.weakenClash += 1;
        const splashX = otherIdx === 0 ? 115 : 320;
        this.spawnFloatingText(splashX, 185, `⚡ -${splashDmg} ZİNCİRLEME`, '#d480ff', 16);
        this.spawnParticles(splashX, 215, '#d480ff', 14);
      }
    }

    this.updateAllUI();

    this.spawnFloatingText(fxX, 205, `⚡ -${dmg} RÜN YILDIRIMI!`, '#d480ff', 19);
    this.spawnFloatingText(fxX, 178, `ÇARPIŞMA ZAYIFLADI (-${weakenAmt})`, '#e6b8ff', 14);
    this.spawnParticles(fxX, 230, '#d480ff', 24);

    // If target died, switch to survivor
    if (e.hp <= 0 && isDual) {
      const otherIdx = this.state.targetEnemyIdx === 0 ? 1 : 0;
      if (this.state.enemies[otherIdx] && this.state.enemies[otherIdx].hp > 0) {
        this.state.targetEnemyIdx = otherIdx;
        this.state.enemy = this.state.enemies[otherIdx];
        this.state.clash.enemyMod = this.state.enemy.clashMod;
      }
    }

    await this.delay(260);
  }

  async executeEnemyTurn() {
    const enemies = this.state.enemies && this.state.enemies.length > 0
      ? this.state.enemies
      : (this.state.enemy ? [this.state.enemy] : []);

    const isDual = enemies.length === 2;

    this.state.clash.statusText = 'ENEMY TURN';
    this.state.clash.statusType = 'defeat';
    this.updateClashDOM();

    for (let i = 0; i < enemies.length; i++) {
      const e = enemies[i];
      if (e.hp <= 0) continue;
      const fxX = isDual ? (i === 0 ? 115 : 320) : 235;

      if (e.bleed > 0) {
        e.hp = Math.max(0, e.hp - e.bleed);
        this.recordRaidBossDamage(e.bleed);
        this.anim.enemyHitFlash = 0.8;
        this.spawnFloatingText(fxX, 215, `🩸 -${e.bleed} KANAMA`, '#ff5252', 17);
        this.spawnParticles(fxX, 235, '#ff2e2e', 12);
        e.bleed = Math.max(0, e.bleed - 1);
        this.updateAllUI();
        await this.delay(220);
        if (e.hp <= 0) continue;
      }

      if (e.regen > 0 && e.bleed === 0 && e.hp < e.maxHp) {
        e.hp = Math.min(e.maxHp, e.hp + e.regen);
        this.spawnFloatingText(fxX, 190, `♻️ +${e.regen} YENİLENME`, '#55ff6a', 15);
        this.updateAllUI();
        await this.delay(180);
      }

      this.anim.enemyOffsetY = 22;
      await this.delay(140);

      const enemyRoll = this.randDie();
      const totalDmg = Math.max(2, e.baseDmg + Math.floor(enemyRoll / 2) - Math.floor((e.weakenClash || 0) / 2));
      const prefix = isDual ? `${e.name.split(' ')[0]} -${totalDmg}` : `-${totalDmg}`;
      this.applyDamageToPlayer(totalDmg, prefix);

      if (e.lifesteal > 0 && e.hp < e.maxHp) {
        e.hp = Math.min(e.maxHp, e.hp + e.lifesteal);
        this.spawnFloatingText(fxX, 195, `+${e.lifesteal} CAN ÇALDI`, '#ff5277', 14);
      }

      e.weakenClash = Math.max(0, (e.weakenClash || 0) - 1);
      this.anim.enemyOffsetY = 0;
      this.updateAllUI();
      await this.delay(260);

      if (this.state.player.hp <= 0) break;
    }
    this.updateAllUI();
    await this.delay(300);
  }

  applyDamageToPlayer(amount, labelPrefix) {
    const p = this.state.player;
    let rem = amount;
    let absorbed = 0;

    // Taking hits fuels Knight's Rage (+15%)
    this.state.rage = Math.min(100, (this.state.rage || 0) + 15);

    if (p.shield > 0) {
      absorbed = Math.min(p.shield, rem);
      p.shield -= absorbed;
      rem -= absorbed;
    }

    // Thorn damage reflection from talent 'g3' (Dikenli Zırh)
    if (absorbed > 0 && this.hasTalent('g3') && this.state.enemy && this.state.enemy.hp > 0) {
      this.state.enemy.hp = Math.max(0, this.state.enemy.hp - 4);
      this.recordRaidBossDamage(4);
      this.spawnFloatingText(235, 205, '🌵 -4 DİKEN YANSIMA!', '#ffd54f', 15);
      this.spawnParticles(235, 220, '#ffbf3c', 10);
    }

    if (rem > 0) {
      p.hp = Math.max(0, p.hp - rem);

      // Second Chance Perk from talent 'g4' (İkinci Şans)
      if (p.hp <= 0 && this.hasTalent('g4') && !this.state.usedSecondChance) {
        p.hp = 1;
        this.state.usedSecondChance = true;
        window.sfx.playMagicChime();
        this.spawnFloatingText(165, 300, '🕊️ İKİNCİ ŞANS KURTARDI! (1 HP)', '#ffd54f', 20);
        this.spawnParticles(165, 330, '#ffd54f', 30);
      }

      window.sfx.playEnemyHit();
      this.vibrate(40);
      this.triggerShake(7, 240);
      this.spawnParticles(165, 340, '#ff2e2e', 15);
      this.spawnFloatingText(165, 315, `${labelPrefix} CAN`, '#ff3b3b', 19);
    } else {
      window.sfx.playShieldBlock();
      this.vibrate(15);
      this.anim.knightShieldGlow = 1.0;
      this.triggerShake(3, 140);
      this.spawnParticles(145, 330, '#3bb6ff', 14);
      this.spawnFloatingText(165, 315, `🛡️ -${absorbed} KALKAN BLOK!`, '#3bb6ff', 16);
    }

    this.updateAllUI();
  }

  async startNewPlayerTurn() {
    this.state.player.tempClashBuff = 0;
    this.state.player.relicUsedThisTurn = false;

    window.sfx.playDiceRoll();

    // Pet Companion Turn-Start Passive Effect (Owl / Phoenix)
    const pet = this.getEquippedPet();
    if (pet) {
      if (pet.combatEffect === 'arcane_ward') {
        this.state.player.shield = Math.min(50, this.state.player.shield + 3);
        this.spawnFloatingText(160, 290, '🦉 +3 RÜN KALKANI!', '#38bdf8', 14);
      } else if (pet.combatEffect === 'phoenix_flame') {
        this.state.player.hp = Math.min(this.state.player.maxHp, this.state.player.hp + 3);
        this.spawnFloatingText(160, 290, '🦅 +3 ANKA ŞİFASI!', '#4ade80', 14);
      }
    }

    const numDice = this.hasTalent('r3') ? 3 : 2;
    if (this.state.guaranteeSixes) {
      this.state.actionDice = Array.from({ length: numDice }, () => 6);
      this.state.guaranteeSixes = false;
    } else {
      this.state.actionDice = Array.from({ length: numDice }, () => this.randDie());
    }

    this.state.selectedSlot = 0;
    this.state.clash.statusText = 'SENİN TURUN';
    this.state.clash.statusType = 'victory';
    this.renderAllDice();
    this.updateAllUI();
  }

  rerollActionDice() {
    if (this.state.busy) return;
    const hasAnyDie = this.state.actionDice.some((d) => d !== null);
    if (!hasAnyDie) return;

    const cost = this.hasTalent('r1') ? 1 : 2;
    if (this.state.gold < cost) {
      this.spawnFloatingText(110, 380, `YETERSİZ ALTIN (${cost}G)!`, '#ffbf3c', 14);
      return;
    }

    this.state.gold -= cost;
    window.sfx.playDiceRoll();
    this.vibrate(20);
    this.state.actionDice = this.state.actionDice.map((d) => (d !== null ? this.randDie() : null));
    this.spawnFloatingText(370, 350, '🎲 ZARLAR YENİLENDİ!', '#ffd54f', 14);
    this.saveProgress();
    this.renderAllDice();
    this.updateAllUI();
  }

  // =========================================================
  // ROOM & CHAPTER PROGRESSION (CAMPAIGN, ONLINE PVP, ENDLESS TOWER, RAID)
  // =========================================================
  async handleEnemyDefeated() {
    const e = this.state.enemy;
    window.sfx.playCoin();

    this.state.clash.statusText = 'ZAFER!';
    this.state.clash.statusType = 'victory';
    this.updateClashDOM();

    // Record bestiary kill
    if (e && e.spriteKey) {
      this.state.bestiaryKills[e.spriteKey] = (this.state.bestiaryKills[e.spriteKey] || 0) + 1;
    }

    // Talent 'w4' (Kana Susamışlık): heal +6 on kill
    if (this.hasTalent('w4')) {
      const healAmt = Math.min(6, this.state.player.maxHp - this.state.player.hp);
      if (healAmt > 0) {
        this.state.player.hp += healAmt;
        this.spawnFloatingText(120, 260, `+${healAmt} CAN (KANA SUSAMIŞLIK)`, '#2fe662', 15);
      }
    }

    // Drop Soul Gems (💎) & Boss Equipment Loot!
    let droppedSouls = 0;
    if (e.isBoss || this.state.activeBattleType === 'pvp' || this.state.activeBattleType === 'raid') {
      droppedSouls = Math.floor(Math.random() * 2) + 2; // 2 or 3
      const bossGear = this.unlockRandomBossGearDrop();
      this.lastBossDroppedGear = bossGear;
      if (bossGear) {
        this.spawnFloatingText(235, 118, `🎁 GANİMET: ${bossGear.icon} ${bossGear.name}!`, '#ffd54f', 16);
      }
    } else if (this.state.room === 3 || (this.state.activeBattleType === 'tower' && this.state.towerFloor % 3 === 0)) {
      droppedSouls = 1;
    } else {
      if (Math.random() < 0.3) droppedSouls = 1;
    }

    if (droppedSouls > 0) {
      this.state.soulGems += droppedSouls;
      this.spawnFloatingText(235, 155, `+${droppedSouls} RUH TAŞI 💎`, '#52e5ff', 20);
      window.sfx.playMagicChime();
    }

    // Multiplier from talent 'r4' (Midas Dokunuşu)
    const mult = this.hasTalent('r4') ? 1.4 : 1.0;
    const goldEarned = Math.round(e.goldReward * mult);
    const xpEarned = Math.round(e.xpReward * mult);

    this.spawnParticles(235, 240, '#ffd54f', 34);
    this.spawnFloatingText(235, 195, `+${goldEarned} Altın  +${xpEarned} XP`, '#ffd54f', 18);

    for (let i = 0; i < 9; i++) {
      this.anim.enemyAlpha = Math.max(0, 1 - (i + 1) / 9);
      await this.delay(35);
    }

    this.state.gold += goldEarned;
    this.state.xp += xpEarned;

    // Daily Crown Chest: Award Crowns (Boss/PvP/Tower/Raid = 2 crowns, normal monster = 1 crown)
    this.awardCrown(e.isBoss || (this.state.activeBattleType && this.state.activeBattleType !== 'dungeon') ? 2 : 1);

    if (this.state.xp >= this.state.xpToNext) {
      this.state.xp -= this.state.xpToNext;
      this.state.level += 1;
      this.state.xpToNext = Math.floor(this.state.xpToNext * 1.4);
      window.sfx.playLevelUp();
      this.updateAllUI();
      await this.showLevelUpModal();
    }

    // Handle Online PvP Duel Victory
    if (this.state.activeBattleType === 'pvp') {
      const rival = this.state.activePvpRival;
      const trophyGain = 25 + Math.floor(Math.random() * 8);
      this.state.trophies = (this.state.trophies || 100) + trophyGain;
      this.state.stats.pvpWins = (this.state.stats.pvpWins || 0) + 1;
      this.state.activeBattleType = 'campaign';
      this.state.activePvpRival = null;
      this.saveProgress();
      await this.showPvpVictoryModal(rival, trophyGain, goldEarned, droppedSouls, this.lastBossDroppedGear);
      return;
    }

    // Handle World Boss Raid Victory / Phase Clear
    if (this.state.activeBattleType === 'raid') {
      const trophyGain = 35;
      this.state.trophies = (this.state.trophies || 100) + trophyGain;
      if ((this.state.worldBossHp ?? 0) <= 0) {
        this.state.worldBossHp = this.state.worldBossMaxHp || 2500;
      }
      this.state.activeBattleType = 'campaign';
      this.saveProgress();
      await this.showPvpVictoryModal(
        { nick: '🐉 Kadim Dünya Ejderi Ignis-Rex' },
        trophyGain,
        goldEarned,
        droppedSouls,
        this.lastBossDroppedGear
      );
      return;
    }

    // Handle Endless Blood Tower Floor Clear
    if (this.state.activeBattleType === 'tower') {
      const clearedFloor = this.state.towerFloor || 1;
      const trophyGain = 15;
      this.state.trophies = (this.state.trophies || 100) + trophyGain;
      this.state.towerFloor = clearedFloor + 1;
      this.state.bestTowerFloor = Math.max(this.state.bestTowerFloor || 1, this.state.towerFloor);
      this.spawnFloatingText(235, 130, `🗼 KULE KAT ${clearedFloor} GEÇİLDİ! (+${trophyGain}🏆)`, '#38bdf8', 17);
      this.saveProgress();
      this.startEndlessTowerBattle();
      return;
    }

    await this.advanceToNextRoom();
  }

  unlockRandomBossGearDrop() {
    if (!Array.isArray(this.state.ownedGear)) {
      this.state.ownedGear = ['helm_iron', 'armor_steel', 'weapon_iron', 'cape_traveler'];
    }
    const ch = this.getCurrentChapter();
    const unowned = HERO_GEAR_CATALOG.filter((g) => !this.state.ownedGear.includes(g.id));
    if (unowned.length === 0) return null;

    // Prefer gear matching this boss's base archetype or world first, especially helmets!
    const archMatch = unowned.filter((g) => g.bossSourceId === ch.baseArchId || g.worldReq === ch.worldId);
    const helmPool = (archMatch.length > 0 ? archMatch : unowned).filter((g) => g.slot === 'helm');
    const pool = helmPool.length > 0 && Math.random() < 0.65
      ? helmPool
      : (archMatch.length > 0 ? archMatch : unowned);

    const chosen = pool[Math.floor(Math.random() * pool.length)];
    if (chosen && !this.state.ownedGear.includes(chosen.id)) {
      this.state.ownedGear.push(chosen.id);
      this.saveProgress();
    }
    return chosen || null;
  }

  async advanceToNextRoom() {
    if (this.state.room < 5) {
      this.state.room += 1;
      this.updateAllUI();

      if (this.state.room === 2) {
        this.openShrineRoom();
        return;
      } else if (this.state.room === 4) {
        this.openCampfireRoom();
        return;
      }

      this.openBattleRoom();
    } else {
      // Defeated Boss in room 5 -> Open Treasure Vault!
      this.openChestRoom();
    }
    this.saveProgress();
  }

  // =========================================================
  // INTERACTIVE IN-DUNGEON ROOM SCENES (SHRINE, CAMPFIRE, CHEST)
  // =========================================================
  openBattleRoom() {
    this.state.currentScene = 'battle';
    document.getElementById('room-overlay-shrine').classList.add('hidden');
    document.getElementById('room-overlay-campfire').classList.add('hidden');
    document.getElementById('room-overlay-chest').classList.add('hidden');

    this.spawnEnemyForCurrentRoom();
    if (window.bgm) {
      window.bgm.setSceneTrack(this.state.enemy?.isBoss ? 'arena' : 'battle');
      this.updateSoundtrackBanner();
    }
    this.startNewPlayerTurn();
    this.updateAllUI();
  }

  openShrineRoom() {
    this.state.currentScene = 'shrine';
    this.state.busy = false;
    window.sfx.playMagicChime();

    document.getElementById('room-overlay-shrine').classList.remove('hidden');
    document.getElementById('room-overlay-campfire').classList.add('hidden');
    document.getElementById('room-overlay-chest').classList.add('hidden');
    document.getElementById('btn-leave-shrine').classList.add('hidden');

    const shrineChoices = document.querySelectorAll('#room-overlay-shrine .scene-choice-btn');
    shrineChoices.forEach((btn) => {
      btn.disabled = false;
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    });

    this.updateAllUI();
  }

  handleShrineChoice(choiceType) {
    if (this.state.currentScene !== 'shrine') return;
    const p = this.state.player;

    if (choiceType === 'dark') {
      p.hp = Math.max(1, p.hp - 6);
      p.clashBonus += 1;
      this.spawnFloatingText(235, 200, '+1 ÇARPIŞMA BONUSU (KALICI)!', '#ffd54f', 16);
      this.spawnFloatingText(120, 260, '-6 CAN FEDA EDİLDİ', '#ff5e5e', 14);
      window.sfx.playMagicChime();
    } else if (choiceType === 'light') {
      p.hp = p.maxHp;
      p.shield += 8;
      this.spawnFloatingText(235, 200, 'TAM ŞİFA & +8 KALKAN!', '#2fe662', 16);
      window.sfx.playHeal();
    } else if (choiceType === 'rune') {
      this.state.soulGems += 1;
      this.state.xp += 20;
      this.spawnFloatingText(235, 200, '+1 RUH TAŞI 💎 & +20 XP!', '#52e5ff', 16);
      window.sfx.playMagicChime();
    }

    const shrineChoices = document.querySelectorAll('#room-overlay-shrine .scene-choice-btn');
    shrineChoices.forEach((btn) => {
      btn.disabled = true;
      btn.style.opacity = '0.5';
      btn.style.pointerEvents = 'none';
    });

    document.getElementById('btn-leave-shrine').classList.remove('hidden');
    this.updateAllUI();
    this.saveProgress();
  }

  leaveShrineRoom() {
    document.getElementById('room-overlay-shrine').classList.add('hidden');
    window.sfx.playMenuClick();
    this.advanceToNextRoom();
  }

  openCampfireRoom() {
    this.state.currentScene = 'campfire';
    this.state.busy = false;

    document.getElementById('room-overlay-campfire').classList.remove('hidden');
    document.getElementById('room-overlay-shrine').classList.add('hidden');
    document.getElementById('room-overlay-chest').classList.add('hidden');
    document.getElementById('btn-leave-campfire').classList.add('hidden');

    const campfireChoices = document.querySelectorAll('#room-overlay-campfire .scene-choice-btn');
    campfireChoices.forEach((btn) => {
      btn.disabled = false;
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    });

    this.updateAllUI();
  }

  handleCampfireChoice(choiceType) {
    if (this.state.currentScene !== 'campfire') return;
    const p = this.state.player;

    if (choiceType === 'rest') {
      const healAmt = Math.round(p.maxHp * 0.5);
      p.hp = Math.min(p.maxHp, p.hp + healAmt);
      p.tempAtkBuff += 2;
      this.spawnFloatingText(235, 200, `+${healAmt} CAN & +2 GEÇİCİ HASAR!`, '#2fe662', 16);
      window.sfx.playHeal();
    } else if (choiceType === 'forge') {
      p.atkBonus += 1;
      this.spawnFloatingText(235, 200, 'SİLAH BİLENDİ! (+1 SALDIRI)', '#ffd54f', 16);
      window.sfx.playAnvil();
    } else if (choiceType === 'polish') {
      this.state.guaranteeSixes = true;
      this.spawnFloatingText(235, 200, 'ZAR 6 GARANTİSİ AKTİF!', '#52e5ff', 16);
      window.sfx.playDiceRoll();
    }

    const campfireChoices = document.querySelectorAll('#room-overlay-campfire .scene-choice-btn');
    campfireChoices.forEach((btn) => {
      btn.disabled = true;
      btn.style.opacity = '0.5';
      btn.style.pointerEvents = 'none';
    });

    document.getElementById('btn-leave-campfire').classList.remove('hidden');
    this.updateAllUI();
    this.saveProgress();
  }

  leaveCampfireRoom() {
    document.getElementById('room-overlay-campfire').classList.add('hidden');
    window.sfx.playMenuClick();
    this.advanceToNextRoom();
  }

  openChestRoom() {
    this.state.currentScene = 'chest';
    this.state.busy = false;
    window.sfx.playLevelUp();

    document.getElementById('room-overlay-chest').classList.remove('hidden');
    document.getElementById('room-overlay-shrine').classList.add('hidden');
    document.getElementById('room-overlay-campfire').classList.add('hidden');
    document.getElementById('chest-rewards-box').classList.add('hidden');
    document.getElementById('btn-leave-chest').classList.add('hidden');
    document.getElementById('btn-open-chest').classList.remove('hidden');

    this.updateAllUI();
  }

  handleOpenChest() {
    window.sfx.playChestOpen();
    this.spawnParticles(235, 220, '#ffd54f', 40);
    this.spawnParticles(235, 220, '#52e5ff', 30);

    const bonusMult = this.hasTalent('r4') ? 1.4 : 1.0;
    const goldFound = Math.round((35 + Math.floor(Math.random() * 25)) * bonusMult);
    const soulsFound = Math.round((2 + Math.floor(Math.random() * 2)) * (this.hasTalent('r4') ? 1.5 : 1.0));
    const xpFound = 50;

    this.state.gold += goldFound;
    this.state.soulGems += soulsFound;
    this.state.xp += xpFound;

    // Also guarantee a Boss Gear Drop from opening the Boss Chest if one wasn't just dropped or drop a bonus piece!
    const droppedGear = this.lastBossDroppedGear || this.unlockRandomBossGearDrop();
    this.lastBossDroppedGear = null;

    let gearHtml = '';
    if (droppedGear) {
      gearHtml = `<span style="color:#ffd54f;border-color:rgba(255,213,79,0.75);background:rgba(90,55,10,0.85);">🎁 YENİ EŞYA: ${droppedGear.icon} ${droppedGear.name} (Envantere Eklendi!)</span>`;
      this.spawnFloatingText(235, 160, `🎁 ${droppedGear.icon} ${droppedGear.name} DÜŞTÜ!`, '#ffd54f', 16);
    }

    const rewardsBox = document.getElementById('chest-rewards-box');
    rewardsBox.innerHTML = `
      <span>💰 +${goldFound} Altın</span>
      <span>💎 +${soulsFound} Ruh Taşı</span>
      <span>⚡ +${xpFound} XP</span>
      ${gearHtml}
    `;
    rewardsBox.classList.remove('hidden');
    document.getElementById('btn-open-chest').classList.add('hidden');
    document.getElementById('btn-leave-chest').classList.remove('hidden');

    this.updateAllUI();
    this.saveProgress();
  }

  leaveChestRoom() {
    document.getElementById('room-overlay-chest').classList.add('hidden');
    window.sfx.playMenuClick();

    // Advance to next chapter!
    this.state.chapterIdx = (this.state.chapterIdx + 1) % CHAPTERS.length;
    this.state.room = 1;
    this.openBattleRoom();
    this.saveProgress();
  }

  // =========================================================
  // FULL SCREEN SCENE CONTROLLERS: MAIN MENU, GUIDE, QUESTS, SKILL TREE, BESTIARY
  // =========================================================
  syncMainMenuDOM() {
    const ch = this.getCurrentChapter();
    const p = this.state.player;
    const wTier = this.getWeaponTier();
    const relic = RELICS[p.relicId] || RELICS.whetstone;

    const chEl = document.getElementById('menu-current-chapter');
    if (chEl) chEl.textContent = `${ch.worldIcon || '🏰'} D${ch.worldId || 1} • Bölüm ${ch.id}: ${ch.name}`;

    const lvEl = document.getElementById('menu-current-level');
    if (lvEl) lvEl.textContent = `Sv.${this.state.level}`;

    const rankEl = document.getElementById('menu-knight-rank');
    if (rankEl) {
      if (this.state.equippedTitle) {
        rankEl.textContent = `🏅 ${this.state.equippedTitle}`;
      } else {
        const ranks = ['Gezgin Şövalye', 'Mahzen Avcısı', 'Rün Muhafızı', 'Kıdemli Şövalye', 'Zindan Efendisi', 'Ebedi Hükümdar'];
        rankEl.textContent = ranks[Math.min(ranks.length - 1, Math.floor((this.state.level - 1) / 2))];
      }
    }

    const xpPct = Math.max(0, Math.min(100, (this.state.xp / this.state.xpToNext) * 100));
    const xpFill = document.getElementById('menu-xp-fill');
    if (xpFill) xpFill.style.width = `${xpPct}%`;
    const xpTxt = document.getElementById('menu-xp-text');
    if (xpTxt) xpTxt.textContent = `${this.state.xp} / ${this.state.xpToNext} XP`;

    const gemEl = document.getElementById('menu-soul-gem-count');
    if (gemEl) gemEl.textContent = `💎 ${this.state.soulGems}`;
    const goldEl = document.getElementById('menu-gold-count');
    if (goldEl) goldEl.textContent = `💰 ${this.state.gold}`;
    const hpEl = document.getElementById('menu-hp-count');
    if (hpEl) hpEl.textContent = `❤️ ${p.hp}/${p.maxHp}`;
    const treeBadge = document.getElementById('menu-tree-badge');
    if (treeBadge) treeBadge.textContent = `${this.state.soulGems}💎`;

    const eqHelm = this.getEquippedItem('helm');
    const eqArmor = this.getEquippedItem('armor');
    const helmPill = document.getElementById('menu-helm-pill');
    if (helmPill && eqHelm) helmPill.textContent = `${eqHelm.icon} ${eqHelm.name}`;

    const weaponPill = document.getElementById('menu-weapon-pill');
    if (weaponPill) weaponPill.textContent = wTier.name;
    const relicPill = document.getElementById('menu-relic-pill');
    if (relicPill) relicPill.textContent = `${relic.icon} ${relic.name}`;
    const atkPill = document.getElementById('menu-atk-pill');
    if (atkPill) atkPill.textContent = `⚔️ +${p.atkBonus} Güç`;

    const stageHeroImg = document.getElementById('menu-stage-hero-img');
    const heroFrontSrc = (eqHelm && eqHelm.portraitSrc) ? eqHelm.portraitSrc : 'assets/hero_front.png';
    if (stageHeroImg) {
      stageHeroImg.src = heroFrontSrc;
      stageHeroImg.style.filter = (eqArmor && eqArmor.skinFilter && eqArmor.skinFilter !== 'none')
        ? `${eqArmor.skinFilter} drop-shadow(0 6px 10px rgba(0,0,0,0.85))`
        : 'drop-shadow(0 6px 10px rgba(0, 0, 0, 0.85))';
    }
    document.querySelectorAll('.rpg-avatar-img, .story-knight-portrait').forEach((imgEl) => {
      imgEl.src = heroFrontSrc;
      imgEl.style.filter = (eqArmor && eqArmor.skinFilter && eqArmor.skinFilter !== 'none') ? eqArmor.skinFilter : 'none';
    });

    const ownedCount = (this.state.ownedGear || []).length;
    const invBadge = document.getElementById('menu-inventory-badge');
    if (invBadge) invBadge.textContent = `${ownedCount}/${HERO_GEAR_CATALOG.length}`;
    const topGearBadge = document.getElementById('header-gear-badge');
    if (topGearBadge) topGearBadge.textContent = `${ownedCount}`;

    const stageBg = document.getElementById('menu-stage-bg');
    if (stageBg && ch.bgFile) {
      stageBg.style.backgroundImage = `url('${ch.bgFile}')`;
    }

    const roomLbl = document.getElementById('menu-stage-room-label');
    if (roomLbl) roomLbl.textContent = `Bölüm ${ch.id}/100 • Oda ${this.state.room}/5`;

    const stageEnemyImg = document.getElementById('menu-stage-enemy-img');
    const stageEnemyName = document.getElementById('menu-stage-enemy-name');
    const activeEnemy = this.state.enemy || ch.enemies[0];
    if (stageEnemyImg && activeEnemy) {
      const spriteMap = {
        skeleton: 'assets/enemy_skeleton.png',
        viper: 'assets/monster_viper.png',
        drowned: 'assets/monster_drowned.png',
        hydra_boss: 'assets/monster_hydra_boss.png',
        inquisitor: 'assets/monster_inquisitor.png',
        gargoyle: 'assets/monster_gargoyle.png',
        boneking_boss: 'assets/monster_boneking_boss.png',
        plague: 'assets/monster_plague.png',
        golem: 'assets/monster_golem.png',
        chimera_boss: 'assets/monster_chimera_boss.png',
        valkyrie: 'assets/monster_valkyrie.png',
        wyrm_boss: 'assets/monster_wyrm_boss.png',
        hellknight: 'assets/monster_hellknight.png',
        azazel_boss: 'assets/monster_azazel_boss.png'
      };
      stageEnemyImg.src = spriteMap[activeEnemy.spriteKey] || 'assets/enemy_skeleton.png';
    }
    if (stageEnemyName && activeEnemy) {
      stageEnemyName.textContent = `💀 ${activeEnemy.name.replace(' [BÖLÜM BOSS]', '').replace(' [FİNAL BOSS]', '').replace(' [DÜNYA BOSS]', '')}`;
    }

    // Quests Claimable Badge & Top Header Trophy Badge
    const claimableCount = this.getClaimableQuestsCount();
    const questsBadge = document.getElementById('menu-quests-badge');
    if (questsBadge) {
      if (claimableCount > 0) {
        questsBadge.textContent = `${claimableCount} ÖDÜL!`;
        questsBadge.className = 'feat-tag reward-tag';
      } else {
        const claimedLen = (this.state.claimedQuests || []).length;
        questsBadge.textContent = `${claimedLen}/${QUESTS_DATA.length}`;
        questsBadge.className = 'feat-tag new-tag';
      }
    }
    const headerQuestsBadge = document.getElementById('header-quests-badge');
    if (headerQuestsBadge) {
      if (claimableCount > 0) {
        headerQuestsBadge.textContent = `${claimableCount}!`;
      } else {
        const claimedLen = (this.state.claimedQuests || []).length;
        headerQuestsBadge.textContent = `${claimedLen}`;
      }
    }

    this.checkNewAchievementsToast();
  }

  showMainMenu() {
    this.syncMainMenuDOM();

    const modeStoryBtn = document.getElementById('btn-mode-story');
    const modeClassicBtn = document.getElementById('btn-mode-classic');
    if (modeStoryBtn && modeClassicBtn) {
      modeStoryBtn.classList.toggle('active', this.state.gameMode === 'story');
      modeClassicBtn.classList.toggle('active', this.state.gameMode === 'classic');
    }

    const menuMusicLabel = document.getElementById('menu-music-label');
    const menuMusicBtn = document.getElementById('btn-menu-music');
    if (window.bgm && menuMusicLabel && menuMusicBtn) {
      menuMusicLabel.textContent = window.bgm.isPlaying ? 'Müzik: Açık' : 'Müzik: Kapalı';
      menuMusicBtn.classList.toggle('muted', !window.bgm.isPlaying);
    }

    if (window.bgm && window.bgm.enabled && !window.bgm.isPlaying) {
      window.bgm.start();
    }
    if (window.bgm) {
      window.bgm.setSceneTrack('menu');
      this.updateSoundtrackBanner();
    }
    this.renderArenaChestSlots();
    this.applyLanguageToDOM();

    document.getElementById('scene-main-menu').classList.remove('hidden');
    document.getElementById('scene-skill-tree').classList.add('hidden');
    document.getElementById('scene-bestiary').classList.add('hidden');
    const invScene = document.getElementById('scene-hero-inventory');
    if (invScene) invScene.classList.add('hidden');
    const guideScene = document.getElementById('scene-how-to-play');
    if (guideScene) guideScene.classList.add('hidden');
    const questsScene = document.getElementById('scene-quests');
    if (questsScene) questsScene.classList.add('hidden');
    const storyDialog = document.getElementById('scene-story-dialogue');
    if (storyDialog) storyDialog.classList.add('hidden');
    const mapPortal = document.getElementById('scene-map-portal');
    if (mapPortal) mapPortal.classList.add('hidden');
    window.sfx.playMenuClick();
  }

  hideMainMenu() {
    document.getElementById('scene-main-menu').classList.add('hidden');
    window.sfx.playMenuClick();
    if (this.state.gameMode === 'story' && this.state.room === 1) {
      this.openStoryDialogueModal();
    }
  }

  // =========================================================
  // HERO CHARACTER CUSTOMIZATION & EQUIPMENT INVENTORY
  // =========================================================
  showHeroInventory(fromView = 'menu') {
    this.viewBeforeInventory = fromView;
    this.currentInventorySlot = this.currentInventorySlot || 'helm';
    document.getElementById('scene-main-menu').classList.add('hidden');
    const invScene = document.getElementById('scene-hero-inventory');
    if (invScene) invScene.classList.remove('hidden');
    this.renderHeroInventory();
    window.sfx.playMenuClick();
  }

  hideHeroInventory() {
    const invScene = document.getElementById('scene-hero-inventory');
    if (invScene) invScene.classList.add('hidden');
    window.sfx.playMenuClick();
    if (this.viewBeforeInventory === 'menu') {
      this.showMainMenu();
    } else {
      this.updateAllUI();
    }
  }

  renderHeroInventory() {
    const activeSlot = this.currentInventorySlot || 'helm';
    const owned = this.state.ownedGear || ['helm_unhelmed', 'helm_iron', 'armor_steel', 'weapon_iron', 'cape_traveler'];
    const ownedPets = this.state.ownedPets || ['pet_dragon'];

    // Update top count
    const ownedCountEl = document.getElementById('inv-owned-count');
    if (ownedCountEl) ownedCountEl.textContent = `${owned.length} / ${HERO_GEAR_CATALOG.length} Eşya`;

    // Update 5 Equipped Slot Cards around Hero Preview (Including Pet Slot)
    ['helm', 'armor', 'weapon', 'cape'].forEach((slotKey) => {
      const eqItem = this.getEquippedItem(slotKey);
      const upgLv = eqItem ? this.getGearUpgradeLevel(eqItem.id) : 0;
      const slotCard = document.getElementById(`inv-eq-slot-${slotKey}`);
      const iconEl = document.getElementById(`inv-eq-icon-${slotKey}`);
      const nameEl = document.getElementById(`inv-eq-name-${slotKey}`);
      if (slotCard) slotCard.classList.toggle('active-slot', slotKey === activeSlot);
      if (iconEl && eqItem) iconEl.textContent = eqItem.icon;
      if (nameEl && eqItem) nameEl.textContent = `${eqItem.name}${upgLv > 0 ? ` +${upgLv}` : ''}`;
    });

    const eqPet = this.getEquippedPet();
    const petSlotCard = document.getElementById('inv-eq-slot-pet');
    const petIconEl = document.getElementById('inv-eq-icon-pet');
    const petNameEl = document.getElementById('inv-eq-name-pet');
    const eqPetImg = document.getElementById('inv-eq-pet-img');
    if (petSlotCard) petSlotCard.classList.toggle('active-slot', activeSlot === 'pet');
    if (eqPetImg && eqPet) {
      eqPetImg.src = eqPet.spriteSrc;
    } else if (petIconEl && eqPet) {
      petIconEl.textContent = eqPet.icon;
    }
    if (petNameEl && eqPet) petNameEl.textContent = eqPet.name.split(' ')[0];

    // Update Live Hero Pedestal Visuals (Front-Facing Portrait per Helmet, Armor Filter, Aura Ring, Pet Badge, Title)
    const eqHelm = this.getEquippedItem('helm');
    const eqArmor = this.getEquippedItem('armor');
    const eqCape = this.getEquippedItem('cape');

    const previewImg = document.getElementById('inv-hero-preview-img');
    if (previewImg) {
      previewImg.src = (eqHelm && eqHelm.portraitSrc) ? eqHelm.portraitSrc : 'assets/hero_front.png';
      previewImg.style.filter = (eqArmor && eqArmor.skinFilter && eqArmor.skinFilter !== 'none')
        ? `${eqArmor.skinFilter} drop-shadow(0 8px 14px rgba(0,0,0,0.9))`
        : 'drop-shadow(0 8px 14px rgba(0, 0, 0, 0.9))';
    }

    const helmFloating = document.getElementById('inv-helm-floating-badge');
    if (helmFloating && eqHelm) {
      helmFloating.textContent = eqHelm.icon;
    }

    const petFloating = document.getElementById('inv-pet-floating-badge');
    const petBadgeImg = document.getElementById('inv-pet-badge-img');
    if (petBadgeImg && eqPet) {
      petBadgeImg.src = eqPet.spriteSrc;
    }
    if (petFloating && eqPet) {
      petFloating.title = `Aktif Yoldaş: ${eqPet.name}`;
    }

    const auraRing = document.getElementById('inv-aura-ring');
    if (auraRing) {
      if (eqCape && eqCape.auraColor) {
        auraRing.style.background = `radial-gradient(circle, ${eqCape.auraColor} 0%, transparent 70%)`;
        auraRing.style.borderColor = eqCape.auraColor;
      } else {
        auraRing.style.background = 'radial-gradient(circle, rgba(255, 213, 79, 0.25) 0%, transparent 70%)';
        auraRing.style.borderColor = 'rgba(255, 213, 79, 0.35)';
      }
    }

    const skinTitle = document.getElementById('inv-hero-skin-title');
    if (skinTitle) {
      skinTitle.textContent = `${this.state.playerNick || 'Sir Elden'} • ${eqHelm ? eqHelm.name : 'Şövalye'} • ${eqPet ? eqPet.icon : '🐉'}`;
    }

    // Update Total Gear Stat Bonuses Bar
    const gearB = this.getGearBonuses();
    const statHp = document.getElementById('inv-stat-hp');
    const statAtk = document.getElementById('inv-stat-atk');
    const statShield = document.getElementById('inv-stat-shield');
    const statClash = document.getElementById('inv-stat-clash');
    const statPet = document.getElementById('inv-stat-pet');
    if (statHp) statHp.textContent = `+${gearB.hp}`;
    if (statAtk) statAtk.textContent = `+${gearB.atk}`;
    if (statShield) statShield.textContent = `+${gearB.shield}`;
    if (statClash) statClash.textContent = `+${gearB.clash}`;
    if (statPet && eqPet) statPet.textContent = `${eqPet.icon} ${eqPet.name.split(' ')[0]}`;

    // Update Category Tabs
    document.querySelectorAll('.inv-tab-btn').forEach((btn) => {
      const slotAttr = btn.getAttribute('data-slot') || btn.getAttribute('data-islot');
      btn.classList.toggle('active', slotAttr === activeSlot);
    });

    const listEl = document.getElementById('inv-items-list');
    if (!listEl) return;

    // Render Clash Royale Style Card Collection Album if activeSlot === 'collection'
    if (activeSlot === 'collection') {
      this.renderCollectionTab(listEl);
      return;
    }

    // Render PET COMPANIONS Tab if activeSlot === 'pet'
    if (activeSlot === 'pet') {
      listEl.innerHTML = PET_COMPANIONS_CATALOG.map((pet) => {
        const isOwned = ownedPets.includes(pet.id);
        const isEquipped = (this.state.equippedPet || 'pet_dragon') === pet.id;
        let cardCls = 'gear-item-card';
        if (isEquipped) cardCls += ' equipped';
        else if (!isOwned) cardCls += ' locked';

        const statPills = [];
        if (pet.stats?.atk) statPills.push(`⚔️ +${pet.stats.atk} Hasar`);
        if (pet.stats?.hp) statPills.push(`❤️ +${pet.stats.hp} Can`);
        if (pet.stats?.shield) statPills.push(`🛡️ +${pet.stats.shield} Kalkan`);
        if (pet.stats?.clash) statPills.push(`🎲 +${pet.stats.clash} Çarpışma`);

        let btnHtml = '';
        if (isEquipped) {
          btnHtml = `<button class="gear-equip-btn equipped-btn" disabled>✓ YANINDA</button>`;
        } else if (isOwned) {
          btnHtml = `<button class="gear-equip-btn equip-ready" data-pet-id="${pet.id}">ÇAĞIR</button>`;
        } else {
          const canAfford = this.state.soulGems >= pet.unlockCostGems;
          btnHtml = `<button class="gear-equip-btn ${canAfford ? 'equip-ready' : 'locked-btn'}" data-unlock-pet="${pet.id}" data-cost="${pet.unlockCostGems}" ${canAfford ? '' : 'disabled'}>${canAfford ? `🔓 ${pet.unlockCostGems}💎 AÇ` : `🔒 ${pet.unlockCostGems}💎 Gerekli`}</button>`;
        }

        return `
          <div class="${cardCls}">
            <div class="gear-icon-frame">
              <img src="${pet.spriteSrc}" alt="${pet.name}" class="inventory-pet-sprite" />
            </div>
            <div class="gear-info-col">
              <div class="gear-title-row">
                <strong>${pet.name}</strong>
                <span class="gear-rarity-pill ${pet.rarity}">${pet.rarityLabel}</span>
              </div>
              <div class="gear-stats-line">${statPills.join(' • ')}</div>
              <div class="gear-source-line">✨ ${pet.passiveDesc}</div>
            </div>
            ${btnHtml}
          </div>
        `;
      }).join('');

      listEl.querySelectorAll('[data-pet-id]').forEach((btn) => {
        btn.addEventListener('click', () => {
          this.equipPetCompanion(btn.getAttribute('data-pet-id'));
        });
      });

      listEl.querySelectorAll('[data-unlock-pet]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const pid = btn.getAttribute('data-unlock-pet');
          const cost = parseInt(btn.getAttribute('data-cost') || '2', 10);
          if (this.state.soulGems < cost) return;
          this.state.soulGems -= cost;
          if (!Array.isArray(this.state.ownedPets)) this.state.ownedPets = ['pet_dragon'];
          if (!this.state.ownedPets.includes(pid)) this.state.ownedPets.push(pid);
          window.sfx.playLevelUp();
          this.equipPetCompanion(pid);
        });
      });
      return;
    }

    // Render Gear List for Active Slot with Blacksmith (+1..+5 Basma) button!
    const slotItems = HERO_GEAR_CATALOG.filter((g) => g.slot === activeSlot);
    listEl.innerHTML = slotItems.map((item) => {
      const isOwned = owned.includes(item.id);
      const isEquipped = this.state.equippedGear?.[activeSlot] === item.id;
      const upgLv = this.getGearUpgradeLevel(item.id);

      let cardCls = 'gear-item-card';
      if (isEquipped) cardCls += ' equipped';
      else if (!isOwned) cardCls += ' locked';

      const statPills = [];
      const hpVal = (item.stats?.hp || 0) + (activeSlot === 'armor' || activeSlot === 'helm' ? upgLv * 2 : 0);
      const atkVal = (item.stats?.atk || 0) + (activeSlot === 'weapon' ? upgLv * 1 : 0);
      const shVal = (item.stats?.shield || 0) + (activeSlot === 'armor' ? upgLv * 1 : 0);
      const clVal = (item.stats?.clash || 0) + (upgLv >= 3 ? 1 : 0);
      const rnVal = (item.stats?.rune || 0) + (activeSlot === 'cape' ? upgLv * 1 : 0);

      if (hpVal) statPills.push(`❤️ +${hpVal} Can`);
      if (atkVal) statPills.push(`⚔️ +${atkVal} Hasar`);
      if (shVal) statPills.push(`🛡️ +${shVal} Kalkan`);
      if (clVal) statPills.push(`🎲 +${clVal} Çarpışma`);
      if (rnVal) statPills.push(`⚡ +${rnVal} Rün`);
      if (statPills.length === 0) statPills.push('Demircide +Basarak Güçlendirilebilir');

      let btnHtml = '';
      if (isEquipped) {
        btnHtml = `<button class="gear-equip-btn equipped-btn" disabled>✓ KUŞANILDI</button>`;
      } else if (isOwned) {
        btnHtml = `<button class="gear-equip-btn equip-ready" data-gid="${item.id}">KUŞAN</button>`;
      } else {
        const unlockCost = item.rarity === 'mythic' ? 5 : (item.rarity === 'legendary' ? 4 : 3);
        const canBuyWithGems = this.state.soulGems >= unlockCost;
        btnHtml = `<button class="gear-equip-btn ${canBuyWithGems ? 'equip-ready' : 'locked-btn'}" data-unlock-gid="${item.id}" data-cost="${unlockCost}" ${canBuyWithGems ? '' : 'disabled'}>${canBuyWithGems ? `🔓 ${unlockCost}💎 AÇ` : `🔒 Boss / ${unlockCost}💎`}</button>`;
      }

      // Blacksmith +1..+5 Forge Button for owned items
      let forgeBtnHtml = '';
      if (isOwned) {
        if (upgLv >= 5) {
          forgeBtnHtml = `<button class="gear-forge-btn" disabled>🔥 MAKS +5</button>`;
        } else {
          const forgeCostGold = (upgLv + 1) * 15;
          const canForge = this.state.gold >= forgeCostGold;
          forgeBtnHtml = `<button class="gear-forge-btn" data-forge-gid="${item.id}" ${canForge ? '' : 'disabled'}>⚒️ +${upgLv + 1} Bas (${forgeCostGold}💰)</button>`;
        }
      }

      return `
        <div class="${cardCls}">
          <div class="gear-icon-frame">${item.icon}</div>
          <div class="gear-info-col">
            <div class="gear-title-row">
              <strong>${item.name}${upgLv > 0 ? `<span class="gear-plus-badge">+${upgLv}</span>` : ''}</strong>
              <span class="gear-rarity-pill ${item.rarity}">${item.rarityLabel}</span>
            </div>
            <div class="gear-stats-line">${statPills.join(' • ')}</div>
            <div class="gear-source-line">📍 ${item.source} — ${item.desc}</div>
          </div>
          <div class="gear-action-col">
            ${btnHtml}
            ${forgeBtnHtml}
          </div>
        </div>
      `;
    }).join('');

    listEl.querySelectorAll('[data-gid]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.equipGearItem(btn.getAttribute('data-gid'));
      });
    });

    listEl.querySelectorAll('[data-forge-gid]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.forgeUpgradeGearItem(btn.getAttribute('data-forge-gid'));
      });
    });

    listEl.querySelectorAll('[data-unlock-gid]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const gid = btn.getAttribute('data-unlock-gid');
        const cost = parseInt(btn.getAttribute('data-cost') || '3', 10);
        if (this.state.soulGems < cost) return;
        this.state.soulGems -= cost;
        if (!this.state.ownedGear.includes(gid)) {
          this.state.ownedGear.push(gid);
        }
        window.sfx.playLevelUp();
        this.equipGearItem(gid);
      });
    });
  }

  renderCollectionTab(listEl) {
    const ownedGear = this.state.ownedGear || ['helm_unhelmed', 'helm_iron', 'armor_steel', 'weapon_iron', 'cape_traveler'];
    const ownedPets = this.state.ownedPets || ['pet_dragon'];
    const totalDiscovered = ownedGear.length + ownedPets.length;
    const totalCards = HERO_GEAR_CATALOG.length + PET_COMPANIONS_CATALOG.length;
    const pct = Math.round((totalDiscovered / totalCards) * 100);

    const categories = [
      {
        id: 'pets',
        title: '🐉 SAVAŞ YOLDAŞLARI (PET KARTLARI)',
        badge: `${ownedPets.length} / ${PET_COMPANIONS_CATALOG.length}`,
        items: PET_COMPANIONS_CATALOG.map((p) => ({
          id: p.id,
          name: p.name,
          rarity: p.rarity,
          rarityLabel: p.rarityLabel,
          icon: p.icon,
          spriteSrc: p.spriteSrc,
          isOwned: ownedPets.includes(p.id),
          isEquipped: (this.state.equippedPet || 'pet_dragon') === p.id,
          desc: p.passiveDesc,
          source: p.unlockCostGems === 0 ? 'Başlangıç Yoldaşı' : `${p.unlockCostGems}💎 Ruh Taşı veya Sandık`,
          stats: p.stats,
          combatEffect: p.combatEffect,
          type: 'pet'
        }))
      },
      {
        id: 'helms',
        title: '🪖 MİĞFER & ŞÖVALYE YÜZ KARTLARI',
        badge: `${HERO_GEAR_CATALOG.filter((g) => g.slot === 'helm' && ownedGear.includes(g.id)).length} / ${HERO_GEAR_CATALOG.filter((g) => g.slot === 'helm').length}`,
        items: HERO_GEAR_CATALOG.filter((g) => g.slot === 'helm').map((g) => ({
          ...g,
          isOwned: ownedGear.includes(g.id),
          isEquipped: this.state.equippedGear?.helm === g.id,
          upgLv: this.getGearUpgradeLevel(g.id),
          spriteSrc: g.portraitSrc,
          type: 'gear'
        }))
      },
      {
        id: 'armors',
        title: '🛡️ ZIRH & GÖĞÜSLÜK KARTLARI',
        badge: `${HERO_GEAR_CATALOG.filter((g) => g.slot === 'armor' && ownedGear.includes(g.id)).length} / ${HERO_GEAR_CATALOG.filter((g) => g.slot === 'armor').length}`,
        items: HERO_GEAR_CATALOG.filter((g) => g.slot === 'armor').map((g) => ({
          ...g,
          isOwned: ownedGear.includes(g.id),
          isEquipped: this.state.equippedGear?.armor === g.id,
          upgLv: this.getGearUpgradeLevel(g.id),
          type: 'gear'
        }))
      },
      {
        id: 'weapons',
        title: '🗡️ SİLAH & KILIÇ KARTLARI',
        badge: `${HERO_GEAR_CATALOG.filter((g) => g.slot === 'weapon' && ownedGear.includes(g.id)).length} / ${HERO_GEAR_CATALOG.filter((g) => g.slot === 'weapon').length}`,
        items: HERO_GEAR_CATALOG.filter((g) => g.slot === 'weapon').map((g) => ({
          ...g,
          isOwned: ownedGear.includes(g.id),
          isEquipped: this.state.equippedGear?.weapon === g.id,
          upgLv: this.getGearUpgradeLevel(g.id),
          type: 'gear'
        }))
      },
      {
        id: 'capes',
        title: '✨ PELERİN & RÜN AURA KARTLARI',
        badge: `${HERO_GEAR_CATALOG.filter((g) => g.slot === 'cape' && ownedGear.includes(g.id)).length} / ${HERO_GEAR_CATALOG.filter((g) => g.slot === 'cape').length}`,
        items: HERO_GEAR_CATALOG.filter((g) => g.slot === 'cape').map((g) => ({
          ...g,
          isOwned: ownedGear.includes(g.id),
          isEquipped: this.state.equippedGear?.cape === g.id,
          upgLv: this.getGearUpgradeLevel(g.id),
          type: 'gear'
        }))
      }
    ];

    listEl.innerHTML = `
      <div class="collection-album-wrap">
        <div class="collection-stats-banner">
          <div class="collection-stats-row">
            <span>🃏 TOPLANAN KARTLAR: ${totalDiscovered} / ${totalCards}</span>
            <span>%${pct} TAMAMLANDI</span>
          </div>
          <div class="collection-progress-bar-bg">
            <div class="collection-progress-bar-fill" style="width: ${pct}%;"></div>
          </div>
          <div style="font-size:10px; color:#cbd5e1; display:flex; justify-content:space-between; margin-top:2px;">
            <span>Sandıklardan & Bosslardan düşür</span>
            <span>⚪Sıradan 🔵Nadir 🟣Epik 🟡Efsanevi</span>
          </div>
        </div>

        ${categories.map((cat) => `
          <div class="collection-category-section">
            <div class="collection-category-header">
              <span>${cat.title}</span>
              <span class="collection-category-badge">${cat.badge}</span>
            </div>
            <div class="collection-cards-grid">
              ${cat.items.map((item) => {
                let cardClass = `clash-collection-card rarity-${item.rarity || 'common'}`;
                if (item.isEquipped) cardClass += ' is-equipped';
                if (!item.isOwned) cardClass += ' is-locked';

                const levelBadge = item.isOwned && item.upgLv !== undefined
                  ? `<div class="card-level-badge">+${item.upgLv}</div>`
                  : (item.isOwned && item.type === 'pet' ? `<div class="card-level-badge">Lv.1</div>` : '');

                const equippedTag = item.isEquipped
                  ? `<div class="card-equipped-tag">✓ AKTİF</div>`
                  : '';

                let statText = '';
                if (item.type === 'pet') {
                  statText = item.isOwned ? 'Yoldaş Hazır' : `${item.source || 'Kilitli'}`;
                } else if (item.stats) {
                  const parts = [];
                  if (item.stats.atk) parts.push(`+${item.stats.atk}⚔️`);
                  if (item.stats.hp) parts.push(`+${item.stats.hp}❤️`);
                  if (item.stats.shield) parts.push(`+${item.stats.shield}🛡️`);
                  if (item.stats.clash) parts.push(`+${item.stats.clash}🎲`);
                  statText = parts.join(' ') || '+0 Güç';
                }

                return `
                  <div class="${cardClass}" data-coll-type="${item.type}" data-coll-id="${item.id}">
                    ${levelBadge}
                    ${equippedTag}
                    <div class="card-sprite-box">
                      ${item.spriteSrc ? `<img src="${item.spriteSrc}" alt="${item.name}" />` : `<span class="card-emoji-big">${item.icon}</span>`}
                    </div>
                    <div class="card-name-label">${item.isOwned ? item.name : '??? (Kilitli)'}</div>
                    <div class="card-stats-pill">${item.isOwned ? statText : (item.source || 'Boss Ganimeti')}</div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    listEl.querySelectorAll('[data-coll-id]').forEach((cardEl) => {
      cardEl.addEventListener('click', () => {
        const type = cardEl.getAttribute('data-coll-type');
        const id = cardEl.getAttribute('data-coll-id');
        this.inspectCollectionCard(type, id);
      });
    });
  }

  inspectCollectionCard(type, id) {
    let item = null;
    let isOwned = false;
    let isEquipped = false;
    let upgLv = 0;

    if (type === 'pet') {
      item = PET_COMPANIONS_CATALOG.find((p) => p.id === id);
      const ownedPets = this.state.ownedPets || ['pet_dragon'];
      isOwned = ownedPets.includes(id);
      isEquipped = (this.state.equippedPet || 'pet_dragon') === id;
    } else {
      item = HERO_GEAR_CATALOG.find((g) => g.id === id);
      const ownedGear = this.state.ownedGear || ['helm_unhelmed', 'helm_iron', 'armor_steel', 'weapon_iron', 'cape_traveler'];
      isOwned = ownedGear.includes(id);
      isEquipped = this.state.equippedGear?.[item?.slot] === id;
      upgLv = item ? this.getGearUpgradeLevel(item.id) : 0;
    }

    if (!item) return;

    window.sfx.playMenuClick();

    const overlay = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    const sub = document.getElementById('modal-subtitle');
    const content = document.getElementById('modal-content');
    const closeBtn = document.getElementById('modal-close-btn');

    title.textContent = `🃏 ${item.name} ${upgLv > 0 ? `(+${upgLv})` : ''}`;
    sub.textContent = `${item.rarityLabel || 'Kart'} • ${isEquipped ? '✓ Şu An Kuşanıldı' : (isOwned ? 'Envanterde' : '🔒 Kilitli')}`;

    const statRows = [];
    if (item.stats) {
      if (item.stats.hp) statRows.push(`❤️ Can: +${item.stats.hp + (type === 'gear' ? upgLv * 2 : 0)}`);
      if (item.stats.atk) statRows.push(`⚔️ Saldırı: +${item.stats.atk + (type === 'gear' ? upgLv * 1 : 0)}`);
      if (item.stats.shield) statRows.push(`🛡️ Kalkan: +${item.stats.shield + (type === 'gear' ? upgLv * 1 : 0)}`);
      if (item.stats.clash) statRows.push(`🎲 Çarpışma Zarı: +${item.stats.clash}`);
      if (item.stats.rune) statRows.push(`✨ Rün Gücü: +${item.stats.rune}`);
    }

    const spriteDisplay = item.spriteSrc || item.portraitSrc
      ? `<img src="${item.spriteSrc || item.portraitSrc}" style="width:72px;height:72px;object-fit:contain;image-rendering:pixelated;filter:drop-shadow(0 6px 12px rgba(0,0,0,0.8));" />`
      : `<span style="font-size:52px;">${item.icon}</span>`;

    let actionButtons = '';
    if (type === 'pet') {
      if (isEquipped) {
        actionButtons = `<button class="modal-btn primary" disabled style="background:#15803d; width:100%;">✓ YANINDA AKTİF</button>`;
      } else if (isOwned) {
        actionButtons = `<button id="btn-inspect-equip-pet" class="modal-btn primary" style="width:100%;">🐉 YANINA ÇAĞIR</button>`;
      } else {
        const canAfford = this.state.soulGems >= (item.unlockCostGems || 2);
        actionButtons = `<button id="btn-inspect-unlock-pet" class="modal-btn primary" style="width:100%;" ${canAfford ? '' : 'disabled'}>${canAfford ? `🔓 ${item.unlockCostGems}💎 RUH TAŞI İLE AÇ` : `🔒 ${item.unlockCostGems}💎 Gerekli`}</button>`;
      }
    } else {
      if (isOwned) {
        const forgeCost = (upgLv + 1) * 15;
        const canForge = upgLv < 5 && this.state.gold >= forgeCost;
        actionButtons = `
          <div style="display:flex; gap:8px; width:100%;">
            ${isEquipped
              ? `<button class="modal-btn primary" disabled style="background:#15803d; flex:1;">✓ KUŞANILDI</button>`
              : `<button id="btn-inspect-equip-gear" class="modal-btn primary" style="flex:1;">🛡️ KUŞAN</button>`}
            ${upgLv < 5
              ? `<button id="btn-inspect-forge-gear" class="modal-btn primary" style="background:linear-gradient(135deg, #d97706 0%, #b45309 100%); flex:1;" ${canForge ? '' : 'disabled'}>⚒️ +${upgLv + 1} Bas (${forgeCost}💰)</button>`
              : `<button class="modal-btn primary" disabled style="background:#334155; flex:1;">🔥 MAKS +5</button>`}
          </div>
        `;
      } else {
        actionButtons = `<button class="modal-btn primary" disabled style="background:#334155; width:100%;">🔒 Boss veya Sandıklardan Düşür</button>`;
      }
    }

    content.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; gap:10px; text-align:center;">
        <div style="width:96px; height:96px; border-radius:14px; background:rgba(15,23,42,0.85); border:2px solid #eab308; display:flex; align-items:center; justify-content:center; box-shadow:0 0 18px rgba(234,179,8,0.35);">
          ${spriteDisplay}
        </div>
        <div style="font-size:12px; font-weight:800; color:#38bdf8;">${statRows.join(' • ') || 'Özel Efekt'}</div>
        <div style="font-size:11px; color:#cbd5e1; max-width:260px; line-height:1.4;">${item.desc || item.passiveDesc || 'Kadim eşya.'}</div>
        <div style="font-size:10px; color:#94a3b8; font-weight:700;">Kaynak: ${item.source || 'Zindan Ganimeti'}</div>
        <div style="width:100%; margin-top:6px;">
          ${actionButtons}
        </div>
      </div>
    `;

    closeBtn.classList.remove('hidden');
    closeBtn.textContent = 'Kapat';
    closeBtn.onclick = () => overlay.classList.add('hidden');

    const equipPetBtn = document.getElementById('btn-inspect-equip-pet');
    if (equipPetBtn) {
      equipPetBtn.onclick = () => {
        this.equipPetCompanion(item.id);
        overlay.classList.add('hidden');
        this.renderHeroInventory();
      };
    }

    const unlockPetBtn = document.getElementById('btn-inspect-unlock-pet');
    if (unlockPetBtn) {
      unlockPetBtn.onclick = () => {
        const cost = item.unlockCostGems || 2;
        if (this.state.soulGems >= cost) {
          this.state.soulGems -= cost;
          if (!Array.isArray(this.state.ownedPets)) this.state.ownedPets = ['pet_dragon'];
          if (!this.state.ownedPets.includes(item.id)) this.state.ownedPets.push(item.id);
          window.sfx.playLevelUp();
          this.equipPetCompanion(item.id);
          overlay.classList.add('hidden');
          this.renderHeroInventory();
        }
      };
    }

    const equipGearBtn = document.getElementById('btn-inspect-equip-gear');
    if (equipGearBtn) {
      equipGearBtn.onclick = () => {
        this.equipGearItem(item.id);
        overlay.classList.add('hidden');
        this.renderHeroInventory();
      };
    }

    const forgeGearBtn = document.getElementById('btn-inspect-forge-gear');
    if (forgeGearBtn) {
      forgeGearBtn.onclick = () => {
        this.forgeUpgradeGearItem(item.id);
        overlay.classList.add('hidden');
        this.renderHeroInventory();
      };
    }

    overlay.classList.remove('hidden');
  }

  forgeUpgradeGearItem(gearId) {
    const item = HERO_GEAR_CATALOG.find((g) => g.id === gearId);
    if (!item) return;
    if (!this.state.gearUpgrades) this.state.gearUpgrades = {};
    const curLv = this.state.gearUpgrades[gearId] || 0;
    if (curLv >= 5) return;

    const cost = (curLv + 1) * 15;
    if (this.state.gold < cost) return;

    this.state.gold -= cost;
    this.state.gearUpgrades[gearId] = curLv + 1;

    // If item is currently equipped, apply immediate stat boost!
    const isEq = this.state.equippedGear?.[item.slot] === gearId;
    if (isEq) {
      const p = this.state.player;
      if (item.slot === 'weapon') p.atkBonus += 1;
      if (item.slot === 'armor' || item.slot === 'helm') {
        p.maxHp += 2;
        p.hp = Math.min(p.maxHp, p.hp + 2);
      }
      if (item.slot === 'armor') p.shield = Math.min(50, p.shield + 1);
      if (item.slot === 'cape') p.runeBonus += 1;
      if (curLv + 1 === 3) p.clashBonus += 1;
    }

    window.sfx.playAnvil();
    this.vibrate([25, 40, 25]);
    this.saveProgress();
    this.renderHeroInventory();
    this.updateAllUI();
  }

  equipPetCompanion(petId) {
    const newPet = PET_COMPANIONS_CATALOG.find((p) => p.id === petId);
    if (!newPet) return;
    const oldPet = this.getEquippedPet();
    const oldS = (oldPet && oldPet.stats) ? oldPet.stats : { atk: 0, hp: 0, shield: 0, clash: 0 };
    const newS = newPet.stats || { atk: 0, hp: 0, shield: 0, clash: 0 };

    this.state.equippedPet = newPet.id;
    const p = this.state.player;
    p.atkBonus = Math.max(0, p.atkBonus + (newS.atk || 0) - (oldS.atk || 0));
    p.maxHp = Math.max(10, p.maxHp + (newS.hp || 0) - (oldS.hp || 0));
    p.hp = Math.min(p.maxHp, p.hp + Math.max(0, (newS.hp || 0) - (oldS.hp || 0)));
    p.shield = Math.max(0, p.shield + (newS.shield || 0) - (oldS.shield || 0));
    p.clashBonus = Math.max(0, p.clashBonus + (newS.clash || 0) - (oldS.clash || 0));

    window.sfx.playMagicChime();
    this.saveProgress();
    this.renderHeroInventory();
    this.updateAllUI();
  }

  equipGearItem(gearId) {
    const newItem = HERO_GEAR_CATALOG.find((g) => g.id === gearId);
    if (!newItem) return;

    const slot = newItem.slot;
    const oldItem = this.getEquippedItem(slot);
    const oldStats = (oldItem && oldItem.stats) ? oldItem.stats : { hp: 0, atk: 0, shield: 0, clash: 0, rune: 0 };
    const newStats = newItem.stats || { hp: 0, atk: 0, shield: 0, clash: 0, rune: 0 };

    this.state.equippedGear[slot] = newItem.id;

    // Apply delta stats directly to player
    const p = this.state.player;
    const hpDiff = (newStats.hp || 0) - (oldStats.hp || 0);
    const atkDiff = (newStats.atk || 0) - (oldStats.atk || 0);
    const shieldDiff = (newStats.shield || 0) - (oldStats.shield || 0);
    const clashDiff = (newStats.clash || 0) - (oldStats.clash || 0);
    const runeDiff = (newStats.rune || 0) - (oldStats.rune || 0);

    p.maxHp = Math.max(10, p.maxHp + hpDiff);
    if (hpDiff > 0) p.hp = Math.min(p.maxHp, p.hp + hpDiff);
    else p.hp = Math.min(p.maxHp, p.hp);

    p.atkBonus = Math.max(0, p.atkBonus + atkDiff);
    p.shield = Math.max(0, p.shield + shieldDiff);
    p.clashBonus = Math.max(0, p.clashBonus + clashDiff);
    p.runeBonus = Math.max(0, p.runeBonus + runeDiff);

    window.sfx.playAnvil();
    this.saveProgress();
    this.renderHeroInventory();
    this.updateAllUI();
  }

  // =========================================================
  // HOW TO PLAY GUIDE & INTERACTIVE BATTLE COACH
  // =========================================================
  showHowToPlay(fromView = 'menu') {
    this.viewBeforeGuide = fromView;
    document.getElementById('scene-main-menu').classList.add('hidden');
    const guideScene = document.getElementById('scene-how-to-play');
    if (guideScene) guideScene.classList.remove('hidden');
    const chk = document.getElementById('chk-coach-mode');
    if (chk) chk.checked = Boolean(this.state.coachMode);
    window.sfx.playMenuClick();
  }

  hideHowToPlay() {
    const guideScene = document.getElementById('scene-how-to-play');
    if (guideScene) guideScene.classList.add('hidden');
    window.sfx.playMenuClick();
    if (this.viewBeforeGuide === 'menu') {
      this.showMainMenu();
    }
  }

  updateCoachBanner() {
    const banner = document.getElementById('battle-coach-banner');
    if (!banner) return;

    if (!this.state.coachMode || this.state.currentScene !== 'battle') {
      banner.classList.add('hidden');
      return;
    }

    banner.classList.remove('hidden');
    const titleEl = document.getElementById('coach-step-title');
    const descEl = document.getElementById('coach-step-desc');
    const step = (this.state.coachStep || 0) % 4;

    const steps = [
      {
        title: '🧙‍♂️ TAKTİK REHBERİ • ADIM 1/4 (ZAR SÜRÜKLE)',
        desc: 'Sağ alttaki <b>Kemik Zarları</b> parmağınla veya fareyle <b>Saldırı</b>, <b>Şifa</b> veya <b>Rün</b> kartının üzerine sürükle!'
      },
      {
        title: '⚔️ TAKTİK REHBERİ • ADIM 2/4 (ÜST ÇARPIŞMA)',
        desc: 'Zarı bıraktığında üstte <b>Çarpışma (Clash)</b> zarları atılır! Toplamın düşmandan yüksekse <b>ZAFER</b> kazanır ve ekstra hasar vurursun!'
      },
      {
        title: '🔮 TAKTİK REHBERİ • ADIM 3/4 (TILSIM & RÜN)',
        desc: 'Sol alttaki <b>Tılsım (Bileme Taşı)</b> kutusuna da zar sürükleyebilir veya <b>Rün</b> kartıyla düşmanın çarpışma gücünü kırabilirsin!'
      },
      {
        title: '🎯 TAKTİK REHBERİ • ADIM 4/4 (ÇİFT DÜŞMAN & HARİTA)',
        desc: '2 düşmanlı odalarda üstteki can kutularına dokunarak <b>🎯 Hedef</b> seçebilirsin. Üstteki <b>🗺️ Harita</b> butonundan yolunu belirle!'
      }
    ];

    if (titleEl) titleEl.textContent = steps[step].title;
    if (descEl) descEl.innerHTML = steps[step].desc;
  }

  advanceCoachStep() {
    if (!this.state.coachMode) return;
    this.state.coachStep = ((this.state.coachStep || 0) + 1) % 4;
    this.updateCoachBanner();
  }

  // =========================================================
  // KNIGHT QUESTS, ACHIEVEMENTS, HONOR TITLES & FORTUNE WHEEL
  // =========================================================
  getClaimableQuestsCount() {
    const claimed = this.state.claimedQuests || [];
    let count = 0;
    QUESTS_DATA.forEach((q) => {
      if (claimed.includes(q.id)) return;
      const prog = q.getProgress(this);
      if (prog.cur >= prog.max) count++;
    });
    return count;
  }

  checkNewAchievementsToast() {
    if (!Array.isArray(this.state.notifiedQuests)) {
      this.state.notifiedQuests = [...(this.state.claimedQuests || [])];
    }
    const claimed = this.state.claimedQuests || [];

    for (const q of QUESTS_DATA) {
      if (claimed.includes(q.id) || this.state.notifiedQuests.includes(q.id)) continue;
      const prog = q.getProgress(this);
      if (prog.cur >= prog.max) {
        this.state.notifiedQuests.push(q.id);
        this.showAchievementToast(q);
        break;
      }
    }
  }

  showAchievementToast(q) {
    const toastEl = document.getElementById('achievement-toast');
    if (!toastEl) return;
    const iconEl = document.getElementById('ach-toast-icon');
    const titleEl = document.getElementById('ach-toast-title');
    const rewardEl = document.getElementById('ach-toast-reward');

    if (iconEl) iconEl.textContent = q.icon;
    if (titleEl) titleEl.textContent = `${q.title} (${q.honorTitle || 'Başarım'})`;
    if (rewardEl) rewardEl.textContent = `+${q.rewardGold}💰 +${q.rewardGems}💎 • Ödülü almak için dokun!`;

    toastEl.classList.remove('hidden');
    window.sfx.playLevelUp();
    this.vibrate([30, 50, 30]);

    if (this.achToastTimer) clearTimeout(this.achToastTimer);
    this.achToastTimer = setTimeout(() => {
      toastEl.classList.add('hidden');
    }, 4500);
  }

  showQuests(fromView = 'menu') {
    this.viewBeforeQuests = fromView;
    this.currentQuestCat = this.currentQuestCat || 'all';
    document.getElementById('scene-main-menu').classList.add('hidden');
    const questsScene = document.getElementById('scene-quests');
    if (questsScene) questsScene.classList.remove('hidden');
    this.renderQuests();
    window.sfx.playMenuClick();
  }

  hideQuests() {
    const questsScene = document.getElementById('scene-quests');
    if (questsScene) questsScene.classList.add('hidden');
    window.sfx.playMenuClick();
    if (this.viewBeforeQuests === 'menu') {
      this.showMainMenu();
    } else {
      this.updateAllUI();
    }
  }

  renderQuests() {
    const listEl = document.getElementById('quests-list-scroll');
    if (!listEl) return;

    const claimed = this.state.claimedQuests || [];
    const compEl = document.getElementById('quests-completed-count');
    if (compEl) compEl.textContent = `${claimed.length} / ${QUESTS_DATA.length}`;

    const activeTitleEl = document.getElementById('quests-active-title');
    if (activeTitleEl) {
      activeTitleEl.textContent = this.state.equippedTitle || 'Gezgin Şövalye';
    }

    const walletEl = document.getElementById('quests-wallet-display');
    if (walletEl) walletEl.textContent = `💎 ${this.state.soulGems} • 💰 ${this.state.gold}`;

    // Claim All button visibility
    const claimableCount = this.getClaimableQuestsCount();
    const claimAllBtn = document.getElementById('btn-claim-all-quests');
    if (claimAllBtn) {
      claimAllBtn.classList.toggle('hidden', claimableCount === 0);
      if (claimableCount > 0) claimAllBtn.textContent = `Tümünü Al (${claimableCount})`;
    }

    // Daily Fortune Wheel Status
    const spinBtn = document.getElementById('btn-spin-fortune');
    const streakPill = document.getElementById('fortune-streak-pill');
    const statusDesc = document.getElementById('fortune-status-desc');
    const streak = this.state.fortuneStreak || 1;
    if (streakPill) streakPill.textContent = `🔥 ${streak}. Tur`;
    if (spinBtn) {
      const freeAvailable = !this.state.freeSpinUsed;
      if (freeAvailable) {
        spinBtn.textContent = '🎡 ÜCRETSİZ ÇEVİR!';
        spinBtn.disabled = false;
      } else {
        spinBtn.textContent = '🎡 ÇEVİR (15💰)';
        spinBtn.disabled = this.state.gold < 15;
        if (statusDesc && !this.lastFortuneMsg) {
          statusDesc.textContent = 'Ücretsiz hakkını kullandın! 15 Altın ile tekrar şansını deneyebilirsin.';
        }
      }
    }

    const activeCat = this.currentQuestCat || 'all';
    const filteredQuests = QUESTS_DATA.filter((q) => activeCat === 'all' || q.cat === activeCat);

    listEl.innerHTML = filteredQuests.map((q) => {
      const isClaimed = claimed.includes(q.id);
      const prog = q.getProgress(this);
      const isReady = !isClaimed && prog.cur >= prog.max;
      const pct = Math.max(0, Math.min(100, Math.round((prog.cur / prog.max) * 100)));
      const isEquippedTitle = isClaimed && q.honorTitle && this.state.equippedTitle === q.honorTitle;

      let cardCls = 'quest-item-card';
      if (isReady) cardCls += ' ready';
      else if (isClaimed) cardCls += ' claimed';

      let btnCls = 'quest-claim-btn locked';
      let btnText = `${prog.cur}/${prog.max}`;
      if (isClaimed) {
        if (isEquippedTitle) {
          btnCls = 'quest-claim-btn done';
          btnText = '👑 Aktif Unvan';
        } else {
          btnCls = 'quest-claim-btn claimable';
          btnText = '👑 Unvanı Tak';
        }
      } else if (isReady) {
        btnCls = 'quest-claim-btn claimable';
        btnText = 'ÖDÜLÜ AL!';
      }

      return `
        <div class="${cardCls}">
          <div class="quest-icon-box">${q.icon}</div>
          <div class="quest-main-info">
            <div class="quest-title-row">
              <strong>${q.title}</strong>
              <span class="quest-reward-pill">+${q.rewardGold}💰 +${q.rewardGems}💎</span>
            </div>
            <div class="quest-desc">${q.desc}</div>
            ${q.honorTitle ? `<span class="quest-honor-title-pill">🎖️ Unvan: ${q.honorTitle}</span>` : ''}
            <div class="quest-prog-bar">
              <div class="quest-prog-fill" style="width: ${pct}%;"></div>
              <span class="quest-prog-text">${prog.cur} / ${prog.max}</span>
            </div>
          </div>
          <button class="${btnCls}" data-qid="${q.id}" data-claimed="${isClaimed ? '1' : '0'}" ${(isReady || (isClaimed && !isEquippedTitle)) ? '' : 'disabled'}>${btnText}</button>
        </div>
      `;
    }).join('');

    listEl.querySelectorAll('.quest-claim-btn.claimable').forEach((btn) => {
      btn.addEventListener('click', () => {
        const qid = btn.getAttribute('data-qid');
        const alreadyClaimed = btn.getAttribute('data-claimed') === '1';
        if (alreadyClaimed) {
          const q = QUESTS_DATA.find((item) => item.id === qid);
          if (q && q.honorTitle) {
            this.state.equippedTitle = q.honorTitle;
            window.sfx.playMagicChime();
            this.saveProgress();
            this.renderQuests();
            this.updateAllUI();
          }
        } else {
          this.claimQuestReward(qid);
        }
      });
    });
  }

  claimQuestReward(questId) {
    const q = QUESTS_DATA.find((item) => item.id === questId);
    if (!q) return;
    if (!Array.isArray(this.state.claimedQuests)) this.state.claimedQuests = [];
    if (this.state.claimedQuests.includes(questId)) return;

    const prog = q.getProgress(this);
    if (prog.cur < prog.max) return;

    this.state.claimedQuests.push(questId);
    this.state.gold += q.rewardGold;
    this.state.soulGems += q.rewardGems;
    if (q.honorTitle) {
      this.state.equippedTitle = q.honorTitle;
    }

    window.sfx.playMagicChime();
    this.vibrate([25, 40, 25]);
    this.saveProgress();
    this.updateAllUI();
    this.renderQuests();
  }

  claimAllQuests() {
    if (!Array.isArray(this.state.claimedQuests)) this.state.claimedQuests = [];
    let anyClaimed = false;
    QUESTS_DATA.forEach((q) => {
      if (this.state.claimedQuests.includes(q.id)) return;
      const prog = q.getProgress(this);
      if (prog.cur >= prog.max) {
        this.state.claimedQuests.push(q.id);
        this.state.gold += q.rewardGold;
        this.state.soulGems += q.rewardGems;
        if (q.honorTitle) this.state.equippedTitle = q.honorTitle;
        anyClaimed = true;
      }
    });
    if (anyClaimed) {
      window.sfx.playLevelUp();
      this.vibrate([30, 50, 30]);
      this.saveProgress();
      this.updateAllUI();
      this.renderQuests();
    }
  }

  spinDailyFortune() {
    const isFree = !this.state.freeSpinUsed;
    if (!isFree && this.state.gold < 15) return;

    const wheelEl = document.getElementById('fortune-wheel-graphic');
    const statusDesc = document.getElementById('fortune-status-desc');
    const spinBtn = document.getElementById('btn-spin-fortune');
    if (spinBtn) spinBtn.disabled = true;

    if (!isFree) {
      this.state.gold -= 15;
    }
    this.state.freeSpinUsed = true;
    this.state.fortuneStreak = (this.state.fortuneStreak || 1) + 1;

    if (wheelEl) {
      wheelEl.classList.remove('spinning');
      void wheelEl.offsetWidth;
      wheelEl.classList.add('spinning');
    }
    window.sfx.playDiceRoll();

    setTimeout(() => {
      const prizes = [
        { label: '💰 +35 Altın Hazinesi!', apply: () => { this.state.gold += 35; } },
        { label: '💎 +2 Kadim Ruh Taşı!', apply: () => { this.state.soulGems += 2; } },
        { label: '⚔️ +1 Kalıcı Saldırı Gücü & +20 Altın!', apply: () => { this.state.player.atkBonus += 1; this.state.gold += 20; } },
        { label: '❤️ +6 Maksimum Can & Tam Şifa!', apply: () => { this.state.player.maxHp += 6; this.state.player.hp = this.state.player.maxHp; } },
        {
          label: '🎁 BÜYÜK ÖDÜL: Rastgele Boss Ekipmanı veya +3💎!',
          apply: () => {
            const gear = this.unlockRandomBossGearDrop();
            if (gear) {
              this.lastFortuneMsg = `🎁 ÇARKTAN EŞYA ÇIKTI: ${gear.icon} ${gear.name}!`;
            } else {
              this.state.soulGems += 3;
            }
          }
        }
      ];

      const picked = prizes[Math.floor(Math.random() * prizes.length)];
      this.lastFortuneMsg = `🎉 ÇARK ÖDÜLÜ: ${picked.label}`;
      picked.apply();

      if (statusDesc) {
        statusDesc.innerHTML = `<b style="color:#86efac;">${this.lastFortuneMsg}</b>`;
      }
      window.sfx.playLevelUp();
      this.vibrate([30, 50, 30]);
      this.saveProgress();
      this.updateAllUI();
      this.renderQuests();
    }, 650);
  }

  // =========================================================
  // ONLINE PVP ARENA, ENDLESS BLOOD TOWER & GLOBAL LEADERBOARDS
  // =========================================================
  showArena(fromView = 'menu') {
    this.viewBeforeArena = fromView;
    document.getElementById('scene-main-menu').classList.add('hidden');
    const arenaScene = document.getElementById('scene-arena');
    if (arenaScene) arenaScene.classList.remove('hidden');
    if (window.bgm) {
      window.bgm.setSceneTrack('arena');
      this.updateSoundtrackBanner();
    }
    this.renderArena();
    window.sfx.playMenuClick();
  }

  hideArena() {
    const arenaScene = document.getElementById('scene-arena');
    if (arenaScene) arenaScene.classList.add('hidden');
    window.sfx.playMenuClick();
    if (this.viewBeforeArena === 'menu') {
      this.showMainMenu();
    } else {
      if (window.bgm) {
        window.bgm.setSceneTrack('battle');
        this.updateSoundtrackBanner();
      }
      this.updateAllUI();
    }
  }

  getLeagueLabel(trophies) {
    if (trophies >= 600) return '👑 Efsanevi Şampiyon Ligi';
    if (trophies >= 400) return '💎 Elmas Şövalye Ligi';
    if (trophies >= 250) return '🥇 Altın Savaşçı Ligi';
    if (trophies >= 150) return '🥈 Gümüş Muhafız Ligi';
    return '🥉 Bronz Gezgin Ligi';
  }

  renderArena() {
    const trophies = this.state.trophies || 100;
    const bestTower = this.state.bestTowerFloor || 1;
    const curTower = this.state.towerFloor || 1;
    const nick = this.state.playerNick || 'Sir Elden';

    const nickEl = document.getElementById('arena-player-nick');
    if (nickEl) nickEl.textContent = nick;

    const leagueEl = document.getElementById('arena-league-label');
    if (leagueEl) leagueEl.textContent = `${this.getLeagueLabel(trophies)} • Seviye ${this.state.level}`;

    const trophyEl = document.getElementById('arena-trophy-count');
    if (trophyEl) trophyEl.textContent = `🏆 ${trophies}`;

    const bestTowerEl = document.getElementById('arena-best-tower');
    if (bestTowerEl) bestTowerEl.textContent = `🗼 Kat ${bestTower}`;

    const curFloorPill = document.getElementById('tower-current-floor-pill');
    if (curFloorPill) curFloorPill.textContent = `📍 Mevcut Kat: ${curTower}`;

    const bestFloorPill = document.getElementById('tower-best-floor-pill');
    if (bestFloorPill) bestFloorPill.textContent = `👑 Rekorun: Kat ${bestTower}`;

    this.updateLeagueChestButton();
    this.renderArenaChestSlots();
    this.renderPvpMatchmakingList();
    this.renderEndlessTowerMilestones();
    this.renderGuildRaidPanel();
    this.renderArenaLeaderboard();
    this.renderTrophyRoad();
  }

  renderArenaChestSlots() {
    const grids = [
      document.getElementById('arena-chest-slots-grid'),
      document.getElementById('menu-chest-slots-grid')
    ].filter(Boolean);

    if (grids.length === 0) return;
    const slots = this.state.chestSlots || [null, null, null, null];
    const isEn = this.state.lang === 'en';

    grids.forEach((grid) => {
      grid.innerHTML = slots.map((chest, idx) => {
        if (!chest) {
          return `
            <div class="arena-chest-slot-card" data-cslot="${idx}">
              <div class="chest-slot-icon" style="font-size:24px; opacity:0.35;">🔲</div>
              <div class="chest-slot-empty">${isEn ? 'Empty Slot' : 'Boş Yuva'}</div>
              <div class="chest-slot-timer">${isEn ? 'Win Battle' : 'Savaş Kazan'}</div>
            </div>
          `;
        }

        let statusCls = 'has-chest';
        let timerText = isEn ? 'Tap: Unlock' : 'Dokun: Başlat';
        if (chest.ready) {
          statusCls = 'ready-to-open';
          timerText = isEn ? '🎁 READY!' : '🎁 AÇILABİLİR!';
        } else if (chest.unlockStart) {
          statusCls = 'unlocking';
          const elapsed = Date.now() - chest.unlockStart;
          const remSec = Math.max(0, Math.ceil((chest.unlockTimeMs - elapsed) / 1000));
          if (remSec === 0) {
            chest.ready = true;
            statusCls = 'ready-to-open';
            timerText = isEn ? '🎁 READY!' : '🎁 AÇILABİLİR!';
          } else {
            timerText = `⏳ ${remSec}s (${isEn ? 'Opening' : 'Açılıyor'})`;
          }
        }

        const chestTier = chest.tier || 'silver';
        const spriteSrc = chest.spriteSrc || `assets/chest_${chestTier}.png`;
        const chestName = isEn ? (chest.nameEn || chest.name) : chest.name;

        return `
          <div class="arena-chest-slot-card ${statusCls}" data-cslot="${idx}">
            <div class="chest-slot-icon">
              <img src="${spriteSrc}" alt="${chestName}" class="arena-chest-sprite-thumb" />
            </div>
            <div class="chest-slot-name">${chestName}</div>
            <div class="chest-slot-timer">${timerText}</div>
          </div>
        `;
      }).join('');

      grid.querySelectorAll('[data-cslot]').forEach((el) => {
        el.addEventListener('click', () => {
          const idx = parseInt(el.getAttribute('data-cslot'), 10);
          this.handleChestSlotClick(idx);
        });
      });
    });
  }

  handleChestSlotClick(idx) {
    const chest = this.state.chestSlots?.[idx];
    if (!chest) {
      this.showAchievementToast({
        icon: '⚔️',
        name: 'Yuva Boş',
        rewardText: 'PvP Düelloları veya Kule kazanarak sandık düşür!'
      });
      return;
    }

    if (chest.ready) {
      this.playClashChestOpeningSequence(chest, idx);
      return;
    }

    if (!chest.unlockStart) {
      chest.unlockStart = Date.now();
      window.sfx.playMagicChime();
      this.showAchievementToast({
        icon: chest.icon,
        name: `${chest.name} Açılıyor...`,
        rewardText: `Geri sayım başladı! Tamamlandığında açabilirsin.`
      });
      this.saveProgress();
      this.renderArenaChestSlots();
    } else {
      // Instant open option with gems
      const gemCost = 1;
      if (confirm(`1💎 Ruh Taşı harcayarak ${chest.name} bekleme süresini anında geçmek istiyor musun?`)) {
        if (this.state.soulGems >= gemCost) {
          this.state.soulGems -= gemCost;
          chest.ready = true;
          this.playClashChestOpeningSequence(chest, idx);
        } else {
          alert('Yetersiz Ruh Taşı! Zindan odalarında veya kulede taş topla.');
        }
      }
    }
  }

  playClashChestOpeningSequence(chest, slotIdx) {
    if (!chest) return;

    const stage = document.getElementById('chest-reveal-stage');
    if (!stage) {
      this.openChestReward(slotIdx);
      return;
    }

    const titleEl = document.getElementById('chest-reveal-title');
    const counterEl = document.getElementById('chest-reveal-counter');
    const chestImg = document.getElementById('chest-reveal-img');
    const actorFrame = document.getElementById('chest-actor-frame');
    const cardStage = document.getElementById('chest-card-stage');
    const summaryTray = document.getElementById('chest-summary-tray');
    const summaryCards = document.getElementById('chest-summary-cards');
    const claimBtn = document.getElementById('btn-claim-chest-loot');

    // 1. Determine Cards to Reveal
    const goldEarned = chest.gold || (chest.tier === 'magic' ? 300 : chest.tier === 'gold' ? 150 : chest.tier === 'silver' ? 75 : 40);
    const gemsEarned = chest.gems || (chest.tier === 'magic' ? 8 : chest.tier === 'gold' ? 4 : chest.tier === 'silver' ? 2 : 1);
    const droppedGear = this.unlockRandomBossGearDrop();

    // Check for Pet Unlock or Pet Fragment (guaranteed in magic chest, 45% in gold, 20% in silver)
    let droppedPet = null;
    const ownedPets = this.state.ownedPets || ['pet_dragon'];
    const unownedPets = PET_COMPANIONS_CATALOG.filter((p) => !ownedPets.includes(p.id));
    const petRoll = Math.random();
    const petChance = chest.tier === 'magic' ? 0.95 : (chest.tier === 'gold' ? 0.45 : (chest.tier === 'silver' ? 0.2 : 0.05));
    if (unownedPets.length > 0 && petRoll < petChance) {
      droppedPet = unownedPets[Math.floor(Math.random() * unownedPets.length)];
    }

    const cards = [
      {
        type: 'gold',
        title: `+${goldEarned} Altın`,
        subtitle: 'Zindan Hazinesi Ganimeti',
        icon: '💰',
        badge: 'Altın',
        colorClass: 'card-gold',
        apply: () => { this.state.gold += goldEarned; }
      },
      {
        type: 'gems',
        title: `+${gemsEarned} Ruh Taşı`,
        subtitle: 'Kadim Rün Kristali',
        icon: '💎',
        badge: 'Ruh Taşı',
        colorClass: 'card-gems',
        apply: () => { this.state.soulGems += gemsEarned; }
      }
    ];

    if (droppedGear) {
      cards.push({
        type: 'gear',
        title: droppedGear.name,
        subtitle: droppedGear.desc || 'Yeni Ekipman Kartı',
        icon: droppedGear.icon,
        imageSrc: droppedGear.portraitSrc || null,
        badge: droppedGear.rarityLabel || 'Ekipman',
        colorClass: droppedGear.rarity === 'legendary' ? 'card-legendary' : (droppedGear.rarity === 'mythic' ? 'card-legendary' : 'card-epic'),
        apply: () => {
          if (!Array.isArray(this.state.ownedGear)) this.state.ownedGear = [];
          if (!this.state.ownedGear.includes(droppedGear.id)) {
            this.state.ownedGear.push(droppedGear.id);
          }
        }
      });
    }

    if (droppedPet) {
      cards.push({
        type: 'pet',
        title: droppedPet.name,
        subtitle: droppedPet.passiveDesc,
        icon: droppedPet.icon,
        imageSrc: droppedPet.spriteSrc,
        badge: droppedPet.rarityLabel || 'Savaş Yoldaşı (Pet)',
        colorClass: droppedPet.rarity === 'mythic' ? 'card-legendary' : (droppedPet.rarity === 'legendary' ? 'card-legendary' : 'card-epic'),
        apply: () => {
          if (!Array.isArray(this.state.ownedPets)) this.state.ownedPets = ['pet_dragon'];
          if (!this.state.ownedPets.includes(droppedPet.id)) {
            this.state.ownedPets.push(droppedPet.id);
          }
        }
      });
    }

    // 2. Setup Stage State
    let currentCardIdx = -1;
    const totalCards = cards.length;
    const revealedCards = [];

    const chestTier = chest.tier || 'silver';
    const chestSprite = chest.spriteSrc || `assets/chest_${chestTier}.png`;
    if (chestImg) chestImg.src = chestSprite;
    if (titleEl) titleEl.textContent = (chest.name || 'GÜMÜŞ SANDIK').toUpperCase();
    if (counterEl) counterEl.innerHTML = `🎁 Kalan Kart: <b>${totalCards}</b> • Açmak için Dokun!`;

    cardStage.innerHTML = '';
    summaryCards.innerHTML = '';
    summaryTray.classList.add('hidden');
    stage.classList.remove('hidden');

    window.sfx.playMagicChime();
    this.vibrate([40, 60]);

    // Handle each step/tap
    const nextStep = () => {
      currentCardIdx++;

      // Tactile wobble animation & haptics
      actorFrame.classList.add('chest-wobble');
      setTimeout(() => actorFrame.classList.remove('chest-wobble'), 380);
      this.vibrate([35, 45]);
      this.triggerShake(5, 160);

      if (currentCardIdx < totalCards) {
        const card = cards[currentCardIdx];
        revealedCards.push(card);

        if (card.type === 'gold') window.sfx.playCoin();
        else if (card.type === 'gems') window.sfx.playMagicChime();
        else if (card.type === 'pet' || card.type === 'gear') window.sfx.playLevelUp();
        else window.sfx.playChestOpen();

        const remaining = totalCards - currentCardIdx - 1;
        if (remaining > 0) {
          counterEl.innerHTML = `🎁 Kalan Kart: <b>${remaining}</b> • Sıradakini Açmak için Dokun!`;
        } else {
          counterEl.innerHTML = `🎉 <b>TÜM GANİMETLER BULUNDU!</b>`;
        }

        // Render Active 3D Flying Card
        cardStage.innerHTML = `
          <div class="clash-card-reveal ${card.colorClass}">
            <div class="clash-card-rarity-ribbon">${card.badge}</div>
            <div class="clash-card-visual-frame">
              ${card.imageSrc ? `<img src="${card.imageSrc}" class="clash-card-sprite" alt="${card.title}" />` : `<span class="clash-card-emoji">${card.icon}</span>`}
            </div>
            <div class="clash-card-name">${card.title}</div>
            <div class="clash-card-sub">${card.subtitle}</div>
          </div>
        `;

        if (remaining === 0) {
          setTimeout(() => {
            summaryTray.classList.remove('hidden');
            summaryCards.innerHTML = revealedCards.map((c) => `
              <div class="summary-mini-card">
                ${c.imageSrc ? `<img src="${c.imageSrc}" alt="${c.title}" />` : `<span style="font-size:22px;">${c.icon}</span>`}
                <span>${c.title}</span>
              </div>
            `).join('');
          }, 420);
        }
      } else {
        summaryTray.classList.remove('hidden');
      }
    };

    actorFrame.onclick = (e) => {
      e.stopPropagation();
      nextStep();
    };
    cardStage.onclick = (e) => {
      e.stopPropagation();
      nextStep();
    };

    claimBtn.onclick = (e) => {
      e.stopPropagation();
      cards.forEach((c) => c.apply && c.apply());

      if (slotIdx !== null && slotIdx !== undefined && Array.isArray(this.state.chestSlots)) {
        this.state.chestSlots[slotIdx] = null;
      }

      window.sfx.playClashVictory();
      this.vibrate([50, 70, 90]);
      stage.classList.add('hidden');

      this.saveProgress();
      this.renderArenaChestSlots();
      this.updateAllUI();
      if (document.getElementById('scene-hero-inventory') && !document.getElementById('scene-hero-inventory').classList.contains('hidden')) {
        this.renderHeroInventory();
      }

      this.showAchievementToast({
        icon: chest.icon || '🎁',
        name: `${chest.name || 'Sandık'} Ganimeti Eklendi!`,
        rewardText: `+${goldEarned}💰 +${gemsEarned}💎 ve eşyalar envanterine aktarıldı.`
      });
    };
  }

  openChestReward(idx) {
    const chest = this.state.chestSlots?.[idx];
    if (chest) {
      this.playClashChestOpeningSequence(chest, idx);
    }
  }

  awardBattleChestDrop() {
    if (!Array.isArray(this.state.chestSlots)) {
      this.state.chestSlots = [null, null, null, null];
    }
    const emptyIdx = this.state.chestSlots.findIndex((s) => s === null);
    if (emptyIdx === -1) {
      this.spawnFloatingText(235, 140, '📦 Sandık Yuvaları Dolu!', '#f87171', 14);
      return;
    }

    const chestPool = [
      { id: 'c_wood', name: 'Tahta Sandık', icon: '🪵', tier: 'wood', unlockTimeMs: 5000, unlockStart: 0, ready: false, gold: 35, gems: 1, spriteSrc: 'assets/chest_wood.png' },
      { id: 'c_silver', name: 'Gümüş Sandık', icon: '🥈', tier: 'silver', unlockTimeMs: 12000, unlockStart: 0, ready: false, gold: 75, gems: 2, spriteSrc: 'assets/chest_silver.png' },
      { id: 'c_gold', name: 'Altın Sandık', icon: '🥇', tier: 'gold', unlockTimeMs: 20000, unlockStart: 0, ready: false, gold: 150, gems: 4, spriteSrc: 'assets/chest_gold.png' },
      { id: 'c_magic', name: 'Büyülü Sandık', icon: '🔮', tier: 'magic', unlockTimeMs: 30000, unlockStart: 0, ready: false, gold: 300, gems: 8, spriteSrc: 'assets/chest_magic.png' }
    ];

    const roll = Math.random();
    const chosen = roll < 0.5 ? chestPool[0] : (roll < 0.8 ? chestPool[1] : (roll < 0.95 ? chestPool[2] : chestPool[3]));
    this.state.chestSlots[emptyIdx] = { ...chosen, unlockStart: Date.now() };

    this.spawnFloatingText(235, 130, `🎁 YENİ SANDIK: ${chosen.icon} ${chosen.name}!`, '#fbbf24', 16);
    this.saveProgress();
  }

  inspectPlayerProfile(playerData) {
    const overlay = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    const sub = document.getElementById('modal-subtitle');
    const content = document.getElementById('modal-content');
    const closeBtn = document.getElementById('modal-close-btn');

    title.textContent = `👤 ŞÖVALYE PROFİLİ`;
    sub.textContent = `${playerData.nick} • Online Savaşçı Kartı`;

    content.innerHTML = `
      <div class="inspect-profile-box">
        <div class="inspect-header-row">
          <img src="${playerData.portrait || 'assets/hero_front_helm_iron.png'}" alt="Avatar" class="inspect-avatar" />
          <div class="inspect-meta">
            <strong style="color:#fde047;font-size:14px;">${playerData.nick}</strong>
            <span style="color:#38bdf8;font-size:11px;">🎖️ ${playerData.title || 'Gezgin Şövalye'}</span>
            <span style="color:#a78bfa;font-size:10.5px;">🏆 ${playerData.trophies || 100} Kupa • 🗼 En Yüksek Kat ${playerData.bestTower || 1}</span>
          </div>
        </div>

        <div style="font-size:10px;font-weight:900;color:#94a3b8;margin-top:4px;">KUŞANILAN EKİPMANLAR & PET</div>
        <div class="inspect-gear-grid">
          <div class="inspect-gear-pill">
            <span>🪖</span>
            <b>Miğfer</b>
            <small style="color:#38bdf8;">+3 Zırh</small>
          </div>
          <div class="inspect-gear-pill">
            <span>🛡️</span>
            <b>Zırh</b>
            <small style="color:#4ade80;">+20 Can</small>
          </div>
          <div class="inspect-gear-pill">
            <span>🗡️</span>
            <b>Silah</b>
            <small style="color:#f87171;">+4 Güç</small>
          </div>
          <div class="inspect-gear-pill">
            <span>${playerData.petIcon || '🐉'}</span>
            <b>Yoldaş</b>
            <small style="color:#fbbf24;">Aktif</small>
          </div>
        </div>
      </div>
    `;

    closeBtn.classList.remove('hidden');
    closeBtn.textContent = 'Kapat';
    closeBtn.onclick = () => overlay.classList.add('hidden');
    overlay.classList.remove('hidden');
  }

  getLeagueTierInfo(trophies) {
    const tiers = [
      { tier: 1, req: 150, name: 'Gümüş Ligi Sandığı', gold: 100, gems: 3 },
      { tier: 2, req: 250, name: 'Altın Ligi Sandığı', gold: 200, gems: 5 },
      { tier: 3, req: 400, name: 'Elmas Ligi Sandığı', gold: 350, gems: 8 },
      { tier: 4, req: 600, name: 'Şampiyon Ligi Sandığı', gold: 600, gems: 12 }
    ];
    const claimed = this.state.claimedLeagueChestTier || 0;
    const nextTier = tiers.find((t) => t.tier > claimed) || null;
    const canClaim = nextTier ? trophies >= nextTier.req : false;
    return { nextTier, canClaim, claimed };
  }

  updateLeagueChestButton() {
    const btn = document.getElementById('btn-claim-league-chest');
    if (!btn) return;
    const trophies = this.state.trophies || 100;
    const { nextTier, canClaim } = this.getLeagueTierInfo(trophies);
    if (!nextTier) {
      btn.textContent = '👑 Tüm Lig Sandıkları Açıldı';
      btn.disabled = true;
      btn.style.opacity = '0.6';
    } else if (canClaim) {
      btn.textContent = `🎁 ${nextTier.name} AÇ! (+${nextTier.gold}💰 +${nextTier.gems}💎)`;
      btn.disabled = false;
      btn.style.opacity = '1';
    } else {
      btn.textContent = `🎁 Sonraki Sandık: ${nextTier.req}🏆 (${trophies}/${nextTier.req})`;
      btn.disabled = false;
      btn.style.opacity = '0.88';
    }
  }

  claimLeagueChest() {
    const trophies = this.state.trophies || 100;
    const { nextTier, canClaim } = this.getLeagueTierInfo(trophies);
    if (!nextTier) {
      this.showAchievementToast({
        icon: '👑',
        name: 'Tüm Lig Sandıkları Alındı!',
        rewardText: 'Şampiyon Ligi zirvesindesin!'
      });
      return;
    }
    if (!canClaim) {
      window.sfx.playMenuClick();
      this.showAchievementToast({
        icon: '🔒',
        name: `${nextTier.name} (${nextTier.req}🏆 Gerekli)`,
        rewardText: `Ödül: +${nextTier.gold}💰 Altın, +${nextTier.gems}💎 Ruh Taşı & Efsanevi Eşya!`
      });
      return;
    }

    this.state.claimedLeagueChestTier = nextTier.tier;
    this.state.gold += nextTier.gold;
    this.state.soulGems += nextTier.gems;
    const dropped = this.unlockRandomBossGearDrop();

    window.sfx.playLevelUp();
    this.vibrate([35, 50, 70]);
    this.showAchievementToast({
      icon: '🎁',
      name: `${nextTier.name} Açıldı!`,
      rewardText: `+${nextTier.gold}💰 +${nextTier.gems}💎 ${dropped ? `• ${dropped.icon} ${dropped.name}` : ''}`
    });

    this.saveProgress();
    this.renderArena();
    this.updateAllUI();
  }

  renderGuildRaidPanel() {
    const hpPill = document.getElementById('raid-boss-hp-pill');
    const dmgPill = document.getElementById('raid-your-dmg-pill');
    const listEl = document.getElementById('guild-raid-members-list');

    const bossHp = this.state.worldBossHp ?? 2500;
    const bossMax = this.state.worldBossMaxHp || 2500;
    const yourDmg = this.state.raidTotalDmg || 0;

    if (hpPill) {
      hpPill.textContent = `❤️ Boss Canı: ${bossHp} / ${bossMax}`;
    }
    if (dmgPill) {
      dmgPill.textContent = `⚔️ Senin Toplam Hasarın: ${yourDmg}`;
    }

    if (!listEl) return;

    const guildMembers = [
      {
        nick: `${this.state.playerNick || 'Sir Elden'} (SEN)`,
        role: '👑 Klan Şampiyonu',
        dmg: yourDmg,
        icon: '🦅',
        isPlayer: true
      },
      { nick: 'Kaelen_TR', role: '⚔️ Baş Muhafız', dmg: 640, icon: '🐉', isPlayer: false },
      { nick: 'Valkyrie_Eda', role: '⚡ Rün Üstadı', dmg: 515, icon: '🦉', isPlayer: false },
      { nick: 'DemirKalkan_99', role: '🛡️ Kule Bekçisi', dmg: 390, icon: '🐺', isPlayer: false },
      { nick: 'GölgeAvcısı', role: '🗡️ Suikastçı', dmg: 275, icon: '🐺', isPlayer: false }
    ].sort((a, b) => b.dmg - a.dmg);

    listEl.innerHTML = guildMembers.map((m, i) => `
      <div class="lb-row-card ${m.isPlayer ? 'is-player' : ''}">
        <span class="lb-rank-badge">#${i + 1}</span>
        <div class="lb-player-info">
          <strong>${m.icon} ${m.nick}</strong>
          <span>${m.role} • Kızıl Kuzgunlar Birliği</span>
        </div>
        <span class="lb-score-pill">💥 ${m.dmg} Hasar</span>
      </div>
    `).join('');
  }

  startWorldBossRaidBattle() {
    this.hideArena();
    document.getElementById('scene-main-menu').classList.add('hidden');
    this.state.activeBattleType = 'raid';
    this.state.activePvpRival = null;
    this.state.currentScene = 'battle';

    if ((this.state.worldBossHp ?? 0) <= 0) {
      this.state.worldBossHp = this.state.worldBossMaxHp || 2500;
    }

    const phaseHp = Math.min(this.state.worldBossHp || 2500, 120 + this.state.level * 15);
    const raidBoss = {
      name: `🐉 Dünya Ejderi Ignis-Rex [KLAN BASKINI]`,
      spriteKey: 'wyrm_boss',
      hp: phaseHp,
      maxHp: phaseHp,
      clashMod: Math.min(3, Math.floor(this.state.level / 3) + 1),
      baseDmg: 6 + Math.floor(this.state.level * 1.1),
      goldReward: 55 + this.state.level * 10,
      xpReward: 45 + this.state.level * 8,
      trait: `🐉 Dünya Bossu (${this.state.worldBossHp} HP)`,
      regen: 2,
      lifesteal: 2,
      isBoss: true,
      bleed: 0,
      weakenClash: 0
    };

    this.state.enemies = [raidBoss];
    this.state.targetEnemyIdx = 0;
    this.state.enemy = raidBoss;
    this.state.clash.enemyMod = raidBoss.clashMod;
    this.anim.enemyAlpha = 1.0;

    // Refresh player HP & Shield for the Raid!
    this.state.player.hp = this.state.player.maxHp;
    this.state.player.shield = Math.max(this.state.player.shield, 15);

    this.spawnFloatingText(235, 180, `🐉 DÜNYA BOSS BASKINI BAŞLADI!`, '#fb923c', 18);
    this.startNewPlayerTurn();
    this.updateAllUI();
  }

  renderPvpMatchmakingList() {
    const listEl = document.getElementById('arena-opponents-list');
    if (!listEl) return;

    const pLv = this.state.level || 1;
    const seed = this.pvpSeed || 0;

    // Generate 4 near-level online rivals matched to player's level!
    const matchedRivals = ONLINE_RIVAL_ROSTER.map((r, idx) => {
      const lvOffset = ((idx + seed) % 3) - 1; // -1, 0, or +1 relative to player level
      const rLv = Math.max(1, pLv + lvOffset);
      const rHp = 26 + rLv * 7 + (idx % 3) * 3;
      const rDmg = 4 + Math.floor(rLv * 1.3);
      const rClash = Math.min(3, Math.floor((rLv - 1) / 2));
      const rewardGold = 25 + rLv * 8;
      const rewardTrophies = 25 + Math.max(0, lvOffset * 5);
      return {
        ...r,
        level: rLv,
        hp: rHp,
        dmg: rDmg,
        clashMod: rClash,
        rewardGold,
        rewardTrophies
      };
    }).slice(0, 4);

    this.currentMatchedRivals = matchedRivals;

    listEl.innerHTML = matchedRivals.map((rival, idx) => `
      <div class="pvp-rival-card">
        <div class="pvp-rival-left" data-inspect-rival="${idx}" style="cursor:pointer;" title="Profili Görüntüle">
          <img src="${rival.portrait}" alt="${rival.nick}" class="pvp-rival-avatar" />
          <div class="pvp-rival-meta">
            <div class="pvp-rival-name-row">
              <strong>${rival.nick}</strong>
              <span class="pvp-online-tag">● ONLINE • Sv.${rival.level}</span>
              <span class="gear-rarity-pill epic">${rival.petIcon} ${rival.title}</span>
            </div>
            <div class="pvp-rival-stats">❤️ ${rival.hp} Can • ⚔️ ${rival.dmg} Hasar • 🎲 Zar: +${rival.clashMod}</div>
            <div class="pvp-rival-loot">🎁 Ödül: +${rival.rewardTrophies}🏆 Kupa • +${rival.rewardGold}💰 • +2💎 & Ekipman Şansı</div>
          </div>
        </div>
        <button class="fortune-spin-btn" data-pvp-idx="${idx}">⚔️ SAVAŞ!</button>
      </div>
    `).join('');

    listEl.querySelectorAll('[data-inspect-rival]').forEach((el) => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.getAttribute('data-inspect-rival') || '0', 10);
        const rival = this.currentMatchedRivals?.[idx];
        if (rival) this.inspectPlayerProfile(rival);
      });
    });

    listEl.querySelectorAll('[data-pvp-idx]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-pvp-idx') || '0', 10);
        const rival = this.currentMatchedRivals?.[idx];
        if (rival) this.startPvpMatchmakingWithRadar(rival);
      });
    });
  }

  startPvpMatchmakingWithRadar(rival) {
    const modal = document.getElementById('pvp-matchmaking-modal');
    if (!modal) {
      this.startOnlinePvpBattle(rival);
      return;
    }

    const isEn = this.state.lang === 'en';
    const myNickEl = document.getElementById('radar-my-nick');
    const myTrophyEl = document.getElementById('radar-my-trophy');
    const rivalNickEl = document.getElementById('radar-rival-nick');
    const rivalTrophyEl = document.getElementById('radar-rival-trophy');
    const radarTitleEl = document.getElementById('radar-title');
    const radarFace = document.getElementById('radar-matched-face');
    const pingTag = document.getElementById('radar-ping-tag');

    if (myNickEl) myNickEl.textContent = this.state.playerNick || 'Sir Elden';
    if (myTrophyEl) myTrophyEl.textContent = `🏆 ${this.state.trophies || 100}`;
    if (radarTitleEl) radarTitleEl.textContent = isEn ? 'SEARCHING FOR RIVAL...' : 'RAKİP ARANIYOR...';
    if (rivalNickEl) {
      rivalNickEl.textContent = isEn ? 'Searching...' : 'Aranıyor...';
      rivalNickEl.classList.add('pulse-text');
    }
    if (rivalTrophyEl) rivalTrophyEl.textContent = '🏆 ???';
    if (radarFace) radarFace.textContent = '⚔️';
    if (pingTag) pingTag.textContent = `⚡ ${Math.floor(22 + Math.random() * 18)}ms • Server: EU-Central`;

    modal.classList.remove('hidden');
    window.sfx.playDicePickup();

    let canceled = false;
    const cancelBtn = document.getElementById('btn-cancel-matchmaking');
    const onCancel = () => {
      canceled = true;
      modal.classList.add('hidden');
      if (cancelBtn) cancelBtn.removeEventListener('click', onCancel);
    };
    if (cancelBtn) cancelBtn.addEventListener('click', onCancel, { once: true });

    // Step 1: Scan rival pool
    setTimeout(() => {
      if (canceled) return;
      window.sfx.playDiceRoll();
      if (rivalNickEl) rivalNickEl.textContent = rival.nick;
      if (rivalTrophyEl) rivalTrophyEl.textContent = `🏆 ${(this.state.trophies || 100) + Math.floor(Math.random() * 20 - 10)}`;
    }, 550);

    // Step 2: Lock on & Match Found!
    setTimeout(() => {
      if (canceled) return;
      if (radarTitleEl) radarTitleEl.textContent = isEn ? '🎯 MATCH FOUND!' : '🎯 EŞLEŞME BULUNDU!';
      if (rivalNickEl) rivalNickEl.classList.remove('pulse-text');
      if (radarFace) radarFace.textContent = rival.petIcon || '🔥';
      window.sfx.playSwordSlash(true);

      setTimeout(() => {
        if (canceled) return;
        modal.classList.add('hidden');
        this.startOnlinePvpBattle(rival);
      }, 550);
    }, 1150);
  }

  startOnlinePvpBattle(rival) {
    this.hideArena();
    document.getElementById('scene-main-menu').classList.add('hidden');
    this.state.activeBattleType = 'pvp';
    this.state.activePvpRival = rival;
    this.state.currentScene = 'battle';

    if (window.bgm) {
      window.bgm.setSceneTrack('arena');
      this.updateSoundtrackBanner();
    }

    const pvpEnemy = {
      name: `⚔️ ${rival.nick} (Sv.${rival.level} • ${rival.title})`,
      spriteKey: rival.helmId || 'helm_iron',
      hp: rival.hp,
      maxHp: rival.hp,
      clashMod: rival.clashMod,
      baseDmg: rival.dmg,
      goldReward: rival.rewardGold,
      xpReward: 25 + rival.level * 5,
      trait: `${rival.petIcon} Online Şövalye`,
      regen: 1,
      lifesteal: 1,
      isBoss: true,
      bleed: 0,
      weakenClash: 0
    };

    this.state.enemies = [pvpEnemy];
    this.state.targetEnemyIdx = 0;
    this.state.enemy = pvpEnemy;
    this.state.clash.enemyMod = pvpEnemy.clashMod;
    this.anim.enemyAlpha = 1.0;

    // Refresh player shield at duel start
    this.state.player.hp = this.state.player.maxHp;
    this.state.player.shield = Math.max(this.state.player.shield, 12);

    this.spawnFloatingText(235, 180, `⚔️ PVP DÜELLO: ${rival.nick}!`, '#38bdf8', 18);
    this.startNewPlayerTurn();
    this.updateAllUI();
  }

  showPvpVictoryModal(rival, trophyGain, goldEarned, gemsEarned, droppedGear) {
    return new Promise((resolve) => {
      const overlay = document.getElementById('modal-overlay');
      const title = document.getElementById('modal-title');
      const sub = document.getElementById('modal-subtitle');
      const content = document.getElementById('modal-content');
      const closeBtn = document.getElementById('modal-close-btn');

      title.textContent = `🏆 ONLINE PVP ZAFERİ!`;
      sub.textContent = `${rival ? rival.nick : 'Rakip Şövalye'} düelloda mağlup edildi!`;

      const gearLine = droppedGear
        ? `<div class="shop-item"><div class="shop-item-info"><div class="shop-item-icon">${droppedGear.icon}</div><div><div class="shop-item-title">🎁 Savaş Ganimeti Düştü: ${droppedGear.name}</div><div class="shop-item-desc">Envanterine eklendi!</div></div></div></div>`
        : '';

      content.innerHTML = `
        <div class="shop-item active-chapter">
          <div class="shop-item-info">
            <div class="shop-item-icon">🏆</div>
            <div>
              <div class="shop-item-title">+${trophyGain} Online Kupa Puanı (Toplam: ${this.state.trophies}🏆)</div>
              <div class="shop-item-desc">💰 +${goldEarned} Altın • 💎 +${gemsEarned} Ruh Taşı kazandın!</div>
            </div>
          </div>
        </div>
        ${gearLine}
      `;

      // Award a battle chest to 4-slot dock!
      this.awardBattleChestDrop();

      closeBtn.classList.remove('hidden');
      closeBtn.textContent = 'Online Arenaya Dön ➔';
      closeBtn.onclick = () => {
        overlay.classList.add('hidden');
        closeBtn.onclick = () => overlay.classList.add('hidden');
        this.spawnEnemyForCurrentRoom();
        this.showArena('game');
        resolve();
      };
      overlay.classList.remove('hidden');
    });
  }

  renderEndlessTowerMilestones() {
    const listEl = document.getElementById('tower-milestones-list');
    if (!listEl) return;
    const curFloor = this.state.towerFloor || 1;

    const floors = [curFloor, curFloor + 1, curFloor + 2, curFloor + 3, curFloor + 4];
    listEl.innerHTML = floors.map((f) => {
      const isBossFloor = f % 5 === 0;
      const hp = 28 + f * 7 + (isBossFloor ? 18 : 0);
      const dmg = 5 + Math.floor(f * 0.9);
      const isCurrent = f === curFloor;
      return `
        <div class="pvp-rival-card" style="${isCurrent ? 'border-color:#f87171;background:rgba(69,10,10,0.45);' : ''}">
          <div class="pvp-rival-left">
            <div class="gear-icon-frame">${isBossFloor ? '👑' : '🗼'}</div>
            <div class="pvp-rival-meta">
              <div class="pvp-rival-name-row">
                <strong>SONSUZ KULE • KAT ${f} ${isBossFloor ? '(KULE BOSSU!)' : ''}</strong>
                ${isCurrent ? '<span class="pvp-online-tag">SIRADAKİ KAT</span>' : ''}
              </div>
              <div class="pvp-rival-stats">❤️ ${hp} Can • ⚔️ ${dmg} Hasar • 🎲 Zar: +${Math.min(4, Math.floor(f / 4))}</div>
              <div class="pvp-rival-loot">🎁 Ödül: +15🏆 Kupa • +${18 + f * 4}💰 Altın ${isBossFloor ? '• 🎁 Boss Eşyası & +2💎!' : ''}</div>
            </div>
          </div>
          ${isCurrent ? '<button class="fortune-spin-btn" id="btn-inline-tower-go">⚔️ GİR</button>' : '<span style="font-size:10px;color:#94a3b8;font-weight:800;">Kilitli</span>'}
        </div>
      `;
    }).join('');

    const goBtn = listEl.querySelector('#btn-inline-tower-go');
    if (goBtn) {
      goBtn.addEventListener('click', () => this.startEndlessTowerBattle());
    }
  }

  startEndlessTowerBattle() {
    this.hideArena();
    document.getElementById('scene-main-menu').classList.add('hidden');
    this.state.activeBattleType = 'tower';
    this.state.activePvpRival = null;
    this.state.currentScene = 'battle';

    const f = this.state.towerFloor || 1;
    const isBossFloor = f % 5 === 0;
    const monsterKeys = ['skeleton', 'viper', 'inquisitor', 'gargoyle', 'plague', 'golem', 'valkyrie', 'hellknight'];
    const bossKeys = ['hydra_boss', 'boneking_boss', 'chimera_boss', 'wyrm_boss', 'azazel_boss'];
    const spriteKey = isBossFloor
      ? bossKeys[Math.floor(f / 5 - 1) % bossKeys.length]
      : monsterKeys[(f - 1) % monsterKeys.length];

    const hp = 28 + f * 7 + (isBossFloor ? 18 : 0);
    const dmg = 5 + Math.floor(f * 0.9);
    const towerEnemy = {
      name: `🗼 Kule Kat ${f}: ${isBossFloor ? 'Kule Tiranı [BOSS]' : 'Kan Kulesi Muhafızı'}`,
      spriteKey,
      hp,
      maxHp: hp,
      clashMod: Math.min(4, Math.floor(f / 4)),
      baseDmg: dmg,
      goldReward: 18 + f * 4,
      xpReward: 20 + f * 3,
      trait: `🗼 Kule Kat ${f}`,
      regen: isBossFloor ? 2 : 0,
      lifesteal: isBossFloor ? 2 : 0,
      isBoss: isBossFloor,
      bleed: 0,
      weakenClash: 0
    };

    this.state.enemies = [towerEnemy];
    this.state.targetEnemyIdx = 0;
    this.state.enemy = towerEnemy;
    this.state.clash.enemyMod = towerEnemy.clashMod;
    this.anim.enemyAlpha = 1.0;

    this.spawnFloatingText(235, 180, `🗼 SONSUZ KULE: KAT ${f}!`, '#f87171', 18);
    this.startNewPlayerTurn();
    this.updateAllUI();
  }

  renderArenaLeaderboard() {
    const listEl = document.getElementById('arena-leaderboard-list');
    if (!listEl) return;

    const isTower = this.currentLbType === 'tower';
    const playerEntry = {
      nick: `${this.state.playerNick || 'Sir Elden'} (SEN)`,
      title: this.state.equippedTitle || 'Gezgin Şövalye',
      trophies: this.state.trophies || 100,
      bestTower: Math.max(this.state.bestTowerFloor || 1, this.state.towerFloor || 1),
      isPlayer: true
    };

    const allEntries = [
      playerEntry,
      ...ONLINE_RIVAL_ROSTER.map((r) => ({
        nick: r.nick,
        title: r.title,
        trophies: r.trophies,
        bestTower: r.bestTower,
        isPlayer: false
      }))
    ];

    allEntries.sort((a, b) => (isTower ? b.bestTower - a.bestTower : b.trophies - a.trophies));

    listEl.innerHTML = allEntries.map((entry, idx) => {
      const rankNum = idx + 1;
      const medal = rankNum === 1 ? '🥇' : (rankNum === 2 ? '🥈' : (rankNum === 3 ? '🥉' : `#${rankNum}`));
      const scoreText = isTower ? `🗼 Kat ${entry.bestTower}` : `🏆 ${entry.trophies} Kupa`;
      return `
        <div class="lb-row-card ${entry.isPlayer ? 'is-player' : ''}">
          <span class="lb-rank-badge">${medal}</span>
          <div class="lb-player-info">
            <strong>${entry.nick}</strong>
            <small>🎖️ ${entry.title}</small>
          </div>
          <span class="lb-score-val">${scoreText}</span>
        </div>
      `;
    }).join('');
  }

  showSkillTree() {
    this.viewBeforeTree = document.getElementById('scene-main-menu').classList.contains('hidden') ? 'game' : 'menu';
    document.getElementById('scene-main-menu').classList.add('hidden');
    document.getElementById('scene-skill-tree').classList.remove('hidden');
    this.currentTreeBranch = this.currentTreeBranch || 'warrior';
    this.renderSkillTree();
    window.sfx.playMenuClick();
  }

  hideSkillTree() {
    document.getElementById('scene-skill-tree').classList.add('hidden');
    window.sfx.playMenuClick();
    if (this.viewBeforeTree === 'menu') {
      this.showMainMenu();
    }
  }

  renderSkillTree() {
    document.getElementById('tree-souls-display').textContent = `💎 ${this.state.soulGems}`;

    // Update branch tabs
    document.querySelectorAll('.tree-tab-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.branch === this.currentTreeBranch);
    });

    const branch = TALENT_BRANCHES[this.currentTreeBranch];
    const container = document.getElementById('tree-nodes-content');
    if (!container || !branch) return;

    if (!this.selectedTalentId) {
      this.selectedTalentId = branch.talents[0].id;
    }

    container.innerHTML = branch.talents.map((t) => {
      const isUnlocked = this.hasTalent(t.id);
      const reqMet = !t.req || this.hasTalent(t.req);
      const canAfford = this.state.soulGems >= t.cost;
      const isAvailable = !isUnlocked && reqMet;

      let statusCls = isUnlocked ? 'unlocked' : (isAvailable ? 'available' : 'locked');
      let statusText = isUnlocked ? '✓ AÇILDI' : (isAvailable ? `${t.cost}💎 İLE AÇ` : 'KİLİTLİ');

      const isSelected = this.selectedTalentId === t.id;

      return `
        <div class="tree-node-card ${statusCls} ${isSelected ? 'selected' : ''}" data-id="${t.id}">
          <div class="node-icon-box">${t.icon}</div>
          <div class="node-text-col">
            <div class="node-name-row">
              <span class="node-name">${t.name}</span>
              <span class="node-status-pill ${statusCls}">${statusText}</span>
            </div>
            <div class="node-brief-desc">${t.desc}</div>
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.tree-node-card').forEach((card) => {
      card.addEventListener('click', () => {
        window.sfx.playMenuClick();
        this.selectedTalentId = card.dataset.id;
        this.renderSkillTree();
      });
    });

    this.updateTalentDetailCard();
  }

  updateTalentDetailCard() {
    const branch = TALENT_BRANCHES[this.currentTreeBranch];
    const talent = branch.talents.find((t) => t.id === this.selectedTalentId) || branch.talents[0];

    if (!talent) return;

    document.getElementById('node-detail-category').textContent = branch.name.toUpperCase();
    document.getElementById('node-detail-title').textContent = `${talent.icon} ${talent.name}`;
    document.getElementById('node-detail-desc').textContent = talent.desc;

    const isUnlocked = this.hasTalent(talent.id);
    const reqMet = !talent.req || this.hasTalent(talent.req);
    const canAfford = this.state.soulGems >= talent.cost;
    const buyBtn = document.getElementById('btn-buy-talent');
    const costLabel = document.getElementById('node-detail-cost');

    costLabel.textContent = `Maliyet: 💎 ${talent.cost} Ruh Taşı`;

    if (isUnlocked) {
      buyBtn.disabled = true;
      buyBtn.textContent = '✓ Zaten Açıldı';
      buyBtn.style.background = '#1b4d29';
      buyBtn.style.color = '#5bf088';
    } else if (!reqMet) {
      const prevTalent = branch.talents.find((t) => t.id === talent.req);
      buyBtn.disabled = true;
      buyBtn.textContent = `Önce "${prevTalent ? prevTalent.name : 'Önceki'}" Açılmalı`;
      buyBtn.style.background = '#2b333d';
      buyBtn.style.color = '#7f8c9b';
    } else if (!canAfford) {
      buyBtn.disabled = true;
      buyBtn.textContent = `Yetersiz Ruh Taşı (${talent.cost}💎)`;
      buyBtn.style.background = '#2b333d';
      buyBtn.style.color = '#ff9191';
    } else {
      buyBtn.disabled = false;
      buyBtn.textContent = `💎 ${talent.cost} ile Kilidi Aç!`;
      buyBtn.style.background = '';
      buyBtn.style.color = '';
    }
  }

  buySelectedTalent() {
    const branch = TALENT_BRANCHES[this.currentTreeBranch];
    const talent = branch.talents.find((t) => t.id === this.selectedTalentId);
    if (!talent) return;

    if (this.hasTalent(talent.id)) return;
    if (talent.req && !this.hasTalent(talent.req)) return;
    if (this.state.soulGems < talent.cost) return;

    this.state.soulGems -= talent.cost;
    this.state.talents.push(talent.id);

    // Apply immediate passive stat effects if any
    if (talent.id === 'w1') this.state.player.atkBonus += 1;
    if (talent.id === 'w2') this.state.player.clashBonus += 1;
    if (talent.id === 'g1') {
      this.state.player.maxHp += 8;
      this.state.player.hp = Math.min(this.state.player.maxHp, this.state.player.hp + 8);
    }
    if (talent.id === 'r2') this.state.player.runeBonus += 2;

    window.sfx.playMagicChime();
    this.vibrate([30, 50, 30]);
    this.spawnFloatingText(235, 200, `YETENEK AÇILDI: ${talent.name}!`, '#ffd54f', 16);

    this.saveProgress();
    this.updateAllUI();
    this.renderSkillTree();
  }

  resetTalents() {
    if (this.state.talents.length === 0) return;
    if (!confirm('Tüm açılmış yetenekleri sıfırlayıp harcanan Ruh Taşlarını geri almak istiyor musun?')) return;

    let refund = 0;
    Object.values(TALENT_BRANCHES).forEach((branch) => {
      branch.talents.forEach((t) => {
        if (this.state.talents.includes(t.id)) {
          refund += t.cost;
        }
      });
    });

    this.state.soulGems += refund;
    this.state.talents = [];

    // Revert baseline stats
    this.state.player.atkBonus = 1;
    this.state.player.clashBonus = 0;
    this.state.player.runeBonus = 1;
    this.state.player.maxHp = 28;
    this.state.player.hp = Math.min(28, this.state.player.hp);

    window.sfx.playCoin();
    this.saveProgress();
    this.updateAllUI();
    this.renderSkillTree();
  }

  showBestiary() {
    this.viewBeforeBestiary = document.getElementById('scene-main-menu').classList.contains('hidden') ? 'game' : 'menu';
    document.getElementById('scene-main-menu').classList.add('hidden');
    document.getElementById('scene-bestiary').classList.remove('hidden');
    this.selectedBestiaryKey = this.selectedBestiaryKey || 'viper';
    this.renderBestiary();
    window.sfx.playMenuClick();
  }

  hideBestiary() {
    document.getElementById('scene-bestiary').classList.add('hidden');
    window.sfx.playMenuClick();
    if (this.viewBeforeBestiary === 'menu') {
      this.showMainMenu();
    }
  }

  renderBestiary() {
    const strip = document.getElementById('bestiary-tabs-strip');
    if (!strip) return;

    strip.innerHTML = BESTIARY_DATA.map((m) => {
      const isActive = m.key === this.selectedBestiaryKey;
      const kills = this.state.bestiaryKills[m.key] || 0;
      const isBoss = m.threat.includes('BOSS');

      return `
        <div class="bestiary-tab-item ${isActive ? 'active' : ''}" data-key="${m.key}">
          <img src="assets/monster_${m.key}.png" onerror="this.src='assets/enemy_boss.png'" class="bestiary-tab-icon" alt="${m.name}" />
          <span class="bestiary-tab-threat">${isBoss ? '👑' : (kills > 0 ? '✓' : '💀')}</span>
        </div>
      `;
    }).join('');

    strip.querySelectorAll('.bestiary-tab-item').forEach((item) => {
      item.addEventListener('click', () => {
        window.sfx.playMenuClick();
        this.selectedBestiaryKey = item.dataset.key;
        this.renderBestiary();
      });
    });

    const m = BESTIARY_DATA.find((item) => item.key === this.selectedBestiaryKey) || BESTIARY_DATA[0];
    if (!m) return;

    const kills = this.state.bestiaryKills[m.key] || 0;
    const imgEl = document.getElementById('bestiary-monster-img');
    imgEl.src = `assets/monster_${m.key}.png`;
    imgEl.onerror = () => { imgEl.src = 'assets/enemy_boss.png'; };

    document.getElementById('bestiary-chapter-tag').textContent = m.chapter;
    document.getElementById('bestiary-threat-tag').textContent = m.threat;
    document.getElementById('bestiary-name').textContent = m.name;
    document.getElementById('bestiary-lore').textContent = m.lore;
    document.getElementById('bestiary-hp').textContent = m.hp;
    document.getElementById('bestiary-dmg').textContent = m.dmg;
    document.getElementById('bestiary-clash').textContent = m.clashMod >= 0 ? `+${m.clashMod}` : `${m.clashMod}`;
    document.getElementById('bestiary-kills').textContent = `${kills} Kez`;
    document.getElementById('bestiary-strategy').textContent = m.strategy;
  }

  showShrineEventModal() {
    return new Promise((resolve) => {
      const overlay = document.getElementById('modal-overlay');
      const title = document.getElementById('modal-title');
      const sub = document.getElementById('modal-subtitle');
      const content = document.getElementById('modal-content');
      const closeBtn = document.getElementById('modal-close-btn');

      const ch = this.getCurrentChapter();
      title.textContent = `⛩️ ODA 2: KADİM SUNAK (${ch.name})`;
      sub.textContent = 'Zindanın derinliklerinde gizemli bir sunak buldun. Ne yapacaksın?';
      closeBtn.classList.add('hidden');

      const choices = [
        {
          icon: '🩸',
          title: 'Kan Adağı Sun (-5 Can -> +2 Saldırı & +1 Rün Gücü)',
          desc: 'Sunağa kanını akıtarak kılıcını ve rünlerini kalıcı olarak güçlendir.',
          apply: () => {
            this.state.player.hp = Math.max(1, this.state.player.hp - 5);
            this.state.player.atkBonus += 2;
            this.state.player.runeBonus += 1;
          }
        },
        {
          icon: '🛡️',
          title: 'Kutsal Kutsama Al (+12 Mavi Kalkan & +8 Can)',
          desc: 'Sunaktaki antik enerjiyi kalkanına ve zırhına çek.',
          apply: () => {
            this.state.player.shield = Math.min(50, this.state.player.shield + 12);
            this.state.player.hp = Math.min(this.state.player.maxHp, this.state.player.hp + 8);
          }
        },
        {
          icon: '💰',
          title: 'Sunak Hazinesini Yağmala (+22 Altın)',
          desc: 'Risk almadan altın kesesini al ve Elit Muhafız odasına ilerle.',
          apply: () => {
            this.state.gold += 22;
            window.sfx.playCoin();
          }
        }
      ];

      content.innerHTML = '';
      choices.forEach((c) => {
        const row = document.createElement('div');
        row.className = 'shop-item';
        row.innerHTML = `
          <div class="shop-item-info">
            <div class="shop-item-icon">${c.icon}</div>
            <div>
              <div class="shop-item-title">${c.title}</div>
              <div class="shop-item-desc">${c.desc}</div>
            </div>
          </div>
          <button class="shop-buy-btn">SEÇ</button>
        `;
        row.querySelector('button').addEventListener('click', () => {
          c.apply();
          closeBtn.classList.remove('hidden');
          overlay.classList.add('hidden');
          this.saveProgress();
          this.updateAllUI();
          resolve();
        });
        content.appendChild(row);
      });

      overlay.classList.remove('hidden');
    });
  }

  showCampfireModal() {
    return new Promise((resolve) => {
      const overlay = document.getElementById('modal-overlay');
      const title = document.getElementById('modal-title');
      const sub = document.getElementById('modal-subtitle');
      const content = document.getElementById('modal-content');
      const closeBtn = document.getElementById('modal-close-btn');

      const ch = this.getCurrentChapter();
      title.textContent = `🔥 ODA 4: BOSS ÖNCESİ KAMP ATEŞİ`;
      sub.textContent = `${ch.boss.name} ile karşılaşmadan önce hazırlığını yap:`;
      closeBtn.classList.add('hidden');

      const options = [
        {
          icon: '🍖',
          title: 'Kamp Ateşinde Dinlen (Tam Can & +15 Mavi Kalkan)',
          desc: 'Tüm yaralarını sarar ve Boss savaşına +15 Kalkan ile başlarsın.',
          apply: () => {
            this.state.player.hp = this.state.player.maxHp;
            this.state.player.shield = Math.min(50, this.state.player.shield + 15);
            window.sfx.playHeal();
          }
        },
        {
          icon: '⚒️',
          title: 'Demircide Silah & Rün Döv (+2 Saldırı, +2 Rün, +1 Çarpışma)',
          desc: 'Kılıcını bir üst evrime taşır ve Rün gücünü kalıcı artırır.',
          apply: () => {
            this.state.player.atkBonus += 2;
            this.state.player.runeBonus += 2;
            this.state.player.clashBonus += 1;
            window.sfx.playClashVictory();
          }
        }
      ];

      content.innerHTML = '';
      options.forEach((opt) => {
        const row = document.createElement('div');
        row.className = 'shop-item';
        row.innerHTML = `
          <div class="shop-item-info">
            <div class="shop-item-icon">${opt.icon}</div>
            <div>
              <div class="shop-item-title">${opt.title}</div>
              <div class="shop-item-desc">${opt.desc}</div>
            </div>
          </div>
          <button class="shop-buy-btn">HAZIRLAN</button>
        `;
        row.querySelector('button').addEventListener('click', () => {
          opt.apply();
          closeBtn.classList.remove('hidden');
          overlay.classList.add('hidden');
          this.saveProgress();
          this.updateAllUI();
          resolve();
        });
        content.appendChild(row);
      });

      overlay.classList.remove('hidden');
    });
  }

  showChapterVictoryModal() {
    return new Promise((resolve) => {
      const overlay = document.getElementById('modal-overlay');
      const title = document.getElementById('modal-title');
      const sub = document.getElementById('modal-subtitle');
      const content = document.getElementById('modal-content');
      const closeBtn = document.getElementById('modal-close-btn');

      const ch = this.getCurrentChapter();
      const nextCh = CHAPTERS[(this.state.chapterIdx + 1) % CHAPTERS.length];

      title.textContent = `🏆 BÖLÜM ${ch.id} TAMAMLANDI!`;
      sub.textContent = `${ch.boss.name} mağlup edildi! Sıradaki diyar: ${nextCh.name}`;
      content.innerHTML = `
        <div class="shop-item active-chapter">
          <div class="shop-item-info">
            <img src="${nextCh.bgFile}" class="shop-item-thumb" alt="${nextCh.name}" />
            <div>
              <div class="shop-item-title">Yeni Bölüm: ${nextCh.name}</div>
              <div class="shop-item-desc">${nextCh.subtitle}</div>
            </div>
          </div>
        </div>
      `;

      closeBtn.classList.remove('hidden');
      closeBtn.textContent = 'Yeni Bölüme İlerle ➔';
      closeBtn.onclick = () => {
        overlay.classList.add('hidden');
        closeBtn.onclick = () => overlay.classList.add('hidden');
        resolve();
      };
      overlay.classList.remove('hidden');
    });
  }

  // =========================================================
  // MOBILE INSTALL MODAL (iOS & ANDROID)
  // =========================================================
  openMobileInstallModal() {
    if (this.state.busy) return;
    const overlay = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    const sub = document.getElementById('modal-subtitle');
    const content = document.getElementById('modal-content');
    const closeBtn = document.getElementById('modal-close-btn');

    title.textContent = '📲 MOBİL OYUN KURULUMU';
    sub.textContent = 'Oyun hem Android hem Apple (iOS) için tam ekran ve çevrimdışı (offline) çalışacak şekilde hazırlandı:';
    closeBtn.classList.remove('hidden');
    closeBtn.textContent = 'Kapat';

    content.innerHTML = `
      <div class="shop-item active-chapter">
        <div class="shop-item-info">
          <div class="shop-item-icon">🤖</div>
          <div>
            <div class="shop-item-title">Android Kurulumu (Tek Tık / APK)</div>
            <div class="shop-item-desc">Chrome menüsünden "Uygulamayı Yükle" seçebilir veya Capacitor <b>android/</b> klasörüyle doğrudan <b>.apk</b> derleyebilirsin.</div>
          </div>
        </div>
        <button class="shop-buy-btn" id="btn-trigger-pwa">Yükle</button>
      </div>

      <div class="shop-item">
        <div class="shop-item-info">
          <div class="shop-item-icon">🍎</div>
          <div>
            <div class="shop-item-title">iPhone / iPad (Ücretsiz Kurulum)</div>
            <div class="shop-item-desc">Apple Developer hesabı gerekmeden: Safari'de <b>Paylaş (⬆️) ➔ Ana Ekrana Ekle</b> butonuna bas. Özel ikonuyla tam ekran oyun olarak kurulur! Ayrıca <b>ios/</b> Xcode projesi de hazır.</div>
          </div>
        </div>
      </div>

      <div class="shop-item">
        <div class="shop-item-info">
          <div class="shop-item-icon">💾</div>
          <div>
            <div class="shop-item-title">Otomatik Kayıt Aktif</div>
            <div class="shop-item-desc">Seviyen (Lv.${this.state.level}), Altının (${this.state.gold}G) ve Bölümün telefonda otomatik kaydedilir.</div>
          </div>
        </div>
        <button class="shop-buy-btn" id="btn-reset-save" style="background:#8b1e1e;color:#fff;border-color:#ff8a80;">Sıfırla</button>
      </div>
    `;

    const pwaBtn = content.querySelector('#btn-trigger-pwa');
    pwaBtn.addEventListener('click', async () => {
      if (this.deferredInstallPrompt) {
        this.deferredInstallPrompt.prompt();
        await this.deferredInstallPrompt.userChoice;
        this.deferredInstallPrompt = null;
      } else {
        pwaBtn.textContent = 'Tarayıcı Menüsünden Ekle';
      }
    });

    content.querySelector('#btn-reset-save').addEventListener('click', () => {
      this.resetSaveData();
      overlay.classList.add('hidden');
    });

    overlay.classList.remove('hidden');
  }

  // =========================================================
  // CHAPTER SELECTOR, BRANCHING MAP & REALM PORTAL
  // =========================================================
  openChapterMapModal() {
    if (this.state.busy) return;
    const portal = document.getElementById('scene-map-portal');
    if (!portal) return;

    this.selectedMapRealmIdx = this.selectedMapRealmIdx !== undefined ? this.selectedMapRealmIdx : this.state.chapterIdx;
    this.renderMapPortal(this.selectedMapRealmIdx);
    portal.classList.remove('hidden');
    window.sfx.playMenuClick();
  }

  renderMapPortal(realmIdx) {
    this.selectedMapRealmIdx = realmIdx;
    const ch = CHAPTERS[realmIdx] || CHAPTERS[0];
    const activeWorldId = ch.worldId || Math.floor(realmIdx / 10) + 1;

    const realmTitleHeader = document.getElementById('portal-selected-realm-name');
    if (realmTitleHeader) {
      realmTitleHeader.textContent = `${ch.worldIcon || '🏰'} Dünya ${activeWorldId}: ${ch.worldName || 'Mahzen'} • Bölüm ${ch.id}`;
    }

    // 1. Render 10 Worlds Selector Bar (10 Diyar • 100 Bölüm)
    const worldsContainer = document.getElementById('worlds-selector-bar');
    if (worldsContainer) {
      worldsContainer.innerHTML = WORLDS_CONFIG.map((w) => {
        const isActiveWorld = w.id === activeWorldId;
        const firstChIdx = (w.id - 1) * 10;
        const startNum = firstChIdx + 1;
        const endNum = firstChIdx + 10;
        return `
          <button class="world-pill-btn ${isActiveWorld ? 'active' : ''}" data-world-idx="${firstChIdx}">
            <span class="world-pill-top">${w.icon} DÜNYA ${w.id} (B${startNum}-${endNum})</span>
            <span class="world-pill-name">${w.name}</span>
          </button>
        `;
      }).join('');

      worldsContainer.querySelectorAll('.world-pill-btn').forEach((wBtn) => {
        wBtn.addEventListener('click', () => {
          window.sfx.playMenuClick();
          const targetIdx = parseInt(wBtn.getAttribute('data-world-idx') || '0', 10);
          this.renderMapPortal(targetIdx);
        });
      });
    }

    // 2. Render 10 Levels for Selected World
    const tabsContainer = document.getElementById('realm-tabs-scroll');
    if (tabsContainer) {
      const worldChapters = CHAPTERS.filter((c) => c.worldId === activeWorldId);
      tabsContainer.innerHTML = worldChapters.map((c) => {
        const idx = c.id - 1;
        const isActive = idx === realmIdx;
        const isWorldFinal = c.stageInWorld === 10;
        return `<button class="realm-tab-pill ${isActive ? 'active' : ''}" data-idx="${idx}">${isWorldFinal ? '👑 ' : ''}Bölüm ${c.id} (${c.stageInWorld}/10)</button>`;
      }).join('');

      tabsContainer.querySelectorAll('.realm-tab-pill').forEach((btn) => {
        btn.addEventListener('click', () => {
          window.sfx.playMenuClick();
          this.renderMapPortal(parseInt(btn.dataset.idx, 10));
        });
      });
    }

    // 3. Render Branching Node Map for Selected Level
    const branchingContainer = document.getElementById('branching-nodes-container');
    if (branchingContainer) {
      const baseArch = ch.baseArchId || ((ch.id - 1) % 5) + 1;
      const realmMap = BRANCHING_MAPS[baseArch] || BRANCHING_MAPS[1];
      const isCurrentChapter = this.state.chapterIdx === realmIdx;

      let html = '';
      realmMap.forEach((rankData, rIdx) => {
        html += `<div class="branch-rank-row">`;
        rankData.nodes.forEach((node) => {
          let nodeCls = 'branch-node-btn';
          if (!isCurrentChapter) {
            nodeCls += ' available';
          } else {
            if (node.rank < this.state.room || (rankData.rank < this.state.room)) {
              nodeCls += ' done';
            } else if (rankData.rank === this.state.room) {
              nodeCls += ' current';
            } else if (rankData.rank === this.state.room + 1) {
              nodeCls += ' available';
            } else {
              nodeCls += ' locked';
            }
          }

          const nodeDisplayName = node.type === 'boss'
            ? ch.boss.name.replace(' [BÖLÜM BOSS]', '').replace(' [DÜNYA BOSS]', '')
            : node.name;

          html += `
            <div class="${nodeCls}" data-rank="${rankData.rank}" data-id="${node.id}" data-type="${node.type}">
              <div class="branch-node-icon">${node.icon}</div>
              <div class="branch-node-name">${nodeDisplayName}</div>
              <div class="branch-node-badge">${node.badge}</div>
            </div>
          `;
        });
        html += `</div>`;

        if (rIdx < realmMap.length - 1) {
          html += `<div class="branch-connector-line">│<br>▼</div>`;
        }
      });

      branchingContainer.innerHTML = html;

      // Add click handler to nodes to travel
      branchingContainer.querySelectorAll('.branch-node-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const rank = parseInt(btn.dataset.rank, 10);
          const type = btn.dataset.type;
          const id = btn.dataset.id;

          if (btn.classList.contains('locked') && !btn.classList.contains('done')) {
            this.spawnFloatingText(235, 200, 'ÖNCEKİ ODAYI TAMAMLA!', '#ff9191', 15);
            return;
          }

          window.sfx.playMenuClick();
          this.state.chapterIdx = realmIdx;
          this.state.room = rank;
          this.state.roomBranch = id;

          document.getElementById('scene-map-portal').classList.add('hidden');

          if (type === 'battle' || type === 'boss') {
            this.openBattleRoom();
          } else if (type === 'shrine') {
            this.openShrineRoom();
          } else if (type === 'campfire') {
            this.openCampfireRoom();
          } else if (type === 'chest') {
            this.openChestRoom();
          } else if (type === 'shop') {
            this.openShopModal();
          }
          this.saveProgress();
        });
      });
    }

    // 4. Update Realm Details Card
    const badgeEl = document.getElementById('map-card-badge');
    const titleEl = document.getElementById('map-card-title');
    const descEl = document.getElementById('map-card-desc');
    if (badgeEl) badgeEl.textContent = `DÜNYA ${activeWorldId} • BÖLÜM ${ch.id}/100`;
    if (titleEl) titleEl.textContent = `${ch.worldIcon || '🏰'} ${ch.name}`;
    if (descEl) descEl.textContent = `${ch.subtitle} — Boss Ganimeti: Özel Kask & Zırh Düşme Şansı!`;

    const startBtn = document.getElementById('btn-map-start-dungeon');
    if (startBtn) {
      startBtn.onclick = () => {
        this.state.chapterIdx = realmIdx;
        this.state.room = 1;
        this.state.roomBranch = null;
        document.getElementById('scene-map-portal').classList.add('hidden');
        if (this.state.gameMode === 'story') {
          this.openStoryDialogueModal(realmIdx);
        } else {
          this.openBattleRoom();
        }
        this.saveProgress();
      };
    }

    const bossBtn = document.getElementById('btn-map-boss-dungeon');
    if (bossBtn) {
      bossBtn.onclick = () => {
        this.state.chapterIdx = realmIdx;
        this.state.room = 5;
        this.state.roomBranch = null;
        document.getElementById('scene-map-portal').classList.add('hidden');
        this.openBattleRoom();
        this.saveProgress();
      };
    }
  }

  // =========================================================
  // STORY MODE DIALOGUE MODAL (Gezgin Şövalye Sir Elden)
  // =========================================================
  openStoryDialogueModal(chapterIdx = this.state.chapterIdx) {
    const overlay = document.getElementById('scene-story-dialogue');
    if (!overlay) return;

    const ch = CHAPTERS[chapterIdx] || CHAPTERS[0];
    const baseIdx = ((ch.baseArchId || 1) - 1) % STORY_CHAPTER_LORE.length;
    const loreData = STORY_CHAPTER_LORE[baseIdx] || STORY_CHAPTER_LORE[0];

    const realmTag = document.getElementById('story-realm-tag');
    if (realmTag) realmTag.textContent = `${ch.worldIcon || '🏰'} DÜNYA ${ch.worldId || 1} • BÖLÜM ${ch.id}/100`;

    const chapterTitle = document.getElementById('story-chapter-title');
    if (chapterTitle) chapterTitle.textContent = `Bölüm ${ch.id}: ${ch.name}`;

    const dialogueText = document.getElementById('story-dialogue-text');
    if (dialogueText) dialogueText.textContent = loreData.lore;

    this.state.selectedBlessing = this.state.selectedBlessing || 'guardian';
    const blessingBtns = document.querySelectorAll('.blessing-card-btn');
    blessingBtns.forEach((b) => {
      b.classList.toggle('active', b.getAttribute('data-blessing') === this.state.selectedBlessing);
    });

    overlay.classList.remove('hidden');
    window.sfx.playMenuClick();
  }

  applySelectedBlessing() {
    const b = this.state.selectedBlessing || 'guardian';
    const p = this.state.player;

    if (b === 'guardian') {
      p.shield = Math.min(50, p.shield + 10);
      p.maxHp += 4;
      p.hp = Math.min(p.maxHp, p.hp + 4);
      this.spawnFloatingText(235, 200, '🛡️ KUTSAL YEMİN (+10 KALKAN & +4 MAX HP)', '#3bb6ff', 16);
    } else if (b === 'warrior') {
      p.atkBonus += 2;
      this.state.gold += 15;
      this.spawnFloatingText(235, 200, '⚔️ ÇELİK & ONUR (+2 ATK & +15 ALTIN)', '#ff5252', 16);
    } else if (b === 'fate') {
      this.state.soulGems += 1;
      this.state.guaranteeSixes = true;
      this.spawnFloatingText(235, 200, '🎲 GEZGİNİN TALİHİ (+1 💎 & ZAR 6 GARANTİSİ)', '#ffd54f', 16);
    }

    this.saveProgress();
    this.updateAllUI();
  }

  // =========================================================
  // LEVEL UP, SHOP & GAME OVER MODALS
  // =========================================================
  showLevelUpModal() {
    return new Promise((resolve) => {
      const overlay = document.getElementById('modal-overlay');
      const title = document.getElementById('modal-title');
      const sub = document.getElementById('modal-subtitle');
      const content = document.getElementById('modal-content');
      const closeBtn = document.getElementById('modal-close-btn');

      title.textContent = `🎉 SEVİYE ATLADIN! (Lv.${this.state.level})`;
      sub.textContent = 'Şövalyen için kalıcı bir uzmanlık seç:';
      closeBtn.classList.add('hidden');

      const perks = [
        {
          icon: '⚔️',
          title: 'Keskin Çelik (+2 Saldırı & +1 Çarpışma)',
          desc: 'Kılıcını evrimleştirir, Attack +2 fazla vurur ve çarpışma zarlarına +1 eklenir.',
          apply: () => {
            this.state.player.atkBonus += 2;
            this.state.player.clashBonus += 1;
          }
        },
        {
          icon: '⚡',
          title: 'Kadim Rün Ustası (+3 Rün Gücü & +6 Kalkan)',
          desc: 'Rün Yıldırımı kartın +3 fazla vurur ve +6 Mavi Kalkan kazanırsın.',
          apply: () => {
            this.state.player.runeBonus += 3;
            this.state.player.shield = Math.min(50, this.state.player.shield + 6);
          }
        },
        {
          icon: '❤️',
          title: 'Zırhlı Dayanıklılık (+8 Maks Can, +2 İksir & Tam Şifa)',
          desc: 'Maksimum canın +8 artar, Heal +2 güçlenir ve tamamen iyileşirsin.',
          apply: () => {
            this.state.player.maxHp += 8;
            this.state.player.healBonus += 2;
            this.state.player.hp = this.state.player.maxHp;
          }
        }
      ];

      content.innerHTML = '';
      perks.forEach((perk) => {
        const row = document.createElement('div');
        row.className = 'shop-item';
        row.innerHTML = `
          <div class="shop-item-info">
            <div class="shop-item-icon">${perk.icon}</div>
            <div>
              <div class="shop-item-title">${perk.title}</div>
              <div class="shop-item-desc">${perk.desc}</div>
            </div>
          </div>
          <button class="shop-buy-btn">SEÇ</button>
        `;
        row.querySelector('button').addEventListener('click', () => {
          perk.apply();
          closeBtn.classList.remove('hidden');
          overlay.classList.add('hidden');
          this.saveProgress();
          this.updateAllUI();
          resolve();
        });
        content.appendChild(row);
      });

      overlay.classList.remove('hidden');
    });
  }

  openShopModal() {
    if (this.state.busy) return;
    const overlay = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    const sub = document.getElementById('modal-subtitle');
    const content = document.getElementById('modal-content');
    const closeBtn = document.getElementById('modal-close-btn');

    title.textContent = `🛒 ZİNDAN TÜCCARI (${this.state.gold} Gold)`;
    sub.textContent = 'Altınlarınla kılıcını evrimleştir veya sol slota yeni Tılsım kuşan:';
    closeBtn.classList.remove('hidden');
    closeBtn.textContent = 'Savaşa Dön';

    const items = [
      {
        icon: '💎',
        title: 'Kese Dolusu Ruh Taşı (+5💎)',
        desc: 'Play Store Elmas Paketi (500 Altınla takas et veya zindanda kullan!)',
        cost: 80,
        currency: 'gold',
        action: () => {
          this.state.soulGems += 5;
          this.showAchievementToast({ icon: '💎', name: '+5 Ruh Taşı!', rewardText: 'Marketten satın alındı.' });
        }
      },
      {
        icon: '🐺',
        title: 'Yoldaş: Gölge Ruh Kurdu (Fenrir)',
        desc: 'Üst Çarpışma zarlarına +1 Bonus & +2 Kanama hasarı! (+1 Saldırı Gücü)',
        cost: 2,
        currency: 'gems',
        petId: 'pet_wolf'
      },
      {
        icon: '🦉',
        title: 'Yoldaş: Kadim Rün Baykuşu (Aether)',
        desc: 'Her tur başında +3 Mavi Kalkan ve +2 Rün Gücü sağlar!',
        cost: 3,
        currency: 'gems',
        petId: 'pet_owl'
      },
      {
        icon: '🦅',
        title: 'Yoldaş: Mitik Anka Kuşu (Sol)',
        desc: 'Her tur başında +3 Can yeniler, saldırıda +4 Kutsal Ateş vurur!',
        cost: 5,
        currency: 'gems',
        petId: 'pet_phoenix'
      },
      {
        icon: '🗡️',
        title: 'Kılıç & Rün Evrimi (+1 Saldırı & +1 Rün)',
        desc: `Mevcut: ${this.getWeaponTier().name} (ATK +${this.state.player.atkBonus}, Rün +${this.state.player.runeBonus})`,
        cost: 12,
        action: () => {
          this.state.player.atkBonus += 1;
          this.state.player.runeBonus += 1;
        }
      },
      {
        icon: '🛡️',
        title: 'Mavi Kalkan İksiri (+14 Mavi Kalkan & +8 Can)',
        desc: 'Anında +14 Mavi Kalkan ve +8 Can kazandırır.',
        cost: 8,
        action: () => {
          this.state.player.shield = Math.min(50, this.state.player.shield + 14);
          this.state.player.hp = Math.min(this.state.player.maxHp, this.state.player.hp + 8);
        }
      },
      {
        icon: '🛡️',
        title: 'Tılsım: Rün Kalkanı',
        desc: RELICS.buckler.desc,
        cost: 15,
        relicId: 'buckler'
      },
      {
        icon: '💍',
        title: 'Tılsım: Vampir Yüzüğü',
        desc: RELICS.vampire.desc,
        cost: 18,
        relicId: 'vampire'
      },
      {
        icon: '🔮',
        title: 'Tılsım: Simya Küresi',
        desc: RELICS.alchemist.desc,
        cost: 20,
        relicId: 'alchemist'
      }
    ];

    content.innerHTML = '';
    items.forEach((item) => {
      const isOwnedRelic = item.relicId && this.state.player.ownedRelics.includes(item.relicId);
      const isEquippedRelic = item.relicId && this.state.player.relicId === item.relicId;
      const isOwnedPet = item.petId && (this.state.ownedPets || []).includes(item.petId);
      const isEquippedPet = item.petId && (this.state.equippedPet || 'pet_dragon') === item.petId;

      const row = document.createElement('div');
      row.className = 'shop-item';

      let btnText = `${item.cost} ${item.currency === 'gems' ? '💎' : 'Gold'}`;
      let disabled = item.currency === 'gems' ? (this.state.soulGems < item.cost) : (this.state.gold < item.cost);

      if (isEquippedRelic || isEquippedPet) {
        btnText = 'KUŞANILDI';
        disabled = true;
      } else if (isOwnedRelic || isOwnedPet) {
        btnText = 'KUŞAN';
        disabled = false;
      }

      row.innerHTML = `
        <div class="shop-item-info">
          <div class="shop-item-icon">${item.icon}</div>
          <div>
            <div class="shop-item-title">${item.title}</div>
            <div class="shop-item-desc">${item.desc}</div>
          </div>
        </div>
        <button class="shop-buy-btn" ${disabled ? 'disabled' : ''}>${btnText}</button>
      `;

      row.querySelector('button').addEventListener('click', () => {
        if (item.petId) {
          if (!isOwnedPet) {
            if (this.state.soulGems < item.cost) return;
            this.state.soulGems -= item.cost;
            if (!Array.isArray(this.state.ownedPets)) this.state.ownedPets = ['pet_dragon'];
            this.state.ownedPets.push(item.petId);
          }
          this.equipPetCompanion(item.petId);
        } else if (item.relicId) {
          if (!isOwnedRelic) {
            if (this.state.gold < item.cost) return;
            this.state.gold -= item.cost;
            this.state.player.ownedRelics.push(item.relicId);
          }
          this.state.player.relicId = item.relicId;
        } else {
          if (item.currency === 'gems') {
            if (this.state.soulGems < item.cost) return;
            this.state.soulGems -= item.cost;
          } else {
            if (this.state.gold < item.cost) return;
            this.state.gold -= item.cost;
          }
          item.action();
        }
        window.sfx.playCoin();
        this.saveProgress();
        this.updateAllUI();
        this.openShopModal();
      });

      content.appendChild(row);
    });

    overlay.classList.remove('hidden');
  }

  handlePlayerDefeated() {
    const overlay = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    const sub = document.getElementById('modal-subtitle');
    const content = document.getElementById('modal-content');
    const closeBtn = document.getElementById('modal-close-btn');

    const wasPvp = this.state.activeBattleType === 'pvp';
    const wasTower = this.state.activeBattleType === 'tower';
    const wasRaid = this.state.activeBattleType === 'raid';
    this.state.activeBattleType = 'campaign';
    this.state.activePvpRival = null;

    if (wasPvp) {
      this.state.trophies = Math.max(0, (this.state.trophies || 100) - 8);
      title.textContent = '⚔️ PVP DÜELLO KAYBEDİLDİ';
      sub.textContent = 'Rakip şövalye bu düelloyu kazandı (-8🏆 Kupa). Ekipmanlarını Demircide +Basarak güçlendir!';
    } else if (wasRaid) {
      this.state.trophies = (this.state.trophies || 100) + 15;
      this.state.gold += 35;
      title.textContent = '🐉 KLAN BASKINI TAMAMLANDI';
      sub.textContent = `Dünya Ejderi Ignis-Rex'e verdiğin tüm hasar kaydedildi! (+15🏆 Kupa & +35💰 Katılım Ödülü)`;
    } else if (wasTower) {
      title.textContent = `🗼 KULE KAT ${this.state.towerFloor} SEVİYESİNDE DÜŞTÜN`;
      sub.textContent = `En Yüksek Kule Rekorun: Kat ${this.state.bestTowerFloor || 1}.`;
    } else {
      const ch = this.getCurrentChapter();
      title.textContent = '💀 ŞÖVALYE DÜŞTÜ';
      sub.textContent = `Bölüm ${ch.id} (${ch.name}) • Oda ${this.state.room} seviyesinde düştün.`;
    }

    content.innerHTML = `
      <div class="shop-item">
        <div class="shop-item-info">
          <div class="shop-item-icon">🏆</div>
          <div>
            <div class="shop-item-title">Seviye: Lv.${this.state.level} • Kupa: ${this.state.trophies || 100}🏆</div>
            <div class="shop-item-desc">Tüm gelişimin, eşyaların ve altınların korundu!</div>
          </div>
        </div>
      </div>
    `;

    closeBtn.classList.remove('hidden');
    closeBtn.textContent = (wasPvp || wasTower || wasRaid) ? 'Online Arenaya Dön' : 'Bu Bölümü Tekrar Başlat';
    closeBtn.onclick = () => {
      overlay.classList.add('hidden');
      closeBtn.onclick = () => overlay.classList.add('hidden');
      this.state.player.hp = this.state.player.maxHp;
      this.state.player.shield = 12;
      this.state.room = 1;
      this.spawnEnemyForCurrentRoom();
      this.startNewPlayerTurn();
      this.saveProgress();
      if (wasPvp || wasTower || wasRaid) {
        this.showArena('game');
      }
    };
    overlay.classList.remove('hidden');
  }

  // =========================================================
  // DOM & STEPPER UPDATES
  // =========================================================
  updateClashDOM() {
    const c = this.state.clash;
    document.getElementById('clash-player-total').textContent = c.playerTotal;
    document.getElementById('clash-enemy-raw').textContent = c.enemyRaw;

    const modEl = document.getElementById('clash-enemy-mod');
    if (c.enemyMod === 0) {
      modEl.textContent = '';
    } else {
      modEl.textContent = c.enemyMod > 0 ? `+${c.enemyMod}` : `${c.enemyMod}`;
    }

    const statusEl = document.getElementById('clash-status-text');
    statusEl.textContent = c.statusText;
    statusEl.className = `clash-status ${c.statusType}`;
  }

  updateAllUI() {
    const ch = this.getCurrentChapter();
    const p = this.state.player;
    const e = this.state.enemy;
    const wTier = this.getWeaponTier();

    this.updateClashDOM();

    // Compact Top Header (Never overflows!)
    const lvBadge = document.getElementById('player-level-badge');
    if (lvBadge) lvBadge.textContent = `Lv.${this.state.level}`;

    if (this.state.activeBattleType === 'pvp' && this.state.activePvpRival) {
      document.getElementById('floor-badge').textContent = `🌐 PVP • ${this.state.trophies || 100}🏆`;
      document.getElementById('chapter-name-badge').textContent = `VS ${this.state.activePvpRival.nick}`;
    } else if (this.state.activeBattleType === 'raid') {
      document.getElementById('floor-badge').textContent = `🐉 KLAN BOSS • ${this.state.worldBossHp ?? 2500} HP`;
      document.getElementById('chapter-name-badge').textContent = `Dünya Ejderi Ignis-Rex`;
    } else if (this.state.activeBattleType === 'tower') {
      document.getElementById('floor-badge').textContent = `🗼 KULE KAT ${this.state.towerFloor || 1}`;
      document.getElementById('chapter-name-badge').textContent = `Sonsuz Kan Kulesi`;
    } else {
      document.getElementById('floor-badge').textContent = `${ch.worldIcon || '🗺️'} D${ch.worldId || 1}•B${ch.id}•${this.state.room}/5`;
      document.getElementById('chapter-name-badge').textContent = `${ch.name} ▾`;
    }

    // Weapon Tier Badge
    const wBadge = document.getElementById('weapon-tier-badge');
    if (wBadge) wBadge.textContent = wTier.name;

    // 5-Node Room Stepper
    const stepperEl = document.getElementById('room-stepper');
    stepperEl.innerHTML = '';
    ROOM_TYPES.forEach((rt) => {
      const node = document.createElement('div');
      let cls = 'step-node';
      if (rt.room < this.state.room) cls += ' done';
      else if (rt.room === this.state.room) cls += ' active';
      node.className = cls;
      node.title = `Oda ${rt.room}: ${rt.label}`;
      node.textContent = rt.icon;
      stepperEl.appendChild(node);
    });

    // Dual-Enemy HP & Tactical Box Synchronization
    const enemies = this.state.enemies && this.state.enemies.length > 0
      ? this.state.enemies
      : (e ? [e] : []);
    const targetIdx = this.state.targetEnemyIdx || 0;

    [0, 1].forEach((idx) => {
      const box = document.getElementById(`enemy-box-${idx}`);
      if (!box) return;

      const en = enemies[idx];
      if (!en) {
        box.classList.add('hidden');
        return;
      }

      box.classList.remove('hidden');
      box.classList.toggle('active', idx === targetIdx);

      const titleEl = document.getElementById(`enemy-title-label-${idx}`);
      if (titleEl) titleEl.textContent = en.name;

      const fillEl = document.getElementById(`enemy-hp-fill-${idx}`);
      const textEl = document.getElementById(`enemy-hp-text-${idx}`);
      const ePct = Math.max(0, Math.min(100, (en.hp / en.maxHp) * 100));
      if (fillEl) fillEl.style.width = `${ePct}%`;
      if (textEl) textEl.textContent = `${en.hp}/${en.maxHp}`;

      const effMod = en.clashMod - (en.weakenClash || 0);
      const modStr = effMod >= 0 ? `+${effMod}` : `${effMod}`;
      const intentEl = document.getElementById(`enemy-intent-pill-${idx}`);
      if (intentEl) intentEl.textContent = `${en.trait} • Z: ${modStr}`;

      const statusRow = document.getElementById(`enemy-status-row-${idx}`);
      if (statusRow) {
        statusRow.innerHTML = '';
        if (en.bleed > 0) {
          const bTag = document.createElement('span');
          bTag.className = 'status-tag';
          bTag.textContent = `🩸 ${en.bleed}`;
          statusRow.appendChild(bTag);
        }
        if (en.weakenClash > 0) {
          const wTag = document.createElement('span');
          wTag.className = 'status-tag weaken';
          wTag.textContent = `⚡ -${en.weakenClash}`;
          statusRow.appendChild(wTag);
        }
      }
    });

    // Player HP & Blue Shield Bar
    const pPct = Math.max(0, Math.min(100, (p.hp / p.maxHp) * 100));
    document.getElementById('player-hp-fill').style.width = `${pPct}%`;
    document.getElementById('player-hp-text').textContent = `${p.hp}/${p.maxHp}`;

    const shieldSec = document.getElementById('player-shield-section');
    const shieldTxt = document.getElementById('player-shield-text');
    if (p.shield > 0) {
      shieldSec.style.width = '76px';
      shieldSec.style.opacity = '1';
      shieldTxt.textContent = `+${p.shield}`;
    } else {
      shieldSec.style.width = '46px';
      shieldSec.style.opacity = '0.45';
      shieldTxt.textContent = `+0`;
    }

    // Left Relic Slot, Ultimate Rage Meter & Gold
    const relic = RELICS[p.relicId] || RELICS.whetstone;
    document.getElementById('relic-icon').textContent = relic.icon;
    document.getElementById('relic-badge').textContent = p.relicUsedThisTurn ? '✓' : relic.badge;
    document.getElementById('relic-name').textContent = relic.name;
    document.getElementById('gold-counter').textContent = `${this.state.gold} Gold`;

    const ultBtn = document.getElementById('btn-ultimate-rage');
    const ultFill = document.getElementById('ult-fill-bar');
    const ultText = document.getElementById('ult-text');
    const curRage = Math.max(0, Math.min(100, this.state.rage || 0));
    const isUltReady = curRage >= 100;
    if (ultFill) ultFill.style.width = `${curRage}%`;
    if (ultText) {
      ultText.textContent = isUltReady ? '🔥 HAZIR!' : `🔥 ÖFKE %${curRage}`;
    }
    if (ultBtn) {
      ultBtn.classList.toggle('ult-ready', isUltReady);
      ultBtn.disabled = !isUltReady;
    }

    // Bottom XP Bar
    const xpPct = Math.max(0, Math.min(100, (this.state.xp / this.state.xpToNext) * 100));
    document.getElementById('xp-bar-fill').style.width = `${xpPct}%`;
    document.getElementById('xp-bar-text').textContent =
      `Lv.${this.state.level} (${this.state.xp}/${this.state.xpToNext} XP)`;

    // Soul Gem & Online Trophy Badges
    const topSouls = document.getElementById('header-souls-badge');
    if (topSouls) topSouls.textContent = `${this.state.soulGems}💎`;
    const topTrophies = document.getElementById('header-trophies-badge');
    if (topTrophies) topTrophies.textContent = `${this.state.trophies || 100}🏆`;
    const menuArenaBadge = document.getElementById('menu-arena-badge');
    if (menuArenaBadge) menuArenaBadge.textContent = `${this.state.trophies || 100}🏆`;
    const menuSouls = document.getElementById('menu-soul-gem-count');
    if (menuSouls) menuSouls.textContent = `💎 ${this.state.soulGems}`;
    const menuTreeBadge = document.getElementById('menu-tree-badge');
    if (menuTreeBadge) menuTreeBadge.textContent = `${this.state.soulGems}💎`;
    const treeDisplay = document.getElementById('tree-souls-display');
    if (treeDisplay) treeDisplay.textContent = `💎 ${this.state.soulGems}`;

    this.syncMainMenuDOM();
    this.updateCoachBanner();

    // Reroll Button Dynamic Cost Tag
    const rerollBtn = document.getElementById('btn-reroll');
    if (rerollBtn) {
      const cost = this.hasTalent('r1') ? '1G' : '2G';
      rerollBtn.innerHTML = `🎲<span class="cost-tag">${cost}</span>`;
    }

    // Toggle Battle vs Non-combat Scene UI
    const enemyContainer = document.querySelector('.enemy-hp-container');
    const turnHint = document.getElementById('turn-hint');
    const clashPanel = document.querySelector('.top-clash-panel');
    if (this.state.currentScene === 'battle') {
      if (enemyContainer && enemyContainer.style) enemyContainer.style.display = 'block';
      if (turnHint && turnHint.style) turnHint.style.display = 'block';
      if (clashPanel && clashPanel.style) clashPanel.style.opacity = '1';
    } else {
      if (enemyContainer && enemyContainer.style) enemyContainer.style.display = 'none';
      if (turnHint && turnHint.style) turnHint.style.display = 'none';
      if (clashPanel && clashPanel.style) clashPanel.style.opacity = '0.4';
    }

    this.updateActionCardPreviews();
    this.renderCrownChestWidget();
    this.updateRetentionBadges();
    this.renderArenaChestSlots();
    this.updateSoundtrackBanner();
  }

  // =========================================================
  // CANVAS DUNGEON SCENE RENDER LOOP
  // =========================================================
  loop(timestamp) {
    const dt = 0.016;
    this.anim.time += dt;
    this.renderScene(dt);
    requestAnimationFrame((ts) => this.loop(ts));
  }

  renderScene(dt) {
    const ctx = this.ctx;
    const W = this.canvas.width;
    const H = this.canvas.height;
    const ch = this.getCurrentChapter();

    ctx.save();

    if (this.anim.shakeTime > 0) {
      this.anim.shakeTime -= dt * 1000;
      const sx = (Math.random() - 0.5) * 2 * this.anim.shakeMag;
      const sy = (Math.random() - 0.5) * 2 * this.anim.shakeMag;
      ctx.translate(sx, sy);
    }

    // 1. Draw Chapter Stage Background or Room Scene Background
    let bgImg = this.images[ch.bgKey] || this.images.stage1;
    if (this.state.currentScene === 'shrine' && this.images.scene_shrine) {
      bgImg = this.images.scene_shrine;
    } else if (this.state.currentScene === 'campfire' && this.images.scene_campfire) {
      bgImg = this.images.scene_campfire;
    } else if (this.state.currentScene === 'chest' && this.images.scene_chest) {
      bgImg = this.images.scene_chest;
    }

    if (bgImg && bgImg.complete && bgImg.naturalWidth > 0) {
      ctx.drawImage(bgImg, 0, 0, W, H);
    } else {
      ctx.fillStyle = '#0c1014';
      ctx.fillRect(0, 0, W, H);
    }

    // Apply World-Specific Atmospheric Biome Tint (Worlds 6-10)
    if (ch.bgTint && this.state.currentScene === 'battle') {
      ctx.save();
      ctx.fillStyle = ch.bgTint;
      ctx.fillRect(0, 0, W, H);
      ctx.restore();
    }

    // 2. Special Scene Visual Atmospheres
    if (this.state.currentScene === 'shrine') {
      const pulse = 0.5 + 0.5 * Math.sin(this.anim.time * 4);
      ctx.save();
      ctx.strokeStyle = `rgba(160, 90, 255, ${0.4 + pulse * 0.4})`;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(W / 2, 280, 50 + pulse * 8, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    } else if (this.state.currentScene === 'campfire') {
      const fireFlicker = 0.8 + 0.2 * Math.sin(this.anim.time * 9);
      const fg = ctx.createRadialGradient(235, 300, 5, 235, 300, 90 * fireFlicker);
      fg.addColorStop(0, 'rgba(255, 160, 40, 0.45)');
      fg.addColorStop(0.5, 'rgba(255, 80, 20, 0.2)');
      fg.addColorStop(1, 'rgba(255, 50, 0, 0)');
      ctx.fillStyle = fg;
      ctx.beginPath();
      ctx.arc(235, 300, 90 * fireFlicker, 0, Math.PI * 2);
      ctx.fill();
    } else if (this.state.currentScene === 'chest') {
      const chestGlow = 0.7 + 0.3 * Math.sin(this.anim.time * 3);
      const cg = ctx.createRadialGradient(235, 270, 10, 235, 270, 80 * chestGlow);
      cg.addColorStop(0, 'rgba(255, 215, 60, 0.45)');
      cg.addColorStop(0.6, 'rgba(255, 175, 30, 0.15)');
      cg.addColorStop(1, 'rgba(255, 150, 0, 0)');
      ctx.fillStyle = cg;
      ctx.beginPath();
      ctx.arc(235, 270, 80 * chestGlow, 0, Math.PI * 2);
      ctx.fill();
    }

    // 3. Dynamic Torch Glows (During Battle)
    if (this.state.currentScene === 'battle') {
      const [tr, tg, tb] = ch.torchColor;
      this.anim.torches.forEach((t, idx) => {
        const flicker = 0.82 + 0.18 * Math.sin(this.anim.time * 8.5 + idx * 1.9);
        const rad = t.r * flicker;
        const g = ctx.createRadialGradient(t.x, t.y, 2, t.x, t.y, rad);
        g.addColorStop(0, `rgba(${tr}, ${tg}, ${tb}, 0.36)`);
        g.addColorStop(0.5, `rgba(${tr}, ${tg}, ${tb}, 0.14)`);
        g.addColorStop(1, `rgba(${tr}, ${tg}, ${tb}, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(t.x, t.y, rad, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // 4. Draw Enemy / Boss Sprite (Dual Enemies or Single Combatant)
    if (this.state.currentScene === 'battle') {
      const enemies = this.state.enemies && this.state.enemies.length > 0
        ? this.state.enemies
        : (this.state.enemy ? [this.state.enemy] : []);

      if (enemies.length === 2) {
        // Render 2 enemies side-by-side!
        enemies.forEach((e, idx) => {
          if (e.hp <= 0 && this.anim.enemyAlpha <= 0) return;
          const enemyImg = this.images[e.spriteKey] || this.images.viper;
          if (enemyImg && enemyImg.complete && enemyImg.naturalWidth > 0) {
            ctx.save();
            const isTarget = this.state.targetEnemyIdx === idx;
            const alpha = e.hp <= 0 ? 0.25 : (isTarget ? 1.0 : 0.72);
            ctx.globalAlpha = alpha * this.anim.enemyAlpha;

            const bobY = Math.sin(this.anim.time * 3.2 + idx * 1.7) * 3.0;
            const scaleW = 152;
            const scaleH = 155;
            const ex = (idx === 0 ? 38 : 246) + this.anim.enemyOffsetX;
            const ey = (idx === 0 ? 166 : 146) + bobY + this.anim.enemyOffsetY;

            if (this.anim.enemyHitFlash > 0 && isTarget) {
              ctx.filter = `brightness(${1 + this.anim.enemyHitFlash * 2.2}) saturate(1.5)`;
            }

            ctx.drawImage(enemyImg, ex, ey, scaleW, scaleH);

            // Draw floating animated target crosshair above targeted enemy!
            if (isTarget && e.hp > 0) {
              ctx.fillStyle = '#ffd54f';
              ctx.font = 'bold 15px -apple-system, sans-serif';
              ctx.textAlign = 'center';
              const targetBob = Math.sin(this.anim.time * 5.0) * 3;
              ctx.fillText('🎯', ex + scaleW / 2, ey - 6 + targetBob);
            }

            ctx.restore();
          }
        });

        if (this.anim.enemyHitFlash > 0) {
          this.anim.enemyHitFlash = Math.max(0, this.anim.enemyHitFlash - dt * 5);
        }
      } else if (enemies.length === 1) {
        // Single enemy or Boss centered
        const e = enemies[0];
        const enemyImg = this.images[e.spriteKey] || this.images.viper;
        if (enemyImg && enemyImg.complete && enemyImg.naturalWidth > 0 && this.anim.enemyAlpha > 0) {
          ctx.save();
          ctx.globalAlpha = this.anim.enemyAlpha;

          const isBoss = Boolean(e.isBoss);
          const bobY = Math.sin(this.anim.time * 3.2) * 3.5;
          const scaleW = isBoss ? 204 : 180;
          const scaleH = isBoss ? 198 : 175;
          const ex = (W - scaleW) / 2 + this.anim.enemyOffsetX;
          const ey = (isBoss ? 142 : 160) + bobY + this.anim.enemyOffsetY;

          if (this.anim.enemyHitFlash > 0) {
            this.anim.enemyHitFlash = Math.max(0, this.anim.enemyHitFlash - dt * 5);
            ctx.filter = `brightness(${1 + this.anim.enemyHitFlash * 2.2}) saturate(1.5)`;
          }

          ctx.drawImage(enemyImg, ex, ey, scaleW, scaleH);
          ctx.restore();
        }
      }
    }

    // 4. Draw Arcane Lightning Bolt
    if (this.anim.lightningAlpha > 0) {
      this.drawArcaneLightning(ctx);
      this.anim.lightningAlpha = Math.max(0, this.anim.lightningAlpha - dt * 2.2);
    }

    // 5. Draw Foreground Hero Knight Sprite with Custom Equipped Armor, Aura, Helmet & Pet Companion!
    const knightImg = this.images.knight;
    if (knightImg && knightImg.complete && knightImg.naturalWidth > 0) {
      ctx.save();
      const breathY = Math.sin(this.anim.time * 2.4) * 2.0;
      const kx = 65 + this.anim.knightOffsetX;
      const ky = 215 + breathY + this.anim.knightOffsetY;

      const eqHelm = this.getEquippedItem('helm');
      const eqArmor = this.getEquippedItem('armor');
      const eqCape = this.getEquippedItem('cape');
      const eqPet = this.getEquippedPet();

      // Draw Equipped Cape / Aura Glow behind Hero
      if (eqCape && eqCape.auraColor) {
        const auraPulse = 0.85 + 0.15 * Math.sin(this.anim.time * 4.2);
        const ag = ctx.createRadialGradient(kx + 132, ky + 125, 10, kx + 132, ky + 125, 105 * auraPulse);
        ag.addColorStop(0, eqCape.auraColor);
        ag.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = ag;
        ctx.beginPath();
        ctx.arc(kx + 132, ky + 125, 105 * auraPulse, 0, Math.PI * 2);
        ctx.fill();
      }

      if (this.anim.knightHealGlow > 0) {
        this.anim.knightHealGlow = Math.max(0, this.anim.knightHealGlow - dt * 2.2);
        ctx.shadowColor = '#2fe662';
        ctx.shadowBlur = 18 * this.anim.knightHealGlow;
      } else if (this.anim.knightShieldGlow > 0) {
        this.anim.knightShieldGlow = Math.max(0, this.anim.knightShieldGlow - dt * 2.2);
        ctx.shadowColor = '#3bb6ff';
        ctx.shadowBlur = 18 * this.anim.knightShieldGlow;
      }

      if (eqArmor && eqArmor.skinFilter && eqArmor.skinFilter !== 'none') {
        ctx.filter = eqArmor.skinFilter;
      }

      ctx.drawImage(knightImg, kx, ky, 265, 229);
      ctx.filter = 'none';

      // Draw Special Boss Helmet / Crown Emblem above Knight's Head if non-starter helm equipped
      if (eqHelm && eqHelm.id !== 'helm_iron') {
        ctx.font = 'bold 20px -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
        ctx.shadowBlur = 6;
        ctx.fillText(eqHelm.icon, kx + 131, ky + 28);
      }

      // Draw Active Pet Companion hovering loyally next to Knight's left shoulder with glowing aura!
      if (eqPet) {
        const petBob = Math.sin(this.anim.time * 4.6) * 6.5;
        const petWingPulse = 1.0 + 0.12 * Math.sin(this.anim.time * 8.0);
        const px = kx + 16;
        const py = ky + 54 + petBob;

        ctx.save();
        // Dynamic radial aura glow per pet rarity/element
        const auraColor = eqPet.combatEffect === 'fire_breath' ? 'rgba(239, 68, 68, 0.45)' :
                         (eqPet.combatEffect === 'wolf_bite' ? 'rgba(168, 85, 247, 0.45)' :
                         (eqPet.combatEffect === 'arcane_ward' ? 'rgba(56, 189, 248, 0.45)' : 'rgba(234, 179, 8, 0.55)'));

        const auraGrad = ctx.createRadialGradient(px, py - 4, 3, px, py - 4, 24 * petWingPulse);
        auraGrad.addColorStop(0, auraColor);
        auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = auraGrad;
        ctx.beginPath();
        ctx.arc(px, py - 4, 24 * petWingPulse, 0, Math.PI * 2);
        ctx.fill();

        // Orbiting rune ring
        ctx.beginPath();
        ctx.arc(px, py - 4, 18 * petWingPulse, 0, Math.PI * 2);
        ctx.lineWidth = 1.8;
        ctx.strokeStyle = auraColor;
        const petImg = this.images[eqPet.spriteKey || eqPet.id];
        if (petImg && petImg.complete && petImg.naturalWidth > 0) {
          ctx.drawImage(petImg, px - 30, py - 32, 60, 60);
        } else {
          ctx.font = 'bold 24px -apple-system, sans-serif';
          ctx.textAlign = 'center';
          ctx.shadowColor = '#000';
          ctx.shadowBlur = 8;
          ctx.fillText(eqPet.icon, px, py + 3);
        }
        ctx.restore();
      }

      ctx.restore();
    }

    // 6. Draw Evolved Sword Slash Arc
    if (this.anim.slashAlpha > 0) {
      this.drawSwordSlashArc(ctx);
      this.anim.slashAlpha = Math.max(0, this.anim.slashAlpha - dt * 1.4);
    }

    // 7. Ambient Biome Weather Particles
    this.renderBiomeWeather(ctx, dt, ch);

    // 8. Combat Hit Particles
    for (let i = this.anim.particles.length - 1; i >= 0; i--) {
      const pt = this.anim.particles[i];
      pt.x += pt.vx * dt;
      pt.y += pt.vy * dt;
      pt.vy += 120 * dt;
      pt.life -= dt;

      if (pt.life <= 0) {
        this.anim.particles.splice(i, 1);
        continue;
      }

      ctx.fillStyle = pt.color;
      ctx.globalAlpha = Math.max(0, pt.life / pt.maxLife);
      ctx.fillRect(pt.x, pt.y, pt.size, pt.size);
    }
    ctx.globalAlpha = 1;

    // 9. Floating Combat Text
    for (let i = this.anim.floatingTexts.length - 1; i >= 0; i--) {
      const ft = this.anim.floatingTexts[i];
      ft.y -= 28 * dt;
      ft.life -= dt;

      if (ft.life <= 0) {
        this.anim.floatingTexts.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.font = `900 ${ft.size}px -apple-system, BlinkMacSystemFont, sans-serif`;
      ctx.textAlign = 'center';
      ctx.globalAlpha = Math.min(1, ft.life * 2.2);
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#080a0d';
      ctx.strokeText(ft.text, ft.x, ft.y);
      ctx.fillStyle = ft.color;
      ctx.fillText(ft.text, ft.x, ft.y);
      ctx.restore();
    }

    ctx.restore();
  }

  renderBiomeWeather(ctx, dt, ch) {
    ctx.save();
    ctx.fillStyle = ch.weatherColor;
    const isSnow = ch.weatherType === 'snow';

    this.anim.weatherParticles.forEach((wp) => {
      if (isSnow) {
        wp.y += 45 * dt;
        wp.x += (Math.sin(this.anim.time * 2 + wp.phase) * 22 - 12) * dt;
        if (wp.y > 444) wp.y = -4;
        if (wp.x < 0) wp.x = 470;
      } else {
        wp.y += wp.vy * dt;
        wp.x += Math.sin(this.anim.time * 2.5 + wp.phase) * 14 * dt;
        if (wp.y < 0) wp.y = 444;
      }
      ctx.fillRect(wp.x, wp.y, wp.size, wp.size);
    });
    ctx.restore();
  }

  drawSwordSlashArc(ctx) {
    ctx.save();
    ctx.globalAlpha = this.anim.slashAlpha;

    ctx.beginPath();
    ctx.moveTo(272, 304);
    ctx.quadraticCurveTo(342, 376, 266, 442);
    ctx.quadraticCurveTo(318, 376, 265, 312);
    ctx.closePath();

    const grad = ctx.createLinearGradient(268, 304, 325, 442);
    if (this.anim.slashColor === 'violet') {
      grad.addColorStop(0, 'rgba(180, 75, 255, 0.9)');
      grad.addColorStop(0.5, 'rgba(245, 215, 255, 0.98)');
      grad.addColorStop(1, 'rgba(145, 55, 235, 0.9)');
    } else if (this.anim.slashColor === 'crimson') {
      grad.addColorStop(0, 'rgba(220, 25, 35, 0.9)');
      grad.addColorStop(0.5, 'rgba(255, 180, 170, 0.98)');
      grad.addColorStop(1, 'rgba(175, 15, 25, 0.9)');
    } else if (this.anim.slashColor === 'frost') {
      grad.addColorStop(0, 'rgba(55, 185, 255, 0.9)');
      grad.addColorStop(0.5, 'rgba(225, 250, 255, 0.98)');
      grad.addColorStop(1, 'rgba(35, 140, 235, 0.9)');
    } else if (this.anim.slashColor === 'magma') {
      grad.addColorStop(0, 'rgba(255, 120, 20, 0.95)');
      grad.addColorStop(0.5, 'rgba(255, 245, 130, 0.98)');
      grad.addColorStop(1, 'rgba(225, 45, 15, 0.95)');
    } else {
      grad.addColorStop(0, 'rgba(180, 120, 85, 0.85)');
      grad.addColorStop(0.5, 'rgba(235, 230, 225, 0.95)');
      grad.addColorStop(1, 'rgba(210, 165, 130, 0.9)');
    }
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(274, 308);
    ctx.quadraticCurveTo(334, 376, 268, 440);
    ctx.stroke();

    ctx.restore();
  }

  drawArcaneLightning(ctx) {
    ctx.save();
    ctx.globalAlpha = this.anim.lightningAlpha;
    ctx.strokeStyle = '#e5a8ff';
    ctx.lineWidth = 4;
    ctx.shadowColor = '#b742ff';
    ctx.shadowBlur = 14;

    ctx.beginPath();
    ctx.moveTo(235, 20);
    ctx.lineTo(215, 95);
    ctx.lineTo(250, 135);
    ctx.lineTo(222, 195);
    ctx.lineTo(240, 250);
    ctx.stroke();

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
  }

  randDie() {
    return Math.floor(Math.random() * 6) + 1;
  }

  delay(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  triggerShake(mag, durationMs) {
    this.anim.shakeMag = mag;
    this.anim.shakeTime = durationMs;
  }

  spawnFloatingText(x, y, text, color = '#fff', size = 18) {
    this.anim.floatingTexts.push({
      x,
      y,
      text,
      color,
      size,
      life: 1.15
    });
  }

  spawnParticles(x, y, color, count = 14) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 30 + Math.random() * 110;
      this.anim.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 40,
        size: 3 + Math.floor(Math.random() * 3),
        color,
        life: 0.45 + Math.random() * 0.35,
        maxLife: 0.8
      });
    }
  }

  // =========================================================
  // RETENTION SYSTEM: 7-DAY LOGIN, IDLE PATROL, CROWN CHEST, TROPHY ROAD
  // =========================================================

  getTodayDateString() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  getDailyRewardsConfig() {
    return [
      { day: 1, type: 'gold', amount: 80, icon: '🪙', label: '80 Altın', desc: 'Kahraman Çantası' },
      { day: 2, type: 'gems', amount: 3, icon: '💎', label: '3 Ruh Taşı', desc: 'Rün Kristalleri' },
      { day: 3, type: 'chest', chestId: 'silver', icon: '⚔️', label: 'Gümüş Sandık', desc: 'Ekipman Sandığı' },
      { day: 4, type: 'gold', amount: 200, icon: '🪙', label: '200 Altın', desc: 'Zindan Hazinesi' },
      { day: 5, type: 'gems', amount: 8, icon: '💎', label: '8 Ruh Taşı', desc: 'Saf Ruh Cevheri' },
      { day: 6, type: 'chest', chestId: 'gold', icon: '👑', label: 'Altın Sandık', desc: 'Kraliyet Sandığı' },
      { day: 7, type: 'magic_pet', chestId: 'magic', petId: 'pet_phoenix', icon: '🔥', label: 'Büyülü Sandık & Sol Phoenix', desc: 'Efsanevi Yoldaş & Sandık' }
    ];
  }

  checkDailyLoginStatus() {
    const today = this.getTodayDateString();
    if (!this.state.lastLoginDateStr) {
      this.state.dailyLoginDay = 1;
      this.state.dailyClaimedToday = false;
      this.state.lastLoginDateStr = today;
      this.saveProgress();
      setTimeout(() => this.openDailyLoginModal(), 500);
      return;
    }

    if (this.state.lastLoginDateStr !== today) {
      this.state.dailyLoginDay = ((this.state.dailyLoginDay || 1) % 7) + 1;
      this.state.dailyClaimedToday = false;
      this.state.lastLoginDateStr = today;
      this.saveProgress();
      setTimeout(() => this.openDailyLoginModal(), 500);
    }
  }

  openDailyLoginModal() {
    const modal = document.getElementById('daily-login-modal');
    if (!modal) return;
    const grid = document.getElementById('daily-calendar-grid');
    const rewards = this.getDailyRewardsConfig();
    const curDay = this.state.dailyLoginDay || 1;
    const claimedToday = Boolean(this.state.dailyClaimedToday);

    const streakBadge = document.getElementById('daily-streak-badge');
    if (streakBadge) {
      streakBadge.textContent = `📅 Günlük Giriş: ${curDay}. Gün (7 Günlük Takvim)`;
    }

    if (grid) {
      grid.innerHTML = rewards.map((r) => {
        let status = 'locked';
        let statusBadge = '🔒 Kilitli';
        let isSpecial = r.day === 7 ? 'special-day' : '';

        if (r.day < curDay || (r.day === curDay && claimedToday)) {
          status = 'claimed';
          statusBadge = '✓ Alındı';
        } else if (r.day === curDay && !claimedToday) {
          status = 'ready';
          statusBadge = '🎁 HAZIR!';
        }

        return `
          <div class="daily-day-card ${status} ${isSpecial}">
            <div class="daily-day-num">GÜN ${r.day}</div>
            <div class="daily-day-icon">${r.icon}</div>
            <div class="daily-day-name">${r.label}</div>
            <div class="daily-status-tag">${statusBadge}</div>
          </div>
        `;
      }).join('');
    }

    const claimBtn = document.getElementById('btn-claim-daily-reward');
    if (claimBtn) {
      if (!claimedToday) {
        claimBtn.disabled = false;
        claimBtn.innerHTML = `🎁 ${curDay}. Gün Ödülünü Al ➔`;
        claimBtn.style.opacity = '1';
        claimBtn.style.cursor = 'pointer';
      } else {
        claimBtn.disabled = true;
        claimBtn.innerHTML = `✅ Bugün Alındı (Yarın Tekrar Gel)`;
        claimBtn.style.opacity = '0.6';
        claimBtn.style.cursor = 'not-allowed';
      }
    }

    modal.classList.remove('hidden');
    window.sfx.playMenuClick();
  }

  claimDailyLoginReward() {
    if (this.state.dailyClaimedToday) return;
    const curDay = this.state.dailyLoginDay || 1;
    const rewards = this.getDailyRewardsConfig();
    const reward = rewards.find((r) => r.day === curDay) || rewards[0];

    this.state.dailyClaimedToday = true;

    if (reward.type === 'gold') {
      this.state.gold += reward.amount;
      this.spawnFloatingText(235, 140, `+${reward.amount} ALTIN! 🪙`, '#fbbf24', 22);
    } else if (reward.type === 'gems') {
      this.state.soulGems += reward.amount;
      this.spawnFloatingText(235, 140, `+${reward.amount} RUH TAŞI! 💎`, '#38bdf8', 22);
    } else if (reward.type === 'chest') {
      this.awardSpecificChestDrop(reward.chestId);
    } else if (reward.type === 'magic_pet') {
      this.awardSpecificChestDrop('magic');
      if (!Array.isArray(this.state.unlockedPets)) {
        this.state.unlockedPets = ['pet_dragon'];
      }
      if (!this.state.unlockedPets.includes('pet_phoenix')) {
        this.state.unlockedPets.push('pet_phoenix');
        this.spawnFloatingText(235, 170, `🔥 Efsanevi Sol Phoenix Açıldı!`, '#f97316', 20);
      }
    }

    window.sfx.playFanfare();
    this.saveProgress();
    this.updateAllUI();
    this.openDailyLoginModal();
  }

  calculateOfflinePatrolLoot(forceSeconds = null) {
    const now = Date.now();
    const lastActive = this.state.lastActiveTimestamp || now;
    let diffSeconds = forceSeconds !== null ? forceSeconds : Math.max(0, Math.floor((now - lastActive) / 1000));

    // Cap at 8 hours (28800s)
    const maxSeconds = 8 * 3600;
    const effectiveSeconds = Math.min(diffSeconds, maxSeconds);
    const minutes = Math.floor(effectiveSeconds / 60);

    const level = this.state.level || 1;
    const pet = this.getEquippedPet();
    const petBonusMultiplier = pet ? 1.25 : 1.0;

    // Rate: ~120 gold/hr base, scaled with level and pet
    const goldEarned = Math.floor((effectiveSeconds / 30) * (1 + level * 0.05) * petBonusMultiplier);
    // Rate: ~80 XP/hr
    const xpEarned = Math.floor((effectiveSeconds / 45) * (1 + level * 0.03));
    // Rate: 1 gem per 2 hours (max 4 gems)
    const gemsEarned = Math.min(4, Math.floor(effectiveSeconds / 7200));

    return {
      seconds: effectiveSeconds,
      minutes,
      gold: goldEarned,
      xp: xpEarned,
      gems: gemsEarned,
      petName: pet?.name || 'Yoldaş',
      petIcon: pet?.icon || '🐉',
      petSprite: pet?.spriteKey ? `assets/${pet.spriteKey}.png` : 'assets/pet_dragon.png'
    };
  }

  checkOfflinePatrolLoot() {
    const loot = this.calculateOfflinePatrolLoot();
    if (loot.seconds >= 180 && (loot.gold > 0 || loot.xp > 0)) {
      this.showIdlePatrolModal(loot);
    }
  }

  openIdlePatrolModalManual() {
    const loot = this.calculateOfflinePatrolLoot();
    this.showIdlePatrolModal(loot);
  }

  showIdlePatrolModal(loot) {
    const modal = document.getElementById('idle-patrol-modal');
    if (!modal) return;

    const timeLabel = document.getElementById('idle-time-label');
    if (timeLabel) {
      const hrs = Math.floor(loot.minutes / 60);
      const mins = loot.minutes % 60;
      timeLabel.textContent = hrs > 0 ? `${hrs} saat ${mins} dk` : `${mins} dk`;
    }

    const goldLabel = document.getElementById('idle-gold-label');
    if (goldLabel) goldLabel.textContent = `+${loot.gold}💰 Altın`;

    const xpLabel = document.getElementById('idle-xp-label');
    if (xpLabel) xpLabel.textContent = `+${loot.xp}⚡ XP`;

    const gemsLabel = document.getElementById('idle-gems-label');
    if (gemsLabel) gemsLabel.textContent = `+${loot.gems}💎 Taş`;

    const petNote = document.getElementById('idle-pet-bonus-note');
    if (petNote) {
      petNote.textContent = `${loot.petIcon} Aktif Yoldaşın (${loot.petName}) +%25 Ekstra Altın kazandırdı!`;
    }

    const petImg = document.getElementById('idle-patrol-pet-img');
    if (petImg) petImg.src = loot.petSprite;

    this.pendingIdleLoot = loot;
    modal.classList.remove('hidden');
    window.sfx.playMenuClick();
  }

  claimIdlePatrolLoot() {
    const loot = this.pendingIdleLoot || this.calculateOfflinePatrolLoot();
    if (loot.gold > 0) this.state.gold += loot.gold;
    if (loot.xp > 0) this.gainXP(loot.xp);
    if (loot.gems > 0) this.state.soulGems += loot.gems;

    this.state.lastActiveTimestamp = Date.now();
    this.pendingIdleLoot = null;

    const modal = document.getElementById('idle-patrol-modal');
    if (modal) modal.classList.add('hidden');

    this.spawnFloatingText(235, 140, `+${loot.gold}💰 +${loot.xp}XP GANİMET TOPLANDI!`, '#10b981', 20);
    window.sfx.playCoin();
    this.saveProgress();
    this.updateAllUI();
  }

  awardCrown(amount = 1) {
    this.state.crownCount = (this.state.crownCount || 0) + amount;
    if (this.state.crownCount >= 5) {
      this.state.crownChestReady = true;
      this.spawnFloatingText(235, 140, '👑 KRALİYET TAÇ SANDIĞI HAZIR!', '#ffd54f', 22);
      window.sfx.playFanfare();
    } else {
      this.spawnFloatingText(235, 160, `+${amount} TAÇ 👑 (${this.state.crownCount}/5)`, '#f59e0b', 18);
    }
    this.saveProgress();
    this.renderCrownChestWidget();
  }

  renderCrownChestWidget() {
    const crowns = Math.min(5, this.state.crownCount || 0);
    const ready = this.state.crownCount >= 5 || Boolean(this.state.crownChestReady);

    const ratioLabel = document.getElementById('crown-ratio-label');
    if (ratioLabel) ratioLabel.textContent = `${this.state.crownCount || 0}/5`;

    const slotsContainer = document.getElementById('crown-slots-container');
    if (slotsContainer) {
      slotsContainer.innerHTML = [0, 1, 2, 3, 4].map((i) => {
        const isFilled = i < crowns;
        return `<span class="crown-slot-pill ${isFilled ? 'filled' : ''}">${isFilled ? '👑' : '⚪'}</span>`;
      }).join('');
    }

    const openBtn = document.getElementById('btn-open-crown-chest');
    if (openBtn) {
      if (ready) {
        openBtn.disabled = false;
        openBtn.textContent = 'AÇILABİLİR!';
        openBtn.classList.add('ready');
      } else {
        openBtn.disabled = true;
        openBtn.textContent = `${crowns}/5`;
        openBtn.classList.remove('ready');
      }
    }
  }

  openCrownChest() {
    if ((this.state.crownCount || 0) < 5 && !this.state.crownChestReady) {
      const need = 5 - (this.state.crownCount || 0);
      this.spawnFloatingText(235, 200, `${need} Taç Daha Gerekli! (Savaş Kazan)`, '#ffbf3c', 16);
      return;
    }

    this.state.crownCount = Math.max(0, (this.state.crownCount || 5) - 5);
    this.state.crownChestReady = this.state.crownCount >= 5;

    const goldEarned = 160 + Math.floor(Math.random() * 90);
    const gemsEarned = 5 + Math.floor(Math.random() * 4);

    this.state.gold += goldEarned;
    this.state.soulGems += gemsEarned;

    const bossGear = this.unlockRandomBossGearDrop();

    this.playClashChestOpeningSequence({
      id: 'c_crown',
      name: 'Kraliyet Taç Sandığı',
      tier: 'gold',
      gold: goldEarned,
      gems: gemsEarned,
      gear: bossGear,
      spriteSrc: 'assets/chest_gold.png'
    }, null);

    this.saveProgress();
    this.updateAllUI();
  }

  updateRetentionBadges() {
    const dailyBadge = document.getElementById('daily-login-badge');
    if (dailyBadge) {
      dailyBadge.classList.toggle('hidden', Boolean(this.state.dailyClaimedToday));
    }

    const patrolBadge = document.getElementById('idle-patrol-badge');
    if (patrolBadge) {
      const loot = this.calculateOfflinePatrolLoot();
      patrolBadge.classList.toggle('hidden', loot.seconds < 120);
    }
  }

  getTrophyRoadMilestones() {
    return [
      { id: 'tr_50', trophies: 50, icon: '🪙', name: '100 Altın', type: 'gold', amount: 100 },
      { id: 'tr_120', trophies: 120, icon: '💎', name: '5 Ruh Taşı', type: 'gems', amount: 5 },
      { id: 'tr_250', trophies: 250, icon: '⚔️', name: 'Gümüş Sandık', type: 'chest', chestId: 'silver' },
      { id: 'tr_400', trophies: 400, icon: '🪙', name: '300 Altın', type: 'gold', amount: 300 },
      { id: 'tr_550', trophies: 550, icon: '🐺', name: 'Gölge Kurdu Peti', type: 'pet', petId: 'pet_wolf' },
      { id: 'tr_700', trophies: 700, icon: '👑', name: 'Altın Sandık', type: 'chest', chestId: 'gold' },
      { id: 'tr_850', trophies: 850, icon: '💎', name: '15 Ruh Taşı', type: 'gems', amount: 15 },
      { id: 'tr_1000', trophies: 1000, icon: '🔮', name: 'Efsanevi Büyülü Sandık', type: 'chest', chestId: 'magic' }
    ];
  }

  renderTrophyRoad() {
    const scroll = document.getElementById('trophy-road-track-scroll');
    if (!scroll) return;

    const milestones = this.getTrophyRoadMilestones();
    const curTrophies = this.state.trophies || 100;
    const claimed = Array.isArray(this.state.claimedTrophyMilestones) ? this.state.claimedTrophyMilestones : [];

    scroll.innerHTML = milestones.map((m) => {
      const isClaimed = claimed.includes(m.id);
      const canClaim = !isClaimed && curTrophies >= m.trophies;

      let statusCls = 'locked';
      let btnLabel = `🔒 ${m.trophies}🏆`;
      let btnDisabled = true;

      if (isClaimed) {
        statusCls = 'claimed';
        btnLabel = '✓ Alındı';
        btnDisabled = true;
      } else if (canClaim) {
        statusCls = 'ready';
        btnLabel = '🎁 AL';
        btnDisabled = false;
      }

      return `
        <div class="trophy-milestone-card ${statusCls}">
          <div class="trophy-milestone-head">
            <span class="trophy-milestone-val">🏆 ${m.trophies}</span>
          </div>
          <div class="trophy-milestone-icon">${m.icon}</div>
          <div class="trophy-milestone-name">${m.name}</div>
          <button class="trophy-claim-btn ${canClaim ? 'can-claim' : ''}" data-mid="${m.id}" ${btnDisabled ? 'disabled' : ''}>
            ${btnLabel}
          </button>
        </div>
      `;
    }).join('');

    scroll.querySelectorAll('.trophy-claim-btn.can-claim').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const mid = e.currentTarget.getAttribute('data-mid');
        this.claimTrophyMilestone(mid);
      });
    });
  }

  claimTrophyMilestone(milestoneId) {
    if (!Array.isArray(this.state.claimedTrophyMilestones)) {
      this.state.claimedTrophyMilestones = [];
    }
    if (this.state.claimedTrophyMilestones.includes(milestoneId)) return;

    const milestones = this.getTrophyRoadMilestones();
    const m = milestones.find((x) => x.id === milestoneId);
    if (!m) return;

    const curTrophies = this.state.trophies || 100;
    if (curTrophies < m.trophies) return;

    this.state.claimedTrophyMilestones.push(milestoneId);

    if (m.type === 'gold') {
      this.state.gold += m.amount;
      this.spawnFloatingText(235, 140, `+${m.amount} ALTIN! 🪙`, '#fbbf24', 20);
    } else if (m.type === 'gems') {
      this.state.soulGems += m.amount;
      this.spawnFloatingText(235, 140, `+${m.amount} RUH TAŞI! 💎`, '#38bdf8', 20);
    } else if (m.type === 'chest') {
      this.awardSpecificChestDrop(m.chestId);
    } else if (m.type === 'pet') {
      if (!Array.isArray(this.state.unlockedPets)) this.state.unlockedPets = ['pet_dragon'];
      if (!this.state.unlockedPets.includes(m.petId)) this.state.unlockedPets.push(m.petId);
      this.spawnFloatingText(235, 140, `🐺 ${m.name} AÇILDI!`, '#a855f7', 22);
    }

    window.sfx.playFanfare();
    this.saveProgress();
    this.renderTrophyRoad();
    this.updateAllUI();
  }

  awardSpecificChestDrop(tier = 'silver') {
    if (!Array.isArray(this.state.chestSlots)) {
      this.state.chestSlots = [null, null, null, null];
    }
    const emptyIdx = this.state.chestSlots.findIndex((s) => s === null);
    const chestPool = {
      wood: { id: 'c_wood', name: 'Tahta Sandık', icon: '🪵', tier: 'wood', unlockTimeMs: 5000, unlockStart: 0, ready: false, gold: 35, gems: 1, spriteSrc: 'assets/chest_wood.png' },
      silver: { id: 'c_silver', name: 'Gümüş Sandık', icon: '🥈', tier: 'silver', unlockTimeMs: 12000, unlockStart: 0, ready: false, gold: 75, gems: 2, spriteSrc: 'assets/chest_silver.png' },
      gold: { id: 'c_gold', name: 'Altın Sandık', icon: '🥇', tier: 'gold', unlockTimeMs: 20000, unlockStart: 0, ready: false, gold: 150, gems: 4, spriteSrc: 'assets/chest_gold.png' },
      magic: { id: 'c_magic', name: 'Büyülü Sandık', icon: '🔮', tier: 'magic', unlockTimeMs: 30000, unlockStart: 0, ready: false, gold: 300, gems: 8, spriteSrc: 'assets/chest_magic.png' }
    };
    const chosen = chestPool[tier] || chestPool.silver;

    if (emptyIdx === -1) {
      this.playClashChestOpeningSequence({ ...chosen, ready: true }, null);
      return;
    }

    this.state.chestSlots[emptyIdx] = { ...chosen, unlockStart: Date.now() };
    this.spawnFloatingText(235, 130, `🎁 YENİ SANDIK: ${chosen.icon} ${chosen.name}!`, '#fbbf24', 16);
    this.saveProgress();
    this.renderArenaChestSlots();
  }

  setupWebDebugDock() {
    const container = document.getElementById('web-debug-container');
    const toggleBtn = document.getElementById('btn-toggle-debug');
    const panel = document.getElementById('web-debug-panel');

    // In production (Play Store APK / GitHub Pages), hide debug tools unless ?debug=1 or localhost
    const isLocalTest = typeof window !== 'undefined' && (
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.search.includes('debug=1')
    );
    if (container && !isLocalTest) {
      container.classList.add('hidden');
      // Secret 7-tap developer unlock on game title
      let devTapCount = 0;
      const gameTitleEl = document.querySelector('.main-game-title');
      if (gameTitleEl) {
        gameTitleEl.addEventListener('click', () => {
          devTapCount += 1;
          if (devTapCount >= 7) {
            container.classList.remove('hidden');
            this.spawnFloatingText(235, 160, '🛠️ Geliştirici Konsolu Açıldı!', '#38bdf8', 18);
          }
        });
      }
    }

    if (toggleBtn && panel) {
      toggleBtn.addEventListener('click', () => {
        panel.classList.toggle('hidden');
        window.sfx.playMenuClick();
      });
    }

    const wireDbg = (btnId, callback) => {
      const btn = document.getElementById(btnId);
      if (btn) {
        btn.addEventListener('click', () => {
          callback();
          this.saveProgress();
          this.updateAllUI();
          window.sfx.playCoin();
        });
      }
    };

    wireDbg('dbg-add-gold', () => {
      this.state.gold += 1000;
      this.spawnFloatingText(235, 180, '+1,000 Altın 🪙', '#fbbf24', 20);
    });

    wireDbg('dbg-add-gems', () => {
      this.state.soulGems += 50;
      this.spawnFloatingText(235, 180, '+50 Ruh Taşı 💎', '#38bdf8', 20);
    });

    wireDbg('dbg-add-trophies', () => {
      this.state.trophies = (this.state.trophies || 100) + 100;
      this.spawnFloatingText(235, 180, '+100 Kupa 🏆', '#f59e0b', 20);
      this.renderArena();
    });

    wireDbg('dbg-add-crown', () => {
      this.awardCrown(1);
    });

    wireDbg('dbg-drop-chest', () => {
      this.awardBattleChestDrop();
      this.renderArenaChestSlots();
    });

    wireDbg('dbg-next-day', () => {
      this.state.dailyLoginDay = ((this.state.dailyLoginDay || 1) % 7) + 1;
      this.state.dailyClaimedToday = false;
      this.spawnFloatingText(235, 180, `Gün İlerletildi: ${this.state.dailyLoginDay}. Gün 📅`, '#8b5cf6', 20);
      this.openDailyLoginModal();
    });

    wireDbg('dbg-sim-afk', () => {
      const loot = this.calculateOfflinePatrolLoot(3 * 3600);
      this.showIdlePatrolModal(loot);
    });

    wireDbg('dbg-heal', () => {
      this.state.player.hp = this.state.player.maxHp;
      this.spawnFloatingText(120, 260, 'FULL CAN! 💚', '#22c55e', 22);
    });

    wireDbg('dbg-win-room', () => {
      if (this.state.enemies && this.state.enemies.length > 0) {
        this.state.enemies.forEach((e) => { e.hp = 0; });
      }
      if (this.state.enemy) this.state.enemy.hp = 0;
      this.handleEnemyDefeated();
    });

    wireDbg('dbg-reset', () => {
      this.state.dailyClaimedToday = false;
      this.state.lastActiveTimestamp = Date.now();
      this.state.crownCount = 0;
      this.state.crownChestReady = false;
      this.spawnFloatingText(235, 180, 'Süreçler Sıfırlandı 🔄', '#94a3b8', 18);
    });
  }

  // =========================================================
  // LOCALIZATION (I18N) & SOUNDTRACK TICKER CONTROLLER
  // =========================================================

  t(key) {
    const dict = I18N[this.state.lang] || I18N.tr;
    return dict[key] || key;
  }

  toggleLanguage() {
    this.state.lang = this.state.lang === 'tr' ? 'en' : 'tr';
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('crypt_clash_lang', this.state.lang);
    }
    const label = document.getElementById('current-lang-label');
    if (label) label.textContent = this.state.lang.toUpperCase();
    this.applyLanguageToDOM();
    this.updateSoundtrackBanner();
    this.renderArenaChestSlots();
    this.saveProgress();
    const msg = this.state.lang === 'tr' ? 'Dil: Türkçe 🇹🇷' : 'Language: English 🇬🇧';
    this.spawnFloatingText(235, 180, msg, '#60a5fa', 20);
    window.sfx.playMenuClick();
  }

  applyLanguageToDOM() {
    const isEn = this.state.lang === 'en';
    const dict = I18N[this.state.lang] || I18N.tr;

    const langLabel = document.getElementById('current-lang-label');
    if (langLabel) langLabel.textContent = this.state.lang.toUpperCase();

    const subEl = document.getElementById('main-game-sub');
    if (subEl) subEl.textContent = dict.gameSub;

    const storyBtn = document.getElementById('btn-mode-story');
    if (storyBtn) storyBtn.textContent = dict.storyMode;

    const classicBtn = document.getElementById('btn-mode-classic');
    if (classicBtn) classicBtn.textContent = dict.classicMode;

    const startBtn = document.getElementById('btn-start-expedition-cta');
    if (startBtn) startBtn.textContent = dict.startExpedition;

    const crownTitle = document.querySelector('.crown-chest-info strong');
    if (crownTitle) crownTitle.textContent = dict.crownChestTitle;
    const crownSub = document.getElementById('crown-chest-sub');
    if (crownSub) crownSub.textContent = dict.crownChestSub;

    const menuChestsLbl = document.getElementById('lbl-menu-chests');
    if (menuChestsLbl) menuChestsLbl.textContent = dict.chestSlotsTitle;
    const menuChestNote = document.getElementById('menu-chest-status-note');
    if (menuChestNote) menuChestNote.textContent = dict.chestSlotsSub;

    // Main CTA & Trio Feature Cards
    const mainCtaTitle = document.querySelector('#btn-menu-continue .btn-main-title');
    if (mainCtaTitle) mainCtaTitle.textContent = isEn ? 'EMBARK ON QUEST (100 FLOORS)' : 'MACERAYA ATIL (100 BÖLÜM)';
    const mainCtaSub = document.getElementById('menu-cta-sub');
    if (mainCtaSub) mainCtaSub.textContent = isEn ? 'Descend into the crypt, loot epic boss gear!' : 'Zindanın derinliklerine in, Bosslardan eşya düşür!';

    const invCardTitle = document.querySelector('#btn-menu-inventory .feat-info strong');
    if (invCardTitle) invCardTitle.textContent = isEn ? 'FORGE & PETS' : 'DEMİRCİ & PET';
    const invCardSub = document.querySelector('#btn-menu-inventory .feat-info span');
    if (invCardSub) invCardSub.textContent = isEn ? 'Gear, +Upgrade & Companions' : 'Envanter, +Basma & Yoldaş';

    const arenaCardTitle = document.querySelector('#btn-menu-arena .feat-info strong');
    if (arenaCardTitle) arenaCardTitle.textContent = 'ONLINE ARENA';
    const arenaCardSub = document.querySelector('#btn-menu-arena .feat-info span');
    if (arenaCardSub) arenaCardSub.textContent = isEn ? 'PvP Trophies & Blood Tower' : 'PvP Kupa & Sonsuz Kule';

    const questsCardTitle = document.querySelector('#btn-menu-quests .feat-info strong');
    if (questsCardTitle) questsCardTitle.textContent = isEn ? 'QUESTS & WHEEL' : 'BAŞARIM & ÇARK';
    const questsCardSub = document.querySelector('#btn-menu-quests .feat-info span');
    if (questsCardSub) questsCardSub.textContent = isEn ? 'Titles & Wheel of Fortune' : 'Unvanlar & Kader Çarkı';

    // Retention Pills
    const dailyBtnTitle = document.querySelector('#btn-menu-daily-login .ret-text strong');
    if (dailyBtnTitle) dailyBtnTitle.textContent = dict.dailyLoginTitle;
    const idleBtnTitle = document.querySelector('#btn-menu-idle-patrol .ret-text strong');
    if (idleBtnTitle) idleBtnTitle.textContent = dict.idlePatrolTitle;
    const idleBtnSub = document.getElementById('idle-patrol-status-label');
    if (idleBtnSub) idleBtnSub.textContent = dict.idlePatrolSub;

    // 4 Bento Navigation Cards
    const setBento = (id, title, sub) => {
      const tEl = document.querySelector(`#${id} .bento-title`);
      const sEl = document.querySelector(`#${id} .bento-sub`);
      if (tEl) tEl.textContent = title;
      if (sEl) sEl.textContent = sub;
    };
    setBento('btn-menu-tree', dict.skillTree, dict.skillTreeSub);
    setBento('btn-menu-chapters', dict.dungeonMap, dict.dungeonMapSub);
    setBento('btn-menu-shop', dict.dungeonShop, dict.dungeonShopSub);
    setBento('btn-menu-how-to-play', dict.howToPlay, dict.howToPlaySub);

    const bestiaryBtn = document.getElementById('btn-menu-bestiary');
    if (bestiaryBtn) bestiaryBtn.textContent = dict.bestiary;
    const installBtn = document.getElementById('btn-menu-install');
    if (installBtn) installBtn.textContent = dict.mobileInstall;
    const resetBtn = document.getElementById('btn-menu-reset');
    if (resetBtn) resetBtn.textContent = dict.resetProgress;

    const radarCancel = document.getElementById('btn-cancel-matchmaking');
    if (radarCancel) radarCancel.textContent = dict.cancel;
  }

  skipToNextTrack() {
    if (window.bgm) {
      if (!window.bgm.isPlaying) {
        window.bgm.start();
      }
      const nextT = window.bgm.nextTrack();
      this.updateSoundtrackBanner();
      const isEn = this.state.lang === 'en';
      const name = isEn ? nextT.name : nextT.nameTr;
      this.spawnFloatingText(235, 140, `🎵 ${name}`, '#c084fc', 20);
      window.sfx.playMenuClick();
    }
  }

  updateSoundtrackBanner() {
    const titleEl = document.getElementById('soundtrack-title');
    if (titleEl && window.bgm) {
      const tr = window.bgm.getCurrentTrack();
      const isEn = this.state.lang === 'en';
      titleEl.textContent = `🎵 ${isEn ? tr.name : tr.nameTr} (${tr.tempo} BPM)`;
    }
  }

  showSoundtrackToast(track) {
    this.updateSoundtrackBanner();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.game = new CryptClashGame();
});
