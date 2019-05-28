const express = require('express');
const router = express.Router();

const ruta = require('../controllers/rutasController');

router.get('/', ruta.getRutas);
router.post('/', ruta.createRuta);
router.get('/:id', ruta.getRuta);

module.exports = router;