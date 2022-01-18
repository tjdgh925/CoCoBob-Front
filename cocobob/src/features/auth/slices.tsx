import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import {
  LoginData,
  LoginState,
  SignUpData,
  SignUpState,
} from '../../types/types';

const initialState: LoginState | SignUpState = {
  error: {
    loading: false,
    error: null,
  },
  auth: null,
  data: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginData>) {
      state.error.loading = true;
      state.data = action.payload;
    },
    loginSuccess(state, action: PayloadAction<boolean>) {
      state.error.loading = false;
      state.auth = action.payload;
    },
    loginFailure(state, action: PayloadAction<AxiosError>) {
      state.error.loading = false;
      state.error.error = action.payload;
      state.auth = false;
    },
    signUp(state, action: PayloadAction<SignUpData>) {
      state.error.loading = true;
      state.error.error = null;
      state.auth = null;
      state.data = action.payload;
    },
    signUpSuccess(state, action: PayloadAction<boolean>) {
      state.error.loading = false;
      state.error.error = null;
      state.auth = action.payload;
    },
    signUpFailure(state, action: PayloadAction<AxiosError>) {
      state.error.loading = false;
      state.error.error = action.payload;
      state.auth = false;
    },
    tempSetUser(state, action: PayloadAction<LoginData>) {
      state.error.loading = true;
      state.data = action.payload;
    },
    check(state) {
      state.error.loading = true;
    },
    checkSuccess(state, action: PayloadAction<boolean>) {
      state.error.loading = false;
      state.auth = action.payload;
    },
    checkFailure(state, action: PayloadAction<AxiosError>) {
      state.error.loading = false;
      state.error.error = action.payload;
      state.auth = false;
    },
    logout(state) {
      state.error.loading = false;
      state.auth = false;
    },
  },
});

export const {
  login,
  loginSuccess,
  loginFailure,
  signUp,
  signUpSuccess,
  signUpFailure,
  tempSetUser,
  check,
  checkSuccess,
  checkFailure,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
