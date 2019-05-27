/*
import axios from "axios";
import { withRouter } from "react-router";
import {connect} from "react-redux";
import {cleanError} from "../../actions/actionCreator";

/!**
 * @return {null}
 *!/
const Element = function Interceptor(props) {
    axios.interceptors.request.use( config => {
        let token = window.localStorage.getItem('token');
        if(token) {
            token = `Bearer ${token}`
        }
        config.headers.Authorization = token;
        return config;
    },  err => {
        return Promise.reject(err);
    });

    axios.interceptors.response.use( response => {
        if(response) {
            if (response.data.authSuccess) {
                const {token} = response.data;
                window.localStorage.setItem('token', token);
                props.history.push('/');
            }
        }
        return response;
    }, err => {
        if(err.response && err.response.status) {
            if(err.response.status === 403) {
                props.history.push('/');
            }
            else if(err.response.status === 401) {
                props.history.push('/login');
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

const mapDispatchToProps = (dispatch) => ({
    clean: () => dispatch(cleanError())
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Element));*/
