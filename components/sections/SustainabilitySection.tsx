import Image from 'next/image'

// LEA "Sostenibilità" pattern:
// - Eyebrow + display headline (left-aligned, single-column, narrower than full width)
// - Inline narrative body (NOT a card grid — that's intentional, sustainability is
//   discussed in prose, not tiles)
// - 2 sub-links: "Method" and "Certifications"
// - Single full-bleed supporting photo following the text
// - Less of a "feature list" and more of a manifesto block

const SUST_IMG = '/images/cta/placeholder.jpg'

export default function SustainabilitySection() {
  return (
    <section className="atelier-sustain" id="sustainability">
      <div className="atelier-sustain__head">
        <p className="atelier-sustain__eyebrow">Sostenibilità</p>
        <h2 className="atelier-sustain__headline">
          Sustainability is concrete <span className="stress">action</span>.
        </h2>
        <p className="atelier-sustain__body">
          We choose the slower path: organic certification, hand-worked parcels, and an honest
          accounting of every input. There is no shortcut here, only a sequence of small,
          repeated decisions made with{' '}
          <span className="stress">curiosità</span>.
        </p>
        <div className="atelier-sustain__sublinks">
          <a href="#products">Method →</a>
          <a href="#products">Certifications →</a>
        </div>
      </div>

      <div className="atelier-sustain__photo" aria-hidden="true">
        <Image
          src={SUST_IMG}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  )
}
