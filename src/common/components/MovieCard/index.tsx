import { TMDB_IMAGE_BASE_URL } from '@common/constants';
import { useStore } from '@hooks/useStore';
import { WatchlistActions } from '@services/redux/watchlist';
import React from 'react';
import {
  ActionButton,
  BookmarkIcon,
  Card,
  InfoContainer,
  PosterImage,
  Rating,
  RatingContainer,
  StarIcon,
  Title,
} from './styles';

export type MovieCardProps = {
  movie: {
    id: number;
    title: string;
    posterPath?: string | null;
    backdropPath?: string | null;
    voteAverage: number;
  };
  onPress?: () => void;
  width?: number | string;
  useBackdrop?: boolean;
};

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  onPress,
  width,
  useBackdrop,
}) => {
  const {
    posterPath = '',
    backdropPath = '',
    title = '',
    voteAverage = 0,
  } = movie;
  const { data: watchlist, dispatch } = useStore(
    state => state.watchlist.items,
  );

  const isWatchlisted = watchlist.includes(movie.id);
  const imagePath = useBackdrop ? backdropPath : posterPath;
  const imageSize = useBackdrop
    ? TMDB_IMAGE_BASE_URL.w780
    : TMDB_IMAGE_BASE_URL.w342;
  const imageUrl = `${imageSize}${imagePath}`;

  const onPressActionButton = () =>
    dispatch(
      isWatchlisted
        ? WatchlistActions.removeFromWatchlist(movie.id)
        : WatchlistActions.addToWatchlist(movie.id),
    );

  return (
    <Card onPress={onPress} width={width}>
      <PosterImage source={{ uri: imageUrl }} resizeMode="cover" />
      <ActionButton onPress={onPressActionButton}>
        <BookmarkIcon name={isWatchlisted ? 'bookmark' : 'bookmark-outline'} />
      </ActionButton>
      <InfoContainer>
        <Title numberOfLines={2}>{title}</Title>
        <RatingContainer>
          <StarIcon name="star" />
          <Rating> {voteAverage.toFixed(1)}</Rating>
        </RatingContainer>
      </InfoContainer>
    </Card>
  );
};
