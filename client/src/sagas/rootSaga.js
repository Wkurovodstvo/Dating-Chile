import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {registrationSaga, loginSaga} from './usersSaga';


function* rootSaga() {
  yield takeLatest(ACTION.USER_REGISTRATION, registrationSaga);
  yield takeLatest(ACTION.USER_LOGIN, loginSaga);
}

export default rootSaga;
