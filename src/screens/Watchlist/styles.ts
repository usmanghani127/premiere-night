import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { DefaultTheme } from 'styled-components';

export const Container = styled(SafeAreaView).attrs({
  edges: ['top', 'left', 'right'],
})<{ theme: DefaultTheme }>(({ theme: { layout = {} } = {} }) => ({
  flex: 1,
  paddingHorizontal: 20,
  backgroundColor: layout.isDarkMode ? 'black' : 'white',
}));

export const Body = styled(View)<{ theme: DefaultTheme }>({
  flex: 1,
  paddingVertical: 20,
});
