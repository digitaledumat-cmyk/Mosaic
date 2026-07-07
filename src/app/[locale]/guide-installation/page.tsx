import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageShell from "@/components/pages/PageShell";
import { installationGuides } from "@/content/commercial-pages";
import { buildPageMetadata, initPageLocale } from "@/lib/page-utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await initPageLocale(params);
  return buildPageMetadata("pages.guide", locale, "/guide-installation");
}

export default async function GuideInstallationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await initPageLocale(params);
  const t = await getTranslations("pages.guide");

  return (
    <PageShell eyebrow={t("eyebrow")} title={t("title")} description={t("description")} path="/guide-installation">
      <div className="mx-auto max-w-3xl space-y-6">
        {installationGuides.map((guide) => (
          <section key={guide.id} className="surface-card">
            <h2 className="mb-4 font-display text-xl font-bold text-white">{guide.title}</h2>
            <ol className="space-y-3">
              {guide.steps.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted md:text-base">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ma-red text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
