import React, { FC } from 'react';
import { PrimaryButton } from '../Buttons';
import { styled } from 'src/theming';

interface ProductItemProps {
  product: Product;
  onActionPress?: (product: Product) => void;
  actionTitle?: string;
  showDescription?: boolean;
}

const ProductItem: FC<ProductItemProps> = ({
  product,
  onActionPress,
  actionTitle,
  showDescription,
}) => {
  return (
    <ViewWrapper>
      <Image
        source={{
          uri: product.image,
        }}
      />
      <ViewContainer>
        <TextTitle>{product.title}</TextTitle>
        <TextPrice>£{product.price}</TextPrice>
        {showDescription ? <TextDescription>{product.description}</TextDescription> : null}
        {onActionPress && actionTitle ? (
          <PrimaryButtonContainer>
            <PrimaryButton title={actionTitle} onPress={() => onActionPress(product)} />
          </PrimaryButtonContainer>
        ) : null}
      </ViewContainer>
    </ViewWrapper>
  );
};

const ViewWrapper = styled.View`
  margin-bottom: 10px;
  border-radius: 5px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.paddings.sm}px;
  background-color: ${({ theme }) => theme.colors.appBackground};
  flex-direction: row;
  justify-content: flex-end;
`;

const ViewContainer = styled.View`
  flex: 1;
  margin-left: ${({ theme }) => theme.margins.sm}px;
`;

const Image = styled.Image`
  height: 80px;
  width: 80px;
  resize-mode: contain;
`;

const TextTitle = styled.Text`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textDark};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
`;

const TextPrice = styled.Text`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.price};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  margin-vertical: ${({ theme }) => theme.margins.sm}px;
`;

const TextDescription = styled.Text`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
`;

const PrimaryButtonContainer = styled.View`
  margin-top: ${({ theme }) => theme.margins.sm}px;
`;

export { ProductItem };
