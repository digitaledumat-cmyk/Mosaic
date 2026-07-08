import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import CityContent from "@/components/pages/CityContent";
import PageShell from "@/components/pages/PageShell";
import RelatedCities from "@/components/pages/RelatedCities";
import LocalServiceJsonLd from "@/components/seo/LocalServiceJsonLd";
import { WHATSAPP_URL } from "@/lib/constants";
import { getCityContent } from "@/content/city-pages";
import { allCitySlugs, getCityGroup, isCitySlug } from "@/lib/city-routes";
import { getRelatedCitySlugs } from "@/lib/local-seo";
import { buildPageMeta } from "@/lib/seo";
import { initPageLocale } from "@/lib/page-utils";

const LOCALE = "fr";

export function generateStaticParams() {
  return allCitySlugs.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  if (!isCitySlug(city)) return {};

  await initPageLocale();
  const t = await getTranslations({ locale: LOCALE, namespace: "seoCities" });

  return buildPageMeta({
    title: `${t(`cities.${city}.name`)} — Meilleur IPTV Maroc | Mozaic.ma`,
    description: t(`cities.${city}.metaDescription`),
    path: `/iptv-maroc/${city}`,
  });
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  if (!isCitySlug(city)) notFound();

  await initPageLocale();
  const t = await getTranslations({ locale: LOCALE, namespace: "seoCities" });
  const tCity = await getTranslations({ locale: LOCALE, namespace: "pages.city" });

  const group = getCityGroup(city);
  const cityName = t(`cities.${city}.name`);
  const cityText = t(`cities.${city}.text`);
  const content = getCityContent(city);
  const relatedSlugs = getRelatedCitySlugs(city);

  return (
    <>
      <LocalServiceJsonLd city={city} serviceName={cityName} description={cityText} />
      <PageShell
        eyebrow={group === "morocco" ? t("moroccoLabel") : t("diasporaLabel")}
        title={cityName}
        description={cityText}
        breadcrumbItems={[
          { name: "Accueil", path: "/" },
          { name: "IPTV Maroc par ville", path: "/iptv-maroc" },
          { name: cityName, path: `/iptv-maroc/${city}` },
        ]}
      >
        <div className="mx-auto max-w-3xl space-y-10">
          <CityContent sections={content.sections} />

          <RelatedCities slugs={relatedSlugs} />

          <section>
            <h2 className="mb-4 font-display text-xl font-bold text-white">{tCity("linksTitle")}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { href: "/abonnement-iptv" as const, label: tCity("links.pricing") },
                { href: "/guide-installation" as const, label: tCity("links.guide") },
                { href: "/faq" as const, label: tCity("links.faq") },
                { href: "/blog" as const, label: tCity("links.blog") },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="surface-card !bg-ma-green transition hover:border-ma-red/40"
                >
                  <span className="font-semibold text-white">{link.label}</span>
                </Link>
              ))}
            </div>
          </section>

          <div className="surface-card-red text-center">
            <h2 className="font-display text-xl font-bold">{tCity("ctaTitle")}</h2>
            <p className="mt-2 text-sm text-white/85">{tCity("ctaText")}</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-5">
              {tCity("ctaButton")}
            </a>
          </div>
        </div>
      </PageShell>
    </>
  );
}
