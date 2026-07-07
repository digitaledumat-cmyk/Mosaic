export const WHEEL_SESSION_KEY = "mozaic-wc-wheel-dismissed";

export const WHEEL_PRIZES = [
  { id: "1month", color: "#1B7A3D", glow: "#4ADE80", promoCode: "CDM2026-1M", win: true },
  { id: "3months", color: "#14532D", glow: "#86EFAC", promoCode: "CDM2026-3M", win: true },
  { id: "6months", color: "#CA8A04", glow: "#FDE047", promoCode: "CDM2026-6M", win: true },
  { id: "12months", color: "#EAB308", glow: "#FEF08A", promoCode: "CDM2026-12M", win: true },
  { id: "activation", color: "#0891B2", glow: "#67E8F9", promoCode: "CDM2026-PRO", win: true },
  { id: "noLuck", color: "#374151", glow: "#9CA3AF", promoCode: null, win: false },
] as const;

export type WheelPrizeId = (typeof WHEEL_PRIZES)[number]["id"];

export function getSpinRotation(targetIndex: number, currentRotation: number): number {
  const segmentAngle = 360 / WHEEL_PRIZES.length;
  const fullSpins = 5 + Math.floor(Math.random() * 3);
  const segmentCenter = targetIndex * segmentAngle + segmentAngle / 2;
  const targetMod = (360 - segmentCenter) % 360;
  const currentMod = ((currentRotation % 360) + 360) % 360;
  let delta = targetMod - currentMod;
  if (delta <= 0) delta += 360;
  return currentRotation + fullSpins * 360 + delta;
}

export function pickRandomPrizeIndex(): number {
  return Math.floor(Math.random() * WHEEL_PRIZES.length);
}
