export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  author: string;
  category: string;
  readingTime: number; // minutes
  cover: string;
  sections: { heading?: string; body: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "la-french-tech-au-cambodge",
    title: "La French Tech au Cambodge : une communauté qui accélère",
    excerpt:
      "Labellisée en 2019 et renouvelée pour 2026-2028, La French Tech Phnom Penh fédère un écosystème tech franco-cambodgien en pleine effervescence.",
    date: "2026-07-28",
    author: "La French Tech Phnom Penh",
    category: "Écosystème",
    readingTime: 4,
    cover: "/media/photos/phnompenh-skyline.jpg",
    sections: [
      {
        body: [
          "Née en 2015 à l'initiative d'entrepreneurs français installés au Cambodge, La French Tech Phnom Penh est devenue en quelques années un point de ralliement pour les fondateurs, investisseurs et talents tech du Royaume. Officiellement labellisée « Communauté French Tech » en 2019 par la Mission French Tech, elle a vu son label renouvelé pour la période 2026-2028 — un signe de la maturité croissante de l'écosystème local.",
        ],
      },
      {
        heading: "Un réseau mondial, un ancrage local",
        body: [
          "La French Tech, c'est aujourd'hui plus de 125 communautés dans 57 pays. Phnom Penh en est le relais cambodgien : une association à but non lucratif, portée par des bénévoles, qui connecte les acteurs de l'innovation locale et les ouvre au réseau international.",
          "Concrètement, la communauté rassemble une soixantaine de startups et organisations membres, présentes dans la fintech, la foodtech, l'IA, la cybersécurité, l'e-commerce, la logistique ou encore l'agritech.",
        ],
      },
      {
        heading: "Connecter, faire grandir, créer des ponts",
        body: [
          "Trois missions structurent l'action de la communauté. Connecter d'abord, à travers des soirées de networking, des Tech Talks et des ateliers ouverts à toutes les nationalités. Faire grandir ensuite, en apportant un accompagnement concret sur les sujets juridiques, fiscaux, de recrutement et de financement. Créer des ponts enfin, entre les startups françaises et les corporates cambodgiens, et entre l'écosystème local et le reste du réseau French Tech.",
          "Le premier grand événement de la communauté, en juin 2026, a réuni plus de 150 participants autour de l'IA et des marchés émergents. Un signal fort à quelques mois du Sommet de la Francophonie, que le Cambodge accueillera en novembre 2026.",
        ],
      },
    ],
  },
  {
    slug: "entreprises-francaises-au-cambodge",
    title: "Ces entreprises françaises qui misent sur le Cambodge",
    excerpt:
      "Plus de 200 entreprises françaises opèrent au Cambodge, de l'énergie à la banque en passant par la distribution. Panorama d'une présence qui s'ancre.",
    date: "2026-07-15",
    author: "La French Tech Phnom Penh",
    category: "Business",
    readingTime: 5,
    cover: "/media/photos/phnompenh-riverside.jpg",
    sections: [
      {
        body: [
          "Le Cambodge compte aujourd'hui plus de 200 entreprises françaises, ce qui fait de la France l'un des partenaires économiques de référence du Royaume. En 2025, les échanges commerciaux bilatéraux ont atteint 568 millions de dollars, en hausse de près de 12 %.",
        ],
      },
      {
        heading: "Des grands groupes bien installés",
        body: [
          "Dans l'énergie, TotalEnergies est présent de longue date. Côté banque, BRED Bank Cambodia porte les couleurs françaises dans un secteur financier en pleine modernisation. Dans l'hôtellerie, Accor et Sofitel opèrent plusieurs établissements à Phnom Penh et Siem Reap. La distribution, l'assurance et l'ingénierie complètent ce tableau.",
        ],
      },
      {
        heading: "Une nouvelle génération de startups",
        body: [
          "Au-delà des grands groupes, une génération de startups fondées par des entrepreneurs français ou franco-cambodgiens émerge : fintech, reverse logistics, foodtech anti-gaspillage, solutions data et IA. C'est précisément cet écosystème que La French Tech Phnom Penh fédère et met en relation avec les corporates et les investisseurs de la région.",
          "Institutions et entreprises avancent ensemble : la CCI France Cambodge, l'Ambassade de France et Business France accompagnent l'implantation et le développement des acteurs français dans le pays.",
        ],
      },
    ],
  },
  {
    slug: "sommet-francophonie-cambodge-2026",
    title: "Le Sommet de la Francophonie 2026 à Phnom Penh : ce qu'il faut savoir",
    excerpt:
      "Du 13 au 17 novembre 2026, le Cambodge accueille pour la première fois le Sommet de la Francophonie. Une occasion historique pour l'écosystème tech.",
    date: "2026-06-30",
    author: "La French Tech Phnom Penh",
    category: "Événement",
    readingTime: 4,
    cover: "/media/events/koh-pich-cbd.jpg",
    sections: [
      {
        body: [
          "Pour la deuxième fois seulement en Asie après Hanoï en 1997, le Sommet de la Francophonie se tiendra à Phnom Penh du 13 au 17 novembre 2026. Plus de 90 pays et gouvernements sont attendus, en présence de chefs d'État et de gouvernement, sous l'égide de l'Organisation Internationale de la Francophonie.",
        ],
      },
      {
        heading: "100 000 visiteurs attendus",
        body: [
          "Cinq jours d'événements culmineront avec le 20ᵉ Sommet officiel les 15 et 16 novembre. Le Royaume attend plus de 100 000 visiteurs — l'un des plus grands événements internationaux jamais organisés par le Cambodge.",
        ],
      },
      {
        heading: "La tech au cœur du programme",
        body: [
          "Le volet économique et technologique du Sommet, FrancoTech, se tiendra à Koh Pich du 14 au 16 novembre. La French Tech Phnom Penh y disposera d'un pavillon dédié et y organisera ses propres événements : soirée des communautés internationales, business matching startups-investisseurs, tables rondes et réceptions.",
          "Pour les startups et les entreprises, c'est une opportunité rare de connecter en un seul lieu délégations gouvernementales, dirigeants de grands groupes, investisseurs et acteurs de l'innovation du monde francophone et de l'Asie.",
        ],
      },
    ],
  },
  {
    slug: "entreprendre-au-cambodge-guide",
    title: "Entreprendre au Cambodge : le guide de démarrage",
    excerpt:
      "Création de société, fiscalité, recrutement, banque : les fondamentaux pour lancer son activité au Cambodge quand on est fondateur étranger.",
    date: "2026-06-10",
    author: "La French Tech Phnom Penh",
    category: "Guide",
    readingTime: 6,
    cover: "/media/photos/phnompenh-street.jpg",
    sections: [
      {
        body: [
          "Le Cambodge est l'une des économies les plus dynamiques de l'ASEAN, avec un PIB de près de 49 milliards de dollars en 2025 et une ouverture commerciale parmi les plus élevées de la région. Pour un fondateur étranger, le pays offre un cadre accessible — à condition d'en connaître les fondamentaux.",
        ],
      },
      {
        heading: "Créer sa société",
        body: [
          "La forme la plus courante est la Private Limited Company, qui peut être détenue à 100 % par des étrangers dans la plupart des secteurs. L'immatriculation se fait en ligne via le guichet unique du gouvernement. Comptez quelques semaines et prévoyez un capital social minimal.",
        ],
      },
      {
        heading: "Fiscalité et banque",
        body: [
          "Le dollar américain est utilisé partout, le riel servant pour les petites transactions. L'impôt sur les sociétés, la TVA et les obligations déclaratives mensuelles nécessitent un bon comptable local dès le départ. L'ouverture d'un compte professionnel est simple auprès des banques de la place, dont BRED Bank Cambodia.",
        ],
      },
      {
        heading: "Recruter et s'entourer",
        body: [
          "Le vivier de talents tech se structure rapidement, porté par des institutions comme la CADT. S'entourer de l'écosystème — chambres de commerce, communautés, mentors — accélère considérablement l'implantation. C'est l'un des rôles de La French Tech Phnom Penh : ouvrir son carnet d'adresses aux nouveaux arrivants.",
        ],
      },
    ],
  },
  {
    slug: "francotech-vitrine-tech-francophonie",
    title: "FrancoTech : la vitrine tech du Sommet de la Francophonie",
    excerpt:
      "5 000 visiteurs, 110 exposants, 10 pavillons nationaux : FrancoTech est le rendez-vous économique et tech du Sommet. La French Tech y aura son pavillon.",
    date: "2026-07-01",
    author: "La French Tech Phnom Penh",
    category: "Événement",
    readingTime: 3,
    cover: "/media/events/francotech-poster.jpg",
    sections: [
      {
        body: [
          "FrancoTech est l'exposition phare, économique et technologique, du Sommet de la Francophonie. L'édition 2026, à Koh Pich du 14 au 16 novembre, réunira gouvernements, entreprises, investisseurs et startups de tout l'espace francophone : plus de 5 000 visiteurs, 110 exposants et une dizaine de pavillons nationaux sont attendus.",
        ],
      },
      {
        heading: "Le pavillon La French Tech",
        body: [
          "La French Tech Phnom Penh y animera un pavillon dédié, mettant en avant l'innovation cambodgienne aux côtés des communautés French Tech d'Asie, avec un accès privilégié aux délégations officielles. Au programme : une table ronde thématique, des sessions de business matching et des rencontres avec les institutions.",
          "Le thème retenu : « Scaling Across the Francophonie Network » — comment la French Tech permet aux startups de passer à l'échelle à l'international.",
        ],
      },
    ],
  },
  {
    slug: "lever-des-fonds-au-cambodge",
    title: "Lever des fonds au Cambodge : l'écosystème du financement",
    excerpt:
      "Business angels, fonds d'impact, capital-risque régional : tour d'horizon des sources de financement pour les startups au Cambodge.",
    date: "2026-05-20",
    author: "La French Tech Phnom Penh",
    category: "Financement",
    readingTime: 5,
    cover: "/media/photos/phnompenh-night.jpg",
    sections: [
      {
        body: [
          "L'écosystème cambodgien du financement se structure vite. Selon les bases de données sectorielles, le pays compte plus de 1 700 startups et un total cumulé de plus de 1,3 milliard de dollars levés, tous stades confondus. Les tickets d'amorçage restent modestes mais les opportunités se multiplient.",
        ],
      },
      {
        heading: "Des acteurs locaux et régionaux",
        body: [
          "Plusieurs fonds d'impact et véhicules d'investissement locaux, comme le Canadia Impact Fund, accompagnent les entrepreneurs cambodgiens. À l'échelle régionale, les investisseurs actifs en ASEAN — de Singapour à Tokyo — s'intéressent de plus en plus au Cambodge, notamment dans la fintech et la logistique.",
        ],
      },
      {
        heading: "Le rôle de la communauté",
        body: [
          "La French Tech Phnom Penh joue un rôle de mise en relation : ses sessions de business matching connectent les startups aux fonds, business angels et partenaires stratégiques. Le Sommet de la Francophonie 2026 offrira une occasion unique de rencontrer, en un seul lieu, investisseurs et corporates du monde francophone.",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) =>
  articles.find((a) => a.slug === slug);
