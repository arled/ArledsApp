import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';

import { RootNavigation } from '@app-root/navigation/RootNavigation';
import { ThemeProvider } from '@app-root/theming/ThemeProvider';
import { store } from '@app-root/state/store';

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
