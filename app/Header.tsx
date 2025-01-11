// components/Header.tsx
import React from 'react';
import Image from 'next/image';
import { FaDiscord, FaArrowRight } from 'react-icons/fa';
import GlowingButton from './GlowingButton'; // Asegúrate de importar tu componente GlowingButton

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-xl bg-gray-900/90 py-3 shadow-2xl shadow-blue-900/20'
          : 'backdrop-blur-sm bg-transparent py-4'
      }`}
    >
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
  );
};

export default Header;
