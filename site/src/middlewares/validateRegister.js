const { body, check } = require('express-validator');
const users = require('../data/users.json');

// Validación Register
module.exports = [
    check('name')
        .notEmpty().withMessage('Debes completar el campo de nombre completo').bail(),

    check('email')
        .notEmpty().withMessage('Debes completar el campo de email').bail()
        .isEmail().withMessage('Debes completar un email válido'),

    body('email')
        .custom(value  => {
            let user = users.find(user => user.email === value);
            if(user){
                return false
            }else{
                return true
            }
        }).withMessage('El email ya se encuentra registrado'),

    check('password')
        .notEmpty().withMessage('Debes completar el campo de contraseña').bail(),
        // .isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),

    body('p2')
        .custom((value,{req}) => {
            if(value !== req.body.password){
                return false
            }else{
                return true
            }
        }).withMessage('Las contraseñas no coinciden'),

    // check('sexo')
    //     .notEmpty().withMessage('Debes seleccionar una opción').bail(),
        
    check('provincia')
        .notEmpty().withMessage('Debes seleccionar una opción')
]


// agrego chequeo de email si ya fue registrado, es el tercero, body ('email') y agrego const users = require('../data/users.json'); arriba para leer la data

// desde userControler redireccione al home, pero no se carga el css no se por que

// con el registro deberian siempre iniciar sesion, chequear con el equipo si les parece bien así

// En el error del register.ejs cambie p1 por password
