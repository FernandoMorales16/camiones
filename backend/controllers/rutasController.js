const Ruta = require('../models/rutasModels');

const rutaCtrl = {};

rutaCtrl.getRutas = async (req, res, next) => {
    const rutas = await Ruta.find();
    res.json(rutas);
};

rutaCtrl.createRuta = async (req, res, next) => {
    const ruta = new Ruta({
        name: req.body.name,
        origin: req.body.origin,
        destination: req.body.destination,
        price: req.body.price,
        student: req.body.student,
        waypoints: req.body.waypoints
    });
    await ruta.save();
    res.json(ruta);
};

rutaCtrl.getRuta = async (req, res, next) => {
    const { id } = req.params;
    const ruta = await Ruta.findById(id);
    res.json(ruta);
};

module.exports = rutaCtrl;