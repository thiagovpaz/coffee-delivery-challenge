import { createSlice } from '@reduxjs/toolkit';

import { ICartState } from '@/store/cart/types';
import { checkProductStockAction } from '@/store/cart/actions';

const initialState: ICartState = {
  loading: false,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeItem: (state, { payload }) => {
      state.items = state.items.filter((i) => i.product.id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkProductStockAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkProductStockAction.fulfilled, (state, { payload }) => {
        state.loading = false;

        const product_id = payload.product.id;

        const productInCartIndex = state.items.findIndex(
          (item) => item.product.id === product_id,
        );

        if (productInCartIndex >= 0) {
          state.items[productInCartIndex].qty++;
        } else {
          state.items.push({
            product: payload.product,
            qty: payload.qty || 1,
          });
        }
      })
      .addCase(checkProductStockAction.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { removeItem } = cartSlice.actions;

export default cartSlice.reducer;
