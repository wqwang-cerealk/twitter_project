const dao = require('./profile-dao');

module.exports = (app) => {
    const findCurrentProfile = (req, res) =>
        dao.findCurrentProfile()
            .then(profile => res.json(profile));

    const findProfileById = (req, res) => {
        dao.findProfileById(req.params.id)
            .then(profile => res.json(profile));
    }

    const updateProfile = (req, res) => {
        // dao.findProfileById(req.params.id)
        //     .then(profile => {
        //         req.body;
        //         }
        //         // console.log("this is request body:", req.body);
        //         // console.log("===========this is the newOwner", newOwner)
        //         dao.updateProfile(newOwner)
        //             .then(status => res.json(status));
        //     })
        const newProfile = req.body;
        console.log("In service==========", req.body);
        return dao.updateProfile(newProfile)
            .then(status => res.send(status));
    }
    app.get('/rest/profile', findCurrentProfile);
    app.put('/rest/profile', updateProfile);
}