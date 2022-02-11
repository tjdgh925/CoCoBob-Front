import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ResetPasswordState, VerifyInput } from '../../types/types';

const initialState: ResetPasswordState = {
  error: {
    loading: false,
    error: null,
  },
  verify: false,
  username: null,
  final: false,
};

export const resetSlice = createSlice({
  name: 'reset',
  initialState,
  reducers: {
    findPassword(state, action: PayloadAction<string>) {
      state.error.loading = true;
    },
    findPasswordSuccess(state, action: PayloadAction<string>) {
      state.error.loading = false;
      state.username = action.payload;
    },
    findPasswordFailure(state, action: PayloadAction<AxiosError>) {
      state.error.loading = false;
      state.error.error = action.payload;
    },
    verifyCode(state, action: PayloadAction<VerifyInput>) {
      state.error.loading = true;
    },
    verifyCodeSuccess(state) {
      state.error.loading = false;
      state.verify = true;
    },
    verifyCodeFailure(state, action: PayloadAction<AxiosError>) {
      state.error.loading = false;
      state.error.error = action.payload;
    },
    updatePassword(state, action: PayloadAction<VerifyInput>) {
      state.error.loading = true;
    },
    updatePasswordSuccess(state) {
      state.error.loading = false;
      state.final = true;
    },
    updatePasswordFailure(state, action: PayloadAction<AxiosError>) {
      state.error.loading = false;
      state.error.error = action.payload;
    },
  },
});

export const {
  findPassword,
  findPasswordSuccess,
  findPasswordFailure,
  verifyCode,
  verifyCodeSuccess,
  verifyCodeFailure,
  updatePassword,
  updatePasswordSuccess,
  updatePasswordFailure,
} = resetSlice.actions;

export default resetSlice.reducer;
