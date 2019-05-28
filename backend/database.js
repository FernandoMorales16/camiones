const mongoose = require('mongoose');

const URL = 'mongodb://localhost/rutas_autobuses';

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;