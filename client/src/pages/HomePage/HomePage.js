import React from "react";
import style from "./HomePage.module.scss";
import Dashboard from "../../components/Dashboards/Dashboard/Dashboard";
import OverViewSignUpForm from "../../components/Forms/OverviewSignUpForm/OverViewSignUpForm";

const HomePage = props => {

    return(
        <>
            <Dashboard/>
            <div className={style.container}>
                <div className={style.imageSection}>
                    <OverViewSignUpForm/>
                </div>
            </div>
        </>
    )

};

export default HomePage;