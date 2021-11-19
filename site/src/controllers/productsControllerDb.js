const db = require('../database/models/product')
const {Op} = require ('sequelize')

module.exports = {
    list: (req,res) => {
        db.Product.findAll()
        .then(productos => {
            let Tacos = products.filter(element => element.subcategory === "Tacos")
		    let Burritos = products.filter(element => element.subcategory === "Burritos")
		    let Quesadillas = products.filter(element => element.subcategory === "Quesadillas")
	    	let Entradas = products.filter(element => element.subcategory === "Entradas")
		    let Platos = products.filter(element => element.subcategory === "Platos")
	    	let Ensaladas = products.filter(element => element.subcategory === "Ensaladas")
	    	let Salsas = products.filter(element => element.subcategory === "Salsas")
	    	let Dulces = products.filter(element => element.subcategory === "Dulces")
	    	let Gaseosas = products.filter(element => element.subcategory === "Gaseosas")
	    	let Jugo = products.filter(element => element.subcategory === "Jugo")
	    	let Agua = products.filter(element => element.subcategory === "Agua")
            res.render('admin', {products : productos})
        })
        .catch(err=> {
            console.log('Error al requerir los géneros de la base de datos '+ err)
        })
    },
    detail: (req,res) => {
        db.Product.findByPK(+req.params.id)
        .then(producto => {
            res.render('detalle-producto', {products : producto})
        })
        .catch(err=> {
            console.log('Error al requerir los géneros de la base de datos '+ err)
        })
    }
}