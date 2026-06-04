'use client'

import { useEffect, useState } from 'react'
import { brand } from '@/lib/brand'

// LEA Winery 3-zone nav, all sticky, all always visible:
// 1. LEFT vertical sidebar (~60px) — monogram top, hamburger middle, vertically
//    rotated CURRENT SECTION label going up the left edge
// 2. TOP centered horizontal bar — tiny labels for each section with a thin
//    rule under them
// 3. RIGHT column — "+" icon + IT/EN language toggle
// White when over the hero photo; flips to ink + paper bar background once
// scrolled past the hero.

const SECTIONS = [
  { id: 'about', label: 'Chi siamo' },
  { id: 'estate', label: 'Tenuta' },
  { id: 'products', label: 'I vini' },
  { id: 'sustainability', label: 'Sostenibilità' },
  { id: 'contact', label: 'Contatti' },
] as const

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState<string>('hero')
  const [open, setOpen] = useState(false)

  // Scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track which section is currently in view for the rotated-text sidebar label
  useEffect(() => {
    const ids = ['hero', ...SECTIONS.map((s) => s.id)]
    const observers: IntersectionObserver[] = []
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActiveId(id)
          })
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const name: string = brand.identity.name
  const monogram = (name?.[0] ?? 'L').toUpperCase()
  const activeLabel =
    activeId === 'hero' ? 'HOME' : SECTIONS.find((s) => s.id === activeId)?.label.toUpperCase() ?? ''

  return (
    <>
      {/* LEFT vertical sidebar */}
      <aside className={`lea-sidebar${scrolled ? ' is-scrolled' : ''}`} aria-hidden="true">
        <a href="#hero" className="lea-sidebar__monogram" aria-label={name}>
          {monogram}
        </a>
        <button
          type="button"
          className="lea-sidebar__hamburger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <span className="lea-sidebar__current" aria-live="polite">
          {activeLabel}
        </span>
      </aside>

      {/* TOP centered horizontal nav */}
      <header className={`lea-topnav${scrolled ? ' is-scrolled' : ''}`}>
        <nav className="lea-topnav__inner" aria-label="Primary">
          <a href="#hero" className={`lea-topnav__link${activeId === 'hero' ? ' is-active' : ''}`}>
            Home
          </a>
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`lea-topnav__link${activeId === s.id ? ' is-active' : ''}`}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </header>

      {/* RIGHT column — IT/EN + plus icon */}
      <aside className={`lea-rightcol${scrolled ? ' is-scrolled' : ''}`} aria-hidden="true">
        <span className="lea-rightcol__lang">
          <span className="is-active">IT</span>
          <span className="sep">/</span>
          <span>EN</span>
        </span>
        <span className="lea-rightcol__plus">+</span>
      </aside>

      {/* Mobile slide-down panel (hidden on desktop) */}
      <div className={`lea-mobile-panel${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <ul>
          <li>
            <a href="#hero" onClick={() => setOpen(false)}>
              Home
            </a>
          </li>
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} onClick={() => setOpen(false)}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
