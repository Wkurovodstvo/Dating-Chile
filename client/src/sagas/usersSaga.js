import { put } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
//import {register, login} from '../api/rest/restContoller';

/*
export function* registerSaga({data}) {
    yield put({ type: ACTION.USER_REQUEST });
    try {
        const res = yield register(data);
        yield put({
            type: ACTION.USER_RESPONSE,
            token: res.data.token,
            user: res.data.user,
            authSuccess: res.data.authSuccess
        });
    }
    catch (e) {
        yield put({ type: ACTION.USER_ERROR, error: e.response ? e.response.data : e});
    }
}

export function* loginSaga({data}) {
    yield put({type: ACTION.USER_REQUEST});
    try {
        //const res = yield login(data);
        yield put({
            type: ACTION.USER_RESPONSE,
            token: res.data.token,
            user: res.data.user,
            authSuccess: res.data.authSuccess
        });
    } catch (e) {
        console.log(e);
        yield put({type: ACTION.USER_ERROR, error: e.response ? e.response.data : e});
    }
}


export function* logoutSaga({id}){
    yield put({type: ACTION.USER_RESPONSE,
        token: null,
        user: null,
        authSuccess: false
    });
}
*/
