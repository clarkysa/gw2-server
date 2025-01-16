// app/components/Card.tsx
import React from 'react';

interface CardProps {
  className?: string; // Opcional, clases adicionales para el contenedor
  children: React.ReactNode; // Aceptar contenido dentro del card
}

export const Card: React.FC<CardProps> = ({ className, children }) => (
  <div className={`bg-gray-800 rounded-lg shadow-lg ${className}`}>
    {children} {/* Renderiza el contenido dentro del card */}
  </div>
);
