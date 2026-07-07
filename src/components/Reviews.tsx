import { useTranslations } from "next-intl";

export default function Reviews() {
  const t = useTranslations("reviews");
  const items = ["1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;

  return (
    <section className="section-block bg-ma-green-dark">
      <div className="site-container">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="section-eyebrow">{t("label")}</span>
          <h2 className="section-heading">{t("title")}</h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item} className="surface-card !bg-ma-green">
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-ma-red" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                &ldquo;{t(`items.${item}.text`)}&rdquo;
              </p>
              <p className="text-sm font-semibold text-white">{t(`items.${item}.name`)}</p>
              <p className="mt-0.5 text-xs text-muted/80">{t(`items.${item}.location`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
