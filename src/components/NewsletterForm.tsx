"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Honeypot } from "./Honeypot";

export function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setBusy(true);
    const hp = new FormData(e.currentTarget).get("hp_field");
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          hp_field: hp,
          sourceUrl: window.location.href,
        }),
      });
    } catch {
      // fail silently for newsletter; still confirm
    } finally {
      setBusy(false);
      setSent(true);
    }
  }

  if (sent) {
    return (
      <p
        className={`flex items-center gap-2 text-sm font-medium ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        <Check className="h-4 w-4 text-rouge" />
        You&apos;re on the list. See you at the next event.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md">
      <Honeypot />
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className={`w-full border px-4 py-3 text-sm outline-none transition-colors focus:border-rouge ${
          dark
            ? "border-line-dark bg-ink-soft text-white placeholder:text-white/40"
            : "border-line bg-paper text-ink placeholder:text-ink/40"
        }`}
      />
      <button
        type="submit"
        disabled={busy}
        className="display flex items-center gap-2 bg-rouge px-5 py-3 text-xs text-white transition-colors hover:bg-bleu disabled:opacity-60"
      >
        {busy ? "…" : "Subscribe"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
