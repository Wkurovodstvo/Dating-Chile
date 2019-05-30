import ACTION from './actiontsTypes';

export const registrationOverviewAction = (fields) => ({
    type: ACTION.USER_REGISTRATION_SET_OVERVIEW,
    fields
});

export const registrationAction = (fields) => ({
    type: ACTION.USER_REGISTRATION,
    fields
});

export const loginAction = (fields) => ({
    type: ACTION.USER_LOGIN,
    fields
});

export const toggleSignInAction = () => ({
    type: ACTION.UTILITY_TOGGLE_SIGN_IN
});

export const getUser = () => ({
    type: ACTION.USER
});

