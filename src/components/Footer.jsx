import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Sección de enlaces */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Instrumentos Store</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Catálogo
                </Link>
              </li>
              <li>
                {/* Puedes crear esta página luego o apuntar a Contacto por ahora */}
                <Link to="/contacto" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección de redes sociales */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Síguenos</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Sección de derechos */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Instrumentos Store. <br className="md:hidden"/>Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;