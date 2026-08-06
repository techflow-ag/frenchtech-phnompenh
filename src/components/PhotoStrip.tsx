import { Reveal } from "./Reveal";

export function PhotoStrip({
  photos,
}: {
  photos: { src: string; alt: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {photos.map((p, i) => (
        <Reveal key={p.src} delay={i * 80} className="h-full">
          <div
            className={`relative h-full overflow-hidden bg-mist ${
              i % 2 === 1 ? "md:translate-y-6" : ""
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
