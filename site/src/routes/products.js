var express = require('express');
var router = express.Router();
let productsControllerDb = require('../controllers/productsControllerDb')
const multer = require('multer');


/*** GET ALL PRODUCTS ***/ 
router.get('/', productsControllerDb.list); 

/* GET detalle de productos */
router.get('/detail/:id', productsControllerDb.detail);

/* GET resultados de búsqueda */ 
router.get('/results', productsControllerDb.search); 

module.exports = router;
