import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Plus, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import AreaCard from "@/components/AreaCard";
import ContactSection from "@/components/ContactSection";
import JsonLd from "@/components/JsonLd";
import { areas, getArea } from "@/lib/areas";
import { breadcrumb } from "@/lib/schema";
import { site, localCurto, whatsappLink, ctaPrincipal } from "@/lib/site";
import { FaWhatsapp } from "@/components/Social";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getArea((await params).slug);
  if (!area) return {};
  const termo = area.termo[0].toUpperCase() + area.termo.slice(1);
  return {
    title: `${termo} em ${localCurto}`,
    description: `${area.resumo} Atendimento em Búzios e Região dos Lagos com o Dr. ${site.advogado}, ${site.oab}.`,
    alternates: { canonical: `/areas-de-atuacao/${area.slug}` },
    openGraph: { title: `${area.titulo} | ${site.advogado} Advocacia`, url: `/areas-de-atuacao/${area.slug}` },
  };
}

export default async function AreaPage({ params }: Props) {
  const area = getArea((await params).slug);
  if (!area) notFound();
  const idx = areas.findIndex((a) => a.slug === area.slug);
  const relacionadas = [1, 2, 3].map((n) => areas[(idx + n) % areas.length]);
  const termo = area.termo[0].toUpperCase() + area.termo.slice(1);

  return (
    <>
      <PageHero
        crumbs={[{ href: "/areas-de-atuacao", label: "Áreas de atuação" }, { href: `/areas-de-atuacao/${area.slug}`, label: area.titulo }]}
        label={`${termo} em ${localCurto}`}
        titulo={area.titulo}
        lead={area.resumo}
      />

      <section className="section">
        <div className="container area-layout">
          <div style={{ display: "grid", gap: 64 }}>
            <div className="prose" style={{ fontSize: 19 }} data-reveal>
              {area.intro.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <div style={{ display: "grid", gap: 24 }}>
              <h2 data-split>Como o escritório atua</h2>
              <ul className="checklist">
                {area.servicos.map((s) => (
                  <li key={s} data-reveal><Check size={18} aria-hidden /> {s}</li>
                ))}
              </ul>
            </div>

            <div style={{ display: "grid", gap: 24 }}>
              <h2 data-split>Como funciona o atendimento</h2>
              <div className="steps">
                <div className="step" data-reveal><h3>Primeiro contato</h3><p>Você descreve a situação pelo WhatsApp ou pelo formulário e agenda uma conversa.</p></div>
                <div className="step" data-reveal><h3>Análise do caso</h3><p>O Dr. Nilton avalia documentos e prazos e explica os caminhos possíveis e os riscos de cada um.</p></div>
                <div className="step" data-reveal><h3>Acompanhamento</h3><p>Com a estratégia definida, você recebe retorno sobre cada etapa, do acordo ao processo.</p></div>
              </div>
            </div>

            <div style={{ display: "grid", gap: 8 }} className="faq">
              <h2 data-split>Dúvidas frequentes</h2>
              <div style={{ marginTop: 16 }}>
                {area.perguntas.map((q) => (
                  <details key={q.p}>
                    <summary>{q.p}<Plus size={20} aria-hidden /></summary>
                    <p>{q.r}</p>
                  </details>
                ))}
              </div>
              <p className="form-note" style={{ marginTop: 16 }}>Respostas gerais e informativas. Cada caso depende de análise individual.</p>
            </div>
          </div>

          <aside className="aside-card" aria-label="Atendimento">
            <p className="label">Atendimento</p>
            <h3 style={{ fontSize: 28 }}>{area.titulo} em Búzios e região</h3>
            <p className="muted" style={{ fontSize: 16 }}>Atendimento direto com o Dr. {site.advogado}, {site.oab}.</p>
            <a className="btn btn-primary" href={whatsappLink(`Olá, Dr. Nilton. Gostaria de falar sobre ${area.titulo}.`)} target="_blank" rel="noopener" data-magnetic>
              <FaWhatsapp size={18} aria-hidden /> {ctaPrincipal}
            </a>
            <p className="form-note">WhatsApp {site.whatsapp.exibicao}</p>
          </aside>
        </div>
      </section>

      <section className="section" style={{ background: "var(--canvas-2)" }} aria-labelledby="outras">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 32 }}>
            <h2 id="outras" data-split>Outras áreas de atuação</h2>
          </div>
          <div className="areas-grid">{relacionadas.map((a) => <AreaCard key={a.slug} area={a} />)}</div>
          <p style={{ marginTop: 32 }}><Link className="link link-accent" href="/areas-de-atuacao">Ver as 16 áreas <ArrowRight size={14} style={{ display: "inline", verticalAlign: "-2px" }} aria-hidden /></Link></p>
        </div>
      </section>

      <ContactSection titulo={`Fale sobre ${area.titulo.replace(/^Direito (de |do |da )?/, (m) => m.toLowerCase())}`} areaInicial={area.titulo} />

      <JsonLd data={breadcrumb([{ name: "Início", path: "/" }, { name: "Áreas de atuação", path: "/areas-de-atuacao" }, { name: area.titulo, path: `/areas-de-atuacao/${area.slug}` }])} />
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "Service", name: area.titulo, serviceType: termo,
        provider: { "@id": `${site.url}/#escritorio` }, areaServed: "Armação dos Búzios e Região dos Lagos, RJ",
        url: `${site.url}/areas-de-atuacao/${area.slug}`, description: area.resumo,
      }} />
    </>
  );
}
