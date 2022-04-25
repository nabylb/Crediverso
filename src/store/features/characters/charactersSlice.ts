import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Character} from '../../types';

export interface CharacterState {
  error: string;
  loading: boolean;
  characters: Character[];
}

const initialState: CharacterState = {
  error: '',
  loading: false,
  characters: [],
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    addCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addCharacters} = charactersSlice.actions;

export default charactersSlice.reducer;
