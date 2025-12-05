import {
  useLazyGetNowPlayingQuery,
  useLazyGetPopularQuery,
  useLazyGetTopRatedQuery,
  useLazyGetUpcomingQuery,
} from '@services/api/tmdb/spotlight';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MovieSection } from './MovieSection';

export const NowPlayingSection = () => {
  const { t } = useTranslation();
  const [trigger, { data, isFetching }] = useLazyGetNowPlayingQuery();
  const { results = [], page = 0, totalPages = 1 } = data || {};

  useEffect(() => {
    trigger(1, true);
  }, [trigger]);

  return (
    <MovieSection
      title={t('Spotlight.sections.nowPlaying')}
      movies={results}
      isLoading={isFetching}
      onEndReached={() => {
        if (results.length > 0 && page < totalPages && !isFetching) {
          trigger(page + 1);
        }
      }}
    />
  );
};

export const PopularSection = () => {
  const { t } = useTranslation();
  const [trigger, { data, isFetching }] = useLazyGetPopularQuery();
  const { results = [], page = 0, totalPages = 1 } = data || {};

  useEffect(() => {
    trigger(1, true);
  }, [trigger]);

  return (
    <MovieSection
      title={t('Spotlight.sections.popular')}
      movies={results}
      isLoading={isFetching}
      onEndReached={() => {
        if (results.length > 0 && page < totalPages && !isFetching) {
          trigger(page + 1);
        }
      }}
    />
  );
};

export const TopRatedSection = () => {
  const { t } = useTranslation();
  const [trigger, { data, isFetching }] = useLazyGetTopRatedQuery();
  const { results = [], page = 0, totalPages = 1 } = data || {};

  useEffect(() => {
    trigger(1, true);
  }, [trigger]);

  return (
    <MovieSection
      title={t('Spotlight.sections.topRated')}
      movies={results}
      isLoading={isFetching}
      onEndReached={() => {
        if (results.length > 0 && page < totalPages && !isFetching) {
          trigger(page + 1);
        }
      }}
    />
  );
};

export const UpcomingSection = () => {
  const { t } = useTranslation();
  const [trigger, { data, isFetching }] = useLazyGetUpcomingQuery();
  const { results = [], page = 0, totalPages = 1 } = data || {};

  useEffect(() => {
    trigger(1, true);
  }, [trigger]);

  return (
    <MovieSection
      title={t('Spotlight.sections.upcoming')}
      movies={results}
      isLoading={isFetching}
      onEndReached={() => {
        if (results.length > 0 && page < totalPages && !isFetching) {
          trigger(page + 1);
        }
      }}
    />
  );
};
