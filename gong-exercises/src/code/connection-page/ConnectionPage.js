import React from 'react';
import '../../App.css';
import '../../stylesheets/TwitterStylesheet.css'

import store from '../redux/store';
import {connect} from 'react-redux';
import {uploadUsersAction} from "../redux/actions/connectionActions";

import SignUp from "./SignUp";
import Login from "./LogIn";
import PropTypes from "prop-types";


class ConnectionPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {displaySignUpDialog: false, displayLogInDialog: false};
        this.uploadExistingUsers();
    }

    uploadExistingUsers = () => {
        let usersList = JSON.parse(localStorage.getItem("usersList"));
        store.dispatch(uploadUsersAction(usersList));
    };

    openSignUpDialog = () => {
        this.setState({"displaySignUpDialog": true})
    };

    openLogInDialog = () => {
        this.setState({"displayLogInDialog": true})
    };

    closeDialog = () => {
        if (this.state.displaySignUpDialog) {
            this.setState({"displaySignUpDialog": false})
        } else {
            this.setState({"displayLogInDialog": false})
        }
    };

    render() {
        return (
            <div id="connection-page">
                <div id="connection-page-left">
                </div>

                <div id="connection-page-right">
                    <div id="connection-page-right-content">
                        <img src={require("../../resources/twitter.svg")} alt="twitter" className="menu-button-img"/>
                        <h1>See what’s happening in<br/>the world right now</h1>

                        <h4>Join Twitter today.</h4>
                        <button id="connection-page-button-signup" onClick={this.openSignUpDialog}>Sign up</button><br/>
                        <button id="connection-page-button-login" onClick={this.openLogInDialog}>Log in</button>

                        {this.state.displaySignUpDialog ? <SignUp logInToTwitter={this.props.logInToTwitter} closeDialog={this.closeDialog}/> : <></>}
                        {this.state.displayLogInDialog ? <Login logInToTwitter={this.props.logInToTwitter} closeDialog={this.closeDialog}/> : <></>}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        usersList: store.usersList.usersList
    };
};

ConnectionPage.propTypes = {
    logInToTwitter: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(ConnectionPage);