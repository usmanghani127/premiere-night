import { LoadingIndicator } from '@common/components/LoadingIndicator';
import { TMDB_IMAGE_BASE_URL } from '@common/constants';
import { useStore } from '@hooks/useStore';
import { RouteProp, useRoute } from '@react-navigation/native';
import { detailsApi } from '@services/api/tmdb/details';
import { WatchlistActions } from '@services/redux/watchlist';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Share } from 'react-native';
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
  ShareButton,
  ShareButtonText,
  StarIcon,
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
  const { data: watchlist, dispatch } = useStore(
    state => state.watchlist.items,
  );
  const { data: movieDetails, isLoading } =
    detailsApi.useGetMovieDetailsQuery(movieId);

  const isInWatchlist = watchlist.includes(movieId);

  const {
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
  } = movieDetails || {};

  const posterUrl = `${TMDB_IMAGE_BASE_URL.w780}${posterPath}`;

  const toggleWatchlist = () => {
    if (isInWatchlist) {
      dispatch(WatchlistActions.removeFromWatchlist(movieId));
    } else {
      dispatch(WatchlistActions.addToWatchlist(movieId));
    }
  };

  const handleShare = async () => {
    try {
      const deepLink = `mytheresa://movie/${movieId}`;
      await Share.share({
        message: `Check out "${title}" on Premiere Night!\n${deepLink}`,
        url: deepLink,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <Container>
      <ContentScrollView>
        <PosterImage source={{ uri: posterUrl }} resizeMode="cover" />
        <InfoContainer>
          <Title>{title}</Title>
          {!!tagline && <Tagline>"{tagline}"</Tagline>}

          <MetaRow>
            <RatingContainer>
              <StarIcon name="star" />
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

          <ShareButton onPress={handleShare}>
            <ShareButtonText>{t('MovieDetail.share')}</ShareButtonText>
          </ShareButton>
        </InfoContainer>
      </ContentScrollView>
    </Container>
  );
};
