import React from "react";
import { toast } from 'react-toastify';
import Notification from "../components/Notification/Notification";

const makeToast = (data, type, url, dispatch, participants, opponent) => {
    if(type) {
        toast[`${type}`](<Notification data={data}
                                       url={url}
                                       dispatch={dispatch}
                                       participants={participants}
                                       opponent={opponent}/>);
    } else {
        toast(<Notification data={data}
                            url={url}
                            dispatch={dispatch}
                            participants={participants}
                            opponent={opponent}/>);
    }
};

export default makeToast;