import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/data/blog";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/FinalCTA";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog & News",
  description:
    "Actualités et analyses de La French Tech Phnom Penh : écosystème tech au Cambodge, entreprises françaises, Sommet de la Francophonie, entrepreneuriat.",
};

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [lead, ...rest] = articles;

  return (
    <>
      <PageHero
        eyebrow="Blog & actualités"
        title="Le blog"
        khmer="ព័ត៌មាន"
        intro="Analyses, guides et actualités de l'écosystème tech franco-cambodgien."
      />

      {/* Lead article */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <Link
            href={`/blog/${lead.slug}`}
            className="group grid gap-8 overflow-hidden rounded-3xl ring-1 ring-black/5 md:grid-cols-2"
          >
            <div className="aspect-[16/10] overflow-hidden md:aspect-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lead.cover}
                alt={lead.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-wide text-rouge">
                {lead.category} · {lead.readingTime} min
              </p>
              <h2 className="display mt-3 text-2xl text-ink md:text-4xl">
                {lead.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft/80">
                {lead.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-rouge">
                Lire l&apos;article
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid gap-8 md:grid-cols-3">
          {rest.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 80} className="h-full">
              <Link
                href={`/blog/${a.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl ring-1 ring-black/5 transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.3)]"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.cover}
                    alt={a.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-rouge">
                    {a.category} · {a.readingTime} min
                  </p>
                  <h3 className="display mt-2 text-lg leading-snug text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft/80">
                    {a.excerpt}
                  </p>
                  <span className="mt-4 text-xs text-ink/50">{fmt(a.date)}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
