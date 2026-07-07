import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import PageShell from "@/components/pages/PageShell";
import { allSiteRoutes, commercialRoutes, legalRoutes } from "@/lib/site-routes";
import { allCitySlugs } from "@/lib/city-routes";
import { buildPageMetadata, initPageLocale } from "@/lib/page-utils";

export async function generateMetadata(): Promise<Metadata> {
  await initPageLocale();
  return buildPageMetadata("pages.sitemap", "/plan-du-site");
}

export default async function PlanDuSitePage() {
  await initPageLocale();
  const t = await getTranslations("pages.sitemap");
  const tCities = await getTranslations("seoCities");

  const groups = [
    { title: "Pages principales", routes: commercialRoutes },
    { title: "Informations légales", routes: legalRoutes },
  ];

  return (
    <PageShell
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
      path="/plan-du-site"
    >
      <div className="mx-auto grid max-w-3xl gap-8">
        {groups.map((group) => (
          <section key={group.title}>
            <h2 className="mb-4 font-display text-xl font-bold text-white">{group.title}</h2>
            <ul className="space-y-3">
              {group.routes.map((route) => (
                <li key={route.href}>
                  <Link href={route.href} className="group block rounded-xl border border-white/10 bg-ma-green p-4 transition hover:border-ma-red/40">
                    <span className="font-semibold text-white group-hover:text-ma-red-light">{route.label}</span>
                    {route.description && (
                      <p className="mt-1 text-sm text-muted">{route.description}</p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section>
          <h2 className="mb-4 font-display text-xl font-bold text-white">IPTV Maroc par ville</h2>
          <p className="mb-4 text-sm text-muted">
            Retrouvez notre offre locale dans 18 villes au Maroc et en diaspora.
          </p>
          <Link
            href="/iptv-maroc"
            className="inline-flex rounded-xl border border-ma-red/40 bg-ma-green px-5 py-3 text-sm font-semibold text-white transition hover:border-ma-red"
          >
            Voir toutes les villes IPTV Maroc →
          </Link>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {allCitySlugs.map((city) => (
              <li key={city}>
                <Link
                  href={`/iptv-maroc/${city}`}
                  className="block rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-ma-green hover:text-white"
                >
                  {tCities(`cities.${city}.name`)}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <p className="text-xs text-muted">
          {allSiteRoutes.length + allCitySlugs.length} pages indexées — Mozaic.ma, fournisseur IPTV Maroc.
        </p>
      </div>
    </PageShell>
  );
}
