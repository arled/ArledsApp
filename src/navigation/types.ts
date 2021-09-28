import { Route } from './route';

type ShoppingCartParams = {
  id: number;
};

export type RouteStackParamList = {
  [Route.HOME]: undefined;
  [Route.PRODUCTS]: undefined;
  [Route.SHOPPING_CART]: ShoppingCartParams;
};
