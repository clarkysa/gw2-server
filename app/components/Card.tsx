// app/components/Card.tsx
import React from 'react';

// Componente Card que recibe children y className como propiedades
export const Card: React.FC<{ className?: string }> = ({ className, children }) => (
  <div className={`bg-gray-800 rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
);

// Componente CardHeader
export const CardHeader: React.FC<{ className?: string }> = ({ className, children }) => (
  <div className={`p-4 border-b border-gray-700 ${className}`}>
    {children}
  </div>
);

// Componente CardTitle
export const CardTitle: React.FC<{ className?: string }> = ({ className, children }) => (
  <h3 className={`text-2xl font-bold ${className}`}>
    {children}
  </h3>
);

// Componente CardContent
export const CardContent: React.FC<{ className?: string }> = ({ className, children }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

// Componente CardFooter
export const CardFooter: React.FC<{ className?: string }> = ({ className, children }) => (
  <div className={`p-4 border-t border-gray-700 ${className}`}>
    {children}
  </div>
);
