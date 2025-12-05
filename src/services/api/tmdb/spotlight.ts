import { toCamelCase } from '@common/Utils';
import { tmdbApi } from './index';

export const spotlightApi = tmdbApi.injectEndpoints({
  endpoints: builder => ({
    getNowPlaying: builder.query<any, number | void>({
      query: (page = 1) => `movie/now_playing?page=${page}`,
      transformResponse: toCamelCase,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        const existingIds = new Set(
          currentCache.results.map((item: any) => item.id),
        );
        return {
          ...currentCache,
          ...newItems,
          results: [
            ...currentCache.results,
            ...newItems.results.filter(
              (item: any) => !existingIds.has(item.id),
            ),
          ],
          page: Math.max(currentCache.page, newItems.page),
        };
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getPopular: builder.query<any, number | void>({
      query: (page = 1) => `movie/popular?page=${page}`,
      transformResponse: toCamelCase,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        const existingIds = new Set(
          currentCache.results.map((item: any) => item.id),
        );
        return {
          ...currentCache,
          ...newItems,
          results: [
            ...currentCache.results,
            ...newItems.results.filter(
              (item: any) => !existingIds.has(item.id),
            ),
          ],
          page: Math.max(currentCache.page, newItems.page),
        };
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getTopRated: builder.query<any, number | void>({
      query: (page = 1) => `movie/top_rated?page=${page}`,
      transformResponse: toCamelCase,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        const existingIds = new Set(
          currentCache.results.map((item: any) => item.id),
        );
        return {
          ...currentCache,
          ...newItems,
          results: [
            ...currentCache.results,
            ...newItems.results.filter(
              (item: any) => !existingIds.has(item.id),
            ),
          ],
          page: Math.max(currentCache.page, newItems.page),
        };
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getUpcoming: builder.query<any, number | void>({
      query: (page = 1) => `movie/upcoming?page=${page}`,
      transformResponse: toCamelCase,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        const existingIds = new Set(
          currentCache.results.map((item: any) => item.id),
        );
        return {
          ...currentCache,
          ...newItems,
          results: [
            ...currentCache.results,
            ...newItems.results.filter(
              (item: any) => !existingIds.has(item.id),
            ),
          ],
          page: Math.max(currentCache.page, newItems.page),
        };
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useLazyGetNowPlayingQuery,
  useLazyGetPopularQuery,
  useLazyGetTopRatedQuery,
  useLazyGetUpcomingQuery,
} = spotlightApi;
