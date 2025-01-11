// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import { FaTwitter, FaInstagram, FaTwitch } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image 
              src="/images/logo.png"
              alt="GW2 Logo"
              width={64} 
              height={64} 
              className="mb-4"
            />
            <p className="text-gray-400 mb-4">
              GW2 es más que un servidor de Discord. Somos una comunidad vibrante y acogedora, unida por la pasión por los videojuegos y la amistad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitch size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors duration-300">Inicio</a></li>
              <li><a href="#sobre-nosotros" className="text-gray-400 hover:text-white transition-colors duration-300">Sobre Nosotros</a></li>
              <li><a href="#beneficios-vip" className="text-gray-400 hover:text-white transition-colors duration-300">Beneficios VIP</a></li>
              <li><a href="#testimonios" className="text-gray-400 hover:text-white transition-colors duration-300">Testimonios</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Redes Sociales</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Twitch</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">support@gw2.com</li>
              <li className="text-gray-400">Discord: GW2#1234</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} GW2 | 
            <span className="mx-2">Creado con</span>
            <span className="inline-block animate-pulse text-red-400">❤️</span>
            <span className="mx-2">para nuestra comunidad</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
