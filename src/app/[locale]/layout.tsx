import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import DeferredDisplayFont from "@/components/DeferredDisplayFont";
import JsonLd from "@/components/seo/JsonLd";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { organizationJsonLd, websiteJsonLd, SITE_URL, buildPageMeta } from "@/lib/seo";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL(SITE_URL),
    ...buildPageMeta({
      title: t("title"),
      description: t("description"),
      path: "/",
    }),
    applicationName: "Mozaic.ma",
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "fr")) {
    notFound();
  }

  setRequestLocale(locale);
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
