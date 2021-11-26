const {check} = require('express-validator');
const users = require('../data/users.json');
const bcrypt = require('bcryptjs');

module.exports = [
    check('email')
    .isEmail().withMessage('Debes ingresar un email válido').bail()
    .custom (user=>{
        if(!user){
        alert('Usuario no existente')
        }withMessage('El usuario no está regisrado')
   })
    .custom((value,{req}) => {
            let user = users.find(user => user.email === value && bcrypt.compareSync(req.body.password,user.password));
            if(user){
                return true
            }else{
                return false
            }
        }).withMessage('Email o contraseña incorrectos')
]