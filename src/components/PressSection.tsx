import { ArrowUpRight } from "lucide-react";
import { press } from "@/data/press";
import { Reveal } from "./Reveal";

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function PressSection() {
  return (
    <section className="border-y border-line bg-mist">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28">
        <div>
          <Reveal>
            <span className="tricolore tricolore--on-light w-12" aria-hidden="true" />
            <p className="eyebrow mt-4">Press & media</p>
            <h2 className="display mt-3 text-4xl text-ink md:text-5xl">
              They talk <span className="text-rouge">about us.</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft/80">
              From the Cambodian press to the ecosystem&apos;s own outlets, the
              community makes the news — labelling, board, events.
            </p>
          </Reveal>
        </div>
        <div>
          <ul className="divide-y divide-line border-y border-line">
            {press.map((p, i) => (
              <Reveal key={p.url + p.title} delay={i * 60}>
                <li>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 md:gap-6"
                  >
                    <time className="text-xs font-medium text-ink/50 md:text-sm">
                      {fmt(p.date)}
                    </time>
                    <div>
                      <p className="display text-xs uppercase tracking-wide text-rouge">
                        {p.outlet}
                      </p>
                      <p className="mt-1 text-sm font-medium leading-snug text-ink md:text-base">
                        {p.title}
                      </p>
                    </div>
                    <span className="flex items-center gap-2 text-[0.7rem] uppercase tracking-wider text-ink/40">
                      <span className="hidden md:inline">{p.kind}</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-rouge" />
                    </span>
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
