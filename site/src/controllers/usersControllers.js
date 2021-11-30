const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const { fileFilter } = require('../middlewares/multer')
const usersFilePath = path.join(__dirname,'..','data','users.json')
let users = JSON.parse(fs.readFileSync(usersFilePath,'utf-8'));


const controller = {
    // Para mostrar vista registro
    register: (req, res, next) => {
        res.render('users/register');
    },
    // Para mostrar vista perfil
    // perfil: (req, res) => {
    //     const {id} = req.params
    //     const userProfile = users.find(e => e.id === +id)
    //     res.render('users/user', {userProfile});
    // },
    // Falta decidir si utilizar este o el otro, consultar al equipo
    perfil: (req, res) => {
        let users = JSON.parse(fs.readFileSync(usersFilePath,'utf-8'));
        const userProfile = users.find(user => user.id === req.session.userLogin.id)
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
            let  {name, sexo, provincia, email, password} = req.body

            let user={
            id : users[users.length - 1].id + 1,
            rol : "client",
            name, 
            email, 
            password : bcrypt.hashSync(req.body.password, 10),          
            img : req.file ? req.file.filename : 'default-img.jpg',
            sexo, 
            provincia}

            users.push(user)
        
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))
            
        return res.redirect('/') 
        } 
        
        // else {
        //     let user = req.body
        //     user.rol = "client";
        //     user.id = users[users.length - 1].id + 1;
        //     user.p1 = bcrypt.hashSync(req.body.p1, 10)
        //     user.img = req.file ? req.file.filename : 'default-img.jpg'
        //     users.push(user)
        
        //     fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))

        
        //     res.redirect(`user/${user.id}`)
        // }
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
                img : user.img,
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
        res.render('users/edit', {
            userEdit
        })
    },
    // Para modificar datos de usuario
    update : (req,res) => {

            let user = users.find(user => user.id === req.session.userLogin.id);
            let password = req.body.password ? bcrypt.hashSync(req.body.password,10) : user.password;
            
            let userModified = {
                id : user.id,
                name : req.body.name,
                email : user.email,
                password : password,
                sexo : req.body.sexo,
                provincia : req.body.provincia,
                img : req.file ? req.file.filename : user.img,
                rol : user.rol
                //me borra nombre, provincia, sexo e imagen.
            }

            if(req.file){
                if(fs.existsSync(path.join(__dirname,'../public/images/users/' + user.img)) && user.img != "default.png"){
                    fs.unlinkSync(path.join(__dirname,'../public/images/users/' + user.img))

                }
            }
    
            let usersModified = users.map(user => user.id === req.session.userLogin.id ? userModified : user);
    
            fs.writeFileSync(path.join(__dirname,'../data/users.json'),JSON.stringify(usersModified,null,3),'utf-8');
    
            req.session.userLogin = {
                id : user.id,
                name : userModified.name,
                sexo : userModified.sexo,
                provincia : userModified.provincia,
                img : userModified.img,
                rol : user.rol
            }
    
            return res.redirect('/')
        },

    // Para borrar información de usuario
    destroy : (req, res) => {
        let user = users.find(user => user.id === +req.params.id);

        let usersModified = users.filter(user => user.id !== +req.params.id);

        fs.writeFileSync(path.join(__dirname,'..','data','users.json'),JSON.stringify(usersModified,null,3),'utf-8');

        return res.redirect('/')    
    }

}

module.exports = controller;




