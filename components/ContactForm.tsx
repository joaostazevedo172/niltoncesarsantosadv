"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { areas } from "@/lib/areas";
import { whatsappLink } from "@/lib/site";

type Errors = Partial<Record<"nome" | "email", string>>;

/**
 * O site antigo tinha Nome, E-mail e Mensagem. Aqui o envio monta a mensagem
 * e abre o WhatsApp do escritório — não depende de servidor de e-mail.
 * Para receber também por e-mail, ligue um serviço (Resend/Formspree) em onSubmit.
 */
export default function ContactForm({ areaInicial = "" }: { areaInicial?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [enviado, setEnviado] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const nome = String(f.get("nome") || "").trim();
    const email = String(f.get("email") || "").trim();
    const area = String(f.get("area") || "");
    const mensagem = String(f.get("mensagem") || "").trim();
    const errs: Errors = {};
    if (nome.length < 2) errs.nome = "Nome: escreva o seu nome completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errs.email = "E-mail: escreva um endereço válido, como nome@email.com.";
    setErrors(errs);
    if (Object.keys(errs).length) {
      (e.currentTarget.querySelector(`[name=${Object.keys(errs)[0]}]`) as HTMLElement | null)?.focus();
      return;
    }
    const texto = [
      `Olá, Dr. Nilton. Meu nome é ${nome}.`,
      area && `Assunto: ${area}.`,
      mensagem,
      `E-mail para retorno: ${email}`,
    ].filter(Boolean).join("\n\n");
    window.open(whatsappLink(texto), "_blank", "noopener");
    setEnviado(nome.split(" ")[0]);
  }

  if (enviado) {
    return (
      <div className="form-ok" role="status">
        <h3>Mensagem pronta, {enviado}.</h3>
        <p className="muted" style={{ marginTop: 8 }}>
          Abrimos o WhatsApp do escritório com o seu texto. Toque em enviar por lá para concluir o contato.
        </p>
        <button className="btn btn-ghost" style={{ marginTop: 16 }} onClick={() => setEnviado(null)}>Escrever outra mensagem</button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="nome">Nome</label>
        <input id="nome" name="nome" autoComplete="name" required aria-invalid={!!errors.nome} aria-describedby={errors.nome ? "nome-err" : undefined} />
        {errors.nome && <span className="err" id="nome-err">{errors.nome}</span>}
      </div>
      <div className="field">
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" autoComplete="email" inputMode="email" required aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
        {errors.email && <span className="err" id="email-err">{errors.email}</span>}
      </div>
      <div className="field">
        <label htmlFor="area">Assunto (opcional)</label>
        <select id="area" name="area" defaultValue={areaInicial}>
          <option value="">Selecione a área</option>
          {areas.map((a) => <option key={a.slug} value={a.titulo}>{a.titulo}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="mensagem">Mensagem (opcional)</label>
        <textarea id="mensagem" name="mensagem" />
      </div>
      <button className="btn btn-primary" type="submit" data-magnetic>
        Enviar pelo WhatsApp <ArrowRight size={16} aria-hidden />
      </button>
      <p className="form-note">
        Seus dados são usados só para responder a este contato. Veja a <Link className="link" href="/politica-de-privacidade">política de privacidade</Link>.
      </p>
    </form>
  );
}
