import React, { FC } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { SafeAreaView } from '../../components/SafeAreaView';
import { ScrollView } from '../../components/ScrollView';
import { PrimaryButton } from '../../components/Buttons';
import { RouteStackParamList, Route } from '../../navigation';
import { styled } from '../../theming';

type HomeScreenNavigationProp = StackNavigationProp<RouteStackParamList, Route.HOME>;

type Props = {
  navigation: HomeScreenNavigationProp;
  route: RouteProp<RouteStackParamList, Route.HOME>;
};

const Home: FC<Props> = ({ navigation }) => (
  <>
    <SafeAreaView />
    <ScrollView
      footer={<PrimaryButton onPress={() => navigation.navigate(Route.PRODUCTS)} title="Start" />}>
      <ViewContainer>
        <TextWelcome>Welcome to</TextWelcome>
        <Text>Arled's App</Text>
      </ViewContainer>
    </ScrollView>
  </>
);

const ViewContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TextWelcome = styled.Text`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  color: ${({ theme }) => theme.colors.primary}; ;
`;

const Text = styled.Text`
  text-transform: uppercase;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
`;

export { Home };
