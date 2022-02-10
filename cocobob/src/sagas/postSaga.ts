import { call, put, takeLatest } from '@redux-saga/core/effects';
import * as postAPI from '../api/posts';
import {
  writePost,
  writePostSuccess,
  writePostFailure,
  readPost,
  readPostSuccess,
  readPostFailure,
  deletePost,
  deletePostSuccess,
  deletePostFailure,
  changePost,
  changePostSuccess,
  changePostFailure,
} from '../features/post/slices';
import { PostSuccessData } from '../types/types';

function* writePostSaga(action: ReturnType<typeof writePost>) {
  try {
    const response: PostSuccessData = yield call(
      postAPI.writePost,
      action.payload
    );
    yield put(writePostSuccess(response));
  } catch (e: any) {
    yield put(writePostFailure(e));
  }
}

function* readPostSaga(action: ReturnType<typeof readPost>) {
  try {
    const response: PostSuccessData = yield call(
      postAPI.readPost,
      action.payload
    );
    yield put(readPostSuccess(response));
  } catch (e: any) {
    yield put(readPostFailure(e));
  }
}

function* deletePostSaga(action: ReturnType<typeof deletePost>) {
  try {
    yield call(postAPI.deletePost, action.payload);
    yield put(deletePostSuccess());
  } catch (e: any) {
    yield put(deletePostFailure(e));
  }
}

function* changePostSaga(action: ReturnType<typeof changePost>) {
  try {
    const response: number = yield call(postAPI.changePost, action.payload);
    yield put(changePostSuccess(response));
  } catch (e: any) {
    yield put(changePostFailure(e));
  }
}

export function* postSaga() {
  yield takeLatest(writePost, writePostSaga);
  yield takeLatest(readPost, readPostSaga);
  yield takeLatest(deletePost, deletePostSaga);
  yield takeLatest(changePost, changePostSaga);
}
