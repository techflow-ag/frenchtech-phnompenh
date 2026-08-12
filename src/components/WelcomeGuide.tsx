"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { RoosterMark } from "./Logo";
import { Reveal } from "./Reveal";

export function WelcomeGuide() {
  const [sent, setSent] = useState(false);

  // Wire to a real provider (Resend/Brevo/Mailchimp) to actually capture emails.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        {/* Book mockup */}
        <Reveal className="order-2 md:order-1">
          <div className="relative mx-auto flex max-w-sm justify-center">
            <div className="absolute inset-0 translate-x-6 translate-y-8 scale-95 rounded-2xl bg-bleu/10 blur-2xl" />
            <div className="relative aspect-[3/4] w-64 rotate-[-6deg] rounded-2xl bg-gradient-to-br from-ink to-bleu p-7 shadow-2xl transition-transform duration-500 hover:rotate-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <RoosterMark className="h-7 w-7" />
              </div>
              <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Ecosystem · Édition 2026
              </p>
              <p className="mt-4 text-4xl font-extrabold leading-none text-white">
                Welcome
                <br />
                Guide
                <br />
                <span className="text-rouge">Cambodia</span>
              </p>
              <span className="mt-6 block h-1 w-10 bg-rouge" />
              <p className="mt-4 text-xs leading-relaxed text-white/60">
                Le guide d&apos;accueil de l&apos;écosystème tech cambodgien, pour
                les entrepreneurs, startups, investisseurs et talents.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <div className="order-1 md:order-2">
          <Reveal>
            <p className="eyebrow">Ressources</p>
            <h2 className="display mt-3 text-4xl text-ink md:text-5xl">
              Le Welcome Guide <span className="text-rouge">2026</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft/80">
              Réussir son atterrissage au Cambodge : créer sa société, visa et
              banque, fiscalité, financement, recrutement, secteurs porteurs.
              <strong className="text-ink"> Un guide édité par la communauté.</strong>
            </p>
          </Reveal>

          {sent ? (
            <Reveal className="mt-8">
              <div className="flex items-center gap-3 rounded-2xl border border-line bg-mist p-6">
                <Check className="h-5 w-5 shrink-0 text-rouge" />
                <p className="text-base text-ink">
                  Merci ! Le guide arrive dans votre boîte mail. Bienvenue dans la
                  communauté.
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal className="mt-8">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-mist p-6 ring-1 ring-black/5 md:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="wg-first" label="Prénom" required />
                  <Field id="wg-last" label="Nom" required />
                  <div>
                    <label
                      htmlFor="wg-role"
                      className="text-xs font-semibold uppercase tracking-wider text-ink/60"
                    >
                      Vous êtes
                    </label>
                    <select
                      id="wg-role"
                      className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-rouge"
                    >
                      <option>Startup / fondateur</option>
                      <option>Investisseur</option>
                      <option>Entreprise / corporate</option>
                      <option>Talent / étudiant</option>
                      <option>Institution</option>
                    </select>
                  </div>
                  <Field id="wg-org" label="Organisation" />
                  <Field id="wg-email" label="Email" type="email" required />
                  <Field id="wg-phone" label="Téléphone" type="tel" />
                </div>
                <label className="mt-5 flex items-start gap-3 text-sm text-ink-soft/80">
                  <input type="checkbox" required className="mt-1 accent-rouge" />
                  J&apos;accepte de recevoir le guide et les communications de La
                  French Tech Phnom Penh.
                </label>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-rouge px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-bleu"
                  >
                    Recevoir le guide
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <span className="text-xs text-ink/50">
                    PDF gratuit · édition 2026
                  </span>
                </div>
              </form>
            </Reveal>
          )}
        </div>
      </div>
    </section>
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
