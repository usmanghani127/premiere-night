/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useLocalization } from '@localization/useLocalization';
import { RootNavigator } from '@navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { persistor, store } from '@services/redux';
import { PaperTheme } from '@theme/colors';
import { StatusBar, useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  useLocalization();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={PaperTheme}>
          <SafeAreaProvider>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </SafeAreaProvider>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
