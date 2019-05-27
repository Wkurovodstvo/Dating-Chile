import React from "react";
import style from "./Dashboard.module.scss";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import SignInDashboard from "../SignInDashborad/SignInDashboard";
import LoggedInDashboard from "../LoggedInDashboard/LoggedInDashboard";

/**
 * Dashboard, displaying correct dashboard according to user authentication
 */
const Dashboard = props => {


    return (
        <div className={style.container}>
            {props.user ? <LoggedInDashboard/> : <SignInDashboard/>}
        </div>
    );

};

Dashboard.propTypes = {
    /** User information */
    user: PropTypes.object
};

const mapStateToProps = state => {
    const {user} = state.userReducer;
    return {user};
};

export default connect(mapStateToProps, null)(Dashboard);