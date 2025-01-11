'use client';

import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import React from "react";
import Head from 'next/head';
import 'aos/dist/aos.css';
import 'styles.css'; // Ajusta la ruta según tu estructura de directorios
import Footer from 'Footer.tsx';  // Asegúrate de usar la ruta correcta
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

      {/* Enhanced Hero Section with Interactive Background */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <InteractiveBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/80 z-10"></div>
        
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
            <GlowingButton
              href="https://discord.gg/gatitos2"
              className="relative group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-600/25 overflow-hidden"
            >
              <span className="relative flex items-center">
                <FaDiscord className="mr-2 text-xl" />
                Únete a la Aventura
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </GlowingButton>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scrolldown"></div>
          </div>
        </div>
      </section>

      {/* Enhanced About Us Section */}
      <section id="sobre-nosotros" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-blue-900/30 rounded-full text-blue-400 text-sm font-medium mb-4">
              SOBRE NOSOTROS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-300 to-blue-500 text-transparent bg-clip-text">
              ¿Quiénes Somos?
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Somos más que un servidor de Discord - somos una familia global unida por la pasión por los videojuegos y la amistad sincera.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Eventos en Vivo",
                description: "Participa en eventos exclusivos y transmisiones en vivo con nuestra comunidad.",
                image: "/images/evento.png",
                icon: <FaGamepad className="text-4xl text-blue-400" />
              },
              {
                title: "Contenido Premium",
                description: "Accede a sorteos y contenido exclusivo creado especialmente para ti.",
                image: "/images/sorteo.png",
                icon: <FaStar className="text-4xl text-yellow-400" />
              },
              {
                title: "Comunidad Global",
                description: "Conecta con personas de todo el mundo y forma parte de algo más grande.",
                image: "/images/server.png",
                icon: <FaHeart className="text-4xl text-pink-400" />
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-750 transition-all duration-500 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="p-6">
                  <div className="mb-4 relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                    {item.icon}
                  </div>
                  
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <Image 
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <section className="py-24 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/stats-bg.jpg')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-blue-900/30 rounded-full text-blue-400 text-sm font-medium mb-4">
              ESTADÍSTICAS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text">
              Nuestros Números
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <FaUsers className="text-5xl mb-4 text-blue-400" />, 
                title: "Miembros Activos", 
                value: members,
                suffix: "+",
                gradient: "from-blue-400 to-blue-600"
              },
              { 
                icon: <FaUserShield className="text-5xl mb-4 text-purple-400" />, 
                title: "Staff Dedicado", 
                value: staff,
                suffix: "",
                gradient: "from-purple-400 to-purple-600"
              },
              { 
                icon: <FaComments className="text-5xl mb-4 text-green-400" />, 
                title: "Mensajes Compartidos", 
                value: messages,
                suffix: "k",
                gradient: "from-green-400 to-green-600"
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="relative group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl rounded-3xl transform group-hover:scale-110 transition-transform duration-700"></div>
                <div className="relative backdrop-blur-sm bg-gray-900/80 rounded-3xl p-8 text-center transform hover:-translate-y-2 transition-all duration-500 border border-gray-700/50">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="relative z-10">
                    <div className="flex justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {stat.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-100">{stat.title}</h3>
                    <div className="relative">
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={3}
                        separator=","
                        className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} text-transparent bg-clip-text`}
                      />
                      <span className={`text-2xl font-bold bg-gradient-to-r ${stat.gradient} text-transparent bg-clip-text ml-1`}>
                        {stat.suffix}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced VIP Benefits Section */}
      <section id="beneficios-vip" className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/vip-bg.jpg')] opacity-5 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-yellow-500/10 to-orange-500/10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-yellow-900/30 rounded-full text-yellow-400 text-sm font-medium mb-4">
              BENEFICIOS VIP
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text">
              Experiencia VIP
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Color VIP Exclusivo",
                description: "Destaca en el servidor con un color único que refleja tu estatus especial",
                image: "/images/vip1.png",
                gradient: "from-purple-500 to-blue-500"
              },
              {
                title: "Acceso Premium",
                description: "Disfruta de contenido exclusivo, eventos privados y beneficios únicos",
                image: "/images/vip2.png",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                title: "Vanity URL",
                description: "Obtén el codiciado rol VIP usando .gg/gatitos2 en tu perfil",
                image: "/images/vip3.png",
                gradient: "from-blue-500 to-green-500"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="group relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-white/30 via-yellow-500/30 to-white/30 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>
                
                <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-3xl overflow-hidden transform group-hover:-translate-y-2 transition-all duration-500">
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/80 z-10 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <Image 
                      src={benefit.image}
                      alt={benefit.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-1000 ease-out"
                      style={{
                        clipPath: "polygon(0 0, 100% 0%, 100% 85%, 0% 100%)"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20"></div>
                  </div>
                  
                  <div className="p-8 relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                    
                    <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${benefit.gradient} text-transparent bg-clip-text transform group-hover:scale-105 transition-transform duration-300`}>
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                    
                    <div className="mt-6">
                      <GlowingButton 
                        href="#"
                        className="inline-flex items-center text-sm text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group/btn"
                      >
                        <span className="relative">
                          <span className="absolute -inset-2 bg-yellow-400/20 rounded-lg blur-sm opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                          <span className="relative">Saber más</span>
                        </span>
                        <FaArrowRight className="ml-2 text-xs transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </GlowingButton>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section id="testimonios" className="py-24 bg-gradient-to-b from-gray-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-blue-900/30 rounded-full text-blue-400 text-sm font-medium mb-4">
              TESTIMONIOS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text">
              Lo Que Dicen Nuestros Miembros
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ana G.",
                role: "Miembro desde 2021",
                quote: "GW2 no es solo un servidor, es mi segunda familia. Aquí he encontrado amigos increíbles y momentos inolvidables.",
              },
              {
                name: "Carlos M.",
                role: "Moderador",
                quote: "Como moderador, puedo decir que la comunidad de GW2 es única. El respeto y la camaradería que se vive aquí es incomparable.",
              },
              {
                name: "Laura S.",
                role: "Streamer Asociada",
                quote: "Gracias a GW2, mi experiencia como streamer ha crecido exponencialmente. El apoyo de la comunidad es increíble.",
              },
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg transform hover:-translate-y-2 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <FaQuoteLeft className="text-3xl text-blue-400 mb-4" />
                <p className="text-gray-300 mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 -right-4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-blue-900/30 rounded-full text-blue-400 text-sm font-medium mb-4">
            ÚNETE AHORA
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-300 to-blue-500 text-transparent bg-clip-text">
            ¿Listo para ser parte de algo especial?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            No esperes más para unirte a la comunidad más acogedora de Discord.
          </p>
          <GlowingButton
            href="https://discord.gg/gatitos2"
            className="relative group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-600/25 overflow-hidden"
          >
            <span className="relative flex items-center">
              <FaDiscord className="mr-2 text-xl transform group-hover:scale-110 transition-transform duration-300" />
              <span>Únete Ahora</span>
              <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </GlowingButton>
        </div>
      </section>

export default Home;

