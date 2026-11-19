import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Quote from "@/components/Quote";
import JsonLd from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";
import { site, whatsappLink, ctaPrincipal } from "@/lib/site";

export const metadata: Metadata = {
  title: "Institucional: missão, visão e valores",
  description: `Conheça o escritório ${site.nome}: ${site.anosDeAtuacao} de atuação, missão, visão e os valores de excelência, integridade, ética, respeito e comprometimento.`,
  alternates: { canonical: "/institucional" },
};

const valores = [
  { t: "Excelência", d: "Eficiência e qualidade no trabalho, buscando superar as expectativas dos clientes." },
  { t: "Integridade", d: "Respeito à lei, ao trabalho, à verdade e às pessoas." },
  { t: "Ética", d: "Atenção constante aos princípios que orientam o comportamento humano e profissional." },
  { t: "Respeito", d: "Consideração com os clientes e com todas as partes envolvidas no processo." },
  { t: "Comprometimento", d: "Sócios e colaboradores alinhados aos objetivos do escritório e de cada cliente." },
];

export default function Institucional() {
  return (
    <>
      <PageHero crumbs={[{ href: "/institucional", label: "Institucional" }]} label="Institucional" titulo="Missão, visão e valores do escritório" lead={`${site.anosDeAtuacao[0].toUpperCase() + site.anosDeAtuacao.slice(1)} de atuação, com atendimento próximo e conduzido pessoalmente pelo Dr. ${site.advogado}.`} />

      <section className="section">
        <div className="container split reverse">
          <div style={{ display: "grid", gap: 16 }}>
            <article className="mv-card" data-reveal>
              <h2 style={{ fontSize: 32 }}>Missão</h2>
              <p className="muted">Prestar serviços jurídicos com ética, qualidade, empenho e excelência, contando com advogados e colaboradores qualificados e {site.anosDeAtuacao} de atuação.</p>
            </article>
            <article className="mv-card" data-reveal>
              <h2 style={{ fontSize: 32 }}>Visão</h2>
              <p className="muted">Ser referência entre os escritórios de advocacia e negócios, reconhecido como moderno, inovador, acolhedor e eficiente.</p>
            </article>
          </div>
          <div className="frame wide" data-reveal>
            <Image src="/img/foto-institucional.jpg" alt="Ambiente do escritório Nilton Cesar dos Santos Advocacia" fill sizes="(max-width: 860px) 100vw, 55vw" />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="valores">
        <div className="container">
          <div className="section-head">
            <h2 id="valores" data-split>Cinco valores</h2>
            <p className="lead">Os princípios que orientam cada atendimento, do primeiro contato ao fim do processo.</p>
          </div>
          <div className="values">
            {valores.map((v) => (
              <div className="value" key={v.t} data-reveal>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 48 }} data-reveal>
            <a className="btn btn-primary" href={whatsappLink()} target="_blank" rel="noopener" data-magnetic>{ctaPrincipal}</a>
            <Link className="btn btn-ghost" href="/areas-de-atuacao">Ver áreas de atuação</Link>
          </div>
        </div>
      </section>

      <Quote />
      <JsonLd data={breadcrumb([{ name: "Início", path: "/" }, { name: "Institucional", path: "/institucional" }])} />
    </>
  );
}
