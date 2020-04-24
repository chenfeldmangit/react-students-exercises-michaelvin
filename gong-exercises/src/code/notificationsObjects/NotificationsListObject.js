import NotificationsObject from "./NotificationsObject";


export default class NotificationsListObject {

    constructor(notifications) {
        this.notifications = notifications;
    }

    static fromJson(json) {
        return json.length === 0 ? new NotificationsListObject([]) : new NotificationsListObject(json.map(notification => NotificationsObject.fromJson(notification)));
    }

    addNotification(notification) {
        this.notifications.splice(0, 0, notification);
    }

    getNotificationById(notificationId) {
        return this.notifications.filter(notification => notification.notificationId === notificationId)[0];
    }

    removeNotificationById(notificationId) {
        this.notifications = this.notifications.filter(notification => notification.notificationId !== notificationId);
    }
}