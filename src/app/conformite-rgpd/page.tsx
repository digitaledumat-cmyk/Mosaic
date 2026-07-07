import type { Metadata } from "next";
import LegalDocument from "@/components/pages/LegalDocument";
import { legalPages } from "@/content/legal-pages";
import { initPageLocale, legalMetadata } from "@/lib/page-utils";

const slug = "conformite-rgpd" as const;
const content = legalPages[slug];

export function generateMetadata(): Metadata {
  return legalMetadata(content);
}

export default async function Page() {
  await initPageLocale();
  return <LegalDocument content={content} />;
}
