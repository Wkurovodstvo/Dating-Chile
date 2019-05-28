import React, {useEffect} from "react";
import style from "./UserDataSignUpFrom.module.scss";
import {reduxForm} from 'redux-form';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import ReduxInput from "../../Inputs/ReduxInput";
import {registerOverviewAction} from "../../../actions/actionCreator";
import {REGION_OPTIONS, EDUCATION_OPTIONS, COMMUNE_OPTIONS,
    INPUT_ORIENTATION, CHILDREN_OPTIONS, INPUT_SIZE, MONTH_OPTIONS} from "../../../constants/constants";
import registrationValidator from "../../../utils/schemas/yupRegistrationValidator";
import {DateGenerator} from "../../../utils/DateGenerator";

/**
 * Validation scheme fields for redux-form
 */
export const schemeFields = Object.keys(registrationValidator.fields);

/**
 * Form for sign in into account
 */
const UserDataSignUpForm = props => {

    useEffect(() => {
        const {initialize, region} = props;
        initialize({region});
    },[]);

    const {HORIZONTAL} = INPUT_ORIENTATION;
    const {LARGE} = INPUT_SIZE;

    const handleSubmit = async () => {
        try {
            const {fields, registerUser} = props;
            await registrationValidator.validate(fields.values);
            registerUser(fields.values);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className={style.container}>
            <div className={style.col}>
                <ReduxInput component={"input"} name={"nickname"} label={"Account name"} morph={LARGE}/>
                <ReduxInput component={"input"} name={"password"} label={"Password"} morph={LARGE}/>
                <ReduxInput component={"select"} name={"education"} values={EDUCATION_OPTIONS} label={"Education level"} morph={LARGE}/>
                <ReduxInput component={"select"} name={"region"} values={REGION_OPTIONS} label={"Region"} morph={LARGE}/>
                <ReduxInput component={"input"} type={"checkbox"} name={"terms"} label={"I accept terms of use"} orientation={HORIZONTAL}/>
            </div>
            <div className={style.col}>
                <ReduxInput component={"input"} name={"email"} label={"Email"} morph={LARGE}/>
                <label>Birth date</label>
                <div className={style.row}>
                    <ReduxInput component={"select"} name={"day"} values={new DateGenerator().generateDays()} morph={LARGE}/>
                    <ReduxInput component={"select"} name={"month"} values={MONTH_OPTIONS} morph={LARGE}/>
                    <ReduxInput component={"select"} name={"year"} values={new DateGenerator().generateYears()} morph={LARGE}/>
                </div>
                <ReduxInput component={"select"} name={"children"} values={CHILDREN_OPTIONS} label={"Children"} morph={LARGE}/>
                <ReduxInput component={"select"} name={"commune"} values={COMMUNE_OPTIONS} label={"Commune"} morph={LARGE}/>
                <div className={style.submitButton} onClick={handleSubmit}>Submit</div>
            </div>
        </div>
    );

};

const mapStateToProps = (state) => {
    const fields = state.form.userDataForm;
    const {region} = state.registrationReducer;
    return {fields, region};
};

const mapDispatchToProps = (dispatch) => ({
    registerUser: (fields) => dispatch(registerOverviewAction(fields))
});

UserDataSignUpForm.propTypes = {
    /** Sign in form fields */
    fields: PropTypes.object
};

export default reduxForm({
    form: 'userDataForm',
    schemeFields,
})(connect(mapStateToProps, mapDispatchToProps)(UserDataSignUpForm));