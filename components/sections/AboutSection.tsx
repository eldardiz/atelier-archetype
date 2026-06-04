import Image from 'next/image'

// LEA "Chi siamo" pattern:
// - Two-column split: left = eyebrow + display headline + body + "Scopri" link
// - Right = single large supporting photo
// - Left-aligned text, no centered display
// - Stress words swap to Fraunces italic via .stress
//
// Editorial's AboutSection was a 2-col grid with a slightly different rhythm
// and a histoire-meta block at the bottom. This is closer to LEA's quieter
// proportions: more whitespace, no meta block, single CTA link.

const ABOUT_IMG = '/images/about/placeholder.jpg'

const ABOUT_EYEBROW = 'Chi siamo'

// Each body item is either a plain string or an array of tokens with optional
// stress flags. The stress flag swaps to Fraunces italic via .stress class.
const ABOUT_BODY = [
  'A project born in the heart of the land, between vines and stone, where a family vision shapes every bottle.',
  'We blend the discipline of agriculture with the boldness of experimentation, always with care.',
] as const

export default function AboutSection() {
  return (
    <section className="atelier-about" id="about">
      <div className="atelier-about__inner">
        <div className="atelier-about__text">
          <p className="atelier-about__eyebrow">{ABOUT_EYEBROW}</p>
          <h2 className="atelier-about__headline">
            A project born in the <span className="stress">heart</span> of the land.
          </h2>
          <div className="atelier-about__body">
            {ABOUT_BODY.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <a href="#estate" className="atelier-about__cta">
            Discover <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="atelier-about__photo">
          <Image
            src={ABOUT_IMG}
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
