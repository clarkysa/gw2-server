import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const benefits = [
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
];

export const VIPBenefits: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {benefits.map((benefit, index) => (
        <div 
          key={index}
          className={`group relative transition-all duration-500 transform ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-white/30 via-yellow-500/30 to-white/30 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>
          
          <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-3xl overflow-hidden transform group-hover:-translate-y-2 transition-all duration-500">
            <div className="relative h-72 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/80 z-10 group-hover:opacity-50 transition-opacity duration-500"></div>
              <Image 
                src={benefit.image || "/placeholder.svg"}
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
  );
};
