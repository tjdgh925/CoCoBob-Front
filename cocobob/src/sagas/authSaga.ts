import { call, put, takeLatest } from '@redux-saga/core/effects';
import * as authAPI from '../lib/api/auth';
import { signUp, signUpSuccess, signUpFailure } from '../features/auth/slices';

function* signUpSaga(action: ReturnType<typeof signUp>) {
  try {
    yield call(authAPI.signUp, action.payload);
    yield put(signUpSuccess(true));
  } catch (e: any) {
    yield put(signUpFailure(e));
  }
}

export function* authSaga() {
  yield takeLatest(signUp, signUpSaga);
}
