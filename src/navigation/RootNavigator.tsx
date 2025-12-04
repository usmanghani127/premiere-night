import { BottomTabs } from '@navigation/BottomTabNavigator';
import { RootNavigatorParamList } from '@navigation/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Search } from '@screens/Search';
import React from 'react';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerBackButtonMenuEnabled: false,
        headerBackButtonDisplayMode: 'minimal',
        headerBackVisible: false,
      }}
    >
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};
