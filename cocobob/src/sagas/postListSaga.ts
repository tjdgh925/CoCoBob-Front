import { call, put, takeLatest } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import * as postAPI from '../api/posts';
import {
  postsList,
  postsListSuccess,
  postsListFailure,
} from '../features/postsList/slices';

import { PostSuccessData } from '../types/types';

function* listSaga(action: ReturnType<typeof postsList>) {
  try {
    const response: AxiosResponse<any> = yield call(postAPI.postsList);
    const { content } = response.data;
    console.log('%%', content);
    yield put(postsListSuccess(content));
  } catch (e: any) {
    yield put(postsListFailure(e));
  }
}

// function* postAllsaga(action: ReturnType<typeof postAll>) {
//   try {
//     const response: AxiosResponse<any> = yield call(postAPI.postAll);
//     yield put(postAllSuccess(response.data));
//     const { date } = response.headers;
//     localStorage.setItem('date', JSON.stringify(date));
//     console.log(date);
//   } catch (e: any) {
//     yield put(postAllFailure(e));
//   }
// }
export function* postsListSaga() {
  yield takeLatest(postsList, listSaga);
  // yield takeLatest(postAll, postAllsaga);
}
