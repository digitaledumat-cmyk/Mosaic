import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageShell from "@/components/pages/PageShell";
import { featuresHighlights } from "@/content/commercial-pages";
import { buildPageMetadata, initPageLocale } from "@/lib/page-utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await initPageLocale(params);
  return buildPageMetadata("pages.features", locale, "/fonctionnalites");
}

export default async function FonctionnalitesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await initPageLocale(params);
  const t = await getTranslations("pages.features");

  return (
    <>
      <PageShell eyebrow={t("eyebrow")} title={t("title")} description={t("description")} path="/fonctionnalites">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
          {featuresHighlights.map((item) => (
            <article key={item.title} className="surface-card">
              <h2 className="mb-2 font-display text-lg font-bold text-white">{item.title}</h2>
              <p className="text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </PageShell>
    </>
  );
}
