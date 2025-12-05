import { TMDB_IMAGE_BASE_URL } from '@common/constants';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { RouteProp, useRoute } from '@react-navigation/native';
import { detailsApi } from '@services/api/tmdb/details';
import { Colors } from '@theme/colors';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RootNavigatorParamList } from '../../navigation/types';
import {
  Container,
  ContentScrollView,
  GenreContainer,
  GenreTag,
  GenreText,
  InfoContainer,
  MetaRow,
  MetaText,
  PosterImage,
  ProductionContainer,
  ProductionText,
  ProductionTitle,
  RatingContainer,
  RatingText,
  SectionTitle,
  Synopsis,
  Tagline,
  Title,
  WatchlistButton,
  WatchlistButtonText,
} from './styles';

type MovieDetailRouteProp = RouteProp<RootNavigatorParamList, 'MovieDetail'>;

export const MovieDetail = () => {
  const { t } = useTranslation();
  const route = useRoute<MovieDetailRouteProp>();
  const { movieId } = route.params;
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const {
    data: {
      posterPath = '',
      title = '',
      voteAverage = 0,
      releaseDate = '',
      overview = '',
      runtime = 0,
      genres = [],
      tagline = '',
      status = '',
      productionCompanies = [],
    } = {},
  } = detailsApi.useGetMovieDetailsQuery(movieId);

  const posterUrl = `${TMDB_IMAGE_BASE_URL.w780}${posterPath}`;

  const toggleWatchlist = () => {
    setIsInWatchlist(!isInWatchlist);
  };

  return (
    <Container>
      <ContentScrollView>
        <PosterImage source={{ uri: posterUrl }} resizeMode="cover" />
        <InfoContainer>
          <Title>{title}</Title>
          {!!tagline && <Tagline>"{tagline}"</Tagline>}

          <MetaRow>
            <RatingContainer>
              <MaterialDesignIcons name="star" size={16} color={Colors.white} />
              <RatingText>{voteAverage.toFixed(1)}</RatingText>
            </RatingContainer>
            <MetaText>{releaseDate?.split('-')?.[0]}</MetaText>
            {!!runtime && (
              <MetaText>
                {runtime} {t('MovieDetail.runtime')}
              </MetaText>
            )}
            {!!status && <MetaText>{status}</MetaText>}
          </MetaRow>

          {genres.length > 0 && (
            <GenreContainer>
              {genres.map((genre: any) => (
                <GenreTag key={genre.id}>
                  <GenreText>{genre.name}</GenreText>
                </GenreTag>
              ))}
            </GenreContainer>
          )}

          <SectionTitle>{t('MovieDetail.synopsis')}</SectionTitle>
          <Synopsis>{overview}</Synopsis>

          {productionCompanies.length > 0 && (
            <ProductionContainer>
              <ProductionTitle>Production</ProductionTitle>
              {productionCompanies.map((company: any) => (
                <ProductionText key={company.id}>{company.name}</ProductionText>
              ))}
            </ProductionContainer>
          )}

          <WatchlistButton onPress={toggleWatchlist} isAdded={isInWatchlist}>
            <WatchlistButtonText>
              {isInWatchlist
                ? t('MovieDetail.removeFromWatchlist')
                : t('MovieDetail.addToWatchlist')}
            </WatchlistButtonText>
          </WatchlistButton>
        </InfoContainer>
      </ContentScrollView>
    </Container>
  );
};
