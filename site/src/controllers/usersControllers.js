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
    perfil: (req, res) => {
        const {id} = req.params
        const userProfile = users.find(e => e.id === +id)
        res.render('users/user', {userProfile});
    },
    // Para registrar usuario por método POST
    newUser: (req, res) => {
        const errors = validationResult(req)
    
        if (errors.isEmpty()) {
        
            const user = {
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                provincia: req.body.provincia
            }
        
            users.push(user)
        
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))
        
            res.redirect(`user/${user.id}`);
        } else {
            
            res.render('users/register',  {errors: errors.mapped(), old: req.body})
        }
    },
    // newUser: (req,res, next) => {
    //     let errors = validationResult(req);
    //     if (errors.errors.length > 0) {
    //     res.render('users/register', 
    //     {errors: errors.mapped(),
    //      old: req.body})
    //     } else {
    //         let user = req.body
    //         user.id = users[users.length - 1].id + 1;
    //         user.password = bcrypt.hashSync(req.body.password, 10);
    //         user.img = req.file ? req.file.filename : 'default-img.jpg'
    //         users.push(user)
    //         fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))
    //         res.redirect(`user/${user.id}`);
    //     }
       
    // },
    login: (req, res) => {
        res.render('users/login')
      },
    processLogin: (req, res) => {

        const userToLogin = users.find(user => user.email === req.body.email)

        if (userToLogin && bcrypt.compareSync(req.body.password, userToLogin.contraseña)) {
            req.session.loggedUser = userToLogin
            if (req.body.recordarme !== undefined) {
                res.cookie('recordarme', userToLogin.email, {maxAge: 20*1000} )
            }
            res.redirect('/')
        } else {
            res.render('users/login', {errors: {msg: 'Email o contraseña incorrecta'}})
        }
    },
    check: (req, res) => {
        if (req.session.loggedUser !== undefined) {
            res.send(`El usuario logueado es ${req.session.loggedUser.email}`)
        } else {
            res.send('Usuario no logueado')
        }
    },
    logout: (req, res) => {

        req.session.destroy()
        if (req.cookies.recordarme !== undefined) {
            res.cookie('recordarme', '', {maxAge: -1})
        }
        res.redirect('/')
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

module.exports = controller

// processRegister: (req, res) => {
//     const errors = validationResult(req)

//     if (errors.isEmpty()) {
    
//         const usuario = {
//             nombre: req.body.nombre,
//             email: req.body.email,
//             contraseña: bcrypt.hashSync(req.body.password, 10),
//             pais: req.body.pais
//         }
    
//         usuariosRegistrados.push(usuario)
    
//         fs.writeFileSync(ruta, JSON.stringify(usuariosRegistrados, null, 2))
    
//         res.redirect('/')
//     } else {
        
//         res.render('user/register',  {errors: errors.mapped(), old: req.body})
//     }
// },

// newUser: (req,res, next) => {
//     let errors = validationResult(req);
//     if (errors.errors.length > 0) {
//     res.render('users/register', 
//     {errors: errors.mapped(),
//      old: req.body})
//     } else {
//         let user = req.body
//         user.id = users[users.length - 1].id + 1;
//         user.img = req.file ? req.file.filename : 'default-img.jpg'
//         users.push(user)
//         fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))
//         res.redirect(`user/${user.id}`);
//     }

// },