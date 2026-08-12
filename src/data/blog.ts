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
    title: "French Tech in Cambodia: a community picking up speed",
    excerpt:
      "Labeled in 2019 and renewed for 2026-2028, La French Tech Phnom Penh brings together a fast-growing French–Cambodian tech ecosystem.",
    date: "2026-07-28",
    author: "La French Tech Phnom Penh",
    category: "Ecosystem",
    readingTime: 4,
    cover: "/media/photos/phnompenh-skyline.jpg",
    sections: [
      {
        body: [
          "Founded in 2015 by French entrepreneurs based in Cambodia, La French Tech Phnom Penh has become, in just a few years, a rallying point for founders, investors and tech talent in the Kingdom. Officially labeled a “French Tech Community” in 2019 by the French Tech Mission, it saw its label renewed for the 2026-2028 period — a sign of the growing maturity of the local ecosystem.",
        ],
      },
      {
        heading: "A global network, a local anchor",
        body: [
          "La French Tech is today more than 125 communities across 57 countries. Phnom Penh is its Cambodian relay: a non-profit association, driven by volunteers, that connects local innovation players and opens them up to the international network.",
          "In practice, the community gathers around sixty member startups and organizations — active in fintech, foodtech, AI, cybersecurity, e-commerce, logistics and agritech.",
        ],
      },
      {
        heading: "Connect, grow, build bridges",
        body: [
          "Three missions structure the community's work. Connect first, through networking evenings, Tech Talks and workshops open to all nationalities. Grow next, by providing concrete support on legal, tax, hiring and funding matters. Build bridges finally — between French startups and Cambodian corporates, and between the local ecosystem and the wider French Tech network.",
          "The community's first flagship event, in June 2026, drew more than 150 attendees around AI and emerging markets. A strong signal a few months ahead of the Francophonie Summit, which Cambodia hosts in November 2026.",
        ],
      },
    ],
  },
  {
    slug: "entreprises-francaises-au-cambodge",
    title: "The French companies betting on Cambodia",
    excerpt:
      "More than 200 French companies operate in Cambodia, from energy to banking and retail. A look at a footprint that keeps growing.",
    date: "2026-07-15",
    author: "La French Tech Phnom Penh",
    category: "Business",
    readingTime: 5,
    cover: "/media/photos/phnompenh-riverside.jpg",
    sections: [
      {
        body: [
          "Cambodia is now home to more than 200 French companies, making France one of the Kingdom's leading economic partners. In 2025, bilateral trade reached 568 million dollars, up nearly 12%.",
        ],
      },
      {
        heading: "Well-established large groups",
        body: [
          "In energy, TotalEnergies has a long-standing presence. In banking, BRED Bank Cambodia flies the French flag in a fast-modernizing financial sector. In hospitality, Accor and Sofitel operate several properties in Phnom Penh and Siem Reap. Retail, insurance and engineering round out the picture.",
        ],
      },
      {
        heading: "A new generation of startups",
        body: [
          "Beyond the large groups, a generation of startups founded by French or French–Cambodian entrepreneurs is emerging: fintech, reverse logistics, anti-waste foodtech, data and AI solutions. This is precisely the ecosystem that La French Tech Phnom Penh brings together and connects with the region's corporates and investors.",
          "Institutions and companies move forward together: CCI France Cambodge, the Embassy of France and Business France support the establishment and growth of French players in the country.",
        ],
      },
    ],
  },
  {
    slug: "sommet-francophonie-cambodge-2026",
    title: "The 2026 Francophonie Summit in Phnom Penh: what to know",
    excerpt:
      "From 13 to 17 November 2026, Cambodia hosts the Francophonie Summit for the first time. A historic moment for the tech ecosystem.",
    date: "2026-06-30",
    author: "La French Tech Phnom Penh",
    category: "Event",
    readingTime: 4,
    cover: "/media/events/koh-pich-cbd.jpg",
    sections: [
      {
        body: [
          "For only the second time in Asia after Hanoi in 1997, the Francophonie Summit will be held in Phnom Penh from 13 to 17 November 2026. More than 90 countries and governments are expected, with Heads of State and government, under the aegis of the Organisation Internationale de la Francophonie.",
        ],
      },
      {
        heading: "100,000 visitors expected",
        body: [
          "Five days of events will culminate with the official 20th Summit on 15 and 16 November. The Kingdom expects more than 100,000 visitors — one of the largest international events ever hosted by Cambodia.",
        ],
      },
      {
        heading: "Tech at the heart of the programme",
        body: [
          "The Summit's economic and technology strand, FrancoTech, takes place at Koh Pich from 14 to 16 November. La French Tech Phnom Penh will run a dedicated pavilion and host its own events: an international communities evening, startup–investor business matching, roundtables and receptions.",
          "For startups and companies, it is a rare opportunity to connect government delegations, executives of major groups, investors and innovation players from the Francophone world and Asia — all in one place.",
        ],
      },
    ],
  },
  {
    slug: "entreprendre-au-cambodge-guide",
    title: "Doing business in Cambodia: the getting-started guide",
    excerpt:
      "Company formation, tax, hiring, banking: the essentials to launch your business in Cambodia as a foreign founder.",
    date: "2026-06-10",
    author: "La French Tech Phnom Penh",
    category: "Guide",
    readingTime: 6,
    cover: "/media/photos/phnompenh-street.jpg",
    sections: [
      {
        body: [
          "Cambodia is one of ASEAN's most dynamic economies, with a GDP of nearly 49 billion dollars in 2025 and one of the highest trade-openness ratios in the region. For a foreign founder, the country offers an accessible environment — provided you know the fundamentals.",
        ],
      },
      {
        heading: "Setting up your company",
        body: [
          "The most common structure is the Private Limited Company, which can be 100% foreign-owned in most sectors. Registration is done online through the government's single window. Allow a few weeks and plan for a minimum share capital.",
        ],
      },
      {
        heading: "Tax and banking",
        body: [
          "The US dollar is used everywhere, with the riel serving for small transactions. Corporate income tax, VAT and monthly filing obligations call for a good local accountant from day one. Opening a business account is straightforward with local banks, including BRED Bank Cambodia.",
        ],
      },
      {
        heading: "Hiring and surrounding yourself",
        body: [
          "The tech talent pool is structuring quickly, supported by institutions such as CADT. Surrounding yourself with the ecosystem — chambers of commerce, communities, mentors — dramatically accelerates your setup. That's one of the roles of La French Tech Phnom Penh: opening its address book to newcomers.",
        ],
      },
    ],
  },
  {
    slug: "francotech-vitrine-tech-francophonie",
    title: "FrancoTech: the tech showcase of the Francophonie Summit",
    excerpt:
      "5,000 visitors, 110 exhibitors, 10 national pavilions: FrancoTech is the Summit's economic and tech event. La French Tech will have its pavilion.",
    date: "2026-07-01",
    author: "La French Tech Phnom Penh",
    category: "Event",
    readingTime: 3,
    cover: "/media/events/francotech-poster.jpg",
    sections: [
      {
        body: [
          "FrancoTech is the flagship economic and technology exhibition of the Francophonie Summit. The 2026 edition, at Koh Pich from 14 to 16 November, will bring together governments, companies, investors and startups from across the Francophone world: more than 5,000 visitors, 110 exhibitors and around ten national pavilions are expected.",
        ],
      },
      {
        heading: "The La French Tech pavilion",
        body: [
          "La French Tech Phnom Penh will run a dedicated pavilion, showcasing Cambodian innovation alongside the French Tech communities of Asia, with privileged access to official delegations. On the programme: a thematic roundtable, business matching sessions and meetings with institutions.",
          "The chosen theme: “Scaling Across the Francophonie Network” — how French Tech enables startups to scale internationally.",
        ],
      },
    ],
  },
  {
    slug: "lever-des-fonds-au-cambodge",
    title: "Raising funds in Cambodia: the financing ecosystem",
    excerpt:
      "Business angels, impact funds, regional venture capital: an overview of funding sources for startups in Cambodia.",
    date: "2026-05-20",
    author: "La French Tech Phnom Penh",
    category: "Financing",
    readingTime: 5,
    cover: "/media/photos/phnompenh-night.jpg",
    sections: [
      {
        body: [
          "Cambodia's financing ecosystem is structuring fast. According to industry databases, the country has more than 1,700 startups and a cumulative total of over 1.3 billion dollars raised across all stages. Seed tickets remain modest, but opportunities are multiplying.",
        ],
      },
      {
        heading: "Local and regional players",
        body: [
          "Several local impact funds and investment vehicles, such as the Canadia Impact Fund, support Cambodian entrepreneurs. Regionally, investors active across ASEAN — from Singapore to Tokyo — are increasingly interested in Cambodia, notably in fintech and logistics.",
        ],
      },
      {
        heading: "The community's role",
        body: [
          "La French Tech Phnom Penh plays a matchmaking role: its business matching sessions connect startups with funds, business angels and strategic partners. The 2026 Francophonie Summit will offer a unique chance to meet investors and corporates from the Francophone world — all in one place.",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) =>
  articles.find((a) => a.slug === slug);
