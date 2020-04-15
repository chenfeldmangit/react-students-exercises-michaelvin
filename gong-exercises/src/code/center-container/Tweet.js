import React from 'react';
import '../../App.css';
import '../../stylesheets/TwitterStylesheet.css'
import PropTypes from "prop-types";

import TweetActionBar from "./TweetActionBar";
import TweetObject from "./TweetObject";

import shmul from "../../resources/shmul.webp"


class Tweet extends React.Component {
    render() {
        return (
            <>
                <div className="tweet" id={this.props.tweetData.tweetId}>
                    <div className="tweet-who">
                        <div>
                            <img className="tweet-who-img" src={shmul} alt={this.props.tweetData.userProfileImg}/>
                            {/*<img className="tweet-who-img" src={this.props.tweetData.userProfileImg} alt={this.props.tweetData.userProfileImg}/>*/}
                            {/*<img className="tweet-who-img" src={require(this.props.tweetData.userProfileImg)} alt={this.props.tweetData.userProfileImg}/>*/}
                        </div>
                        <div>
                            <strong><label className="tweet-who-name">{this.props.tweetData.userName}</label></strong>
                            <label className="tweet-who-id">{this.props.tweetData.userId}</label>
                        </div>
                    </div>
                    <div className="tweet-content">
                        {this.props.tweetData.tweetContent}
                    </div>

                    <TweetActionBar isliked={this.props.tweetData.isLiked}/>
                </div>
            </>
        )
    }
}

Tweet.propTypes = {
    tweetData: PropTypes.instanceOf(TweetObject).isRequired
};

TweetObject.propTypes = {
    id: PropTypes.instanceOf(String).isRequired,
    userProfileImg: PropTypes.instanceOf(String).isRequired,
    userName: PropTypes.instanceOf(String).isRequired,
    userId: PropTypes.instanceOf(String).isRequired,
    tweetContent: PropTypes.instanceOf(String).isRequired,
    isLiked: PropTypes.bool.isRequired
};

export default Tweet;