import { boardQuote } from "@/data/quote";
import { Reveal } from "./Reveal";

export function Quote() {
  return (
    <Reveal className="mx-auto max-w-4xl">
      <figure className="relative rounded-3xl bg-paper p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.3)] ring-1 ring-black/5 md:p-14">
        <span
          aria-hidden="true"
          className="display absolute left-8 top-4 select-none text-7xl leading-none text-rouge md:left-12"
        >
          &ldquo;
        </span>
        <blockquote className="relative pt-8">
          <p className="text-xl font-medium leading-relaxed text-ink md:text-2xl">
            {boardQuote.text}
          </p>
        </blockquote>
        <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={boardQuote.photo}
            alt={boardQuote.name}
            className="h-14 w-14 rounded-full object-cover"
          />
          <div>
            <p className="display text-base text-ink">{boardQuote.name}</p>
            <p className="text-sm text-ink/60">{boardQuote.role}</p>
          </div>
        </figcaption>
      </figure>
    </Reveal>
  );
}
