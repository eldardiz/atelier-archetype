import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import EstateSection from '@/components/sections/EstateSection'
import SustainabilitySection from '@/components/sections/SustainabilitySection'
import ProductsSection from '@/components/sections/ProductsSection'
import ContactSection from '@/components/sections/ContactSection'
import PhotoBreak from '@/components/sections/PhotoBreak'
import Footer from '@/components/layout/Footer'

// LEA Winery rhythm — alternating text + photo:
//   Hero          (full-bleed photo + italic-stress mission)
//   Chi siamo     (centered text block)
//   PhotoBreak    (family / vineyard photo, full-bleed)
//   Tenuta        (centered text block)
//   PhotoBreak    (estate / building photo, full-bleed)
//   Sostenibilità (centered text block)
//   PhotoBreak    (aerial / sustainability photo, full-bleed)
//   I Vini        (intro headline + brand-name marquee + stacked wine rows)
//   Contatti      (centered minimal)
//   Footer

export default function HomePage() {
  return (
    <main className="page">
      <HeroSection />

      <AboutSection />
      <PhotoBreak src="/images/about/placeholder.jpg" />

      <EstateSection />
      <PhotoBreak src="/images/location/placeholder.jpg" />

      <SustainabilitySection />
      <PhotoBreak src="/images/cta/placeholder.jpg" />

      <ProductsSection />

      <ContactSection />
      <Footer />
    </main>
  )
}
