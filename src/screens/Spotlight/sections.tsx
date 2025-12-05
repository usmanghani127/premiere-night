import {
  useGetNowPlayingQuery,
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetUpcomingQuery,
} from '@services/api/tmdb/spotlight';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MovieSection } from './MovieSection';

export const NowPlayingSection = () => {
  const { t } = useTranslation();
  const { data: { results = [] } = {} } = useGetNowPlayingQuery();

  return (
    <MovieSection title={t('Spotlight.sections.nowPlaying')} movies={results} />
  );
};

export const PopularSection = () => {
  const { t } = useTranslation();
  const { data: { results = [] } = {} } = useGetPopularQuery();

  return (
    <MovieSection title={t('Spotlight.sections.popular')} movies={results} />
  );
};

export const TopRatedSection = () => {
  const { t } = useTranslation();
  const { data: { results = [] } = {} } = useGetTopRatedQuery();

  return (
    <MovieSection title={t('Spotlight.sections.topRated')} movies={results} />
  );
};

export const UpcomingSection = () => {
  const { t } = useTranslation();
  const { data: { results = [] } = {} } = useGetUpcomingQuery();

  return (
    <MovieSection title={t('Spotlight.sections.upcoming')} movies={results} />
  );
};
