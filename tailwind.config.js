// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Asegúrate de incluir el directorio de tu aplicación
  ],
  theme: {
    extend: {
      colors: {
        black: '#121212',  // Fondo oscuro
        cyan: '#00b8f4',   // Color de acento
        blackMate: '#1E1E1E',  // Color mate oscuro para fondo
      },
    },
  },
  plugins: [],
};
