import { Dispatch } from '@reduxjs/toolkit';
import { setCartItemAction, removeCartItemAction } from './slice';

const setCartItem = (product: Product) => async (dispatch: Dispatch) => {
  dispatch(setCartItemAction({ product }));
};

const removeCartItem = (product: Product) => async (dispatch: Dispatch) => {
  dispatch(removeCartItemAction({ product }));
};

export { setCartItem, removeCartItem };
