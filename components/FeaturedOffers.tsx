'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const offers = [
  { id: 1, title: 'Zapatillas de running', discount: '30% OFF', image: '/placeholder.svg?height=200&width=200' },
  { id: 2, title: 'Raquetas de tenis', discount: '25% OFF', image: '/placeholder.svg?height=200&width=200' },
  { id: 3, title: 'Balones de fútbol', discount: '20% OFF', image: '/placeholder.svg?height=200&width=200' },
]

const FeaturedOffers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="w-full py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Ofertas Destacadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image src={offer.image} alt={offer.title} width={200} height={200} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-2xl font-bold text-red-600">{offer.discount}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedOffers

