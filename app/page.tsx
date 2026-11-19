import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { areas } from "@/lib/areas";
import { site, whatsappLink, ctaPrincipal } from "@/lib/site";
import AreaCard from "@/components/AreaCard";
import Quote from "@/components/Quote";
import ContactSection from "@/components/ContactSection";
import { FaWhatsapp } from "@/components/Social";

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-titulo">
        <div className="hero-media" data-parallax="14">
          <Image src="/img/foto-institucional.jpg" alt="Escritório Nilton Cesar dos Santos Advocacia" fill priority sizes="100vw" />
        </div>
        <div className="container hero-content">
          <p className="label" style={{ color: "var(--night-gray)" }} data-reveal>{site.advogado} · Advocacia</p>
          <h1 id="hero-titulo" data-split>Escritório de advocacia em Búzios e na Região dos Lagos</h1>
          <p className="lead" data-reveal>
            Há {site.anosDeAtuacao}, o Dr. {site.advogado} atende pessoas, empresas e municípios em 16 áreas do Direito, do cível ao criminal.
          </p>
          <div className="hero-actions" data-reveal>
            <a className="btn btn-primary" href={whatsappLink()} target="_blank" rel="noopener" data-magnetic>
              <FaWhatsapp size={18} aria-hidden /> {ctaPrincipal}
            </a>
            <Link className="btn btn-ghost" href="/areas-de-atuacao" style={{ color: "var(--night-ink)", borderColor: "var(--night-line)" }}>
              Ver áreas de atuação
            </Link>
          </div>
          <div className="hero-facts" data-reveal>
            <span><strong>{site.oab}</strong></span>
            <span><strong>Formado pela UFF</strong> · professor substituto em 2002</span>
            <span><strong>4 municípios</strong> assessorados como procurador</span>
          </div>
        </div>
      </section>

      <Quote />

      <section className="section" aria-labelledby="inst-titulo">
        <div className="container">
          <div className="section-head">
            <p className="label">Institucional</p>
            <h2 id="inst-titulo" data-split>Missão, visão e valores</h2>
            <p className="lead">Um escritório que combina mais de duas décadas de prática com atendimento próximo e direto.</p>
          </div>
          <div className="mv">
            <article className="mv-card" data-reveal>
              <p className="label">Missão</p>
              <p style={{ fontSize: 20, lineHeight: 1.5 }}>Prestar serviços jurídicos com ética, qualidade e empenho, com advogados e colaboradores qualificados e {site.anosDeAtuacao} de atuação.</p>
            </article>
            <article className="mv-card" data-reveal>
              <p className="label">Visão</p>
              <p style={{ fontSize: 20, lineHeight: 1.5 }}>Ser referência entre os escritórios de advocacia e negócios, reconhecido como moderno, inovador, acolhedor e eficiente.</p>
            </article>
          </div>
          <p style={{ marginTop: 32 }}>
            <Link className="link link-accent" href="/institucional">Conhecer os valores do escritório →</Link>
          </p>
        </div>
      </section>

      <section className="section" id="areas" aria-labelledby="areas-titulo" style={{ background: "var(--canvas-2)" }}>
        <div className="container">
          <div className="section-head">
            <p className="label">16 áreas</p>
            <h2 id="areas-titulo" data-split>Áreas de atuação</h2>
            <p className="lead">Consultoria, negociação e atuação judicial para pessoas físicas, empresas e órgãos públicos.</p>
          </div>
          <div className="areas-grid">
            {areas.map((a) => <AreaCard key={a.slug} area={a} />)}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="prof-titulo">
        <div className="container split">
          <div className="frame portrait" data-reveal>
            <Image src="/img/foto-profissional.jpg" alt={`Dr. ${site.advogado}, advogado ${site.oab}`} fill sizes="(max-width: 860px) 100vw, 45vw" />
          </div>
          <div style={{ display: "grid", gap: 24 }}>
            <p className="label">Profissional</p>
            <h2 id="prof-titulo" data-split>Dr. Nilton Cesar dos Santos</h2>
            <p className="muted" style={{ fontWeight: 600 }}>{site.oab}</p>
            <div className="prose muted">
              <p>Natural de Santa Maria Madalena (RJ), formou-se em Direito pela Universidade Federal Fluminense e, no mesmo ano, foi aprovado em concurso para professor substituto da UFF, onde lecionou disciplinas processuais.</p>
              <p>Foi procurador ou assessor jurídico de Trajano de Moraes, São Pedro da Aldeia, Arraial do Cabo e Armação dos Búzios, e presidente do Rotary Club de Búzios.</p>
            </div>
            <div data-reveal>
              <Link className="btn btn-ghost" href="/profissional">Ler a trajetória completa <ArrowRight size={16} aria-hidden /></Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection titulo="Fale com o Dr. Nilton" />
    </>
  );
}
