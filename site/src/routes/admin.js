var express = require('express');
var router = express.Router();
let adminController = require ('../controllers/adminControllers')


/* GET home page. */
router.get('/', adminController.admin);

/* GET home page. */
router.get('/create', adminController.carga);

/* GET home page. */
router.get('/edit', adminController.edit);

module.exports = router;