import React from "react";
import style from "./SignInForm.module.scss";
import {reduxForm} from 'redux-form';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import ReduxInput from "../../Inputs/ReduxInput";
import {INPUT_ORIENTATION} from "../../../constants/constants";

/**
 * Form for sign in into account
 */
const SignInForm = props => {

    const {HORIZONTAL} = INPUT_ORIENTATION;

    return (
        <div className={style.container}>
            <h6>If you already have a profile</h6>
            <div className={style.row}>
                <div className={style.column}>
                    <ReduxInput type={"text"}
                                component={"input"}
                                placeholder={"Email"}
                                name={"email"}/>
                    <ReduxInput type={"checkbox"}
                                name={"remember"}
                                label={"Remember data"}
                                component={"input"}
                                orientation={HORIZONTAL}/>
                </div>
                <div className={style.column}>
                    <ReduxInput type={"text"}
                                component={"input"}
                                placeholder={"Password"}
                                name={"password"}/>
                    <p>Forgot password?</p>
                </div>
                <div className={style.submitButton}>
                    <button type="button">Sign in</button>
                </div>
            </div>
        </div>
    );

};

const mapStateToProps = (state) => {
    const fields = state.form.signInForm;
    return {fields};
};

const mapDispatchToProps = (dispatch) => ({

});

SignInForm.propTypes = {
    /** Sign in form fields */
    fields: PropTypes.object
};

export default reduxForm({
    form: 'signInForm',
})(connect(mapStateToProps, mapDispatchToProps)(SignInForm));