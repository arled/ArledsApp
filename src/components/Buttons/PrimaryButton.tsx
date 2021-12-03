import React, { FC } from 'react';

import { styled } from '../../theming';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  testID?: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ title, onPress, testID }) => {
  return (
    <TouchableOpacity testID={testID} onPress={onPress}>
      <Text testID="button-title">{title}</Text>
    </TouchableOpacity>
  );
};

const TouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.paddings.sm}px;
  background-color: ${({ theme }) => theme.colors.buttonPrimaryBackground};
  border-radius: 5px;
`;

const Text = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-weight: 600;
`;
export { PrimaryButton };
