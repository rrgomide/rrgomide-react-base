import React from 'react';

export default function FeatureIcon({ children }) {
  //const tailWindClassNames = ;

  return (
    <div
      className={`bg-gray-50 m-1 w-32 h-32 rounded-lg hover:bg-gray-200 
                  cursor-pointer flex flex-col items-center justify-center
                  font-semibold`}
    >
      {children}
    </div>
  );
}
