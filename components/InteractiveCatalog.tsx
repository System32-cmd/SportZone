'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const categories = ['Todos', 'Fútbol', 'Baloncesto', 'Tenis', 'Running']

const products = [
  { id: 1, name: 'Balón de fútbol', category: 'Fútbol', image: '/placeholder.svg?height=200&width=200' },
  { id: 2, name: 'Zapatillas de running', category: 'Running', image: '/placeholder.svg?height=200&width=200' },
  { id: 3, name: 'Raqueta de tenis', category: 'Tenis', image: '/placeholder.svg?height=200&width=200' },
  { id: 4, name: 'Pelota de baloncesto', category: 'Baloncesto', image: '/placeholder.svg?height=200&width=200' },
  { id: 5, name: 'Camiseta de fútbol', category: 'Fútbol', image: '/placeholder.svg?height=200&width=200' },
  { id: 6, name: 'Shorts de running', category: 'Running', image: '/placeholder.svg?height=200&width=200' },
]

const InteractiveCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(product => product.category === selectedCategory)

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Catálogo Interactivo</h2>
        <div className="flex justify-center mb-8">
          {categories.map(category => (
            <motion.button
              key={category}
              className={`mx-2 px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image src={product.image} alt={product.name} width={200} height={200} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default InteractiveCatalog

