'use client';

import { ElementType, useEffect } from 'react';
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from 'phosphor-react';

import { Input } from '@/components/Input';
import { Counter } from '@/components/Counter';
import { useAppDispatch, useAppSelector } from '@/store';
import { removeItem } from '@/store/cart/reducer';
import { CounterProvider } from '@/hooks/counter';

export default function Checkout() {
  const payment_form = [
    {
      id: 1,
      name: 'Cartão de crédito',
      icon: CreditCard,
    },
    {
      id: 2,
      name: 'cartão de débito',
      icon: Bank,
    },
    {
      id: 3,
      name: 'Dinheiro',
      icon: Money,
    },
  ];

  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  const calculateTotalCart = items.reduce(
    (partial, i) => partial + i.qty * i.product.price,
    0,
  );

  const handleRemoveFromCart = (product_id: number) => {
    dispatch(removeItem(product_id));
  };

  return (
    <div className="flex flex-1 gap-8 p-8 px-2">
      <div className="flex flex-[0.55] flex-col gap-3">
        <div className="py-4">
          <h3 className="mb-3 font-baloo_2 text-xl font-bold">
            Complete seu pedido
          </h3>

          <div className="rounded-md bg-gray-200 px-4 py-4">
            <h5 className="flex items-center gap-1 text-gray-800">
              <MapPin size={22} className="text-yellow-900" />
              Endereço de Entrega
            </h5>
            <p className="mb-3 px-6 text-gray-700">
              Informe o endereço onde deseja receber seu pedido
            </p>

            <div className="flex flex-col space-y-4">
              <Input placeholder="CEP" className="w-[250px]" />
              <Input placeholder="Rua" />

              <div className="flex flex-1 gap-3">
                <Input placeholder="Número" />
                <Input placeholder="Complemento" helpText="Opcional" />
              </div>

              <div className="flex flex-1 gap-3">
                <Input placeholder="Bairro" className="flex flex-1" />
                <Input placeholder="Cidade" className="flex flex-1" />
                <Input placeholder="UF" className="w-[110px] flex-[0.04]" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-md bg-gray-200 px-4 py-10">
          <h5 className="flex items-center gap-1 text-gray-800">
            <CurrencyDollar size={22} className="text-purple-500" />
            Pagamento
          </h5>
          <p className="mb-3 px-6 text-gray-700">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>

          <div className="flex gap-3">
            {payment_form.map(({ id, name, icon: Icon }) => (
              <button
                key={id}
                className="flex flex-1 items-center gap-2 rounded-md bg-gray-400 p-4 uppercase text-gray-700"
              >
                <Icon size={22} className="text-purple-500" />
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-[0.45] flex-col gap-3">
        <div className="py-4">
          <h3 className="mb-3 font-baloo_2 text-xl font-bold">
            Cafés selecionados
          </h3>

          <div className="rounded-bl-[45px] rounded-br-md rounded-tl-md rounded-tr-[45px] bg-gray-200 p-10">
            <div className="flex flex-col space-y-3">
              {items.length === 0 && <div>Carrinho Vazio</div>}

              {items.map((i) => (
                <CounterProvider key={i.product.id}>
                  <div className="flex items-center gap-8 border border-b-gray-400 px-4 py-3">
                    <div className="w-16">
                      <img src={`/images/coffee_${i.product.id}.png`} alt="" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-center justify-between">
                        <span className="mb-2">{i.product.name}</span>

                        <span className="font-bold">
                          {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          }).format(i.qty * i.product.price)}
                        </span>
                      </div>
                      <div className="flex gap-4">
                        <Counter initialValue={i.qty} />
                        <button
                          onClick={() => handleRemoveFromCart(i.product.id)}
                          className="flex items-center justify-center gap-2 rounded-md bg-gray-400 px-2 text-sm uppercase"
                        >
                          <Trash size={18} className="text-purple-500" />
                          Remover
                        </button>
                      </div>
                    </div>
                  </div>
                </CounterProvider>
              ))}
            </div>

            <div className="mt-3 flex flex-col space-y-2">
              <div className="flex items-center justify-between text-gray-700">
                <div>Total de Itens</div>
                <div>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(calculateTotalCart)}
                </div>
              </div>
              <div className="flex items-center justify-between text-gray-700">
                <div>Entrega</div>
                <div>R$ 0,00</div>
              </div>
              <div className="flex items-center justify-between text-2xl font-bold">
                <div>Total</div>
                <div>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(calculateTotalCart)}
                </div>
              </div>
            </div>

            <button
              disabled={items.length === 0}
              className="mt-3 w-full rounded-md bg-yellow-500 p-3 font-bold uppercase text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              confirmar pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
