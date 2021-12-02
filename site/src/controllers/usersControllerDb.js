const db = require('../database/models');
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')

module.exports = {
    // Acceso a vista login
    login: (req, res) => {
        res.render('users/login')
    },
    // Para loguear usuario por método POST
    processLogin: (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('users/login', {
                errores: errors.mapped(),
                data: req.body
            })
        } else {
            const { email, password, recordarme } = req.body;
            db.User.findOne({
                where: {
                    email: email.trim()
                }
            })
                .then((user) => {
                    if (user && bcrypt.compareSync(password.trim(), user.password)) {
                        req.session.userLogin = {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            avatar: user.avatar,
                            rol: user.id_rol
                        }
                        if (recordarme) {
                            res.cookie('tacopadoCookie', req.session.user, { maxAge: 1000 * 60 * 60 })

                        }
                        return res.redirect('/')
                    } else {
                        return res.render('users/login', {
                            errores: errors.mapped()
                        }
                        )
                    }
                })
                .catch((error) => {
                    res.send(error)
                })
        }
    },
// Destruir la session
logout: (req, res) => {
    req.session.destroy();
    if (req.cookies.recordarme) {
        res.cookie('tacopadoCookie', '', { maxAge: -1 })
    }
    res.redirect('/')
},

    // Acceso a vista Registro
    register: (req, res, next) => {
        let sexes = db.Sex.findAll()
        let provinces = db.Province.findAll()

        Promise.all(([sexes, provinces]))

            .then(([sexes, provinces]) => {
                return res.render('users/register', {
                    sexes,
                    provinces
                })
            })
            .catch(error => console.log(error))
    },
    // Para registrar usuario por método POST
    newUser: (req, res, next) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('users/register', {
                errores: errors.mapped(),
                old: req.body
            })
        } else {
            const { name, sexo, provincia, email, password } = req.body

            db.User.create({
                name,
                email,
                password: bcrypt.hashSync(password, 12),
                avatar: req.file ? req.file.filename : 'default-img.jpg',
                id_sex: sexo,
                id_province: provincia,
                id_rol: 2
            })
                .then(() => {
                    res.redirect('/')
                })
                .catch((error) => {
                    res.send(error)
                })
        }
    },
    // Acceder a carrito
    carrito: (req, res, next) => {
        res.render('users/carrito');
    },
    // Acceso a vista del perfil del usuario.
    profile: (req, res, next) => {
        db.User.findOne({
            where: {id: req.session.userLogin.id}
        })
            .then(user => {
                res.render('users/profile');
            })  
            .catch(error => console.log(error))      
     },
    // Acceso a vista de edición del perfil del usuario.
    edit: (req, res) => {

        let sexes = db.Sex.findAll()
        let provinces = db.Province.findAll()
        let user = db.User.findByPk(req.params.id)

        Promise.all(([user, sexes, provinces]))

            .then(([sexes, provinces]) => {
                return res.render('users/edit', {
                    user,
                    sexes,
                    provinces
                })
            })
            .catch(error => console.log(error))

    },
    // Modifica datos del perfil por metodo PUT
    update: (req, res, next) => {
        const { name, sexo, provincia, email, password } = req.body;

        let img = req.files[0] ? req.files[0].filename : undefined;

        db.User.update({
            name,
            email,
            password: bcrypt.hashSync(password, 12),
            avatar: req.file ? req.file.filename : 'default-img.jpg',
            id_sex: sexo,
            id_province: provincia,
            id_rol: 2
        },
            {
                where: {
                    id: req.params.id
                }
            })
            .then((result) => {
                res.redirect(`/users/profile)`)
            })
            .catch((error) => {
                res.send(error)
            })
    },
    // Delete - Delete one product from DB
    destroy: (req, res) => {

        db.User.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(result => {
                return res.redirect('/')
            })
            .catch((error) => {
                res.send(error)
            })
    }
}