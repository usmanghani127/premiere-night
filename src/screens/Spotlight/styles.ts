import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { Colors } from '@theme/colors';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { DefaultTheme } from 'styled-components';

export const Container = styled(SafeAreaView)<{ theme: DefaultTheme }>(
  ({ theme: { layout = {} } = {} }) => ({
    flex: 1,
    backgroundColor: layout.isDarkMode ? Colors.black : Colors.white,
    paddingHorizontal: 20,
  }),
);

export const ContentScrollView = styled(ScrollView)<{ theme: DefaultTheme }>(
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

export const SectionContainer = styled(View)({
  marginBottom: 50,
});

export const SectionHeaderRow = styled(View)({
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 12,
});

export const SectionTitle = styled(Text)<{ theme: DefaultTheme }>(
  ({ theme: { layout = {} } = {} }) => ({
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginRight: 10,
    color: layout.isDarkMode ? Colors.white : Colors.black,
  }),
);

export const HeaderRow = styled(View)<{ theme: DefaultTheme }>(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.layout.isDarkMode ? Colors.black : Colors.white,
  paddingVertical: 5,
}));

export const MovieTabIcon = styled(MaterialDesignIcons).attrs({})({});

export const WatchlistTabIcon = styled(MaterialDesignIcons).attrs({})({});
