import Image from 'next/image'

const FALLBACK_PARAGRAPHS = [
  'First paragraph of the about story. Replace this fallback when spawning a per-lead site. Keep it under fifty words; this is what a first-time visitor reads before they decide to come.',
  'Second paragraph, what makes this place different from the next. A craft note, a sourcing principle, a small habit. End with conviction.',
]

type MetaItem = { label: string; value: string }
const FALLBACK_META: MetaItem[] = []

export default function AboutSection() {
  const eyebrow = 'who we are…'
  const heading: string | undefined = undefined
  const meta = FALLBACK_META
  const imgSrc = '/images/about/placeholder.jpg'
  return (
    <section className="section cream" id="about">
      <svg className="noise noise-strong" preserveAspectRatio="none">
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      <div className="max">
        <div className="section-head">
          <div>
            <div className="section-num">— 02 / About</div>
            <span className="eyebrow" style={{ marginTop: 18 }}>{eyebrow}</span>
            <h2 className="display" data-words-pullup style={{ marginTop: 24 }}>
              {heading ?? <>A&nbsp;<span className="ital">place,</span>&nbsp;a refuge.</>}
            </h2>
          </div>
        </div>

        <div className="histoire-grid">
          <div className="histoire-text">
            {FALLBACK_PARAGRAPHS.map((p, i) => (
              <p key={i} data-anim-para>{p}</p>
            ))}

            {meta && meta.length > 0 ? (
              <div className="histoire-meta">
                {meta.map((m, i) => (
                  <div key={i}>
                    <div className="label">{m.label}</div>
                    <div className="value">{m.value}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="histoire-image" data-parallax-trigger>
            <div data-parallax="0.15" style={{ position: 'absolute', inset: 0 }}>
              <Image src={imgSrc} alt="About — main image" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
