'use client';

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaDiscord, FaArrowRight, FaUsers, FaUserShield, FaComments } from 'react-icons/fa';
import CountUp from 'react-countup';
import Snowfall from 'react-snowfall';
import Image from 'next/image';

const Home = () => {
  const [members] = useState<number>(22468);
  const [staff] = useState<number>(50);
  const [messages] = useState<number>(1461747);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
    });

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-inter">
      {/* Metadata */}
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Gatitos World 2 - La comunidad más acogedora de Discord" />
        <meta property="og:image" content="URL_DE_LA_IMAGEN_AQUI" />
        <meta property="og:site_name" content="Gatitos World 2" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <title>GW2 - Tu nuevo hogar en Discord</title>
      </head>

      {/* Efectos Visuales */}
      <div className="fixed inset-0 z-0">
        <Snowfall
          snowflakeCount={100}
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
          }}
        />
      </div>

      {/* Header Moderno */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-gray-900/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image 
              src="/images/logo.png"
              alt="GW2 Logo"
              width={48} 
              height={48} 
              className="rounded-full border-2 border-blue-400 hover:border-blue-300 transition-all duration-300" 
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              GW2
            </span>
          </div>

          <a 
            href="https://discord.gg/gatitos2"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center px-6 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <FaDiscord className="mr-2 text-xl" />
            <span>Únete Ahora</span>
            <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </a>
        </div>
      </header>

      {/* Hero Section Mejorado */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/50 to-gray-900"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-24">
          <h1 
            className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-300 to-blue-500 text-transparent bg-clip-text"
            data-aos="fade-up"
          >
            Bienvenido a GW2
          </h1>
          <p 
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
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
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full font-medium hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-600/25 group"
            >
              <span className="flex items-center">
                Únete a la Aventura
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text">
              ¿Quiénes Somos?
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Somos más que un servidor de Discord - somos una familia global unida por la pasión por los videojuegos y la amistad sincera.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Eventos en Vivo",
                description: "Participa en eventos exclusivos y transmisiones en vivo con nuestra comunidad.",
                image: "/images/evento.png",
                icon: "🎮"
              },
              {
                title: "Contenido Premium",
                description: "Accede a sorteos y contenido exclusivo creado especialmente para ti.",
                image: "/images/sorteo.png",
                icon: "🎁"
              },
              {
                title: "Comunidad Global",
                description: "Conecta con personas de todo el mundo y forma parte de algo más grande.",
                image: "/images/server.png",
                icon: "🌍"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gray-800 p-6 hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="mb-4 text-4xl">{item.icon}</div>
                <Image 
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaUsers className="text-4xl mb-4 text-blue-400" />, title: "Miembros", value: members },
              { icon: <FaUserShield className="text-4xl mb-4 text-purple-400" />, title: "Staff", value: staff },
              { icon: <FaComments className="text-4xl mb-4 text-green-400" />, title: "Mensajes", value: messages }
            ].map((stat, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-2xl bg-gray-900 p-8 text-center transform hover:-translate-y-2 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                <div className="relative z-10">
                  {stat.icon}
                  <h3 className="text-xl font-semibold mb-4 text-gray-300">{stat.title}</h3>
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios VIP */}
      <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text" data-aos="fade-up">
            Beneficios VIP
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Color VIP Exclusivo",
                description: "Destaca con un color único en el servidor",
                image: "/images/vip1.png"
              },
              {
                title: "Acceso Premium",
                description: "Contenido y eventos exclusivos solo para VIPs",
                image: "/images/vip2.png"
              },
              {
                title: "Vanity URL",
                description: "Obtén el rol VIP con .gg/gatitos2",
                image: "/images/vip3.png"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="group bg-gray-800 rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={benefit.image}
                    alt={benefit.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center px-6" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            ¿Listo para ser parte de algo especial?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            No esperes más para unirte a la comunidad más acogedora de Discord.
          </p>
          <a
            href="https://discord.gg/gatitos2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full font-medium hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-600/25 group"
          >
            <FaDiscord className="mr-2 text-xl" />
            <span>Únete Ahora</span>
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-all duration-300" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} GW2 | Creado con 💙 para nuestra comunidad
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
