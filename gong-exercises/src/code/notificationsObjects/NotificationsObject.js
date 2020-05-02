import NotificationUserObject from './NotificationsUserObject';


export default class NotificationsObject {
    constructor(notificationId, timestamp, notificationType, users, notificationContent) {
        this.notificationId = notificationId === "" ? createNextNotificationId() : notificationId;
        this.timestamp = timestamp;
        this.notificationType = notificationType;
        this.users = users;
        // this.users = new NotificationUserObject(users);
        // this.users = NotificationUserObject.fromJson(users);
        this.notificationContent = notificationContent;
    }

    static fromJson(json) {
        return new NotificationsObject(json.notificationId, json.timestamp, json.notificationType, NotificationUserObject.fromJson(json.users), json.notificationContent);
    }
}

function createNextNotificationId() {
    let nextNotificationId = parseInt(localStorage.getItem("idEnumerator"), 10) + 1;
    localStorage.setItem("idEnumerator", nextNotificationId.toString());
    return "#notification-" + nextNotificationId;
}