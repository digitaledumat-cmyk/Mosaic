import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageShell from "@/components/pages/PageShell";
import BlogCard from "@/components/blog/BlogCard";
import BlogListJsonLd from "@/components/seo/BlogListJsonLd";
import { blogPosts } from "@/content/blog-posts";
import { buildPageMetadata, initPageLocale } from "@/lib/page-utils";

export async function generateMetadata(): Promise<Metadata> {
  await initPageLocale();
  return buildPageMetadata("pages.blog", "/blog");
}

export default async function BlogPage() {
  await initPageLocale();
  const t = await getTranslations("pages.blog");

  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <>
      <BlogListJsonLd posts={sortedPosts} />
      <PageShell
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        path="/blog"
      >
        <div className="mx-auto max-w-5xl">
          <p className="mb-10 text-base leading-relaxed text-muted">{t("intro")}</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {sortedPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </PageShell>
    </>
  );
}
