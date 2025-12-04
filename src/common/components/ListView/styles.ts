import { FlatList } from 'react-native';
import styled from 'styled-components';

export const StyledFlatList = styled(FlatList).attrs({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
})({
  flexGrow: 0,
});
