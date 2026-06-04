// LEA "Chi siamo" — slice 02:
// - Paper cream bg
// - Tiny "CHI SIAMO" eyebrow centered at top, in mono-feel uppercase
// - Big italic-stress display headline centered, fills 60% of viewport width
//   with stress words swapping between sans body and Instrument Serif italic
// - NO photo in this section — photo is the SEPARATE next section (PhotoBreak)
// - NO body paragraph below the headline. The headline IS the section.
// - NO CTA button. The whole thing reads as a single typographic statement.

export default function AboutSection() {
  return (
    <section className="lea-text-block" id="about">
      <p className="lea-text-block__eyebrow">Chi siamo</p>
      <h2 className="lea-text-block__headline">
        A project born in the <span className="stress">heart</span> of the land, where{' '}
        <span className="stress">tradition</span> and{' '}
        <span className="stress">vision</span> share a single table.
      </h2>
    </section>
  )
}
