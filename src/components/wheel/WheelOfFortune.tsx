"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { SITE_NAME, WHATSAPP_NUMBER } from "@/lib/constants";
import { playCheerSound } from "@/lib/playCheer";
import {
  WHEEL_PRIZES,
  WHEEL_SESSION_KEY,
  getSpinRotation,
  pickRandomPrizeIndex,
  type WheelPrizeId,
} from "@/lib/wheel";
import Confetti from "./Confetti";

const SEGMENT_ANGLE = 360 / WHEEL_PRIZES.length;
const SPIN_DURATION_MS = 4800;
const POPUP_DELAY_MS = 2500;

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y} Z`;
}

function FootballBall({ className, title }: { className?: string; title: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label={title}>
      <circle cx="32" cy="32" r="30" fill="#f5f5f4" stroke="#ca8a04" strokeWidth="2" />
      <path d="M32 8 L38 18 L32 24 L26 18 Z" fill="#1f2937" />
      <path d="M48 20 L44 30 L36 28 L38 18 Z" fill="#1f2937" />
      <path d="M54 36 L44 38 L40 30 L44 30 Z" fill="#1f2937" />
      <path d="M44 50 L36 48 L36 40 L44 38 Z" fill="#1f2937" />
      <path d="M20 50 L24 40 L36 40 L36 48 Z" fill="#1f2937" />
      <path d="M10 36 L20 38 L24 40 L20 30 Z" fill="#1f2937" />
      <path d="M16 20 L26 18 L28 28 L20 30 Z" fill="#1f2937" />
      <path d="M32 24 L38 18 L48 20 L44 30 L36 40 L24 40 L20 30 L26 18 Z" fill="#111827" opacity="0.15" />
    </svg>
  );
}

export default function WheelOfFortune() {
  const t = useTranslations("wheel");
  const [popupOpen, setPopupOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [transitionOn, setTransitionOn] = useState(false);
  const [resultIndex, setResultIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [copied, setCopied] = useState(false);

  const result = resultIndex !== null ? WHEEL_PRIZES[resultIndex] : null;
  const isWin = result?.win ?? false;

  useEffect(() => {
    if (sessionStorage.getItem(WHEEL_SESSION_KEY)) return;

    const timer = window.setTimeout(() => setPopupOpen(true), POPUP_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!popupOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [popupOpen]);

  const dismissPopup = useCallback(() => {
    if (spinning) return;
    sessionStorage.setItem(WHEEL_SESSION_KEY, "1");
    setPopupOpen(false);
    setShowResult(false);
    setResultIndex(null);
    setCopied(false);
  }, [spinning]);

  const whatsappClaimUrl = useMemo(() => {
    if (!result?.promoCode) return "";
    const prizeLabel = t(`prizes.${result.id}`);
    const text = t("whatsappMessage", { prize: prizeLabel, code: result.promoCode, site: SITE_NAME });
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }, [result, t]);

  const spin = useCallback(() => {
    if (spinning) return;

    const targetIndex = pickRandomPrizeIndex();
    const nextRotation = getSpinRotation(targetIndex, rotation);

    setSpinning(true);
    setTransitionOn(true);
    setShowResult(false);
    setCopied(false);
    setResultIndex(null);
    playCheerSound();

    requestAnimationFrame(() => setRotation(nextRotation));

    window.setTimeout(() => {
      setSpinning(false);
      setResultIndex(targetIndex);
      setShowResult(true);
    }, SPIN_DURATION_MS);
  }, [rotation, spinning]);

  const copyCode = async () => {
    if (!result?.promoCode) return;
    try {
      await navigator.clipboard.writeText(result.promoCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  if (!popupOpen) return null;

  return (
    <>
      <Confetti active={showResult && isWin} />

      <div
        className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="wc-wheel-title"
        aria-describedby="wc-wheel-rules"
      >
        <section
          className="relative max-h-[95vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-[#EAB308]/30 bg-gradient-to-b from-[#0f3d22] via-[#0a2e1a] to-[#061f12] shadow-[0_0_80px_rgba(234,179,8,0.2)]"
          onClick={(e) => e.stopPropagation()}
          aria-label={t("sectionLabel")}
        >
          <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_40px)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#EAB308]/15 to-transparent" />

          <button
            type="button"
            onClick={dismissPopup}
            disabled={spinning}
            className="absolute top-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-xl leading-none text-white/80 transition hover:bg-black/60 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            aria-label={t("close")}
          >
            ×
          </button>

          <div className="relative px-4 pt-10 pb-5 sm:px-6 sm:pt-11 sm:pb-6">
            {!showResult ? (
              <>
                <header className="mb-5 text-center">
                  <span className="mb-2 inline-block rounded-full border border-[#EAB308]/40 bg-[#EAB308]/10 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-[#FDE047] uppercase">
                    {t("badge")}
                  </span>
                  <h2 id="wc-wheel-title" className="font-display text-lg leading-snug font-extrabold text-white sm:text-xl">
                    {t("popupTitle")}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">{t("popupSubtitle")}</p>
                  <p id="wc-wheel-rules" className="mt-3 text-xs leading-relaxed text-white/80 sm:text-sm">
                    {t("rules")}
                  </p>
                </header>

                <div className="relative mx-auto w-full max-w-[min(100%,19rem)]" role="group" aria-label={t("wheelAlt")}>
                  <div
                    className={`absolute -inset-2 rounded-full bg-[#EAB308]/20 blur-xl transition-opacity ${spinning ? "animate-pulse opacity-100" : "opacity-40"}`}
                  />

                  <div className="absolute -top-1 left-1/2 z-20 -translate-x-1/2">
                    <div className="h-0 w-0 border-x-[12px] border-x-transparent border-t-[22px] border-t-[#FDE047] drop-shadow-[0_0_10px_rgba(253,224,71,0.9)]" />
                  </div>

                  <div className="relative rounded-full p-2.5 ring-2 ring-[#EAB308]/50">
                    <div className="relative aspect-square rounded-full bg-[#052e16] p-1">
                      <svg
                        viewBox="0 0 400 400"
                        className={`h-full w-full rounded-full ${spinning ? "wc-wheel-blur" : ""}`}
                        style={{
                          transform: `rotate(${rotation}deg)`,
                          transition: transitionOn
                            ? `transform ${SPIN_DURATION_MS}ms cubic-bezier(0.12, 0.85, 0.18, 1)`
                            : "none",
                        }}
                        role="img"
                        aria-label={t("wheelAlt")}
                      >
                        <circle cx="200" cy="200" r="198" fill="#14532d" stroke="#EAB308" strokeWidth="2" />

                        {WHEEL_PRIZES.map((prize, i) => {
                          const start = i * SEGMENT_ANGLE;
                          const end = start + SEGMENT_ANGLE;
                          const mid = start + SEGMENT_ANGLE / 2;
                          const lines = t(`prizeLabels.${prize.id}`).split("\n");

                          return (
                            <g key={prize.id}>
                              <path
                                d={describeArc(200, 200, 195, start, end)}
                                fill={prize.color}
                                stroke="rgba(255,255,255,0.15)"
                                strokeWidth="1"
                              />
                              <g transform={`rotate(${mid} 200 200)`}>
                                <text
                                  x="200"
                                  y="58"
                                  textAnchor="middle"
                                  fill="#fff"
                                  fontSize="10.5"
                                  fontWeight="700"
                                >
                                  {lines.map((line, li) => (
                                    <tspan key={li} x="200" dy={li === 0 ? 0 : 12}>
                                      {line}
                                    </tspan>
                                  ))}
                                </text>
                              </g>
                            </g>
                          );
                        })}
                      </svg>

                      <div className="pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                        <div className="flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-full border-2 border-[#EAB308] bg-[#052e16] shadow-[0_0_20px_rgba(234,179,8,0.45)] sm:h-20 sm:w-20">
                          <FootballBall className="h-10 w-10 sm:h-11 sm:w-11" title={t("footballAlt")} />
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={spin}
                        disabled={spinning}
                        className="absolute inset-0 z-[5] rounded-full disabled:cursor-not-allowed"
                        aria-label={t("spin")}
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={spin}
                    disabled={spinning}
                    className="relative z-10 mx-auto mt-5 flex w-full max-w-xs items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#EAB308] to-[#CA8A04] px-6 py-3.5 text-sm font-extrabold tracking-wide text-[#1a1200] shadow-[0_0_24px_rgba(234,179,8,0.4)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {spinning ? (
                      <>
                        <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-[#1a1200]/30 border-t-[#1a1200]" />
                        {t("spinning")}
                      </>
                    ) : (
                      <>⚽ {t("spin")}</>
                    )}
                  </button>

                  <p className="mt-3 text-center text-xs text-white/75">{t("hint")}</p>
                </div>
              </>
            ) : (
              result && (
                <article className="py-2 text-center">
                  <div
                    className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full text-4xl ${
                      isWin ? "bg-[#EAB308]/20 ring-2 ring-[#EAB308]/50" : "bg-white/10"
                    }`}
                    role="img"
                    aria-label={isWin ? t("winTitle") : t("loseTitle")}
                  >
                    {isWin ? "🏆" : "⚽"}
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#FDE047]">
                    {isWin ? t("winTitle") : t("loseTitle")}
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-white/85">
                    {isWin
                      ? t("winMessage", { prize: t(`prizes.${result.id as WheelPrizeId}`) })
                      : t("loseMessage")}
                  </p>

                  {isWin && (
                    <p className="mt-3 text-sm leading-relaxed text-white/85">{t("winUpgrade")}</p>
                  )}

                  {isWin && result.promoCode && (
                    <div className="mt-5 rounded-xl border border-[#EAB308]/40 bg-black/25 px-4 py-3">
                      <p className="text-xs tracking-widest text-[#FDE047] uppercase">{t("promoLabel")}</p>
                      <p className="mt-1 font-mono text-xl font-bold text-white">{result.promoCode}</p>
                    </div>
                  )}

                  <div className="mt-6 flex flex-col gap-3">
                    {isWin && result.promoCode ? (
                      <>
                        <a
                          href={whatsappClaimUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-whatsapp w-full"
                        >
                          {t("claimGiftWhatsApp")}
                        </a>
                        <button
                          type="button"
                          onClick={copyCode}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                        >
                          {copied ? t("copied") : t("copyCode")}
                        </button>
                        <button
                          type="button"
                          onClick={dismissPopup}
                          className="text-sm text-white/80 transition hover:text-white"
                        >
                          {t("close")}
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => {
                            setShowResult(false);
                            spin();
                          }}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#16A34A] to-[#0891B2] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                        >
                          ⚽ {t("tryAgain")}
                        </button>
                        <button
                          type="button"
                          onClick={dismissPopup}
                          className="text-sm text-white/80 transition hover:text-white"
                        >
                          {t("close")}
                        </button>
                      </>
                    )}
                  </div>
                </article>
              )
            )}
          </div>
        </section>
      </div>
    </>
  );
}
