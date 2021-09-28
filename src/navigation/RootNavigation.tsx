import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Products } from '../screens/Products';
import { ShoppingCart } from '../screens/ShoppingCart';
import { BACK_TITLE } from '../constants';
import { TextButton } from '../components/Buttons';
import { CartContext } from '../store/CartContext';
import { Route } from './route';

const RootStack = createStackNavigator();

const RootNavigation = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <RootStack.Navigator screenOptions={{ headerBackTitle: BACK_TITLE }}>
      <RootStack.Screen name={`Arled's App`} component={Home} />
      <RootStack.Screen
        name={Route.PRODUCTS}
        component={Products}
        options={({ navigation }) => ({
          headerRight: () => (
            <TextButton
              onPress={() => navigation.navigate(Route.SHOPPING_CART)}
              title={`Cart (${cartItems?.length > 0 ? cartItems?.length : 0}) `}
            />
          ),
        })}
      />
      <RootStack.Screen name={Route.SHOPPING_CART} component={ShoppingCart} />
    </RootStack.Navigator>
  );
};

export { RootNavigation };
