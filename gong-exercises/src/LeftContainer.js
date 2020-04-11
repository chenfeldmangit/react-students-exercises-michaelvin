import React from 'react';
import './App.css';
import './stylesheets/TwitterStylesheet.css'
import propTypes from "prop-types";

import twitter from "./resources/twitter.svg"
import home from "./resources/home.svg"
import explore from "./resources/hashtag.svg"
import notifications from "./resources/bell.svg"
import messages from "./resources/mail.svg"
import bookmarks from "./resources/bookmark.svg"
import lists from "./resources/clipboard.svg"
import more from "./resources/more.svg"
import shmuul from "./resources/shmul.webp"


class LeftContainer extends React.Component {

    render() {
        return (
            <div id="left-container">

                <div id="menu-top">
                    <img src={twitter} alt="twitter" className="menu-button-img"/>
                </div>

                <div id="menu-buttons">
                    <MenuButton content="Home" src={home}/>
                    <MenuButton content="Explore" src={explore}/>
                    <MenuButton content="Notifications" src={notifications}/>
                    <MenuButton content="Messages" src={messages}/>
                    <MenuButton content="Bookmarks" src={bookmarks}/>
                    <MenuButton content="Lists" src={lists}/>
                    <MenuButton id="left-menu-profile-img" content="Profile" src={shmuul} onClick={goToProfile}/>
                    <MenuButton content="More" src={more}/>
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
                <button className="menu-button">
                    {this.props.id === "" ? <img className="menu-button-img" src={this.props.src} alt={this.props.content}/>
                    : <img className="menu-button-img" id="left-menu-profile-img" src={this.props.src} alt={this.props.content}/>}
                    {/*<img className="menu-button-img" src={this.props.src} alt={this.props.content}/>*/}
                    {/*<object className="menu-button-img" data="../public/resources/home.svg"></object>*/}
                    <label className="menu-labels">{this.props.content}</label>
                </button>
            </>
        )
    }
}

MenuButton.propTypes ={
    id: propTypes.string
};

MenuButton.defaultProps = {
    id: ""
};

export default LeftContainer;
