import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";
import { site, whatsappLink, ctaPrincipal } from "@/lib/site";
import { FaWhatsapp } from "@/components/Social";

export const metadata: Metadata = {
  title: `Dr. ${site.advogado}, ${site.oab}`,
  description: `Trajetória do advogado ${site.advogado} (${site.oab}): formado pela UFF, ex-professor substituto da UFF e procurador ou assessor jurídico de quatro municípios fluminenses.`,
  alternates: { canonical: "/profissional" },
};

const trajetoria = [
  { yr: "Origem", d: "Natural de Santa Maria Madalena, no interior do estado do Rio de Janeiro." },
  { yr: "1987", d: "Ingressa na Universidade Federal Fluminense (UFF)." },
  { yr: "2002", d: "Forma-se em Direito pela UFF e, no mesmo ano, é aprovado em concurso para professor substituto da universidade, lecionando disciplinas processuais." },
  { yr: "Advocacia", d: "Integra o escritório Correa Pinheiro & Santos e passa a atuar também junto à OAB." },
  { yr: "Setor público", d: "Procurador ou assessor jurídico dos municípios de Trajano de Moraes, São Pedro da Aldeia, Arraial do Cabo e Armação dos Búzios." },
  { yr: "Comunidade", d: "Presidente do Rotary Club de Búzios." },
];

const municipios = ["Trajano de Moraes", "São Pedro da Aldeia", "Arraial do Cabo", "Armação dos Búzios"];

export default function Profissional() {
  return (
    <>
      <PageHero crumbs={[{ href: "/profissional", label: "Profissional" }]} label={site.oab} titulo={`Dr. ${site.advogado}`} lead="Advogado, ex-professor da UFF e procurador de quatro municípios fluminenses." />

      <section className="section">
        <div className="container split" style={{ alignItems: "start" }}>
          <div style={{ position: "sticky", top: "calc(var(--header-h) + 24px)" }}>
            <div className="frame portrait" data-reveal>
              <Image src="/img/foto-profissional.jpg" alt={`Dr. ${site.advogado}, advogado ${site.oab}`} fill priority sizes="(max-width: 860px) 100vw, 45vw" />
            </div>
          </div>
          <div style={{ display: "grid", gap: 48 }}>
            <div style={{ display: "grid", gap: 16 }}>
              <h2 data-split>Trajetória</h2>
              <p className="lead">{site.nomeCompleto} construiu a carreira entre a sala de aula, a advocacia privada e a assessoria jurídica a municípios.</p>
            </div>
            <ol className="timeline">
              {trajetoria.map((t) => (
                <li key={t.yr} data-reveal>
                  <span className="yr">{t.yr}</span>
                  <p>{t.d}</p>
                </li>
              ))}
            </ol>
            <div style={{ display: "grid", gap: 16 }} data-reveal>
              <h3>Municípios assessorados</h3>
              <div className="chips">{municipios.map((m) => <span className="chip" key={m}>{m}</span>)}</div>
            </div>
            <div data-reveal>
              <a className="btn btn-primary" href={whatsappLink()} target="_blank" rel="noopener" data-magnetic>
                <FaWhatsapp size={18} aria-hidden /> {ctaPrincipal}
              </a>
            </div>
          </div>
        </div>
      </section>
      <JsonLd data={breadcrumb([{ name: "Início", path: "/" }, { name: "Profissional", path: "/profissional" }])} />
    </>
  );
}
