import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { tmdbApi } from '../api/tmdb';
import { WatchlistReducer } from './watchlist';

const watchlistPersistConfig = {
  version: 1,
  key: 'watchlist',
  storage: AsyncStorage,
};

export const rootReducer = combineReducers({
  [tmdbApi.reducerPath]: tmdbApi.reducer,
  watchlist: persistReducer(watchlistPersistConfig, WatchlistReducer),
});
