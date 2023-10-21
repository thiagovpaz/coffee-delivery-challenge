import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '@/lib/axios';

export const getProductsAction = createAsyncThunk(
  'product/load',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/products');

      return response.data;
    } catch (err: unknown) {
      return rejectWithValue(err);
    }
  },
);
