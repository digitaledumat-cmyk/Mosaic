import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildPageMeta } from "./seo";

export async function initPageLocale(params: Promise<{ locale: string }>) {
  const { locale } = await params;
  setRequestLocale(locale);
  return locale;
}

export async function buildPageMetadata(
  namespace: string,
  locale: string,
  path: string,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });

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
