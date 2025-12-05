import { toCamelCase } from '@common/Utils';
import { tmdbApi } from './index';
import { MovieResponse } from './types';

export const searchApi = tmdbApi.injectEndpoints({
  endpoints: builder => ({
    searchMovie: builder.query<MovieResponse, { query: string; page?: number }>(
      {
        query: ({ query, page = 1 }) =>
          `search/movie?query=${encodeURIComponent(query)}&page=${page}`,
        transformResponse: toCamelCase,
        serializeQueryArgs: ({ endpointName, queryArgs }) => {
          return `${endpointName}-${queryArgs.query}`;
        },
        merge: (currentCache, newItems) => {
          if (newItems.page === 1) {
            return newItems;
          }
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
          return (
            currentArg?.query !== previousArg?.query ||
            currentArg?.page !== previousArg?.page
          );
        },
      },
    ),
  }),
  overrideExisting: false,
});

export const { useLazySearchMovieQuery } = searchApi;
