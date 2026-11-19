import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AreaCard from "@/components/AreaCard";
import JsonLd from "@/components/JsonLd";
import { areas } from "@/lib/areas";
import { breadcrumb } from "@/lib/schema";
import { localCurto } from "@/lib/site";

export const metadata: Metadata = {
  title: `Áreas de atuação em ${localCurto}`,
  description: `As 16 áreas do Direito atendidas pelo escritório Nilton Cesar dos Santos em Búzios e Região dos Lagos: cível, criminal, família, imobiliário, bancário, tributário e mais.`,
  alternates: { canonical: "/areas-de-atuacao" },
};

export default function Areas() {
  return (
    <>
      <PageHero crumbs={[{ href: "/areas-de-atuacao", label: "Áreas de atuação" }]} label="16 áreas" titulo="Áreas de atuação" lead="Consultoria, negociação e atuação judicial para pessoas, empresas e órgãos públicos. Escolha a área para ver como o escritório atua." />
      <section className="section">
        <div className="container areas-grid">
          {areas.map((a) => <AreaCard key={a.slug} area={a} />)}
        </div>
      </section>
      <JsonLd data={breadcrumb([{ name: "Início", path: "/" }, { name: "Áreas de atuação", path: "/areas-de-atuacao" }])} />
    </>
  );
}
