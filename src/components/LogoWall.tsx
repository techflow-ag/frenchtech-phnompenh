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
          <div className="flex h-36 items-center justify-center bg-paper px-5 md:h-40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={l.logo}
              alt={l.name}
              loading="lazy"
              className="max-h-20 w-auto max-w-[85%] object-contain opacity-90 transition-all duration-300 hover:scale-105 hover:opacity-100 md:max-h-24"
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
