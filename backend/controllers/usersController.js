const User = require('../models/usersModels');

const usersCtrl = {};

usersCtrl.getUsers = async (req, res, next) => {
    const users = await User.find()
    res.json(users);
};

usersCtrl.createUser = async (req, res, next) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    await user.save();
    res.json(user);
};

usersCtrl.getUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};

usersCtrl.editUser = async (req, res, next) => {
    const { id } = req.params;
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({status: 'Usuario Actualizado'});
};

usersCtrl.deleteUser = async (req, res, next) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({status: 'Usuario Eliminado'})
};

module.exports = usersCtrl;