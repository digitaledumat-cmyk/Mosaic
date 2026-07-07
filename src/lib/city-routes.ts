import { SEO_CITY_GROUPS } from "@/lib/constants";

export const allCitySlugs = [
  ...SEO_CITY_GROUPS.morocco,
  ...SEO_CITY_GROUPS.diaspora,
] as const;

export type CitySlug = (typeof allCitySlugs)[number];

export function getCityGroup(slug: CitySlug): "morocco" | "diaspora" {
  return SEO_CITY_GROUPS.morocco.includes(slug as (typeof SEO_CITY_GROUPS.morocco)[number])
    ? "morocco"
    : "diaspora";
}

export function isCitySlug(slug: string): slug is CitySlug {
  return (allCitySlugs as readonly string[]).includes(slug);
}
