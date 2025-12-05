import { toCamelCase } from '@common/Utils';
import { tmdbApi } from './index';

export const spotlightApi = tmdbApi.injectEndpoints({
  endpoints: builder => ({
    getNowPlaying: builder.query<any, void>({
      query: () => 'movie/now_playing',
      transformResponse: toCamelCase,
    }),
    getPopular: builder.query<any, void>({
      query: () => 'movie/popular',
      transformResponse: toCamelCase,
    }),
    getTopRated: builder.query<any, void>({
      query: () => 'movie/top_rated',
      transformResponse: toCamelCase,
    }),
    getUpcoming: builder.query<any, void>({
      query: () => 'movie/upcoming',
      transformResponse: toCamelCase,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetNowPlayingQuery,
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetUpcomingQuery,
} = spotlightApi;
