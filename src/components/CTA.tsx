import { useTranslations } from "next-intl";
import { WHATSAPP_URL, EMAIL } from "@/lib/constants";

export default function CTA() {
  const t = useTranslations("cta");

  return (
    <section id="contact" className="section-block bg-ma-red text-white">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            {t("subtitle")}
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-8"
          >
            {t("button")}
          </a>
          <p className="mt-4 text-sm text-white/60">{EMAIL}</p>
        </div>
      </div>
    </section>
  );
}
