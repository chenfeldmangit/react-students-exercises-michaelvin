import {SIGN_UP, LOGIN, UPLOAD_USERS, LOGOUT} from '../actionTypes';


let connectionReducer = function(state = [], action) {
    switch (action.type) {
        case SIGN_UP:
            return {...state, usersList:[...state.usersList, {...action.user}]};
        case LOGIN:
            return {...state, loggedInUser:{...action.user}};
        case "LOGIN2":
            if (state.usersList[action.user.username] !== undefined && state.usersList[action.user.username].password === action.user.password) {
                return {...state, loggedInUser:{...action.user}};
            }
            return state;
        case UPLOAD_USERS:
            return {...state, usersList:action.users};
        case LOGOUT:
            return {...state, loggedInUser:{}};
        default:
            return state;
    }
};

export default connectionReducer;