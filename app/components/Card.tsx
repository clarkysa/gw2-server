// app/components/Card.tsx
import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode; // Agregar el tipo de children
}

// Componente Card que recibe children y className como propiedades
export const Card: React.FC<CardProps> = ({ className, children }) => (
  <div className={`bg-gray-800 rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
);

// Componente CardHeader
interface CardHeaderProps {
  className?: string;
  children: React.ReactNode; // Agregar el tipo de children
}
export const CardHeader: React.FC<CardHeaderProps> = ({ className, children }) => (
  <div className={`p-4 border-b border-gray-700 ${className}`}>
    {children}
  </div>
);

// Componente CardTitle
interface CardTitleProps {
  className?: string;
  children: React.ReactNode; // Agregar el tipo de children
}
export const CardTitle: React.FC<CardTitleProps> = ({ className, children }) => (
  <h3 className={`text-2xl font-bold ${className}`}>
    {children}
  </h3>
);

// Componente CardContent
interface CardContentProps {
  className?: string;
  children: React.ReactNode; // Agregar el tipo de children
}
export const CardContent: React.FC<CardContentProps> = ({ className, children }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

// Componente CardFooter
interface CardFooterProps {
  className?: string;
  children: React.ReactNode; // Agregar el tipo de children
}
export const CardFooter: React.FC<CardFooterProps> = ({ className, children }) => (
  <div className={`p-4 border-t border-gray-700 ${className}`}>
    {children}
  </div>
);
