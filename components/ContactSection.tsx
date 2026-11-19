import ContactForm from "./ContactForm";
import { ContactList } from "./Social";
import { site } from "@/lib/site";

export default function ContactSection({ titulo = "Contato", areaInicial = "", h1 = false }: { titulo?: string; areaInicial?: string; h1?: boolean }) {
  const H = h1 ? "h1" : "h2";
  return (
    <section className={`section light ${h1 ? "" : ""}`} id="contato" aria-labelledby="contato-titulo" style={h1 ? { paddingTop: "calc(var(--header-h) + var(--space-6))" } : undefined}>
      <div className="container split" style={{ alignItems: "start" }}>
        <div style={{ display: "grid", gap: 24 }}>
          <p className="label">Fale com o escritório</p>
          <H id="contato-titulo" data-split>{titulo}</H>
          <p className="lead">
            Conte em poucas linhas o que aconteceu. O atendimento é feito pelo próprio Dr. Nilton, pelo WhatsApp {site.whatsapp.exibicao} ou pelo formulário.
          </p>
          <ContactList />
        </div>
        <div className="mv-card" style={{ padding: "clamp(24px, 4vw, 48px)" }} data-reveal>
          <ContactForm areaInicial={areaInicial} />
        </div>
      </div>
    </section>
  );
}
