/**
 * Cute sound effects synthesizer using Web Audio API
 * 100% client-side, zero external audio assets required.
 */

class SoundManager {
  private ctx: AudioContext | null = null;
  public isMuted: boolean = false;
  private ambientOscillators: { stop: () => void } | null = null;
  public isAmbientPlaying: boolean = false;

  constructor() {
    // Check saved preference
    const saved = localStorage.getItem('sofia_sound_muted');
    if (saved !== null) {
      this.isMuted = saved === 'true';
    }
  }

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    localStorage.setItem('sofia_sound_muted', String(this.isMuted));
    if (this.isMuted && this.isAmbientPlaying) {
      this.stopAmbientMusic();
    }
    return this.isMuted;
  }

  /**
   * Bubbly pop sound for buttons & clicks
   */
  public playPop() {
    if (this.isMuted) return;
    try {
      const ctx = this.initCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch {
      // Audio not permitted yet
    }
  }

  /**
   * Sweet magical chime when unlocking, completing, or revealing a surprise
   */
  public playChime() {
    if (this.isMuted) return;
    try {
      const ctx = this.initCtx();
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.07);

        const startTime = ctx.currentTime + idx * 0.07;
        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.linearRampToValueAtTime(0.12, startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.45);
      });
    } catch {
      // Ignore audio permission
    }
  }

  /**
   * Kitty purr simulation
   */
  public playPurr() {
    if (this.isMuted) return;
    try {
      const ctx = this.initCtx();
      const now = ctx.currentTime;

      // Low frequency vibration
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(55, now);

      // Low pass to soften
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(140, now);

      // Tremolo LFO for purring pulse
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(24, now); // 24 Hz purr rumble
      lfoGain.gain.setValueAtTime(0.08, now);

      lfo.connect(lfoGain);
      lfoGain.connect(gain.gain);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      lfo.start(now);
      osc.start(now);
      lfo.stop(now + 1.2);
      osc.stop(now + 1.2);
    } catch {
      // Ignore
    }
  }

  /**
   * Soft lofi warm melody synthesizer for cozy relaxation
   */
  public toggleAmbientMusic(callback?: (playing: boolean) => void) {
    if (this.isAmbientPlaying) {
      this.stopAmbientMusic();
      if (callback) callback(false);
      return false;
    } else {
      if (this.isMuted) this.toggleMute();
      this.startAmbientMusic();
      if (callback) callback(true);
      return true;
    }
  }

  private startAmbientMusic() {
    try {
      const ctx = this.initCtx();
      this.isAmbientPlaying = true;

      // Ambient chords (F major 7th / C major gentle dream)
      let isRunning = true;
      let step = 0;
      const chords = [
        [349.23, 440.0, 523.25, 659.25], // Fmaj7
        [261.63, 329.63, 392.0, 493.88], // Cmaj7
        [293.66, 369.99, 440.0, 554.37], // Dm9
        [329.63, 392.0, 493.88, 587.33], // Em7
      ];

      const playChord = () => {
        if (!isRunning || !this.isAmbientPlaying) return;
        const currentChord = chords[step % chords.length];
        step++;

        currentChord.forEach((freq) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const filter = ctx.createBiquadFilter();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(800, ctx.currentTime);

          const startTime = ctx.currentTime;
          gain.gain.setValueAtTime(0.001, startTime);
          gain.gain.linearRampToValueAtTime(0.03, startTime + 1.0);
          gain.gain.linearRampToValueAtTime(0.02, startTime + 2.5);
          gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 4.2);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);

          osc.start(startTime);
          osc.stop(startTime + 4.5);
        });

        if (isRunning) {
          timerId = window.setTimeout(playChord, 3800);
        }
      };

      let timerId = window.setTimeout(playChord, 200);

      this.ambientOscillators = {
        stop: () => {
          isRunning = false;
          window.clearTimeout(timerId);
        },
      };
    } catch {
      this.isAmbientPlaying = false;
    }
  }

  public stopAmbientMusic() {
    this.isAmbientPlaying = false;
    if (this.ambientOscillators) {
      this.ambientOscillators.stop();
      this.ambientOscillators = null;
    }
  }
}

export const sounds = new SoundManager();
