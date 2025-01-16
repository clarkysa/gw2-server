// components/Card.tsx

import React from 'react';

export const Card: React.FC<{ className?: string }> = ({ className, children }) => (
  <div className={`bg-gray-800 rounded-lg shadow-lg ${className}`}>{children}</div>
);

export const CardHeader: React.FC<{ className?: string }> = ({ className, children }) => (
  <div className={`p-4 border-b border-gray-700 ${className}`}>{children}</div>
);

export const CardTitle: React.FC<{ className?: string }> = ({ className, children }) => (
  <h3 className={`text-xl font-semibold text-white ${className}`}>{children}</h3>
);

export const CardContent: React.FC<{ className?: string }> = ({ className, children }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

export const CardFooter: React.FC<{ className?: string }> = ({ className, children }) => (
  <div className={`p-4 border-t border-gray-700 ${className}`}>{children}</div>
);
