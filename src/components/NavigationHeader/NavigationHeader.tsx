import React, { FC, ReactElement } from 'react';
import { Pressable } from 'react-native';

import { SafeAreaView } from '../../components/SafeAreaView';
import { styled } from '../../theming';
import { BACK_TITLE } from '../../constants';

interface NavigationHeaderProps {
  title?: string;
  onBackPress: () => void;
  rightItem?: ReactElement | string | undefined;
}

const NavigationHeader: FC<NavigationHeaderProps> = ({ title, onBackPress, rightItem }) => {
  return (
    <>
      <SafeAreaView backgroundColor />
      <ViewWrapper>
        {title ? (
          <ViewHeader>
            <TextTitle>{title}</TextTitle>
          </ViewHeader>
        ) : null}
        <ViewNavigationItems>
          {onBackPress ? (
            <Pressable onPress={onBackPress}>
              <Text>{BACK_TITLE}</Text>
            </Pressable>
          ) : null}
          {rightItem ? typeof rightItem === 'string' ? <Text>{rightItem}</Text> : rightItem : null}
        </ViewNavigationItems>
      </ViewWrapper>
    </>
  );
};

const Text = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  color: ${({ theme }) => theme.colors.textDark};
`;
const TextTitle = styled.Text`
  text-transform: uppercase;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
  color: ${({ theme }) => theme.colors.textDark};
`;
const ViewHeader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ViewNavigationItems = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ViewWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.navigationBg};
  padding: ${({ theme }) => `${theme.paddings.sm}px ${theme.paddings.md}px`};
  min-height: 120px;
`;

export { NavigationHeader };
