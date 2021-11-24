let owner = require('../data/profile.json');

module.exports = (app) => {
    const getCurrentProfile = (req, res) => {
        res.json(owner);
    };

    app.get('/api/profile', getCurrentProfile);

    const updateCurrentProfile = (req, res) => {
        const newOwner = [{
            "handle": "alex",
            "profilePicture": "https://i1.sndcdn.com/avatars-000432717039-nhdrhy-t240x240.jpg",
            "bannerPicture": "https://forevergeek.com/wp-content/media/2007/05/The-Bioscope-STAR-WARS-BANNER-for-site-1024x281.jpg",
            "dateJoined": "7/2017",
            "numberOfTweets": "49",
            "followingCount": "312",
            "followersCount": "180",
            ...req.body,
        }];
        owner = newOwner;
        console.log("In updateCurrentProfile in profile-service======new Owner", newOwner);
        console.log("In updateCurrentProfile in profile-service======new Owner", owner);
        return res.json(owner);
        res.sendStatus(200);
    };

    app.post('/api/profile', updateCurrentProfile);
}