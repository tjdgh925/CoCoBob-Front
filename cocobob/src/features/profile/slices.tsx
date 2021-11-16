import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type His = {
  name: string;
  rating: string;
};

export type ProfileState = {
  name: string;
  age: number;
  rating: string;
  intro: string;
  history: His[];
  isEditing: boolean;
};

const initialState: ProfileState = {
  name: '조지희',
  age: 22,
  rating: '⭐⭐⭐⭐⭐',
  intro: '한줄 소개를 입력하세요',
  history: [
    { name: 'abc', rating: '⭐⭐' },
    { name: 'def', rating: '⭐⭐⭐' },
    { name: 'ghi', rating: '⭐' },
  ],
  isEditing: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    editProfile(state, action: PayloadAction<string>) {
      state.intro = action.payload;
    },
    toggleEdit(state, action: PayloadAction<ProfileState>) {
      return { ...state, isEditing: !state.isEditing };
    },
  },
});

export const { editProfile, toggleEdit } = profileSlice.actions;
export default profileSlice.reducer;
