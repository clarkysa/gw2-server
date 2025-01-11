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
import Header from 'Header.tsx'; // Asegúrate de usar la ruta correcta
import VisualEffects from 'VisualEffects.tsx'; // Asegúrate de usar la ruta correcta
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

export default Home;

