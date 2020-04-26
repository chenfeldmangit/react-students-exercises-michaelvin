
import {TWEET, LIKE_TWEET, UPLOAD_TWEETS} from '../actionTypes';


export let tweetAction = (tweet) => {
    return {
        type: TWEET,
        tweet
    }
};

export let likeTweetsAction = (tweetId) => {
    return {
        type: LIKE_TWEET,
        tweetId
    }
};

export let uploadTweetsAction = (tweets) => {
    return {
        type: UPLOAD_TWEETS,
        tweets
    }
};