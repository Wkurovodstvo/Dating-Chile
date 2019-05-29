import ACTION from '../actions/actiontsTypes';
import {ROLES} from "../constants/constants";

const initialState = {
    isOverviewCompleted: false,
    gender: null,
    purpose: null,
    ageRange: null,
    region: null,
    nickName: null,
    email: null,
    password: null,
    education: null,
    children: null,
    commune: null,
    year: null,
    month: null,
    day: null,
    deviceId: null,
    role: ROLES.USER
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


