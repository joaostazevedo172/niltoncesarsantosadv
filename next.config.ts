import type { NextConfig } from "next";

// URLs do WordPress antigo → páginas novas (preserva o que o Google já indexou)
const antigos = [
  "civel", "recuperacao-judicial", "propriedade-intelectual", "direito-societario", "contencioso-tributario",
  "direito-administrativo", "direito-ambiental", "direito-eleitoral", "criminal", "direito-desportivo-e-do-entretenimento",
  "direito-do-consumidor", "direito-sucessorio-e-familia", "direito-imobiliario-notarial-e-registral", "direito-de-saude",
  "direito-de-telecomunicacoes", "direito-bancario",
];

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      ...antigos.map((s) => ({ source: `/${s}`, destination: `/areas-de-atuacao/${s}`, permanent: true })),
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/feed", destination: "/", permanent: true },
    ];
  },
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    }];
  },
};
export default nextConfig;
