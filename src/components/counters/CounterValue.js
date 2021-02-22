import React from 'react';

export default function CounterValue({ children: value }) {
  return (
    <div className="ml-2 mr-2 pr-1 w-24 border h-16 flex items-center justify-end">
      <span
        className="text-center text-4xl"
        style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
      >
        {value}
      </span>
    </div>
  );
}
