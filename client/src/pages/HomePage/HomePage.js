import React from "react";
import style from "./HomePage.module.scss";
import {connect} from "react-redux";
import Header from "../../components/Headers/Header/Header";
import SignUpForm from "../../components/Forms/SignUpFrom/SignUpForm";

const HomePage = props => {

    return(
        <>
            <Header/>
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