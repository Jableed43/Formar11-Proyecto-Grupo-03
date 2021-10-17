var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsControllers')
const multer = require('multer');


/* GET detalle de productos */
router.get('/detail', productsController.detalle);

module.exports = router;
