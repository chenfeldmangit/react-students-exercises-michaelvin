import React from 'react';
import '../../App.css';
import '../../stylesheets/TwitterStylesheet.css'

import TweetFeed from "./TweetFeed";
import ProfilePage from "./ProfilePage";


export default class CenterContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {displayTweetFeed: true, displayProfilePage: false};
        // if (!this.props.shouldDisplay) {
        //     this.state = {displayTweetFeed: true, displayProfilePage: false};
        // } else {
        //     this.state = {displayTweetFeed: false, displayProfilePage: true}
        // }
    }

    render() {
        return (
            <>
                <TweetFeed shouldDisplay={this.state.displayTweetFeed} profile={this.props.profile}/>
                <ProfilePage shouldDisplay={this.state.displayProfilePage} profile={this.props.profile}/>
            </>
        )
    }

    openProfilePage() {
        alert("openProfilePage");
        this.setState({displayTweetFeed: false, displayProfilePage: true});
    };

    returnToTweetFeed() {
        alert("returnToTweetFeed");
        this.setState({displayTweetFeed: true, displayProfilePage: false});
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