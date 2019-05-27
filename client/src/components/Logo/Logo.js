import React from "react";
import style from "./Logo.module.scss";
import PropTypes from 'prop-types';

/**
 * Dashboard for homepage, displaying SignIn form and Logo
 */
const Logo = props => {

    const {small} = props;

    return (
        <div className={small ? style.smallContainer : style.largeContainer}>
            <img src={require("../../images/dating-logo.png")} alt="logo"/>
        </div>
    );

};

Logo.propTypes = {
    /** Logo small size */
    small: PropTypes.bool,
};

export default Logo;