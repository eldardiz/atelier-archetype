import Image from 'next/image'

type Card = {
  label?: string
  name: string
  price?: string
  src: string
  alt: string
}

const FALLBACK_CARDS: Card[] = [
  { label: 'the starter', name: 'Item name', price: '14', src: '/images/featured/card-01.jpg', alt: 'Featured item 1' },
  { label: 'the signature', name: 'Item name', price: '32', src: '/images/featured/card-02.jpg', alt: 'Featured item 2' },
  { label: 'the market', name: 'Item name', price: '38', src: '/images/featured/card-03.jpg', alt: 'Featured item 3' },
  { label: 'the dessert', name: 'Item name', price: '12', src: '/images/featured/card-04.jpg', alt: 'Featured item 4' },
]

export default function FeaturedOfferingSection() {
  const eyebrow = 'on the menu…'
  const heading: string | undefined = undefined
  const body = 'A short paragraph describing the featured offering, the brunch, the tasting flight, the daily bread selection. Keep it concrete and brief.'
  const cards = FALLBACK_CARDS
  return (
    <section className="section cream" id="featured-offering">
      <div className="max">
        <div className="section-head">
          <div>
            <div className="section-num">— 07 / Featured</div>
            <span className="eyebrow" style={{ marginTop: 18 }}>{eyebrow}</span>
            <h2 className="display" data-words-pullup style={{ marginTop: 24 }}>
              {heading ?? <>Seasonal&nbsp;<span className="ital">highlights.</span></>}
            </h2>
          </div>
          <div className="body-lg" data-anim-para>
            {body}
          </div>
        </div>

        <div className="cards-row" data-card-stagger>
          {cards.map((c, i) => (
            <article key={i} className="menu-card" data-card>
              <Image src={c.src} alt={c.alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" />
              <div className="meta">
                {c.label ? <div className="label">{c.label}</div> : null}
                <div className="name">{c.name}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
