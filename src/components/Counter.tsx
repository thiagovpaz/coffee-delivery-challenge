import React from 'react';
import { Minus, Plus } from 'phosphor-react';

interface CounterProps {}

const Counter: React.FC<CounterProps> = () => {
  return (
    <div className="flex items-center justify-center gap-1 rounded-md bg-gray-400 p-2">
      <button className="flex w-4">
        <Minus className="text-purple-500" weight="fill" size={22} />
      </button>
      <div className="w-6 text-center">1</div>
      <button className="flex w-4">
        <Plus className="text-purple-500" weight="fill" size={22} />
      </button>
    </div>
  );
};

export { Counter };
