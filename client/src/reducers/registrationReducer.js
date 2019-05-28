import ACTION from '../actions/actiontsTypes';

const initialState = {
    isOverviewCompleted: false,
    gender: null,
    purpose: null,
    age: null,
    region: null,
    nickname: null,
    email: null,
    password: null,
    education: null,
    children: null,
    commune: null,
    year: null,
    month: null,
    day: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.USER_REGISTRATION_SET_OVERVIEW: {
            return {
                ...state,
                ...action.fields,
                isOverviewCompleted: true
            }
        }
        default: {
            return state;
        }
    }
}


