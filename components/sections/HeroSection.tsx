import Image from 'next/image'

// Sesta Laioles hero — slice 00.
// Full-bleed historic tower / vineyard photo.
// Italic Cormorant Garamond display headline bottom-left, two lines max.
// Small circular scroll-down arrow below the headline.

const HERO_IMG = '/images/hero/placeholder.jpg'

export default function HeroSection() {
  return (
    <section className="sesta-hero" id="hero">
      <div className="sesta-hero__bg" aria-hidden="true">
        <Image
          src={HERO_IMG}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="sesta-hero__veil" />
      </div>

      <div className="sesta-hero__inner">
        <h1 className="sesta-hero__headline">
          Aromas of the<br />Mediterranean
        </h1>
        <a href="#finca" className="sesta-hero__scroll" aria-label="Scroll to next section">
          ↓
        </a>
      </div>
    </section>
  )
}
