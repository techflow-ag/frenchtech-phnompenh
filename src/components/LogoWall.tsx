import { Reveal } from "./Reveal";

export function LogoWall({
  logos,
}: {
  logos: { name: string; logo: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 md:grid-cols-5">
      {logos.map((l, i) => (
        <Reveal key={l.name} delay={(i % 5) * 50} className="h-full">
          <div className="flex h-28 items-center justify-center bg-paper px-6 md:h-32">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={l.logo}
              alt={l.name}
              loading="lazy"
              className="max-h-12 w-auto max-w-[78%] object-contain opacity-90 transition-all duration-300 hover:scale-105 hover:opacity-100"
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
