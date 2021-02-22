import React from 'react';

export default function Card({ description }) {
  return (
    <div className="border p-4 w-auto m-4 shadow-md hover:bg-gray-50 text-center">
      <span className="text-gray-800 font-semibold">{description}</span>
    </div>
  );
}
