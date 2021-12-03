import React, { FC } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { SafeAreaView } from '../../components/SafeAreaView';
import { ScrollView } from '../../components/ScrollView';
import { PrimaryButton } from '../../components/Buttons';
import { RouteStackParamList, Route } from '../../navigation';
import { styled } from '../../theming';

type Props = {
  navigation: StackNavigationProp<RouteStackParamList, Route.HOME>;
};

const Home: FC<Props> = ({ navigation }) => (
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
