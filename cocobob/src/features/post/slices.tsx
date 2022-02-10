import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import {
  PostChangeData,
  PostInputData,
  PostState,
  PostSuccessData,
} from '../../types/types';

const initialData: PostInputData = {
  title: '',
  contents: '',
  tag: '',
  // deadline: '',
};
const initialState: PostState = {
  error: {
    loading: false,
    error: null,
  },
  change: -1,
  data: initialData,
  success: null,
};
export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    initialize(state) {
      state = initialState;
    },
    updatePost(state, action: PayloadAction<PostInputData>) {
      state.data = action.payload;
    },
    writePost(state, action: PayloadAction<PostInputData>) {
      state.error.loading = true;
      state.error.error = null;
      state.data = action.payload;
    },
    writePostSuccess(state, action: PayloadAction<PostSuccessData>) {
      state.error.loading = false;
      state.error.error = null;
      state.success = action.payload;
    },
    writePostFailure(state, action: PayloadAction<AxiosError>) {
      state.error.loading = false;
      state.error.error = action.payload;
    },
    changePost(state, action: PayloadAction<PostChangeData>) {
      state.error.loading = true;
      state.error.error = null;
      state.data = action.payload;
    },
    changePostSuccess(state, action: PayloadAction<number>) {
      state.error.loading = false;
      state.error.error = null;
      state.change = action.payload;
    },
    changePostFailure(state, action: PayloadAction<AxiosError>) {
      state.error.loading = false;
      state.error.error = action.payload;
    },
    readPost(state, action: PayloadAction<number>) {
      state.error.loading = true;
      state.error.error = null;
      state.success = null;
    },
    readPostSuccess(state, action: PayloadAction<PostSuccessData>) {
      state.error.loading = false;
      state.error.error = null;
      state.success = action.payload;
    },
    readPostFailure(state, action: PayloadAction<AxiosError>) {
      state.error.loading = false;
      state.error.error = action.payload;
    },
    deletePost(state, action: PayloadAction<number>) {
      state.error.loading = true;
      state.error.error = null;
      state.success = null;
    },
    deletePostSuccess(state) {
      state.error.loading = false;
      state.error.error = null;
    },
    deletePostFailure(state, action: PayloadAction<AxiosError>) {
      state.error.loading = false;
      state.error.error = action.payload;
    },
    unloadPost(state) {
      state = initialState;
    },
  },
});

export const {
  initialize,
  updatePost,
  writePost,
  writePostSuccess,
  writePostFailure,
  changePost,
  changePostSuccess,
  changePostFailure,
  readPost,
  readPostSuccess,
  readPostFailure,
  deletePost,
  deletePostSuccess,
  deletePostFailure,
  unloadPost,
} = postSlice.actions;

export default postSlice.reducer;
