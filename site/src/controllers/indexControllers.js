const db = require('../database/models')
const { Op } = require('sequelize')

let controller = {
    home: (req, res, next) => {
        res.render('index');
    },
    contacto: (req, res, next) => {
        res.render('contacto');
    },
    menu: (req, res, next) =>{
        res.render('menu');
    },
    beneficios: (req, res, next) => {
        res.render('beneficios');
    }
}

module.exports = controller