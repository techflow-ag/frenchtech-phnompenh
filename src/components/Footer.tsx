import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "./Logo";
import { LinkedinIcon, FacebookIcon } from "./SocialIcons";

const columns = [
  {
    title: "Community",
    links: [
      { href: "/about", label: "About us" },
      { href: "/about#board", label: "The board" },
      { href: "/members", label: "Members" },
      { href: "/community", label: "Community companies" },
      { href: "/partners", label: "Partners & sponsors" },
    ],
  },
  {
    title: "Get involved",
    links: [
      { href: "/events", label: "Events" },
      { href: "/contact", label: "Become a member" },
      { href: "/partners#become-a-partner", label: "Become a partner" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <span className="tricolore" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo dark />
          <p className="mt-6 max-w-sm text-base leading-relaxed text-white/70">
            The official French Tech Community in Cambodia, part of a global
            network of 100+ communities in 57 countries, driven by volunteers
            and labeled by the French Tech Mission.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="https://kh.linkedin.com/company/la-french-tech-phnompenh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/60 transition-colors hover:text-rouge"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/CambodgeFrenchTech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/60 transition-colors hover:text-rouge"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:frenchtech.pp@gmail.com"
              aria-label="Email"
              className="text-white/60 transition-colors hover:text-rouge"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="eyebrow">{col.title}</h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="text-base text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-line-dark">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} La French Tech Phnom Penh. A
            volunteer-driven, non-profit community.
          </p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span lang="km" className="font-khmer">
              សហគមន៍បច្ចេកវិទ្យាបារាំងនៅភ្នំពេញ
            </span>
            <span>
              All Rights Reserved © Made with{" "}
              <span className="text-rouge">❤</span> By{" "}
              <a
                href="https://www.techflow-agency.com/en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 underline hover:text-white"
              >
                TechFlow
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
