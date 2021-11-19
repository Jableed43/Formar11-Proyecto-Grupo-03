const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')
const { fileFilter } = require('../middlewares/multer')
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
    // Root - Show all products
	index: (req, res) => {
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
		res.render('products', {products, Tacos, Burritos, Quesadillas, Entradas, Platos, Ensaladas, Salsas, Dulces, Gaseosas, Jugo, Agua})
	},

    detalle:(req, res, next) => {
        const {id} = req.params
		const productDetail = products.find(e => e.id === +id)
        res.render('products/detalle-producto', {productDetail})
    }
}



module.exports = controller