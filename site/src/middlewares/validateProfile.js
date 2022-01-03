const { body, check } = require('express-validator');
const db = require('../database/models');
const path = require('path');
// const users = require('../data/users.json');

// Validación Register
module.exports = [
    check('name')
        .isLength({min : 2}).withMessage('Mínimo 2 caracteres'),          

    check('password').optional({checkFalsy: true})
        .matches(/^(?=.[A-Za-z])(?=.*\d)(?=.*[@$!*%#?&])[A-Za-z\d@$!%*#?&]{8,16}$/)
        .withMessage('Mínimo 8 letras, y debe contener mayúscula, un número y un carácter especial.'),

    body('password2').optional({checkFalsy: true})
        .custom((value,{req}) => {
            if(value !== req.body.password){
                return false
            }else{
                return true
            }
        }).withMessage('Las contraseñas no coinciden'),

    body('img')
        .custom((value, { req }) => {
            let file = req.file;
            let extensionesValidas = ['.jpg', '.jpeg', '.png', '.gif'];
            if (!file) {
                null;
            } else {
                let fileExtension = path.extname(file.originalname);
                if (!extensionesValidas.includes(fileExtension)) {
                    throw new Error('Solo se aceptan archivos JPG, JPEG, PNG y GIF');
                }
            }
            return true;
	})

]


