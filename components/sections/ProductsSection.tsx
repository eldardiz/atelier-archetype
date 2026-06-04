// LEA "I Vini" — slices 12 + 13:
// 1. Small "I VINI" eyebrow centered
// 2. Big centered italic-stress display headline (intro line)
// 3. HUGE horizontal-scrolling marquee with the brand names in serif italic,
//    repeating: "FRANC LIZÊR  FRANC LIZÊR  BLANCJAT  BLANCJAT  …"
//    Roughly 120-180px tall display text scrolling continuously.
// 4. Below: STACKED wine rows. Each row is its own block:
//    - Small "VINI ITALIANI DEALCOLATI" tag (mono uppercase)
//    - Big serif italic headline (the wine name)
//    - Short description below
//    - A floating transparent-PNG bottle on the right
// NOT two cards side-by-side (that was my v2 misread).
//
// For the productized template, the wine lines come from a const array so
// per-lead leads can rename to "Bread Counter / Sweets" or "Tasting Menu /
// Cellar" etc.

import Image from 'next/image'

type WineLine = {
  id: string
  tag: string
  name: string
  description: string
  bottleSrc?: string
}

const LINES: WineLine[] = [
  {
    id: 'first',
    tag: 'Vini italiani dealcolati',
    name: 'Franc Lizêr',
    description:
      'A glass of wine shared in liberty, without compromise. The pleasure of a true Italian wine, dealcoholized.',
    bottleSrc: '/images/showcase/panel-01.png',
  },
  {
    id: 'second',
    tag: 'Vini biologici e naturali',
    name: 'Blancjat',
    description:
      'Bottles that tell the story of a land and the people who tend it. Certified organic, naturally vinified.',
    bottleSrc: '/images/showcase/panel-02.png',
  },
]

export default function ProductsSection() {
  // Marquee content — each brand name repeated several times so the loop
  // reads as a single continuous string.
  const marqueeNames = LINES.flatMap((l) => Array(4).fill(l.name)).join('  ')

  return (
    <section className="lea-products" id="products">
      <div className="lea-text-block lea-text-block--in-products">
        <p className="lea-text-block__eyebrow">I vini</p>
        <h2 className="lea-text-block__headline">
          Two souls, one <span className="stress">vision</span>: Blancjat and Franc Lizêr,{' '}
          each telling a <span className="stress">story</span> of its own.
        </h2>
      </div>

      <div className="lea-marquee" aria-hidden="true">
        <div className="lea-marquee__track">
          <span>{marqueeNames}&nbsp;&nbsp;</span>
          <span>{marqueeNames}&nbsp;&nbsp;</span>
        </div>
      </div>

      <div className="lea-wines">
        {LINES.map((line) => (
          <article key={line.id} className="lea-wine">
            <div className="lea-wine__text">
              <p className="lea-wine__tag">{line.tag}</p>
              <h3 className="lea-wine__name">{line.name}</h3>
              <p className="lea-wine__desc">{line.description}</p>
              <a href="#contact" className="lea-text-block__cta">
                Scopri
              </a>
            </div>
            {line.bottleSrc ? (
              <div className="lea-wine__bottle" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={line.bottleSrc} alt="" />
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
