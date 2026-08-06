import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`display mt-3 text-3xl md:text-5xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed md:text-lg ${
            dark ? "text-white/70" : "text-ink-soft/80"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
