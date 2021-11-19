var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsControllers')

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/* GET detalle de productos */
router.get('/detail/:id', productsController.detalle);

module.exports = router;
