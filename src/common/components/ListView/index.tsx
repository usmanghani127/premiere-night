import React from 'react';
import { FlatListProps } from 'react-native';
import { StyledFlatList } from './styles';

export type ListViewProps<T> = Omit<
  FlatListProps<T>,
  'showsVerticalScrollIndicator' | 'showsHorizontalScrollIndicator'
>;

export function ListView<T>(props: ListViewProps<T>) {
  return <StyledFlatList {...(props as any)} />;
}
