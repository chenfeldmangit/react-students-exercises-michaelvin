import React from 'react';
import '../../App.css';
import '../../stylesheets/TwitterStylesheet.css'
import PropTypes from "prop-types";
import NotificationsObject from "../notificationsObjects/NotificationsObject";


export default function Notification(props) {

    const imgByType = (type) => {
        return type === "like" ?
            <img className="notification-type-img" src={require('../../resources/liked.svg')} alt={"like notification"}/> :
            <img className="notification-type-img" src={require('../../resources/followed.svg')} alt={"follow notification"}/>;
    };

    const messageByType = (type) => {
      return type === "like" ? " liked your Tweet" : " followed you";
    };

    return (
        <>
            <div className="notification" id={props.notificationData.notificationId}>
                <div className="notification-who">
                    <div>
                        {imgByType(props.notificationData.notificationType)}
                        <img className="notification-who-img" src={require('../../resources/shmul.webp')} alt={props.notificationData.users.profileImg}/>
                    </div>
                    <div>
                        <strong><label className="notification-who-name">{props.notificationData.users.username}</label></strong>
                        <label className="tweet-who-id">{messageByType(props.notificationData.notificationType)}</label>
                    </div>
                </div>
                <div className="notification-content">
                    {props.notificationData.notificationContent}
                </div>
            </div>
        </>
    );
}

Notification.propTypes = {
    notificationData: PropTypes.instanceOf(NotificationsObject).isRequired,
};