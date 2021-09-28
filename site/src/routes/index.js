var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexControllers')

/* GET home page. */
router.get('/', indexController.home);

/* GET contacto */
router.get('/contacto', indexController.contacto);

/* GET menu */
router.get('/menu', indexController.menu);

/* GET beneficios */
router.get('/beneficios', indexController.beneficios);

module.exports = router;
