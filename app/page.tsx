'use client';

import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import Head from 'next/head';
import './styles.css'; // Ajuste para la ruta correcta
import Footer from './Footer.tsx';  // Ajuste para la ruta correcta
import FinalCTA from './FinalCTA.tsx'; // Ajuste para la ruta correcta
import Testimonials from './Testimonials.tsx'; // Ajuste para la ruta correcta
import Statistics from './Statistics.tsx'; // Ajuste para la ruta correcta
import AboutUs from './AboutUs.tsx'; // Ajuste para la ruta correcta

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-inter overflow-hidden">
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
  
      {/* Resto de tu componente */}
    </div>
  );
};

export default Home;
