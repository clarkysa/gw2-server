// components/Button.tsx

import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, href, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 bg-blue-500 text-white rounded-lg transition-all duration-200 hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
