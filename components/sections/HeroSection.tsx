import Image from 'next/image'

// LEA Winery hero pattern:
// - Full-bleed background photo (later: HTML5 video)
// - Small eyebrow letter-spaced label at the top
// - Multi-line italic-stress mission statement as the dominant element,
//   centered horizontally and toward the lower-middle of the viewport
// - No CTA button, no scroll cue, no corner stamps
// Stress words (rispetto / dedizione / curiosità / spirito pionieristico in LEA)
// swap to Fraunces italic via the .stress class defined in claude-design.css.

const HERO_IMG = '/images/hero/placeholder.jpg'
const HERO_EYEBROW = 'Innovative to be natural'
const HERO_LINES: Array<Array<{ text: string; stress?: boolean }>> = [
  [
    { text: 'We look at the land' },
  ],
  [
    { text: 'with infinite ' },
    { text: 'rispetto', stress: true },
    { text: ',' },
  ],
  [
    { text: 'with daily ' },
    { text: 'dedizione', stress: true },
    { text: ',' },
  ],
  [
    { text: 'and a ' },
    { text: 'spirito pionieristico', stress: true },
    { text: '.' },
  ],
]

export default function HeroSection() {
  return (
    <section className="atelier-hero" id="hero">
      <div className="atelier-hero__bg" aria-hidden="true">
        <Image
          src={HERO_IMG}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="atelier-hero__veil" />
      </div>

      <div className="atelier-hero__content">
        <p className="atelier-hero__eyebrow">{HERO_EYEBROW}</p>
        <p className="atelier-hero__mission">
          {HERO_LINES.map((line, i) => (
            <span key={i} className="atelier-hero__line">
              {line.map((token, j) =>
                token.stress ? (
                  <span key={j} className="stress">{token.text}</span>
                ) : (
                  <span key={j}>{token.text}</span>
                ),
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
