import React from 'react';

import { MdRefresh, MdAdd, MdRemove } from 'react-icons/md';

import { useCounter } from '../../hooks/useCounter';
import CounterButton from './CounterButton';
import CounterContainer from './CounterContainer';
import CounterTitle from './CounterTitle';
import CounterValue from './CounterValue';

export default function CustomCounter({ title }) {
  const [incrementBy, setIncrementBy] = React.useState(2);
  const [decrementBy, setDecrementBy] = React.useState(2);

  const { counter, doIncrement, doDecrement, doRestart } = useCounter(0);

  function handleInputDecrement({ currentTarget }) {
    setDecrementBy(parseInt(currentTarget.value));
  }

  function handleInputIncrement({ currentTarget }) {
    setIncrementBy(parseInt(currentTarget.value));
  }

  function handleIncrement() {
    doIncrement(incrementBy);
  }

  function handleDecrement() {
    doDecrement(decrementBy);
  }

  function handleRestart() {
    doRestart();
  }

  return (
    <CounterContainer>
      <CounterTitle>{title}</CounterTitle>

      <div className="flex flex-row justify-center items-center">
        <CounterValue>{counter}</CounterValue>

        <div className="flex flex-col">
          <div className="flex flex-row mb-0.5">
            <CounterButton
              onClick={handleIncrement}
              onPress={handleIncrement}
              className="bg-blue-400 hover:bg-blue-300 mr-0.5"
            >
              <MdAdd />
            </CounterButton>

            <input
              id="input-increment"
              type="number"
              value={incrementBy}
              onChange={handleInputIncrement}
              min={0}
              className="w-16 h-8"
            />
          </div>

          <div className="flex flex-row">
            <CounterButton
              onClick={handleDecrement}
              onPress={handleDecrement}
              className="bg-red-400 hover:bg-red-300 mr-0.5"
            >
              <MdRemove />
            </CounterButton>
            <input
              id="input-decrement"
              type="number"
              value={decrementBy}
              onChange={handleInputDecrement}
              min={0}
              className="w-16 mr-2 h-8"
            />
          </div>
        </div>

        <CounterButton
          onClick={handleRestart}
          className="bg-green-300 hover:bg-green-200"
        >
          <MdRefresh />
        </CounterButton>
      </div>
    </CounterContainer>
  );
}
