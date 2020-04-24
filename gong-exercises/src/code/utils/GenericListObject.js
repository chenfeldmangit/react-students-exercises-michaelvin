
export default class GenericListObject {

    constructor(objectType, list) {
        this.objectType = objectType;
        this.list = list;
    }

    static fromJson(json) {
        return json.length === 0 ? new GenericListObject([]) : new GenericListObject(json.map(listObject => (this.objectType).fromJson(listObject)));
    }

    addToList(object) {
        this.list.splice(0, 0, object);
    }

    getNotificationById(objectId) {
        return this.list.filter(object => object.objectId === objectId)[0];
    }

    removeNotificationById(notificationId) {
        this.list = this.list.filter(object => object.objectId !== objectId);
    }
}