import React from 'react';
import type { Metadata } from 'next';
import { Baloo_2, Roboto } from 'next/font/google';

import './globals.css';

const roboto = Roboto({
  weight: ['100', '400'],
  subsets: ['latin'],
  variable: '--font-roboto',
});
const baloo = Baloo_2({
  weight: ['400', '600', '800'],
  subsets: ['latin'],
  variable: '--font-baloo_2',
});

export const metadata: Metadata = {
  title: 'Coffee Delivery',
  description:
    'Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body
        className={`${roboto.variable} ${baloo.variable} ${roboto.className}`}
      >
        {children}
      </body>
    </html>
  );
}
