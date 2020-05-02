import {LIKE_TWEET_NOTIFICATION, UPLOAD_NOTIFICATIONS} from '../actionTypes';


export let likeTweetNotificationAction = (tweetId) => {
    return {
        type: LIKE_TWEET_NOTIFICATION,
        tweetId
    }
};

export let uploadNotificationsAction = (notifications) => {
    return {
        type: UPLOAD_NOTIFICATIONS,
        notifications
    }
};