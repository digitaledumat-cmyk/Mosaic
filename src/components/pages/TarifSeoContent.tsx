import { getTranslations } from "next-intl/server";

export default async function TarifSeoContent() {
  const t = await getTranslations("pages.tarif");

  const highlights = t.raw("highlights") as string[];
  const steps = t.raw("steps") as { title: string; text: string }[];

  return (
    <div className="mx-auto max-w-3xl space-y-10">
      <p className="text-base leading-relaxed text-muted md:text-lg">{t("seoBody")}</p>

      <section>
        <h2 className="mb-4 font-display text-xl font-bold text-white">{t("highlightsTitle")}</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-xl border border-white/10 bg-ma-green px-4 py-3 text-sm text-muted"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ma-red" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 font-display text-xl font-bold text-white">{t("stepsTitle")}</h2>
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={step.title} className="surface-card">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-ma-red text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="font-display text-base font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
