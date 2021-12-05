const dao = require('./tweet-dao');

module.exports = (app) => {

    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then(tweets => res.json(tweets));


    const postNewTweet = (req, res) => {
        console.log("==============================", req.body);
        const newTweet = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "verified": false,
            "handle": "ReacrJS",
            "time": "2h",
            "avatar-image": "https://avatarfiles.alphacoders.com/257/thumb-257106.png",
            "logo-image": "https://avatarfiles.alphacoders.com/257/thumb-257106.png",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
            "liked": false,
            ...req.body,
        }
        return dao.createTweet(newTweet)
            .then((insertedTweet) => res.json(insertedTweet));
    }




    const deleteTweet = (req, res) =>
        dao.deleteTweet(req.params.id)
            .then((status) => res.send(status));



    const findTweetById = (req, res) => {
        dao.findTweetById(req.params.id)
            .then(tweet => res.json(tweet));
    }

    const likeTweet = (req, res) => {
        // const resData = {
        //     success: false,
        //     tweet: {}
        // }
        // dao.findTweetById(req.params.id)
        //     .then(tweet => {
        //         if (!tweet || tweet.length === 0) {
        //             res.send(resData)
        //             return
        //         }
        //         tweet = tweet[0]
        //         console.log("whyyyyyyyyy",tweet);
        //         if (tweet.liked) {
        //             tweet.stats.likes--
        //         } else {
        //             tweet.stats.likes++
        //         }
        //         tweet.liked = !tweet.liked
        //
        //         console.log("++++++++++++++++++++++++++", tweet)
        //
        //         dao.updateTweet(tweet)
        //             .then(
        //                 (d) => {
        //                     console.log("after adding true:", tweet)
        //                     resData.success = true
        //                     resData.tweet = tweet
        //                     res.json(resData)
        //                 }
        //             )
        // .then(status => res.send(status));
        //         })
        // }
        return dao.findTweetById(req.params.id)
            .then(tweet => {
                // if (!tweet || tweet.length === 0) {
                //     return;
                // }
                // tweet = tweet[0]
                // console.log("===================", tweet.stats);
                if (tweet.liked) {
                    // console.log("=====================if liked", tweet.stats)
                    tweet.stats.likes--;
                } else {
                    // console.log("=================if not liked", tweet.stats)
                    tweet.stats.likes++;
                }
                tweet.liked = !tweet.liked
                // console.log("This is the tweet I found: ", tweet)
                dao.updateTweet(tweet)
                    .then(status => res.json(status));
                //             .then(status => res.send(status));
            })
    }


    app.get('/rest/tweets', findAllTweets);
    app.post('/rest/tweets', postNewTweet);
    app.delete('/rest/tweets/:id', deleteTweet);
    app.put('/rest/tweets/:id/like', likeTweet);
};