import {configureStore} from '@reduxjs/toolkit';
import charactersReducer from './features/charactersSlice
export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});
