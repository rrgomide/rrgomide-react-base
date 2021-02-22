import React from 'react';

import { MdRefresh, MdAdd, MdRemove } from 'react-icons/md';

import { useCounter } from '../../hooks/useCounter';

import CounterButton from './CounterButton';
import CounterContainer from './CounterContainer';
import CounterTitle from './CounterTitle';
import CounterValue from './CounterValue';

export default function SimpleCounter({ title }) {
  const { counter, doIncrement, doDecrement, doRestart } = useCounter(0);

  function handleIncrement() {
    doIncrement(1);
  }

  function handleDecrement() {
    doDecrement(1);
  }

  function handleRestart() {
    doRestart();
  }

  return (
    <CounterContainer>
      <CounterTitle>{title}</CounterTitle>

      <div
        className="flex flex-row justify-center items-center"
        style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
      >
        <CounterValue>{counter}</CounterValue>

        <div className="flex flex-col">
          <CounterButton
            onClick={handleIncrement}
            onPress={handleIncrement}
            className="bg-blue-400 hover:bg-blue-300 mb-0.5"
          >
            <MdAdd />
          </CounterButton>

          <CounterButton
            onClick={handleDecrement}
            onPress={handleDecrement}
            className="bg-red-400 hover:bg-red-300"
          >
            <MdRemove />
          </CounterButton>
        </div>

        <CounterButton
          onClick={handleRestart}
          className="ml-1 bg-green-300 hover:bg-green-200"
        >
          <MdRefresh />
        </CounterButton>
      </div>
    </CounterContainer>
  );
}
