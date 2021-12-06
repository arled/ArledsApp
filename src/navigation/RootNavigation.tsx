import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '@app-root/screens/Home';
import { Products } from '@app-root/screens/Products';
import { Cart } from '@app-root/screens/Cart';
import { Route } from '@app-root/navigation/route';

const RootStack = createStackNavigator();

const RootNavigation = () => {
  const { Navigator, Screen } = RootStack;

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={Route.HOME} component={Home} />
      <Screen name={Route.PRODUCTS} component={Products} />
      <Screen name={Route.SHOPPING_CART} component={Cart} />
    </Navigator>
  );
};

export { RootNavigation };
