import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { updateTotalPrice } from '@app-root/lib/cart';

interface CarState {
  cartItems: Array<Product>;
  totalPrice: string;
}

const initialState: CarState = {
  cartItems: [],
  totalPrice: '0',
};

const cartSlice = createSlice({
  name: 'cart-items',
  initialState,
  reducers: {
    setCartItemAction(state: CarState, action: PayloadAction<{ product: Product }>) {
      const isProductInCart = state.cartItems.find(
        (i: Product) => i.id === action.payload.product.id,
      );

      if (!isProductInCart) {
        state.cartItems = [...state.cartItems, action.payload.product];
        state.totalPrice = updateTotalPrice(state.cartItems);
      }
    },
    removeCartItemAction(state: CarState, action: PayloadAction<{ product: Product }>) {
      state.cartItems = state.cartItems.filter((ci: Product) => ci.id != action.payload.product.id);
      state.totalPrice = updateTotalPrice(state.cartItems);
    },
  },
});

const { setCartItemAction, removeCartItemAction } = cartSlice.actions;
const reducer = cartSlice.reducer;

export { setCartItemAction, removeCartItemAction, reducer };
