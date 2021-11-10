const { check } = require('express-validator');

// Validación Register
module.exports = [
    check('name')
        .notEmpty().withMessage('Debes completar el campo de nombre completo').bail(),

    check('email')
        .notEmpty().withMessage('Debes completar el campo de email').bail()
        .isEmail().withMessage('Debes completar un email válido'),

    check('password')
        .notEmpty().withMessage('Debes completar el campo de contraseña').bail(),
        // .isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),

    // check('sexo')
    //     .notEmpty().withMessage('Debes seleccionar una opción').bail(),
        
    check('provincia')
        .notEmpty().withMessage('Debes seleccionar una opción')
]

// module.exports = [
//     check('name')
//         .notEmpty().withMessage('Debes completar el campo de nombre completo'),
//     check('email')
//     .isEmail().withMessage('Debes completar un email válido').bail()
//     .notEmpty().withMessage('Debes completar el campo de email'),
//     check('password')
//         .notEmpty().withMessage('Debes completar el campo de contraseña'),
//     check('sexo')
//         .notEmpty().withMessage('Debes seleccionar una opción'),
//     check('provincia')
//         .notEmpty().withMessage('Debes seleccionar una opción'),
// ]