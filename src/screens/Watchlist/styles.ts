import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { DefaultTheme } from 'styled-components';

export const Container = styled(SafeAreaView)<{ theme: DefaultTheme }>(
  ({ theme: { layout = {} } = {} }) => ({
    flex: 1,
    backgroundColor: layout.isDarkMode ? 'black' : 'white',
  }),
);

export const Body = styled(View)<{ theme: DefaultTheme }>({
  flex: 1,
  padding: 20,
  alignItems: 'center',
  justifyContent: 'center',
});

export const Label = styled(Text)<{ theme: DefaultTheme }>(
  ({ theme: { layout = {} } = {} }) => ({
    fontSize: 22,
    fontWeight: 'bold',
    margin: 20,
    color: layout.isDarkMode ? 'white' : 'black',
  }),
);
