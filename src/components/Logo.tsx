import Link from "next/link";

// Placeholder origami-style rooster mark. Swap for the official
// La French Tech Phnom Penh logo asset when provided.
export function RoosterMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* body */}
      <polygon points="10,38 26,16 34,26 30,38" fill="#e0000f" />
      {/* tail */}
      <polygon points="10,38 26,16 12,12 6,24" fill="#b3000c" />
      {/* head */}
      <polygon points="34,26 26,16 36,12 40,20" fill="#e0000f" />
      {/* crest */}
      <polygon points="36,12 40,20 44,10 38,6" fill="#b3000c" />
      {/* beak */}
      <polygon points="40,20 44,22 41,25" fill="#0e0e24" />
      {/* leg line */}
      <polygon points="30,38 22,44 18,38" fill="#b3000c" />
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="La French Tech Phnom Penh — Home">
      <RoosterMark className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:-rotate-6" />
      <span
        className="display text-[0.8rem] leading-[1.1] tracking-tight"
        style={{ letterSpacing: "0.01em" }}
      >
        <span className={dark ? "text-white" : "text-ink"}>
          La French Tech
        </span>
        <br />
        <span className="text-rouge">Phnom Penh</span>
      </span>
    </Link>
  );
}
