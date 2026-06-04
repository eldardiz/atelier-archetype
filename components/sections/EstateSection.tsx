import Image from 'next/image'

// LEA "Tenuta" pattern:
// - Centered eyebrow
// - Centered display stats block (e.g. "132 hectares / 105 organic-certified")
// - Centered narrative paragraph + Scopri link below the stats
// - Full-bleed supporting photo follows the text block
//
// This replaces the Editorial PhilosophySection (which was a 9-image Flip
// lightbox grid — too busy for Atelier's quiet rhythm).

const ESTATE_IMG = '/images/location/placeholder.jpg'

export default function EstateSection() {
  return (
    <section className="atelier-estate" id="estate">
      <div className="atelier-estate__head">
        <p className="atelier-estate__eyebrow">Tenuta</p>

        <h2 className="atelier-estate__stats">
          <span className="atelier-estate__big">132</span>
          <span className="atelier-estate__unit">hectares</span>
          <span className="atelier-estate__div" aria-hidden="true" />
          <span className="atelier-estate__big">105</span>
          <span className="atelier-estate__unit">organic certified</span>
        </h2>

        <p className="atelier-estate__body">
          The estate stretches across a landscape that has shaped our craft for generations.
          Every parcel is worked by hand, in service of a soil we treat with{' '}
          <span className="stress">rispetto</span>.
        </p>

        <a href="#products" className="atelier-estate__cta">
          Discover <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="atelier-estate__photo" aria-hidden="true">
        <Image
          src={ESTATE_IMG}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  )
}
