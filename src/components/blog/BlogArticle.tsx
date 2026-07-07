import { Link } from "@/i18n/navigation";
import { WHATSAPP_URL } from "@/lib/constants";
import type { BlogPost } from "@/content/blog-posts";

type BlogArticleProps = {
  post: BlogPost;
  relatedPosts?: BlogPost[];
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogArticle({ post, relatedPosts = [] }: BlogArticleProps) {
  return (
    <article className="mx-auto max-w-3xl">
      <header className="mb-10 border-b border-white/10 pb-8">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readTime} de lecture</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.keywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
            >
              {keyword}
            </span>
          ))}
        </div>
      </header>

      <div className="prose-blog space-y-8">
        {post.sections.map((section, index) => (
          <section key={index}>
            {section.heading && (
              <h2 className="mb-4 font-display text-2xl font-bold text-white">{section.heading}</h2>
            )}
            {section.paragraphs.map((paragraph, pIndex) => (
              <p key={pIndex} className="mb-4 text-base leading-relaxed text-white/80">
                {paragraph}
              </p>
            ))}
            {section.list && (
              <ul className="my-4 space-y-2">
                {section.list.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-white/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ma-red" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {relatedPosts.length > 0 && (
        <section className="mt-12 border-t border-white/10 pt-10">
          <h2 className="mb-5 font-display text-xl font-bold text-white">Articles similaires</h2>
          <ul className="space-y-3">
            {relatedPosts.map((related) => (
              <li key={related.slug}>
                <Link
                  href={`/blog/${related.slug}`}
                  className="text-sm font-medium text-ma-red-light transition hover:text-white hover:underline"
                >
                  {related.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <aside className="mt-12 rounded-2xl border border-ma-red/30 bg-ma-red/10 p-6 md:p-8">
        <h2 className="font-display text-xl font-bold text-white">
          Prêt à profiter du meilleur IPTV Maroc ?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/80">
          Découvrez nos formules d&apos;abonnement IPTV Maroc avec IPTV 4K Maroc, +48 000 chaînes et
          support WhatsApp 24h/24. Activation en quelques minutes.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/tarif" className="btn-primary !text-sm">
            Voir les tarifs
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !text-sm"
          >
            Commander sur WhatsApp
          </a>
        </div>
      </aside>
    </article>
  );
}
