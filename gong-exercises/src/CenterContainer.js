import React from 'react';
import './App.css';
import './stylesheets/TwitterStylesheet.css'

import comment from "./resources/speech-bubble.svg"
import retweet from "./resources/repeat.svg"
import like from "./resources/heart.svg"
import upload from "./resources/upload.svg"
import shmuul from "./resources/shmul.webp"


class CenterContainer extends React.Component {

    render() {
        return (
            <div id="center-container">

                <h1 id="center-container-sticky-banner">Home</h1>

                <div id="user-tweet">
                    <div className="user-tweet-tweet-raw">
                        <div>
                            <img className="user-tweet-img" alt="" src={shmuul}/>
                        </div>

                        <div>
                            <textarea id="user-tweet-input" name="input-twitte-box" cols="140" rows="5" maxLength="280" placeholder="What's happening?"></textarea>
                        </div>
                    </div>

                    <div className="user-tweet-action-bar">
                        <div>
                        </div>
                        <div>
                            <button className="tweet-button" onClick="addTweet('user-tweet-input')">Tweet</button>
                        </div>
                    </div>

                </div>

                <div id="tweets">
                    <Tweet/>
                    <Tweet/>
                </div>

            </div>
        )
    }
}

class Tweet extends React.Component {
    render() {
        return (
            <>
                <div className="tweet" id="">
                    <div className="tweet-who">
                        <div>
                            <img className="tweet-who-img" alt="" src=""/>
                        </div>
                        <div>
                            <strong><label className="tweet-who-name" content=""></label></strong><label
                            className="tweet-who-id" content=""></label>
                        </div>
                    </div>
                    <div className="tweet-content" content="">

                    </div>

                    <TweetActionBar/>
                </div>
            </>
        )
    }
}

class TweetActionBar extends React.Component {
    render() {
        return (
            <>
                <div className="tweet-action-bar">
                    <TweetActionBarButton src={comment}/>
                    <TweetActionBarButton src={retweet}/>
                    <TweetActionBarButton src={like} onClick="likeTweet(event)"/>
                    <TweetActionBarButton src={upload}/>
                </div>
            </>
        )

    }
}

class TweetActionBarButton extends React.Component {
    render() {
        return (
            <>
                <button className="tweet-action-bar-button" onClick="">
                    <img className="tweet-action-bar-button-img" src={this.props.src} alt={this.props.content}/>
                    {/*<object className="tweet-action-bar-button-img" data={this.props.src}></object>*/}
                </button>
            </>
        )
    }
}

export default CenterContainer;