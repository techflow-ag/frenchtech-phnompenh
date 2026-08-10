import { Reveal } from "./Reveal";

type Photo = { src: string; alt: string };

// Landscape bento gallery: one wide feature tile + a supporting row,
// all cropped landscape so faces and rooms read naturally.
export function EventGallery({
  feature,
  rest,
}: {
  feature: Photo;
  rest: Photo[];
}) {
  return (
    <div className="grid gap-3">
      <Reveal>
        <div className="overflow-hidden bg-mist">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={feature.src}
            alt={feature.alt}
            className="aspect-[16/7] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {rest.map((p, i) => (
          <Reveal key={p.src} delay={i * 90} className="h-full">
            <div className="h-full overflow-hidden bg-mist">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
