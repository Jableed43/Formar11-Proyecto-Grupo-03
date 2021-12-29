var express = require('express');
var router = express.Router();
let adminController = require ('../controllers/adminControllerDb')
const adminUserCheck = require('../middlewares/adminUserCheck')
// let multer = require('multer');
let upload = require ('../middlewares/multerProducts')
let validacionesProducts = require ('../middlewares/validProducts')


/* GET home page. */
router.get('/', adminUserCheck, adminController.admin);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', adminUserCheck, adminController.create); 
router.post('/create', upload.single('images'), validacionesProducts, adminController.store);  

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', adminUserCheck, adminController.edit); 
router.put('/edit/:id', upload.single('images'), validacionesProducts, adminController.update); 

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', adminController.destroy); 

/* GET USERS */
router.get('/userlist', adminUserCheck, adminController.userlist);

module.exports = router;