const db = require('../database/models');
const { validationResult } = require('express-validator')
// const bcrypt = require('bcrypt');
const bcrypt = require('bcryptjs')

module.exports = {
    // Para mostrar vista de login
    login: (req, res) => {
        res.render('/users/login')
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
    // Para mostrar vista registro
    register: (req, res, next) => {
        res.render('users/register');
    },
    // Para registrar usuario por método POST
    newUser: (req, res, next) => {
        let errors = validationResult(req);
        // Para validar la imagen
        if (req.fileValidationError) {
            let img = {
                param: "img",
                msj: "Solo se permiten imágenes"
            }
            errors.errors.push(img)
            const { name, sexo, provincia, email, password } = req.body

            db.User.create({
                name,
                email,
                password: bcrypt.hashSync(password, 12),
                avatar: req.file ? req.file.filename : 'default-img.jpg',
                sexo,
                provincia,
                rol: 2
            })
                .then(() => {
                    res.redirect('/users')
                })
                .catch((error) => {
                    res.send(error)
                })
        } else {
            return res.render('users/register', {
                errores: errors.mapped(),
                old: req.body
            })
        }
    },
    // Acceder a carrito
    carrito: (req, res, next) => {
        res.render('users/carrito');
    },
    // Acceder a perfil personal
    profile: (req, res) => {
        res.render('users/profile')
    },
    // Destruir la session
    logout: (req, res) => {
        req.session.destroy();
        if (req.cookies.recordarme) {
            res.cookie('tacopadoCookie', '', { maxAge: -1 })
        }
        res.redirect('/')
    },
    // Update - Form to edit
    edit: (req, res) => {

        db.User.findByPk(req.params.id)
            .then((user) => {
                res.render("users/edit", {
                    user
                })
            })
            .catch((error) => {
                res.send(error)
            })

    },
    // Update - Method to update
    update: (req, res, next) => {
        
        const { name, sexo, provincia, email, password } = req.body;

        let img = req.files[0] ? req.files[0].filename : undefined;

        db.User.update({
            name,
            email,
            password: bcrypt.hashSync(password, 12),
            avatar: req.file ? req.file.filename : 'default-img.jpg',
            sexo,
            provincia
        },
            {
                where: {
                    id: req.params.id
                }
            })
            .then((result) => {
                res.redirect(`/users/user)`)
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