import { EventItem } from "@/lib/types";

export const events: EventItem[] = [
  // Upcoming
  {
    slug: "cambodia-digital-trade-forum-2026",
    title: "Cambodia Digital Trade Forum & Online Expo",
    date: "2026-09-11T09:00:00+07:00",
    endTime: "17:00",
    venue: "Diamond Island Convention & Exhibition Center, Koh Pich",
    city: "Phnom Penh",
    description:
      "The 3rd Cambodia Digital Trade Forum, September 11–13. Exhibit alongside 200+ booths, meet government, corporates, and MSMEs — and join the French Tech booth to gain national visibility across Cambodia's tech and trade ecosystem.",
    image: "/images/events/event-4.jpg",
    registrationUrl: "mailto:frenchtech.pp@gmail.com",
    tags: ["Forum", "Expo"],
  },
  {
    slug: "francotech-francophonie-summit-2026",
    title: "FrancoTech — Sommet de la Francophonie",
    date: "2026-11-14T09:00:00+07:00",
    endTime: "18:00",
    venue: "Francophonie Summit, Phnom Penh",
    city: "Phnom Penh",
    description:
      "Cambodia hosts the Francophonie Summit for the first time, November 14–16 — with the FrancoTech forum and a dedicated French Tech Pavilion. The flagship moment for French and Francophone innovation in Southeast Asia.",
    registrationUrl: "mailto:frenchtech.pp@gmail.com",
    tags: ["Summit", "FrancoTech"],
  },
  // Past
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
  },
];

export const upcomingEvents = () =>
  events
    .filter((e) => new Date(e.date) >= new Date())
    .sort((a, b) => a.date.localeCompare(b.date));

export const pastEvents = () =>
  events
    .filter((e) => new Date(e.date) < new Date())
    .sort((a, b) => b.date.localeCompare(a.date));
