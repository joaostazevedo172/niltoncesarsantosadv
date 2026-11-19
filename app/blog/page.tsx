import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Artigos jurídicos",
  description: "Artigos informativos do escritório Nilton Cesar dos Santos Advocacia sobre direitos do dia a dia.",
  alternates: { canonical: "/blog" },
  // fica fora do Google até o primeiro artigo ser publicado
  robots: posts.length ? undefined : { index: false, follow: true },
};

export default function Blog() {
  return (
    <>
      <PageHero crumbs={[{ href: "/blog", label: "Artigos" }]} titulo="Artigos jurídicos" lead="Textos curtos e informativos sobre direitos do dia a dia." />
      <section className="section">
        <div className="container">
          {posts.length === 0 ? (
            <p className="lead">Os primeiros artigos serão publicados em breve. Enquanto isso, veja as <Link className="link link-accent" href="/areas-de-atuacao">áreas de atuação</Link>.</p>
          ) : (
            <div className="areas-grid">
              {posts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="area-card" data-reveal>
                  <p className="label">{new Date(p.data).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}</p>
                  <h3>{p.titulo}</h3>
                  <p>{p.resumo}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
