var express = require('express');
var router = express.Router();
var usersControllers = require('../controllers/usersControllers')
const subir = require('../middlewares/multer')
const { check } = require('express-validator');
const { BandwidthLimitExceeded } = require('http-errors');

// Validaciones
const validacionesRegister = [
    check('name').notEmpty().withMessage('Debes completar el campo de nombre completo'),
    check('email')
    .isEmail().withMessage('Debes completar un email válido').bail()
    .notEmpty().withMessage('Debes completar el campo de email'),
    check('password').notEmpty().withMessage('Debes completar el campo de contraseña'),
    check('sexo').notEmpty().withMessage('Debes seleccionar una opción'),
    check('provincia').notEmpty().withMessage('Debes seleccionar una opción'),
]

/* POST login */
router.get('/login', usersControllers.login);
router.post('/login', usersControllers.login);

/* POST register */
router.get('/register', usersControllers.register);
router.post('/register',subir.single('img'), validacionesRegister, usersControllers.newUser);

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


