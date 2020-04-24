
export default class NotificationsObject {
    constructor(notificationId, timestamp, notificationType, users, notificationContent) {
        this.notificationId = notificationId;
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

class NotificationUserObject {
    constructor(name, profileImg) {
        this.name = name;
        this.profileImg = profileImg;
    }

    static fromJson(json) {
        return new NotificationUserObject(json.name, json.profileImg);
    }
}