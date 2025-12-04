import { DefaultTheme } from 'react-native-paper';

export const Colors = {
  primary: '#2CA9BC',
  secondary: '#FFFFFF',
};

export const PaperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...Colors,
  },
};
