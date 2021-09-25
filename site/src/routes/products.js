var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsControllers')

/* GET detalle de productos */
router.get('/detail', productsController.detalle);

module.exports = router;
