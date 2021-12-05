import React, { FC } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { ScrollView } from 'src/components/ScrollView';
import { RouteStackParamList, Route } from 'src/navigation';
import { ProductItem } from 'src/components/ProductItem';
import { NavigationHeader } from 'src/components/NavigationHeader';
import { getCartItems, getTotalPrice } from 'src/state/slices/cart/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from 'src/state/slices/cart/thunks';
import { styled } from 'src/theming';

type ShoppingCartScreenNavigationProp = StackNavigationProp<
  RouteStackParamList,
  Route.SHOPPING_CART
>;

type Props = {
  navigation: ShoppingCartScreenNavigationProp;
};

const ShoppingCart: FC<Props> = ({ navigation }) => {
  const { cartItems } = useSelector(getCartItems);
  const { totalPrice } = useSelector(getTotalPrice);
  const dispatch = useDispatch();

  const handleOnDelete = (item: Product) => {
    dispatch(removeCartItem(item));
  };

  return (
    <ScrollView
      header={
        <NavigationHeader
          onBackPress={() => navigation.goBack()}
          title="Cart"
          rightItem={`Total: £${totalPrice}`}
        />
      }>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item: Product, key: number) => (
          <ProductItem
            key={`${item.id}-${key}`}
            product={item}
            actionTitle="Remove"
            onActionPress={handleOnDelete}
          />
        ))
      ) : (
        <Text>Cart is empty</Text>
      )}
    </ScrollView>
  );
};

const Text = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.md}px;
`;

export { ShoppingCart };
