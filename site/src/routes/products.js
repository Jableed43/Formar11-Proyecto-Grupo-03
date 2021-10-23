var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsControllers')
const multer = require('multer');


/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/* GET detalle de productos */
router.get('/detail/:id', productsController.detalle);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/', productsController.store); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/edit/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 



module.exports = router;
