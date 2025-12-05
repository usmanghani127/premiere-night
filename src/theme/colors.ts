import { DefaultTheme } from 'react-native-paper';

export const Colors = {
  primary: '#2CA9BC',
  secondary: '#FFFFFF',
  black: '#000000',
  white: '#FFFFFF',
  transparent: 'transparent',
  lightGray: '#F0F0F0',
  gray: '#888888',
  darkGray: '#333333',
  red: '#FF5252',
  overlay: `rgba(0, 0, 0, 0.5)`,
};

export const PaperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...Colors,
  },
};
