import JsonLd from "./JsonLd";
import { EMAIL, SITE_NAME, WHATSAPP_NUMBER } from "@/lib/constants";
import type { CitySlug } from "@/lib/city-routes";
import { cityGeoData } from "@/lib/local-seo";
import { absoluteUrl } from "@/lib/seo";

type LocalServiceJsonLdProps = {
  city: CitySlug;
  serviceName: string;
  description: string;
};

export default function LocalServiceJsonLd({ city, serviceName, description }: LocalServiceJsonLdProps) {
  const geo = cityGeoData[city];

  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    url: absoluteUrl(`/iptv-maroc/${city}`),
    serviceType: "Abonnement IPTV Maroc",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl("/"),
      email: EMAIL,
      telephone: `+${WHATSAPP_NUMBER}`,
    },
    areaServed: {
      "@type": "City",
      name: geo.cityName,
      geo: {
        "@type": "GeoCoordinates",
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
      containedInPlace: {
        "@type": "Country",
        name: geo.country,
      },
    },
    offers: {
      "@type": "Offer",
      price: "149",
      priceCurrency: "MAD",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/tarif"),
    },
  };

  return <JsonLd data={data} />;
}
