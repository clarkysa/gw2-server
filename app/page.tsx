'use client';

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaDiscord, FaArrowRight, FaUsers, FaUserShield, FaComments, FaStar, FaHeart, FaGamepad, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import CountUp from 'react-countup';
import Snowfall from 'react-snowfall';
import Image from 'next/image';
import Link from 'next/link';
import GlowingButton from './GlowingButton';
import { JSX } from 'react';

const Home = () => {
  const [members] = useState<number>(22468);
  const [staff] = useState<number>(50);
  const [messages] = useState<number>(1461747);
  const [isScrolled, setIsScrolled] = useState(false);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Mystic",
      photo: "/Mystic.jpg",
      text: "Gane nitro en el, recomendado",
      rating: 5,
      memberSince: "3 meses",
    },
    {
      id: 2,
      name: "Bob",
      photo: "/images/bob.jpg",
      text: "Los eventos son super divertidos. Nunca me los pierdo!",
      rating: 4,
      memberSince: "1 año"
    },
    {
      id: 3,
      name: "Charlie",
      photo: "/images/charlie.jpg",
      text: "La comunidad es muy acogedora. Me siento como en casa.",
      rating: 5,
      memberSince: "3 meses"
    }
  ]);

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

  const handleRating = (reviewId: number, newRating: number) => {
    setReviews(reviews.map(review => 
      review.id === reviewId ? {...review, rating: newRating} : review
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-inter overflow-hidden">
      {/* Metadata */}
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Gatitos World 2 - La comunidad más acogedora de Discord" />
        <meta property="og:image" content="URL_DE_LA_IMAGEN_AQUI" />
        <meta property="og:site_name" content="Gatitos World 2" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <title>GW2 - Tu nuevo hogar en Discord</title>
        <script src="https://cdn.jsdelivr.net/npm/@widgetbot/html-embed"></script>
      </head>

      {/* Enhanced Visual Effects */}
      <div className="fixed inset-0 z-0">
        <Snowfall
          snowflakeCount={150}
          radius={[0.5, 3.0]}
          speed={[0.5, 3.0]}
          wind={[-0.5, 2.0]}
          color="rgba(255, 255, 255, 0.3)"
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
            <Image 
              src="/images/logo.png"
              alt="GW2 Logo"
              width={48} 
              height={48} 
              className="rounded-full border-2 border-blue-400 hover:border-blue-300 transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110" 
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-size-200 animate-gradient-x text-transparent bg-clip-text">
              GW2
            </span>
          </div>

          <GlowingButton href="https://discord.gg/gatitos2" className="text-white font-medium">
            <FaDiscord className="mr-2 text-xl" />
            Únete Ahora
            <FaArrowRight className="ml-2" />
          </GlowingButton>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/80 to-gray-900/95"></div>
        </div>
        
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-24">
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
              target="_blank"
              rel="noopener noreferrer"
              className="relative group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-600/25 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              <span className="relative flex items-center">
                <FaDiscord className="mr-2 text-xl" />
                Únete a la Aventura
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scrolldown"></div>
          </div>
        </div>
      </section>

      {/* Enhanced About Us Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative">
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

      {/* New Review Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-blue-900/30 rounded-full text-blue-400 text-sm font-medium mb-4">
              RESEÑAS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text">
              Lo que dicen nuestros miembros
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={review.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-4">
                  <Image 
                    src={review.photo}
                    alt={review.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <p className="text-sm text-gray-400">Miembro desde hace {review.memberSince}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{review.text}</p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`cursor-pointer ${star <= review.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                      onClick={() => handleRating(review.id, star)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
          <Link href="/reviews" passHref>
            <button 
              className="group relative inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-600/25 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-white/30 transform -translate-x-full group-hover:translate-x-full transition-all duration-700 filter blur-sm"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400/50 to-blue-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10">Ver más reseñas</span>
            </button>
          </Link>
          </div>
        </div>
      </section>

      {/* Enhanced VIP Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
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
                {/* Efecto de luz mejorado */}
                <div className="absolute -inset-1 bg-gradient-to-r from-white/30 via-yellow-500/30 to-white/30 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>
                
                {/* Card Container mejorado */}
                <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-3xl overflow-hidden transform group-hover:-translate-y-2 transition-all duration-500">
                  {/* Imagen Container con efecto mejorado */}
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
                    {/* Efecto de luz brillante mejorado */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20"></div>
                  </div>
                  
                  {/* Contenido mejorado */}
                  <div className="p-8 relative">
                    {/* Línea decorativa mejorada */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                    
                    <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${benefit.gradient} text-transparent bg-clip-text transform group-hover:scale-105 transition-transform duration-300`}>
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                    
                    {/* Botón mejorado */}
                    <div className="mt-6">
                      <a 
                        href="#" 
                        className="inline-flex items-center text-sm text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group/btn"
                      >
                        <span className="relative">
                          <span className="absolute -inset-2 bg-yellow-400/20 rounded-lg blur-sm opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                          <span className="relative">Saber más</span>
                        </span>
                        <FaArrowRight className="ml-2 text-xs transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Widgetbot Live Chat Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-blue-900/30 rounded-full text-blue-400 text-sm font-medium mb-4">
              CHAT EN VIVO
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text">
              Únete a la conversación
            </h2>
          </div>

          <div className="relative" data-aos="zoom-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
              {/* Use a div instead of the custom widgetbot element */}
              <div
                className="rounded-xl overflow-hidden"
                style={{ width: '100%', height: '600px' }}
              >
                <iframe
                  src="https://e.widgetbot.io/channels/299881420891881473/355719584830980096"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
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
          <a
            href="https://discord.gg/gatitos2"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-600/25 overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            <span className="relative flex items-center">
              <FaDiscord className="mr-2 text-xl transform group-hover:scale-110 transition-transform duration-300" />
              <span>Únete Ahora</span>
              <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>
        </div>
      </section>

    {/* Enhanced Footer */}
    <footer className="py-16 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image 
              src="/images/logo.png"
              alt="GW2 Logo"
              width={64} 
              height={64} 
              className="rounded-full border-2 border-blue-400" 
            />
            <h3 className="text-xl font-bold">GW2</h3>
            <p className="text-gray-400">La comunidad más acogedora de Discord</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/events" className="text-gray-400 hover:text-white transition-colors">Eventos</Link></li>
              <li><Link href="/reviews" className="text-gray-400 hover:text-white transition-colors">Reseñas</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Comunidad</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Reglas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Soporte</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaInstagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaYoutube size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} GW2 | Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>

      {/* Custom Animations CSS */}
      <style jsx global>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes scrolldown {
          0% { transform: translateY(0); opacity: 0; }
          50% { transform: translateY(8px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0; }
        }

        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
          background-size: 200% 200%;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-scrolldown {
          animation: scrolldown 2s ease infinite;
        }

        .bg-size-200 {
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
};

export default Home;
