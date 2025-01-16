import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, href, onClick, className }) => {
  const buttonClass = `inline-flex items-center justify-center px-6 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300 ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
