import Link from "next/link";
import Image from "next/image";

// Official La French Tech Phnom Penh rooster pin (transparent PNG).
export function RoosterMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <Image
      src="/images/logo-mark.png"
      alt=""
      width={96}
      height={96}
      className={`${className} object-contain`}
      priority
    />
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="La French Tech Phnom Penh, Home">
      <RoosterMark className="h-10 w-10 shrink-0 transition-transform duration-300 group-hover:-rotate-6" />
      <span className="display text-[0.85rem] leading-[1.15] uppercase tracking-tight">
        <span className={dark ? "text-white" : "text-ink"}>
          La French Tech
        </span>
        <br />
        <span className="text-rouge">Phnom Penh</span>
      </span>
    </Link>
  );
}
