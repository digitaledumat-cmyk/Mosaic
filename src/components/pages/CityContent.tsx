import type { CitySection } from "@/content/city-pages";

type CityContentProps = {
  sections: CitySection[];
};

export default function CityContent({ sections }: CityContentProps) {
  return (
    <div className="space-y-8">
      {sections.map((section, index) => (
        <section key={index}>
          {section.heading && (
            <h2 className="mb-4 font-display text-xl font-bold text-white md:text-2xl">
              {section.heading}
            </h2>
          )}
          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={pIndex} className="mb-4 text-base leading-relaxed text-muted md:leading-8">
              {paragraph}
            </p>
          ))}
          {section.list && (
            <ul className="space-y-2">
              {section.list.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted md:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ma-red" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
