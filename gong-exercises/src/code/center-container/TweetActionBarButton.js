import React from 'react';
import store from "../redux/store";
import {likeTweetsAction} from "../redux/actions/tweetActions";
import {requestLikeTweetAction, requestUnLikeTweetAction} from "../redux/actions/tweetActions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import TweetListObject from "../tweetObjects/TweetListObject";


class TweetActionBarButton extends React.Component {

    likeTweet = () => {
        const jsonTweetList = JSON.parse(localStorage.getItem("tweetList"));
        const tweetList = TweetListObject.fromJson(jsonTweetList);
        tweetList.tweets.forEach(item => {
            if (item.tweetId === this.props.tweetId) {
                item.isLiked = !item.isLiked;
            }
        });
        localStorage.setItem("tweetList", JSON.stringify(tweetList.tweets));

        store.dispatch(requestLikeTweetAction(this.props.tweetId, this.props.loggedInUser));
    };

    unLikeTweet = () => {
        store.dispatch(requestUnLikeTweetAction(this.props.tweetId));
    };

    render() {
        return (
            <>
                <button className={this.props.isLiked ? "tweet-action-bar-button liked" : "tweet-action-bar-button"} onClick={this.props.isLiked ? this.unLikeTweet : this.likeTweet}>
                    <img className="tweet-action-bar-button-img" src={this.props.src} alt={this.props.content}/>
                    {/*<object className="tweet-action-bar-button-img" data={this.props.src}></object>*/}
                </button>
            </>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        tweetList: [...store.tweets],
    };
};

TweetActionBarButton.propTypes = {
    tweetId: PropTypes.string,
    isLiked: PropTypes.bool,
    src: PropTypes.string.isRequired,
    content: PropTypes.string,
};

export default connect(mapStateToProps)(TweetActionBarButton);