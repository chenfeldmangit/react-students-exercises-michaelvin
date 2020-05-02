import React from 'react';
import PropTypes from "prop-types";
import TweetActionBar from "./TweetActionBar";
// import TweetObject from "../tweetObjects/TweetObject";

import shmul from "../../resources/shmul.webp"


class Tweet extends React.Component {

    convertTimestampToTime = (tweetTimestamp) => {
        let dateObj = new Date(parseFloat(tweetTimestamp) * 1000);
        return dateObj.toLocaleDateString("en-GB") + " " + dateObj.toLocaleTimeString("en-GB");
        // return dateObj.toUTCString();
    };

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
                        <div>
                            <label className="tweet-who-id" style={{margin: "0 0.5em 0 0.5em"}}> * </label>
                            <label className="tweet-who-id">{this.convertTimestampToTime(this.props.tweetData.timestamp)}</label>
                        </div>
                    </div>
                    <div className="tweet-content">
                        {this.props.tweetData.tweetContent}
                    </div>

                    <TweetActionBar tweetId={this.props.tweetData.tweetId} isLiked={this.props.tweetData.isLiked}/>
                </div>
            </>
        )
    }
}

Tweet.propTypes = {
    tweetData: PropTypes.instanceOf(Object).isRequired,
    // tweetData: PropTypes.instanceOf(TweetObject).isRequired,
};

// TweetObject.propTypes = {
//     tweetId: PropTypes.instanceOf(String).isRequired,
//     userProfileImg: PropTypes.instanceOf(String).isRequired,
//     userName: PropTypes.instanceOf(String).isRequired,
//     userId: PropTypes.instanceOf(String).isRequired,
//     tweetContent: PropTypes.instanceOf(String).isRequired,
//     isLiked: PropTypes.bool.isRequired
// };

export default Tweet;