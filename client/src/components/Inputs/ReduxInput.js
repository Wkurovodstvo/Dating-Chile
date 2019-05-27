import React from 'react';
import style from "./InputRender.module.scss";
import {Field} from 'redux-form';
import _ from "lodash";
import PropTypes from 'prop-types';
import {GENDER_OPTIONS, INPUT_ORIENTATION} from "../../constants/constants";

/**
 * Input for redux-form with custom styles
 */
const ReduxInput = props => {

    const {type, component, values, name, morph, label, placeholder, value, focus, orientation} = props;
    const {HORIZONTAL} = INPUT_ORIENTATION;

    return (
        <div className={_.isEqual(orientation, HORIZONTAL) ? style.horizontalContainer : style.verticalContainer}>
            <label>{label}</label>
            <Field name={name}
                   type={type}
                   placeholder={placeholder}
                   component={component}
                   value={value}>
            {values && values.map(gender => {return <option key={gender} value={gender}>{gender}</option>})}
            </Field>
        </div>
    );

};

ReduxInput.propTypes = {
    /** Type of input */
    type: PropTypes.string,
    /** Name of input */
    name: PropTypes.string,
    /** Label of input */
    label: PropTypes.string,
    /** Component type of input */
    component: PropTypes.string,
    /** Placeholder of input */
    placeholder: PropTypes.string,
    /** Value of input */
    value: PropTypes.string,
    /** Array of options for select */
    options: PropTypes.array,
    /** ofFocus function for input */
    focus: PropTypes.func,
    /** Input orientation */
    orientation: PropTypes.oneOf(['Horizontal', 'Vertical'])
};


export default ReduxInput;