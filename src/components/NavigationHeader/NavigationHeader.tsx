import React, { FC, ReactElement } from 'react';
import { Pressable } from 'react-native';

import { styled } from 'src/theming';
import { BackArrow } from 'src/components/icons';
import { SafeAreaView } from 'src/components/SafeAreaView';

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
              <IconBackArrow />
            </Pressable>
          ) : null}
          {rightItem ? typeof rightItem === 'string' ? <Text>{rightItem}</Text> : rightItem : null}
        </ViewNavigationItems>
      </ViewWrapper>
    </>
  );
};

const Text = styled.Text`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
`;
const TextTitle = styled.Text`
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
`;
const ViewHeader = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ViewNavigationItems = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const IconBackArrow = styled(BackArrow)`
  height: 22px;
  width: 22px;
`;

const ViewWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.navigationBg};
  padding: ${({ theme }) => `${theme.paddings.sm}px ${theme.paddings.md}px`};
  min-height: 120px;
`;

export { NavigationHeader };
