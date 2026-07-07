import type { CitySlug } from "@/lib/city-routes";

export type CitySection = {
  heading?: string;
  paragraphs: string[];
  list?: string[];
};

export type CityPageContent = {
  sections: CitySection[];
};

const moroccoBase = (city: string, region: string): CitySection[] => [
  {
    paragraphs: [
      `À ${city} et dans la région de ${region}, la demande d'abonnement IPTV Maroc ne cesse de croître. Les foyers marocains souhaitent accéder à Al Aoula, 2M, Arryadia et aux chaînes sportives internationales sans parabole ni installation complexe. Mozaic.ma répond à ce besoin avec un fournisseur IPTV Maroc fiable, une activation en moins de 5 minutes et un support WhatsApp disponible 24h/24 en français.`,
      `Que vous habitiez le centre-ville ou les quartiers périphériques, notre service IPTV HD Maroc et IPTV 4K Maroc fonctionne sur Smart TV Samsung, LG, Android TV, Fire Stick et smartphone. La fibre et le Wi-Fi 5 GHz se généralisent à ${city}, ce qui garantit une diffusion fluide même pendant les matchs de la Botola ou le Mondial 2026.`,
    ],
  },
  {
    heading: `Pourquoi choisir Mozaic.ma à ${city} ?`,
    paragraphs: [
      `En tant que meilleur IPTV Maroc accessible depuis ${city}, nous proposons plus de 48 000 chaînes, une technologie anti-freeze et des serveurs optimisés pour le Maghreb et l'Europe. Acheter IPTV Maroc chez nous, c'est bénéficier d'un accompagnement personnalisé à l'installation et d'une recharge IPTV Maroc simplifiée à chaque renouvellement.`,
    ],
    list: [
      "Chaînes marocaines en direct : Al Aoula, 2M, Arryadia, Tamazight",
      "Sport premium : beIN Sports, RMC Sport, DAZN, ESPN",
      "Qualité IPTV 4K Maroc sur les flux compatibles",
      "Activation WhatsApp en moins de 5 minutes",
      "Support technique 24h/24 en français",
    ],
  },
  {
    heading: "Formules et tarifs IPTV Maroc",
    paragraphs: [
      `Nos abonnements IPTV Maroc démarrent à 149 MAD pour 3 mois (formule Découverte), 249 MAD pour 6 mois (Confort) et 399 MAD pour 12 mois (Master). Chaque formule inclut l'intégralité du catalogue, la VOD et l'assistance fournisseur IPTV Maroc. Pour acheter IPTV Maroc depuis ${city}, contactez-nous sur WhatsApp avec votre type d'appareil : nous vous guidons pas à pas.`,
      `La recharge IPTV Maroc se fait sans changer vos identifiants : envoyez-nous un message avant l'expiration de votre abonnement et votre ligne est prolongée en quelques minutes. Idéal pour ne manquer aucun match de la sélection marocaine ou de la CAN.`,
    ],
  },
  {
    heading: `Installation IPTV Maroc à ${city}`,
    paragraphs: [
      `L'installation prend généralement moins de 10 minutes. Nous recommandons IPTV Smarters Pro ou TiviMate sur Smart TV, et fournissons un guide d'installation détaillé adapté à votre appareil. Si vous rencontrez la moindre difficulté à ${city}, notre équipe technique intervient à distance via WhatsApp pour configurer votre flux IPTV HD Maroc.`,
    ],
  },
];

const diasporaBase = (city: string, country: string): CitySection[] => [
  {
    paragraphs: [
      `Pour la communauté marocaine à ${city} (${country}), Mozaic.ma est le fournisseur IPTV Maroc de référence. Retrouvez Al Aoula, 2M, Arryadia, les JT du soir, la Botola et la Coupe du Monde comme si vous étiez au Maroc. Notre abonnement IPTV Maroc est conçu pour la diaspora : serveurs européens à faible latence, routage optimisé et compatibilité totale avec les box et Smart TV du marché local.`,
      `Que vous soyez installé à ${city} depuis des années ou récemment arrivé, acheter IPTV Maroc via Mozaic.ma vous garantit un service stable en IPTV HD Maroc et IPTV 4K Maroc. Fini les paraboles encombrantes : une connexion internet suffit pour regarder sur TV, tablette et smartphone.`,
    ],
  },
  {
    heading: `Le meilleur IPTV Maroc pour ${city}`,
    paragraphs: [
      `Des milliers de Marocains à ${city} nous font confiance pour suivre leurs programmes préférés. Notre catalogue inclut les bouquets francophones (TF1, M6, Canal+), les chaînes arabes et le sport mondial en direct. En tant que fournisseur IPTV Maroc premium, nous maintenons un uptime de 99,9 % même aux heures de grande affluence.`,
    ],
    list: [
      "Chaînes marocaines : Al Aoula, 2M, Arryadia, Médi1 TV",
      "Bouquets français et internationaux complets",
      "IPTV 4K Maroc pour le Mondial 2026 et la Ligue des Champions",
      "Recharge IPTV Maroc sans reconfiguration",
      "Support WhatsApp en français, 7j/7",
    ],
  },
  {
    heading: "Comment s'abonner depuis l'étranger ?",
    paragraphs: [
      `Commander depuis ${city} est simple : choisissez votre formule sur notre page tarifs, puis contactez-nous sur WhatsApp. Nous confirmons votre paiement et activons votre abonnement IPTV Maroc en quelques minutes, où que vous soyez en ${country}. Les identifiants Xtream Codes fonctionnent immédiatement sur tous vos appareils.`,
      `La recharge IPTV Maroc s'effectue de la même manière : un message WhatsApp suffit pour prolonger votre abonnement sans perdre vos favoris ni reconfigurer votre application. Nos tarifs restent compétitifs par rapport aux offres satellite locales.`,
    ],
  },
  {
    heading: "Appareils compatibles",
    paragraphs: [
      `À ${city}, nos abonnés utilisent principalement Smart TV Samsung et LG, Amazon Fire Stick, box Android et smartphones. Nous fournissons un guide d'installation pas à pas pour chaque plateforme. Notre équipe reste disponible pour le dépannage à distance, un avantage décisif quand on vit à l'étranger et qu'on ne peut pas compter sur un installateur local.`,
    ],
  },
];

export const cityPageContent: Record<CitySlug, CityPageContent> = {
  casablanca: {
    sections: [
      {
        paragraphs: [
          "Casablanca, capitale économique du Maroc, compte des millions de foyers connectés en fibre et 4G/5G. Mozaic.ma y est le fournisseur IPTV Maroc le plus demandé pour regarder Al Aoula, 2M, Arryadia et beIN Sports en IPTV 4K Maroc sans coupure. Du Maarif à Ain Sebaâ, en passant par Hay Mohammadi et Bouskoura, notre abonnement IPTV Maroc s'active en moins de 5 minutes via WhatsApp.",
          "Les Casaouis suivent la Botola, la Ligue des Champions et le Mondial 2026 sur Smart TV, box Android et mobile. Notre infrastructure anti-freeze garantit une diffusion fluide même aux heures de pointe, quand des centaines de milliers de spectateurs se connectent simultanément dans la métropole.",
        ],
      },
      ...moroccoBase("Casablanca", "Grand Casablanca-Settat").slice(1),
    ],
  },
  rabat: {
    sections: [
      {
        paragraphs: [
          "À Rabat, Salé et Témara, Mozaic.ma accompagne les foyers qui souhaitent le meilleur IPTV Maroc sans parabole. La capitale administrative attire une population exigeante en matière de qualité de streaming : IPTV HD Maroc stable, chaînes culturelles comme Athaqafia et Tamazight, et sport en direct sur Arryadia.",
          "Nos abonnés à Rabat profitent d'une couverture fibre excellente dans les quartiers Agdal, Hassan, Hay Riad et Salé Jadida. L'activation se fait entièrement à distance : contactez notre fournisseur IPTV Maroc sur WhatsApp et recevez vos identifiants instantanément.",
        ],
      },
      ...moroccoBase("Rabat", "Rabat-Salé-Kénitra").slice(1),
    ],
  },
  marrakech: {
    sections: [
      {
        paragraphs: [
          "Marrakech et sa région — Guéliz, Daoudiate, Ménara — adoptent massivement l'IPTV Maroc pour remplacer le satellite. Mozaic.ma propose plus de 48 000 chaînes, idéal pour les résidents permanents comme pour les riads et locations touristiques équipées en Smart TV.",
          "Pendant la CAN, le Ramadan ou le Mondial 2026, la demande explose dans la ville ocre. Notre technologie anti-freeze et nos serveurs redondants assurent une expérience IPTV 4K Maroc sans buffering, même quand la médina et les quartiers modernes regardent le même match en direct.",
        ],
      },
      ...moroccoBase("Marrakech", "Marrakech-Safi").slice(1),
    ],
  },
  fes: {
    sections: [
      {
        paragraphs: [
          "Fès, capitale spirituelle et culturelle du Maroc, mérite un service IPTV Maroc à la hauteur de son patrimoine. Mozaic.ma permet aux foyers fassis de retrouver Al Aoula, 2M, Assadissa et les chaînes culturelles en qualité premium, du centre historique à Narjiss et Saiss.",
          "La fibre progresse rapidement à Fès, rendant l'IPTV HD Maroc accessible à tous. Acheter IPTV Maroc chez nous, c'est choisir un fournisseur qui comprend les attentes des familles marocaines : programmes en arabe et en français, sport, religieux et divertissement.",
        ],
      },
      ...moroccoBase("Fès", "Fès-Meknès").slice(1),
    ],
  },
  tangier: {
    sections: [
      {
        paragraphs: [
          "Tanger, porte de l'Europe sur le détroit de Gibraltar, bénéficie d'une connexion internet de premier ordre. Mozaic.ma y déploie un IPTV Maroc optimisé pour la double audience : chaînes marocaines et bouquets espagnols/francophones, parfait pour les foyers biculturels du nord du Maroc.",
          "De Malabata à Charf, en passant par les zones industrielles, nos abonnés tangérois suivent la Botola et les compétitions européennes en IPTV 4K Maroc. La proximité avec l'Espagne rend notre service idéal pour ceux qui veulent le meilleur des deux mondes télévisuels.",
        ],
      },
      ...moroccoBase("Tanger", "Tanger-Tétouan-Al Hoceïma").slice(1),
    ],
  },
  agadir: {
    sections: [
      {
        paragraphs: [
          "À Agadir et dans le Souss-Massa, Mozaic.ma est le choix numéro un pour l'abonnement IPTV Maroc. La côte atlantique, de Talborjt à Inezgane, regorge de foyers équipés en Smart TV qui profitent de notre catalogue de +48 000 chaînes en IPTV HD Maroc et 4K.",
          "Les amateurs de sport à Agadir suivent Arryadia, beIN Sports et les compétitions internationales sans freeze. Notre support WhatsApp en français rassure les abonnés du sud marocain, loin des grandes métropoles mais parfaitement connectés.",
        ],
      },
      ...moroccoBase("Agadir", "Souss-Massa").slice(1),
    ],
  },
  meknes: {
    sections: [
      {
        paragraphs: [
          "Meknès, ville impériale en pleine modernisation numérique, adopte l'IPTV Maroc comme alternative au satellite. Mozaic.ma y propose un fournisseur IPTV Maroc fiable avec activation rapide et tarifs dès 149 MAD pour 3 mois.",
          "Les familles meknassiennes apprécient la richesse du catalogue : chaînes marocaines, françaises, arabes et VOD. La recharge IPTV Maroc se fait en un message WhatsApp, pratique pour les foyers qui ne veulent pas perdre de temps.",
        ],
      },
      ...moroccoBase("Meknès", "Fès-Meknès").slice(1),
    ],
  },
  oujda: {
    sections: [
      {
        paragraphs: [
          "Oujda et la région de l'Oriental profitent de Mozaic.ma pour accéder à toute la télévision marocaine en streaming. À deux pas de la frontière algérienne, les foyers oujdis veulent Al Aoula, 2M, Arryadia et les chaînes du Maghreb en qualité IPTV HD Maroc.",
          "Notre infrastructure couvre parfaitement l'est du Maroc. Que vous soyez à Oujda centre, Angad ou Naima, l'installation IPTV Maroc prend moins de 10 minutes avec notre guide personnalisé et le support de notre équipe technique.",
        ],
      },
      ...moroccoBase("Oujda", "l'Oriental").slice(1),
    ],
  },
  kenitra: {
    sections: [
      {
        paragraphs: [
          "Kénitra et la région côtière entre Rabat et Casablanca forment un bassin de population connecté qui adopte rapidement l'IPTV Maroc. Mozaic.ma y propose le meilleur rapport qualité-prix pour regarder la télévision marocaine en IPTV 4K Maroc sur tous les écrans du foyer.",
          "Les abonnés kénitris suivent la Botola, les émissions de Ramadan et les JT du soir sans parabole. Notre fournisseur IPTV Maroc assure une disponibilité de 99,9 % et une assistance WhatsApp réactive, essentielle pour les familles pressées.",
        ],
      },
      ...moroccoBase("Kénitra", "Rabat-Salé-Kénitra").slice(1),
    ],
  },
  tetouan: {
    sections: [
      {
        paragraphs: [
          "Tétouan, au cœur du Rif, combine traditions marocaines et influence méditerranéenne. Mozaic.ma y délivre un IPTV Maroc complet : chaînes locales, sport, culture amazighe sur Tamazight et bouquets internationaux pour toute la famille.",
          "La ville universitaire et les quartiers résidentiels de Tétouan bénéficient d'une connexion de plus en plus performante. Acheter IPTV Maroc chez Mozaic.ma, c'est accéder à +48 000 chaînes avec un support patient et en français, adapté à tous les niveaux techniques.",
        ],
      },
      ...moroccoBase("Tétouan", "Tanger-Tétouan-Al Hoceïma").slice(1),
    ],
  },
  paris: {
    sections: [
      {
        paragraphs: [
          "Paris et l'Île-de-France concentrent la plus grande communauté marocaine d'Europe. Mozaic.ma y est devenu le fournisseur IPTV Maroc de référence pour retrouver Al Aoula, 2M, Arryadia et les matchs de la sélection nationale comme au bled. Du 18e arrondissement à Montreuil, de Créteil à Cergy, nos abonnés parisiens profitent d'une latence minimale grâce à nos serveurs européens.",
          "L'hiver, pendant la CAN ou le Ramadan, la demande explose dans la capitale française. Notre IPTV 4K Maroc tient la charge sans coupure. Fini les paraboles interdites en copropriété : une simple connexion fibre Free, Orange ou SFR suffit.",
        ],
      },
      ...diasporaBase("Paris", "France").slice(1),
    ],
  },
  lyon: {
    sections: [
      {
        paragraphs: [
          "À Lyon, Villeurbanne et dans le Rhône, la diaspora marocaine suit Mozaic.ma pour ne rien manquer de l'actualité du royaume. JT de 2M, matchs de la Botola, émissions de Ramadan : tout est disponible en IPTV HD Maroc sur Smart TV et mobile.",
          "Les familles lyonnaises apprécient notre support en français et notre activation en 5 minutes. Que vous habitiez la Guillotière, Vénissieux ou Part-Dieu, acheter IPTV Maroc n'a jamais été aussi simple.",
        ],
      },
      ...diasporaBase("Lyon", "France").slice(1),
    ],
  },
  brussels: {
    sections: [
      {
        paragraphs: [
          "Bruxelles et la Belgique accueillent une communauté marocaine importante, notamment à Molenbeek, Schaerbeek et Anvers. Mozaic.ma leur permet de retrouver la télévision du Maroc en qualité premium, avec des serveurs optimisés pour le réseau belge (Proximus, VOO, Telenet).",
          "En Belgique, les paraboles sont rares en appartement. L'abonnement IPTV Maroc de Mozaic.ma est la solution idéale : discrète, économique et complète. Recharge IPTV Maroc en un clic WhatsApp, sans paperasse.",
        ],
      },
      ...diasporaBase("Bruxelles", "Belgique").slice(1),
    ],
  },
  madrid: {
    sections: [
      {
        paragraphs: [
          "Madrid et l'Espagne comptent des centaines de milliers de Marocains qui veulent suivre leurs chaînes nationales. Mozaic.ma répond avec un IPTV Maroc stable, des bouquets arabes et francophones, et une latence optimisée pour la péninsule ibérique.",
          "De Lavapiés à Getafe, nos abonnés madrilènes regardent la Botola, la Liga et les matchs du Maroc en IPTV 4K Maroc. L'installation sur Fire Stick et Smart TV est guidée par notre équipe en français.",
        ],
      },
      ...diasporaBase("Madrid", "Espagne").slice(1),
    ],
  },
  barcelona: {
    sections: [
      {
        paragraphs: [
          "Barcelone et la Catalogne attirent une forte communauté marocaine, notamment à Badalona, Hospitalet et Salt (Gérone). Mozaic.ma y propose le meilleur IPTV Maroc pour suivre Al Aoula, 2M et Arryadia depuis l'étranger, avec une qualité identique au Maroc.",
          "La connexion fibre en Espagne permet une expérience IPTV HD Maroc et 4K exceptionnelle. Nos tarifs en MAD restent compétitifs face aux offres satellite locales, avec bien plus de chaînes et une flexibilité totale.",
        ],
      },
      ...diasporaBase("Barcelone", "Espagne").slice(1),
    ],
  },
  amsterdam: {
    sections: [
      {
        paragraphs: [
          "Amsterdam et les Pays-Bas abritent une diaspora marocaine active qui suit Mozaic.ma pour la télévision du pays. Ziggo, KPN ou Odido : toutes les connexions néerlandaises sont compatibles avec notre abonnement IPTV Maroc.",
          "Aux Pays-Bas, où les paraboles sont quasi inexistantes en ville, l'IPTV Maroc est la norme pour les foyers marocains. Notre fournisseur IPTV Maroc offre +48 000 chaînes, VOD et support WhatsApp en français, un confort inestimable pour les expatriés.",
        ],
      },
      ...diasporaBase("Amsterdam", "Pays-Bas").slice(1),
    ],
  },
  montreal: {
    sections: [
      {
        paragraphs: [
          "Montréal et le Québec comptent l'une des plus grandes communautés marocaines d'Amérique du Nord. Mozaic.ma leur permet de retrouver Al Aoula, 2M, Arryadia et les émissions de Ramadan malgré le décalage horaire, grâce au replay et à la VOD intégrée.",
          "Au Canada, les abonnés montréalais profitent de connexions fibre performantes de Bell, Vidéotron ou Rogers. Notre IPTV 4K Maroc transforme le salon en véritable coin du Maroc, idéal pour les grands matchs et les fêtes familiales.",
        ],
      },
      ...diasporaBase("Montréal", "Canada").slice(1),
    ],
  },
  toronto: {
    sections: [
      {
        paragraphs: [
          "Toronto et l'Ontario accueillent une diaspora marocaine croissante à Scarborough, Etobicoke et Mississauga. Mozaic.ma est le pont télévisuel vers le Maroc : chaînes nationales, sport, culture et info en direct ou en replay.",
          "Les hivers canadiens se passent mieux avec un abonnement IPTV Maroc fiable. Notre support WhatsApp accompagne l'installation sur Fire Stick, Apple TV et Smart TV, même pour les moins technophiles de la famille.",
        ],
      },
      ...diasporaBase("Toronto", "Canada").slice(1),
    ],
  },
};

export function getCityContent(slug: CitySlug): CityPageContent {
  return cityPageContent[slug];
}
