import { FunctionComponent } from 'react';
import { SvgProps } from 'react-native-svg';

import { styled } from '@app-root/theming';
import IconBackArrow from '@app-assets/icons/back_arrow.svg';
import IconCart from '@app-assets/icons/cart.svg';

const toStyledIcon = (svg: FunctionComponent<SvgProps>) => {
  return styled(svg)<{ color?: string | null; width?: number | null; height?: number | null }>`
    color: ${({ theme, color }) => (color ? color : theme.colors.defaultIconFill)};
    ${({ width }) => (width ? `width: ${width}px;` : '')}
    ${({ height }) => (height ? `height: ${height}px;` : '')}
  `;
};

export const BackArrow = toStyledIcon(IconBackArrow);
export const Cart = toStyledIcon(IconCart);
