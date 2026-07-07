import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageShell from "@/components/pages/PageShell";
import TarifSeoContent from "@/components/pages/TarifSeoContent";
import Pricing from "@/components/Pricing";
import ProductJsonLd from "@/components/seo/ProductJsonLd";
import { WHATSAPP_ACTIVATION_URL } from "@/lib/constants";
import { buildPageMetadata, initPageLocale } from "@/lib/page-utils";

export async function generateMetadata(): Promise<Metadata> {
  await initPageLocale();
  return buildPageMetadata("pages.tarif", "/abonnement-iptv");
}

export default async function AbonnementIptvPage() {
  await initPageLocale();
  const t = await getTranslations("pages.tarif");
  const tPricing = await getTranslations("pricing");

  const planNames = {
    discovery: tPricing("plans.discovery.name"),
    comfort: tPricing("plans.comfort.name"),
    family: tPricing("plans.family.name"),
  };

  return (
    <>
      <ProductJsonLd names={planNames} />
      <PageShell
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        path="/abonnement-iptv"
        headerExtra={
          <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center">
            <div className="inline-flex flex-col rounded-2xl border border-white/25 bg-white/10 px-5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md">
              <span className="text-sm font-bold tracking-wide text-ma-green-accent uppercase">
                {t("guaranteeTitle")}
              </span>
              <span className="mt-0.5 text-sm font-semibold text-white">{t("guaranteeSubtitle")}</span>
            </div>
            <a
              href={WHATSAPP_ACTIVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp sm:px-8"
            >
              {t("ctaActivate")}
            </a>
          </div>
        }
      >
        <TarifSeoContent />
      </PageShell>
      <Pricing />
    </>
  );
}
