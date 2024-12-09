const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">SportsPro</h3>
            <p className="text-gray-400">Tu tienda de confianza para equipamiento deportivo de alta calidad.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Catálogo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ofertas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Contáctanos</h4>
            <p className="text-gray-400 mb-2">Email: info@sportspro.com</p>
            <p className="text-gray-400 mb-2">Teléfono: +1 234 567 890</p>
            <p className="text-gray-400">Dirección: 123 Calle Deportiva, Ciudad Atlética, País</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2023 SportsPro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

