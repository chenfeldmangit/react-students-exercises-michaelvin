import React from 'react';
import './App.css';
import './stylesheets/TwitterStylesheet.css'

import LeftContainer from './code/left-container/LeftContainer';
import RightContainer from './code/right-container/RightContainer';
import ProfilePage from "./code/center-container/ProfilePage";
import TweetFeed from "./code/center-container/TweetFeed";

class MyTwitter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {displayTweetFeed: true, displayProfilePage: false};
    }

    render () {
        const userProfile = getUserProfile();

        return (
            <>
                <LeftContainer profile={userProfile} openProfilePageFunction={this.openProfilePage} returnToTweetFeedFunction={this.returnToTweetFeed}/>
                <div id="center-container">
                    <TweetFeed shouldDisplay={this.state.displayTweetFeed} profile={userProfile}/>
                    <ProfilePage shouldDisplay={this.state.displayProfilePage} profile={userProfile} returnToTweetFeedFunction={this.returnToTweetFeed}/>
                </div>
                <RightContainer/>
            </>
        );

    }

    openProfilePage = () => {
        this.setState({displayTweetFeed: false, displayProfilePage: true});
    };

    returnToTweetFeed = () => {
        this.setState({displayTweetFeed: true, displayProfilePage: false});
    };
}

function getUserProfile() {
    localStorage.setItem("userProfile", JSON.stringify({
        name: "shmulikknoll",
        id: "@GuildHead",
        bio: "some long and old bio",
        location: "Tel-Aviv",
        backgroundImgSrc: "../../resources/picture.jpg",
        profileImgSrc: "../../resources/shmul.webp"
    }));
    return JSON.parse(localStorage.getItem("userProfile"));
}

export default MyTwitter;
