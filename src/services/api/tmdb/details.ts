import { toCamelCase } from '@common/Utils';
import { tmdbApi } from './index';

export const detailsApi = tmdbApi.injectEndpoints({
  endpoints: _builder => ({
    getMovieDetails: _builder.query<any, number>({
      query: movieId => `movie/${movieId}`,
      transformResponse: toCamelCase,
    }),
  }),
  overrideExisting: false,
});
