
export default class TweetObject {
    constructor(tweetId, timestamp, userName, userId, userProfileImg, tweetContent, isLiked=false) {
        this.tweetId = tweetId === "" ? createNextTweetId() : tweetId;
        this.timestamp = timestamp;
        this.userName = userName;
        this.userId = userId;
        this.userProfileImg = userProfileImg;
        this.tweetContent = tweetContent;
        this.isLiked = isLiked;
    }

    static fromJson(json) {
        return new TweetObject(json.tweetId, json.timestamp, json.userName, json.userId, json.userProfileImg, json.tweetContent, json.isLiked);
    }
}

function createNextTweetId() {
    let nextTweetId = parseInt(localStorage.getItem("idEnumerator"), 10) + 1;
    localStorage.setItem("idEnumerator", nextTweetId.toString());
    return "#tweet-" + nextTweetId;
}