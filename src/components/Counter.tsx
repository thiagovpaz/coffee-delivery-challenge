import React, { useEffect } from 'react';
import { Minus, Plus } from 'phosphor-react';

import { useCounter } from '@/hooks/counter';

interface CounterProps {
  initialValue: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
  const { counter, incrementCounter, decrementCounter, initCounter } =
    useCounter();

  useEffect(() => {
    if (initialValue > 0) {
      initCounter(initialValue);
    }
  }, []);

  return (
    <div className="flex items-center justify-center gap-1 rounded-md bg-gray-400 p-2">
      <button className="flex w-4" onClick={decrementCounter}>
        <Minus className="text-purple-500" weight="fill" size={22} />
      </button>
      <div className="w-6 text-center">{counter}</div>
      <button className="flex w-4" onClick={incrementCounter}>
        <Plus className="text-purple-500" weight="fill" size={22} />
      </button>
    </div>
  );
};

export { Counter };
