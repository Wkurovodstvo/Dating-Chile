import {put} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {registerUser, loginUser, getUser} from '../api/rest/restContoller';

export function* registrationSaga({fields}) {
    yield put({type: ACTION.USER_REQUEST});
    try {
        const {data: accessToken, refreshToken, user} = yield registerUser(fields);
        yield put({
            type: ACTION.USER_RESPONSE,
            accessToken: accessToken,
            refreshToken: refreshToken,
            user: user
        });
    } catch (e) {
        yield put({type: ACTION.USER_RESPONSE});
    }
}

export function* loginSaga({fields}) {
    yield put({type: ACTION.USER_REQUEST});
    try {
        const res = yield loginUser(fields);
        yield put({
            type: ACTION.USER_RESPONSE,
            token: res.data.token,
            user: res.data.user,
            authSuccess: res.data.authSuccess
        });
        console.log(res);
    } catch (e) {
        yield put({type: ACTION.USER_RESPONSE});
    }
}

export function* getUserSaga() {
    yield put({ type: ACTION.USER_REQUEST});
    try{
        const {data} = yield getUser();
        console.log(data);
        /*window.localStorage.setItem('accessToken', accessToken);
        window.localStorage.setItem('refreshToken', refreshToken);*/
        yield put({
            type: ACTION.USER_RESPONSE,
            /*accessToken,
            refreshToken,*/
            user: data
        });
    }
    catch (e) {
        yield put({ type: ACTION.USER_ERROR, error: e.response ? e.response.data : e});
    }
}