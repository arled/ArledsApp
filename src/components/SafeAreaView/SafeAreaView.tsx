import React, { FC } from 'react';
import { SafeAreaView as SAV } from 'react-native-safe-area-context';

import { styled } from '@app-root/theming';
interface PropSafeAreaViews {
  backgroundColor?: boolean;
}

const SafeAreaView: FC<PropSafeAreaViews> = ({ children, backgroundColor = false }) => {
  return (
    <SafeAreaViewContainer bgc={backgroundColor} edges={['top']}>
      {children}
    </SafeAreaViewContainer>
  );
};

const SafeAreaViewContainer = styled(SAV)<{ bgc?: boolean }>`
  ${({ theme, bgc }) => (bgc ? { backgroundColor: theme.colors.navigationBg } : null)};
`;

export { SafeAreaView };
