import React, { FC } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

import { ScrollView } from '@app-root/components/ScrollView';
import { RouteStackParamList, Route } from '@app-root/navigation';
import { ProductItem } from '@app-root/components/ProductItem';
import { NavigationHeader } from '@app-root/components/NavigationHeader';
import { getCartItems, getTotalPrice } from '@app-root/state/slices/cart/selectors';
import { removeCartItem } from '@app-root/state/slices/cart/thunks';
import { styled } from '@app-root/theming';

type CartScreenNavigationProp = StackNavigationProp<RouteStackParamList, Route.SHOPPING_CART>;

type CartProps = {
  navigation: CartScreenNavigationProp;
};

const Cart: FC<CartProps> = ({ navigation }) => {
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

export { Cart };
