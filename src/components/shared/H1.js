import React from 'react';

export default function H1({ children, className = '', ...otherProps }) {
  return (
    <h2
      className={`text-center m-2 font-bold text-xl sm:text-2xl  ${className}`}
      {...otherProps}
    >
      {children}
    </h2>
  );
}
