import { brand } from '@/lib/brand'

// LEA-shaped contact: minimal, centered. Eyebrow + closing italic-stress
// statement + 3 plain rows for phone / email / address. No form, no map embed,
// no card layout. The lead writes back; that's the whole point of a quiet
// natural-wine site.

export default function ContactSection() {
  const phone: string = brand.contact.phone
  const email: string = brand.contact.email
  const address: string = brand.contact.address

  return (
    <section className="atelier-contact" id="contact">
      <p className="atelier-contact__eyebrow">Contatti</p>

      <h2 className="atelier-contact__closing">
        Stop in for a glass, or write us a <span className="stress">letter</span>.
      </h2>

      <ul className="atelier-contact__list">
        {phone ? (
          <li>
            <span className="label">Telefono</span>
            <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
          </li>
        ) : null}
        {email ? (
          <li>
            <span className="label">Email</span>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
        ) : null}
        {address ? (
          <li>
            <span className="label">Indirizzo</span>
            <span>{address}</span>
          </li>
        ) : null}
      </ul>
    </section>
  )
}
