import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { FlatList, FlatListProps } from 'react-native';
import { ScrollToTopButton } from './ScrollToTopButton';
import { StyledFlatList } from './styles';

export type ListViewProps<T> = Omit<
  FlatListProps<T>,
  'showsVerticalScrollIndicator' | 'showsHorizontalScrollIndicator'
>;

export const ListView = forwardRef(
  <T,>(props: ListViewProps<T>, ref: React.Ref<FlatList<T>>) => {
    const { horizontal } = props;
    const flatListRef = useRef<FlatList<T>>(null);
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useImperativeHandle(ref, () => flatListRef.current as FlatList<T>);

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
  },
) as <T>(
  props: ListViewProps<T> & { ref?: React.Ref<FlatList<T>> },
) => React.ReactElement;
