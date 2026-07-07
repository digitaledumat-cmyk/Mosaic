import { useTranslations } from "next-intl";
import { MOROCCAN_CHANNELS, INTERNATIONAL_CHANNELS, CHANNEL_CATEGORIES } from "@/lib/constants";

export default function Channels() {
  const t = useTranslations("channels");

  const moroccanCats = Object.keys(CHANNEL_CATEGORIES.moroccan) as Array<
    keyof typeof CHANNEL_CATEGORIES.moroccan
  >;
  const intlCats = Object.keys(CHANNEL_CATEGORIES.international) as Array<
    keyof typeof CHANNEL_CATEGORIES.international
  >;

  return (
    <section id="channels" className="section-block bg-ma-green-dark">
      <div className="site-container">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="section-eyebrow">{t("label")}</span>
          <h2 className="section-heading">{t("title")}</h2>
          <p className="section-sub mx-auto">
            {t.rich("description", {
              abonnement: (chunks) => <strong className="font-semibold text-white">{chunks}</strong>,
              hd: (chunks) => <strong className="font-semibold text-ma-green-accent">{chunks}</strong>,
              k4: (chunks) => <strong className="font-semibold text-ma-green-accent">{chunks}</strong>,
            })}
          </p>
        </div>

        <div className="surface-card mb-6">
          <p className="mb-3 text-center text-xs font-semibold tracking-widest text-ma-red-accent uppercase">
            {t("moroccanLabel")}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {MOROCCAN_CHANNELS.map((ch) => (
              <span
                key={ch}
                className="rounded-lg border border-white/10 bg-ma-green-dark px-3 py-1.5 text-xs font-medium text-white"
              >
                {ch}
              </span>
            ))}
          </div>
        </div>

        <div className="surface-card mb-8">
          <p className="mb-3 text-center text-xs font-semibold tracking-widest text-ma-red-accent uppercase">
            {t("internationalLabel")}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {INTERNATIONAL_CHANNELS.map((ch) => (
              <span
                key={ch}
                className="rounded-lg border border-ma-red/20 bg-ma-red/10 px-3 py-1.5 text-xs font-medium text-white"
              >
                {ch}
              </span>
            ))}
            <span className="rounded-lg bg-ma-red/40 px-3 py-1.5 text-xs font-bold text-white">
              {t("badge")}
            </span>
          </div>
        </div>

        <h3 className="mb-4 text-center font-display text-lg font-bold text-white">
          {t("moroccanTitle")}
        </h3>
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {moroccanCats.map((cat) => (
            <ChannelCard
              key={cat}
              title={t(`categories.moroccan.${cat}`)}
              channels={CHANNEL_CATEGORIES.moroccan[cat]}
            />
          ))}
        </div>

        <h3 className="mb-4 text-center font-display text-lg font-bold text-white">
          {t("internationalTitle")}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {intlCats.map((cat) => (
            <ChannelCard
              key={cat}
              title={t(`categories.international.${cat}`)}
              channels={CHANNEL_CATEGORIES.international[cat]}
              accent
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChannelCard({
  title,
  channels,
  accent = false,
}: {
  title: string;
  channels: readonly string[];
  accent?: boolean;
}) {
  return (
    <div className={`surface-card ${accent ? "ring-1 ring-ma-red/20" : ""}`}>
      <h3 className="mb-3 text-xs font-bold tracking-widest text-ma-red-accent uppercase">{title}</h3>
      <ul className="space-y-2">
        {channels.map((ch) => (
          <li key={ch} className="flex items-center gap-2 text-sm text-white">
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${accent ? "bg-ma-red" : "bg-ma-green-light"}`} />
            {ch}
          </li>
        ))}
      </ul>
    </div>
  );
}
