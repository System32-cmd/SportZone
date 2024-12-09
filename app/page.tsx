import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedOffers from '@/components/FeaturedOffers'
import InteractiveCatalog from '@/components/InteractiveCatalog'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <FeaturedOffers />
      <InteractiveCatalog />
      <Footer />
    </main>
  )
}


