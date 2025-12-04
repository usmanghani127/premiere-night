import { RootNavigatorParamList } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, useColorScheme, View } from 'react-native';
import { Button } from 'react-native-paper';
import styled, { DefaultTheme } from 'styled-components';

const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Label>{t('HomeScreen.label')}</Label>
    </Container>
  );
};

const LandingScreen = () => {
  const { t } = useTranslation();
  const { navigate } =
    useNavigation<
      NativeStackNavigationProp<RootNavigatorParamList, 'Landing'>
    >();

  return (
    <Container>
      <Label>{t('LandingScreen.label')}</Label>
      <Button
        icon="coffee-outline"
        mode="contained"
        onPress={() => navigate('Home')}
      >
        {t('LandingScreen.navigateToHomeScreen')}
      </Button>
    </Container>
  );
};

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export const RootNavigator = () => {
  const { t } = useTranslation();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: isDarkMode ? 'white' : 'black',
      }}
    >
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{ headerTitle: t('LandingScreen.headerTitle') }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: t('HomeScreen.headerTitle') }}
      />
    </Stack.Navigator>
  );
};

const Container = styled(View)<{ theme: DefaultTheme }>(
  ({ theme: { layout = {} } = {} }) => ({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: layout.isDarkMode ? 'black' : 'white',
  }),
);

const Label = styled(Text)<{ theme: DefaultTheme }>(
  ({ theme: { layout = {} } = {} }) => ({
    fontSize: 22,
    fontWeight: 'bold',
    margin: 20,
    color: layout.isDarkMode ? 'white' : 'black',
  }),
);
