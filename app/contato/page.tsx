import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato e agendamento",
  description: `Agende um atendimento com o advogado ${site.advogado} em Búzios e Região dos Lagos. WhatsApp ${site.whatsapp.exibicao}, Instagram, Facebook, YouTube e LinkedIn.`,
  alternates: { canonical: "/contato" },
};

export default function Contato() {
  return (
    <>
      <ContactSection h1 titulo="Contato e agendamento" />
      <JsonLd data={breadcrumb([{ name: "Início", path: "/" }, { name: "Contato", path: "/contato" }])} />
    </>
  );
}
