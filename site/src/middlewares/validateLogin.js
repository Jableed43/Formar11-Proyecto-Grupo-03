const {body, check} = require('express-validator');
// const users = require('../data/users.json');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

module.exports = [    
    check('email')
    .notEmpty().withMessage('Debes ingresar tu email').bail()
    .isEmail().withMessage('Email inválido'),

    check('password')
    .notEmpty().withMessage('Debes ingresar tu contraseña'),

    body('password')
        .custom((value,{req}) => {
            console.log(req.body)
            return db.User.findOne({
                where :{
                    email : req.body.email
                }
            }).then(user => {
                if(!user || !bcrypt.compareSync(req.body.password,user.password)){
                    return Promise.reject()
                }
            }).catch( () => Promise.reject('Email o contraseña incorrectos'))
    })
]



// module.exports = [
//     check('email')
//     .isEmail().withMessage('Debes ingresar un email válido').bail()
//     .custom (user=>{
//         if(!user){
//         alert('Usuario no existente')
//         }withMessage('El usuario no está regisrado')
//    })
//     .custom((value,{req}) => {
//             let user = users.find(user => user.email === value && bcrypt.compareSync(req.body.password,user.password));
//             if(user){
//                 return true
//             }else{
//                 return false
//             }
//         }).withMessage('Email o contraseña incorrectos')
// ]