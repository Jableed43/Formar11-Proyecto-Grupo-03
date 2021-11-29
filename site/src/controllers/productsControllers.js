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
    },
	    // Para modificar un producto
		// update: (req,res,next) => {
		// 	let errors = validationResult(req);
		// 	// Para validar la imagen
		// 	if (req.fileValidationError) {
		// 		let img = {
		// 			param : "img",
		// 			msj: "Solo se permiten imágenes"
		// 		}
		// 		errors.errors.push(img)
		// 	}
		// 	if (!errors.isEmpty()) {
		// 	res.render('users/register', 
		// 	{errors: errors.mapped(),
		// 	 old: req.body})
		// 	} else {
		// 		const userUpdate = users.find(e => e.id === +req.params.id)
		// 		const {name,email,password,sexo,provincia,avatar} = req.body 
		// 		if (userUpdate) {
		// 			userUpdate.name = name
		// 			userUpdate.email = email
		// 			userUpdate.password = password
		// 			userUpdate.sexo = sexo
		// 			userUpdate.provincia = provincia
		// 			userUpdate.avatar = file
			
		// 			fs.writeFileSync(usersFilePath, JSON.stringify(users))
		// 			res.redirect(`/users/edit/${req.params.id}`)
		// 	}}
		// },
	// Para borrar un producto del listado
	destroy : (req, res) => {
		products = users.filter(product => product.id !== +req.params.id)
		fs.writeFileSync(usersFilePath, JSON.stringify(products))
		res.redirect('/')
	}
}



module.exports = controller