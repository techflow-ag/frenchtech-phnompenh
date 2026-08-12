// Signature element: a slow marquee alternating "Phnom Penh" in Khmer script
// and "La French Tech", the meeting of the two cultures the community bridges.
const items = ["ភ្នំពេញ", "La French Tech", "ភ្នំពេញ", "Cambodge", "ភ្នំពេញ", "La French Tech", "ភ្នំពេញ", "Cambodia"];

export function KhmerBand() {
  return (
    <div
      className="overflow-hidden border-y border-line bg-mist py-4"
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max items-center gap-10">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span
              className={
                /[ក-៿]/.test(item)
                  ? "font-khmer text-2xl text-ink/30"
                  : "display text-xl text-rouge/40"
              }
            >
              {item}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-bleu/30" />
          </span>
        ))}
      </div>
    </div>
  );
}
