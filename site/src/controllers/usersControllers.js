const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')

const usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

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
    newUser: (req,res, next) => {
        let errors = validationResult(req);
        if (errors.errors.length > 0) {
        res.render('users/register', 
        {errors: errors.mapped(),
         old: req.body})
        } else {
            let user = req.body
            user.id = users[users.length - 1].id + 1;
            user.img = req.file ? req.file.filename : 'default-img.jpg'
            users.push(user)
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))
            res.redirect(`user/${user.id}`);
        }

    },     
    login: (req, res, next) => {
        res.render('users/login');
    },
    processLogin: (req, res, next) => {
        const userToLogin = users.find(user => user.email === res.body.email)

        if (userToLogin && userToLogin.contraseña === req.body.password) {
            req.session.loggedUser = userToLogin
            res.send('Usuario logueado')
        } else {
            res.render('user/login', {errors: {msg: 'Email o contraseña incorrecta'}})
        }
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