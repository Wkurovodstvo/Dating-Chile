import React, { Component } from 'react';
import {Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-image-lightbox/style.css';
import Interceptor from "./components/Interceptor/Interceptor";
import browserHistory from "./utils/historyCreator";
import HomePage from "./pages/HomePage/HomePage";
import AdminPage from "./pages/AdminPage/AdminPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import UserPage from "./pages/UserPage/UserPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ConversationPage from "./pages/ConversationPage/ConversationPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

class App extends Component {

    render() {
        return (
            <Router history={browserHistory}>
                <>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/users" component={UsersPage}/>
                        <Route exact path="/users/:id" component={UserPage}/>
                        <Route path="/profile" component={ProfilePage}/>
                        <Route path="/conversation" component={ConversationPage}/>
                        <Route path="/admin" component={AdminPage}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={true}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnVisibilityChange
                        draggable
                        pauseOnHover
                    />
                </>
            </Router>
        );
    }
}

export default App;

