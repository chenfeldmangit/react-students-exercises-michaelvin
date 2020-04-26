import React, {useState} from 'react';
import {connect} from 'react-redux';
import store from '../redux/store';

import '../../App.css';
import '../../stylesheets/TwitterStylesheet.css';

import FormInput from "../center-container/FormInput";
import {signUpAction} from "../redux/actions/connectionActions";
import PropTypes from "prop-types";


const SignUp = (props) => {

    const [user, setUser] = useState("");

    const signUp = (event) => {
        store.dispatch(signUpAction({ username: user.username, password: user.password }));
        props.logInToTwitter();
        event.preventDefault();
    };

    const handleFieldChange = (event) => {
        setUser({...user, [event.target.id]: event.target.value});
    };

    return (
        <div id="edit-profile-page">
            <dialog open className="connection-dialog">
                <div>
                    <button className="return-button" onClick={props.closeDialog}>
                        <object className="svgs" data={require("../../resources/back.svg")} title={"return-button"}/>
                    </button>
                </div>

                <div>
                    Create your account
                </div>

                <div>
                    <form onSubmit={signUp}>

                        <FormInput id="username" maxLength={50} label="Username" value={""} onChange={handleFieldChange}/><br/>
                        <FormInput id="password" maxLength={50} label="Password" value={""} onChange={handleFieldChange}/><br/>
                        <input className="blue-style-button" type="submit" value="Sign up"/>

                    </form>
                    {/*<form onSubmit={signUp}>*/}
                    {/*    */}
                    {/*    <label>username:</label>*/}
                    {/*    <input type="text" className="edit-profile-input" id={"username"}/><br/>*/}
                    {/*    <label>password:</label>*/}
                    {/*    <input type="text" className="edit-profile-input" id={"password"}/><br/>*/}
                    {/*    <input className="blue-style-button" type="submit" value="Sign up"/>*/}
                    {/*    <input className="blue-style-button" type="submit" onClick={signUp}/>*/}
                    {/*    */}
                    {/*</form>*/}
                </div>

            </dialog>
        </div>
    )
};

const mapStateToProps = (store) => {
    return {
        usersList: store
    };
};

SignUp.propTypes = {
    logInToTwitter: PropTypes.func.isRequired,
    closeDialog: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(SignUp);