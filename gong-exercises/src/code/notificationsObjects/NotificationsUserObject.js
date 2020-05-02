

export default class NotificationUserObject {
    constructor(username, profileImgSrc) {
        this.username = username;
        this.profileImgSrc = profileImgSrc;
    }

    static fromJson(json) {
        return new NotificationUserObject(json.username, json.profileImgSrc);
    }
}