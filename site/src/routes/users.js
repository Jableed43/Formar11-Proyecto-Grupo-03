var express = require('express');
var router = express.Router();
var usersControllers = require('../controllers/usersControllers')
const { check } = require('express-validator');
const { BandwidthLimitExceeded } = require('http-errors');
const subir = require('../middlewares/multer')

const validateRegister = require('../middlewares/validateRegister');
const validateLogin = require('../middlewares/validateLogin');
const loggedUser = require('../middlewares/loggedUser');
const userLoginCheck = require('../middlewares/userLoginCheck');


// Validaciones
// const validacionesRegister = [
//     check('name').notEmpty().withMessage('Debes completar el campo de nombre completo'),
//     check('email')
//     .isEmail().withMessage('Debes completar un email válido').bail()
//     .notEmpty().withMessage('Debes completar el campo de email'),
//     check('password').notEmpty().withMessage('Debes completar el campo de contraseña'),
//     check('sexo').notEmpty().withMessage('Debes seleccionar una opción'),
//     check('provincia').notEmpty().withMessage('Debes seleccionar una opción'),
//     check('img').custom((value, { req }) => {
//         let acceptedExtensions = ['.jpg', '.jpeg', '.png'];
//         let fileExtension = path.extname(file.orginalname);
//         if (req.file) {
//         if (!acceptedExtensions.includes(fileExtension)) {
//             throw new Error (`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`)
//         }}
//     })

// ]

/* POST login */
router.get('/login', loggedUser, usersControllers.login)
router.post('/login', validateLogin, usersControllers.processLogin)


/* POST register */
router.get('/register', loggedUser, usersControllers.register);
router.post('/register',subir.single('img'), validateRegister, usersControllers.newUser);

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


