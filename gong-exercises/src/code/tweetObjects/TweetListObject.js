import TweetObject from "./TweetObject";


export default class TweetListObject {

    constructor(tweets) {
        this.tweets = tweets;
    }

    static fromJson(json) {
        return json.length === 0 ? new TweetListObject([]) : new TweetListObject(json.map(tweet => TweetObject.fromJson(tweet)));
    }

    addTweet(tweet) {
        this.tweets.splice(0, 0, tweet);
    }

    getTweetById(tweetId) {
        return this.tweets.filter(tweet => tweet.tweetId === tweetId)[0];
    }

    removeTweetById(tweetId) {
        this.tweets = this.tweets.filter(tweet => tweet.tweetId !== tweetId);
    }
}