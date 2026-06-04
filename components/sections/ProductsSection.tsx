import Image from 'next/image'

// LEA "I Vini" pattern:
// - Two big product cards side-by-side (NOT a horizontal scroller — that was my
//   earlier wrong assumption). On mobile they stack.
// - Each card: full-bleed background photo of the vineyard/category
//   + category tag (small caps, top-left)
//   + headline (italic-stress hook)
//   + floating PNG product bottle on the right (transparent background)
//   + CTA link bottom-left
// - The two cards differ in palette intent: one warmer, one cooler — but for
//   the template default they're both the same paper-on-photo treatment.
//
// Business-agnostic: for restaurants this becomes "Seasonal Menu" + "Tasting
// Room"; for bakeries "Bread Counter" + "Sweets"; for wineries it stays "Wines".

type ProductCard = {
  id: string
  tag: string
  headline: { lead: string; stress: string; tail?: string }
  bgImg: string
  bottleImg?: string
  ctaLabel: string
  ctaHref: string
}

const CARDS: ProductCard[] = [
  {
    id: 'first',
    tag: 'Cellar selection',
    headline: {
      lead: 'A glass shared with ',
      stress: 'liberty',
      tail: ', without compromise.',
    },
    bgImg: '/images/featured/card-01.jpg',
    bottleImg: '/images/showcase/panel-01.png',
    ctaLabel: 'See the cellar',
    ctaHref: '#contact',
  },
  {
    id: 'second',
    tag: 'Estate range',
    headline: {
      lead: 'Bottles that tell the story of a ',
      stress: 'terra',
      tail: ' and its people.',
    },
    bgImg: '/images/featured/card-02.jpg',
    bottleImg: '/images/showcase/panel-02.png',
    ctaLabel: 'See the estate range',
    ctaHref: '#contact',
  },
]

export default function ProductsSection() {
  return (
    <section className="atelier-products" id="products">
      <header className="atelier-products__head">
        <p className="atelier-products__eyebrow">I vini</p>
        <h2 className="atelier-products__headline">
          Two lines, one <span className="stress">philosophy</span>.
        </h2>
      </header>

      <div className="atelier-products__grid">
        {CARDS.map((card) => (
          <article key={card.id} className="atelier-product-card">
            <div className="atelier-product-card__bg" aria-hidden="true">
              <Image
                src={card.bgImg}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="atelier-product-card__veil" />
            </div>

            <div className="atelier-product-card__inner">
              <p className="atelier-product-card__tag">{card.tag}</p>

              <h3 className="atelier-product-card__headline">
                {card.headline.lead}
                <span className="stress">{card.headline.stress}</span>
                {card.headline.tail ?? ''}
              </h3>

              <a href={card.ctaHref} className="atelier-product-card__cta">
                {card.ctaLabel} <span aria-hidden="true">→</span>
              </a>
            </div>

            {card.bottleImg ? (
              <div className="atelier-product-card__bottle" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.bottleImg} alt="" />
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
