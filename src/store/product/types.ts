export type IProduct = {
  id: number;
  name: string;
  description: string;
  categories: string[];
  image: string;
  price: number;
  qty: number;
};

export interface IProductState {
  loading: boolean;
  items: IProduct[];
}
