import {
  useDispatch as UD,
  useSelector as US,
  shallowEqual as SE,
  TypedUseSelectorHook,
} from 'react-redux';

import { store } from './store';

export type RootState = ReturnType<typeof store.getState>;

export const useSelector: TypedUseSelectorHook<RootState> = US;
export const useDispatch = UD;
export const shallowEqual = SE;
