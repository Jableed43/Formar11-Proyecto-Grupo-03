var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsControllerDb')
const multer = require('multer');


/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.list); 

/* GET detalle de productos */
router.get('/detail/:id', productsController.detail);





module.exports = router;
