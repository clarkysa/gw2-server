import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300">
      <Image src={imageUrl} alt={title} width={400} height={300} className="w-full object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
        <p className="text-gray-400 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={link} className="text-blue-500 hover:underline">Learn more</a>
      </div>
    </div>
  );
};

export default Card;
