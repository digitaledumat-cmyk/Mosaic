import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageShell from "@/components/pages/PageShell";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { buildPageMetadata, initPageLocale } from "@/lib/page-utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await initPageLocale(params);
  return buildPageMetadata("pages.faq", locale, "/faq");
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await initPageLocale(params);
  const t = await getTranslations("pages.faq");

  return (
    <>
      <FaqJsonLd />
      <PageShell
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        path="/faq"
      >
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted">{t("seoBody")}</p>
      </PageShell>
      <WhyUs />
      <FAQ hideHeading />
    </>
  );
}
