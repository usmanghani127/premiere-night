import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer } from 'redux-persist';
import { CounterReducer } from './slices/counter';
import { CounterStateType } from './types';

const counterReducerConfig: PersistConfig<CounterStateType> = {
  key: 'counter',
  version: 1,
  storage: AsyncStorage,
  blacklist: [],
};

export const rootReducer = combineReducers({
  counter: persistReducer(counterReducerConfig, CounterReducer),
});
