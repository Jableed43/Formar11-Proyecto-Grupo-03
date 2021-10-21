var express = require('express');
var router = express.Router();
var usersControllers = require('../controllers/usersControllers')

/* POST login */
router.get('/login', usersControllers.login);
router.post('/login', usersControllers.login);

/* POST register */
router.get('/register', usersControllers.register);
router.post('/register', upload.single('image')
, usersControllers.create);

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


