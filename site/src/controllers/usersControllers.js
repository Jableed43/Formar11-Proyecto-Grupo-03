const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const { fileFilter } = require('../middlewares/multer')
// const usersFilePath = path.join(__dirname, '../data/users.json');
// let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersFilePath = path.join(__dirname,'..','data','users.json')
let users = JSON.parse(fs.readFileSync(usersFilePath,'utf-8'));


const controller = {
    // Para mostrar vista registro
    register: (req, res, next) => {
        res.render('users/register');
    },
    // Para mostrar vista perfil
    perfil: (req, res) => {
        const {id} = req.params
        const userProfile = users.find(e => e.id === +id)
        res.render('users/user', {userProfile});
    },
    // Para registrar usuario por método POST
    newUser: (req,res, next) => {
        let errors = validationResult(req);
        // Para validar la imagen
        if (req.fileValidationError) {
            let img = {
                param : "img",
                msj: "Solo se permiten imágenes"
            }
            errors.errors.push(img)
        }
        if (!errors.isEmpty()) {
        res.render('users/register', 
        {errors: errors.mapped(),
         old: req.body})
        } else {
            let user = req.body
            user.rol = "client";
            user.id = users[users.length - 1].id + 1;
            user.p1 = bcrypt.hashSync(req.body.p1, 10)
            user.img = req.file ? req.file.filename : 'default-img.jpg'
            users.push(user)
        
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))

        
            res.redirect(`user/${user.id}`)
        }
    },    
    login: (req, res, next) => {
        res.render('users/login');
    }, 

    processLogin : (req,res) => {
        let errors = validationResult(req);
        
        if(errors.isEmpty()){
            let user = users.find(user => user.email === req.body.email);
            req.session.userLogin = {
                id : user.id,
                name : user.name,
                avatar : user.avatar,
                rol : user.rol
            }
            if(req.body.recordarme){
                res.cookie('tacopadoCookie',req.session.userLogin,{maxAge : 1000 * 60})
            }
            return res.redirect('/')
        }else{
            return res.render('users/login',{
                errores : errors.mapped()
            })
        }
    },
    logout : (req,res) =>{
        req.session.destroy(function() {
            res.clearCookie('tacopadoCookie', { path: '/' });
            res.redirect('/')
          });
    },


    carrito: (req, res, next) => {
        res.render('users/carrito');
    }, 
    edit: (req,res,next) => {
        const userEdit = users.find(e => e.id === +req.params.id)
        res.render(`users/edit/${req.params.userEdit.id}`, {userEdit})
    },
    // Para modificar datos de usuario
    update: (req,res,next) => {
        let errors = validationResult(req);
        // Para validar la imagen
        if (req.fileValidationError) {
            let img = {
                param : "img",
                msj: "Solo se permiten imágenes"
            }
            errors.errors.push(img)
        }
        if (!errors.isEmpty()) {
        res.render('users/register', 
        {errors: errors.mapped(),
         old: req.body})
        } else {
            const userUpdate = users.find(e => e.id === +req.params.id)
            const {name,email,password,sexo,provincia,avatar} = req.body 
            if (userUpdate) {
                userUpdate.name = name
                userUpdate.email = email
                userUpdate.password = password
                userUpdate.sexo = sexo
                userUpdate.provincia = provincia
                userUpdate.avatar = file
        
                fs.writeFileSync(usersFilePath, JSON.stringify(users))
                res.redirect(`/users/edit/${req.params.id}`)
        }}
    },
    // Para borrar información de usuario
    destroy : (req, res) => {
        users = users.filter(p => p.id !== +req.params.id)
        fs.writeFileSync(usersFilePath, JSON.stringify(users))
        res.redirect('/')
    }

}

module.exports = controller;




// profile : (req,res) => {
//     let users = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/users.json'),'utf-8'));
//     return res.render('users/profile',{
//         user : users.find(user => user.id === req.session.userLogin.id)
//     })
// },