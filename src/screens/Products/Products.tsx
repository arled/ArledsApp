import React, { FC, useEffect, useContext } from 'react';
import { ActivityIndicator, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { ScrollView } from '../../components/ScrollView';
import { RouteStackParamList, Route } from '../../navigation';
import { useProducts } from '../../hooks/useProducts';
import { NavigationHeader } from '../../components/NavigationHeader';
import { CartContext } from '../../store/CartContext';
import { ProductItem } from '../../components/ProductItem';
import { styled, useTheme } from '../../theming';

type ProductsScreenNavigationProp = StackNavigationProp<RouteStackParamList, Route.PRODUCTS>;

type ProductsProps = {
  navigation: ProductsScreenNavigationProp;
  route: RouteProp<RouteStackParamList, Route.PRODUCTS>;
};

const Products: FC<ProductsProps> = ({ navigation }) => {
  const { products, loadProducts } = useProducts();
  const { cartItems, setCartItems } = useContext(CartContext);
  const theme = useTheme();

  useEffect(() => {
    loadProducts();
  }, []);

  const onActionPress = (item: Product) => {
    const isProductInCart = cartItems.find((i: Product) => i.id === item.id);
    if (!isProductInCart) {
      setCartItems([...cartItems, item]);
    }
  };

  return (
    <>
      {/* <SafeAreaView backgroundColor /> */}
      <ScrollView
        header={
          <NavigationHeader
            onBackPress={() => navigation.goBack()}
            title={'Products'}
            rightItem={
              <Pressable onPress={() => navigation.navigate(Route.SHOPPING_CART)}>
                <Text>{`Cart (${cartItems?.length > 0 ? cartItems?.length : 0}) `}</Text>
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
            <View>
              <ActivityIndicator color={theme.colors.activityIndicator} />
            </View>
          )}
        </ViewContainer>
      </ScrollView>
    </>
  );
};

const ViewContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.md}px;
`;

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export { Products };
