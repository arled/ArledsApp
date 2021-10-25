import React, { FC, useCallback, useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { ScrollView } from '../../components/ScrollView';
import { RouteStackParamList, Route } from '../../navigation';
import { getAllProducts } from '../../api/getProducts';
import { PrimaryButton } from '../../components/Buttons';
import { CartContext } from '../../store/CartContext';
import { ProductItem } from '../../components/ProductItem';

type ProductsScreenNavigationProp = StackNavigationProp<RouteStackParamList, Route.PRODUCTS>;

type ProductsProps = {
  navigation: ProductsScreenNavigationProp;
  route: RouteProp<RouteStackParamList, Route.PRODUCTS>;
};

const Products: FC<ProductsProps> = ({}) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [products, setProducts] = useState<Array<Product>>([]);

  // TODO: Move to a custom hook.
  const getProducts = useCallback(async () => {
    const data = await getAllProducts();
    setProducts(data);
  }, [getAllProducts, setProducts]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const onPress = (item: Product) => {
    const isProductInCart = cartItems.find((i: Product) => i.id === item.id);
    if (!isProductInCart) {
      setCartItems([...cartItems, item]);
    }
  };

  return (
    <ScrollView>
      {products && products.length > 0 ? (
        products?.map((product) => {
          return (
            <View key={product.id} style={styles.container}>
              <ProductItem product={product} />
              <PrimaryButton title="Add to basket" onPress={() => onPress(product)} />
            </View>
          );
        })
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  product: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#d7dbdd',
    borderRadius: 5,
  },

  bold: {
    fontSize: 17,
    fontWeight: '700',
  },
  normal: {
    fontSize: 17,
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
  imageContainer: { padding: 5 },
  infoContainer: { padding: 5, flex: 1 },
});

export { Products };
