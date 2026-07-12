import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import DeferredDisplayFont from "@/components/DeferredDisplayFont";
import JsonLd from "@/components/seo/JsonLd";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { organizationJsonLd, websiteJsonLd, SITE_URL, buildPageMeta } from "@/lib/seo";
import "./globals.css";

const LOCALE = "fr";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: LOCALE, namespace: "meta" });

  return {
    metadataBase: new URL(SITE_URL),
    ...buildPageMeta({
      title: t("title"),
      description: t("description"),
      path: "/",
    }),
    keywords: [
      "IPTV Maroc",
      "abonnement IPTV Maroc",
      "meilleur IPTV Maroc",
      "IPTV 4K Maroc",
      "recharge IPTV Maroc",
      "acheter IPTV Maroc",
      "IPTV Maroc premium",
    ],
    applicationName: "Mozaic.ma",
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  setRequestLocale(LOCALE);
  const messages = await getMessages();

  return (
    <html lang="fr" dir="ltr" className="h-full">
      <body className="min-h-full antialiased">
        <NextIntlClientProvider messages={messages}>
          <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <DeferredDisplayFont />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
