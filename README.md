# Nilton Cesar dos Santos Advocacia — site (Opção 2)

Next.js 16 (App Router, páginas estáticas) · Tailwind v4 · GSAP + ScrollTrigger · Lenis · deploy na Vercel.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Páginas (25 indexáveis)
- `/` Home · `/institucional` · `/profissional` · `/contato` · `/politica-de-privacidade`
- `/areas-de-atuacao` + 16 páginas em `/areas-de-atuacao/[slug]` (conteúdo em `lib/areas.ts`)
- `/blog` pronto e fora do Google até o 1º artigo (`lib/posts.ts`)
- URLs antigas do WordPress (`/civel/`, `/criminal/`…) redirecionam com 308 em `next.config.ts`

## Onde mexer
- **Dados do escritório:** `lib/site.ts` (cidade, WhatsApp, redes, endereço, e-mail, horário)
- **Design system:** bloco `:root` em `app/globals.css` (único lugar com cores, espaços, raios, sombras, easing)
- **Movimento:** `components/Motion.tsx` (text reveal, parallax, citação que acende no scroll, botões magnéticos, Lenis). Tudo desliga com `prefers-reduced-motion`.

## Pendências do cliente (marcadas com PENDENTE no código)
1. **Fotos e logo:** baixar do site antigo e salvar com o mesmo nome em `public/img/`:
   - `wp-content/uploads/2022/12/foto-institucional.jpg` → `public/img/foto-institucional.jpg`
   - `wp-content/uploads/2022/12/foto-profissional.jpg` → `public/img/foto-profissional.jpg`
   - `wp-content/themes/merakiartsbrasil/images/logo.png` → `public/img/logo.png` (e trocar o texto em `components/Header.tsx`)
   As imagens atuais são provisórias.
2. **Cores:** já seguem o site original (carvão #333132/#231f20, azul-marinho #0d004c, cinza #f1f2f2/#bcbec0, dourado #d88d2a/#e6b963).
3. **Endereço, e-mail e horário** (não constam no site antigo) → `lib/site.ts` e `lib/schema.ts`.
4. **Confirmar a cidade-base** (usei Armação dos Búzios / Região dos Lagos).
5. **URL exata do LinkedIn.**
6. **Search Console:** código de verificação em `app/layout.tsx` e envio de `/sitemap.xml`.

## Subir na Vercel pelo computador
```bash
unzip nilton-site.zip && cd nilton-site
npm install
npx vercel login
npx vercel          # preview
npx vercel --prod   # produção
```

## Migração sem sair do ar
1. Deploy na Vercel com o domínio temporário e revisão do cliente.
2. Adicionar `niltoncesardossantos.adv.br` e `www` no projeto da Vercel.
3. No registro.br, baixar o TTL e trocar só os registros **A/CNAME do site**. **Não mexer nos MX** — os e-mails continuam na hospedagem atual (renovar a hospedagem dos e-mails).
4. Conferir HTTPS, redirects antigos e enviar o sitemap no Search Console.

## OAB (Provimento 205/2021)
Conteúdo só informativo: sem promessa de resultado, preço, depoimentos, rankings ou símbolo da OAB. FAQs com aviso de que cada caso depende de análise.
