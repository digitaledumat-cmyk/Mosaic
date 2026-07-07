import type { LegalPageContent } from "@/content/legal-pages";
import PageShell from "./PageShell";

export default function LegalDocument({ content }: { content: LegalPageContent }) {
  return (
    <PageShell title={content.title} description={content.intro} path={`/${content.slug}`} variant="legal">
      <article className="mx-auto max-w-3xl">
        <p className="mb-8 text-sm text-muted">Dernière mise à jour : {content.updated}</p>
        <div className="space-y-8">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 font-display text-xl font-bold text-white">{section.title}</h2>
              <div className="space-y-3 text-sm leading-relaxed text-muted md:text-base">
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </PageShell>
  );
}
