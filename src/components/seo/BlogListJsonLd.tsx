import JsonLd from "./JsonLd";
import { absoluteUrl } from "@/lib/seo";
import type { BlogPost } from "@/content/blog-posts";

type BlogListJsonLdProps = {
  posts: BlogPost[];
};

export default function BlogListJsonLd({ posts }: BlogListJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/blog/${post.slug}`),
      name: post.title,
    })),
  };

  return <JsonLd data={data} />;
}
