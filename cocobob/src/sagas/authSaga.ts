import { call, put, takeLatest } from '@redux-saga/core/effects';
import * as authAPI from '../api/auth';
import {
  signUp,
  signUpSuccess,
  signUpFailure,
  login,
  loginSuccess,
  loginFailure,
} from '../features/auth/slices';

function* signUpSaga(action: ReturnType<typeof signUp>) {
  try {
    yield call(authAPI.signUp, action.payload);
    yield put(signUpSuccess(true));
  } catch (e: any) {
    yield put(signUpFailure(e));
  }
}

function* loginSaga(action: ReturnType<typeof login>) {
  try {
    yield call(authAPI.login, action.payload);
    yield put(loginSuccess(true));
  } catch (e: any) {
    yield put(loginFailure(e));
  }
}

export function* authSaga() {
  yield takeLatest(signUp, signUpSaga);
  yield takeLatest(login, loginSaga);
}
