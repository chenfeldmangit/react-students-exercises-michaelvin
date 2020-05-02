import NotificationsListObject from "../notificationsObjects/NotificationsListObject";
import NotificationsObject from "../notificationsObjects/NotificationsObject";


export function addNotification(tweetContent, loggedInUser) {
    let newNotificationsObject = new NotificationsObject("", Date.now(), "like", loggedInUser, tweetContent);
    const jsonNotificationsList = JSON.parse(localStorage.getItem("notificationsList"));
    const notificationsList = NotificationsListObject.fromJson(jsonNotificationsList);
    notificationsList.addNotification(newNotificationsObject);
    localStorage.setItem("notificationsList", JSON.stringify(notificationsList.notifications));
}