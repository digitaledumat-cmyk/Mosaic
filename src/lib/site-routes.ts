export type SiteRoute = {
  href: string;
  label: string;
  description?: string;
  group: "commercial" | "legal" | "utility";
};

export const commercialRoutes: SiteRoute[] = [
  {
    href: "/tarif",
    label: "Tarifs IPTV Maroc",
    description: "Acheter IPTV Maroc et recharge IPTV Maroc — nos formules",
    group: "commercial",
  },
  {
    href: "/iptv-maroc",
    label: "IPTV Maroc par ville",
    description: "Abonnement IPTV Maroc à Casablanca, Rabat, Paris, Bruxelles et +18 villes",
    group: "commercial",
  },
  {
    href: "/fonctionnalites",
    label: "Fonctionnalités",
    description: "IPTV 4K Maroc, IPTV HD Maroc et stabilité premium",
    group: "commercial",
  },
  {
    href: "/guide-installation",
    label: "Guide d'installation",
    description: "Configurer votre abonnement IPTV Maroc sur tous vos appareils",
    group: "commercial",
  },
  {
    href: "/faq",
    label: "FAQ",
    description: "Questions sur l'abonnement IPTV Maroc",
    group: "commercial",
  },
  {
    href: "/blog",
    label: "Blog IPTV Maroc",
    description: "Guides, conseils et actualités IPTV Maroc",
    group: "commercial",
  },
  {
    href: "/contactez-nous",
    label: "Contactez-nous",
    description: "Support fournisseur IPTV Maroc 24h/24",
    group: "commercial",
  },
];

export const legalRoutes: SiteRoute[] = [
  { href: "/mentions-legales", label: "Mentions légales", group: "legal" },
  { href: "/conditions-utilisation", label: "Conditions d'utilisation", group: "legal" },
  { href: "/politique-utilisation-acceptable", label: "Politique d'utilisation acceptable", group: "legal" },
  { href: "/conformite-rgpd", label: "Conformité RGPD", group: "legal" },
  { href: "/politique-dmca", label: "Politique DMCA", group: "legal" },
  { href: "/politique-confidentialite", label: "Politique de confidentialité", group: "legal" },
  { href: "/remboursement-et-retour", label: "Remboursement et retour", group: "legal" },
];

export const utilityRoutes: SiteRoute[] = [
  { href: "/plan-du-site", label: "Plan du site", group: "utility" },
];

export const allSiteRoutes: SiteRoute[] = [
  { href: "/", label: "Accueil", description: "Meilleur IPTV Maroc — Mozaic.ma", group: "commercial" },
  ...commercialRoutes,
  ...legalRoutes,
  ...utilityRoutes,
];
