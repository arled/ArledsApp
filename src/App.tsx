import React, { useState } from 'react';
import { enableScreens } from 'react-native-screens';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { CartContext } from './store/CartContext';
import { RootNavigation } from './navigation/RootNavigation';
import { ThemeProvider } from './theming/ThemeProvider';

enableScreens();

const App = () => {
  const [cartItems, setCartItems] = useState<Array<Product>>([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <ThemeProvider>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </CartContext.Provider>
  );
};

export default App;
