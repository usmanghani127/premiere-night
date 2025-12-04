import { Colors } from '@theme/colors';
import { TextInput } from 'react-native-paper';
import styled, { DefaultTheme } from 'styled-components';

export const StyledSearchBar = styled(TextInput).attrs({
  mode: 'flat',
  cursorColor: Colors.primary,
  placeholderTextColor: Colors.gray,
  underlineColor: Colors.transparent,
  activeUnderlineColor: Colors.transparent,
  selectionColor: Colors.primary,
  textColor: Colors.primary,
})<{ theme: DefaultTheme }>(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.layout.isDarkMode ? Colors.darkGray : Colors.lightGray,
  borderRadius: 10,
  height: 45,
}));
