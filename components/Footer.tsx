import Link from "next/link";
import { areas } from "@/lib/areas";
import { site, nav, whatsappLink, ctaPrincipal } from "@/lib/site";
import { SocialIcons, FaWhatsapp } from "./Social";

export default function Footer() {
  const metade = Math.ceil(areas.length / 2);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <p className="brand-name" style={{ fontSize: 28 }}>Nilton Cesar dos Santos</p>
            <p style={{ color: "var(--night-gray)", marginTop: 8, fontSize: 15 }}>Advocacia · {site.oab}</p>
            <p style={{ color: "var(--night-gray)", marginTop: 16, fontSize: 15, maxWidth: "36ch" }}>
              Atendimento em {site.cidade} e na {site.regiao}, {site.uf}.
            </p>
            <a className="btn btn-primary" style={{ marginTop: 24 }} href={whatsappLink()} target="_blank" rel="noopener">
              <FaWhatsapp size={16} aria-hidden /> {ctaPrincipal}
            </a>
            <SocialIcons />
          </div>
          <div>
            <h2>Escritório</h2>
            <ul>
              <li><Link href="/">Início</Link></li>
              {nav.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}
              <li><Link href="/politica-de-privacidade">Política de privacidade</Link></li>
            </ul>
          </div>
          <div>
            <h2>Áreas</h2>
            <ul>{areas.slice(0, metade).map((a) => <li key={a.slug}><Link href={`/areas-de-atuacao/${a.slug}`}>{a.titulo}</Link></li>)}</ul>
          </div>
          <div>
            <h2 aria-hidden style={{ visibility: "hidden" }}>Mais áreas</h2>
            <ul>{areas.slice(metade).map((a) => <li key={a.slug}><Link href={`/areas-de-atuacao/${a.slug}`}>{a.titulo}</Link></li>)}</ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.advogado} · {site.oab}</span>
          <span>Conteúdo informativo, nos termos do Provimento 205/2021 do CFOAB.</span>
        </div>
      </div>
    </footer>
  );
}
