import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const personas = [
  {
    title: "You're an individual",
    copy: "Founder, tech professional, student, or simply curious, our events are free and open to all, whatever your nationality or language.",
    cta: "Come to an event",
    href: "/events",
  },
  {
    title: "You run a startup",
    copy: "Get listed in the community directory, meet investors, and plug into a global network of 100+ French Tech communities.",
    cta: "Join the community",
    href: "/contact#join",
  },
  {
    title: "You're a partner or sponsor",
    copy: "Corporates, institutions, and VCs: reach the France–Cambodia tech ecosystem and support its flagship events.",
    cta: "Become a partner",
    href: "/partners#become-a-partner",
  },
  {
    title: "You're an investor",
    copy: "Discover vetted startups building in Cambodia and across ASEAN, from pre-seed to growth.",
    cta: "Meet the startups",
    href: "/community",
  },
];

export function PersonaGrid() {
  return (
    <div className="grid gap-px bg-line-dark sm:grid-cols-2">
      {personas.map((p, i) => (
        <Reveal key={p.title} delay={i * 80} className="h-full">
          <Link
            href={p.href}
            className="group flex h-full flex-col justify-between bg-ink p-8 transition-colors hover:bg-ink-soft"
          >
            <div>
              <h3 className="display text-xl text-white">{p.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-white/60">
                {p.copy}
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-rouge">
              {p.cta}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
