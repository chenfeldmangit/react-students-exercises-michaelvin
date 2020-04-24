
import {SIGN_UP, LOGIN, LOAD_USERS, LOGOUT} from '../actionTypes';


export let signUpAction = (user) => {
    return {
        type: SIGN_UP,
        user
    }
};

export let loadUsersAction = (users) => {
    return {
        type: LOAD_USERS,
        users
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