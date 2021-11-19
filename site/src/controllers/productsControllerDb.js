const db = require('../database/models/index')
const {Op} = require ('sequelize')

module.exports = {
    list: (req,res) => {
        db.products.findAll()
        .then(productos => {
            res.render('admin', {products : productos})
        })
        .catch(err=> {
            console.log('Error al requerir los géneros de la base de datos '+ err)
        })
    },
    detail: (req,res) => {
        db.products.findByPK(+req.params.id)
        .then(producto => {
            res.render('detalle-producto', {products : producto})
        })
        .catch(err=> {
            console.log('Error al requerir los géneros de la base de datos '+ err)
        })
    }
}