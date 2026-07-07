import { SEO_CITY_GROUPS } from "@/lib/constants";
import type { CitySlug } from "@/lib/city-routes";

export type CityGeo = {
  slug: CitySlug;
  cityName: string;
  country: string;
  countryCode: string;
  latitude: number;
  longitude: number;
};

export const cityGeoData: Record<CitySlug, CityGeo> = {
  casablanca: {
    slug: "casablanca",
    cityName: "Casablanca",
    country: "Maroc",
    countryCode: "MA",
    latitude: 33.5731,
    longitude: -7.5898,
  },
  rabat: {
    slug: "rabat",
    cityName: "Rabat",
    country: "Maroc",
    countryCode: "MA",
    latitude: 34.0209,
    longitude: -6.8416,
  },
  marrakech: {
    slug: "marrakech",
    cityName: "Marrakech",
    country: "Maroc",
    countryCode: "MA",
    latitude: 31.6295,
    longitude: -7.9811,
  },
  fes: {
    slug: "fes",
    cityName: "Fès",
    country: "Maroc",
    countryCode: "MA",
    latitude: 34.0181,
    longitude: -5.0078,
  },
  tangier: {
    slug: "tangier",
    cityName: "Tanger",
    country: "Maroc",
    countryCode: "MA",
    latitude: 35.7595,
    longitude: -5.834,
  },
  agadir: {
    slug: "agadir",
    cityName: "Agadir",
    country: "Maroc",
    countryCode: "MA",
    latitude: 30.4278,
    longitude: -9.5981,
  },
  meknes: {
    slug: "meknes",
    cityName: "Meknès",
    country: "Maroc",
    countryCode: "MA",
    latitude: 33.8935,
    longitude: -5.5473,
  },
  oujda: {
    slug: "oujda",
    cityName: "Oujda",
    country: "Maroc",
    countryCode: "MA",
    latitude: 34.6814,
    longitude: -1.9086,
  },
  kenitra: {
    slug: "kenitra",
    cityName: "Kénitra",
    country: "Maroc",
    countryCode: "MA",
    latitude: 34.261,
    longitude: -6.5802,
  },
  tetouan: {
    slug: "tetouan",
    cityName: "Tétouan",
    country: "Maroc",
    countryCode: "MA",
    latitude: 35.5889,
    longitude: -5.3626,
  },
  paris: {
    slug: "paris",
    cityName: "Paris",
    country: "France",
    countryCode: "FR",
    latitude: 48.8566,
    longitude: 2.3522,
  },
  lyon: {
    slug: "lyon",
    cityName: "Lyon",
    country: "France",
    countryCode: "FR",
    latitude: 45.764,
    longitude: 4.8357,
  },
  brussels: {
    slug: "brussels",
    cityName: "Bruxelles",
    country: "Belgique",
    countryCode: "BE",
    latitude: 50.8503,
    longitude: 4.3517,
  },
  madrid: {
    slug: "madrid",
    cityName: "Madrid",
    country: "Espagne",
    countryCode: "ES",
    latitude: 40.4168,
    longitude: -3.7038,
  },
  barcelona: {
    slug: "barcelona",
    cityName: "Barcelone",
    country: "Espagne",
    countryCode: "ES",
    latitude: 41.3874,
    longitude: 2.1686,
  },
  amsterdam: {
    slug: "amsterdam",
    cityName: "Amsterdam",
    country: "Pays-Bas",
    countryCode: "NL",
    latitude: 52.3676,
    longitude: 4.9041,
  },
  montreal: {
    slug: "montreal",
    cityName: "Montréal",
    country: "Canada",
    countryCode: "CA",
    latitude: 45.5017,
    longitude: -73.5673,
  },
  toronto: {
    slug: "toronto",
    cityName: "Toronto",
    country: "Canada",
    countryCode: "CA",
    latitude: 43.6532,
    longitude: -79.3832,
  },
};

export function getRelatedCitySlugs(slug: CitySlug, limit = 4): CitySlug[] {
  const group = SEO_CITY_GROUPS.morocco.includes(slug as (typeof SEO_CITY_GROUPS.morocco)[number])
    ? [...SEO_CITY_GROUPS.morocco]
    : [...SEO_CITY_GROUPS.diaspora];

  return group.filter((s) => s !== slug).slice(0, limit);
}
