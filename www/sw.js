const CACHE_NAME = 'crypt-clash-v12';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './game.js',
  './audio.js',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/apple-touch-icon.png',
  './assets/stage_1.png',
  './assets/stage_2.png',
  './assets/stage_3.png',
  './assets/stage_4.png',
  './assets/stage_5.png',
  './assets/scene_campfire.png',
  './assets/scene_shrine.png',
  './assets/scene_chest.png',
  './assets/hero_knight.png',
  './assets/hero_front.png',
  './assets/knight_back.png',
  './assets/hero_front_helm_unhelmed.png',
  './assets/hero_front_helm_iron.png',
  './assets/hero_front_helm_hydra.png',
  './assets/hero_front_helm_boneking.png',
  './assets/hero_front_helm_chimera.png',
  './assets/hero_front_helm_wyrm.png',
  './assets/hero_front_helm_azazel.png',
  './assets/hero_front_helm_eternal.png',
  './assets/card_attack.png',
  './assets/card_heal.png',
  './assets/card_rune.png',
  './assets/monster_viper.png',
  './assets/monster_drowned.png',
  './assets/monster_hydra_boss.png',
  './assets/monster_inquisitor.png',
  './assets/monster_gargoyle.png',
  './assets/monster_boneking_boss.png',
  './assets/monster_plague.png',
  './assets/monster_golem.png',
  './assets/monster_chimera_boss.png',
  './assets/monster_valkyrie.png',
  './assets/monster_wyrm_boss.png',
  './assets/monster_hellknight.png',
  './assets/monster_azazel_boss.png',
  './assets/enemy_skeleton.png',
  './assets/enemy_gorgon.png',
  './assets/pet_dragon.png',
  './assets/pet_wolf.png',
  './assets/pet_owl.png',
  './assets/pet_phoenix.png',
  './assets/chest_wood.png',
  './assets/chest_silver.png',
  './assets/chest_gold.png',
  './assets/chest_magic.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : null)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && event.request.method === 'GET') {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
        }
        return networkResponse;
      })
      .catch(() => caches.match(event.request))
  );
});
