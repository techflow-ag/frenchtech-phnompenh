"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const reasons = [
  "Join as a member",
  "List my startup",
  "Become a partner or sponsor",
  "Speak or host an event",
  "Something else",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  // Wire to a real backend (Resend, Formspree, or a route handler) before launch.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line bg-mist p-8">
        <p className="flex items-center gap-2 font-medium text-ink">
          <Check className="h-5 w-5 text-rouge" />
          Message sent. We&apos;ll get back to you within a few days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-ink/60">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-rouge"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-ink/60">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-rouge"
          />
        </div>
      </div>
      <div>
        <label htmlFor="reason" className="text-xs font-semibold uppercase tracking-wider text-ink/60">
          I&apos;m writing to…
        </label>
        <select
          id="reason"
          name="reason"
          className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-rouge"
        >
          {reasons.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-ink/60">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-rouge"
        />
      </div>
      <button
        type="submit"
        className="display inline-flex w-fit items-center gap-2 bg-rouge px-7 py-4 text-sm text-white transition-colors hover:bg-bleu"
      >
        Send message
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
