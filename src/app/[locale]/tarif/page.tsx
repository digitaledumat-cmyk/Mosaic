import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageShell from "@/components/pages/PageShell";
import TarifSeoContent from "@/components/pages/TarifSeoContent";
import Pricing from "@/components/Pricing";
import ProductJsonLd from "@/components/seo/ProductJsonLd";
import { buildPageMetadata, initPageLocale } from "@/lib/page-utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await initPageLocale(params);
  return buildPageMetadata("pages.tarif", locale, "/tarif");
}

export default async function TarifPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await initPageLocale(params);
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
        path="/tarif"
      >
        <TarifSeoContent />
      </PageShell>
      <Pricing />
    </>
  );
}
