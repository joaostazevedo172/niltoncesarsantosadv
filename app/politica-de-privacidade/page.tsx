import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: `Como o escritório ${site.nome} trata os dados pessoais enviados pelo site, conforme a LGPD.`,
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function Privacidade() {
  return (
    <>
      <PageHero crumbs={[{ href: "/politica-de-privacidade", label: "Política de privacidade" }]} titulo="Política de privacidade" lead="Como tratamos os dados que você envia por este site, nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018)." />
      <section className="section">
        <div className="container prose" style={{ display: "grid", gap: 32 }}>
          <div><h2 style={{ fontSize: 28, marginBottom: 12 }}>Quais dados coletamos</h2><p>Nome, e-mail e o conteúdo da mensagem que você escreve no formulário de contato. O site não usa cookies de publicidade nem ferramentas de gravação de navegação.</p></div>
          <div><h2 style={{ fontSize: 28, marginBottom: 12 }}>Para que usamos</h2><p>Exclusivamente para responder ao seu contato e, se você contratar o escritório, para prestar o serviço jurídico. Não vendemos nem compartilhamos dados com terceiros para fins comerciais.</p></div>
          <div><h2 style={{ fontSize: 28, marginBottom: 12 }}>Como o envio funciona</h2><p>Ao enviar o formulário, a mensagem é aberta no WhatsApp do escritório, e o tratamento passa a seguir também a política do WhatsApp. Informações cobertas pelo sigilo profissional são tratadas conforme o Estatuto da Advocacia.</p></div>
          <div><h2 style={{ fontSize: 28, marginBottom: 12 }}>Seus direitos</h2><p>Você pode pedir acesso, correção ou exclusão dos seus dados a qualquer momento pelo WhatsApp {site.whatsapp.exibicao}.</p></div>
          <p className="form-note">Responsável: {site.advogado}, {site.oab}. Última atualização: novembro de 2026.</p>
        </div>
      </section>
    </>
  );
}
