/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useLocalization } from '@localization/useLocalization';
import { RootNavigator } from '@navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { PaperTheme } from '@theme/colors';
import { StatusBar, useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  useLocalization();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <PaperProvider theme={PaperTheme}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
