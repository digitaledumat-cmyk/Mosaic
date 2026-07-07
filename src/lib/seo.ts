import type { Metadata } from "next";
import { EMAIL, SITE_NAME, WHATSAPP_NUMBER } from "./constants";

export const SITE_URL = "https://mozaic.ma";
export const OG_IMAGE_PATH = "/opengraph-image";

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const OG_IMAGE_URL = absoluteUrl(OG_IMAGE_PATH);

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
};

export function buildOpenGraph({
  title,
  description,
  path,
  type = "website",
  publishedTime,
}: PageMetaInput): Metadata["openGraph"] {
  return {
    type,
    locale: "fr_FR",
    url: absoluteUrl(path),
    siteName: SITE_NAME,
    title,
    description,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Meilleur IPTV Maroc`,
      },
    ],
    ...(publishedTime ? { publishedTime } : {}),
  };
}

export function buildTwitter({
  title,
  description,
}: Pick<PageMetaInput, "title" | "description">) {
  return {
    card: "summary_large_image" as const,
    title,
    description,
    images: [OG_IMAGE_URL],
  };
}

export function buildPageMeta(input: PageMetaInput): Metadata {
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: input.path },
    openGraph: buildOpenGraph(input),
    twitter: buildTwitter(input),
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl("/icon.svg"),
  email: EMAIL,
  telephone: `+${WHATSAPP_NUMBER}`,
  description:
    "Fournisseur IPTV Maroc premium : abonnement IPTV Maroc, IPTV 4K Maroc, IPTV HD Maroc et recharge IPTV Maroc instantanée.",
  areaServed: ["MA", "FR", "BE", "ES", "NL", "CA"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: EMAIL,
    availableLanguage: ["French"],
    areaServed: ["MA", "FR", "BE", "ES", "NL", "CA"],
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "fr",
  description:
    "Meilleur IPTV Maroc — acheter IPTV Maroc, recharge IPTV Maroc et +48 000 chaînes en IPTV 4K Maroc.",
  publisher: { "@type": "Organization", name: SITE_NAME },
};
