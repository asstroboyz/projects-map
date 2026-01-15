"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + 120;

      for (const item of NAV_ITEMS) {
        const el = document.querySelector(item.href) as HTMLElement;
        if (!el) continue;

        if (
          scrollY >= el.offsetTop &&
          scrollY < el.offsetTop + el.offsetHeight
        ) {
          setActive(item.href);
        }
      }
    };

    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const activeIndex = NAV_ITEMS.findIndex((i) => i.href === active);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-background-dark/80 border-b border-border-subtle">
      <nav className="max-w-[1400px] mx-auto px-6 h-16 flex justify-between items-center">
        <span className="text-accent-gold font-heading font-bold">
          Risdandi Ganda Gunawan
        </span>

        {/* DESKTOP */}
        <div className="hidden md:flex gap-8 text-sm">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition ${
                active === item.href
                  ? "text-accent-gold"
                  : "text-text-dark-secondary hover:text-accent-gold"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-accent-gold text-xl"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden relative overflow-hidden bg-background-dark border-t border-border-subtle">

          {/* 🌊 LIQUID INDICATOR */}
          <div
            className="absolute left-0 w-full h-12 bg-accent-gold/10 rounded-md transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateY(${activeIndex * 48}px)`,
            }}
          />

          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`relative z-10 block px-6 py-3 text-sm transition ${
                active === item.href
                  ? "text-accent-gold font-semibold"
                  : "text-text-dark-secondary"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
