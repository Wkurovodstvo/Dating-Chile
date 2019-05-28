import React from "react";
import style from "./HomePage.module.scss";
import {connect} from "react-redux";
import Dashboard from "../../components/Dashboards/Dashboard/Dashboard";
import OverViewSignUpForm from "../../components/Forms/OverviewSignUpForm/OverViewSignUpForm";
import UserDataSignUpForm from "../../components/Forms/UserDataSignUpForm/UserDataSignUpForm";

const HomePage = props => {

    console.log(props);

    return(
        <>
            <Dashboard/>
            <div className={style.container}>
                <div className={style.imageSection}>
                    {
                        props.isOverviewCompleted ? <UserDataSignUpForm/>: <OverViewSignUpForm/>
                    }
                </div>
            </div>
        </>
    )

};

const mapStateToProps = state => {
    const {isOverviewCompleted,
        gender,
        purpose,
        age,
        region,
        nickname,
        email,
        password,
        birthDate,
        education,
        children,
        commune} = state.registrationReducer;
    return {isOverviewCompleted,
        gender,
        purpose,
        age,
        region,
        nickname,
        email,
        password,
        birthDate,
        education,
        children,
        commune};
};

export default connect(mapStateToProps, null)(HomePage);