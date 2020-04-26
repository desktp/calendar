import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import calendarReducer from '../features/calendar/calendarSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['calendarReducer']
}

const persistedReducer = persistReducer(persistConfig, combineReducers({ calendarReducer }));

export default () => {
  let store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
  });
  let persistor = persistStore(store)
  return { store, persistor }
}
