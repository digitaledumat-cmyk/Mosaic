import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { WHATSAPP_URL, EMAIL, SITE_NAME } from "@/lib/constants";
import { SEO_CITY_GROUPS } from "@/lib/constants";
import { commercialRoutes, legalRoutes } from "@/lib/site-routes";
import Logo from "./Logo";

export default function Footer() {
  const t = useTranslations("footer");
  const tCities = useTranslations("seoCities");
  const year = new Date().getFullYear();

  const featuredMorocco = SEO_CITY_GROUPS.morocco.slice(0, 5);
  const featuredDiaspora = SEO_CITY_GROUPS.diaspora.slice(0, 4);

  return (
    <footer className="border-t border-white/10 bg-ma-green-dark py-12">
      <div className="site-container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-lg text-white">
              <Logo light />
            </p>
            <p className="mt-2 text-sm text-muted">{t("tagline")}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted/90">{t("seoAbout")}</p>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold tracking-widest text-ma-red uppercase">{t("commercial")}</p>
            <ul className="space-y-2">
              {commercialRoutes.map((route) => (
                <li key={route.href}>
                  <Link href={route.href} className="text-sm text-muted transition hover:text-white">
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold tracking-widest text-ma-red uppercase">{t("legal")}</p>
            <ul className="space-y-2">
              {legalRoutes.map((route) => (
                <li key={route.href}>
                  <Link href={route.href} className="text-sm text-muted transition hover:text-white">
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold tracking-widest text-ma-red uppercase">{t("local")}</p>
            <ul className="space-y-2">
              {featuredMorocco.map((city) => (
                <li key={city}>
                  <Link href={`/iptv-maroc/${city}`} className="text-sm text-muted transition hover:text-white">
                    {tCities(`cities.${city}.name`)}
                  </Link>
                </li>
              ))}
              {featuredDiaspora.map((city) => (
                <li key={city}>
                  <Link href={`/iptv-maroc/${city}`} className="text-sm text-muted transition hover:text-white">
                    {tCities(`cities.${city}.name`)}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/iptv-maroc" className="text-sm font-semibold text-ma-red-light hover:underline">
                  {t("allCities")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold tracking-widest text-ma-red uppercase">{t("contact")}</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-muted hover:text-white"
            >
              WhatsApp
            </a>
            <a href={`mailto:${EMAIL}`} className="mt-1 block text-sm text-muted hover:text-white">
              {EMAIL}
            </a>
            <p className="mt-3 text-sm text-muted">{t("hours")}</p>
            <Link href="/plan-du-site" className="mt-4 inline-block text-sm text-ma-red-light hover:underline">
              {t("sitemap")}
            </Link>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-muted/70">
          &copy; {year} {SITE_NAME} — {t("rights")}
        </p>
      </div>
    </footer>
  );
}
