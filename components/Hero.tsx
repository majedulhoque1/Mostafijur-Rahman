"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { athlete, roth } from "@/content/data";
import { asset } from "@/lib/asset";

gsap.registerPlugin(useGSAP);

const FACTS = [
  { k: "Challenge Roth 2026", v: roth.finish },
  { k: "IRONMAN 70.3 Worlds", v: "Marbella" },
  { k: "Countries raced", v: "6" },
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      document.documentElement.classList.add("gsap-ready");
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .from(".h-meta", { opacity: 0, y: 14, duration: 0.7 })
        .from(".h-line span", { yPercent: 106, duration: 1.15, stagger: 0.08 }, "-=0.35")
        .from(".h-photo", { opacity: 0, duration: 1.3 }, "-=0.95")
        .from(".h-role", { opacity: 0, y: 14, duration: 0.8 }, "-=1.0")
        .from(".h-fact", { opacity: 0, y: 16, duration: 0.7, stagger: 0.08 }, "-=0.8");
    },
    { scope: root }
  );

  return (
    <header ref={root} className="shell pt-8 pb-14 md:pb-20">
      <p className="h-meta meta text-muted">{athlete.country}</p>

      <div className="mt-6 grid grid-cols-12 gap-x-6 gap-y-8 items-center">
        <div className="col-span-12 md:col-span-7">
          <h1 className="display" style={{ fontSize: "clamp(3rem, 10.5vw, 10rem)" }}>
            {["Mostafijur", "Rahman"].map((w) => (
              <span key={w} className="h-line block overflow-hidden">
                <span className="block">{w}</span>
              </span>
            ))}
          </h1>
          <p className="h-role lede mt-6 max-w-md text-ink-2">
            Long-distance triathlete and open-water swimmer, racing for BD TRI.
          </p>
        </div>

        <div className="col-span-12 md:col-span-5">
          <div className="h-photo aspect-[3/4] w-full overflow-hidden bg-paper-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/img/hero/hero-portrait.webp")}
              alt={athlete.name + ", triathlete and open-water swimmer from Bangladesh"}
              className="h-full w-full object-cover object-center"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 border-t border-ink/15">
        {FACTS.map((f) => (
          <div key={f.k} className="h-fact py-5 sm:py-7 border-b sm:border-b-0 border-ink/15">
            <div className="meta text-muted">{f.k}</div>
            <div
              className="num mt-2 font-semibold"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.3rem)" }}
            >
              {f.v}
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}
