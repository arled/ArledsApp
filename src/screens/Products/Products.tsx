import React, { FC, useEffect } from 'react';
import { RouteProp } from '@react-navigation/native';
import { ActivityIndicator, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Cart } from 'src/components/icons';
import { styled, useTheme } from 'src/theming';
import { useProducts } from 'src/hooks/useProducts';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'src/components/ScrollView';
import { ProductItem } from 'src/components/ProductItem';
import { setCartItem } from 'src/state/slices/cart/thunks';
import { RouteStackParamList, Route } from 'src/navigation';
import { getCartItems } from 'src/state/slices/cart/selectors';
import { NavigationHeader } from 'src/components/NavigationHeader';

type ProductsScreenNavigationProp = StackNavigationProp<RouteStackParamList, Route.PRODUCTS>;

type ProductsProps = {
  navigation: ProductsScreenNavigationProp;
};

const Products: FC<ProductsProps> = ({ navigation }) => {
  const { products, loadProducts } = useProducts();
  const { cartItems } = useSelector(getCartItems);
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    loadProducts();
  }, []);

  const onActionPress = (item: Product) => {
    dispatch(setCartItem(item));
  };

  return (
    <>
      <ScrollView
        header={
          <NavigationHeader
            onBackPress={() => navigation.goBack()}
            title="Products"
            rightItem={
              <Pressable onPress={() => navigation.navigate(Route.SHOPPING_CART)}>
                <ViewCart>
                  <IconCart />
                  <TextCart>{` (${cartItems?.length > 0 ? cartItems?.length : 0}) `}</TextCart>
                </ViewCart>
              </Pressable>
            }
          />
        }>
        <ViewContainer>
          {products && products.length !== 0 ? (
            products?.map((product, id) => (
              <ProductItem
                key={id}
                product={product}
                onActionPress={onActionPress}
                actionTitle="Add to cart"
                showDescription
              />
            ))
          ) : (
            <ViewActivityIndicator>
              <ActivityIndicator size={'large'} color={theme.colors.activityIndicator} />
            </ViewActivityIndicator>
          )}
        </ViewContainer>
      </ScrollView>
    </>
  );
};

const ViewContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ViewCart = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const TextCart = styled.Text`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
`;

const ViewActivityIndicator = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const IconCart = styled(Cart)`
  height: 22px;
  width: 22px;
`;

export { Products };
