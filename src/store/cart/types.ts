import { IProduct } from '@/store/product/types';

export type ICartItem = {
  product: IProduct;
  qty: number;
};

export interface ICartState {
  loading: boolean;
  items: ICartItem[];
}
