import Image from 'next/image'

// LEA's signature rhythm move: full-bleed photo SECTION between text sections.
// Slice 03 (family in vineyard), slice 04 (wood building), slice 05 (courtyard),
// slice 07 (vineyard horizon), slice 11 (aerial vineyard with tractor) — all
// full-bleed standalone photo sections, no text overlay, no caption.
// The photo IS the section. It's a visual breath between two text blocks.
//
// Usage in app/page.tsx:
//   <AboutSection />
//   <PhotoBreak src="/images/about/placeholder.jpg" />
//   <EstateSection />
//   <PhotoBreak src="/images/location/placeholder.jpg" />
//   ...

export default function PhotoBreak({
  src,
  height = 'tall',
  id,
}: {
  src: string
  height?: 'short' | 'tall' | 'full'
  id?: string
}) {
  return (
    <section className={`lea-photo-break lea-photo-break--${height}`} id={id} aria-hidden="true">
      <Image src={src} alt="" fill sizes="100vw" className="object-cover" />
    </section>
  )
}
