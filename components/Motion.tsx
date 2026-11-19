"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const EASE = "expo.out"; // equivalente GSAP do cubic-bezier(0.16, 1, 0.3, 1)

/**
 * Camada única de movimento do site. Lê atributos no HTML:
 *  data-reveal        → fade + 32px ao entrar na tela (stagger em grupos)
 *  data-split         → título revelado palavra por palavra (text reveal)
 *  data-parallax="N"  → imagem desloca N% no scroll (parallax)
 *  data-scrub-words   → palavras acendem conforme o scroll (momento tipográfico)
 *  data-magnetic      → botão atraído pelo cursor (só mouse)
 * Com prefers-reduced-motion, nada se move e tudo fica visível.
 */
export default function Motion() {
  const pathname = usePathname();

  // Lenis: rolagem suave, uma vez por sessão
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || window.matchMedia("(pointer: coarse)").matches) return;
    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  // Animações por página
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduce) return;

      // text reveal
      document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
        if (!el.dataset.splitDone) {
          const words = (el.textContent || "").trim().split(/\s+/);
          el.setAttribute("aria-label", el.textContent?.trim() || "");
          el.innerHTML = words
            .map((w) => `<span class="split-line" aria-hidden="true"><span>${w}</span></span>`)
            .join(" ");
          el.dataset.splitDone = "1";
        }
        gsap.fromTo(
          el.querySelectorAll(".split-line > span"),
          { yPercent: 110 },
          { yPercent: 0, duration: 1.2, ease: EASE, stagger: 0.06, delay: el.closest(".hero") ? 0.15 : 0,
            scrollTrigger: el.closest(".hero") ? undefined : { trigger: el, start: "top 85%", once: true } },
        );
      });

      // reveal com stagger por lote
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { opacity: 1, y: 0, duration: 1.1, ease: EASE, stagger: 0.12, overwrite: true }),
      });

      // parallax
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset.parallax || 12);
        gsap.fromTo(el, { yPercent: -amount / 2 }, {
          yPercent: amount / 2, ease: "none",
          scrollTrigger: { trigger: el.parentElement || el, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      // momento tipográfico: palavras acendem no scroll
      document.querySelectorAll<HTMLElement>("[data-scrub-words]").forEach((el) => {
        gsap.to(el.querySelectorAll(".w"), {
          opacity: 1, ease: "none", stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true },
        });
      });
    });

    // magnetic (fora do context: listeners próprios)
    const cleanups: (() => void)[] = [];
    if (!reduce && window.matchMedia("(pointer: fine)").matches) {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          xTo((e.clientX - (r.left + r.width / 2)) * 0.25);
          yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
        };
        const leave = () => { xTo(0); yTo(0); };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); gsap.set(el, { x: 0, y: 0 }); });
      });
    }

    requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => {
      ctx.revert();
      cleanups.forEach((c) => c());
    };
  }, [pathname]);

  return null;
}
