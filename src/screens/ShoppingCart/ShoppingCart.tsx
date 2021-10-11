import React, { FC, useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { ScrollView } from '../../components/ScrollView';
import { RouteStackParamList, Route } from '../../navigation';
import { CartContext } from '../../store/CartContext';
import { ProductItem } from '../../components/ProductItem';
import { PrimaryButton } from '../../components/Buttons';

type ShoppingCartScreenNavigationProp = StackNavigationProp<
  RouteStackParamList,
  Route.SHOPPING_CART
>;

type Props = {
  navigation: ShoppingCartScreenNavigationProp;
  route: RouteProp<RouteStackParamList, Route.SHOPPING_CART>;
};

const ShoppingCart: FC<Props> = ({}) => {
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
    <ScrollView footer={<Text style={styles.totalPrice}>Total: £{totalPrice.toFixed(2)}</Text>}>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item: Product, key: number) => {
          return (
            <View key={`${item.id}-${key}`} style={styles.container}>
              <ProductItem product={item} />
              <PrimaryButton title="Remove" onPress={() => handleOnDelete(item)} />
            </View>
          );
        })
      ) : (
        <Text>Your shopping cart is empty</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  totalPrice: {
    fontSize: 20,
  },
});

export { ShoppingCart };
