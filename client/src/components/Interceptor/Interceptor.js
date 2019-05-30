import axios from "axios";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {refreshToken} from "../../api/rest/restContoller";

/**
 * @return {null}
 */
const Element = function Interceptor(props) {
    axios.interceptors.request.use( config => {
        let accessToken = window.localStorage.getItem('accessToken');
        if(accessToken) {
            accessToken = `Bearer ${accessToken}`
        }
        config.headers.Authorization = accessToken;
        return config;
    },  err => {
        return Promise.reject(err);
    });

    axios.interceptors.response.use( response => {
        if(response) {
            if (response.data.authSuccess) {
                const {accessToken, refreshToken} = response.data;
                window.localStorage.setItem('accessToken', accessToken);
                window.localStorage.setItem('refreshToken', refreshToken);
                props.history.push('/');
            }
        }
        return response;
    }, err => {
        if(err.response && err.response.status) {
            if(err.response.status === 403) {
                props.history.push('/');
            } else if(err.response.status === 401 && err.response.data === "Access token expired!") {
                const token = window.localStorage.getItem('refreshToken');
                refreshToken({token}).then(user => console.log(user));
            } else if(err.response.status === 401 && err.response.data === "Refresh token expired!") {
                props.history.push('/');
            }
        }
        return Promise.reject(err);
    });
    return null;
};

const mapStateToProps = (state) => {
    const {error} = state.userReducer;
    return {error};
};

export default withRouter(connect(mapStateToProps,null)(Element));
