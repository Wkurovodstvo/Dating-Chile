import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {registerSaga, loginSaga, logoutSaga} from './usersSaga';


function* rootSaga() {
  //yield takeLatest(ACTION.USER, userSaga);
}

export default rootSaga;
