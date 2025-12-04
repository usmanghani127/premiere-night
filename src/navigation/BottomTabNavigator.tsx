import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Spotlight } from '@screens/Spotlight';
import { SpotlightTabIcon } from '@screens/Spotlight/TabIcon';
import { Watchlist } from '@screens/Watchlist';
import { WatchlistTabIcon } from '@screens/Watchlist/TabIcon';
import { Colors } from '@theme/colors';
import { useTranslation } from 'react-i18next';
import { useColorScheme } from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  const { t } = useTranslation();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: isDarkMode ? Colors.white : Colors.black,
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen
        name="Spotlight"
        component={Spotlight}
        options={{
          tabBarLabel: t('Spotlight.tabBarLabel'),
          tabBarIcon: SpotlightTabIcon,
        }}
      />
      <Tab.Screen
        name="Watchlist"
        component={Watchlist}
        options={{
          tabBarLabel: t('Watchlist.tabBarLabel'),
          tabBarIcon: WatchlistTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};
