import React, { FC } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { SafeAreaView } from '@app-root/components/SafeAreaView';
import { ScrollView } from '@app-root/components/ScrollView';
import { PrimaryButton } from '@app-root/components/Buttons';
import { RouteStackParamList, Route } from '@app-root/navigation';
import { styled } from '@app-root/theming';

type HomeScreenNavigationProp = StackNavigationProp<RouteStackParamList, Route.SHOPPING_CART>;

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

const Home: FC<HomeProps> = ({ navigation }) => (
  <>
    <SafeAreaView />
    <ScrollView
      footer={
        <PrimaryButton
          testID="start-button"
          onPress={() => navigation.navigate(Route.PRODUCTS)}
          title="Start"
        />
      }>
      <ViewContainer>
        <TextWelcome testID="greeting-text-1">Welcome to</TextWelcome>
        <Text testID="greeting-text-2">Arled's App</Text>
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
