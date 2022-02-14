import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import authReducer, { check } from './auth/slices';
import postReducer from './post/slices';
import resetReducer from './reset/slices';
import profileReducer from './profile/slices';
import postsListReducer from './postsList/slices';
import replyReducer from './reply/slices';
import { authSaga } from '../sagas/authSaga';
import { postsListSaga } from '../sagas/postListSaga';
import { postSaga } from '../sagas/postSaga';
import { replySaga } from '../sagas/replySaga';

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  profile: profileReducer,
  postsList: postsListReducer,
  reply: replyReducer,
  reset: resetReducer,
});

function* rootSaga() {
  yield all([authSaga(), postsListSaga(), postSaga(), replySaga()]);
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
