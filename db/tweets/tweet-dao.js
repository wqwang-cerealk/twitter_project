const model = require('./tweet-model');

const findAllTweets = () => model.find();
const createTweet = (tweet) => model.create(tweet);
const deleteTweet = (id) => model.deleteOne({_id:id});
const findTweetById = (id) => model.findById(id);
const updateTweet = (tweet) => model.updateOne({_id: tweet._id},{$set: tweet});
// const likeATweet = (tweet) => model.updateOne({_id: tweet._id}, {$set : {stats: {likes : tweet.stats.likes + 1}}});
// const unlikeTweet = (tweet) => model.updateOne({_id: tweet._id}, {$set: {stats : {likes : tweet.stats.likes - 1}}});

module.exports = {
    findAllTweets, createTweet, deleteTweet, updateTweet, findTweetById
}