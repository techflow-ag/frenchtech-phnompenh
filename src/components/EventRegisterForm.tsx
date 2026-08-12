"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

// The French Tech events startups can opt into during the Francophonie week.
const OPTIONS = [
  {
    id: "french-tech-asia-forum-2026",
    label: "French Tech Asia Forum (full week)",
    when: "14–17 Nov",
  },
  {
    id: "francotech-2026",
    label: "FrancoTech, French Tech Pavilion",
    when: "14–16 Nov",
  },
  {
    id: "communities-evening",
    label: "French Tech International Communities Evening",
    when: "14 Nov",
  },
  {
    id: "innovation-ecosystem-lunch",
    label: "French Tech & Cambodia / ASEAN Innovation Ecosystem",
    when: "15 Nov",
  },
  {
    id: "evening-reception",
    label: "French Tech Evening Reception",
    when: "15 Nov",
  },
  {
    id: "startup-investor-matching",
    label: "Startup–Investor Business Matching",
    when: "16 Nov",
  },
  {
    id: "ministries-visits",
    label: "Visits & meetings with ministries",
    when: "17 Nov",
  },
];

export function EventRegisterForm() {
  const params = useSearchParams();
  const preselected = params.get("event");
  const [selected, setSelected] = useState<string[]>(
    preselected ? [preselected] : [],
  );
  const [sent, setSent] = useState(false);

  function toggle(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  // Wire to a real backend / Typeform before launch.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-line bg-mist p-8">
        <p className="flex items-center gap-3 text-lg font-medium text-ink">
          <Check className="h-6 w-6 shrink-0 text-rouge" />
          Thank you! We&apos;ve registered your interest for{" "}
          {selected.length || "the"} event{selected.length === 1 ? "" : "s"}. Our
          team will get back to you with details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
      {/* Event picker */}
      <div>
        <h2 className="display text-xl text-ink">Which events interest you?</h2>
        <p className="mt-2 text-sm text-ink-soft/80">
          Select all that apply, we&apos;ll follow up with practical details.
        </p>
        <div className="mt-6 space-y-3">
          {OPTIONS.map((o) => {
            const on = selected.includes(o.id);
            return (
              <label
                key={o.id}
                className={`flex cursor-pointer items-center justify-between gap-4 rounded-xl border p-4 transition-colors ${
                  on
                    ? "border-rouge bg-rouge/5"
                    : "border-line hover:border-rouge/50"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                      on ? "border-rouge bg-rouge text-white" : "border-ink/30"
                    }`}
                  >
                    {on && <Check className="h-3.5 w-3.5" />}
                  </span>
                  <span className="text-sm font-medium text-ink">{o.label}</span>
                </span>
                <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-ink/40">
                  {o.when}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={on}
                  onChange={() => toggle(o.id)}
                />
              </label>
            );
          })}
        </div>
      </div>

      {/* Contact */}
      <div className="rounded-2xl bg-mist p-6 ring-1 ring-black/5 md:p-8">
        <h2 className="display text-xl text-ink">Your details</h2>
        <div className="mt-6 grid gap-5">
          <Field id="reg-name" label="Full name" required />
          <Field id="reg-company" label="Company / startup" required />
          <Field id="reg-email" label="Email" type="email" required />
          <div>
            <label
              htmlFor="reg-profile"
              className="text-xs font-semibold uppercase tracking-wider text-ink/60"
            >
              You are
            </label>
            <select
              id="reg-profile"
              className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-rouge"
            >
              <option>Startup / founder</option>
              <option>Investor</option>
              <option>Corporate</option>
              <option>Institution / delegation</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-rouge px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-bleu"
        >
          Register my interest
          <ArrowRight className="h-4 w-4" />
        </button>
        <p className="mt-3 text-center text-xs text-ink/50">
          Free · we&apos;ll confirm by email
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-wider text-ink/60"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-rouge"
      />
    </div>
  );
}
