import { useTranslations } from "next-intl";

const paragraphs = ["p1", "p2", "p3", "p4"] as const;

export default function WhyUs() {
  const t = useTranslations("why");

  return (
    <section id="why" className="section-block bg-ma-green">
      <div className="site-container">
        <div className="mx-auto max-w-3xl">
          <span className="section-eyebrow">{t("label")}</span>
          <h2 className="section-heading">{t("title")}</h2>

          <div className="mt-8 space-y-5">
            {paragraphs.map((key) => (
              <p key={key} className="text-base leading-relaxed text-muted md:text-[1.05rem] md:leading-8">
                {t(`paragraphs.${key}`)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
