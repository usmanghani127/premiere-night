/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyledComponentsThemeType } from '@common/types/styledComponents';
import { useLayout } from '@hooks/useLayout';
import { useLocalization } from '@localization/useLocalization';
import { RootNavigator } from '@navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { persistor, store } from '@services/redux';
import { PaperTheme } from '@theme/colors';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

function App() {
  useLocalization();
  const layout = useLayout();

  const styledComponentsTheme: StyledComponentsThemeType = {
    layout,
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={styledComponentsTheme}>
          <PaperProvider theme={PaperTheme}>
            <SafeAreaProvider>
              <StatusBar
                barStyle={layout.isDarkMode ? 'light-content' : 'dark-content'}
              />
              <NavigationContainer>
                <RootNavigator />
              </NavigationContainer>
            </SafeAreaProvider>
          </PaperProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
