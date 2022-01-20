import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import authReducer, { check } from './auth/slices';
import postReducer from './post/slices';
import profileReducer from './profile/slices';
import postsListReducer from './postList/slices';
import { authSaga } from '../sagas/authSaga';

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  profile: profileReducer,
  postsList: postsListReducer,
});

function* rootSaga() {
  yield all([authSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

function loadUser() {
  try {
    store.dispatch(check());
  } catch (e) {
    console.log('error');
  }
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
loadUser();

export type RootState = ReturnType<typeof store.getState>;
export default store;
