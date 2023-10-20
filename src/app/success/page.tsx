'use client';

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import Image from 'next/image';

export default function Success() {
  return (
    <div className="mt-10 flex">
      <div className="flex flex-1 flex-col">
        <h3 className="font-baloo_2 text-4xl font-bold text-yellow-900">
          Uhu! Pedido confirmado
        </h3>
        <p className="mb-4">
          Agora é só aguardar que logo o café chegará até você
        </p>

        <ul className="space-y-6">
          <li className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500">
              <MapPin weight="fill" className="fill-white" size={18} />
            </div>
            <div>
              <div>
                Entrega em
                <span className="ml-1 font-bold">
                  Rua João Daniel Martinelli, 102
                </span>
              </div>
              <div>Farrapos - Porto Alegre, RS</div>
            </div>
          </li>

          <li className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500">
              <Timer weight="fill" className="fill-white" size={18} />
            </div>
            <div>
              <div>Previsão de entrega</div>
              <div className="font-bold">20 min - 30 min</div>
            </div>
          </li>

          <li className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-900">
              <CurrencyDollar weight="fill" className="fill-white" size={18} />
            </div>
            <div>
              <div>Pagamento na entrega</div>
              <div className="font-bold">Cartão de Crédito</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Image
          src="/images/success.png"
          alt="Success"
          width={490}
          height={290}
        />
      </div>
    </div>
  );
}
