import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import BlogArticle from "@/components/blog/BlogArticle";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/content/blog-posts";
import { initPageLocale } from "@/lib/page-utils";
import { SITE_NAME } from "@/lib/constants";
import { absoluteUrl, buildPageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  await initPageLocale(Promise.resolve({ locale }));

  const post = getBlogPost(slug);
  if (!post) return {};

  return buildPageMeta({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  await initPageLocale(Promise.resolve({ locale }));

  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME, logo: { "@type": "ImageObject", url: absoluteUrl("/icon.svg") } },
    keywords: post.keywords.join(", "),
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(`/blog/${post.slug}`) },
  };

  return (
    <div className="bg-ma-green-dark">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <JsonLd data={articleJsonLd} />

      <div className="border-b border-white/10 bg-gradient-to-b from-ma-red/20 to-transparent">
        <div className="site-container py-12 md:py-16">
          <nav className="mb-6 text-xs text-white/75" aria-label="Fil d'Ariane">
            <Link href="/" className="transition hover:text-white">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="transition hover:text-white">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{post.title}</span>
          </nav>
          <span className="section-eyebrow">Blog IPTV Maroc</span>
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
            {post.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="site-container section-block !py-12 md:!py-16">
        <BlogArticle post={post} relatedPosts={relatedPosts} />
      </div>
    </div>
  );
}
