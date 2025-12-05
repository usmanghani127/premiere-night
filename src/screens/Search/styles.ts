import { Colors } from '@theme/colors';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { DefaultTheme } from 'styled-components';

export const Container = styled(SafeAreaView)<{ theme: DefaultTheme }>(
  ({ theme: { layout = {} } = {} }) => ({
    flex: 1,
    backgroundColor: layout.isDarkMode ? 'black' : 'white',
    paddingHorizontal: 20,
  }),
);

export const Body = styled(View)<{ theme: DefaultTheme }>({
  flex: 1,
  paddingTop: 10,
});

export const Label = styled(Text)<{ theme: DefaultTheme }>(
  ({ theme: { layout = {} } = {} }) => ({
    fontSize: 22,
    fontWeight: 'bold',
    margin: 20,
    color: layout.isDarkMode ? 'white' : 'black',
  }),
);

export const HeaderRow = styled(View)<{ theme: DefaultTheme }>(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.layout.isDarkMode ? Colors.black : Colors.white,
  paddingVertical: 5,
}));

export const BackButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})({
  padding: 8,
  marginRight: 5,
});

export const CancelButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})({
  padding: 8,
  marginLeft: 5,
});

export const CancelText = styled(Text)({
  fontWeight: 'bold',
  color: Colors.primary,
  fontSize: 16,
});

export const MovieCardContainer = styled(View)({
  flex: 1,
  margin: 8,
});

export const LoadingContainer = styled(View)({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

export const NoResultsText = styled(Text)({
  color: Colors.gray,
  textAlign: 'center',
  marginTop: 20,
  fontSize: 16,
});

export const listContentContainerStyle = {
  paddingBottom: 20,
};
