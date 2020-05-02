import React from 'react';
import PropTypes from "prop-types";
import TweetActionBarButton from  "../center-container/TweetActionBarButton"


class TweetActionBar extends React.Component {
    render() {
        return (
            <>
                <div className="tweet-action-bar">
                    <TweetActionBarButton src={require("../../resources/speech-bubble.svg")} tweetId={this.props.tweetId}/>
                    <TweetActionBarButton src={require("../../resources/repeat.svg")} tweetId={this.props.tweetId}/>
                    <TweetActionBarButton src={require("../../resources/heart.svg")} tweetId={this.props.tweetId} isLiked={this.props.isLiked}/>
                    <TweetActionBarButton src={require("../../resources/upload.svg")} tweetId={this.props.tweetId}/>
                </div>
            </>
        )
    }
}

TweetActionBar.propTypes = {
    tweetId: PropTypes.string,
    isLiked: PropTypes.bool,
};

export default TweetActionBar;