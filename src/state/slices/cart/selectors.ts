import { RootState } from 'src';

export const getCartItems = (state: RootState) => state.cart;

export const getTotalPrice = (state: RootState) => state.cart;
