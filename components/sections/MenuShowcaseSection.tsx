import Image from 'next/image'

// Horizontal-scroll showcase. Per project, swap the 3 panel images and copy
// to match the business (menu / brunch / cocktails for a restaurant, varietals
// for a winery, etc.).
export default function MenuShowcaseSection() {
  return (
    <div className="horizontal__outer" data-horizontal-scroll-outer>
    <section className="horizontal__wrap" data-horizontal-scroll-wrap>

      <article data-horizontal-scroll-panel className="horizontal__panel">
        <div className="horizontal__panel-inner">
          <div className="horizontal__panel-bg">
            <Image src="/images/showcase/panel-01.jpg" alt="Showcase panel 1" fill className="object-cover" sizes="100vw" />
          </div>
          <svg className="noise" preserveAspectRatio="none"><rect width="100%" height="100%" filter="url(#noise)" /></svg>
          <div className="horizontal__panel-meta tl">
            <div>I&nbsp;/&nbsp;III · MENU</div>
          </div>
          <div className="horizontal__panel-meta br">
            <div>SERVICE · 12 — 14:30</div>
            <div>19:30 — 23:00</div>
          </div>
          <div className="horizontal__panel-content">
            <span className="eyebrow">today&apos;s table…</span>
            <h2 className="display">Menu</h2>
            <p className="desc">A short menu that changes with the market.</p>
          </div>
        </div>
      </article>

      <article data-horizontal-scroll-panel className="horizontal__panel">
        <div className="horizontal__panel-inner">
          <div className="horizontal__panel-bg">
            <Image src="/images/showcase/panel-02.jpg" alt="Showcase panel 2" fill className="object-cover" sizes="100vw" />
          </div>
          <svg className="noise" preserveAspectRatio="none"><rect width="100%" height="100%" filter="url(#noise)" /></svg>
          <div className="horizontal__panel-meta tl">
            <div>II&nbsp;/&nbsp;III · BRUNCH</div>
          </div>
          <div className="horizontal__panel-meta br">
            <div>SUNDAY · 11 — 16:00</div>
            <div>RESERVATION RECOMMENDED</div>
          </div>
          <div className="horizontal__panel-content">
            <span className="eyebrow">the Sunday ritual…</span>
            <h2 className="display"><span className="ital">Brunch</span></h2>
            <p className="desc">Soft eggs, house bread, cured meats. Bottomless coffee.</p>
          </div>
        </div>
      </article>

      <article data-horizontal-scroll-panel className="horizontal__panel">
        <div className="horizontal__panel-inner">
          <div className="horizontal__panel-bg">
            <Image src="/images/showcase/panel-03.jpg" alt="Showcase panel 3" fill className="object-cover" sizes="100vw" />
          </div>
          <svg className="noise" preserveAspectRatio="none"><rect width="100%" height="100%" filter="url(#noise)" /></svg>
          <div className="horizontal__panel-meta tl">
            <div>III&nbsp;/&nbsp;III · COCKTAILS</div>
          </div>
          <div className="horizontal__panel-meta br">
            <div>BAR · 18:00 — MIDNIGHT</div>
            <div>HAPPY HOUR · 18 — 19:30</div>
          </div>
          <div className="horizontal__panel-content">
            <span className="eyebrow">the blue hour…</span>
            <h2 className="display">Cocktails</h2>
            <p className="desc">French spirits, garden herbs. Eleven references, no more.</p>
          </div>
        </div>
      </article>

    </section>
    </div>
  )
}
