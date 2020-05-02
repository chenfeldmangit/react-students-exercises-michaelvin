
export default class TweeterConfig {

    static config() {
        TweeterConfig.createTweetIdEnumerator();
        TweeterConfig.createTweetListForTesting();
        TweeterConfig.createTweetList();
        TweeterConfig.createNotificationsListForTesting();
        TweeterConfig.createNotificationsList();
        TweeterConfig.createUsersList();

    }

    static getUserProfile() {
        localStorage.setItem("userProfile", JSON.stringify({
            name: "shmulikknoll",
            id: "@GuildHead",
            bio: "some long and old bio",
            location: "Tel-Aviv",
            backgroundImgSrc: "../../resources/picture.jpg",
            profileImgSrc: "../../resources/shmul.webp"
        }));
        return JSON.parse(localStorage.getItem("userProfile"));
    }

    static createTweetIdEnumerator() {
        let idEnumerator = localStorage.getItem("idEnumerator");
        if (idEnumerator == null) {
            localStorage.setItem("idEnumerator", "0");
        }
    }

    static createTweetList() {
        let tweetList = localStorage.getItem("tweetList");
        if (tweetList == null) {
            localStorage.setItem("tweetList", JSON.stringify([]));
        }
    }

    static createNotificationsList() {
        let notificationsList = localStorage.getItem("notificationsList");
        if (notificationsList == null) {
            localStorage.setItem("notificationsList", JSON.stringify([]));
        }
    }

    static createTweetListForTesting() {
        let tweetList = localStorage.getItem("tweetList");
        if (tweetList == null) {
            localStorage.setItem("tweetList", JSON.stringify([
                {
                    tweetId: "#tweet-100",
                    timestamp: Date.now(),
                    userName: "Adi",
                    userId: "@Adi",
                    userProfileImg: "../../resources/shmul.webp",
                    tweetContent: "something",
                    isLiked: false
                },
                {
                    tweetId: "#tweet-101",
                    timestamp: Date.now(),
                    userName: "Michael",
                    userId: "@Michael",
                    userProfileImg: "../../resources/shmul.webp",
                    tweetContent: "something else",
                    isLiked: false
                }
            ]));
        }
    }

    static createNotificationsListForTesting() {
        let notificationsList = localStorage.getItem("notificationsList");
        if (notificationsList == null) {
            localStorage.setItem("notificationsList", JSON.stringify([
                {
                    notificationId: "#notification-100",
                    notificationType: "like",
                    timestamp: Date.now(),
                    users: {name: "Sundar Pichai", profileImg: "../../resources/virus.svg"},
                    // users: [{name: "Sundar Pichai", profileImg: "../../resources/virus.svg"}, {name: "Satya Nadella", profileImg: "../../resources/virus.svg"}],
                    notificationContent: "something"
                },
                {
                    notificationId: "#notification-101",
                    notificationType: "follow",
                    timestamp: Date.now(),
                    users: {name: "Dan Abramov", profileImg: "../../resources/virus.svg"},
                    notificationContent: "something"
                },
                {
                    notificationId: "#notification-102",
                    notificationType: "follow",
                    timestamp: Date.now(),
                    users: {name: "Mark Zuckerberg", profileImg: "../../resources/virus.svg"},
                    // users: [{name: "Mark Zuckerberg", profileImg: "../../resources/virus.svg"}, {name: "Satya Nadella", profileImg: "../../resources/virus.svg"}],
                    notificationContent: "something"
                }
            ]));
        }
    }

    static createUsersList() {
        let usersList = localStorage.getItem("usersList");
        if (usersList == null) {
            localStorage.setItem("usersList", JSON.stringify([
                {
                    username: "Michael",
                    password: "pass",
                    id: "@NextGuildHead",
                    bio: "some long bio",
                    location: "Tel-Aviv",
                    backgroundImgSrc: "../../resources/picture.jpg",
                    profileImgSrc: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_400x400.jpg"
                },
                {
                    username: "shmulikknoll",
                    password: "123456",
                    id: "@GuildHead",
                    bio: "some long and old bio",
                    location: "Tel-Aviv",
                    backgroundImgSrc: "../../resources/picture.jpg",
                    profileImgSrc: "../../resources/shmul.webp"
                }
            ]));
        }
    }
}