// app/components/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode; // Acepta cualquier tipo de contenido como hijos
  className?: string; // Clases CSS opcionales
  onClick?: () => void; // Función opcional que se ejecuta al hacer clic
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full text-white ${className}`} // Aplica clases adicionales
    >
      {children} {/* Renderiza los hijos dentro del botón */}
    </button>
  );
};

export default Button; // Asegúrate de exportar el componente por defecto
