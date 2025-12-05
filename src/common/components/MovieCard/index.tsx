import { TMDB_IMAGE_BASE_URL } from '@common/constants';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { Movie } from '@services/api/tmdb/types';
import { Colors } from '@theme/colors';
import React from 'react';
import {
  Card,
  InfoContainer,
  PosterImage,
  Rating,
  RatingContainer,
  Title,
} from './styles';

export type MovieCardProps = {
  movie: Movie;
  onPress?: () => void;
};

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onPress }) => {
  const { posterPath = '', title = '', voteAverage = 0 } = movie;
  const posterUrl = `${TMDB_IMAGE_BASE_URL.w342}${posterPath}`;

  return (
    <Card onPress={onPress}>
      <PosterImage source={{ uri: posterUrl }} resizeMode="cover" />
      <InfoContainer>
        <Title numberOfLines={2}>{title}</Title>
        <RatingContainer>
          <MaterialDesignIcons name="star" size={15} color={Colors.primary} />
          <Rating> {voteAverage.toFixed(1)}</Rating>
        </RatingContainer>
      </InfoContainer>
    </Card>
  );
};
