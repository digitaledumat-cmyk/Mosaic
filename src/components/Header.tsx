"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { legalRoutes } from "@/lib/site-routes";
import Logo from "./Logo";
import HeaderWhatsAppCta from "./HeaderWhatsAppCta";

const navLinks = [
  { href: "/" as const, labelKey: "home" as const },
  { href: "/tarif" as const, labelKey: "pricing" as const },
  { href: "/fonctionnalites" as const, labelKey: "why" as const },
  { href: "/guide-installation" as const, labelKey: "guide" as const },
  { href: "/faq" as const, labelKey: "faq" as const },
  { href: "/blog" as const, labelKey: "blog" as const },
  { href: "/contactez-nous" as const, labelKey: "contact" as const },
];

export default function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!moreOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [moreOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-ma-green-dark/75 shadow-lg shadow-black/10 backdrop-blur-xl">
      <div className="site-container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-lg text-white">
          <Logo light />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-2.5 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white xl:px-3"
            >
              {t(link.labelKey)}
            </Link>
          ))}

          <div ref={moreRef} className="relative">
            <button
              type="button"
              onClick={() => setMoreOpen((value) => !value)}
              aria-expanded={moreOpen}
              aria-haspopup="true"
              className="flex items-center gap-1 rounded-lg px-2.5 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white xl:px-3"
            >
              {t("more")}
              <svg
                className={`h-3.5 w-3.5 transition ${moreOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {moreOpen && (
              <div className="absolute top-full right-0 z-50 mt-1 min-w-56 rounded-xl border border-white/10 bg-ma-green-dark py-2 shadow-xl">
                {legalRoutes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setMoreOpen(false)}
                    className="block px-4 py-2.5 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                  >
                    {route.label}
                  </Link>
                ))}
                <Link
                  href="/plan-du-site"
                  onClick={() => setMoreOpen(false)}
                  className="block px-4 py-2.5 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  Plan du site
                </Link>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <HeaderWhatsAppCta label={t("trialCta")} className="hidden sm:inline-flex" />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ma-green px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white hover:bg-white/10"
              >
                {t(link.labelKey)}
              </Link>
            ))}

            <p className="mt-2 px-3 text-xs font-bold tracking-widest text-ma-red-accent uppercase">{t("more")}</p>
            {legalRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
              >
                {route.label}
              </Link>
            ))}
            <Link
              href="/plan-du-site"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
            >
              Plan du site
            </Link>

            <HeaderWhatsAppCta
              label={t("trialCta")}
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            />
          </nav>
        </div>
      )}
    </header>
  );
}
