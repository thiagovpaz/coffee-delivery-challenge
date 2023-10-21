import { createSlice } from '@reduxjs/toolkit';

import { IProductState } from '@/store/product/types';
import { getProductsAction } from '@/store/product/actions';

const initialState: IProductState = {
  loading: true,
  items: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductsAction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(getProductsAction.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
