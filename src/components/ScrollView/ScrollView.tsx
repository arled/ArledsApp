import React, { FC, ReactElement } from 'react';

import { styled } from 'src/theming';
interface ScrollViewProps {
  header?: ReactElement;
  footer?: ReactElement;
}

const ScrollView: FC<ScrollViewProps> = ({ children, header, footer }) => {
  return (
    <>
      {header ? header : null}
      <SV contentContainerStyle={{ flexGrow: 1 }} contentInsetAdjustmentBehavior="automatic">
        <ViewContentWrapper>{children}</ViewContentWrapper>
      </SV>
      {footer ? <ViewFooterWrapper>{footer}</ViewFooterWrapper> : null}
    </>
  );
};

const SV = styled.ScrollView`
  flex: 1;
`;

const ViewContentWrapper = styled.View`
  margin: ${({ theme }) => theme.paddings.md}px;
  flex: 1;
`;

const ViewFooterWrapper = styled.View`
  justify-content: center;
  margin: ${({ theme }) =>
    `${theme.paddings.lg}px ${theme.paddings.lg}px ${theme.paddings.xxl}px ${theme.paddings.lg}px`};
`;

export { ScrollView };
