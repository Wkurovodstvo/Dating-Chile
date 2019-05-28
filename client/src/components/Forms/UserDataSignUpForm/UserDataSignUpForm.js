import React, {useEffect} from "react";
import style from "./UserDataSignUpFrom.module.scss";
import {reduxForm} from 'redux-form';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import ReduxInput from "../../Inputs/ReduxInput";
import {registrationAction} from "../../../actions/actionCreator";
import {REGION_OPTIONS, EDUCATION_OPTIONS, COMMUNE_OPTIONS,
    INPUT_ORIENTATION, CHILDREN_OPTIONS, INPUT_SIZE, MONTH_OPTIONS} from "../../../constants/constants";
import registrationValidator from "../../../utils/schemas/yupRegistrationValidator";
import {DateGenerator} from "../../../utils/DateGenerator";

/**
 * Form for sign in into account
 */
const UserDataSignUpForm = props => {

    useEffect(() => {
        const {initialize, registration:{region}} = props;
        initialize({
            terms: false,
            region
        });
    },[]);

    const {HORIZONTAL} = INPUT_ORIENTATION;
    const {LARGE} = INPUT_SIZE;

    const handleRegistrationClick = async () => {
        try {
            const {fields, registerUser, registration} = props;
            await registrationValidator.validate(fields.values);
            registerUser({...registration, ...fields.values});
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className={style.container}>
            <div className={style.col}>
                <ReduxInput component={"input"}
                            name={"nickname"}
                            label={"Nombre de Usuario"}
                            morph={LARGE}/>
                <ReduxInput component={"input"}
                            name={"password"}
                            label={"Clave"}
                            morph={LARGE}/>
                <ReduxInput component={"select"}
                            name={"education"}
                            values={EDUCATION_OPTIONS}
                            label={"Nivel Educación"}
                            morph={LARGE}/>
                <ReduxInput component={"select"}
                            name={"region"}
                            values={REGION_OPTIONS}
                            label={"Región"}
                            morph={LARGE}/>
                <ReduxInput component={"input"}
                            type={"checkbox"}
                            name={"terms"}
                            label={"Acepto Condiciones de uso"}
                            orientation={HORIZONTAL}/>
            </div>
            <div className={style.col}>
                <ReduxInput component={"input"}
                            name={"email"}
                            label={"Email"}
                            morph={LARGE}/>
                <label>Nacimiento</label>
                <div className={style.row}>
                    <ReduxInput component={"select"}
                                name={"day"}
                                values={new DateGenerator().generateDays()}
                                morph={LARGE}/>
                    <ReduxInput component={"select"}
                                name={"month"}
                                values={MONTH_OPTIONS}
                                morph={LARGE}/>
                    <ReduxInput component={"select"}
                                name={"year"}
                                values={new DateGenerator().generateYears()}
                                morph={LARGE}/>
                </div>
                <ReduxInput component={"select"}
                            name={"children"}
                            values={CHILDREN_OPTIONS}
                            label={"Hijos"}
                            morph={LARGE}/>
                <ReduxInput component={"select"}
                            name={"commune"}
                            values={COMMUNE_OPTIONS}
                            label={"Comuna"}
                            morph={LARGE}/>
                <div className={style.submitButton} onClick={handleRegistrationClick}>Submit</div>
            </div>
        </div>
    );

};

const mapStateToProps = (state) => {
    const fields = state.form.userDataForm;
    const registration = state.registrationReducer;
    return {fields, registration};
};

const mapDispatchToProps = (dispatch) => ({
    registerUser: (fields) => dispatch(registrationAction(fields))
});

UserDataSignUpForm.propTypes = {
    /** Sign in form fields */
    fields: PropTypes.object
};

export default reduxForm({
    form: 'userDataForm'
})(connect(mapStateToProps, mapDispatchToProps)(UserDataSignUpForm));