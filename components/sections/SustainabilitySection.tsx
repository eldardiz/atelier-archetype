// LEA "Sostenibilità" — slice 09:
// Same lea-text-block pattern, but with a small Scopri button below
// the headline (single button — not the Method/Certifications sub-links
// that I invented in v2).

export default function SustainabilitySection() {
  return (
    <section className="lea-text-block" id="sustainability">
      <p className="lea-text-block__eyebrow">Sostenibilità</p>
      <h2 className="lea-text-block__headline">
        For us, sustainability means <span className="stress">concrete action</span>,{' '}
        deep <span className="stress">study</span>, and patient <span className="stress">care</span>.
      </h2>
      <a href="#contact" className="lea-text-block__cta">
        Scopri
      </a>
    </section>
  )
}
