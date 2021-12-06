import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
import { DefaultTheme } from 'styled-components/native';

import { ColorSchemas } from '@app-root/constants';

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

  RED_0 = '#fc5c65',
  RED_1 = '#eb3b5a',

  PURPLE_0 = '#a55eea',
  PURPLE_1 = '#8854d0',

  BLUE_DARK_0 = '#4b7bec',
  BLUE_DARK_1 = '#3867d6',

  BLUE_LIGHT_0 = '#45aaf2',
  BLUE_LIGHT_1 = '#2d98da',
}

const Sizes = {
  xs: 5,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24,
  xxl: 30,
};

const defaultTheme = {
  colorSchema: ColorSchemas.LIGHT,
  colors: {
    white: ThemePallet.WHITE,
    border: ThemePallet.GREY_1,
    price: ThemePallet.PURPLE_1,
    textDark: ThemePallet.GREY_9,
    link: ThemePallet.BLUE_DARK_1,
    primary: ThemePallet.PURPLE_1,
    textLight: ThemePallet.GREY_0,
    textSubtitle: ThemePallet.GREY_5,
    appBackground: ThemePallet.WHITE,
    navigationBg: ThemePallet.PURPLE_1,
    defaultIconFill: ThemePallet.WHITE,
    activityIndicator: ThemePallet.PURPLE_1,
    buttonPrimaryBackground: ThemePallet.PURPLE_1,
    buttonSecondaryBackground: ThemePallet.GREY_2,
  },
  fontSizes: Sizes,
  paddings: Sizes,
  margins: Sizes,
};

const themes: {
  [ColorSchemas.LIGHT]?: any;
  [ColorSchemas.DARK]?: any;
} = {
  [ColorSchemas.LIGHT]: defaultTheme, // TODO: light theme
  [ColorSchemas.DARK]: defaultTheme, // TODO: dark theme
};

const generateTheme = (themeMode: ColorSchemas): Theme => {
  if (themes[themeMode]) {
    return merge(cloneDeep(defaultTheme), themes[ColorSchemas.LIGHT]);
  }
  return defaultTheme;
};

export default generateTheme;
export type CustomTheme = typeof defaultTheme;
export interface Theme extends CustomTheme, DefaultTheme {}
