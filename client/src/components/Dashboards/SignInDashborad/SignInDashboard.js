import React from "react";
import style from "./SignInDashboard.module.scss";
import Logo from "../../Logo/Logo";
import SignInForm from "../../Forms/SignInForm/SignInForm";


/**
 * Dashboard for homepage, displaying SignIn form and Logo
 */
const SignInDashboard = props => {

    return (
        <div className={style.container}>
            <div className={style.logoArea}>
                <Logo/>
                <h6>Find your perfect couple</h6>
            </div>
            <SignInForm/>
        </div>
    );

};

export default SignInDashboard;