export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string; // SEO <meta description>
  keywords: string[]; // SEO keywords
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
    metaDescription:
      "La French Tech Phnom Penh is the official French Tech community in Cambodia. Discover the French–Cambodian tech ecosystem, its startups, board and events.",
    keywords: [
      "French Tech Cambodia",
      "French Tech Phnom Penh",
      "tech ecosystem Cambodia",
      "startup community Cambodia",
      "French Tech Community label",
      "startups Phnom Penh",
    ],
    date: "2026-07-28",
    author: "La French Tech Phnom Penh",
    category: "Ecosystem",
    readingTime: 5,
    cover: "/media/photos/phnompenh-skyline.jpg",
    sections: [
      {
        body: [
          "French Tech in Cambodia is no longer a niche. Founded in 2015 by French entrepreneurs based in Phnom Penh, La French Tech Phnom Penh has become, in just a few years, the rallying point for founders, investors and tech talent across the Kingdom. Officially awarded the “French Tech Community” label in 2019 by the French Tech Mission, the community saw that label renewed for the 2026-2028 cycle — a clear signal of how quickly the local tech ecosystem in Cambodia is maturing.",
          "For any entrepreneur looking at Cambodia, understanding this community is the fastest way to plug into the country's innovation scene. It is where French, Cambodian and international players meet, share market knowledge, and open doors that would otherwise take years to find.",
        ],
      },
      {
        heading: "A global French Tech network with a local anchor",
        body: [
          "La French Tech is today a network of more than 125 communities across 57 countries, backed by the French government and driven by volunteers. French Tech Phnom Penh is its Cambodian relay: a non-profit association that connects local innovation players and opens them up to this worldwide network.",
          "In practice, the French Tech Phnom Penh community brings together around sixty member startups and organizations. They span fintech, foodtech, artificial intelligence, cybersecurity, e-commerce, logistics and agritech — a genuine cross-section of Cambodia's emerging digital economy. Being part of the community means visibility inside Cambodia and a direct line to French Tech capitals and communities from Singapore and Bangkok to Paris.",
        ],
      },
      {
        heading: "Connect, grow, build bridges",
        body: [
          "Three missions structure the community's work in Cambodia. First, connect: monthly networking evenings, Tech Talks and workshops, all free and open to every nationality. Second, grow: concrete support for founders on the practical realities of building in Cambodia — legal structure, tax, hiring and access to funding. Third, build bridges: linking French startups with Cambodian corporates, and connecting the local ecosystem to the wider French Tech network.",
          "That model is already producing results. The community's first flagship event, in June 2026, drew more than 150 attendees around artificial intelligence and emerging markets — a strong signal a few months ahead of the Francophonie Summit that Cambodia hosts in November 2026.",
        ],
      },
      {
        heading: "Why it matters for founders and investors",
        body: [
          "Cambodia is one of the fastest-growing economies in ASEAN, and its startup ecosystem is structuring rapidly. For a founder, joining French Tech Phnom Penh shortens the learning curve of entering a new market. For an investor, it is a curated window onto vetted Cambodian and French–Cambodian startups. For a corporate, it is a shortcut to innovation partners on the ground.",
          "Membership is free for startups. If you are building, investing or hiring in Cambodia, the French Tech Phnom Penh community is the network worth joining first.",
        ],
      },
    ],
  },
  {
    slug: "entreprises-francaises-au-cambodge",
    title: "The French companies betting on Cambodia",
    excerpt:
      "More than 200 French companies operate in Cambodia, from energy to banking and retail. A look at a footprint that keeps growing.",
    metaDescription:
      "More than 200 French companies operate in Cambodia. Explore France–Cambodia trade, the sectors involved, and how to invest or set up business in Cambodia.",
    keywords: [
      "French companies in Cambodia",
      "France Cambodia trade",
      "invest in Cambodia",
      "French business Cambodia",
      "Business France Cambodia",
      "doing business in Cambodia",
    ],
    date: "2026-07-15",
    author: "La French Tech Phnom Penh",
    category: "Business",
    readingTime: 6,
    cover: "/media/photos/phnompenh-riverside.jpg",
    sections: [
      {
        body: [
          "French companies in Cambodia are far more numerous than most people realize. The Kingdom is now home to more than 200 French companies, making France one of Cambodia's leading European economic partners. In 2025, bilateral trade between France and Cambodia reached 568 million dollars, up nearly 12% year on year — a trajectory that keeps drawing new French investors to Cambodia.",
          "This footprint spans the whole economy, from long-established multinationals to a new wave of French-founded startups. For anyone weighing an entry into the Cambodian market, that established French presence is both a reassurance and a ready-made network.",
        ],
      },
      {
        heading: "Well-established large groups",
        body: [
          "In energy, TotalEnergies has a long-standing presence across Cambodia. In banking, BRED Bank Cambodia flies the French flag in a financial sector that is modernizing fast. In hospitality, Accor and its Sofitel brand operate flagship properties in Phnom Penh and Siem Reap. Retail, insurance, engineering and agrifood complete a picture of French business that is diversified and durable.",
          "These groups are more than symbols: they employ thousands of people, train local talent, and anchor France's economic credibility in Cambodia — which in turn benefits every smaller French company arriving in the market.",
        ],
      },
      {
        heading: "A new generation of French–Cambodian startups",
        body: [
          "Beyond the large groups, a generation of startups founded by French or French–Cambodian entrepreneurs is emerging in Cambodia: fintech, reverse logistics, anti-waste foodtech, data and artificial intelligence. These founders are betting that Cambodia's young, digital-first population and its position at the heart of ASEAN make it an ideal launchpad.",
          "This is precisely the ecosystem that La French Tech Phnom Penh federates, connecting these startups with the region's corporates, investors and institutions — and giving them a platform far bigger than Cambodia alone.",
        ],
      },
      {
        heading: "The institutions that make it possible",
        body: [
          "French companies do not arrive in Cambodia on their own. CCI France Cambodge, the Embassy of France in Cambodia and Business France actively support the setup and growth of French players in the country — from market studies and introductions to regulatory guidance. Together with the French Tech community, they form a support system that makes doing business in Cambodia significantly less daunting for newcomers.",
        ],
      },
    ],
  },
  {
    slug: "sommet-francophonie-cambodge-2026",
    title: "The 2026 Francophonie Summit in Phnom Penh: what to know",
    excerpt:
      "From 13 to 17 November 2026, Cambodia hosts the Francophonie Summit for the first time. A historic moment for the tech ecosystem.",
    metaDescription:
      "The 2026 Francophonie Summit takes place in Phnom Penh, 13–17 November. Dates, programme, FrancoTech and what it means for Cambodia's tech ecosystem.",
    keywords: [
      "Francophonie Summit Phnom Penh",
      "Francophonie Summit 2026",
      "Sommet de la Francophonie Cambodia",
      "FrancoTech",
      "Cambodia 2026 events",
      "French Tech Asia Forum",
    ],
    date: "2026-06-30",
    author: "La French Tech Phnom Penh",
    category: "Event",
    readingTime: 5,
    cover: "/media/events/koh-pich-cbd.jpg",
    sections: [
      {
        body: [
          "The 2026 Francophonie Summit in Phnom Penh is shaping up to be one of the most important international events Cambodia has ever hosted. For only the second time in Asia after Hanoi in 1997, the Francophonie Summit will be held in Cambodia — from 13 to 17 November 2026. More than 90 countries and governments are expected, with Heads of State and government gathering under the aegis of the Organisation Internationale de la Francophonie (OIF).",
          "For founders, investors and companies watching Cambodia, the Francophonie Summit is not just a diplomatic milestone. It is a rare, concentrated moment where the whole Francophone world — and a large slice of Asia's innovation ecosystem — converges on Phnom Penh.",
        ],
      },
      {
        heading: "100,000 visitors expected in Phnom Penh",
        body: [
          "Five days of events will culminate with the official 20th Francophonie Summit on 15 and 16 November. The Kingdom expects more than 100,000 visitors over the week, making it one of the largest international gatherings Cambodia has organized. Hotels, venues and the city's new convention infrastructure at Koh Pich are all being mobilized for the occasion.",
        ],
      },
      {
        heading: "Tech at the heart of the programme: FrancoTech",
        body: [
          "The Summit's economic and technology strand, FrancoTech, takes place at Koh Pich from 14 to 16 November 2026. This is where the innovation story of the Francophonie Summit is told, with governments, companies, investors and startups exhibiting side by side.",
          "La French Tech Phnom Penh will run a dedicated pavilion at FrancoTech and host its own French Tech Asia Forum: an international communities evening, startup–investor business matching, thematic roundtables and receptions. For a startup, it is a chance to meet government delegations, executives of major groups and investors from across the Francophone world and Asia — all in one place, in one week.",
        ],
      },
      {
        heading: "How to take part",
        body: [
          "Whether you are a startup, an investor or a partner, you can register your interest for the French Tech events during the Summit week. Places at flagship sessions are limited, and early registration helps the team tailor introductions and business matching. The Francophonie Summit only comes to Cambodia once — this is the moment to be in the room.",
        ],
      },
    ],
  },
  {
    slug: "entreprendre-au-cambodge-guide",
    title: "Doing business in Cambodia: the getting-started guide",
    excerpt:
      "Company formation, tax, hiring, banking: the essentials to launch your business in Cambodia as a foreign founder.",
    metaDescription:
      "A practical guide to doing business in Cambodia: company registration, tax, banking and hiring for foreign founders launching a startup in Cambodia.",
    keywords: [
      "doing business in Cambodia",
      "start a company in Cambodia",
      "company registration Cambodia",
      "Cambodia tax for startups",
      "foreign investment Cambodia",
      "hiring in Cambodia",
    ],
    date: "2026-06-10",
    author: "La French Tech Phnom Penh",
    category: "Guide",
    readingTime: 7,
    cover: "/media/photos/phnompenh-street.jpg",
    sections: [
      {
        body: [
          "Doing business in Cambodia is more accessible than many foreign founders expect. Cambodia is one of ASEAN's most dynamic economies, with a GDP of nearly 49 billion dollars in 2025 and one of the highest trade-openness ratios in the region. The US dollar circulates freely, foreign ownership rules are liberal in most sectors, and the administration is steadily digitizing. For an entrepreneur, that combination makes Cambodia an unusually open market — provided you know the fundamentals before you start.",
          "This guide walks through the four things every founder should get right when starting a company in Cambodia: legal structure, tax, banking and hiring.",
        ],
      },
      {
        heading: "Setting up your company in Cambodia",
        body: [
          "The most common structure for foreign founders is the Private Limited Company, which can be 100% foreign-owned in the large majority of sectors. Company registration in Cambodia is handled online through the government's single-window platform, which has cut timelines considerably in recent years. Plan for a few weeks end to end, a minimum share capital, and registration with the Ministry of Commerce and the tax administration.",
        ],
      },
      {
        heading: "Tax and banking in Cambodia",
        body: [
          "The US dollar is used everywhere, with the Cambodian riel serving mainly for small transactions. Corporate income tax, VAT and monthly filing obligations mean a reliable local accountant is essential from day one — Cambodian tax compliance is monthly, not annual, and penalties for late filing add up. Opening a business bank account is straightforward with the local banks, including French-owned BRED Bank Cambodia, and digital banking is widely available.",
        ],
      },
      {
        heading: "Hiring and building your network",
        body: [
          "Cambodia's tech talent pool is young and growing fast, supported by institutions such as the Cambodia Academy of Digital Technology (CADT). Salaries remain competitive by regional standards, and English is widely spoken in the tech sector. Surrounding yourself with the ecosystem — chambers of commerce, communities and mentors — is the single biggest accelerator of a successful market entry.",
          "That is one of the core roles of La French Tech Phnom Penh: opening its address book to newcomers, from a trusted accountant to your first local hire or pilot customer. If Cambodia is on your roadmap, start with the community.",
        ],
      },
    ],
  },
  {
    slug: "francotech-vitrine-tech-francophonie",
    title: "FrancoTech: the tech showcase of the Francophonie Summit",
    excerpt:
      "5,000 visitors, 110 exhibitors, 10 national pavilions: FrancoTech is the Summit's economic and tech event. La French Tech will have its pavilion.",
    metaDescription:
      "FrancoTech 2026 at Koh Pich, Phnom Penh: 5,000 visitors, 110 exhibitors, 10 pavilions. Discover the French Tech pavilion at the Francophonie Summit.",
    keywords: [
      "FrancoTech 2026",
      "French Tech pavilion",
      "Francophonie tech exhibition",
      "Koh Pich Phnom Penh",
      "Francophonie Summit tech",
      "French Tech Asia Forum",
    ],
    date: "2026-07-01",
    author: "La French Tech Phnom Penh",
    category: "Event",
    readingTime: 4,
    cover: "/media/events/francotech-poster.jpg",
    sections: [
      {
        body: [
          "FrancoTech is the flagship economic and technology exhibition of the Francophonie Summit, and its 2026 edition in Phnom Penh is set to be the biggest yet. Held at Koh Pich from 14 to 16 November 2026, FrancoTech brings together governments, companies, investors and startups from across the Francophone world to do business with Cambodia and the wider ASEAN region. Organizers expect more than 5,000 visitors, 110 exhibitors and around ten national pavilions.",
          "For a startup or a company, FrancoTech is a rare opportunity: a single venue where public delegations, corporates and investors from dozens of Francophone countries are all in the room at the same time.",
        ],
      },
      {
        heading: "The La French Tech pavilion at FrancoTech",
        body: [
          "La French Tech Phnom Penh will run a dedicated pavilion at FrancoTech, showcasing Cambodian innovation alongside the French Tech communities of Asia, with privileged access to official government and institutional delegations. On the programme: a thematic roundtable, business matching sessions and curated meetings with institutions and investors.",
          "The community's theme for the edition — “Scaling Across the Francophonie Network” — captures the ambition: showing how French Tech helps startups scale internationally by turning a network of 125+ communities into real market access.",
        ],
      },
      {
        heading: "Why exhibit or attend",
        body: [
          "If you are building in Cambodia or the region, FrancoTech is the fastest way to gain visibility with buyers, partners and investors you would otherwise spend months chasing. Exhibiting under the French Tech pavilion adds credibility and puts your startup on the map during the highest-profile week Cambodia's tech scene has ever seen. Registration for the French Tech events runs through the community.",
        ],
      },
    ],
  },
  {
    slug: "lever-des-fonds-au-cambodge",
    title: "Raising funds in Cambodia: the financing ecosystem",
    excerpt:
      "Business angels, impact funds, regional venture capital: an overview of funding sources for startups in Cambodia.",
    metaDescription:
      "How to raise funds in Cambodia: startup funding sources, business angels, impact funds and regional venture capital for founders building in Cambodia.",
    keywords: [
      "raise funds Cambodia",
      "startup funding Cambodia",
      "venture capital Cambodia",
      "business angels Cambodia",
      "impact fund Cambodia",
      "invest in Cambodian startups",
    ],
    date: "2026-05-20",
    author: "La French Tech Phnom Penh",
    category: "Financing",
    readingTime: 6,
    cover: "/media/photos/phnompenh-night.jpg",
    sections: [
      {
        body: [
          "Raising funds in Cambodia is getting easier, but it still rewards founders who understand the local financing landscape. According to industry databases, Cambodia is home to more than 1,700 startups and a cumulative total of over 1.3 billion dollars raised across all stages. Seed tickets remain modest compared with Singapore or Jakarta, yet the number of active investors — local, regional and diaspora — is rising every year.",
          "For a founder, the key is to map the right sources early and to build relationships long before you actually need the money. Here is how the Cambodian funding ecosystem breaks down.",
        ],
      },
      {
        heading: "Local and regional investors",
        body: [
          "Several local impact funds and investment vehicles, such as the Canadia Impact Fund, back Cambodian entrepreneurs directly and understand the market's realities. Beyond them, a growing pool of business angels — many from the French and Cambodian business communities — writes early cheques. Regionally, venture capital investors active across ASEAN, from Singapore to Tokyo, are paying more attention to Cambodia, especially in fintech, logistics and consumer tech.",
        ],
      },
      {
        heading: "What investors look for in Cambodia",
        body: [
          "Cambodian and regional investors tend to prioritize clear unit economics, a credible local team and a realistic path to regional expansion. Because ticket sizes are smaller, capital efficiency matters more than growth-at-all-costs. Founders who can show traction with Cambodia's young, mobile-first population — and a plan to scale across ASEAN — stand out.",
        ],
      },
      {
        heading: "How the community helps you raise",
        body: [
          "La French Tech Phnom Penh plays a concrete matchmaking role in the funding process. Its business matching sessions connect startups with funds, business angels and strategic partners, and its events put founders in front of investors they could not easily reach alone. The 2026 Francophonie Summit, with its startup–investor matching sessions, will be one of the best fundraising opportunities Cambodia has ever offered — in one week, in one place.",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) =>
  articles.find((a) => a.slug === slug);
