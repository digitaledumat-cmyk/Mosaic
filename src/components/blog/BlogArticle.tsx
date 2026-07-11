import type { ReactNode } from "react";
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

/** Renders lightweight markdown: [label](url) and **bold** */
function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const pattern = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[2] && match[3]) {
      const href = match[3];
      const label = match[2];
      const isExternal = href.startsWith("http");
      nodes.push(
        <a
          key={key++}
          href={href}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="font-semibold text-ma-red-light underline decoration-ma-red/50 underline-offset-2 transition hover:text-white"
        >
          {label}
        </a>,
      );
    } else if (match[4]) {
      nodes.push(
        <strong key={key++} className="font-semibold text-white">
          {match[4]}
        </strong>,
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <>{nodes}</>;
}

const KEYWORD_LINKS: Record<string, string> = {
  "IPTV Maroc": "https://ondima.ma/",
  "abonnement IPTV Maroc": "https://ondima.ma/abonnement-iptv",
  "IPTV fiable Maroc": "https://ondima.ma/",
  "meilleur IPTV Maroc": "https://ondima.ma/",
  "Ondima IPTV": "https://ondima.ma/",
};

export default function BlogArticle({ post, relatedPosts = [] }: BlogArticleProps) {
  const isOndimaArticle = post.slug === "ondima-iptv-maroc-fiable";

  return (
    <article className="mx-auto max-w-3xl">
      <header className="mb-10 border-b border-white/10 pb-8">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readTime} de lecture</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.keywords.map((keyword) => {
            const href = isOndimaArticle ? KEYWORD_LINKS[keyword] : undefined;
            const className =
              "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition hover:border-ma-red/40 hover:text-white";

            return href ? (
              <a
                key={keyword}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {keyword}
              </a>
            ) : (
              <span key={keyword} className={className}>
                {keyword}
              </span>
            );
          })}
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
                <RichText text={paragraph} />
              </p>
            ))}
            {section.list && (
              <ul className="my-4 space-y-2">
                {section.list.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-white/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ma-red" aria-hidden="true" />
                    <span>
                      <RichText text={item} />
                    </span>
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
          <Link href="/abonnement-iptv" className="btn-primary !text-sm">
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
