import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SEO_CITY_GROUPS } from "@/lib/constants";

export default function SeoCities() {
  const t = useTranslations("seoCities");

  return (
    <section id="villes" className="section-block bg-ma-green-dark">
      <div className="site-container">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <span className="section-eyebrow">{t("label")}</span>
          <h2 className="section-heading">{t("title")}</h2>
          <p className="section-sub mx-auto">{t("description")}</p>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-center text-xs font-semibold tracking-widest text-ma-red-accent uppercase">
            {t("moroccoLabel")}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SEO_CITY_GROUPS.morocco.map((city) => (
              <article key={city} className="surface-card">
                <h4 className="mb-2 font-display text-base font-bold text-white">
                  <Link href={`/iptv-maroc/${city}`} className="transition hover:text-ma-red-light">
                    {t(`cities.${city}.name`)}
                  </Link>
                </h4>
                <p className="text-sm leading-relaxed text-muted">
                  {t(`cities.${city}.text`)}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-center text-xs font-semibold tracking-widest text-ma-red-accent uppercase">
            {t("diasporaLabel")}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SEO_CITY_GROUPS.diaspora.map((city) => (
              <article key={city} className="surface-card">
                <h4 className="mb-2 font-display text-base font-bold text-white">
                  <Link href={`/iptv-maroc/${city}`} className="transition hover:text-ma-red-light">
                    {t(`cities.${city}.name`)}
                  </Link>
                </h4>
                <p className="text-sm leading-relaxed text-muted">
                  {t(`cities.${city}.text`)}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/iptv-maroc" className="text-sm font-semibold text-ma-red-light hover:underline">
            {t("hubCta")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
