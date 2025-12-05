import { ListView } from '@common/components/ListView';
import { MovieCard } from '@common/components/MovieCard';
import { useNavigation } from '@react-navigation/native';
import { useLazySearchMovieQuery } from '@services/api/tmdb/search';
import { Movie } from '@services/api/tmdb/types';
import { Colors } from '@theme/colors';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, FlatList, ListRenderItem } from 'react-native';
import { Header } from './Header';
import {
  Body,
  Container,
  listContentContainerStyle,
  LoadingContainer,
  MovieCardContainer,
  NoResultsText,
} from './styles';

export const Search = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<any>();
  const [query, setQuery] = useState('');
  const handler = useRef<NodeJS.Timeout>(null);
  const listViewRef = useRef<FlatList<Movie>>(null);
  const [trigger, { data, isFetching, isLoading }] = useLazySearchMovieQuery();

  const handleSearch = useCallback(
    (text: string) => {
      if (handler.current) {
        clearTimeout(handler.current);
      }

      handler.current = setTimeout(() => {
        const str = text.trim();
        setQuery(str);
        if (str) {
          listViewRef.current?.scrollToOffset({ offset: 0, animated: true });
          trigger({ query: str, page: 1 }, true);
        }
      }, 500);
    },
    [trigger],
  );

  useEffect(() => {
    return () => {
      handler.current && clearTimeout(handler.current);
    };
  }, []);

  const loadMore = () => {
    if (query && data && data.page < data.totalPages && !isFetching) {
      trigger({ query, page: data.page + 1 });
    }
  };

  const renderItem: ListRenderItem<Movie> = ({ item }) => (
    <MovieCardContainer>
      <MovieCard
        movie={item}
        width="100%"
        onPress={() => navigation.navigate('MovieDetail', { movieId: item.id })}
      />
    </MovieCardContainer>
  );

  return (
    <Container>
      <Header onSearch={handleSearch} />
      <Body>
        {isLoading && !data ? (
          <LoadingContainer>
            <ActivityIndicator size="large" color={Colors.primary} />
          </LoadingContainer>
        ) : (
          <ListView
            ref={listViewRef}
            data={query.length > 0 ? data?.results || [] : []}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            contentContainerStyle={listContentContainerStyle}
            ListEmptyComponent={
              query.length > 0 && !isFetching ? (
                <NoResultsText>{t('Search.noResults')}</NoResultsText>
              ) : null
            }
          />
        )}
      </Body>
    </Container>
  );
};
