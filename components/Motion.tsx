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

      // text reveal (preserva <em> e outros destaques)
      document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
        if (!el.dataset.splitDone) {
          el.setAttribute("aria-label", (el.textContent || "").replace(/\s+/g, " ").trim());
          const wrap = (w: string, tag?: string) =>
            `<span class="split-line" aria-hidden="true"><span>${tag ? `<${tag}>${w}</${tag}>` : w}</span></span>`;
          const parts: string[] = [];
          el.childNodes.forEach((n) => {
            const words = (n.textContent || "").split(/\s+/).filter(Boolean);
            const tag = n.nodeType === 1 ? (n as Element).tagName.toLowerCase() : undefined;
            words.forEach((w) => parts.push(wrap(w, tag)));
          });
          el.innerHTML = parts.join(" ");
          el.dataset.splitDone = "1";
        }
        const inHero = !!el.closest(".hero, .hero2");
        gsap.fromTo(
          el.querySelectorAll(".split-line > span"),
          { yPercent: 110 },
          { yPercent: 0, duration: 1.2, ease: EASE, stagger: 0.06, delay: inHero ? 0.25 : 0,
            scrollTrigger: inHero ? undefined : { trigger: el, start: "top 85%", once: true } },
        );
      });

      // entrada da hero com retrato
      const hero = document.querySelector(".hero2");
      if (hero) {
        const tl = gsap.timeline({ defaults: { ease: EASE } });
        tl.from("[data-hero-glow]", { opacity: 0, duration: 1.6 }, 0)
          .from("[data-hero-photo]", { opacity: 0, y: 48, scale: 1.04, duration: 1.4, transformOrigin: "50% 100%" }, 0.1)
          .fromTo("[data-hero-arc] circle", { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" }, 0.2)
          .from("[data-hero-item]", { opacity: 0, y: 24, duration: 1, stagger: 0.08 }, 0.6)
          .from("[data-hero-badge]", { opacity: 0, x: -24, duration: 1 }, 1.0);
        // parallax suave do retrato e do arco ao rolar
        gsap.to("[data-hero-photo]", { yPercent: 8, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });
        gsap.to("[data-hero-arc]", { yPercent: -10, rotate: 12, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });
      }

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
