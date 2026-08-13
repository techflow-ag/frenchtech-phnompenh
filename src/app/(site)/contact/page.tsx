import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with La French Tech Phnom Penh, join as a member, list your startup, become a partner, or propose an event.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk"
        khmer="ទំនាក់ទំនង"
        intro="Whether you want to join, partner, speak, or just say bonjour, we read everything and answer fast."
      />

      <section id="join" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <div className="space-y-8">
              <div>
                <h2 className="eyebrow">Email</h2>
                <a
                  href="mailto:frenchtech.pp@gmail.com"
                  className="mt-2 flex items-center gap-2 text-sm font-medium text-ink hover:text-rouge"
                >
                  <Mail className="h-4 w-4 text-rouge" />
                  frenchtech.pp@gmail.com
                </a>
              </div>
              <div>
                <h2 className="eyebrow">LinkedIn</h2>
                <a
                  href="https://kh.linkedin.com/company/la-french-tech-phnompenh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center gap-2 text-sm font-medium text-ink hover:text-rouge"
                >
                  <LinkedinIcon className="h-4 w-4 text-rouge" />
                  La French Tech Phnom Penh
                </a>
              </div>
              <div>
                <h2 className="eyebrow">Where we are</h2>
                <p className="mt-2 flex items-start gap-2 text-sm font-medium text-ink">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rouge" />
                  Hosted by CCI France Cambodge
                  <br />
                  Phnom Penh, Cambodia
                </p>
              </div>
              <div className="border border-line bg-mist p-6">
                <p className="text-base leading-relaxed text-ink-soft/80">
                  Membership is <strong>free</strong> for individuals and
                  startups. Select &ldquo;Join as a member&rdquo; in the form
                  and tell us a bit about yourself.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
