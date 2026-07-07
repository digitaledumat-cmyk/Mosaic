import { useTranslations } from "next-intl";
import { WHATSAPP_URL } from "@/lib/constants";
import Logo from "./Logo";

const liveChannels = [
  "Al Aoula",
  "2M",
  "Arryadia",
  "Bein sport 4K",
  "TF1 4K",
  "M6 4K",
  "MBC 4K",
];

export default function Hero() {
  const t = useTranslations("hero");

  const stats = [
    { value: t("channelCount"), label: t("stats.channels") },
    { value: "99.9%", label: t("stats.uptime") },
    { value: "4K", label: t("stats.quality") },
    { value: "7j/7", label: t("stats.support") },
  ];

  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="grid-pattern-flag absolute inset-0" aria-hidden="true" />

      <div className="site-container relative section-block">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-in">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest text-white uppercase backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-ma-green-light" />
              {t("badge")}
            </span>

            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
              {t("title")}
              <span className="mt-1 block text-ma-green-light">{t("titleAccent")}</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/85 md:text-lg">
              {t.rich("subtitle", {
                best: (chunks) => <strong className="font-semibold text-white">{chunks}</strong>,
                k4: (chunks) => <strong className="font-semibold text-ma-green-light">{chunks}</strong>,
              })}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                {t("cta")}
              </a>
              <a href="#pricing" className="btn-outline">
                {t("ctaSecondary")}
              </a>
            </div>
          </div>

          <div className="animate-in overflow-hidden rounded-2xl border border-white/15 bg-ma-green shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
              <Logo className="text-base text-white" light />
              <span className="flex items-center gap-1.5 text-xs text-red-200">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
                HD/4K
              </span>
            </div>
            <div className="divide-y divide-white/8">
              {liveChannels.map((ch, i) => (
                <div key={ch} className={`flex items-center justify-between px-5 py-3 ${i === 0 ? "bg-white/5" : ""}`}>
                  <span className="text-sm font-medium text-white">{ch}</span>
                  <span className="rounded-md bg-ma-red/30 px-2 py-0.5 text-[10px] font-bold text-white">LIVE</span>
                </div>
              ))}
            </div>
            <p className="px-5 py-3 text-center text-xs text-white/50">{t("channelsMore")}</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/20 pt-8 lg:mt-12 lg:grid-cols-4 lg:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:text-start">
              <div className="font-display text-2xl font-bold text-white lg:text-3xl xl:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs text-white/65 lg:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
