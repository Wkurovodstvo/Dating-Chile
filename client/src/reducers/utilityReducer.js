import ACTION from '../actions/actiontsTypes';

const initialState = {
    signInBarStatus: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.UTILITY_TOGGLE_SIGN_IN: {
            return {
                ...state,
                signInBarStatus: !state.signInBarStatus
            }
        }
        default: {
            return state;
        }
    }
}


