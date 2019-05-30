import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from "../../../actions/actionCreator";
import {PulseLoader} from 'react-spinners';

export default function (NestedComponent) {
    class Authenticate extends Component{

        componentDidMount() {
            this.props.getUser();
        }

        render() {
            const { isFetching, user } = this.props;
            if (isFetching) {
                return <PulseLoader loading={isFetching}
                                    color={'#28D2D1'}
                />
            } else {
                if (user) {
                    return <NestedComponent {...this.props}/>
                } else {
                    return <PulseLoader loading={isFetching}
                                       color={'#28D2D1'}
                    />
                }
            }
        }
    }

    const mapStateToProps = (state) => {
        const { user, isFetching, error } = state.userReducer;
        return { user, isFetching, error };
    };

    const mapDispatchToProps = (dispatch) => ({
        getUser: () => dispatch(getUser())
    });

    return connect(mapStateToProps, mapDispatchToProps)(Authenticate);
}