import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from "../../../actions/actionCreator";
import {PulseLoader} from 'react-spinners';

export default function (NestedComponent) {
    class Authenticate extends Component {

        componentDidMount() {
            const token = window.localStorage.getItem('accessToken');
            if(token) {
                this.props.getUser();
            }
        }

        render() {
            const { isFetching } = this.props;
            if (isFetching) {
                return <PulseLoader loading={isFetching}
                                    color={'#28D2D1'}/>
            } else {
                return <NestedComponent {...this.props}/>
            }
        }
    }

    const mapStateToProps = (state) => {
        const { isFetching } = state.userReducer;
        return { isFetching };
    };

    const mapDispatchToProps = (dispatch) => ({
        getUser: () => dispatch(getUser())
    });

    return connect(mapStateToProps, mapDispatchToProps)(Authenticate);
}