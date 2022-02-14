import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { Reply, ReplyInput, ReplyState } from '../../types/types';

const initialState: ReplyState = {
  error: {
    loading: false,
    error: null,
  },
  result: null,
};
export const replySlice = createSlice({
  name: 'reply',
  initialState,
  reducers: {
    writeReply(state, action: PayloadAction<ReplyInput>) {
      state.error.loading = true;
      state.error.error = null;
    },
    writeReplySuccess(state) {
      state.error.loading = false;
      state.error.error = null;
    },
    writeReplyFailure(state, action: PayloadAction<AxiosError>) {
      state.error.loading = false;
      state.error.error = action.payload;
    },
    getReply(state, action: PayloadAction<number>) {
      state.error.loading = true;
      state.error.error = null;
    },
    getReplySuccess(state, action: PayloadAction<Reply[]>) {
      state.error.loading = false;
      state.error.error = null;
      state.result = action.payload;
    },
    getReplyFailure(state, action: PayloadAction<AxiosError>) {
      state.error.loading = false;
      state.error.error = action.payload;
    },
  },
});

export const {
  writeReply,
  writeReplySuccess,
  writeReplyFailure,
  getReply,
  getReplySuccess,
  getReplyFailure,
} = replySlice.actions;

export default replySlice.reducer;
