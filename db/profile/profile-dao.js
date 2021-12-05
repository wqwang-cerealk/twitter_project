const model = require('./profile-model');

const findCurrentProfile = () => model.find();
const findProfileById = (id) => model.findById(id);
const updateProfile = (profile) => model.updateOne({_id:profile._id}, {$set: profile});

module.exports = {
    findCurrentProfile, findProfileById, updateProfile
}