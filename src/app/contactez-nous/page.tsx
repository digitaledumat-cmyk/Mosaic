import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageShell from "@/components/pages/PageShell";
import ContactForm from "@/components/pages/ContactForm";
import { EMAIL, WHATSAPP_URL } from "@/lib/constants";
import { buildPageMetadata, initPageLocale } from "@/lib/page-utils";

export async function generateMetadata(): Promise<Metadata> {
  await initPageLocale();
  return buildPageMetadata("pages.contact", "/contactez-nous");
}

export default async function ContactPage() {
  await initPageLocale();
  const t = await getTranslations("pages.contact");

  return (
    <PageShell eyebrow={t("eyebrow")} title={t("title")} description={t("description")} path="/contactez-nous">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="surface-card !bg-ma-green">
            <h2 className="mb-2 font-display text-lg font-bold text-white">{t("whatsappTitle")}</h2>
            <p className="mb-4 text-sm text-muted">{t("whatsappText")}</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              WhatsApp — fournisseur IPTV Maroc
            </a>
          </div>
          <div className="surface-card !bg-ma-green">
            <h2 className="mb-2 font-display text-lg font-bold text-white">{t("emailTitle")}</h2>
            <a href={`mailto:${EMAIL}`} className="text-sm text-ma-red-light hover:underline">
              {EMAIL}
            </a>
          </div>
        </div>
        <div className="surface-card !bg-ma-green">
          <ContactForm labels={t.raw("form") as Parameters<typeof ContactForm>[0]["labels"]} />
        </div>
      </div>
    </PageShell>
  );
}
