import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {Character} from '../../../types';
import {Api} from '../../../utils';

export interface CharacterState {
  error: string | undefined;
  loading: boolean;
  items: Character[];
}

const initialState: CharacterState = {
  error: '',
  loading: false,
  items: [],
};

export const getCharacters = createAsyncThunk(
  'characters/getCharacters',
  async () => {
    try {
      const response = await axios.get(Api.endpoint, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (err) {
      return err;
    }
  },
);

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    addCharacters: (state, action: PayloadAction<Character[]>) => {
      state.items = action.payload;
    },
    resetCharacters: state => {
      state.items = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCharacters.pending, state => {
        state.loading = true;
      })
      .addCase(
        getCharacters.fulfilled,
        (state: CharacterState, action: PayloadAction<Character[]>) => {
          state.loading = false;
          state.items = action.payload;
        },
      )
      .addCase(getCharacters.rejected, (state: CharacterState, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const {addCharacters, resetCharacters} = charactersSlice.actions;

export default charactersSlice.reducer;
