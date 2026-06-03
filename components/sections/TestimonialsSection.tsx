type Testimonial = { quote: string; name: string; source: string; rating: number }

const FALLBACK: Testimonial[] = [
  { quote: 'A short, specific compliment. Detail-first; avoid superlatives.', name: 'First Last', source: 'Publication', rating: 5 },
  { quote: 'Another quote in a different voice. Mix critics and regulars when possible.', name: 'First Last', source: 'Publication', rating: 5 },
  { quote: 'Replace placeholder testimonials by editing the FALLBACK array in this component, per-lead.', name: 'First Last', source: 'Publication', rating: 5 },
]

export default function TestimonialsSection() {
  const items = FALLBACK
  return (
    <section className="section cream testi-wrap">
      <div className="max">
        <div className="section-head">
          <div>
            <div className="section-num">— 09 / Press</div>
            <span className="eyebrow" style={{ marginTop: 18 }}>they came back, and again…</span>
            <h2 className="display" data-words-pullup style={{ marginTop: 24 }}>
              The&nbsp;<span className="ital">press,</span>&nbsp;the&nbsp;room.
            </h2>
          </div>
        </div>
      </div>

      <div className="testi-row">
        <div className="testi-track">
          {items.map((t, i) => (
            <article key={i} className="testi-card">
              <div className="stars">{'★'.repeat(t.rating ?? 5)}</div>
              <p className="quote">&ldquo; {t.quote} &rdquo;</p>
              <div className="author"><span>{t.name}</span><span className="src">{t.source}</span></div>
              <div className="testi-pin">&quot;</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
