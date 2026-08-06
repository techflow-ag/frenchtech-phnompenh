import { EventItem } from "@/lib/types";

// PLACEHOLDER DATA — replace with real events
export const events: EventItem[] = [
  {
    slug: "french-tech-connect-13",
    title: "French Tech Connect #13",
    series: "French Tech Connect",
    number: 13,
    date: "2026-09-10T18:30:00+07:00",
    endTime: "21:30",
    venue: "Backyard Cafe, BKK1",
    city: "Phnom Penh",
    description:
      "Our monthly networking night. Founders, investors, and tech enthusiasts — French, Cambodian, and international — over drinks in BKK1. Free and open to all.",
    registrationUrl: "#",
    tags: ["Networking"],
  },
  {
    slug: "ai-in-cambodia-workshop",
    title: "AI in Cambodia: Practical Workshop for SMEs",
    date: "2026-09-25T17:30:00+07:00",
    endTime: "20:00",
    venue: "Factory Phnom Penh",
    city: "Phnom Penh",
    description:
      "A hands-on workshop on deploying AI tools in Cambodian businesses — real use cases from local startups, live demos, and a Q&A with founders building AI products in the Kingdom.",
    registrationUrl: "#",
    tags: ["Workshop", "AI"],
  },
  {
    slug: "french-tech-connect-12",
    title: "French Tech Connect #12",
    series: "French Tech Connect",
    number: 12,
    date: "2026-07-17T18:30:00+07:00",
    endTime: "21:30",
    venue: "Sundown Social Club",
    city: "Phnom Penh",
    description:
      "Summer edition of our networking night, with a spotlight on Cambodian fintech and a guest talk on cross-border payments in ASEAN.",
    tags: ["Networking"],
  },
  {
    slug: "startup-legal-basics",
    title: "Setting Up a Business in Cambodia: Legal & Tax Basics",
    date: "2026-06-05T17:30:00+07:00",
    endTime: "20:00",
    venue: "Raintree Cambodia",
    city: "Phnom Penh",
    description:
      "A practical session for founders: company registration, QIP status, tax obligations, and hiring in Cambodia — with lawyers and accountants from the community.",
    tags: ["Workshop", "Founders"],
  },
  {
    slug: "french-tech-connect-11",
    title: "French Tech Connect #11",
    series: "French Tech Connect",
    number: 11,
    date: "2026-05-15T18:30:00+07:00",
    endTime: "21:30",
    venue: "Backyard Cafe, BKK1",
    city: "Phnom Penh",
    description:
      "Networking night with a pitch corner: three startups from the community presented their products in 5 minutes each.",
    tags: ["Networking", "Pitch"],
  },
  {
    slug: "women-in-tech-panel",
    title: "Women in Tech Cambodia: Building & Leading",
    date: "2026-04-24T18:00:00+07:00",
    endTime: "20:30",
    venue: "Institut français du Cambodge",
    city: "Phnom Penh",
    description:
      "A panel with women founders and tech leaders from the Cambodian and French ecosystems, followed by open networking.",
    tags: ["Panel", "Women in Tech"],
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
