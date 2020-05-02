import React from 'react';

import store from "../redux/store";
import {connect} from "react-redux";
import {uploadTweetsAction, tweetAction} from "../redux/actions/tweetActions";

import Tweet from "./Tweet";
import TweetObject from "../tweetObjects/TweetObject";
import TweetListObject from "../tweetObjects/TweetListObject";


class TweetFeed extends React.Component {
    static minimalTweetLength = 3;

    constructor(props) {
        super(props);
        this.state = { tweetContent: "" };
        this.uploadExistingTweets();
    }

    uploadExistingTweets = () => {
        let tweetList = JSON.parse(localStorage.getItem("tweetList"));
        console.log(tweetList);
        store.dispatch(uploadTweetsAction(tweetList));
    };

    renderTweetsFeed = () => {
        /* load tweets from local storage */
        const jsonTweetList = JSON.parse(localStorage.getItem("tweetList"));
        const tweetList = TweetListObject.fromJson(jsonTweetList);

        return (
            <>
                {tweetList.tweets.map(item => {
                    return <Tweet tweetData={item} key={item.tweetId}/>
                })}
            </>
        )
    };

    handleFieldChange = (event) => {
        this.setState({tweetContent: event.target.value});
    };

    tweet = (event) => {
        let userProfile = JSON.parse(localStorage.getItem("userProfile"));
        getProfileImage();
        let newTweetObject = new TweetObject("", Date.now(), userProfile.name, userProfile.id, getProfileImage(), this.state.tweetContent);
        let jsonTweetList = JSON.parse(localStorage.getItem("tweetList"));
        let tweetList = TweetListObject.fromJson(jsonTweetList);
        tweetList.addTweet(newTweetObject);
        localStorage.setItem("tweetList", JSON.stringify(tweetList.tweets));

        this.setState({tweetContent: event.target.value});

        store.dispatch(tweetAction(newTweetObject));
    };

    render() {
        return (
            <div id="tweet-feed">

                <h1 id="tweet-feed-sticky-banner">Home</h1>

                <div id="user-tweet">
                    <div className="user-tweet-tweet-raw">
                        <div>
                            {/*<img className="user-tweet-img" alt="" src={require(this.props.profile.backgroundImgSrc)}/>*/}
                            {/*<img className="user-tweet-img" alt="" src={getProfileImage}/>*/}
                            <img className="user-tweet-img" alt="" src={require('../../resources/shmul.webp')}/>
                        </div>

                        <div>
                            <textarea id="user-tweet-input" name="input-tweet-box" cols="140" rows="5" maxLength="280" placeholder="What's happening?" value={this.state.tweetContent} onChange={this.handleFieldChange}/>
                        </div>
                    </div>

                    <div className="user-tweet-action-bar">
                        <div>
                        </div>
                        <div>
                            {this.state.tweetContent.length >= TweetFeed.minimalTweetLength ?
                                <button className="tweet-button" onClick={this.tweet}>Tweet</button> :
                                <button className="tweet-button tweet-button-disabled">Tweet</button>
                            }
                        </div>
                    </div>

                </div>

                <div id="tweets">
                    {this.renderTweetsFeed()}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        tweetList: store
    };
};

export default connect(mapStateToProps)(TweetFeed);