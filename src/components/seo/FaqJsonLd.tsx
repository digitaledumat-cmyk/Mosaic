import { getTranslations } from "next-intl/server";
import JsonLd from "./JsonLd";

const faqItems = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] as const;

function stripRichTags(text: string): string {
  return text.replace(/<\/?[a-z]+>/g, "");
}

export default async function FaqJsonLd() {
  const t = await getTranslations("faq");

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: t(`items.${item}.q`),
      acceptedAnswer: {
        "@type": "Answer",
        text: stripRichTags(t(`items.${item}.a`)),
      },
    })),
  };

  return <JsonLd data={data} />;
}
