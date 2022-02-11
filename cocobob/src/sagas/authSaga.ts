import { call, put, takeLatest } from '@redux-saga/core/effects';
import * as authAPI from '../api/auth';
import {
  signUp,
  signUpSuccess,
  signUpFailure,
  login,
  loginSuccess,
  loginFailure,
  checkSuccess,
  checkFailure,
  check,
} from '../features/auth/slices';
import {
  findPassword,
  findPasswordSuccess,
  findPasswordFailure,
  verifyCode,
  verifyCodeSuccess,
  verifyCodeFailure,
  updatePasswordSuccess,
  updatePasswordFailure,
  updatePassword,
} from '../features/reset/slices';

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

function* checkSaga() {
  try {
    const response: string = yield call(authAPI.check);
    yield put(checkSuccess(true));
    localStorage.setItem('username', response);
  } catch (e: any) {
    yield put(checkFailure(e));
    localStorage.removeItem('username');
  }
}

function* findPasswordSaga(action: ReturnType<typeof findPassword>) {
  try {
    yield call(authAPI.findPassword, action.payload);
    yield put(findPasswordSuccess(action.payload));
  } catch (e: any) {
    yield put(findPasswordFailure(e));
  }
}

function* verifyCodeSaga(action: ReturnType<typeof verifyCode>) {
  try {
    yield call(authAPI.verifyCode, action.payload);
    yield put(verifyCodeSuccess());
  } catch (e: any) {
    yield put(verifyCodeFailure(e));
  }
}

function* updatePasswordSaga(action: ReturnType<typeof updatePassword>) {
  try {
    yield call(authAPI.updatePassword, action.payload);
    yield put(updatePasswordSuccess());
  } catch (e: any) {
    yield put(updatePasswordFailure(e));
  }
}

export function* authSaga() {
  yield takeLatest(signUp, signUpSaga);
  yield takeLatest(login, loginSaga);
  yield takeLatest(check, checkSaga);
  yield takeLatest(findPassword, findPasswordSaga);
  yield takeLatest(verifyCode, verifyCodeSaga);
  yield takeLatest(updatePassword, updatePasswordSaga);
}
