import React from 'react';

// Subcomponente CardHeader
export const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="font-bold text-xl mb-2 text-white">{children}</div>
);

// Subcomponente CardTitle
export const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-lg font-semibold text-white">{children}</h2>
);

// Subcomponente CardContent
export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-gray-400 text-base">{children}</div>
);

// Subcomponente CardFooter
export const CardFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="px-6 pt-4 pb-2">{children}</div>
);

// Componente Card
const Card: React.FC<{ title: string; description: string; imageUrl: string; link: string }> = ({ title, description, imageUrl, link }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300">
    <img src={imageUrl} alt={title} className="w-full object-cover" />
    <div className="px-6 py-4">
      <CardHeader>{title}</CardHeader>
      <CardContent>{description}</CardContent>
    </div>
    <CardFooter>
      <a href={link} className="text-blue-500 hover:underline">Learn more</a>
    </CardFooter>
  </div>
);

export default Card; // Exportar como por defecto
