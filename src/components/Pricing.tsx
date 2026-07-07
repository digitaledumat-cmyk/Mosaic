import { useTranslations } from "next-intl";
import { WHATSAPP_NUMBER, SITE_NAME } from "@/lib/constants";

const plans = ["discovery", "comfort", "family"] as const;

export default function Pricing() {
  const t = useTranslations("pricing");

  return (
    <section id="pricing" className="section-block bg-ma-green-dark">
      <div className="site-container">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <span className="section-eyebrow">{t("label")}</span>
          <h2 className="section-heading">{t("title")}</h2>
          <p className="section-sub mx-auto">
            {t.rich("description", {
              abonnement: (chunks) => <strong className="font-semibold text-white">{chunks}</strong>,
              recharge: (chunks) => <strong className="font-semibold text-ma-green-accent">{chunks}</strong>,
            })}
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:items-start lg:gap-6">
          {plans.map((plan) => {
            const isPopular = plan === "comfort";
            const isMaster = plan === "family";
            const planName = t(`plans.${plan}.name`);
            const features = t.raw(`plans.${plan}.features`) as string[];
            const badge = t.has(`plans.${plan}.badge`) ? t(`plans.${plan}.badge`) : null;
            const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Bonjour, je souhaite l'offre ${planName} - ${SITE_NAME}`)}`;

            return (
              <div
                key={plan}
                className={`relative flex flex-col rounded-2xl p-6 md:p-7 ${
                  isMaster
                    ? "bg-gradient-to-b from-ma-green-dark to-ma-green text-white shadow-xl ring-2 ring-ma-red sm:col-span-2 lg:col-span-1 lg:row-span-1"
                    : isPopular
                      ? "bg-ma-red text-white shadow-xl ring-2 ring-ma-green-light sm:col-span-2 lg:col-span-1 lg:-mt-2 lg:mb-2 lg:py-8"
                      : "surface-card"
                }`}
              >
                {(isPopular || badge) && (
                  <span
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase ${
                      isMaster
                        ? "bg-ma-red text-white"
                        : "bg-ma-green-light text-white"
                    }`}
                  >
                    {badge ?? t("popular")}
                  </span>
                )}

                <div className="mb-4">
                  <h3 className="font-display text-lg font-bold text-white">{planName}</h3>
                  <p className={`text-sm ${isPopular || isMaster ? "text-white/90" : "text-muted"}`}>
                    {t(`plans.${plan}.duration`)}
                  </p>
                  {t.has(`plans.${plan}.subtext`) && (
                    <p className={`mt-1.5 text-xs leading-relaxed ${isPopular || isMaster ? "text-white/90" : "text-muted-soft"}`}>
                      {t(`plans.${plan}.subtext`)}
                    </p>
                  )}
                </div>

                <div className="mb-5 flex items-baseline gap-1">
                  <span
                    className={`font-display text-4xl font-extrabold ${
                      isMaster ? "text-white" : isPopular ? "text-white" : "text-ma-red-accent"
                    }`}
                  >
                    {t(`plans.${plan}.price`)}
                  </span>
                  <span className={`text-sm ${isPopular || isMaster ? "text-white/90" : "text-muted"}`}>
                    {t(`plans.${plan}.currency`)}
                  </span>
                </div>

                <ul className="mb-6 flex-1 space-y-2.5">
                  {features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-xs leading-relaxed ${
                        isPopular || isMaster ? "text-white" : "text-muted"
                      }`}
                    >
                      <svg
                        className={`mt-0.5 h-4 w-4 shrink-0 ${isMaster ? "text-ma-green-accent" : "text-ma-green-accent"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isMaster || isPopular ? "btn-green w-full" : "btn-primary w-full"}
                >
                  {t("cta")}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
