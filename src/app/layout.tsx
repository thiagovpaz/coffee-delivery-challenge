import React from 'react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import './globals.css';

const roboto = Roboto({ weight: ['100', '400'], subsets: ['latin'] });

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
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
