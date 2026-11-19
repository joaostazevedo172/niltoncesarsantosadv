import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Buscadores e buscas por IA liberados (OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot…).
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${site.url}/sitemap.xml`, host: site.url };
}
