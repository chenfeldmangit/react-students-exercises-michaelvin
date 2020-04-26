
import {SIGN_UP, LOGIN, UPLOAD_USERS, LOGOUT} from '../actionTypes';


export let signUpAction = (user) => {
    return {
        type: SIGN_UP,
        user
    }
};

/* option 1 */

export let logInAction1 = (user) => {
    return {
        type: LOGIN,
        user
    }
};

/* option 2 */

export let logInAction2 = (user) => {
    return {
        type: "LOGIN2",
        user
    }
};

export let logOut = () => {
    return {
        type: LOGOUT,
    }
};

export let uploadUsersAction = (users) => {
    return {
        type: UPLOAD_USERS,
        users
    }
};