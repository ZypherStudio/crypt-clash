// Web Audio API Synthesizer for Dark Fantasy Pixel RPG Sound Effects
class SoundSystem {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  playMenuClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.05);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.05);
  }

  playDicePickup() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(580, now + 0.06);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.07);
  }

  playDiceRoll() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const clicks = [0, 0.055, 0.11, 0.17, 0.24];
    clicks.forEach((delay, idx) => {
      const now = this.ctx.currentTime + delay;
      const bufferSize = this.ctx.sampleRate * 0.035;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(900 + idx * 180 + Math.random() * 200, now);
      filter.Q.setValueAtTime(3.5, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.28, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.035);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
    });
  }

  playSwordSlash(isCrit = false) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const duration = isCrit ? 0.32 : 0.22;
    const bufferSize = Math.floor(this.ctx.sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      const t = i / bufferSize;
      data[i] = (Math.random() * 2 - 1) * Math.sin(t * Math.PI) * (1 - t * 0.5);
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1800, now);
    filter.frequency.exponentialRampToValueAtTime(380, now + duration);
    filter.Q.setValueAtTime(1.8, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    noise.start(now);

    const osc = this.ctx.createOscillator();
    const impactGain = this.ctx.createGain();
    osc.type = isCrit ? 'sawtooth' : 'sine';
    osc.frequency.setValueAtTime(isCrit ? 190 : 140, now + 0.06);
    osc.frequency.exponentialRampToValueAtTime(38, now + 0.26);

    impactGain.gain.setValueAtTime(0.38, now + 0.06);
    impactGain.gain.exponentialRampToValueAtTime(0.001, now + 0.27);

    osc.connect(impactGain);
    impactGain.connect(this.ctx.destination);
    osc.start(now + 0.06);
    osc.stop(now + 0.27);
  }

  playHeal() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const notes = [392.0, 493.88, 587.33, 783.99];
    notes.forEach((freq, i) => {
      const now = this.ctx.currentTime + i * 0.065;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.02, now + 0.22);

      gain.gain.setValueAtTime(0.16, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.24);
    });
  }

  playShieldBlock() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc2.type = 'triangle';
    osc.frequency.setValueAtTime(420, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.18);
    osc2.frequency.setValueAtTime(630, now);
    osc2.frequency.exponentialRampToValueAtTime(290, now + 0.18);

    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.19);

    osc.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc2.start(now);
    osc.stop(now + 0.19);
    osc2.stop(now + 0.19);
  }

  playEnemyHit() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(42, now + 0.22);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.23);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.23);
  }

  playClashVictory() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const notes = [440, 554.37, 659.25];
    notes.forEach((freq, idx) => {
      const now = this.ctx.currentTime + idx * 0.05;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    });
  }

  playCoin() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    [987.77, 1318.51].forEach((freq, idx) => {
      const now = this.ctx.currentTime + idx * 0.07;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.18);
    });
  }

  playLevelUp() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      const now = this.ctx.currentTime + idx * 0.09;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    });
  }

  playAnvil() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1420, now);
    osc.frequency.exponentialRampToValueAtTime(1180, now + 0.45);
    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.45);
  }

  playMagicChime() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const notes = [659.25, 783.99, 987.77, 1318.51, 1567.98];
    notes.forEach((freq, i) => {
      const now = this.ctx.currentTime + i * 0.06;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.38);
    });
  }

  playChestOpen() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Creak
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.linearRampToValueAtTime(320, now + 0.22);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.25);
    setTimeout(() => this.playCoin(), 180);
  }
}

// =========================================================
// MEDIEVAL FANTASY PROCEDURAL BACKGROUND MUSIC (BGM)
// Antique Lute Arpeggios, Folk Wooden Flute & Dungeon Drone
// =========================================================
class MedievalMusicEngine {
  constructor(soundSystem) {
    this.sound = soundSystem;
    this.enabled = typeof localStorage !== 'undefined' ? localStorage.getItem('crypt_clash_music') !== 'false' : true;
    this.isPlaying = false;
    this.step = 0;
    this.timer = null;
    this.masterGain = null;
    this.compressor = null;
    this.nextNoteTime = 0;

    // 3 Original Bespoke Soundtracks crafted exclusively for Crypt Clash
    this.tracks = [
      {
        id: 'tavern',
        name: 'Tavern of the Broken Crest',
        nameTr: 'Kırık Arma Hanı',
        tempo: 104,
        key: 'D Minor',
        scene: 'menu'
      },
      {
        id: 'crypt',
        name: 'Crypt of the Cursed Oath',
        nameTr: 'Lanetli Yemin Mahzeni',
        tempo: 116,
        key: 'A Minor',
        scene: 'battle'
      },
      {
        id: 'arena',
        name: 'Colosseum of Fallen Crowns',
        nameTr: 'Düşen Taçlar Arenası',
        tempo: 128,
        key: 'E Minor',
        scene: 'arena'
      }
    ];

    this.currentTrackIndex = 0;
    this.currentTrack = this.tracks[0];
    this.tempo = this.currentTrack.tempo;
  }

  init() {
    this.sound.init();
    if (!this.sound.ctx) return;
    if (!this.masterGain) {
      const ctx = this.sound.ctx;
      // Master limiter compressor to ensure zero clipping on mobile
      this.compressor = ctx.createDynamicsCompressor();
      this.compressor.threshold.setValueAtTime(-14, ctx.currentTime);
      this.compressor.knee.setValueAtTime(30, ctx.currentTime);
      this.compressor.ratio.setValueAtTime(10, ctx.currentTime);
      this.compressor.attack.setValueAtTime(0.003, ctx.currentTime);
      this.compressor.release.setValueAtTime(0.2, ctx.currentTime);

      this.masterGain = ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.enabled ? 0.24 : 0, ctx.currentTime);
      this.masterGain.connect(this.compressor);
      this.compressor.connect(ctx.destination);
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('crypt_clash_music', this.enabled ? 'true' : 'false');
    }
    if (!this.enabled) {
      if (this.masterGain && this.sound.ctx) {
        this.masterGain.gain.setTargetAtTime(0, this.sound.ctx.currentTime, 0.2);
      }
      this.stop();
    } else {
      this.start();
      if (this.masterGain && this.sound.ctx) {
        this.masterGain.gain.setTargetAtTime(0.24, this.sound.ctx.currentTime, 0.2);
      }
    }
    return this.enabled;
  }

  start() {
    if (!this.enabled || this.isPlaying) return;
    this.init();
    if (!this.sound.ctx) return;
    this.isPlaying = true;
    this.step = 0;
    this.nextNoteTime = this.sound.ctx.currentTime + 0.05;
    this.scheduler();
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  setTrack(trackIdOrIndex) {
    let nextIdx = 0;
    if (typeof trackIdOrIndex === 'number') {
      nextIdx = (trackIdOrIndex % this.tracks.length + this.tracks.length) % this.tracks.length;
    } else {
      const found = this.tracks.findIndex((t) => t.id === trackIdOrIndex);
      if (found !== -1) nextIdx = found;
    }

    if (this.currentTrackIndex === nextIdx && this.isPlaying) return;
    this.currentTrackIndex = nextIdx;
    this.currentTrack = this.tracks[nextIdx];
    this.tempo = this.currentTrack.tempo;
    this.step = 0;

    if (window.game && window.game.showSoundtrackToast) {
      window.game.showSoundtrackToast(this.currentTrack);
    }
  }

  nextTrack() {
    this.setTrack(this.currentTrackIndex + 1);
    return this.currentTrack;
  }

  getCurrentTrack() {
    return this.currentTrack;
  }

  setSceneTrack(sceneName) {
    if (sceneName === 'arena' || sceneName === 'pvp' || sceneName === 'raid' || sceneName === 'tower') {
      this.setTrack('arena');
    } else if (sceneName === 'battle' || sceneName === 'shrine' || sceneName === 'campfire' || sceneName === 'chest') {
      this.setTrack('crypt');
    } else {
      this.setTrack('tavern');
    }
  }

  scheduler() {
    if (!this.isPlaying || !this.sound.ctx) return;
    const lookahead = 0.25;
    const secondsPer16th = 60.0 / (this.tempo * 4);

    while (this.nextNoteTime < this.sound.ctx.currentTime + lookahead) {
      this.scheduleStep(this.step, this.nextNoteTime);
      this.nextNoteTime += secondsPer16th;
      this.step = (this.step + 1) % 64; // 4 bars (64 16th-notes) loop
    }

    this.timer = setTimeout(() => this.scheduler(), 65);
  }

  // -------------------------------------------------------------
  // BESPOKE SYNTHESIZED INSTRUMENTS
  // -------------------------------------------------------------

  // 1. Plucked Antique Lute (Warm, organic medieval fingerpicking)
  playLutePluck(freq, time, duration = 0.45, velocity = 0.16) {
    if (!this.masterGain || !this.sound.ctx) return;
    const ctx = this.sound.ctx;
    const osc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2600, time);
    filter.frequency.exponentialRampToValueAtTime(360, time + duration);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(velocity, time + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  // 2. Gothic Harpsichord (Crisp metallic dual-string bite for dark dungeon crawls)
  playHarpsichord(freq, time, duration = 0.35, velocity = 0.14) {
    if (!this.masterGain || !this.sound.ctx) return;
    const ctx = this.sound.ctx;
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(freq, time);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 1.002, time); // Subtle detune for shimmer

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(2200, time);
    filter.Q.setValueAtTime(1.8, time);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(velocity, time + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + duration);
    osc2.stop(time + duration);
  }

  // 3. Wooden Penny Whistle / Flute (Expressive medieval melody with vibrato)
  playFluteNote(freq, time, duration = 0.65, velocity = 0.13) {
    if (!this.masterGain || !this.sound.ctx) return;
    const ctx = this.sound.ctx;
    const osc = ctx.createOscillator();
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    lfo.frequency.setValueAtTime(5.4, time);
    lfoGain.gain.setValueAtTime(freq * 0.015, time);
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq * 1.35, time);
    filter.Q.setValueAtTime(1.5, time);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(velocity, time + 0.06);
    gain.gain.setValueAtTime(velocity * 0.88, time + duration - 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    lfo.start(time);
    osc.stop(time + duration);
    lfo.stop(time + duration);
  }

  // 4. Regal Medieval Brass Horn Fanfare
  playBrassHorn(freq, time, duration = 0.5, velocity = 0.12) {
    if (!this.masterGain || !this.sound.ctx) return;
    const ctx = this.sound.ctx;
    const osc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(550, time);
    filter.frequency.exponentialRampToValueAtTime(2400, time + 0.08);
    filter.frequency.exponentialRampToValueAtTime(700, time + duration);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(velocity, time + 0.035);
    gain.gain.setValueAtTime(velocity * 0.9, time + duration - 0.06);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  // 5. Deep Castle Cello Drone & Sub-bass
  playDrone(freq, time, duration = 3.2, velocity = 0.09) {
    if (!this.masterGain || !this.sound.ctx) return;
    const ctx = this.sound.ctx;
    const osc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(170, time);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(velocity, time + 0.28);
    gain.gain.setValueAtTime(velocity * 0.9, time + duration - 0.28);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  // 6. Deep Epic War Drum Kick (Sub-bass procedural pitch sweep)
  playWarDrum(time, velocity = 0.22) {
    if (!this.masterGain || !this.sound.ctx) return;
    const ctx = this.sound.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(145, time);
    osc.frequency.exponentialRampToValueAtTime(36, time + 0.12);

    gain.gain.setValueAtTime(velocity, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.32);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.32);
  }

  // 7. Marching War Snare (Filtered noise transient)
  playWarSnare(time, velocity = 0.14) {
    if (!this.masterGain || !this.sound.ctx) return;
    const ctx = this.sound.ctx;
    const bufferSize = ctx.sampleRate * 0.12;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(800, time);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(velocity, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(time);
  }

  // -------------------------------------------------------------
  // MASTER COMPOSITION SEQUENCER (3 MOVEMENTS)
  // -------------------------------------------------------------
  scheduleStep(step, time) {
    const curTrackId = this.currentTrack.id;

    if (curTrackId === 'tavern') {
      this.sequenceTavern(step, time);
    } else if (curTrackId === 'crypt') {
      this.sequenceCrypt(step, time);
    } else if (curTrackId === 'arena') {
      this.sequenceArena(step, time);
    }
  }

  // MOVEMENT 1: "Tavern of the Broken Crest" (Warm, folk fantasy, 104 BPM, D Minor)
  sequenceTavern(step, time) {
    const chords = [
      [146.83, 220.0, 293.66, 349.23, 440.0],    // Dm: D3, A3, D4, F4, A4
      [130.81, 196.0, 261.63, 329.63, 392.0],    // C:  C3, G3, C4, E4, G4
      [116.54, 174.61, 233.08, 293.66, 349.23], // Bb: Bb2, F3, Bb3, D4, F4
      [110.0, 164.81, 220.0, 277.18, 329.63]     // A7: A2, E3, A3, C#4, E4
    ];

    const barIdx = Math.floor(step / 16);
    const stepInBar = step % 16;
    const curChord = chords[barIdx];

    if (stepInBar === 0) {
      this.playDrone(curChord[0] * 0.5, time, 3.2, 0.11);
    }

    const lutePatterns = [0, 2, 1, 3, 2, 4, 3, 1, 0, 2, 3, 4, 3, 2, 1, 2];
    const noteIdx = lutePatterns[stepInBar];
    const luteFreq = curChord[noteIdx % curChord.length];
    const isAccent = stepInBar === 0 || stepInBar === 8;
    this.playLutePluck(luteFreq, time, 0.42, isAccent ? 0.18 : 0.11);

    const fluteMelody = {
      0: 587.33,  // D5
      4: 523.25,  // C5
      8: 440.0,   // A4
      12: 493.88, // B4
      16: 523.25, // C5
      22: 440.0,  // A4
      26: 392.0,  // G4
      32: 466.16, // Bb4
      36: 440.0,  // A4
      40: 349.23, // F4
      44: 392.0,  // G4
      48: 440.0,  // A4
      54: 392.0,  // G4
      58: 329.63, // E4
      62: 293.66  // D4
    };

    if (fluteMelody[step]) {
      this.playFluteNote(fluteMelody[step], time, 0.72, 0.14);
    }
  }

  // MOVEMENT 2: "Crypt of the Cursed Oath" (Dark, tense, gothic crawl, 116 BPM, A Minor)
  sequenceCrypt(step, time) {
    const chords = [
      [110.0, 164.81, 220.0, 261.63, 329.63],   // Am: A2, E3, A3, C4, E4
      [87.31, 130.81, 174.61, 220.0, 261.63],   // F:  F2, C3, F3, A3, C4
      [146.83, 220.0, 293.66, 349.23, 440.0],   // Dm: D3, A3, D4, F4, A4
      [82.41, 123.47, 164.81, 207.65, 246.94]   // E7: E2, B2, E3, G#3, B3
    ];

    const barIdx = Math.floor(step / 16);
    const stepInBar = step % 16;
    const curChord = chords[barIdx];

    // Sub-bass Cello Drone
    if (stepInBar === 0) {
      this.playDrone(curChord[0], time, 2.8, 0.13);
    }

    // Gothic Harpsichord Arpeggio
    const harpPattern = [0, 2, 4, 3, 1, 3, 2, 4, 3, 1, 2, 4, 1, 3, 0, 2];
    const harpFreq = curChord[harpPattern[stepInBar] % curChord.length];
    this.playHarpsichord(harpFreq, time, 0.32, (stepInBar % 4 === 0) ? 0.15 : 0.09);

    // Ethereal Minor Flute
    const cryptFlute = {
      0: 440.0,   // A4
      6: 523.25,  // C5
      10: 659.25, // E5
      16: 698.46, // F5
      22: 659.25, // E5
      28: 523.25, // C5
      32: 587.33, // D5
      38: 523.25, // C5
      42: 440.0,  // A4
      48: 415.30, // G#4
      54: 493.88, // B4
      58: 440.0   // A4
    };

    if (cryptFlute[step]) {
      this.playFluteNote(cryptFlute[step], time, 0.65, 0.13);
    }

    // Subtle War Drum Pulsing on beats 0 and 8
    if (stepInBar === 0 || stepInBar === 8) {
      this.playWarDrum(time, 0.16);
    }
  }

  // MOVEMENT 3: "Colosseum of Fallen Crowns" (Epic, martial battle march, 128 BPM, E Minor)
  sequenceArena(step, time) {
    const chords = [
      [82.41, 123.47, 164.81, 196.0, 246.94],   // Em: E2, B2, E3, G3, B3
      [130.81, 196.0, 261.63, 329.63, 392.0],   // C:  C3, G3, C4, E4, G4
      [110.0, 164.81, 220.0, 261.63, 329.63],   // Am: A2, E3, A3, C4, E4
      [123.47, 185.0, 246.94, 311.13, 370.0]    // B7: B2, F#3, B3, D#4, F#4
    ];

    const barIdx = Math.floor(step / 16);
    const stepInBar = step % 16;
    const curChord = chords[barIdx];

    // Heavy War Drum Pulse (Kick on 0, 4, 8, 12; Snare on 4 and 12)
    if (stepInBar % 4 === 0) {
      this.playWarDrum(time, stepInBar === 0 ? 0.26 : 0.18);
    }
    if (stepInBar === 4 || stepInBar === 12) {
      this.playWarSnare(time, 0.13);
    }

    // Heavy Cello Drone
    if (stepInBar === 0) {
      this.playDrone(curChord[0], time, 2.5, 0.14);
    }

    // Driving Harpsichord / Lute Fast 16th Arpeggios
    const driveNote = curChord[stepInBar % curChord.length];
    this.playHarpsichord(driveNote * 2, time, 0.22, 0.11);

    // Heroic Brass Horn Stabs
    const brassStabs = {
      0: 329.63,  // E4
      4: 392.0,   // G4
      8: 493.88,  // B4
      16: 523.25, // C5
      20: 493.88, // B4
      24: 392.0,  // G4
      32: 440.0,  // A4
      36: 493.88, // B4
      40: 523.25, // C5
      48: 493.88, // B4
      52: 440.0,  // A4
      56: 370.0,  // F#4
      60: 329.63  // E4
    };

    if (brassStabs[step]) {
      this.playBrassHorn(brassStabs[step], time, 0.42, 0.15);
    }
  }
}

window.sfx = new SoundSystem();
window.bgm = new MedievalMusicEngine(window.sfx);

