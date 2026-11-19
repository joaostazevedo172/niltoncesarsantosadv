import type { MetadataRoute } from "next";
import { areas } from "@/lib/areas";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const fixas = ["", "/institucional", "/profissional", "/areas-de-atuacao", "/contato", "/politica-de-privacidade"].map((p) => ({
    url: `${site.url}${p}`, lastModified: now, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7,
  }));
  const areaUrls = areas.map((a) => ({ url: `${site.url}/areas-de-atuacao/${a.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 }));
  const postUrls = posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: new Date(p.data), priority: 0.6 }));
  return [...fixas, ...areaUrls, ...(posts.length ? [{ url: `${site.url}/blog`, lastModified: now }] : []), ...postUrls];
}
