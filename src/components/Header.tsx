'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MapPin, ShoppingCart } from 'phosphor-react';

import { useAppSelector } from '@/store';

import { Logo } from '@/components/Logo';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { push } = useRouter();
  const itemsCount = useAppSelector((state) => state.cart.items.length);

  const handleCheckout = () => {
    push('/checkout');
  };

  return (
    <header className="flex items-center justify-between px-2 py-4">
      <Link href="/">
        <Logo />
      </Link>

      <div className="flex items-center justify-center gap-3">
        <button className="flex h-10 min-w-[40px] items-center justify-center gap-1 rounded-md bg-purple-100 p-2 text-purple-900">
          <MapPin weight="fill" className="fill-purple-500" size={20} />
          <span className="max-md:hidden">Fortaleza, CE</span>
        </button>
        <button
          onClick={handleCheckout}
          className="relative flex h-10 w-10 items-center justify-center rounded-md bg-yellow-100 p-2"
        >
          {itemsCount > 0 && (
            <div className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-900 text-xs text-white">
              {itemsCount}
            </div>
          )}
          <ShoppingCart weight="fill" className="fill-yellow-900" size={20} />
        </button>
      </div>
    </header>
  );
};

export { Header };
