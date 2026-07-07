import { Link } from "@/i18n/navigation";
import type { BlogPost } from "@/content/blog-posts";

type BlogCardProps = {
  post: BlogPost;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col rounded-2xl border border-white/10 bg-ma-green p-6 transition hover:border-ma-red/40">
      <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-muted">
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        <span aria-hidden="true">·</span>
        <span>{post.readTime} de lecture</span>
      </div>

      <h2 className="font-display text-xl font-bold text-white transition group-hover:text-ma-red-light">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h2>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {post.keywords.slice(0, 3).map((keyword) => (
          <span
            key={keyword}
            className="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-xs text-white/85"
          >
            {keyword}
          </span>
        ))}
      </div>

      <Link
        href={`/blog/${post.slug}`}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ma-red-light transition hover:text-white"
      >
        Lire l&apos;article
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
