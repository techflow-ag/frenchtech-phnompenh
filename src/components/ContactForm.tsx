"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Honeypot } from "./Honeypot";

const reasons = [
  "Join as a member",
  "List my startup",
  "Become a partner or sponsor",
  "Speak or host an event",
  "Something else",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError(false);
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          hp_field: fd.get("hp_field"),
          email: fd.get("email"),
          reason: fd.get("reason"),
          message: fd.get("message"),
          sourceUrl: window.location.href,
        }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setBusy(false);
    }
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
      <Honeypot />
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
        disabled={busy}
        className="display inline-flex w-fit items-center gap-2 bg-rouge px-7 py-4 text-sm text-white transition-colors hover:bg-bleu disabled:opacity-60"
      >
        {busy ? "Sending…" : "Send message"}
        <ArrowRight className="h-4 w-4" />
      </button>
      {error && (
        <p className="text-sm text-rouge">
          Something went wrong. Please try again or email frenchtech.pp@gmail.com.
        </p>
      )}
    </form>
  );
}
