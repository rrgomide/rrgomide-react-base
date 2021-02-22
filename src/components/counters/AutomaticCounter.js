import React from 'react';
import { useTranslation } from 'react-i18next';

import { MdRefresh, MdAdd, MdRemove } from 'react-icons/md';

import { useCounter } from '../../hooks/useCounter';

import CounterButton from './CounterButton';
import CounterContainer from './CounterContainer';
import CounterTitle from './CounterTitle';
import CounterValue from './CounterValue';

export default function AutomaticCounter({ title }) {
  const [incrementBy, setIncrementBy] = React.useState(1);
  const [decrementBy, setDecrementBy] = React.useState(1);
  const [runInterval, setRunInterval] = React.useState(100);
  const [isIncrementing, setIsIncrementing] = React.useState(false);
  const [isDecrementing, setIsDecrementing] = React.useState(false);

  const { t } = useTranslation();

  const {
    counter,
    doRestart,
    doAutoIncrement,
    doAutoDecrement,
    setBy,
    changeInterval,
  } = useCounter(0);

  function handleInputDecrement({ currentTarget }) {
    const newValue = parseInt(currentTarget.value);

    setDecrementBy(newValue);
    setBy(newValue);
  }

  function handleInputIncrement({ currentTarget }) {
    const newValue = parseInt(currentTarget.value);

    setIncrementBy(newValue);
    setBy(newValue);
  }

  function handleInterval({ currentTarget }) {
    const newInterval = parseInt(currentTarget.value);

    setRunInterval(newInterval);
    changeInterval(newInterval);
  }

  function handleDecrement() {
    setIsDecrementing(true);
    setIsIncrementing(false);
    doAutoDecrement(decrementBy, runInterval);
  }

  function handleIncrement() {
    setIsDecrementing(false);
    setIsIncrementing(true);
    doAutoIncrement(decrementBy, runInterval);
  }

  function handleRestart() {
    setIsDecrementing(false);
    setIsIncrementing(false);
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
              disabled={isIncrementing}
              onClick={handleIncrement}
              className="bg-blue-400 hover:bg-blue-300"
            >
              <MdAdd />
            </CounterButton>

            <input
              id="input-increment"
              type="number"
              value={incrementBy}
              onChange={handleInputIncrement}
              min={0}
              className="w-16 ml-1 h-8"
            />
          </div>

          <div className="flex flex-row">
            <CounterButton
              disabled={isDecrementing}
              onClick={handleDecrement}
              className="bg-red-400 hover:bg-red-300"
            >
              <MdRemove />
            </CounterButton>

            <input
              id="input-decrement"
              type="number"
              value={decrementBy}
              onChange={handleInputDecrement}
              min={0}
              className="w-16 ml-1 h-8"
            />
          </div>
        </div>

        <CounterButton
          onClick={handleRestart}
          className="ml-1 bg-green-300 hover:bg-green-200"
        >
          <MdRefresh />
        </CounterButton>
      </div>

      <label className="flex flex-row items-center justify-center mt-4">
        <span>{t('counter-interval')}</span>

        <input
          id="input-interval-increment"
          type="number"
          value={runInterval}
          onChange={handleInterval}
          min={4}
          className="w-32 ml-1 h-8"
        />
      </label>
    </CounterContainer>
  );
}
