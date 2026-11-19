import Link from "next/link";
import Image from "next/image";
import { site, whatsappLink, ctaPrincipal } from "@/lib/site";
import { FaWhatsapp } from "./Social";

export default function HeroHome() {
  return (
    <section className="hero2" aria-labelledby="hero-titulo">
      <div className="hero2-bg" data-hero-glow />
      <div className="hero2-grid" aria-hidden />

      <div className="container hero2-inner">
        <div className="hero2-text">
          <p className="hero2-kicker" data-hero-item>Dr. {site.advogado} · {site.oab}</p>
          <h1 id="hero-titulo" data-split>
            Advogado em Búzios e na <em>Região dos Lagos</em>
          </h1>
          <p className="lead" data-hero-item>
            Há {site.anosDeAtuacao}, o Dr. Nilton atende pessoas, empresas e municípios em 16 áreas do Direito, do cível ao criminal, sempre de forma direta e pessoal.
          </p>
          <div className="hero-actions" data-hero-item>
            <a className="btn btn-primary" href={whatsappLink()} target="_blank" rel="noopener" data-magnetic>
              <FaWhatsapp size={18} aria-hidden /> {ctaPrincipal}
            </a>
            <Link className="btn btn-ghost" href="/areas-de-atuacao" style={{ color: "var(--night-ink)", borderColor: "var(--night-line)" }}>
              Ver áreas de atuação
            </Link>
          </div>
        </div>

        <div className="hero2-figure">
          <svg className="hero2-arc" viewBox="0 0 100 100" aria-hidden data-hero-arc>
            <circle cx="50" cy="50" r="49.5" pathLength={1} />
          </svg>
          <Image
            className="hero2-photo"
            src="/img/nilton-recorte.webp"
            alt={`Dr. ${site.advogado}, advogado ${site.oab}`}
            width={1192}
            height={1238}
            priority
            sizes="(max-width: 900px) 100vw, 45vw"
            data-hero-photo
          />
          <div className="hero2-badge" data-hero-badge>
            <strong>+20 anos</strong>
            <span>de advocacia no Rio de Janeiro</span>
          </div>
        </div>
      </div>

      <div className="hero2-facts">
        <div className="container"><ul>
          <li data-hero-item><b>{site.oab.replace("OAB/RJ ", "")}</b>Inscrição na OAB/RJ</li>
          <li data-hero-item><b>16 áreas</b>do cível ao criminal</li>
          <li data-hero-item><b>UFF</b>formado e ex-professor</li>
          <li data-hero-item><b>4 municípios</b>assessorados como procurador</li>
        </ul></div>
      </div>
    </section>
  );
}
