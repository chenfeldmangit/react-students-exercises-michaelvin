import React from 'react';
import '../../App.css';
import '../../stylesheets/TwitterStylesheet.css'
import store from "../redux/store";
import {likeTweetsAction} from "../redux/actions/tweetActions";
import PropTypes from "prop-types";
import TweetListObject from "../tweetObjects/TweetListObject";
import {connect} from "react-redux";


class TweetActionBarButton extends React.Component {

    // constructor(props) {
    //     super(props);
    //     props.isLiked ? this.state = {className: "tweet-action-bar-button liked", isLiked: props.isLiked} :
    //         this.state = {className: "tweet-action-bar-button", isLiked: props.isLiked};
    //
    //     this.state = {className: "tweet-action-bar-button", isLiked: false};
    //     let x = props.tweetList.filter(item => item.tweetId === props.tweetId).isLiked;
    //     if (x){
    //         console.log("item");
    //         this.state.className = "tweet-action-bar-button liked";
    //         this.state.isLiked = true;
    //     }
    //
    //     props.tweetList.forEach(item => {
    //         console.log(item);
    //         if (item.tweetId === props.tweetId) {
    //             this.state = {className: "tweet-action-bar-button liked", isLiked: item.isLiked};
    //
    //         }
    //     });
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     prevProps.tweetList.forEach(item => {
    //         console.log(item);
    //         if (item.tweetId === prevProps.tweetId) {
    //             this.state = {className: "tweet-action-bar-button liked", isLiked: item.isLiked};
    //
    //         }
    //     });
    // }
    //
    isTweetLiked = () => {
        console.log(this.props.tweetId);
        let temp = this.props.tweetList.filter(item => item.tweetId === this.props.tweetId)[0];
        console.log(temp);
        // let r = temp.isLiked;
        // console.log(r);
        // console.log((this.props.tweetList.filter(item => item.tweetId === this.props.tweetId)));
        // console.log((this.props.tweetList.filter(item => item.tweetId === this.props.tweetId).pop()));
        // let tempo = (this.props.tweetList.filter(item => item.tweetId === this.props.tweetId).pop());
        // console.log(tempo);
        // console.log(temp["isLiked"]);
        // return this.props.tweetList.filter(item => item.tweetId === this.props.tweetId).isLiked;
        return true;
    };

    likeTweet = () => {
        // if (!this.state.isLiked) {
        //     this.setState({className: "tweet-action-bar-button liked", isLiked: true});
        // } else {
        //     this.setState({className: "tweet-action-bar-button", isLiked: false});
        // }

        const jsonTweetList = JSON.parse(localStorage.getItem("tweetList"));
        const tweetList = TweetListObject.fromJson(jsonTweetList);
        tweetList.tweets.forEach(item => {
            if (item.tweetId === this.props.tweetId) {
                item.isLiked = !item.isLiked;
            }
        });
        localStorage.setItem("tweetList", JSON.stringify(tweetList.tweets));

        store.dispatch(likeTweetsAction(this.props.tweetId));
    };

    render() {
        return (
            <>
                {/*<button className="tweet-action-bar-button" onClick={this.likeTweet}>*/}
                {/*<button className={this.state.className}>*/}
                <button className={this.isTweetLiked() ? "tweet-action-bar-button liked" : "tweet-action-bar-button"} onClick={this.likeTweet}>
                    {/*<button className="tweet-action-bar-button" onClick={this.state.buttonAction}>*/}
                    <img className="tweet-action-bar-button-img" src={this.props.src} alt={this.props.content}/>
                    {/*<object className="tweet-action-bar-button-img" data={this.props.src}></object>*/}
                </button>
            </>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        tweetList: [...store.tweetList]
    };
};

TweetActionBarButton.propTypes = {
    tweetId: PropTypes.string,
    isLiked: PropTypes.bool,
    src: PropTypes.string.isRequired,
    content: PropTypes.string,
};

export default connect(mapStateToProps)(TweetActionBarButton);