import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildPageMeta } from "./seo";

const LOCALE = "fr";

export async function initPageLocale() {
  setRequestLocale(LOCALE);
}

export async function buildPageMetadata(namespace: string, path: string): Promise<Metadata> {
  const t = await getTranslations({ locale: LOCALE, namespace });

  return buildPageMeta({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path,
  });
}

export function legalMetadata(content: { title: string; intro: string; slug: string }): Metadata {
  return buildPageMeta({
    title: `${content.title} | Mozaic.ma`,
    description: content.intro,
    path: `/${content.slug}`,
  });
}
