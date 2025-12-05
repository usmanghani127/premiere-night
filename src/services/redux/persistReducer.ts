import { combineReducers } from '@reduxjs/toolkit';
import { tmdbApi } from '../api/tmdb';

export const rootReducer = combineReducers({
  [tmdbApi.reducerPath]: tmdbApi.reducer,
});
