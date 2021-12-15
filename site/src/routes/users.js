var express = require('express');
var router = express.Router();
var usersControllers = require('../controllers/usersControllerDb')
const subir = require('../middlewares/multer')
const { BandwidthLimitExceeded } = require('http-errors');


const validateRegister = require('../middlewares/validateRegister');
const validateLogin = require('../middlewares/validateLogin');
const validateProfile = require('../middlewares/validateProfile');
const loggedUser = require('../middlewares/loggedUser');
const userLoginCheck = require('../middlewares/userLoginCheck');

/* POST login */
router.get('/login', loggedUser, usersControllers.login)
router.post('/login', validateLogin, usersControllers.processLogin)


/* POST register */
router.get('/register', loggedUser, usersControllers.register);
router.post('/register', subir.single('img'), validateRegister, usersControllers.newUser);

/* GET carrito */
router.get('/carrito', usersControllers.carrito);

/* GET perfil */
router.get('/profile', usersControllers.profile);


/* PUT editar */
router.get('/edit', usersControllers.edit);
router.put('/update', subir.single('img') ,validateProfile, usersControllers.update);

/* DELETE user */ 
router.delete('/delete/:id', usersControllers.destroy); 

router.get('/logout', usersControllers.logout)

module.exports = router;


