var express = require('express');
var router = express.Router();
let adminController = require ('../controllers/adminControllers')
const adminUserCheck = require('../middlewares/adminUserCheck')


/* GET home page. */
router.get('/', adminUserCheck, adminController.admin);

/* GET home page. */
router.get('/create', adminUserCheck, adminController.carga);

/* GET home page. */
router.get('/edit', adminUserCheck, adminController.edit);

module.exports = router;