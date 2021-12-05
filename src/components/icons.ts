import { FunctionComponent } from 'react';
import { SvgProps } from 'react-native-svg';
import { styled } from '../theming';

const toStyledIcon = (svg: FunctionComponent<SvgProps>) => {
  return styled(svg)<{ color?: string | null; width?: number | null; height?: number | null }>`
    color: ${({ theme, color }) => (color ? color : theme.colors.defaultIconFill)};
    ${({ width }) => (width ? `width: ${width}px;` : '')}
    ${({ height }) => (height ? `height: ${height}px;` : '')}
  `;
};

export const BackArrow = toStyledIcon(require('assets/icons/back_arrow.svg').default);
export const Cart = toStyledIcon(require('assets/icons/cart.svg').default);
