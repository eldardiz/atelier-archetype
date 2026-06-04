// LEA "Tenuta" — text-only section. Same pattern as Chi siamo:
// tiny eyebrow + huge italic-stress display headline, centered.
// PhotoBreak follows in app/page.tsx with the full-bleed estate photo.

export default function EstateSection() {
  return (
    <section className="lea-text-block" id="estate">
      <p className="lea-text-block__eyebrow">Tenuta</p>
      <h2 className="lea-text-block__headline">
        Land that has been <span className="stress">worked</span> by the same hands{' '}
        <span className="stress">for generations</span>, parcel by parcel.
      </h2>
    </section>
  )
}
