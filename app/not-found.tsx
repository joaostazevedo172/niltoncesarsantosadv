import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: "calc(var(--header-h) + 96px)", minHeight: "70svh" }}>
      <div className="container" style={{ display: "grid", gap: 24 }}>
        <p className="label">Página não encontrada</p>
        <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>Esta página mudou de endereço</h1>
        <p className="lead">O site foi atualizado. Você encontra todo o conteúdo pelas páginas abaixo.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <Link className="btn btn-primary" href="/">Ir para o início</Link>
          <Link className="btn btn-ghost" href="/areas-de-atuacao">Ver áreas de atuação</Link>
        </div>
      </div>
    </section>
  );
}
