import { getTranslations } from "next-intl/server";
import JsonLd from "./JsonLd";
import { SITE_NAME } from "@/lib/constants";
import { absoluteUrl } from "@/lib/seo";

const plans = [
  { id: "discovery", price: 149, months: 3 },
  { id: "comfort", price: 249, months: 6 },
  { id: "family", price: 399, months: 12 },
] as const;

const reviewItems = ["1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;

type ProductJsonLdProps = {
  names: Record<(typeof plans)[number]["id"], string>;
};

export default async function ProductJsonLd({ names }: ProductJsonLdProps) {
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

  const aggregateRating = {
    "@type": "AggregateRating" as const,
    ratingValue: "5",
    reviewCount: String(reviewItems.length),
    bestRating: "5",
  };

  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: plans.map((plan, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: names[plan.id],
        description: `Abonnement IPTV Maroc ${plan.months} mois — IPTV 4K Maroc et IPTV HD Maroc`,
        brand: { "@type": "Brand", name: SITE_NAME },
        aggregateRating,
        review: reviews,
        offers: {
          "@type": "Offer",
          price: plan.price,
          priceCurrency: "MAD",
          availability: "https://schema.org/InStock",
          url: absoluteUrl("/abonnement-iptv"),
        },
      },
    })),
  };

  return <JsonLd data={data} />;
}
