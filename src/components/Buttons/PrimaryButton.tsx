import React, { FC } from 'react';

import { styled } from '../../theming';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
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
