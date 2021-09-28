var express = require('express');
var router = express.Router();
var usersControllers = require('../controllers/usersControllers')

/* GET login */
router.get('/login', usersControllers.login);

/* GET register */
router.get('/register', usersControllers.register);

/* GET carrito */
router.get('/carrito', usersControllers.carrito);

module.exports = router;
