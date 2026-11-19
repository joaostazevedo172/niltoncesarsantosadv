import { site, local } from "./site";
import { areas } from "./areas";

const redes = Object.values(site.redes);

export const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": `${site.url}/#escritorio`,
      name: site.nome,
      url: site.url,
      image: `${site.url}/img/foto-institucional.jpg`,
      logo: `${site.url}/img/logo.png`,
      telephone: "+55-22-99700-9346",
      areaServed: [{ "@type": "City", name: site.cidade }, { "@type": "AdministrativeArea", name: `${site.regiao}, ${site.uf}` }],
      // PENDENTE: incluir "address" (PostalAddress) e "openingHours" quando o cliente informar.
      knowsAbout: areas.map((a) => a.titulo),
      founder: { "@id": `${site.url}/#advogado` },
      sameAs: redes,
      description: `Escritório de advocacia em ${local}, com ${site.anosDeAtuacao} de atuação em 16 áreas do Direito.`,
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#advogado`,
      name: site.advogado,
      alternateName: site.nomeCompleto,
      jobTitle: "Advogado",
      identifier: site.oab,
      image: `${site.url}/img/foto-profissional.jpg`,
      alumniOf: { "@type": "CollegeOrUniversity", name: "Universidade Federal Fluminense" },
      worksFor: { "@id": `${site.url}/#escritorio` },
      url: `${site.url}/profissional`,
      sameAs: redes,
    },
    { "@type": "WebSite", "@id": `${site.url}/#site`, url: site.url, name: site.nome, inLanguage: "pt-BR", publisher: { "@id": `${site.url}/#escritorio` } },
  ],
};

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${site.url}${it.path}` })),
  };
}
