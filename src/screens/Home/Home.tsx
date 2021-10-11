import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
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

const Home: FC<Props> = ({ navigation }) => (
  <ScrollView
    footer={<PrimaryButton onPress={() => navigation.navigate(Route.PRODUCTS)} title="Start" />}>
    <Text style={styles.TextTitle}>Hello! 👋 Welcome to Arled's eCommerce app</Text>
    <Text style={styles.Text}>Press start to continue 👇</Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  Text: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'right',
  },
  TextTitle: {
    textAlign: 'right',
    fontWeight: '600',
    fontSize: 60,
    marginBottom: 20,
  },
});

export { Home };
