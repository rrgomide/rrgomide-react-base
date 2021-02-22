import React from 'react';
import H3 from '../shared/H3';

export default function CounterTitle({ children: title }) {
  return (
    <H3 style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>{title}</H3>
  );
}
