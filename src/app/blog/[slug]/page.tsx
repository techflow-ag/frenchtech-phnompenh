import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { articles, getArticle } from "@/data/blog";
import { FinalCTA } from "@/components/FinalCTA";
import { Reveal } from "@/components/Reveal";
import { JOIN_FORM_URL } from "@/lib/config";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.metaDescription,
    keywords: a.keywords,
    openGraph: {
      title: a.title,
      description: a.metaDescription,
      type: "article",
      images: [a.cover],
    },
  };
}

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const more = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <div className="mx-auto max-w-6xl px-5 pt-12 md:pt-16">
        <Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-rouge hover:text-bleu"
          >
            <ArrowLeft className="h-4 w-4" />
            All articles
          </Link>
        </Reveal>
      </div>

      <article className="mx-auto grid max-w-6xl gap-12 px-5 py-8 md:grid-cols-[3fr_1fr] md:py-12">
        {/* Body, ~66% width */}
        <div className="min-w-0">
          <Reveal>
            <p className="eyebrow">
              {article.category} · {article.readingTime} min read
            </p>
            <h1 className="display mt-3 text-4xl leading-tight text-ink md:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 text-sm text-ink/60">
              {article.author} · {fmt(article.date)}
            </p>
          </Reveal>

          <Reveal className="mt-8">
            <div className="overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.cover}
                alt={article.title}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="mt-10">
            {article.sections.map((s, i) => (
              <Reveal key={i} className="mb-8">
                {s.heading && (
                  <h2 className="display mb-4 mt-4 text-2xl text-ink">
                    {s.heading}
                  </h2>
                )}
                {s.body.map((p, j) => (
                  <p
                    key={j}
                    className="mb-4 text-lg leading-relaxed text-ink-soft/90"
                  >
                    {p}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>
        </div>

        {/* Sticky CTA */}
        <aside className="md:relative">
          <div className="md:sticky md:top-24">
            <div className="rounded-2xl border border-line bg-paper p-7 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.4)]">
              <p className="eyebrow">Get involved</p>
              <h2 className="display mt-2 text-2xl text-ink">
                Join the community
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft/80">
                Founders, investors and partners are welcome. It&apos;s free to
                join the French Tech Phnom Penh community.
              </p>
              <a
                href={JOIN_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-rouge px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-bleu"
              >
                Join us
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/events/register"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-rouge hover:text-rouge"
              >
                Register for events
              </Link>
              <div className="mt-6 border-t border-line pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink/50">
                  Topics
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {article.keywords.slice(0, 4).map((k) => (
                    <span
                      key={k}
                      className="rounded-full border border-line px-2.5 py-1 text-xs text-ink/60"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </article>

      {/* More articles */}
      <section className="border-t border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="display text-2xl text-ink">Read next</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {more.map((a, i) => (
              <Reveal key={a.slug} delay={i * 80} className="h-full">
                <Link
                  href={`/blog/${a.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-paper ring-1 ring-black/5"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={a.cover}
                      alt={a.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-rouge">
                      {a.category}
                    </p>
                    <h3 className="display mt-2 text-base leading-snug text-ink">
                      {a.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
