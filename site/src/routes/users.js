var express = require('express');
var router = express.Router();
var usersControllers = require('../controllers/usersControllers')
const subir = require('../middlewares/multer')
const { BandwidthLimitExceeded } = require('http-errors');
const validateRegister = require('../middlewares/validateRegister')

// Validaciones


/* POST login */
router.get('/login', usersControllers.login);
router.post('/login',usersControllers.processLogin, usersControllers.login);
router.post('/login',usersControllers.check);

// Chequea si el usuario está logueado
router.get('/logueado', usersControllers.check)


/* POST register */
router.get('/register', usersControllers.register);
router.post('/register',subir.single('img'), validateRegister, usersControllers.newUser);


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


