
import {TWEET, LIKE_TWEET, UPLOAD_TWEETS} from '../actionTypes';


let tweetReducer = function(state = [], action) {
    switch (action.type) {
        case TWEET:
            return [...state, {...action.tweet}];
        case LIKE_TWEET:
            let newState = [];
            state.forEach( item => {
                if (item.tweetId === action.tweetId) {
                    newState.push({...item, isLiked: !item.isLiked})
                } else {
                    newState.push(item);
                }
            });
            return newState;
        case UPLOAD_TWEETS:
            return [...action.tweets];
        default:
            return state;
    }
};

export default tweetReducer;