'use client';

import React from 'react';
import { MapPin, ShoppingCart } from 'phosphor-react';

import { Logo } from '@/components/Logo';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex items-center justify-between px-2 py-4">
      <Logo />

      <div className="flex items-center justify-center gap-3">
        <button className="flex h-10 min-w-[40px] items-center justify-center gap-1 rounded-md bg-purple-100 p-2 text-purple-900">
          <MapPin weight="fill" className="fill-purple-500" size={20} />
          <span className="max-md:hidden">Fortaleza, CE</span>
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-md bg-yellow-100 p-2">
          <ShoppingCart weight="fill" className="fill-yellow-900" size={20} />
        </button>
      </div>
    </header>
  );
};

export { Header };
