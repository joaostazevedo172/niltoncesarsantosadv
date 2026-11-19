export default function Quote() {
  const frase = "A advocacia não é profissão de covardes.";
  return (
    <section className="on-night section" aria-labelledby="citacao">
      <div className="container">
        <p className="label" id="citacao" data-reveal>O que orienta o escritório</p>
        <blockquote style={{ margin: "32px 0 0" }}>
          <p className="quote" data-scrub-words aria-label={frase}>
            {frase.split(" ").map((w, i) => (
              <span key={i} aria-hidden>
                <span className="w">{w}</span>{" "}
              </span>
            ))}
          </p>
          <footer className="quote-by" data-reveal>Heráclito Fontoura Sobral Pinto, advogado e jurista</footer>
        </blockquote>
      </div>
    </section>
  );
}
