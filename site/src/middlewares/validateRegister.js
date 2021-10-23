const { body } = require('express-validator');

// Validación Register
module.exports = [
    body('name')
        .notEmpty().withMessage('Debes completar el campo de nombre completo').bail(),

    body('email')
        .notEmpty().withMessage('Debes completar el campo de email').bail()
        .isEmail().withMessage('Debes completar un email válido'),

    body('password')
        .notEmpty().withMessage('Debes completar el campo de contraseña').bail()
        .isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),

    body('sexo')
        .notEmpty().withMessage('Debes seleccionar una opción').bail(),
        
    body('provincia')
        .notEmpty().withMessage('Debes seleccionar una opción')
]