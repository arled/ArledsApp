import { DefaultTheme } from 'styled-components/native';
import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
import { ColorSchemas } from '../../constants';

enum ThemePallet {
  WHITE = '#ffffff',
  BLACK = '#000000',

  GREY_0 = '#f8f9fa',
  GREY_1 = '#e9ecef',
  GREY_2 = '#dee2e6',
  GREY_3 = '#ced4da',
  GREY_4 = '#adb5bd',
  GREY_5 = '#6c757d',
  GREY_6 = '#495057',
  GREY_7 = '#343a40',
  GREY_8 = '#212529',
  GREY_9 = '#121212',

  MINT_0 = '#35db92',
  MINT_1 = '#26d789',
  MINT_2 = '#23c67e',
  MINT_4 = '#20b673',
  MINT_5 = '#1da569',
  MINT_6 = '#178454',

  CYAN_0 = '#A5F3FC',
  CYAN_1 = '#67E8F9',
  CYAN_2 = '#22D3EE',
  CYAN_3 = '#06B6D4',
  CYAN_4 = '#0891B2',

  BLUE = '#2563EB',
}

const defaultTheme = {
  colors: {
    navigationBg: ThemePallet.MINT_0,
    appBackground: ThemePallet.GREY_0,
    textDark: ThemePallet.GREY_9,
    textLight: ThemePallet.GREY_0,
    textSubtitle: ThemePallet.GREY_5,
    link: ThemePallet.BLUE,
    activityIndicator: ThemePallet.MINT_0,
    price: ThemePallet.MINT_6,
    primary: ThemePallet.MINT_6,
    buttonPrimaryBackground: ThemePallet.MINT_0,
    buttonSecondaryBackground: ThemePallet.GREY_2,
    border: ThemePallet.GREY_1,
  },

  fontSizes: {
    xs: 5,
    sm: 10,
    md: 14,
    lg: 20,
    xl: 24,
    xxl: 30,
  },
  paddings: {
    xs: 5,
    sm: 10,
    md: 14,
    lg: 20,
    xl: 24,
    xxl: 30,
  },
  margins: {
    xs: 5,
    sm: 10,
    md: 14,
    lg: 20,
    xl: 24,
    xxl: 30,
  },
};

const themes: {
  [ColorSchemas.LIGHT]?: any;
  [ColorSchemas.DARK]?: any;
} = {
  [ColorSchemas.LIGHT]: defaultTheme, // TODO: light theme file
  [ColorSchemas.DARK]: defaultTheme, // TODO: dark theme file
};

function generateTheme(themeMode: ColorSchemas): Theme {
  if (themes[themeMode]) {
    return merge(cloneDeep(defaultTheme), themes[ColorSchemas.LIGHT]);
  }
  return defaultTheme;
}

export type CustomTheme = typeof defaultTheme;
export interface Theme extends CustomTheme, DefaultTheme {}
export default generateTheme;
