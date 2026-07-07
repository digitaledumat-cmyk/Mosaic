export type LegalSection = {
  title: string;
  paragraphs: string[];
};

export type LegalPageContent = {
  slug: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

const UPDATED = "25 juin 2025";

export const legalPages: Record<string, LegalPageContent> = {
  "mentions-legales": {
    slug: "mentions-legales",
    title: "Mentions légales",
    intro:
      "Informations légales relatives au site Mozaic.ma, fournisseur IPTV Maroc, édité et exploité conformément à la réglementation en vigueur.",
    updated: UPDATED,
    sections: [
      {
        title: "1. Éditeur du site",
        paragraphs: [
          "Le site Mozaic.ma est édité par Mozaic.ma, service de distribution d'abonnements IPTV Maroc à destination des utilisateurs résidant au Maroc et dans la diaspora.",
          "Contact : contact@mozaic.ma — Support commercial et technique via WhatsApp.",
        ],
      },
      {
        title: "2. Hébergement",
        paragraphs: [
          "Le site est hébergé par un prestataire professionnel garantissant la disponibilité, la sécurité et la performance des services web.",
          "Les serveurs de streaming associés à l'abonnement IPTV Maroc sont distincts de l'hébergement du site vitrine.",
        ],
      },
      {
        title: "3. Propriété intellectuelle",
        paragraphs: [
          "L'ensemble des éléments graphiques, textuels et structurels du site Mozaic.ma est protégé par le droit de la propriété intellectuelle.",
          "Toute reproduction, représentation ou exploitation non autorisée est strictement interdite.",
        ],
      },
      {
        title: "4. Responsabilité",
        paragraphs: [
          "Mozaic.ma s'efforce d'assurer l'exactitude des informations publiées. Toutefois, le site ne saurait garantir l'absence totale d'erreurs ou d'interruptions.",
          "L'utilisateur est seul responsable de l'usage qu'il fait du service IPTV Maroc et de la conformité de cet usage avec la législation de son pays de résidence.",
        ],
      },
    ],
  },
  "conditions-utilisation": {
    slug: "conditions-utilisation",
    title: "Conditions générales d'utilisation",
    intro:
      "Les présentes conditions régissent l'accès et l'utilisation des services proposés par Mozaic.ma, fournisseur IPTV Maroc.",
    updated: UPDATED,
    sections: [
      {
        title: "1. Objet",
        paragraphs: [
          "Les présentes Conditions Générales d'Utilisation (CGU) définissent les modalités d'accès au site et d'utilisation des services d'abonnement IPTV Maroc proposés par Mozaic.ma.",
          "En achetant IPTV Maroc ou en effectuant une recharge IPTV Maroc, l'utilisateur accepte sans réserve les présentes CGU.",
        ],
      },
      {
        title: "2. Description du service",
        paragraphs: [
          "Mozaic.ma fournit un accès technique à un catalogue de flux télévisuels et de contenus VOD via protocole IPTV, en qualité IPTV HD Maroc et IPTV 4K Maroc selon la formule souscrite.",
          "Le service nécessite une connexion Internet stable et un appareil compatible.",
        ],
      },
      {
        title: "3. Compte et activation",
        paragraphs: [
          "L'activation de l'abonnement IPTV Maroc intervient après confirmation du paiement et validation par notre équipe.",
          "Les identifiants fournis sont personnels et ne doivent pas être partagés au-delà des limites prévues par la formule choisie.",
        ],
      },
      {
        title: "4. Obligations de l'utilisateur",
        paragraphs: [
          "L'utilisateur s'engage à utiliser le service de manière licite, à ne pas revendre ou redistribuer les accès sans autorisation, et à ne pas tenter de contourner les mesures techniques de protection.",
          "Tout usage abusif peut entraîner la suspension immédiate du service sans remboursement.",
        ],
      },
      {
        title: "5. Disponibilité",
        paragraphs: [
          "Mozaic.ma met en œuvre les moyens raisonnables pour assurer une disponibilité optimale. Des opérations de maintenance ou des incidents réseau peuvent occasionner des interruptions temporaires.",
        ],
      },
      {
        title: "6. Modification des CGU",
        paragraphs: [
          "Mozaic.ma se réserve le droit de modifier les présentes CGU. Les utilisateurs seront informés des changements substantiels par tout moyen approprié.",
        ],
      },
    ],
  },
  "politique-utilisation-acceptable": {
    slug: "politique-utilisation-acceptable",
    title: "Politique d'utilisation acceptable",
    intro:
      "Cette politique définit les usages autorisés et interdits du service IPTV Maroc fourni par Mozaic.ma.",
    updated: UPDATED,
    sections: [
      {
        title: "1. Usages autorisés",
        paragraphs: [
          "Le service est destiné à un usage personnel et familial de télévision en streaming dans le cadre de l'abonnement IPTV Maroc souscrit.",
          "L'installation sur les appareils prévus par la formule (Smart TV, box, mobile) est autorisée.",
        ],
      },
      {
        title: "2. Usages interdits",
        paragraphs: [
          "Sont strictement interdits : la revente des accès, le partage public des identifiants, le piratage, l'ingénierie inverse, l'attaque des serveurs et toute utilisation à des fins commerciales non autorisées.",
          "Toute tentative de saturation volontaire du réseau ou d'extraction massive de contenus est prohibée.",
        ],
      },
      {
        title: "3. Sanctions",
        paragraphs: [
          "En cas de violation, Mozaic.ma peut suspendre ou résilier l'accès sans préavis ni remboursement, et conserver les éléments nécessaires en cas de litige.",
        ],
      },
    ],
  },
  "conformite-rgpd": {
    slug: "conformite-rgpd",
    title: "Conformité RGPD",
    intro:
      "Mozaic.ma s'engage à protéger les données personnelles de ses utilisateurs conformément au Règlement Général sur la Protection des Données (RGPD).",
    updated: UPDATED,
    sections: [
      {
        title: "1. Responsable du traitement",
        paragraphs: [
          "Le responsable du traitement des données est Mozaic.ma, joignable à contact@mozaic.ma.",
        ],
      },
      {
        title: "2. Données collectées",
        paragraphs: [
          "Nous collectons uniquement les données nécessaires à la fourniture du service : nom, coordonnées, historique de commande et informations techniques de connexion.",
          "Aucune donnée superflue n'est collectée sans consentement.",
        ],
      },
      {
        title: "3. Finalités et bases légales",
        paragraphs: [
          "Les données sont traitées pour l'exécution du contrat d'abonnement IPTV Maroc, le support client et le respect des obligations légales.",
        ],
      },
      {
        title: "4. Droits des personnes",
        paragraphs: [
          "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité.",
          "Pour exercer vos droits, contactez-nous à contact@mozaic.ma.",
        ],
      },
      {
        title: "5. Conservation et sécurité",
        paragraphs: [
          "Les données sont conservées pendant la durée nécessaire à la relation contractuelle et aux obligations légales.",
          "Des mesures techniques et organisationnelles appropriées protègent vos informations contre l'accès non autorisé.",
        ],
      },
    ],
  },
  "politique-dmca": {
    slug: "politique-dmca",
    title: "Politique DMCA",
    intro:
      "Mozaic.ma respecte les droits de propriété intellectuelle et traite les signalements conformément aux principes de la Digital Millennium Copyright Act (DMCA).",
    updated: UPDATED,
    sections: [
      {
        title: "1. Signalement d'infraction",
        paragraphs: [
          "Si vous estimez qu'un contenu accessible via notre infrastructure porte atteinte à vos droits d'auteur, vous pouvez nous adresser une notification écrite à contact@mozaic.ma.",
          "La notification doit inclure : identification de l'œuvre protégée, description du contenu litigieux, vos coordonnées et une déclaration de bonne foi.",
        ],
      },
      {
        title: "2. Traitement des réclamations",
        paragraphs: [
          "Nous examinons chaque signalement dans un délai raisonnable et pouvons retirer ou restreindre l'accès au contenu concerné le cas échéant.",
        ],
      },
      {
        title: "3. Contre-notification",
        paragraphs: [
          "L'utilisateur concerné peut soumettre une contre-notification s'il estime que le retrait est erroné, sous réserve de fournir les éléments requis par la loi applicable.",
        ],
      },
    ],
  },
  "politique-confidentialite": {
    slug: "politique-confidentialite",
    title: "Politique de confidentialité",
    intro:
      "Cette politique explique comment Mozaic.ma collecte, utilise et protège vos données dans le cadre de votre abonnement IPTV Maroc.",
    updated: UPDATED,
    sections: [
      {
        title: "1. Collecte des informations",
        paragraphs: [
          "Lorsque vous achetez IPTV Maroc ou demandez une recharge IPTV Maroc, nous recueillons les informations nécessaires au traitement de votre commande et à l'assistance technique.",
          "Des données de navigation anonymisées peuvent être collectées pour améliorer le site.",
        ],
      },
      {
        title: "2. Utilisation des données",
        paragraphs: [
          "Vos données servent à activer votre service, vous contacter pour le support, traiter les paiements et vous informer des mises à jour importantes.",
          "Nous ne vendons pas vos données à des tiers.",
        ],
      },
      {
        title: "3. Cookies",
        paragraphs: [
          "Le site peut utiliser des cookies techniques nécessaires à son fonctionnement et des cookies analytiques pour mesurer l'audience de manière agrégée.",
          "Vous pouvez configurer votre navigateur pour refuser les cookies non essentiels.",
        ],
      },
      {
        title: "4. Contact",
        paragraphs: [
          "Pour toute question relative à la confidentialité : contact@mozaic.ma.",
        ],
      },
    ],
  },
  "remboursement-et-retour": {
    slug: "remboursement-et-retour",
    title: "Politique de remboursement et de retour",
    intro:
      "Conditions applicables aux remboursements et annulations pour les abonnements IPTV Maroc souscrits auprès de Mozaic.ma.",
    updated: UPDATED,
    sections: [
      {
        title: "1. Nature du service",
        paragraphs: [
          "L'abonnement IPTV Maroc est un service numérique activé à distance. Dès l'envoi des identifiants, le service est considéré comme consommé.",
        ],
      },
      {
        title: "2. Droit de rétractation",
        paragraphs: [
          "Conformément à la nature des contenus numériques fournis immédiatement après activation, le droit de rétractation peut ne pas s'appliquer une fois le service activé avec votre accord.",
        ],
      },
      {
        title: "3. Remboursements",
        paragraphs: [
          "Un remboursement peut être étudié au cas par cas en cas de dysfonctionnement majeur non résolu par notre support dans un délai de 72 heures.",
          "Aucun remboursement ne sera accordé en cas de violation des conditions d'utilisation ou de mauvaise configuration côté utilisateur.",
        ],
      },
      {
        title: "4. Procédure",
        paragraphs: [
          "Toute demande de remboursement doit être adressée à contact@mozaic.ma ou via WhatsApp avec votre numéro de commande et une description du problème.",
        ],
      },
    ],
  },
};

export function getLegalPage(slug: string): LegalPageContent | undefined {
  return legalPages[slug];
}
