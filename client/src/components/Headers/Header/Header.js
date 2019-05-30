import React from "react";
import style from "./Header.module.scss";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Logo from "../../Logo/Logo";
import SignInForm from "../../Forms/SignInForm/SignInForm";

/**
 * Header, displaying correct dashboard according to user authentication
 */
const Header = props => {

    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.logoArea}>
                    <Logo/>
                    <h6>Encuentra tu Pareja Ideal</h6>
                </div>
                {props.user ? <div>{props.user.nickName}</div> : <SignInForm/>}
            </div>
        </div>
    );

};

Header.propTypes = {
    /** User information */
    user: PropTypes.object
};

const mapStateToProps = state => {
    const {user} = state.userReducer;
    return {user};
};

export default connect(mapStateToProps, null)(Header);