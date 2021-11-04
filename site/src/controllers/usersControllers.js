const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')

// const usersFilePath = path.join(__dirname, '../data/users.json');
// let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersFilePath = path.join(__dirname,'..','data','users.json')
let users = JSON.parse(fs.readFileSync(usersFilePath,'utf-8'));


const controller = {
    // Para mostrar vista registro
    register: (req, res, next) => {
        res.render('users/register');
    },
    perfil : (req,res) => {
        let users = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/users.json'),'utf-8'));
        return res.render('users/user',{
            user : users.find(user => user.id === req.session.userLogin.id)
        })
    },
    newUser : (req, res, next) => {
        const errors = validationResult(req)
    
        if (errors.isEmpty()) {
        
            let user = {
                id : users.length !=0 ? users[users.length - 1].id + 1 : 1,
                name: req.body.name.trim(),
                email: req.body.email,
                password : body.bcrypt.hashSync(req.body.password,10),
                sexo: req.body.sexo,
                img,
                provincia: req.body.provincia,
                rol: 'user'

            }
        
            users.push(user)
        
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))

        
            res.redirect(`user/${user.id}`)
        } else {
            
            res.render('users/register',  {errors: errors.mapped(), old: req.body})
        }
    },
    // Para registrar usuario por método POST    
    // newUser: (req,res, next) => {
    //     // let errors = validationResult(req);
    //     // if (errors.errors.length > 0) {
    //     // res.render('users/register', 
    //     // {errors: errors.mapped(),
    //     //  old: req.body})
    //     // } else {
    //         let user = req.body
    //         user.id = users[users.length - 1].id + 1;
    //         user.img = req.file ? req.file.filename : 'default-img.jpg'
    //         users.push(user)
    //         fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))
    //         res.redirect(`user/${user.id}`);
    //     // }
       
    // },    

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
    update: (req,res,next) => {
		const userUpdate = users.find(e => e.id === +req.params.id)
		const {name,email,password,sexo,provincia,avatar} = req.body 
		if (userUpdate) {
			userUpdate.name = name
			userUpdate.email = email
			userUpdate.password = password
			userUpdate.sexo = sexo
			userUpdate.provincia = provincia
    
			fs.writeFileSync(usersFilePath, JSON.stringify(users))
			res.redirect(`/users/user/${req.params.id}`)
		} else {
			res.redirect('/')
        }
    },
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