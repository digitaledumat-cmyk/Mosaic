import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import PageShell from "@/components/pages/PageShell";
import { SEO_CITY_GROUPS } from "@/lib/constants";
import { buildPageMetadata, initPageLocale } from "@/lib/page-utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await initPageLocale(params);
  return buildPageMetadata("pages.local", locale, "/iptv-maroc");
}

export default async function LocalHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await initPageLocale(params);
  const t = await getTranslations("pages.local");
  const tCities = await getTranslations("seoCities");

  const groups = [
    { key: "morocco" as const, cities: SEO_CITY_GROUPS.morocco, label: tCities("moroccoLabel") },
    { key: "diaspora" as const, cities: SEO_CITY_GROUPS.diaspora, label: tCities("diasporaLabel") },
  ];

  return (
    <PageShell
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
      path="/iptv-maroc"
    >
      <div className="mx-auto max-w-5xl space-y-12">
        <p className="text-base leading-relaxed text-muted md:text-lg">{t("intro")}</p>

        {groups.map((group) => (
          <section key={group.key}>
            <h2 className="mb-5 font-display text-xl font-bold text-white md:text-2xl">{group.label}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.cities.map((city) => (
                <Link
                  key={city}
                  href={`/iptv-maroc/${city}`}
                  className="surface-card !bg-ma-green transition hover:border-ma-red/40"
                >
                  <h3 className="font-display text-base font-bold text-white">
                    {tCities(`cities.${city}.name`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {tCities(`cities.${city}.text`)}
                  </p>
                  <span className="mt-3 inline-block text-xs font-semibold text-ma-red-light">
                    {t("cardLink")} →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
