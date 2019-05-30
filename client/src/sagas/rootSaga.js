import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {registrationSaga, loginSaga, getUserSaga} from './usersSaga';


function* rootSaga() {
  yield takeLatest(ACTION.USER_REGISTRATION, registrationSaga);
  yield takeLatest(ACTION.USER_LOGIN, loginSaga);
  yield takeLatest(ACTION.USER, getUserSaga);
}

export default rootSaga;
