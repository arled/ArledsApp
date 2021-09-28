import React, { useState } from 'react';
import { enableScreens } from 'react-native-screens';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { CartContext } from './store/CartContext';

import { RootNavigation } from './navigation/RootNavigation';

enableScreens();

const App = () => {
  const [cartItems, setCartItems] = useState<Array<Product>>([]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </CartContext.Provider>
  );
};

export default App;
