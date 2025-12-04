import { combineReducers } from '@reduxjs/toolkit';
import { MoviesReducer } from './movies';

export const rootReducer = combineReducers({
  movies: MoviesReducer,
});
