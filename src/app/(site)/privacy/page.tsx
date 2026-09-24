import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "What La French Tech Phnom Penh collects when you write to us or register for an event, why we keep it, and how to have it removed.",
};

const sections = [
  {
    title: "Who we are",
    body: [
      "La French Tech Phnom Penh is a non-profit, volunteer-run association and the official French Tech Community in Cambodia. We can be reached at frenchtech.pp@gmail.com.",
    ],
  },
  {
    title: "What we collect",
    body: [
      "When you use the contact form: your name, email, what you are writing about and your message. If you write on behalf of an organisation, we also ask for its name, sector, what it does, its headcount, how many French nationals work there and a revenue band. Those company questions are optional.",
      "When you register for an event: your name, email, company, profile type and the sessions you selected.",
      "When you complete a member profile: your photo, LinkedIn URL and a short bio.",
    ],
  },
  {
    title: "Why we collect it",
    body: [
      "To answer you, to process membership applications, to organise events and to send you the community emails that follow from your request.",
      "Aggregated, anonymous figures about the ecosystem are reported to the French Tech Mission, which awards and renews our label. Individual answers are never shared for this.",
    ],
  },
  {
    title: "Where it is stored",
    body: [
      "Your details sit in Brevo, our CRM, hosted in the European Union. Emails are delivered through Resend. The website runs on Vercel. We do not sell your data, and we do not share it with anyone outside these providers.",
    ],
  },
  {
    title: "The public members page",
    body: [
      "If you join as a member, your name and company appear on our public members page, along with the photo and bio you choose to add. Nothing else is published: your email, phone number and the company figures you gave us stay private.",
      "You can ask to be taken off that page at any time, and we will do it without asking why.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "For as long as you are part of the community, or until you ask us to delete it. Applications we do not take forward are kept for two years so we recognise you if you come back.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "You can ask to see what we hold about you, correct it, or have it deleted. Email frenchtech.pp@gmail.com and a board member will handle it. Every email we send has an unsubscribe link, and unsubscribing never affects your membership.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Your data"
        khmer="ឯកជនភាព"
        intro="We are a volunteer association, not a marketing operation. Here is exactly what we collect, why, and how to get it removed."
      />

      <section className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <div className="grid gap-12">
          {sections.map((s) => (
            <div key={s.title} className="border-t-2 border-bleu pt-5">
              <h2 className="display text-xl text-ink">{s.title}</h2>
              {s.body.map((para) => (
                <p
                  key={para}
                  className="mt-3 text-base leading-relaxed text-ink-soft/80"
                >
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
        <p className="mt-16 text-sm text-ink/50">
          Last updated 24 September 2026.
        </p>
      </section>
    </>
  );
}
