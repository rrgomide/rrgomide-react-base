import React from 'react';

export default function H2({ children, className = '', ...otherProps }) {
  return (
    <h2
      className={`text-center m-2 font-semibold text-lg sm:text-xl ${className}`}
      {...otherProps}
    >
      {children}
    </h2>
  );
}
