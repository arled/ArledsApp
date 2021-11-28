import React, { FunctionComponent } from 'react';
import { ThemeProvider as TP } from 'styled-components/native';
import { useColorScheme } from 'react-native';
import { ColorSchemas } from '../constants';
import createTheme from './themes';

const ThemeProvider: FunctionComponent = ({ children }) => {
  const deviceColorScheme = useColorScheme();
  const colorSchemaFinal: ColorSchemas = deviceColorScheme
    ? (deviceColorScheme as ColorSchemas)
    : ColorSchemas.LIGHT;

  return <TP theme={createTheme(colorSchemaFinal)}>{children}</TP>;
};

export { ThemeProvider };
