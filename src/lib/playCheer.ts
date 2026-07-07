/** Lightweight synthesized stadium cheer — no audio file needed. */
export function playCheerSound() {
  if (typeof window === "undefined") return;

  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();

    const master = ctx.createGain();
    master.gain.value = 0.18;
    master.connect(ctx.destination);

    const now = ctx.currentTime;

    for (let i = 0; i < 28; i++) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const start = now + i * 0.04;
      const freq = 180 + Math.random() * 520;

      osc.type = i % 3 === 0 ? "square" : "sawtooth";
      osc.frequency.setValueAtTime(freq, start);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.6, start + 0.18);

      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.35, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.22);

      osc.connect(gain);
      gain.connect(master);
      osc.start(start);
      osc.stop(start + 0.25);
    }

    const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.5, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * 0.4;

    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    const noiseGain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 900;

    noiseGain.gain.setValueAtTime(0.0001, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.25, now + 0.08);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(master);
    noise.start(now);
    noise.stop(now + 0.6);

    window.setTimeout(() => void ctx.close(), 900);
  } catch {
    /* audio blocked or unsupported */
  }
}
