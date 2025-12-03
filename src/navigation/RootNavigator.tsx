import { useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Button } from 'react-native-paper';
import { RootNavigatorParamList } from './types';

const HomeScreen = () => {
  const { t } = useTranslation();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={[styles.container, isDarkMode ? dark.container : light.container]}
    >
      <Text style={[styles.text, isDarkMode ? dark.text : light.text]}>
        {t('HomeScreen.label')}
      </Text>
    </View>
  );
};

const LandingScreen = () => {
  const { t } = useTranslation();
  const isDarkMode = useColorScheme() === 'dark';
  const { navigate } =
    useNavigation<
      NativeStackNavigationProp<RootNavigatorParamList, 'Landing'>
    >();

  return (
    <View
      style={[styles.container, isDarkMode ? dark.container : light.container]}
    >
      <Text style={[styles.text, isDarkMode ? dark.text : light.text]}>
        {t('LandingScreen.label')}
      </Text>
      <Button
        icon="coffee-outline"
        mode="contained"
        onPress={() => navigate('Home')}
      >
        {t('LandingScreen.navigateToHomeScreen')}
      </Button>
    </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 20,
  },
});

const light = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
  },
});

const dark = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
});
