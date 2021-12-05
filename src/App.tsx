import React from 'react';
import { enableScreens } from 'react-native-screens';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { RootNavigation } from './navigation/RootNavigation';
import { ThemeProvider } from './theming/ThemeProvider';
import { store } from './state/store';

enableScreens();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export { App };
