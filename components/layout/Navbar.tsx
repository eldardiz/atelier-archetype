'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { brand } from '@/lib/brand'

// LEA Winery pattern: horizontal sticky topbar.
// - Logo (wordmark) on the left
// - Anchor links centered
// - Language switcher + LinkedIn icon on the right
// - Bar gets a subtle paper bg + hairline once scrolled past the hero
// No slide-out hamburger overlay (that was Editorial Heritage). Mobile collapses
// the centered nav into a single small "Menu" toggle that drops a clean list.

const NAV = [
  { label: 'Chi siamo', href: '#about' },
  { label: 'Tenuta', href: '#estate' },
  { label: 'I vini', href: '#products' },
  { label: 'Sostenibilità', href: '#sustainability' },
  { label: 'Contatti', href: '#contact' },
] as const

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const name: string = brand.identity.name

  return (
    <header className={`atelier-nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="atelier-nav__inner">
        <Link href="#hero" className="atelier-nav__brand" aria-label={name}>
          {name}
        </Link>

        <nav className="atelier-nav__links" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="atelier-nav__link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="atelier-nav__right">
          <span className="atelier-nav__lang">
            <span className="is-active">EN</span>
            <span className="sep">/</span>
            <span>IT</span>
          </span>
          {brand.social.instagramUrl ? (
            <a
              href={brand.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="atelier-nav__social"
              aria-label="Instagram"
            >
              ↗
            </a>
          ) : null}
          <button
            type="button"
            className="atelier-nav__toggle"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '×' : 'Menu'}
          </button>
        </div>
      </div>

      <div className={`atelier-nav__sheet${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <ul>
          {NAV.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
