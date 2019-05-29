import {put} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {registrateUser} from '../api/rest/restContoller';

export function* registrationSaga({fields}) {
    yield put({type: ACTION.USER_REQUEST});
    try{
        const {data} = yield registrateUser(fields);
        console.log(data);
    } catch (e) {
        yield put({type: ACTION.USER_RESPONSE});
    }
}

export function* loginSaga({fields}) {
    yield put({type: ACTION.USER_REQUEST});
    try{
        console.log(fields);
    } catch (e) {
        yield put({type: ACTION.USER_RESPONSE});
    }
}