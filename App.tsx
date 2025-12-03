/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from './src/navigation/RootNavigator';
import { PaperTheme } from './src/theme/colors';

function App() {
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
