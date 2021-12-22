const { check, body } = require('express-validator');

// Validaciones Register
const validacionesRegister = [
    check('name').notEmpty().withMessage('Debes completar el campo de nombre completo'),
    check('email')
    .isEmail().withMessage('Debes completar un email válido').bail()
    .notEmpty().withMessage('Debes completar el campo de email'),
    check('password').notEmpty().withMessage('Debes completar el campo de contraseña y las contraseñas deben coincidir'),
    check('password2').notEmpty().withMessage('Debes completar el campo de contraseña y las contraseñas deben coincidir'),
    body('password').custom((value,{req}) => {
        if(value !== req.body.password2){
            return false
        }
        return true
    }).withMessage('La verificación de la contraseña no coincide'),

    check('sexo').notEmpty().withMessage('Debes seleccionar una opción'),
    check('provincia').notEmpty().withMessage('Debes seleccionar una opción')
]

module.exports = validacionesRegister

