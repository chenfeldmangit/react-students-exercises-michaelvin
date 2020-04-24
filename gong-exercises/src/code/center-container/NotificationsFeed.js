import React from 'react';
import '../../App.css';
import '../../stylesheets/TwitterStylesheet.css'

import NotificationsListObject from "../notificationsObjects/NotificationsListObject";
import Notification from "../center-container/Notification";

import PropTypes from "prop-types";
import ProfilePage from "./ProfilePage";


function NotificationsFeed(props) {

    const showNotificationsFeed = () => {
        const jsonNotificationsList = JSON.parse(localStorage.getItem("notificationsList"));
        const notificationsList = NotificationsListObject.fromJson(jsonNotificationsList);

        return (
            <>
                {notificationsList.notifications.map(item => {
                    return <Notification notificationData={item} key={item.notificationId}/>
                })}
            </>
        )
    };

    return (
            <div id="notification-feed">

                <div id="notification-feed-header">
                    <div id="notification-feed-header-sub-up">
                        <div id="notification-feed-header-text">Notifications</div>
                        {/* <!--                <div><object class="svgs" data="myTwitter/resources/gear.svg"> </object></div>-->*/}
                        <div><img src={require("../../resources/gear.svg")} alt="settings" className="menu-button-img"/></div>
                    </div>

                    <div id="notification-feed-header-sub-down">
                        <div className="notification-feed-header-tab">
                            All
                        </div>
                        <div className="notification-feed-header-tab">
                            Mentions
                        </div>
                    </div>

                </div>

                <div id="notifications">
                    {showNotificationsFeed()}
                </div>

            </div>

    );
}

ProfilePage.propTypes = {
    displayTweetFeedFunction: PropTypes.func.isRequired
};

export default NotificationsFeed;