import Image from 'next/image'

// LEA Winery hero — exact pattern from screenshot:
// - Full-bleed vineyard photo
// - NO eyebrow label at the top
// - 5-line italic-stress mission paragraph, centered horizontally, anchored
//   to the lower-middle of the viewport (above the cookie banner area)
// - Italic-stress words appear MULTIPLE per line, swapping mid-sentence
//   between the sans body and the serif italic
// - All white text on the photo, no overlay veil that darkens the photo
//   beyond a very subtle bottom gradient

const HERO_IMG = '/images/hero/placeholder.jpg'

// Each line is an array of tokens. token.stress = true wraps in <span class="stress">
// which swaps from Inter to Instrument Serif italic via the .stress class.
const MISSION: Array<Array<{ text: string; stress?: boolean }>> = [
  [{ text: 'We look at the land with infinite ' }, { text: 'respect', stress: true }, { text: ',' }],
  [{ text: 'we work the vineyards with stubborn ' }, { text: 'dedication', stress: true }, { text: ',' }],
  [{ text: 'we meet change with a ' }, { text: 'pioneering spirit', stress: true }, { text: ',' }],
  [{ text: 'we taste each season with unrelenting ' }, { text: 'curiosity', stress: true }, { text: ',' }],
  [{ text: 'never tamed.' }],
]

export default function HeroSection() {
  return (
    <section className="lea-hero" id="hero">
      <div className="lea-hero__bg" aria-hidden="true">
        <Image
          src={HERO_IMG}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="lea-hero__veil" />
      </div>

      <div className="lea-hero__content">
        <p className="lea-hero__mission">
          {MISSION.map((line, i) => (
            <span key={i} className="lea-hero__line">
              {line.map((token, j) =>
                token.stress ? (
                  <span key={j} className="stress">
                    {token.text}
                  </span>
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
