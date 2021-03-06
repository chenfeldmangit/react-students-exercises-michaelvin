import React, {useEffect, useState} from 'react';
import store from "../redux/store";
import {uploadTweetsAction, tweetAction} from "../redux/actions/tweetActions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Tweet from "./Tweet";
import TweetObject from "../tweetObjects/TweetObject";
import TweetListObject from "../tweetObjects/TweetListObject";


function TweetFeedHook(props) {

    const [tweetContent, setTweetContent] = useState("");
    const minimalTweetLength = 3;

    useEffect( () => {

    },[tweetContent]);

    useEffect(() => {
        /* upload tweets to redux store */
        let tweetList = JSON.parse(localStorage.getItem("tweetList"));
        store.dispatch(uploadTweetsAction(tweetList));
    }, []);

    const renderTweetsFeed = () => {
        /* load tweets from redux store */
        return (
            <>
                {props.tweetList.reverse().map(item => {
                    return <Tweet tweetData={item} key={item.tweetId}/>
                })}
            </>
        )
    };

    const handleFieldChange = (event) => {
        setTweetContent(event.target.value);
    };

    const activateTweetButton = () => {
        return (
            tweetContent.length >= minimalTweetLength ?
                <button className="tweet-button" onClick={tweet}>Tweet</button> :
                <button className="tweet-button tweet-button-disabled">Tweet</button>
        )
    };

    const tweet = (event) => {
        let userProfile = JSON.parse(localStorage.getItem("userProfile"));
        let newTweetObject = new TweetObject("", Date.now(), userProfile.name, userProfile.id, userProfile.profileImgSrc, tweetContent);
        let jsonTweetList = JSON.parse(localStorage.getItem("tweetList"));
        let tweetList = TweetListObject.fromJson(jsonTweetList);
        tweetList.addTweet(newTweetObject);
        localStorage.setItem("tweetList", JSON.stringify(tweetList.tweets));

        setTweetContent(event.target.value);

        store.dispatch(tweetAction(newTweetObject));
    };

    return (
            <div id="tweet-feed">

                <h1 id="tweet-feed-sticky-banner">Home</h1>

                <div id="user-tweet">
                    <div className="user-tweet-tweet-raw">
                        <div>
                            <img className="user-tweet-img" alt="" src={require('../../resources/shmul.webp')}/>
                            {/*<img className="user-tweet-img" alt={props.currentUser.username} src={require(props.currentUser.profileImgSrc)}/>*/}
                        </div>

                        <div>
                            <textarea id="user-tweet-input" name="input-tweet-box" cols="140" rows="5" maxLength="280" placeholder="What's happening?" value={tweetContent} onChange={handleFieldChange}/>
                        </div>
                    </div>

                    <div className="user-tweet-action-bar">
                        <div>
                        </div>
                        <div>
                            {activateTweetButton()}
                        </div>
                    </div>

                </div>

                <div id="tweets">
                    {renderTweetsFeed()}
                </div>

            </div>

    );
}

const mapStateToProps = (store) => {
    return {
        tweetList: store.tweets,
        currentUser: store.users.loggedInUser
    };
};

TweetFeedHook.propTypes = {
    shouldDisplay: PropTypes.bool.isRequired
};

TweetFeedHook.defaultProps = {
    shouldDisplay: true
};

export default connect(mapStateToProps)(TweetFeedHook);