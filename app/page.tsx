'use client'; // Asegura que el componente se ejecute en el cliente

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaDiscord } from 'react-icons/fa'; // Eliminamos FaStar porque no se utiliza
import CountUp from 'react-countup'; // Esto es correcto
import Snowfall from 'react-snowfall'; // Importamos la librería para el efecto de nieve
import Head from 'next/head'; // Importamos Head para manipular la metadata de la página
import Image from 'next/image'; // Importamos Image de Next.js

// Declaración del módulo 'aos' para evitar el error de tipos
declare module 'aos';

const Home = () => {
  const [members] = useState<number>(22468); // Contador de miembros (ejemplo estático)
  const [staff] = useState<number>(50); // Contador de staff (ejemplo estático)
  const [messages] = useState<number>(1461747); // Contador de mensajes (ejemplo estático)

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-back',
      once: true,
    });

    // Asegurarnos de que la página siempre cargue desde el top
    window.scrollTo(0, 0);

    // Crear el efecto de luz que sigue el cursor
    const lightEffect = document.querySelector('.light-effect') as HTMLElement;

    // Mover la luz cuando el mouse se mueve
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      if (lightEffect) {
        lightEffect.style.left = `${mouseX - lightEffect.offsetWidth / 2}px`; // Centra la luz en el cursor
        lightEffect.style.top = `${mouseY - lightEffect.offsetHeight / 2}px`; // Centra la luz en el cursor
      }
    };

    // Asignar el evento del mouse
    document.addEventListener('mousemove', handleMouseMove);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Gatitos World 2 es un servidor para gamers con eventos exclusivos, sorteos y una comunidad activa. ¡Conéctate ahora!" />
        <meta name="keywords" content="Gatitos World, servidor de gamers, comunidad, discord, juegos, eventos, sorteos, contenidos exclusivos" />
        <meta name="author" content="Gatitos World 2" />
        <link rel="icon" href="/favicon.ico" />
        <title>Gatitos World 2 - Comunidad de Gamers</title>

        {/* Open Graph meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gatitos World 2 - Comunidad de Gamers" />
        <meta property="og:description" content="Gatitos World 2 es un servidor para gamers con eventos exclusivos, sorteos y una comunidad activa. ¡Conéctate ahora!" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://gatitosworld2.com" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gatitos World 2 - Comunidad de Gamers" />
        <meta name="twitter:description" content="Gatitos World 2 es un servidor para gamers con eventos exclusivos, sorteos y una comunidad activa. ¡Conéctate ahora!" />
        <meta name="twitter:image" content="/images/og-image.jpg" />
        <meta name="twitter:creator" content="@GatitosWorld2" />
      </Head>

      <div className="bg-gray-900 text-white font-inter">
        {/* Efecto de Copos de Nieve */}
        <Snowfall />

        {/* Header Limpio y Moderno */}
        <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 px-6 py-4 shadow-md flex justify-between items-center">
          {/* Logo Circular a la Izquierda */}
          <div className="flex items-center">
            <Image 
              src="/images/logo.png"
              alt="Logo"
              width={64} 
              height={64} 
              className="rounded-full border-4 border-white" 
            />
          </div>

          {/* Botón Únete Ahora a la Derecha */}
          <a 
            href="https://discord.gg/gatitos2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            style={{ zIndex: 999 }}
          >
            <span className="mr-3 text-xl">
              <FaDiscord />
            </span>
            <span className="text-lg">Únete Ahora</span>
          </a>
        </header>

        {/* Hero Section */}
        <section
          className="relative w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
          <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
            <div>
              <h1 className="text-6xl font-extrabold text-white mb-8" data-aos="fade-up">
                ¡Bienvenido a GW2!
              </h1>
              <p className="text-xl text-gray-300 mb-6" data-aos="fade-up" data-aos-delay="200">
                Conéctate con miles de personas, accede a contenido exclusivo y mejora tu experiencia.
              </p>
              <a
                href="https://discord.gg/gatitos2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full hover:bg-gradient-to-l hover:from-blue-400 hover:to-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                data-aos="fade-up" data-aos-delay="400"
              >
                Únete Ahora
              </a>
            </div>
          </div>
        </section>

        {/* Acerca de Nosotros */}
        <section id="about" className="py-20 bg-gray-800" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">¿Quiénes Somos?</h2>
            <p className="text-lg text-gray-400 mx-auto max-w-4xl">
              Gatitos World 2 es un servidor modernizado que nace del legado del querido Gatitos World. Nuestro objetivo es crear un espacio donde todos los jugadores, tanto veteranos como nuevos, puedan disfrutar de una experiencia de juego excepcional, rodeados de una comunidad amigable y apasionada.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300">
              <Image 
                src="/images/evento.png" 
                alt="Comunidad 1" 
                width={500} 
                height={500} 
                className="w-full h-56 object-cover rounded-lg mb-4" 
              />
              <h3 className="text-2xl font-semibold text-white mb-2">Eventos en Vivo</h3>
              <p className="text-gray-300">Participa en eventos en tiempo real, accede a transmisiones exclusivas y conoce a otros miembros en vivo.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300">
              <Image 
                src="/images/sorteo.png" 
                alt="Comunidad 2" 
                width={500} 
                height={500} 
                className="w-full h-56 object-cover rounded-lg mb-4" 
              />
              <h3 className="text-2xl font-semibold text-white mb-2">Contenidos Exclusivos</h3>
              <p className="text-gray-300">Accede a sorteos, experiencia y contenido que no encontrarás en ningún otro lugar. Solo para miembros.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300">
              <Image 
                src="/images/server.png" 
                alt="Comunidad 3" 
                width={500} 
                height={500} 
                className="w-full h-56 object-cover rounded-lg mb-4" 
              />
              <h3 className="text-2xl font-semibold text-white mb-2">Conexión Global</h3>
              <p className="text-gray-300">Conéctate con personas de todo el mundo, comparte conocimientos y haz amigos en todo el planeta.</p>
            </div>
          </div>
        </section>

        {/* Estadísticas del Servidor */}
        <section className="py-20 bg-gray-900 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white mb-8">Estadísticas del Servidor</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-2">Miembros</h3>
              <p className="text-gray-300 text-4xl">
                <CountUp start={0} end={members} duration={2.5} separator="," />
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-2">Staff</h3>
              <p className="text-gray-300 text-4xl">
                <CountUp start={0} end={staff} duration={2.5} separator="," />
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-2">Mensajes</h3>
              <p className="text-gray-300 text-4xl">
                <CountUp start={0} end={messages} duration={2.5} separator="," />
              </p>
            </div>
          </div>
        </section>

        {/* Beneficios VIP */}
        <section id="vip-benefits" className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white mb-8">Beneficios VIP</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300">
              <Image 
                src="/images/vip1.png" 
                alt="Color VIP" 
                width={500} 
                height={500} 
                className="w-full h-56 object-cover rounded-lg mb-4" 
              />
              <h3 className="text-2xl font-semibold text-white mb-2">Color VIP en Discord</h3>
              <p className="text-gray-300">Obtén un color especial en Discord y destaca entre los demás miembros.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300">
              <Image 
                src="/images/vip2.png" 
                alt="Acceso Exclusivo" 
                width={500} 
                height={500} 
                className="w-full h-56 object-cover rounded-lg mb-4" 
              />
              <h3 className="text-2xl font-semibold text-white mb-2">Acceso Exclusivo</h3>
              <p className="text-gray-300">Accede a sorteos, contenido y eventos solo para miembros VIP.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300">
              <Image 
                src="/images/vip3.png" 
                alt="Vanity URL" 
                width={500} 
                height={500} 
                className="w-full h-56 object-cover rounded-lg mb-4" 
              />
              <h3 className="text-2xl font-semibold text-white mb-2">Vanity URL</h3>
              <p className="text-gray-300">Obtén el rol VIP con tan solo colocar la vanity <strong>.gg/gatitos2 o /gatitos2</strong> en tu estado</p>
            </div>
          </div>
        </section>

        {/* ¿Qué estás esperando para unirte? */}
        <section className="py-20 bg-blue-900 text-center text-white" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">¿Qué estás esperando para unirte?</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            No pierdas la oportunidad de ser parte de nuestra increíble comunidad. Disfruta de eventos, sorteos exclusivos y conoce a personas de todo el mundo. ¡Haz crecer tu experiencia de juego y diviértete con nosotros!
          </p>
          <a
            href="https://discord.gg/gatitos2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            ¡Únete Ya!
          </a>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-900 text-center text-gray-400">
          <p>&copy; 2024 - 2025 GW2 | Todos los derechos reservados</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
