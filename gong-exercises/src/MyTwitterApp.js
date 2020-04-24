import React from 'react';
import './App.css';
import './stylesheets/TwitterStylesheet.css'

import LeftContainer from './code/left-container/LeftContainer';
import RightContainer from './code/right-container/RightContainer';
import ProfilePage from "./code/center-container/ProfilePage";
// import TweetFeed from "./code/center-container/TweetFeed";
import TweetFeedHook from "./code/center-container/TweetFeedHook";
import NotificationsFeed from "./code/center-container/NotificationsFeed";

import TweeterConfig from "./code/utils/TweeterConfig";
import ConnectionPage from "./code/loging/ConnectionPage";
import store from "./code/redux/store";
import {logOut} from "./code/redux/actions/actions";


class MyTwitterApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {someOneLoggedIn: false, displayTweetFeed: false, displayProfilePage: false, displayNotificationsPage: false};

        TweeterConfig.config();
    }

    render () {
        const userProfile = TweeterConfig.getUserProfile();

        return (
            <>
                {!this.state.someOneLoggedIn ?
                    <>
                        <ConnectionPage logInToTwitter={this.logInToTwitter}/>
                    </>
                :
                    <>
                        <LeftContainer profile={userProfile} openProfilePageFunction={this.displayProfilePage} returnToTweetFeedFunction={this.displayTweetFeed}/>
                        <div id="center-container">
                            {/*{this.state.displayTweetFeed ? <TweetFeed profile={userProfile}/> : <></>}*/}
                            {this.state.displayTweetFeed ? <TweetFeedHook profile={userProfile}/> : <></>}
                            {this.state.displayProfilePage ? <ProfilePage profile={userProfile} returnToTweetFeedFunction={this.displayTweetFeed}/> : <></>}
                            {this.state.displayNotificationsPage ? <NotificationsFeed profile={userProfile} returnToTweetFeedFunction={this.displayTweetFeed}/>  : <></>}
                        </div>
                        <RightContainer logOutFromTwitter={this.logOutFromTwitter}/>
                    </>
                }
            </>
        );

    }

    logInToTwitter = () => {
        this.setState({someOneLoggedIn: true, displayTweetFeed: true, displayProfilePage: false, displayNotificationsPage: false});
    };

    logOutFromTwitter = () => {
        this.setState({someOneLoggedIn: false, displayTweetFeed: false, displayProfilePage: false, displayNotificationsPage: false});
        store.dispatch(logOut());
    };

    displayProfilePage = () => {
        this.setState({someOneLoggedIn: true, displayTweetFeed: false, displayProfilePage: true, displayNotificationsPage: false});
    };

    displayTweetFeed = () => {
        this.setState({someOneLoggedIn: true, displayTweetFeed: true, displayProfilePage: false, displayNotificationsPage: false});
    };
}

export default MyTwitterApp;
