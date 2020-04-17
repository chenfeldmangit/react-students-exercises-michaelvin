import React from 'react';
import '../../App.css';
import '../../stylesheets/TwitterStylesheet.css'

import TweetFeed from "./TweetFeed";
import ProfilePage from "./ProfilePage";
import PropTypes from "prop-types";


export default class CenterContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {displayTweetFeed: false, displayProfilePage: true};
        // this.state = {displayTweetFeed: true, displayProfilePage: false};
        // if (!this.props.shouldDisplay) {
        //     this.state = {displayTweetFeed: true, displayProfilePage: false};
        // } else {
        //     this.state = {displayTweetFeed: false, displayProfilePage: true}
        // }
    }

    render() {
        return (
            <div id="center-container">
                <TweetFeed shouldDisplay={this.state.displayTweetFeed} profile={this.props.profile}/>
                <ProfilePage shouldDisplay={this.state.displayProfilePage} profile={this.props.profile} returnToTweetFeedFunction={this.props.returnToTweetFeedFunction}/>
            </div>
        )
    }
}

CenterContainer.propTypes = {
    returnToTweetFeedFunction: PropTypes.func.isRequired
};