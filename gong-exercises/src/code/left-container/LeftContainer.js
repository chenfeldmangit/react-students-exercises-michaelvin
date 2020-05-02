import React from 'react';
import store from '../redux/store';
import {uploadNotificationsAction} from '../redux/actions/notificationActions';
import PropTypes from 'prop-types';
import MenuButton from "./MenuButton";

import shmuul from '../../resources/shmul.webp';


class LeftContainer extends React.Component {

    componentDidMount() {
        /* upload notifications to redux store */
        let notificationsList = JSON.parse(localStorage.getItem("notificationsList"));
        store.dispatch(uploadNotificationsAction(notificationsList));
    }

    render() {
        return (
            <div id="left-container">

                <div id="menu-top">
                    <img src={require("../../resources/twitter.svg")} alt="twitter" className="menu-button-img"/>
                </div>

                <div id="menu-buttons">
                    <MenuButton type="Home" src={require("../../resources/home.svg")} onClick={this.props.displayTweetFeedFunction}/>
                    <MenuButton type="Explore" src={require("../../resources/hashtag.svg")}/>
                    <MenuButton type="Notifications" src={require("../../resources/bell.svg")} onClick={this.props.displayNotificationsFunction}/>
                    <MenuButton type="Messages" src={require("../../resources/mail.svg")}/>
                    <MenuButton type="Bookmarks" src={require("../../resources/bookmark.svg")}/>
                    <MenuButton type="Lists" src={require("../../resources/clipboard.svg")}/>
                    <MenuButton id="left-menu-profile-img" type="Profile" src={shmuul} onClick={this.props.displayProfilePageFunction}/>
                    {/*<MenuButton id="left-menu-profile-img" content="Profile" src={this.props.profile.profileImgSrc} onClick={this.props.openProfilePageFunction}/>*/}
                    <MenuButton type="More" src={require("../../resources/more.svg")}/>
                </div>

                <div>
                    <button className="tweet-button left-container">Tweet</button>
                </div>
            </div>
        )
    }
}

LeftContainer.propTypes = {
    displayProfilePageFunction: PropTypes.func.isRequired,
    displayTweetFeedFunction: PropTypes.func.isRequired,
    displayNotificationsFunction: PropTypes.func.isRequired
};

export default LeftContainer;
