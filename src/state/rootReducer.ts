import { combineReducers } from '@reduxjs/toolkit';

import { reducer as cart } from './slices/cart/slice';

const rootReducer = combineReducers({
  cart,
});

export type RootReducer = ReturnType<typeof rootReducer>;

export { rootReducer };
