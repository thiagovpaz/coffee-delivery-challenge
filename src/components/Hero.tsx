'use client';

import React, { ElementType } from 'react';
import Image from 'next/image';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { twMerge } from 'tailwind-merge';

interface HeroProps {}

type ItemType = {
  id: number;
  title: string;
  icon: ElementType;
  bg: string;
};

const Hero: React.FC<HeroProps> = () => {
  const items: ItemType[] = [
    {
      id: 1,
      title: 'Compra simples e segura',
      icon: ShoppingCart,
      bg: 'bg-yellow-900',
    },
    {
      id: 2,
      title: 'Embalagem mantém o café intacto',
      icon: Package,
      bg: 'bg-gray-700',
    },
    {
      id: 3,
      title: 'Entrega rápida e rastreada',
      icon: Timer,
      bg: 'bg-yellow-500',
    },
    {
      id: 4,
      title: 'O café chega fresquinho até você',
      icon: Coffee,
      bg: 'bg-purple-500',
    },
  ];

  return (
    <div className="flex px-2 py-10">
      <div className="flex flex-[0.65] flex-col max-md:flex-1">
        <h1 className="font-baloo_2 mb-4 text-5xl font-bold">
          Encontre o café perfeito
          <br className="max-sm:hidden" /> para qualquer hora do dia
        </h1>
        <p className="mb-4 text-[20px] text-gray-800">
          Com o Coffee Delivery você recebe seu café onde estiver, a{' '}
          <br className="max-sm:hidden" />
          qualquer hora
        </p>

        <ul className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
          {items.map(({ id, title, icon: Icon, bg }) => (
            <li key={id} className="flex items-center gap-3 text-gray-700">
              <div
                className={twMerge(
                  'flex h-8 w-8 items-center justify-center rounded-full',
                  bg,
                )}
              >
                <Icon className="fill-white" weight="fill" size={18} />
              </div>
              {title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-[0.45] items-center justify-end max-md:hidden">
        <Image
          src="/images/hero.png"
          width={475}
          height={360}
          alt="Hero"
          className="h-full max-w-[100%]"
        />
      </div>
    </div>
  );
};

export { Hero };
