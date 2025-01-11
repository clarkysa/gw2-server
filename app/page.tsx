'use client';

import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import React from "react";
import Head from 'next/head';
import 'aos/dist/aos.css';
import 'styles.css'; // Ajusta la ruta según tu estructura de directorios
import Footer from 'Footer.tsx';  // Asegúrate de usar la ruta correcta
import FinalCTA from 'FinalCTA.tsx'; // Asegúrate de usar la ruta correcta
import Testimonials from 'Testimonials.tsx'; // Asegúrate de usar la ruta correcta
import Statistics from 'Statistics.tsx'; // Asegúrate de usar la ruta correcta
import AboutUs from 'AboutUs.tsx'; // Asegúrate de usar la ruta correcta
import ScrollIndicator from 'ScrollIndicator.tsx'; // Asegúrate de usar la ruta correcta
import HeroSection from 'HeroSection.tsx'; // Asegúrate de usar la ruta correcta
import { FaDiscord, FaArrowRight, FaUsers, FaUserShield, FaComments, FaStar, FaHeart, FaGamepad, FaTwitter, FaInstagram, FaTwitch, FaQuoteLeft } from 'react-icons/fa';
import CountUp from 'react-countup';
import Snowfall from 'react-snowfall';
import Image from 'next/image';

const GlowingButton = ({ children, href, className = '' }: { children: React.ReactNode, href: string, className?: string }) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setGlowPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative group overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute w-32 h-32 bg-white rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"
        style={{
          left: `${glowPosition.x - 64}px`,
          top: `${glowPosition.y - 64}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      {children}
    </a>
  );
};

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute w-full h-full bg-gradient-radial from-blue-500/20 to-transparent"
        style={{
          transform: `translate(${mousePosition.x / 50}px, ${mousePosition.y / 50}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      />
      <div
        className="absolute w-full h-full bg-gradient-radial from-purple-500/20 to-transparent"
        style={{
          transform: `translate(${-mousePosition.x / 40}px, ${-mousePosition.y / 40}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div className="absolute inset-0 backdrop-blur-[100px]" />
    </div>
  );
};

const Home = () => {
  const [members] = useState<number>(22468);
  const [staff] = useState<number>(50);
  const [messages] = useState<number>(1461747);
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

      {/* Enhanced Visual Effects */}
      <div className="fixed inset-0 z-0">
        <Snowfall
          snowflakeCount={200}
          radius={[0.5, 3.0]}
          speed={[0.5, 3.0]}
          wind={[-0.5, 2.0]}
          color="rgba(255, 255, 255, 0.2)"
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-purple-900/10"></div>
      </div>

      {/* Enhanced Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-gray-900/90 py-3 shadow-2xl shadow-blue-900/20' 
          : 'backdrop-blur-sm bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <div className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Image 
                src="/images/logo.png"
                alt="GW2 Logo"
                width={48} 
                height={48} 
                className="relative rounded-full border-2 border-blue-400/50 hover:border-blue-300 transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110" 
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-size-200 animate-gradient-x text-transparent bg-clip-text">
              GW2
            </span>
          </div>

          <GlowingButton 
            href="https://discord.gg/gatitos2"
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <span className="flex items-center">
              <FaDiscord className="mr-2 text-xl transform group-hover:scale-110 transition-transform duration-300" />
              <span>Únete Ahora</span>
              <FaArrowRight className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </span>
          </GlowingButton>
        </div>
      </header>

export default Home;

