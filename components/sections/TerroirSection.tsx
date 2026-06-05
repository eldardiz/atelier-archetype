import Image from 'next/image'

// Sesta "The Terroir / In harmony with nature" — slice 05.
// Full-bleed sunset vineyard photo with a left-to-right dark gradient.
// Two-column inner: left = eyebrow + display, right = body + button.

export default function TerroirSection() {
  return (
    <section className="sesta-terroir" id="terroir">
      <div className="sesta-terroir__bg" aria-hidden="true">
        <Image
          src="/images/featured/card-04.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="sesta-terroir__veil" />
      </div>

      <div className="sesta-terroir__inner">
        <div className="sesta-terroir__title">
          <p className="sesta-eyebrow" style={{ color: 'var(--color-bg)' }}>
            The Terroir
          </p>
          <h2 className="sesta-terroir__display">
            In harmony<br />with nature
          </h2>
        </div>
        <div className="sesta-terroir__copy">
          <p className="sesta-terroir__body">
            It took courage to plant the vines facing the sea in the jumbled foothills of the
            Llevant mountains, a rather unusual planting practice, at least in this part of
            Mallorca, and a feature unique to Ses Talaioles.
          </p>
          <a href="#bodega" className="sesta-btn sesta-terroir__btn">
            Discover more
          </a>
        </div>
      </div>
    </section>
  )
}
