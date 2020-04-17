import React from 'react';
import '../../App.css';
import '../../stylesheets/TwitterStylesheet.css'
import PropTypes from "prop-types";

import shmuul from "../../resources/shmul.webp"


class LeftContainer extends React.Component {
    render() {
        return (
            <div id="left-container">

                <div id="menu-top">
                    <img src={require("../../resources/twitter.svg")} alt="twitter" className="menu-button-img"/>
                </div>

                <div id="menu-buttons">
                    <MenuButton content="Home" src={require("../../resources/home.svg")} onClick={this.props.returnToTweetFeedFunction}/>
                    <MenuButton content="Explore" src={require("../../resources/hashtag.svg")}/>
                    <MenuButton content="Notifications" src={require("../../resources/bell.svg")}/>
                    <MenuButton content="Messages" src={require("../../resources/mail.svg")}/>
                    <MenuButton content="Bookmarks" src={require("../../resources/bookmark.svg")}/>
                    <MenuButton content="Lists" src={require("../../resources/clipboard.svg")}/>
                    <MenuButton id="left-menu-profile-img" content="Profile" src={shmuul} onClick={this.props.openProfilePageFunction}/>
                    {/*<MenuButton id="left-menu-profile-img" content="Profile" src={this.props.profile.profileImgSrc} onClick={this.props.openProfilePageFunction}/>*/}
                    <MenuButton content="More" src={require("../../resources/more.svg")}/>
                </div>

                <div>
                    <button className="tweet-button left-container">Tweet</button>
                </div>
            </div>
        )
    }
}

class MenuButton extends React.Component {
    render() {
        return (
            <>
                <button className="menu-button" onClick={this.props.onClick}>
                    {this.props.id === "" ? <img className="menu-button-img" src={this.props.src} alt={this.props.content}/>
                    : <img className="menu-button-img" id={this.props.id} src={this.props.src} alt={this.props.content}/>}
                    {/*<img className="menu-button-img" src={this.props.src} alt={this.props.content}/>*/}
                    {/*<object className="menu-button-img" data="../public/resources/home.svg"></object>*/}
                    <label className="menu-labels">{this.props.content}</label>
                </button>
            </>
        )
    }
}

MenuButton.propTypes = {
    id: PropTypes.string
};

MenuButton.defaultProps = {
    id: ""
};

export default LeftContainer;

LeftContainer.propTypes = {
    openProfilePageFunction: PropTypes.func.isRequired,
    returnToTweetFeedFunction: PropTypes.func.isRequired
};
