export const SITE_NAME = "Mozaic.ma";
export const WHATSAPP_NUMBER = "212664140211";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Bonjour, je souhaite m'abonner à l'IPTV Maroc ${SITE_NAME}`)}`;
export const EMAIL = "contact@mozaic.ma";

export const MOROCCAN_CHANNELS = [
  "Al Aoula",
  "2M",
  "Arryadia",
  "Athaqafia",
  "Médi1 TV",
  "Tamazight",
  "Assadissa",
  "Al Maghribia",
  "Laayoune TV",
];

export const INTERNATIONAL_CHANNELS = [
  "beIN Sports",
  "CNN",
  "BBC News",
  "TF1",
  "ESPN",
  "Sky Sports",
  "France 24",
  "Canal+",
  "HBO",
  "Discovery",
];

/** @deprecated use MOROCCAN_CHANNELS */
export const CHANNELS = MOROCCAN_CHANNELS;

export const CHANNEL_CATEGORIES = {
  moroccan: {
    general: ["Al Aoula", "2M", "Al Maghribia", "Laayoune TV"],
    sport: ["Arryadia", "Arryadia HD"],
    culture: ["Athaqafia", "Médi1 TV", "Tamazight"],
    religious: ["Assadissa", "Mohammed VI"],
  },
  international: {
    news: ["CNN", "BBC News", "France 24", "Al Jazeera", "Sky News", "Euronews"],
    sport: ["beIN Sports", "ESPN", "Sky Sports", "Eurosport", "RMC Sport", "DAZN"],
    entertainment: ["HBO", "Discovery", "National Geographic", "MTV", "Disney Channel"],
    french: ["TF1", "M6", "Canal+", "France 2", "Arte", "C8"],
  },
} as const;

export const SEO_CITY_GROUPS = {
  morocco: [
    "casablanca",
    "rabat",
    "marrakech",
    "fes",
    "tangier",
    "agadir",
    "meknes",
    "oujda",
    "kenitra",
    "tetouan",
  ],
  diaspora: [
    "paris",
    "lyon",
    "brussels",
    "madrid",
    "barcelona",
    "amsterdam",
    "montreal",
    "toronto",
  ],
} as const;
