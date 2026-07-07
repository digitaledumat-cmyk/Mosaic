import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageShell from "@/components/pages/PageShell";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { buildPageMetadata, initPageLocale } from "@/lib/page-utils";

export async function generateMetadata(): Promise<Metadata> {
  await initPageLocale();
  return buildPageMetadata("pages.faq", "/faq");
}

export default async function FaqPage() {
  await initPageLocale();
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
