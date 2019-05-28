const mongoose = require('mongoose');
const { Schema } = mongoose;

const rutasSchema = new Schema({
    name: String,
    origin: Object,
    destination: Object,
    price: Number,
    student: Number,
    waypoints: Array
});

module.exports = mongoose.model('Ruta', rutasSchema);