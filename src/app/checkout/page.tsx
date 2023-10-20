'use client';

import { ElementType } from 'react';
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

type PaymentFormType = {
  id: number;
  name: string;
  icon: ElementType;
};

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

  const items = [{ id: 1 }, { id: 2 }, { id: 3 }];

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
              {items.map((i) => (
                <div
                  key={i.id}
                  className="flex items-center gap-8 border border-b-gray-400 px-4 py-3"
                >
                  <div className="w-16">
                    <img src="/images/coffee_1.png" alt="" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-center justify-between">
                      <span className="mb-2">Expresso</span>

                      <span className="font-bold">R$ 9,90</span>
                    </div>
                    <div className="flex gap-4">
                      <Counter />
                      <button className="flex items-center justify-center gap-2 rounded-md bg-gray-400 px-2 text-sm uppercase">
                        <Trash size={18} className="text-purple-500" />
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 flex flex-col space-y-2">
              <div className="flex items-center justify-between text-gray-700">
                <div>Total de Itens</div>
                <div>R$ 29,70</div>
              </div>
              <div className="flex items-center justify-between text-gray-700">
                <div>Entrega</div>
                <div>R$ 29,70</div>
              </div>
              <div className="flex items-center justify-between text-2xl font-bold">
                <div>Total</div>
                <div>R$ 29,70</div>
              </div>
            </div>

            <button className="mt-3 w-full rounded-md bg-yellow-500 p-3 font-bold uppercase text-white">
              confirmar pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
