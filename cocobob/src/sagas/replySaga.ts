import { call, put, takeLatest } from '@redux-saga/core/effects';
import * as replyAPI from '../api/reply';
import {
  writeReply,
  writeReplySuccess,
  writeReplyFailure,
  getReply,
  getReplySuccess,
  getReplyFailure,
} from '../features/reply/slices';
import { Reply } from '../types/types';

function* writeReplySaga(action: ReturnType<typeof writeReply>) {
  try {
    yield call(replyAPI.writeReply, action.payload);
    yield put(writeReplySuccess());
  } catch (e: any) {
    yield put(writeReplyFailure(e));
  }
}

function* getReplySaga(action: ReturnType<typeof getReply>) {
  try {
    const response: Reply[] = yield call(replyAPI.getReply, action.payload);
    yield put(getReplySuccess(response));
  } catch (e: any) {
    yield put(getReplyFailure(e));
  }
}

export function* replySaga() {
  yield takeLatest(writeReply, writeReplySaga);
  yield takeLatest(getReply, getReplySaga);
}
