import {TWEET, LIKE_TWEET, UPLOAD_TWEETS, REQUEST_LIKE_TWEET, REQUEST_UNLIKE_TWEET} from '../actionTypes';


export let tweetAction = (tweet) => {
    return {
        type: TWEET,
        tweet
    }
};

export let requestLikeTweetAction = (tweetId, loggedInUser) => {
    return {
        type: REQUEST_LIKE_TWEET,
        tweetId, loggedInUser
    }
};

export let requestUnLikeTweetAction = (tweetId, loggedInUser) => {
    return {
        type: REQUEST_UNLIKE_TWEET,
        tweetId, loggedInUser
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