import {LIKE_TWEET_NOTIFICATION, UPLOAD_NOTIFICATIONS} from '../actionTypes';


let notificationReducer = function(state = [], action) {
    switch (action.type) {
        case LIKE_TWEET_NOTIFICATION:
            return [...state, {...action.notification}];
        case UPLOAD_NOTIFICATIONS:
            return [...action.notifications];
        default:
            return state;
    }
};

export default notificationReducer;