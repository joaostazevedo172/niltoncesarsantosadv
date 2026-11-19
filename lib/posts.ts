// Estrutura do blog jurídico. Para publicar, adicione um objeto ao array:
// { slug: "inventario-em-cartorio", titulo: "...", resumo: "...", data: "2027-01-15", area: "direito-sucessorio-e-familia", corpo: ["parágrafo", "parágrafo"] }
// O post entra sozinho no /blog, no sitemap e ganha schema Article.
export type Post = { slug: string; titulo: string; resumo: string; data: string; area?: string; corpo: string[] };

export const posts: Post[] = [];
export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
