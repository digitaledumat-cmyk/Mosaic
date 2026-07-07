import JsonLd from "./JsonLd";
import { SITE_NAME } from "@/lib/constants";
import { absoluteUrl } from "@/lib/seo";

const plans = [
  { id: "discovery", price: 149, months: 3 },
  { id: "comfort", price: 249, months: 6 },
  { id: "family", price: 249, months: 12 },
] as const;

type ProductJsonLdProps = {
  names: Record<(typeof plans)[number]["id"], string>;
};

export default function ProductJsonLd({ names }: ProductJsonLdProps) {
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
