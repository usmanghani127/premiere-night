import { BottomTabs } from '@navigation/BottomTabNavigator';
import { RootNavigatorParamList } from '@navigation/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useColorScheme } from 'react-native';

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
        name="BottomTabs"
        component={BottomTabs}
        options={{ headerTitle: t('LandingScreen.headerTitle') }}
      />
    </Stack.Navigator>
  );
};
