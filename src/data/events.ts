import { EventItem } from "@/lib/types";

export const events: EventItem[] = [
  // ---------- Flagship: French Tech Asia Forum ----------
  {
    slug: "french-tech-asia-forum-2026",
    title: "French Tech Asia Forum — Francophonie Summit 2026",
    date: "2026-11-14T09:00:00+07:00",
    endDate: "2026-11-17T18:00:00+07:00",
    venue: "Koh Pich (Diamond Island), Phnom Penh",
    city: "Phnom Penh",
    description:
      "La French Tech Phnom Penh welcomes French Tech communities from around the world for a week of events during the 20th Francophonie Summit — Tech Talks, business matching, roundtables and receptions.",
    image: "/media/events/francotech-poster.jpg",
    registrationUrl: "/events/register",
    tags: ["Forum", "Francophonie"],
    featured: true,
    longDescription: [
      "For the second time in its history, after Hanoi in 1997, Asia hosts the Francophonie Summit. From 13 to 17 November 2026, Phnom Penh welcomes the Francophone world for a week of events, culminating with the official 20th Summit on 15 and 16 November.",
      "La French Tech Phnom Penh invites French Tech communities from around the world to gather in Cambodia — a unique opportunity to connect with high-level government officials, executives of prominent conglomerates, investors and key players from the Francophone world and Asia's innovation ecosystem.",
      "Our programme runs alongside the official Summit and FrancoTech, and is designed so participants can take part in as many flagship events as possible: an international communities evening, cross-border networking, startup–investor business matching, and meetings with ministries.",
    ],
    stats: [
      { value: "90+", label: "Countries represented" },
      { value: "100K+", label: "Visitors expected" },
      { value: "5 days", label: "Of summit activities" },
    ],
    agenda: [
      {
        when: "Fri 14 Nov · Evening",
        title: "French Tech International Communities Evening",
        detail:
          "A networking evening bringing together the French-speaking business and innovation community.",
      },
      {
        when: "Sat 15 Nov · Lunch",
        title: "French Tech & Cambodia / ASEAN Innovation Ecosystem",
        detail:
          "Connecting international participants with local startups, entrepreneurs and corporates.",
      },
      {
        when: "Sat 15 Nov · Evening",
        title: "French Tech Evening Reception",
      },
      {
        when: "Sun 16 Nov · Cocktail",
        title: "Startup–Investor Business Matching",
        detail:
          "Dedicated matching sessions with a startup showcase and curated investor meetings.",
      },
      {
        when: "Mon 17 Nov · Morning",
        title: "Visits & meetings with ministries",
      },
    ],
  },
  // ---------- FrancoTech pavilion ----------
  {
    slug: "francotech-2026",
    title: "FrancoTech — The French Tech Pavilion",
    date: "2026-11-14T09:00:00+07:00",
    endDate: "2026-11-16T18:00:00+07:00",
    venue: "Koh Pich Expo, Phnom Penh",
    city: "Phnom Penh",
    description:
      "FrancoTech is the flagship economic and technology exhibition of the Francophonie Summit. La French Tech Phnom Penh runs a dedicated pavilion, a roundtable panel and business matching sessions.",
    image: "/media/events/koh-pich-cbd.jpg",
    registrationUrl: "/events/register",
    tags: ["Exhibition", "FrancoTech"],
    featured: true,
    longDescription: [
      "FrancoTech is the flagship economic and technology exhibition of the Francophonie Summit. It brings together governments, companies, investors and startups from across the Francophone world to foster business and innovation with Cambodia and ASEAN. Held at Koh Pich from 14 to 16 November, the 2026 edition expects 5,000+ visitors, 110+ exhibitors and 10+ national pavilions.",
      "La French Tech Phnom Penh has a dedicated pavilion, showcasing Cambodian innovation alongside French Tech partners from across Asia, with access to official government and institutional delegations.",
      "Our theme: “Scaling Across the Francophonie Network — How French Tech enables global scale for startups.” We also host a roundtable panel and business matching sessions connecting startups, investors and corporates.",
    ],
    stats: [
      { value: "5,000+", label: "Visitors" },
      { value: "110+", label: "Exhibitors" },
      { value: "10+", label: "National pavilions" },
    ],
    agenda: [
      {
        when: "Pavilion",
        title: "The French Tech Pavilion",
        detail:
          "Cambodian innovation alongside French Tech partners from across Asia.",
      },
      {
        when: "Roundtable",
        title: "Scaling Across the Francophonie Network",
        detail:
          "Our dedicated panel, joining seven institution-led themes: AI, digital government, fintech, agritech, edtech, tourism and women in innovation.",
      },
      {
        when: "Business matching",
        title: "B2B & investor matching sessions",
        detail:
          "French community meetups, local ecosystem meetups and Francophone delegation business meetings.",
      },
    ],
  },
  // ---------- Past ----------
  {
    slug: "apero-tech-july-2026",
    title: "Apéro Tech — Rooftop Edition",
    date: "2026-07-30T18:00:00+07:00",
    endTime: "20:00",
    venue: "Rooftop, Penh House Hotel",
    city: "Phnom Penh",
    description:
      "After-work networking with Phnom Penh's tech community — founders, investors, and tech enthusiasts over drinks at sunset. Free and open to all.",
    image: "/images/events/event-1.jpg",
    tags: ["Networking", "Apéro Tech"],
  },
  {
    slug: "tech-talk-apps-ai-emerging-markets",
    title: "Tech Talk: Apps, AI & Emerging Markets",
    date: "2026-06-16T18:00:00+07:00",
    endTime: "21:00",
    venue: "The Last Stage, Aquation Theater, Koh Pich",
    city: "Phnom Penh",
    description:
      "Our first flagship event drew 150+ attendees: a panel on apps, AI, and emerging markets with founders and investors from the French–Cambodian ecosystem, followed by open networking.",
    image: "/images/events/event-6.jpg",
    tags: ["Tech Talk", "AI"],
    stats: [
      { value: "150+", label: "Attendees" },
      { value: "90+", label: "Companies" },
    ],
  },
];

export const upcomingEvents = () =>
  events
    .filter((e) => new Date(e.endDate ?? e.date) >= new Date())
    .sort((a, b) => a.date.localeCompare(b.date));

export const pastEvents = () =>
  events
    .filter((e) => new Date(e.endDate ?? e.date) < new Date())
    .sort((a, b) => b.date.localeCompare(a.date));

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
