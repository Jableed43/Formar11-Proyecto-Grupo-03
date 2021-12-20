var express = require('express');
var router = express.Router();
let adminController = require ('../controllers/adminControllerDb')
const adminUserCheck = require('../middlewares/adminUserCheck')
// let multer = require('multer');
let upload = require ('../middlewares/multerProducts')
let validacionesProducts = require ('../middlewares/validProducts')


/* GET home page. */
router.get('/', adminController.admin);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', adminController.create); 
router.post('/create', upload.single('images'), validacionesProducts, adminController.store);  

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', adminController.edit); 
router.put('/edit/:id', upload.single('images'), validacionesProducts, adminController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', adminController.destroy); 

module.exports = router;