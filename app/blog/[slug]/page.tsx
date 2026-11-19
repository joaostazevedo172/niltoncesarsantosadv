import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { posts, getPost } from "@/lib/posts";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return posts.length ? posts.map((p) => ({ slug: p.slug })) : [{ slug: "_" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return { robots: { index: false } };
  return { title: post.titulo, description: post.resumo, alternates: { canonical: `/blog/${post.slug}` }, openGraph: { type: "article", publishedTime: post.data } };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  return (
    <>
      <PageHero crumbs={[{ href: "/blog", label: "Artigos" }, { href: `/blog/${post.slug}`, label: post.titulo }]} titulo={post.titulo} lead={post.resumo} />
      <article className="section"><div className="container prose" style={{ fontSize: 19 }}>{post.corpo.map((p, i) => <p key={i}>{p}</p>)}</div></article>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: post.titulo, datePublished: post.data, author: { "@type": "Person", name: site.advogado }, publisher: { "@id": `${site.url}/#escritorio` }, inLanguage: "pt-BR" }} />
    </>
  );
}
