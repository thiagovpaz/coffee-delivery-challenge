'use client';

import React from 'react';
import { ShoppingCart } from 'phosphor-react';

import { IProduct } from '@/store/product/types';
import { Counter } from '@/components/Counter';
import { useAppDispatch, useAppSelector } from '@/store';
import { checkProductStockAction } from '@/store/cart/actions';

interface CardItemProps {
  coffee: IProduct;
}

const CardItem: React.FC<CardItemProps> = ({ coffee }) => {
  const { id, image, categories, name, description, price } = coffee;

  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.cart.loading);

  const handleAddToCart = async (id: number, qty: number) => {
    dispatch(checkProductStockAction({ id, qty }));
  };

  return (
    <div className="relative flex h-fit flex-col rounded-bl-3xl rounded-br-md rounded-tl-md rounded-tr-3xl bg-gray-200 p-5">
      <div className="flex h-[90px] w-full items-center justify-center">
        <img
          src={`/images/coffee_${coffee.id}.png`}
          alt=""
          className="absolute -top-[30px] w-[120px]"
        />
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

        <button
          disabled={loading}
          onClick={() => handleAddToCart(id, 1)}
          className="flex h-10 w-10 items-center justify-center rounded-md bg-purple-900 disabled:bg-gray-500"
        >
          <ShoppingCart weight="fill" className="fill-white" size={22} />
        </button>
      </div>
    </div>
  );
};

export { CardItem };
