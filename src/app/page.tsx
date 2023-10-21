'use client';

import { useEffect } from 'react';

import { Hero } from '@/components/Hero';
import { CardItem } from '@/components/CardItem';
import { CardItemShimmer } from '@/components/shimmer/CardItem';

import { useAppDispatch, useAppSelector } from '@/store';
import { getProductsAction } from '@/store/product/actions';
import { CounterProvider } from '@/hooks/counter';

export default function Home() {
  const dispatch = useAppDispatch();

  const { loading, products } = useAppSelector((state) => ({
    products: state.product.items,
    loading: state.product.loading,
  }));

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  return (
    <div>
      <Hero />

      <div className="flex flex-col px-2">
        <h2 className="font-baloo_2 text-3xl font-bold text-gray-800">
          Nossos Cafés
        </h2>
        <div className="mt-10 grid grid-cols-4 gap-10 max-md:grid-cols-1">
          {products.map((i) => (
            <CounterProvider key={i.id}>
              <CardItem coffee={i} />
            </CounterProvider>
          ))}

          {loading &&
            Array.from({ length: 8 }, (_, i) => i + 1).map((i) => (
              <div
                key={i}
                className="overflow-hidden rounded-bl-3xl rounded-br-md rounded-tl-md rounded-tr-3xl"
              >
                <CardItemShimmer />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
