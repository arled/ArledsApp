import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Products } from '../screens/Products';
import { ShoppingCart } from '../screens/ShoppingCart';
import { Route } from './route';

const RootStack = createStackNavigator();

const RootNavigation = () => {
  const { Navigator, Screen } = RootStack;

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={Route.HOME} component={Home} />
      <Screen name={Route.PRODUCTS} component={Products} />
      <Screen name={Route.SHOPPING_CART} component={ShoppingCart} />
    </Navigator>
  );
};

export { RootNavigation };
