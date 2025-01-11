// components/GlowingButton.tsx
import React from 'react';

interface GlowingButtonProps {
  href: string;
  className: string;
  children: React.ReactNode;
}

const GlowingButton: React.FC<GlowingButtonProps> = ({ href, className, children }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default GlowingButton;
