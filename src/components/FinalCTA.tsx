import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RoosterMark } from "./Logo";
import { Reveal } from "./Reveal";

export function FinalCTA({
  title = "Together, let's connect the French–Cambodian tech ecosystem.",
  eyebrow = "Join the community",
}: {
  title?: string;
  eyebrow?: string;
}) {
  return (
    <section className="bg-paper px-5 py-16 md:py-20">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-bleu via-[#1b1b6e] to-[#3a1e5e] px-6 py-16 text-center md:px-12 md:py-24">
          {/* sunburst decoration */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 opacity-20"
            style={{
              background:
                "repeating-conic-gradient(from 0deg, #ffffff 0deg 4deg, transparent 4deg 12deg)",
              borderRadius: "9999px",
              maskImage: "radial-gradient(circle, black 60%, transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 opacity-15"
            style={{
              background:
                "repeating-conic-gradient(from 0deg, #ffffff 0deg 4deg, transparent 4deg 12deg)",
              borderRadius: "9999px",
              maskImage: "radial-gradient(circle, black 60%, transparent 70%)",
            }}
          />
          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white">
              <RoosterMark className="h-9 w-9" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              {eyebrow}
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
              {title}
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-bleu transition-colors hover:bg-rouge hover:text-white"
              >
                Join us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-bleu"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
