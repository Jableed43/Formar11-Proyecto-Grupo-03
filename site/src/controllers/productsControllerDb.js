const db = require('../database/models/product')
const { Op } = require('sequelize')

module.exports = {
    list: (req, res) => {
        let products = db.Product.findAll({
            include: ['subcategory']
        })

        let Tacos = db.Subcategory.findAll({
            where: {
                id: 1
            },
            include: [
                { association: 'products' }
            ]
        })

        let Burritos = db.Subcategory.findAll({
            where: {
                id: 2
            },
            include: [
                { association: 'products' }
            ]
        })

        let Quesadillas = db.Subcategory.findAll({
            where: {
                id: 3
            },
            include: [
                { association: 'products' }
            ]
        })

        let Entradas = db.Subcategory.findAll({
            where: {
                id: 4
            },
            include: [
                { association: 'products' }
            ]
        })

        let Platos = db.Subcategory.findAll({
            where: {
                id: 5
            },
            include: [
                { association: 'products' }
            ]
        })

        let Ensaladas = db.Subcategory.findAll({
            where: {
                id: 6
            },
            include: [
                { association: 'products' }
            ]
        })

        let Salsas = db.Subcategory.findAll({
            where: {
                id: 7
            },
            include: [
                { association: 'products' }
            ]
        })
        
        let Dulces = db.Subcategory.findAll({
            where: {
                id: 8
            },
            include: [
                { association: 'products' }
            ]
        })
        
        let Gaseosas = db.Subcategory.findAll({
            where: {
                id: 9
            },
            include: [
                { association: 'products' }
            ]
        })
        
        let Jugos = db.Subcategory.findAll({
            where: {
                id: 10
            },
            include: [
                { association: 'products' }
            ]
        })
        
        let Aguas = db.Subcategory.findAll({
            where: {
                id: 11
            },
            include: [
                { association: 'products' }
            ]
        })

        Promise.all([products, Tacos, Burritos, Quesadillas, Entradas, Platos, Ensaladas, Salsas, Dulces, Gaseosas, Jugos, Aguas])
            .then(([products, Tacos, Burritos, Quesadillas, Entradas, Platos, Ensaladas, Salsas, Dulces, Gaseosas, Jugos, Aguas]) => {
                res.render('admin', {
                    products: products,
                    Tacos: Tacos[0].products,
                    Burritos: Burritos[0].products,
                    Quesadillas: Quesadillas[0].products,
                    Entradas: Entradas[0].products,
                    Platos: Platos[0].products,
                    Ensaladas: Ensaladas[0].products,
                    Salsas: Salsas[0].products,
                    Dulces: Dulces[0].products,
                    Gaseosas: Gaseosas[0].products,
                    Jugos: Jugos[0].products,
                    Aguas: Aguas[0].products,
                })
                    .catch(err => {
                        console.log('Error al requerir los géneros de la base de datos ' + err)
                    })
            }
        },
    detail: (req, res) => {
        db.Product.findByPK(+req.params.id)
            .then(producto => {
                res.render('detalle-producto', { products: producto })
            })
            .catch(err => {
                console.log('Error al requerir los géneros de la base de datos ' + err)
            })
    }
}