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
      "Labeled in 2019 and renewed for 2026-2028, La French Tech Phnom Penh brings together a fast-growing French-Cambodian tech ecosystem.",
    metaDescription:
      "La French Tech Phnom Penh is the official French Tech community in Cambodia. Discover the French-Cambodian tech ecosystem, its startups, board and events.",
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
    readingTime: 7,
    cover: "/media/photos/phnompenh-skyline.jpg",
    sections: [
      {
        body: [
          "French Tech in Cambodia is no longer a niche. Founded in 2015 by French entrepreneurs based in Phnom Penh, La French Tech Phnom Penh has become, in just a few years, the rallying point for founders, investors and tech talent across the Kingdom. Officially awarded the “French Tech Community” label in 2019 by the French Tech Mission, the community saw that label renewed for the 2026-2028 cycle, a clear signal of how quickly the local tech ecosystem in Cambodia is maturing.",
          "For any entrepreneur looking at Cambodia, understanding this community is the fastest way to plug into the country's innovation scene. It is where French, Cambodian and international players meet, share market knowledge, and open doors that would otherwise take years to find. And with the Francophonie Summit landing in Phnom Penh in November 2026, the timing has never been better to get involved.",
        ],
      },
      {
        heading: "What is La French Tech, exactly?",
        body: [
          "La French Tech is a government-backed initiative launched in 2013 to support and promote French and French-affiliated startups. It is not a single organization but a global movement, uniting founders, investors, corporates and public institutions. Today it counts more than 125 communities across 57 countries, powered by roughly 1,100 volunteers, and it has helped support thousands of startups, including household names such as BlaBlaCar, Doctolib, Qonto, Mistral AI and Ledger.",
          "French Tech Phnom Penh is the Cambodian relay of that movement: a non-profit association that connects local innovation players and opens them up to this worldwide network. Being labeled is not automatic. Communities are selected and re-evaluated on a multi-year cycle, so the 2026-2028 renewal is a mark of trust in the Phnom Penh team and in the Cambodian ecosystem it represents.",
        ],
      },
      {
        heading: "A snapshot of the Cambodian tech ecosystem",
        body: [
          "The French Tech Phnom Penh community brings together around sixty member startups and organizations. They span fintech, foodtech, artificial intelligence, cybersecurity, e-commerce, logistics and agritech, a genuine cross-section of Cambodia's emerging digital economy.",
          "This diversity mirrors the country itself. Cambodia has a young, mobile-first population, some of the fastest-growing internet adoption in the region, and a strategic position at the heart of ASEAN and the Mekong. For founders, that means a market where digital habits are forming right now, and where a well-positioned product can grow with the economy rather than fighting for scraps in a saturated one.",
        ],
      },
      {
        heading: "Connect, grow, build bridges",
        body: [
          "Three missions structure the community's work in Cambodia. First, connect: monthly networking evenings, Tech Talks and workshops, all free and open to every nationality. Second, grow: concrete support for founders on the practical realities of building in Cambodia, from legal structure and tax to hiring and access to funding. Third, build bridges: linking French startups with Cambodian corporates, and connecting the local ecosystem to the wider French Tech network.",
          "That model is already producing results. The community's first flagship event, in June 2026, drew more than 150 attendees around artificial intelligence and emerging markets, a strong signal a few months ahead of the Francophonie Summit. Recurring formats, high-level dialogues, Tech Talks, thematic roundtables, networking nights and pitch sessions, keep the community active between the big set-piece moments.",
        ],
      },
      {
        heading: "Who is behind it",
        body: [
          "The community is run by a volunteer board, renewed for 2026-2028 and co-chaired by Cédric Kang and Thierry Tea. Its members are working founders, operators and investors, which is precisely what keeps the community grounded in the real problems entrepreneurs face when building in Cambodia. There is strong gender parity on the board, and every member leads on a concrete area, from partnerships and events to the treasury.",
        ],
      },
      {
        heading: "Why it matters for founders and investors",
        body: [
          "Cambodia is one of the fastest-growing economies in ASEAN, and its startup ecosystem is structuring rapidly. For a founder, joining French Tech Phnom Penh shortens the learning curve of entering a new market. For an investor, it is a curated window onto vetted Cambodian and French-Cambodian startups. For a corporate, it is a shortcut to innovation partners on the ground.",
          "Membership is free for startups. If you are building, investing or hiring in Cambodia, the French Tech Phnom Penh community is the network worth joining first, and the months around the 2026 Francophonie Summit are the ideal moment to do it.",
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
      "More than 200 French companies operate in Cambodia. Explore France-Cambodia trade, the sectors involved, and how to invest or set up business in Cambodia.",
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
    readingTime: 7,
    cover: "/media/photos/phnompenh-riverside.jpg",
    sections: [
      {
        body: [
          "French companies in Cambodia are far more numerous than most people realize. The Kingdom is now home to more than 200 French companies, making France one of Cambodia's leading European economic partners. In 2025, bilateral trade between France and Cambodia reached 568 million dollars, up nearly 12% year on year, a trajectory that keeps drawing new French investors to Cambodia.",
          "This footprint spans the whole economy, from long-established multinationals to a new wave of French-founded startups. For anyone weighing an entry into the Cambodian market, that established French presence is both a reassurance and a ready-made network to lean on.",
        ],
      },
      {
        heading: "Why Cambodia, and why now",
        body: [
          "Cambodia posted a GDP of nearly 49 billion dollars in 2025 and one of the highest trade-openness ratios in the region, with external trade worth around 143% of GDP. The country attracted more than 5 billion dollars of foreign direct investment in 2025, and its digital economy is projected to keep growing at double-digit rates.",
          "For French businesses, several factors make Cambodia attractive: the US dollar circulates freely, foreign ownership is permitted in most sectors, labor costs are competitive, and the country sits inside ASEAN's free-trade area of more than 650 million consumers. Add a genuine cultural affinity with France, and Cambodia becomes a logical base from which to serve the wider Mekong region.",
        ],
      },
      {
        heading: "Well-established large groups",
        body: [
          "In energy, TotalEnergies has a long-standing presence across Cambodia. In banking, BRED Bank Cambodia flies the French flag in a financial sector that is modernizing fast. In hospitality, Accor and its Sofitel brand operate flagship properties in Phnom Penh and Siem Reap. Retail, insurance, engineering and agrifood complete a picture of French business that is diversified and durable.",
          "These groups are more than symbols: they employ thousands of people, train local talent, and anchor France's economic credibility in Cambodia, which in turn benefits every smaller French company arriving in the market. A new French entrant rarely starts from zero; there is almost always a supplier, a banker or a peer who has already navigated the same path.",
        ],
      },
      {
        heading: "A new generation of French-Cambodian startups",
        body: [
          "Beyond the large groups, a generation of startups founded by French or French-Cambodian entrepreneurs is emerging in Cambodia: fintech, reverse logistics, anti-waste foodtech, data and artificial intelligence. These founders are betting that Cambodia's young, digital-first population and its position at the heart of ASEAN make it an ideal launchpad.",
          "This is precisely the ecosystem that La French Tech Phnom Penh federates, connecting these startups with the region's corporates, investors and institutions, and giving them a platform far bigger than Cambodia alone. Several community members are already exporting their model to neighboring markets, using Phnom Penh as a low-cost, high-agility base.",
        ],
      },
      {
        heading: "The institutions that make it possible",
        body: [
          "French companies do not arrive in Cambodia on their own. CCI France Cambodge, the Embassy of France in Cambodia and Business France actively support the setup and growth of French players in the country, from market studies and introductions to regulatory guidance. Together with the French Tech community, they form a support system that makes doing business in Cambodia significantly less daunting for newcomers.",
          "If you are exploring the Cambodian market, the practical first step is simple: talk to the people who are already here. The community, the chamber and the institutions can save you months of trial and error, and often a great deal of money too.",
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
      "The 2026 Francophonie Summit takes place in Phnom Penh, 13-17 November. Dates, programme, FrancoTech and what it means for Cambodia's tech ecosystem.",
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
    readingTime: 7,
    cover: "/media/events/koh-pich-cbd.jpg",
    sections: [
      {
        body: [
          "The 2026 Francophonie Summit in Phnom Penh is shaping up to be one of the most important international events Cambodia has ever hosted. For only the second time in Asia after Hanoi in 1997, the Francophonie Summit will be held in Cambodia, from 13 to 17 November 2026. More than 90 countries and governments are expected, with Heads of State and government gathering under the aegis of the Organisation Internationale de la Francophonie (OIF).",
          "For founders, investors and companies watching Cambodia, the Francophonie Summit is not just a diplomatic milestone. It is a rare, concentrated moment where the whole Francophone world, and a large slice of Asia's innovation ecosystem, converges on Phnom Penh at the same time.",
        ],
      },
      {
        heading: "What is the Francophonie Summit?",
        body: [
          "The Francophonie Summit brings together Heads of State, government leaders, international organizations, businesses and civil-society representatives from across the French-speaking world. The 2026 edition is the 20th in the summit's history and gathers delegations from five continents, spanning Europe, Africa, the Americas, Asia and Oceania.",
          "It is far more than a political gathering. Around the official summit sit a Village de la Francophonie, business forums, and, crucially for the tech ecosystem, FrancoTech, the summit's dedicated economic and technology exhibition.",
        ],
      },
      {
        heading: "100,000 visitors expected in Phnom Penh",
        body: [
          "Five days of events will culminate with the official 20th Francophonie Summit on 15 and 16 November. The Kingdom expects more than 100,000 visitors over the week, making it one of the largest international gatherings Cambodia has organized. Hotels, venues and the city's new convention infrastructure at Koh Pich are all being mobilized for the occasion, and the government has framed the summit as a showcase of a modern, open, fast-growing Cambodia.",
        ],
      },
      {
        heading: "Tech at the heart of the programme: FrancoTech",
        body: [
          "The summit's economic and technology strand, FrancoTech, takes place at Koh Pich from 14 to 16 November 2026. This is where the innovation story of the Francophonie Summit is told, with governments, companies, investors and startups exhibiting side by side. Organizers expect more than 5,000 visitors, 110 exhibitors and around ten national pavilions.",
          "La French Tech Phnom Penh will run a dedicated pavilion at FrancoTech and host its own French Tech Asia Forum: an international communities evening, startup-investor business matching, thematic roundtables and receptions. For a startup, it is a chance to meet government delegations, executives of major groups and investors from across the Francophone world and Asia, all in one place, in one week.",
        ],
      },
      {
        heading: "Public-sector connections",
        body: [
          "Beyond networking and business development, the week gives participants a rare opportunity to engage directly with senior Cambodian public-sector stakeholders. Ministries expected to engage with the forum include Education, Youth and Sport, Commerce, Posts and Telecommunications, Women's Affairs, and Industry, Science, Technology and Innovation, along with the Cambodia Tourism Board. For a company exploring market entry, those touchpoints can open the door to institutional partnerships and practical regulatory dialogue.",
        ],
      },
      {
        heading: "How to take part",
        body: [
          "Whether you are a startup, an investor or a partner, you can register your interest for the French Tech events during the summit week. Places at flagship sessions are limited, and early registration helps the team tailor introductions and business matching. The Francophonie Summit only comes to Cambodia once, this is the moment to be in the room.",
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
    readingTime: 8,
    cover: "/media/photos/phnompenh-street.jpg",
    sections: [
      {
        body: [
          "Doing business in Cambodia is more accessible than many foreign founders expect. Cambodia is one of ASEAN's most dynamic economies, with a GDP of nearly 49 billion dollars in 2025 and one of the highest trade-openness ratios in the region. The US dollar circulates freely, foreign ownership rules are liberal in most sectors, and the administration is steadily digitizing. For an entrepreneur, that combination makes Cambodia an unusually open market, provided you know the fundamentals before you start.",
          "This guide walks through the four things every founder should get right when starting a company in Cambodia: legal structure, tax, banking and hiring, and points you to the people who can help you do it faster.",
        ],
      },
      {
        heading: "Setting up your company in Cambodia",
        body: [
          "The most common structure for foreign founders is the Private Limited Company, which can be 100% foreign-owned in the large majority of sectors. Company registration in Cambodia is handled online through the government's single-window platform, which has cut timelines considerably in recent years. Plan for a few weeks end to end, a minimum share capital, and registration with the Ministry of Commerce and the tax administration.",
          "A few sectors, such as land ownership and some regulated activities, carry restrictions on foreign ownership, so it is worth checking your specific activity early. For most tech and services businesses, however, the path is straightforward and does not require a local partner.",
        ],
      },
      {
        heading: "Tax and banking in Cambodia",
        body: [
          "The US dollar is used everywhere, with the Cambodian riel serving mainly for small transactions. Corporate income tax, VAT and monthly filing obligations mean a reliable local accountant is essential from day one. Cambodian tax compliance is monthly, not annual, and penalties for late filing add up quickly, so this is not a corner to cut.",
          "Opening a business bank account is straightforward with local banks, including French-owned BRED Bank Cambodia, and digital banking is widely available. Cambodia's payments landscape has leapfrogged in recent years, with QR payments and mobile wallets now ubiquitous, which is good news for any consumer-facing startup.",
        ],
      },
      {
        heading: "Hiring and building your team",
        body: [
          "Cambodia's tech talent pool is young and growing fast, supported by institutions such as the Cambodia Academy of Digital Technology (CADT). Salaries remain competitive by regional standards, and English is widely spoken in the tech sector, with French present in parts of the professional and academic world. Labor rules are formalized, so it pays to have proper employment contracts and to understand seniority and severance obligations from the outset.",
          "Many founders start with a small local core team and a few senior hires, then scale as revenue allows. The talent is there; the differentiator is usually the quality of your onboarding and management, not the availability of people.",
        ],
      },
      {
        heading: "Your fastest shortcut: the ecosystem",
        body: [
          "Surrounding yourself with the ecosystem, chambers of commerce, communities and mentors, is the single biggest accelerator of a successful market entry. That is one of the core roles of La French Tech Phnom Penh: opening its address book to newcomers, from a trusted accountant to your first local hire or pilot customer.",
          "If Cambodia is on your roadmap, start with the community. A handful of well-placed introductions will teach you more about the real market than weeks of desk research, and it is free to join.",
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
    readingTime: 6,
    cover: "/media/events/francotech-poster.jpg",
    sections: [
      {
        body: [
          "FrancoTech is the flagship economic and technology exhibition of the Francophonie Summit, and its 2026 edition in Phnom Penh is set to be the biggest yet. Held at Koh Pich from 14 to 16 November 2026, FrancoTech brings together governments, companies, investors and startups from across the Francophone world to do business with Cambodia and the wider ASEAN region. Organizers expect more than 5,000 visitors, 110 exhibitors and around ten national pavilions.",
          "For a startup or a company, FrancoTech is a rare opportunity: a single venue where public delegations, corporates and investors from dozens of Francophone countries are all in the room at the same time.",
        ],
      },
      {
        heading: "What happens at FrancoTech",
        body: [
          "FrancoTech combines an exhibition floor, roundtable panels, business-matching sessions and an innovation competition. Thematic tracks run across the three days, covering artificial intelligence, digital government, fintech, agritech, edtech, tourism and women in innovation, mirroring the sectors where the Francophone world and Cambodia have the most to build together.",
          "Around FrancoTech sit the other strands of the summit week: the Village de la Francophonie, the Business Forum France-Cambodge, and the Rencontre des Entrepreneurs Francophones. Together they turn a single exhibition into a full week of opportunities to meet buyers, partners and investors.",
        ],
      },
      {
        heading: "The La French Tech pavilion at FrancoTech",
        body: [
          "La French Tech Phnom Penh will run a dedicated pavilion at FrancoTech, showcasing Cambodian innovation alongside the French Tech communities of Asia, with privileged access to official government and institutional delegations. On the programme: a thematic roundtable, business matching sessions and curated meetings with institutions and investors.",
          "The community's theme for the edition, “Scaling Across the Francophonie Network”, captures the ambition: showing how French Tech helps startups scale internationally by turning a network of 125+ communities into real market access. For a Cambodian startup, the pavilion is a bridge to dozens of countries; for a visiting founder, it is a fast way to understand the Cambodian market.",
        ],
      },
      {
        heading: "Why exhibit or attend FrancoTech",
        body: [
          "If you are building in Cambodia or the wider region, FrancoTech is the fastest way to gain visibility with buyers, partners and investors you would otherwise spend months chasing. Exhibiting under the French Tech pavilion adds credibility and puts your startup on the map during the highest-profile week Cambodia's tech scene has ever seen.",
          "The audience is deliberately broad: public delegations from more than 90 countries, executives of major Francophone groups, regional investors, and the founders of the fastest-growing startups in Cambodia and ASEAN. That mix is exactly what makes FrancoTech valuable, because deals, pilots and partnerships tend to start with a single well-timed conversation on an exhibition floor.",
        ],
      },
      {
        heading: "Practical information",
        body: [
          "FrancoTech 2026 takes place at the Koh Pich Exhibition Center in Phnom Penh's central business district, from 14 to 16 November, as part of the wider Francophonie Summit running 13 to 17 November. Entry to the French Tech pavilion and community events is organized through La French Tech Phnom Penh, and places at flagship sessions such as the startup-investor business matching are limited. Founders who want to make the most of the week should register their interest early so the team can prepare tailored introductions.",
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
    readingTime: 7,
    cover: "/media/photos/phnompenh-night.jpg",
    sections: [
      {
        body: [
          "Raising funds in Cambodia is getting easier, but it still rewards founders who understand the local financing landscape. According to industry databases, Cambodia is home to more than 1,700 startups and a cumulative total of over 1.3 billion dollars raised across all stages. Seed tickets remain modest compared with Singapore or Jakarta, yet the number of active investors, local, regional and diaspora, is rising every year.",
          "For a founder, the key is to map the right sources early and to build relationships long before you actually need the money. Here is how the Cambodian funding ecosystem breaks down.",
        ],
      },
      {
        heading: "The stages of funding in Cambodia",
        body: [
          "Most Cambodian startups begin with bootstrapping and friends-and-family capital, then move to angel rounds as they show early traction. Institutional venture capital exists but is more selective and often comes from regional funds rather than purely domestic ones. Grants and competition prizes also play a real role, particularly for impact-driven and agritech ventures.",
          "Because the market is still young, valuations are grounded and terms are founder-readable. That is an advantage: you are less likely to be pushed into the aggressive structures common in hotter markets, and more likely to find investors who genuinely understand operating in Cambodia.",
        ],
      },
      {
        heading: "Local and regional investors",
        body: [
          "Several local impact funds and investment vehicles, such as the Canadia Impact Fund, back Cambodian entrepreneurs directly and understand the market's realities. Beyond them, a growing pool of business angels, many from the French and Cambodian business communities, writes early cheques. Regionally, venture capital investors active across ASEAN, from Singapore to Tokyo, are paying more attention to Cambodia, especially in fintech, logistics and consumer tech.",
        ],
      },
      {
        heading: "What investors look for in Cambodia",
        body: [
          "Cambodian and regional investors tend to prioritize clear unit economics, a credible local team and a realistic path to regional expansion. Because ticket sizes are smaller, capital efficiency matters more than growth-at-all-costs. Founders who can show traction with Cambodia's young, mobile-first population, and a plan to scale across ASEAN, stand out.",
          "Local knowledge is a genuine moat. Investors reward teams who understand distribution, payments and customer behavior on the ground, things that are hard to appreciate from abroad and easy to get wrong.",
        ],
      },
      {
        heading: "Preparing your raise",
        body: [
          "Before pitching, founders raising in Cambodia should get the basics right: a clean cap table, a locally compliant company structure, and financials a foreign investor can actually read. Because many cheques come from angels and family offices rather than institutional funds, warm introductions matter enormously, and a credible reference from within the ecosystem often carries more weight than a cold deck.",
          "It also pays to be clear about what the money is for. Investors in Cambodia respond well to specific, milestone-based plans, for example a defined number of new markets, a product launch, or a revenue target, rather than vague growth ambitions.",
        ],
      },
      {
        heading: "How the community helps you raise",
        body: [
          "La French Tech Phnom Penh plays a concrete matchmaking role in the funding process. Its business matching sessions connect startups with funds, business angels and strategic partners, and its events put founders in front of investors they could not easily reach alone. The 2026 Francophonie Summit, with its startup-investor matching sessions, will be one of the best fundraising opportunities Cambodia has ever offered: one week, one place, and the largest concentration of Francophone capital the country has seen.",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) =>
  articles.find((a) => a.slug === slug);
