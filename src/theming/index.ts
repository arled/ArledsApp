import baseStyled, {
  ReactNativeStyledInterface,
  useTheme as useThemeSC,
} from 'styled-components/native';
import { Theme } from './themes';

const styled = baseStyled as unknown as ReactNativeStyledInterface<Theme>;
const useTheme = useThemeSC as () => Theme;

export { styled, useTheme };
