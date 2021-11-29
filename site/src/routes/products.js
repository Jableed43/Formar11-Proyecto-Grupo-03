var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsControllers')

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/* GET detalle de productos */
router.get('/detail/:id', productsController.detalle);

/* PUT editar */
// router.get('/edit/:id', productsController.edit);
// router.put('/edit/:id', productsController.update);

/* DELETE user */ 
router.delete('/delete/:id', productsController.destroy); 

module.exports = router;
