import React from 'react';
import '../../App.css';
import '../../stylesheets/TwitterStylesheet.css'

// import comment from "../../resources/speech-bubble.svg"
// import retweet from "../../resources/repeat.svg"
// import like from "../../resources/heart.svg"
// import upload from "../../resources/upload.svg"

class TweetActionBar extends React.Component {
    render() {
        return (
            <>
                <div className="tweet-action-bar">
                    <TweetActionBarButton src={require("../../resources/speech-bubble.svg")}/>
                    <TweetActionBarButton src={require("../../resources/repeat.svg")}/>
                    <TweetActionBarButton src={require("../../resources/heart.svg")} onClick="likeTweet(event)" isLiked={this.props.isLiked}/>
                    {/*<TweetActionBarButton src={require("../../resources/heart.svg")} isLiked={this.props.isLiked}/>*/}
                    <TweetActionBarButton src={require("../../resources/upload.svg")}/>
                </div>
            </>
        )

    }
}

class TweetActionBarButton extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {className: "tweet-action-bar-button", isLiked: props.isLiked};
        this.state = {className: "tweet-action-bar-button", isLiked: false};
        // this.buttonAction = props.buttonAction;
    }

    likeTweet = () => {
        if (!this.state.isLiked) {
            this.setState({className: "tweet-action-bar-button liked", isLiked: true});
        } else {
            this.setState({className: "tweet-action-bar-button", isLiked: false});
        }
        // let currLikeState = this.state.isLiked;
        // this.setState({isLiked: !currLikeState});
    }

    render() {
        return (
            <>
                {/*<button className="tweet-action-bar-button" onClick={this.likeTweet}>*/}
                {/*<button className={this.state.className}>*/}
                <button className={this.state.className} onClick={this.likeTweet}>
                    {/*<button className="tweet-action-bar-button" onClick={this.state.buttonAction}>*/}
                    <img className="tweet-action-bar-button-img" src={this.props.src} alt={this.props.content}/>
                    {/*<object className="tweet-action-bar-button-img" data={this.props.src}></object>*/}
                </button>
            </>
        )
    }
}

export default TweetActionBar;