import { call, put, takeLatest } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import * as postAPI from '../api/posts';
import {
  postsList,
  postsListSuccess,
  postsListFailure,
} from '../features/postsList/slices';

function* listSaga(action: ReturnType<typeof postsList>) {
  try {
    const response: AxiosResponse<any> = yield call(
      postAPI.postsList,
      action.payload
    );
    const { content } = response.data;
    yield put(postsListSuccess(content));
  } catch (e: any) {
    yield put(postsListFailure(e));
  }
}

export function* postsListSaga() {
  yield takeLatest(postsList, listSaga);
}
