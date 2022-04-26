import {configureStore} from '@reduxjs/toolkit';
import charactersReducer from './features/characters/charactersSlice';

const createDebugger = require('redux-flipper').default;

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
  middleware: getDefaultMiddleware =>
    __DEV__
      ? getDefaultMiddleware().concat(createDebugger())
      : getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export {default as charactersSlice} from './features/characters/charactersSlice';
export {
  addCharacters,
  getCharacters,
} from './features/characters/charactersSlice';
