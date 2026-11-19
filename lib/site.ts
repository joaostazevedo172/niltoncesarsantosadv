// Fonte única dos dados do escritório. Tudo o que aparece no site, no schema
// e no sitemap sai daqui — altere neste arquivo e o site inteiro acompanha.

export const site = {
  url: "https://www.niltoncesardossantos.adv.br",
  nome: "Nilton Cesar dos Santos Advocacia",
  advogado: "Nilton Cesar dos Santos",
  nomeCompleto: "Nilton Cesar Coutinho Domingos dos Santos",
  oab: "OAB/RJ 119.061",
  // PENDENTE (confirmar com o cliente): cidade e região de atendimento usadas em títulos e no schema.
  cidade: "Armação dos Búzios",
  regiao: "Região dos Lagos",
  uf: "RJ",
  // PENDENTE: endereço completo, e-mail e horário não constam no site antigo.
  endereco: null as null | { rua: string; bairro: string; cidade: string; cep: string },
  email: null as null | string,
  horario: null as null | string,
  whatsapp: {
    numero: "5522997009346",
    exibicao: "(22) 99700-9346",
  },
  redes: {
    instagram: "https://www.instagram.com/niltonadvocacia",
    facebook: "https://www.facebook.com/niltonadvocacia",
    youtube: "https://www.youtube.com/channel/UCcomCYIu-nt_79jNQPZD5yw",
    // PENDENTE: confirmar a URL exata do perfil no LinkedIn.
    linkedin: "https://www.linkedin.com/search/results/all/?keywords=Nilton%20Cesar%20Coutinho%20Domingos%20dos%20Santos",
  },
  anosDeAtuacao: "mais de 20 anos",
} as const;

export const local = `${site.cidade} e ${site.regiao}`; // "Armação dos Búzios e Região dos Lagos"
export const localCurto = `Búzios e ${site.regiao}`;

export function whatsappLink(mensagem = "Olá, Dr. Nilton. Gostaria de agendar um atendimento.") {
  return `https://wa.me/${site.whatsapp.numero}?text=${encodeURIComponent(mensagem)}`;
}

export const ctaPrincipal = "Agendar atendimento";

export const nav = [
  { href: "/institucional", label: "Institucional" },
  { href: "/areas-de-atuacao", label: "Áreas de atuação" },
  { href: "/profissional", label: "Profissional" },
  { href: "/contato", label: "Contato" },
];
