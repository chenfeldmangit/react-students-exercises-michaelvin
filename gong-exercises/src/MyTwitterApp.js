import React from 'react';
import './App.css';
import './stylesheets/TwitterStylesheet.css'

import store from "./code/redux/store";
import {logOut} from "./code/redux/actions/connectionActions";

import TweeterConfig from "./code/utils/TweeterConfig";
import ConnectionPage from "./code/connection-page/ConnectionPage";
import LeftContainer from './code/left-container/LeftContainer';
import RightContainer from './code/right-container/RightContainer';
import ProfilePage from "./code/center-container/ProfilePage";
// import TweetFeed from "./code/center-container/TweetFeed";
import TweetFeedHook from "./code/center-container/TweetFeedHook";
import NotificationsFeed from "./code/center-container/NotificationsFeed";


class MyTwitterApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {someOneLoggedIn: false, displayTweetFeed: false, displayProfilePage: false, displayNotifications: false};

        TweeterConfig.config();
    }

    logInToTwitter = () => {
        this.setState({someOneLoggedIn: true, displayTweetFeed: true, displayProfilePage: false, displayNotifications: false});
    };

    logOutFromTwitter = () => {
        this.setState({someOneLoggedIn: false, displayTweetFeed: false, displayProfilePage: false, displayNotifications: false});
        store.dispatch(logOut());
    };

    displayProfilePage = () => {
        this.setState({someOneLoggedIn: true, displayTweetFeed: false, displayProfilePage: true, displayNotifications: false});
    };

    displayTweetFeed = () => {
        this.setState({someOneLoggedIn: true, displayTweetFeed: true, displayProfilePage: false, displayNotifications: false});
    };

    displayNotifications = () => {
        this.setState({someOneLoggedIn: true, displayTweetFeed: false, displayProfilePage: false, displayNotifications: true});
    };

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
                        <LeftContainer profile={userProfile} displayProfilePageFunction={this.displayProfilePage} displayTweetFeedFunction={this.displayTweetFeed} displayNotificationsFunction={this.displayNotifications}/>
                        <div id="center-container">
                            {/*{this.state.displayTweetFeed ? <TweetFeed profile={userProfile}/> : <></>}*/}
                            {this.state.displayTweetFeed ? <TweetFeedHook profile={userProfile}/> : <></>}
                            {this.state.displayProfilePage ? <ProfilePage profile={userProfile} displayTweetFeedFunction={this.displayTweetFeed}/> : <></>}
                            {this.state.displayNotifications ? <NotificationsFeed profile={userProfile} displayTweetFeedFunction={this.displayTweetFeed}/>  : <></>}
                        </div>
                        <RightContainer logOutFromTwitter={this.logOutFromTwitter}/>
                    </>
                }
            </>
        );

    }
}

export default MyTwitterApp;