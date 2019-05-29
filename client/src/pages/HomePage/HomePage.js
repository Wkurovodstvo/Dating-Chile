import React from "react";
import style from "./HomePage.module.scss";
import {connect} from "react-redux";
import Dashboard from "../../components/Dashboards/Dashboard/Dashboard";
import SignUpForm from "../../components/Forms/SignUpFrom/SignUpForm";

const HomePage = props => {

    console.log(new DeviceUUID().get())

    return(
        <>
            <Dashboard/>
            <div className={style.container}>
                <div className={style.imageSection}>
                    <SignUpForm/>
                </div>
            </div>
        </>
    )

};

const mapStateToProps = state => {
    return state.registrationReducer;
};

export default connect(mapStateToProps, null)(HomePage);