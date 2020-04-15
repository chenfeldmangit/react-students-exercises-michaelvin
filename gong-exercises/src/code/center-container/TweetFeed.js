import React from 'react';
import '../../App.css';
import '../../stylesheets/TwitterStylesheet.css'

import Tweet from "./Tweet";
import TweetObject from "./TweetObject";


import shmul from "../../resources/shmul.webp"
import PropTypes from "prop-types";

class TweetFeed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display: '',
            tweetContent: ""
        };
        if (!this.props.shouldDisplay) {
            this.state["display"] = "none";
        } else {
            this.state["display"] = "flex";
        }

        this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleFieldChange(event){
        console.log(`Calling handle change with values ${event.target.name} ${event.target.value}`);
        this.setState({tweetContent: event.target.value});
    }

    tweet() {
        console.log(event.target);
        // let newTweetContent = event;
        // let newTweetObject = new TweetObject("", Date.now(), this.profile.name, this.profile.id, getProfileImage(), newTweetContent);
        // let jsonTweetList = JSON.parse(localStorage.getItem("tweetList"));
        // let tweetList = TweetList.fromJson(jsonTweetList);
        // tweetList.addTweet(newTweetObject);
        // localStorage.setItem("tweetList", JSON.stringify(tweetList.tweets));
    }

    render() {
        return (
            <div id="tweet-feed" style={{display: this.state.display}}>

                <h1 id="tweet-feed-sticky-banner">Home</h1>

                <div id="user-tweet">
                    <div className="user-tweet-tweet-raw">
                        <div>
                            {/*<img className="user-tweet-img" alt="" src={require(getProfileImage())}/>*/}
                            {/*<img className="user-tweet-img" alt="" src={require('../../resources/shmul.webp')}/>*/}
                            <img className="user-tweet-img" alt="" src={shmul}/>
                        </div>

                        <div>
                            <textarea id="user-tweet-input" name="input-tweet-box" cols="140" rows="5" maxLength="280" placeholder="What's happening?"/>
                        </div>
                    </div>

                    <div className="user-tweet-action-bar">
                        <div>
                        </div>
                        <div>
                            <button className="tweet-button" onClick={this.tweet}>Tweet</button>
                            {/*<button className="tweet-button">Tweet</button>*/}
                        </div>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <textarea id="user-tweet-input" name="input-tweet-box" cols="140" rows="5" maxLength="280" placeholder="What's happening?" value={this.state.tweetContent} onChange={this.handleFieldChange}/>
                        {this.state.tweetContent.length > 3 ?
                            <button className="tweet-button" type="submit" onClick={this.tweet}>Tweet</button> :
                            <button className="tweet-button" type="submit">Tweet</button>
                        }
                    </form>

                </div>

                <div id="tweets">
                    {showTweetsFeed()}
                </div>

            </div>
        )
    }

    componentDidMount() {
        createTweetIdEnumerator();
        createTweetListForTesting();
        createTweetList();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        {showTweetsFeed()}
    }
}

function getProfileImage() {
    let userProfile = JSON.parse(localStorage.getItem("userProfile"));
    return userProfile.profileImgSrc;
}

function createTweetIdEnumerator() {
    let idEnumerator = localStorage.getItem("idEnumerator");
    if (idEnumerator == null) {
        localStorage.setItem("idEnumerator", "0");
    }
}

function createTweetListForTesting() {
    let tweetList = localStorage.getItem("tweetList");
    if (tweetList == null) {
        localStorage.setItem("tweetList", JSON.stringify([
            {
                tweetId: "#tweet-1",
                timestamp: Date.now(),
                userName: "Adi",
                userId: "@Adi",
                userProfileImg: "../../resources/shmul.webp",
                tweetContent: "something",
                isLiked: false
            },
            {
                tweetId: "#tweet-2",
                timestamp: Date.now(),
                userName: "Michael",
                userId: "@Michael",
                userProfileImg: "../../resources/shmul.webp",
                tweetContent: "something else",
                isLiked: false
            }
        ]));
    }
}

function createTweetList() {
    let tweetList = localStorage.getItem("tweetList");
    if (tweetList == null) {
        localStorage.setItem("tweetList", JSON.stringify([]));
    }
}

function showTweetsFeed(props) {
    const jsonTweetList = JSON.parse(localStorage.getItem("tweetList"));
    const tweetList = TweetList.fromJson(jsonTweetList);

    return (
        <>
            {tweetList.tweets.map(item => {
                return <Tweet tweetData={item}/>
            })}
            </>
    )
}

class TweetList {

    constructor(tweets) {
        this.tweets = tweets;
    }

    static fromJson(json) {
        return json.length === 0 ? new TweetList([]) : new TweetList(json.map(tweet => TweetObject.fromJson(tweet)));
    }

    addTweet(tweet) {
        this.tweets.splice(0, 0, tweet);
    }

    getTweetById(tweetId) {
        return this.tweets.filter(tweet => tweet.tweetId === tweetId)[0];
    }

    removeTweetById(tweetId) {
        this.tweets = this.tweets.filter(tweet => tweet.tweetId !== tweetId);
    }
}

// function showTweets(props) {
//     const tweetFid = [];
//
//     return (
//         <>
//             {tweetFid.map(tweet => {return <Tweet/>})}
//         </>
//
//     )
// }

TweetFeed.propTypes = {
    shouldDisplay: PropTypes.bool.isRequired
};

TweetFeed.defaultProps = {
    shouldDisplay: true
};

export default TweetFeed;