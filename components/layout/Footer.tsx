import Link from 'next/link'
import { brand } from '@/lib/brand'

export default function Footer() {
  const name = brand.identity.name
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-mark" style={{ fontFamily: 'var(--font-display, serif)', fontSize: 28, fontWeight: 600, letterSpacing: '-0.01em' }}>
          {name}
        </div>
        <div style={{ display: 'flex', gap: 32, fontFamily: 'var(--font-sans)', fontSize: 14, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.85, flexWrap: 'wrap' }}>
          <a href="#about">About</a>
          <a href="#featured-offering">Menu</a>
          <a href="#instagram">Instagram</a>
          <a href="#contact">Book</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© MMXXVI · {name}</span>
        <Link href="/mentions-legales">Legal</Link>
        <span>Site by Softbird</span>
      </div>
    </footer>
  )
}
