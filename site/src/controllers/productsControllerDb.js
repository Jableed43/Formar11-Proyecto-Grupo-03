const db = require('../database/models')
const { Op } = require('sequelize')

module.exports = {
    // Para listar productos en vista Products
    list: (req, res) => {
        let products = db.Product.findAll({
            include: {
                association: 'subcategories',
                include: [{ all: true }]}

        })
        let Tacos = db.Subcategories.findAll({
            where: {
                id: 1
            },
            include: [
                { association: 'products' }
                
            ]
        })
        let Burritos = db.Subcategories.findAll({
            where: {
                id: 2
            },
            include: [
                { association: 'products' }
            ]
        })

        let Quesadillas = db.Subcategories.findAll({
            where: {
                id: 3
            },
            include: [
                { association: 'products' }
            ]
        })

        let Entradas = db.Subcategories.findAll({
            where: {
                id: 4
            },
            include: [
                { association: 'products' }
            ]
        })

        let Platos = db.Subcategories.findAll({
            where: {
                id: 5
            },
            include: [
                { association: 'products' }
            ]
        })

        let Ensaladas = db.Subcategories.findAll({
            where: {
                id: 6
            },
            include: [
                { association: 'products' }
            ]
        })

        let Salsas = db.Subcategories.findAll({
            where: {
                id: 7
            },
            include: [
                { association: 'products' }
            ]
        })

        let Dulces = db.Subcategories.findAll({
            where: {
                id: 8
            },
            include: [
                { association: 'products' }
            ]
        })

        let Gaseosas = db.Subcategories.findAll({
            where: {
                id: 9
            },
            include: [
                { association: 'products' }
            ]
        })

        let Jugos = db.Subcategories.findAll({
            where: {
                id: 10
            },
            include: [
                { association: 'products' }
            ]
        })

        let Aguas = db.Subcategories.findAll({
            where: {
                id: 11
            },
            include: [
                { association: 'products' }
            ]
        })

        Promise.all([Tacos, Burritos, Quesadillas, Entradas, Platos, Ensaladas, Salsas, Dulces, Gaseosas, Jugos, Aguas])
            .then(([Tacos, Burritos, Quesadillas, Entradas, Platos, Ensaladas, Salsas, Dulces, Gaseosas, Jugos, Aguas]) => {
                res.render('products', {
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
            })
            .catch(err => {
                console.log('Error al requerir los géneros de la base de datos ' + err)
            })
    },
    detail: (req, res) => {
        // Para entrar al detalle del producto
        db.Product.findByPk(req.params.id)
            .then(producto => {
                res.render('products/detalle-producto', { products: producto })
            })
            .catch(err => {
                console.log('Error al requerir los géneros de la base de datos ' + err)
            })
    },
    search: (req, res) => {
        db.Product.findAll({
            association: 'subcategory',
            include: [{ all: true }],
                where: {
                    [Op.or]: [{
                            title: {
                                [Op.like]: `%${req.query.keywords.toLowerCase().trim()}%`
                            }
                        },
                        {
                            id: {
                                [Op.like]: `%${req.query.keywords.toLowerCase().trim()}%`
                            }
                        },
                    ]
                },
            })
            .then(product => {
                res.render('products/results', {
                    title: 'Resultado de busqueda',
                    product
                })
            })
            .catch(err => {
                console.log('Error al requerir los productos de la base de datos ' + err)
            })
    },
}