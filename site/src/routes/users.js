var express = require('express');
var router = express.Router();
var usersControllers = require('../controllers/usersControllers')
const subir = require('../middlewares/multer')
const validacionesRegister = require('../middlewares/validRegister');



/* POST login */
router.get('/login', loggedUser, usersControllers.login)
router.post('/login', validateLogin, usersControllers.processLogin)


/* POST register */
router.get('/register', loggedUser, usersControllers.register);
router.post('/register',subir.single('img'), validacionesRegister, usersControllers.newUser);

/* GET carrito */
router.get('/carrito', usersControllers.carrito);

/* GET perfil */
router.get('/user', userLoginCheck,usersControllers.perfil);

/* PUT editar */
router.get('/edit/:id', usersControllers.edit);
router.put('/edit/:id', usersControllers.update);

/* DELETE user */ 
router.delete('/delete/:id', usersControllers.destroy); 

router.get('/logout', usersControllers.logout)

module.exports = router;


