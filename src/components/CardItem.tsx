'use client';

import React from 'react';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';

import { CoffeeType } from '@/types/coffee';
import { Counter } from '@/components/Counter';

interface CardItemProps {
  coffee: CoffeeType;
}

const CardItem: React.FC<CardItemProps> = ({ coffee }) => {
  const { image, categories, name, description, price } = coffee;

  return (
    <div className="relative flex flex-col rounded-bl-3xl rounded-br-md rounded-tl-md rounded-tr-3xl bg-gray-200 p-5">
      <div className="flex h-[90px] w-full items-center justify-center">
        <img src={image} alt="" className="absolute -top-[30px] w-[120px]" />
      </div>

      <div className="flex justify-center gap-2">
        {categories.map((category) => (
          <span
            key={category}
            className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-semibold uppercase text-yellow-900"
          >
            {category}
          </span>
        ))}
      </div>

      <div className="flex flex-col space-y-3">
        <h2 className="text-center font-baloo_2 text-2xl font-bold text-gray-800">
          {name}
        </h2>
        <p className="text-center font-roboto text-gray-600">{description}</p>
      </div>

      <div className="my-3 flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          R$
          <span className="font-baloo_2 text-3xl font-bold text-gray-700">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
              .format(price)
              .replace('R$', '')}
          </span>
        </div>

        <Counter />

        <button className="flex h-10 w-10 items-center justify-center rounded-md bg-purple-900">
          <ShoppingCart weight="fill" className="fill-white" size={22} />
        </button>
      </div>
    </div>
  );
};

export { CardItem };
