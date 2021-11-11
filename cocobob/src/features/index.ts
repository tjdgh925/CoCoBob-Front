import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from './auth/slices';
import { check, tempSetUser } from './auth/slices';
import { all } from 'redux-saga/effects';
import { loginData, signUpData } from '../types/types';

const tempData: loginData | signUpData = JSON.parse(
  localStorage.getItem('user') || '{}'
);

const rootReducer = combineReducers({
  auth: authReducer,
});

function* rootSaga() {}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

//새로고침 할 때마다 로그인 정보를 확인하는 메서드
function loadUser() {
  try {
    const user: any = localStorage.getItem('user');
    if (!user) return;
    store.dispatch(tempSetUser(tempData));
    store.dispatch(check());
  } catch (e) {
    console.log('error');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

export type RootState = ReturnType<typeof store.getState>;
export default store;
