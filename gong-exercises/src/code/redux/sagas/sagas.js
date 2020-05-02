import {all, put, call, takeEvery, takeLatest, select} from 'redux-saga/effects';
import {LOGIN, LIKE_TWEET, LIKE_TWEET_NOTIFICATION, REQUEST_LIKE_TWEET, REQUEST_UNLIKE_TWEET} from '../actionTypes';
import TweetListObject from '../../tweetObjects/TweetListObject';
import store from '../store';
import {requestLikeTweetAction} from '../actions/tweetActions';
import {addNotification} from '../../utils/NotoficationAPI'
import {getLoggedInUser, getTweets} from '../selectors';
import NotificationsObject from '../../notificationsObjects/NotificationsObject';
import NotificationUserObject from '../../notificationsObjects/NotificationsUserObject';


function* waitForLogIn() {
    yield takeLatest(LOGIN, logInToTweeter);
}

function* logInToTweeter() {
    try {

    }
    catch (e) {

    }
}

function* waitForLikeTweet() {
    yield takeEvery(REQUEST_UNLIKE_TWEET, likeTweet);
    yield takeEvery(REQUEST_LIKE_TWEET, likeTweet);
    yield takeEvery(REQUEST_LIKE_TWEET, addLikeTweetNotification);
}

function* likeTweet(action) {
    try {
        // yield call();
        yield put({type: LIKE_TWEET, tweetId: action.tweetId});
    }
    catch (err) {
        console.log('like tweet error ${err}');
    }
}

function* addLikeTweetNotification(action) {
    try {
        const currUser = yield select(getLoggedInUser);
        let currUserA = new NotificationUserObject(currUser.username, currUser.backgroundImgSrc);
        let newNotificationsObject = new NotificationsObject("", Date.now(), "like", currUser, action.tweetId);
        const tweets = yield select(getTweets);
        let tweetContent = tweets.filter(tweet => tweet.tweetId === action.tweetId)[0].tweetContent;

        console.log(tweetContent);



        yield call(addNotification, tweetContent, currUser);
        yield put({type: LIKE_TWEET_NOTIFICATION, notification: newNotificationsObject});
    }
    catch (err) {
        console.log('add like notification error ${err}');
    }
}

export default function* rootSaga() {
    yield all([
        waitForLogIn(),
        waitForLikeTweet()
    ]);
}