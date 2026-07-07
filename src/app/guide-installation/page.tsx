import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageShell from "@/components/pages/PageShell";
import { installationGuides } from "@/content/commercial-pages";
import { buildPageMetadata, initPageLocale } from "@/lib/page-utils";

export async function generateMetadata(): Promise<Metadata> {
  await initPageLocale();
  return buildPageMetadata("pages.guide", "/guide-installation");
}

export default async function GuideInstallationPage() {
  await initPageLocale();
  const t = await getTranslations("pages.guide");

  return (
    <PageShell eyebrow={t("eyebrow")} title={t("title")} description={t("description")} path="/guide-installation">
      <div className="mx-auto max-w-3xl space-y-6">
        {installationGuides.map((guide) => (
          <section key={guide.id} className="surface-card !bg-ma-green">
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
