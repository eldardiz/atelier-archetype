import Link from 'next/link'
import { brand } from '@/lib/brand'

// LEA footer pattern:
// - Top: centered logo wordmark large + tagline "Innovative to be natural"
// - Middle: repeated nav links inline + language switcher
// - Bottom: thin row with copyright + legal link + agency credit
// All paper-on-paper. No CTA, no big imagery, no newsletter form.

const FOOT_NAV = [
  { label: 'Chi siamo', href: '#about' },
  { label: 'Tenuta', href: '#estate' },
  { label: 'I vini', href: '#products' },
  { label: 'Sostenibilità', href: '#sustainability' },
  { label: 'Contatti', href: '#contact' },
] as const

export default function Footer() {
  const name: string = brand.identity.name
  const year = 2026

  return (
    <footer className="atelier-footer">
      <div className="atelier-footer__top">
        <p className="atelier-footer__tagline">Innovative to be natural</p>
        <Link href="#hero" className="atelier-footer__brand" aria-label={name}>
          {name}
        </Link>
      </div>

      <nav className="atelier-footer__nav" aria-label="Footer">
        {FOOT_NAV.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="atelier-footer__legal">
        <span>
          © {year} {name}. All rights reserved.
        </span>
        <span className="atelier-footer__sep" aria-hidden="true">·</span>
        <Link href="/mentions-legales">Legal</Link>
        <span className="atelier-footer__sep" aria-hidden="true">·</span>
        <span>Site by Softbird</span>
      </div>
    </footer>
  )
}
