import React from "react";
import style from "./SignInForm.module.scss";
import {reduxForm} from 'redux-form';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import ReduxInput from "../../Inputs/ReduxInput";
import {INPUT_ORIENTATION, INPUT_SIZE} from "../../../constants/constants";
import loginValidator from "../../../utils/schemas/yupLoginValidator";
import {loginAction, toggleSignInAction} from "../../../actions/actionCreator";

/**
 * Form for sign in into account
 */
const SignInForm = props => {

    const {HORIZONTAL} = INPUT_ORIENTATION;
    const {SMALL} = INPUT_SIZE;

    const toggleSignIn = () => {
        props.toggleSignIn();
    };

    console.log();

    const handleLoginClick = async () => {
        const {fields, loginUser} = props;
        try {
            await loginValidator.validate(fields.values);
            loginUser(fields.values);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <div className={style.hiddenButton}>
                <button type="button" onClick={toggleSignIn}>¿Ya tienes un perfil?</button>
            </div>
            <div className={props.signInBarStatus ? style.containerExpanded : style.containerHidden}>
                <h6 className={style.hideMobile}>If you already have a profile</h6>
                <div className={style.inputRow}>
                    <ReduxInput type={"text"}
                                component={"input"}
                                placeholder={"Usuario"}
                                morph={SMALL}
                                name={"email"}/>
                    <ReduxInput type={"text"}
                                component={"input"}
                                placeholder={"Clave"}
                                morph={SMALL}
                                name={"password"}/>
                    <div className={style.submitButton}>
                        <button type="button" onClick={handleLoginClick}>Ingresar</button>
                    </div>
                </div>
                <div className={style.row}>
                    <ReduxInput type={"checkbox"}
                                name={"remember"}
                                label={"Recordar Datos"}
                                morph={SMALL}
                                component={"input"}
                                orientation={HORIZONTAL}/>
                    <p>¿Olvidaste tu Clave?</p>
                </div>
            </div>
        </>
    );

};

const mapStateToProps = (state) => {
    const fields = state.form.signInForm;
    const {signInBarStatus} = state.utilityReducer;
    return {fields, signInBarStatus};
};

const mapDispatchToProps = (dispatch) => ({
    loginUser: (fields) => dispatch(loginAction(fields)),
    toggleSignIn: () => dispatch(toggleSignInAction())
});

SignInForm.propTypes = {
    /** Sign in form fields */
    fields: PropTypes.object
};

export default reduxForm({
    form: 'signInForm',
})(connect(mapStateToProps, mapDispatchToProps)(SignInForm));