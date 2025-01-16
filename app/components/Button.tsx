// app/components/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode; // Aceptar el contenido dentro del botón
  className?: string; // Opcional, clases adicionales para estilos
  onClick?: () => void; // Acción opcional para manejar clics
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className={`px-6 py-3 rounded-full text-white ${className}`} // Aplica las clases adicionales
    >
      {children} {/* Contenido dentro del botón */}
    </button>
  );
};

export default Button; // Exportación por defecto
