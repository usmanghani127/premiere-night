import React, { useRef, useState } from 'react';
import { FlatList, FlatListProps } from 'react-native';
import { ScrollToTopButton } from './ScrollToTopButton';
import { StyledFlatList } from './styles';

export type ListViewProps<T> = Omit<
  FlatListProps<T>,
  'showsVerticalScrollIndicator' | 'showsHorizontalScrollIndicator'
>;

export function ListView<T>(props: ListViewProps<T>) {
  const { horizontal } = props;
  const flatListRef = useRef<FlatList<T>>(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = (event: any) => {
    const offset = horizontal
      ? event.nativeEvent.contentOffset.x
      : event.nativeEvent.contentOffset.y;
    setShowScrollToTop(offset > 200);
    props.onScroll?.(event);
  };

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  };

  return (
    <>
      <StyledFlatList
        ref={flatListRef}
        {...(props as any)}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      <ScrollToTopButton
        visible={showScrollToTop}
        onPress={scrollToTop}
        horizontal={horizontal ?? false}
      />
    </>
  );
}
