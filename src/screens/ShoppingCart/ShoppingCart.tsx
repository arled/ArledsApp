import React, { FC, useContext, useEffect, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { ScrollView } from '../../components/ScrollView';
import { RouteStackParamList, Route } from '../../navigation';
import { CartContext } from '../../store/CartContext';
import { ProductItem } from '../../components/ProductItem';
import { NavigationHeader } from '../../components/NavigationHeader';
import { styled } from '../../theming';

type ShoppingCartScreenNavigationProp = StackNavigationProp<
  RouteStackParamList,
  Route.SHOPPING_CART
>;

type Props = {
  navigation: ShoppingCartScreenNavigationProp;
  route: RouteProp<RouteStackParamList, Route.SHOPPING_CART>;
};

const ShoppingCart: FC<Props> = ({ navigation }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    setTotalPrice(0);
    for (const item of cartItems) {
      setTotalPrice((prev) => prev + item.price);
    }
  }, [cartItems, setTotalPrice]);

  const handleOnDelete = (item: Product) => {
    setCartItems(cartItems.filter((ci: Product) => ci.id != item.id));
  };

  return (
    <ScrollView
      header={
        <NavigationHeader
          onBackPress={() => navigation.goBack()}
          title={'Cart'}
          rightItem={<Text>Total: £{totalPrice.toFixed(2)}</Text>}
        />
      }>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item: Product, key: number) => (
          <ProductItem
            key={`${item.id}-${key}`}
            product={item}
            actionTitle={'Remove'}
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
