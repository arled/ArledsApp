import React, { FC } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface Props {
  product: Product;
}

const ProductItem: FC<Props> = ({ product }) => (
  <View style={styles.product}>
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{
          uri: product.img,
        }}
      />
    </View>

    <View style={styles.infoContainer}>
      <Text style={styles.normal}>{product.name} </Text>

      <Text style={styles.normal}>
        <Text style={styles.bold}>£</Text>
        {product.price}{' '}
      </Text>

      <Text style={styles.normal}>
        <Text style={styles.bold}>Color: </Text> {product.colour}
      </Text>
    </View>
  </View>
);

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

export { ProductItem };
