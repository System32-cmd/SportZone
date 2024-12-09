'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-black text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold">SportsPro</h1>
        </motion.div>
        <nav className="hidden md:flex space-x-4">
          {['Inicio', 'Catálogo', 'Ofertas', 'Contacto'].map((item) => (
            <motion.a
              key={item}
              href="#"
              className="hover:text-gray-300 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black"
        >
          <nav className="flex flex-col items-center py-4">
            {['Inicio', 'Catálogo', 'Ofertas', 'Contacto'].map((item) => (
              <a key={item} href="#" className="py-2 hover:text-gray-300 transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  )
}

export default Header

