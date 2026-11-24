import { useEffect } from "react";

/** Arms off-screen [data-reveal] elements and fades them in on scroll. Content stays visible without JS. */
export function useReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    for (const el of els) {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9) continue;
      el.classList.add(el.dataset["reveal"] === "diagram" ? "diagram-armed" : "reveal-armed");
      const d = el.dataset["delay"];
      if (d) el.style.transitionDelay = `${d}ms`;
      io.observe(el);
    }
    return () => io.disconnect();
  }, []);
}
