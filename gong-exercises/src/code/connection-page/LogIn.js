import React, {useState} from 'react';
import {connect} from 'react-redux';

import FormInput from "../center-container/FormInput";
import PropTypes from "prop-types";
import store from "../redux/store";
import {logInAction1} from "../redux/actions/connectionActions";
// import {logInAction2} from "../redux/actions/connectionActions";


const LogIn = (props) => {

    const [user, setUser] = useState("");

    const validateUser = (event) => {

        /* option 1 */
        props.usersList.forEach(item => {
            if (item.username === user.username && item.password === user.password) {
                store.dispatch(logInAction1({...item}));
                props.logInToTwitter();
            }
        });

        /* option 2 */
        // store.dispatch(logInAction2({user}));

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
                    Log in to Twitter
                </div>

                <div>
                    <form onSubmit={validateUser}>

                        <FormInput id="username" maxLength={50} label="Username" value={""} onChange={handleFieldChange}/><br/>
                        <FormInput id="password" maxLength={250} label="Password" value={""} onChange={handleFieldChange}/><br/>
                        <input className="blue-style-button" type="submit" value="Login"/>

                    </form>

                </div>
            </dialog>
        </div>
    );

};

const mapStateToProps = (store) => {
    return {
        usersList: [...store.users.usersList]
    };
};

LogIn.propTypes = {
    logInToTwitter: PropTypes.func.isRequired,
    closeDialog: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(LogIn);