var express = require('express');
var router = express.Router();
let adminController = require ('../controllers/adminControllerDb')
const adminUserCheck = require('../middlewares/adminUserCheck')
// let multer = require('multer');
let upload = require ('../middlewares/multerProducts')
let validacionesProducts = require ('../middlewares/validProducts')
let validacionesProductsEdit = require ('../middlewares/validProductsEdit')


/* GET home page. */
router.get('/', adminUserCheck, adminController.admin);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', adminUserCheck, adminController.create); 
router.post('/create', upload.single('images'), validacionesProducts, adminController.store);  

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', adminUserCheck, adminController.edit); 
router.put('/edit/:id', upload.single('images'), validacionesProductsEdit, adminController.update); 

/* GET busqueda de productos */
router.get('/results', adminController.adminsearch); 

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', adminController.destroy); 

/* GET lista de usuarios */
router.get('/userlist', adminUserCheck, adminController.userlist);
/*** DELETE de lista de usuarios***/ 
router.delete('userlist/delete/:id', adminController.destroyUser); 

module.exports = router;