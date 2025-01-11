'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import Head from 'next/head';
import './styles.css'; // Ajuste para la ruta correcta

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
    });

    return () => {
      // Puedes poner aquí cualquier limpieza si es necesario
    };
  }, []);

  return (
    <div className="min-h-screen text-white font-inter overflow-hidden">
      {/* Metadata */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Gatitos World 2 - La comunidad más acogedora de Discord" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:site_name" content="Gatitos World 2" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <title>GW2 - Tu nuevo hogar en Discord</title>
      </Head>

      {/* Fondo con gradiente solo en el área principal */}
      <div className="relative min-h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-blue-900">
        {/* Aquí puedes añadir tu contenido */}
        <div className="relative z-20 max-w-5xl mx-auto text-center px-6 pt-24">
          <h1 
            className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-300 to-blue-500 text-transparent bg-clip-text animate-gradient-x"
            data-aos="zoom-in"
          >
            Bienvenido a GW2
          </h1>
          <p 
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            Descubre una comunidad única donde cada momento se convierte en una experiencia inolvidable.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <a
              href="https://discord.gg/gatitos2"
              className="relative group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-600/25 overflow-hidden"
            >
              <span className="relative flex items-center">
                <FaDiscord className="mr-2 text-xl" />
                Únete a la Aventura
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
