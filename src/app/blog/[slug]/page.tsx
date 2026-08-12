import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { articles, getArticle } from "@/data/blog";
import { FinalCTA } from "@/components/FinalCTA";
import { Reveal } from "@/components/Reveal";

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
    description: a.excerpt,
    openGraph: { title: a.title, description: a.excerpt, images: [a.cover] },
  };
}

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
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
      <article>
        {/* Header */}
        <div className="mx-auto max-w-3xl px-5 pt-12 md:pt-16">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-rouge hover:text-bleu"
            >
              <ArrowLeft className="h-4 w-4" />
              Tous les articles
            </Link>
            <p className="eyebrow mt-6">
              {article.category} · {article.readingTime} min de lecture
            </p>
            <h1 className="display mt-3 text-4xl leading-tight text-ink md:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 text-sm text-ink/60">
              {article.author} · {fmt(article.date)}
            </p>
          </Reveal>
        </div>

        {/* Cover */}
        <div className="mx-auto mt-10 max-w-5xl px-5">
          <Reveal>
            <div className="overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.cover}
                alt={article.title}
                className="aspect-[16/8] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-5 py-16">
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
      </article>

      {/* More articles */}
      <section className="border-t border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="display text-2xl text-ink">À lire aussi</h2>
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
