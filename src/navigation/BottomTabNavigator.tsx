import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Colors } from '@theme/colors';
import { useTranslation } from 'react-i18next';
import { Text, useColorScheme, View } from 'react-native';
import { Button } from 'react-native-paper';
import styled, { DefaultTheme } from 'styled-components';
import { AppNavigatorProps } from './types';

const Tab = createNativeBottomTabNavigator();

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
    useNavigation<NativeStackNavigationProp<AppNavigatorProps, 'Landing'>>();

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

export const BottomTabs = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'transparent',
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: isDarkMode ? 'white' : 'black',
        tabBarActiveIndicatorEnabled: false,
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 14,
        },
      }}
    >
      <Tab.Screen name="Landing" component={LandingScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
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
