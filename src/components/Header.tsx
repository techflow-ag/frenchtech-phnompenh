"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/community", label: "Community" },
  { href: "/partners", label: "Partners" },
  { href: "/blog", label: "Newsroom" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md">
      <span className="tricolore tricolore--on-light" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-medium transition-colors hover:text-rouge ${
                  active ? "text-rouge" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="display bg-rouge px-5 py-2.5 text-xs text-white transition-colors hover:bg-bleu"
          >
            Join us
          </Link>
        </nav>
        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav
          className="border-t border-line bg-paper px-5 pb-6 pt-2 md:hidden"
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3 text-base font-medium text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="display mt-4 block bg-rouge px-5 py-3 text-center text-xs text-white"
          >
            Join us
          </Link>
        </nav>
      )}
    </header>
  );
}
