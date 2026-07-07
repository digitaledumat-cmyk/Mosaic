import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

type BreadcrumbItem = { name: string; path: string };

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  path?: string;
  breadcrumbItems?: BreadcrumbItem[];
  children?: ReactNode;
  variant?: "default" | "legal";
};

export default function PageShell({
  eyebrow,
  title,
  description,
  path,
  breadcrumbItems,
  children,
  variant = "default",
}: PageShellProps) {
  const crumbs =
    breadcrumbItems ??
    (path ? [{ name: "Accueil", path: "/" }, { name: title, path }] : null);

  return (
    <div className={variant === "legal" ? "bg-ma-green-dark" : "bg-ma-green-dark"}>
      {crumbs ? <BreadcrumbJsonLd items={crumbs} /> : null}
      <div className="border-b border-white/10 bg-gradient-to-b from-ma-red/20 to-transparent">
        <div className="site-container py-12 md:py-16">
          <nav className="mb-6 text-xs text-white/75" aria-label="Fil d'Ariane">
            {crumbs ? (
              crumbs.map((item, index) => (
                <span key={item.path}>
                  {index > 0 && <span className="mx-2">/</span>}
                  {index < crumbs.length - 1 ? (
                    <Link href={item.path} className="transition hover:text-white">
                      {item.name}
                    </Link>
                  ) : (
                    <span className="text-white/80">{item.name}</span>
                  )}
                </span>
              ))
            ) : (
              <>
                <Link href="/" className="transition hover:text-white">
                  Accueil
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white/80">{title}</span>
              </>
            )}
          </nav>
          {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
              {description}
            </p>
          )}
        </div>
      </div>
      {children ? (
        <div className="site-container section-block !py-12 md:!py-16">{children}</div>
      ) : null}
    </div>
  );
}
