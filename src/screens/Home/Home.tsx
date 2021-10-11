import React, { FC } from 'react';
import { Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { ScrollView } from '../../components/ScrollView';
import { PrimaryButton } from '../../components/Buttons';
import { RouteStackParamList, Route } from '../../navigation';

type HomeScreenNavigationProp = StackNavigationProp<RouteStackParamList, Route.HOME>;

type Props = {
  navigation: HomeScreenNavigationProp;
  route: RouteProp<RouteStackParamList, Route.HOME>;
};

const Home: FC<Props> = ({ navigation }) => {
  return (
    <ScrollView
      footer={<PrimaryButton onPress={() => navigation.navigate(Route.PRODUCTS)} title="Start" />}>
      <Text style={styles.Text}>Welcome to Arled's eCommerce app.</Text>
      <Text style={styles.Text}>Tap start to continue.</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export { Home };
