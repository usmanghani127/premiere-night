import { createSlice } from '@reduxjs/toolkit';
import { WatchlistState } from './types';

const initialState: WatchlistState = {
  items: [],
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addToWatchlist: (state, action: { payload: number }) => {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
      }
    },
    removeFromWatchlist: (state, action: { payload: number }) => {
      state.items = state.items.filter(id => id !== action.payload);
    },
  },
});

export const WatchlistReducer = watchlistSlice.reducer;

export const WatchlistActions = watchlistSlice.actions;
