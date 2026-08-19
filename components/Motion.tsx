"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Global scroll choreography. Anything with class `rv` reveals once.
 * Siblings sharing a `data-rv-group` reveal as a stagger.
 */
export default function Motion() {
  // Deliberately unscoped: the targets live across every section of the page,
  // not inside this component. useGSAP still reverts everything on unmount.
  useGSAP(() => {
    document.documentElement.classList.add("gsap-ready");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(".rv", { opacity: 1, y: 0 });
      return;
    }

    // grouped staggers
    gsap.utils.toArray<HTMLElement>("[data-rv-group]").forEach((group) => {
      const items = group.querySelectorAll<HTMLElement>(".rv");
      if (!items.length) return;
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "expo.out",
        stagger: 0.07,
        scrollTrigger: { trigger: group, start: "top 82%", once: true },
      });
    });

    // ungrouped singles
    gsap.utils.toArray<HTMLElement>(".rv").forEach((el) => {
      if (el.closest("[data-rv-group]")) return;
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 86%", once: true },
      });
    });

    // rules that draw themselves in
    gsap.utils.toArray<HTMLElement>("[data-draw]").forEach((el) => {
      gsap.from(el, {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.1,
        ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
      });
    });

    ScrollTrigger.refresh();
  });

  return null;
}
