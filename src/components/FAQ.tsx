"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const richTags = {
  abonnement: (chunks: React.ReactNode) => <strong className="font-semibold text-white">{chunks}</strong>,
  fournisseur: (chunks: React.ReactNode) => <strong className="font-semibold text-white">{chunks}</strong>,
  meilleur: (chunks: React.ReactNode) => <strong className="font-semibold text-white">{chunks}</strong>,
};

export default function FAQ({ hideHeading = false }: { hideHeading?: boolean }) {
  const t = useTranslations("faq");
  const items = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] as const;
  const [open, setOpen] = useState<string | null>("1");

  return (
    <section id="faq" className="section-block bg-ma-green">
      <div className="site-container">
        {!hideHeading && (
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="section-eyebrow">{t("label")}</span>
            <h2 className="section-heading">{t("title")}</h2>
          </div>
        )}

        <div className="mx-auto max-w-3xl space-y-3">
          {items.map((item) => {
            const isOpen = open === item;
            return (
              <div key={item} className="surface-card !bg-ma-green-dark !p-0 overflow-hidden">
                <h3 className="m-0">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : item)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-white md:text-base">
                      {t(`items.${item}.q`)}
                    </span>
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-lg font-medium transition ${isOpen ? "bg-ma-red text-white" : "bg-ma-green text-white"}`}>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div className="border-t border-white/10 px-5 py-4">
                    <p className="text-sm leading-relaxed text-muted md:text-base">
                      {t.rich(`items.${item}.a`, richTags)}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
