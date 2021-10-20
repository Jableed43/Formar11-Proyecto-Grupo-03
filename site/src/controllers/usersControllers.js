const fs = require('fs');
const path = require('path');

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
        let user = req.body
        user.id = Math.floor((Math.random() * 10) + 1)
        user.img = req.file ? req.file.filename : 'default-img.jpg'
        users.push(user)
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))
        res.redirect(`user/${user.id}`);
    },    
    login: (req, res, next) => {
        res.render('users/login');
    },
    create: (req,res,next) => {
        let usuario = {
            id: req.body.id,
            name: req.body.edad,
            email: req.body.email,
            password: req.body.password,
            sexo: req.body.sexo,
            provincia: req.body.provincia,
            img: req.file.img
        }
        let usuarios = JSON.parse(fs.readFileSync('users.json', {encoding: 'utf-8'}));
        usuarios.push(usuario);
        let usuarioJSON = JSON.stringify(usuarios);
        fs.writeFilySync('users.json',usuarioJSON)
        res.redirect(`/users/user/${req.params.id}`)
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