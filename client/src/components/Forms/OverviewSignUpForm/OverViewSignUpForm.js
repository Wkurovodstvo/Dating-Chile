import React from "react";
import style from "./OverViewSignUpForm.module.scss";
import {reduxForm} from 'redux-form';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import ReduxInput from "../../Inputs/ReduxInput";
import {AGE_OPTIONS, GENDER_OPTIONS, PURPOSE_OPTIONS, REGION_OPTIONS} from "../../../constants/constants";

/**
 * Form for sign in into account
 */
const OverViewSignUpForm = props => {

    return (
        <div className={style.container}>
            <div className={style.row}>
                <h3>Create your profile for free</h3>
            </div>
            <div className={style.row}>
                <div className={style.col}>
                    <ReduxInput component={"select"} name={"gender"} values={GENDER_OPTIONS} label={"Gender"}/>
                </div>
                <div className={style.col}>
                    <ReduxInput component={"select"} name={"purpose"} values={PURPOSE_OPTIONS} label={"Purpose"}/>
                </div>
                <div className={style.col}>
                    <ReduxInput component={"select"} name={"age"} values={AGE_OPTIONS} label={"Age"}/>
                </div>
                <div className={style.col}>
                    <ReduxInput component={"select"} name={"region"} values={REGION_OPTIONS} label={"Location"}/>
                </div>
                <div className={style.col}>
                    <div className={style.submitButton}>Submit</div>
                </div>
                <div></div>
            </div>
            <div className={style.row}>
                <h4>Join us to meet people! Today we have over 900,000 registered users</h4>
            </div>


        </div>
    );

};

const mapStateToProps = (state) => {
    const fields = state.form.overViewForm;
    return {fields};
};

const mapDispatchToProps = (dispatch) => ({

});

OverViewSignUpForm.propTypes = {
    /** Sign in form fields */
    fields: PropTypes.object
};

export default reduxForm({
    form: 'overViewForm',
})(connect(mapStateToProps, mapDispatchToProps)(OverViewSignUpForm));