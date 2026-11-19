"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { nav, whatsappLink, ctaPrincipal, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header className={`header ${solid || !overHero ? "is-solid" : ""} ${overHero ? "is-dark" : ""}`}>
        <div className="container header-inner">
          {/* Logo oficial: troque este bloco por <Image src="/img/logo.png" .../> quando o arquivo chegar */}
          <Link href="/" className="brand" aria-label={`${site.nome} — página inicial`}>
            <span className="brand-name">Nilton Cesar dos Santos</span>
            <span className="brand-sub">Advocacia · {site.oab}</span>
          </Link>
          <nav className="nav" aria-label="Principal">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} aria-current={isActive(n.href) ? "page" : undefined}>
                {n.label}
              </Link>
            ))}
            <a className="btn btn-primary" href={whatsappLink()} target="_blank" rel="noopener" data-magnetic>
              {ctaPrincipal}
            </a>
          </nav>
          <button className="menu-btn" aria-label="Abrir menu" aria-expanded={open} aria-controls="drawer" onClick={() => setOpen(true)}>
            <Menu size={20} aria-hidden />
          </button>
        </div>
      </header>

      <div id="drawer" className={`drawer ${open ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Menu" inert={!open}>
        <button className="menu-btn drawer-close" style={{ display: "inline-flex" }} aria-label="Fechar menu" onClick={() => setOpen(false)}>
          <X size={20} aria-hidden />
        </button>
        <Link href="/" className="big">Início</Link>
        {nav.map((n) => (
          <Link key={n.href} href={n.href} className="big" aria-current={isActive(n.href) ? "page" : undefined}>
            {n.label}
          </Link>
        ))}
        <a className="btn btn-primary" style={{ marginTop: 24 }} href={whatsappLink()} target="_blank" rel="noopener">
          {ctaPrincipal} <ArrowRight size={16} aria-hidden />
        </a>
        <p style={{ marginTop: 16, color: "var(--night-gray)", fontSize: 15 }}>WhatsApp {site.whatsapp.exibicao}</p>
      </div>
    </>
  );
}
