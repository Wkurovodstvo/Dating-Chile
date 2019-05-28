import React from "react";
import style from "./OverViewSignUpForm.module.scss";
import {reduxForm} from 'redux-form';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import ReduxInput from "../../Inputs/ReduxInput";
import {registrationOverviewAction} from "../../../actions/actionCreator";
import {AGE_OPTIONS, GENDER_OPTIONS, PURPOSE_OPTIONS, REGION_OPTIONS, INPUT_SIZE} from "../../../constants/constants";
import overviewValidator from "../../../utils/schemas/yupOverviewValidator";

/**
 * Form for sign in into account
 */
const OverViewSignUpForm = props => {

    const {LARGE} = INPUT_SIZE;

    const handleSubmitClick = async () => {
        try {
            const {fields, registerOverview} = props;
            await overviewValidator.validate(fields.values);
            registerOverview(fields.values);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className={style.container}>
            <div className={style.row}>
                <h3>Create your profile for free</h3>
            </div>
            <div className={style.row}>
                <div className={style.col}>
                    <ReduxInput component={"select"}
                                name={"gender"}
                                values={GENDER_OPTIONS}
                                label={"Soy"}
                                morph={LARGE}/>
                </div>
                <div className={style.col}>
                    <ReduxInput component={"select"}
                                name={"purpose"}
                                values={PURPOSE_OPTIONS}
                                label={"y Busco"}
                                morph={LARGE}/>
                </div>
                <div className={style.col}>
                    <ReduxInput component={"select"}
                                name={"age"}
                                values={AGE_OPTIONS}
                                label={"entre"}
                                morph={LARGE}/>
                </div>
                <div className={style.col}>
                    <ReduxInput component={"select"}
                                name={"region"}
                                values={REGION_OPTIONS}
                                label={"que vivan en"}
                                morph={LARGE}/>
                </div>
                <div className={style.col} onClick={handleSubmitClick}>
                    <div className={style.submitButton}>Siguiente</div>
                </div>
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
    registerOverview: (fields) => dispatch(registrationOverviewAction(fields))
});

OverViewSignUpForm.propTypes = {
    /** Sign in form fields */
    fields: PropTypes.object
};

export default reduxForm({
    form: 'overViewForm'
})(connect(mapStateToProps, mapDispatchToProps)(OverViewSignUpForm));