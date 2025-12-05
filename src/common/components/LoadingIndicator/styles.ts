import { Colors } from '@theme/colors';
import { View } from 'react-native';
import styled, { DefaultTheme } from 'styled-components';

export const Container = styled(View)<{ theme: DefaultTheme }>(
  ({ theme: { layout = {} } = {} }) => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: layout.isDarkMode ? Colors.black : Colors.white,
  }),
);
