import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { EventRegisterForm } from "@/components/EventRegisterForm";

export const metadata: Metadata = {
  title: "Register for events",
  description:
    "Register your interest for La French Tech Phnom Penh events during the Francophonie Summit week — pick the sessions you'd like to attend.",
};

export default function EventRegisterPage() {
  return (
    <>
      <PageHero
        eyebrow="Francophonie Summit · 14–17 Nov 2026"
        title="Register for our events"
        khmer="ចុះឈ្មោះ"
        intro="Pick the French Tech events you'd like to join during the Summit week. It's free — we'll follow up with practical details."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Suspense fallback={<div className="text-ink/50">Loading…</div>}>
          <EventRegisterForm />
        </Suspense>
      </section>
    </>
  );
}
