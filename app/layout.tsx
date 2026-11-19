import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Motion from "@/components/Motion";
import JsonLd from "@/components/JsonLd";
import { orgSchema } from "@/lib/schema";
import { site, localCurto } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `Advogado em ${localCurto} | ${site.advogado}`, template: `%s | ${site.advogado} Advocacia` },
  description: `Escritório de advocacia em Armação dos Búzios e Região dos Lagos (RJ). ${site.advogado}, ${site.oab}, com ${site.anosDeAtuacao} de atuação em 16 áreas do Direito.`,
  applicationName: site.nome,
  authors: [{ name: site.advogado }],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "pt_BR", siteName: site.nome, url: site.url },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
  // PENDENTE: colar aqui o código de verificação do Google Search Console
  // verification: { google: "XXXX" },
};

export const viewport: Viewport = { themeColor: "#333132", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip" href="#conteudo">Pular para o conteúdo</a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Motion />
        <JsonLd data={orgSchema} />
      </body>
    </html>
  );
}
