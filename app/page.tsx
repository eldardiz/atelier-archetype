import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import EstateSection from '@/components/sections/EstateSection'
import SustainabilitySection from '@/components/sections/SustainabilitySection'
import ProductsSection from '@/components/sections/ProductsSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/layout/Footer'

// LEA Winery shape: Hero → Chi siamo → Tenuta → Sostenibilità → I Vini →
// Contatti → Footer. Six sections. Photo-led, quiet, italic-stress hooks.
// Atelier is intentionally narrower than Editorial; the section count is a
// design constraint, not a deficit.

export default function HomePage() {
  return (
    <main className="page">
      <HeroSection />
      <AboutSection />
      <EstateSection />
      <SustainabilitySection />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
