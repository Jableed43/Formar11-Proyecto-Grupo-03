const { check, body } = require('express-validator');

// Validaciones Register
const validacionesRegister = [
    check('name').notEmpty().withMessage('Debes completar el campo de nombre completo'),
    check('email')
    .isEmail().withMessage('Debes completar un email válido').bail()
    .notEmpty().withMessage('Debes completar el campo de email'),
    check('p1').notEmpty().withMessage('Debes completar el campo de contraseña y las contraseñas deben coincidir'),
    check('p2').notEmpty().withMessage('Debes completar el campo de contraseña y las contraseñas deben coincidir'),
    body('p2').custom((value,{req}) => {
        if(value !== req.body.p1){
            return false
        }
        return true
    }).withMessage('La verificación de la contraseña no coincide'),

    check('sexo').notEmpty().withMessage('Debes seleccionar una opción'),
    check('provincia').notEmpty().withMessage('Debes seleccionar una opción')
]

module.exports = validacionesRegister