import React from "react";
import OverViewSignUpForm from "../OverviewSignUpForm/OverViewSignUpForm";
import UserDataSignUpForm from "../UserDataSignUpForm/UserDataSignUpForm";
import {connect} from "react-redux";

/**
 * Form for registration steps managing
 */
const SignUpForm = props => {

    //return props.isOverviewCompleted ? <UserDataSignUpForm/> : <OverViewSignUpForm/>
    return <UserDataSignUpForm/>

};

const mapStateToProps = state => {
    const {isOverviewCompleted} = state.registrationReducer;
    return {isOverviewCompleted};
};

export default connect(mapStateToProps, null)(SignUpForm);

