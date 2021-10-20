const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers')
const { check } = require('express-validator');

// Validator
const validate = [
    check('user')
    .notEmpty().withMessage('Debes ingresar un usuario registrado')
]

/* POST login */
router.get('/login', usersControllers.login);
router.post('/login', usersControllers.login);
router.post('/login', usersControllers.processLogin);

/* POST register */
router.get('/register', usersControllers.register);
router.post('/register', usersControllers.create);

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


