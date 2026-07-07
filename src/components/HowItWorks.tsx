import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const t = useTranslations("howItWorks");
  const steps = ["1", "2", "3"] as const;

  return (
    <section className="section-block bg-ma-green">
      <div className="site-container">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="section-eyebrow">{t("label")}</span>
          <h2 className="section-heading">{t("title")}</h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step} className="surface-card-dark text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ma-red font-display text-lg font-bold text-white">
                {step}
              </div>
              <h3 className="mb-2 font-display text-base font-bold text-white">
                {t(`steps.${step}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {t(`steps.${step}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
