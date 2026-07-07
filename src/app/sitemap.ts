import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog-posts";
import { allCitySlugs } from "@/lib/city-routes";
import { allSiteRoutes } from "@/lib/site-routes";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = allSiteRoutes.map((route) => ({
    url: `${SITE_URL}${route.href === "/" ? "" : route.href}`,
    lastModified: now,
    changeFrequency: route.href === "/" ? ("daily" as const) : ("weekly" as const),
    priority: route.href === "/" ? 1 : route.group === "commercial" ? 0.9 : route.group === "legal" ? 0.4 : 0.5,
  }));

  const cityPages = allCitySlugs.map((city) => ({
    url: `${SITE_URL}/iptv-maroc/${city}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const articles = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...articles, ...cityPages];
}
