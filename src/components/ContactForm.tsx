"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Honeypot } from "./Honeypot";
import {
  COMPANY_REASONS,
  REASONS,
  REVENUE_BANDS,
  SECTORS,
  type Reason,
} from "@/lib/contact-fields";

const fieldClass =
  "mt-2 w-full border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-rouge";
const labelClass =
  "text-xs font-semibold uppercase tracking-wider text-ink/60";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const [reason, setReason] = useState<Reason>(REASONS[0]);

  // Headcount and revenue only make sense for an organisation.
  const showCompany = COMPANY_REASONS.includes(reason);

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
          company: fd.get("company"),
          activity: fd.get("activity"),
          sector: fd.get("sector"),
          employees: fd.get("employees"),
          frenchStaff: fd.get("french-staff"),
          revenue: fd.get("revenue"),
          consent: fd.get("consent") === "on",
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
        <p className="mt-2 text-sm text-ink-soft/80">
          A confirmation email is on its way to your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="reason" className={labelClass}>
          I&apos;m writing to…
        </label>
        <select
          id="reason"
          name="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value as Reason)}
          className={fieldClass}
        >
          {REASONS.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>

      {showCompany && (
        <fieldset className="grid gap-5 border-t border-line pt-6">
          <legend className="display text-base text-ink">Your company</legend>
          <p className="text-sm text-ink-soft/70">
            Optional, and kept internal. It helps us understand the ecosystem
            and report on it to the French Tech Mission.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="company" className={labelClass}>
                Company / organisation
              </label>
              <input id="company" name="company" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="sector" className={labelClass}>
                Category
              </label>
              <select id="sector" name="sector" className={fieldClass}>
                <option value="">Select…</option>
                {SECTORS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="activity" className={labelClass}>
              What does your company do?
            </label>
            <textarea
              id="activity"
              name="activity"
              rows={3}
              className={fieldClass}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <div>
              <label htmlFor="employees" className={labelClass}>
                Employees
              </label>
              <input
                id="employees"
                name="employees"
                type="number"
                min={0}
                inputMode="numeric"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="french-staff" className={labelClass}>
                French nationals
              </label>
              <input
                id="french-staff"
                name="french-staff"
                type="number"
                min={0}
                inputMode="numeric"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="revenue" className={labelClass}>
                Annual revenue
              </label>
              <select id="revenue" name="revenue" className={fieldClass}>
                <option value="">Prefer not to say</option>
                {REVENUE_BANDS.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>
      )}

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={fieldClass}
        />
      </div>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft/80">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-rouge"
        />
        <span>
          I agree to La French Tech Phnom Penh storing the details above to
          answer my request, as described in the{" "}
          <Link href="/privacy" className="text-bleu underline">
            privacy notice
          </Link>
          .
        </span>
      </label>

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
