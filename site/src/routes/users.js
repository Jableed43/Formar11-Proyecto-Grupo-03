var express = require('express');
var router = express.Router();
var usersControllers = require('../controllers/usersControllers')
const { BandwidthLimitExceeded } = require('http-errors');
const subir = require('../middlewares/multer')
const validate = require('../middlewares/validateRegister')
const userRegistered = require('../middlewares/userRegistered')
const guestUser = require('../middlewares/guestUser');
const validateRegister = require('../middlewares/validateRegister');

// Validaciones


/* POST login */
router.get('/login', guestUser, usersControllers.login)
router.post('/login', usersControllers.processLogin)

// Chequea si el usuario está logueado
router.get('/logueado', usersControllers.check)


/* POST register */
router.get('/register', usersControllers.register);
router.post('/register', validate, usersControllers.newUser);


/* GET carrito */
router.get('/carrito', usersControllers.carrito);

/* GET perfil */
router.get('/user/:id', usersControllers.perfil);

/* PUT editar */
router.get('/edit/:id', usersControllers.edit);
router.put('/edit/:id', usersControllers.update);

/* DELETE user */ 
router.delete('/delete/:id', usersControllers.destroy); 

module.exports = router;


