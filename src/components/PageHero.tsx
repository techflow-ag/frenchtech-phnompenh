import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  khmer,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  khmer?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {khmer && (
        <p
          lang="km"
          aria-hidden="true"
          className="font-khmer pointer-events-none absolute -right-6 -top-4 select-none text-[8rem] leading-none text-mist md:text-[12rem]"
        >
          {khmer}
        </p>
      )}
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display mt-4 text-4xl text-ink md:text-6xl">{title}</h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft/80 md:text-lg">
              {intro}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
