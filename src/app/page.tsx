import { Hero } from '@/components/Hero';
import { CardItem } from '@/components/CardItem';

import { CoffeeType } from '@/types/coffee';

export default function Home() {
  const items: CoffeeType[] = [
    {
      id: 1,
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      categories: ['tradicional'],
      image: '/images/coffee_1.png',
      price: 9.9,
    },
    {
      id: 2,
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      categories: ['tradicional'],
      image: '/images/coffee_2.png',
      price: 9.9,
    },
    {
      id: 3,
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      categories: ['tradicional'],
      image: '/images/coffee_3.png',
      price: 9.9,
    },
    {
      id: 4,
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      categories: ['tradicional', 'gelado'],
      image: '/images/coffee_4.png',
      price: 9.9,
    },
    {
      id: 5,
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      categories: ['tradicional', 'com leite'],
      image: '/images/coffee_5.png',
      price: 9.9,
    },
    {
      id: 6,
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      categories: ['tradicional', 'com leite'],
      image: '/images/coffee_6.png',
      price: 9.9,
    },
    {
      id: 7,
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      categories: ['tradicional', 'com leite'],
      image: '/images/coffee_7.png',
      price: 9.9,
    },
    {
      id: 8,
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      categories: ['tradicional', 'com leite'],
      image: '/images/coffee_8.png',
      price: 9.9,
    },
    {
      id: 9,
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      categories: ['tradicional', 'com leite'],
      image: '/images/coffee_9.png',
      price: 9.9,
    },
    {
      id: 10,
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      categories: ['especial', 'com leite'],
      image: '/images/coffee_10.png',
      price: 9.9,
    },
    {
      id: 11,
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      categories: ['especial', 'alcoólico', 'gelado'],
      image: '/images/coffee_11.png',
      price: 9.9,
    },
    {
      id: 12,
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      categories: ['especial'],
      image: '/images/coffee_12.png',
      price: 9.9,
    },
    {
      id: 13,
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      categories: ['especial'],
      image: '/images/coffee_13.png',
      price: 9.9,
    },
    {
      id: 14,
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      categories: ['especial', 'alcoólico'],
      image: '/images/coffee_14.png',
      price: 9.9,
    },
  ];

  return (
    <div>
      <Hero />

      <div className="flex flex-col px-2">
        <h2 className="font-baloo_2 text-3xl font-bold text-gray-800">
          Nossos Cafés
        </h2>

        <div className="mt-10 grid grid-cols-4 gap-10 max-md:grid-cols-1">
          {items.map((i) => (
            <CardItem key={i.id} coffee={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
