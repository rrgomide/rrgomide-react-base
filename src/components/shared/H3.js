import React from 'react';

export default function H3({ children, className = '', ...otherProps }) {
  return (
    <h2
      className={`text-center m-2 font-medium text-sm sm:text-lg ${className}`}
      {...otherProps}
    >
      {children}
    </h2>
  );
}
