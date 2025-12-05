import { MovieCard } from '@common/components/MovieCard';
import { AppNavigatorProps } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { detailsApi } from '@services/api/tmdb/details';
import React from 'react';

type WatchlistItemProps = {
  movieId: number;
};

export const WatchlistItem = ({ movieId }: WatchlistItemProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppNavigatorProps, 'Watchlist'>>();
  const { data: movie, isLoading } =
    detailsApi.useGetMovieDetailsQuery(movieId);

  if (isLoading || !movie) {
    return null;
  }

  return (
    <MovieCard
      movie={movie}
      onPress={() => navigation.navigate('MovieDetail', { movieId })}
      width="100%"
      useBackdrop
    />
  );
};
