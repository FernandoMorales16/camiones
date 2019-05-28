const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const UsersSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true  },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now}
});

UsersSchema.pre('save', function(next){
    bcrypt.genSalt(10).then(salts => {
        bcrypt.hash(this.password, salts).then(hash => {
            this.password = hash;
            next();
        }).catch(error => next(error));
    }).catch(error => next(error));
});

module.exports = mongoose.model('Users', UsersSchema);