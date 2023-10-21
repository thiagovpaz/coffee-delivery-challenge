import { createAsyncThunk } from '@reduxjs/toolkit';

import { IProduct } from '@/store/product/types';
import { api } from '@/lib/axios';

interface CheckProductParams {
  id: number;
  qty: number;
}

export const checkProductStockAction = createAsyncThunk(
  'product/check_stock',
  async ({ id, qty }: CheckProductParams, { rejectWithValue }) => {
    try {
      const response = await api.get<IProduct>(`/products/${id}`);

      const product = response.data;

      if (qty > product.qty) {
        return rejectWithValue('Quantidade indisponível');
      }

      return response.data;
    } catch (err: unknown) {
      return rejectWithValue(err);
    }
  },
);
