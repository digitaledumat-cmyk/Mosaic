import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { CitySlug } from "@/lib/city-routes";

type RelatedCitiesProps = {
  slugs: CitySlug[];
};

export default async function RelatedCities({ slugs }: RelatedCitiesProps) {
  const t = await getTranslations("pages.city");
  const tCities = await getTranslations("seoCities");

  if (slugs.length === 0) return null;

  return (
    <section>
      <h2 className="mb-4 font-display text-xl font-bold text-white">{t("relatedTitle")}</h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {slugs.map((slug) => (
          <li key={slug}>
            <Link
              href={`/iptv-maroc/${slug}`}
              className="block rounded-xl border border-white/10 bg-ma-green px-4 py-3 text-sm font-medium text-white transition hover:border-ma-red/40 hover:text-ma-red-light"
            >
              {tCities(`cities.${slug}.name`)}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
