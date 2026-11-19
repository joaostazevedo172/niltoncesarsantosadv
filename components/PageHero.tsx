import Link from "next/link";

export default function PageHero({ crumbs, label, titulo, lead }: { crumbs: { href: string; label: string }[]; label?: string; titulo: string; lead?: string }) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav aria-label="Você está em" className="crumbs">
          <Link href="/">Início</Link>
          {crumbs.map((c) => (
            <span key={c.href} style={{ display: "contents" }}>
              <span aria-hidden>/</span>
              <Link href={c.href}>{c.label}</Link>
            </span>
          ))}
        </nav>
        {label && <p className="label" style={{ marginTop: 32 }}>{label}</p>}
        <h1 data-split>{titulo}</h1>
        {lead && <p className="lead" data-reveal>{lead}</p>}
      </div>
    </section>
  );
}
