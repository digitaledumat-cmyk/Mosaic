import { getTranslations } from "next-intl/server";
import JsonLd from "./JsonLd";
import { SITE_NAME } from "@/lib/constants";

const reviewItems = ["1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;

export default async function ReviewsJsonLd() {
  const t = await getTranslations("reviews");

  const reviews = reviewItems.map((item) => ({
    "@type": "Review" as const,
    author: { "@type": "Person" as const, name: t(`items.${item}.name`) },
    reviewRating: {
      "@type": "Rating" as const,
      ratingValue: t(`items.${item}.rating`),
      bestRating: "5",
    },
    reviewBody: t(`items.${item}.text`),
  }));

  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Abonnement IPTV Maroc — ${SITE_NAME}`,
    description: "Meilleur IPTV Maroc : IPTV 4K Maroc, IPTV HD Maroc et +48 000 chaînes",
    brand: { "@type": "Brand", name: SITE_NAME },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(reviewItems.length),
      bestRating: "5",
    },
    review: reviews,
  };

  return <JsonLd data={data} />;
}
