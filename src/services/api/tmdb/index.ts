import { TMDB_API_ACCESS_TOKEN } from '@env';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
    prepareHeaders: headers => {
      headers.set('Authorization', `Bearer ${TMDB_API_ACCESS_TOKEN}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
});
