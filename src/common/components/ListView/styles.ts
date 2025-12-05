import { Colors } from '@theme/colors';
import { FlatList, View } from 'react-native';
import styled from 'styled-components';

export const StyledFlatList = styled(FlatList).attrs({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
})({
  flexGrow: 0,
});

export const ButtonContainer = styled(View)({
  position: 'absolute',
  bottom: 20,
  right: 20,
  backgroundColor: Colors.black,
  borderRadius: 30,
  zIndex: 1000,
  elevation: 5,
  shadowColor: Colors.black,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
});
