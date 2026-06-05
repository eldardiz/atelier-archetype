import Image from 'next/image'

// Sesta image strip — slice 02 top half.
// 3 staggered photos: stone wall texture (small), people group (wide), grape clusters (small).

export default function ImageStripSection() {
  return (
    <section className="sesta-strip" aria-hidden="true">
      <div className="sesta-strip__grid">
        <div className="sesta-strip__cell sesta-strip__cell--1">
          <Image src="/images/about/placeholder.jpg" alt="" fill sizes="220px" className="object-cover" />
        </div>
        <div className="sesta-strip__cell sesta-strip__cell--2">
          <Image src="/images/featured/card-02.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 60vw" className="object-cover" />
        </div>
        <div className="sesta-strip__cell sesta-strip__cell--3">
          <Image src="/images/featured/card-03.jpg" alt="" fill sizes="320px" className="object-cover" />
        </div>
      </div>
    </section>
  )
}
