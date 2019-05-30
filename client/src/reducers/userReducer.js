import ACTION from '../actions/actiontsTypes';

const initialState = {
    isFetching: false,
    error: null,
    accessToken: null,
    refreshToken: null,
    user: null,
    //authSuccess: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.USER_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
                //authSuccess: false
            };
        }
        case ACTION.USER_RESPONSE: {
            return {
                ...state,
                ...action,
                //authSuccess: action.authSuccess,
                isFetching: false,
                error: null,
            };
        }
        case ACTION.USER_ERROR: {
            return {
                ...state,
                ...action,
                isFetching: false,
            };
        }
        case ACTION.USER_CLEAN: {
            return {
                ...state,
                error: null,
                isFetching: false
            };
        }
        case ACTION.USER_SET_ERROR: {
            return {
                ...state,
                ...action
            }
        }
        default: {
            return state;
        }
    }
}


