"use client";

import { useEffect, useState } from "react";
import { athlete, nav } from "@/content/data";

/**
 * Sticky masthead with scrollspy. The active section is whichever tracked
 * section most recently crossed the band just under the bar, so short sections
 * still register and the last section stays lit at the bottom of the page.
 */
export default function Masthead() {
  const [active, setActive] = useState<string>(nav[0].id);

  useEffect(() => {
    const ids = nav.map((n) => n.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const compute = () => {
      // Viewport-relative: offsetTop is measured against the offset parent,
      // which gives the wrong answer for nested sections.
      const line = 140; // just below the sticky bar
      let current = sections[0].id;
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= line) current = s.id;
      }
      // At the very bottom, light the final section regardless of offsets.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = sections[sections.length - 1].id;
      }
      setActive(current);
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-paper/92 backdrop-blur-md border-b border-ink/12">
      <div className="shell flex items-center justify-between gap-6 py-3">
        <a href="#top" className="display text-lg leading-none shrink-0">
          {athlete.name}
        </a>

        <nav className="hidden md:flex items-center gap-7 min-w-0">
          {nav.map((n) => {
            const on = active === n.id;
            return (
              <a
                key={n.id}
                href={`#${n.id}`}
                aria-current={on ? "true" : undefined}
                className={`meta relative transition-colors duration-300 ${
                  on ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {n.label}
                <span
                  className="absolute -bottom-1.5 left-0 h-px w-full bg-red origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ transform: on ? "scaleX(1)" : "scaleX(0)" }}
                />
              </a>
            );
          })}
        </nav>

        <a
          href={`https://wa.me/${athlete.whatsapp.replace("+", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="meta shrink-0 bg-ink text-paper px-4 py-2 hover:bg-red transition-colors duration-300"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
